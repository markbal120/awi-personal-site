(function () {
  "use strict";

  var DEFAULT_LINE_URL = "https://lin.ee/741U2pz";

  function text(v) {
    return v == null ? "" : String(v);
  }

  function escapeHtml(value) {
    return text(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function getParams() {
    var sp = new URLSearchParams(window.location.search);
    var rawSlug = (sp.get("slug") || "").trim();
    var slug = /^[a-z0-9-]+$/.test(rawSlug) ? rawSlug : "";
    var typeId = (sp.get("type") || "").trim();
    return { slug: slug, typeId: typeId };
  }

  function formatFloors(roomNumbers) {
    if (!Array.isArray(roomNumbers) || !roomNumbers.length) return "";
    var floors = [];
    roomNumbers.forEach(function (rn) {
      var str = text(rn);
      var m = str.match(/(\d)\d{2}$/);
      var f = m ? (m[1] + "F") : "";
      if (f && floors.indexOf(f) === -1) floors.push(f);
    });
    return floors.join("、");
  }

  function showError(msg) {
    var root = document.getElementById("detail-root");
    if (!root) return;
    root.innerHTML = '<section class="p-section"><div class="p-wrap">' +
      '<div class="p-notice">' + escapeHtml(msg) + '</div>' +
      '<div class="p-actions" style="margin-top:16px;"><a class="p-btn p-btn-primary" href="/properties/">返回房源搜尋</a></div>' +
      '</div></section>';
  }

  function renderSingleUnit(property) {
    document.title = text(property.name) + "｜喬居房源";
    var lineBase = property.lineUrl || DEFAULT_LINE_URL;
    var lineHref = lineBase + "?text=" + encodeURIComponent("您好，我想詢問【" + text(property.name) + "】現況與預約看屋");
    var statusText = property.status || (property.isAvailable === false ? "目前已出租" : "招租中・可預約");
    var isAvail = property.isAvailable !== false;

    var specs = [];
    specs.push({ k: "地點", v: property.publicLocation || property.address || property.area || "詳情請洽 LINE" });
    if (property.category) specs.push({ k: "類型", v: property.category });
    if (property.suiteArea || property.areaSize) specs.push({ k: "坪數／格局", v: property.suiteArea || property.areaSize });
    if (property.buildingFloors) specs.push({ k: "樓層", v: property.buildingFloors });
    specs.push({ k: "月租", v: property.rentSummary || property.rent || "洽詢確認" });
    if (property.deposit) specs.push({ k: "押金", v: property.deposit });

    var photos = Array.isArray(property.photos) ? property.photos : [];
    var galleryHtml = photos.length
      ? photos.map(function (p, i) {
          return '<a class="siwei-gallery-item" href="' + escapeHtml(p.src) + '" target="_blank" rel="noopener">' +
            '<img src="' + escapeHtml(p.src) + '" alt="' + escapeHtml(p.alt || property.name) + '" loading="lazy">' +
            '<span>' + escapeHtml(p.caption || ("照片 " + (i + 1))) + '</span></a>';
        }).join("")
      : '<div class="p-empty" style="grid-column:1/-1;text-align:center;">照片整理中，歡迎直接透過 LINE 預約現場看屋。</div>';

    var introHtml = Array.isArray(property.intro) && property.intro.length
      ? '<ul style="line-height:1.8;">' + property.intro.map(function (line) { return '<li>' + escapeHtml(line) + '</li>'; }).join("") + '</ul>'
      : '';

    var eqHtml = "";
    if (property.roomEquipment) {
      var groups = [];
      if (Array.isArray(property.roomEquipment.furniture) && property.roomEquipment.furniture.length) {
        groups.push({ title: "家具／格局配備", items: property.roomEquipment.furniture });
      }
      if (Array.isArray(property.roomEquipment.appliances) && property.roomEquipment.appliances.length) {
        groups.push({ title: "家電／設施配備", items: property.roomEquipment.appliances });
      }
      if (groups.length) {
        eqHtml = '<section class="p-section"><div class="p-wrap"><h2>配備與設施</h2><div class="p-grid">' +
          groups.map(function (g) {
            return '<article class="p-card siwei-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(g.title) +
              '</h3><ul>' + g.items.map(function (it) { return '<li>' + escapeHtml(it) + '</li>'; }).join("") +
              '</ul></div></article>';
          }).join("") + '</div></div></section>';
      }
    }

    var termsNotes = [property.rentNote, property.rentTermsNote, property.managementFeeNote, property.parkingNote]
      .filter(Boolean).map(function (n) { return '<p class="p-note">' + escapeHtml(n) + '</p>'; }).join("");

    var root = document.getElementById("detail-root");
    root.innerHTML =
      '<section class="p-hero"><div class="p-wrap">' +
        '<span class="siwei-card-badge ' + (isAvail ? "is-available" : "") + '">' + escapeHtml(statusText) + '</span>' +
        '<p class="p-eyebrow">' + escapeHtml([property.area, property.category].filter(Boolean).join(" ｜ ")) + '</p>' +
        '<h1>' + escapeHtml(property.name) + '</h1>' +
        '<div class="p-meta-grid">' +
          specs.map(function (s) { return '<div class="p-fact"><b>' + escapeHtml(s.k) + '</b><p>' + escapeHtml(s.v) + '</p></div>'; }).join("") +
        '</div>' +
        '<div class="p-actions">' +
          '<a class="p-btn p-btn-primary" href="' + lineHref + '" target="_blank" rel="noopener">透過 LINE 預約看屋</a>' +
          '<a class="p-btn" href="/properties/">返回房源搜尋</a>' +
        '</div>' +
      '</div></section>' +
      '<section class="p-section"><div class="p-wrap"><h2>物件介紹</h2>' + introHtml + termsNotes + '</div></section>' +
      '<section class="p-section"><div class="p-wrap"><h2>現場實景相簿</h2><div class="siwei-gallery">' + galleryHtml + '</div>' +
        (property.photosNote ? '<p class="p-note">' + escapeHtml(property.photosNote) + '</p>' : '') +
      '</div></section>' +
      eqHtml;
  }

  function renderMultiTypeOverview(property, slug) {
    document.title = text(property.name) + "｜喬居房源";
    var lineBase = property.lineUrl || DEFAULT_LINE_URL;
    var avail = (property.availability && Array.isArray(property.availability.availableRooms))
      ? property.availability.availableRooms
      : [];

    var availHtml = "";
    if (!avail.length) {
      availHtml = '<div class="p-notice" style="grid-column:1/-1;">' +
        escapeHtml((property.availability && property.availability.note) || "目前無空房，歡迎透過 LINE 洽詢候補。") +
        '</div>';
    } else {
      availHtml = avail.map(function (item) {
        if (typeof item === "string") {
          var lHref = lineBase + "?text=" + encodeURIComponent("您好，我想預約看【" + property.name + " " + item + "房】");
          return '<article class="siwei-avail-card"><div class="siwei-avail-card-body">' +
            '<div class="siwei-avail-room-no"><span>' + escapeHtml(item) + ' 房</span><span class="siwei-card-badge is-available">空房可租</span></div>' +
            '<div style="display:flex;gap:10px;margin-top:auto;"><a class="p-btn p-btn-primary" href="' + lHref + '" target="_blank" rel="noopener">預約看屋</a></div>' +
            '</div></article>';
        }
        var typeHref = "/properties/detail/?slug=" + encodeURIComponent(slug) + "&type=" + encodeURIComponent(item.type || "");
        var rNo = text(item.room || item.roomId);
        var lHref2 = lineBase + "?text=" + encodeURIComponent("您好，我想預約看【" + property.name + " " + rNo + "房】");
        return '<article class="siwei-avail-card">' +
          (item.coverImage ? '<img src="' + escapeHtml(item.coverImage) + '" alt="' + escapeHtml(item.imageDisclaimer || rNo) + '" loading="lazy">' : '') +
          '<div class="siwei-avail-card-body">' +
            '<div class="siwei-avail-room-no"><span>' + escapeHtml(rNo) + ' 房</span><span class="siwei-card-badge is-available">' + escapeHtml(item.badge || "空房釋出") + '</span></div>' +
            (item.rent ? '<div class="siwei-avail-price">' + Number(item.rent).toLocaleString() + ' 元／月</div>' : '') +
            '<p class="siwei-avail-desc">' + escapeHtml([item.floor ? ("樓層：" + item.floor) : "", item.typeName || ""].filter(Boolean).join(" ｜ ")) + '</p>' +
            '<div style="display:flex;gap:10px;margin-top:auto;">' +
              '<a class="p-btn p-btn-primary" href="' + lHref2 + '" target="_blank" rel="noopener">預約此房看屋</a>' +
              (item.type ? '<a class="p-btn" href="' + typeHref + '">查看房型</a>' : '') +
            '</div>' +
          '</div></article>';
      }).join("");
    }

    var typesHtml = (property.roomTypes || []).map(function (t) {
      var typeHref = "/properties/detail/?slug=" + encodeURIComponent(slug) + "&type=" + encodeURIComponent(t.type);
      var photoHtml = Array.isArray(t.photos) && t.photos.length
        ? '<img src="' + escapeHtml(t.photos[0].src) + '" alt="' + escapeHtml(t.photos[0].alt || t.name || t.type) + '" loading="lazy">'
        : '<div class="siwei-photo-placeholder"><span>照片待補</span></div>';
      var badgeHtml = t.isAvailable
        ? '<span class="siwei-card-badge is-available">空房釋出</span>'
        : '<span class="siwei-card-badge">目前無空房</span>';
      var rentText = t.rentRange || (t.monthlyRent ? (Number(t.monthlyRent).toLocaleString() + " 元／月") : "");
      return '<a class="p-card siwei-type-card" href="' + typeHref + '">' +
        photoHtml +
        '<div class="p-card-body">' +
          badgeHtml +
          '<div class="p-type-no">' + escapeHtml(t.name || (t.type + " 房型")) + '</div>' +
          (rentText ? '<div class="siwei-type-rent">' + escapeHtml(rentText) + '</div>' : '') +
          '<p><b>涵蓋房號：</b>' + escapeHtml((t.roomNumbers || []).join("、")) + '</p>' +
          '<span class="siwei-card-link">查看房型與房況 →</span>' +
        '</div></a>';
    }).join("");

    var facHtml = (property.sharedFacilities || []).map(function (f) {
      return '<article class="p-card">' +
        '<img src="' + escapeHtml(f.image) + '" alt="' + escapeHtml(f.alt || f.name) + '" loading="lazy">' +
        '<div class="p-card-body"><h3>' + escapeHtml(f.name) + '</h3><p>' + escapeHtml(f.description || "") + '</p></div></article>';
    }).join("");

    var root = document.getElementById("detail-root");
    root.innerHTML =
      '<section class="p-hero"><div class="p-wrap">' +
        '<p class="p-eyebrow">' + escapeHtml([property.area, property.publicLocation].filter(Boolean).join(" ｜ ")) + '</p>' +
        '<h1>' + escapeHtml(property.name) + '</h1>' +
        (Array.isArray(property.intro) && property.intro[0] ? '<p class="p-lead">' + escapeHtml(property.intro[0]) + '</p>' : '') +
        '<div class="p-meta-grid">' +
          '<div class="p-fact"><b>地點</b><p>' + escapeHtml(property.publicLocation || property.area) + '</p></div>' +
          '<div class="p-fact"><b>樓層與電梯</b><p>' + escapeHtml(property.buildingFloors || (property.elevator ? "有電梯" : "無電梯")) + '</p></div>' +
          '<div class="p-fact"><b>租金參考</b><p>' + escapeHtml(property.rentSummary || property.rent || "洽詢確認") + '</p></div>' +
          '<div class="p-fact"><b>坪數</b><p>' + escapeHtml(property.suiteArea || "依房型而定") + '</p></div>' +
        '</div>' +
        '<div class="p-actions">' +
          '<a class="p-btn p-btn-primary" href="' + lineBase + '" target="_blank" rel="noopener">透過 LINE 預約看屋</a>' +
          '<a class="p-btn" href="#room-types">瀏覽全部房型</a>' +
        '</div>' +
      '</div></section>' +
      '<section class="p-section" id="availability"><div class="p-wrap"><h2>目前可租房源</h2><div class="siwei-avail-grid">' + availHtml + '</div></div></section>' +
      '<section class="p-section" id="room-types"><div class="p-wrap"><h2>房型介紹</h2><div class="p-grid">' + typesHtml + '</div></div></section>' +
      (facHtml ? '<section class="p-section" id="facilities"><div class="p-wrap"><h2>公共設施與費用</h2><p class="p-note">' + escapeHtml(property.rentTermsNote || property.rentNote || "") + '</p><div class="p-grid">' + facHtml + '</div></div></section>' : '');
  }

  function renderMultiTypeSingle(property, slug, typeId) {
    var type = (property.roomTypes || []).find(function (t) { return text(t.type) === text(typeId); });
    if (!type) {
      showError("找不到指定的房型資料，請返回物件總覽。");
      return;
    }

    var backNav = document.getElementById("nav-back-property");
    if (backNav) {
      backNav.href = "/properties/detail/?slug=" + encodeURIComponent(slug);
      backNav.hidden = false;
    }

    var typeTitle = type.name || (type.type + " 房型");
    document.title = typeTitle + "｜" + text(property.name);
    var lineBase = property.lineUrl || DEFAULT_LINE_URL;
    var lineHref = lineBase + "?text=" + encodeURIComponent("您好，我想詢問【" + property.name + " - " + typeTitle + "】房況與預約看屋");

    var photos = Array.isArray(type.photos) ? type.photos : [];
    var galleryHtml = photos.length
      ? photos.map(function (p, i) {
          return '<a class="siwei-gallery-item" href="' + escapeHtml(p.src) + '" target="_blank" rel="noopener">' +
            '<img src="' + escapeHtml(p.src) + '" alt="' + escapeHtml(p.alt || typeTitle) + '" loading="lazy">' +
            '<span>' + escapeHtml(p.caption || ("照片 " + (i + 1))) + '</span></a>';
        }).join("")
      : '<div class="p-empty" style="grid-column:1/-1;text-align:center;">實景照片待補，實際屋況以現場帶看為準。</div>';

    var eq = type.equipment || property.roomEquipment || {};
    var eqCards = [
      { title: "家具配備", items: eq.furniture || [] },
      { title: "家電／網路配備", items: eq.appliances || [] }
    ].filter(function (g) { return g.items.length > 0; }).map(function (g) {
      return '<article class="p-card siwei-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(g.title) +
        '</h3><ul>' + g.items.map(function (it) { return '<li>' + escapeHtml(it) + '</li>'; }).join("") + '</ul></div></article>';
    }).join("");

    var roomsHtml = "";
    if (Array.isArray(type.rooms) && type.rooms.length) {
      roomsHtml = type.rooms.map(function (r) {
        var price = r.rent ? (Number(r.rent).toLocaleString() + " 元／月") : "洽詢確認";
        return '<li><div><strong>' + escapeHtml(r.roomNumber) + ' 房</strong></div>' +
          '<div style="text-align:right;"><span class="siwei-room-price">' + escapeHtml(price) + '</span>　' +
          '<span class="siwei-status ' + (r.isAvailable ? "is-available" : "") + '">' + escapeHtml(r.status) + '</span></div></li>';
      }).join("");
    } else {
      var availSet = new Set((property.availability && property.availability.availableRooms || []).map(function (x) { return typeof x === "string" ? x : text(x.room || x.roomId); }));
      roomsHtml = (type.roomNumbers || []).map(function (rn) {
        var isAv = availSet.has(text(rn));
        return '<li><div><strong>' + escapeHtml(rn) + ' 房</strong></div>' +
          '<div><span class="siwei-status ' + (isAv ? "is-available" : "") + '">' + (isAv ? "空房可出租" : "請洽 LINE 確認") + '</span></div></li>';
      }).join("");
    }

    var root = document.getElementById("detail-root");
    root.innerHTML =
      '<section class="p-hero"><div class="p-wrap">' +
        '<span class="siwei-card-badge ' + (type.isAvailable ? "is-available" : "") + '">' + escapeHtml(type.status || "房型介紹") + '</span>' +
        '<h1>' + escapeHtml(typeTitle) + '</h1>' +
        '<p class="p-lead">' + escapeHtml(["涵蓋房號：" + (type.roomNumbers || []).join("、"), type.area || "", type.bedType || ""].filter(Boolean).join(" ｜ ")) + '</p>' +
      '</div></section>' +
      '<section class="p-section"><div class="p-wrap"><h2>房型相簿</h2><div class="siwei-gallery">' + galleryHtml + '</div>' +
        '<p class="p-note">' + escapeHtml(type.photoDisclaimer || property.photosNote || "房型代表照片，實際現況以現場帶看為準。") + '</p>' +
      '</div></section>' +
      '<section class="p-section"><div class="p-wrap"><h2>租金與費用</h2>' +
        '<div class="p-fact"><b>月租參考</b><p>' + escapeHtml(type.rentRange || (type.monthlyRent ? Number(type.monthlyRent).toLocaleString() + " 元／月" : "洽詢確認")) + '</p></div>' +
        (Array.isArray(property.rentDiscounts) && property.rentDiscounts.length ? '<pre class="p-note">' + escapeHtml(property.rentDiscounts.join("\n")) + '</pre>' : '') +
        '<p class="p-note">' + escapeHtml(property.rentTermsNote || property.rentNote || "") + '</p>' +
      '</div></section>' +
      (eqCards ? '<section class="p-section"><div class="p-wrap"><h2>房內配備</h2><div class="p-grid">' + eqCards + '</div></div></section>' : '') +
      '<section class="p-section"><div class="p-wrap"><h2>房號與目前房況</h2><ul class="siwei-room-list">' + roomsHtml + '</ul>' +
        '<div class="p-actions" style="margin-top:20px;">' +
          '<a class="p-btn p-btn-primary" href="' + lineHref + '" target="_blank" rel="noopener">透過 LINE 預約看屋</a>' +
          '<a class="p-btn" href="/properties/detail/?slug=' + encodeURIComponent(slug) + '">返回 ' + escapeHtml(property.name) + '</a>' +
        '</div>' +
      '</div></section>';
  }

  var params = getParams();
  if (!params.slug) {
    showError("未指定有效的房源代碼，請從房源搜尋頁選擇物件。");
    return;
  }

  fetch("/properties/data/" + params.slug + ".json", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("找不到此房源資料");
      return r.json();
    })
    .then(function (property) {
      var isSingle = property.layoutMode === "single" || !Array.isArray(property.roomTypes) || property.roomTypes.length === 0;
      if (isSingle) {
        renderSingleUnit(property);
      } else if (params.typeId) {
        renderMultiTypeSingle(property, params.slug, params.typeId);
      } else {
        renderMultiTypeOverview(property, params.slug);
      }
    })
    .catch(function () {
      showError("房源資料載入失敗或尚未上架，請返回房源搜尋頁。");
    });
}());
