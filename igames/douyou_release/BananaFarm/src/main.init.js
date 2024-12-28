'use strict';
// let _canvas = document.createElement("canvas");
// _canvas.id = "unity-canvas";
// _canvas.style.width = "100%";
// _canvas.style.height = "100%";
// const container = document.getElementById('adcontent');
// if (container) container.appendChild(_canvas);
// _canvas.setAttribute("oncontextmenu", "event.preventDefault()");
// _canvas.setAttribute("tabindex", "0");

var child = document.getElementById('adcontent');
// 从父元素中删除子元素
child.remove();
// <canvas id="c"></canvas>
// 创建一个包含HTML结构的字符串
const htmlContent = `
<div id='adcontent'>
  <div id="Game" style="width:750px; height: 1334px;">
    <canvas id="GameCanvas" width="750" height="1334"></canvas>
    <div id="splash" style="display: none;">
      <div class="progress-bar stripes">
        <span style="width: 0%"></span>
      </div>
    </div>
  </div>
</div>
`;

// 创建一个新的 div 元素容器
const divContainer = document.createElement('div');

// 将 HTML 字符串插入到 div 容器中
divContainer.innerHTML = htmlContent;

// 将整个 div 容器添加到文档的 body 中
document.body.appendChild(divContainer);

// child = document.getElementById('adcontent');
// child.style.zIndex = -1;
var w_init = window.w_init = function() {
    (function() {
        Element.prototype.requestFullscreen = function() {};
        if (typeof VConsole !== 'undefined') {
            window.vConsole = new VConsole();
        }
        resolution.init(720, 1280);
        var debug = window._CCSettings.debug;
        var splash = document.getElementById('splash');
        splash.style.display = 'block';




        function loadScript(moduleName, cb) {
            function scriptLoaded() {
                document.body.removeChild(domScript);
                domScript.removeEventListener('load', scriptLoaded, false);
                cb && cb();
            };
            var domScript = document.createElement('script');
            domScript.async = true;
            domScript.src = moduleName;
            domScript.addEventListener('load', scriptLoaded, false);
            document.body.appendChild(domScript);
        }

        loadScript(debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js', function() {

            bundle.init().then(() => {

                if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
                    loadScript(debug ? 'physics.js' : 'physics-min.js', window.boot);
                } else {
                    window.boot();
                }
            })
        })
    })();
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
    ovo["sdkType"] = 2;
}


var wother = window.wother = function(v) {

    if (v) { //start

    } else { //stop

    }
}