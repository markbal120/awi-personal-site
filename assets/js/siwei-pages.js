(function () {
  "use strict";

  var dataUrl = "/properties/data/siwei.json";
  var isFileProtocol = window.location.protocol === "file:";

  var fallbackData = {
  "schemaVersion": "2.0",
  "slug": "siwei",
  "name": "四維三路59號分租套房",
  "area": "高雄市苓雅區",
  "publicLocation": "四維三路59號（近四維行政中心）",
  "address": "高雄市苓雅區四維三路59號",
  "buildingFloors": "3F、5F、6F",
  "floorsWithRooms": [
    "3F",
    "5F",
    "6F"
  ],
  "elevator": false,
  "suiteArea": "分租套房約4～6坪",
  "rent": "月租 5,000～8,610 元",
  "rentSummary": "各房月租 5,000～8,610 元",
  "rentNote": "各房間租金固定明確；租金包含水費、網路、第四台、垃圾集中處理費；電費依各房獨立電表按台電帳單分攤。",
  "rentDiscounts": [],
  "rentTermsNote": "押金2個月。租金包含水費、寬頻網路、第四台、專人垃圾集中處理；電費依全棟台電帳單按各房間獨立電表實際用電分攤。",
  "intro": [
    "本物件位於高雄市苓雅區四維三路59號，鄰近四維行政中心、復興二路商圈，生活機能優越，餐飲、便利商店林立。",
    "全棟規劃優質分租套房，每間房皆配置桌椅、床墊、衣櫥、冷氣、電視、冰箱、電熱水爐與獨立網路 Wi-Fi。",
    "本建物無電梯（公寓樓梯動線），居住環境單純，設有公共洗衣機、公共曬衣區與專人垃圾集中清運處理。"
  ],
  "roomEquipment": {
    "furniture": [
      "書桌椅（每房皆有）",
      "雙人床墊",
      "衣櫥"
    ],
    "appliances": [
      "冷氣",
      "液晶電視（附第四台）",
      "冰箱",
      "電熱水爐",
      "獨立網路 Wi-Fi"
    ]
  },
  "utilities": {
    "water": "租金已包含水費。",
    "electricity": "依全棟台電帳單按各房間獨立電表實際用電分算。"
  },
  "sharedFacilitiesText": "公共洗衣機、公共遮棚曬衣區、大門感應門鎖、專人垃圾集中處理（免追垃圾車）、寬敞樓梯動線",
  "sharedFacilities": [
    {
      "name": "公用洗衣機",
      "description": "公共區域設有洗衣機供住戶使用。",
      "image": "/assets/properties/siwei/common/IMG_4542.jpg",
      "alt": "四維三路59號公用洗衣機"
    },
    {
      "name": "遮棚公共曬衣空間",
      "description": "頂樓遮棚公共走道曬衣空間，通風良好。",
      "image": "/assets/properties/siwei/common/IMG_4544.jpg",
      "alt": "四維三路59號公共曬衣區"
    },
    {
      "name": "公共走道動線",
      "description": "公共梯間動線寬敞，定期清潔維護與垃圾集中處理。",
      "image": "/assets/properties/siwei/common/IMG_4562.jpg",
      "alt": "四維三路59號公共走道"
    }
  ],
  "lineUrl": "https://lin.ee/741U2pz",
  "availability": {
    "availableRooms": [
      {
        "room": "307",
        "floor": "3F",
        "rent": 6500,
        "type": "04",
        "typeName": "307 / 507 套房（同格局）",
        "badge": "超值釋出・預約帶看",
        "coverImage": "/assets/properties/siwei/rooms/507/IMG_4572.jpg",
        "imageDisclaimer": "507房實景｜307同格局參考，實際現況以現場帶看為準"
      },
      {
        "room": "605",
        "floor": "6F",
        "rent": 6800,
        "type": "10",
        "typeName": "605 獨立套房",
        "badge": "實景可看・立即預約",
        "coverImage": "/assets/properties/siwei/rooms/605/243718.jpg",
        "imageDisclaimer": "605房實景拍攝"
      },
      {
        "room": "606",
        "floor": "6F",
        "rent": 6800,
        "type": "11",
        "typeName": "606 獨立套房",
        "badge": "實景可看・立即預約",
        "coverImage": "/assets/properties/siwei/rooms/606/IMG_4546.jpg",
        "imageDisclaimer": "606房實景拍攝"
      }
    ],
    "confirmedRentedRooms": [
      "301",
      "302",
      "305",
      "308",
      "501",
      "502",
      "503",
      "505",
      "507",
      "508",
      "601",
      "602",
      "603",
      "607"
    ],
    "note": "目前對外公開招租為 307、605、606 共 3 間；其餘房號目前皆在租約中。"
  },
  "roomTypes": [
    {
      "type": "01",
      "name": "301 / 501 套房（同格局）",
      "representativeRoom": "501",
      "roomNumbers": [
        "301",
        "501"
      ],
      "rentRange": "6,200～6,800 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "301",
          "rent": 6800,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "501",
          "rent": 6200,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/501/IMG_4585.jpg",
          "alt": "501房實景（301/501格局參考）",
          "caption": "501房實景｜室內空間與採光窗"
        },
        {
          "src": "/assets/properties/siwei/rooms/501/IMG_4586.jpg",
          "alt": "501房實景（301/501格局參考）",
          "caption": "501房實景｜床位與衣櫥"
        },
        {
          "src": "/assets/properties/siwei/rooms/501/IMG_4587.jpg",
          "alt": "501房實景（301/501格局參考）",
          "caption": "501房實景｜書桌椅與置物空間"
        },
        {
          "src": "/assets/properties/siwei/rooms/501/IMG_4591.JPG",
          "alt": "501房實景（301/501格局參考）",
          "caption": "501房實景｜衛浴設備"
        },
        {
          "src": "/assets/properties/siwei/rooms/301/IMG_4602.jpg",
          "alt": "301房實景拍攝",
          "caption": "301房實景｜室內空間"
        },
        {
          "src": "/assets/properties/siwei/rooms/301/IMG_4605.jpg",
          "alt": "301房實景拍攝",
          "caption": "301房實景｜書桌椅與床組"
        }
      ],
      "photoDisclaimer": "照片為 501 房與 301 房實景拍攝，各房個別屋況以現場帶看為準。"
    },
    {
      "type": "02",
      "name": "302 / 502 套房（同格局）",
      "representativeRoom": "502",
      "roomNumbers": [
        "302",
        "502"
      ],
      "rentRange": "6,500～8,610 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "302",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        },
        {
          "roomNumber": "502",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/502/LINE_ALBUM_20240803四維502_240805_2.jpg",
          "alt": "502房實景（302同格局參考）",
          "caption": "502房實景｜302同格局參考，實際現況以現場帶看為準"
        },
        {
          "src": "/assets/properties/siwei/rooms/502/LINE_ALBUM_20240803四維502_240805_3.jpg",
          "alt": "502房實景（302同格局參考）",
          "caption": "502房實景｜床位與窗戶採光"
        },
        {
          "src": "/assets/properties/siwei/rooms/502/LINE_ALBUM_20240803四維502_240805_4.jpg",
          "alt": "502房實景（302同格局參考）",
          "caption": "502房實景｜桌椅與收納配置"
        },
        {
          "src": "/assets/properties/siwei/rooms/502/LINE_ALBUM_20240803四維502_240805_5.jpg",
          "alt": "502房實景（302同格局參考）",
          "caption": "502房實景｜衛浴空間"
        }
      ],
      "photoDisclaimer": "本房型照片由 502 房實景拍攝；302 為同格局房間，照片僅供格局參考，不可視為 302 現況照。"
    },
    {
      "type": "03",
      "name": "305 / 505 套房（同格局）",
      "representativeRoom": "505",
      "roomNumbers": [
        "305",
        "505"
      ],
      "rentRange": "6,200～6,600 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "305",
          "rent": 6200,
          "status": "已出租（原始6,500元，年繳折扣300元）",
          "isAvailable": false
        },
        {
          "roomNumber": "505",
          "rent": 6600,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "rentDiscounts": [
        "305 房享年繳租金每月折 300 元優惠"
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/505/IMG_4579.jpg",
          "alt": "505房實景（305同格局參考）",
          "caption": "505房實景｜305同格局參考，實際現況以現場帶看為準"
        },
        {
          "src": "/assets/properties/siwei/rooms/505/IMG_4580.jpg",
          "alt": "505房實景（305同格局參考）",
          "caption": "505房實景｜室內採光與床位"
        },
        {
          "src": "/assets/properties/siwei/rooms/505/IMG_4582.JPG",
          "alt": "505房實景（305同格局參考）",
          "caption": "505房實景｜衣櫥與書桌椅"
        },
        {
          "src": "/assets/properties/siwei/rooms/505/IMG_4583.jpg",
          "alt": "505房實景（305同格局參考）",
          "caption": "505房實景｜衛浴設備"
        }
      ],
      "photoDisclaimer": "本房型照片由 505 房實景拍攝；305 為同格局房間，照片僅供格局參考，不可視為 305 現況照。"
    },
    {
      "type": "04",
      "name": "307 / 507 套房（同格局）",
      "representativeRoom": "507",
      "roomNumbers": [
        "307",
        "507"
      ],
      "rentRange": "6,500～8,610 元／月",
      "status": "307 空房釋出",
      "isAvailable": true,
      "rooms": [
        {
          "roomNumber": "307",
          "rent": 6500,
          "status": "空房可預約",
          "isAvailable": true
        },
        {
          "roomNumber": "507",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/507/IMG_4572.jpg",
          "alt": "507房實景｜307同格局參考",
          "caption": "507房實景｜307同格局參考，實際現況以現場帶看為準"
        },
        {
          "src": "/assets/properties/siwei/rooms/507/IMG_4574.jpg",
          "alt": "507房實景｜307同格局參考",
          "caption": "507房實景｜室內空間與採光"
        },
        {
          "src": "/assets/properties/siwei/rooms/507/IMG_4575.jpg",
          "alt": "507房實景｜307同格局參考",
          "caption": "507房實景｜書桌椅與床組配置"
        },
        {
          "src": "/assets/properties/siwei/rooms/507/IMG_4576.jpg",
          "alt": "507房實景｜307同格局參考",
          "caption": "507房實景｜衣櫥收納"
        },
        {
          "src": "/assets/properties/siwei/rooms/507/IMG_4577.jpg",
          "alt": "507房實景｜307同格局參考",
          "caption": "507房實景｜衛浴浴缸與熱水器"
        }
      ],
      "photoDisclaimer": "507房實景｜307同格局參考，實際現況以現場帶看為準。"
    },
    {
      "type": "05",
      "name": "308 / 508 套房（同格局）",
      "representativeRoom": "508",
      "roomNumbers": [
        "308",
        "508"
      ],
      "rentRange": "目前無空房",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "308",
          "rent": null,
          "status": "已出租",
          "isAvailable": false,
          "note": "特殊承租合約"
        },
        {
          "roomNumber": "508",
          "rent": 5000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/508/IMG_4563.jpg",
          "alt": "508房實景（308同格局參考）",
          "caption": "508房實景｜室內格局參考，實際現況以現場帶看為準"
        },
        {
          "src": "/assets/properties/siwei/rooms/508/IMG_4564.jpg",
          "alt": "508房實景（308同格局參考）",
          "caption": "508房實景｜床位與窗戶"
        },
        {
          "src": "/assets/properties/siwei/rooms/508/IMG_4566.jpg",
          "alt": "508房實景（308同格局參考）",
          "caption": "508房實景｜冷氣、冰箱與桌椅配置"
        },
        {
          "src": "/assets/properties/siwei/rooms/508/IMG_4567.jpg",
          "alt": "508房實景（308同格局參考）",
          "caption": "508房實景｜收納置物空間"
        },
        {
          "src": "/assets/properties/siwei/rooms/508/IMG_4568.jpg",
          "alt": "508房實景（308同格局參考）",
          "caption": "508房實景｜衛浴設備"
        }
      ],
      "photoDisclaimer": "本房型照片由 508 房實景拍攝；308 為同格局房間，目前無空房可招租。"
    },
    {
      "type": "06",
      "name": "503 獨立套房",
      "representativeRoom": "503",
      "roomNumbers": [
        "503"
      ],
      "rentRange": "5,800 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "503",
          "rent": 5800,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/503/IMG_4596.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜長型室內格局與採光"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/IMG_4597.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜床位與收納"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/IMG_4599.JPG",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜書桌椅與家電配置"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/IMG_4600.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜對外窗與衛浴浴缸"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/652227.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜室內全景視角"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/652228.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜書桌椅與家具實況"
        },
        {
          "src": "/assets/properties/siwei/rooms/503/652229.jpg",
          "alt": "503房實景拍攝",
          "caption": "503房實景｜衛浴實況"
        }
      ],
      "photoDisclaimer": "503 房實景拍攝，實際屋況以現場帶看為準。"
    },
    {
      "type": "07",
      "name": "601 獨立套房",
      "representativeRoom": "601",
      "roomNumbers": [
        "601"
      ],
      "rentRange": "6,000 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "601",
          "rent": 6000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "六樓獨立格局，目前已出租；照片待補，以現場帶看為準。"
    },
    {
      "type": "08",
      "name": "602 獨立套房",
      "representativeRoom": "602",
      "roomNumbers": [
        "602"
      ],
      "rentRange": "6,500 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "602",
          "rent": 6500,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "六樓獨立格局，目前已出租；照片待補，以現場帶看為準。"
    },
    {
      "type": "09",
      "name": "603 獨立套房",
      "representativeRoom": "603",
      "roomNumbers": [
        "603"
      ],
      "rentRange": "8,610 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "603",
          "rent": 8610,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4555.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜寬敞室內空間"
        },
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4556.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜床位與窗戶採光"
        },
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4557.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜電視櫃與冷氣"
        },
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4558.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜衣櫥收納"
        },
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4559.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜衛浴洗手台與馬桶"
        },
        {
          "src": "/assets/properties/siwei/rooms/603/IMG_4560.jpg",
          "alt": "603房實景拍攝",
          "caption": "603房實景｜淋浴設備"
        }
      ],
      "photoDisclaimer": "603 房實景拍攝，實際屋況以現場帶看為準。"
    },
    {
      "type": "10",
      "name": "605 獨立套房",
      "representativeRoom": "605",
      "roomNumbers": [
        "605"
      ],
      "rentRange": "6,800 元／月",
      "status": "605 空房釋出",
      "isAvailable": true,
      "rooms": [
        {
          "roomNumber": "605",
          "rent": 6800,
          "status": "空房可預約",
          "isAvailable": true
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/605/243718.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜室內空間與床位"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243719.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜採光窗與書桌椅"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243720.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜衣櫥與吊扇配置"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243721.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜電視與收納櫃"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243722.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜衛浴洗手台與馬桶"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243723.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜淋浴設備"
        },
        {
          "src": "/assets/properties/siwei/rooms/605/243724.jpg",
          "alt": "605房實景拍攝",
          "caption": "605房實景｜房間入口動線"
        }
      ],
      "photoDisclaimer": "605 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "11",
      "name": "606 獨立套房",
      "representativeRoom": "606",
      "roomNumbers": [
        "606"
      ],
      "rentRange": "6,800 元／月",
      "status": "606 空房釋出",
      "isAvailable": true,
      "rooms": [
        {
          "roomNumber": "606",
          "rent": 6800,
          "status": "空房可預約",
          "isAvailable": true
        }
      ],
      "photos": [
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4546.jpg",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜床位與窗型冷氣"
        },
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4547.jpg",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜液晶電視與桌椅"
        },
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4548.jpg",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜衣櫥與收納空間"
        },
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4549.jpg",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜室內格局"
        },
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4550.jpg",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜衛浴淋浴設備"
        },
        {
          "src": "/assets/properties/siwei/rooms/606/IMG_4553.JPG",
          "alt": "606房實景拍攝",
          "caption": "606房實景｜衛浴熱水器"
        }
      ],
      "photoDisclaimer": "606 房實景拍攝，實際現況以現場帶看為準。"
    },
    {
      "type": "12",
      "name": "607 獨立套房",
      "representativeRoom": "607",
      "roomNumbers": [
        "607"
      ],
      "rentRange": "6,000 元／月",
      "status": "目前無空房",
      "isAvailable": false,
      "rooms": [
        {
          "roomNumber": "607",
          "rent": 6000,
          "status": "已出租",
          "isAvailable": false
        }
      ],
      "photos": [],
      "photoDisclaimer": "六樓獨立格局，目前已出租；照片待補，以現場帶看為準。"
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
    return "/properties/siwei/types/" + typeId + "/index.html";
  }

  function renderProperty(property) {
    var rentSummary = document.getElementById("rent-summary");
    if (rentSummary) {
      rentSummary.textContent = property.rentSummary || "月租 5,000～8,610 元";
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

    // 首頁「目前可租房源」卡片專區（只顯示 307、605、606）
    var availGrid = document.getElementById("available-rooms-grid");
    if (availGrid && property.availability && property.availability.availableRooms) {
      availGrid.innerHTML = property.availability.availableRooms.map(function (item) {
        var href = resolvePageLink(item.type);
        var lineHref = property.lineUrl + "?text=" + encodeURIComponent("您好，我想預約看四維三路【" + item.room + "房（" + Number(item.rent).toLocaleString() + "元）】");
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

    // 12 個房型總覽卡片
    var typeGrid = document.getElementById("room-type-grid");
    if (typeGrid && property.roomTypes) {
      typeGrid.innerHTML = property.roomTypes.map(function (type) {
        var href = resolvePageLink(type.type);
        var photoHtml = type.photos.length
          ? '<img src="' + escapeHtml(resolveUrl(type.photos[0].src)) + '" alt="' + escapeHtml(type.photos[0].alt) + '" loading="lazy">'
          : '<div class="siwei-photo-placeholder"><span>六樓獨立格局<br>目前已出租・照片待補</span></div>';
        
        var badgeHtml = type.isAvailable
          ? '<span class="siwei-card-badge is-available">🔥 空房釋出</span>'
          : '<span class="siwei-card-badge">目前無空房</span>';

        var floors = type.roomNumbers.map(function (room) { return room.charAt(0) + "F"; }).filter(function (floor, index, list) { return list.indexOf(floor) === index; }).join("、");

        return '<a class="p-card siwei-type-card" href="' + href + '">' +
          photoHtml +
          '<div class="p-card-body">' +
          badgeHtml +
          '<div class="p-type-no">' + escapeHtml(type.name) + '</div>' +
          '<div class="siwei-type-rent">' + escapeHtml(type.rentRange) + '</div>' +
          '<p><b>涵蓋房號：</b>' + escapeHtml(type.roomNumbers.join("、")) + ' 房</p>' +
          '<p><b>樓層分佈：</b>' + escapeHtml(floors) + '</p>' +
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
      root.innerHTML = '<section class="p-section"><div class="p-wrap"><div class="p-notice">找不到此房型資料，請返回四維三路物件首頁。</div></div></section>';
      return;
    }

    // 房型標題與狀態
    var titleEl = document.getElementById("type-title");
    if (titleEl) titleEl.textContent = type.name;

    var badgeEl = document.getElementById("type-status-badge");
    if (badgeEl) {
      badgeEl.className = "siwei-card-badge " + (type.isAvailable ? "is-available" : "");
      badgeEl.textContent = type.status;
    }

    var floors = type.roomNumbers.map(function (room) { return room.charAt(0) + "F"; }).filter(function (floor, index, list) { return list.indexOf(floor) === index; }).join("、");
    var floorsEl = document.getElementById("type-floors");
    if (floorsEl) floorsEl.textContent = "適用樓層：" + floors + " ｜ 涵蓋房號：" + type.roomNumbers.join("、") + " 房。各房實際屋況以現場帶看為準。";

    // 房型相簿
    var gallery = document.getElementById("type-gallery");
    var galleryNote = document.getElementById("type-gallery-note");
    if (type.photos.length) {
      gallery.innerHTML = type.photos.map(function (photo, index) {
        var resolvedSrc = resolveUrl(photo.src);
        return '<a class="siwei-gallery-item" href="' + escapeHtml(resolvedSrc) + '" target="_blank" rel="noopener">' +
          '<img src="' + escapeHtml(resolvedSrc) + '" alt="' + escapeHtml(photo.alt) + '" loading="lazy">' +
          '<span>' + escapeHtml(photo.caption || ("照片 " + (index + 1))) + '</span></a>';
      }).join("");
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer || "房型代表照片，實際房間配置及屋況依現場為準。";
    } else {
      gallery.innerHTML = '<div class="p-empty" style="grid-column:1/-1;text-align:center;">此房型目前已出租，實景照片待補；可先查看房型資訊與配備，實際屋況以現場帶看為準。</div>';
      if (galleryNote) galleryNote.textContent = type.photoDisclaimer || "";
    }

    // 租金與費用
    var rentEl = document.getElementById("type-rent");
    if (rentEl) rentEl.textContent = type.rentRange;

    // 房型專屬優惠說明（僅特定房型有設定時顯示，絕不跨房型誤植）
    var rentDiscountsEl = document.getElementById("type-rent-discounts");
    if (rentDiscountsEl) {
      var discounts = (type.rentDiscounts && type.rentDiscounts.length) ? type.rentDiscounts : [];
      if (discounts.length) {
        rentDiscountsEl.textContent = discounts.join("\n");
        rentDiscountsEl.style.display = "block";
      } else {
        rentDiscountsEl.textContent = "";
        rentDiscountsEl.style.display = "none";
      }
    }

    var rentNoteEl = document.getElementById("type-rent-note");
    if (rentNoteEl) rentNoteEl.textContent = property.rentTermsNote;

    // 房間設備
    var equipment = property.roomEquipment;
    var equipmentGrid = document.getElementById("type-equipment-grid");
    if (equipmentGrid) {
      equipmentGrid.innerHTML = [
        { title: "家具配備", items: equipment.furniture },
        { title: "家電配備", items: equipment.appliances }
      ].map(function (group) {
        return '<article class="p-card siwei-equipment-card"><div class="p-card-body"><h3>' + escapeHtml(group.title) +
          '</h3><ul>' + group.items.map(function (item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") +
          '</ul></div></article>';
      }).join("");
    }

    var equipmentNote = document.getElementById("type-equipment-note");
    if (equipmentNote) {
      equipmentNote.textContent = type.equipmentNote || "每間房皆配置桌椅、雙人床墊、衣櫥、冷氣、電視、冰箱、電熱水爐與獨立 Wi-Fi。個別房間實際配置以現場帶看為準。";
    }

    // 公共設施
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

    // 房間清單（逐房列出實際租金與現況，杜絕同一房間可選不同租金之誤解）
    var roomList = document.getElementById("type-room-list");
    if (roomList && type.rooms) {
      roomList.innerHTML = type.rooms.map(function (room) {
        var priceHtml = room.rent ? (Number(room.rent).toLocaleString() + " 元／月") : "已簽約出租";
        var statusClass = room.isAvailable ? "is-available" : "";
        var noteHtml = room.note ? ('<br><small style="color:var(--property-muted);font-weight:normal;">' + escapeHtml(room.note) + '</small>') : "";
        return '<li>' +
          '<div><strong>' + escapeHtml(room.roomNumber) + ' 房</strong>' + noteHtml + '</div>' +
          '<div style="text-align:right;">' +
          '<span class="siwei-room-price">' + escapeHtml(priceHtml) + '</span>　' +
          '<span class="siwei-status ' + statusClass + '">' + escapeHtml(room.status) + '</span>' +
          '</div></li>';
      }).join("");
    }

    var roomNote = document.getElementById("type-room-note");
    if (roomNote) {
      roomNote.textContent = "租金固定綁定個別房號；租金包含水費、寬頻網路、第四台、專人垃圾清運；電費依各房獨立電表按台電帳單分攤。";
    }

    // LINE 按鈕預填文字
    var lineButtons = document.querySelectorAll("[data-line-link]");
    var lineText = "您好，我想詢問四維三路【" + type.name + "】最新房況與預約看房";
    var lineUrlWithText = property.lineUrl + "?text=" + encodeURIComponent(lineText);
    lineButtons.forEach(function (button) { button.href = lineUrlWithText; });
  }

  // 執行資料載入與畫面渲染
  if (isFileProtocol) {
    // 本地 file:// 協議下直接使用內嵌資料，免受瀏覽器 CORS 限制，確保即時預覽體驗
    renderProperty(fallbackData);
    renderTypePage(fallbackData);
  } else {
    // 伺服器 / Cloudflare Pages 環境下優先動態讀取 JSON，並以內嵌資料作備援
    fetch(dataUrl)
      .then(function (response) {
        if (!response.ok) throw new Error("四維三路房源資料讀取失敗");
        return response.json();
      })
      .then(function (property) {
        renderProperty(property);
        renderTypePage(property);
      })
      .catch(function (error) {
        if (fallbackData) {
          renderProperty(fallbackData);
          renderTypePage(fallbackData);
        } else {
          var message = document.getElementById("page-data-error");
          if (message) message.textContent = error.message;
          if (window.console) console.error(error);
        }
      });
  }
}());
