$(document).ready(function () {
  $("img.lazyLoad").lazyload();
  var isC = $("#swiper-list li.active");
  $(isC).parent().prepend($(isC));
});
var search_form = document.getElementById("searchBox");
document.addEventListener("click", function (e) {
  if (
    e.target.className == "searchIcon" ||
    e.target.className == "iconfont icon-search-line"
  ) {
    $("#headBox").addClass("active");
  } else if (
    $("#headBox").hasClass("active") &&
    !e.composedPath().includes(search_form)
  ) {
    $("#headBox").removeClass("active");
  }
});
function getLanguage() {
  var lang;
  if (localStorage.getItem("language")) {
    lang = localStorage.getItem("language");
    if (lang == "zh") {
      $("#translate").html("•English");
      $("#translate").attr("data-la", "en");
    } else {
      $("#translate").html("•Zh");
      $("#translate").attr("data-la", "zh");
    }
  } else {
    lang = navigator.language || navigator.userLanguage;
    lang = lang.substr(0, 2).toLowerCase();
    localStorage.setItem("language", lang);
    $("#translate").html("•Zh");
    $("#translate").attr("data-la", "zh");
  }
  return lang;
}
var middleLanguage;
setLanguage(getLanguage());
function setLanguage(language) {
  middleLanguage = language == "zh" ? zh : en;
  var ele = document.querySelectorAll("[tran]");
  ele.forEach(function (n) {
    n.innerHTML = middleLanguage[n.getAttribute("tran")];
  });
}
if ($("#searchBox").length > 0) {
  var keyword_input = search_form.querySelector(".inputshow");
  var recommend_list = document.querySelector(".gameName");
  keyword_input.addEventListener("focus", function () {
    recommend_list.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    if (
      recommend_list.classList.contains("active") &&
      !e.composedPath().includes(search_form)
    ) {
      keyword_input.blur();
      recommend_list.classList.remove("active");
    }
  });
}
var scrollTop = document.documentElement.scrollTop;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  var scrollFunc = function (e) {
    if (e.wheelDelta > 0) {
      $(".headMain").addClass("active");
      $(".category-swiper").addClass("active");
    }
    if (e.wheelDelta < 0) {
      $(".headMain").removeClass("active");
      $(".category-swiper").removeClass("active");
    }
    if (document.documentElement.scrollTop == 0) {
      $(".rBox").removeClass("active");
      $(".headMain").removeClass("active");
      $(".category-swiper").removeClass("active");
    }
  };
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", scrollFunc, false);
  }
  window.onmousewheel = document.onmousewheel = scrollFunc;
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  $(window).scroll(function () {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < 50) {
      $(".rBox").removeClass("active");
      $(".headMain").removeClass("active");
      $(".category-swiper").removeClass("active");
    }
  });
  (function () {
    if ($("#main").length > 0) {
      mobilwmtouch(document.getElementById("main"));
      document
        .getElementById("main")
        .addEventListener("toudown", function (e) {});
      document
        .getElementById("main")
        .addEventListener("touup", function (e) {});
      function mobilwmtouch(obj) {
        var stoux, stouy;
        var etoux, etouy;
        var xdire, ydire;
        obj.addEventListener(
          "touchstart",
          function (e) {
            stoux = e.targetTouches[0].clientX;
            stouy = e.targetTouches[0].clientY;
          },
          false
        );
        obj.addEventListener(
          "touchend",
          function (e) {
            etoux = e.changedTouches[0].clientX;
            etouy = e.changedTouches[0].clientY;
            xdire = etoux - stoux;
            ydire = etouy - stouy;
            chazhi = Math.abs(xdire) - Math.abs(ydire);
            if (ydire > 0 && chazhi < 0) {
              $(".headMain").addClass("active");
              $(".category-swiper").addClass("active");
              obj.dispatchEvent(evenzc("toudown"));
            } else if (ydire < 0 && chazhi < 0) {
              $(".headMain").removeClass("active");
              $(".category-swiper").removeClass("active");
              obj.dispatchEvent(evenzc("touup"));
            }
          },
          false
        );
        function evenzc(eve) {
          if (typeof document.CustomEvent === "function") {
            this.event = new document.CustomEvent(eve, {
              bubbles: false,
              cancelable: false,
            });
            if (!document["evetself" + eve]) {
              document["evetself" + eve] = this.event;
            }
          } else if (typeof document.createEvent === "function") {
            this.event = document.createEvent("HTMLEvents");
            this.event.initEvent(eve, false, false);
            if (!document["evetself" + eve]) {
              document["evetself" + eve] = this.event;
            }
          } else {
            return false;
          }
          return document["evetself" + eve];
        }
      }
    }
  })();
}
$(".close-menu").click(function () {
  $(".containerBox").addClass("act-close");
});
$(".menu-open").click(function () {
  $(".containerBox").removeClass("act-close");
});
function search() {
  if ($("#searchA").length > 0) {
    var keyword = $("#searchB").val().trim() || $("#searchA").val().trim();
    if (!keyword) {
      layer.msg("Please enter the search content !", { icon: 1 });
      return false;
    } else {
      window.location.href = "/interest/search?keyword=" + keyword;
    }
  } else {
    if ($("#searchB").val().trim() === "") {
      layer.msg("Please enter the search content !");
      return false;
    } else {
      var keyword = $("#searchB").val().trim();
      window.location.href = "/interest/search?keyword=" + keyword;
    }
  }
}
$("#searchB").keydown(function (e) {
  if (e.keyCode == 13) {
    search();
  }
});
$("#translate").click(function () {
  var lan = $("#translate").attr("data-la");
  if (lan == "zh") {
    setLanguage(lan);
    localStorage.setItem("language", lan);
    $("#translate").html("•English");
    $("#translate").attr("data-la", "en");
  } else {
    setLanguage(lan);
    localStorage.setItem("language", lan);
    $("#translate").html("•Zh");
    $("#translate").attr("data-la", "zh");
  }
  location.reload();
});
if ($(".category-swiper").length > 0) {
  var mySwiper2 = new Swiper(".category-swiper", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    watchSlidesVisibility: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });
}
if ($(".history-swiper").length > 0) {
  var mySwiper1 = new Swiper(".history-swiper", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    watchSlidesVisibility: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });
}