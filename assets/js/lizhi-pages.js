(function () {
  "use strict";

  var dataUrl = "/properties/data/lizhi.json";
  var isFileProtocol = window.location.protocol === "file:";
  var fallbackData = {
  "schemaVersion": "2.0",
  "slug": "lizhi",
  "name": "立志街22巷8弄1號分租套房",
  "area": "高雄市三民區",
  "publicLocation": "立志街22巷8弄1號（近高科大建工校區商圈、輕軌高雄高工站）",
  "address": "高雄市三民區立志街22巷8弄1號",
  "buildingFloors": "1F～4F（公寓無電梯）",
  "floorsWithRooms": [
    "1F",
    "2F",
    "3F",
    "4F"
  ],
  "elevator": false,
  "suiteArea": "分租套房約 4.3～5 坪",
  "rent": "月租 4,700～6,000 元",
  "rentSummary": "目前可租 202 房：月租 5,800 元",
  "rentNote": "租金包含水費、網路、第四台；電費依全棟台電均價乘以各房獨立電表實際用電度數計算。",
  "rentDiscounts": [
    "半年繳：每月租金折 200 元",
    "年繳：每月租金折 300 元"
  ],
  "rentTermsNote": "押金 2 個月租金。租金包含水費、網路、第四台；電費依照全棟台電均價 × 每個房間電表用電度數計算。半年繳每月折 200 元，年繳每月折 300 元。",
  "intro": [
    "本物件位於高雄市三民區立志街22巷8弄1號，鄰近高科大建工校區商圈與輕軌高雄高工站，生活機能與通勤便利。",
    "1F～4F 共規劃 12 間分租套房（約 4.3～5 坪，3 種房型格局），每房皆附書桌椅、書櫃、衣櫃、電視、冷氣、冰箱、儲水式電熱水器與獨立網路。",
    "建物無電梯，公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。"
  ],
  "roomEquipment": {
    "furniture": [
      "書桌椅",
      "書櫃",
      "衣櫃"
    ],
    "appliances": [
      "電視",
      "冷氣",
      "冰箱",
      "儲水式電熱水器",
      "獨立網路"
    ]
  },
  "utilities": {
    "water": "租金已包含水費。",
    "electricity": "全棟台電均價 × 每個房間電表用電度數計算。"
  },
  "sharedFacilitiesText": "冰溫熱三用 RO 飲水機、脫水機、投幣式洗衣機",
  "sharedFacilities": [
    {
      "name": "公共設施實景（1）",
      "description": "公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。",
      "image": "/assets/properties/lizhi/common/common-01.jpg",
      "alt": "立志街22巷8弄1號公共設施（飲水機／脫水機／投幣式洗衣機）1"
    },
    {
      "name": "公共設施實景（2）",
      "description": "公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。",
      "image": "/assets/properties/lizhi/common/common-02.jpg",
      "alt": "立志街22巷8弄1號公共設施（飲水機／脫水機／投幣式洗衣機）2"
    },
    {
      "name": "公共設施實景（3）",
      "description": "公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。",
      "image": "/assets/properties/lizhi/common/common-03.jpg",
      "alt": "立志街22巷8弄1號公共設施（飲水機／脫水機／投幣式洗衣機）3"
    },
    {
      "name": "公共設施實景（4）",
      "description": "公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。",
      "image": "/assets/properties/lizhi/common/common-04.jpg",
      "alt": "立志街22巷8弄1號公共設施（飲水機／脫水機／投幣式洗衣機）4"
    },
    {
      "name": "公共設施實景（5）",
      "description": "公共區域設有冰溫熱三用 RO 飲水機、脫水機與投幣式洗衣機。",
      "image": "/assets/properties/lizhi/common/common-05.jpg",
      "alt": "立志街22巷8弄1號公共設施（飲水機／脫水機／投幣式洗衣機）5"
    }
  ],
  "lineUrl": "https://lin.ee/741U2pz",
  "availability": {
    "availableRooms": [
      {
        "room": "202",
        "roomId": "202",
        "floor": "2F",
        "rent": 5800,
        "deposit": 11600,
        "type": "02",
        "typeName": "2號房型（4.3坪・雙人床）",
        "badge": "實景可看・立即預約",
        "coverImage": "/assets/properties/lizhi/types/02/02-09.jpg",
        "imageDisclaimer": "房型代表照片（302／402房實景），實際現況以現場帶看為準。"
      }
    ],
    "confirmedRentedRooms": [
      "101",
      "201",
      "301",
      "401",
      "102",
      "302",
      "402",
      "103",
      "203",
      "303",
      "403"
    ],
    "note": "目前對外公開招租為 202 房（月租 5,800 元）；其餘 11 間目前皆在租約中。"
  },
  "roomTypes": [
    {
      "type": "01",
      "name": "1號房型（101 / 201 / 301 / 401・4.3坪・單人床）",
      "representativeRoom": "301",
      "roomNumbers": [
        "101",
        "201",
        "301",
        "401"
      ],
      "area": "約 4.3 坪",
      "bedType": "單人床",
      "rentRange": "4,700～5,500 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "equipment": {
        "furniture": [
          "單人床",
          "書桌椅",
          "書櫃",
          "衣櫃"
        ],
        "appliances": [
          "電視",
          "冷氣",
          "冰箱",
          "儲水式電熱水器",
          "獨立網路"
        ]
      },
      "rooms": [
        {
          "roomNumber": "101",
          "rent": 5500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "201",
          "rent": 4700,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "301",
          "rent": 5500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "401",
          "rent": 5500,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/lizhi/types/01/01-01.jpg",
          "alt": "立志街 301 房實景（1號房型參考）1",
          "caption": "301房實景｜1號房型格局參考（1）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-02.jpg",
          "alt": "立志街 301 房實景（1號房型參考）2",
          "caption": "301房實景｜1號房型格局參考（2）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-03.jpg",
          "alt": "立志街 301 房實景（1號房型參考）3",
          "caption": "301房實景｜1號房型格局參考（3）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-04.jpg",
          "alt": "立志街 301 房實景（1號房型參考）4",
          "caption": "301房實景｜1號房型格局參考（4）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-05.jpg",
          "alt": "立志街 301 房實景（1號房型參考）5",
          "caption": "301房實景｜1號房型格局參考（5）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-06.jpg",
          "alt": "立志街 301 房實景（1號房型參考）6",
          "caption": "301房實景｜1號房型格局參考（6）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-07.jpg",
          "alt": "立志街 301 房實景（1號房型參考）7",
          "caption": "301房實景｜1號房型格局參考（7）"
        },
        {
          "src": "/assets/properties/lizhi/types/01/01-08.jpg",
          "alt": "立志街 301 房實景（1號房型參考）8",
          "caption": "301房實景｜1號房型格局參考（8）"
        }
      ],
      "photoDisclaimer": "本房型照片由 301 房實景拍攝；房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "02",
      "name": "2號房型（102 / 202 / 302 / 402・4.3坪・雙人床）",
      "representativeRoom": "302 / 402",
      "roomNumbers": [
        "102",
        "202",
        "302",
        "402"
      ],
      "area": "約 4.3 坪",
      "bedType": "雙人床",
      "rentRange": "5,500～5,800 元／月",
      "status": "202 空房釋出",
      "isAvailable": true,
      "equipment": {
        "furniture": [
          "雙人床",
          "書桌椅",
          "書櫃",
          "衣櫃"
        ],
        "appliances": [
          "電視",
          "冷氣",
          "冰箱",
          "儲水式電熱水器",
          "獨立網路"
        ]
      },
      "rooms": [
        {
          "roomNumber": "102",
          "rent": 5500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "202",
          "rent": 5800,
          "status": "空房可預約",
          "isAvailable": true
        },
        {
          "roomNumber": "302",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "402",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/lizhi/types/02/02-09.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）9",
          "caption": "302／402房實景｜2號房型雙人床格局參考（9）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-01.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）1",
          "caption": "302／402房實景｜2號房型雙人床格局參考（1）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-02.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）2",
          "caption": "302／402房實景｜2號房型雙人床格局參考（2）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-03.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）3",
          "caption": "302／402房實景｜2號房型雙人床格局參考（3）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-04.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）4",
          "caption": "302／402房實景｜2號房型雙人床格局參考（4）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-05.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）5",
          "caption": "302／402房實景｜2號房型雙人床格局參考（5）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-06.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）6",
          "caption": "302／402房實景｜2號房型雙人床格局參考（6）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-07.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）7",
          "caption": "302／402房實景｜2號房型雙人床格局參考（7）"
        },
        {
          "src": "/assets/properties/lizhi/types/02/02-08.jpg",
          "alt": "立志街 302／402 房實景（2號房型雙人床參考）8",
          "caption": "302／402房實景｜2號房型雙人床格局參考（8）"
        }
      ],
      "photoDisclaimer": "本房型照片由 114 年 302 與 402 房實景拍攝（雙人床配置）；202 為同格局房間，實際現況以現場帶看為準。"
    },
    {
      "type": "03",
      "name": "3號房型（103 / 203 / 303 / 403・5坪・雙人床）",
      "representativeRoom": "303",
      "roomNumbers": [
        "103",
        "203",
        "303",
        "403"
      ],
      "area": "約 5 坪",
      "bedType": "雙人床",
      "rentRange": "5,200～6,000 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "equipment": {
        "furniture": [
          "雙人床",
          "書桌椅",
          "書櫃",
          "衣櫃"
        ],
        "appliances": [
          "電視",
          "冷氣",
          "冰箱",
          "儲水式電熱水器",
          "獨立網路"
        ]
      },
      "rooms": [
        {
          "roomNumber": "103",
          "rent": 5200,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "203",
          "rent": 5700,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "303",
          "rent": 5700,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "403",
          "rent": 6000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/lizhi/types/03/03-07.jpg",
          "alt": "立志街 303 房實景（3號房型參考）7",
          "caption": "303房實景｜3號房型格局參考（7）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-01.jpg",
          "alt": "立志街 303 房實景（3號房型參考）1",
          "caption": "303房實景｜3號房型格局參考（1）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-02.jpg",
          "alt": "立志街 303 房實景（3號房型參考）2",
          "caption": "303房實景｜3號房型格局參考（2）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-03.jpg",
          "alt": "立志街 303 房實景（3號房型參考）3",
          "caption": "303房實景｜3號房型格局參考（3）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-04.jpg",
          "alt": "立志街 303 房實景（3號房型參考）4",
          "caption": "303房實景｜3號房型格局參考（4）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-05.jpg",
          "alt": "立志街 303 房實景（3號房型參考）5",
          "caption": "303房實景｜3號房型格局參考（5）"
        },
        {
          "src": "/assets/properties/lizhi/types/03/03-06.jpg",
          "alt": "立志街 303 房實景（3號房型參考）6",
          "caption": "303房實景｜3號房型格局參考（6）"
        }
      ],
      "photoDisclaimer": "本房型照片由 303 房實景拍攝；房型代表照片，實際現況以現場帶看為準。"
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
    return "/properties/lizhi/types/" + typeId + "/index.html";
  }

  function renderProperty(property) {
    var rentSummary = document.getElementById("rent-summary");
    if (rentSummary) {
      rentSummary.textContent = property.rentSummary || property.rent || "月租 4,700～6,000 元";
    }

    var facilities = document.getElementById("facility-grid");
    if (facilities) {
      if (property.sharedFacilities && property.sharedFacilities.length) {
        facilities.innerHTML = property.sharedFacilities.map(function (item) {
          return '<article class="p-card">' +
            '<img src="' + escapeHtml(resolveUrl(item.image)) + '" alt="' + escapeHtml(item.alt) + '" loading="lazy">' +
            '<div class="p-card-body"><h3>' + escapeHtml(item.name) + '</h3>' +
            '<p>' + escapeHtml(item.description) + '</p></div></article>';
        }).join("");
      } else {
        facilities.innerHTML = '<div class="p-notice" style="grid-column:1/-1;">公共設施包含：' +
          escapeHtml(property.sharedFacilitiesText || "冰溫熱三用 RO 飲水機、脫水機、投幣式洗衣機") +
          '（設施照片確認中）。</div>';
      }
    }

    var availGrid = document.getElementById("available-rooms-grid");
    if (availGrid && property.availability && property.availability.availableRooms) {
      availGrid.innerHTML = property.availability.availableRooms.map(function (item) {
        var href = resolvePageLink(item.type);
        var lineHref = property.lineUrl + "?text=" + encodeURIComponent("您好，我想預約看立志街22巷8弄1號【" + item.room + "房（" + Number(item.rent).toLocaleString() + "元）】");
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

    var typeGrid = document.getElementById("room-type-grid");
    if (typeGrid && property.roomTypes) {
      typeGrid.innerHTML = property.roomTypes.map(function (type) {
        var href = resolvePageLink(type.type);
        var photoHtml = type.photos.length
          ? '<img src="' + escapeHtml(resolveUrl(type.photos[0].src)) + '" alt="' + escapeHtml(type.photos[0].alt) + '" loading="lazy">'
          : '<div class="siwei-photo-placeholder"><span>照片待補</span></div>';
        var badgeHtml = type.isAvailable
          ? '<span class="siwei-card-badge is-available">空房釋出</span>'
          : '<span class="siwei-card-badge">目前無空房</span>';

        return '<a class="p-card siwei-type-card" href="' + href + '">' +
          photoHtml +
          '<div class="p-card-body">' +
          badgeHtml +
          '<div class="p-type-no">' + escapeHtml(type.name) + '</div>' +
          '<div class="siwei-type-rent">' + escapeHtml(type.rentRange) + '</div>' +
          '<p><b>涵蓋房號：</b>' + escapeHtml(type.roomNumbers.join("、")) + ' 房</p>' +
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
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回立志街物件首頁。</div></div></section>';
      return;
    }

    var titleEl = document.getElementById("type-title");
    if (titleEl) titleEl.textContent = type.name;

    var badgeEl = document.getElementById("type-status-badge");
    if (badgeEl) {
      badgeEl.className = "siwei-card-badge " + (type.isAvailable ? "is-available" : "");
      badgeEl.textContent = type.status;
    }

    var floorsEl = document.getElementById("type-floors");
    if (floorsEl) {
      floorsEl.textContent = "坪數：" + type.area + " ｜ 床型：" + type.bedType + " ｜ 涵蓋房號：" + type.roomNumbers.join("、") + " 房。各房實際屋況以現場帶看為準。";
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
    }

    var rentEl = document.getElementById("type-rent");
    if (rentEl) rentEl.textContent = type.rentRange;

    var rentDiscountsEl = document.getElementById("type-rent-discounts");
    if (rentDiscountsEl) rentDiscountsEl.textContent = (property.rentDiscounts || []).join("\n");

    var rentNoteEl = document.getElementById("type-rent-note");
    if (rentNoteEl) rentNoteEl.textContent = property.rentTermsNote;

    var equipment = type.equipment || property.roomEquipment;
    var equipmentGrid = document.getElementById("type-equipment-grid");
    if (equipmentGrid && equipment) {
      equipmentGrid.innerHTML = [
        { title: "家具配備", items: equipment.furniture },
        { title: "家電與網路配備", items: equipment.appliances }
      ].map(function (group) {
        return '<article class="p-card siwei-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(group.title) +
          '</h3><ul>' + group.items.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") +
          '</ul></div></article>';
      }).join("");
    }

    var facilitiesText = document.getElementById("type-facilities-text");
    if (facilitiesText) facilitiesText.textContent = property.sharedFacilitiesText;

    var facilitiesGrid = document.getElementById("type-facility-grid");
    if (facilitiesGrid && property.sharedFacilities && property.sharedFacilities.length) {
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
    var lineText = "您好，我想詢問立志街22巷8弄1號【" + type.name + "】最新房況與預約看屋";
    var lineUrlWithText = property.lineUrl + "?text=" + encodeURIComponent(lineText);
    lineButtons.forEach(function (button) { button.href = lineUrlWithText; });
  }

  if (isFileProtocol) {
    renderProperty(fallbackData);
    renderTypePage(fallbackData);
  } else {
    fetch(dataUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("立志街房源資料讀取失敗");
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
