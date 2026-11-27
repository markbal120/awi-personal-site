(function () {
  "use strict";

  var dataUrl = "/properties/data/yongkang-abc.json";
  var isFileProtocol = window.location.protocol === "file:";
  var fallbackData = {
  "schemaVersion": "2.0",
  "slug": "yongkang-abc",
  "name": "永康ABC分租套房",
  "area": "高雄市苓雅區",
  "publicLocation": "永康街58號（近捷運三多商圈站、文橫夜市、忠孝夜市、四維行政中心）",
  "address": "高雄市苓雅區永康街58號",
  "buildingFloors": "1F、2F、3F、5F（三棟連棟，無電梯）",
  "floorsWithRooms": [
    "1F",
    "2F",
    "3F",
    "5F"
  ],
  "elevator": false,
  "suiteArea": "分租套房約 5～8 坪",
  "rent": "月租 5,800～8,300 元",
  "rentSummary": "目前可租 4 間：月租 5,800～7,800 元",
  "rentNote": "租金包含水費、網路、第四台；電費依照全棟台電均價乘以各房獨立電表實際用電度數計算。",
  "rentDiscounts": [
    "半年繳：每月租金折 200 元",
    "年繳：每月租金折 300 元"
  ],
  "rentTermsNote": "押金 2 個月租金。租金包含水費、寬頻網路、第四台；電費依照全棟台電均價 × 各自房間電表用電度數計算。半年繳每月折 200 元，年繳每月折 300 元。",
  "intro": [
    "本物件位於高雄市苓雅區永康街54、56、58號（公開地址：永康街58號），鄰近捷運三多商圈站、文橫夜市、忠孝夜市與四維行政中心，生活機能完善。",
    "三棟規劃共 21 間雙人床分租套房（5～8 坪，3 種房型格局），配備儲水式電熱水器、獨立網路與第四台；2F 以上房型均附獨立陽台。",
    "建物無電梯，公共區域設有投幣式洗衣機、脫水機與冰溫熱三用 RO 飲水機。"
  ],
  "roomEquipment": {
    "furniture": [
      "雙人床",
      "衣櫃",
      "書桌椅"
    ],
    "appliances": [
      "冰箱",
      "電視",
      "獨立網路",
      "第四台",
      "儲水式電熱水器"
    ]
  },
  "utilities": {
    "water": "租金已包含水費。",
    "electricity": "依照全棟台電均價 × 各自房間電表用電度數計算。"
  },
  "sharedFacilitiesText": "投幣式洗衣機、脫水機、冰溫熱三用 RO 飲水機",
  "sharedFacilities": [
    {
      "name": "投幣式洗衣機與脫水機（一）",
      "description": "公共區域設有投幣式洗衣機與脫水機供住戶使用。",
      "image": "/assets/properties/yongkang-abc/common/laundry-01.jpg",
      "alt": "永康ABC公共設施投幣式洗衣機與脫水機 1"
    },
    {
      "name": "投幣式洗衣機與脫水機（二）",
      "description": "公共區域投幣式洗衣機與脫水機實景。",
      "image": "/assets/properties/yongkang-abc/common/laundry-02.jpg",
      "alt": "永康ABC公共設施投幣式洗衣機與脫水機 2"
    }
  ],
  "lineUrl": "https://lin.ee/741U2pz",
  "availability": {
    "availableRooms": [
      {
        "room": "54-101",
        "roomId": "54-101",
        "floor": "1F",
        "rent": 7800,
        "deposit": 15600,
        "type": "01",
        "typeName": "101 房型（6坪・沙發・流理台）",
        "badge": "空房釋出・預約帶看",
        "coverImage": "/assets/properties/yongkang-abc/types/01/01-01.jpg",
        "imageDisclaimer": "房型代表照片（56號101室實景），實際現況以現場帶看為準。"
      },
      {
        "room": "58-101",
        "roomId": "58-101",
        "floor": "1F",
        "rent": 7800,
        "deposit": 15600,
        "type": "01",
        "typeName": "101 房型（6坪・沙發・流理台）",
        "badge": "空房釋出・預約帶看",
        "coverImage": "/assets/properties/yongkang-abc/types/01/01-01.jpg",
        "imageDisclaimer": "房型代表照片（56號101室實景），實際現況以現場帶看為準。"
      },
      {
        "room": "54-302",
        "roomId": "54-302",
        "floor": "3F",
        "rent": 6500,
        "deposit": 13000,
        "type": "03",
        "typeName": "202 / 302 / 502 房型（5坪・獨立陽台）",
        "badge": "空房釋出・預約帶看",
        "coverImage": "/assets/properties/yongkang-abc/types/03/03-01.jpg",
        "imageDisclaimer": "房型代表照片（56號302室／58號202室實景），實際現況以現場帶看為準。"
      },
      {
        "room": "54-502",
        "roomId": "54-502",
        "floor": "5F",
        "rent": 5800,
        "deposit": 11600,
        "type": "03",
        "typeName": "202 / 302 / 502 房型（5坪・獨立陽台）",
        "badge": "超值釋出・預約帶看",
        "coverImage": "/assets/properties/yongkang-abc/types/03/03-01.jpg",
        "imageDisclaimer": "房型代表照片（56號302室／58號202室實景），實際現況以現場帶看為準。"
      }
    ],
    "confirmedRentedRooms": [
      "54-201",
      "54-202",
      "54-301",
      "54-501",
      "56-101",
      "56-201",
      "56-202",
      "56-301",
      "56-302",
      "56-501",
      "56-502",
      "58-201",
      "58-202",
      "58-301",
      "58-302",
      "58-501",
      "58-502"
    ],
    "note": "目前對外公開招租為 54-101、58-101、54-302、54-502 共 4 間；其餘 17 間目前皆在租約中。"
  },
  "roomTypes": [
    {
      "type": "01",
      "name": "101 房型（1F・約6坪・雙人床）",
      "representativeRoom": "56-101",
      "roomNumbers": [
        "54-101",
        "56-101",
        "58-101"
      ],
      "area": "約 6 坪",
      "bedType": "雙人床",
      "rentRange": "7,500～7,800 元／月",
      "status": "54-101、58-101 空房釋出",
      "isAvailable": true,
      "equipment": {
        "furniture": [
          "雙人床",
          "沙發",
          "流理台",
          "衣櫃",
          "書桌椅"
        ],
        "appliances": [
          "冰箱",
          "電視",
          "獨立網路",
          "第四台",
          "儲水式電熱水器"
        ]
      },
      "rooms": [
        {
          "roomNumber": "54-101",
          "rent": 7800,
          "status": "空房可預約",
          "isAvailable": true
        },
        {
          "roomNumber": "56-101",
          "rent": 7500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-101",
          "rent": 7800,
          "status": "空房可預約",
          "isAvailable": true
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-01.jpg",
          "alt": "永康56號101室實景（101房型參考）1",
          "caption": "56號101室實景｜101房型參考（1）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-02.jpg",
          "alt": "永康56號101室實景（101房型參考）2",
          "caption": "56號101室實景｜101房型參考（2）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-03.jpg",
          "alt": "永康56號101室實景（101房型參考）3",
          "caption": "56號101室實景｜101房型參考（3）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-04.jpg",
          "alt": "永康56號101室實景（101房型參考）4",
          "caption": "56號101室實景｜101房型參考（4）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-05.jpg",
          "alt": "永康56號101室實景（101房型參考）5",
          "caption": "56號101室實景｜101房型參考（5）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/01/01-06.jpg",
          "alt": "永康56號101室實景（101房型參考）6",
          "caption": "56號101室實景｜101房型參考（6）"
        }
      ],
      "photoDisclaimer": "本房型照片由 56 號 101 室實景拍攝；54-101、58-101 為同格局房間，實際現況以現場帶看為準。"
    },
    {
      "type": "02",
      "name": "201 / 301 / 501 房型（2F/3F/5F・約8坪・獨立陽台）",
      "representativeRoom": "56-301 / 58-301",
      "roomNumbers": [
        "54-201",
        "54-301",
        "54-501",
        "56-201",
        "56-301",
        "56-501",
        "58-201",
        "58-301",
        "58-501"
      ],
      "area": "約 8 坪",
      "bedType": "雙人床",
      "rentRange": "7,000～8,300 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "equipment": {
        "furniture": [
          "雙人床",
          "沙發",
          "茶几",
          "衣櫃",
          "書桌椅",
          "獨立陽台"
        ],
        "appliances": [
          "冰箱",
          "電視",
          "獨立網路",
          "第四台",
          "儲水式電熱水器"
        ]
      },
      "rooms": [
        {
          "roomNumber": "54-201",
          "rent": 8300,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "54-301",
          "rent": 8000,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "54-501",
          "rent": 7800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "56-201",
          "rent": 8300,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "56-301",
          "rent": 8300,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "56-501",
          "rent": 7700,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-201",
          "rent": 8300,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-301",
          "rent": 8300,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-501",
          "rent": 7000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-01.jpg",
          "alt": "永康 201/301/501 房型實景 1",
          "caption": "56號301／58號301實景｜同格局參考（1）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-02.jpg",
          "alt": "永康 201/301/501 房型實景 2",
          "caption": "56號301／58號301實景｜同格局參考（2）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-03.jpg",
          "alt": "永康 201/301/501 房型實景 3",
          "caption": "56號301／58號301實景｜同格局參考（3）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-04.jpg",
          "alt": "永康 201/301/501 房型實景 4",
          "caption": "56號301／58號301實景｜同格局參考（4）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-05.jpg",
          "alt": "永康 201/301/501 房型實景 5",
          "caption": "56號301／58號301實景｜同格局參考（5）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-06.jpg",
          "alt": "永康 201/301/501 房型實景 6",
          "caption": "56號301／58號301實景｜同格局參考（6）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-07.jpg",
          "alt": "永康 201/301/501 房型實景 7",
          "caption": "56號301／58號301實景｜同格局參考（7）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-08.jpg",
          "alt": "永康 201/301/501 房型實景 8",
          "caption": "56號301／58號301實景｜同格局參考（8）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-09.jpg",
          "alt": "永康 201/301/501 房型實景 9",
          "caption": "56號301／58號301實景｜同格局參考（9）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/02/02-10.jpg",
          "alt": "永康 201/301/501 房型實景 10",
          "caption": "56號301／58號301實景｜同格局參考（10）"
        }
      ],
      "photoDisclaimer": "本房型照片由 56 號 301 室與 58 號 301 室實景拍攝；房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "03",
      "name": "202 / 302 / 502 房型（2F/3F/5F・約5坪・獨立陽台）",
      "representativeRoom": "56-302 / 58-202",
      "roomNumbers": [
        "54-202",
        "54-302",
        "54-502",
        "56-202",
        "56-302",
        "56-502",
        "58-202",
        "58-302",
        "58-502"
      ],
      "area": "約 5 坪",
      "bedType": "雙人床",
      "rentRange": "5,800～6,850 元／月",
      "status": "54-302、54-502 空房釋出",
      "isAvailable": true,
      "equipment": {
        "furniture": [
          "雙人床",
          "衣櫃",
          "書桌椅",
          "獨立陽台"
        ],
        "appliances": [
          "冰箱",
          "電視",
          "獨立網路",
          "第四台",
          "儲水式電熱水器"
        ]
      },
      "rooms": [
        {
          "roomNumber": "54-202",
          "rent": 6750,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "54-302",
          "rent": 6500,
          "status": "空房可預約",
          "isAvailable": true
        },
        {
          "roomNumber": "54-502",
          "rent": 5800,
          "status": "空房可預約",
          "isAvailable": true
        },
        {
          "roomNumber": "56-202",
          "rent": 6600,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "56-302",
          "rent": 6850,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "56-502",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-202",
          "rent": 6700,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-302",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "58-502",
          "rent": 6600,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-01.jpg",
          "alt": "永康 202/302/502 房型實景 1",
          "caption": "56號302／58號202實景｜同格局參考（1）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-02.jpg",
          "alt": "永康 202/302/502 房型實景 2",
          "caption": "56號302／58號202實景｜同格局參考（2）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-03.jpg",
          "alt": "永康 202/302/502 房型實景 3",
          "caption": "56號302／58號202實景｜同格局參考（3）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-04.jpg",
          "alt": "永康 202/302/502 房型實景 4",
          "caption": "56號302／58號202實景｜同格局參考（4）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-05.jpg",
          "alt": "永康 202/302/502 房型實景 5",
          "caption": "56號302／58號202實景｜同格局參考（5）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-06.jpg",
          "alt": "永康 202/302/502 房型實景 6",
          "caption": "56號302／58號202實景｜同格局參考（6）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-07.jpg",
          "alt": "永康 202/302/502 房型實景 7",
          "caption": "56號302／58號202實景｜同格局參考（7）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-08.jpg",
          "alt": "永康 202/302/502 房型實景 8",
          "caption": "56號302／58號202實景｜同格局參考（8）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-09.jpg",
          "alt": "永康 202/302/502 房型實景 9",
          "caption": "56號302／58號202實景｜同格局參考（9）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-10.jpg",
          "alt": "永康 202/302/502 房型實景 10",
          "caption": "56號302／58號202實景｜同格局參考（10）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-11.jpg",
          "alt": "永康 202/302/502 房型實景 11",
          "caption": "56號302／58號202實景｜同格局參考（11）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-12.jpg",
          "alt": "永康 202/302/502 房型實景 12",
          "caption": "56號302／58號202實景｜同格局參考（12）"
        },
        {
          "src": "/assets/properties/yongkang-abc/types/03/03-13.jpg",
          "alt": "永康 202/302/502 房型實景 13",
          "caption": "56號302／58號202實景｜同格局參考（13）"
        }
      ],
      "photoDisclaimer": "本房型照片由 56 號 302 室與 58 號 202 室實景拍攝；54-302、54-502 為同格局房間，實際現況以現場帶看為準。"
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
    return "/properties/yongkang-abc/types/" + typeId + "/index.html";
  }

  function renderProperty(property) {
    var rentSummary = document.getElementById("rent-summary");
    if (rentSummary) {
      rentSummary.textContent = property.rentSummary || property.rent || "月租 5,800～8,300 元";
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
          escapeHtml(property.sharedFacilitiesText || "投幣式洗衣機、脫水機、冰溫熱三用 RO 飲水機") +
          '（設施照片確認中）。</div>';
      }
    }

    var availGrid = document.getElementById("available-rooms-grid");
    if (availGrid && property.availability && property.availability.availableRooms) {
      availGrid.innerHTML = property.availability.availableRooms.map(function (item) {
        var href = resolvePageLink(item.type);
        var lineHref = property.lineUrl + "?text=" + encodeURIComponent("您好，我想預約看永康ABC【" + item.room + "房（" + Number(item.rent).toLocaleString() + "元）】");
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
          '<p><b>涵蓋房號：</b>' + escapeHtml(type.roomNumbers.join("、")) + '</p>' +
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
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回永康ABC物件首頁。</div></div></section>';
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
      floorsEl.textContent = "坪數：" + type.area + " ｜ 床型：" + type.bedType + " ｜ 涵蓋房號：" + type.roomNumbers.join("、") + "。各房實際屋況以現場帶看為準。";
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
        { title: "家具與格局配備", items: equipment.furniture },
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
    var lineText = "您好，我想詢問永康ABC【" + type.name + "】最新房況與預約看屋";
    var lineUrlWithText = property.lineUrl + "?text=" + encodeURIComponent(lineText);
    lineButtons.forEach(function (button) { button.href = lineUrlWithText; });
  }

  if (isFileProtocol) {
    renderProperty(fallbackData);
    renderTypePage(fallbackData);
  } else {
    fetch(dataUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("永康ABC房源資料讀取失敗");
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
