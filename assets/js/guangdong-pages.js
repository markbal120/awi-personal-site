(function () {
  "use strict";

  var dataUrl = "/properties/data/guangdong.json";
  var isFileProtocol = window.location.protocol === "file:";
  var fallbackData = {
  "schemaVersion": "2.0",
  "slug": "guangdong",
  "name": "廣東二街57號分租套房",
  "area": "高雄市苓雅區",
  "publicLocation": "廣東二街57號（近光華夜市、三和市場）",
  "address": "高雄市苓雅區廣東二街57號",
  "buildingFloors": "1F、2F、3F、5F",
  "floorsWithRooms": [
    "1F",
    "2F",
    "3F",
    "5F"
  ],
  "elevator": true,
  "suiteArea": "分租套房約 3.5～8 坪",
  "rent": "月租 5,800～8,610 元",
  "rentSummary": "各房月租 5,800～8,610 元（目前無空房）",
  "rentNote": "租金包含水費、網路、第四台；電費依全棟電費攤算。",
  "rentDiscounts": [
    "半年繳：每月租金折 200 元",
    "年繳：每月租金折 300 元"
  ],
  "rentTermsNote": "押金 2 個月。租金包含水費、寬頻網路、第四台；電費依照全棟電費攤算。半年繳每月折 200 元，年繳每月折 300 元。",
  "intro": [
    "本物件位於高雄市苓雅區廣東二街57號，鄰近光華夜市與三和市場，生活採買與餐飲機能便利。",
    "建物配備電梯，全棟規劃 15 間分租套房（約 3.5～8 坪），每間房皆配置書桌椅、衣櫃、冷氣、電視、冰箱、電熱水器與獨立 Wi-Fi。",
    "公共區域設有冰溫熱三用飲水機、投幣式洗衣機、投幣式乾衣機、脫水機與電梯。"
  ],
  "roomEquipment": {
    "furniture": [
      "書桌椅（每房皆有）",
      "衣櫃",
      "床組（101 房為雙人床，其餘房型為單人床）"
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
    "electricity": "依照全棟電費攤算。"
  },
  "sharedFacilitiesText": "電梯、冰溫熱三用飲水機、投幣式洗衣機、投幣式乾衣機、脫水機",
  "sharedFacilities": [
    {
      "name": "電梯",
      "description": "建物設有電梯，上下樓搬運與日常進出方便。",
      "image": "/assets/properties/guangdong/common/elevator.jpg",
      "alt": "廣東二街57號電梯"
    },
    {
      "name": "冰溫熱三用飲水機",
      "description": "公共區域設有冰溫熱三用飲水機供住戶使用。",
      "image": "/assets/properties/guangdong/common/dispenser.jpg",
      "alt": "廣東二街57號冰溫熱三用飲水機"
    },
    {
      "name": "投幣式乾衣機、脫水機",
      "description": "公共洗衣空間設有投幣式乾衣機與脫水機（另有投幣式洗衣機，照片待補）。",
      "image": "/assets/properties/guangdong/common/dryer-dehydrator.jpg",
      "alt": "廣東二街57號投幣式乾衣機與脫水機"
    }
  ],
  "lineUrl": "https://lin.ee/741U2pz",
  "availability": {
    "availableRooms": [],
    "confirmedRentedRooms": [
      "101",
      "102",
      "103",
      "201",
      "202",
      "203",
      "205",
      "301",
      "302",
      "303",
      "305",
      "501",
      "502",
      "505"
    ],
    "unavailableRooms": [
      "503"
    ],
    "note": "目前全棟 14 間已出租、503 整理中暫不出租；如需候補通知或確認最新房況，請透過 LINE 洽詢。"
  },
  "roomTypes": [
    {
      "type": "01",
      "name": "101 獨立大套房（8坪・雙人床）",
      "representativeRoom": "101",
      "roomNumbers": [
        "101"
      ],
      "area": "8 坪",
      "bedType": "雙人床",
      "rentRange": "8,500 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "101",
          "rent": 8500,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/01/01-02.jpg",
          "alt": "廣東二街57號 101 房實景（室內空間）",
          "caption": "101 房實景拍攝（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/01/01-01.jpg",
          "alt": "廣東二街57號 101 房實景（衛浴空間）",
          "caption": "101 房實景拍攝（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/01/01-03.jpg",
          "alt": "廣東二街57號 101 房實景 3",
          "caption": "101 房實景拍攝（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/01/01-04.jpg",
          "alt": "廣東二街57號 101 房實景 4",
          "caption": "101 房實景拍攝（4）"
        },
        {
          "src": "/assets/properties/guangdong/types/01/01-05.jpg",
          "alt": "廣東二街57號 101 房實景 5",
          "caption": "101 房實景拍攝（5）"
        },
        {
          "src": "/assets/properties/guangdong/types/01/01-06.jpg",
          "alt": "廣東二街57號 101 房實景 6",
          "caption": "101 房實景拍攝（6）"
        }
      ],
      "photoDisclaimer": "房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "02",
      "name": "102 / 103 對稱格局套房（4.7坪・單人床）",
      "representativeRoom": "102",
      "roomNumbers": [
        "102",
        "103"
      ],
      "area": "4.7 坪",
      "bedType": "單人床",
      "rentRange": "6,500 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "102",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "103",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/02/02-01.jpg",
          "alt": "廣東二街57號 102 房實景（102/103對稱格局參考）1",
          "caption": "102 房實景｜102/103 對稱格局參考（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/02/02-02.jpg",
          "alt": "廣東二街57號 102 房實景（102/103對稱格局參考）2",
          "caption": "102 房實景｜102/103 對稱格局參考（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/02/02-03.jpg",
          "alt": "廣東二街57號 102 房實景（102/103對稱格局參考）3",
          "caption": "102 房實景｜102/103 對稱格局參考（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/02/02-04.jpg",
          "alt": "廣東二街57號 102 房實景（102/103對稱格局參考）4",
          "caption": "102 房實景｜102/103 對稱格局參考（4）"
        },
        {
          "src": "/assets/properties/guangdong/types/02/02-05.jpg",
          "alt": "廣東二街57號 102 房實景（102/103對稱格局參考）5",
          "caption": "102 房實景｜102/103 對稱格局參考（5）"
        }
      ],
      "photoDisclaimer": "本房型照片由 102 房實景拍攝；103 為對稱格局房間，房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "03",
      "name": "201 / 301 / 501 套房（4.7坪・單人床）",
      "representativeRoom": "301",
      "roomNumbers": [
        "201",
        "301",
        "501"
      ],
      "area": "4.7 坪",
      "bedType": "單人床",
      "rentRange": "7,000～8,610 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "201",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "301",
          "rent": 7000,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "501",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/03/03-01.jpg",
          "alt": "廣東二街57號 301 房實景（201/301/501同格局參考）1",
          "caption": "301 房實景｜201/301/501 同格局參考（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/03/03-02.jpg",
          "alt": "廣東二街57號 301 房實景（201/301/501同格局參考）2",
          "caption": "301 房實景｜201/301/501 同格局參考（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/03/03-03.jpg",
          "alt": "廣東二街57號 301 房實景（201/301/501同格局參考）3",
          "caption": "301 房實景｜201/301/501 同格局參考（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/03/03-04.jpg",
          "alt": "廣東二街57號 301 房實景（201/301/501同格局參考）4",
          "caption": "301 房實景｜201/301/501 同格局參考（4）"
        }
      ],
      "photoDisclaimer": "本房型照片由 301 房實景拍攝；房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "04",
      "name": "202 / 302 / 502 套房（4.7坪・單人床）",
      "representativeRoom": "302",
      "roomNumbers": [
        "202",
        "302",
        "502"
      ],
      "area": "4.7 坪",
      "bedType": "單人床",
      "rentRange": "7,000～8,610 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "202",
          "rent": 7000,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "302",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "502",
          "rent": 7000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/04/04-01.jpg",
          "alt": "廣東二街57號 04 房型代表照片 1",
          "caption": "302/502 房實景｜202/302/502 同格局參考（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-02.jpg",
          "alt": "廣東二街57號 04 房型代表照片 2",
          "caption": "302/502 房實景｜202/302/502 同格局參考（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-03.jpg",
          "alt": "廣東二街57號 04 房型代表照片 3",
          "caption": "302/502 房實景｜202/302/502 同格局參考（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-04.jpg",
          "alt": "廣東二街57號 04 房型代表照片 4",
          "caption": "302/502 房實景｜202/302/502 同格局參考（4）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-05.jpg",
          "alt": "廣東二街57號 04 房型代表照片 5",
          "caption": "302/502 房實景｜202/302/502 同格局參考（5）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-06.jpg",
          "alt": "廣東二街57號 04 房型代表照片 6",
          "caption": "302/502 房實景｜202/302/502 同格局參考（6）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-07.jpg",
          "alt": "廣東二街57號 04 房型代表照片 7",
          "caption": "302/502 房實景｜202/302/502 同格局參考（7）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-08.jpg",
          "alt": "廣東二街57號 04 房型代表照片 8",
          "caption": "302/502 房實景｜202/302/502 同格局參考（8）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-09.jpg",
          "alt": "廣東二街57號 04 房型代表照片 9",
          "caption": "302/502 房實景｜202/302/502 同格局參考（9）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-10.jpg",
          "alt": "廣東二街57號 04 房型代表照片 10",
          "caption": "302/502 房實景｜202/302/502 同格局參考（10）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-11.jpg",
          "alt": "廣東二街57號 04 房型代表照片 11",
          "caption": "302/502 房實景｜202/302/502 同格局參考（11）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-12.jpg",
          "alt": "廣東二街57號 04 房型代表照片 12",
          "caption": "302/502 房實景｜202/302/502 同格局參考（12）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-13.jpg",
          "alt": "廣東二街57號 04 房型代表照片 13",
          "caption": "302/502 房實景｜202/302/502 同格局參考（13）"
        },
        {
          "src": "/assets/properties/guangdong/types/04/04-14.jpg",
          "alt": "廣東二街57號 04 房型代表照片 14",
          "caption": "302/502 房實景｜202/302/502 同格局參考（14）"
        }
      ],
      "photoDisclaimer": "本房型照片由 302 與 502 房實景拍攝；房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "05",
      "name": "203 / 303 / 503 套房（3.5坪・單人床）",
      "representativeRoom": "303",
      "roomNumbers": [
        "203",
        "303",
        "503"
      ],
      "area": "3.5 坪",
      "bedType": "單人床",
      "rentRange": "5,800～6,500 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "203",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "303",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "503",
          "rent": 6500,
          "status": "整理中（暫不出租）",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/05/05-01.jpg",
          "alt": "廣東二街57號 303 房實景（203/303/503同格局參考）1",
          "caption": "303 房實景｜203/303/503 同格局參考（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/05/05-02.jpg",
          "alt": "廣東二街57號 303 房實景（203/303/503同格局參考）2",
          "caption": "303 房實景｜203/303/503 同格局參考（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/05/05-03.jpg",
          "alt": "廣東二街57號 303 房實景（203/303/503同格局參考）3",
          "caption": "303 房實景｜203/303/503 同格局參考（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/05/05-04.jpg",
          "alt": "廣東二街57號 303 房實景（203/303/503同格局參考）4",
          "caption": "303 房實景｜203/303/503 同格局參考（4）"
        },
        {
          "src": "/assets/properties/guangdong/types/05/05-05.jpg",
          "alt": "廣東二街57號 303 房實景（203/303/503同格局參考）5",
          "caption": "303 房實景｜203/303/503 同格局參考（5）"
        }
      ],
      "photoDisclaimer": "本房型照片由 303 房實景拍攝；503 目前整理中暫不出租，房型代表照片，實際現況以現場帶看為準。"
    },
    {
      "type": "06",
      "name": "205 / 305 / 505 套房（4.7坪・單人床）",
      "representativeRoom": "505",
      "roomNumbers": [
        "205",
        "305",
        "505"
      ],
      "area": "4.7 坪",
      "bedType": "單人床",
      "rentRange": "6,600～7,000 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "205",
          "rent": 6800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "305",
          "rent": 6600,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "505",
          "rent": 7000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/guangdong/types/06/06-01.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）1",
          "caption": "505 房實景｜205/305/505 同格局參考（1）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-02.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）2",
          "caption": "505 房實景｜205/305/505 同格局參考（2）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-03.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）3",
          "caption": "505 房實景｜205/305/505 同格局參考（3）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-04.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）4",
          "caption": "505 房實景｜205/305/505 同格局參考（4）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-05.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）5",
          "caption": "505 房實景｜205/305/505 同格局參考（5）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-06.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）6",
          "caption": "505 房實景｜205/305/505 同格局參考（6）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-07.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）7",
          "caption": "505 房實景｜205/305/505 同格局參考（7）"
        },
        {
          "src": "/assets/properties/guangdong/types/06/06-08.jpg",
          "alt": "廣東二街57號 505 房實景（205/305/505同格局參考）8",
          "caption": "505 房實景｜205/305/505 同格局參考（8）"
        }
      ],
      "photoDisclaimer": "本房型照片由 505 房實景拍攝；房型代表照片，實際現況以現場帶看為準。"
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
    return "/properties/guangdong/types/" + typeId + "/index.html";
  }

  function renderProperty(property) {
    var rentSummary = document.getElementById("rent-summary");
    if (rentSummary) {
      rentSummary.textContent = property.rentSummary || "各房月租 5,800～8,610 元";
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
          var lineHref = property.lineUrl + "?text=" + encodeURIComponent("您好，我想預約看廣東二街57號【" + item.room + "房（" + Number(item.rent).toLocaleString() + "元）】");
          return '<article class="siwei-avail-card">' +
            '<img src="' + escapeHtml(resolveUrl(item.coverImage)) + '" alt="' + escapeHtml(item.imageDisclaimer) + '" loading="lazy">' +
            '<div class="siwei-avail-card-body">' +
            '<div class="siwei-avail-room-no"><span>' + escapeHtml(item.room) + ' 房</span><span class="siwei-card-badge is-available">' + escapeHtml(item.badge) + '</span></div>' +
            '<div class="siwei-avail-price">' + Number(item.rent).toLocaleString() + ' 元／月</div>' +
            '<p class="siwei-avail-desc">樓層：' + escapeHtml(item.floor) + ' ｜ ' + escapeHtml(item.typeName) + '</p>' +
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
          : '<div class="siwei-photo-placeholder"><span>照片待補</span></div>';
        var badgeHtml = type.isAvailable
          ? '<span class="siwei-card-badge is-available">空房釋出</span>'
          : '<span class="siwei-card-badge">目前無空房</span>';
        var floors = type.roomNumbers.map(function (room) { return room.charAt(0) + "F"; })
          .filter(function (floor, index, list) { return list.indexOf(floor) === index; }).join("、");

        return '<a class="p-card siwei-type-card" href="' + href + '">' +
          photoHtml +
          '<div class="p-card-body">' +
          badgeHtml +
          '<div class="p-type-no">' + escapeHtml(type.name) + '</div>' +
          '<div class="siwei-type-rent">' + escapeHtml(type.rentRange) + '</div>' +
          '<p><b>涵蓋房號：</b>' + escapeHtml(type.roomNumbers.join("、")) + ' 房（' + escapeHtml(floors) + '）</p>' +
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
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回廣東二街57號物件首頁。</div></div></section>';
      return;
    }

    var titleEl = document.getElementById("type-title");
    if (titleEl) titleEl.textContent = type.name;

    var badgeEl = document.getElementById("type-status-badge");
    if (badgeEl) {
      badgeEl.className = "siwei-card-badge " + (type.isAvailable ? "is-available" : "");
      badgeEl.textContent = type.status;
    }

    var floors = type.roomNumbers.map(function (room) { return room.charAt(0) + "F"; })
      .filter(function (floor, index, list) { return list.indexOf(floor) === index; }).join("、");
    var floorsEl = document.getElementById("type-floors");
    if (floorsEl) {
      floorsEl.textContent = "坪數：" + type.area + " ｜ 床型：" + type.bedType + " ｜ 適用樓層：" + floors + " ｜ 涵蓋房號：" + type.roomNumbers.join("、") + " 房。";
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
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer || "房型代表照片，實際現況以現場帶看為準。";
    } else {
      gallery.innerHTML = '<div class="p-empty" style="grid-column:1/-1;text-align:center;">照片待補，實際屋況以現場帶看為準。</div>';
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer || "";
    }

    var rentEl = document.getElementById("type-rent");
    if (rentEl) rentEl.textContent = type.rentRange;

    var rentDiscountsEl = document.getElementById("type-rent-discounts");
    if (rentDiscountsEl) {
      rentDiscountsEl.textContent = (property.rentDiscounts || []).join("\n");
    }

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
    var lineText = "您好，我想詢問廣東二街57號【" + type.name + "】最新房況與候補預約";
    var lineUrlWithText = property.lineUrl + "?text=" + encodeURIComponent(lineText);
    lineButtons.forEach(function (button) { button.href = lineUrlWithText; });
  }

  if (isFileProtocol) {
    renderProperty(fallbackData);
    renderTypePage(fallbackData);
  } else {
    fetch(dataUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("廣東二街57號房源資料讀取失敗");
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
