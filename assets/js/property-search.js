(function () {
  "use strict";

  var INDEX_URL = "/properties/data/index.json";
  var STATIONS_URL = "/properties/data/transit-stations.json";

  var DISTRICTS = ["苓雅區", "三民區", "前鎮區", "新興區", "鼓山區", "左營區", "楠梓區", "鳳山區", "前金區", "鹽埕區", "岡山區"];
  var CATEGORIES = ["分租套房", "獨立套房", "整層住家", "透天", "店面", "辦公室"];

  var state = {
    mode: "district", // "district" | "transit"
    districts: new Set(),
    categories: new Set(),
    onlyAvailable: true,
    maxRent: null,
    keyword: "",
    sortBy: "available_first",
    // transit mode
    line: "紅線",
    stationSearch: "",
    stationCode: "R8",
    radiusKm: 1.5
  };

  var allProperties = [];
  var allStations = [];
  var map = null;
  var mapLayers = null;

  function text(v) {
    return v == null ? "" : String(v);
  }

  function haversineMeters(lat1, lon1, lat2, lon2) {
    var R = 6371000;
    var toRad = function (d) { return d * Math.PI / 180; };
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function makeEl(tag, cls, txt) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (txt != null) el.textContent = text(txt);
    return el;
  }

  function initMap() {
    var mapEl = document.getElementById("ps-map");
    if (!mapEl || typeof L === "undefined" || map) return;
    try {
      map = L.map("ps-map").setView([22.6138, 120.3047], 13);
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri"
      }).addTo(map);
      mapLayers = L.layerGroup().addTo(map);
    } catch (e) {
      if (window.console) console.warn("Map init skipped", e);
    }
  }

  function getFilteredStations() {
    var q = state.stationSearch.trim().toLowerCase();
    return allStations.filter(function (s) {
      var lineOk = state.line === "ALL" || s.line.indexOf(state.line) !== -1;
      var textOk = !q || s.name.toLowerCase().indexOf(q) !== -1 || s.code.toLowerCase().indexOf(q) !== -1;
      return lineOk && textOk;
    });
  }

  function populateStations() {
    var sel = document.getElementById("ps-station-select");
    if (!sel) return;
    var list = getFilteredStations();
    sel.replaceChildren();
    if (!list.length) {
      var emptyOpt = makeEl("option", "", "無符合站點");
      emptyOpt.value = "";
      sel.appendChild(emptyOpt);
      return;
    }
    list.forEach(function (s) {
      var opt = makeEl("option", "", s.code + " " + s.name + "（" + s.line + "）");
      opt.value = s.code;
      sel.appendChild(opt);
    });
    if (list.some(function (s) { return s.code === state.stationCode; })) {
      sel.value = state.stationCode;
    } else {
      state.stationCode = list[0].code;
      sel.value = state.stationCode;
    }
  }

  function renderChips() {
    var dBox = document.getElementById("ps-district-chips");
    if (dBox) {
      dBox.replaceChildren();
      DISTRICTS.forEach(function (d) {
        var count = allProperties.filter(function (p) {
          return p.district === d && (!state.onlyAvailable || p.availableCount > 0);
        }).length;
        var btn = makeEl("button", "ps-chip" + (state.districts.has(d) ? " is-selected" : ""), d + " (" + count + ")");
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (state.districts.has(d)) state.districts.delete(d);
          else state.districts.add(d);
          renderAll();
        });
        dBox.appendChild(btn);
      });
    }

    var cBox = document.getElementById("ps-category-chips");
    if (cBox) {
      cBox.replaceChildren();
      CATEGORIES.forEach(function (c) {
        var count = allProperties.filter(function (p) {
          return p.category === c && (!state.onlyAvailable || p.availableCount > 0);
        }).length;
        var btn = makeEl("button", "ps-chip" + (state.categories.has(c) ? " is-selected" : ""), c + " (" + count + ")");
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (state.categories.has(c)) state.categories.delete(c);
          else state.categories.add(c);
          renderAll();
        });
        cBox.appendChild(btn);
      });
    }
  }

  function getFilteredProperties() {
    var st = allStations.find(function (s) { return s.code === state.stationCode; });
    var maxMeters = state.radiusKm * 1000;
    var q = state.keyword.trim().toLowerCase();

    var list = allProperties.map(function (p) {
      var distMeters = null;
      if (state.mode === "transit" && st && typeof p.lat === "number" && typeof p.lng === "number") {
        distMeters = haversineMeters(st.lat, st.lng, p.lat, p.lng);
      }
      return Object.assign({}, p, { distMeters: distMeters });
    });

    list = list.filter(function (p) {
      if (state.onlyAvailable && (!p.availableCount || p.availableCount <= 0)) return false;
      if (state.maxRent && p.minRent > state.maxRent) return false;
      if (state.categories.size > 0 && !state.categories.has(p.category)) return false;

      if (state.mode === "district") {
        if (state.districts.size > 0 && !state.districts.has(p.district)) return false;
        if (q) {
          var hay = [p.name, p.district, p.category, p.publicLocation].concat(p.keywords || []).join(" ").toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
      } else {
        if (p.distMeters == null || p.distMeters > maxMeters) return false;
      }
      return true;
    });

    if (state.mode === "transit") {
      list.sort(function (a, b) { return a.distMeters - b.distMeters || a.minRent - b.minRent; });
    } else if (state.sortBy === "rent_asc") {
      list.sort(function (a, b) { return a.minRent - b.minRent || b.availableCount - a.availableCount; });
    } else {
      list.sort(function (a, b) { return b.availableCount - a.availableCount || a.minRent - b.minRent; });
    }

    return { station: st, items: list };
  }

  function makeCard(item) {
    var card = makeEl("article", "property-listing-card");
    var media = makeEl("div", "property-listing-card__media");

    if (item.coverImage) {
      var img = document.createElement("img");
      img.src = item.coverImage;
      img.alt = item.name;
      img.loading = "lazy";
      img.decoding = "async";
      media.appendChild(img);
    }
    media.appendChild(makeEl("span", "property-listing-card__photo-label", item.photoLabel || item.category));

    var body = makeEl("div", "property-listing-card__body");
    body.appendChild(makeEl("p", "property-listing-card__location", item.district + " ｜ " + item.publicLocation));
    body.appendChild(makeEl("h3", "property-listing-card__title", item.name));
    body.appendChild(makeEl("p", "property-listing-card__rent", item.rentLabel));

    var availText = item.availableCount > 0
      ? "目前可洽詢 " + item.availableCount + " 間：" + (item.availableRooms || []).join("、")
      : "目前無空房（可洽詢候補）";
    body.appendChild(makeEl("p", "property-listing-card__availability", availText));

    if (item.distMeters != null) {
      var m = Math.round(item.distMeters);
      var walkMin = Math.max(1, Math.ceil(m / 75));
      body.appendChild(makeEl("span", "ps-distance-badge", "距車站約 " + m + " m（步行約 " + walkMin + " 分）"));
    }

    var cta = makeEl("a", "property-listing-card__cta", "查看房源");
    cta.href = item.detailUrl;
    body.appendChild(cta);

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function updateMap(station, items) {
    if (!map || !mapLayers || typeof L === "undefined" || state.mode !== "transit") return;
    mapLayers.clearLayers();
    if (!station) return;

    var color = station.line.indexOf("紅") !== -1 ? "#e11d48"
      : station.line.indexOf("橘") !== -1 ? "#ea580c"
      : station.line.indexOf("輕軌") !== -1 ? "#16a34a" : "#2563eb";

    L.circle([station.lat, station.lng], {
      radius: state.radiusKm * 1000,
      color: color,
      fillColor: color,
      fillOpacity: 0.08,
      weight: 2
    }).addTo(mapLayers);

    L.circleMarker([station.lat, station.lng], {
      radius: 9,
      color: "#ffffff",
      weight: 2,
      fillColor: color,
      fillOpacity: 1
    }).bindPopup("<strong>" + station.code + " " + station.name + "</strong>").addTo(mapLayers);

    var bounds = [[station.lat, station.lng]];
    items.forEach(function (item) {
      if (typeof item.lat !== "number" || typeof item.lng !== "number") return;
      bounds.push([item.lat, item.lng]);
      L.circleMarker([item.lat, item.lng], {
        radius: 7,
        color: "#ffffff",
        weight: 2,
        fillColor: "#10b981",
        fillOpacity: 0.95
      }).bindPopup("<strong>" + item.name + "</strong><br>" + item.rentLabel + "<br><a href=\"" + item.detailUrl + "\">查看詳情</a>").addTo(mapLayers);
    });

    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 });
    } else {
      map.setView([station.lat, station.lng], 14);
    }
    setTimeout(function () { map.invalidateSize(); }, 50);
  }

  function renderAll() {
    renderChips();

    var districtPane = document.getElementById("ps-pane-district");
    var transitPane = document.getElementById("ps-pane-transit");
    if (districtPane) districtPane.hidden = state.mode !== "district";
    if (transitPane) transitPane.hidden = state.mode !== "transit";

    document.querySelectorAll("[data-ps-mode]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-ps-mode") === state.mode);
    });

    var res = getFilteredProperties();
    var container = document.getElementById("ps-results");
    var summary = document.getElementById("ps-summary");
    if (summary) {
      var totalRooms = res.items.reduce(function (acc, item) { return acc + (item.availableCount || 0); }, 0);
      summary.textContent = "符合條件：" + res.items.length + " 棟物件（可租空房 " + totalRooms + " 間）";
    }

    if (container) {
      container.replaceChildren();
      if (!res.items.length) {
        container.appendChild(makeEl("div", "ps-empty", "目前沒有符合條件的物件，請放寬篩選條件或關閉「僅看有空房」。"));
      } else {
        res.items.forEach(function (item) { container.appendChild(makeCard(item)); });
      }
    }

    if (state.mode === "transit") {
      initMap();
      updateMap(res.station, res.items);
    }
  }

  function bindEvents() {
    document.querySelectorAll("[data-ps-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.mode = btn.getAttribute("data-ps-mode");
        renderAll();
      });
    });

    var onlyAvail = document.getElementById("ps-only-available");
    if (onlyAvail) {
      onlyAvail.checked = state.onlyAvailable;
      onlyAvail.addEventListener("change", function () {
        state.onlyAvailable = onlyAvail.checked;
        renderAll();
      });
    }

    var maxRentEl = document.getElementById("ps-max-rent");
    if (maxRentEl) {
      maxRentEl.addEventListener("input", function () {
        var v = parseInt(maxRentEl.value, 10);
        state.maxRent = isNaN(v) || v <= 0 ? null : v;
        renderAll();
      });
    }

    var kwEl = document.getElementById("ps-keyword");
    if (kwEl) {
      kwEl.addEventListener("input", function () {
        state.keyword = kwEl.value;
        renderAll();
      });
    }

    var sortEl = document.getElementById("ps-sort");
    if (sortEl) {
      sortEl.addEventListener("change", function () {
        state.sortBy = sortEl.value;
        renderAll();
      });
    }

    var lineEl = document.getElementById("ps-line-select");
    if (lineEl) {
      lineEl.addEventListener("change", function () {
        state.line = lineEl.value;
        populateStations();
        renderAll();
      });
    }

    var stSearchEl = document.getElementById("ps-station-search");
    if (stSearchEl) {
      stSearchEl.addEventListener("input", function () {
        state.stationSearch = stSearchEl.value;
        populateStations();
        renderAll();
      });
    }

    var stSelEl = document.getElementById("ps-station-select");
    if (stSelEl) {
      stSelEl.addEventListener("change", function () {
        state.stationCode = stSelEl.value;
        renderAll();
      });
    }

    var radRange = document.getElementById("ps-radius-range");
    var radLabel = document.getElementById("ps-radius-label");
    if (radRange) {
      radRange.addEventListener("input", function () {
        state.radiusKm = parseFloat(radRange.value);
        if (radLabel) radLabel.textContent = state.radiusKm.toFixed(1) + " 公里";
        renderAll();
      });
    }

    document.querySelectorAll("[data-ps-radius]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.radiusKm = parseFloat(btn.getAttribute("data-ps-radius"));
        if (radRange) radRange.value = state.radiusKm;
        if (radLabel) radLabel.textContent = state.radiusKm.toFixed(1) + " 公里";
        renderAll();
      });
    });
  }

  Promise.all([
    fetch(INDEX_URL, { cache: "no-cache" }).then(function (r) { return r.json(); }),
    fetch(STATIONS_URL, { cache: "no-cache" }).then(function (r) { return r.json(); })
  ]).then(function (results) {
    allProperties = (results[0] && results[0].properties) || [];
    allStations = results[1] || [];
    bindEvents();
    populateStations();
    renderAll();
  }).catch(function (err) {
    if (window.console) console.error("房源搜尋資料載入失敗", err);
  });
}());
