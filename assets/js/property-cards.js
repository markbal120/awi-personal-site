(function () {
  "use strict";

  var PROPERTY_SOURCES = [
    { slug: "siwei", jsonUrl: "/properties/data/siwei.json", detailUrl: "/properties/siwei/" },
    { slug: "tianshan", jsonUrl: "/properties/data/tianshan.json", detailUrl: "/properties/tianshan/" }
  ];

  function text(value) {
    return value == null ? "" : String(value);
  }

  function getPhoto(property, slug) {
    var types = Array.isArray(property.roomTypes) ? property.roomTypes : [];

    if (slug === "siwei") {
      var availableRooms = property.availability && Array.isArray(property.availability.availableRooms)
        ? property.availability.availableRooms
        : [];
      var activeRoom = availableRooms.find(function (room) {
        return room && typeof room.coverImage === "string" && room.coverImage.trim() !== "";
      });

      if (activeRoom) {
        var activeSource = activeRoom.coverImage;
        var activeRoomNo = text(activeRoom.room || activeRoom.roomId).trim();
        var activeType = types.find(function (type) { return type && type.type === activeRoom.type; });
        var activePhoto = activeType && Array.isArray(activeType.photos)
          ? activeType.photos.find(function (photo) { return photo && photo.src === activeSource; })
          : null;
        var disclaimer = text(activeRoom.imageDisclaimer);
        var isRepresentative = disclaimer.indexOf("代表") !== -1 || disclaimer.indexOf("同格局") !== -1;

        return {
          src: activeSource,
          alt: text(activePhoto && activePhoto.alt) || disclaimer || ("四維三路 " + activeRoomNo + " 房照片"),
          label: activeRoomNo ? (activeRoomNo + (isRepresentative ? " 房型參考照" : " 房實景")) : "房型實景"
        };
      }

      var fallbackType = types.find(function (type) {
        return type && Array.isArray(type.photos) && type.photos.length > 0 && type.photos[0] && type.photos[0].src;
      });
      var fallbackPhoto = fallbackType ? fallbackType.photos[0] : null;
      var repRoom = text(fallbackType && fallbackType.representativeRoom).trim();

      return {
        src: text(fallbackPhoto && fallbackPhoto.src),
        alt: text(fallbackPhoto && fallbackPhoto.alt) || "四維三路房型實景參考",
        label: repRoom ? (repRoom + " 房型參考照") : "房型參考照"
      };
    }

    var type01 = types.find(function (type) { return type && type.type === "01"; });
    var photo01 = type01 && Array.isArray(type01.photos) ? type01.photos[0] : null;
    return {
      src: text(photo01 && photo01.src),
      alt: text(photo01 && photo01.alt) || "天山路 01 房型代表照片",
      label: "01 房型代表照"
    };
  }

  function currentRentLabel(property, slug, roomNumbers) {
    var types = Array.isArray(property.roomTypes) ? property.roomTypes : [];
    var rents = [];
    var hasMissingRent = false;

    if (!roomNumbers.length) return "目前租金待確認";

    roomNumbers.forEach(function (roomNumber) {
      var rent;
      if (slug === "siwei") {
        var availableRooms = property.availability && Array.isArray(property.availability.availableRooms)
          ? property.availability.availableRooms
          : [];
        var room = availableRooms.find(function (item) {
          return item && text(item.room) === text(roomNumber);
        });
        rent = room && room.rent;
      } else {
        var roomType = types.find(function (type) {
          return type && Array.isArray(type.roomNumbers) && type.roomNumbers.some(function (number) {
            return text(number) === text(roomNumber);
          });
        });
        rent = roomType && roomType.monthlyRent;
      }

      var numericRent = Number(rent);
      if (rent == null || rent === "" || !Number.isFinite(numericRent) || numericRent <= 0) {
        hasMissingRent = true;
      } else {
        rents.push(numericRent);
      }
    });

    if (hasMissingRent || rents.length !== roomNumbers.length) return "目前可租房租金待確認";

    var minimum = Math.min.apply(Math, rents);
    var maximum = Math.max.apply(Math, rents);
    var format = new Intl.NumberFormat("zh-TW", { maximumFractionDigits: 0 });
    return minimum === maximum
      ? "月租 " + format.format(minimum) + " 元"
      : "月租 " + format.format(minimum) + "～" + format.format(maximum) + " 元";
  }

  function normalizeProperty(property, source) {
    if (!property || property.slug !== source.slug) {
      throw new Error("房源資料識別欄位不符");
    }

    var availability = property.availability || {};
    var availableRooms = Array.isArray(availability.availableRooms) ? availability.availableRooms : [];
    var roomNumbers;
    var incompleteRoomData = false;

    if (source.slug === "siwei") {
      roomNumbers = availableRooms.map(function (room) {
        if (!room || room.room == null || text(room.room).trim() === "") {
          incompleteRoomData = true;
          return "";
        }
        return text(room.room);
      });
    } else {
      roomNumbers = availableRooms.map(function (room) {
        if (room == null || text(room).trim() === "") {
          incompleteRoomData = true;
          return "";
        }
        return text(room);
      });
    }

    var validRoomNumbers = roomNumbers.filter(function (room) { return room !== ""; });
    var location = text(property.publicLocation).trim() || text(property.area).trim() || "地點待確認";
    var photo = getPhoto(property, source.slug);
    var supplemental = validRoomNumbers.length
      ? "目前可洽詢 " + validRoomNumbers.length + " 間：" + validRoomNumbers.join("、")
      : "目前可租房況待確認";

    if (incompleteRoomData) supplemental += "（部分房號資料待確認）";

    if (source.slug === "tianshan") {
      var types = Array.isArray(property.roomTypes) ? property.roomTypes : [];
      var unmatchedRooms = validRoomNumbers.filter(function (roomNumber) {
        return !types.some(function (type) {
          return type && Array.isArray(type.roomNumbers) && type.roomNumbers.some(function (number) {
            return text(number) === roomNumber;
          });
        });
      });
      if (unmatchedRooms.length) supplemental += "（房型對照待確認：" + unmatchedRooms.join("、") + "）";
    }

    return {
      slug: source.slug,
      name: text(property.name).trim() || "物件名稱待確認",
      location: location,
      rentLabel: currentRentLabel(property, source.slug, validRoomNumbers),
      availableRooms: validRoomNumbers,
      availableCount: validRoomNumbers.length,
      photo: photo.src,
      photoAlt: photo.alt,
      photoLabel: photo.label,
      detailUrl: source.detailUrl,
      supplemental: supplemental
    };
  }

  function makeElement(tagName, className, value) {
    var element = document.createElement(tagName);
    if (className) element.className = className;
    if (value != null) element.textContent = text(value);
    return element;
  }

  function makeCard(model) {
    var card = makeElement("article", "property-listing-card");
    var media = makeElement("div", "property-listing-card__media");

    if (model.photo) {
      var image = document.createElement("img");
      image.src = model.photo;
      image.alt = model.photoAlt;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", function () {
        image.remove();
        media.classList.add("is-image-missing");
        if (!media.querySelector(".property-listing-card__placeholder")) {
          media.insertBefore(makeElement("span", "property-listing-card__placeholder", "照片暫時無法載入"), media.firstChild);
        }
      }, { once: true });
      media.appendChild(image);
    } else {
      media.classList.add("is-image-missing");
      media.appendChild(makeElement("span", "property-listing-card__placeholder", "目前沒有可顯示的照片"));
    }

    media.appendChild(makeElement("span", "property-listing-card__photo-label", model.photoLabel));

    var body = makeElement("div", "property-listing-card__body");
    body.appendChild(makeElement("p", "property-listing-card__location", model.location));
    body.appendChild(makeElement("h3", "property-listing-card__title", model.name));
    body.appendChild(makeElement("p", "property-listing-card__rent", model.rentLabel));
    body.appendChild(makeElement("p", "property-listing-card__availability", model.supplemental));

    var cta = makeElement("a", "property-listing-card__cta", "查看房源");
    cta.href = model.detailUrl;
    body.appendChild(cta);
    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function loadProperty(source) {
    return fetch(source.jsonUrl, { cache: "no-cache" }).then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    }).then(function (property) {
      return normalizeProperty(property, source);
    });
  }

  function render(container, entries, failedCount, retry) {
    container.setAttribute("aria-busy", "false");
    container.replaceChildren();
    entries.forEach(function (model) { container.appendChild(makeCard(model)); });

    if (failedCount) {
      var error = makeElement("div", "property-listings__error");
      error.setAttribute("role", "alert");
      error.appendChild(makeElement("span", "", failedCount === PROPERTY_SOURCES.length
        ? "房源資料暫時無法載入，請稍後重試。"
        : "部分房源資料暫時無法載入，其餘房源仍可查看。"));
      var button = makeElement("button", "property-listings__retry", "重新載入");
      button.type = "button";
      button.addEventListener("click", retry);
      error.appendChild(button);
      container.appendChild(error);
    }
  }

  function start(container) {
    var generation = 0;
    function load() {
      generation += 1;
      var currentGeneration = generation;
      container.setAttribute("aria-busy", "true");
      container.replaceChildren(makeElement("p", "property-listings__status", "房源資料載入中…"));

      Promise.allSettled(PROPERTY_SOURCES.map(loadProperty)).then(function (results) {
        if (currentGeneration !== generation) return;
        var entries = [];
        var failedCount = 0;
        results.forEach(function (result) {
          if (result.status === "fulfilled") entries.push(result.value);
          else failedCount += 1;
        });

        if (container.getAttribute("data-property-scope") === "featured") {
          entries = entries.filter(function (entry) {
            return PROPERTY_SOURCES.some(function (source) {
              return source.slug === entry.slug;
            });
          });
        }
        render(container, entries, failedCount, load);
      }).catch(function (error) {
        if (currentGeneration !== generation) return;
        if (window.console && console.error) console.error("房源卡片資料載入失敗", error);
        render(container, [], PROPERTY_SOURCES.length, load);
      });
    }
    load();
  }

  document.querySelectorAll("[data-property-listings]").forEach(start);
}());
