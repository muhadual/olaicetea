"use strict";
// let _canvas = document.createElement("canvas");
// _canvas.id = "unity-canvas";
// _canvas.style.width = "100%";
// _canvas.style.height = "100%";
// const container = document.getElementById('adcontent');
// if (container) container.appendChild(_canvas);
// _canvas.setAttribute("oncontextmenu", "event.preventDefault()");
// _canvas.setAttribute("tabindex", "0");

// var child = document.getElementById('adcontent');
// 从父元素中删除子元素
// child.remove();
// <canvas id="c"></canvas>
// 创建一个包含HTML结构的字符串
// const htmlContent = `
// <div id='adcontent'>

// </div>
// `;

// 创建一个新的 div 元素容器
// const divContainer = document.createElement('div');

// 将 HTML 字符串插入到 div 容器中
// divContainer.innerHTML = htmlContent;

// 将整个 div 容器添加到文档的 body 中
// document.body.appendChild(divContainer);

// child = document.getElementById('adcontent');
// child.style.zIndex = -1;
var w_init = (window.w_init = function () {
  function addScript(src, buster, callback) {
    var s = document.createElement("script");
    s.setAttribute("src", src + "?v=" + buster);
    if (typeof callback === "function") {
      s.onload = callback;
    }
    document.body.appendChild(s);
  }

  function getSize() {
    var orientation = "portrait";
    var element = document.getElementById("adcontent");
    var clientWidth = element.clientWidth;
    var clientHeight = element.clientHeight;
    var minWidth = 320;
    var minHeight = 568;
    var finalWidth = minWidth;
    var finalHeight = minHeight;

    if (orientation == "portrait") {
      var currRatio = clientHeight / clientWidth;
      var minRatio = minHeight / finalWidth;
      var maxHeight = 568;
      if (maxHeight == null) maxHeight = finalHeight;
      var maxRatio = maxHeight / finalWidth;
      if (currRatio <= minRatio) {
        finalHeight = minHeight;
      } else if (currRatio >= maxRatio) {
        finalHeight = maxHeight;
      } else {
        finalHeight = Math.floor(finalWidth * currRatio);
      }
    } else if (orientation == "landscape") {
      var currRatio = clientWidth / clientHeight;
      var minRatio = minWidth / finalHeight;
      var maxWidth = null;
      console.log(maxWidth);
      if (maxWidth == null) maxWidth = finalWidth;
      var maxRatio = maxWidth / finalHeight;
      if (currRatio <= minRatio) {
        finalWidth = minWidth;
      } else if (currRatio >= maxRatio) {
        finalWidth = maxWidth;
      } else {
        finalWidth = Math.floor(finalHeight * currRatio);
      }
    }

    return { width: finalWidth, height: finalHeight };
  }

  function setVersion(version) {
    //let versionDiv = document.getElementById("version");
    //versionDiv.innerHTML = version;
  }

  document.addEventListener("backbutton", function () {}, false);
  // window.addEventListener("load", function () {
  addScript("version.js", Date.now(), function () {
    setVersion(version);
    addScript("./dynamons_web_9.min.js", version, function () {
      var size = getSize();
      lime.embed(
        "dynamons_web_9",
        "adcontent",
        size.width * 2,
        size.height * 2,
        { background: "000000" }
      );
    });
  });
  // });

  // Resize document width to fix Samsung Galaxy stock-browser render freeze on touch bug:
  if (
    /Android/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent)
  ) {
    var ds = document.documentElement.style;
    var origW = ds.width;
    ds.width = "101%";
    setTimeout(function () {
      ds.width = origW;
    }, 500);
  }
  // Add padding to allow minimal-ui in iOS8+:
  else if (
    /iPhone/.test(navigator.userAgent) &&
    /Safari/.test(navigator.userAgent)
  ) {
    document.documentElement.style.paddingBottom = "80px";
  }
  //main script...
  // let c3db = ""
  // const w_db = openDB("c3-localstorage-" + c3db)
  // w_db.then((value) => {

  //     gamelog("w_db", value)
  //     w_power_db = value;
  //     // value.close();
  // })
  //main end

  // if (w_power_db && w_getDataByKey) {
  //     let kdata = w_getDataByKey(w_power_db, "keyvaluepairs", "---");
  //     kdata.then((value) => {
  //         if (value) {

  //             let s = 0;
  //             let l = Number(value);
  //             wop.trigger("dotPower", {
  //                 type: 1,
  //                 value: [null, s, l]
  //             })
  //         }
  //     })
  // } else {
  //     console.log(w_power_db)
  // }
});

var wother = (window.wother = function (v) {
  if (v) {
    //start
  } else {
    //stop
  }
});
