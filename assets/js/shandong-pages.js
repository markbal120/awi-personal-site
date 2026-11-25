(function () {
  "use strict";

  var dataUrl = "/properties/data/shandong.json";
  var isFileProtocol = window.location.protocol === "file:";
  var fallbackData = {
  "schemaVersion": "2.0",
  "slug": "shandong",
  "name": "山東街37巷5號5、6樓分租套房",
  "area": "高雄市三民區",
  "publicLocation": "山東街37巷5號5樓（近高醫商圈、熱河夜市、台鐵民族站）",
  "address": "高雄市三民區山東街37巷5號5樓",
  "buildingFloors": "5F、6F（公寓無電梯）",
  "floorsWithRooms": [
    "5F",
    "6F"
  ],
  "elevator": false,
  "suiteArea": "分租套房約 5.6 坪",
  "rent": "月租 5,300～6,700 元",
  "rentSummary": "目前可租 503 房：月租 5,500 元",
  "rentNote": "租金包含水費、網路、第四台；電費依本戶台電均價乘以各房獨立電表實際用電度數計算。",
  "rentDiscounts": [
    "半年繳：每月租金折 200 元",
    "年繳：每月租金折 300 元"
  ],
  "rentTermsNote": "押金 2 個月。租金包含水費、寬頻網路、第四台；電費以本戶台電均價 × 房間電表用電度數計算。半年繳每月折 200 元，年繳每月折 300 元。",
  "intro": [
    "本物件位於高雄市三民區山東街37巷5號5樓（5、6 樓分租套房），鄰近高醫商圈、熱河夜市與台鐵民族站，餐飲採買與交通機能便利。",
    "全棟共 9 間獨立格局套房（每間約 5.6 坪，配置雙人床），房內附設書桌椅、衣櫃、冷氣、電視、冰箱、電熱水器與獨立 Wi-Fi。",
    "建物為公寓（無電梯），公共區域設有冰溫熱三用飲水機、投幣式洗衣機與晾衣空間。"
  ],
  "roomEquipment": {
    "furniture": [
      "雙人床",
      "書桌椅",
      "衣櫃"
    ],
    "appliances": [
      "冷氣",
      "電視",
      "冰箱",
      "電熱水器",
      "獨立 Wi-Fi"
    ]
  },
  "utilities": {
    "water": "租金已包含水費。",
    "electricity": "以本戶台電均價 × 各房間獨立電表用電度數計算。"
  },
  "sharedFacilitiesText": "冰溫熱三用飲水機、投幣式洗衣機、晾衣空間",
  "sharedFacilities": [
    {
      "name": "冰溫熱三用飲水機",
      "description": "公共區域設有 RO 冰溫熱三用飲水機供住戶使用。",
      "image": "/assets/properties/shandong/common/dispenser.jpg",
      "alt": "山東街37巷5號冰溫熱三用飲水機"
    },
    {
      "name": "投幣式洗衣機",
      "description": "6 樓公共走廊設有投幣式洗衣機與不銹鋼水槽。",
      "image": "/assets/properties/shandong/common/washer.jpg",
      "alt": "山東街37巷5號投幣式洗衣機"
    },
    {
      "name": "晾衣空間",
      "description": "6 樓公共走廊通風採光晾衣空間。",
      "image": "/assets/properties/shandong/common/drying.jpg",
      "alt": "山東街37巷5號晾衣空間"
    }
  ],
  "lineUrl": "https://lin.ee/741U2pz",
  "availability": {
    "availableRooms": [
      {
        "room": "503",
        "roomId": "503",
        "floor": "5F",
        "rent": 5500,
        "deposit": 11000,
        "type": "503",
        "typeName": "503 套房（5.6坪・雙人床）",
        "badge": "實景可看・立即預約",
        "coverImage": "/assets/properties/shandong/types/503/503-01.jpg",
        "imageDisclaimer": "503房實景拍攝，實際現況以現場帶看為準。"
      }
    ],
    "confirmedRentedRooms": [
      "501",
      "502",
      "505",
      "506",
      "601",
      "602",
      "603",
      "605"
    ],
    "note": "目前對外公開招租為 503 房（月租 5,500 元）；其餘 8 間目前皆在租約中。"
  },
  "roomTypes": [
    {
      "type": "501",
      "name": "501 套房（5.6坪・雙人床）",
      "representativeRoom": "501",
      "roomNumbers": [
        "501"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "5,800 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "501",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "501 房目前已出租；實景照片待補，實際屋況以現場帶看為準。"
    },
    {
      "type": "502",
      "name": "502 套房（5.6坪・雙人床）",
      "representativeRoom": "502",
      "roomNumbers": [
        "502"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "502",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "502 房目前已出租；實景照片待補，實際屋況以現場帶看為準。"
    },
    {
      "type": "503",
      "name": "503 套房（5.6坪・雙人床）",
      "representativeRoom": "503",
      "roomNumbers": [
        "503"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "5,500 元／月",
      "status": "503 空房釋出",
      "isAvailable": true,
      "rooms": [
        {
          "roomNumber": "503",
          "rent": 5500,
          "status": "空房可預約",
          "isAvailable": true
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/503/503-01.jpg",
          "alt": "山東街37巷5號 503 房實景 1",
          "caption": "503 房實景｜室內空間與沙發茶几"
        },
        {
          "src": "/assets/properties/shandong/types/503/503-02.jpg",
          "alt": "山東街37巷5號 503 房實景 2",
          "caption": "503 房實景｜雙人床與窗台採光"
        },
        {
          "src": "/assets/properties/shandong/types/503/503-03.jpg",
          "alt": "山東街37巷5號 503 房實景 3",
          "caption": "503 房實景｜化妝鏡台與電視矮櫃"
        },
        {
          "src": "/assets/properties/shandong/types/503/503-04.jpg",
          "alt": "山東街37巷5號 503 房實景 4",
          "caption": "503 房實景｜獨立衛浴與電熱水器"
        },
        {
          "src": "/assets/properties/shandong/types/503/503-05.jpg",
          "alt": "山東街37巷5號 503 房實景 5",
          "caption": "503 房實景｜五樓 503 房門"
        }
      ],
      "photoDisclaimer": "503 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "505",
      "name": "505 套房（5.6坪・雙人床）",
      "representativeRoom": "505",
      "roomNumbers": [
        "505"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "5,300 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "505",
          "rent": 5300,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "505 房目前已出租；實景照片待補，實際屋況以現場帶看為準。"
    },
    {
      "type": "506",
      "name": "506 套房（5.6坪・雙人床）",
      "representativeRoom": "506",
      "roomNumbers": [
        "506"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "506",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/506/506-01.jpg",
          "alt": "山東街37巷5號 506 房實景 1",
          "caption": "506 房實景｜室內空間與衛浴入口"
        },
        {
          "src": "/assets/properties/shandong/types/506/506-02.jpg",
          "alt": "山東街37巷5號 506 房實景 2",
          "caption": "506 房實景｜冰箱、電視與收納配置"
        },
        {
          "src": "/assets/properties/shandong/types/506/506-03.jpg",
          "alt": "山東街37巷5號 506 房實景 3",
          "caption": "506 房實景｜床鋪與梳妝台"
        }
      ],
      "photoDisclaimer": "506 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "601",
      "name": "601 套房（5.6坪・雙人床）",
      "representativeRoom": "601",
      "roomNumbers": [
        "601"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "601",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/601/601-01.jpg",
          "alt": "山東街37巷5號 601 房實景 1",
          "caption": "601 房實景｜藍色主題牆、雙人床與沙發"
        },
        {
          "src": "/assets/properties/shandong/types/601/601-02.jpg",
          "alt": "山東街37巷5號 601 房實景 2",
          "caption": "601 房實景｜獨立衛浴與電熱水器"
        }
      ],
      "photoDisclaimer": "601 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "602",
      "name": "602 套房（5.6坪・雙人床）",
      "representativeRoom": "602",
      "roomNumbers": [
        "602"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "602",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/602/602-01.jpg",
          "alt": "山東街37巷5號 602 房實景 1",
          "caption": "602 房實景｜雙人床、沙發與茶几"
        },
        {
          "src": "/assets/properties/shandong/types/602/602-02.jpg",
          "alt": "山東街37巷5號 602 房實景 2",
          "caption": "602 房實景｜室內全景視角"
        },
        {
          "src": "/assets/properties/shandong/types/602/602-03.jpg",
          "alt": "山東街37巷5號 602 房實景 3",
          "caption": "602 房實景｜衣櫃與玄關動線"
        }
      ],
      "photoDisclaimer": "602 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "603",
      "name": "603 套房（5.6坪・雙人床）",
      "representativeRoom": "603",
      "roomNumbers": [
        "603"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "603",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/603/603-01.jpg",
          "alt": "山東街37巷5號 603 房實景 1",
          "caption": "603 房實景｜雙人床、冰箱與沙發"
        },
        {
          "src": "/assets/properties/shandong/types/603/603-02.jpg",
          "alt": "山東街37巷5號 603 房實景 2",
          "caption": "603 房實景｜雙人床墊、化妝台與書桌"
        }
      ],
      "photoDisclaimer": "603 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "605",
      "name": "605 套房（5.6坪・雙人床）",
      "representativeRoom": "605",
      "roomNumbers": [
        "605"
      ],
      "area": "約 5.6 坪",
      "bedType": "雙人床",
      "rentRange": "6,700 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "605",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/shandong/types/605/605-01.jpg",
          "alt": "山東街37巷5號 605 房實景 1",
          "caption": "605 房實景｜雙人床架、沙發與梳妝台"
        },
        {
          "src": "/assets/properties/shandong/types/605/605-02.jpg",
          "alt": "山東街37巷5號 605 房實景 2",
          "caption": "605 房實景｜衣櫃、小冰箱與網路設備"
        }
      ],
      "photoDisclaimer": "605 房實景拍攝，實際現況以現場帶看為準。"
    }
  ]
};

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function resolveUrl(url) {
    if (!url || typeof url !== "string") return url;
    if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0 || url.indexOf("//") === 0 || url.indexOf("data:") === 0) {
      return url;
    }
    if (isFileProtocol && url.charAt(0) === "/") {
      var isTypePage = document.querySelector("[data-room-type]") !== null;
      var prefix = isTypePage ? "../../../../" : "../../";
      return prefix + url.substring(1);
    }
    return url;
  }

  function resolvePageLink(typeId) {
    if (isFileProtocol) {
      return "types/" + typeId + "/index.html";
    }
    return "/properties/shandong/types/" + typeId + "/index.html";
  }

  function renderProperty(property) {
    var rentSummary = document.getElementById("rent-summary");
    if (rentSummary) {
      rentSummary.textContent = property.rentSummary || property.rent || "月租 5,300～6,700 元";
    }

    var facilities = document.getElementById("facility-grid");
    if (facilities && property.sharedFacilities) {
      facilities.innerHTML = property.sharedFacilities.map(function (item) {
        return '<article class="p-card">' +
          '<img src="' + escapeHtml(resolveUrl(item.image)) + '" alt="' + escapeHtml(item.alt) + '" loading="lazy">' +
          '<div class="p-card-body"><h3>' + escapeHtml(item.name) + '</h3>' +
          '<p>' + escapeHtml(item.description) + '</p></div></article>';
      }).join("");
    }

    var availGrid = document.getElementById("available-rooms-grid");
    if (availGrid) {
      var avail = (property.availability && Array.isArray(property.availability.availableRooms))
        ? property.availability.availableRooms
        : [];
      if (avail.length === 0) {
        availGrid.innerHTML = '<div class="p-notice" style="grid-column:1/-1;">' +
          escapeHtml((property.availability && property.availability.note) || "目前無空房，歡迎透過 LINE 預約候補通知。") +
          '</div>';
      } else {
        availGrid.innerHTML = avail.map(function (item) {
          var href = resolvePageLink(item.type);
          var lineHref = property.lineUrl + "?text=" + encodeURIComponent("您好，我想預約看山東街37巷5號【" + item.room + "房（" + Number(item.rent).toLocaleString() + "元）】");
          return '<article class="siwei-avail-card">' +
            '<img src="' + escapeHtml(resolveUrl(item.coverImage)) + '" alt="' + escapeHtml(item.imageDisclaimer) + '" loading="lazy">' +
            '<div class="siwei-avail-card-body">' +
            '<div class="siwei-avail-room-no"><span>' + escapeHtml(item.room) + ' 房</span><span class="siwei-card-badge is-available">' + escapeHtml(item.badge) + '</span></div>' +
            '<div class="siwei-avail-price">' + Number(item.rent).toLocaleString() + ' 元／月</div>' +
            '<p class="siwei-avail-desc">樓層：' + escapeHtml(item.floor) + ' ｜ ' + escapeHtml(item.typeName) + '<br><small style="color:var(--property-muted);">' + escapeHtml(item.imageDisclaimer) + '</small></p>' +
            '<div style="display:flex;gap:10px;margin-top:auto;">' +
            '<a class="p-btn p-btn-primary" href="' + lineHref + '" target="_blank" rel="noopener">預約此房看屋</a>' +
            '<a class="p-btn" href="' + href + '">查看房型介紹</a>' +
            '</div></div></article>';
        }).join("");
      }
    }

    var typeGrid = document.getElementById("room-type-grid");
    if (typeGrid && property.roomTypes) {
      typeGrid.innerHTML = property.roomTypes.map(function (type) {
        var href = resolvePageLink(type.type);
        var photoHtml = type.photos.length
          ? '<img src="' + escapeHtml(resolveUrl(type.photos[0].src)) + '" alt="' + escapeHtml(type.photos[0].alt) + '" loading="lazy">'
          : '<div class="siwei-photo-placeholder"><span>目前已出租<br>照片待補</span></div>';
        var badgeHtml = type.isAvailable
          ? '<span class="siwei-card-badge is-available">空房釋出</span>'
          : '<span class="siwei-card-badge">目前無空房</span>';
        var floor = type.roomNumbers[0].charAt(0) + "F";

        return '<a class="p-card siwei-type-card" href="' + href + '">' +
          photoHtml +
          '<div class="p-card-body">' +
          badgeHtml +
          '<div class="p-type-no">' + escapeHtml(type.name) + '</div>' +
          '<div class="siwei-type-rent">' + escapeHtml(type.rentRange) + '</div>' +
          '<p><b>樓層：</b>' + escapeHtml(floor) + ' ｜ ' + escapeHtml(type.area) + '</p>' +
          '<span class="siwei-card-link">查看完整房型介紹 →</span>' +
          '</div></a>';
      }).join("");
    }
  }

  function renderTypePage(property) {
    var root = document.querySelector("[data-room-type]");
    if (!root) return;
    var typeNo = root.getAttribute("data-room-type");
    var type = property.roomTypes.find(function (item) { return item.type === typeNo; });
    if (!type) {
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回山東街物件首頁。</div></div></section>';
      return;
    }

    var titleEl = document.getElementById("type-title");
    if (titleEl) titleEl.textContent = type.name;

    var badgeEl = document.getElementById("type-status-badge");
    if (badgeEl) {
      badgeEl.className = "siwei-card-badge " + (type.isAvailable ? "is-available" : "");
      badgeEl.textContent = type.status;
    }

    var floor = type.roomNumbers[0].charAt(0) + "F";
    var floorsEl = document.getElementById("type-floors");
    if (floorsEl) {
      floorsEl.textContent = "樓層：" + floor + "（公寓無電梯） ｜ 坪數：" + type.area + " ｜ 床型：" + type.bedType + "。實際屋況以現場帶看為準。";
    }

    var gallery = document.getElementById("type-gallery");
    var galleryNote = document.getElementById("type-gallery-note");
    if (type.photos.length) {
      gallery.innerHTML = type.photos.map(function (photo, index) {
        var resolvedSrc = resolveUrl(photo.src);
        return '<a class="siwei-gallery-item" href="' + escapeHtml(resolvedSrc) + '" target="_blank" rel="noopener">' +
          '<img src="' + escapeHtml(resolvedSrc) + '" alt="' + escapeHtml(photo.alt) + '" loading="lazy">' +
          '<span>' + escapeHtml(photo.caption || ("照片 " + (index + 1))) + '</span></a>';
      }).join("");
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer;
    } else {
      gallery.innerHTML = '<div class="p-empty" style="grid-column:1/-1;text-align:center;">此房目前已出租，實景照片待補；可先查看房型資訊與配備，實際屋況以現場帶看為準。</div>';
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer || "";
    }

    var rentEl = document.getElementById("type-rent");
    if (rentEl) rentEl.textContent = type.rentRange;

    var rentDiscountsEl = document.getElementById("type-rent-discounts");
    if (rentDiscountsEl) rentDiscountsEl.textContent = (property.rentDiscounts || []).join("\n");

    var rentNoteEl = document.getElementById("type-rent-note");
    if (rentNoteEl) rentNoteEl.textContent = property.rentTermsNote;

    var equipmentGrid = document.getElementById("type-equipment-grid");
    if (equipmentGrid && property.roomEquipment) {
      equipmentGrid.innerHTML = [
        { title: "家具配備", items: property.roomEquipment.furniture },
        { title: "家電配備", items: property.roomEquipment.appliances }
      ].map(function (group) {
        return '<article class="p-card siwei-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(group.title) +
          '</h3><ul>' + group.items.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") +
          '</ul></div></article>';
      }).join("");
    }

    var facilitiesText = document.getElementById("type-facilities-text");
    if (facilitiesText) facilitiesText.textContent = property.sharedFacilitiesText;

    var facilitiesGrid = document.getElementById("type-facility-grid");
    if (facilitiesGrid && property.sharedFacilities) {
      facilitiesGrid.innerHTML = property.sharedFacilities.map(function (item) {
        return '<article class="p-card"><img src="' + escapeHtml(resolveUrl(item.image)) + '" alt="' + escapeHtml(item.alt) +
          '" loading="lazy"><div class="p-card-body"><h3>' + escapeHtml(item.name) + '</h3><p>' +
          escapeHtml(item.description) + '</p></div></article>';
      }).join("");
    }

    var roomList = document.getElementById("type-room-list");
    if (roomList && type.rooms) {
      roomList.innerHTML = type.rooms.map(function (room) {
        var priceHtml = room.rent ? (Number(room.rent).toLocaleString() + " 元／月") : "洽詢確認";
        var statusClass = room.isAvailable ? "is-available" : "";
        return '<li><div><strong>' + escapeHtml(room.roomNumber) + ' 房</strong></div>' +
          '<div style="text-align:right;"><span class="siwei-room-price">' + escapeHtml(priceHtml) + '</span>　' +
          '<span class="siwei-status ' + statusClass + '">' + escapeHtml(room.status) + '</span></div></li>';
      }).join("");
    }

    var lineButtons = document.querySelectorAll("[data-line-link]");
    var lineText = "您好，我想詢問山東街37巷5號【" + type.name + "】房況與預約看屋";
    var lineUrlWithText = property.lineUrl + "?text=" + encodeURIComponent(lineText);
    lineButtons.forEach(function (button) { button.href = lineUrlWithText; });
  }

  if (isFileProtocol) {
    renderProperty(fallbackData);
    renderTypePage(fallbackData);
  } else {
    fetch(dataUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("山東街房源資料讀取失敗");
        return response.json();
      })
      .then(function (property) {
        renderProperty(property);
        renderTypePage(property);
      })
      .catch(function () {
        renderProperty(fallbackData);
        renderTypePage(fallbackData);
      });
  }
}());
