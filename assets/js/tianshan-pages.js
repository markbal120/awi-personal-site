(function () {
  "use strict";

  var dataUrl = "/properties/data/tianshan.json";
  var photoDisclaimer = "房型代表照片，實際房間配置及屋況依現場為準。";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function renderProperty(property) {
    var facilities = document.getElementById("facility-grid");
    if (facilities) {
      facilities.innerHTML = property.sharedFacilities.map(function (item) {
        return '<article class="p-card">' +
          '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.alt) + '" loading="lazy">' +
          '<div class="p-card-body"><h3>' + escapeHtml(item.name) + '</h3>' +
          '<p>' + escapeHtml(item.description) + '</p></div></article>';
      }).join("");
    }

    var typeGrid = document.getElementById("room-type-grid");
    if (typeGrid) {
      typeGrid.innerHTML = property.roomTypes.map(function (type) {
        var href = "/properties/tianshan/types/" + type.type + "/";
        var photo = type.photos.length
          ? '<img src="' + escapeHtml(type.photos[0].src) + '" alt="' + escapeHtml(type.photos[0].alt) + '" loading="lazy">'
          : '<div class="tianshan-photo-placeholder" aria-label="08房型目前沒有代表照片"><span>目前不放照片<br>以房型介紹與洽詢為主</span></div>';
        var photoNote = type.photos.length
          ? '<p class="tianshan-representative-note">' + escapeHtml(photoDisclaimer) + '</p>'
          : "";
        return '<a class="p-card tianshan-type-card" href="' + href + '">' +
          photo +
          '<div class="p-card-body"><div class="p-type-no">' + escapeHtml(type.type) + ' 房型</div>' +
          '<p><b>代表房號：</b>' + escapeHtml(type.representativeRoom) + '</p>' +
          '<p>適用樓層：' + escapeHtml(type.roomNumbers.map(function (room) { return room.charAt(0) + "F"; }).filter(function (floor, index, list) { return list.indexOf(floor) === index; }).join("、")) + '</p>' +
          photoNote +
          '<span class="tianshan-card-link">查看房型介紹 →</span></div></a>';
      }).join("");
    }

    var photoNote = document.getElementById("photo-note");
    if (photoNote) photoNote.textContent = "房型代表照片，實際房間配置及屋況依現場為準。實際可租房間請透過 LINE 確認。";

    var availabilityRooms = document.getElementById("availability-rooms");
    if (availabilityRooms) {
      availabilityRooms.innerHTML = property.availability.availableRooms.map(function (room) {
        return '<span class="p-chip">' + escapeHtml(room) + '｜空房可出租</span>';
      }).join("");
    }

    var utilities = document.getElementById("utility-summary");
    if (utilities) {
      utilities.innerHTML = '<div class="p-fact"><b>水費</b><p>' + escapeHtml(property.utilities.water) +
        '</p></div><div class="p-fact"><b>電費</b><p>' + escapeHtml(property.utilities.electricity) + '</p></div>';
    }
  }

  function renderTypePage(property) {
    var root = document.querySelector("[data-room-type]");
    if (!root) return;
    var type = property.roomTypes.find(function (item) { return item.type === root.getAttribute("data-room-type"); });
    if (!type) {
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回天山路物件頁。</div></div></section>';
      return;
    }

    var intro = document.getElementById("type-intro");
    intro.textContent = "本頁整理" + type.type + "房型與目前已確認的房號。個別房間配置及屋況依現場為準。";

    var gallery = document.getElementById("type-gallery");
    var galleryNote = document.getElementById("type-gallery-note");
    if (type.photos.length) {
      gallery.innerHTML = type.photos.map(function (photo, index) {
        return '<a class="tianshan-gallery-item" href="' + escapeHtml(photo.src) + '" target="_blank" rel="noopener">' +
          '<img src="' + escapeHtml(photo.src) + '" alt="' + escapeHtml(photo.alt) + '" loading="lazy">' +
          '<span>照片 ' + (index + 1) + '</span></a>';
      }).join("");
      galleryNote.textContent = photoDisclaimer;
    } else {
      gallery.innerHTML = '<div class="p-empty">此房型第一版暫不放照片；可先查看房型與房號資訊，並透過 LINE 詢問。</div>';
      galleryNote.textContent = "";
    }

    document.getElementById("type-rent").textContent = Number(type.monthlyRent).toLocaleString("en-US") + " 元／月";
    document.getElementById("type-rent-discounts").textContent = property.rentDiscounts.join("\n");
    document.getElementById("type-rent-note").textContent = property.rentTermsNote;
    var equipment = type.equipment || property.roomEquipment;
    var equipmentGrid = document.getElementById("type-equipment-grid");
    equipmentGrid.innerHTML = [
      { title: "家具", items: equipment.furniture },
      { title: "家電", items: equipment.appliances }
    ].map(function (group) {
      return '<article class="p-card tianshan-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(group.title) +
        '</h3><ul>' + group.items.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") +
        '</ul></div></article>';
    }).join("");
    document.getElementById("type-equipment-note").textContent = "以上為物件介紹所列家具家電；個別房型實際配置與使用狀況，請逐房確認。";

    var utilities = document.getElementById("type-utilities");
    utilities.innerHTML = '<div class="p-fact"><b>水費</b><p>' + escapeHtml(property.utilities.water) +
      '</p></div><div class="p-fact"><b>電費</b><p>' + escapeHtml(property.utilities.electricity) + '</p></div>';

    var facilitiesText = document.getElementById("type-facilities-text");
    facilitiesText.textContent = property.sharedFacilitiesText;
    var facilities = document.getElementById("type-facility-grid");
    facilities.innerHTML = property.sharedFacilities.map(function (item) {
      return '<article class="p-card"><img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.alt) +
        '" loading="lazy"><div class="p-card-body"><h3>' + escapeHtml(item.name) + '</h3><p>' +
        escapeHtml(item.description) + '</p></div></article>';
    }).join("");

    var available = new Set(property.availability.availableRooms);
    var rented = new Set(property.availability.confirmedRentedRooms);
    var rooms = document.getElementById("type-room-list");
    rooms.innerHTML = type.roomNumbers.map(function (room) {
      var status = available.has(room) ? '<span class="tianshan-status tianshan-status-available">空房可出租</span>' :
        rented.has(room) ? '<span class="tianshan-status">目前已出租</span>' :
        '<span class="tianshan-status tianshan-status-unknown">房況請洽 LINE 確認</span>';
      return '<li><strong>' + escapeHtml(room) + '</strong>' + status + '</li>';
    }).join("");

    document.getElementById("type-room-note").textContent = property.availability.note;
    var lineButtons = document.querySelectorAll("[data-line-link]");
    lineButtons.forEach(function (button) { button.href = property.lineUrl; });
  }

  fetch(dataUrl)
    .then(function (response) {
      if (!response.ok) throw new Error("天山路房源資料讀取失敗");
      return response.json();
    })
    .then(function (property) {
      renderProperty(property);
      renderTypePage(property);
    })
    .catch(function (error) {
      var message = document.getElementById("page-data-error");
      if (message) message.textContent = error.message;
      if (window.console) console.error(error);
    });
}());
