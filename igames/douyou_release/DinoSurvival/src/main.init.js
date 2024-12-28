'use strict'
window.stats.isModule = false
window.stats.crossorigin = false
window.stats.insertToHead = false
let _canvas = document.createElement('canvas')
_canvas.id = 'unity-canvas'
// _canvas.style.width = "100%";
// _canvas.style.height = "100%";
const container = document.getElementById('adcontent')
if (container) container.appendChild(_canvas)
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
const projectId = '15439'
const publicToken = 'lnViuNneXIdtw1piKfhfj88AVcPIiL7y'
const showPreloaderAd = 'True'
const overlayBackgroundColor = '#00A500'
const progressBarFillColor = '#FFFFFF'
const progressBarBackgroundColor = ''
const progressBarBorderColor = ''

const autocallGameReady = '0'

;((g, a, m, e) => {
  let o = () => {
    let p = document.createElement('script')
    ;(p.src = `${a[0]}?projectId=${m}&publicToken=${e}`),
      (p.onerror = () => {
        a.shift(),
          a.length > 0 ? (o(), p.remove()) : 'onGPError' in g && g.onGPError()
      }),
      document.head.appendChild(p)
  }
  o()
})(
  window,
  [
    './sdk-bundle/gamepush.gd.js',
    './sdk-bundle/gamepush.gd.js',
    'TemplateData/gp_bundle/sdk-bundle/gamepush.gd.js',
  ],
  projectId,
  publicToken
)

var w_init = (window.w_init = function () {
  var _unityAwaiter = {}
  _unityAwaiter.ready = new Promise((resolve, reject) => {
    _unityAwaiter.done = resolve
    _unityAwaiter.abort = reject
  })

  var _gpAwaiter = {}
  _gpAwaiter.ready = new Promise((resolve) => {
    _gpAwaiter.done = resolve
  })

  window.unityInstance = null
  window.onGPError = async () => {
    _gpAwaiter.done()
    await _unityAwaiter.ready
    window.unityInstance.SendMessage('GamePushSDK', 'CallOnSDKError')
  }

  window.onGPInit = async (gp) => {
    if (showPreloaderAd == 'True' || showPreloaderAd == '1') {
      gp.ads.showPreloader()
    }

    window.GamePush = new GamePushUnity(gp)
    gp.player.ready.finally(_gpAwaiter.done)

    console.info('GamePush initialization in index.html deprecated!!!')
    await _unityAwaiter.ready
    await _gpAwaiter.done
    window.unityInstance.SendMessage('GamePushSDK', 'CallOnSDKReady')

    if (autocallGameReady != null && parseFloat(autocallGameReady) > 0) {
      setTimeout(() => gp.gameStart(), parseFloat(autocallGameReady))
    }
  }

  const buildUrl = 'Build'
  const loaderUrl = buildUrl + '/9853637125e801e9aae48e78dbbdcfca.loader.js'
  const config = {
    dataUrl: buildUrl + '/e07404185783f5b382def1ac990c7404.data.unityweb',
    frameworkUrl:
      buildUrl + '/9fcfd101dfaebcff8a9e08f66c566539.framework.js/framework.js',
    codeUrl: buildUrl + '/4da2a4175f3bff111a849def076f257d.wasm.unityweb',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'SquareDino',
    productName: 'Dino Survival',
    productVersion: '0.0.33',
  }

  const container = document.querySelector('#adcontent')
  const canvas = document.querySelector('#unity-canvas')
  const loadingCover = document.querySelector('#loading-cover')
  const progressBarEmpty = document.querySelector('#unity-progress-bar-empty')
  const progressBarFull = document.querySelector('#unity-progress-bar-full')
  const spinner = document.querySelector('.spinner')

  if (
    overlayBackgroundColor !== '-' &&
    overlayBackgroundColor !== ' ' &&
    overlayBackgroundColor !== ''
  )
    canvas.style.background = overlayBackgroundColor

  if (
    progressBarFillColor !== '-' &&
    progressBarFillColor !== ' ' &&
    progressBarFillColor !== ''
  )
    if (
      progressBarBackgroundColor !== '-' &&
      progressBarBackgroundColor !== ' ' &&
      progressBarBackgroundColor !== ''
    )
      // progressBarFull.style.background = progressBarFillColor

      if (
        progressBarBorderColor !== '-' &&
        progressBarBorderColor !== ' ' &&
        progressBarBorderColor !== ''
      )
        // progressBarEmpty.style.background = progressBarBackgroundColor

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          // progressBarEmpty.style.border.color = progressBarBorderColor

          container.className = 'unity-mobile'
        }

  //   loadingCover.style.display = ''

  const unityLoader = document.createElement('script')
  unityLoader.src = loaderUrl
  unityLoader.onload = async () => {
    await _gpAwaiter.ready
    createUnityInstance(canvas, config, (progress) => {
      //   spinner.style.display = 'none'
      //   progressBarEmpty.style.display = ''
      //   progressBarFull.style.width = `${100 * progress}%`
      wop.trigger('loading.update', { pre: progress * 100 });
    })
      .then((unityInstance) => {
        window.unityInstance = unityInstance
        _unityAwaiter.done(unityInstance)
        wop.trigger("loading.completed");
        // loadingCover.style.display = 'none'
      })
      .catch((message) => {
        _unityAwaiter.abort(message)
        alert(message)
      })
  }
  document.body.appendChild(unityLoader)

  document.addEventListener('pointerdown', () => {
    container.focus()
    window.focus()
    canvas.focus()
  })
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
})

var wother = (window.wother = function (v) {
  if (v) {
    //start
  } else {
    //stop
  }
})
