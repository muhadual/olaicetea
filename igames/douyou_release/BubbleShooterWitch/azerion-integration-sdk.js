/* uglified */
(() => {
  var o = {
      524: function (e, n, t) {
        var l =
            (this && this.__awaiter) ||
            function (e, a, d, s) {
              return new (d = d || Promise)(function (t, n) {
                function o(e) {
                  try {
                    i(s.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function r(e) {
                  try {
                    i(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function i(e) {
                  var n;
                  e.done
                    ? t(e.value)
                    : ((n = e.value) instanceof d
                        ? n
                        : new d(function (e) {
                            e(n);
                          })
                      ).then(o, r);
                }
                i((s = s.apply(e, a || [])).next());
              });
            },
          c =
            (this && this.__generator) ||
            function (o, r) {
              var i,
                a,
                d,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & d[0]) throw d[1];
                    return d[1];
                  },
                  trys: [],
                  ops: [],
                },
                u = {
                  next: e(0),
                  throw: e(1),
                  return: e(2),
                };
              return (
                "function" == typeof Symbol &&
                  (u[Symbol.iterator] = function () {
                    return this;
                  }),
                u
              );
              function e(t) {
                return function (e) {
                  var n = [t, e];
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; (s = u && n[(u = 0)] ? 0 : s); )
                    try {
                      if (
                        ((i = 1),
                        a &&
                          (d =
                            2 & n[0]
                              ? a.return
                              : n[0]
                              ? a.throw || ((d = a.return) && d.call(a), 0)
                              : a.next) &&
                          !(d = d.call(a, n[1])).done)
                      )
                        return d;
                      switch (((a = 0), (n = d ? [2 & n[0], d.value] : n)[0])) {
                        case 0:
                        case 1:
                          d = n;
                          break;
                        case 4:
                          return (
                            s.label++,
                            {
                              value: n[1],
                              done: !1,
                            }
                          );
                        case 5:
                          s.label++, (a = n[1]), (n = [0]);
                          continue;
                        case 7:
                          (n = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(d = 0 < (d = s.trys).length && d[d.length - 1]) &&
                            (6 === n[0] || 2 === n[0])
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === n[0] &&
                            (!d || (n[1] > d[0] && n[1] < d[3]))
                          )
                            s.label = n[1];
                          else if (6 === n[0] && s.label < d[1])
                            (s.label = d[1]), (d = n);
                          else {
                            if (!(d && s.label < d[2])) {
                              d[2] && s.ops.pop(), s.trys.pop();
                              continue;
                            }
                            (s.label = d[2]), s.ops.push(n);
                          }
                      }
                      n = r.call(o, s);
                    } catch (e) {
                      (n = [6, e]), (a = 0);
                    } finally {
                      i = d = 0;
                    }
                  if (5 & n[0]) throw n[1];
                  return {
                    value: n[0] ? n[1] : void 0,
                    done: !0,
                  };
                };
              }
            },
          t = [t, n, t(790), t(644), t(130), t(594), t(393), t(812), t(800)],
          n = function (e, n, t, o, r, i, a, d, s) {
            "use strict";
            function u() {}
            Object.defineProperty(n, "__esModule", {
              value: !0,
            }),
              (n.AzerionIntegrationSDK = void 0),
              (u.init = function () {
                s.Utils.setAssetPath(),
                  i.JioIntegration.init(),
                  (u.ads = new t.AdHandler()).init(),
                  (u.gmo = new r.GMOIntegration()).init(),
                  (u.aeria = new o.AeriaIntegration()).init();
              }),
              (u.onLoadStart = function (n) {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return window._azerionIntegration.splashEnabled
                      ? (u.aeria.onGameLoad(n),
                        [
                          2,
                          a.AzerionSplashLoader.create(
                            window._azerionIntegration.gameTitle
                          ),
                        ])
                      : [2, Promise.resolve(!0)];
                  });
                });
              }),
              (u.onLoadProgress = function (e) {
                window._azerionIntegration.splashEnabled &&
                  a.AzerionSplashLoader.onLoadProgress(e);
              }),
              (u.onLoadComplete = function () {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return window._azerionIntegration.splashEnabled
                          ? [4, a.AzerionSplashLoader.onLoadComplete()]
                          : [3, 2];
                      case 1:
                        e.sent(), (e.label = 2);
                      case 2:
                        return [
                          2,
                          window._azerionIntegration.splashEnabled
                            ? a.AzerionSplashLoader.removeSplashLoader()
                            : Promise.resolve(!0),
                        ];
                    }
                  });
                });
              }),
              (u.addListeners = function (e, n) {
                u.ads.addListeners(e, n);
              }),
              (u.onAdProviderLoaded = function () {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [2, u.ads.onAdProviderLoaded()];
                  });
                });
              }),
              (u.onGameStart = function () {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [
                      2,
                      window._azerionIntegration.gmoEnabled
                        ? u.gmo.onGameStart()
                        : Promise.resolve(!0),
                    ];
                  });
                });
              }),
              (u.onGameEnd = function (n) {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [
                      2,
                      window._azerionIntegration.gmoEnabled
                        ? u.gmo.onGameEnd(n)
                        : Promise.resolve(!0),
                    ];
                  });
                });
              }),
              (u.showInterstitialAd = function () {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [2, u.ads.showInterstitialAd()];
                  });
                });
              }),
              (u.showRewardedAd = function () {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [
                      2,
                      (window._azerionIntegration.gmoEnabled
                        ? u.gmo
                        : u.ads
                      ).showRewardedAd(),
                    ];
                  });
                });
              }),
              (u.rewardedAdAvailable = function () {
                return true; //u.ads.rewardedAdAvailable()
              }),
              (u.preloadAd = function (e) {
                u.ads.preloadAd(e);
              }),
              (u.setData = function (n) {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [
                      2,
                      (window._azerionIntegration.gmoEnabled
                        ? u.gmo
                        : d.StorageHandler
                      ).setData(n),
                    ];
                  });
                });
              }),
              (u.getData = function (n) {
                return l(this, void 0, void 0, function () {
                  return c(this, function (e) {
                    return [
                      2,
                      window._azerionIntegration.gmoEnabled
                        ? u.gmo.getData()
                        : d.StorageHandler.getData(n),
                    ];
                  });
                });
              }),
              (u.sendScoreEvent = function (o) {
                return l(this, void 0, void 0, function () {
                  var n, t;
                  return c(this, function (e) {
                    return (
                      (n = o.score),
                      (t = o.platformId),
                      [
                        2,
                        u.aeria.isAeriaIntegration()
                          ? u.aeria.sendScoreEvent(t, n)
                          : Promise.resolve(!0),
                      ]
                    );
                  });
                });
              }),
              (u.isAdProviderLoaded = function () {
                return u.ads.isAdProviderLoaded();
              }),
              (n.AzerionIntegrationSDK = u);
          }.apply(n, t);
        void 0 !== n && (e.exports = n);
      },
      790: (e, n, t) => {
        (t = [t, n, t(377)]),
          (n = function (e, n, r) {
            "use strict";
            var o, t;
            function i() {}
            Object.defineProperty(n, "__esModule", {
              value: !0,
            }),
              (n.AdHandler = n.AdEventType = void 0),
              (o = {
                PAUSED: "Paused",
                RESUMED: "Resumed",
              }),
              ((t = n.AdEventType || (n.AdEventType = {})).REWARDED =
                "rewarded"),
              (t.INTERSTITIAL = "interstitial"),
              (i.prototype.init = function () {
                (this.azAdWrapper = new window.h5ads.AdWrapper(
                  window._azerionIntegration.advType,
                  window._azerionIntegration.gdId
                )),
                  (this.contentStatus = o.RESUMED);
              }),
              (i.prototype.addListeners = function (e, n) {
                var t = this;
                this.azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED, function () {
                  console.log("CONTENT_PAUSED"),
                    (t.contentStatus = o.PAUSED),
                    e && e();
                }),
                  this.azAdWrapper.on(
                    h5ads.AdEvents.CONTENT_RESUMED,
                    function () {
                      console.log("CONTENT_RESUMED"),
                        (t.contentStatus = o.RESUMED),
                        n && n(),
                        window.focus();
                    }
                  );
              }),
              (i.prototype.onAdProviderLoaded = function () {
                var t = this;
                return new Promise(function (n, e) {
                  t.azAdWrapper.on(
                    h5ads.AdEvents.AD_PROVIDER_LOADED,
                    function e() {
                      console.log("DEBUG: onAdProviderLoaded"),
                        n(!0),
                        t.azAdWrapper.removeListener(
                          h5ads.AdEvents.AD_PROVIDER_LOADED,
                          e
                        );
                    }
                  );
                });
              }),
              (i.prototype.showInterstitialAd = function () {
                var t = this;
                return (
                  r.LoaderHelper.show(),
                  new Promise(function (n, e) {
                    t.azAdWrapper.on(
                      h5ads.AdEvents.CONTENT_RESUMED,
                      function e() {
                        console.log("DEBUG: onAdComplete"),
                          r.LoaderHelper.hide(),
                          n(),
                          t.azAdWrapper.removeListener(
                            h5ads.AdEvents.CONTENT_RESUMED,
                            e
                          );
                      }
                    ),
                      t.azAdWrapper.showAd(h5ads.AdType.interstitial);
                  })
                );
              }),
              (i.prototype.showRewardedAd = function () {
                var o = this;
                return (
                  r.LoaderHelper.show(),
                  new Promise(function (n, e) {
                    var t = !1;
                    o.azAdWrapper.addListener(
                      h5ads.AdEvents.AD_REWARDED,
                      function () {
                        t = !0;
                      }
                    ),
                      o.azAdWrapper.on(
                        h5ads.AdEvents.CONTENT_RESUMED,
                        function e() {
                          console.log("DEBUG: onAdSuccess: rewarded"),
                            r.LoaderHelper.hide(),
                            o.azAdWrapper.removeListener(
                              h5ads.AdEvents.CONTENT_RESUMED,
                              e
                            ),
                            o.azAdWrapper.preloadAd(h5ads.AdType.rewarded),
                            o.azAdWrapper.removeAllListeners(
                              h5ads.AdEvents.AD_REWARDED
                            ),
                            (t = wsdk.adover.rewarded),
                            n(t);
                        }
                      ),
                      o.azAdWrapper.showAd(h5ads.AdType.rewarded);
                  })
                );
              }),
              (i.prototype.isAdPlaying = function () {
                return this.contentStatus === o.PAUSED;
              }),
              (i.prototype.preloadAd = function (e) {
                e =
                  e === t.REWARDED
                    ? h5ads.AdType.rewarded
                    : h5ads.AdType.interstitial;
                this.azAdWrapper.preloadAd(e);
              }),
              (i.prototype.rewardedAdAvailable = function () {
                return this.azAdWrapper.adAvailable(h5ads.AdType.rewarded);
              }),
              (i.prototype.isAdProviderLoaded = function () {
                return this.azAdWrapper.isLoadComplete();
              }),
              (n.AdHandler = i);
          }.apply(n, t));
        void 0 !== n && (e.exports = n);
      },
      377: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {}
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.LoaderHelper = void 0),
            (t.show = function () {
              var e = document.getElementById("loader");
              e && (e.style.display = "block");
            }),
            (t.hide = function () {
              var e = document.getElementById("loader");
              e && (e.style.display = "none");
            }),
            (n.LoaderHelper = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      180: (e, n, t) => {
        (t = [t, n, t(524)]),
          (n = function (e, n, t) {
            "use strict";
            window._azerionIntegrationSDK = t.AzerionIntegrationSDK;
          }.apply(n, t));
        void 0 !== n && (e.exports = n);
      },
      644: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {
            this.initialized = !1;
          }
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.AeriaIntegration = void 0),
            (t.prototype.init = function () {
              this.initialized = h5branding.Hosts.isAeria();
            }),
            (t.prototype.onGameLoad = function (e) {
              this.initialized &&
                h5branding.AeriaIntegration.onGameLoad(function () {
                  e && e();
                });
            }),
            (t.prototype.sendScoreEvent = function (t, o) {
              return this.initialized
                ? new Promise(function (e, n) {
                    h5branding.AeriaIntegration.sendScoreEvent(
                      t,
                      o,
                      function () {
                        e(!0);
                      }
                    );
                  })
                : Promise.resolve(!0);
            }),
            (t.prototype.isAeriaIntegration = function () {
              return this.initialized;
            }),
            (n.AeriaIntegration = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      130: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {
            this.initialized = !1;
          }
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.GMOIntegration = void 0),
            (t.prototype.init = function () {
              this.initialized = window._azerionIntegration.gmoEnabled;
              var e = this.initialized ? "gmo" : "gd";
              window._azIntGmo.EventHandler.init(e);
            }),
            (t.prototype.updateSplashLoader = function () {
              try {
                document.getElementById("h5branding-button").innerText =
                  "プレー";
              } catch (e) {
                console.log("Could not change play text");
              }
            }),
            (t.prototype.triggerGMOEvent = function (e, n, t, o, r) {
              try {
                var i = o && JSON.stringify(o);
                window._azIntGmo.EventHandler.trigger(e, n, t, i, r);
              } catch (e) {
                n();
              }
            }),
            (t.prototype.getData = function () {
              var n = this;
              return new Promise(function (t, e) {
                n.triggerGMOEvent("game_get_data", function (e) {
                  var n = {};
                  try {
                    n = JSON.parse(e.gamedata || "{}");
                  } catch (e) {
                    console.log("Could not restore server saved data", e);
                  }
                  t(n);
                });
              });
            }),
            (t.prototype.setData = function (e) {
              var t = this,
                o = e.score,
                r = e.data;
              return new Promise(function (e, n) {
                t.triggerGMOEvent(
                  "game_save",
                  function () {
                    e(!0);
                  },
                  o,
                  r
                );
              });
            }),
            (t.prototype.onGameEnd = function (t) {
              var o = this;
              return new Promise(function (e, n) {
                o.triggerGMOEvent(
                  "game_end",
                  function () {
                    e(!0);
                  },
                  t
                );
              });
            }),
            (t.prototype.onGameStart = function () {
              var t = this;
              return new Promise(function (e, n) {
                t.triggerGMOEvent("game_start", function () {
                  e(!0);
                });
              });
            }),
            (t.prototype.showRewardedAd = function () {
              var t = this;
              return new Promise(function (e, n) {
                t.triggerGMOEvent(
                  "show_reward_ad",
                  function () {
                    e(!0);
                  },
                  null,
                  null,
                  function () {
                    e(!1);
                  }
                );
              });
            }),
            (n.GMOIntegration = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      594: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {}
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.JioIntegration = void 0),
            (t.init = function () {
              var e = this;
              (this.initialized =
                window._azerionIntegration &&
                "jio" === window._azerionIntegration.advType &&
                !!window._azerionJGSDK),
                this.initialized &&
                  ((this.sdk = window._azerionJGSDK.JioGamesSP),
                  this.sdk.getUserProfile(),
                  setTimeout(function () {
                    e.soundEnabled = e.sdk.isSoundEnable();
                  }, 2e3));
            }),
            (t.isEnabled = function () {
              return this.initialized;
            }),
            (t.postScore = function (e) {
              this.initialized && this.sdk.postScore(e);
            }),
            (t.getSoundStatus = function () {
              if (this.initialized) return this.soundEnabled;
            }),
            (t.isRewardAvailable = function () {
              return this.sdk.isRewardAvailable();
            }),
            (t.initialized = !1),
            (t.soundEnabled = !1),
            (t.sdk = null),
            (n.JioIntegration = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      393: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {}
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.AzerionSplashLoader = void 0),
            (t.create = function (e) {
              return h5branding.SplashLoader.getInstance({
                gameId: window._azerionIntegration.gdId,
                gameName: window._azerionIntegration.gameTitle,
                gameTitle: window._azerionIntegration.gameTitle,
                libs: [],
                version: "1.0",
              }).create();
            }),
            (t.removeSplashLoader = function () {
              return new Promise(function (e, n) {
                h5branding.SplashLoader.getInstance().setButtonCallback(
                  function () {
                    h5branding.SplashLoader.getInstance().destroy(), e(!0);
                  }
                );
              });
            }),
            (t.onLoadProgress = function (e) {
              h5branding.SplashLoader.getInstance().setLoadProgress(e);
            }),
            (t.onLoadComplete = function () {
              return (
                h5branding.SplashLoader.getInstance().setLoadProgress(100),
                new Promise(function (e, n) {
                  e(!0);
                })
              );
            }),
            (n.AzerionSplashLoader = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      812: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {}
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.StorageHandler = void 0),
            (t.getData = function (o) {
              var r = null;
              return new Promise(function (e, n) {
                try {
                  var t = localStorage.getItem(o);
                  t && (r = JSON.parse(t));
                } catch (e) {
                  console.log("Could not restore data", e);
                }
                e(r);
              });
            }),
            (t.setData = function (e) {
              var n = e.key,
                e = e.data,
                t = !1;
              try {
                localStorage.setItem(n, JSON.stringify(e)), (t = !0);
              } catch (e) {
                console.log("Could not save data", e);
              }
              return Promise.resolve(t);
            }),
            (n.StorageHandler = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
      800: (e, n, t) => {
        t = function (e, n) {
          "use strict";
          function t() {}
          Object.defineProperty(n, "__esModule", {
            value: !0,
          }),
            (n.Utils = void 0),
            (t.setAssetPath = function () {
              var e;
              null != (e = window._azerionIntegration) &&
                e.sa &&
                (h5branding.Utils.ASSET_LOCATION = "assets/");
            }),
            (n.Utils = t);
        }.apply(n, [t, n]);
        void 0 !== t && (e.exports = t);
      },
    },
    r = {};
  !(function e(n) {
    var t = r[n];
    return (
      void 0 !== t
        ? t
        : ((t = r[n] =
            {
              exports: {},
            }),
          o[n].call(t.exports, t, t.exports, e),
          t)
    ).exports;
  })(180);
})();
