'use strict';
window.stats.isModule = false;
window.stats.crossorigin = false;
window.stats.insertToHead = false;
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
var w_init = window.w_init = function () {

   
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
   
}


var wother = window.wother = function (v) {
    // if (v) { //stop
    //     window["GD_OPTIONS"].onEvent({"name":"SDK_GAME_PAUSE"})
    // } else { //start
    //     window["GD_OPTIONS"].onEvent({"name":"SDK_GAME_START"})
    // }
    if (v) { //stop

    } else { //start

    }
}