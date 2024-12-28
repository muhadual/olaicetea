/*! For license information please see gamepush.gd.js.LICENSE.txt */
( () => {
  var e, t, r, n, i = {
      2616: e => {
          "use strict";
          e.exports = function(e) {
              var t = [];
              return t.toString = function() {
                  return this.map((function(t) {
                      var r = e(t);
                      return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
                  }
                  )).join("")
              }
              ,
              t.i = function(e, r, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  var i = {};
                  if (n)
                      for (var s = 0; s < this.length; s++) {
                          var a = this[s][0];
                          null != a && (i[a] = !0)
                      }
                  for (var o = 0; o < e.length; o++) {
                      var c = [].concat(e[o]);
                      n && i[c[0]] || (r && (c[2] ? c[2] = "".concat(r, " and ").concat(c[2]) : c[2] = r),
                      t.push(c))
                  }
              }
              ,
              t
          }
      }
      ,
      9639: function(e, t, r) {
          var n, i, s;
          function a(e) {
              return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          s = function() {
              "use strict";
              var e = 6e4
                , t = 36e5
                , r = "millisecond"
                , n = "second"
                , i = "minute"
                , s = "hour"
                , o = "day"
                , c = "week"
                , l = "month"
                , h = "quarter"
                , u = "year"
                , d = "date"
                , f = "Invalid Date"
                , p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
                , v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
                , y = {
                  name: "en",
                  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                  ordinal: function(e) {
                      var t = ["th", "st", "nd", "rd"]
                        , r = e % 100;
                      return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]"
                  }
              }
                , m = function(e, t, r) {
                  var n = String(e);
                  return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(r) + e
              }
                , g = {
                  s: m,
                  z: function(e) {
                      var t = -e.utcOffset()
                        , r = Math.abs(t)
                        , n = Math.floor(r / 60)
                        , i = r % 60;
                      return (t <= 0 ? "+" : "-") + m(n, 2, "0") + ":" + m(i, 2, "0")
                  },
                  m: function e(t, r) {
                      if (t.date() < r.date())
                          return -e(r, t);
                      var n = 12 * (r.year() - t.year()) + (r.month() - t.month())
                        , i = t.clone().add(n, l)
                        , s = r - i < 0
                        , a = t.clone().add(n + (s ? -1 : 1), l);
                      return +(-(n + (r - i) / (s ? i - a : a - i)) || 0)
                  },
                  a: function(e) {
                      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                  },
                  p: function(e) {
                      return {
                          M: l,
                          y: u,
                          w: c,
                          d: o,
                          D: d,
                          h: s,
                          m: i,
                          s: n,
                          ms: r,
                          Q: h
                      }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                  },
                  u: function(e) {
                      return void 0 === e
                  }
              }
                , w = "en"
                , b = {};
              b[w] = y;
              var E = "$isDayjsObject"
                , P = function(e) {
                  return e instanceof T || !(!e || !e[E])
              }
                , S = function e(t, r, n) {
                  var i;
                  if (!t)
                      return w;
                  if ("string" == typeof t) {
                      var s = t.toLowerCase();
                      b[s] && (i = s),
                      r && (b[s] = r,
                      i = s);
                      var a = t.split("-");
                      if (!i && a.length > 1)
                          return e(a[0])
                  } else {
                      var o = t.name;
                      b[o] = t,
                      i = o
                  }
                  return !n && i && (w = i),
                  i || !n && w
              }
                , _ = function(e, t) {
                  if (P(e))
                      return e.clone();
                  var r = "object" == a(t) ? t : {};
                  return r.date = e,
                  r.args = arguments,
                  new T(r)
              }
                , A = g;
              A.l = S,
              A.i = P,
              A.w = function(e, t) {
                  return _(e, {
                      locale: t.$L,
                      utc: t.$u,
                      x: t.$x,
                      $offset: t.$offset
                  })
              }
              ;
              var T = function() {
                  function a(e) {
                      this.$L = S(e.locale, null, !0),
                      this.parse(e),
                      this.$x = this.$x || e.x || {},
                      this[E] = !0
                  }
                  var y = a.prototype;
                  return y.parse = function(e) {
                      this.$d = function(e) {
                          var t = e.date
                            , r = e.utc;
                          if (null === t)
                              return new Date(NaN);
                          if (A.u(t))
                              return new Date;
                          if (t instanceof Date)
                              return new Date(t);
                          if ("string" == typeof t && !/Z$/i.test(t)) {
                              var n = t.match(p);
                              if (n) {
                                  var i = n[2] - 1 || 0
                                    , s = (n[7] || "0").substring(0, 3);
                                  return r ? new Date(Date.UTC(n[1], i, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, s)) : new Date(n[1],i,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,s)
                              }
                          }
                          return new Date(t)
                      }(e),
                      this.init()
                  }
                  ,
                  y.init = function() {
                      var e = this.$d;
                      this.$y = e.getFullYear(),
                      this.$M = e.getMonth(),
                      this.$D = e.getDate(),
                      this.$W = e.getDay(),
                      this.$H = e.getHours(),
                      this.$m = e.getMinutes(),
                      this.$s = e.getSeconds(),
                      this.$ms = e.getMilliseconds()
                  }
                  ,
                  y.$utils = function() {
                      return A
                  }
                  ,
                  y.isValid = function() {
                      return !(this.$d.toString() === f)
                  }
                  ,
                  y.isSame = function(e, t) {
                      var r = _(e);
                      return this.startOf(t) <= r && r <= this.endOf(t)
                  }
                  ,
                  y.isAfter = function(e, t) {
                      return _(e) < this.startOf(t)
                  }
                  ,
                  y.isBefore = function(e, t) {
                      return this.endOf(t) < _(e)
                  }
                  ,
                  y.$g = function(e, t, r) {
                      return A.u(e) ? this[t] : this.set(r, e)
                  }
                  ,
                  y.unix = function() {
                      return Math.floor(this.valueOf() / 1e3)
                  }
                  ,
                  y.valueOf = function() {
                      return this.$d.getTime()
                  }
                  ,
                  y.startOf = function(e, t) {
                      var r = this
                        , a = !!A.u(t) || t
                        , h = A.p(e)
                        , f = function(e, t) {
                          var n = A.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y,t,e), r);
                          return a ? n : n.endOf(o)
                      }
                        , p = function(e, t) {
                          return A.w(r.toDate()[e].apply(r.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), r)
                      }
                        , v = this.$W
                        , y = this.$M
                        , m = this.$D
                        , g = "set" + (this.$u ? "UTC" : "");
                      switch (h) {
                      case u:
                          return a ? f(1, 0) : f(31, 11);
                      case l:
                          return a ? f(1, y) : f(0, y + 1);
                      case c:
                          var w = this.$locale().weekStart || 0
                            , b = (v < w ? v + 7 : v) - w;
                          return f(a ? m - b : m + (6 - b), y);
                      case o:
                      case d:
                          return p(g + "Hours", 0);
                      case s:
                          return p(g + "Minutes", 1);
                      case i:
                          return p(g + "Seconds", 2);
                      case n:
                          return p(g + "Milliseconds", 3);
                      default:
                          return this.clone()
                      }
                  }
                  ,
                  y.endOf = function(e) {
                      return this.startOf(e, !1)
                  }
                  ,
                  y.$set = function(e, t) {
                      var a, c = A.p(e), h = "set" + (this.$u ? "UTC" : ""), f = (a = {},
                      a[o] = h + "Date",
                      a[d] = h + "Date",
                      a[l] = h + "Month",
                      a[u] = h + "FullYear",
                      a[s] = h + "Hours",
                      a[i] = h + "Minutes",
                      a[n] = h + "Seconds",
                      a[r] = h + "Milliseconds",
                      a)[c], p = c === o ? this.$D + (t - this.$W) : t;
                      if (c === l || c === u) {
                          var v = this.clone().set(d, 1);
                          v.$d[f](p),
                          v.init(),
                          this.$d = v.set(d, Math.min(this.$D, v.daysInMonth())).$d
                      } else
                          f && this.$d[f](p);
                      return this.init(),
                      this
                  }
                  ,
                  y.set = function(e, t) {
                      return this.clone().$set(e, t)
                  }
                  ,
                  y.get = function(e) {
                      return this[A.p(e)]()
                  }
                  ,
                  y.add = function(r, a) {
                      var h, d = this;
                      r = Number(r);
                      var f = A.p(a)
                        , p = function(e) {
                          var t = _(d);
                          return A.w(t.date(t.date() + Math.round(e * r)), d)
                      };
                      if (f === l)
                          return this.set(l, this.$M + r);
                      if (f === u)
                          return this.set(u, this.$y + r);
                      if (f === o)
                          return p(1);
                      if (f === c)
                          return p(7);
                      var v = (h = {},
                      h[i] = e,
                      h[s] = t,
                      h[n] = 1e3,
                      h)[f] || 1
                        , y = this.$d.getTime() + r * v;
                      return A.w(y, this)
                  }
                  ,
                  y.subtract = function(e, t) {
                      return this.add(-1 * e, t)
                  }
                  ,
                  y.format = function(e) {
                      var t = this
                        , r = this.$locale();
                      if (!this.isValid())
                          return r.invalidDate || f;
                      var n = e || "YYYY-MM-DDTHH:mm:ssZ"
                        , i = A.z(this)
                        , s = this.$H
                        , a = this.$m
                        , o = this.$M
                        , c = r.weekdays
                        , l = r.months
                        , h = r.meridiem
                        , u = function(e, r, i, s) {
                          return e && (e[r] || e(t, n)) || i[r].slice(0, s)
                      }
                        , d = function(e) {
                          return A.s(s % 12 || 12, e, "0")
                      }
                        , p = h || function(e, t, r) {
                          var n = e < 12 ? "AM" : "PM";
                          return r ? n.toLowerCase() : n
                      }
                      ;
                      return n.replace(v, (function(e, n) {
                          return n || function(e) {
                              switch (e) {
                              case "YY":
                                  return String(t.$y).slice(-2);
                              case "YYYY":
                                  return A.s(t.$y, 4, "0");
                              case "M":
                                  return o + 1;
                              case "MM":
                                  return A.s(o + 1, 2, "0");
                              case "MMM":
                                  return u(r.monthsShort, o, l, 3);
                              case "MMMM":
                                  return u(l, o);
                              case "D":
                                  return t.$D;
                              case "DD":
                                  return A.s(t.$D, 2, "0");
                              case "d":
                                  return String(t.$W);
                              case "dd":
                                  return u(r.weekdaysMin, t.$W, c, 2);
                              case "ddd":
                                  return u(r.weekdaysShort, t.$W, c, 3);
                              case "dddd":
                                  return c[t.$W];
                              case "H":
                                  return String(s);
                              case "HH":
                                  return A.s(s, 2, "0");
                              case "h":
                                  return d(1);
                              case "hh":
                                  return d(2);
                              case "a":
                                  return p(s, a, !0);
                              case "A":
                                  return p(s, a, !1);
                              case "m":
                                  return String(a);
                              case "mm":
                                  return A.s(a, 2, "0");
                              case "s":
                                  return String(t.$s);
                              case "ss":
                                  return A.s(t.$s, 2, "0");
                              case "SSS":
                                  return A.s(t.$ms, 3, "0");
                              case "Z":
                                  return i
                              }
                              return null
                          }(e) || i.replace(":", "")
                      }
                      ))
                  }
                  ,
                  y.utcOffset = function() {
                      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                  }
                  ,
                  y.diff = function(r, a, d) {
                      var f, p = this, v = A.p(a), y = _(r), m = (y.utcOffset() - this.utcOffset()) * e, g = this - y, w = function() {
                          return A.m(p, y)
                      };
                      switch (v) {
                      case u:
                          f = w() / 12;
                          break;
                      case l:
                          f = w();
                          break;
                      case h:
                          f = w() / 3;
                          break;
                      case c:
                          f = (g - m) / 6048e5;
                          break;
                      case o:
                          f = (g - m) / 864e5;
                          break;
                      case s:
                          f = g / t;
                          break;
                      case i:
                          f = g / e;
                          break;
                      case n:
                          f = g / 1e3;
                          break;
                      default:
                          f = g
                      }
                      return d ? f : A.a(f)
                  }
                  ,
                  y.daysInMonth = function() {
                      return this.endOf(l).$D
                  }
                  ,
                  y.$locale = function() {
                      return b[this.$L]
                  }
                  ,
                  y.locale = function(e, t) {
                      if (!e)
                          return this.$L;
                      var r = this.clone()
                        , n = S(e, t, !0);
                      return n && (r.$L = n),
                      r
                  }
                  ,
                  y.clone = function() {
                      return A.w(this.$d, this)
                  }
                  ,
                  y.toDate = function() {
                      return new Date(this.valueOf())
                  }
                  ,
                  y.toJSON = function() {
                      return this.isValid() ? this.toISOString() : null
                  }
                  ,
                  y.toISOString = function() {
                      return this.$d.toISOString()
                  }
                  ,
                  y.toString = function() {
                      return this.$d.toUTCString()
                  }
                  ,
                  a
              }()
                , O = T.prototype;
              return _.prototype = O,
              [["$ms", r], ["$s", n], ["$m", i], ["$H", s], ["$W", o], ["$M", l], ["$y", u], ["$D", d]].forEach((function(e) {
                  O[e[1]] = function(t) {
                      return this.$g(t, e[0], e[1])
                  }
              }
              )),
              _.extend = function(e, t) {
                  return e.$i || (e(t, T, _),
                  e.$i = !0),
                  _
              }
              ,
              _.locale = S,
              _.isDayjs = P,
              _.unix = function(e) {
                  return _(1e3 * e)
              }
              ,
              _.en = b[w],
              _.Ls = b,
              _.p = {},
              _
          }
          ,
          "object" == a(t) ? e.exports = s() : void 0 === (i = "function" == typeof (n = s) ? n.call(t, r, t, e) : n) || (e.exports = i)
      },
      5585: e => {
          !function(t) {
              e.exports = t;
              var r = {
                  on: function(e, t) {
                      return s(this, e).push(t),
                      this
                  },
                  once: function(e, t) {
                      var r = this;
                      return n.originalListener = t,
                      s(r, e).push(n),
                      r;
                      function n() {
                          i.call(r, e, n),
                          t.apply(this, arguments)
                      }
                  },
                  off: i,
                  emit: function(e, t) {
                      var r = this
                        , n = s(r, e, !0);
                      if (!n)
                          return !1;
                      var i = arguments.length;
                      if (1 === i)
                          n.forEach(o);
                      else if (2 === i)
                          n.forEach(c);
                      else {
                          var a = Array.prototype.slice.call(arguments, 1);
                          n.forEach(l)
                      }
                      return !!n.length;
                      function o(e) {
                          e.call(r)
                      }
                      function c(e) {
                          e.call(r, t)
                      }
                      function l(e) {
                          e.apply(r, a)
                      }
                  }
              };
              function n(e) {
                  for (var t in r)
                      e[t] = r[t];
                  return e
              }
              function i(e, t) {
                  var r, n = this;
                  if (arguments.length) {
                      if (t) {
                          if (r = s(n, e, !0)) {
                              if (!(r = r.filter(a)).length)
                                  return i.call(n, e);
                              n.listeners[e] = r
                          }
                      } else if ((r = n.listeners) && (delete r[e],
                      !Object.keys(r).length))
                          return i.call(n)
                  } else
                      delete n.listeners;
                  return n;
                  function a(e) {
                      return e !== t && e.originalListener !== t
                  }
              }
              function s(e, t, r) {
                  if (!r || e.listeners) {
                      var n = e.listeners || (e.listeners = {});
                      return n[t] || (n[t] = [])
                  }
              }
              n(t.prototype),
              t.mixin = n
          }((function e() {
              if (!(this instanceof e))
                  return new e
          }
          ))
      }
      ,
      4943: e => {
          "use strict";
          e.exports = n,
          e.exports.isMobile = n,
          e.exports.default = n;
          var t = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
            , r = /android|ipad|playbook|silk/i;
          function n(e) {
              e || (e = {});
              var n = e.ua;
              if (n || "undefined" == typeof navigator || (n = navigator.userAgent),
              n && n.headers && "string" == typeof n.headers["user-agent"] && (n = n.headers["user-agent"]),
              "string" != typeof n)
                  return !1;
              var i = t.test(n) || !!e.tablet && r.test(n);
              return !i && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && -1 !== n.indexOf("Macintosh") && -1 !== n.indexOf("Safari") && (i = !0),
              i
          }
      }
      ,
      1232: (e, t, r) => {
          var n = r(2510)(r(1203), "DataView");
          e.exports = n
      }
      ,
      7460: (e, t, r) => {
          var n = r(6844)
            , i = r(770)
            , s = r(862)
            , a = r(8670)
            , o = r(3931);
          function c(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1])
              }
          }
          c.prototype.clear = n,
          c.prototype.delete = i,
          c.prototype.get = s,
          c.prototype.has = a,
          c.prototype.set = o,
          e.exports = c
      }
      ,
      7589: (e, t, r) => {
          var n = r(693)
            , i = r(7564)
            , s = r(9656)
            , a = r(4133)
            , o = r(3135);
          function c(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1])
              }
          }
          c.prototype.clear = n,
          c.prototype.delete = i,
          c.prototype.get = s,
          c.prototype.has = a,
          c.prototype.set = o,
          e.exports = c
      }
      ,
      8489: (e, t, r) => {
          var n = r(2510)(r(1203), "Map");
          e.exports = n
      }
      ,
      5270: (e, t, r) => {
          var n = r(1455)
            , i = r(8686)
            , s = r(4945)
            , a = r(4886)
            , o = r(5305);
          function c(e) {
              var t = -1
                , r = null == e ? 0 : e.length;
              for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1])
              }
          }
          c.prototype.clear = n,
          c.prototype.delete = i,
          c.prototype.get = s,
          c.prototype.has = a,
          c.prototype.set = o,
          e.exports = c
      }
      ,
      9929: (e, t, r) => {
          var n = r(2510)(r(1203), "Promise");
          e.exports = n
      }
      ,
      1317: (e, t, r) => {
          var n = r(2510)(r(1203), "Set");
          e.exports = n
      }
      ,
      9464: (e, t, r) => {
          var n = r(7589)
            , i = r(6315)
            , s = r(5716)
            , a = r(4013)
            , o = r(1974)
            , c = r(4467);
          function l(e) {
              var t = this.__data__ = new n(e);
              this.size = t.size
          }
          l.prototype.clear = i,
          l.prototype.delete = s,
          l.prototype.get = a,
          l.prototype.has = o,
          l.prototype.set = c,
          e.exports = l
      }
      ,
      442: (e, t, r) => {
          var n = r(1203).Symbol;
          e.exports = n
      }
      ,
      2802: (e, t, r) => {
          var n = r(1203).Uint8Array;
          e.exports = n
      }
      ,
      2492: (e, t, r) => {
          var n = r(2510)(r(1203), "WeakMap");
          e.exports = n
      }
      ,
      7668: e => {
          e.exports = function(e, t) {
              for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e); )
                  ;
              return e
          }
      }
      ,
      6541: e => {
          e.exports = function(e, t) {
              for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n; ) {
                  var a = e[r];
                  t(a, r, e) && (s[i++] = a)
              }
              return s
          }
      }
      ,
      1236: (e, t, r) => {
          var n = r(3494)
            , i = r(3130)
            , s = r(3936)
            , a = r(3238)
            , o = r(6711)
            , c = r(4587)
            , l = Object.prototype.hasOwnProperty;
          e.exports = function(e, t) {
              var r = s(e)
                , h = !r && i(e)
                , u = !r && !h && a(e)
                , d = !r && !h && !u && c(e)
                , f = r || h || u || d
                , p = f ? n(e.length, String) : []
                , v = p.length;
              for (var y in e)
                  !t && !l.call(e, y) || f && ("length" == y || u && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || o(y, v)) || p.push(y);
              return p
          }
      }
      ,
      836: e => {
          e.exports = function(e, t) {
              for (var r = -1, n = t.length, i = e.length; ++r < n; )
                  e[i + r] = t[r];
              return e
          }
      }
      ,
      7213: (e, t, r) => {
          var n = r(8551)
            , i = r(294)
            , s = Object.prototype.hasOwnProperty;
          e.exports = function(e, t, r) {
              var a = e[t];
              s.call(e, t) && i(a, r) && (void 0 !== r || t in e) || n(e, t, r)
          }
      }
      ,
      9025: (e, t, r) => {
          var n = r(294);
          e.exports = function(e, t) {
              for (var r = e.length; r--; )
                  if (n(e[r][0], t))
                      return r;
              return -1
          }
      }
      ,
      2691: (e, t, r) => {
          var n = r(4336)
            , i = r(4638);
          e.exports = function(e, t) {
              return e && n(t, i(t), e)
          }
      }
      ,
      4348: (e, t, r) => {
          var n = r(4336)
            , i = r(748);
          e.exports = function(e, t) {
              return e && n(t, i(t), e)
          }
      }
      ,
      8551: (e, t, r) => {
          var n = r(549);
          e.exports = function(e, t, r) {
              "__proto__" == t && n ? n(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: r,
                  writable: !0
              }) : e[t] = r
          }
      }
      ,
      9984: (e, t, r) => {
          var n = r(9464)
            , i = r(7668)
            , s = r(7213)
            , a = r(2691)
            , o = r(4348)
            , c = r(9777)
            , l = r(5722)
            , h = r(1840)
            , u = r(4239)
            , d = r(8340)
            , f = r(8395)
            , p = r(1853)
            , v = r(2001)
            , y = r(1150)
            , m = r(3914)
            , g = r(3936)
            , w = r(3238)
            , b = r(2844)
            , E = r(368)
            , P = r(8131)
            , S = r(4638)
            , _ = r(748)
            , A = "[object Arguments]"
            , T = "[object Function]"
            , O = "[object Object]"
            , k = {};
          k[A] = k["[object Array]"] = k["[object ArrayBuffer]"] = k["[object DataView]"] = k["[object Boolean]"] = k["[object Date]"] = k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Map]"] = k["[object Number]"] = k[O] = k["[object RegExp]"] = k["[object Set]"] = k["[object String]"] = k["[object Symbol]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0,
          k["[object Error]"] = k[T] = k["[object WeakMap]"] = !1,
          e.exports = function e(t, r, C, R, I, D) {
              var x, N = 1 & r, M = 2 & r, L = 4 & r;
              if (C && (x = I ? C(t, R, I, D) : C(t)),
              void 0 !== x)
                  return x;
              if (!E(t))
                  return t;
              var j = g(t);
              if (j) {
                  if (x = v(t),
                  !N)
                      return l(t, x)
              } else {
                  var F = p(t)
                    , U = F == T || "[object GeneratorFunction]" == F;
                  if (w(t))
                      return c(t, N);
                  if (F == O || F == A || U && !I) {
                      if (x = M || U ? {} : m(t),
                      !N)
                          return M ? u(t, o(x, t)) : h(t, a(x, t))
                  } else {
                      if (!k[F])
                          return I ? t : {};
                      x = y(t, F, N)
                  }
              }
              D || (D = new n);
              var G = D.get(t);
              if (G)
                  return G;
              D.set(t, x),
              P(t) ? t.forEach((function(n) {
                  x.add(e(n, r, C, n, t, D))
              }
              )) : b(t) && t.forEach((function(n, i) {
                  x.set(i, e(n, r, C, i, t, D))
              }
              ));
              var $ = j ? void 0 : (L ? M ? f : d : M ? _ : S)(t);
              return i($ || t, (function(n, i) {
                  $ && (n = t[i = n]),
                  s(x, i, e(n, r, C, i, t, D))
              }
              )),
              x
          }
      }
      ,
      9537: (e, t, r) => {
          var n = r(368)
            , i = Object.create
            , s = function() {
              function e() {}
              return function(t) {
                  if (!n(t))
                      return {};
                  if (i)
                      return i(t);
                  e.prototype = t;
                  var r = new e;
                  return e.prototype = void 0,
                  r
              }
          }();
          e.exports = s
      }
      ,
      1380: (e, t, r) => {
          var n = r(836)
            , i = r(3936);
          e.exports = function(e, t, r) {
              var s = t(e);
              return i(e) ? s : n(s, r(e))
          }
      }
      ,
      5244: (e, t, r) => {
          var n = r(442)
            , i = r(4384)
            , s = r(9671)
            , a = n ? n.toStringTag : void 0;
          e.exports = function(e) {
              return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : s(e)
          }
      }
      ,
      1650: (e, t, r) => {
          var n = r(5244)
            , i = r(8223);
          e.exports = function(e) {
              return i(e) && "[object Arguments]" == n(e)
          }
      }
      ,
      3198: (e, t, r) => {
          var n = r(1853)
            , i = r(8223);
          e.exports = function(e) {
              return i(e) && "[object Map]" == n(e)
          }
      }
      ,
      1627: (e, t, r) => {
          var n = r(1560)
            , i = r(9843)
            , s = r(368)
            , a = r(1421)
            , o = /^\[object .+?Constructor\]$/
            , c = Function.prototype
            , l = Object.prototype
            , h = c.toString
            , u = l.hasOwnProperty
            , d = RegExp("^" + h.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          e.exports = function(e) {
              return !(!s(e) || i(e)) && (n(e) ? d : o).test(a(e))
          }
      }
      ,
      9781: (e, t, r) => {
          var n = r(1853)
            , i = r(8223);
          e.exports = function(e) {
              return i(e) && "[object Set]" == n(e)
          }
      }
      ,
      4323: (e, t, r) => {
          var n = r(5244)
            , i = r(501)
            , s = r(8223)
            , a = {};
          a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0,
          a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1,
          e.exports = function(e) {
              return s(e) && i(e.length) && !!a[n(e)]
          }
      }
      ,
      1741: (e, t, r) => {
          var n = r(7064)
            , i = r(8485)
            , s = Object.prototype.hasOwnProperty;
          e.exports = function(e) {
              if (!n(e))
                  return i(e);
              var t = [];
              for (var r in Object(e))
                  s.call(e, r) && "constructor" != r && t.push(r);
              return t
          }
      }
      ,
      7695: (e, t, r) => {
          var n = r(368)
            , i = r(7064)
            , s = r(9857)
            , a = Object.prototype.hasOwnProperty;
          e.exports = function(e) {
              if (!n(e))
                  return s(e);
              var t = i(e)
                , r = [];
              for (var o in e)
                  ("constructor" != o || !t && a.call(e, o)) && r.push(o);
              return r
          }
      }
      ,
      3494: e => {
          e.exports = function(e, t) {
              for (var r = -1, n = Array(e); ++r < e; )
                  n[r] = t(r);
              return n
          }
      }
      ,
      9679: e => {
          e.exports = function(e) {
              return function(t) {
                  return e(t)
              }
          }
      }
      ,
      4368: (e, t, r) => {
          var n = r(2802);
          e.exports = function(e) {
              var t = new e.constructor(e.byteLength);
              return new n(t).set(new n(e)),
              t
          }
      }
      ,
      9777: (e, t, r) => {
          function n(e) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e = r.nmd(e);
          var i = r(1203)
            , s = "object" == n(t) && t && !t.nodeType && t
            , a = s && "object" == n(e) && e && !e.nodeType && e
            , o = a && a.exports === s ? i.Buffer : void 0
            , c = o ? o.allocUnsafe : void 0;
          e.exports = function(e, t) {
              if (t)
                  return e.slice();
              var r = e.length
                , n = c ? c(r) : new e.constructor(r);
              return e.copy(n),
              n
          }
      }
      ,
      531: (e, t, r) => {
          var n = r(4368);
          e.exports = function(e, t) {
              var r = t ? n(e.buffer) : e.buffer;
              return new e.constructor(r,e.byteOffset,e.byteLength)
          }
      }
      ,
      5116: e => {
          var t = /\w*$/;
          e.exports = function(e) {
              var r = new e.constructor(e.source,t.exec(e));
              return r.lastIndex = e.lastIndex,
              r
          }
      }
      ,
      8407: (e, t, r) => {
          var n = r(442)
            , i = n ? n.prototype : void 0
            , s = i ? i.valueOf : void 0;
          e.exports = function(e) {
              return s ? Object(s.call(e)) : {}
          }
      }
      ,
      4966: (e, t, r) => {
          var n = r(4368);
          e.exports = function(e, t) {
              var r = t ? n(e.buffer) : e.buffer;
              return new e.constructor(r,e.byteOffset,e.length)
          }
      }
      ,
      5722: e => {
          e.exports = function(e, t) {
              var r = -1
                , n = e.length;
              for (t || (t = Array(n)); ++r < n; )
                  t[r] = e[r];
              return t
          }
      }
      ,
      4336: (e, t, r) => {
          var n = r(7213)
            , i = r(8551);
          e.exports = function(e, t, r, s) {
              var a = !r;
              r || (r = {});
              for (var o = -1, c = t.length; ++o < c; ) {
                  var l = t[o]
                    , h = s ? s(r[l], e[l], l, r, e) : void 0;
                  void 0 === h && (h = e[l]),
                  a ? i(r, l, h) : n(r, l, h)
              }
              return r
          }
      }
      ,
      1840: (e, t, r) => {
          var n = r(4336)
            , i = r(9783);
          e.exports = function(e, t) {
              return n(e, i(e), t)
          }
      }
      ,
      4239: (e, t, r) => {
          var n = r(4336)
            , i = r(9155);
          e.exports = function(e, t) {
              return n(e, i(e), t)
          }
      }
      ,
      168: (e, t, r) => {
          var n = r(1203)["__core-js_shared__"];
          e.exports = n
      }
      ,
      549: (e, t, r) => {
          var n = r(2510)
            , i = function() {
              try {
                  var e = n(Object, "defineProperty");
                  return e({}, "", {}),
                  e
              } catch (e) {}
          }();
          e.exports = i
      }
      ,
      9747: (e, t, r) => {
          function n(e) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          var i = "object" == (void 0 === r.g ? "undefined" : n(r.g)) && r.g && r.g.Object === Object && r.g;
          e.exports = i
      }
      ,
      8340: (e, t, r) => {
          var n = r(1380)
            , i = r(9783)
            , s = r(4638);
          e.exports = function(e) {
              return n(e, s, i)
          }
      }
      ,
      8395: (e, t, r) => {
          var n = r(1380)
            , i = r(9155)
            , s = r(748);
          e.exports = function(e) {
              return n(e, s, i)
          }
      }
      ,
      427: (e, t, r) => {
          var n = r(1929);
          e.exports = function(e, t) {
              var r = e.__data__;
              return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
          }
      }
      ,
      2510: (e, t, r) => {
          var n = r(1627)
            , i = r(9489);
          e.exports = function(e, t) {
              var r = i(e, t);
              return n(r) ? r : void 0
          }
      }
      ,
      2264: (e, t, r) => {
          var n = r(1182)(Object.getPrototypeOf, Object);
          e.exports = n
      }
      ,
      4384: (e, t, r) => {
          var n = r(442)
            , i = Object.prototype
            , s = i.hasOwnProperty
            , a = i.toString
            , o = n ? n.toStringTag : void 0;
          e.exports = function(e) {
              var t = s.call(e, o)
                , r = e[o];
              try {
                  e[o] = void 0;
                  var n = !0
              } catch (e) {}
              var i = a.call(e);
              return n && (t ? e[o] = r : delete e[o]),
              i
          }
      }
      ,
      9783: (e, t, r) => {
          var n = r(6541)
            , i = r(4361)
            , s = Object.prototype.propertyIsEnumerable
            , a = Object.getOwnPropertySymbols
            , o = a ? function(e) {
              return null == e ? [] : (e = Object(e),
              n(a(e), (function(t) {
                  return s.call(e, t)
              }
              )))
          }
          : i;
          e.exports = o
      }
      ,
      9155: (e, t, r) => {
          var n = r(836)
            , i = r(2264)
            , s = r(9783)
            , a = r(4361)
            , o = Object.getOwnPropertySymbols ? function(e) {
              for (var t = []; e; )
                  n(t, s(e)),
                  e = i(e);
              return t
          }
          : a;
          e.exports = o
      }
      ,
      1853: (e, t, r) => {
          var n = r(1232)
            , i = r(8489)
            , s = r(9929)
            , a = r(1317)
            , o = r(2492)
            , c = r(5244)
            , l = r(1421)
            , h = "[object Map]"
            , u = "[object Promise]"
            , d = "[object Set]"
            , f = "[object WeakMap]"
            , p = "[object DataView]"
            , v = l(n)
            , y = l(i)
            , m = l(s)
            , g = l(a)
            , w = l(o)
            , b = c;
          (n && b(new n(new ArrayBuffer(1))) != p || i && b(new i) != h || s && b(s.resolve()) != u || a && b(new a) != d || o && b(new o) != f) && (b = function(e) {
              var t = c(e)
                , r = "[object Object]" == t ? e.constructor : void 0
                , n = r ? l(r) : "";
              if (n)
                  switch (n) {
                  case v:
                      return p;
                  case y:
                      return h;
                  case m:
                      return u;
                  case g:
                      return d;
                  case w:
                      return f
                  }
              return t
          }
          ),
          e.exports = b
      }
      ,
      9489: e => {
          e.exports = function(e, t) {
              return null == e ? void 0 : e[t]
          }
      }
      ,
      6844: (e, t, r) => {
          var n = r(6382);
          e.exports = function() {
              this.__data__ = n ? n(null) : {},
              this.size = 0
          }
      }
      ,
      770: e => {
          e.exports = function(e) {
              var t = this.has(e) && delete this.__data__[e];
              return this.size -= t ? 1 : 0,
              t
          }
      }
      ,
      862: (e, t, r) => {
          var n = r(6382)
            , i = Object.prototype.hasOwnProperty;
          e.exports = function(e) {
              var t = this.__data__;
              if (n) {
                  var r = t[e];
                  return "__lodash_hash_undefined__" === r ? void 0 : r
              }
              return i.call(t, e) ? t[e] : void 0
          }
      }
      ,
      8670: (e, t, r) => {
          var n = r(6382)
            , i = Object.prototype.hasOwnProperty;
          e.exports = function(e) {
              var t = this.__data__;
              return n ? void 0 !== t[e] : i.call(t, e)
          }
      }
      ,
      3931: (e, t, r) => {
          var n = r(6382);
          e.exports = function(e, t) {
              var r = this.__data__;
              return this.size += this.has(e) ? 0 : 1,
              r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t,
              this
          }
      }
      ,
      2001: e => {
          var t = Object.prototype.hasOwnProperty;
          e.exports = function(e) {
              var r = e.length
                , n = new e.constructor(r);
              return r && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index,
              n.input = e.input),
              n
          }
      }
      ,
      1150: (e, t, r) => {
          var n = r(4368)
            , i = r(531)
            , s = r(5116)
            , a = r(8407)
            , o = r(4966);
          e.exports = function(e, t, r) {
              var c = e.constructor;
              switch (t) {
              case "[object ArrayBuffer]":
                  return n(e);
              case "[object Boolean]":
              case "[object Date]":
                  return new c(+e);
              case "[object DataView]":
                  return i(e, r);
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                  return o(e, r);
              case "[object Map]":
                  return new c;
              case "[object Number]":
              case "[object String]":
                  return new c(e);
              case "[object RegExp]":
                  return s(e);
              case "[object Set]":
                  return new c;
              case "[object Symbol]":
                  return a(e)
              }
          }
      }
      ,
      3914: (e, t, r) => {
          var n = r(9537)
            , i = r(2264)
            , s = r(7064);
          e.exports = function(e) {
              return "function" != typeof e.constructor || s(e) ? {} : n(i(e))
          }
      }
      ,
      6711: e => {
          function t(e) {
              return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          var r = /^(?:0|[1-9]\d*)$/;
          e.exports = function(e, n) {
              var i = t(e);
              return !!(n = null == n ? 9007199254740991 : n) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < n
          }
      }
      ,
      1929: e => {
          function t(e) {
              return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e.exports = function(e) {
              var r = t(e);
              return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e
          }
      }
      ,
      9843: (e, t, r) => {
          var n, i = r(168), s = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
          e.exports = function(e) {
              return !!s && s in e
          }
      }
      ,
      7064: e => {
          var t = Object.prototype;
          e.exports = function(e) {
              var r = e && e.constructor;
              return e === ("function" == typeof r && r.prototype || t)
          }
      }
      ,
      693: e => {
          e.exports = function() {
              this.__data__ = [],
              this.size = 0
          }
      }
      ,
      7564: (e, t, r) => {
          var n = r(9025)
            , i = Array.prototype.splice;
          e.exports = function(e) {
              var t = this.__data__
                , r = n(t, e);
              return !(r < 0 || (r == t.length - 1 ? t.pop() : i.call(t, r, 1),
              --this.size,
              0))
          }
      }
      ,
      9656: (e, t, r) => {
          var n = r(9025);
          e.exports = function(e) {
              var t = this.__data__
                , r = n(t, e);
              return r < 0 ? void 0 : t[r][1]
          }
      }
      ,
      4133: (e, t, r) => {
          var n = r(9025);
          e.exports = function(e) {
              return n(this.__data__, e) > -1
          }
      }
      ,
      3135: (e, t, r) => {
          var n = r(9025);
          e.exports = function(e, t) {
              var r = this.__data__
                , i = n(r, e);
              return i < 0 ? (++this.size,
              r.push([e, t])) : r[i][1] = t,
              this
          }
      }
      ,
      1455: (e, t, r) => {
          var n = r(7460)
            , i = r(7589)
            , s = r(8489);
          e.exports = function() {
              this.size = 0,
              this.__data__ = {
                  hash: new n,
                  map: new (s || i),
                  string: new n
              }
          }
      }
      ,
      8686: (e, t, r) => {
          var n = r(427);
          e.exports = function(e) {
              var t = n(this, e).delete(e);
              return this.size -= t ? 1 : 0,
              t
          }
      }
      ,
      4945: (e, t, r) => {
          var n = r(427);
          e.exports = function(e) {
              return n(this, e).get(e)
          }
      }
      ,
      4886: (e, t, r) => {
          var n = r(427);
          e.exports = function(e) {
              return n(this, e).has(e)
          }
      }
      ,
      5305: (e, t, r) => {
          var n = r(427);
          e.exports = function(e, t) {
              var r = n(this, e)
                , i = r.size;
              return r.set(e, t),
              this.size += r.size == i ? 0 : 1,
              this
          }
      }
      ,
      6382: (e, t, r) => {
          var n = r(2510)(Object, "create");
          e.exports = n
      }
      ,
      8485: (e, t, r) => {
          var n = r(1182)(Object.keys, Object);
          e.exports = n
      }
      ,
      9857: e => {
          e.exports = function(e) {
              var t = [];
              if (null != e)
                  for (var r in Object(e))
                      t.push(r);
              return t
          }
      }
      ,
      5684: (e, t, r) => {
          function n(e) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e = r.nmd(e);
          var i = r(9747)
            , s = "object" == n(t) && t && !t.nodeType && t
            , a = s && "object" == n(e) && e && !e.nodeType && e
            , o = a && a.exports === s && i.process
            , c = function() {
              try {
                  return a && a.require && a.require("util").types || o && o.binding && o.binding("util")
              } catch (e) {}
          }();
          e.exports = c
      }
      ,
      9671: e => {
          var t = Object.prototype.toString;
          e.exports = function(e) {
              return t.call(e)
          }
      }
      ,
      1182: e => {
          e.exports = function(e, t) {
              return function(r) {
                  return e(t(r))
              }
          }
      }
      ,
      1203: (e, t, r) => {
          function n(e) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          var i = r(9747)
            , s = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
            , a = i || s || Function("return this")();
          e.exports = a
      }
      ,
      6315: (e, t, r) => {
          var n = r(7589);
          e.exports = function() {
              this.__data__ = new n,
              this.size = 0
          }
      }
      ,
      5716: e => {
          e.exports = function(e) {
              var t = this.__data__
                , r = t.delete(e);
              return this.size = t.size,
              r
          }
      }
      ,
      4013: e => {
          e.exports = function(e) {
              return this.__data__.get(e)
          }
      }
      ,
      1974: e => {
          e.exports = function(e) {
              return this.__data__.has(e)
          }
      }
      ,
      4467: (e, t, r) => {
          var n = r(7589)
            , i = r(8489)
            , s = r(5270);
          e.exports = function(e, t) {
              var r = this.__data__;
              if (r instanceof n) {
                  var a = r.__data__;
                  if (!i || a.length < 199)
                      return a.push([e, t]),
                      this.size = ++r.size,
                      this;
                  r = this.__data__ = new s(a)
              }
              return r.set(e, t),
              this.size = r.size,
              this
          }
      }
      ,
      1421: e => {
          var t = Function.prototype.toString;
          e.exports = function(e) {
              if (null != e) {
                  try {
                      return t.call(e)
                  } catch (e) {}
                  try {
                      return e + ""
                  } catch (e) {}
              }
              return ""
          }
      }
      ,
      6609: (e, t, r) => {
          var n = r(9984);
          e.exports = function(e) {
              return n(e, 5)
          }
      }
      ,
      294: e => {
          e.exports = function(e, t) {
              return e === t || e != e && t != t
          }
      }
      ,
      3130: (e, t, r) => {
          var n = r(1650)
            , i = r(8223)
            , s = Object.prototype
            , a = s.hasOwnProperty
            , o = s.propertyIsEnumerable
            , c = n(function() {
              return arguments
          }()) ? n : function(e) {
              return i(e) && a.call(e, "callee") && !o.call(e, "callee")
          }
          ;
          e.exports = c
      }
      ,
      3936: e => {
          var t = Array.isArray;
          e.exports = t
      }
      ,
      3599: (e, t, r) => {
          var n = r(1560)
            , i = r(501);
          e.exports = function(e) {
              return null != e && i(e.length) && !n(e)
          }
      }
      ,
      3238: (e, t, r) => {
          function n(e) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e = r.nmd(e);
          var i = r(1203)
            , s = r(2263)
            , a = "object" == n(t) && t && !t.nodeType && t
            , o = a && "object" == n(e) && e && !e.nodeType && e
            , c = o && o.exports === a ? i.Buffer : void 0
            , l = (c ? c.isBuffer : void 0) || s;
          e.exports = l
      }
      ,
      1560: (e, t, r) => {
          var n = r(5244)
            , i = r(368);
          e.exports = function(e) {
              if (!i(e))
                  return !1;
              var t = n(e);
              return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
          }
      }
      ,
      501: e => {
          e.exports = function(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
          }
      }
      ,
      2844: (e, t, r) => {
          var n = r(3198)
            , i = r(9679)
            , s = r(5684)
            , a = s && s.isMap
            , o = a ? i(a) : n;
          e.exports = o
      }
      ,
      368: e => {
          function t(e) {
              return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e.exports = function(e) {
              var r = t(e);
              return null != e && ("object" == r || "function" == r)
          }
      }
      ,
      8223: e => {
          function t(e) {
              return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e.exports = function(e) {
              return null != e && "object" == t(e)
          }
      }
      ,
      8131: (e, t, r) => {
          var n = r(9781)
            , i = r(9679)
            , s = r(5684)
            , a = s && s.isSet
            , o = a ? i(a) : n;
          e.exports = o
      }
      ,
      4587: (e, t, r) => {
          var n = r(4323)
            , i = r(9679)
            , s = r(5684)
            , a = s && s.isTypedArray
            , o = a ? i(a) : n;
          e.exports = o
      }
      ,
      4638: (e, t, r) => {
          var n = r(1236)
            , i = r(1741)
            , s = r(3599);
          e.exports = function(e) {
              return s(e) ? n(e) : i(e)
          }
      }
      ,
      748: (e, t, r) => {
          var n = r(1236)
            , i = r(7695)
            , s = r(3599);
          e.exports = function(e) {
              return s(e) ? n(e, !0) : i(e)
          }
      }
      ,
      4361: e => {
          e.exports = function() {
              return []
          }
      }
      ,
      2263: e => {
          e.exports = function() {
              return !1
          }
      }
      ,
      2096: () => {
          "function" != typeof Promise.prototype.finally && (Promise.prototype.finally = function(e) {
              var t = this;
              return this.then((function(r) {
                  return t.constructor.resolve(e()).then((function() {
                      return r
                  }
                  ))
              }
              )).catch((function(r) {
                  return t.constructor.resolve(e()).then((function() {
                      throw r
                  }
                  ))
              }
              ))
          }
          )
      }
      ,
      6256: function(e, t, r) {
          var n;
          function i(e) {
              return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          e = r.nmd(e),
          function(s, a) {
              "use strict";
              var o = "function"
                , c = "undefined"
                , l = "object"
                , h = "string"
                , u = "model"
                , d = "name"
                , f = "type"
                , p = "vendor"
                , v = "version"
                , y = "architecture"
                , m = "console"
                , g = "mobile"
                , w = "tablet"
                , b = "smarttv"
                , E = "wearable"
                , P = "embedded"
                , S = "Amazon"
                , _ = "Apple"
                , A = "ASUS"
                , T = "BlackBerry"
                , O = "Google"
                , k = "Huawei"
                , C = "LG"
                , R = "Microsoft"
                , I = "Motorola"
                , D = "Samsung"
                , x = "Sharp"
                , N = "Sony"
                , M = "Xiaomi"
                , L = "Zebra"
                , j = "Facebook"
                , F = "Chromium OS"
                , U = "Mac OS"
                , G = function(e) {
                  for (var t = {}, r = 0; r < e.length; r++)
                      t[e[r].toUpperCase()] = e[r];
                  return t
              }
                , $ = function(e, t) {
                  return i(e) === h && -1 !== B(t).indexOf(B(e))
              }
                , B = function(e) {
                  return e.toLowerCase()
              }
                , V = function(e, t) {
                  if (i(e) === h)
                      return e = e.replace(/^\s\s*/, ""),
                      i(t) === c ? e : e.substring(0, 350)
              }
                , q = function(e, t) {
                  for (var r, n, s, c, h, u, d = 0; d < t.length && !h; ) {
                      var f = t[d]
                        , p = t[d + 1];
                      for (r = n = 0; r < f.length && !h && f[r]; )
                          if (h = f[r++].exec(e))
                              for (s = 0; s < p.length; s++)
                                  u = h[++n],
                                  i(c = p[s]) === l && c.length > 0 ? 2 === c.length ? i(c[1]) == o ? this[c[0]] = c[1].call(this, u) : this[c[0]] = c[1] : 3 === c.length ? i(c[1]) !== o || c[1].exec && c[1].test ? this[c[0]] = u ? u.replace(c[1], c[2]) : a : this[c[0]] = u ? c[1].call(this, u, c[2]) : a : 4 === c.length && (this[c[0]] = u ? c[3].call(this, u.replace(c[1], c[2])) : a) : this[c] = u || a;
                      d += 2
                  }
              }
                , W = function(e, t) {
                  for (var r in t)
                      if (i(t[r]) === l && t[r].length > 0) {
                          for (var n = 0; n < t[r].length; n++)
                              if ($(t[r][n], e))
                                  return "?" === r ? a : r
                      } else if ($(t[r], e))
                          return "?" === r ? a : r;
                  return e
              }
                , z = {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2e3: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM"
              }
                , Y = {
                  browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [v, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [v, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, v], [/opios[\/ ]+([\w\.]+)/i], [v, [d, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [v, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, v], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [v, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [v, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [v, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [v, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [v, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [v, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], v], [/\bfocus\/([\w\.]+)/i], [v, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [v, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [v, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [v, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [v, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [v, [d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [v, [d, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], v], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], v], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [d, v], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, j], v], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [d, v], [/\bgsa\/([\w\.]+) .*safari\//i], [v, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [v, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [v, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], v], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [v, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, v], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [v, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [v, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [v, W, {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/"
                  }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, v], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], v], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [v, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, v], [/(cobalt)\/([\w\.]+)/i], [d, [v, /master.|lts./, ""]]],
                  cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[y, "amd64"]], [/(ia32(?=;))/i], [[y, B]], [/((?:i[346]|x)86)[;\)]/i], [[y, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[y, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[y, "armhf"]], [/windows (ce|mobile); ppc;/i], [[y, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[y, /ower/, "", B]], [/(sun4\w)[;\)]/i], [[y, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[y, B]]],
                  device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [p, D], [f, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [p, D], [f, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [u, [p, _], [f, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [p, _], [f, w]], [/(macintosh);/i], [u, [p, _]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [p, x], [f, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [p, k], [f, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [u, [p, k], [f, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [p, M], [f, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [p, M], [f, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [p, "OPPO"], [f, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [p, "Vivo"], [f, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [p, "Realme"], [f, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [p, I], [f, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [p, I], [f, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [p, C], [f, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [p, C], [f, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [p, "Lenovo"], [f, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [p, "Nokia"], [f, g]], [/(pixel c)\b/i], [u, [p, O], [f, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [p, O], [f, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [p, N], [f, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [p, N], [f, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [p, "OnePlus"], [f, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [p, S], [f, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [p, S], [f, g]], [/(playbook);[-\w\),; ]+(rim)/i], [u, p, [f, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [p, T], [f, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [p, A], [f, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [p, A], [f, g]], [/(nexus 9)/i], [u, [p, "HTC"], [f, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [p, [u, /_/g, " "], [f, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [p, "Acer"], [f, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [p, "Meizu"], [f, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [p, u, [f, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [p, u, [f, w]], [/(surface duo)/i], [u, [p, R], [f, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [p, "Fairphone"], [f, g]], [/(u304aa)/i], [u, [p, "AT&T"], [f, g]], [/\bsie-(\w*)/i], [u, [p, "Siemens"], [f, g]], [/\b(rct\w+) b/i], [u, [p, "RCA"], [f, w]], [/\b(venue[\d ]{2,7}) b/i], [u, [p, "Dell"], [f, w]], [/\b(q(?:mv|ta)\w+) b/i], [u, [p, "Verizon"], [f, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [p, "Barnes & Noble"], [f, w]], [/\b(tm\d{3}\w+) b/i], [u, [p, "NuVision"], [f, w]], [/\b(k88) b/i], [u, [p, "ZTE"], [f, w]], [/\b(nx\d{3}j) b/i], [u, [p, "ZTE"], [f, g]], [/\b(gen\d{3}) b.+49h/i], [u, [p, "Swiss"], [f, g]], [/\b(zur\d{3}) b/i], [u, [p, "Swiss"], [f, w]], [/\b((zeki)?tb.*\b) b/i], [u, [p, "Zeki"], [f, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[p, "Dragon Touch"], u, [f, w]], [/\b(ns-?\w{0,9}) b/i], [u, [p, "Insignia"], [f, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [p, "NextBook"], [f, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[p, "Voice"], u, [f, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[p, "LvTel"], u, [f, g]], [/\b(ph-1) /i], [u, [p, "Essential"], [f, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [p, "Envizen"], [f, w]], [/\b(trio[-\w\. ]+) b/i], [u, [p, "MachSpeed"], [f, w]], [/\btu_(1491) b/i], [u, [p, "Rotor"], [f, w]], [/(shield[\w ]+) b/i], [u, [p, "Nvidia"], [f, w]], [/(sprint) (\w+)/i], [p, u, [f, g]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [p, R], [f, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [p, L], [f, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [p, L], [f, g]], [/smart-tv.+(samsung)/i], [p, [f, b]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [p, D], [f, b]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[p, C], [f, b]], [/(apple) ?tv/i], [p, [u, "Apple TV"], [f, b]], [/crkey/i], [[u, "Chromecast"], [p, O], [f, b]], [/droid.+aft(\w)( bui|\))/i], [u, [p, S], [f, b]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [u, [p, x], [f, b]], [/(bravia[\w ]+)( bui|\))/i], [u, [p, N], [f, b]], [/(mitv-\w{5}) bui/i], [u, [p, M], [f, b]], [/Hbbtv.*(technisat) (.*);/i], [p, u, [f, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[p, V], [u, V], [f, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[f, b]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [p, u, [f, m]], [/droid.+; (shield) bui/i], [u, [p, "Nvidia"], [f, m]], [/(playstation [345portablevi]+)/i], [u, [p, N], [f, m]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [p, R], [f, m]], [/((pebble))app/i], [p, u, [f, E]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [u, [p, _], [f, E]], [/droid.+; (glass) \d/i], [u, [p, O], [f, E]], [/droid.+; (wt63?0{2,3})\)/i], [u, [p, L], [f, E]], [/(quest( 2| pro)?)/i], [u, [p, j], [f, E]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [p, [f, P]], [/(aeobc)\b/i], [u, [p, S], [f, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [f, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [f, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[f, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[f, g]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [p, "Generic"]]],
                  engine: [[/windows.+ edge\/([\w\.]+)/i], [v, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [v, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, v], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [v, d]],
                  os: [[/microsoft (windows) (vista|xp)/i], [d, v], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [d, [v, W, z]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[d, "Windows"], [v, W, z]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[v, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, U], [v, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [v, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, v], [/\(bb(10);/i], [v, [d, T]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [v, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [v, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [v, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [v, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [v, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, F], v], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, v], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], v], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, v]]
              }
                , K = function e(t, r) {
                  if (i(t) === l && (r = t,
                  t = a),
                  !(this instanceof e))
                      return new e(t,r).getResult();
                  var n = i(s) !== c && s.navigator ? s.navigator : a
                    , u = t || (n && n.userAgent ? n.userAgent : "")
                    , d = n && n.userAgentData ? n.userAgentData : a
                    , f = r ? function(e, t) {
                      var r = {};
                      for (var n in e)
                          t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                      return r
                  }(Y, r) : Y
                    , p = n && n.userAgent == u;
                  return this.getBrowser = function() {
                      var e, t = {};
                      return t.name = a,
                      t.version = a,
                      q.call(t, u, f.browser),
                      t.major = i(e = t.version) === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a,
                      p && n && n.brave && i(n.brave.isBrave) == o && (t.name = "Brave"),
                      t
                  }
                  ,
                  this.getCPU = function() {
                      var e = {};
                      return e.architecture = a,
                      q.call(e, u, f.cpu),
                      e
                  }
                  ,
                  this.getDevice = function() {
                      var e = {};
                      return e.vendor = a,
                      e.model = a,
                      e.type = a,
                      q.call(e, u, f.device),
                      p && !e.type && d && d.mobile && (e.type = g),
                      p && "Macintosh" == e.model && n && i(n.standalone) !== c && n.maxTouchPoints && n.maxTouchPoints > 2 && (e.model = "iPad",
                      e.type = w),
                      e
                  }
                  ,
                  this.getEngine = function() {
                      var e = {};
                      return e.name = a,
                      e.version = a,
                      q.call(e, u, f.engine),
                      e
                  }
                  ,
                  this.getOS = function() {
                      var e = {};
                      return e.name = a,
                      e.version = a,
                      q.call(e, u, f.os),
                      p && !e.name && d && "Unknown" != d.platform && (e.name = d.platform.replace(/chrome os/i, F).replace(/macos/i, U)),
                      e
                  }
                  ,
                  this.getResult = function() {
                      return {
                          ua: this.getUA(),
                          browser: this.getBrowser(),
                          engine: this.getEngine(),
                          os: this.getOS(),
                          device: this.getDevice(),
                          cpu: this.getCPU()
                      }
                  }
                  ,
                  this.getUA = function() {
                      return u
                  }
                  ,
                  this.setUA = function(e) {
                      return u = i(e) === h && e.length > 350 ? V(e, 350) : e,
                      this
                  }
                  ,
                  this.setUA(u),
                  this
              };
              K.VERSION = "1.0.35",
              K.BROWSER = G([d, v, "major"]),
              K.CPU = G([y]),
              K.DEVICE = G([u, p, f, m, g, b, w, E, P]),
              K.ENGINE = K.OS = G([d, v]),
              i(t) !== c ? (i(e) !== c && e.exports && (t = e.exports = K),
              t.UAParser = K) : i(r.amdD) === o && r.amdO ? (n = function() {
                  return K
              }
              .call(t, r, t, e)) === a || (e.exports = n) : i(s) !== c && (s.UAParser = K);
              var J = i(s) !== c && (s.jQuery || s.Zepto);
              if (J && !J.ua) {
                  var Z = new K;
                  J.ua = Z.getResult(),
                  J.ua.get = function() {
                      return Z.getUA()
                  }
                  ,
                  J.ua.set = function(e) {
                      Z.setUA(e);
                      var t = Z.getResult();
                      for (var r in t)
                          J.ua[r] = t[r]
                  }
              }
          }("object" === ("undefined" == typeof window ? "undefined" : i(window)) ? window : this)
      },
      8205: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => s
          });
          var n = r(2616)
            , i = r.n(n)()((function(e) {
              return e[1]
          }
          ));
          i.push([e.id, ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}", ""]);
          const s = i
      }
      ,
      280: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => s
          });
          var n = r(2616)
            , i = r.n(n)()((function(e) {
              return e[1]
          }
          ));
          i.push([e.id, ".gp-gamedistribution-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:90px;max-width:728px;overflow:hidden}.gp-gamedistribution-sticky__creative{position:relative;height:90px;width:728px;max-width:100vw}.gp-gamedistribution-sticky_top{top:0}.gp-gamedistribution-sticky_bottom{bottom:0}", ""]);
          const s = i
      }
      ,
      3379: (e, t, r) => {
          "use strict";
          var n, i = function() {
              var e = {};
              return function(t) {
                  if (void 0 === e[t]) {
                      var r = document.querySelector(t);
                      if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                          try {
                              r = r.contentDocument.head
                          } catch (e) {
                              r = null
                          }
                      e[t] = r
                  }
                  return e[t]
              }
          }(), s = [];
          function a(e) {
              for (var t = -1, r = 0; r < s.length; r++)
                  if (s[r].identifier === e) {
                      t = r;
                      break
                  }
              return t
          }
          function o(e, t) {
              for (var r = {}, n = [], i = 0; i < e.length; i++) {
                  var o = e[i]
                    , c = t.base ? o[0] + t.base : o[0]
                    , l = r[c] || 0
                    , h = "".concat(c, " ").concat(l);
                  r[c] = l + 1;
                  var u = a(h)
                    , d = {
                      css: o[1],
                      media: o[2],
                      sourceMap: o[3]
                  };
                  -1 !== u ? (s[u].references++,
                  s[u].updater(d)) : s.push({
                      identifier: h,
                      updater: v(d, t),
                      references: 1
                  }),
                  n.push(h)
              }
              return n
          }
          function c(e) {
              var t = document.createElement("style")
                , n = e.attributes || {};
              if (void 0 === n.nonce) {
                  var s = r.nc;
                  s && (n.nonce = s)
              }
              if (Object.keys(n).forEach((function(e) {
                  t.setAttribute(e, n[e])
              }
              )),
              "function" == typeof e.insert)
                  e.insert(t);
              else {
                  var a = i(e.insert || "head");
                  if (!a)
                      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                  a.appendChild(t)
              }
              return t
          }
          var l, h = (l = [],
          function(e, t) {
              return l[e] = t,
              l.filter(Boolean).join("\n")
          }
          );
          function u(e, t, r, n) {
              var i = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
              if (e.styleSheet)
                  e.styleSheet.cssText = h(t, i);
              else {
                  var s = document.createTextNode(i)
                    , a = e.childNodes;
                  a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(s, a[t]) : e.appendChild(s)
              }
          }
          function d(e, t, r) {
              var n = r.css
                , i = r.media
                , s = r.sourceMap;
              if (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
              s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")),
              e.styleSheet)
                  e.styleSheet.cssText = n;
              else {
                  for (; e.firstChild; )
                      e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n))
              }
          }
          var f = null
            , p = 0;
          function v(e, t) {
              var r, n, i;
              if (t.singleton) {
                  var s = p++;
                  r = f || (f = c(t)),
                  n = u.bind(null, r, s, !1),
                  i = u.bind(null, r, s, !0)
              } else
                  r = c(t),
                  n = d.bind(null, r, t),
                  i = function() {
                      !function(e) {
                          if (null === e.parentNode)
                              return !1;
                          e.parentNode.removeChild(e)
                      }(r)
                  }
                  ;
              return n(e),
              function(t) {
                  if (t) {
                      if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                          return;
                      n(e = t)
                  } else
                      i()
              }
          }
          e.exports = function(e, t) {
              (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === n && (n = Boolean(window && document && document.all && !window.atob)),
              n));
              var r = o(e = e || [], t);
              return function(e) {
                  if (e = e || [],
                  "[object Array]" === Object.prototype.toString.call(e)) {
                      for (var n = 0; n < r.length; n++) {
                          var i = a(r[n]);
                          s[i].references--
                      }
                      for (var c = o(e, t), l = 0; l < r.length; l++) {
                          var h = a(r[l]);
                          0 === s[h].references && (s[h].updater(),
                          s.splice(h, 1))
                      }
                      r = c
                  }
              }
          }
      }
      ,
      3080: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => F,
              M: () => U
          });
          var n, i, s, a, o, c, l, h, u, d, f, p, v, y, m, g, w, b, E, P, S, _, A, T = r(6558), O = r(1437), k = r(4835), C = r(8293), R = r(6388), I = r(6041), D = function(e, t, r, n) {
              return new (r || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ))
          }, x = function(e, t, r, n, i) {
              if ("m" === n)
                  throw new TypeError("Private method is not writable");
              if ("a" === n && !i)
                  throw new TypeError("Private accessor was defined without a setter");
              if ("function" == typeof t ? e !== t || !i : !t.has(e))
                  throw new TypeError("Cannot write private member to an object whose class did not declare it");
              return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
              r
          }, N = function(e, t, r, n) {
              if ("a" === r && !n)
                  throw new TypeError("Private accessor was defined without a getter");
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                  throw new TypeError("Cannot read private member from an object whose class did not declare it");
              return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          }, M = function(e, t) {
              var r = {};
              for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = 0;
                  for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
              }
              return r
          };
          const L = "already_unlocked"
            , j = "achievement_not_found";
          class F extends R.Z {
              constructor(e, t, r) {
                  super(),
                  this.gp = e,
                  n.add(this),
                  i.set(this, void 0),
                  s.set(this, void 0),
                  a.set(this, []),
                  o.set(this, []),
                  c.set(this, []),
                  l.set(this, {}),
                  h.set(this, {}),
                  u.set(this, {}),
                  d.set(this, {}),
                  f.set(this, {}),
                  p.set(this, {}),
                  v.set(this, {}),
                  y.set(this, new Set),
                  x(this, i, r.project.achievements, "f"),
                  r.achievements.forEach((t => {
                      t.name = t.names[e.language] || t.names.en,
                      t.description = t.descriptions[e.language] || t.descriptions.en,
                      t.lockedIcon = (0,
                      I.Z)(t.lockedIcon, 256, 256, !1),
                      t.lockedIconSmall = (0,
                      I.Z)(t.lockedIcon, 48, 48, !1),
                      t.icon = (0,
                      I.Z)(t.icon, 256, 256, !1),
                      t.iconSmall = (0,
                      I.Z)(t.icon, 48, 48, !1)
                  }
                  )),
                  x(this, a, [...r.achievements], "f"),
                  x(this, o, [...r.achievementsGroups], "f"),
                  N(this, n, "m", S).call(this),
                  N(this, n, "m", _).call(this),
                  x(this, s, t, "f"),
                  N(this, s, "f").on("setAchievementsList", (e => N(this, n, "m", E).call(this, e.achievements))),
                  N(this, s, "f").on("markAchievementsUnlocked", (e => {
                      e.forEach((e => {
                          const {achievement: t, playerAchievement: r} = N(this, n, "m", b).call(this, e);
                          if (!t)
                              return void T.kg.error(`achievement not found, ID: ${e}`);
                          if (r)
                              return void T.kg.error(`player achievement already unlocked, ID: ${e}, Tag: ${t.tag}`);
                          const s = {
                              achievementId: t.id,
                              unlocked: !0,
                              progress: t.maxProgress || 0,
                              createdAt: (new Date).toISOString()
                          };
                          let a;
                          N(this, i, "f").enableUnlockToast && (a = this.gp.loadOverlay());
                          const o = Object.assign(Object.assign({}, t), s);
                          N(this, n, "m", P).call(this, o),
                          this._events.emit("unlock", o),
                          N(this, i, "f").enableUnlockToast && Promise.all([a, (0,
                          O.p)(U(o)).catch(T.kg.error)]).then(( () => {
                              this.gp.overlay.unlockAchievement(o)
                          }
                          ))
                      }
                      ))
                  }
                  )),
                  this.gp.on("change:language", (e => {
                      N(this, a, "f").forEach((t => {
                          t.name = t.names[e] || t.names.en,
                          t.description = t.descriptions[e] || t.descriptions.en
                      }
                      )),
                      N(this, o, "f").forEach((t => {
                          t.name = t.names[e] || t.names.en,
                          t.description = t.descriptions[e] || t.descriptions.en
                      }
                      )),
                      N(this, n, "m", S).call(this)
                  }
                  ))
              }
              get list() {
                  return [...N(this, a, "f")]
              }
              get groupsList() {
                  return [...N(this, o, "f")]
              }
              get playerAchievementsList() {
                  return [...N(this, c, "f")]
              }
              get unlockedList() {
                  return [...N(this, c, "f")]
              }
              open({scrollTo: e}={}) {
                  return D(this, void 0, void 0, (function*() {
                      this.gp.loader.inc();
                      try {
                          const [t] = yield Promise.all([this.fetch(), this.gp.loadOverlay(), (0,
                          O.p)(k.Z.app.trophy).catch(T.kg.error)]);
                          this.gp.loader.dec(),
                          t.achievements.length > 0 ? (this._events.emit("open"),
                          yield this.gp.overlay.openAchievements(t, {
                              scrollTo: e
                          }).catch(T.kg.error),
                          this._events.emit("close")) : T.kg.error(new Error("Empty achievements list"))
                      } catch (e) {
                          this.gp.loader.dec(),
                          T.kg.error(e)
                      }
                  }
                  ))
              }
              fetch() {
                  return D(this, void 0, void 0, (function*() {
                      const e = (0,
                      C._)();
                      this.gp.loader.inc();
                      try {
                          const t = {
                              achievements: this.list,
                              achievementsGroups: this.groupsList,
                              playerAchievements: this.unlockedList
                          };
                          e.done(t),
                          this._events.emit("fetch", t)
                      } catch (t) {
                          e.abort(t),
                          this._events.emit("error:fetch")
                      } finally {
                          this.gp.loader.dec()
                      }
                      return e.ready
                  }
                  ))
              }
              unlock(e) {
                  return D(this, void 0, void 0, (function*() {
                      const t = (0,
                      C._)()
                        , r = r => (t.done({
                          success: !1,
                          achievement: null,
                          error: r
                      }),
                      this._events.emit("error:unlock", r, {
                          input: e
                      }),
                      t.ready)
                        , s = Number(e.id) || e.tag
                        , {achievement: a, playerAchievement: o} = N(this, n, "m", b).call(this, s);
                      if (!a)
                          return r(j);
                      if (null == o ? void 0 : o.unlocked)
                          return r(L);
                      if (N(this, y, "f").has(a.id))
                          return r(L);
                      let c;
                      N(this, l, "f")[s] = t,
                      this.gp.loader.inc(),
                      N(this, i, "f").enableUnlockToast && (c = this.gp.loadOverlay());
                      const h = a.id;
                      try {
                          const e = yield this.gp._services.achievementsService.unlock({
                              id: h
                          })
                            , {achievement: r} = e
                            , s = M(e, ["achievement"])
                            , a = Object.assign(Object.assign({}, r), s);
                          N(this, n, "m", P).call(this, a),
                          this._events.emit("unlock", a),
                          N(this, i, "f").enableUnlockToast && Promise.all([c, (0,
                          O.p)(U(a)).catch(T.kg.error)]).then(( () => {
                              this.gp.overlay.unlockAchievement(a)
                          }
                          )),
                          t.done({
                              achievement: a,
                              success: !0,
                              error: ""
                          })
                      } catch (n) {
                          "string" == typeof n ? (n === L && N(this, y, "f").add(a.id),
                          T.kg.error(n),
                          r(n)) : (t.abort(n),
                          this._events.emit("error:unlock", n, {
                              input: e
                          }))
                      } finally {
                          this.gp.loader.dec()
                      }
                      return t.ready.finally(( () => {
                          delete N(this, l, "f")[s]
                      }
                      )),
                      t.ready
                  }
                  ))
              }
              getAchievement(e) {
                  return N(this, n, "m", b).call(this, e)
              }
              has(e) {
                  var t;
                  return !!(null === (t = N(this, n, "m", b).call(this, e).playerAchievement) || void 0 === t ? void 0 : t.unlocked)
              }
              setProgress(e) {
                  var t;
                  return D(this, void 0, void 0, (function*() {
                      const r = (0,
                      C._)()
                        , s = t => (r.done({
                          success: !1,
                          achievement: null,
                          error: t
                      }),
                      this._events.emit("error:progress", t, {
                          input: e
                      }),
                      r.ready)
                        , a = Number(e.id) || e.tag
                        , {achievement: o} = N(this, n, "m", b).call(this, a);
                      return o ? a in N(this, h, "f") ? (N(this, h, "f")[a] = e.progress,
                      null === (t = N(this, u, "f")[a]) || void 0 === t ? void 0 : t.ready) : (N(this, h, "f")[a] = e.progress,
                      N(this, u, "f")[a] = r,
                      setTimeout(( () => D(this, void 0, void 0, (function*() {
                          const t = N(this, h, "f")[a]
                            , {playerAchievement: c} = N(this, n, "m", b).call(this, a);
                          if (N(this, y, "f").has(o.id))
                              return s(L);
                          if (null == c ? void 0 : c.unlocked)
                              return s(L);
                          const l = (null == c ? void 0 : c.progress) || 0;
                          if (l === t)
                              return s("progress_the_same");
                          let u;
                          this.gp.loader.inc(),
                          N(this, i, "f").enableUnlockToast && (u = this.gp.loadOverlay()),
                          yield this.gp._services.achievementsService.setProgress(Object.assign(Object.assign({}, e), {
                              progress: t
                          })).then((e => {
                              var {achievement: t} = e
                                , s = M(e, ["achievement"]);
                              const a = Object.assign(Object.assign({}, t), s)
                                , o = Math.floor(l / a.progressStep)
                                , c = Math.floor(a.progress / a.progressStep);
                              N(this, n, "m", P).call(this, s),
                              N(this, i, "f").enableUnlockToast && (a.unlocked || o < c) && Promise.all([u, (0,
                              O.p)(U(a)).catch(T.kg.error)]).then(( () => {
                                  this.gp.overlay.unlockAchievement(a)
                              }
                              )),
                              a.unlocked && this._events.emit("unlock", a),
                              this._events.emit("progress", a),
                              r.done({
                                  achievement: a,
                                  success: !0,
                                  error: ""
                              })
                          }
                          )).catch((t => {
                              "string" == typeof t ? (t === L && N(this, y, "f").add(o.id),
                              T.kg.error(t),
                              s(t)) : (r.abort(t),
                              this._events.emit("error:progress", t, {
                                  input: e
                              }))
                          }
                          )),
                          this.gp.loader.dec()
                      }
                      ))), 1e3),
                      r.ready.finally(( () => {
                          delete N(this, u, "f")[a],
                          delete N(this, h, "f")[a]
                      }
                      )),
                      r.ready) : s(j)
                  }
                  ))
              }
              getProgress(e) {
                  const {achievement: t, playerAchievement: r} = N(this, n, "m", b).call(this, e);
                  return t && r ? r.progress : 0
              }
          }
          function U(e) {
              let t = "";
              return t = window.devicePixelRatio > 1 ? e.unlocked ? e.icon || e.lockedIcon : e.lockedIcon || e.icon : e.unlocked ? e.iconSmall || e.lockedIconSmall : e.lockedIconSmall || e.iconSmall,
              t || k.Z.cdn.trophy
          }
          i = new WeakMap,
          s = new WeakMap,
          a = new WeakMap,
          o = new WeakMap,
          c = new WeakMap,
          l = new WeakMap,
          h = new WeakMap,
          u = new WeakMap,
          d = new WeakMap,
          f = new WeakMap,
          p = new WeakMap,
          v = new WeakMap,
          y = new WeakMap,
          n = new WeakSet,
          m = function(e) {
              return N(this, d, "f")[e] || N(this, f, "f")[e]
          }
          ,
          g = function(e) {
              return N(this, p, "f")[e]
          }
          ,
          w = function(e) {
              return N(this, o, "f")[e]
          }
          ,
          b = function(e) {
              const t = {
                  achievement: null,
                  playerAchievement: null,
                  achievementGroup: null
              }
                , r = N(this, n, "m", m).call(this, e);
              if (!r)
                  return t;
              t.achievement = r;
              const i = N(this, n, "m", g).call(this, r.id);
              i && (t.playerAchievement = i);
              const s = N(this, n, "m", w).call(this, r.id);
              return s && (t.achievementGroup = s),
              t
          }
          ,
          E = function(e) {
              x(this, c, [...e], "f"),
              N(this, n, "m", A).call(this)
          }
          ,
          P = function(e) {
              N(this, c, "f").some((t => t.achievementId === e.achievementId)) ? x(this, c, N(this, c, "f").map((t => t.achievementId === e.achievementId ? e : t)), "f") : N(this, c, "f").push(e),
              N(this, n, "m", A).call(this)
          }
          ,
          S = function() {
              x(this, d, {}, "f"),
              x(this, f, {}, "f"),
              N(this, a, "f").forEach((e => {
                  N(this, d, "f")[e.id] = e,
                  N(this, f, "f")[e.tag] = e
              }
              ))
          }
          ,
          _ = function() {
              x(this, v, {}, "f"),
              N(this, o, "f").forEach((e => {
                  N(this, v, "f")[e.id] = e
              }
              ))
          }
          ,
          A = function() {
              x(this, p, {}, "f"),
              N(this, c, "f").forEach((e => {
                  N(this, p, "f")[e.achievementId] = e
              }
              ))
          }
      }
      ,
      4687: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => R
          });
          var n, i, s, a, o, c, l, h, u, d, f, p, v, y, m, g, w = r(6558), b = r(8293), E = r(1438), P = r(6388), S = r(5942), _ = r(6041), A = r(8866), T = function(e, t, r, n) {
              return new (r || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ))
          }, O = function(e, t, r, n, i) {
              if ("m" === n)
                  throw new TypeError("Private method is not writable");
              if ("a" === n && !i)
                  throw new TypeError("Private accessor was defined without a setter");
              if ("function" == typeof t ? e !== t || !i : !t.has(e))
                  throw new TypeError("Cannot write private member to an object whose class did not declare it");
              return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
              r
          }, k = function(e, t, r, n) {
              if ("a" === r && !n)
                  throw new TypeError("Private accessor was defined without a getter");
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                  throw new TypeError("Cannot read private member from an object whose class did not declare it");
              return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          };
          const C = "product_not_found";
          class R extends P.Z {
              constructor(e, t, r, p) {
                  super(),
                  this.gp = e,
                  this.adapter = r,
                  n.add(this),
                  i.set(this, void 0),
                  s.set(this, []),
                  a.set(this, []),
                  o.set(this, {}),
                  c.set(this, {}),
                  l.set(this, {}),
                  h.set(this, {}),
                  u.set(this, {}),
                  O(this, a, p.products, "f"),
                  k(this, n, "m", m).call(this),
                  O(this, i, t, "f"),
                  k(this, i, "f").on("setPurchasedList", (e => k(this, n, "m", y).call(this, e.playerPurchases))),
                  k(this, i, "f").on("markPurchasesGiven", (e => {
                      e.forEach((e => {
                          const {product: t} = k(this, n, "m", f).call(this, e);
                          if (!t)
                              return void w.kg.error(`product not found, ID: ${e}`);
                          const r = {
                              productId: t.id,
                              tag: t.tag,
                              payload: {},
                              createdAt: this.gp.serverTime,
                              expiredAt: t.isSubscription ? I(this.gp.serverTime, t.period) : "",
                              gift: !0,
                              subscribed: t.isSubscription,
                              orderStatus: E.i.Paid
                          };
                          k(this, s, "f").push(r),
                          k(this, n, "m", g).call(this),
                          this._events.emit(t.isSubscription ? "subscribe" : "purchase", {
                              product: t,
                              purchase: r
                          })
                      }
                      ))
                  }
                  )),
                  k(this, i, "f").on("syncPurchases", (e => k(this, n, "m", d).call(this).finally(e))),
                  this.gp.on("change:language", (e => {
                      k(this, a, "f").forEach((t => {
                          t.name = t.names[e] || t.names.en,
                          t.description = t.descriptions[e] || t.descriptions.en
                      }
                      )),
                      k(this, n, "m", m).call(this)
                  }
                  )),
                  this.adapter.mapProducts(this.gp, this.products).then((t => {
                      O(this, a, t, "f"),
                      k(this, a, "f").forEach((t => {
                          t.name = t.names[e.language] || t.names.en,
                          t.description = t.descriptions[e.language] || t.descriptions.en,
                          t.icon = (0,
                          _.Z)(t.icon, 256, 256, !1),
                          t.iconSmall = (0,
                          _.Z)(t.icon, 48, 48, !1)
                      }
                      )),
                      k(this, n, "m", m).call(this)
                  }
                  ))
              }
              get isAvailable() {
                  return this.adapter.isSupportsPayments
              }
              get isSubscriptionsAvailable() {
                  return this.adapter.isSupportsSubscriptions
              }
              get products() {
                  return [...k(this, a, "f")]
              }
              get purchases() {
                  return [...k(this, s, "f")]
              }
              fetchProducts() {
                  return T(this, void 0, void 0, (function*() {
                      const e = (0,
                      b._)();
                      this.gp.loader.inc();
                      try {
                          const t = this.purchases
                            , r = yield this.adapter.mapProducts(this.gp, this.products);
                          O(this, a, r, "f"),
                          k(this, n, "m", m).call(this),
                          e.done({
                              products: r,
                              playerPurchases: t
                          }),
                          this._events.emit("fetchProducts", {
                              products: r,
                              playerPurchases: t
                          })
                      } catch (t) {
                          e.abort(t),
                          this._events.emit("error:fetchProducts", t)
                      } finally {
                          this.gp.loader.dec()
                      }
                      return e.ready
                  }
                  ))
              }
              purchase(e) {
                  return T(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (k(this, o, "f")[t])
                          throw new Error("payment_in_progress");
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:purchase", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a} = k(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(C);
                      r.ready.finally(( () => {
                          delete k(this, o, "f")[t]
                      }
                      )),
                      k(this, o, "f")[t] = r,
                      this.gp.loader.inc();
                      try {
                          let e, t, o = !0, c = "";
                          if (!this.gp.player.isLoggedInByPlatform && this.adapter.isNeedAuthorizeBeforePurchase)
                              if (this.gp.platform.type === S.z.YANDEX) {
                                  if (!(yield this.gp.player.login({
                                      withSecretCode: !1
                                  })))
                                      return i("user_not_logged_in")
                              } else
                                  yield this.gp.player.sync({
                                      silent: !1
                                  });
                          else
                              this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync());
                          try {
                              t = yield this.adapter.purchase(a)
                          } catch (e) {
                              throw e
                          }
                          if (this.adapter.isServerValidation) {
                              if (this.gp.platform.type === S.z.OK)
                                  try {
                                      yield this.checkPurchaseStatus(this.gp.projectId, "", t, this.gp.player.id, a.id)
                                  } catch (e) {
                                      throw o = !1,
                                      c = e.message,
                                      c
                                  }
                              e = {
                                  productId: a.id,
                                  tag: a.tag,
                                  payload: t,
                                  createdAt: this.gp.serverTime,
                                  expiredAt: "",
                                  gift: !1,
                                  orderStatus: E.i.Paid,
                                  subscribed: !1
                              }
                          } else
                              try {
                                  e = (yield this.gp._services.paymentsService.purchase({
                                      id: a.id,
                                      payload: t
                                  })).purchase
                              } catch (e) {
                                  o = !1,
                                  c = e.message
                              }
                          if (!o)
                              throw c;
                          k(this, s, "f").push({
                              productId: a.id,
                              tag: a.tag,
                              createdAt: e.createdAt,
                              expiredAt: e.expiredAt,
                              payload: e.payload,
                              gift: e.gift,
                              orderStatus: e.orderStatus,
                              subscribed: e.subscribed
                          }),
                          k(this, n, "m", g).call(this),
                          this._events.emit("purchase", {
                              product: a,
                              purchase: e
                          }),
                          r.done({
                              success: o,
                              product: a,
                              purchase: e,
                              error: c
                          })
                      } catch (e) {
                          i(e)
                      } finally {
                          this.gp.loader.dec()
                      }
                      return r.ready
                  }
                  ))
              }
              consume(e) {
                  return T(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      k(this, c, "f")[t] && (yield k(this, c, "f")[t]);
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:consume", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a} = k(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(C);
                      k(this, c, "f")[t] = r,
                      this.gp.loader.inc();
                      const o = a.id;
                      try {
                          const {product: e, purchase: t} = yield this.gp._services.paymentsService.consume({
                              id: o
                          });
                          t.gift || (yield this.adapter.consume(t));
                          const i = k(this, s, "f").findIndex((t => t.productId === e.id));
                          -1 !== i && (k(this, s, "f").splice(i, 1),
                          k(this, n, "m", g).call(this)),
                          this._events.emit("consume", {
                              product: e,
                              purchase: t
                          }),
                          r.done({
                              product: e,
                              purchase: t,
                              success: !0,
                              error: ""
                          })
                      } catch (e) {
                          i(e)
                      } finally {
                          this.gp.loader.dec()
                      }
                      return r.ready.finally(( () => {
                          delete k(this, c, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              subscribe(e) {
                  return T(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (k(this, o, "f")[t])
                          return k(this, o, "f")[t];
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:subscribe", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a, purchase: c} = k(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(C);
                      k(this, o, "f")[t] = r,
                      this.gp.loader.inc();
                      try {
                          if (!a.isSubscription)
                              throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                          let e, i, o = !0, l = "";
                          this.gp.player.isLoggedInByPlatform ? this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync()) : yield this.gp.player.sync({
                              silent: !1
                          });
                          try {
                              i = yield this.adapter.subscribe(a, c)
                          } catch (e) {
                              throw e
                          }
                          if (this.adapter.isServerValidation)
                              e = {
                                  payload: i,
                                  tag: a.tag,
                                  productId: a.id,
                                  createdAt: this.gp.serverTime,
                                  expiredAt: (null == c ? void 0 : c.expiredAt) || I(this.gp.serverTime, a.period),
                                  gift: !1,
                                  subscribed: !this.adapter.isOneTimeSubscription,
                                  orderStatus: E.i.Paid
                              };
                          else
                              try {
                                  e = (yield this.gp._services.paymentsService.purchase({
                                      id: a.id,
                                      payload: i
                                  })).purchase
                              } catch (e) {
                                  o = !1,
                                  l = e.message
                              }
                          o ? (c && O(this, s, k(this, s, "f").filter((e => e.productId !== c.productId)), "f"),
                          k(this, s, "f").push({
                              tag: a.tag,
                              productId: a.id,
                              createdAt: e.createdAt,
                              expiredAt: e.expiredAt,
                              payload: e.payload,
                              gift: e.gift,
                              subscribed: !0,
                              orderStatus: e.orderStatus
                          }),
                          k(this, n, "m", g).call(this),
                          this._events.emit("subscribe", {
                              product: a,
                              purchase: e
                          })) : w.kg.error(l),
                          r.done({
                              success: o,
                              product: a,
                              purchase: e,
                              error: l
                          })
                      } catch (e) {
                          i(e)
                      } finally {
                          this.gp.loader.dec()
                      }
                      return r.ready.finally(( () => {
                          delete k(this, o, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              unsubscribe(e) {
                  return T(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (k(this, o, "f")[t])
                          return k(this, o, "f")[t];
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:unsubscribe", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a, purchase: c} = k(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(C);
                      k(this, o, "f")[t] = r,
                      this.gp.loader.inc();
                      try {
                          if (!a.isSubscription)
                              throw new Error(`Not subscription "${t}", please enable subscription on the product`);
                          if (!c || !c.subscribed)
                              throw new Error("already_unsubscribed");
                          let e = !0
                            , i = Object.assign({}, c)
                            , o = "";
                          try {
                              yield this.adapter.unsubscribe(a, c)
                          } catch (e) {
                              throw w.kg.error(o),
                              e
                          }
                          i.subscribed = !1,
                          O(this, s, k(this, s, "f").map((e => e.productId !== c.productId ? e : Object.assign(Object.assign({}, e), {
                              subscribed: !1
                          }))), "f"),
                          k(this, n, "m", g).call(this),
                          this._events.emit("unsubscribe", {
                              product: a,
                              purchase: i
                          }),
                          r.done({
                              success: e,
                              product: a,
                              purchase: i,
                              error: o
                          })
                      } catch (e) {
                          i(e)
                      } finally {
                          this.gp.loader.dec()
                      }
                      return r.ready.finally(( () => {
                          delete k(this, o, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              checkPurchaseStatus(e, t, r, n, i) {
                  return T(this, void 0, void 0, (function*() {
                      let s = 0;
                      const a = () => T(this, void 0, void 0, (function*() {
                          try {
                              const s = yield this.gp._services.paymentsService.getPlayerPurchase({
                                  projectId: e,
                                  purchaseId: t,
                                  payload: r,
                                  playerId: n,
                                  productId: i
                              });
                              if (!0 === s.subscribed || s.orderStatus === E.i.Paid)
                                  return !0
                          } catch (e) {
                              if ("internal_error" === e)
                                  throw new Error("purchase:error " + e);
                              console.error("error during purchase status check: ", e)
                          }
                          if (s++,
                          s >= 12)
                              throw new Error("purchase_timeout");
                          return !1
                      }
                      ));
                      for (; s < 12 && !(yield a()); )
                          yield(0,
                          A.Z)(5e3);
                      if (s >= 12)
                          throw new Error("purchase_timeout")
                  }
                  ))
              }
              has(e) {
                  return !!k(this, n, "m", f).call(this, e).purchase
              }
              getProduct(e) {
                  return k(this, n, "m", f).call(this, e).product
              }
              getPurchase(e) {
                  return k(this, n, "m", f).call(this, e).purchase
              }
          }
          function I(e, t) {
              return function(e, t) {
                  const r = new Date(e);
                  return r.setDate(r.getDate() + t),
                  r
              }(new Date(e), t).toISOString()
          }
          i = new WeakMap,
          s = new WeakMap,
          a = new WeakMap,
          o = new WeakMap,
          c = new WeakMap,
          l = new WeakMap,
          h = new WeakMap,
          u = new WeakMap,
          n = new WeakSet,
          d = function() {
              return T(this, void 0, void 0, (function*() {
                  const {purchases: e, payload: t} = yield this.adapter.fetchPurchases();
                  if (0 === e.length)
                      return;
                  const {purchases: r} = yield this.gp._services.paymentsService.sync({
                      purchases: e,
                      payload: t
                  });
                  k(this, n, "m", y).call(this, r),
                  this.adapter.consumeAllExpired(this.products, e, r)
              }
              ))
          }
          ,
          f = function(e) {
              const t = {
                  product: null,
                  purchase: null
              }
                , r = k(this, n, "m", p).call(this, e);
              if (!r)
                  return t;
              t.product = r;
              const i = k(this, n, "m", v).call(this, r.id);
              return i && (t.purchase = i),
              t
          }
          ,
          p = function(e) {
              return k(this, l, "f")[e] || k(this, h, "f")[e]
          }
          ,
          v = function(e) {
              return k(this, u, "f")[e]
          }
          ,
          y = function(e) {
              O(this, s, e.map((e => Object.assign(Object.assign({}, e), {
                  id: e.productId
              }))), "f"),
              k(this, n, "m", g).call(this)
          }
          ,
          m = function() {
              O(this, l, {}, "f"),
              O(this, h, {}, "f"),
              k(this, a, "f").forEach((e => {
                  k(this, l, "f")[e.id] = e,
                  k(this, h, "f")[e.tag] = e
              }
              ))
          }
          ,
          g = function() {
              O(this, s, k(this, s, "f").reduce(( (e, t) => {
                  const r = k(this, n, "m", p).call(this, t.productId);
                  return r && e.push(Object.assign(Object.assign({}, t), {
                      id: r.id,
                      tag: r.tag
                  })),
                  e
              }
              ), []), "f"),
              O(this, u, {}, "f"),
              k(this, s, "f").forEach((e => {
                  k(this, u, "f")[e.productId] = e
              }
              ))
          }
      }
      ,
      4293: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => h
          });
          var n = r(8293);
          const i = ["adsbox", "advertisement", "pub_300x250", "pub_300x250m", "pub_728x90", "text-ad", "textAd", "text_ad", "text_ads", "text-ads", "text-ad-links"];
          var s = r(180)
            , a = r(6388)
            , o = r(6558)
            , c = r(8866)
            , l = function(e, t, r, n) {
              return new (r || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ))
          };
          class h extends a.Z {
              constructor(e, t, r) {
                  super(),
                  this.gp = e,
                  this.adapter = t,
                  this.config = r,
                  this.isAdblockEnabled = !1,
                  this.fullscreenDisplayIntervalId = 0,
                  this.stickyRefreshIntervalId = 0,
                  this.isStickyPlaying = !1,
                  this.isRewardedPlaying = !1,
                  this.isFullscreenPlaying = !1,
                  this.isPreloaderPlaying = !1,
                  this.adsInfo = e._storage.temp.adsInfo;
                  const n = this.config.platformConfig.banners;
                  this.stickyBanner = n.find((e => e.type === s.$.STICKY)),
                  this.fullscreenBanner = n.find((e => e.type === s.$.FULLSCREEN)),
                  this.rewardedVideo = n.find((e => e.type === s.$.REWARDED)),
                  this.preloaderBanner = n.find((e => e.type === s.$.PRELOADER)),
                  this.banners = n.reduce(( (e, t) => (e[t.type] = t,
                  e)), {}),
                  this._checkLimitsExpired(!0),
                  setInterval(( () => this._checkLimitsExpired(!1)), 1e3)
              }
              get needToLeaveFullscreenBeforeAds() {
                  return this.adapter.needToLeaveFullscreenBeforeAds
              }
              get isAllowedToResumeGameplay() {
                  return !this.isPreloaderPlaying && !this.isFullscreenPlaying && !this.isRewardedPlaying
              }
              get isStickyAvailable() {
                  var e;
                  return this.adapter.isStickyAvailable && (null === (e = this.stickyBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.STICKY)
              }
              get isFullscreenAvailable() {
                  var e;
                  return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isFullscreenAvailable && (null === (e = this.fullscreenBanner) || void 0 === e ? void 0 : e.enabled) && !this.fullscreenDisplayIntervalId && !this.isBannerLimitReached(s.$.FULLSCREEN)
              }
              get isRewardedAvailable() {
                  var e;
                  return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isRewardedAvailable && (null === (e = this.rewardedVideo) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.REWARDED)
              }
              get isPreloaderAvailable() {
                  var e;
                  return !this.isFullscreenPlaying && !this.isRewardedPlaying && !this.isPreloaderPlaying && this.adapter.isPreloaderAvailable && (null === (e = this.preloaderBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.PRELOADER)
              }
              get isCountdownOverlayEnabled() {
                  return this.config.project.ads.showCountdownOverlay
              }
              get isRewardedFailedOverlayEnabled() {
                  return this.config.project.ads.showRewardedFailedOverlay
              }
              get canShowFullscreenBeforeGamePlay() {
                  return this.adapter.canShowFullscreenBeforeGamePlay
              }
              checkAdblock() {
                  return l(this, void 0, void 0, (function*() {
                      return this.isAdblockEnabled = yield function() {
                          const e = (0,
                          n._)()
                            , t = document.createElement("div");
                          return t.innerHTML = "&nbsp;",
                          t.className = i.join(" "),
                          t.id = "text_ad",
                          t.style.padding = "1px 0 0 0",
                          document.body.appendChild(t),
                          setTimeout(( () => {
                              e.done(0 === t.offsetHeight),
                              document.body.removeChild(t)
                          }
                          ), 10),
                          e.ready
                      }(),
                      this.gp.logger.info("adblock is " + (this.isAdblockEnabled ? "detected" : "not detected")),
                      this.isAdblockEnabled
                  }
                  ))
              }
              sendShowAdsInfo(e) {
                  this.config.acl.canCollectStats && fetch(`/t/b/?q=${btoa(JSON.stringify(Object.assign(Object.assign({}, e), {
                      platformType: this.gp.platform.type,
                      projectId: this.gp.projectId
                  })))}`)
              }
              showFullscreen({showCountdownOverlay: e=!1}={}) {
                  return l(this, void 0, void 0, (function*() {
                      if (yield this.gp._pointersManager.waitForPointersUp(),
                      !this.isFullscreenAvailable)
                          return this._events.emit("close", !1),
                          this._events.emit("fullscreen:close", !1),
                          !1;
                      this._events.emit("start"),
                      this._events.emit("fullscreen:start"),
                      this.sendShowAdsInfo({
                          type: "FULLSCREEN",
                          action: "REQUEST"
                      }),
                      this.fullscreenDisplayIntervalId = window.setTimeout(( () => {
                          this.fullscreenDisplayIntervalId = 0
                      }
                      ), 1e3 * this.fullscreenBanner.frequency),
                      this.isFullscreenPlaying = !0;
                      const t = e || this.isCountdownOverlayEnabled
                        , r = this.gp.fullscreen.isEnabled
                        , n = r && this.adapter.needToLeaveFullscreenBeforeAds;
                      (t || n) && (yield this.gp.loadOverlay()),
                      t && (yield this.gp.loadOverlay(),
                      this.gp.overlay.showPreAdCountdownOverlay(),
                      yield(0,
                      c.Z)(2e3)),
                      n && (this.gp.fullscreen.close(),
                      yield(0,
                      c.Z)(200));
                      let i = !1;
                      try {
                          i = !!(yield this.adapter.showFullscreen(this.fullscreenBanner))
                      } catch (e) {
                          o.kg.error(e)
                      }
                      return this.sendShowAdsInfo({
                          type: "FULLSCREEN",
                          action: i ? "DISPLAY" : "ERROR"
                      }),
                      (t || n) && (this.gp.overlay.closePreAdCountdownOverlay(),
                      yield this.gp.overlay.showPreAdCountdownOverlayFinish(r)),
                      this.isFullscreenPlaying = !1,
                      this._events.emit("close", i),
                      this._events.emit("fullscreen:close", i),
                      i && this._trackBannerDisplay(s.$.FULLSCREEN),
                      i
                  }
                  ))
                //   console.log("//////////////////////////showFullscreeen")
                  // return true;
              }

              showRewardedVideo({showRewardedFailedOverlay: e=!1}={}) {
                  return l(this, void 0, void 0, (function*() {
                    // return true;
                      if (yield this.gp._pointersManager.waitForPointersUp(),
                      !this.isRewardedAvailable)
                          return this._events.emit("close", !1),
                          this._events.emit("rewarded:close", !1),
                          !1;
                      const t = this.gp.fullscreen.isEnabled
                        , r = t && this.adapter.needToLeaveFullscreenBeforeAds;
                      r && (yield this.gp.loadOverlay(),
                      this.gp.fullscreen.close(),
                      yield(0,
                      c.Z)(200)),
                      this._events.emit("start"),
                      this._events.emit("rewarded:start"),
                      this.sendShowAdsInfo({
                          type: "REWARDED",
                          action: "REQUEST"
                      }),
                      this.isRewardedPlaying = !0;
                      const n = !!(yield this.adapter.showRewardedVideo(this.rewardedVideo).catch(( () => !1)));
                      r && (this.gp.overlay.closePreAdCountdownOverlay(),
                      yield this.gp.overlay.showPreAdCountdownOverlayFinish(t)),
                      this.sendShowAdsInfo({
                          type: "REWARDED",
                          action: n ? "DISPLAY" : "ERROR"
                      });
                      const i = e || this.isRewardedFailedOverlayEnabled;
                      return !n && i && (yield this.gp.loadOverlay(),
                      yield this.gp.overlay.showRewardedFailedOverlay()),
                      this.isRewardedPlaying = !1,
                      this._events.emit("close", n),
                      this._events.emit("rewarded:close", n),
                      this._trackBannerDisplay(s.$.REWARDED),
                      n && this._events.emit("rewarded:reward"),
                      n
                  }
                  ))
              }

              // showPreloader() {
              //     return l(this, void 0, void 0, (function*() {
              //         if (yield this.gp._pointersManager.waitForPointersUp(),
              //         !this.isPreloaderAvailable)
              //             return this._events.emit("close", !1),
              //             this._events.emit("preloader:close", !1),
              //             !1;
              //         const e = this.gp.fullscreen.isEnabled
              //           , t = e && this.adapter.needToLeaveFullscreenBeforeAds;
              //         t && (yield this.gp.loadOverlay(),
              //         this.gp.fullscreen.close(),
              //         yield(0,
              //         c.Z)(200)),
              //         this.sendShowAdsInfo({
              //             type: "PRELOADER",
              //             action: "REQUEST"
              //         }),
              //         this._events.emit("start"),
              //         this._events.emit("preloader:start"),
              //         this.isPreloaderPlaying = !0;
              //         const r = !!(yield this.adapter.showPreloader(this.preloaderBanner).catch(( () => !1)));
              //         return t && (this.gp.overlay.closePreAdCountdownOverlay(),
              //         yield this.gp.overlay.showPreAdCountdownOverlayFinish(e)),
              //         this.sendShowAdsInfo({
              //             type: "PRELOADER",
              //             action: r ? "DISPLAY" : "ERROR"
              //         }),
              //         this.isPreloaderPlaying = !1,
              //         this._events.emit("close", r),
              //         this._events.emit("preloader:close", r),
              //         r && this._trackBannerDisplay(s.$.PRELOADER),
              //         r
              //     }
              //     ))
              // }
              showPreloader() {
                // console.log("/////////////////////////////////showPreloader")
                return true;
                // return l(this, void 0, void 0, (function*() {
                //     // 等待指针抬起并检查预加载器是否可用
                //     if (yield this.gp._pointersManager.waitForPointersUp(), !this.isPreloaderAvailable)
                //         return this._events.emit("close", !1),
                //                this._events.emit("preloader:close", !1),
                //                !1;
            
                //     // 检查是否需要退出全屏模式
                //     const e = this.gp.fullscreen.isEnabled,
                //           t = e && this.adapter.needToLeaveFullscreenBeforeAds;
            
                //     // 如果需要退出全屏，则处理全屏关闭逻辑
                //     if (t) {
                //         yield this.gp.loadOverlay();
                //         this.gp.fullscreen.close();
                //         yield(0, c.Z)(200);
                //     }
            
                //     // 发出开始事件，并设置预加载器播放状态
                //     this._events.emit("start");
                //     this._events.emit("preloader:start");
                //     this.isPreloaderPlaying = true;
            
                //     // 调用适配器的展示预加载器方法
                //     const r = !!(yield this.adapter.showPreloader(this.preloaderBanner).catch(() => false));
            
                //     // 如果需要重新进入全屏，则处理全屏恢复逻辑
                //     if (t) {
                //         this.gp.overlay.closePreAdCountdownOverlay();
                //         yield this.gp.overlay.showPreAdCountdownOverlayFinish(e);
                //     }
            
                //     // 发出关闭事件，并重置预加载器播放状态
                //     this.isPreloaderPlaying = false;
                //     this._events.emit("close", r);
                //     this._events.emit("preloader:close", r);
            
                //     // 如果预加载器展示成功，则记录 banner 展示
                //     if (r) {
                //         this._trackBannerDisplay(s.$.PRELOADER);
                //     }
            
                //     // 返回结果
                //     return r;
                // }));
              }
              showSticky() {
                  var e;
                  return l(this, void 0, void 0, (function*() {
                      if (!this.isStickyAvailable)
                          return this._events.emit("close", !1),
                          this._events.emit("sticky:close", !1),
                          !1;
                      !this.stickyRefreshIntervalId && this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval(( () => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)),
                      this._events.emit("start"),
                      this._events.emit("sticky:start"),
                      this.sendShowAdsInfo({
                          type: "STICKY",
                          action: "REQUEST"
                      });
                      const t = yield this.adapter.showSticky(this.stickyBanner).catch(( () => !1));
                      return this.sendShowAdsInfo({
                          type: "STICKY",
                          action: t ? "DISPLAY" : "ERROR"
                      }),
                      this.isStickyPlaying = t,
                      this._events.emit("sticky:render", t),
                      t && this._trackBannerDisplay(s.$.STICKY),
                      null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                      t
                  }
                  ))
              }
              refreshSticky() {
                  var e;
                  return l(this, void 0, void 0, (function*() {
                      if (!this.isStickyAvailable)
                          return this._events.emit("close", !1),
                          this._events.emit("sticky:close", !1),
                          !1;
                      clearInterval(this.stickyRefreshIntervalId),
                      this.stickyBanner.refreshInterval && (this.stickyRefreshIntervalId = window.setInterval(( () => this.refreshSticky()), 1e3 * this.stickyBanner.refreshInterval)),
                      this._events.emit("sticky:refresh"),
                      this.sendShowAdsInfo({
                          type: "STICKY",
                          action: "REQUEST"
                      });
                      const t = yield this.adapter.refreshSticky(this.stickyBanner).catch(( () => !1));
                      return this.sendShowAdsInfo({
                          type: "STICKY",
                          action: t ? "DISPLAY" : "ERROR"
                      }),
                      this.isStickyPlaying = t,
                      this._events.emit("sticky:render", t),
                      t && this._trackBannerDisplay(s.$.STICKY),
                      null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                      t
                  }
                  ))
              }
              closeSticky() {
                  var e;
                  return l(this, void 0, void 0, (function*() {
                      const t = yield this.adapter.closeSticky();
                      return this.isStickyPlaying = !1,
                      this._events.emit("close", !0),
                      this._events.emit("sticky:close", !0),
                      clearInterval(this.stickyRefreshIntervalId),
                      null === (e = this.gp.overlay) || void 0 === e || e.setSizeOffsets(this.gp._overlaySizeOffsets),
                      t
                  }
                  ))
              }
              get _stickyBannerOffsets() {
                  const {height: e, isOverlapping: t} = this.adapter.stickyBannerConfig
                    , {position: r} = this.stickyBanner;
                  return {
                      top: this.isStickyPlaying && t && "top" === r ? e : 0,
                      bottom: this.isStickyPlaying && t && "bottom" === r ? e : 0
                  }
              }
              _trackBannerDisplay(e) {
                  const t = this.adsInfo.limits[e];
                  t.hour.count += 1,
                  t.day.count += 1,
                  t.session.count += 1,
                  t.day.timestamp || (t.day.timestamp = Date.now()),
                  t.hour.timestamp || (t.hour.timestamp = Date.now()),
                  this._saveAdsInfo()
              }
              _checkLimitsExpired(e) {
                  let t = !1;
                  Object.values(this.adsInfo.limits).forEach((r => {
                      e && (r.session.count = 0),
                      u(r.hour.timestamp, 36e5) && (r.hour.timestamp = 0,
                      r.hour.count = 0,
                      t = !0),
                      u(r.day.timestamp, 864e5) && (r.day.timestamp = 0,
                      r.hour.count = 0,
                      t = !0)
                  }
                  )),
                  t && this._saveAdsInfo()
              }
              _saveAdsInfo() {
                  this.gp._storage.saveAdsInfo(this.adsInfo)
              }
              isBannerLimitReached(e) {
                  return this.isBannerLimitTypeReached(e, "hour") || this.isBannerLimitTypeReached(e, "day") || this.isBannerLimitTypeReached(e, "session")
              }
              isBannerLimitTypeReached(e, t) {
                  const r = this.banners[e].limits[t];
                  return !!r && this.adsInfo.limits[e][t].count >= r
              }
          }
          function u(e, t) {
              return (new Date).getTime() - new Date(e).getTime() > t
          }
      }
      ,
      2954: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => s
          });
          var n = r(6388)
            , i = function(e, t, r, n) {
              return new (r || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ))
          };
          class s extends n.Z {
              constructor(e, t, r) {
                  super(),
                  this.gp = e,
                  this.adapter = t,
                  this.config = r,
                  this.title = this.config.project.name,
                  this.description = this.config.project.description,
                  this.image = this.config.project.icon
              }
              get url() {
                  return this.config.platformConfig.gameLink || this.gp.platform.getSDK().appUrl
              }
              get canAddShortcut() {
                  return this.adapter.canAddShortcut
              }
              get canRequestReview() {
                  return this.adapter.canRequestReview
              }
              get isAlreadyReviewed() {
                  return this.adapter.isAlreadyReviewed
              }
              addShortcut() {
                  return i(this, void 0, void 0, (function*() {
                      const e = yield this.adapter.addShortcut();
                      return this._events.emit("addShortcut", e),
                      e
                  }
                  ))
              }
              requestReview() {
                  return i(this, void 0, void 0, (function*() {
                      const e = yield this.adapter.requestReview();
                      return e.success ? this._events.emit("review", e) : this._events.emit("error:review", e.error),
                      e
                  }
                  ))
              }
              requestGameUrl() {
                  return this.adapter.requestGameUrl()
              }
          }
      }
      ,
      6388: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => s
          });
          var n = r(5585)
            , i = r.n(n);
          class s {
              constructor() {
                  this._events = new (i())
              }
              on(e, t) {
                  this._events.on(e, t)
              }
              off(e, t) {
                  this._events.off(e, t)
              }
              once(e, t) {
                  this._events.once(e, t)
              }
          }
      }
      ,
      2940: (e, t, r) => {
          "use strict";
          r.d(t, {
              Do: () => we,
              N0: () => Ee,
              CP: () => Pe,
              LH: () => Le,
              W2: () => We,
              x1: () => ze,
              OB: () => lt,
              U7: () => vt,
              zn: () => mt
          });
          var n = function() {
              return (n = Object.assign || function(e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                      for (var i in t = arguments[r])
                          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                  return e
              }
              ).apply(this, arguments)
          };
          function i(e) {
              return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          Object.create,
          Object.create,
          "function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator,
          "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
          var s = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag";
          function a(e, t) {
              for (var r, n = /\r\n|[\n\r]/g, i = 1, s = t + 1; (r = n.exec(e.body)) && r.index < t; )
                  i += 1,
                  s = t + 1 - (r.index + r[0].length);
              return {
                  line: i,
                  column: s
              }
          }
          function o(e) {
              return c(e.source, a(e.source, e.start))
          }
          function c(e, t) {
              var r = e.locationOffset.column - 1
                , n = h(r) + e.body
                , i = t.line - 1
                , s = e.locationOffset.line - 1
                , a = t.line + s
                , o = 1 === t.line ? r : 0
                , c = t.column + o
                , u = "".concat(e.name, ":").concat(a, ":").concat(c, "\n")
                , d = n.split(/\r\n|[\n\r]/g)
                , f = d[i];
              if (f.length > 120) {
                  for (var p = Math.floor(c / 80), v = c % 80, y = [], m = 0; m < f.length; m += 80)
                      y.push(f.slice(m, m + 80));
                  return u + l([["".concat(a), y[0]]].concat(y.slice(1, p + 1).map((function(e) {
                      return ["", e]
                  }
                  )), [[" ", h(v - 1) + "^"], ["", y[p + 1]]]))
              }
              return u + l([["".concat(a - 1), d[i - 1]], ["".concat(a), f], ["", h(c - 1) + "^"], ["".concat(a + 1), d[i + 1]]])
          }
          function l(e) {
              var t = e.filter((function(e) {
                  return e[0],
                  void 0 !== e[1]
              }
              ))
                , r = Math.max.apply(Math, t.map((function(e) {
                  return e[0].length
              }
              )));
              return t.map((function(e) {
                  var t, n = e[0], i = e[1];
                  return h(r - (t = n).length) + t + (i ? " | " + i : " |")
              }
              )).join("\n")
          }
          function h(e) {
              return Array(e + 1).join(" ")
          }
          function u(e) {
              return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          function d(e, t) {
              for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
              }
          }
          function f(e, t) {
              return !t || "object" !== u(t) && "function" != typeof t ? p(e) : t
          }
          function p(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }
          function v(e) {
              var t = "function" == typeof Map ? new Map : void 0;
              return (v = function(e) {
                  if (null === e || (r = e,
                  -1 === Function.toString.call(r).indexOf("[native code]")))
                      return e;
                  var r;
                  if ("function" != typeof e)
                      throw new TypeError("Super expression must either be null or a function");
                  if (void 0 !== t) {
                      if (t.has(e))
                          return t.get(e);
                      t.set(e, n)
                  }
                  function n() {
                      return y(e, arguments, w(this).constructor)
                  }
                  return n.prototype = Object.create(e.prototype, {
                      constructor: {
                          value: n,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0
                      }
                  }),
                  g(n, e)
              }
              )(e)
          }
          function y(e, t, r) {
              return (y = m() ? Reflect.construct : function(e, t, r) {
                  var n = [null];
                  n.push.apply(n, t);
                  var i = new (Function.bind.apply(e, n));
                  return r && g(i, r.prototype),
                  i
              }
              ).apply(null, arguments)
          }
          function m() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
              if (Reflect.construct.sham)
                  return !1;
              if ("function" == typeof Proxy)
                  return !0;
              try {
                  return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                  ))),
                  !0
              } catch (e) {
                  return !1
              }
          }
          function g(e, t) {
              return (g = Object.setPrototypeOf || function(e, t) {
                  return e.__proto__ = t,
                  e
              }
              )(e, t)
          }
          function w(e) {
              return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
              }
              )(e)
          }
          var b = function(e) {
              !function(e, t) {
                  if ("function" != typeof t && null !== t)
                      throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }),
                  t && g(e, t)
              }(u, e);
              var t, r, n, l, h = (t = u,
              r = m(),
              function() {
                  var e, n = w(t);
                  if (r) {
                      var i = w(this).constructor;
                      e = Reflect.construct(n, arguments, i)
                  } else
                      e = n.apply(this, arguments);
                  return f(this, e)
              }
              );
              function u(e, t, r, n, s, o, c) {
                  var l, d, v, y, m;
                  !function(e, t) {
                      if (!(e instanceof t))
                          throw new TypeError("Cannot call a class as a function")
                  }(this, u),
                  m = h.call(this, e);
                  var g, w = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0, b = r;
                  !b && w && (b = null === (g = w[0].loc) || void 0 === g ? void 0 : g.source);
                  var E, P = n;
                  !P && w && (P = w.reduce((function(e, t) {
                      return t.loc && e.push(t.loc.start),
                      e
                  }
                  ), [])),
                  P && 0 === P.length && (P = void 0),
                  n && r ? E = n.map((function(e) {
                      return a(r, e)
                  }
                  )) : w && (E = w.reduce((function(e, t) {
                      return t.loc && e.push(a(t.loc.source, t.loc.start)),
                      e
                  }
                  ), []));
                  var S, _ = c;
                  if (null == _ && null != o) {
                      var A = o.extensions;
                      "object" == i(S = A) && null !== S && (_ = A)
                  }
                  return Object.defineProperties(p(m), {
                      name: {
                          value: "GraphQLError"
                      },
                      message: {
                          value: e,
                          enumerable: !0,
                          writable: !0
                      },
                      locations: {
                          value: null !== (l = E) && void 0 !== l ? l : void 0,
                          enumerable: null != E
                      },
                      path: {
                          value: null != s ? s : void 0,
                          enumerable: null != s
                      },
                      nodes: {
                          value: null != w ? w : void 0
                      },
                      source: {
                          value: null !== (d = b) && void 0 !== d ? d : void 0
                      },
                      positions: {
                          value: null !== (v = P) && void 0 !== v ? v : void 0
                      },
                      originalError: {
                          value: o
                      },
                      extensions: {
                          value: null !== (y = _) && void 0 !== y ? y : void 0,
                          enumerable: null != _
                      }
                  }),
                  null != o && o.stack ? (Object.defineProperty(p(m), "stack", {
                      value: o.stack,
                      writable: !0,
                      configurable: !0
                  }),
                  f(m)) : (Error.captureStackTrace ? Error.captureStackTrace(p(m), u) : Object.defineProperty(p(m), "stack", {
                      value: Error().stack,
                      writable: !0,
                      configurable: !0
                  }),
                  m)
              }
              return n = u,
              (l = [{
                  key: "toString",
                  value: function() {
                      return function(e) {
                          var t = e.message;
                          if (e.nodes)
                              for (var r = 0, n = e.nodes; r < n.length; r++) {
                                  var i = n[r];
                                  i.loc && (t += "\n\n" + o(i.loc))
                              }
                          else if (e.source && e.locations)
                              for (var s = 0, a = e.locations; s < a.length; s++) {
                                  var l = a[s];
                                  t += "\n\n" + c(e.source, l)
                              }
                          return t
                      }(this)
                  }
              }, {
                  key: s,
                  get: function() {
                      return "Object"
                  }
              }]) && d(n.prototype, l),
              u
          }(v(Error));
          function E(e, t, r) {
              return new b("Syntax Error: ".concat(r),void 0,e,[t])
          }
          var P = Object.freeze({
              NAME: "Name",
              DOCUMENT: "Document",
              OPERATION_DEFINITION: "OperationDefinition",
              VARIABLE_DEFINITION: "VariableDefinition",
              SELECTION_SET: "SelectionSet",
              FIELD: "Field",
              ARGUMENT: "Argument",
              FRAGMENT_SPREAD: "FragmentSpread",
              INLINE_FRAGMENT: "InlineFragment",
              FRAGMENT_DEFINITION: "FragmentDefinition",
              VARIABLE: "Variable",
              INT: "IntValue",
              FLOAT: "FloatValue",
              STRING: "StringValue",
              BOOLEAN: "BooleanValue",
              NULL: "NullValue",
              ENUM: "EnumValue",
              LIST: "ListValue",
              OBJECT: "ObjectValue",
              OBJECT_FIELD: "ObjectField",
              DIRECTIVE: "Directive",
              NAMED_TYPE: "NamedType",
              LIST_TYPE: "ListType",
              NON_NULL_TYPE: "NonNullType",
              SCHEMA_DEFINITION: "SchemaDefinition",
              OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
              SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
              OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
              FIELD_DEFINITION: "FieldDefinition",
              INPUT_VALUE_DEFINITION: "InputValueDefinition",
              INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
              UNION_TYPE_DEFINITION: "UnionTypeDefinition",
              ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
              ENUM_VALUE_DEFINITION: "EnumValueDefinition",
              INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
              DIRECTIVE_DEFINITION: "DirectiveDefinition",
              SCHEMA_EXTENSION: "SchemaExtension",
              SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
              OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
              INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
              UNION_TYPE_EXTENSION: "UnionTypeExtension",
              ENUM_TYPE_EXTENSION: "EnumTypeExtension",
              INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
          });
          const S = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
          function _(e) {
              var t = e.prototype.toJSON;
              "function" == typeof t || function(e, t) {
                  if (!Boolean(0))
                      throw new Error("Unexpected invariant triggered.")
              }(),
              e.prototype.inspect = t,
              S && (e.prototype[S] = t)
          }
          var A = function() {
              function e(e, t, r) {
                  this.start = e.start,
                  this.end = t.end,
                  this.startToken = e,
                  this.endToken = t,
                  this.source = r
              }
              return e.prototype.toJSON = function() {
                  return {
                      start: this.start,
                      end: this.end
                  }
              }
              ,
              e
          }();
          _(A);
          var T = function() {
              function e(e, t, r, n, i, s, a) {
                  this.kind = e,
                  this.start = t,
                  this.end = r,
                  this.line = n,
                  this.column = i,
                  this.value = a,
                  this.prev = s,
                  this.next = null
              }
              return e.prototype.toJSON = function() {
                  return {
                      kind: this.kind,
                      value: this.value,
                      line: this.line,
                      column: this.column
                  }
              }
              ,
              e
          }();
          _(T);
          var O = Object.freeze({
              SOF: "<SOF>",
              EOF: "<EOF>",
              BANG: "!",
              DOLLAR: "$",
              AMP: "&",
              PAREN_L: "(",
              PAREN_R: ")",
              SPREAD: "...",
              COLON: ":",
              EQUALS: "=",
              AT: "@",
              BRACKET_L: "[",
              BRACKET_R: "]",
              BRACE_L: "{",
              PIPE: "|",
              BRACE_R: "}",
              NAME: "Name",
              INT: "Int",
              FLOAT: "Float",
              STRING: "String",
              BLOCK_STRING: "BlockString",
              COMMENT: "Comment"
          });
          function k(e) {
              return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          function C(e) {
              return R(e, [])
          }
          function R(e, t) {
              switch (k(e)) {
              case "string":
                  return JSON.stringify(e);
              case "function":
                  return e.name ? "[function ".concat(e.name, "]") : "[function]";
              case "object":
                  return null === e ? "null" : function(e, t) {
                      if (-1 !== t.indexOf(e))
                          return "[Circular]";
                      var r = [].concat(t, [e])
                        , n = function(e) {
                          var t = e[String(S)];
                          return "function" == typeof t ? t : "function" == typeof e.inspect ? e.inspect : void 0
                      }(e);
                      if (void 0 !== n) {
                          var i = n.call(e);
                          if (i !== e)
                              return "string" == typeof i ? i : R(i, r)
                      } else if (Array.isArray(e))
                          return function(e, t) {
                              if (0 === e.length)
                                  return "[]";
                              if (t.length > 2)
                                  return "[Array]";
                              for (var r = Math.min(10, e.length), n = e.length - r, i = [], s = 0; s < r; ++s)
                                  i.push(R(e[s], t));
                              return 1 === n ? i.push("... 1 more item") : n > 1 && i.push("... ".concat(n, " more items")),
                              "[" + i.join(", ") + "]"
                          }(e, r);
                      return function(e, t) {
                          var r = Object.keys(e);
                          return 0 === r.length ? "{}" : t.length > 2 ? "[" + function(e) {
                              var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                              if ("Object" === t && "function" == typeof e.constructor) {
                                  var r = e.constructor.name;
                                  if ("string" == typeof r && "" !== r)
                                      return r
                              }
                              return t
                          }(e) + "]" : "{ " + r.map((function(r) {
                              return r + ": " + R(e[r], t)
                          }
                          )).join(", ") + " }"
                      }(e, r)
                  }(e, t);
              default:
                  return String(e)
              }
          }
          function I(e, t) {
              if (!Boolean(e))
                  throw new Error(t)
          }
          function D(e, t) {
              for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
              }
          }
          var x = function() {
              function e(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request"
                    , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                      line: 1,
                      column: 1
                  };
                  "string" == typeof e || I(0, "Body must be a string. Received: ".concat(C(e), ".")),
                  this.body = e,
                  this.name = t,
                  this.locationOffset = r,
                  this.locationOffset.line > 0 || I(0, "line in locationOffset is 1-indexed and must be positive."),
                  this.locationOffset.column > 0 || I(0, "column in locationOffset is 1-indexed and must be positive.")
              }
              var t, r;
              return t = e,
              (r = [{
                  key: s,
                  get: function() {
                      return "Source"
                  }
              }]) && D(t.prototype, r),
              e
          }()
            , N = Object.freeze({
              QUERY: "QUERY",
              MUTATION: "MUTATION",
              SUBSCRIPTION: "SUBSCRIPTION",
              FIELD: "FIELD",
              FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
              FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
              INLINE_FRAGMENT: "INLINE_FRAGMENT",
              VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
              SCHEMA: "SCHEMA",
              SCALAR: "SCALAR",
              OBJECT: "OBJECT",
              FIELD_DEFINITION: "FIELD_DEFINITION",
              ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
              INTERFACE: "INTERFACE",
              UNION: "UNION",
              ENUM: "ENUM",
              ENUM_VALUE: "ENUM_VALUE",
              INPUT_OBJECT: "INPUT_OBJECT",
              INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
          });
          function M(e) {
              var t = e.split(/\r\n|[\n\r]/g)
                , r = function(e) {
                  for (var t, r = !0, n = !0, i = 0, s = null, a = 0; a < e.length; ++a)
                      switch (e.charCodeAt(a)) {
                      case 13:
                          10 === e.charCodeAt(a + 1) && ++a;
                      case 10:
                          r = !1,
                          n = !0,
                          i = 0;
                          break;
                      case 9:
                      case 32:
                          ++i;
                          break;
                      default:
                          n && !r && (null === s || i < s) && (s = i),
                          n = !1
                      }
                  return null !== (t = s) && void 0 !== t ? t : 0
              }(e);
              if (0 !== r)
                  for (var n = 1; n < t.length; n++)
                      t[n] = t[n].slice(r);
              for (var i = 0; i < t.length && L(t[i]); )
                  ++i;
              for (var s = t.length; s > i && L(t[s - 1]); )
                  --s;
              return t.slice(i, s).join("\n")
          }
          function L(e) {
              for (var t = 0; t < e.length; ++t)
                  if (" " !== e[t] && "\t" !== e[t])
                      return !1;
              return !0
          }
          var j = function() {
              function e(e) {
                  var t = new T(O.SOF,0,0,0,0,null);
                  this.source = e,
                  this.lastToken = t,
                  this.token = t,
                  this.line = 1,
                  this.lineStart = 0
              }
              var t = e.prototype;
              return t.advance = function() {
                  return this.lastToken = this.token,
                  this.token = this.lookahead()
              }
              ,
              t.lookahead = function() {
                  var e = this.token;
                  if (e.kind !== O.EOF)
                      do {
                          var t;
                          e = null !== (t = e.next) && void 0 !== t ? t : e.next = U(this, e)
                      } while (e.kind === O.COMMENT);
                  return e
              }
              ,
              e
          }();
          function F(e) {
              return isNaN(e) ? O.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
          }
          function U(e, t) {
              for (var r = e.source, n = r.body, i = n.length, s = t.end; s < i; ) {
                  var a = n.charCodeAt(s)
                    , o = e.line
                    , c = 1 + s - e.lineStart;
                  switch (a) {
                  case 65279:
                  case 9:
                  case 32:
                  case 44:
                      ++s;
                      continue;
                  case 10:
                      ++s,
                      ++e.line,
                      e.lineStart = s;
                      continue;
                  case 13:
                      10 === n.charCodeAt(s + 1) ? s += 2 : ++s,
                      ++e.line,
                      e.lineStart = s;
                      continue;
                  case 33:
                      return new T(O.BANG,s,s + 1,o,c,t);
                  case 35:
                      return $(r, s, o, c, t);
                  case 36:
                      return new T(O.DOLLAR,s,s + 1,o,c,t);
                  case 38:
                      return new T(O.AMP,s,s + 1,o,c,t);
                  case 40:
                      return new T(O.PAREN_L,s,s + 1,o,c,t);
                  case 41:
                      return new T(O.PAREN_R,s,s + 1,o,c,t);
                  case 46:
                      if (46 === n.charCodeAt(s + 1) && 46 === n.charCodeAt(s + 2))
                          return new T(O.SPREAD,s,s + 3,o,c,t);
                      break;
                  case 58:
                      return new T(O.COLON,s,s + 1,o,c,t);
                  case 61:
                      return new T(O.EQUALS,s,s + 1,o,c,t);
                  case 64:
                      return new T(O.AT,s,s + 1,o,c,t);
                  case 91:
                      return new T(O.BRACKET_L,s,s + 1,o,c,t);
                  case 93:
                      return new T(O.BRACKET_R,s,s + 1,o,c,t);
                  case 123:
                      return new T(O.BRACE_L,s,s + 1,o,c,t);
                  case 124:
                      return new T(O.PIPE,s,s + 1,o,c,t);
                  case 125:
                      return new T(O.BRACE_R,s,s + 1,o,c,t);
                  case 34:
                      return 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) ? W(r, s, o, c, t, e) : q(r, s, o, c, t);
                  case 45:
                  case 48:
                  case 49:
                  case 50:
                  case 51:
                  case 52:
                  case 53:
                  case 54:
                  case 55:
                  case 56:
                  case 57:
                      return B(r, s, a, o, c, t);
                  case 65:
                  case 66:
                  case 67:
                  case 68:
                  case 69:
                  case 70:
                  case 71:
                  case 72:
                  case 73:
                  case 74:
                  case 75:
                  case 76:
                  case 77:
                  case 78:
                  case 79:
                  case 80:
                  case 81:
                  case 82:
                  case 83:
                  case 84:
                  case 85:
                  case 86:
                  case 87:
                  case 88:
                  case 89:
                  case 90:
                  case 95:
                  case 97:
                  case 98:
                  case 99:
                  case 100:
                  case 101:
                  case 102:
                  case 103:
                  case 104:
                  case 105:
                  case 106:
                  case 107:
                  case 108:
                  case 109:
                  case 110:
                  case 111:
                  case 112:
                  case 113:
                  case 114:
                  case 115:
                  case 116:
                  case 117:
                  case 118:
                  case 119:
                  case 120:
                  case 121:
                  case 122:
                      return Y(r, s, o, c, t)
                  }
                  throw E(r, s, G(a))
              }
              var l = e.line
                , h = 1 + s - e.lineStart;
              return new T(O.EOF,i,i,l,h,t)
          }
          function G(e) {
              return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(F(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(F(e), ".")
          }
          function $(e, t, r, n, i) {
              var s, a = e.body, o = t;
              do {
                  s = a.charCodeAt(++o)
              } while (!isNaN(s) && (s > 31 || 9 === s));
              return new T(O.COMMENT,t,o,r,n,i,a.slice(t + 1, o))
          }
          function B(e, t, r, n, i, s) {
              var a = e.body
                , o = r
                , c = t
                , l = !1;
              if (45 === o && (o = a.charCodeAt(++c)),
              48 === o) {
                  if ((o = a.charCodeAt(++c)) >= 48 && o <= 57)
                      throw E(e, c, "Invalid number, unexpected digit after 0: ".concat(F(o), "."))
              } else
                  c = V(e, c, o),
                  o = a.charCodeAt(c);
              if (46 === o && (l = !0,
              o = a.charCodeAt(++c),
              c = V(e, c, o),
              o = a.charCodeAt(c)),
              69 !== o && 101 !== o || (l = !0,
              43 !== (o = a.charCodeAt(++c)) && 45 !== o || (o = a.charCodeAt(++c)),
              c = V(e, c, o),
              o = a.charCodeAt(c)),
              46 === o || function(e) {
                  return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
              }(o))
                  throw E(e, c, "Invalid number, expected digit but got: ".concat(F(o), "."));
              return new T(l ? O.FLOAT : O.INT,t,c,n,i,s,a.slice(t, c))
          }
          function V(e, t, r) {
              var n = e.body
                , i = t
                , s = r;
              if (s >= 48 && s <= 57) {
                  do {
                      s = n.charCodeAt(++i)
                  } while (s >= 48 && s <= 57);
                  return i
              }
              throw E(e, i, "Invalid number, expected digit but got: ".concat(F(s), "."))
          }
          function q(e, t, r, n, i) {
              for (var s, a, o, c, l = e.body, h = t + 1, u = h, d = 0, f = ""; h < l.length && !isNaN(d = l.charCodeAt(h)) && 10 !== d && 13 !== d; ) {
                  if (34 === d)
                      return f += l.slice(u, h),
                      new T(O.STRING,t,h + 1,r,n,i,f);
                  if (d < 32 && 9 !== d)
                      throw E(e, h, "Invalid character within String: ".concat(F(d), "."));
                  if (++h,
                  92 === d) {
                      switch (f += l.slice(u, h - 1),
                      d = l.charCodeAt(h)) {
                      case 34:
                          f += '"';
                          break;
                      case 47:
                          f += "/";
                          break;
                      case 92:
                          f += "\\";
                          break;
                      case 98:
                          f += "\b";
                          break;
                      case 102:
                          f += "\f";
                          break;
                      case 110:
                          f += "\n";
                          break;
                      case 114:
                          f += "\r";
                          break;
                      case 116:
                          f += "\t";
                          break;
                      case 117:
                          var p = (s = l.charCodeAt(h + 1),
                          a = l.charCodeAt(h + 2),
                          o = l.charCodeAt(h + 3),
                          c = l.charCodeAt(h + 4),
                          z(s) << 12 | z(a) << 8 | z(o) << 4 | z(c));
                          if (p < 0) {
                              var v = l.slice(h + 1, h + 5);
                              throw E(e, h, "Invalid character escape sequence: \\u".concat(v, "."))
                          }
                          f += String.fromCharCode(p),
                          h += 4;
                          break;
                      default:
                          throw E(e, h, "Invalid character escape sequence: \\".concat(String.fromCharCode(d), "."))
                      }
                      u = ++h
                  }
              }
              throw E(e, h, "Unterminated string.")
          }
          function W(e, t, r, n, i, s) {
              for (var a = e.body, o = t + 3, c = o, l = 0, h = ""; o < a.length && !isNaN(l = a.charCodeAt(o)); ) {
                  if (34 === l && 34 === a.charCodeAt(o + 1) && 34 === a.charCodeAt(o + 2))
                      return h += a.slice(c, o),
                      new T(O.BLOCK_STRING,t,o + 3,r,n,i,M(h));
                  if (l < 32 && 9 !== l && 10 !== l && 13 !== l)
                      throw E(e, o, "Invalid character within String: ".concat(F(l), "."));
                  10 === l ? (++o,
                  ++s.line,
                  s.lineStart = o) : 13 === l ? (10 === a.charCodeAt(o + 1) ? o += 2 : ++o,
                  ++s.line,
                  s.lineStart = o) : 92 === l && 34 === a.charCodeAt(o + 1) && 34 === a.charCodeAt(o + 2) && 34 === a.charCodeAt(o + 3) ? (h += a.slice(c, o) + '"""',
                  c = o += 4) : ++o
              }
              throw E(e, o, "Unterminated string.")
          }
          function z(e) {
              return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
          }
          function Y(e, t, r, n, i) {
              for (var s = e.body, a = s.length, o = t + 1, c = 0; o !== a && !isNaN(c = s.charCodeAt(o)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122); )
                  ++o;
              return new T(O.NAME,t,o,r,n,i,s.slice(t, o))
          }
          var K = function() {
              function e(e, t) {
                  var r = function(e) {
                      return e instanceof x
                  }(e) ? e : new x(e);
                  this._lexer = new j(r),
                  this._options = t
              }
              var t = e.prototype;
              return t.parseName = function() {
                  var e = this.expectToken(O.NAME);
                  return {
                      kind: P.NAME,
                      value: e.value,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseDocument = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.DOCUMENT,
                      definitions: this.many(O.SOF, this.parseDefinition, O.EOF),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseDefinition = function() {
                  if (this.peek(O.NAME))
                      switch (this._lexer.token.value) {
                      case "query":
                      case "mutation":
                      case "subscription":
                          return this.parseOperationDefinition();
                      case "fragment":
                          return this.parseFragmentDefinition();
                      case "schema":
                      case "scalar":
                      case "type":
                      case "interface":
                      case "union":
                      case "enum":
                      case "input":
                      case "directive":
                          return this.parseTypeSystemDefinition();
                      case "extend":
                          return this.parseTypeSystemExtension()
                      }
                  else {
                      if (this.peek(O.BRACE_L))
                          return this.parseOperationDefinition();
                      if (this.peekDescription())
                          return this.parseTypeSystemDefinition()
                  }
                  throw this.unexpected()
              }
              ,
              t.parseOperationDefinition = function() {
                  var e = this._lexer.token;
                  if (this.peek(O.BRACE_L))
                      return {
                          kind: P.OPERATION_DEFINITION,
                          operation: "query",
                          name: void 0,
                          variableDefinitions: [],
                          directives: [],
                          selectionSet: this.parseSelectionSet(),
                          loc: this.loc(e)
                      };
                  var t, r = this.parseOperationType();
                  return this.peek(O.NAME) && (t = this.parseName()),
                  {
                      kind: P.OPERATION_DEFINITION,
                      operation: r,
                      name: t,
                      variableDefinitions: this.parseVariableDefinitions(),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseOperationType = function() {
                  var e = this.expectToken(O.NAME);
                  switch (e.value) {
                  case "query":
                      return "query";
                  case "mutation":
                      return "mutation";
                  case "subscription":
                      return "subscription"
                  }
                  throw this.unexpected(e)
              }
              ,
              t.parseVariableDefinitions = function() {
                  return this.optionalMany(O.PAREN_L, this.parseVariableDefinition, O.PAREN_R)
              }
              ,
              t.parseVariableDefinition = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.VARIABLE_DEFINITION,
                      variable: this.parseVariable(),
                      type: (this.expectToken(O.COLON),
                      this.parseTypeReference()),
                      defaultValue: this.expectOptionalToken(O.EQUALS) ? this.parseValueLiteral(!0) : void 0,
                      directives: this.parseDirectives(!0),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseVariable = function() {
                  var e = this._lexer.token;
                  return this.expectToken(O.DOLLAR),
                  {
                      kind: P.VARIABLE,
                      name: this.parseName(),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseSelectionSet = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.SELECTION_SET,
                      selections: this.many(O.BRACE_L, this.parseSelection, O.BRACE_R),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseSelection = function() {
                  return this.peek(O.SPREAD) ? this.parseFragment() : this.parseField()
              }
              ,
              t.parseField = function() {
                  var e, t, r = this._lexer.token, n = this.parseName();
                  return this.expectOptionalToken(O.COLON) ? (e = n,
                  t = this.parseName()) : t = n,
                  {
                      kind: P.FIELD,
                      alias: e,
                      name: t,
                      arguments: this.parseArguments(!1),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.peek(O.BRACE_L) ? this.parseSelectionSet() : void 0,
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseArguments = function(e) {
                  var t = e ? this.parseConstArgument : this.parseArgument;
                  return this.optionalMany(O.PAREN_L, t, O.PAREN_R)
              }
              ,
              t.parseArgument = function() {
                  var e = this._lexer.token
                    , t = this.parseName();
                  return this.expectToken(O.COLON),
                  {
                      kind: P.ARGUMENT,
                      name: t,
                      value: this.parseValueLiteral(!1),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseConstArgument = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.ARGUMENT,
                      name: this.parseName(),
                      value: (this.expectToken(O.COLON),
                      this.parseValueLiteral(!0)),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseFragment = function() {
                  var e = this._lexer.token;
                  this.expectToken(O.SPREAD);
                  var t = this.expectOptionalKeyword("on");
                  return !t && this.peek(O.NAME) ? {
                      kind: P.FRAGMENT_SPREAD,
                      name: this.parseFragmentName(),
                      directives: this.parseDirectives(!1),
                      loc: this.loc(e)
                  } : {
                      kind: P.INLINE_FRAGMENT,
                      typeCondition: t ? this.parseNamedType() : void 0,
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseFragmentDefinition = function() {
                  var e, t = this._lexer.token;
                  return this.expectKeyword("fragment"),
                  !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
                      kind: P.FRAGMENT_DEFINITION,
                      name: this.parseFragmentName(),
                      variableDefinitions: this.parseVariableDefinitions(),
                      typeCondition: (this.expectKeyword("on"),
                      this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(t)
                  } : {
                      kind: P.FRAGMENT_DEFINITION,
                      name: this.parseFragmentName(),
                      typeCondition: (this.expectKeyword("on"),
                      this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(t)
                  }
              }
              ,
              t.parseFragmentName = function() {
                  if ("on" === this._lexer.token.value)
                      throw this.unexpected();
                  return this.parseName()
              }
              ,
              t.parseValueLiteral = function(e) {
                  var t = this._lexer.token;
                  switch (t.kind) {
                  case O.BRACKET_L:
                      return this.parseList(e);
                  case O.BRACE_L:
                      return this.parseObject(e);
                  case O.INT:
                      return this._lexer.advance(),
                      {
                          kind: P.INT,
                          value: t.value,
                          loc: this.loc(t)
                      };
                  case O.FLOAT:
                      return this._lexer.advance(),
                      {
                          kind: P.FLOAT,
                          value: t.value,
                          loc: this.loc(t)
                      };
                  case O.STRING:
                  case O.BLOCK_STRING:
                      return this.parseStringLiteral();
                  case O.NAME:
                      switch (this._lexer.advance(),
                      t.value) {
                      case "true":
                          return {
                              kind: P.BOOLEAN,
                              value: !0,
                              loc: this.loc(t)
                          };
                      case "false":
                          return {
                              kind: P.BOOLEAN,
                              value: !1,
                              loc: this.loc(t)
                          };
                      case "null":
                          return {
                              kind: P.NULL,
                              loc: this.loc(t)
                          };
                      default:
                          return {
                              kind: P.ENUM,
                              value: t.value,
                              loc: this.loc(t)
                          }
                      }
                  case O.DOLLAR:
                      if (!e)
                          return this.parseVariable()
                  }
                  throw this.unexpected()
              }
              ,
              t.parseStringLiteral = function() {
                  var e = this._lexer.token;
                  return this._lexer.advance(),
                  {
                      kind: P.STRING,
                      value: e.value,
                      block: e.kind === O.BLOCK_STRING,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseList = function(e) {
                  var t = this
                    , r = this._lexer.token;
                  return {
                      kind: P.LIST,
                      values: this.any(O.BRACKET_L, (function() {
                          return t.parseValueLiteral(e)
                      }
                      ), O.BRACKET_R),
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseObject = function(e) {
                  var t = this
                    , r = this._lexer.token;
                  return {
                      kind: P.OBJECT,
                      fields: this.any(O.BRACE_L, (function() {
                          return t.parseObjectField(e)
                      }
                      ), O.BRACE_R),
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseObjectField = function(e) {
                  var t = this._lexer.token
                    , r = this.parseName();
                  return this.expectToken(O.COLON),
                  {
                      kind: P.OBJECT_FIELD,
                      name: r,
                      value: this.parseValueLiteral(e),
                      loc: this.loc(t)
                  }
              }
              ,
              t.parseDirectives = function(e) {
                  for (var t = []; this.peek(O.AT); )
                      t.push(this.parseDirective(e));
                  return t
              }
              ,
              t.parseDirective = function(e) {
                  var t = this._lexer.token;
                  return this.expectToken(O.AT),
                  {
                      kind: P.DIRECTIVE,
                      name: this.parseName(),
                      arguments: this.parseArguments(e),
                      loc: this.loc(t)
                  }
              }
              ,
              t.parseTypeReference = function() {
                  var e, t = this._lexer.token;
                  return this.expectOptionalToken(O.BRACKET_L) ? (e = this.parseTypeReference(),
                  this.expectToken(O.BRACKET_R),
                  e = {
                      kind: P.LIST_TYPE,
                      type: e,
                      loc: this.loc(t)
                  }) : e = this.parseNamedType(),
                  this.expectOptionalToken(O.BANG) ? {
                      kind: P.NON_NULL_TYPE,
                      type: e,
                      loc: this.loc(t)
                  } : e
              }
              ,
              t.parseNamedType = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.NAMED_TYPE,
                      name: this.parseName(),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseTypeSystemDefinition = function() {
                  var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
                  if (e.kind === O.NAME)
                      switch (e.value) {
                      case "schema":
                          return this.parseSchemaDefinition();
                      case "scalar":
                          return this.parseScalarTypeDefinition();
                      case "type":
                          return this.parseObjectTypeDefinition();
                      case "interface":
                          return this.parseInterfaceTypeDefinition();
                      case "union":
                          return this.parseUnionTypeDefinition();
                      case "enum":
                          return this.parseEnumTypeDefinition();
                      case "input":
                          return this.parseInputObjectTypeDefinition();
                      case "directive":
                          return this.parseDirectiveDefinition()
                      }
                  throw this.unexpected(e)
              }
              ,
              t.peekDescription = function() {
                  return this.peek(O.STRING) || this.peek(O.BLOCK_STRING)
              }
              ,
              t.parseDescription = function() {
                  if (this.peekDescription())
                      return this.parseStringLiteral()
              }
              ,
              t.parseSchemaDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("schema");
                  var r = this.parseDirectives(!0)
                    , n = this.many(O.BRACE_L, this.parseOperationTypeDefinition, O.BRACE_R);
                  return {
                      kind: P.SCHEMA_DEFINITION,
                      description: t,
                      directives: r,
                      operationTypes: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseOperationTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseOperationType();
                  this.expectToken(O.COLON);
                  var r = this.parseNamedType();
                  return {
                      kind: P.OPERATION_TYPE_DEFINITION,
                      operation: t,
                      type: r,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseScalarTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("scalar");
                  var r = this.parseName()
                    , n = this.parseDirectives(!0);
                  return {
                      kind: P.SCALAR_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      directives: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseObjectTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("type");
                  var r = this.parseName()
                    , n = this.parseImplementsInterfaces()
                    , i = this.parseDirectives(!0)
                    , s = this.parseFieldsDefinition();
                  return {
                      kind: P.OBJECT_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      interfaces: n,
                      directives: i,
                      fields: s,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseImplementsInterfaces = function() {
                  var e;
                  if (!this.expectOptionalKeyword("implements"))
                      return [];
                  if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
                      var t = [];
                      this.expectOptionalToken(O.AMP);
                      do {
                          t.push(this.parseNamedType())
                      } while (this.expectOptionalToken(O.AMP) || this.peek(O.NAME));
                      return t
                  }
                  return this.delimitedMany(O.AMP, this.parseNamedType)
              }
              ,
              t.parseFieldsDefinition = function() {
                  var e;
                  return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(O.BRACE_L) && this._lexer.lookahead().kind === O.BRACE_R ? (this._lexer.advance(),
                  this._lexer.advance(),
                  []) : this.optionalMany(O.BRACE_L, this.parseFieldDefinition, O.BRACE_R)
              }
              ,
              t.parseFieldDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription()
                    , r = this.parseName()
                    , n = this.parseArgumentDefs();
                  this.expectToken(O.COLON);
                  var i = this.parseTypeReference()
                    , s = this.parseDirectives(!0);
                  return {
                      kind: P.FIELD_DEFINITION,
                      description: t,
                      name: r,
                      arguments: n,
                      type: i,
                      directives: s,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseArgumentDefs = function() {
                  return this.optionalMany(O.PAREN_L, this.parseInputValueDef, O.PAREN_R)
              }
              ,
              t.parseInputValueDef = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription()
                    , r = this.parseName();
                  this.expectToken(O.COLON);
                  var n, i = this.parseTypeReference();
                  this.expectOptionalToken(O.EQUALS) && (n = this.parseValueLiteral(!0));
                  var s = this.parseDirectives(!0);
                  return {
                      kind: P.INPUT_VALUE_DEFINITION,
                      description: t,
                      name: r,
                      type: i,
                      defaultValue: n,
                      directives: s,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseInterfaceTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("interface");
                  var r = this.parseName()
                    , n = this.parseImplementsInterfaces()
                    , i = this.parseDirectives(!0)
                    , s = this.parseFieldsDefinition();
                  return {
                      kind: P.INTERFACE_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      interfaces: n,
                      directives: i,
                      fields: s,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseUnionTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("union");
                  var r = this.parseName()
                    , n = this.parseDirectives(!0)
                    , i = this.parseUnionMemberTypes();
                  return {
                      kind: P.UNION_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      directives: n,
                      types: i,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseUnionMemberTypes = function() {
                  return this.expectOptionalToken(O.EQUALS) ? this.delimitedMany(O.PIPE, this.parseNamedType) : []
              }
              ,
              t.parseEnumTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("enum");
                  var r = this.parseName()
                    , n = this.parseDirectives(!0)
                    , i = this.parseEnumValuesDefinition();
                  return {
                      kind: P.ENUM_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      directives: n,
                      values: i,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseEnumValuesDefinition = function() {
                  return this.optionalMany(O.BRACE_L, this.parseEnumValueDefinition, O.BRACE_R)
              }
              ,
              t.parseEnumValueDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription()
                    , r = this.parseName()
                    , n = this.parseDirectives(!0);
                  return {
                      kind: P.ENUM_VALUE_DEFINITION,
                      description: t,
                      name: r,
                      directives: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseInputObjectTypeDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("input");
                  var r = this.parseName()
                    , n = this.parseDirectives(!0)
                    , i = this.parseInputFieldsDefinition();
                  return {
                      kind: P.INPUT_OBJECT_TYPE_DEFINITION,
                      description: t,
                      name: r,
                      directives: n,
                      fields: i,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseInputFieldsDefinition = function() {
                  return this.optionalMany(O.BRACE_L, this.parseInputValueDef, O.BRACE_R)
              }
              ,
              t.parseTypeSystemExtension = function() {
                  var e = this._lexer.lookahead();
                  if (e.kind === O.NAME)
                      switch (e.value) {
                      case "schema":
                          return this.parseSchemaExtension();
                      case "scalar":
                          return this.parseScalarTypeExtension();
                      case "type":
                          return this.parseObjectTypeExtension();
                      case "interface":
                          return this.parseInterfaceTypeExtension();
                      case "union":
                          return this.parseUnionTypeExtension();
                      case "enum":
                          return this.parseEnumTypeExtension();
                      case "input":
                          return this.parseInputObjectTypeExtension()
                      }
                  throw this.unexpected(e)
              }
              ,
              t.parseSchemaExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("schema");
                  var t = this.parseDirectives(!0)
                    , r = this.optionalMany(O.BRACE_L, this.parseOperationTypeDefinition, O.BRACE_R);
                  if (0 === t.length && 0 === r.length)
                      throw this.unexpected();
                  return {
                      kind: P.SCHEMA_EXTENSION,
                      directives: t,
                      operationTypes: r,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseScalarTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("scalar");
                  var t = this.parseName()
                    , r = this.parseDirectives(!0);
                  if (0 === r.length)
                      throw this.unexpected();
                  return {
                      kind: P.SCALAR_TYPE_EXTENSION,
                      name: t,
                      directives: r,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseObjectTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("type");
                  var t = this.parseName()
                    , r = this.parseImplementsInterfaces()
                    , n = this.parseDirectives(!0)
                    , i = this.parseFieldsDefinition();
                  if (0 === r.length && 0 === n.length && 0 === i.length)
                      throw this.unexpected();
                  return {
                      kind: P.OBJECT_TYPE_EXTENSION,
                      name: t,
                      interfaces: r,
                      directives: n,
                      fields: i,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseInterfaceTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("interface");
                  var t = this.parseName()
                    , r = this.parseImplementsInterfaces()
                    , n = this.parseDirectives(!0)
                    , i = this.parseFieldsDefinition();
                  if (0 === r.length && 0 === n.length && 0 === i.length)
                      throw this.unexpected();
                  return {
                      kind: P.INTERFACE_TYPE_EXTENSION,
                      name: t,
                      interfaces: r,
                      directives: n,
                      fields: i,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseUnionTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("union");
                  var t = this.parseName()
                    , r = this.parseDirectives(!0)
                    , n = this.parseUnionMemberTypes();
                  if (0 === r.length && 0 === n.length)
                      throw this.unexpected();
                  return {
                      kind: P.UNION_TYPE_EXTENSION,
                      name: t,
                      directives: r,
                      types: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseEnumTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("enum");
                  var t = this.parseName()
                    , r = this.parseDirectives(!0)
                    , n = this.parseEnumValuesDefinition();
                  if (0 === r.length && 0 === n.length)
                      throw this.unexpected();
                  return {
                      kind: P.ENUM_TYPE_EXTENSION,
                      name: t,
                      directives: r,
                      values: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseInputObjectTypeExtension = function() {
                  var e = this._lexer.token;
                  this.expectKeyword("extend"),
                  this.expectKeyword("input");
                  var t = this.parseName()
                    , r = this.parseDirectives(!0)
                    , n = this.parseInputFieldsDefinition();
                  if (0 === r.length && 0 === n.length)
                      throw this.unexpected();
                  return {
                      kind: P.INPUT_OBJECT_TYPE_EXTENSION,
                      name: t,
                      directives: r,
                      fields: n,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseDirectiveDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription();
                  this.expectKeyword("directive"),
                  this.expectToken(O.AT);
                  var r = this.parseName()
                    , n = this.parseArgumentDefs()
                    , i = this.expectOptionalKeyword("repeatable");
                  this.expectKeyword("on");
                  var s = this.parseDirectiveLocations();
                  return {
                      kind: P.DIRECTIVE_DEFINITION,
                      description: t,
                      name: r,
                      arguments: n,
                      repeatable: i,
                      locations: s,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseDirectiveLocations = function() {
                  return this.delimitedMany(O.PIPE, this.parseDirectiveLocation)
              }
              ,
              t.parseDirectiveLocation = function() {
                  var e = this._lexer.token
                    , t = this.parseName();
                  if (void 0 !== N[t.value])
                      return t;
                  throw this.unexpected(e)
              }
              ,
              t.loc = function(e) {
                  var t;
                  if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation))
                      return new A(e,this._lexer.lastToken,this._lexer.source)
              }
              ,
              t.peek = function(e) {
                  return this._lexer.token.kind === e
              }
              ,
              t.expectToken = function(e) {
                  var t = this._lexer.token;
                  if (t.kind === e)
                      return this._lexer.advance(),
                      t;
                  throw E(this._lexer.source, t.start, "Expected ".concat(Z(e), ", found ").concat(J(t), "."))
              }
              ,
              t.expectOptionalToken = function(e) {
                  var t = this._lexer.token;
                  if (t.kind === e)
                      return this._lexer.advance(),
                      t
              }
              ,
              t.expectKeyword = function(e) {
                  var t = this._lexer.token;
                  if (t.kind !== O.NAME || t.value !== e)
                      throw E(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(J(t), "."));
                  this._lexer.advance()
              }
              ,
              t.expectOptionalKeyword = function(e) {
                  var t = this._lexer.token;
                  return t.kind === O.NAME && t.value === e && (this._lexer.advance(),
                  !0)
              }
              ,
              t.unexpected = function(e) {
                  var t = null != e ? e : this._lexer.token;
                  return E(this._lexer.source, t.start, "Unexpected ".concat(J(t), "."))
              }
              ,
              t.any = function(e, t, r) {
                  this.expectToken(e);
                  for (var n = []; !this.expectOptionalToken(r); )
                      n.push(t.call(this));
                  return n
              }
              ,
              t.optionalMany = function(e, t, r) {
                  if (this.expectOptionalToken(e)) {
                      var n = [];
                      do {
                          n.push(t.call(this))
                      } while (!this.expectOptionalToken(r));
                      return n
                  }
                  return []
              }
              ,
              t.many = function(e, t, r) {
                  this.expectToken(e);
                  var n = [];
                  do {
                      n.push(t.call(this))
                  } while (!this.expectOptionalToken(r));
                  return n
              }
              ,
              t.delimitedMany = function(e, t) {
                  this.expectOptionalToken(e);
                  var r = [];
                  do {
                      r.push(t.call(this))
                  } while (this.expectOptionalToken(e));
                  return r
              }
              ,
              e
          }();
          function J(e) {
              var t = e.value;
              return Z(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
          }
          function Z(e) {
              return function(e) {
                  return e === O.BANG || e === O.DOLLAR || e === O.AMP || e === O.PAREN_L || e === O.PAREN_R || e === O.SPREAD || e === O.COLON || e === O.EQUALS || e === O.AT || e === O.BRACKET_L || e === O.BRACKET_R || e === O.BRACE_L || e === O.PIPE || e === O.BRACE_R
              }(e) ? '"'.concat(e, '"') : e
          }
          function H(e) {
              return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          var X = new Map
            , Q = new Map
            , ee = !0
            , te = !1;
          function re(e) {
              return e.replace(/[\s,]+/g, " ").trim()
          }
          function ne(e) {
              var t, r, i, s = re(e);
              if (!X.has(s)) {
                  var a = function(e, t) {
                      return new K(e,t).parseDocument()
                  }(e, {
                      experimentalFragmentVariables: te
                  });
                  if (!a || "Document" !== a.kind)
                      throw new Error("Not a valid GraphQL document.");
                  X.set(s, function(e) {
                      var t = new Set(e.definitions);
                      t.forEach((function(e) {
                          e.loc && delete e.loc,
                          Object.keys(e).forEach((function(r) {
                              var n = e[r];
                              n && "object" === H(n) && t.add(n)
                          }
                          ))
                      }
                      ));
                      var r = e.loc;
                      return r && (delete r.startToken,
                      delete r.endToken),
                      e
                  }((t = a,
                  r = new Set,
                  i = [],
                  t.definitions.forEach((function(e) {
                      if ("FragmentDefinition" === e.kind) {
                          var t = e.name.value
                            , n = re((a = e.loc).source.body.substring(a.start, a.end))
                            , s = Q.get(t);
                          s && !s.has(n) ? ee && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : s || Q.set(t, s = new Set),
                          s.add(n),
                          r.has(n) || (r.add(n),
                          i.push(e))
                      } else
                          i.push(e);
                      var a
                  }
                  )),
                  n(n({}, t), {
                      definitions: i
                  }))))
              }
              return X.get(s)
          }
          function ie(e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              "string" == typeof e && (e = [e]);
              var n = e[0];
              return t.forEach((function(t, r) {
                  t && "Document" === t.kind ? n += t.loc.source.body : n += t,
                  n += e[r + 1]
              }
              )),
              ne(n)
          }
          var se, ae = ie;
          (se = ie || (ie = {})).gql = ae,
          se.resetCaches = function() {
              X.clear(),
              Q.clear()
          }
          ,
          se.disableFragmentWarnings = function() {
              ee = !1
          }
          ,
          se.enableExperimentalFragmentVariables = function() {
              te = !0
          }
          ,
          se.disableExperimentalFragmentVariables = function() {
              te = !1
          }
          ,
          ie.default = ie;
          const oe = ie;
          var ce, le, he, ue, de, fe, pe, ve, ye, me, ge, we, be, Ee, Pe, Se, _e, Ae, Te, Oe, ke, Ce, Re, Ie, De, xe, Ne, Me, Le, je, Fe, Ue, Ge, $e, Be, Ve, qe, We, ze, Ye, Ke, Je, Ze, He, Xe, Qe, et, tt, rt, nt, it, st, at, ot, ct, lt, ht, ut, dt, ft, pt, vt, yt, mt, gt, wt, bt, Et, Pt, St;
          !function(e) {
              e.UnlockPlayerAchievement = "UnlockPlayerAchievement",
              e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress",
              e.FetchPlayerAchievements = "FetchPlayerAchievements",
              e.SyncPlayer = "SyncPlayer",
              e.GetPlayer = "GetPlayer",
              e.FetchPlayerFields = "FetchPlayerFields",
              e.CheckPlayerCode = "CheckPlayerCode",
              e.PlayerFetchPlayers = "PlayerFetchPlayers",
              e.SyncPlayerPurchases = "SyncPlayerPurchases",
              e.PurchasePlayerPurchase = "PurchasePlayerPurchase",
              e.ConsumePlayerPurchase = "ConsumePlayerPurchase",
              e.UnsubscribePlayerSubscription = "UnsubscribePlayerSubscription",
              e.ResumePlayerSubscription = "ResumePlayerSubscription",
              e.FetchPlayerPurchases = "FetchPlayerPurchases",
              e.FindPlayerPurchase = "FindPlayerPurchase",
              e.PlayerGetPaymentLink = "PlayerGetPaymentLink",
              e.FetchPlayerProjectVariables = "FetchPlayerProjectVariables",
              e.FetchPlayerProjectConfig = "FetchPlayerProjectConfig",
              e.GivePlayerReward = "GivePlayerReward",
              e.FetchPlayerRewards = "FetchPlayerRewards",
              e.PlayerPublishRecord = "PlayerPublishRecord",
              e.FetchTop = "FetchTop",
              e.FetchPlayerRating = "FetchPlayerRating",
              e.UploadPlayerImage = "UploadPlayerImage",
              e.FetchPlayerImages = "FetchPlayerImages",
              e.UploadPlayerFile = "UploadPlayerFile",
              e.FetchPlayerFiles = "FetchPlayerFiles",
              e.FetchPlayerGamesCollection = "FetchPlayerGamesCollection",
              e.PlayerJoinEvent = "PlayerJoinEvent",
              e.PlayerRegisterOnScheduler = "PlayerRegisterOnScheduler",
              e.FetchPlayerDocument = "FetchPlayerDocument",
              e.PlayerCreateChannel = "PlayerCreateChannel",
              e.PlayerUpdateChannel = "PlayerUpdateChannel",
              e.PlayerDeleteChannel = "PlayerDeleteChannel",
              e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel",
              e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel",
              e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage",
              e.PlayerSendFeedMessage = "PlayerSendFeedMessage",
              e.PlayerSendMessage = "PlayerSendMessage",
              e.PlayerEditMessage = "PlayerEditMessage",
              e.PlayerDeleteMessage = "PlayerDeleteMessage",
              e.PlayerFetchChannelMessages = "PlayerFetchChannelMessages",
              e.PlayerFetchPersonalMessages = "PlayerFetchPersonalMessages",
              e.PlayerFetchFeedMessages = "PlayerFetchFeedMessages",
              e.PlayerKickFromChannel = "PlayerKickFromChannel",
              e.PlayerFetchChannelMembers = "PlayerFetchChannelMembers",
              e.PlayerJoinChannel = "PlayerJoinChannel",
              e.PlayerLeaveChannel = "PlayerLeaveChannel",
              e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel",
              e.PlayerAcceptJoinRequestToChannel = "PlayerAcceptJoinRequestToChannel",
              e.PlayerRejectJoinRequestToChannel = "PlayerRejectJoinRequestToChannel",
              e.PlayerFetchChannelJoinRequests = "PlayerFetchChannelJoinRequests",
              e.PlayerFetchSentJoinRequests = "PlayerFetchSentJoinRequests",
              e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel",
              e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel",
              e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel",
              e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel",
              e.PlayerFetchChannelInvites = "PlayerFetchChannelInvites",
              e.PlayerFetchPlayerSentInvites = "PlayerFetchPlayerSentInvites",
              e.PlayerFetchPlayerInvites = "PlayerFetchPlayerInvites",
              e.CheckPlayerUniqueValue = "CheckPlayerUniqueValue",
              e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue",
              e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue",
              e.CreateAchievement = "CreateAchievement",
              e.UpdateAchievement = "UpdateAchievement",
              e.DeleteAchievement = "DeleteAchievement",
              e.CreateAchievementsGroup = "CreateAchievementsGroup",
              e.UpdateAchievementsGroup = "UpdateAchievementsGroup",
              e.DeleteAchievementsGroup = "DeleteAchievementsGroup",
              e.AddAchievementToPlayer = "AddAchievementToPlayer",
              e.RemoveAchievementFromPlayer = "RemoveAchievementFromPlayer",
              e.FetchAchievements = "FetchAchievements",
              e.FetchAchievementsGroups = "FetchAchievementsGroups",
              e.FetchPlayersAchievements = "FetchPlayersAchievements",
              e.FetchAdminPlayerAchievements = "FetchAdminPlayerAchievements",
              e.FetchAchievementStats = "FetchAchievementStats",
              e.FetchChannelInvites = "FetchChannelInvites",
              e.SendInviteToChannel = "SendInviteToChannel",
              e.CancelInviteToChannel = "CancelInviteToChannel",
              e.FetchChannelJoinRequests = "FetchChannelJoinRequests",
              e.RejectJoinRequestToChannel = "RejectJoinRequestToChannel",
              e.FetchChannelMembers = "FetchChannelMembers",
              e.KickFromChannel = "KickFromChannel",
              e.AddToChannel = "AddToChannel",
              e.FetchChannelMessages = "FetchChannelMessages",
              e.FetchPrivateMessages = "FetchPrivateMessages",
              e.FetchFeedMessages = "FetchFeedMessages",
              e.CreateChannelMessage = "CreateChannelMessage",
              e.UpdateChannelMessage = "UpdateChannelMessage",
              e.DeleteChannelMessage = "DeleteChannelMessage",
              e.SendPersonalMessage = "SendPersonalMessage",
              e.SendFeedMessage = "SendFeedMessage",
              e.FetchPlayerMute = "FetchPlayerMute",
              e.MutePlayerInChannel = "MutePlayerInChannel",
              e.UnmutePlayerInChannel = "UnmutePlayerInChannel",
              e.FetchChannelTemplate = "FetchChannelTemplate",
              e.FetchChannelTemplates = "FetchChannelTemplates",
              e.CreateChannelTemplate = "CreateChannelTemplate",
              e.UpdateChannelTemplate = "UpdateChannelTemplate",
              e.DeleteChannelTemplate = "DeleteChannelTemplate",
              e.FetchChannels = "FetchChannels",
              e.FetchChannel = "FetchChannel",
              e.CreateChannel = "CreateChannel",
              e.UpdateChannel = "UpdateChannel",
              e.DeleteChannel = "DeleteChannel",
              e.FetchDocuments = "FetchDocuments",
              e.SaveDocument = "SaveDocument",
              e.FetchEvents = "FetchEvents",
              e.CheckEventExists = "CheckEventExists",
              e.FetchAdminPlayerEvents = "FetchAdminPlayerEvents",
              e.FetchEventsStats = "FetchEventsStats",
              e.UpsertEvent = "UpsertEvent",
              e.DeleteEvent = "DeleteEvent",
              e.AddEventToPlayer = "AddEventToPlayer",
              e.RemoveEventFromPlayer = "RemoveEventFromPlayer",
              e.FetchFiles = "FetchFiles",
              e.UploadFile = "UploadFile",
              e.UpdateFile = "UpdateFile",
              e.DeleteFiles = "DeleteFiles",
              e.FetchGamesCollections = "FetchGamesCollections",
              e.CreateGamesCollection = "CreateGamesCollection",
              e.UpdateGamesCollection = "UpdateGamesCollection",
              e.DeleteGamesCollection = "DeleteGamesCollection",
              e.FetchImages = "FetchImages",
              e.UploadImage = "UploadImage",
              e.UpdateImage = "UpdateImage",
              e.DeleteImages = "DeleteImages",
              e.FetchLeaderboards = "FetchLeaderboards",
              e.FetchLeaderboard = "FetchLeaderboard",
              e.FetchLeaderboardVariant = "FetchLeaderboardVariant",
              e.FetchLeaderboardsVariants = "FetchLeaderboardsVariants",
              e.FetchLeaderboardRecords = "FetchLeaderboardRecords",
              e.FetchAdminPlayerRecords = "FetchAdminPlayerRecords",
              e.CreateLeaderboard = "CreateLeaderboard",
              e.UpdateLeaderboard = "UpdateLeaderboard",
              e.DeleteLeaderboard = "DeleteLeaderboard",
              e.DeleteLeaderboardVariant = "DeleteLeaderboardVariant",
              e.UpdateLeaderboardRecord = "UpdateLeaderboardRecord",
              e.DeleteLeaderboardRecord = "DeleteLeaderboardRecord",
              e.DeleteAdminPlayerRecords = "DeleteAdminPlayerRecords",
              e.FetchModel = "FetchModel",
              e.FetchModels = "FetchModels",
              e.UpdateModel = "UpdateModel",
              e.FetchPlatforms = "FetchPlatforms",
              e.AddPlatform = "AddPlatform",
              e.UpdatePlatform = "UpdatePlatform",
              e.UpdatePlatformBanners = "UpdatePlatformBanners",
              e.UpdatePlatformAds = "UpdatePlatformAds",
              e.DeletePlatform = "DeletePlatform",
              e.FindPlayerStateById = "FindPlayerStateByID",
              e.FindPlayerById = "FindPlayerByID",
              e.FetchPlayers = "FetchPlayers",
              e.FetchPlayersReports = "FetchPlayersReports",
              e.UpdatePlayer = "UpdatePlayer",
              e.DeletePlayer = "DeletePlayer",
              e.RestorePlayer = "RestorePlayer",
              e.BanPlayer = "BanPlayer",
              e.UnbanPlayer = "UnbanPlayer",
              e.RestorePlayerFromArchive = "RestorePlayerFromArchive",
              e.UpdatePlayerModifiedAt = "UpdatePlayerModifiedAt",
              e.FetchPlayersPurchases = "FetchPlayersPurchases",
              e.FetchAdminPlayerPurchases = "FetchAdminPlayerPurchases",
              e.FetchProducts = "FetchProducts",
              e.FetchPlayerPurchasesStats = "FetchPlayerPurchasesStats",
              e.GetPlayerPurchase = "GetPlayerPurchase",
              e.AddPurchaseToPlayer = "AddPurchaseToPlayer",
              e.UpdatePlayerPurchase = "UpdatePlayerPurchase",
              e.RemovePurchaseFromPlayer = "RemovePurchaseFromPlayer",
              e.CreateProduct = "CreateProduct",
              e.UpdateProduct = "UpdateProduct",
              e.DeleteProduct = "DeleteProduct",
              e.UpsertProjectVariable = "UpsertProjectVariable",
              e.DeleteProjectVariable = "DeleteProjectVariable",
              e.FetchRewards = "FetchRewards",
              e.FetchPlayersRewards = "FetchPlayersRewards",
              e.FetchAdminPlayerRewards = "FetchAdminPlayerRewards",
              e.CheckRewardExists = "CheckRewardExists",
              e.FetchRewardStats = "FetchRewardStats",
              e.CreateReward = "CreateReward",
              e.UpdateReward = "UpdateReward",
              e.DeleteReward = "DeleteReward",
              e.AddRewardToPlayer = "AddRewardToPlayer",
              e.SubstractRewardFromPlayer = "SubstractRewardFromPlayer",
              e.DropRewardsForPlayer = "DropRewardsForPlayer",
              e.FetchSchedulers = "FetchSchedulers",
              e.FetchSchedulerTriggers = "FetchSchedulerTriggers",
              e.CheckSchedulerExists = "CheckSchedulerExists",
              e.FetchPlayersSchedulers = "FetchPlayersSchedulers",
              e.UpsertScheduler = "UpsertScheduler",
              e.SaveSchedulerTriggersOnDay = "SaveSchedulerTriggersOnDay",
              e.DeleteScheduler = "DeleteScheduler",
              e.AddSchedulerToPlayer = "AddSchedulerToPlayer",
              e.RemoveSchedulerFromPlayer = "RemoveSchedulerFromPlayer",
              e.UpdatePlayerScheduler = "UpdatePlayerScheduler",
              e.FetchSegments = "FetchSegments",
              e.CreateSegment = "CreateSegment",
              e.UpdateSegment = "UpdateSegment",
              e.DeleteSegment = "DeleteSegment",
              e.FetchCommonTriggers = "FetchCommonTriggers",
              e.FetchAdminPlayerTriggers = "FetchAdminPlayerTriggers",
              e.CheckTriggerExists = "CheckTriggerExists",
              e.FetchTriggersStats = "FetchTriggersStats",
              e.CreateCommonTrigger = "CreateCommonTrigger",
              e.UpdateCommonTrigger = "UpdateCommonTrigger",
              e.DeleteCommonTrigger = "DeleteCommonTrigger",
              e.ActivateTriggerForPlayer = "ActivateTriggerForPlayer",
              e.DeactivateTriggerForPlayer = "DeactivateTriggerForPlayer",
              e.FetchAdsStats = "FetchAdsStats",
              e.FetchDwmStats = "FetchDWMStats",
              e.FetchFilesStats = "FetchFilesStats",
              e.FetchHostingStats = "FetchHostingStats",
              e.FetchImagesStats = "FetchImagesStats",
              e.FetchOnlineStats = "FetchOnlineStats",
              e.FetchStatsRequests = "FetchStatsRequests",
              e.FetchRetentionStats = "FetchRetentionStats",
              e.FetchSessionsStats = "FetchSessionsStats",
              e.FetchUniqueValues = "FetchUniqueValues",
              e.CreateUniqueValue = "CreateUniqueValue",
              e.UpdateUniqueValue = "UpdateUniqueValue",
              e.DeleteUniqueValue = "DeleteUniqueValue",
              e.FetchUniqueValuesRules = "FetchUniqueValuesRules",
              e.CreateUniqueValueRule = "CreateUniqueValueRule",
              e.UpdateUniqueValueRule = "UpdateUniqueValueRule",
              e.DeleteUniqueValueRule = "DeleteUniqueValueRule",
              e.PlayerAiCheckCensor = "PlayerAICheckCensor",
              e.AiCensor = "AICensor"
          }(ce || (ce = {})),
          function(e) {
              e.Skip = "SKIP",
              e.Analytics = "ANALYTICS",
              e.Ai = "AI"
          }(le || (le = {})),
          function(e) {
              e.Any = "ANY",
              e.Player = "PLAYER",
              e.Admin = "ADMIN",
              e.Developer = "DEVELOPER",
              e.Analytic = "ANALYTIC",
              e.ContentManager = "CONTENT_MANAGER",
              e.InternalDeveloper = "INTERNAL_DEVELOPER",
              e.InternalModerator = "INTERNAL_MODERATOR",
              e.Marketer = "MARKETER"
          }(he || (he = {})),
          function(e) {
              e.Achievement = "ACHIEVEMENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(ue || (ue = {})),
          function(e) {
              e.Achievement = "ACHIEVEMENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Total = "TOTAL"
          }(de || (de = {})),
          function(e) {
              e.YandexSimpleMonetization = "YandexSimpleMonetization",
              e.Adfox = "ADFOX",
              e.Rtb = "RTB",
              e.Gpt = "GPT",
              e.Adsgram = "ADSGRAM",
              e.Tmads = "TMADS"
          }(fe || (fe = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.BannerType = "BANNER_TYPE",
              e.Project = "PROJECT"
          }(pe || (pe = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.BannerType = "BANNER_TYPE",
              e.Requests = "REQUESTS",
              e.Displays = "DISPLAYS",
              e.Errors = "ERRORS",
              e.FillRate = "FILL_RATE",
              e.Revenue = "REVENUE"
          }(ve || (ve = {})),
          function(e) {
              e.GamepushLlc = "GAMEPUSH_LLC",
              e.GamepushFzco = "GAMEPUSH_FZCO"
          }(ye || (ye = {})),
          function(e) {
              e.Xsolla = "XSOLLA"
          }(me || (me = {})),
          function(e) {
              e.Preloader = "PRELOADER",
              e.Fullscreen = "FULLSCREEN",
              e.Rewarded = "REWARDED",
              e.Sticky = "STICKY"
          }(ge || (ge = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Achievement = "ACHIEVEMENT",
              e.Product = "PRODUCT"
          }(we || (we = {})),
          function(e) {
              e.Awaits = "AWAITS",
              e.Running = "RUNNING",
              e.Succeed = "SUCCEED",
              e.Failed = "FAILED"
          }(be || (be = {})),
          function(e) {
              e.Eq = "EQ",
              e.Ne = "NE",
              e.Lt = "LT",
              e.Gt = "GT",
              e.Lte = "LTE",
              e.Gte = "GTE"
          }(Ee || (Ee = {})),
          function(e) {
              e.PlayerStat = "PLAYER_STAT",
              e.EntityStat = "ENTITY_STAT",
              e.PlayerField = "PLAYER_FIELD"
          }(Pe || (Pe = {})),
          function(e) {
              e.Rub = "RUB",
              e.Usd = "USD",
              e.Eur = "EUR",
              e.Aed = "AED",
              e.Inr = "INR",
              e.Krw = "KRW",
              e.Gbp = "GBP",
              e.Jpy = "JPY",
              e.Cny = "CNY",
              e.Try = "TRY",
              e.Brl = "BRL",
              e.Idr = "IDR"
          }(Se || (Se = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(_e || (_e = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.StickyFactor = "STICKY_FACTOR",
              e.Dau = "DAU",
              e.Wau = "WAU",
              e.Mau = "MAU",
              e.NewUsersDay = "NEW_USERS_DAY",
              e.NewUsersWeek = "NEW_USERS_WEEK",
              e.NewUsersMonth = "NEW_USERS_MONTH"
          }(Ae || (Ae = {})),
          function(e) {
              e.AdsRevenueSum = "AdsRevenueSum",
              e.PurchasesRevenueSum = "PurchasesRevenueSum",
              e.TotalRevenue = "TotalRevenue",
              e.DeveloperRevenue = "DeveloperRevenue"
          }(Te || (Te = {})),
          function(e) {
              e.Purchases = "Purchases",
              e.Ads = "Ads"
          }(Oe || (Oe = {})),
          function(e) {
              e.Raw = "RAW",
              e.Txt = "TXT",
              e.Html = "HTML"
          }(ke || (ke = {})),
          function(e) {
              e.PlayerPrivacyPolicy = "PLAYER_PRIVACY_POLICY"
          }(Ce || (Ce = {})),
          function(e) {
              e.Name = "NAME",
              e.Description = "DESCRIPTION",
              e.Review = "REVIEW",
              e.FullDescription = "FULL_DESCRIPTION",
              e.HowToPlay = "HOW_TO_PLAY",
              e.ShareText = "SHARE_TEXT",
              e.DocumentContent = "DOCUMENT_CONTENT"
          }(Re || (Re = {})),
          function(e) {
              e.Image = "IMAGE",
              e.File = "FILE",
              e.Channel = "CHANNEL",
              e.ChannelMessage = "CHANNEL_MESSAGE",
              e.ChannelTemplate = "CHANNEL_TEMPLATE",
              e.Achievement = "ACHIEVEMENT",
              e.AchievementsGroup = "ACHIEVEMENTS_GROUP",
              e.Product = "PRODUCT",
              e.Project = "PROJECT",
              e.Leaderboard = "LEADERBOARD",
              e.Reward = "REWARD",
              e.Trigger = "TRIGGER",
              e.Events = "EVENTS",
              e.Document = "DOCUMENT",
              e.GamesCollections = "GAMES_COLLECTIONS"
          }(Ie || (Ie = {})),
          function(e) {
              e.Event = "EVENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(De || (De = {})),
          function(e) {
              e.Event = "EVENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Count = "COUNT"
          }(xe || (xe = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }(Ne || (Ne = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Count = "COUNT",
              e.Size = "SIZE"
          }(Me || (Me = {})),
          function(e) {
              e.Any = "ANY",
              e.Portrait = "PORTRAIT",
              e.Landscape = "LANDSCAPE"
          }(Le || (Le = {})),
          function(e) {
              e.Day = "DAY",
              e.Month = "MONTH",
              e.Year = "YEAR"
          }(je || (je = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }(Fe || (Fe = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Count = "COUNT"
          }(Ue || (Ue = {})),
          function(e) {
              e.GameIcon = "GAME_ICON",
              e.GameIcon4X3 = "GAME_ICON4X3",
              e.GameIcon3X4 = "GAME_ICON3X4",
              e.GameCover = "GAME_COVER",
              e.GameCoverPortrait = "GAME_COVER_PORTRAIT",
              e.GameBackground = "GAME_BACKGROUND",
              e.GameScreenshotAlbum = "GAME_SCREENSHOT_ALBUM",
              e.GameScreenshotPortrait = "GAME_SCREENSHOT_PORTRAIT"
          }(Ge || (Ge = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }($e || ($e = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Count = "COUNT"
          }(Be || (Be = {})),
          function(e) {
              e.En = "EN",
              e.Fr = "FR",
              e.It = "IT",
              e.De = "DE",
              e.Es = "ES",
              e.Zh = "ZH",
              e.Pt = "PT",
              e.Ko = "KO",
              e.Ja = "JA",
              e.Ru = "RU",
              e.Tr = "TR",
              e.Ar = "AR",
              e.Hi = "HI",
              e.Id = "ID"
          }(Ve || (Ve = {})),
          function(e) {
              e.Android = "ANDROID"
          }(qe || (qe = {})),
          function(e) {
              e.Add = "ADD",
              e.Remove = "REMOVE",
              e.Set = "SET"
          }(We || (We = {})),
          function(e) {
              e.PlayerField = "PLAYER_FIELD"
          }(ze || (ze = {})),
          function(e) {
              e.InvitationSent = "INVITATION_SENT",
              e.InProject = "IN_PROJECT"
          }(Ye || (Ye = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(Ke || (Ke = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Avg = "AVG",
              e.Peak = "PEAK"
          }(Je || (Je = {})),
          function(e) {
              e.New = "NEW",
              e.Paid = "PAID"
          }(Ze || (Ze = {})),
          function(e) {
              e.Company = "COMPANY",
              e.Individual = "INDIVIDUAL",
              e.SoleProprietor = "SOLE_PROPRIETOR"
          }(He || (He = {})),
          function(e) {
              e.Xsolla = "XSOLLA"
          }(Xe || (Xe = {})),
          function(e) {
              e.Telegram = "TELEGRAM",
              e.GooglePlay = "GOOGLE_PLAY",
              e.Yandex = "YANDEX",
              e.Vk = "VK",
              e.Ok = "OK",
              e.GameMonetize = "GAME_MONETIZE",
              e.GameDistribution = "GAME_DISTRIBUTION",
              e.CrazyGames = "CRAZY_GAMES",
              e.Smartmarket = "SMARTMARKET",
              e.Fb = "FB",
              e.Poki = "POKI",
              e.Gamepix = "GAMEPIX",
              e.VkPlay = "VK_PLAY",
              e.WgPlayground = "WG_PLAYGROUND",
              e.Beeline = "BEELINE",
              e.Kongregate = "KONGREGATE",
              e.Playdeck = "PLAYDECK",
              e.Custom = "CUSTOM",
              e.AppGallery = "APP_GALLERY",
              e.GalaxyStore = "GALAXY_STORE",
              e.OneStore = "ONE_STORE",
              e.AmazonAppstore = "AMAZON_APPSTORE",
              e.XiaomiGetapps = "XIAOMI_GETAPPS",
              e.Aptoide = "APTOIDE",
              e.Rustore = "RUSTORE",
              e.Android = "ANDROID",
              e.None = "NONE"
          }(Qe || (Qe = {})),
          function(e) {
              e.Local = "LOCAL",
              e.Platform = "PLATFORM",
              e.Cloud = "CLOUD"
          }(et || (et = {})),
          function(e) {
              e.Player = "PLAYER",
              e.Product = "PRODUCT",
              e.Platform = "PLATFORM",
              e.Consumed = "CONSUMED",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(tt || (tt = {})),
          function(e) {
              e.Player = "PLAYER",
              e.Product = "PRODUCT",
              e.Platform = "PLATFORM",
              e.Consumed = "CONSUMED",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Total = "TOTAL",
              e.Price = "PRICE"
          }(rt || (rt = {})),
          function(e) {
              e.Common = "COMMON",
              e.Uncommon = "UNCOMMON",
              e.Rare = "RARE",
              e.Epic = "EPIC",
              e.Legendary = "LEGENDARY",
              e.Mythic = "MYTHIC"
          }(nt || (nt = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(it || (it = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.RetentionDay = "RETENTION_DAY",
              e.RetentionWeek = "RETENTION_WEEK",
              e.RetentionMonth = "RETENTION_MONTH",
              e.NewUsersDay = "NEW_USERS_DAY",
              e.NewUsersWeek = "NEW_USERS_WEEK",
              e.NewUsersMonth = "NEW_USERS_MONTH",
              e.ReturnedUsersDay = "RETURNED_USERS_DAY",
              e.ReturnedUsersWeek = "RETURNED_USERS_WEEK",
              e.ReturnedUsersMonth = "RETURNED_USERS_MONTH"
          }(st || (st = {})),
          function(e) {
              e.Common = "COMMON"
          }(at || (at = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(ot || (ot = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.GivenCount = "GIVEN_COUNT",
              e.AcceptedCount = "ACCEPTED_COUNT"
          }(ct || (ct = {})),
          function(e) {
              e.ActiveDays = "ACTIVE_DAYS",
              e.ActiveDaysConsecutive = "ACTIVE_DAYS_CONSECUTIVE"
          }(lt || (lt = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(ht || (ht = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.SessionTime = "SESSION_TIME",
              e.SessionsCount = "SESSIONS_COUNT",
              e.InGameTime = "IN_GAME_TIME"
          }(ut || (ut = {})),
          function(e) {
              e.Px = "PX",
              e.Percent = "PERCENT"
          }(dt || (dt = {})),
          function(e) {
              e.Asc = "ASC",
              e.Desc = "DESC"
          }(ft || (ft = {})),
          function(e) {
              e.Account = "Account",
              e.Project = "Project",
              e.Platform = "Platform"
          }(pt || (pt = {})),
          function(e) {
              e.Desktop = "Desktop",
              e.Ios = "IOS",
              e.Android = "Android",
              e.Tv = "TV"
          }(vt || (vt = {})),
          function(e) {
              e.Honorary = "HONORARY",
              e.Release = "RELEASE",
              e.Absolute = "ABSOLUTE",
              e.Start = "START",
              e.Advanced = "ADVANCED",
              e.Pro = "PRO",
              e.Enterprise = "ENTERPRISE"
          }(yt || (yt = {})),
          function(e) {
              e.Common = "COMMON",
              e.Scheduler = "SCHEDULER",
              e.Event = "EVENT"
          }(mt || (mt = {})),
          function(e) {
              e.Trigger = "TRIGGER",
              e.Type = "TYPE",
              e.Entity = "ENTITY",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(gt || (gt = {})),
          function(e) {
              e.Trigger = "TRIGGER",
              e.Type = "TYPE",
              e.Entity = "ENTITY",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Count = "COUNT"
          }(wt || (wt = {})),
          function(e) {
              e.Player = "PLAYER"
          }(bt || (bt = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Plan = "PLAN",
              e.Action = "ACTION",
              e.Project = "PROJECT"
          }(Et || (Et = {})),
          function(e) {
              e.Date = "DATE",
              e.Action = "ACTION",
              e.Requests = "REQUESTS",
              e.Plan = "PLAN",
              e.Platform = "PLATFORM"
          }(Pt || (Pt = {})),
          function(e) {
              e.PurchasePlayerPurchase = "PurchasePlayerPurchase",
              e.ConsumePlayerPurchase = "ConsumePlayerPurchase",
              e.ExpirePlayerSubscription = "ExpirePlayerSubscription",
              e.CancelPlayerSubscription = "CancelPlayerSubscription",
              e.ResumePlayerSubscription = "ResumePlayerSubscription",
              e.UnlockPlayerAchievement = "UnlockPlayerAchievement",
              e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress",
              e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel",
              e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel",
              e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel",
              e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel",
              e.PlayerJoinChannel = "PlayerJoinChannel",
              e.PlayerLeaveChannel = "PlayerLeaveChannel",
              e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel",
              e.PlayerAcceptJoinRequestToChannel = "PlayerAcceptJoinRequestToChannel",
              e.PlayerRejectJoinRequestToChannel = "PlayerRejectJoinRequestToChannel",
              e.PlayerKickFromChannel = "PlayerKickFromChannel",
              e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage",
              e.PlayerSendFeedMessage = "PlayerSendFeedMessage",
              e.PlayerSendMessage = "PlayerSendMessage",
              e.PlayerEditMessage = "PlayerEditMessage",
              e.PlayerDeleteMessage = "PlayerDeleteMessage",
              e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel",
              e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel",
              e.PlayerCreateChannel = "PlayerCreateChannel",
              e.PlayerUpdateChannel = "PlayerUpdateChannel",
              e.PlayerDeleteChannel = "PlayerDeleteChannel",
              e.UploadPlayerFile = "UploadPlayerFile",
              e.UploadPlayerImage = "UploadPlayerImage",
              e.PlayerPublishRecord = "PlayerPublishRecord",
              e.SyncPlayer = "SyncPlayer",
              e.GetPlayer = "GetPlayer",
              e.GivePlayerReward = "GivePlayerReward",
              e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue",
              e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue"
          }(St || (St = {})),
          oe`
  mutation createProject($input: CreateProjectInput!) {
result: CreateProject(input: $input) {
  ...project
}
}
  ${oe`
  fragment project on Project {
id
name
icon
publicToken
orderedAchievementsGroups
achievements {
  isLockedVisible
  isLockedDescriptionVisible
  enableUnlockToast
}
origins {
  origin
  isDev
  isActive
}
config {
  lang
  avatarGenerator
  ymCounterId
  gtagCounterId
  showLoader
  showReqCounter
}
assets {
  icon {
    ...imageAsset
  }
}
}
  ${oe`
  fragment imageAsset on Asset {
__typename
... on ImageAsset {
  type
  resources {
    src
    crop {
      left
      top
      width
      height
    }
  }
}
}
  `}`}`
      }
      ,
      1049: (e, t, r) => {
          "use strict";
          function n(e, t, r) {
              return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, r)
          }
          r.d(t, {
              Z: () => n
          })
      }
      ,
      6480: (e, t, r) => {
          "use strict";
          function n(e, t) {
              return !e || t && "none" !== t ? t : "last"
          }
          function i(e) {
              return e > 10 ? 10 : e
          }
          function s(e, t) {
              return e || t.limit
          }
          function a(e, t) {
              const r = new Set([...e.map((e => e.id)), ...t.map((e => e.id))]);
              return e.forEach((e => {
                  r.has(e.id) && r.delete(e.id)
              }
              )),
              r.size
          }
          r.d(t, {
              oo: () => n,
              pY: () => i,
              wQ: () => s,
              q3: () => a
          })
      }
      ,
      6558: (e, t, r) => {
          "use strict";
          r.d(t, {
              Yd: () => n,
              kg: () => i,
              EK: () => s
          });
          class n {
              constructor() {
                  this.isCollectingLogs = !0,
                  this.logs = [],
                  this.log = (...e) => {
                      this.collectLogs("log", e),
                      console.log(this.name, ...e)
                  }
                  ,
                  this.info = (...e) => {
                      this.collectLogs("info", e),
                      console.info(this.name, ...e)
                  }
                  ,
                  this.warn = (...e) => {
                      this.collectLogs("warn", e),
                      console.warn(this.name, ...e)
                  }
                  ,
                  this.error = (...e) => {
                      this.collectLogs("error", e),
                      console.error(this.name, ...e)
                  }
                  ,
                  this.assert = (...e) => {
                      this.collectLogs("assert", e),
                      console.assert(...e, {
                          name: this.name
                      })
                  }
              }
              get name() {
                  return `${globalThis.__SDKProvider || "SDK"}`
              }
              stopCollect() {
                  this.isCollectingLogs = !1,
                  this.logs = []
              }
              collectLogs(e, t) {
                  this.isCollectingLogs && this.logs.push({
                      type: e,
                      args: t
                  })
              }
          }
          let i = new n;
          const s = e => i = e
      }
      ,
      1437: (e, t, r) => {
          "use strict";
          r.d(t, {
              p: () => i
          });
          var n = r(8293);
          function i(e) {
              const t = (0,
              n._)(n.s)
                , r = new Image;
              return r.onload = () => t.done(r),
              r.onerror = () => t.abort(),
              r.onabort = () => t.abort(),
              r.src = e,
              t.ready
          }
      }
      ,
      6041: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => a
          });
          const n = 2048
            , i = /cdn.(eponesh|gamepush|spellsync).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/
            , s = /-(\d+)x(\d+)\.\w+$/;
          function a(e, t, r, a) {
              const o = i.exec(e);
              if (!o)
                  return e;
              const [c,l] = function(e) {
                  const t = s.exec(e);
                  return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0]
              }(e);
              c && t > c && (t = c),
              l && r > l && (r = l),
              t > n && (t = n),
              r > n && (r = n);
              const [,h,,,,u] = o;
              return `https://cdn.${h}.com/static/${t || "-"}x${r || "-"}${a ? "crop" : ""}/${u}`
          }
      }
      ,
      8866: (e, t, r) => {
          "use strict";
          function n(e) {
              return new Promise((t => setTimeout(t, e)))
          }
          r.d(t, {
              Z: () => n
          })
      }
      ,
      4835: (e, t, r) => {
          "use strict";
          r.d(t, {
              Z: () => n
          });
          const n = {
              app: {
                  trophy: "./sdk-bundle/static/icons/trophy.svg"
              },
              cdn: {
                  trophy: "./sdk-bundle/static/icons/reward.png"
              }
          }
      }
      ,
      8293: (e, t, r) => {
          "use strict";
          r.d(t, {
              s: () => i,
              _: () => s
          });
          var n = r(6558);
          const i = {
              timeout: 5e3
          };
          function s({timeout: e=0}={}) {
              let t = !1;
              const r = {}
                , i = new Promise(( (e, s) => {
                  r.done = r => {
                      if (!t)
                          return t = !0,
                          e(r),
                          i
                  }
                  ,
                  r.abort = e => {
                      if (!t)
                          return t = !0,
                          n.kg.error(e),
                          s(e),
                          i
                  }
              }
              ));
              return e && setTimeout(( () => {
                  t || r.abort(`Timeout ${e}ms exceeded`)
              }
              ), e),
              r.ready = i,
              r
          }
      }
      ,
      5942: (e, t, r) => {
          "use strict";
          var n;
          r.d(t, {
              z: () => n
          }),
          function(e) {
              e.TELEGRAM = "TELEGRAM",
              e.YANDEX = "YANDEX",
              e.VK = "VK",
              e.OK = "OK",
              e.GAME_MONETIZE = "GAME_MONETIZE",
              e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION",
              e.WG_PLAYGROUND = "WG_PLAYGROUND",
              e.CRAZY_GAMES = "CRAZY_GAMES",
              e.SMARTMARKET = "SMARTMARKET",
              e.GAMEPIX = "GAMEPIX",
              e.POKI = "POKI",
              e.VK_PLAY = "VK_PLAY",
              e.BEELINE = "BEELINE",
              e.KONGREGATE = "KONGREGATE",
              e.CUSTOM = "CUSTOM",
              e.PLAYDECK = "PLAYDECK",
              e.GOOGLE_PLAY = "GOOGLE_PLAY",
              e.APP_GALLERY = "APP_GALLERY",
              e.GALAXY_STORE = "GALAXY_STORE",
              e.ONE_STORE = "ONE_STORE",
              e.AMAZON_APPSTORE = "AMAZON_APPSTORE",
              e.XIAOMI_GETAPPS = "XIAOMI_GETAPPS",
              e.APTOIDE = "APTOIDE",
              e.RUSTORE = "RUSTORE",
              e.ANDROID = "ANDROID",
              e.FOTOSTRANA = "FOTOSTRANA",
              e.NONE = "NONE"
          }(n || (n = {}))
      }
      ,
      1438: (e, t, r) => {
          "use strict";
          var n;
          r.d(t, {
              i: () => n
          }),
          function(e) {
              e.New = "NEW",
              e.Paid = "PAID"
          }(n || (n = {}))
      }
      ,
      180: (e, t, r) => {
          "use strict";
          r.d(t, {
              $: () => n,
              pQ: () => a,
              D4: () => o,
              iA: () => h
          });
          var n, i, s, a, o, c = r(5942);
          !function(e) {
              e.PRELOADER = "PRELOADER",
              e.FULLSCREEN = "FULLSCREEN",
              e.REWARDED = "REWARDED",
              e.STICKY = "STICKY"
          }(n || (n = {})),
          function(e) {
              e.YandexSimpleMonetization = "YandexSimpleMonetization",
              e.Adfox = "ADFOX",
              e.Gpt = "GPT",
              e.Rtb = "RTB",
              e.TmAds = "TMADS",
              e.Adsgram = "ADSGRAM"
          }(i || (i = {})),
          function(e) {
              e.top = "TOP",
              e.bottom = "BOTTOM"
          }(s || (s = {})),
          function(e) {
              e.Local = "LOCAL",
              e.Platform = "PLATFORM",
              e.Cloud = "CLOUD"
          }(a || (a = {})),
          function(e) {
              e.Xsolla = "XSOLLA"
          }(o || (o = {}));
          const l = () => ({
              type: n.STICKY,
              enabled: !1,
              adServer: null,
              adServerDesktop: null,
              name: "",
              description: "",
              bannerId: "",
              desktopBannerId: "",
              frequency: 0,
              refreshInterval: 0,
              maxWidth: 0,
              maxHeight: 0,
              maxWidthDimension: "PX",
              maxHeightDimension: "PX",
              desktopMaxWidth: 0,
              desktopMaxHeight: 0,
              desktopMaxWidthDimension: "PX",
              desktopMaxHeightDimension: "PX",
              fitCanvas: !1,
              position: "bottom",
              limits: {
                  hour: 0,
                  day: 0,
                  session: 0
              },
              useNative: !0
          })
            , h = {
              appId: "",
              communityLinks: {
                  en: ""
              },
              gameLink: "",
              tag: "",
              publicKey: "",
              progressSaveFormat: a.Platform,
              alwaysSyncPublicFields: !1,
              customAdsConfig: {
                  id: "",
                  name: "",
                  adFoxOwnerId: "",
                  tmAdsAppKey: "",
                  description: "",
                  configs: {
                      web: {
                          banners: [Object.assign(Object.assign({}, l()), {
                              type: n.FULLSCREEN
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.PRELOADER
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.REWARDED
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.STICKY
                          })]
                      },
                      android: {
                          banners: [Object.assign(Object.assign({}, l()), {
                              type: n.FULLSCREEN
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.PRELOADER
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.REWARDED
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.STICKY
                          })]
                      },
                      telegram: {
                          banners: [Object.assign(Object.assign({}, l()), {
                              type: n.FULLSCREEN
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.PRELOADER
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.REWARDED
                          }), Object.assign(Object.assign({}, l()), {
                              type: n.STICKY
                          })]
                      }
                  }
              },
              customAdsConfigId: "",
              paymentsConfig: {
                  id: "",
                  name: "",
                  description: "",
                  sandbox: !0,
                  configs: {
                      web: {
                          activeService: null
                      },
                      android: {
                          activeService: null
                      }
                  }
              },
              paymentsConfigId: "",
              authConfig: {
                  id: "",
                  name: "",
                  description: "",
                  xsollaConfig: {
                      loginProjectId: ""
                  },
                  configs: {
                      web: {
                          activeService: null
                      },
                      android: {
                          activeService: null
                      }
                  }
              },
              authConfigId: "",
              type: c.z.NONE,
              payload: null,
              banners: [Object.assign(Object.assign({}, l()), {
                  type: n.FULLSCREEN,
                  enabled: !0,
                  frequency: 60
              }), Object.assign(Object.assign({}, l()), {
                  type: n.PRELOADER,
                  enabled: !1
              }), Object.assign(Object.assign({}, l()), {
                  type: n.REWARDED,
                  enabled: !0
              }), Object.assign(Object.assign({}, l()), {
                  type: n.STICKY,
                  enabled: !1
              })]
          }
      }
      ,
      4414: (e, t, r) => {
          "use strict";
          function n(e, t) {
              return function(e) {
                  if (Array.isArray(e))
                      return e
              }(e) || function(e, t) {
                  var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                  if (null != r) {
                      var n, i, s, a, o = [], c = !0, l = !1;
                      try {
                          if (s = (r = r.call(e)).next,
                          0 === t) {
                              if (Object(r) !== r)
                                  return;
                              c = !1
                          } else
                              for (; !(c = (n = s.call(r)).done) && (o.push(n.value),
                              o.length !== t); c = !0)
                                  ;
                      } catch (e) {
                          l = !0,
                          i = e
                      } finally {
                          try {
                              if (!c && null != r.return && (a = r.return(),
                              Object(a) !== a))
                                  return
                          } finally {
                              if (l)
                                  throw i
                          }
                      }
                      return o
                  }
              }(e, t) || c(e, t) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function i(e, t) {
              var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!r) {
                  if (Array.isArray(e) || (r = c(e)) || t && e && "number" == typeof e.length) {
                      r && (e = r);
                      var n = 0
                        , i = function() {};
                      return {
                          s: i,
                          n: function() {
                              return n >= e.length ? {
                                  done: !0
                              } : {
                                  done: !1,
                                  value: e[n++]
                              }
                          },
                          e: function(e) {
                              throw e
                          },
                          f: i
                      }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }
              var s, a = !0, o = !1;
              return {
                  s: function() {
                      r = r.call(e)
                  },
                  n: function() {
                      var e = r.next();
                      return a = e.done,
                      e
                  },
                  e: function(e) {
                      o = !0,
                      s = e
                  },
                  f: function() {
                      try {
                          a || null == r.return || r.return()
                      } finally {
                          if (o)
                              throw s
                      }
                  }
              }
          }
          function s(e, t, r) {
              return (t = function(e) {
                  var t = function(e, t) {
                      if ("object" != h(e) || !e)
                          return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                          var n = r.call(e, t);
                          if ("object" != h(n))
                              return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.")
                      }
                      return String(e)
                  }(e, "string");
                  return "symbol" == h(t) ? t : t + ""
              }(t))in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = r,
              e
          }
          function a() {
              a = function() {
                  return t
              }
              ;
              var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, i = Object.defineProperty || function(e, t, r) {
                  e[t] = r.value
              }
              , s = "function" == typeof Symbol ? Symbol : {}, o = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
              function u(e, t, r) {
                  return Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  }),
                  e[t]
              }
              try {
                  u({}, "")
              } catch (e) {
                  u = function(e, t, r) {
                      return e[t] = r
                  }
              }
              function d(e, t, r, n) {
                  var s = t && t.prototype instanceof g ? t : g
                    , a = Object.create(s.prototype)
                    , o = new I(n || []);
                  return i(a, "_invoke", {
                      value: O(e, r, o)
                  }),
                  a
              }
              function f(e, t, r) {
                  try {
                      return {
                          type: "normal",
                          arg: e.call(t, r)
                      }
                  } catch (e) {
                      return {
                          type: "throw",
                          arg: e
                      }
                  }
              }
              t.wrap = d;
              var p = "suspendedStart"
                , v = "executing"
                , y = "completed"
                , m = {};
              function g() {}
              function w() {}
              function b() {}
              var E = {};
              u(E, o, (function() {
                  return this
              }
              ));
              var P = Object.getPrototypeOf
                , S = P && P(P(D([])));
              S && S !== r && n.call(S, o) && (E = S);
              var _ = b.prototype = g.prototype = Object.create(E);
              function A(e) {
                  ["next", "throw", "return"].forEach((function(t) {
                      u(e, t, (function(e) {
                          return this._invoke(t, e)
                      }
                      ))
                  }
                  ))
              }
              function T(e, t) {
                  function r(i, s, a, o) {
                      var c = f(e[i], e, s);
                      if ("throw" !== c.type) {
                          var l = c.arg
                            , u = l.value;
                          return u && "object" == h(u) && n.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                              r("next", e, a, o)
                          }
                          ), (function(e) {
                              r("throw", e, a, o)
                          }
                          )) : t.resolve(u).then((function(e) {
                              l.value = e,
                              a(l)
                          }
                          ), (function(e) {
                              return r("throw", e, a, o)
                          }
                          ))
                      }
                      o(c.arg)
                  }
                  var s;
                  i(this, "_invoke", {
                      value: function(e, n) {
                          function i() {
                              return new t((function(t, i) {
                                  r(e, n, t, i)
                              }
                              ))
                          }
                          return s = s ? s.then(i, i) : i()
                      }
                  })
              }
              function O(t, r, n) {
                  var i = p;
                  return function(s, a) {
                      if (i === v)
                          throw Error("Generator is already running");
                      if (i === y) {
                          if ("throw" === s)
                              throw a;
                          return {
                              value: e,
                              done: !0
                          }
                      }
                      for (n.method = s,
                      n.arg = a; ; ) {
                          var o = n.delegate;
                          if (o) {
                              var c = k(o, n);
                              if (c) {
                                  if (c === m)
                                      continue;
                                  return c
                              }
                          }
                          if ("next" === n.method)
                              n.sent = n._sent = n.arg;
                          else if ("throw" === n.method) {
                              if (i === p)
                                  throw i = y,
                                  n.arg;
                              n.dispatchException(n.arg)
                          } else
                              "return" === n.method && n.abrupt("return", n.arg);
                          i = v;
                          var l = f(t, r, n);
                          if ("normal" === l.type) {
                              if (i = n.done ? y : "suspendedYield",
                              l.arg === m)
                                  continue;
                              return {
                                  value: l.arg,
                                  done: n.done
                              }
                          }
                          "throw" === l.type && (i = y,
                          n.method = "throw",
                          n.arg = l.arg)
                      }
                  }
              }
              function k(t, r) {
                  var n = r.method
                    , i = t.iterator[n];
                  if (i === e)
                      return r.delegate = null,
                      "throw" === n && t.iterator.return && (r.method = "return",
                      r.arg = e,
                      k(t, r),
                      "throw" === r.method) || "return" !== n && (r.method = "throw",
                      r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                      m;
                  var s = f(i, t.iterator, r.arg);
                  if ("throw" === s.type)
                      return r.method = "throw",
                      r.arg = s.arg,
                      r.delegate = null,
                      m;
                  var a = s.arg;
                  return a ? a.done ? (r[t.resultName] = a.value,
                  r.next = t.nextLoc,
                  "return" !== r.method && (r.method = "next",
                  r.arg = e),
                  r.delegate = null,
                  m) : a : (r.method = "throw",
                  r.arg = new TypeError("iterator result is not an object"),
                  r.delegate = null,
                  m)
              }
              function C(e) {
                  var t = {
                      tryLoc: e[0]
                  };
                  1 in e && (t.catchLoc = e[1]),
                  2 in e && (t.finallyLoc = e[2],
                  t.afterLoc = e[3]),
                  this.tryEntries.push(t)
              }
              function R(e) {
                  var t = e.completion || {};
                  t.type = "normal",
                  delete t.arg,
                  e.completion = t
              }
              function I(e) {
                  this.tryEntries = [{
                      tryLoc: "root"
                  }],
                  e.forEach(C, this),
                  this.reset(!0)
              }
              function D(t) {
                  if (t || "" === t) {
                      var r = t[o];
                      if (r)
                          return r.call(t);
                      if ("function" == typeof t.next)
                          return t;
                      if (!isNaN(t.length)) {
                          var i = -1
                            , s = function r() {
                              for (; ++i < t.length; )
                                  if (n.call(t, i))
                                      return r.value = t[i],
                                      r.done = !1,
                                      r;
                              return r.value = e,
                              r.done = !0,
                              r
                          };
                          return s.next = s
                      }
                  }
                  throw new TypeError(h(t) + " is not iterable")
              }
              return w.prototype = b,
              i(_, "constructor", {
                  value: b,
                  configurable: !0
              }),
              i(b, "constructor", {
                  value: w,
                  configurable: !0
              }),
              w.displayName = u(b, l, "GeneratorFunction"),
              t.isGeneratorFunction = function(e) {
                  var t = "function" == typeof e && e.constructor;
                  return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
              }
              ,
              t.mark = function(e) {
                  return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b,
                  u(e, l, "GeneratorFunction")),
                  e.prototype = Object.create(_),
                  e
              }
              ,
              t.awrap = function(e) {
                  return {
                      __await: e
                  }
              }
              ,
              A(T.prototype),
              u(T.prototype, c, (function() {
                  return this
              }
              )),
              t.AsyncIterator = T,
              t.async = function(e, r, n, i, s) {
                  void 0 === s && (s = Promise);
                  var a = new T(d(e, r, n, i),s);
                  return t.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                      return e.done ? e.value : a.next()
                  }
                  ))
              }
              ,
              A(_),
              u(_, l, "Generator"),
              u(_, o, (function() {
                  return this
              }
              )),
              u(_, "toString", (function() {
                  return "[object Generator]"
              }
              )),
              t.keys = function(e) {
                  var t = Object(e)
                    , r = [];
                  for (var n in t)
                      r.push(n);
                  return r.reverse(),
                  function e() {
                      for (; r.length; ) {
                          var n = r.pop();
                          if (n in t)
                              return e.value = n,
                              e.done = !1,
                              e
                      }
                      return e.done = !0,
                      e
                  }
              }
              ,
              t.values = D,
              I.prototype = {
                  constructor: I,
                  reset: function(t) {
                      if (this.prev = 0,
                      this.next = 0,
                      this.sent = this._sent = e,
                      this.done = !1,
                      this.delegate = null,
                      this.method = "next",
                      this.arg = e,
                      this.tryEntries.forEach(R),
                      !t)
                          for (var r in this)
                              "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                  },
                  stop: function() {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type)
                          throw e.arg;
                      return this.rval
                  },
                  dispatchException: function(t) {
                      if (this.done)
                          throw t;
                      var r = this;
                      function i(n, i) {
                          return o.type = "throw",
                          o.arg = t,
                          r.next = n,
                          i && (r.method = "next",
                          r.arg = e),
                          !!i
                      }
                      for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                          var a = this.tryEntries[s]
                            , o = a.completion;
                          if ("root" === a.tryLoc)
                              return i("end");
                          if (a.tryLoc <= this.prev) {
                              var c = n.call(a, "catchLoc")
                                , l = n.call(a, "finallyLoc");
                              if (c && l) {
                                  if (this.prev < a.catchLoc)
                                      return i(a.catchLoc, !0);
                                  if (this.prev < a.finallyLoc)
                                      return i(a.finallyLoc)
                              } else if (c) {
                                  if (this.prev < a.catchLoc)
                                      return i(a.catchLoc, !0)
                              } else {
                                  if (!l)
                                      throw Error("try statement without catch or finally");
                                  if (this.prev < a.finallyLoc)
                                      return i(a.finallyLoc)
                              }
                          }
                      }
                  },
                  abrupt: function(e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                          var i = this.tryEntries[r];
                          if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                              var s = i;
                              break
                          }
                      }
                      s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                      var a = s ? s.completion : {};
                      return a.type = e,
                      a.arg = t,
                      s ? (this.method = "next",
                      this.next = s.finallyLoc,
                      m) : this.complete(a)
                  },
                  complete: function(e, t) {
                      if ("throw" === e.type)
                          throw e.arg;
                      return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                      this.method = "return",
                      this.next = "end") : "normal" === e.type && t && (this.next = t),
                      m
                  },
                  finish: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var r = this.tryEntries[t];
                          if (r.finallyLoc === e)
                              return this.complete(r.completion, r.afterLoc),
                              R(r),
                              m
                      }
                  },
                  catch: function(e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                          var r = this.tryEntries[t];
                          if (r.tryLoc === e) {
                              var n = r.completion;
                              if ("throw" === n.type) {
                                  var i = n.arg;
                                  R(r)
                              }
                              return i
                          }
                      }
                      throw Error("illegal catch attempt")
                  },
                  delegateYield: function(t, r, n) {
                      return this.delegate = {
                          iterator: D(t),
                          resultName: r,
                          nextLoc: n
                      },
                      "next" === this.method && (this.arg = e),
                      m
                  }
              },
              t
          }
          function o(e) {
              return function(e) {
                  if (Array.isArray(e))
                      return l(e)
              }(e) || function(e) {
                  if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                      return Array.from(e)
              }(e) || c(e) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function c(e, t) {
              if (e) {
                  if ("string" == typeof e)
                      return l(e, t);
                  var r = {}.toString.call(e).slice(8, -1);
                  return "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
              }
          }
          function l(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var r = 0, n = Array(t); r < t; r++)
                  n[r] = e[r];
              return n
          }
          function h(e) {
              return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          function u(e) {
              return "string" == typeof e
          }
          function d(e) {
              return "number" == typeof e && Number.isFinite(e)
          }
          function f(e) {
              return "boolean" == typeof e
          }
          function p(e) {
              return void 0 === e
          }
          function v(e) {
              return null === e
          }
          function y(e) {
              return v(e) || p(e)
          }
          r.d(t, {
              Uo: () => I,
              GH: () => U,
              Ff: () => L,
              h$: () => j,
              lR: () => F
          });
          var m = [u, d, f, v, p, function(e) {
              return "bigint" == typeof e
          }
          , function(e) {
              return "symbol" == h(e)
          }
          ];
          function g(e) {
              return Array.isArray(e)
          }
          function w(e) {
              if (function(e) {
                  return m.some((function(t) {
                      return t(e)
                  }
                  ))
              }(e))
                  return !1;
              var t = Object.getPrototypeOf(e);
              return null === t || t === Object.prototype
          }
          function b(e) {
              return !y(e)
          }
          function E(e) {
              throw u(e) ? new Error(e) : e
          }
          function P(e) {
              return {
                  and: function() {
                      return P(e)
                  },
                  andThen: function() {
                      return P(e)
                  },
                  err: function() {
                      return A(e)
                  },
                  expect: function(e) {
                      return E(e)
                  },
                  expectErr: function() {
                      return e
                  },
                  inspect: function() {
                      return P(e)
                  },
                  inspectErr: function(t) {
                      return t(e),
                      P(e)
                  },
                  isErr: function() {
                      return !0
                  },
                  isErrAnd: function(t) {
                      return t(e)
                  },
                  isOk: function() {
                      return !1
                  },
                  isOkAnd: function() {
                      return !1
                  },
                  map: function() {
                      return P(e)
                  },
                  mapErr: function(t) {
                      return P(t(e))
                  },
                  mapOr: function(e) {
                      return e
                  },
                  mapOrElse: function(t) {
                      return t(e)
                  },
                  match: function(t, r) {
                      return r(e)
                  },
                  ok: function() {
                      return _
                  },
                  or: function(e) {
                      return e
                  },
                  orElse: function(t) {
                      return t(e)
                  },
                  unwrap: function() {
                      return E("called Result.unwrap on an `Err` value")
                  },
                  unwrapErr: function() {
                      return e
                  },
                  unwrapOr: function(e) {
                      return e
                  },
                  unwrapOrElse: function(t) {
                      return t(e)
                  }
              }
          }
          function S(e) {
              return {
                  and: function(e) {
                      return e
                  },
                  andThen: function(t) {
                      return t(e)
                  },
                  err: function() {
                      return _
                  },
                  expect: function() {
                      return e
                  },
                  expectErr: function(e) {
                      return E(e)
                  },
                  inspect: function(t) {
                      return t(e),
                      S(e)
                  },
                  inspectErr: function() {
                      return S(e)
                  },
                  isErr: function() {
                      return !1
                  },
                  isErrAnd: function() {
                      return !1
                  },
                  isOk: function() {
                      return !0
                  },
                  isOkAnd: function(t) {
                      return t(e)
                  },
                  map: function(t) {
                      return S(t(e))
                  },
                  mapErr: function() {
                      return S(e)
                  },
                  mapOr: function(t, r) {
                      return r(e)
                  },
                  mapOrElse: function(t, r) {
                      return r(e)
                  },
                  match: function(t) {
                      return t(e)
                  },
                  ok: function() {
                      return A(e)
                  },
                  or: function() {
                      return S(e)
                  },
                  orElse: function() {
                      return S(e)
                  },
                  unwrap: function() {
                      return e
                  },
                  unwrapErr: function() {
                      return E("called Result.unwrapErr on an `Ok` value")
                  },
                  unwrapOr: function() {
                      return e
                  },
                  unwrapOrElse: function() {
                      return e
                  }
              }
          }
          var _ = {
              and: function() {
                  return _
              },
              andThen: function() {
                  return _
              },
              expect: function(e) {
                  return E(e)
              },
              filter: function() {
                  return _
              },
              inspect: function() {
                  return _
              },
              isNone: function() {
                  return !0
              },
              isSome: function() {
                  return !1
              },
              isSomeAnd: function() {
                  return !1
              },
              map: function() {
                  return _
              },
              mapOr: function(e) {
                  return e
              },
              mapOrElse: function(e) {
                  return e()
              },
              match: function(e, t) {
                  return t()
              },
              or: function(e) {
                  return e
              },
              orElse: function(e) {
                  return e()
              },
              unwrap: function() {
                  return E("called Option.unwrap on a `None` value")
              },
              unwrapOr: function(e) {
                  return e
              },
              unwrapOrElse: function(e) {
                  return e()
              },
              okOr: function(e) {
                  return P(e)
              },
              okOrElse: function(e) {
                  return P(e())
              }
          };
          function A(e) {
              return {
                  and: function(e) {
                      return e
                  },
                  andThen: function(t) {
                      return t(e)
                  },
                  expect: function() {
                      return e
                  },
                  filter: function(t) {
                      return t(e) ? A(e) : _
                  },
                  inspect: function(t) {
                      return t(e),
                      A(e)
                  },
                  isNone: function() {
                      return !1
                  },
                  isSome: function() {
                      return !0
                  },
                  isSomeAnd: function(t) {
                      return t(e)
                  },
                  map: function(t) {
                      return A(t(e))
                  },
                  mapOr: function(t, r) {
                      return r(e)
                  },
                  mapOrElse: function(t, r) {
                      return r(e)
                  },
                  match: function(t) {
                      return t(e)
                  },
                  or: function() {
                      return A(e)
                  },
                  orElse: function() {
                      return A(e)
                  },
                  unwrap: function() {
                      return e
                  },
                  unwrapOr: function() {
                      return e
                  },
                  unwrapOrElse: function() {
                      return e
                  },
                  okOr: function() {
                      return S(e)
                  },
                  okOrElse: function() {
                      return S(e)
                  }
              }
          }
          function T(e) {
              return b(e) ? A(e) : _
          }
          function O(e, t) {
              return t < 0 ? e.length + t : t
          }
          function k(e, t) {
              return T(e[O(e, t)])
          }
          function C(e, t) {
              for (var r = Object.create(null), n = 0; n < e.length; n++) {
                  var i = e[n]
                    , s = t(i, n);
                  s in r || (r[s] = []),
                  r[s].push(i)
              }
              return r
          }
          function R(e) {
              var t, r = p(e) ? [] : Array.isArray(e) ? e : Array.from(e);
              return s(s(s(s(s(s(s(s(s(s(t = {}, Symbol.iterator, a().mark((function e() {
                  return a().wrap((function(e) {
                      for (; ; )
                          switch (e.prev = e.next) {
                          case 0:
                              return e.delegateYield(r[Symbol.iterator](), "t0", 1);
                          case 1:
                          case "end":
                              return e.stop()
                          }
                  }
                  ), e)
              }
              ))), "append", (function() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                  return R([].concat(o(r), t))
              }
              )), "at", (function(e) {
                  return k(r, e)
              }
              )), "concat", (function(e) {
                  return R([].concat(o(r), o(e)))
              }
              )), "compact", (function() {
                  return R(r.filter(b))
              }
              )), "drop", (function(e) {
                  return R(r.slice(e))
              }
              )), "each", (function(e) {
                  return r.forEach(e),
                  R(r)
              }
              )), "every", (function(e) {
                  return r.every(e)
              }
              )), "filter", (function(e) {
                  return R(r.filter(e))
              }
              )), "find", (function(e) {
                  return T(r.find(e))
              }
              )),
              s(s(s(s(s(s(s(s(s(s(t, "first", (function() {
                  return k(r, 0)
              }
              )), "group", (function(e) {
                  return C(r, e)
              }
              )), "groupBy", (function(e) {
                  return function(e, t) {
                      return C(e, (function(e) {
                          return e[t]
                      }
                      ))
                  }(r, e)
              }
              )), "includes", (function(e) {
                  return r.includes(e)
              }
              )), "insert", (function(e, t) {
                  return R(function(e, t, r) {
                      r = O(e, r);
                      var n = o(e);
                      return n.splice(r, 0, t),
                      n
                  }(r, e, t))
              }
              )), "isEmpty", (function() {
                  return 0 === r.length
              }
              )), "last", (function() {
                  return k(r, -1)
              }
              )), "len", (function() {
                  return r.length
              }
              )), "map", (function(e) {
                  return R(r.map(e))
              }
              )), "move", (function(e, t) {
                  return R(function(e, t, r) {
                      t = O(e, t),
                      r = O(e, r);
                      var n = o(e)
                        , i = n.splice(t, 1)[0];
                      return n.splice(r, 0, i),
                      n
                  }(r, e, t))
              }
              )),
              s(s(s(s(s(s(s(s(s(s(t, "prepend", (function() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                  return R([].concat(t, o(r)))
              }
              )), "reduce", (function(e, t) {
                  return r.reduce(t, e)
              }
              )), "remove", (function(e) {
                  return R(function(e, t) {
                      t = O(e, t);
                      var r = o(e);
                      return r.splice(t, 1),
                      r
                  }(r, e))
              }
              )), "reverse", (function() {
                  return R(o(r).reverse())
              }
              )), "shuffle", (function() {
                  return R(function(e) {
                      for (var t = o(e), r = t.length - 1; r > 0; r--) {
                          var n = Math.floor(Math.random() * (r + 1))
                            , i = t[r];
                          t[r] = t[n],
                          t[n] = i
                      }
                      return t
                  }(r))
              }
              )), "some", (function(e) {
                  return r.some(e)
              }
              )), "sort", (function(e) {
                  return R(o(r).sort(e))
              }
              )), "swap", (function(e, t) {
                  return R(function(e, t, r) {
                      t = O(e, t),
                      r = O(e, r);
                      var n = o(e)
                        , i = n[t];
                      return n[t] = n[r],
                      n[r] = i,
                      n
                  }(r, e, t))
              }
              )), "take", (function(e) {
                  return R(r.slice(0, e))
              }
              )), "toArray", (function() {
                  return o(r)
              }
              )),
              s(t, "toJSON", (function() {
                  return o(r)
              }
              ))
          }
          var I, D = function(e) {
              return function(t) {
                  if (!g(t))
                      return P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      });
                  for (var r = new Array(t.length), n = 0; n < t.length; n++) {
                      var i = e(t[n]);
                      if (i.isErr())
                          return P(i.unwrapErr());
                      r.push(i.unwrap())
                  }
                  return S(r)
              }
          }, x = Object.freeze(Object.defineProperty({
              __proto__: null,
              array: D,
              boolean: function(e) {
                  return function(t) {
                      if (null != e && e.coerce)
                          if (u(t))
                              switch (t.toLowerCase()) {
                              case "true":
                              case "yes":
                              case "on":
                                  t = !0;
                                  break;
                              default:
                                  t = !1
                              }
                          else
                              t = Boolean(t);
                      return f(t) ? S(t) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              chain: function(e) {
                  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                      r[n - 1] = arguments[n];
                  return function(t) {
                      return e(t).andThen((function(e) {
                          return S(r.reduce((function(e, t) {
                              return t(e)
                          }
                          ), e))
                      }
                      ))
                  }
              },
              date: function(e) {
                  return function(t) {
                      return null != e && e.coerce && (d(t) || u(t)) && (t = new Date(t)),
                      function(e) {
                          return function(e, t) {
                              return t instanceof e
                          }(Date, e) && d(e.getTime())
                      }(t) ? S(t) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              defaulted: function(e, t) {
                  return function(r) {
                      return y(r) ? S(t) : e(r)
                  }
              },
              enums: function(e) {
                  var t = Object.values(e);
                  return function(e) {
                      return t.includes(e) ? S(e) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              intersection: function(e) {
                  return function(t) {
                      var r, n = Object.create(null), s = i(e);
                      try {
                          for (s.s(); !(r = s.n()).done; ) {
                              var a = (0,
                              r.value)(t);
                              if (a.isErr())
                                  return P(a.unwrapErr());
                              Object.assign(n, a.unwrap())
                          }
                      } catch (e) {
                          s.e(e)
                      } finally {
                          s.f()
                      }
                      return S(n)
                  }
              },
              list: function(e) {
                  var t = D(e);
                  return function(e) {
                      return t(e).andThen((function(e) {
                          return S(R(e))
                      }
                      ))
                  }
              },
              literal: function(e) {
                  return function(t) {
                      return t === e ? S(t) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              map: function(e, t) {
                  return function(r) {
                      return e(r).andThen(t)
                  }
              },
              number: function(e) {
                  return function(t) {
                      return null != e && e.coerce && (t = Number(t)),
                      d(t) ? S(t) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              object: function(e) {
                  var t = Object.entries(e);
                  return function(e) {
                      if (!w(e))
                          return P({
                              path: [],
                              message: "",
                              actual: "",
                              expected: ""
                          });
                      for (var r = Object.create(null), i = 0, s = t; i < s.length; i++) {
                          var a = n(s[i], 2)
                            , o = a[0]
                            , c = (0,
                          a[1])(r[o]);
                          if (c.isErr())
                              return P(c.unwrapErr())
                      }
                      return S(r)
                  }
              },
              optional: function(e) {
                  return function(t) {
                      return y(t) ? S(_) : e(t).andThen((function(e) {
                          return S(A(e))
                      }
                      ))
                  }
              },
              record: function(e, t) {
                  return function(r) {
                      if (!w(r))
                          return P({
                              path: [],
                              message: "",
                              actual: "",
                              expected: ""
                          });
                      for (var i = Object.create(null), s = 0, a = Object.entries(r); s < a.length; s++) {
                          var o = n(a[s], 2)
                            , c = o[0]
                            , l = o[1]
                            , h = e(c);
                          if (h.isErr()) {
                              var u = h.unwrapErr();
                              return u.path.unshift(c),
                              P(u)
                          }
                          var d = t(l);
                          if (d.isErr()) {
                              var f = d.unwrapErr();
                              return f.path.unshift(c),
                              P(f)
                          }
                          i[h.unwrap()] = d.unwrap()
                      }
                      return S(i)
                  }
              },
              string: function(e) {
                  return function(t) {
                      return null != e && e.coerce && (t = String(t)),
                      u(t) ? S(null != e && e.trim ? t.trim() : t) : P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              tuple: function(e) {
                  var t = o(e.entries());
                  return function(r) {
                      if (!g(r))
                          return P({
                              path: [],
                              message: "",
                              actual: "",
                              expected: ""
                          });
                      var s, a = new Array(e.length), o = i(t);
                      try {
                          for (o.s(); !(s = o.n()).done; ) {
                              var c = n(s.value, 2)
                                , l = c[0]
                                , h = (0,
                              c[1])(r[l]);
                              if (h.isErr()) {
                                  var u = h.unwrapErr();
                                  return u.path.unshift(l.toString()),
                                  P(u)
                              }
                              a[l] = h.unwrap()
                          }
                      } catch (e) {
                          o.e(e)
                      } finally {
                          o.f()
                      }
                      return S(a)
                  }
              },
              union: function(e) {
                  return function(t) {
                      var r, n = i(e);
                      try {
                          for (n.s(); !(r = n.n()).done; ) {
                              var s = (0,
                              r.value)(t);
                              if (s.isOk())
                                  return S(s.unwrap())
                          }
                      } catch (e) {
                          n.e(e)
                      } finally {
                          n.f()
                      }
                      return P({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              unknown: function(e) {
                  return S(e)
              }
          }, Symbol.toStringTag, {
              value: "Module"
          })), N = r(180), M = r(2940);
          !function(e) {
              e.EN = "en",
              e.FR = "fr",
              e.IT = "it",
              e.DE = "de",
              e.ES = "es",
              e.ZH = "zh",
              e.PT = "pt",
              e.KO = "ko",
              e.JA = "ja",
              e.RU = "ru",
              e.TR = "tr",
              e.AR = "ar",
              e.HI = "hi",
              e.ID = "id"
          }(I || (I = {}));
          const L = x.enums(I)
            , j = {
              [I.EN]: "en-US",
              [I.FR]: "fr-FR",
              [I.IT]: "it-IT",
              [I.DE]: "de-DE",
              [I.ES]: "es-ES",
              [I.ZH]: "zh-CN",
              [I.PT]: "pt-BR",
              [I.KO]: "ko-KR",
              [I.JA]: "ja-JP",
              [I.RU]: "ru-RU",
              [I.TR]: "tr-TR",
              [I.AR]: "ar-SA",
              [I.HI]: "hi-IN",
              [I.ID]: "id-ID"
          }
            , F = {
              isDev: !1,
              isAllowedOrigin: !0,
              config: {
                  avatarGenerator: "dicebear_retro",
                  avatarGeneratorTemplate: "",
                  enableUserUploadFiles: !1,
                  enableUserUploadImages: !1,
                  ymCounterId: 0,
                  gtagCounterId: "",
                  showLoader: !1,
                  showReqCounter: !1,
                  orientation: M.LH.Any,
                  showOrientationOverlay: !1,
                  showUnsupportedOSOverlay: !1,
                  targetOS: [],
                  communityLinks: {
                      en: ""
                  }
              },
              platformConfig: N.iA,
              playerFields: [],
              serverTime: (new Date).toISOString(),
              gameVariables: [],
              acl: {
                  canUploadFiles: !1,
                  canUploadImages: !1,
                  canConnectOnline: !1,
                  canCollectStats: !1
              },
              project: {
                  icon: "",
                  description: "",
                  name: "",
                  enableMainChat: !1,
                  mainChatId: 0,
                  achievements: {
                      isLockedVisible: !1,
                      isLockedDescriptionVisible: !1,
                      enableUnlockToast: !1
                  },
                  ads: {
                      showCountdownOverlay: !1,
                      showRewardedFailedOverlay: !1
                  }
              },
              rewards: [],
              triggers: [],
              products: [],
              achievements: [],
              achievementsGroups: [],
              schedulers: [],
              events: []
          }
            , U = {
              limits: {
                  [N.$.PRELOADER]: {
                      hour: {
                          timestamp: 0,
                          count: 0
                      },
                      day: {
                          timestamp: 0,
                          count: 0
                      },
                      session: {
                          count: 0
                      }
                  },
                  [N.$.FULLSCREEN]: {
                      hour: {
                          timestamp: 0,
                          count: 0
                      },
                      day: {
                          timestamp: 0,
                          count: 0
                      },
                      session: {
                          count: 0
                      }
                  },
                  [N.$.REWARDED]: {
                      hour: {
                          timestamp: 0,
                          count: 0
                      },
                      day: {
                          timestamp: 0,
                          count: 0
                      },
                      session: {
                          count: 0
                      }
                  },
                  [N.$.STICKY]: {
                      hour: {
                          timestamp: 0,
                          count: 0
                      },
                      day: {
                          timestamp: 0,
                          count: 0
                      },
                      session: {
                          count: 0
                      }
                  }
              }
          }
      }
  }, s = {};
  function a(e) {
      var t = s[e];
      if (void 0 !== t)
          return t.exports;
      var r = s[e] = {
          id: e,
          loaded: !1,
          exports: {}
      };
      return i[e].call(r.exports, r, r.exports, a),
      r.loaded = !0,
      r.exports
  }
  a.m = i,
  a.amdD = function() {
      throw new Error("define cannot be used indirect")
  }
  ,
  a.amdO = {},
  a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, {
          a: t
      }),
      t
  }
  ,
  t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
  a.t = function(r, n) {
      if (1 & n && (r = this(r)),
      8 & n)
          return r;
      if ("object" == typeof r && r) {
          if (4 & n && r.__esModule)
              return r;
          if (16 & n && "function" == typeof r.then)
              return r
      }
      var i = Object.create(null);
      a.r(i);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & n && r; "object" == typeof o && !~e.indexOf(o); o = t(o))
          Object.getOwnPropertyNames(o).forEach((e => s[e] = () => r[e]));
      return s.default = () => r,
      a.d(i, s),
      i
  }
  ,
  a.d = (e, t) => {
      for (var r in t)
          a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
              enumerable: !0,
              get: t[r]
          })
  }
  ,
  a.f = {},
  a.e = e => Promise.all(Object.keys(a.f).reduce(( (t, r) => (a.f[r](e, t),
  t)), [])),
  a.u = e => (({
      47: "i18n/pt-json",
      66: "i18n/tr-json",
      159: "i18n/it-json",
      415: "gs.overlay",
      459: "i18n/de-json",
      513: "i18n/id-json",
      606: "i18n/devtools-ru-json",
      637: "i18n/hi-json",
      670: "i18n/ko-json",
      718: "gs.devtools",
      746: "i18n/fr-json",
      808: "i18n/ar-json",
      848: "i18n/ja-json",
      897: "i18n/devtools-en-json",
      929: "i18n/zh-json",
      932: "i18n/en-json",
      964: "i18n/ru-json",
      968: "i18n/es-json"
  }[e] || e) + "." + a.h() + ".js"),
  a.h = () => "cba9600c5f81ef85297b",
  a.g = function() {
      if ("object" == typeof globalThis)
          return globalThis;
      try {
          return this || new Function("return this")()
      } catch (e) {
          if ("object" == typeof window)
              return window
      }
  }(),
  a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  r = {},
  n = "game-score-sdk:",
  a.l = (e, t, i, s) => {
      if (r[e])
          r[e].push(t);
      else {
          var o, c;
          if (void 0 !== i)
              for (var l = document.getElementsByTagName("script"), h = 0; h < l.length; h++) {
                  var u = l[h];
                  if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + i) {
                      o = u;
                      break
                  }
              }
          o || (c = !0,
          (o = document.createElement("script")).charset = "utf-8",
          o.timeout = 120,
          a.nc && o.setAttribute("nonce", a.nc),
          o.setAttribute("data-webpack", n + i),
          o.src = e,
          0 !== o.src.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous")),
          r[e] = [t];
          var d = (t, n) => {
              o.onerror = o.onload = null,
              clearTimeout(f);
              var i = r[e];
              if (delete r[e],
              o.parentNode && o.parentNode.removeChild(o),
              i && i.forEach((e => e(n))),
              t)
                  return t(n)
          }
            , f = setTimeout(d.bind(null, void 0, {
              type: "timeout",
              target: o
          }), 12e4);
          o.onerror = d.bind(null, o.onerror),
          o.onload = d.bind(null, o.onload),
          c && document.head.appendChild(o)
      }
  }
  ,
  a.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  a.nmd = e => (e.paths = [],
  e.children || (e.children = []),
  e),
  ( () => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src),
      !e)) {
          var r = t.getElementsByTagName("script");
          r.length && (e = r[r.length - 1].src)
      }
      if (!e)
          throw new Error("Automatic publicPath is not supported in this browser");
      e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
      a.p = e
  }
  )(),
  ( () => {
      var e = {
          436: 0
      };
      a.f.j = (t, r) => {
          var n = a.o(e, t) ? e[t] : void 0;
          if (0 !== n)
              if (n)
                  r.push(n[2]);
              else {
                  var i = new Promise(( (r, i) => n = e[t] = [r, i]));
                  r.push(n[2] = i);
                  var s = a.p + a.u(t)
                    , o = new Error;
                  a.l(s, (r => {
                      if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                      n)) {
                          var i = r && ("load" === r.type ? "missing" : r.type)
                            , s = r && r.target && r.target.src;
                          o.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")",
                          o.name = "ChunkLoadError",
                          o.type = i,
                          o.request = s,
                          n[1](o)
                      }
                  }
                  ), "chunk-" + t, t)
              }
      }
      ;
      var t = (t, r) => {
          var n, i, [s,o,c] = r, l = 0;
          for (n in o)
              a.o(o, n) && (a.m[n] = o[n]);
          for (c && c(a),
          t && t(r); l < s.length; l++)
              i = s[l],
              a.o(e, i) && e[i] && e[i][0](),
              e[s[l]] = 0
      }
        , r = self.webpackChunkgame_score_sdk = self.webpackChunkgame_score_sdk || [];
      r.forEach(t.bind(null, 0)),
      r.push = t.bind(null, r.push.bind(r))
  }
  )(),
  ( () => {
      "use strict";
      a(2096);
      var e = a(4943)
        , t = a.n(e)
        , r = a(4293)
        , n = a(8293)
        , i = a(180);
      const s = e => ({
          isLocalSave: e === i.pQ.Local,
          isCloudSave: e === i.pQ.Cloud,
          isPlatformSave: e === i.pQ.Platform,
          format: e
      });
      class o {
          constructor(e, t) {
              this.config = e,
              this.adapter = t,
              t.isSupportsCloudSaves || e.progressSaveFormat !== i.pQ.Platform || (e.progressSaveFormat = i.pQ.Local),
              this.saveFormat = s(e.progressSaveFormat)
          }
          get hasIntegratedAuth() {
              return this.adapter.hasIntegratedAuth
          }
          get hasAccountLinkingFeature() {
              return this.adapter.hasAccountLinkingFeature
          }
          get isSecretCodeAuthAvailable() {
              return this.adapter.isSecretCodeAuthAvailable
          }
          get _hasAuthModal() {
              return this.adapter._hasAuthModal
          }
          get isLogoutAvailable() {
              return this.adapter.isLogoutAvailable
          }
          get isExternalLinksAllowed() {
              return this.adapter.isExternalLinksAllowed
          }
          get type() {
              return this.adapter.type
          }
          get tag() {
              var e;
              return (null === (e = this.adapter) || void 0 === e ? void 0 : e.tag) || ""
          }
          get availableSocialNetworks() {
              return this.adapter.socialNetworks
          }
          get isSupportsCloudSaves() {
              return this.adapter.isSupportsCloudSaves
          }
          getSDK() {
              return this.adapter.getSDK()
          }
          getNativeSDK() {
              return this.adapter.getNativeSDK()
          }
          get isSupportsImageUploading() {
              return this.adapter.isSupportsImageUploading
          }
          requestPermissions(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  return this.adapter.requestPermissions(e)
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
          uploadImage(e) {
              return this.adapter.uploadImage(e)
          }
      }
      var c = a(3379)
        , l = a.n(c)
        , h = a(8205);
      l()(h.Z, {
          insert: "head",
          singleton: !1
      }),
      h.Z.locals;
      var u, d, f, p, v, y = a(6558), m = a(4414), g = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, w = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, b = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class E {
          constructor(e=[]) {
              this.storages = e,
              u.add(this),
              d.set(this, void 0),
              f.set(this, ""),
              p.set(this, !0),
              this.isEmptyOnBoot = !0,
              this.temp = {},
              w(this, d, (0,
              n._)(), "f"),
              this.ready = b(this, d, "f").ready
          }
          get _storages() {
              return this.storages
          }
          get activeStorages() {
              return b(this, p, "f") ? this.storages : this.localStorages
          }
          get localStorages() {
              return this.storages.filter((e => !0 === e.isLocal))
          }
          setStorages(e) {
              this.storages = e,
              Promise.all([this._get(e, "context"), this._get(e, "config")]).then(( ([e,t]) => {
                  w(this, f, e || "", "f"),
                  this.isEmptyOnBoot = !t,
                  b(this, d, "f").done()
              }
              ))
          }
          replaceStorages(e) {
              this.storages = e
          }
          _get(e, t) {
              const r = (0,
              n._)();
              return Promise.all(e.map((e => {
                  const r = (0,
                  n._)(n.s);
                  return e.get(t).then(r.done).catch(r.abort),
                  r.ready.catch((e => (y.kg.warn(e),
                  null)))
              }
              ))).then((e => {
                  r.done(e.find((e => null !== e || void 0 !== e)))
              }
              )),
              r.ready
          }
          _set(e, t, r) {
              return Promise.all(e.map((e => e.set(t, r))))
          }
          set(e, t, r) {
              return this._set(e, `${t}${b(this, f, "f")}`, r)
          }
          setRaw(e, t, r) {
              return this._set(e, `${t}`, r)
          }
          get(e, t) {
              return this._get(e, `${t}${b(this, f, "f")}`)
          }
          getRaw(e, t) {
              return this._get(e, `${t}`)
          }
          isEmptyContext() {
              return !b(this, f, "f")
          }
          setContext(e) {
              w(this, f, e, "f"),
              this._set(this.localStorages, "context", b(this, f, "f"))
          }
          migrateToContext(e) {
              return g(this, void 0, void 0, (function*() {
                  w(this, f, "", "f");
                  const [t,r,n] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                    , i = r || (null == t ? void 0 : t.secretCode);
                  return w(this, f, e, "f"),
                  yield Promise.all([this.savePlayer(t, b(this, p, "f")), this.saveSecretCode(i), this.saveLanguage(n)]),
                  w(this, f, "", "f"),
                  yield Promise.all([this.savePlayer(null, b(this, p, "f")), this.saveSecretCode(null), this.saveLanguage(null)]),
                  [t, i]
              }
              ))
          }
          clearContext(e, t) {
              return g(this, void 0, void 0, (function*() {
                  const r = b(this, f, "f");
                  w(this, f, e, "f"),
                  yield Promise.all([this.savePlayer(null, t), this.saveSecretCode(null), this.saveLanguage(null)]),
                  w(this, f, r, "f")
              }
              ))
          }
          extractFromContext(e, t=!1) {
              return g(this, void 0, void 0, (function*() {
                  const r = b(this, f, "f");
                  w(this, f, e, "f");
                  const [n,i,s] = yield Promise.all(t ? [this.loadPlayerFromLocalStorage(), this.loadSecretCodeFromLocalStorage(), this.loadLanguage()] : [this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                    , a = i || (null == n ? void 0 : n.secretCode);
                  return w(this, f, r, "f"),
                  [n, a, s]
              }
              ))
          }
          copyFromContext(e, t, r) {
              return g(this, void 0, void 0, (function*() {
                  const n = b(this, f, "f")
                    , [i,s,a] = yield this.extractFromContext(e);
                  w(this, f, t, "f"),
                  yield Promise.all([this.savePlayer(i, r), this.saveSecretCode(s), this.saveLanguage(a)]),
                  w(this, f, n, "f")
              }
              ))
          }
          checkIsMigrated(e) {
              return g(this, void 0, void 0, (function*() {
                  let t = !1;
                  try {
                      t = yield this.getLocalRaw(`migrated:${e}`)
                  } catch (e) {}
                  return !!t
              }
              ))
          }
          setMigrated(e) {
              return g(this, void 0, void 0, (function*() {
                  return this.setLocalRaw(`migrated:${e}`, !0)
              }
              ))
          }
          loadPlayer() {
              return this.get(this.activeStorages, "players").then(b(this, u, "m", v))
          }
          loadPlayerFromPlatformCloud() {
              const e = this.storages.filter((e => !e.isLocal));
              return this.get(e, "players").then(( ([e]=[null]) => e))
          }
          loadPlayerFromLocalStorage() {
              return this.get(this.localStorages, "players").then(b(this, u, "m", v))
          }
          savePlayer(e, t) {
              return this.set(t ? this.storages : this.localStorages, "players", [e]).catch(y.kg.warn)
          }
          loadSecretCode() {
              return g(this, void 0, void 0, (function*() {
                  return this.get(this.activeStorages, "sk").catch(y.kg.warn)
              }
              ))
          }
          loadSecretCodeFromLocalStorage() {
              return g(this, void 0, void 0, (function*() {
                  return this.get(this.localStorages, "sk").catch(y.kg.warn)
              }
              ))
          }
          saveSecretCode(e) {
              return this.set(this.activeStorages, "sk", e).catch(y.kg.warn)
          }
          setLocalRaw(e, t) {
              return this.setRaw(this.localStorages, e, t).catch(y.kg.warn)
          }
          getLocalRaw(e) {
              return this.getRaw(this.localStorages, e).catch(y.kg.warn)
          }
          loadLanguage() {
              return this.get(this.localStorages, "lang").catch((e => (y.kg.warn(e),
              null)))
          }
          saveLanguage(e) {
              return this.set(this.localStorages, "lang", e).catch(y.kg.warn)
          }
          loadConfig() {
              return this._get(this.localStorages, "config").then((e => Object.assign(Object.assign({}, m.lR), e))).catch((e => (y.kg.warn(e),
              m.lR)))
          }
          saveConfig(e) {
              return this._set(this.localStorages, "config", e).catch(y.kg.warn)
          }
          loadAdsInfo() {
              const e = this._get(this.localStorages, "adsInfo").then((e => Object.assign(Object.assign({}, m.GH), e))).catch((e => (y.kg.warn(e),
              m.GH)));
              return e.then((e => this.temp.adsInfo = e)),
              e
          }
          saveAdsInfo(e) {
              return this._set(this.localStorages, "adsInfo", e).catch(y.kg.warn)
          }
          saveIsExistsShortcut(e) {
              this.set(this.localStorages, "isExistsShortcut", e)
          }
          loadIsExistsShortcut() {
              return this.get(this.localStorages, "isExistsShortcut")
          }
          isCrazyGamesAccountLinked(e) {
              var t;
              return g(this, void 0, void 0, (function*() {
                  return Boolean(null !== (t = yield this.getRaw(this.localStorages, `crazyGames.account${e}.linked`)) && void 0 !== t && t)
              }
              ))
          }
          setCrazyGamesAccountLinked(e) {
              return g(this, void 0, void 0, (function*() {
                  yield this.setRaw(this.localStorages, `crazyGames.account${e}.linked`, !0)
              }
              ))
          }
          setSaveInPlatformStorage(e) {
              w(this, p, e, "f")
          }
      }
      d = new WeakMap,
      f = new WeakMap,
      p = new WeakMap,
      u = new WeakSet,
      v = function(e) {
          if (!e)
              return null;
          const [t] = e;
          return t
      }
      ;
      var P = a(6388)
        , S = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class _ extends Error {
          constructor() {
              super("throttled invocation was canceled"),
              this.name = "CanceledError"
          }
      }
      class A {
          constructor(e, t) {
              this.canceled = !1;
              const r = new Promise((e => {
                  this.timeout = setTimeout(e, t),
                  this.resolve = e
              }
              ));
              this.ready = e.then(( () => r), ( () => r))
          }
          flush() {
              clearTimeout(this.timeout),
              this.resolve()
          }
          cancel() {
              this.canceled = !0,
              clearTimeout(this.timeout),
              this.resolve()
          }
          then(e) {
              return this.ready.then(( () => {
                  if (this.canceled)
                      throw new _;
                  return e()
              }
              ))
          }
      }
      function T(e, t, r={}) {
          const n = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0
            , i = r.getNextArgs || ( (e, t) => t);
          let s, a = Promise.resolve(), o = new A(a,0), c = null;
          function l() {
              const t = s;
              c = null,
              s = null;
              const r = ( () => S(this, void 0, void 0, (function*() {
                  return yield e.apply(this, t)
              }
              )))();
              return o = new A(r,n),
              r
          }
          function h(...e) {
              return s = s ? i(s, e) : e,
              c || (c = o.then(l.bind(this))),
              c
          }
          return h.cancel = () => S(this, void 0, void 0, (function*() {
              const e = a;
              o.cancel(),
              c = null,
              s = null,
              a = Promise.resolve(),
              o = new A(a,0),
              yield e
          }
          )),
          h.flush = () => S(this, void 0, void 0, (function*() {
              o.flush(),
              yield a
          }
          )),
          h
      }
      function O(e) {
          return function(t, r, n) {
              const i = n.value;
              return n.value = T(i, e),
              n
          }
      }
      T.CanceledError = _;
      const k = e => {
          if ("Problem" === (null == e ? void 0 : e.__typename))
              throw e.message
      }
      ;
      new TextEncoder;
      var C = a(6480)
        , R = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }
        , I = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class D extends P.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          open(e={
              orderBy: ["score"]
          }) {
              return I(this, void 0, void 0, (function*() {
                  e.orderBy && "string" == typeof e.orderBy && (e.orderBy = [e.orderBy]);
                  const t = (Array.isArray(e.orderBy) ? e.orderBy : ["score"]).filter((e => "" !== e));
                  e = Object.assign(Object.assign({}, e), {
                      orderBy: t
                  });
                  const [r] = yield Promise.all([this.fetch(e), this.gp.loadOverlay()]);
                  this._events.emit("open"),
                  yield this.gp.overlay.openLeaderboard(e, r),
                  this._events.emit("close")
              }
              ))
          }
          openScoped(e) {
              return I(this, void 0, void 0, (function*() {
                  const [t] = yield Promise.all([this.fetchScoped(e), this.gp.loadOverlay()])
                    , r = Object.assign({}, e)
                    , n = t.fields.map((e => e.key));
                  r.orderBy = e.includeFields ? n.filter((t => !e.includeFields.includes(t))) : n,
                  this._events.emit("open"),
                  yield this.gp.overlay.openLeaderboard(r, t),
                  this._events.emit("close")
              }
              ))
          }
          fetch(e={}) {
              return I(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r, withMe: i, limit: s} = e
                    , a = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      C.pY)(r),
                      withMe: (0,
                      C.oo)(r, i)
                  });
                  try {
                      const {result: e, playerResult: r} = yield this.gp._services.leaderboardsService.getRating(a);
                      k(e),
                      k(r),
                      x(e, r, a.showNearest, a.withMe, (0,
                      C.wQ)(s, e.leaderboard)),
                      t.done(e),
                      this._events.emit("fetch", e)
                  } catch (e) {
                      t.abort(e),
                      this._events.emit("error:fetch")
                  } finally {
                      this.gp.loader.dec()
                  }
                  return t.ready
              }
              ))
          }
          fetchScoped(e) {
              return I(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r, withMe: i, limit: s} = e
                    , a = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      C.pY)(r),
                      withMe: (0,
                      C.oo)(r, i)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getRatingVariant(a)
                        , {result: r, playerResult: n} = e;
                      k(r),
                      k(n),
                      x(r, n, a.showNearest, a.withMe, (0,
                      C.wQ)(s, r.leaderboard)),
                      t.done(r),
                      this._events.emit("fetch", r)
                  } catch (e) {
                      t.abort(e),
                      this._events.emit("error:fetch")
                  } finally {
                      this.gp.loader.dec()
                  }
                  return t.ready
              }
              ))
          }
          fetchPlayerRating(e={}) {
              return I(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r} = e
                    , i = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      C.pY)(r)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getPlayerRating(i);
                      k(e),
                      t.done(e),
                      this._events.emit("fetchPlayer", e)
                  } catch (e) {
                      t.abort(e),
                      this._events.emit("error:fetchPlayer", e)
                  } finally {
                      this.gp.loader.dec()
                  }
                  return t.ready
              }
              ))
          }
          fetchPlayerRatingScoped(e) {
              return I(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r} = e
                    , i = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      C.pY)(r)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getPlayerRatingVariant(i);
                      k(e),
                      t.done(e),
                      this._events.emit("fetchPlayerScoped", e)
                  } catch (e) {
                      t.abort(e),
                      this._events.emit("error:fetchPlayerScoped", e)
                  } finally {
                      this.gp.loader.dec()
                  }
                  return t.ready
              }
              ))
          }
          publishRecord(e) {
              return I(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  try {
                      const r = yield this.gp._services.leaderboardsService.publishRecord(e);
                      t.done(r),
                      this._events.emit("publishRecord", r)
                  } catch (e) {
                      t.abort(e),
                      this._events.emit("error:publishRecord", e)
                  } finally {
                      this.gp.loader.dec()
                  }
                  return t.ready
              }
              ))
          }
      }
      function x(e, t, r, n, i) {
          e.countOfPlayersAbove = (0,
          C.q3)(e.players, (null == t ? void 0 : t.abovePlayers) || []),
          e.topPlayers = [...e.players],
          e.abovePlayers = [...(null == t ? void 0 : t.abovePlayers) || []],
          e.belowPlayers = [...(null == t ? void 0 : t.belowPlayers) || []],
          e.player = (null == t ? void 0 : t.player) || null,
          e.players = function(e, t, r, n, i, s, a) {
              if (!n || !t || "none" === t)
                  return e;
              if (e.some((e => e.id === n.id && e.position === n.position)))
                  return e.map((e => n.id === e.id ? n : e));
              const o = e.length
                , c = n.position - 1;
              if (c > o) {
                  const t = e.findIndex((e => e.id === n.id));
                  t >= 0 && e.forEach(( (e, r) => {
                      r >= t && (e.position -= 1)
                  }
                  ))
              }
              if (i && 0 !== i.length && c > r - 1 && (e = [...i, ...e]),
              s && 0 !== s.length && c > r - 1 && (e = [...e, ...s]),
              c < o)
                  e.splice(c, 0, n),
                  e.forEach(( (e, t) => {
                      t <= c || e.position++
                  }
                  )),
                  e.length > o && e.pop();
              else
                  switch (t) {
                  case "first":
                      e.unshift(n);
                      break;
                  case "last":
                      e.push(n)
                  }
              return e = [...new Set(e.map((e => e.id)))].map((t => e.find((e => e.id === t)))),
              a && (e = e.sort(( (e, t) => e.position - t.position))),
              e
          }(e.players, (0,
          C.oo)(r, n), (0,
          C.wQ)(i, e.leaderboard), null == t ? void 0 : t.player, null == t ? void 0 : t.abovePlayers, null == t ? void 0 : t.belowPlayers, (0,
          C.pY)(r))
      }
      R([O(500)], D.prototype, "open", null),
      R([O(500)], D.prototype, "openScoped", null),
      R([O(500)], D.prototype, "fetch", null),
      R([O(500)], D.prototype, "fetchScoped", null),
      R([O(500)], D.prototype, "fetchPlayerRating", null),
      R([O(500)], D.prototype, "fetchPlayerRatingScoped", null),
      R([O(500)], D.prototype, "publishRecord", null);
      var N, M, L, j, F = a(5942), U = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, G = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      const $ = {
          data: e => String(e || ""),
          stats: e => Number(e) || 0,
          flag: e => Boolean(e) || !1,
          service: null,
          accounts: null
      }
        , B = ["name", "avatar"];
      class V extends P.Z {
          constructor(e={}, t, r) {
              super(),
              this.coreSdk = r,
              N.add(this),
              this.credentials = "",
              this.modifiedAt = "",
              M.set(this, {}),
              L.set(this, []),
              this._wasReset = !1,
              this.isPublicFieldsDirty = !1,
              U(this, N, "m", j).call(this, t),
              this.fromJSON(e)
          }
          get id() {
              return this.state.id
          }
          get score() {
              return this.get("score")
          }
          set score(e) {
              this.set("score", e)
          }
          get name() {
              return this.get("name")
          }
          set name(e) {
              this.set("name", e)
          }
          get avatar() {
              return this.get("avatar")
          }
          set avatar(e) {
              this.set("avatar", e)
          }
          get isStub() {
              return !this.fields.filter((e => !e.key.endsWith(":timestamp") && !B.includes(e.key))).some((e => this.get(e.key) !== e.default))
          }
          fromJSON(e) {
              var t, r, n;
              this.state = {
                  id: e.id || 0,
                  active: null === (t = e.active) || void 0 === t || t,
                  removed: null !== (r = e.removed) && void 0 !== r && r,
                  test: null !== (n = e.test) && void 0 !== n && n,
                  name: e.name || "",
                  avatar: e.avatar || "",
                  score: e.score || 0,
                  credentials: e.credentials || ""
              },
              e.credentials && (this.credentials = String(e.credentials)),
              e.modifiedAt && (this.modifiedAt = String(e.modifiedAt)),
              this.fields.forEach((t => {
                  if (!(t.key in e))
                      return void (this.state[t.key] = t.default);
                  const r = $[t.type];
                  if (!r)
                      return void (this.state[t.key] = e[t.key] || t.default);
                  const n = r(e[t.key]);
                  this.state[t.key] = t.variants.length && !t.variants.some((e => e.value === n)) ? t.default : n,
                  t.intervalIncrement && function(e, t, r, n) {
                      Object.defineProperty(n, `${r.key}:secondsLeft`, {
                          enumerable: !1,
                          get: () => {
                              const n = t.get(`${r.key}:incrementValue`) < 0
                                , i = n ? t.getMinValue(r.key) : t.getMaxValue(r.key)
                                , s = t.get(r.key);
                              if (void 0 !== i) {
                                  if (n && s <= i)
                                      return 0;
                                  if (!n && s >= i)
                                      return 0
                              }
                              const a = t.get(`${r.key}:timestamp`);
                              if (!a)
                                  return 0;
                              const o = new Date(a);
                              if (isNaN(o.getTime()))
                                  return 0;
                              const c = new Date(e.serverTime).getTime() - o.getTime()
                                , l = t.get(`${r.key}:incrementInterval`) - Math.ceil(c / 1e3);
                              return l >= 0 ? l : 0
                          }
                      }),
                      Object.defineProperty(n, `${r.key}:secondsLeftTotal`, {
                          enumerable: !1,
                          get: () => {
                              const e = t.get(`${r.key}:incrementValue`)
                                , n = e < 0
                                , i = n ? t.getMinValue(r.key) : t.getMaxValue(r.key)
                                , s = t.get(r.key);
                              if (void 0 !== i) {
                                  if (n && s <= i)
                                      return 0;
                                  if (!n && s >= i)
                                      return 0
                              }
                              const a = t.get(`${r.key}:incrementInterval`)
                                , o = n ? s - i : i - s
                                , c = Math.ceil(o / Math.abs(e)) * a - (a - t.get(`${r.key}:secondsLeft`));
                              return c >= 0 ? c : 0
                          }
                      })
                  }(this.coreSdk, this, t, this.state)
              }
              )),
              this._events.emit("change")
          }
          toJSON() {
              return Object.assign(Object.assign({}, this.state), {
                  modifiedAt: this.coreSdk.serverTime,
                  credentials: this.credentials
              })
          }
          getField(e) {
              const t = U(this, M, "f")[e];
              if (!t) {
                  const t = `Field "${e}" not exists on player model`;
                  throw y.kg.error(t),
                  new Error(t)
              }
              return t
          }
          getFieldName(e) {
              return this.getField(e).name || ""
          }
          getFieldVariantName(e, t) {
              var r;
              return (null === (r = this.getField(e).variants.find((e => e.value === t))) || void 0 === r ? void 0 : r.name) || ""
          }
          getMinValue(e) {
              var t;
              if (null == (null === (t = this.getField(e).limits) || void 0 === t ? void 0 : t.min)) {
                  const t = `minValue not exists on field "${e}"`;
                  throw y.kg.error(t),
                  new Error(t)
              }
              return this.get(`${e}:min`)
          }
          getMaxValue(e) {
              var t;
              if (null == (null === (t = this.getField(e).limits) || void 0 === t ? void 0 : t.max)) {
                  const t = `maxValue not exists on field "${e}"`;
                  throw y.kg.error(t),
                  new Error(t)
              }
              return this.get(`${e}:max`)
          }
          get(e) {
              return this.state[e]
          }
          set(e, t) {
              var r, n;
              const i = this.state[e];
              if (this.state[e] = this._convert(e, t),
              i !== this.state[e]) {
                  this.updateTime = Date.now();
                  const t = this.getField(e);
                  if (t.public && (this.isPublicFieldsDirty = !0),
                  t.limits) {
                      const {couldGoOverLimit: i} = t.limits
                        , s = this.get(`${e}:max`)
                        , a = this.get(`${e}:min`)
                        , o = this.get(`${t.key}:incrementValue`)
                        , c = this.get(t.key)
                        , l = `${t.key}:timestamp`;
                      null !== t.limits.max && c >= s ? (i || (this.state[e] = s),
                      this._events.emit("field:maximum", {
                          field: t
                      }),
                      t.intervalIncrement && o > 0 && (this.state[l] = "")) : null !== t.limits.min && c <= a && (this.state[e] = a,
                      this._events.emit("field:minimum", {
                          field: t
                      }),
                      t.intervalIncrement && o < 0 && (this.state[l] = ""));
                      const h = !!(null === (r = this.state[l]) || void 0 === r ? void 0 : r.length);
                      t.intervalIncrement && !h && (o > 0 && c < s || o < 0 && c > a) && (this.state[`${t.key}:timestamp`] = new Date(null === (n = this.coreSdk) || void 0 === n ? void 0 : n.serverTime).toISOString())
                  }
                  this._events.emit("change")
              }
          }
          add(e, t) {
              return this.set(e, this.get(e) + this._convert(e, t))
          }
          toggle(e) {
              return this.set(e, !this.get(e))
          }
          has(e) {
              return Boolean(this.get(e))
          }
          reset() {
              this._wasReset = !0,
              this.fields.forEach((e => this.set(e.key, e.default)))
          }
          remove() {
              this.state.id = 0,
              this.reset()
          }
          _convert(e, t) {
              const r = this.getField(e)
                , n = $[r.type];
              if (!n) {
                  const t = `Cannot mutate "${e}", it's readonly`;
                  throw y.kg.error(t),
                  new Error(t)
              }
              const i = n(t);
              if (r.variants.length && !r.variants.some((e => e.value === i))) {
                  const t = `Invalid variant ${i} of "${e}"`;
                  throw y.kg.error(t),
                  new Error(t)
              }
              return i
          }
          _initializeIncrementFields() {
              U(this, L, "f").forEach((e => {
                  e.intervalIncrement && this._incrementField(e)
              }
              ))
          }
          _incrementField(e) {
              const t = this.get(e.key)
                , r = this.get(`${e.key}:max`)
                , n = this.get(`${e.key}:min`)
                , i = this.get(`${e.key}:incrementInterval`)
                , s = this.get(`${e.key}:incrementValue`)
                , a = Date.parse(this.coreSdk.serverTime)
                , o = Date.parse(this.get(`${e.key}:timestamp`)) || a
                , c = (a - o) / 1e3
                , l = Math.floor(c / i);
              if (l > 0 && (s > 0 && t < r || s < 0 && t > n)) {
                  let a = t + l * s;
                  a = Math.min(Math.max(a, n), r),
                  this._events.emit("field:increment", {
                      field: e,
                      oldValue: t,
                      newValue: a
                  }),
                  this.set(e.key, a);
                  const c = i * l * 1e3 + o;
                  this.state[`${e.key}:timestamp`] = new Date(c).toISOString()
              }
          }
          _syncIncrementVariable() {
              this._initializeIncrementFields()
          }
      }
      M = new WeakMap,
      L = new WeakMap,
      N = new WeakSet,
      j = function(e) {
          this.fields = e,
          G(this, L, e.filter((e => !!e.limits)), "f"),
          G(this, M, {}, "f"),
          e.forEach((e => {
              U(this, M, "f")[e.key] = e
          }
          ))
      }
      ;
      const q = []
        , W = e => (q.push(e),
      () => {
          q.splice(q.indexOf(e), 1)
      }
      );
      let z = performance.now();
      const Y = e => {
          const t = e - z;
          z = e,
          q.forEach((e => e(t))),
          requestAnimationFrame(Y)
      }
      ;
      requestAnimationFrame(Y);
      var K, J, Z, H, X, Q, ee, te, re, ne, ie, se, ae, oe, ce, le, he, ue, de, fe, pe, ve = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, ye = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, me = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, ge = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const we = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/
        , be = {
          local: i.pQ.Local,
          platform: i.pQ.Platform,
          cloud: i.pQ.Cloud
      };
      class Ee extends V {
          constructor(e={}, t, r, i, a, o) {
              super(e, t, i),
              this.playerAdapter = r,
              this.coreSDk = i,
              K.add(this),
              this.isLoggedIn = !1,
              this.isLoggedInByPlatform = !1,
              this.hasAnyCredentials = !1,
              this.secretCode = "",
              this.tempSecredCode = "",
              this._hasFirstSync = !1,
              this.isFirstRequest = !1,
              this.credentials = "",
              this.stats = {
                  activeDays: 0,
                  activeDaysConsecutive: 0,
                  playtimeAll: 0,
                  playtimeToday: 0
              },
              J.set(this, ""),
              Z.set(this, void 0),
              H.set(this, `,${this.coreSDk.platform.type},${this.coreSDk.isDev ? "d" : "p"},`),
              X.set(this, !1),
              Q.set(this, {}),
              this._platformData = {},
              ee.set(this, void 0),
              te.set(this, ( () => {}
              )),
              re.set(this, {}),
              ne.set(this, {}),
              ce.set(this, (function(e={}) {
                  return ye(this, void 0, void 0, (function*() {
                      const {silent: t=!0, override: r=!1, storage: i="preferred"} = e
                        , a = this._wasReset;
                      this._wasReset = !1,
                      this.gp.loader.inc();
                      const o = (0,
                      n._)();
                      ge(this, re, "f")[i] = this.gp.serverTime;
                      const c = be[i] || this.gp.platform.config.progressSaveFormat;
                      let l = !1;
                      const {isLocalSave: h, isCloudSave: u, isPlatformSave: d} = s(c);
                      yield this.gp._storage.savePlayer(this.toJSON(), !h).catch(y.kg.warn);
                      try {
                          if (yield ge(this, K, "m", ae).call(this, t),
                          ge(this, X, "f") && this.isStub && !a) {
                              const [e] = yield this.gp._storage.extractFromContext(ge(this, H, "f"));
                              e && (delete e.platformType,
                              delete e.secretCode,
                              delete e.credentials,
                              e.name = this.name,
                              e.avatar = this.avatar,
                              e.id = this.id,
                              this.fromJSON(e))
                          }
                          const e = this.gp.platform.config.alwaysSyncPublicFields && this.isPublicFieldsDirty;
                          if (e || ge(this, Z, "f").isDirty() && u || u || this.isFirstRequest) {
                              const n = this.toJSON();
                              !u && e && this.fields.forEach((e => {
                                  e.public || delete n[e.key]
                              }
                              ));
                              const i = yield this.gp._services.playerService.sync(Object.assign({
                                  override: r,
                                  playerState: n
                              }, ge(this, Z, "f").export()), {
                                  withToken: this.isFirstRequest
                              });
                              switch (i.__typename) {
                              case "PlayerSyncConflict":
                                  {
                                      this.gp.loader.dec();
                                      const e = i;
                                      let r;
                                      d ? r = this.toJSON() : (yield this.gp.loadOverlay(),
                                      l = !0,
                                      r = yield this.gp.overlay.pickPlayerOnConflict(e)),
                                      this.has("name") && !r.name && (r.name = this.get("name")),
                                      this.has("avatar") && !r.avatar && (r.avatar = this.get("avatar")),
                                      this.gp.loader.inc();
                                      const n = yield this.gp._services.playerService.sync(Object.assign({
                                          playerState: r,
                                          override: !0
                                      }, ge(this, Z, "f").export()), {
                                          withToken: this.isFirstRequest
                                      });
                                      if ("Player" !== n.__typename)
                                          return void o.abort();
                                      t || ge(this, K, "m", de).call(this, ""),
                                      l && this.gp.overlay.close(),
                                      yield ge(this, K, "m", he).call(this, n, c),
                                      o.done(),
                                      yield ge(this, K, "m", ue).call(this, n.state);
                                      break
                                  }
                              case "Player":
                                  {
                                      const {state: e} = i;
                                      t || ge(this, K, "m", de).call(this, ""),
                                      yield ge(this, K, "m", he).call(this, i, c),
                                      o.done(),
                                      yield ge(this, K, "m", ue).call(this, e),
                                      this.playerAdapter.publishRecord(e);
                                      break
                                  }
                              }
                          } else if (t)
                              yield this.gp._storage.savePlayer(this.toJSON(), !h).catch(y.kg.warn);
                          else {
                              const e = yield this.gp._storage.loadPlayerFromPlatformCloud()
                                , t = yield this.gp._services.playerService.getPlayer({
                                  withToken: !0
                              });
                              let r = e;
                              (!e || new V(e,this.fields,this.gp).isStub) && (r = t.state),
                              t.state = r,
                              ge(this, K, "m", he).call(this, t, c),
                              o.done(),
                              yield ge(this, K, "m", ue).call(this, r),
                              this.playerAdapter.publishRecord(r)
                          }
                          o.done()
                      } catch (e) {
                          o.abort(e)
                      } finally {
                          this._hasFirstSync = !0,
                          this.isPublicFieldsDirty = !1,
                          this.isFirstRequest = !1,
                          this.gp.loader.dec()
                      }
                      return o.ready.then(( () => this._events.emit("sync", !0))).catch(( () => this._events.emit("sync", !1))),
                      o.ready
                  }
                  ))
              }
              )),
              le.set(this, (function() {
                  return ye(this, void 0, void 0, (function*() {
                      this.gp.loader.inc();
                      try {
                          const e = yield this.gp._services.playerService.getPlayer({
                              withToken: !0
                          });
                          yield ge(this, K, "m", he).call(this, e, this.gp.platform.saveFormat.format),
                          yield ge(this, K, "m", ue).call(this, e.state),
                          this._events.emit("load", !0)
                      } catch (e) {
                          y.kg.error(e),
                          this._events.emit("load", !1)
                      } finally {
                          this.gp.loader.dec(),
                          this.isFirstRequest = !1
                      }
                  }
                  ))
              }
              )),
              this.gp = this.coreSDk;
              const c = (0,
              n._)();
              this.ready = c.ready,
              me(this, ee, o, "f"),
              me(this, Z, a, "f"),
              a.on("syncPlayer", ( () => {
                  this.ready.then(( () => this.sync().finally(( () => a.commitSyncPlayer()))))
              }
              )),
              ge(this, K, "m", se).call(this).finally(( () => this._init(c)))
          }
          get avatar() {
              return this.get("avatar") || this.gp.generateAvatar(this.id, 64)
          }
          set avatar(e) {
              this.set("avatar", e)
          }
          get _isRequredDataUpdate() {
              return !this.get("name") || this._isRequredAvatarUpdate
          }
          get _isRequredAvatarUpdate() {
              const e = this.get("avatar");
              return !e || !this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e)
          }
          get _authInfo() {
              return Object.assign(Object.assign({}, this._platformData), {
                  secretCode: this.secretCode || ge(this, J, "f")
              })
          }
          get _isAuthorizedAtPlatform() {
              return this.playerAdapter.isAuthorizedAtPlatform
          }
          get(e) {
              return "secretCode" === e ? this.secretCode || ge(this, J, "f") : "credentials" === e ? this.credentials || this.playerAdapter.userId : super.get(e)
          }
          loadProgress(e, t) {
              return ye(this, void 0, void 0, (function*() {
                  const [r] = yield this.gp._storage.extractFromContext(t);
                  let n = !r;
                  if (r && (this.fromJSON(r),
                  this.isStub && (n = !0)),
                  n) {
                      const r = yield Promise.all(e.map((e => this.gp._storage.extractFromContext(e))))
                        , n = null == r ? void 0 : r.find(( ([e]) => e && !new V(e,this.fields,this.gp).isStub))
                        , [i] = n || [];
                      i && (delete i.platformType,
                      delete i.secretCode,
                      delete i.credentials,
                      i.id = this.id,
                      this.fromJSON(i),
                      this.gp._storage.setContext(t),
                      yield ge(this, ce, "f").call(this),
                      this.gp._storage.setMigrated(t))
                  }
              }
              ))
          }
          _init(e) {
              return ye(this, void 0, void 0, (function*() {
                  this.gp.ready.then(( () => {
                      (this.id ? ge(this, le, "f").call(this) : ge(this, ce, "f").call(this)).finally(( () => ye(this, void 0, void 0, (function*() {
                          this.isLoggedInByPlatform && (yield ge(this, Z, "f").syncPurchases()),
                          e.done(),
                          this._events.emit("ready")
                      }
                      ))))
                  }
                  ))
              }
              ))
          }
          fetchFields() {
              return ye(this, void 0, void 0, (function*() {
                  try {
                      this.fields = (yield this.gp._services.playerService.fetchFields()).items,
                      this._events.emit("fetchFields", !0)
                  } catch (e) {
                      this._events.emit("fetchFields", !1)
                  }
              }
              ))
          }
          sync(e={}) {
              return ye(this, void 0, void 0, (function*() {
                  return ge(this, ce, "f").call(this, e)
              }
              ))
          }
          enableAutoSync({interval: e, override: t=!1, storage: r="preferred"}={
              interval: 0
          }) {
              if (ge(this, ne, "f")[r])
                  return void y.kg.error(`AutoSync for ${r} storage already enabled. Call disableAutoSync() before re-enabling.`);
              if (!e)
                  return void y.kg.error("Interval is not defined");
              let n = 0;
              ge(this, ne, "f")[r] = W(( () => ye(this, void 0, void 0, (function*() {
                  (new Date(this.gp.serverTime).getTime() - (ge(this, re, "f")[r] ? new Date(ge(this, re, "f")[r]).getTime() : 0)) / 1e3 >= e && this.updateTime > n && (n = Date.now(),
                  yield ge(this, ce, "f").call(this, {
                      override: t,
                      storage: r
                  }))
              }
              ))))
          }
          disableAutoSync({storage: e="preferred"}={}) {
              ge(this, ne, "f")[e] ? (ge(this, ne, "f")[e](),
              delete ge(this, ne, "f")[e]) : y.kg.error(`AutoSync for ${e} storage disable attempt: not active`)
          }
          load() {
              return ye(this, void 0, void 0, (function*() {
                  return ge(this, le, "f").call(this)
              }
              ))
          }
          login(e={}) {
              var t;
              return ye(this, void 0, void 0, (function*() {
                  let r = !1;
                  if (this.gp.platform._hasAuthModal)
                      return (yield this.playerAdapter.loginPlayer(this, {
                          isAuthModal: !0
                      })).id ? (yield ge(this, ce, "f").call(this, {
                          silent: !1
                      }).then(( () => {
                          r = !0,
                          this._events.emit("login", !0)
                      }
                      )).catch((e => {
                          y.kg.error(e),
                          this._events.emit("login", !1)
                      }
                      )),
                      r) : (this._events.emit("login", !1),
                      r);
                  if (!this.gp.platform.hasIntegratedAuth && !this.gp.platform.isSecretCodeAuthAvailable)
                      return this._events.emit("login", !1),
                      r;
                  try {
                      yield this.gp.loadOverlay();
                      const {type: n, secretCode: i} = yield this.gp.overlay.login({
                          withSecretCode: this.gp.platform.isSecretCodeAuthAvailable && (null === (t = e.withSecretCode) || void 0 === t || t)
                      });
                      switch (n) {
                      case "PLATFORM_AUTH":
                          yield ge(this, ce, "f").call(this, {
                              silent: !1
                          }).then(( () => {
                              r = !0,
                              this._events.emit("login", !0)
                          }
                          )).catch((e => {
                              y.kg.error(e),
                              this._events.emit("login", !1)
                          }
                          ));
                          break;
                      case "SECRET_KEY_AUTH_LOGIN":
                          ge(this, K, "m", de).call(this, i),
                          yield ge(this, le, "f").call(this).then(( () => {
                              r = !0,
                              this._events.emit("login", !0)
                          }
                          )).catch((e => {
                              y.kg.error(e),
                              this._events.emit("login", !1)
                          }
                          ))
                      }
                      this.gp.overlay.close()
                  } catch (e) {
                      y.kg.error(e),
                      this._events.emit("login", !1)
                  }
                  return r
              }
              ))
          }
          logout() {
              return ye(this, void 0, void 0, (function*() {
                  if (this.gp.platform.isLogoutAvailable)
                      if (this.isLoggedIn)
                          try {
                              const e = yield this.playerAdapter.logoutPlayer();
                              this.resetCredentials(),
                              this.isLoggedIn = !1,
                              yield ge(this, K, "m", se).call(this),
                              this._events.emit("logout", e),
                              yield ge(this, le, "f").call(this)
                          } catch (e) {
                              y.kg.error(e),
                              this._events.emit("logout", !1)
                          }
                      else
                          this._events.emit("logout", !1);
                  else
                      this._events.emit("logout", !1)
              }
              ))
          }
          resetCredentials() {
              me(this, J, "", "f"),
              this.credentials = "",
              ge(this, K, "m", de).call(this, ""),
              this._hasFirstSync = !1,
              this.isFirstRequest = !0
          }
      }
      J = new WeakMap,
      Z = new WeakMap,
      H = new WeakMap,
      X = new WeakMap,
      Q = new WeakMap,
      ee = new WeakMap,
      te = new WeakMap,
      re = new WeakMap,
      ne = new WeakMap,
      ce = new WeakMap,
      le = new WeakMap,
      K = new WeakSet,
      ie = function(e, t) {
          return e ? t && (null == t ? void 0 : t.id) === e.id ? new Date(e.modifiedAt).getTime() > new Date(null == t ? void 0 : t.modifiedAt).getTime() + 3500 ? e : t : e : t
      }
      ,
      se = function() {
          var e;
          return ye(this, void 0, void 0, (function*() {
              const {platformData: t, key: r} = yield this.playerAdapter.getPlayerContext().catch((e => (y.kg.error(e),
              {
                  platformData: null,
                  key: ""
              })));
              let n;
              if (this._platformData = t || {},
              ge(this, ee, "f").call(this, this._authInfo),
              this.credentials = String(r || ""),
              this.isFirstRequest = !0,
              n = this.gp.platform.type === F.z.CUSTOM ? `,${this.gp.platform.type}:${this.gp.platform.config.tag},${this.gp.isDev ? "d" : "p"},${r}` : `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},${r}`,
              null == t ? void 0 : t.savedState) {
                  y.kg.info("found saved state...");
                  const e = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},null`
                    , [t] = yield this.gp._storage.extractFromContext(e);
                  t && (this.fromJSON(t),
                  yield ge(this, ce, "f").call(this),
                  yield this.gp._storage.copyFromContext(n, e, this.gp.platform.saveFormat.isPlatformSave))
              }
              const i = [F.z.POKI, F.z.VK_PLAY, F.z.CRAZY_GAMES, F.z.WG_PLAYGROUND, F.z.BEELINE, F.z.KONGREGATE, F.z.GOOGLE_PLAY, F.z.ANDROID, F.z.APP_GALLERY, F.z.GALAXY_STORE, F.z.ONE_STORE, F.z.AMAZON_APPSTORE, F.z.XIAOMI_GETAPPS, F.z.APTOIDE, F.z.RUSTORE, F.z.PLAYDECK, F.z.TELEGRAM, F.z.CUSTOM].includes(this.gp.platform.type)
                , s = [F.z.APP_GALLERY, F.z.GALAXY_STORE, F.z.ONE_STORE, F.z.AMAZON_APPSTORE, F.z.XIAOMI_GETAPPS, F.z.APTOIDE, F.z.RUSTORE, F.z.ANDROID].includes(this.gp.platform.type)
                , a = yield this.gp._storage.checkIsMigrated(n)
                , {isCloudSave: o} = this.gp.platform.saveFormat
                , c = [];
              if (s && o && !a && c.push(`,GOOGLE_PLAY,${this.gp.isDev ? "d" : "p"},`),
              i && o && !a && c.push(`,NONE,${this.gp.isDev ? "d" : "p"},`),
              c.length > 0 && (yield this.loadProgress(c, n)),
              !this.gp._storage.isEmptyOnBoot && this.gp._storage.isEmptyContext()) {
                  y.kg.info("Applying migration...");
                  const [e,t] = yield this.gp._storage.migrateToContext(n);
                  this.secretCode = t,
                  this.fromJSON(e),
                  me(this, J, e.secretCode, "f"),
                  ge(this, ee, "f").call(this, this._authInfo),
                  yield ge(this, ce, "f").call(this)
              }
              me(this, X, !!r, "f"),
              this.gp._storage.setContext(n);
              const [l,h,u] = yield Promise.all([this.gp._storage.loadPlayer(), this.gp._storage.loadSecretCode(), this.gp._storage.loadPlayerFromLocalStorage()]);
              if (this.isStub && !this.credentials && (null == l ? void 0 : l.credentials) && (null === (e = null == l ? void 0 : l.credentials) || void 0 === e ? void 0 : e.length) > 0) {
                  const [e] = yield this.gp._storage.extractFromContext(`${ge(this, H, "f")}${this.credentials}`);
                  e || (yield this.gp._storage.copyFromContext(ge(this, H, "f"), `${ge(this, H, "f")}${this.credentials}`, this.gp.platform.saveFormat.isPlatformSave)),
                  yield this.gp._storage.clearContext(ge(this, H, "f"), this.gp.platform.saveFormat.isPlatformSave),
                  ge(this, Q, "f")[this.credentials] = !0
              }
              const d = ge(this, K, "m", ie).call(this, u, l);
              this.fromJSON(d || {}),
              me(this, J, (null == d ? void 0 : d.secretCode) || "", "f"),
              this.secretCode = h,
              ge(this, ee, "f").call(this, this._authInfo)
          }
          ))
      }
      ,
      ae = function(e) {
          return ye(this, void 0, void 0, (function*() {
              let t;
              if (e ? this._isRequredDataUpdate && (t = this.playerAdapter.getPlayer()) : t = this.playerAdapter.loginPlayer(this),
              t) {
                  const r = yield t.catch((e => {
                      if ("cancelled" === (null == e ? void 0 : e.message))
                          throw e;
                      return {
                          name: "",
                          photoLarge: ""
                      }
                  }
                  ));
                  yield ge(this, K, "m", oe).call(this, r, e)
              }
          }
          ))
      }
      ,
      oe = function(e, t) {
          return ye(this, void 0, void 0, (function*() {
              var r;
              t || (yield ge(this, K, "m", se).call(this)),
              e.name && !this.get("name") && (this.name = e.name),
              this.name = (r = this.name) && we.test(r) ? r.replace(/@.*/, "") : r,
              e.photoLarge && this._isRequredAvatarUpdate && (this.avatar = e.photoLarge)
          }
          ))
      }
      ,
      he = function(e, t) {
          return ye(this, void 0, void 0, (function*() {
              const r = this.credentials
                , n = this.id;
              ge(this, Z, "f").updateServerTime(e.serverTime),
              this._firstReqHash = e.firstReqHash,
              this.stats = e.stats,
              ge(this, K, "m", fe).call(this, e.token),
              this.playerAdapter.setCredentials(e.state.credentials);
              const i = Date.parse(e.state.modifiedAt) - Date.parse(this.modifiedAt) > 3500
                , a = this.secretCode || ge(this, J, "f")
                , {isCloudSave: o, isLocalSave: c} = s(t)
                , l = this.credentials && this.credentials !== e.state.credentials || 0 === this.id || a && a != e.state.secretCode || o
                , h = yield this.gp._storage.loadPlayer();
              l ? (this.fromJSON(e.state),
              !this.gp.platform.config.alwaysSyncPublicFields || o || this.isFirstRequest || this.fields.filter((e => !e.public)).forEach((e => {
                  this.set(e.key, h[e.key])
              }
              ))) : this.gp.platform.config.alwaysSyncPublicFields ? this.fields.filter((e => e.public)).forEach((t => {
                  this.set(t.key, e.state[t.key])
              }
              )) : i && this.fromJSON(e.state),
              (yield ge(this, K, "m", pe).call(this, this.credentials, this.id, r, n)) || (yield this.gp._storage.clearContext(ge(this, H, "f"), this.gp.platform.saveFormat.isPlatformSave),
              ge(this, Q, "f")[this.credentials] = !0),
              me(this, J, e.state.secretCode, "f"),
              this._events.emit("sync:before"),
              ge(this, ee, "f").call(this, this._authInfo),
              yield this.gp._storage.savePlayer(this.toJSON(), !c);
              const u = Date.parse(e.sessionStart)
                , d = u > 0 ? Date.parse(this.gp.serverTime) - u : 0;
              let f = this.stats.playtimeAll + d / 1e3
                , p = this.stats.playtimeToday + d / 1e3;
              ge(this, te, "f").call(this),
              me(this, te, W((e => {
                  f += e / 1e3,
                  p += e / 1e3,
                  f - this.stats.playtimeAll >= 1 && this._syncIncrementVariable(),
                  this.stats.playtimeAll = Math.floor(f),
                  this.stats.playtimeToday = Math.floor(p)
              }
              )), "f"),
              ge(this, Z, "f").reset(),
              ge(this, Z, "f").markTriggersActivated(e.rewardsData.activatedTriggersNow),
              ge(this, Z, "f").markTriggersClaimed(e.rewardsData.claimedTriggersNow),
              ge(this, Z, "f").markRewardsGiven(e.rewardsData.givenRewards),
              ge(this, Z, "f").markAchievementsUnlocked(e.rewardsData.givenAchievements),
              ge(this, Z, "f").markPurchasesGiven(e.rewardsData.givenProducts),
              ge(this, Z, "f").markSchedulersDaysClaimed(e.rewardsData.claimedSchedulersDaysNow),
              ge(this, Z, "f").setPlayerSegments(e.segments, e.newSegments, e.leftSegments),
              ge(this, Z, "f").setAchievementsList(e.achievementsList),
              ge(this, Z, "f").setPurchasedList(e.purchasesListV2),
              ge(this, Z, "f").setRewardsList(e.rewards),
              ge(this, Z, "f").setTriggersList(e.triggers),
              ge(this, Z, "f").setPlayerSchedulersList(e.playerSchedulers),
              ge(this, Z, "f").setPlayerEventsList(e.playerEvents),
              ge(this, Z, "f").setExperiments(e.experiments),
              ge(this, Z, "f").setUniques(e.uniques)
          }
          ))
      }
      ,
      ue = function(e) {
          return ye(this, void 0, void 0, (function*() {
              this.isStub ? (this.tempSecredCode = e.secretCode,
              ge(this, K, "m", de).call(this, e.secretCode)) : this.tempSecredCode && this.tempSecredCode === e.secretCode && (ge(this, K, "m", de).call(this, ""),
              this.tempSecredCode = ""),
              this.isLoggedInByPlatform = this.playerAdapter.hasCredetials,
              this.isLoggedIn = this.isLoggedInByPlatform,
              this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode,
              this.secretCode && this.secretCode != e.secretCode && ge(this, K, "m", de).call(this, e.secretCode),
              this.hasAnyCredentials || (ge(this, K, "m", de).call(this, e.secretCode),
              this.hasAnyCredentials = !0)
          }
          ))
      }
      ,
      de = function(e) {
          this.secretCode = e,
          this.gp._storage.saveSecretCode(this.secretCode),
          ge(this, ee, "f").call(this, this._authInfo)
      }
      ,
      fe = function(e) {
          e && this.gp.channels._connect(e)
      }
      ,
      pe = function(e, t, r, n) {
          return ye(this, void 0, void 0, (function*() {
              if (e && !ge(this, Q, "f")[e]) {
                  const [e] = yield this.gp._storage.extractFromContext(ge(this, H, "f"), !0);
                  if (e && e.id === t)
                      return !1
              }
              return !!r || t !== n || !e
          }
          ))
      }
      ,
      ve([O(300)], Ee.prototype, "fetchFields", null),
      ve([O(300)], Ee.prototype, "sync", null),
      ve([O(300)], Ee.prototype, "load", null);
      class Pe extends P.Z {
          constructor() {
              super(),
              document.documentElement.addEventListener("fullscreenchange", ( () => {
                  let e = this.isEnabled;
                  this._events.emit("change", e),
                  this._events.emit(e ? "open" : "close")
              }
              ))
          }
          get isEnabled() {
              return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
          }
          open() {
              this.isEnabled || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen())
          }
          close() {
              this.isEnabled && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
          }
          toggle() {
              this.isEnabled ? this.close() : this.open()
          }
      }
      var Se, _e = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class Ae {
          constructor() {
              this.counters = [],
              this.visitParams = {},
              this._experimentsVisitParams = {},
              this._segmentsVisitParams = {},
              Se.set(this, 0)
          }
          addCounter(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  this.counters.push(e)
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
          hit(e) {
              this.counters.forEach((t => t.hit(e)))
          }
          goal(e, t) {
              this.counters.forEach((r => r.goal(e, t)))
          }
          setVisitParams(e) {
              this.visitParams = e,
              function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, Se, "f") || _e(this, Se, window.setTimeout(( () => {
                  _e(this, Se, 0, "f");
                  const e = Object.assign(Object.assign(Object.assign({}, this._experimentsVisitParams), this._segmentsVisitParams), this.visitParams);
                  this.counters.forEach((t => t.setVisitParams(e)))
              }
              ), 100), "f")
          }
      }
      Se = new WeakMap;
      var Te, Oe, ke, Ce = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Re = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Ie extends P.Z {
          constructor(e, t, r) {
              super(),
              this.adapter = e,
              this.gp = t,
              this.config = r,
              Te.add(this)
          }
          get isSupportsShare() {
              return this.adapter.isSupportsShare
          }
          get isSupportsNativeShare() {
              return this.adapter.isSupportsNativeShare
          }
          get isSupportsNativePosts() {
              return this.adapter.isSupportsNativePosts
          }
          get isSupportsNativeInvite() {
              return this.adapter.isSupportsNativeInvite
          }
          get isSupportShareParams() {
              return this.adapter.isSupportShareParams
          }
          get isSupportsNativeCommunityJoin() {
              return this.adapter.isSupportsNativeCommunityJoin
          }
          get canJoinCommunity() {
              return this.adapter.canJoinCommunity && !!this.communityLink
          }
          get communityLink() {
              return this.adapter.getCommunityLink(Re(this, Te, "a", ke))
          }
          get shareParams() {
              return this.adapter.shareParams || {}
          }
          _getShareOptions(e) {
              return Ce(this, void 0, void 0, (function*() {
                  return yield this.gp.app.requestGameUrl(),
                  {
                      text: e.text || this.gp.app.title,
                      image: e.image || "",
                      url: e.url || this.gp.app.url
                  }
              }
              ))
          }
          _shareByOverlay(e, t) {
              var r;
              return Ce(this, void 0, void 0, (function*() {
                  if (this.gp.isMobile)
                      try {
                          const e = yield this._getShareOptions(t)
                            , n = Object.assign({}, e);
                          if (e.image) {
                              const t = yield fetch(e.image).then((e => e.blob()));
                              n.files = [new File([t],"image.png",{
                                  type: t.type,
                                  lastModified: (new Date).getTime()
                              })]
                          }
                          const i = window.navigator;
                          if (null === (r = i.canShare) || void 0 === r ? void 0 : r.call(i, n))
                              return i.share(n)
                      } catch (e) {
                          y.kg.warn(e)
                      }
                  return yield this.gp.loadOverlay(),
                  this.gp.overlay.share(e, yield this._getShareOptions(t))
              }
              ))
          }
          share(e={}) {
              return Ce(this, void 0, void 0, (function*() {
                  if (!this.isSupportsShare)
                      return this._events.emit("share", !1),
                      !1;
                  const t = this.isSupportsNativeShare ? this.adapter.share(yield this._getShareOptions(e)) : this._shareByOverlay("share", e)
                    , r = yield t.catch(( () => !1));
                  return this._events.emit("share", r),
                  r
              }
              ))
          }
          post(e={}) {
              return Ce(this, void 0, void 0, (function*() {
                  if (!this.isSupportsShare)
                      return this._events.emit("post", !1),
                      !1;
                  const t = this.isSupportsNativePosts ? this.adapter.post(yield this._getShareOptions(e)) : this._shareByOverlay("post", e)
                    , r = yield t.catch(( () => !1));
                  return this._events.emit("post", r),
                  r
              }
              ))
          }
          invite(e={}) {
              return Ce(this, void 0, void 0, (function*() {
                  if (!this.isSupportsShare)
                      return this._events.emit("invite", !1),
                      !1;
                  const t = this.isSupportsNativeInvite ? this.adapter.invite(yield this._getShareOptions(e)) : this._shareByOverlay("invite", e)
                    , r = yield t.catch(( () => !1));
                  return this._events.emit("invite", r),
                  r
              }
              ))
          }
          joinCommunity() {
              return Ce(this, void 0, void 0, (function*() {
                  if (!this.canJoinCommunity)
                      return this._events.emit("joinCommunity", !1),
                      !1;
                  let e = !0;
                  return this.isSupportsNativeCommunityJoin && (e = yield this.adapter.joinCommunity(Re(this, Te, "a", Oe))),
                  window.open(this.communityLink, "_blank"),
                  this._events.emit("joinCommunity", e),
                  e
              }
              ))
          }
          addShareParamsToUrl(e, t={}) {
              return this.adapter.addShareParamsToUrl(e, t)
          }
          makeShareUrl(e={}) {
              return !!this.isSupportShareParams && (0 === Object.keys(e).length ? this.gp.app.url : this.adapter.makeShareUrl(e))
          }
          getShareParam(e) {
              var t;
              return !!this.isSupportShareParams && (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t ? t : "")
          }
      }
      Te = new WeakSet,
      Oe = function() {
          return this.config.platformConfig.communityLinks[this.gp.language] || this.config.platformConfig.communityLinks.en || ""
      }
      ,
      ke = function() {
          return Re(this, Te, "a", Oe) || this.config.config.communityLinks[this.gp.language] || this.config.config.communityLinks.en || ""
      }
      ;
      var De = a(2954)
        , xe = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      function Ne() {
          var e;
          return xe(this, void 0, void 0, (function*() {
              const t = new URL(window.location.href)
                , {searchParams: r, hostname: i, hash: s} = t
                , {platformType: a} = function() {
                  const {platformType: e} = window.__GS_BOOT_CONFIG__ || {};
                  return {
                      platformType: e
                  }
              }()
                , o = yield function() {
                  return xe(this, void 0, void 0, (function*() {
                      const e = (0,
                      n._)()
                        , {cordova: t} = window;
                      if (t)
                          try {
                              yield function() {
                                  const e = (0,
                                  n._)({
                                      timeout: 5e3
                                  });
                                  return document.addEventListener("deviceready", ( () => e.done()), !1),
                                  e.ready
                              }();
                              const {device: r} = window;
                              "Android" === (null == r ? void 0 : r.platform) ? e.done(!0) : t.exec(( () => {
                                  e.done(!0)
                              }
                              ), ( () => {
                                  e.done(!1)
                              }
                              ), "GooglePlayServicesChecker", "check", [])
                          } catch (t) {
                              console.warn(t),
                              e.done(!1)
                          }
                      else
                          e.done(!1);
                      return e.ready
                  }
                  ))
              }();
              return function(e) {
                  return !!e.hostname.includes(["games", "s3", "yandex", "net"].join(".")) || !!e.hash.includes("origin=https") && (e.hash.includes("app-id=") || e.searchParams.has("app-id"))
              }(t) ? {
                  platformType: F.z.YANDEX
              } : i.includes("gamemonetize.co") ? {
                  platformType: F.z.GAME_MONETIZE
              } : i.includes("gamedistribution.co") ? {
                  platformType: F.z.GAME_DISTRIBUTION
              } : i.includes("crazygames.com") ? {
                  platformType: F.z.CRAZY_GAMES
              } : i.includes(".gamepix.com") ? {
                  platformType: F.z.GAMEPIX
              } : i.includes(".wgplayground.com") ? {
                  platformType: F.z.WG_PLAYGROUND
              } : i.includes("poki.com") || r.has("pokiDebug") || i.includes("poki-gdn.com") ? {
                  platformType: F.z.POKI
              } : r.has("api_id") && r.has("viewer_id") && r.has("auth_key") || r.get("vk_user_id") && r.get("sign") && r.get("vk_app_id") ? {
                  platformType: F.z.VK
              } : r.has("auth_sig") && r.has("session_key") ? {
                  platformType: F.z.OK
              } : r.has("gp_beeline_token") ? {
                  platformType: F.z.BEELINE
              } : i.includes(".konggames.com") || r.has("kongregate_game_version") && r.has("kongregate_host") ? {
                  platformType: F.z.KONGREGATE
              } : i.includes("static.developer.sberdevices.ru") || Array.isArray(window.appInitialData) && window.appInitialData.some((e => "app_context" === (null == e ? void 0 : e.type))) ? {
                  platformType: F.z.SMARTMARKET
              } : function(e) {
                  const {searchParams: t} = e;
                  if (!(t.get("lang") || "").includes("_"))
                      return !1;
                  if (!t.has("currency"))
                      return !1;
                  if (t.has("uid") && t.has("sign") && t.has("appid"))
                      return !0;
                  const r = t.get("status");
                  return Number(t.get("appid")) > 0 || r.length > 0 && !Number.isNaN(t.get("status"))
              }(t) ? {
                  platformType: F.z.VK_PLAY
              } : a ? {
                  platformType: a
              } : o ? {
                  platformType: F.z.GOOGLE_PLAY
              } : "true" === r.get("telegram") && "true" === r.get("playdeck") ? {
                  platformType: F.z.PLAYDECK
              } : s.includes("tgWebAppData") || s.includes("tgWebAppPlatform") ? {
                  platformType: F.z.TELEGRAM
              } : function(e) {
                  var t, r;
                  const n = null === (t = e.get("_platform")) || void 0 === t ? void 0 : t.toUpperCase()
                    , i = null === (r = e.get("_platform-key")) || void 0 === r ? void 0 : r.trim();
                  return n === F.z.CUSTOM && !!i
              }(r) ? {
                  platformType: F.z.CUSTOM,
                  platformKey: r.get("_platform-key") || ""
              } : r.has("apiId") && r.has("viewerId") && r.has("authKey") ? {
                  platformType: F.z.FOTOSTRANA
              } : (null === (e = r.get("_platform")) || void 0 === e ? void 0 : e.toUpperCase()) !== F.z.CUSTOM ? {
                  platformType: r.get("_platform")
              } : {
                  platformType: F.z.NONE
              }
          }
          ))
      }
      var Me, Le = a(3080);
      function je(e) {
          return new Promise((function(t, r) {
              e.oncomplete = e.onsuccess = function() {
                  return t(e.result)
              }
              ,
              e.onabort = e.onerror = function() {
                  return r(e.error)
              }
          }
          ))
      }
      function Fe(e, t) {
          var r = indexedDB.open(e);
          r.onupgradeneeded = function() {
              return r.result.createObjectStore(t)
          }
          ;
          var n = je(r);
          return function(e, r) {
              return n.then((function(n) {
                  // console.log("adadadad downdowndown!!!!")
                  return r(n.transaction(t, e).objectStore(t))
              }
              ))
          }
      }
      function Ue() {
          return Me || (Me = Fe("keyval-store", "keyval")),
          Me
      }
      class Ge {
          constructor(e) {
              this.dbName = e,
              this.isLocal = !0;
              try {
                  this.store = Fe(this.dbName, "storage")
              } catch (e) {
                  y.kg.error(e)
              }
          }
          set(e, t) {
              return this.store ? function(e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ue())("readwrite", (function(r) {
                      return r.put(t, e),
                      je(r.transaction)
                  }
                  ))
              }(e, t, this.store).catch(( () => null)) : Promise.resolve()
          }
          get(e) {
              if (!this.store)
                  return Promise.resolve(null);
              const t = (0,
              n._)({
                  timeout: 2e3
              });
              return function(e) {
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue())("readonly", (function(t) {
                      return je(t.get(e))
                  }
                  ))
              }(e, this.store).then(t.done).catch(( () => t.done(null))),
              t.ready
          }
      }
      var $e, Be = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Ve = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class qe {
          constructor(e) {
              this.projectId = e,
              $e.set(this, void 0),
              this.isLocal = !0;
              try {
                  !function(e, t, r, n, i) {
                      if ("m" === n)
                          throw new TypeError("Private method is not writable");
                      if ("a" === n && !i)
                          throw new TypeError("Private accessor was defined without a setter");
                      if ("function" == typeof t ? e !== t || !i : !t.has(e))
                          throw new TypeError("Cannot write private member to an object whose class did not declare it");
                      "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
                  }(this, $e, window.localStorage, "f")
              } catch (e) {}
          }
          getKey(e) {
              return `gs-db-project-${this.projectId}-${e}`
          }
          set(e, t) {
              return Be(this, void 0, void 0, (function*() {
                  Ve(this, $e, "f").setItem(this.getKey(e), JSON.stringify(t))
              }
              ))
          }
          get(e) {
              return Be(this, void 0, void 0, (function*() {
                  try {
                      return JSON.parse(Ve(this, $e, "f").getItem(this.getKey(e)) || "null")
                  } catch (e) {}
              }
              ))
          }
      }
      $e = new WeakMap;
      var We = a(4687)
        , ze = a(1437)
        , Ye = a(4835)
        , Ke = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      const Je = e => {
          var t;
          return (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t ? void 0 : t.src) || ""
      }
        , Ze = e => {
          var {assets: t} = e
            , r = function(e, t) {
              var r = {};
              for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = 0;
                  for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
              }
              return r
          }(e, ["assets"]);
          return Object.assign(Object.assign({}, r), {
              icon: Je(t.icon)
          })
      }
        , He = [F.z.YANDEX, F.z.VK, F.z.OK, F.z.GAMEPIX];
      class Xe extends P.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          get isAvailable() {
              return this.gp.platform.isExternalLinksAllowed || He.includes(this.gp.platform.type)
          }
          open({id: e, tag: t, shareParams: r}={
              tag: "ALL",
              shareParams: {}
          }) {
              return Ke(this, void 0, void 0, (function*() {
                  if (this.isAvailable) {
                      this.gp.loader.inc();
                      try {
                          const [n] = yield Promise.all([this.fetch({
                              id: e,
                              tag: t,
                              shareParams: r
                          }), this.gp.loadOverlay(), (0,
                          ze.p)(Ye.Z.app.trophy).catch(y.kg.error)]);
                          this.gp.loader.dec(),
                          n.games.length > 0 && (this._events.emit("open"),
                          yield this.gp.overlay.openGamesCollections(n).catch(y.kg.error),
                          this._events.emit("close"))
                      } catch (e) {
                          this.gp.loader.dec(),
                          y.kg.error(e)
                      }
                  } else
                      y.kg.warn(`Not available on ${this.gp.platform.type}`)
              }
              ))
          }
          fetch({id: e, tag: t="ALL", shareParams: r={}}={
              tag: "ALL",
              shareParams: {}
          }) {
              return Ke(this, void 0, void 0, (function*() {
                  if (!this.isAvailable)
                      return void y.kg.warn(`Not available on ${this.gp.platform.type}`);
                  const i = (0,
                  n._)();
                  this.gp.loader.inc();
                  try {
                      const n = yield this.gp._services.gamesCollectionsService.fetch({
                          id: e,
                          tag: t,
                          urlFrom: this.gp.app.url
                      });
                      if (!n)
                          throw new Error("can't fetch GamesCollections list");
                      const s = Object.assign(Object.assign({}, n), {
                          games: n.games.filter((e => e.url)).map(Ze)
                      });
                      Object.keys(r).length > 0 && (s.games = s.games.map((e => Object.assign(Object.assign({}, e), {
                          url: this.gp.socials.addShareParamsToUrl(e.url, r)
                      })))),
                      s.games || y.kg.warn("empty games collection"),
                      i.done(s),
                      this._events.emit("fetch", s)
                  } catch (e) {
                      i.abort(e),
                      this._events.emit("error:fetch")
                  } finally {
                      this.gp.loader.dec()
                  }
                  return i.ready
              }
              ))
          }
      }
      var Qe, et, tt, rt = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, nt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class it {
          constructor(e) {
              this.queryBuilder = e,
              Qe.set(this, {}),
              et.set(this, (function(e={}, t) {
                  return rt(this, void 0, void 0, (function*() {
                      const r = (0,
                      n._)();
                      e.limit = e.limit || 10;
                      try {
                          const n = yield t(e)
                            , i = n.length === e.limit;
                          nt(this, Qe, "f")[this.queryBuilder(e)] = Object.assign(Object.assign({}, e), {
                              canLoadMore: i
                          }),
                          r.done({
                              items: n,
                              canLoadMore: i
                          })
                      } catch (e) {
                          r.abort(e)
                      }
                      return r.ready
                  }
                  ))
              }
              )),
              tt.set(this, (function(e={}, t) {
                  return rt(this, void 0, void 0, (function*() {
                      const r = this.queryBuilder(e)
                        , i = nt(this, Qe, "f")[r];
                      if (!i)
                          return yield this.fetch(e, t);
                      if (!i.canLoadMore)
                          return {
                              items: [],
                              canLoadMore: !1
                          };
                      const s = (0,
                      n._)()
                        , a = (i.offset || 0) + (i.limit || 0);
                      i.limit = e.limit || i.limit;
                      const o = Object.assign({}, nt(this, Qe, "f")[r])
                        , c = Object.assign(Object.assign({}, i), {
                          offset: a
                      });
                      nt(this, Qe, "f")[r] = c;
                      try {
                          const e = yield t(c)
                            , n = e.length === c.limit;
                          nt(this, Qe, "f")[r].canLoadMore = n,
                          s.done({
                              items: e,
                              canLoadMore: n
                          })
                      } catch (e) {
                          nt(this, Qe, "f")[r] = o,
                          s.abort(e)
                      }
                      return s.ready
                  }
                  ))
              }
              ))
          }
          fetch(e={}, t) {
              return nt(this, et, "f").call(this, e, t)
          }
          fetchMore(e={}, t) {
              return rt(this, void 0, void 0, (function*() {
                  return nt(this, tt, "f").call(this, e, t)
              }
              ))
          }
      }
      Qe = new WeakMap,
      et = new WeakMap,
      tt = new WeakMap;
      var st, at, ot, ct, lt, ht, ut, dt, ft, pt, vt = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, yt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, mt = function(e, t) {
          var r = {};
          for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
          }
          return r
      };
      class gt extends P.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this._config = t,
              st.set(this, new it((e => ["channels", (e.tags || []).join(","), e.search || "", (e.ids || []).join(","), e.onlyJoined || !1, e.onlyOwned || !1].join(":")))),
              at.set(this, new it((e => `channelsMembers:${e.channelId}`))),
              ot.set(this, new it((e => `invites:${e.channelId}`))),
              ct.set(this, new it((e => `channelsInvites:${e.channelId}`))),
              lt.set(this, new it((e => "sentInvites"))),
              ht.set(this, new it((e => `channelsJoinRequests:${e.channelId}`))),
              ut.set(this, new it((e => "sentJoinRequests"))),
              dt.set(this, new it((e => `channelsJoinRequests:${e.channelId}:${(e.tags || []).join(",")}`))),
              ft.set(this, new it((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`))),
              pt.set(this, new it((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`)))
          }
          get canBeOnline() {
              return this._config.acl.canConnectOnline
          }
          get isMainChatEnabled() {
              return this._config.project.enableMainChat && this.mainChatId > 0
          }
          get mainChatId() {
              return this._config.project.mainChatId
          }
          _handleResponse(e, t) {
              e.then((e => this._events.emit(t, e))),
              e.catch((e => {
                  y.kg.error(e),
                  this._events.emit(`error:${t}`, e)
              }
              ))
          }
          sendInvite(e) {
              const t = this.gp._services.channelsService.invites.sendInvite(e);
              return this._handleResponse(t, "sendInvite"),
              t
          }
          cancelInvite(e) {
              const t = this.gp._services.channelsService.invites.cancelInvite(e);
              return this._handleResponse(t, "cancelInvite"),
              t
          }
          acceptInvite(e) {
              const t = this.gp._services.channelsService.invites.acceptInvite(e);
              return this._handleResponse(t, "acceptInvite"),
              t
          }
          rejectInvite(e) {
              const t = this.gp._services.channelsService.invites.rejectInvite(e);
              return this._handleResponse(t, "rejectInvite"),
              t
          }
          join(e) {
              const t = this.gp._services.channelsService.members.join(e);
              return this._handleResponse(t, "join"),
              t
          }
          leave(e) {
              const t = this.gp._services.channelsService.members.leave(e);
              return this._handleResponse(t, "leave"),
              t
          }
          cancelJoin(e) {
              const t = this.gp._services.channelsService.members.cancelJoin(e);
              return this._handleResponse(t, "cancelJoin"),
              t
          }
          acceptJoinRequest(e) {
              const t = this.gp._services.channelsService.joinRequests.acceptJoinRequest(e);
              return this._handleResponse(t, "acceptJoinRequest"),
              t
          }
          rejectJoinRequest(e) {
              const t = this.gp._services.channelsService.joinRequests.rejectJoinRequest(e);
              return this._handleResponse(t, "rejectJoinRequest"),
              t
          }
          fetchMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, dt, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMessages"),
                  t
              }
              ))
          }
          fetchMoreMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, dt, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreMessages"),
                  t
              }
              ))
          }
          fetchPersonalMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ft, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchPersonalMessages"),
                  t
              }
              ))
          }
          fetchMorePersonalMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ft, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMorePersonalMessages"),
                  t
              }
              ))
          }
          fetchFeedMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, pt, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchFeedMessages"),
                  t
              }
              ))
          }
          fetchMoreFeedMessages(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, pt, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreFeedMessages"),
                  t
              }
              ))
          }
          sendMessage(e) {
              const t = this.gp._services.channelsService.messages.sendMessage(e);
              return this._handleResponse(t, "sendMessage"),
              t
          }
          sendFeedMessage(e) {
              const t = this.gp._services.channelsService.messages.sendFeedMessage(e);
              return this._handleResponse(t, "sendMessage"),
              t
          }
          sendPersonalMessage(e) {
              const t = this.gp._services.channelsService.messages.sendPersonalMessage(e);
              return this._handleResponse(t, "sendMessage"),
              t
          }
          editMessage(e) {
              const t = this.gp._services.channelsService.messages.editMessage(e);
              return this._handleResponse(t, "editMessage"),
              t
          }
          deleteMessage(e) {
              const t = this.gp._services.channelsService.messages.deleteMessage(e);
              return this._handleResponse(t, "deleteMessage"),
              t
          }
          mute(e) {
              var {seconds: t=0} = e;
              const r = mt(e, ["seconds"]);
              if (t > 0) {
                  const e = new Date;
                  e.setSeconds(e.getSeconds() + t),
                  r.unmuteAt = e.toISOString()
              }
              const n = this.gp._services.channelsService.members.mute(r);
              return this._handleResponse(n, "mute"),
              n
          }
          unmute(e) {
              const t = this.gp._services.channelsService.members.unmute(e);
              return this._handleResponse(t, "unmute"),
              t
          }
          fetchMembers(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, at, "f").fetch(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                  return this._handleResponse(t, "fetchMembers"),
                  t
              }
              ))
          }
          fetchMoreMembers(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, at, "f").fetchMore(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                  return this._handleResponse(t, "fetchMoreMembers"),
                  t
              }
              ))
          }
          fetchInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ot, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchInvites"),
                  t
              }
              ))
          }
          fetchMoreInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ot, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreInvites"),
                  t
              }
              ))
          }
          fetchChannelInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ct, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchChannelInvites"),
                  t
              }
              ))
          }
          fetchMoreChannelInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ct, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreChannelInvites"),
                  t
              }
              ))
          }
          fetchSentInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, lt, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchSentInvites"),
                  t
              }
              ))
          }
          fetchMoreSentInvites(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, lt, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreSentInvites"),
                  t
              }
              ))
          }
          fetchJoinRequests(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ht, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchJoinRequests"),
                  t
              }
              ))
          }
          fetchMoreJoinRequests(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ht, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreJoinRequests"),
                  t
              }
              ))
          }
          fetchSentJoinRequests(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ut, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchSentJoinRequests"),
                  t
              }
              ))
          }
          fetchMoreSentJoinRequests(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = yt(this, ut, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreSentJoinRequests"),
                  t
              }
              ))
          }
          kick(e) {
              const t = this.gp._services.channelsService.members.kick(e);
              return this._handleResponse(t, "kick"),
              t
          }
          openChat({id: e, tags: t}={
              id: 0,
              tags: []
          }) {
              return vt(this, void 0, void 0, (function*() {
                  let r = e;
                  if (!e && this._config.project.enableMainChat && (r = this._config.project.mainChatId),
                  r) {
                      this.gp.loader.inc();
                      try {
                          const e = this.gp.loadOverlay()
                            , n = yield this.fetchChannel({
                              channelId: r
                          });
                          if (!(n.ownerId === this.gp.player.id ? n.ownerAcl : n.memberAcl).canViewMessages)
                              throw y.kg.error("access_denied"),
                              Error("access_denied");
                          n.isJoined || (yield this.join({
                              channelId: r
                          }),
                          n.membersCount += 1,
                          n.membersOnlineCount += 1,
                          n.isJoined = !0);
                          const [i] = yield Promise.all([this.fetchMessages({
                              channelId: r,
                              limit: 100,
                              tags: t
                          }), e]);
                          this.gp.loader.dec(),
                          this._events.emit("openChat"),
                          yield this.openChatOverlay(n, i, t),
                          this._events.emit("closeChat")
                      } catch (e) {
                          this._events.emit("error:openChat", e),
                          this.gp.loader.dec(),
                          y.kg.error(e)
                      }
                  } else
                      y.kg.error("empty_channel_id")
              }
              ))
          }
          openPersonalChat({playerId: e, tags: t}={
              playerId: 0,
              tags: []
          }) {
              return vt(this, void 0, void 0, (function*() {
                  if (e) {
                      this.gp.loader.inc();
                      try {
                          const r = this.gp.loadOverlay()
                            , n = yield this.fetchPersonalChannel({
                              playerId: e
                          })
                            , [i] = yield Promise.all([this.fetchPersonalMessages({
                              playerId: e,
                              limit: 100,
                              tags: t
                          }), r]);
                          this.gp.loader.dec(),
                          this._events.emit("openChat"),
                          yield this.openChatOverlay(n, i, t),
                          this._events.emit("closeChat")
                      } catch (e) {
                          this._events.emit("error:openChat", e),
                          this.gp.loader.dec(),
                          y.kg.error(e)
                      }
                  } else
                      y.kg.error("empty_player_id")
              }
              ))
          }
          openFeed({playerId: e, tags: t}={
              playerId: 0,
              tags: []
          }) {
              return vt(this, void 0, void 0, (function*() {
                  if (e) {
                      this.gp.loader.inc();
                      try {
                          const r = this.gp.loadOverlay()
                            , n = yield this.fetchFeedChannel({
                              playerId: e
                          })
                            , [i] = yield Promise.all([this.fetchFeedMessages({
                              playerId: e,
                              limit: 100,
                              tags: t
                          }), r]);
                          this.gp.loader.dec(),
                          this._events.emit("openChat"),
                          yield this.openChatOverlay(n, i, t),
                          this._events.emit("closeChat")
                      } catch (e) {
                          this._events.emit("error:openFeed", e),
                          this.gp.loader.dec(),
                          y.kg.error(e)
                      }
                  } else
                      y.kg.error("empty_player_id")
              }
              ))
          }
          openChatOverlay(e, t, r) {
              return vt(this, void 0, void 0, (function*() {
                  const {playerId: n, activeOverlay: i} = this.processTags(e.tags, this.gp.player.id)
                    , s = n ? parseInt(n, 10) : this.gp.player.id
                    , a = {
                      playerId: s,
                      tags: r,
                      channelName: e.name,
                      channelType: i
                  };
                  if ("personal" === i || "feed" === i) {
                      const e = yield this.gp.players.fetch({
                          ids: [s]
                      })
                        , [t] = e.players;
                      if (!t)
                          throw "player_not_found";
                      a.channelName = t.state.name || null
                  }
                  yield this.gp.overlay.openChat(e, t, a)
              }
              ))
          }
          processTags(e, t) {
              let r = "channel"
                , n = "";
              return e.forEach((e => {
                  e.startsWith("@feed:") ? (r = "feed",
                  n = e.split(":").filter((e => !isNaN(parseInt(e, 10)))).join("")) : e.startsWith("@personal:") && (r = "personal",
                  n = e.split(":").filter((e => !isNaN(parseInt(e, 10)))).filter((e => e !== t.toString())).join(""))
              }
              )),
              {
                  playerId: n,
                  activeOverlay: r
              }
          }
          fetchChannel(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchChannel(e);
                  return this._handleResponse(t, "fetchChannel"),
                  t
              }
              ))
          }
          fetchPersonalChannel(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchPersonalChannel(e);
                  return this._handleResponse(t, "fetchPersonalChannel"),
                  t
              }
              ))
          }
          fetchFeedChannel(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchFeedChannel(e);
                  return this._handleResponse(t, "fetchFeedChannel"),
                  t
              }
              ))
          }
          fetchChannels(e) {
              var {ids: t=[]} = e
                , r = mt(e, ["ids"]);
              return vt(this, void 0, void 0, (function*() {
                  const e = r;
                  (t = t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                  const n = yt(this, st, "f").fetch(r, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
                  return this._handleResponse(n, "fetchChannels"),
                  n
              }
              ))
          }
          fetchMoreChannels(e) {
              var {ids: t=[]} = e
                , r = mt(e, ["ids"]);
              return vt(this, void 0, void 0, (function*() {
                  const e = r;
                  (t = null == t ? void 0 : t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                  const n = yt(this, st, "f").fetchMore(r, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
                  return this._handleResponse(n, "fetchMoreChannels"),
                  n
              }
              ))
          }
          createChannel(e) {
              const t = this.gp._services.channelsService.channels.createChannel(e);
              return this._handleResponse(t, "createChannel"),
              t
          }
          updateChannel(e) {
              const t = this.gp._services.channelsService.channels.updateChannel(e);
              return this._handleResponse(t, "updateChannel"),
              t
          }
          deleteChannel(e) {
              const t = this.gp._services.channelsService.channels.deleteChannel(e);
              return this._handleResponse(t, "deleteChannel"),
              t
          }
          _connect(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = () => this.gp._services.channelsService.ping(e);
                  if (window.setInterval(t, 3e4),
                  t(),
                  !this.canBeOnline)
                      return;
                  const r = new TextDecoder
                    , n = yield this.gp._services.channelsService.createCentrifugeClient(e, "", "", "");
                  n && n.on("connected", (e => {
                      console.info(`connected over ${e.transport}`)
                  }
                  )).on("connecting", (function(e) {
                      console.info(`connecting: ${e.code}, ${e.reason}`)
                  }
                  )).on("disconnected", (function(e) {
                      console.info(`disconnected: ${e.code}, ${e.reason}`)
                  }
                  )).on("publication", (e => {
                      const t = JSON.parse(r.decode(e.data));
                      (null == t ? void 0 : t.type) && (this._events.emit("event", t),
                      this._events.emit(t.type, t.data))
                  }
                  )).connect()
              }
              ))
          }
      }
      st = new WeakMap,
      at = new WeakMap,
      ot = new WeakMap,
      ct = new WeakMap,
      lt = new WeakMap,
      ht = new WeakMap,
      ut = new WeakMap,
      dt = new WeakMap,
      ft = new WeakMap,
      pt = new WeakMap;
      var wt = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class bt extends P.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          open({type: e}) {
              return wt(this, void 0, void 0, (function*() {
                  this.gp.loader.inc();
                  try {
                      const [t] = yield Promise.all([this.fetch({
                          type: e
                      }), this.gp.loadOverlay(), (0,
                      ze.p)(Ye.Z.app.trophy).catch(y.kg.error)]);
                      this.gp.loader.dec(),
                      t ? (t.format = "HTML",
                      this._events.emit("open"),
                      yield this.gp.overlay.openDocument(t).catch(y.kg.error),
                      this._events.emit("close")) : y.kg.error(new Error("document not found"))
                  } catch (e) {
                      this.gp.loader.dec(),
                      y.kg.error(e)
                  }
              }
              ))
          }
          fetch({type: e, format: t="HTML"}) {
              return wt(this, void 0, void 0, (function*() {
                  const r = (0,
                  n._)();
                  this.gp.loader.inc();
                  try {
                      const n = yield this.gp._services.documentsService.fetch({
                          type: e,
                          format: t
                      });
                      if (!n)
                          throw new Error("can't fetch privacy policy");
                      n.format = t,
                      r.done(n),
                      this._events.emit("fetch", n)
                  } catch (e) {
                      r.abort(e),
                      this._events.emit("error:fetch", e)
                  } finally {
                      this.gp.loader.dec()
                  }
                  return r.ready
              }
              ))
          }
      }
      var Et, Pt = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, St = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const _t = {
          data: e => String(e || ""),
          stats: e => Number(e) || 0,
          flag: e => Boolean(e) || !1,
          image: e => String(e || ""),
          doc_html: e => String(e || ""),
          file: e => String(e || "")
      };
      class At extends P.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              this.platformAdapter = t,
              this.state = {},
              this.list = [],
              Et.set(this, (function(e) {
                  this.state = {},
                  this.list = e,
                  e.forEach((e => {
                      var t;
                      const r = (null === (t = _t[e.type]) || void 0 === t ? void 0 : t.call(_t, e.value)) || e.value;
                      this.state[e.key] = r
                  }
                  )),
                  this._events.emit("change")
              }
              )),
              St(this, Et, "f").call(this, r)
          }
          get isPlatformVariablesAvailable() {
              return this.platformAdapter.isSupportsRemoteVariables
          }
          get(e) {
              return this.state[e]
          }
          has(e) {
              return Boolean(this.get(e))
          }
          type(e) {
              var t;
              return (null === (t = this.list.find((t => t.key === e))) || void 0 === t ? void 0 : t.type) || "data"
          }
          fetch() {
              return e = this,
              t = void 0,
              n = function*() {
                  try {
                      const e = (yield this.gp._services.projectService.fetchVariables()).items;
                      return St(this, Et, "f").call(this, e),
                      this._events.emit("fetch", e),
                      e
                  } catch (e) {
                      y.kg.error(e),
                      this._events.emit("error:fetch", e)
                  }
              }
              ,
              new ((r = void 0) || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ));
              var e, t, r, n
          }
          fetchPlatformVariables(e) {
              const t = this.platformAdapter.getVariables(e);
              return t.then((e => this._events.emit("fetchPlatformVariables", e))).catch((e => {
                  y.kg.error(e),
                  this._events.emit("error:fetchPlatformVariables", (null == e ? void 0 : e.message) || e)
              }
              )),
              t
          }
      }
      Et = new WeakMap,
      Pt([O(300)], At.prototype, "fetch", null),
      Pt([O(300)], At.prototype, "fetchPlatformVariables", null);
      var Tt, Ot, kt, Ct, Rt = a(6041), It = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, Dt = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, xt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, Nt = function(e, t) {
          var r = {};
          for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
          }
          return r
      };
      const Mt = "empty_url"
        , Lt = "empty_content"
        , jt = "empty_filename";
      class Ft extends it {
          constructor() {
              super(Ut),
              Tt.set(this, void 0),
              Ot.set(this, {}),
              kt.set(this, (function(e, t) {
                  var {url: r, filename: n} = e
                    , i = Nt(e, ["url", "filename"]);
                  return Dt(this, void 0, void 0, (function*() {
                      if (!r)
                          throw y.kg.error(Mt),
                          new Error(Mt);
                      if (!n)
                          throw y.kg.error(jt),
                          new Error(jt);
                      if (xt(this, Ot, "f")[r]) {
                          const e = new File([xt(this, Ot, "f")[r]],n,xt(this, Ot, "f")[r]);
                          return t(Object.assign(Object.assign({}, i), {
                              file: e
                          }))
                      }
                      try {
                          const e = yield fetch(r).then((e => e.blob()));
                          return t(Object.assign(Object.assign({}, i), {
                              file: new File([e],n,{
                                  type: e.type
                              })
                          }))
                      } catch (e) {
                          throw y.kg.error(e),
                          e
                      }
                  }
                  ))
              }
              )),
              Ct.set(this, (function(e, t) {
                  return Dt(this, void 0, void 0, (function*() {
                      const {content: r, filename: n} = e
                        , i = Nt(e, ["content", "filename"]);
                      if (!r.trim())
                          throw y.kg.error(Lt),
                          new Error(Lt);
                      if (!n)
                          throw y.kg.error(jt),
                          new Error(jt);
                      return t(Object.assign(Object.assign({}, i), {
                          file: new File([r],n)
                      }))
                  }
                  ))
              }
              ));
              const {openFile: e} = function() {
                  let e = null;
                  const t = document.createElement("input");
                  t.type = "file",
                  t.id = "gp-file-input",
                  t.style.cssText = "position: fixed; top: -999px; left: -999px; z-index: 0;",
                  t.onchange = e => i(e.target),
                  t.tabIndex = -1,
                  document.body.appendChild(t);
                  const r = () => {
                      setTimeout(( () => e.done(null)), 1e3),
                      document.body.removeEventListener("focus", r, !0)
                  }
                    , i = t => {
                      const [n] = t.files ? Array.from(t.files) : [];
                      document.body.removeEventListener("focus", r, !0),
                      e.done(n)
                  }
                  ;
                  return {
                      input: t,
                      openFile: (i="*") => {
                          return s = this,
                          a = void 0,
                          c = function*() {
                              null == e || e.abort(),
                              e = (0,
                              n._)(),
                              t.accept = i,
                              t.click(),
                              document.body.addEventListener("focus", r, !0);
                              const s = yield e.ready;
                              if (s)
                                  return s;
                              throw new Error("cancelled")
                          }
                          ,
                          new ((o = void 0) || (o = Promise))((function(e, t) {
                              function r(e) {
                                  try {
                                      i(c.next(e))
                                  } catch (e) {
                                      t(e)
                                  }
                              }
                              function n(e) {
                                  try {
                                      i(c.throw(e))
                                  } catch (e) {
                                      t(e)
                                  }
                              }
                              function i(t) {
                                  var i;
                                  t.done ? e(t.value) : (i = t.value,
                                  i instanceof o ? i : new o((function(e) {
                                      e(i)
                                  }
                                  ))).then(r, n)
                              }
                              i((c = c.apply(s, a || [])).next())
                          }
                          ));
                          var s, a, o, c
                      }
                  }
              }();
              !function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Tt, e, "f")
          }
          chooseFile(e) {
              return Dt(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  try {
                      const r = yield xt(this, Tt, "f").call(this, e)
                        , n = URL.createObjectURL(r);
                      xt(this, Ot, "f")[n] = r,
                      t.done({
                          file: r,
                          tempUrl: n
                      })
                  } catch (e) {
                      t.abort(e)
                  }
                  return t.ready
              }
              ))
          }
          upload(e, t) {
              return Dt(this, void 0, void 0, (function*() {
                  const r = (0,
                  n._)();
                  try {
                      e.file || (e.file = yield xt(this, Tt, "f").call(this, e.accept));
                      const n = yield t(e);
                      r.done(n)
                  } catch (e) {
                      r.abort(e)
                  }
                  return r.ready
              }
              ))
          }
          uploadUrl(e, t) {
              return Dt(this, void 0, void 0, (function*() {
                  return xt(this, kt, "f").call(this, e, t)
              }
              ))
          }
          uploadContent(e, t) {
              return Dt(this, void 0, void 0, (function*() {
                  return xt(this, Ct, "f").call(this, e, t)
              }
              ))
          }
      }
      function Ut(e) {
          return `p${e.playerId || 0}:${(e.tags || []).join(",")}`
      }
      Tt = new WeakMap,
      Ot = new WeakMap,
      kt = new WeakMap,
      Ct = new WeakMap,
      It([O(300)], Ft.prototype, "uploadUrl", null),
      It([O(300)], Ft.prototype, "uploadContent", null);
      var Gt, $t = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Bt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const Vt = "image/png,.jpeg,.jpg";
      class qt extends P.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this.acl = t,
              Gt.set(this, new Ft)
          }
          get canUpload() {
              return this.acl.canUploadImages
          }
          resize(e, t, r, n) {
              return (0,
              Rt.Z)(e, t, r, n)
          }
          chooseFile() {
              return $t(this, void 0, void 0, (function*() {
                  const e = Bt(this, Gt, "f").chooseFile(Vt);
                  return e.then((e => this._events.emit("choose", e))),
                  e.catch((e => this._events.emit("error:choose", e))),
                  e
              }
              ))
          }
          upload(e={}) {
              return $t(this, void 0, void 0, (function*() {
                  const t = Bt(this, Gt, "f").upload(Object.assign(Object.assign({}, e), {
                      accept: Vt
                  }), ( ({file: e, tags: t}) => $t(this, void 0, void 0, (function*() {
                      const r = this.gp.app.title
                        , n = yield this.gp.platform.requestPermissions({
                          allowUploadImages: !0
                      });
                      if (!n.success)
                          throw new Error("permission_not_allowed_by_user");
                      if (this.gp.platform.isSupportsImageUploading) {
                          const i = yield this.gp.platform.uploadImage({
                              file: e,
                              tags: t,
                              albumName: r,
                              accessToken: n.payload.token
                          });
                          return this.gp._services.imagesService.saveByURL({
                              src: i.src,
                              tags: t,
                              crop: {
                                  height: i.height,
                                  width: i.width,
                                  left: 0,
                                  top: 0
                              }
                          })
                      }
                      return this.gp._services.imagesService.upload({
                          file: e,
                          tags: t,
                          accessPayload: n.payload
                      })
                  }
                  ))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("upload", e))),
                  t.catch((e => this._events.emit("error:upload", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          uploadUrl(e={
              url: ""
          }) {
              return $t(this, void 0, void 0, (function*() {
                  return Bt(this, Gt, "f").uploadUrl(Object.assign(Object.assign({}, e), {
                      filename: "image.jpeg"
                  }), (e => this.upload(e)))
              }
              ))
          }
          fetch(e={}) {
              return $t(this, void 0, void 0, (function*() {
                  const t = Bt(this, Gt, "f").fetch(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetch", e))),
                  t.catch((e => this._events.emit("error:fetch", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          fetchMore(e={}) {
              return $t(this, void 0, void 0, (function*() {
                  const t = Bt(this, Gt, "f").fetchMore(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetchMore", e))),
                  t.catch((e => this._events.emit("error:fetchMore", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
      }
      Gt = new WeakMap;
      var Wt, zt = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Yt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Kt extends P.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this.acl = t,
              Wt.set(this, new Ft)
          }
          get canUpload() {
              return this.acl.canUploadFiles
          }
          chooseFile(e) {
              return zt(this, void 0, void 0, (function*() {
                  const t = Yt(this, Wt, "f").chooseFile(e);
                  return t.then((e => this._events.emit("choose", e))),
                  t.catch((e => this._events.emit("error:choose", e))),
                  t
              }
              ))
          }
          upload(e) {
              return zt(this, void 0, void 0, (function*() {
                  const t = Yt(this, Wt, "f").upload(e, (e => this.gp._services.filesService.upload(e)));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("upload", e))),
                  t.catch((e => this._events.emit("error:upload", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          uploadContent(e) {
              return zt(this, void 0, void 0, (function*() {
                  return Yt(this, Wt, "f").uploadContent(e, (e => this.upload(e)))
              }
              ))
          }
          uploadUrl(e) {
              return zt(this, void 0, void 0, (function*() {
                  return Yt(this, Wt, "f").uploadUrl(e, (e => this.upload(e)))
              }
              ))
          }
          loadContent(e) {
              return zt(this, void 0, void 0, (function*() {
                  const t = fetch(new URL(e).toString()).then((t => {
                      if (t.ok)
                          return t.text();
                      throw new Error(`Failed to load ${e}, errorCode: ${t.status}`)
                  }
                  ));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("loadContent", e))),
                  t.catch((e => this._events.emit("error:loadContent", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          fetch(e={}) {
              return zt(this, void 0, void 0, (function*() {
                  const t = Yt(this, Wt, "f").fetch(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetch", e))),
                  t.catch((e => this._events.emit("error:fetch", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          fetchMore(e={}) {
              return zt(this, void 0, void 0, (function*() {
                  const t = Yt(this, Wt, "f").fetchMore(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetchMore", e))),
                  t.catch((e => this._events.emit("error:fetchMore", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
      }
      Wt = new WeakMap;
      var Jt = a(1049);
      class Zt extends P.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          fetch({ids: e}) {
              return t = this,
              r = void 0,
              s = function*() {
                  if (0 === e.map(Number).filter(Boolean).length)
                      throw y.kg.error("empty_ids"),
                      new Error("empty_ids");
                  const t = (0,
                  n._)();
                  return this.gp.loader.inc(),
                  t.ready.then((e => this._events.emit("fetch", e))).catch((e => this._events.emit("fetch:error", e))),
                  this.gp._services.playerService.fetchPlayers({
                      ids: e
                  }).then(t.done).catch(t.abort).finally(( () => this.gp.loader.dec())),
                  t.ready
              }
              ,
              new ((i = void 0) || (i = Promise))((function(e, n) {
                  function a(e) {
                      try {
                          c(s.next(e))
                      } catch (e) {
                          n(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(s.throw(e))
                      } catch (e) {
                          n(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof i ? r : new i((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((s = s.apply(t, r || [])).next())
              }
              ));
              var t, r, i, s
          }
      }
      let Ht;
      try {
          new EventTarget,
          Ht = !0
      } catch (e) {
          Ht = !1
      }
      var Xt = Ht ? EventTarget : class {
          constructor() {
              this.e = {}
          }
          addEventListener(e, t, r=!1) {
              this.t(e).push(t)
          }
          removeEventListener(e, t, r=!1) {
              const n = this.t(e)
                , i = n.indexOf(t);
              i > -1 && n.splice(i, 1)
          }
          dispatchEvent(e) {
              return e.target = this,
              Object.freeze(e),
              this.t(e.type).forEach((t => t(e))),
              !0
          }
          t(e) {
              return this.e[e] = this.e[e] || []
          }
      }
        , Qt = Ht ? Event : class {
          constructor(e) {
              this.type = e
          }
      }
      ;
      class er extends Qt {
          constructor(e, t) {
              super(e),
              this.newState = t.newState,
              this.oldState = t.oldState,
              this.originalEvent = t.originalEvent
          }
      }
      const tr = "active"
        , rr = "passive"
        , nr = "hidden"
        , ir = "frozen"
        , sr = "terminated"
        , ar = "object" == typeof safari && safari.pushNotification
        , or = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow"in self ? "pagehide" : "unload"]
        , cr = e => (e.preventDefault(),
      e.returnValue = "Are you sure?")
        , lr = [[tr, rr, nr, sr], [tr, rr, nr, ir], [nr, rr, tr], [ir, nr], [ir, tr], [ir, rr]].map((e => e.reduce(( (e, t, r) => (e[t] = r,
      e)), {})))
        , hr = () => document.visibilityState === nr ? nr : document.hasFocus() ? tr : rr
        , ur = new class extends Xt {
          constructor() {
              super();
              const e = hr();
              this.s = e,
              this.i = [],
              this.a = this.a.bind(this),
              or.forEach((e => addEventListener(e, this.a, !0))),
              ar && addEventListener("beforeunload", (e => {
                  this.n = setTimeout(( () => {
                      e.defaultPrevented || e.returnValue.length > 0 || this.r(e, nr)
                  }
                  ), 0)
              }
              ))
          }
          get state() {
              return this.s
          }
          get pageWasDiscarded() {
              return document.wasDiscarded || !1
          }
          addUnsavedChanges(e) {
              !this.i.indexOf(e) > -1 && (0 === this.i.length && addEventListener("beforeunload", cr),
              this.i.push(e))
          }
          removeUnsavedChanges(e) {
              const t = this.i.indexOf(e);
              t > -1 && (this.i.splice(t, 1),
              0 === this.i.length && removeEventListener("beforeunload", cr))
          }
          r(e, t) {
              if (t !== this.s) {
                  const r = ( (e, t) => {
                      for (let r, n = 0; r = lr[n]; ++n) {
                          const n = r[e]
                            , i = r[t];
                          if (n >= 0 && i >= 0 && i > n)
                              return Object.keys(r).slice(n, i + 1)
                      }
                      return []
                  }
                  )(this.s, t);
                  for (let t = 0; t < r.length - 1; ++t) {
                      const n = r[t]
                        , i = r[t + 1];
                      this.s = i,
                      this.dispatchEvent(new er("statechange",{
                          oldState: n,
                          newState: i,
                          originalEvent: e
                      }))
                  }
              }
          }
          a(e) {
              switch (ar && clearTimeout(this.n),
              e.type) {
              case "pageshow":
              case "resume":
                  this.r(e, hr());
                  break;
              case "focus":
                  this.r(e, tr);
                  break;
              case "blur":
                  this.s === tr && this.r(e, hr());
                  break;
              case "pagehide":
              case "unload":
                  this.r(e, e.persisted ? ir : sr);
                  break;
              case "visibilitychange":
                  this.s !== ir && this.s !== sr && this.r(e, hr());
                  break;
              case "freeze":
                  this.r(e, ir)
              }
          }
      }
        , dr = ["hidden", "frozen", "terminated"];
      function fr({url: e, blur: t=0, fade: r=0}) {
          e ? (function(e) {
              document.querySelectorAll(".gp-custom-background").forEach((t => {
                  t.childNodes.forEach((e => {
                      e.style.opacity = "0"
                  }
                  )),
                  setTimeout(( () => {
                      t.remove()
                  }
                  ), 1e3 * e)
              }
              ))
          }(r),
          function(e) {
              const t = document.createElement("div");
              document.body.style.setProperty("background", "transparent", "important"),
              t.classList.add("gp-custom-background"),
              function(e, t) {
                  const r = document.createElement("div");
                  r.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `,
                  r.classList.add("gp-custom-background-blur"),
                  t.append(r)
              }(e, t),
              function(e, t) {
                  const r = document.createElement("div");
                  r.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `,
                  r.classList.add("gp-custom-background-img"),
                  t.append(r),
                  setTimeout(( () => {
                      r.style.opacity = "1"
                  }
                  ), 100)
              }(e, t),
              document.body.append(t)
          }({
              url: e,
              blur: t,
              fade: r
          })) : y.kg.warn("Empty background url")
      }
      class pr {
          getLanguage(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  const t = decodeURIComponent(window.location.toString())
                    , r = new RegExp(`_${e}_lang=(?<lang>\\w{2})`).exec(t);
                  return r ? r.groups.lang : null
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
      }
      var vr;
      class yr {
          constructor() {
              vr.set(this, [new pr])
          }
          getLanguage(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  for (const t of function(e, t, r, n) {
                      if ("a" === r && !n)
                          throw new TypeError("Private accessor was defined without a getter");
                      if ("function" == typeof t ? e !== t || !n : !t.has(e))
                          throw new TypeError("Cannot read private member from an object whose class did not declare it");
                      return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                  }(this, vr, "f")) {
                      const r = yield t.getLanguage(e);
                      if (null !== r)
                          return (0,
                          m.Ff)(r.toLowerCase()).unwrapOr(null)
                  }
                  return null
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
      }
      vr = new WeakMap;
      var mr = a(2940);
      const gr = () => window.matchMedia("(orientation: portrait)").matches
        , wr = e => {
          const t = gr();
          return t && e === mr.LH.Portrait || !t && e === mr.LH.Landscape
      }
      ;
      var br, Er = a(8866), Pr = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Sr {
          constructor() {
              br.set(this, new Set),
              document.addEventListener("pointerdown", (e => {
                  Pr(this, br, "f").add(e.pointerId)
              }
              )),
              document.addEventListener("pointerup", (e => {
                  Pr(this, br, "f").delete(e.pointerId)
              }
              ))
          }
          waitForPointersUp() {
              return e = this,
              t = void 0,
              n = function*() {
                  const e = new Promise((e => {
                      if (0 === Pr(this, br, "f").size)
                          return e();
                      const t = r => {
                          if (Pr(this, br, "f").delete(r.pointerId),
                          0 === Pr(this, br, "f").size)
                              return document.removeEventListener("pointerup", t),
                              e()
                      }
                      ;
                      document.addEventListener("pointerup", t)
                  }
                  ));
                  yield Promise.race([e, (0,
                  Er.Z)(1500)])
              }
              ,
              new ((r = void 0) || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ));
              var e, t, r, n
          }
      }
      br = new WeakMap;
      const _r = {
          [mr.W2.Add]: (e, t) => {
              e.player.add(t.key, t.value)
          }
          ,
          [mr.W2.Remove]: (e, t) => {
              e.player.add(t.key, -t.value)
          }
          ,
          [mr.W2.Set]: (e, t) => {
              e.player.set(t.key, t.value)
          }
      }
        , Ar = {
          [mr.x1.PlayerField]: _r
      };
      var Tr, Or, kr, Cr, Rr, Ir, Dr, xr, Nr, Mr, Lr, jr, Fr, Ur, Gr, $r, Br, Vr = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, qr = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, Wr = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const zr = "reward_not_found";
      class Yr extends P.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              Tr.add(this),
              Or.set(this, void 0),
              kr.set(this, []),
              Cr.set(this, []),
              Rr.set(this, []),
              Ir.set(this, {}),
              Dr.set(this, {}),
              xr.set(this, {}),
              qr(this, Cr, r, "f"),
              Wr(this, Tr, "m", $r).call(this),
              qr(this, Or, t, "f"),
              Wr(this, Or, "f").on("setRewardsList", (e => Wr(this, Tr, "m", jr).call(this, e.playerRewards, e.notSentGivenList, e.notSentAcceptedList))),
              Wr(this, Or, "f").on("markRewardsGiven", (e => {
                  e.forEach((e => {
                      const t = Wr(this, Tr, "m", Nr).call(this, e);
                      if (!t)
                          return void y.kg.error(`reward not found', ID ${e}`);
                      Wr(this, Tr, "m", Fr).call(this, t.id);
                      const r = Wr(this, Tr, "m", Lr).call(this, t.id);
                      this._events.emit("give", r),
                      t.isAutoAccept && this._events.emit("accept", r)
                  }
                  ))
              }
              )),
              this.gp.on("change:language", (e => {
                  Wr(this, Cr, "f").forEach((t => {
                      t.name = t.names[e] || t.names.en,
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  )),
                  Wr(this, Tr, "m", $r).call(this)
              }
              )),
              Wr(this, Cr, "f").forEach((e => {
                  e.description = e.descriptions[this.gp.language] || e.descriptions.en,
                  e.name = e.names[this.gp.language] || e.names.en,
                  e.icon = (0,
                  Rt.Z)(e.icon, 256, 256, !1),
                  e.iconSmall = (0,
                  Rt.Z)(e.icon, 48, 48, !1)
              }
              )),
              this.gp.on("gameStart", ( () => Vr(this, void 0, void 0, (function*() {
                  yield this.gp.player.ready,
                  Wr(this, Rr, "f").forEach((e => {
                      const t = Wr(this, Tr, "m", Nr).call(this, e.rewardId);
                      if (null == t ? void 0 : t.isAutoAccept) {
                          const r = e.countTotal - e.countAccepted;
                          if (r > 0)
                              for (let e = 0; e < r; e++)
                                  this.accept({
                                      id: t.id
                                  })
                      }
                  }
                  ))
              }
              ))))
          }
          get list() {
              return [...Wr(this, Cr, "f")]
          }
          get givenList() {
              return [...Wr(this, Rr, "f")]
          }
          give(e) {
              return Vr(this, void 0, void 0, (function*() {
                  const t = Number(e.id) || e.tag
                    , r = (0,
                  n._)()
                    , i = t => {
                      r.abort(t),
                      this._events.emit("error:give", t, {
                          input: e
                      })
                  }
                  ;
                  if (Wr(this, kr, "f").includes(t))
                      return i(zr),
                      r.ready;
                  const s = Wr(this, Tr, "m", Nr).call(this, t);
                  if (!s)
                      return i(zr),
                      r.ready;
                  if (e.lazy) {
                      let e = {
                          rewardId: s.id,
                          countTotal: 1,
                          countAccepted: 0
                      };
                      Wr(this, Tr, "m", Fr).call(this, s.id),
                      Wr(this, Or, "f").addGivenReward({
                          id: s.id,
                          count: 1
                      });
                      const t = Wr(this, Tr, "m", Mr).call(this, s.id);
                      return e.countTotal = t.countTotal,
                      e.countAccepted = t.countAccepted,
                      this._events.emit("give", {
                          reward: s,
                          playerReward: e
                      }),
                      s.isAutoAccept && (yield this.accept({
                          id: s.id
                      })),
                      r.done({
                          reward: s,
                          playerReward: e
                      }),
                      r.ready
                  }
                  this.gp.loader.inc();
                  const a = s.id;
                  try {
                      const e = yield this.gp._services.rewardsService.give({
                          id: a
                      })
                        , {reward: t} = e
                        , n = function(e, t) {
                          var r = {};
                          for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                              var i = 0;
                              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                  t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                          }
                          return r
                      }(e, ["reward"]);
                      Wr(this, Tr, "m", Fr).call(this, t.id);
                      const i = Wr(this, Tr, "m", Mr).call(this, t.id);
                      n.countTotal = i.countTotal,
                      n.countAccepted = i.countAccepted,
                      this._events.emit("give", {
                          reward: t,
                          playerReward: n
                      }),
                      t.isAutoAccept && (yield this.accept({
                          id: t.id
                      })),
                      r.done({
                          reward: t,
                          playerReward: n
                      })
                  } catch (n) {
                      "reward_not_found" === n && Wr(this, kr, "f").push(t),
                      "string" == typeof n ? (y.kg.error(n),
                      i(n)) : (r.abort(n),
                      this._events.emit("error:give", n, {
                          input: e
                      }))
                  } finally {
                      this.gp.loader.dec()
                  }
                  return r.ready
              }
              ))
          }
          accept(e) {
              return Vr(this, void 0, void 0, (function*() {
                  const t = Number(e.id) || e.tag
                    , r = (0,
                  n._)()
                    , i = t => {
                      r.abort(t),
                      this._events.emit("error:accept", t, {
                          input: e
                      })
                  }
                  ;
                  if (Wr(this, kr, "f").includes(t))
                      return i(zr),
                      r.ready;
                  if (!this.hasUnaccepted(t))
                      return i("reward_already_accepted"),
                      r.ready;
                  const {reward: s, playerReward: a} = Wr(this, Tr, "m", Lr).call(this, t);
                  return a ? (Wr(this, Tr, "m", Ur).call(this, a),
                  Wr(this, Or, "f").addAcceptedReward({
                      id: a.rewardId,
                      count: 1
                  }),
                  this._events.emit("accept", {
                      reward: s,
                      playerReward: a
                  }),
                  r.done({
                      reward: s,
                      playerReward: a
                  }),
                  r.ready) : (i("player_reward_not_found"),
                  r.ready)
              }
              ))
          }
          has(e) {
              var t;
              return (null === (t = Wr(this, Tr, "m", Lr).call(this, e).playerReward) || void 0 === t ? void 0 : t.countTotal) > 0
          }
          hasAccepted(e) {
              var t;
              return (null === (t = Wr(this, Tr, "m", Lr).call(this, e).playerReward) || void 0 === t ? void 0 : t.countAccepted) > 0
          }
          hasUnaccepted(e) {
              const {playerReward: t} = Wr(this, Tr, "m", Lr).call(this, e);
              return !!t && t.countTotal > t.countAccepted
          }
          getReward(e) {
              return Wr(this, Tr, "m", Lr).call(this, e)
          }
      }
      function Kr(e, t=1) {
          e.countAccepted += t
      }
      Or = new WeakMap,
      kr = new WeakMap,
      Cr = new WeakMap,
      Rr = new WeakMap,
      Ir = new WeakMap,
      Dr = new WeakMap,
      xr = new WeakMap,
      Tr = new WeakSet,
      Nr = function(e) {
          return Wr(this, Ir, "f")[e] || Wr(this, Dr, "f")[e]
      }
      ,
      Mr = function(e) {
          return Wr(this, xr, "f")[e]
      }
      ,
      Lr = function(e) {
          const t = {
              reward: null,
              playerReward: null
          }
            , r = Wr(this, Tr, "m", Nr).call(this, e);
          if (!r)
              return t;
          t.reward = r;
          const n = Wr(this, Tr, "m", Mr).call(this, r.id);
          return t.playerReward = n || {
              rewardId: r.id,
              countAccepted: 0,
              countTotal: 0
          },
          t
      }
      ,
      jr = function(e, t, r) {
          let n = [...r];
          const i = t.reduce(( (t, {id: r, count: n}) => {
              const i = e.find((e => e.rewardId === r));
              return i ? (i.countTotal += n,
              t) : (Wr(this, Cr, "f").find((e => e.id === r)) && t.push({
                  rewardId: r,
                  countTotal: n,
                  countAccepted: 0
              }),
              t)
          }
          ), [])
            , s = [...e, ...i];
          qr(this, Rr, s.reduce(( (e, t) => {
              if (Wr(this, Cr, "f").find((e => e.id === t.rewardId))) {
                  const r = n.find((e => e.id === t.rewardId));
                  r && (n = n.filter((e => e.id !== t.rewardId)),
                  Kr(t, r.count)),
                  e.push(t)
              }
              return e
          }
          ), []), "f"),
          Wr(this, Tr, "m", Br).call(this)
      }
      ,
      Fr = function(e) {
          if (!Wr(this, Tr, "m", Nr).call(this, e))
              return;
          const t = Wr(this, Tr, "m", Mr).call(this, e);
          t ? t.countTotal += 1 : (Wr(this, Rr, "f").unshift({
              rewardId: e,
              countTotal: 1,
              countAccepted: 0
          }),
          Wr(this, Tr, "m", Br).call(this))
      }
      ,
      Ur = function(e) {
          const t = Wr(this, Tr, "m", Nr).call(this, e.rewardId);
          t ? (Kr(e),
          Wr(this, Tr, "m", Gr).call(this, t)) : y.kg.error(`Reward ${e.rewardId} not found`)
      }
      ,
      Gr = function(e) {
          try {
              t = this.gp,
              e.mutations.forEach((e => {
                  const r = Ar[e.type];
                  if (!r)
                      throw new Error(`Unknown mutation type: ${e.type}`);
                  const n = r[e.action];
                  if (!n)
                      throw new Error(`Unknown mutation action: ${e.action}`);
                  n(t, e)
              }
              ))
          } catch (e) {
              y.kg.error("failed to apply reward", e)
          }
          var t
      }
      ,
      $r = function() {
          qr(this, Ir, {}, "f"),
          qr(this, Dr, {}, "f"),
          Wr(this, Cr, "f").forEach((e => {
              Wr(this, Ir, "f")[e.id] = e,
              Wr(this, Dr, "f")[e.tag] = e
          }
          ))
      }
      ,
      Br = function() {
          qr(this, xr, {}, "f"),
          Wr(this, Rr, "f").forEach((e => {
              Wr(this, xr, "f")[e.rewardId] = e
          }
          ))
      }
      ;
      var Jr, Zr, Hr, Xr, Qr, en, tn, rn, nn, sn, an, on, cn = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, ln = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, hn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const un = "trigger_not_found";
      class dn extends P.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              Jr.add(this),
              Zr.set(this, void 0),
              Hr.set(this, []),
              Xr.set(this, []),
              Qr.set(this, {}),
              en.set(this, {}),
              tn.set(this, {}),
              ln(this, Hr, [...r.triggers, ...r.schedulers.reduce(( (e, t) => [...e, ...t.triggers]), []), ...r.events.reduce(( (e, t) => [...e, ...t.triggers]), [])], "f"),
              hn(this, Jr, "m", an).call(this),
              ln(this, Zr, t, "f"),
              hn(this, Zr, "f").on("setTriggersList", (e => {
                  ln(this, Xr, e.playerTriggers.filter((e => !!hn(this, Qr, "f")[e.triggerId])), "f"),
                  hn(this, Jr, "m", on).call(this)
              }
              )),
              hn(this, Zr, "f").on("markTriggersActivated", (e => {
                  e.forEach((e => {
                      const {trigger: t, isActivated: r} = hn(this, Jr, "m", nn).call(this, e);
                      t ? r || (hn(this, Xr, "f").push({
                          triggerId: e,
                          claimed: !1
                      }),
                      hn(this, Jr, "m", on).call(this),
                      this._events.emit("activate", {
                          trigger: t
                      }),
                      y.kg.info(`🎉 Trigger activated, ID: ${e}, Tag: ${t.tag}`)) : y.kg.error(`trigger not found, ID: ${e}`)
                  }
                  ))
              }
              )),
              hn(this, Zr, "f").on("markTriggersClaimed", (e => {
                  e.forEach((e => {
                      const {trigger: t, isClaimed: r} = hn(this, Jr, "m", nn).call(this, e);
                      t ? r || (ln(this, Xr, hn(this, Xr, "f").map((t => t.triggerId === e ? Object.assign(Object.assign({}, t), {
                          claimed: !0
                      }) : t)), "f"),
                      hn(this, Jr, "m", on).call(this),
                      this._events.emit("claim", {
                          trigger: t
                      }),
                      y.kg.info(`🎉 Trigger claimed, ID: ${e}, Tag: ${t.tag}`)) : y.kg.error(`trigger not found, ID: ${e}`)
                  }
                  ))
              }
              )),
              this.gp.on("change:language", (e => {
                  hn(this, Hr, "f").forEach((t => {
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  )),
                  hn(this, Jr, "m", an).call(this)
              }
              ))
          }
          get list() {
              return [...hn(this, Hr, "f")]
          }
          get activatedList() {
              return [...hn(this, Xr, "f")]
          }
          isActivated(e) {
              return hn(this, Jr, "m", nn).call(this, e).isActivated
          }
          isClaimed(e) {
              return hn(this, Jr, "m", nn).call(this, e).isClaimed
          }
          getTrigger(e) {
              return hn(this, Jr, "m", nn).call(this, e)
          }
          claim(e) {
              return cn(this, void 0, void 0, (function*() {
                  const t = e.id || e.tag
                    , r = hn(this, Jr, "m", rn).call(this, t)
                    , i = (0,
                  n._)();
                  try {
                      if (!r)
                          throw y.kg.error(`trigger not found, ID: ${t}`),
                          new Error(un);
                      const e = yield this._claim({
                          id: r.id
                      });
                      i.done(e)
                  } catch (t) {
                      const r = (null == t ? void 0 : t.message) || t;
                      this._events.emit("error:claim", r, {
                          input: e
                      }),
                      i.abort(r)
                  }
                  return i.ready
              }
              ))
          }
          _claim({id: e, tag: t}) {
              return cn(this, void 0, void 0, (function*() {
                  const r = e || t
                    , {isActivated: n, isClaimed: i} = hn(this, Jr, "m", sn).call(this, r);
                  if (!n)
                      throw y.kg.error(`trigger is not activated, ID: ${r}`),
                      new Error("trigger_not_activated");
                  if (i)
                      throw y.kg.error(`trigger is already claimed, ID: ${r}`),
                      new Error("trigger_already_claimed");
                  return hn(this, Zr, "f").addClaimedTrigger(r),
                  yield hn(this, Zr, "f").syncPlayer(),
                  hn(this, Jr, "m", nn).call(this, r)
              }
              ))
          }
      }
      Zr = new WeakMap,
      Hr = new WeakMap,
      Xr = new WeakMap,
      Qr = new WeakMap,
      en = new WeakMap,
      tn = new WeakMap,
      Jr = new WeakSet,
      rn = function(e) {
          return hn(this, Qr, "f")[e] || hn(this, en, "f")[e]
      }
      ,
      nn = function(e) {
          const t = {
              trigger: null,
              isActivated: !1,
              isClaimed: !1
          }
            , r = hn(this, Jr, "m", rn).call(this, e);
          if (!r)
              return t;
          if (t.trigger = r,
          r) {
              const e = hn(this, tn, "f")[r.id];
              e && (t.isActivated = !0,
              t.isClaimed = e.claimed)
          }
          return t
      }
      ,
      sn = function(e) {
          const t = hn(this, tn, "f")[e];
          return t ? {
              isActivated: !0,
              isClaimed: t.claimed
          } : {
              isActivated: !1,
              isClaimed: !1
          }
      }
      ,
      an = function() {
          ln(this, Qr, {}, "f"),
          ln(this, en, {}, "f"),
          hn(this, Hr, "f").forEach((e => {
              hn(this, Qr, "f")[e.id] = e,
              hn(this, en, "f")[e.tag] = e
          }
          ))
      }
      ,
      on = function() {
          ln(this, tn, {}, "f"),
          hn(this, Xr, "f").forEach((e => {
              hn(this, tn, "f")[e.triggerId] = e
          }
          ))
      }
      ;
      var fn, pn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, vn = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class yn extends P.Z {
          constructor() {
              super(...arguments),
              this.acceptedRewards = [],
              this.givenRewards = [],
              this.unlockedAchievements = [],
              this.purchasedProducts = [],
              this.claimedTriggers = [],
              this.claimedSchedulersDays = [],
              fn.set(this, null)
          }
          addGivenReward(e) {
              const t = this.givenRewards.find((t => t.id === e.id));
              t ? t.count += e.count : this.givenRewards.push(e)
          }
          addAcceptedReward(e) {
              const t = this.acceptedRewards.find((t => t.id === e.id));
              t ? t.count += e.count : this.acceptedRewards.push(e)
          }
          addClaimedTrigger(e) {
              this.claimedTriggers.push(e)
          }
          addClaimedSchedulerDay(e) {
              this.claimedSchedulersDays.push(e)
          }
          addUnlockedAchievement(e) {
              this.unlockedAchievements.push(e)
          }
          setTriggersList(e) {
              this.emit("setTriggersList", {
                  playerTriggers: e
              })
          }
          setRewardsList(e) {
              this.emit("setRewardsList", {
                  playerRewards: e,
                  notSentAcceptedList: this.acceptedRewards,
                  notSentGivenList: this.givenRewards
              })
          }
          setAchievementsList(e) {
              this.emit("setAchievementsList", {
                  achievements: e,
                  notSentIds: this.unlockedAchievements
              })
          }
          setPurchasedList(e) {
              this.emit("setPurchasedList", {
                  playerPurchases: e,
                  notSentIds: this.purchasedProducts
              })
          }
          setExperiments(e) {
              this.emit("setExperiments", {
                  playerExperiments: e
              })
          }
          setPlayerSegments(e, t, r) {
              this.emit("setPlayerSegments", {
                  playerSegments: e,
                  leftSegments: r,
                  enterSegments: t
              })
          }
          setPlayerSchedulersList(e) {
              this.emit("setPlayerSchedulersList", {
                  playerSchedulers: e
              })
          }
          setPlayerEventsList(e) {
              this.emit("setPlayerEventsList", {
                  playerEvents: e
              })
          }
          setUniques(e) {
              this.emit("setUniques", {
                  uniques: e
              })
          }
          markTriggersActivated(e) {
              this.emit("markTriggersActivated", e)
          }
          markTriggersClaimed(e) {
              this.emit("markTriggersClaimed", e)
          }
          markRewardsGiven(e) {
              this.emit("markRewardsGiven", e)
          }
          markAchievementsUnlocked(e) {
              this.emit("markAchievementsUnlocked", e)
          }
          markPurchasesGiven(e) {
              this.emit("markPurchasesGiven", e)
          }
          markSchedulersDaysClaimed(e) {
              this.emit("markSchedulersDaysClaimed", e)
          }
          markUniqueRegistered(e) {
              this.emit("markUniqueRegistered", e)
          }
          syncPurchases() {
              const e = (0,
              n._)();
              return this._events.emit("syncPurchases", e.done),
              e.ready
          }
          updateServerTime(e) {
              this._events.emit("updateServerTime", e)
          }
          syncPlayer() {
              if (pn(this, fn, "f"))
                  return pn(this, fn, "f").ready;
              const e = (0,
              n._)();
              return vn(this, fn, e, "f"),
              (0,
              Er.Z)(300).then(( () => this._events.emit("syncPlayer"))),
              e.ready
          }
          commitSyncPlayer() {
              var e;
              null === (e = pn(this, fn, "f")) || void 0 === e || e.done(),
              vn(this, fn, null, "f")
          }
          isDirty() {
              return this.acceptedRewards.length > 0 || this.givenRewards.length > 0 || this.claimedTriggers.length > 0 || this.claimedSchedulersDays.length > 0
          }
          export() {
              return {
                  acceptedRewards: this.acceptedRewards,
                  givenRewards: this.givenRewards,
                  claimedTriggers: this.claimedTriggers,
                  claimedSchedulersDays: this.claimedSchedulersDays
              }
          }
          reset() {
              this.acceptedRewards = [],
              this.givenRewards = [],
              this.claimedTriggers = [],
              this.claimedSchedulersDays = []
          }
          emit(e, t) {
              this._events.emit(e, t)
          }
      }
      fn = new WeakMap;
      var mn, gn, wn, bn, En, Pn, Sn, _n, An, Tn, On, kn, Cn = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Rn = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, In = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const Dn = "scheduler_not_found"
        , xn = "wrong_day"
        , Nn = "day_not_reached"
        , Mn = "nothing_to_claim"
        , Ln = {
          scheduler: null,
          bonuses: [],
          canClaimAllDay: !1,
          canClaimDay: !1,
          day: 0,
          isAllDayClaimed: !1,
          isDayClaimed: !1,
          isDayComplete: !1,
          isDayReached: !1,
          triggers: []
      };
      class jn extends P.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              mn.add(this),
              gn.set(this, void 0),
              wn.set(this, []),
              bn.set(this, []),
              Rn(this, wn, r, "f"),
              Rn(this, gn, t, "f"),
              In(this, gn, "f").on("setPlayerSchedulersList", ( ({playerSchedulers: e}) => {
                  Rn(this, bn, e.filter((e => In(this, wn, "f").some((t => t.id === e.schedulerId)))), "f")
              }
              ))
          }
          get list() {
              return [...In(this, wn, "f")]
          }
          get activeList() {
              return [...In(this, bn, "f")]
          }
          getSchedulersTriggers() {
              return In(this, wn, "f").reduce(( (e, {triggers: t}) => [...e, ...t]), [])
          }
          getScheduler(e) {
              const {scheduler: t, playerScheduler: r} = In(this, mn, "m", Pn).call(this, e);
              if (!t)
                  return {
                      scheduler: null,
                      currentDay: 0,
                      daysClaimed: [],
                      isRegistered: !1,
                      stats: {
                          activeDays: 0,
                          activeDaysConsecutive: 0
                      }
                  };
              let n = !1
                , i = 0
                , s = []
                , a = {
                  activeDays: 0,
                  activeDaysConsecutive: 0
              };
              return r && (n = !0,
              a = r.stats,
              s = r.daysClaimed,
              i = t.type === mr.OB.ActiveDays ? a.activeDays : a.activeDaysConsecutive),
              {
                  scheduler: t,
                  isRegistered: n,
                  currentDay: i,
                  daysClaimed: s,
                  stats: a
              }
          }
          isRegistered(e) {
              return !!In(this, mn, "m", Pn).call(this, e).playerScheduler
          }
          isTodayRewardClaimed(e) {
              const t = this.getScheduler(e);
              if (!t.scheduler)
                  return !1;
              const {currentDay: r, daysClaimed: n} = t;
              return n.includes(r)
          }
          canClaimDay(e, t) {
              return this.getSchedulerDay(e, t).canClaimDay
          }
          canClaimDayAdditional(e, t, r) {
              const {scheduler: n} = In(this, mn, "m", Pn).call(this, e);
              if (!n)
                  return !1;
              const i = n.triggers.find((e => (e.id === r || e.tag === r) && e.day === t));
              return !!i && this.gp.triggers.isActivated(i.id) && !this.gp.triggers.isClaimed(i.id)
          }
          canClaimAllDay(e, t) {
              return this.getSchedulerDay(e, t).canClaimAllDay
          }
          getSchedulerDay(e, t) {
              var r;
              const n = this.getScheduler(e);
              if (!n.scheduler)
                  return Ln;
              const {scheduler: i, currentDay: s, daysClaimed: a} = n
                , o = i.triggers.filter((e => e.day === t))
                , c = s >= t
                , l = c && o.every((e => this.gp.triggers.isActivated(e.id)))
                , h = a.includes(t)
                , u = h && o.every((e => this.gp.triggers.isClaimed(e.id)))
                , d = !!i && !h && c
                , f = d || i.triggers.some((r => this.canClaimDayAdditional(e, t, r.id)));
              return {
                  scheduler: i,
                  day: t,
                  isDayReached: c,
                  isDayComplete: l,
                  isDayClaimed: h,
                  isAllDayClaimed: u,
                  canClaimDay: d,
                  canClaimAllDay: f,
                  bonuses: (null === (r = i.daysBonuses.find((e => e.day === t))) || void 0 === r ? void 0 : r.bonuses) || [],
                  triggers: o
              }
          }
          getSchedulerCurrentDay(e) {
              const t = this.getScheduler(e);
              if (!t.scheduler)
                  return Ln;
              const {currentDay: r} = t;
              return this.getSchedulerDay(e, r)
          }
          claimDay(e, t) {
              return Cn(this, void 0, void 0, (function*() {
                  return In(this, mn, "m", kn).call(this, "claimDay", In(this, mn, "m", _n).call(this, e, t), {
                      schedulerIdOrTag: e,
                      day: t
                  })
              }
              ))
          }
          claimDayAdditional(e, t, r) {
              return Cn(this, void 0, void 0, (function*() {
                  return In(this, mn, "m", kn).call(this, "claimDayAdditional", In(this, mn, "m", An).call(this, e, t, r), {
                      schedulerIdOrTag: e,
                      day: t,
                      triggerIdOrTag: r
                  })
              }
              ))
          }
          claimAllDay(e, t) {
              return Cn(this, void 0, void 0, (function*() {
                  return In(this, mn, "m", kn).call(this, "claimAllDay", In(this, mn, "m", Tn).call(this, e, t), {
                      schedulerIdOrTag: e,
                      day: t
                  })
              }
              ))
          }
          claimAllDays(e) {
              return Cn(this, void 0, void 0, (function*() {
                  return In(this, mn, "m", kn).call(this, "claimAllDays", In(this, mn, "m", On).call(this, e), {
                      schedulerIdOrTag: e
                  })
              }
              ))
          }
          register(e) {
              return Cn(this, void 0, void 0, (function*() {
                  return In(this, mn, "m", kn).call(this, "register", In(this, mn, "m", En).call(this, (null == e ? void 0 : e.id) || (null == e ? void 0 : e.tag)), e)
              }
              ))
          }
      }
      gn = new WeakMap,
      wn = new WeakMap,
      bn = new WeakMap,
      mn = new WeakSet,
      En = function(e) {
          return Cn(this, void 0, void 0, (function*() {
              const t = this.getScheduler(e);
              if (!t.scheduler)
                  throw new Error(Dn);
              const {scheduler: r} = t
                , n = yield this.gp._services.schedulersService.register({
                  schedulerId: r.id
              });
              In(this, bn, "f").push(Object.assign(Object.assign({}, n), {
                  scheduler: r
              }));
              const i = this.getScheduler(e)
                , {scheduler: s} = i;
              return function(e, t) {
                  var r = {};
                  for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                      var i = 0;
                      for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                          t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                  }
                  return r
              }(i, ["scheduler"])
          }
          ))
      }
      ,
      Pn = function(e) {
          const t = {
              scheduler: null,
              playerScheduler: null
          }
            , r = In(this, wn, "f").find((t => t.tag === e || t.id === Number(e)));
          return r ? (t.scheduler = r,
          r && (t.playerScheduler = In(this, bn, "f").find((e => e.schedulerId === r.id))),
          t) : t
      }
      ,
      Sn = function(e, t) {
          return !Number.isNaN(e) && e > 0 && e <= t.days
      }
      ,
      _n = function(e, t) {
          return Cn(this, void 0, void 0, (function*() {
              const {scheduler: r, isDayReached: n, isDayClaimed: i} = this.getSchedulerDay(e, t);
              if (!r)
                  throw Dn;
              if (!In(this, mn, "m", Sn).call(this, t, r))
                  throw xn;
              if (!n)
                  throw Nn;
              if (i)
                  throw "day_already_claimed";
              return In(this, gn, "f").addClaimedSchedulerDay({
                  schedulerId: r.id,
                  day: t
              }),
              yield In(this, gn, "f").syncPlayer(),
              this.getSchedulerDay(e, t)
          }
          ))
      }
      ,
      An = function(e, t, r) {
          return Cn(this, void 0, void 0, (function*() {
              const {scheduler: n, isDayReached: i} = this.getSchedulerDay(e, t);
              if (!n)
                  throw Dn;
              if (!In(this, mn, "m", Sn).call(this, t, n))
                  throw xn;
              if (!i)
                  throw Nn;
              const s = n.triggers.find((e => e.id === r || e.tag === r));
              if (!s)
                  throw un;
              const {isClaimed: a} = yield this.gp.triggers._claim({
                  id: s.id
              });
              if (!a)
                  throw "failed_to_claim";
              return this.getSchedulerDay(e, t)
          }
          ))
      }
      ,
      Tn = function(e, t) {
          return Cn(this, void 0, void 0, (function*() {
              const {scheduler: r, isDayReached: n} = this.getSchedulerDay(e, t);
              if (!r)
                  throw Dn;
              if (!In(this, mn, "m", Sn).call(this, t, r))
                  throw xn;
              if (!n)
                  throw Nn;
              const i = [];
              if (this.canClaimDay(e, t) && i.push(In(this, mn, "m", _n).call(this, e, t)),
              r.triggers.forEach((r => {
                  this.canClaimDayAdditional(e, t, r.id) && i.push(In(this, mn, "m", An).call(this, e, t, r.id))
              }
              )),
              0 === i.length)
                  throw Mn;
              return yield Promise.all(i),
              this.getSchedulerDay(e, t)
          }
          ))
      }
      ,
      On = function(e) {
          return Cn(this, void 0, void 0, (function*() {
              const {scheduler: t} = In(this, mn, "m", Pn).call(this, e);
              if (!t)
                  throw Dn;
              const r = [];
              for (let n = 1; n <= t.days; n++)
                  this.canClaimAllDay(e, n) && r.push(this.claimAllDay(e, n).catch(y.kg.warn));
              if (0 === r.length)
                  throw Mn;
              return yield Promise.all(r),
              this.getScheduler(e)
          }
          ))
      }
      ,
      kn = function(e, t, r) {
          return t.then((t => (this._events.emit(e, t, {
              input: r
          }),
          t))).catch((t => {
              const n = (null == t ? void 0 : t.message) || t;
              throw this._events.emit(`error:${e}`, n, {
                  input: r
              }),
              n
          }
          ))
      }
      ;
      var Fn, Un, Gn, $n, Bn, Vn = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, qn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Wn extends P.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              Fn.add(this),
              Un.set(this, void 0),
              Gn.set(this, []),
              $n.set(this, []),
              Vn(this, Gn, r.map((t => Object.assign(Object.assign({}, t), {
                  name: t.names[e.language] || t.names.en,
                  description: t.descriptions[e.language] || t.descriptions.en,
                  iconSmall: (0,
                  Rt.Z)(t.icon, 48, 48, !1),
                  icon: (0,
                  Rt.Z)(t.icon, 256, 256, !1),
                  get timeLeft() {
                      const r = Date.parse(t.dateEnd) || 1 / 0
                        , n = Math.floor((r - Date.parse(e.serverTime)) / 1e3);
                      return n > 0 ? n : 0
                  },
                  get isActive() {
                      const r = Date.parse(t.dateStart) || 0;
                      return Date.parse(e.serverTime) >= r && this.timeLeft > 0
                  }
              }))), "f"),
              Vn(this, Un, t, "f"),
              qn(this, Un, "f").on("setPlayerEventsList", ( ({playerEvents: e}) => {
                  Vn(this, $n, e.filter((e => qn(this, Gn, "f").some((t => t.id === e.eventId)))), "f")
              }
              )),
              this.gp.on("change:language", (e => {
                  qn(this, Gn, "f").forEach((t => {
                      t.name = t.names[e] || t.names.en,
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  ))
              }
              ))
          }
          get list() {
              return [...qn(this, Gn, "f")]
          }
          get activeList() {
              return [...qn(this, $n, "f")]
          }
          getEvent(e) {
              const {event: t, playerEvent: r} = qn(this, Fn, "m", Bn).call(this, e)
                , n = {
                  event: t,
                  stats: (null == r ? void 0 : r.stats) || {
                      activeDays: 0,
                      activeDaysConsecutive: 0
                  },
                  isJoined: !!(null == t ? void 0 : t.isActive) && !!r,
                  rewards: [],
                  achievements: [],
                  products: []
              };
              return t ? (t.triggers.forEach((e => {
                  e.bonuses.forEach((e => {
                      switch (e.type) {
                      case mr.Do.Reward:
                          const {reward: t} = this.gp.rewards.getReward(e.id);
                          t && n.rewards.push(Object.assign(Object.assign({}, t), {
                              isExists: this.gp.rewards.has(e.id)
                          }));
                          break;
                      case mr.Do.Achievement:
                          const {achievement: r} = this.gp.achievements.getAchievement(e.id);
                          r && n.achievements.push(Object.assign(Object.assign({}, r), {
                              isExists: this.gp.achievements.has(e.id)
                          }));
                          break;
                      case mr.Do.Product:
                          const i = this.gp.payments.getProduct(e.id);
                          i && n.products.push(Object.assign(Object.assign({}, i), {
                              isExists: this.gp.payments.has(e.id)
                          }))
                      }
                  }
                  ), [])
              }
              )),
              n) : n
          }
          has(e) {
              const {event: t} = qn(this, Fn, "m", Bn).call(this, e);
              return !!(null == t ? void 0 : t.isActive)
          }
          isJoined(e) {
              const {event: t, playerEvent: r} = qn(this, Fn, "m", Bn).call(this, e);
              return !!(null == t ? void 0 : t.isActive) && !!r
          }
          join(e) {
              return t = this,
              r = void 0,
              s = function*() {
                  const t = Number(e.id) || e.tag
                    , r = (0,
                  n._)()
                    , i = t => {
                      const n = "string" == typeof t ? t : t.message;
                      return r.abort(n),
                      this._events.emit("error:join", n, {
                          input: e
                      }),
                      r.ready
                  }
                    , {event: s, playerEvent: a} = qn(this, Fn, "m", Bn).call(this, t);
                  if (!s)
                      return i("event_not_found");
                  if (a)
                      return i("already_joined");
                  try {
                      this.gp.loader.inc();
                      const e = yield this.gp._services.eventsService.join({
                          eventId: s.id
                      })
                        , {__typename: t} = e
                        , n = function(e, t) {
                          var r = {};
                          for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                              var i = 0;
                              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                  t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                          }
                          return r
                      }(e, ["__typename"]);
                      qn(this, $n, "f").some((e => e.eventId === n.eventId)) || qn(this, $n, "f").push(n),
                      r.done({
                          event: s,
                          playerEvent: n
                      }),
                      this._events.emit("join", {
                          event: s,
                          playerEvent: n
                      })
                  } catch (e) {
                      i(e)
                  } finally {
                      this.gp.loader.dec()
                  }
                  return r.ready
              }
              ,
              new ((i = void 0) || (i = Promise))((function(e, n) {
                  function a(e) {
                      try {
                          c(s.next(e))
                      } catch (e) {
                          n(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(s.throw(e))
                      } catch (e) {
                          n(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof i ? r : new i((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((s = s.apply(t, r || [])).next())
              }
              ));
              var t, r, i, s
          }
      }
      Un = new WeakMap,
      Gn = new WeakMap,
      $n = new WeakMap,
      Fn = new WeakSet,
      Bn = function(e) {
          const t = {
              event: null,
              playerEvent: null
          }
            , r = qn(this, Gn, "f").find((t => t.tag === e || t.id === e));
          return r ? (t.event = r,
          r && (t.playerEvent = qn(this, $n, "f").find((e => e.eventId === r.id))),
          t) : t
      }
      ;
      var zn, Yn, Kn = a(6256);
      class Jn {
          constructor() {
              zn.add(this),
              this.type = function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, zn, "m", Yn).call(this)
          }
          _satisfies(e) {
              return e.includes(this.type)
          }
      }
      zn = new WeakSet,
      Yn = function() {
          const e = new Kn.UAParser
            , t = e.getOS()
            , r = e.getDevice();
          return "iOS" === t.name ? mr.U7.Ios : "Android" === t.name ? mr.U7.Android : "smarttv" === r.type ? mr.U7.Tv : mr.U7.Desktop
      }
      ;
      var Zn, Hn, Xn, Qn, ei, ti = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, ri = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class ni {
          constructor(e, t) {
              this.gp = e,
              Zn.add(this),
              Hn.set(this, void 0),
              Xn.set(this, []),
              Qn.set(this, {}),
              ti(this, Hn, t, "f"),
              ri(this, Hn, "f").on("setExperiments", (e => ri(this, Zn, "m", ei).call(this, e.playerExperiments)))
          }
          get map() {
              return Object.assign({}, ri(this, Qn, "f"))
          }
          has(e, t) {
              return e in ri(this, Qn, "f") && ri(this, Qn, "f")[e] === t
          }
      }
      Hn = new WeakMap,
      Xn = new WeakMap,
      Qn = new WeakMap,
      Zn = new WeakSet,
      ei = function(e) {
          if (0 === e.length)
              return;
          let t = !1;
          const r = {};
          ti(this, Qn, e.reduce(( (e, n, i) => {
              var s;
              return e[n.experiment] = n.cohort,
              r[`${this.gp.name.toUpperCase()}_AB_${n.experiment}`] = n.cohort,
              t || (null === (s = ri(this, Xn, "f")[i]) || void 0 === s ? void 0 : s.cohort) === n.cohort || (t = !0),
              e
          }
          ), {}), "f"),
          ti(this, Xn, e, "f"),
          this.gp.analytics._experimentsVisitParams = r,
          t && this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)
      }
      ;
      var ii, si, ai, oi, ci = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, li = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class hi extends P.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              ii.add(this),
              si.set(this, void 0),
              ai.set(this, []),
              ci(this, si, t, "f"),
              li(this, si, "f").on("setPlayerSegments", (e => li(this, ii, "m", oi).call(this, e.playerSegments, e.enterSegments, e.leftSegments)))
          }
          get list() {
              return [...li(this, ai, "f")]
          }
          has(e) {
              return li(this, ai, "f").includes(e)
          }
      }
      si = new WeakMap,
      ai = new WeakMap,
      ii = new WeakSet,
      oi = function(e, t, r) {
          (0 === li(this, ai, "f").length && e.length > 0 || t.length > 0 || r.length > 0) && (this.gp.analytics._segmentsVisitParams = e.reduce(( (e, t) => (e[`GP_SEGMENT_${t}`] = "1",
          e)), {}),
          this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)),
          ci(this, ai, e, "f"),
          t.forEach((e => this._events.emit("enter", e))),
          r.forEach((e => this._events.emit("leave", e)))
      }
      ;
      var ui, di, fi, pi, vi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, yi = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, mi = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const gi = "empty_tag";
      class wi extends P.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              ui.add(this),
              di.set(this, void 0),
              fi.set(this, []),
              yi(this, di, t, "f"),
              mi(this, di, "f").on("setUniques", (e => yi(this, fi, e.uniques, "f")))
          }
          get list() {
              return [...mi(this, fi, "f")]
          }
          check({tag: e, value: t}) {
              return vi(this, void 0, void 0, (function*() {
                  e || mi(this, ui, "m", pi).call(this, "check", new Error(gi));
                  try {
                      const r = yield this.gp._services.playerService.checkUniqueValue({
                          tag: e,
                          value: t
                      });
                      return this._events.emit("check", {
                          tag: e,
                          value: t,
                          success: r.success
                      }),
                      r.success
                  } catch (e) {
                      mi(this, ui, "m", pi).call(this, "check", e)
                  }
              }
              ))
          }
          register({tag: e, value: t}) {
              return vi(this, void 0, void 0, (function*() {
                  e || mi(this, ui, "m", pi).call(this, "register", new Error(gi));
                  try {
                      const r = yield this.gp._services.playerService.registerUniqueValue({
                          tag: e,
                          value: t
                      });
                      return mi(this, fi, "f").some((e => e.tag === r.tag)) ? yi(this, fi, mi(this, fi, "f").map((e => e.tag === r.tag ? r : e)), "f") : mi(this, fi, "f").push(r),
                      this._events.emit("register", {
                          tag: e,
                          value: t
                      }),
                      !0
                  } catch (e) {
                      mi(this, ui, "m", pi).call(this, "register", e)
                  }
              }
              ))
          }
          delete({tag: e}) {
              return vi(this, void 0, void 0, (function*() {
                  e || mi(this, ui, "m", pi).call(this, "delete", new Error(gi)),
                  mi(this, fi, "f").some((t => t.tag === e)) || mi(this, ui, "m", pi).call(this, "delete", new Error("unique_value_not_found"));
                  try {
                      return yield this.gp._services.playerService.deleteUniqueValue({
                          tag: e
                      }),
                      yi(this, fi, mi(this, fi, "f").filter((t => t.tag !== e)), "f"),
                      this._events.emit("delete", {
                          tag: e
                      }),
                      !0
                  } catch (e) {
                      mi(this, ui, "m", pi).call(this, "delete", e)
                  }
              }
              ))
          }
          get(e) {
              var t;
              return (null === (t = mi(this, fi, "f").find((t => t.tag === e))) || void 0 === t ? void 0 : t.value) || ""
          }
      }
      di = new WeakMap,
      fi = new WeakMap,
      ui = new WeakSet,
      pi = function(e, t) {
          throw y.kg.error(t),
          this._events.emit(`error:${e}`, (null == t ? void 0 : t.message) || t),
          t
      }
      ;
      var bi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      const Ei = e => `_${e}`;
      class Pi extends P.Z {
          constructor(e) {
              super(),
              this.storage = e,
              this.type = "platform"
          }
          setStorage(e) {
              this.type = e
          }
          get storages() {
              return "local" === this.type ? this.storage.localStorages : this.storage._storages
          }
          get(e) {
              return bi(this, void 0, void 0, (function*() {
                  const t = yield this.storage.get(this.storages, Ei(e));
                  return this._events.emit("get", {
                      key: e,
                      value: null != t ? t : null
                  }),
                  null != t ? t : null
              }
              ))
          }
          set(e, t) {
              return bi(this, void 0, void 0, (function*() {
                  yield this.storage.set(this.storages, Ei(e), t),
                  this._events.emit("set", {
                      key: e,
                      value: t
                  })
              }
              ))
          }
          getGlobal(e) {
              return bi(this, void 0, void 0, (function*() {
                  const t = yield this.storage.getRaw(this.storages, Ei(e));
                  return this._events.emit("get:global", {
                      key: e,
                      value: null != t ? t : null
                  }),
                  null != t ? t : null
              }
              ))
          }
          setGlobal(e, t) {
              return bi(this, void 0, void 0, (function*() {
                  yield this.storage.setRaw(this.storages, Ei(e), t),
                  this._events.emit("set:global", {
                      key: e,
                      value: t
                  })
              }
              ))
          }
      }
      var Si, _i, Ai, Ti, Oi, ki, Ci, Ri, Ii = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Di = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, xi = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class Ni extends P.Z {
          constructor({projectId: e, publicToken: t, onReady: r}={}, n) {
              var i, s;
              super(),
              Si.add(this),
              this.setBackground = fr,
              this.name = "",
              this.isPaused = !1,
              this.isGameplay = !1,
              this.isGameStarted = !1,
              this.logger = y.kg,
              _i.set(this, void 0),
              Ai.set(this, void 0),
              Ti.set(this, void 0),
              Oi.set(this, void 0),
              this._params = null === (s = new URL((null === (i = document.currentScript) || void 0 === i ? void 0 : i.src) || document.URL)) || void 0 === s ? void 0 : s.searchParams,
              this.projectId = null != e ? e : Number(this._params.get("projectId")),
              this.publicToken = null != t ? t : this._params.get("publicToken"),
              this.onReady = r,
              Di(this, Si, "m", ki).call(this, n)
          }
          get nativeSDK() {
              return this.platform.getNativeSDK()
          }
          get serverTime() {
              return new Date(Di(this, Oi, "f")).toISOString()
          }
          get isDev() {
              var e;
              return (null === (e = Di(this, Ai, "f")) || void 0 === e ? void 0 : e.isDev) || !1
          }
          get isAllowedOrigin() {
              var e;
              return (null === (e = Di(this, Ai, "f")) || void 0 === e ? void 0 : e.isAllowedOrigin) || !1
          }
          get locale() {
              return m.h$[this.language] || "en-US"
          }
          get isPortrait() {
              return gr()
          }
          init(e) {
              return Ii(this, void 0, void 0, (function*() {
                  this.channels.on("event:connect", ( ({hash: e}) => {
                      this.player._firstReqHash !== e && this._events.emit("event:connect")
                  }
                  ));
                  const t = () => {
                      this.ads.isAllowedToResumeGameplay && this.resume()
                  }
                    , r = () => {
                      this.pause()
                  }
                  ;
                  this.ads.on("fullscreen:start", r),
                  this.ads.on("fullscreen:close", t),
                  this.ads.on("preloader:start", r),
                  this.ads.on("preloader:close", t),
                  this.ads.on("rewarded:start", r),
                  this.ads.on("rewarded:close", t),
                  yield Promise.all([this.ads.checkAdblock()]).catch(y.kg.warn),
                  e.done(this)
              }
              ))
          }
          loadOverlay() {
              return Ii(this, void 0, void 0, (function*() {
                  this.overlay || (this.overlay = yield Promise.all([a.e(527), a.e(573), a.e(415)]).then(a.bind(a, 1238)).then((e => e.default(this))),
                  this._events.emit("overlay:ready"))
              }
              ))
          }
          get _overlaySizeOffsets() {
              return {
                  top: this.ads._stickyBannerOffsets.top,
                  bottom: this.ads._stickyBannerOffsets.bottom
              }
          }
          changeLanguage(e) {
              return Ii(this, void 0, void 0, (function*() {
                  if (this.language !== e)
                      try {
                          if (!Object.values(m.Uo).includes(e))
                              throw new Error(`Language ${e} not supported`);
                          this.language = e,
                          this._storage.saveLanguage(e),
                          this.overlay && (yield this.overlay.changeLanguage(e)),
                          Di(this, Ti, "f").setLang(this.language),
                          this._events.emit("change:language", this.language)
                      } catch (e) {
                          y.kg.error(e)
                      }
              }
              ))
          }
          changeAvatarGenerator() {
              return Ii(this, void 0, void 0, (function*() {
                  y.kg.warn("[DEPRECATED]: changeAvatarGenerator")
              }
              ))
          }
          generateAvatar(e, t) {
              return (0,
              Jt.Z)(this.avatarGeneratorTemplate, e, t)
          }
          pause() {
              this.isPaused || (this.isPaused = !0,
              this._events.emit("pause"))
          }
          resume() {
              this.isPaused && (this.isPaused = !1,
              this._events.emit("resume"))
          }
          gameStart() {
              return Ii(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameStarted || (this._events.emit("gameStart"),
                  this.isGameStarted = !0)
              }
              ))
          }
          gameplayStart() {
              return Ii(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameplay || (this.isGameplay = !0,
                  this._events.emit("gameplayStart"))
              }
              ))
          }
          gameplayStop() {
              return Ii(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameplay && (this.isGameplay = !1,
                  this._events.emit("gameplayStop"))
              }
              ))
          }
      }
      function Mi(e) {
          var t;
          (t = e.sticky) && (t.$el.style.width = `${function(e) {
              lett = window.innerWidth;
              if ("PX" === e.options.maxWidthDimension && e.options.maxWidth > 0 && window.innerWidth > e.options.maxWidth)
                  t = e.options.maxWidth;
              else if ("PERCENT" === e.options.maxWidthDimension && e.options.maxWidth > 0) {
                  const r = e.options.maxWidth / 100 * window.innerWidth;
                  window.innerWidth > e.options.maxWidth && (t = r)
              }
              const r = e.options.fitCanvas && (window.innerWidth >= 640 && (null === (n = document.querySelector("canvas")) || void 0 === n ? void 0 : n.offsetWidth) || 0) || t;
              var n;
              return Math.round(r)
          }(t)}px`)
      }
      _i = new WeakMap,
      Ai = new WeakMap,
      Ti = new WeakMap,
      Oi = new WeakMap,
      Si = new WeakSet,
      ki = function(e) {
          var c;
          return Ii(this, void 0, void 0, (function*() {
              const l = (0,
              n._)();
              this.ready = l.ready;
              const h = (null === (c = this._params) || void 0 === c ? void 0 : c.get("callback")) || "onGPInit";
              this.ready.then((e => {
                  var t, r, n, i;
                  this.onReady ? this.onReady(e) : (null === (r = (t = window)[h]) || void 0 === r || r.call(t, e),
                  "onGSInit" !== h && (null === (i = (n = window).onGSInit) || void 0 === i || i.call(n, e)))
              }
              )),
              this.fullscreen = new Pe,
              this.analytics = new Ae,
              this.leaderboard = new D(this),
              this.gamesCollections = new Xe(this),
              this.documents = new bt(this),
              this.players = new Zt(this),
              this.isMobile = t()({
                  tablet: !0,
                  featureDetect: !0
              }),
              this.device = new Jn;
              const u = navigator.language.slice(0, 2).toLowerCase();
              let {platformType: d, platformKey: f} = yield Ne()
                , p = Object.values(m.Uo).includes(u) ? u : null;
              d !== F.z.GAME_DISTRIBUTION && d !== F.z.GAMEPIX && d !== F.z.WG_PLAYGROUND || (p = m.Uo.EN);
              const v = d === F.z.VK && this.device.type === mr.U7.Ios && "file:" === location.protocol ? "".replace("https", "vkcors") : "";
              this._storage = new E,
              this.storage = new Pi(this._storage);
              const g = e.servicesChunk({
                  apiUrl: v,
                  projectId: this.projectId,
                  publicToken: this.publicToken,
                  lang: p || m.Uo.EN,
                  platformType: d,
                  platformKey: f,
                  storage: this._storage
              })
                , {apiClient: w, setupAnalytics: b} = g
                , P = function(e, t) {
                  var r = {};
                  for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                      var i = 0;
                      for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                          t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                  }
                  return r
              }(g, ["apiClient", "setupAnalytics"])
                , S = e => {
                  w.setPlayerData(e)
              }
              ;
              xi(this, Ti, w, "f"),
              this._services = P,
              this._pointersManager = new Sr,
              xi(this, _i, new yr, "f");
              const _ = {
                  apiClient: w,
                  gp: this,
                  setupStorage: e => {
                      const t = `gs-db-project-${_.gp.projectId}`
                        , r = [...e, new Ge(t)];
                      try {
                          null !== window.localStorage && r.push(new qe(this.projectId))
                      } catch (e) {}
                      return this._storage.setStorages(r),
                      this._storage.ready
                  }
                  ,
                  fetchConfig: e => Ii(this, void 0, void 0, (function*() {
                      yield this._storage.ready;
                      const [t,r,n,a] = yield Promise.all([this._storage.loadLanguage(), this._storage.loadConfig(), this._storage.loadAdsInfo(), Di(this, _i, "f").getLanguage(this.name)]);
                      return t || this._storage.saveLanguage(null),
                      this.language = a || t || e || p || m.Uo.EN,
                      Di(this, Ti, "f").setLang(this.language),
                      this._services.projectService.fetchConfig().then((e => {
                          var t, n;
                          const a = e || r
                            , {platformConfig: o} = a;
                          return c = o.type === F.z.CUSTOM ? (null === (t = o.authConfig) || void 0 === t ? void 0 : t.configs.web.activeService) === i.D4.Xsolla : (null === (n = o.authConfig) || void 0 === n ? void 0 : n.configs.android.activeService) === i.D4.Xsolla,
                          w.setWithCookie(c),
                          d !== o.type && Di(this, Ti, "f").setPlatform(o.type, o.tag),
                          this._storage.setSaveInPlatformStorage(!s(o.progressSaveFormat).isLocalSave),
                          a;
                          var c
                      }
                      )).catch((e => (console.error(e),
                      r)))
                  }
                  ))
              };
              // if (e.platformType && e.platformType !== d)
              //     throw new Error("wrong platform type");
              var A, T;
              (e.platformChunk ? e.platformChunk(_, d) : e.preparePlatform({
                  platformType: d,
                  tools: _
              })).then((e => Ii(this, void 0, void 0, (function*() {
                  const {adsAdapter: t, playerAdapter: n, platformAdapter: i, socialsAdapter: s, paymentsAdapter: c, projectConfig: h, appAdapter: u} = e;
                  if (xi(this, Ai, h, "f"),
                  xi(this, Oi, Date.parse(h.serverTime), "f"),
                  W((e => {
                      xi(this, Oi, Di(this, Oi, "f") + e, "f")
                  }
                  )),
                  d !== F.z.GAMEPIX && d !== F.z.GAME_DISTRIBUTION && d !== F.z.WG_PLAYGROUND) {
                      const {counters: e} = b(h.config);
                      e.forEach((e => this.analytics.addCounter(e)))
                  }
                  this.avatarGenerator = h.config.avatarGenerator,
                  this.avatarGeneratorTemplate = h.config.avatarGeneratorTemplate,
                  this.loader = function(e) {
                      let t = 0;
                      const r = document.createElement("div");
                      function n() {
                          r.style.display = t > 0 ? "flex" : "none"
                      }
                      return r.classList.add("gs-global-loader"),
                      r.innerHTML = `<div class="gs-loader ${!e && "gs-loader-hidden"}">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`,
                      document.body.appendChild(r),
                      {
                          inc() {
                              t += 1,
                              n()
                          },
                          dec() {
                              t = t <= 0 ? 0 : t - 1,
                              n()
                          }
                      }
                  }(h.config.showLoader),
                  this._storage.saveConfig(h);
                  const f = new yn;
                  f.on("updateServerTime", (e => {
                      xi(this, Oi, Date.parse(e), "f")
                  }
                  )),
                  this.platform = new o(h.platformConfig,i),
                  this.ads = new r.Z(this,t,h),
                  this.app = new De.Z(this,u,h),
                  this.socials = new Ie(s,this,h),
                  this.channels = new gt(this,h),
                  this.player = new Ee({},h.playerFields,n,this,f,S),
                  this.payments = new We.Z(this,f,c,h),
                  this.variables = new At(this,i,h.gameVariables || []),
                  this.images = new qt(this,h.acl),
                  this.files = new Kt(this,h.acl),
                  this.achievements = new Le.Z(this,f,h),
                  this.rewards = new Yr(this,f,h.rewards),
                  this.triggers = new dn(this,f,h),
                  this.schedulers = new jn(this,f,h.schedulers),
                  this.segments = new hi(this,f),
                  this.events = new Wn(this,f,h.events),
                  this.experiments = new ni(this,f),
                  this.uniques = new wi(this,f),
                  this.isDev ? (this.devtools = yield Promise.all([a.e(527), a.e(718)]).then(a.bind(a, 4070)).then((e => e.default(this, f, h))),
                  h.config.showReqCounter && Di(this, Ti, "f").addCounterListener((e => {
                      this.devtools.showCounter(e)
                  }
                  ))) : y.kg.stopCollect(),
                  Di(this, Si, "m", Ri).call(this),
                  Di(this, Si, "m", Ci).call(this),
                  this.init(l)
              }
              )))).catch(y.kg.error),
              A = () => this.pause(),
              T = () => {
                  this.ads && (this.ads.isFullscreenPlaying || this.ads.isPreloaderPlaying || this.ads.isRewardedPlaying || this.resume())
              }
              ,
              ur.addEventListener("statechange", (e => {
                  dr.includes(e.newState) ? A() : T()
              }
              ))
          }
          ))
      }
      ,
      Ci = function() {
          const {showOrientationOverlay: e, orientation: t} = Di(this, Ai, "f").config
            , r = e && this.isMobile && t != mr.LH.Any
            , n = () => Ii(this, void 0, void 0, (function*() {
              var e;
              r && !wr(t) ? (yield this.loadOverlay(),
              wr(t) || this.overlay.showOrientationOverlay(t)) : null === (e = this.overlay) || void 0 === e || e.closeOrientationOverlay()
          }
          ));
          var i;
          i = e => {
              this._events.emit("change:orientation", e),
              n()
          }
          ,
          window.matchMedia("(orientation: portrait)").addEventListener("change", ( () => requestAnimationFrame(( () => i(gr()))))),
          n()
      }
      ,
      Ri = function() {
          return Ii(this, void 0, void 0, (function*() {
              const {showUnsupportedOSOverlay: e, targetOS: t} = Di(this, Ai, "f").config;
              this.logger.info(`Running on ${this.device.type}`),
              e ? this.logger.info(`allowed=(${t.join(",")})`) : this.logger.info("no device restrictions"),
              e && !this.device._satisfies(t) && (this.logger.info(`${this.device.type} is restricted`),
              yield this.loadOverlay(),
              this.overlay.setUnsupportedDeviceOverlay({
                  allowed: t,
                  detected: this.device.type
              }))
          }
          ))
      }
      ;
      var Li = a(280);
      l()(Li.Z, {
          insert: "head",
          singleton: !1
      }),
      Li.Z.locals;
      const ji = "gp-gamedistribution-sticky";
      var Fi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class Ui {
          constructor(e) {
              this.config = e,
              this.app = function() {
                  const e = document.createElement("div");
                  e.id = "gs-gamedistribution",
                  document.body.appendChild(e);
                  const t = {
                      sticky: null
                  };
                  return window.addEventListener("resize", ( () => Mi(t))),
                  {
                      banners: t,
                      createSticky(r) {
                          t.sticky || (t.sticky = function(t) {
                              const r = document.createElement("div");
                              r.className = `${ji} ${ji}_${t.position || "bottom"}`;
                              const n = document.createElement("div");
                              n.id = "responsive-banner-container",
                              n.className = `${ji}__creative`;
                              const i = {
                                  $wrapper: r,
                                  $el: n,
                                  options: t
                              };
                              return r.appendChild(n),
                              e.appendChild(r),
                              i
                          }(r))
                      },
                      closeSticky() {
                          t.sticky && (t.sticky.$wrapper.remove(),
                          t.sticky.$wrapper.innerHTML = "",
                          t.sticky = null)
                      }
                  }
              }()
          }
          get appUrl() {
              return function() {
                  try {
                      return window.top.location.href || location.href
                  } catch (e) {
                      return location.href
                  }
              }()
          }
          init() {
              return Fi(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  return this.ready = e.ready,
                  e.done(this), e.ready
          
              }
              ))
          }
          getPlayer() {
              return Fi(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  return e.done({
                      id: 0,
                      name: "",
                      photoSmall: "",
                      photoMedium: "",
                      photoLarge: ""
                  }),
                  e.ready
              }
              ))
          }
          showAd(e) {
              const t = (0,
              n._)();
              var r, n;
              t.done(!0)
              // t.done(null === (n = null === (r = null == e ? void 0 : e.args) || void 0 === r ? void 0 : r.success) || void 0 === n || n)
              // try {
              //     this.gdsdk.showAd(e).then((e => {
              //         var r, n;
              //         t.done(null === (n = null === (r = null == e ? void 0 : e.args) || void 0 === r ? void 0 : r.success) || void 0 === n || n)
              //     }
              //     )).catch((e => {
              //         y.kg.error("[GameDistribution] failed to show interstitial ads:", e),
              //         t.done(!1)
              //     }
              //     ))
              // } catch (e) {
              //     t.abort(e)
              // }
              return t.ready
          }
          showFullscreen() {
              return this.showAd("interstitial")
          }
          showPreloader() {
              return this.showAd("interstitial")
          }
          showRewardedVideo() {
              return Fi(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  // var r, n;
                  // e.done(!0)
                  setTimeout(()=>{

                    e.done(null === (n = null === (r = null == t ? void 0 : t.args) || void 0 === r ? void 0 : r.success) || void 0 === n || n)
                  })
                  // try {
                  //     this.gdsdk.showAd("rewarded").then((t => {
                  //         var r, n;
                  //         e.done(null === (n = null === (r = null == t ? void 0 : t.args) || void 0 === r ? void 0 : r.success) || void 0 === n || n)
                  //     }
                  //     )).catch((t => {
                  //         y.kg.error("[GameDistribution] failed to show rewarded video:", t),
                  //         e.done(!1)
                  //     }
                  //     ))
                  // } catch (t) {
                  //     e.abort(t)
                  // }
                  return e.ready
              }
              ))
          }
          showSticky() {
              const e = (0,
              n._)();
              y.kg.error("[GameDistribution] failed to show sticky-banner:", t),
              e.done(!0)
              // try {
              //     this.gdsdk.showAd("display", {
              //         containerId: "responsive-banner-container"
              //     }).then(( () => e.done(!0))).catch((t => {
              //         y.kg.error("[GameDistribution] failed to show sticky-banner:", t),
              //         e.done(!1)
              //     }
              //     ))
              // } catch (t) {
              //     e.abort(t)
              // }
              return e.ready
          }
      }
      var Gi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class $i {
          constructor(e) {
              this.sdk = e,
              this.isFullscreenAvailable = !0,
              this.stickyBannerConfig = {
                  isOverlapping: !1,
                  height: 0
              },
              this.isRewardedAvailable = !0,
              this.isPreloaderAvailable = !0,
              this.needToLeaveFullscreenBeforeAds = !1,
              this.canShowFullscreenBeforeGamePlay = !0
          }
          get isStickyAvailable() {
              return window.innerWidth >= 728
          }
          showPreloader() {
              return Gi(this, void 0, void 0, (function*() {
                  return yield this.sdk.ready,
                  this.sdk.showPreloader().catch(( () => !1))
              }
              ))
          }
          showFullscreen() {
              return Gi(this, void 0, void 0, (function*() {
                  return yield this.sdk.ready,
                  this.sdk.showFullscreen().catch(( () => !1))
              }
              ))
          }
          showRewardedVideo() {
              return Gi(this, void 0, void 0, (function*() {
                console.log("this.sdk.ready",this.sdk.ready);
                wsdk.showAd("rewarded")
                .then(()=>{
                    // return true
                })
                .catch(()=>{
                    // return false
                });
                  return yield this.sdk.ready,
                  true
                  // this.sdk.showRewardedVideo()
                  // .catch(( () => !1))
              }
              ))
              // return this.sdk.showRewardedVideo().catch(( () => !1))
          }
          showSticky(e) {
              return Gi(this, void 0, void 0, (function*() {
                  return !!this.sdk.app.banners.sticky || (this.sdk.app.createSticky(e),
                  this.sdk.showSticky())
              }
              ))
          }
          refreshSticky(e) {
              return Gi(this, void 0, void 0, (function*() {
                  return this.sdk.app.closeSticky(),
                  this.showSticky(e)
              }
              ))
          }
          closeSticky() {
              return Gi(this, void 0, void 0, (function*() {
                  yield this.sdk.ready,
                  this.sdk.app.closeSticky()
              }
              ))
          }
      }
      var Bi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class Vi {
          constructor(e) {
              this.sdk = e,
              this.hasCredetials = !1,
              this.userId = "",
              this.isAuthorizedAtPlatform = !0
          }
          getPlayerAuthInfo() {
              return Bi(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  return e.done({}),
                  e.ready
              }
              ))
          }
          getPlayerContext() {
              return Bi(this, void 0, void 0, (function*() {
                  return {
                      platformData: yield this.getPlayerAuthInfo(),
                      key: ""
                  }
              }
              ))
          }
          loginPlayer() {
              return Bi(this, void 0, void 0, (function*() {
                  return this.sdk.getPlayer()
              }
              ))
          }
          logoutPlayer() {
              return Bi(this, void 0, void 0, (function*() {
                  return !1
              }
              ))
          }
          getPlayer() {
              return Bi(this, void 0, void 0, (function*() {
                  return this.sdk.getPlayer()
              }
              ))
          }
          publishRecord(e) {}
          isPlatformAvatar() {
              return !1
          }
          setCredentials(e) {}
      }
      const qi = (e, t) => ({
          type: e,
          getLink: t
      })
        , Wi = false//qi("facebook", (e => `//www.facebook.com/sharer/sharer.php?u=${e.url}`))
        , zi = false//qi("whatsapp", (e => `//api.whatsapp.com/send?text=${e.text}%20${e.url}`))
        , Yi = false//qi("telegram", (e => `//t.me/share/url?url=${e.url}&text=${e.text}`))
        , Ki = false//(qi("vkontakte", (e => `//vk.com/share.php?url=${e.url}&title=${e.text}&image=${e.image}`)),
      // qi("twitter", (e => `//twitter.com/share?text=${e.text}&url=${e.url}`)))
        // , Ji = (qi("odnoklassniki", (e => `//connect.ok.ru/offer?url=${e.url}&title=${e.text}&imageUrl=${e.image}`)),
      // qi("viber", (e => `viber://forward?text=${e.text}%20${e.url}`)))
        // , Zi = (qi("moymir", (e => `//connect.mail.ru/share?url=${e.url}&title=${e.text}&image_url=${e.image}`)),
      // [Wi, Ki, Yi, zi, Ji])
      //   , Hi = {
      //     success: !0,
      //     payload: {}
      // };
      var Xi = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class Qi {
          constructor(e) {
              this.sdk = e,
              this.hasIntegratedAuth = !1,
              this.isExternalLinksAllowed = !1,
              this.isSecretCodeAuthAvailable = !1,
              this._hasAuthModal = !1,
              this.isLogoutAvailable = !1,
              this.type = F.z.GAME_DISTRIBUTION,
              // this.socialNetworks = Zi,
              this.isSupportsImageUploading = !1,
              this.hasAccountLinkingFeature = !1,
              this.isSupportsRemoteVariables = !1,
              this.isSupportsCloudSaves = !1
          }
          getSDK() {
              return this.sdk
          }
          getNativeSDK() {
              return this.sdk.gdsdk
          }
          requestPermissions() {
              return Xi(this, void 0, void 0, (function*() {
                  return Hi
              }
              ))
          }
          uploadImage() {
              return null
          }
          getVariables() {
              return Xi(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
      }
      class es {
          constructor(e) {
              this.sdk = e,
              this.isSupportsShare = !1,
              this.isSupportsNativeShare = !1,
              this.isSupportsNativePosts = !1,
              this.isSupportsNativeInvite = !1,
              this.isSupportsNativeCommunityJoin = !1,
              this.canJoinCommunity = !1,
              this.isSupportShareParams = !1
          }
          get shareParams() {
              return {}
          }
          share(e) {
              return Promise.resolve(!1)
          }
          post(e) {
              return Promise.resolve(!1)
          }
          invite(e) {
              return Promise.resolve(!1)
          }
          getCommunityLink(e) {
              return e
          }
          joinCommunity() {
              return Promise.resolve(!1)
          }
          addShareParamsToUrl(e, t) {
              return e
          }
          makeShareUrl(e) {
              return ""
          }
          getShareParam(e) {
              return ""
          }
      }
      var ts = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class rs {
          constructor(e) {
              this.sdk = e,
              this.isSupportsSubscriptions = !1,
              this.isOneTimeSubscription = !0,
              this.isSupportsPayments = !1,
              this.isServerValidation = !1,
              this.isNeedAuthorizeBeforePurchase = !1
          }
          mapProducts(e, t) {
              return ts(this, void 0, void 0, (function*() {
                  return t
              }
              ))
          }
          consumeAllExpired(e, t, r) {
              return ts(this, void 0, void 0, (function*() {}
              ))
          }
          fetchPurchases() {
              return ts(this, void 0, void 0, (function*() {
                  return {
                      payload: {},
                      purchases: []
                  }
              }
              ))
          }
          purchase(e) {
              return ts(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          consume(e) {
              return ts(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          subscribe(e, t) {
              return ts(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          unsubscribe(e, t) {
              return ts(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
      }
      var ns = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class is {
          constructor() {
              this.canAddShortcut = !1,
              this.canRequestReview = !1,
              this.isAlreadyReviewed = !1
          }
          addShortcut() {
              return ns(this, void 0, void 0, (function*() {
                  return !1
              }
              ))
          }
          requestReview() {
              return Promise.resolve({
                  success: !1,
                  rating: 0,
                  error: ""
              })
          }
          requestGameUrl() {
              return ns(this, void 0, void 0, (function*() {}
              ))
          }
      }
      var ss, as = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class os {
          constructor(e) {
              ss.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, ss, e, "f")
          }
          fetchConfig() {
              return as(this, ss, "f").fetchConfig()
          }
          fetchVariables() {
              return e = this,
              t = void 0,
              n = function*() {
                  return {
                      items: yield as(this, ss, "f").fetchGameVariables()
                  }
              }
              ,
              new ((r = void 0) || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ));
              var e, t, r, n
          }
      }
      ss = new WeakMap;
      var cs, ls = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class hs {
          constructor(e) {
              cs.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, cs, e, "f")
          }
          setProgress(e) {
              return ls(this, cs, "f").setAchievementProgress(e)
          }
          unlock(e) {
              return ls(this, cs, "f").unlockAchievement(e)
          }
      }
      cs = new WeakMap;
      var us = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      const ds = "method_not_supported";
      class fs {
          constructor(e) {
              this.options = e
          }
          get reqCounter() {
              return 0
          }
          set reqCounter(e) {}
          getOptions() {
              return this.options
          }
          addCounterListener(e) {}
          setLang(e) {}
          setWithCookie(e) {}
          setPlayerData(e) {}
          ping(e) {}
          setPlatform(e, t) {}
          signQuery(e=null) {
              return us(this, void 0, void 0, (function*() {}
              ))
          }
          fetch(e, t, r) {
              return us(this, void 0, void 0, (function*() {
                  return Promise.resolve({})
              }
              ))
          }
          fetchMany(e, t, r={}) {
              return us(this, void 0, void 0, (function*() {
                  return Promise.resolve({})
              }
              ))
          }
      }
      class ps {
          constructor() {}
          sync() {
              throw ds
          }
          fetch() {
              throw ds
          }
          getPaymentLink() {
              throw ds
          }
          purchase() {
              throw ds
          }
          getPlayerPurchase() {
              throw ds
          }
          findProduct() {
              throw ds
          }
          consume() {
              throw ds
          }
          cancelSubscription() {
              throw ds
          }
          resumeSubscription() {
              throw ds
          }
      }
      class vs {
          constructor() {}
          fetch() {
              throw ds
          }
      }
      var ys = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      class ms {
          constructor() {}
          getRating() {
              return ys(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
          getPlayerRating() {
              return ys(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
          getRatingVariant() {
              return ys(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
          getPlayerRatingVariant() {
              return ys(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
          publishRecord() {
              return ys(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
      }
      class gs {
          constructor() {}
          fetch() {
              throw ds
          }
      }
      class ws {
          constructor() {}
          fetch() {
              throw ds
          }
          upload() {
              throw ds
          }
          uploadByURL() {
              throw ds
          }
          saveByURL() {
              throw ds
          }
      }
      class bs {
          constructor() {}
          fetch() {
              throw ds
          }
          upload() {
              throw ds
          }
      }
      var Es;
      class Ps {
          constructor(e) {
              Es.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Es, e, "f")
          }
          give(e) {
              return function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, Es, "f").giveReward(e)
          }
      }
      Es = new WeakMap;
      var Ss;
      class _s {
          constructor(e) {
              Ss.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Ss, e, "f")
          }
          join(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  return function(e, t, r, n) {
                      if ("a" === r && !n)
                          throw new TypeError("Private accessor was defined without a getter");
                      if ("function" == typeof t ? e !== t || !n : !t.has(e))
                          throw new TypeError("Cannot read private member from an object whose class did not declare it");
                      return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                  }(this, Ss, "f").joinEvent(e)
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
      }
      Ss = new WeakMap;
      var As;
      class Ts {
          constructor(e) {
              As.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, As, e, "f")
          }
          register(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  return function(e, t, r, n) {
                      if ("a" === r && !n)
                          throw new TypeError("Private accessor was defined without a getter");
                      if ("function" == typeof t ? e !== t || !n : !t.has(e))
                          throw new TypeError("Cannot read private member from an object whose class did not declare it");
                      return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                  }(this, As, "f").registerScheduler(e)
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          }
      }
      As = new WeakMap;
      const Os = new TextEncoder;
      var ks, Cs = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      }, Rs = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      let Is = !0;
      class Ds {
          constructor(e) {
              ks.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, ks, e, "f")
          }
          sync({playerState: e, override: t, acceptedRewards: r, givenRewards: n, claimedTriggers: i, claimedSchedulersDays: s}, {withToken: a}) {
              ( (e, t, r) => {
                  const n = Os.encode(JSON.stringify(e)).length;
                  if (n > 1048576 && y.kg.warn(`Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round(n / 1024 / 1024 * 100) / 100} MB`),
                  n > 2097152)
                      throw new Error("max_data_limit_exceeded")
              }
              )(e);
              const o = Rs(this, ks, "f").sync({
                  playerState: e,
                  override: t,
                  acceptedRewards: r,
                  givenRewards: n,
                  claimedTriggers: i,
                  claimedSchedulersDays: s,
                  isFirstRequest: Is
              });
              return Is = !1,
              o
          }
          getPlayer({withToken: e}) {
              const t = Rs(this, ks, "f").getPlayer({
                  isFirstRequest: Is
              });
              return Is = !1,
              t
          }
          logoutPlayer() {
              return Cs(this, void 0, void 0, (function*() {
                  return {
                      success: !1
                  }
              }
              ))
          }
          loginPlayer(e) {
              return Cs(this, void 0, void 0, (function*() {
                  return {
                      success: !1
                  }
              }
              ))
          }
          fetchFields() {
              return Cs(this, void 0, void 0, (function*() {
                  return {
                      items: yield Rs(this, ks, "f").fetchPlayerFields()
                  }
              }
              ))
          }
          checkCode({secretCode: e}) {
              return Cs(this, void 0, void 0, (function*() {
                  return {
                      success: !1
                  }
              }
              ))
          }
          fetchPlayers({ids: e}) {
              return Cs(this, void 0, void 0, (function*() {
                  throw ds
              }
              ))
          }
          checkUniqueValue({tag: e, value: t}) {
              return Cs(this, void 0, void 0, (function*() {
                  return {
                      success: (yield Rs(this, ks, "f").getPlayer({
                          isFirstRequest: Is
                      })).uniques.some((r => r.tag === e && r.value === t))
                  }
              }
              ))
          }
          registerUniqueValue({tag: e, value: t}) {
              return Cs(this, void 0, void 0, (function*() {
                  return yield Rs(this, ks, "f").registerUniqueValue({
                      tag: e,
                      value: t
                  })
              }
              ))
          }
          deleteUniqueValue({tag: e}) {
              return Cs(this, void 0, void 0, (function*() {
                  return yield Rs(this, ks, "f").deleteUniqueValue({
                      tag: e
                  })
              }
              ))
          }
      }
      ks = new WeakMap;
      class xs {
          constructor() {}
          fetchInvites() {
              throw ds
          }
          fetchChannelInvites() {
              throw ds
          }
          fetchSentInvites() {
              throw ds
          }
          sendInvite() {
              throw ds
          }
          cancelInvite() {
              throw ds
          }
          acceptInvite() {
              throw ds
          }
          rejectInvite() {
              throw ds
          }
      }
      class Ns {
          fetchJoinRequests() {
              throw ds
          }
          fetchSentJoinRequests() {
              throw ds
          }
          acceptJoinRequest() {
              throw ds
          }
          rejectJoinRequest() {
              throw ds
          }
      }
      class Ms {
          mute() {
              throw ds
          }
          unmute() {
              throw ds
          }
          fetchMembers() {
              throw ds
          }
          join() {
              throw ds
          }
          cancelJoin() {
              throw ds
          }
          leave() {
              throw ds
          }
          kick() {
              throw ds
          }
      }
      class Ls {
          constructor() {}
          fetchMessages() {
              throw ds
          }
          fetchPersonalMessages() {
              throw ds
          }
          fetchFeedMessages() {
              throw ds
          }
          sendMessage() {
              throw ds
          }
          sendFeedMessage() {
              throw ds
          }
          sendPersonalMessage() {
              throw ds
          }
          editMessage() {
              throw ds
          }
          deleteMessage() {
              throw ds
          }
      }
      class js {
          constructor() {}
          fetchChannel() {
              throw ds
          }
          fetchPersonalChannel() {
              throw ds
          }
          fetchFeedChannel() {
              throw ds
          }
          fetchChannels() {
              throw ds
          }
          createChannel() {
              throw ds
          }
          updateChannel() {
              throw ds
          }
          deleteChannel() {
              throw ds
          }
      }
      class Fs {
          constructor() {
              this.channels = new js,
              this.messages = new Ls,
              this.members = new Ms,
              this.invites = new xs,
              this.joinRequests = new Ns
          }
          ping(e) {}
          createCentrifugeClient() {
              return e = this,
              t = void 0,
              n = function*() {
                  return null
              }
              ,
              new ((r = void 0) || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ));
              var e, t, r, n
          }
      }
      var Us = a(6609)
        , Gs = a.n(Us)
        , $s = a(9639)
        , Bs = a.n($s);
      const Vs = {
          [mr.N0.Eq]: (e, t) => t.some((t => e == t)),
          [mr.N0.Ne]: (e, t) => t.every((t => e != t)),
          [mr.N0.Lt]: (e, t) => e < t[0],
          [mr.N0.Gt]: (e, t) => e > t[0],
          [mr.N0.Lte]: (e, t) => e <= t[0],
          [mr.N0.Gte]: (e, t) => e >= t[0]
      }
        , qs = {
          [mr.CP.EntityStat]: (e, t, r) => {
              switch (r.type) {
              case mr.zn.Event:
                  {
                      const n = e.playerEvents.find((e => e.eventId === r.entityId));
                      if (!n)
                          throw new Error(`Player does not participate in ID ${r.entityId} event`);
                      return n.stats[t.key] || 0
                  }
              case mr.zn.Scheduler:
                  {
                      const n = e.playerSchedulers.find((e => e.schedulerId === r.entityId));
                      if (!n)
                          throw new Error(`Player does not participate in ID ${r.entityId} rewards schedule`);
                      return n.stats[t.key] || 0
                  }
              default:
                  throw new Error("invalid statType")
              }
          }
          ,
          [mr.CP.PlayerStat]: (e, t, r) => e.stats[t.key] || 0,
          [mr.CP.PlayerField]: (e, t, r) => e.state[t.key] || ""
      };
      const Ws = {
          [mr.W2.Add]: (e, t) => (Number.isNaN(t.value) ? y.kg.warn(`Invalid value for mutation, key ${t.key}: ${t.value}`) : e[t.key] += t.value,
          e),
          [mr.W2.Set]: (e, t) => (e[t.key] = t.value,
          e),
          [mr.W2.Remove]: (e, t) => (e[t.key] -= t.value,
          e)
      }
        , zs = {
          [mr.x1.PlayerField]: (e, t) => Ws[t.action](e, t)
      };
      var Ys, Ks = a(1438);
      class Js {
          constructor(e) {
              this.game = e,
              Ys.set(this, ( () => {}
              )),
              this.resetRewardsPerSync()
          }
          sync({isFirstRequest: e, playerState: t, claimedTriggers: r, givenRewards: n, acceptedRewards: i, claimedSchedulersDays: s}) {
              return a = this,
              o = void 0,
              l = function*() {
                  this.game.playerFields.forEach((e => {
                      this.player.state[e.key] = t[e.key]
                  }
                  )),
                  this.game.playerFields.forEach((e => {
                      this.player.state[e.key] = t[e.key]
                  }
                  )),
                  this.updateModifiedAt(),
                  e && this.resetSession(),
                  this.resetRewardsPerSync();
                  const a = [...this.game.triggers];
                  return this.game.events.forEach((e => {
                      this.player.playerEvents.find((t => t.eventId === e.id)) && a.push(...e.triggers)
                  }
                  )),
                  this.game.schedulers.forEach((e => {
                      const t = this.player.playerSchedulers.find((t => t.schedulerId === e.id));
                      if (t) {
                          const r = e.type === mr.OB.ActiveDays ? t.stats.activeDays : t.stats.activeDaysConsecutive
                            , n = e.triggers.filter((e => e.day === r));
                          a.push(...n)
                      }
                  }
                  )),
                  a.forEach((e => {
                      const t = this.player.triggers.find((t => t.triggerId === e.id));
                      var n;
                      (null == t ? void 0 : t.claimed) || t || function(e, t, r) {
                          return r.some((r => function(e, t, r) {
                              return r.every((r => function(e, t, r) {
                                  const n = qs[r.type];
                                  return (0,
                                  Vs[r.operator])(n(e, r, t), r.value)
                              }(e, t, r)))
                          }(e, t, r)))
                      }(this.player, n = e, n.conditions) && (this.rewardsData.activatedTriggersNow.push(e.id),
                      this.player.triggers.push({
                          triggerId: e.id,
                          claimed: !1
                      }),
                      e.isAutoClaim && r.push(e.id))
                  }
                  )),
                  r.forEach((e => {
                      const t = this.player.triggers.find((t => t.triggerId === e))
                        , r = a.find((t => t.id === e));
                      r && t && !t.claimed && (t.claimed = !0,
                      this.rewardsData.claimedTriggersNow.push(e),
                      r.bonuses.forEach((e => this.giveBonus(e))))
                  }
                  )),
                  n.forEach((e => this.giveReward(e.id, e.count, !1))),
                  i.forEach((e => this.acceptReward(e.id, e.count, !1))),
                  s.forEach((e => {
                      var t;
                      if (e.day < 0)
                          return;
                      const r = this.game.schedulers.find((t => t.id === e.schedulerId));
                      if (!r)
                          return;
                      const n = this.player.playerSchedulers.find((t => t.schedulerId === e.schedulerId));
                      n && (n.daysClaimed.includes(e.day) || r.days < e.day || (r.type == mr.OB.ActiveDays && n.stats.activeDays >= e.day || r.type == mr.OB.ActiveDaysConsecutive && n.stats.activeDaysConsecutive >= e.day) && (n.daysClaimed.push(e.day),
                      this.rewardsData.claimedSchedulersDaysNow.push({
                          schedulerId: e.schedulerId,
                          day: e.day
                      }),
                      ((null === (t = r.daysBonuses.find((t => t.day === e.day))) || void 0 === t ? void 0 : t.bonuses) || []).forEach((e => this.giveBonus(e)))))
                  }
                  )),
                  Object.assign(Object.assign({
                      __typename: "Player"
                  }, this.player), {
                      rewardsData: this.rewardsData
                  })
              }
              ,
              new ((c = void 0) || (c = Promise))((function(e, t) {
                  function r(e) {
                      try {
                          i(l.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function n(e) {
                      try {
                          i(l.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function i(t) {
                      var i;
                      t.done ? e(t.value) : (i = t.value,
                      i instanceof c ? i : new c((function(e) {
                          e(i)
                      }
                      ))).then(r, n)
                  }
                  i((l = l.apply(a, o || [])).next())
              }
              ));
              var a, o, c, l
          }
          setPlayer({player: e, isFirstRequest: t}) {
              this.player = e;
              let r = this.updateModifiedAt();
              t && this.resetSession();
              const n = Date.parse(e.sessionStart)
                , i = n > 0 ? Date.now() - n : 0;
              let s = e.stats.playtimeAll + i / 1e3
                , a = e.stats.playtimeToday + i / 1e3;
              return function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, Ys, "f").call(this),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Ys, W((e => {
                  s += e / 1e3,
                  a += e / 1e3,
                  this.player.stats.playtimeAll = Math.floor(s),
                  this.player.stats.playtimeToday = Math.floor(a)
              }
              )), "f"),
              r
          }
          _incrementActiveDays() {
              this.player.stats.activeDays += 1,
              this.player.playerEvents.forEach((e => {
                  e.stats.activeDays += 1
              }
              )),
              this.player.playerSchedulers.forEach((e => {
                  e.stats.activeDays += 1,
                  this._checkToRestartScheduler(e.schedulerId)
              }
              ))
          }
          _incrementActiveDaysConsecutive() {
              this.player.stats.activeDaysConsecutive += 1,
              this.player.playerEvents.forEach((e => {
                  e.stats.activeDaysConsecutive += 1
              }
              )),
              this.player.playerSchedulers.forEach((e => {
                  e.stats.activeDaysConsecutive += 1,
                  this._checkToRestartScheduler(e.schedulerId)
              }
              ))
          }
          _resetActiveDaysConsecutive() {
              this.player.stats.activeDaysConsecutive = 1,
              this.player.playerEvents.forEach((e => {
                  e.stats.activeDaysConsecutive = 1
              }
              )),
              this.player.playerSchedulers.forEach((e => {
                  e.stats.activeDaysConsecutive = 1,
                  this._checkToRestartScheduler(e.schedulerId, !0)
              }
              ))
          }
          _checkToRestartScheduler(e, t) {
              const r = this.game.schedulers.find((t => t.id === e));
              if (!r)
                  return;
              const n = this.player.playerSchedulers.find((t => t.schedulerId === e));
              if (!n)
                  return;
              const i = r.type === mr.OB.ActiveDays ? "activeDays" : "activeDaysConsecutive";
              (t || r.isRepeat && n.stats[i] > r.days) && (n.stats = {
                  activeDays: 1,
                  activeDaysConsecutive: 1
              },
              n.daysClaimed = [])
          }
          updateModifiedAt() {
              let e = !1;
              const [t,r] = (n = this.player.state.modifiedAt,
              [Bs()().isAfter(n, "day"), Bs()().diff(n, "day", !0)]);
              var n;
              return this.player.state.modifiedAt = (new Date).toISOString(),
              t && (this._incrementActiveDays(),
              r >= 1 && (r <= 2 ? this._incrementActiveDaysConsecutive() : this._resetActiveDaysConsecutive()),
              e = !0),
              this.game.schedulers.filter((e => e.isAutoRegister && !this.player.playerSchedulers.some((t => t.schedulerId === e.id)))).forEach((t => {
                  this.registerScheduler(t.id),
                  e = !0
              }
              )),
              this.game.events.filter((e => e.isAutoJoin && !this.player.playerEvents.some((t => t.eventId === e.id)) && this._isActiveEvent(e.id))).forEach((t => {
                  this.joinEvent(t.id),
                  e = !0
              }
              )),
              e
          }
          _isActiveEvent(e) {
              const t = this.game.events.find((t => t.id === e));
              if (!t)
                  return !1;
              const r = Bs()()
                , n = Bs()(t.dateStart)
                , i = Bs()(t.dateEnd);
              return r.isAfter(n) && r.isBefore(i)
          }
          resetSession() {
              this.player.stats.playtimeToday = 0,
              this.player.sessionStart = (new Date).toISOString()
          }
          giveBonus(e) {
              switch (e.type) {
              case mr.Do.Reward:
                  this.giveReward(e.id, 1, !0);
                  break;
              case mr.Do.Achievement:
                  this.rewardsData.givenRewards.push(e.id),
                  this.giveAchievement(e.id);
                  break;
              case mr.Do.Product:
                  this.giveProduct(e.id)
              }
          }
          giveReward(e, t, r) {
              const n = this.game.rewards.find((t => t.id === e));
              if (!n || 0 === t)
                  return;
              let i = this.player.rewards.find((t => t.rewardId === e));
              if (i || (i = {
                  rewardId: e,
                  countTotal: 0,
                  countAccepted: 0
              },
              this.player.rewards.push(i)),
              i.countTotal += t,
              n.isAutoAccept && r) {
                  i.countAccepted += t;
                  for (let e = 0; e < t; e++)
                      this.applyMutations(n.mutations)
              }
              return this.rewardsData.givenRewards.push(n.id),
              i
          }
          joinEvent(e) {
              if (!this.game.events.find((t => t.id === e)))
                  return;
              if (this.player.playerEvents.find((t => t.eventId === e)))
                  return;
              const t = {
                  eventId: e,
                  stats: {
                      activeDays: 1,
                      activeDaysConsecutive: 1
                  }
              };
              return this.player.playerEvents.push(t),
              t
          }
          registerScheduler(e) {
              if (!this.game.schedulers.find((t => t.id === e)))
                  return;
              if (this.player.playerSchedulers.find((t => t.schedulerId === e)))
                  return;
              const t = {
                  schedulerId: e,
                  stats: {
                      activeDays: 1,
                      activeDaysConsecutive: 1
                  },
                  daysClaimed: []
              };
              return this.player.playerSchedulers.push(t),
              t
          }
          registerUniqueValue(e, t) {
              const r = this.player.uniques.find((t => t.tag === e));
              if (r)
                  return r.value = t,
                  r;
              const n = {
                  tag: e,
                  value: t
              };
              return this.player.uniques.push(n),
              n
          }
          deleteUniqueValue(e) {
              this.player.uniques = this.player.uniques.filter((t => t.tag !== e))
          }
          acceptReward(e, t, r) {
              const n = this.game.rewards.find((t => t.id === e));
              if (!n)
                  throw new Error("reward_not_found");
              const i = this.player.rewards.find((t => t.rewardId === e));
              if (!i)
                  throw new Error("player_reward_not_found");
              const s = Math.min(i.countTotal - i.countAccepted, t);
              if (0 === s)
                  throw new Error("player_reward_not_found");
              i.countAccepted += s,
              r && this.applyMutations(n.mutations)
          }
          giveAchievement(e) {
              const t = this.game.achievements.find((t => t.id === e));
              if (!t)
                  return;
              let r = this.player.achievementsList.find((t => t.achievementId === e));
              return r || (r = {
                  achievementId: e,
                  unlocked: !1,
                  progress: 0,
                  createdAt: (new Date).toISOString()
              },
              this.player.achievementsList.push(r)),
              r.unlocked = !0,
              r.progress = t.maxProgress,
              this.rewardsData.givenAchievements.push(e),
              r
          }
          giveProduct(e) {
              const t = this.game.products.find((t => t.id === e));
              if (!t)
                  return;
              const r = {
                  productId: t.id,
                  tag: t.tag,
                  payload: {},
                  createdAt: (new Date).toISOString(),
                  orderStatus: Ks.i.Paid,
                  expiredAt: "",
                  gift: !0,
                  subscribed: !1
              };
              t.isSubscription && (r.expiredAt = Bs()().add(t.period, "days").toISOString()),
              this.player.purchasesListV2.push(r),
              this.rewardsData.givenProducts.push(e)
          }
          setAchievementProgress(e, t) {
              const r = this.game.achievements.find((t => t.id === e));
              if (!r)
                  return;
              let n = this.player.achievementsList.find((t => t.achievementId === e));
              return n || (n = {
                  achievementId: e,
                  unlocked: !1,
                  progress: 0,
                  createdAt: (new Date).toISOString()
              },
              this.player.achievementsList.push(n)),
              t >= r.maxProgress ? (n.progress = r.maxProgress,
              n.unlocked = !0) : n.progress = t < 0 ? 0 : t,
              n
          }
          resetRewardsPerSync() {
              this.rewardsData = {
                  activatedTriggersNow: [],
                  claimedTriggersNow: [],
                  claimedSchedulersDaysNow: [],
                  givenAchievements: [],
                  givenRewards: [],
                  givenProducts: []
              }
          }
          applyMutations(e) {
              e.forEach((e => this.applyMutation(e)))
          }
          applyMutation(e) {
              this.player.state = function(e, t) {
                  const r = zs[t.type];
                  if (!r)
                      throw new Error(`Unknown mutation type: ${t.type}`);
                  return r(e, t)
              }(this.player.state, e)
          }
      }
      Ys = new WeakMap;
      var Zs = function(e, t, r, n) {
          return new (r || (r = Promise))((function(i, s) {
              function a(e) {
                  try {
                      c(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function o(e) {
                  try {
                      c(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function c(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value,
                  t instanceof r ? t : new r((function(e) {
                      e(t)
                  }
                  ))).then(a, o)
              }
              c((n = n.apply(e, t || [])).next())
          }
          ))
      };
      const Hs = "ofl:player_allData";
      class Xs {
          constructor(e) {
              this.storage = e,
              this.readyTransaction = (0,
              n._)(),
              this.gameState = {},
              this.ready = this.readyTransaction.ready
          }
          setProjectConfig(e) {
              try {
                  !function(e) {
                      e.platformConfig.banners.length
                  }(e)
              } catch (e) {
                  throw y.kg.error('failed to parse project config "./gs-config.json"', e),
                  e
              }
              return e.serverTime = (new Date).toISOString(),
              e.platformConfig.progressSaveFormat = i.pQ.Cloud,
              this.gameState.config = e,
              this.readyTransaction.done(),
              e
          }
          fetchConfig() {
              var e;
              return Zs(this, void 0, void 0, (function*() {
                  const t = (null === (e = window.__GS_BOOT_CFG__) || void 0 === e ? void 0 : e.version) || 0;
                  return fetch(`./gs-config.json?v=${t}`).then((e => e.json())).then((e => this.setProjectConfig(e))).catch(( () => Zs(this, void 0, void 0, (function*() {
                      const e = yield this.storage.loadConfig();
                      return this.setProjectConfig(e)
                  }
                  ))))
              }
              ))
          }
          fetchGameVariables() {
              return Zs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  Gs()(this.gameState.config.gameVariables)
              }
              ))
          }
          fetchPlayerFields() {
              return Zs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  this.gameState.config.playerFields
              }
              ))
          }
          sync(e) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  this.player || (yield this.getPlayer({
                      isFirstRequest: e.isFirstRequest
                  })),
                  !this.player)
                      throw new Error("player_not_found");
                  const t = yield this.player.sync(e);
                  return yield this.savePlayer(t),
                  Gs()(t)
              }
              ))
          }
          getPlayer({isFirstRequest: e}) {
              return Zs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  this.storage.get(this.storage.localStorages, Hs).then((e => Zs(this, void 0, void 0, (function*() {
                      const t = this.gameState.config.playerFields.reduce(( (e, t) => (e[t.key] = t.default,
                      e)), {});
                      if (e)
                          return "serverTime"in e || (e.serverTime = (new Date).toISOString()),
                          Object.entries(e.state).forEach(( ([r,n]) => {
                              void 0 === n && (e.state[r] = t[r])
                          }
                          )),
                          e;
                      const r = {
                          state: Object.assign({
                              id: Date.now(),
                              active: !0,
                              removed: !1,
                              test: !1,
                              name: "",
                              avatar: "",
                              credentials: "",
                              score: 0,
                              secretCode: String(Date.now()),
                              modifiedAt: (new Date).toISOString()
                          }, t),
                          stats: {
                              playtimeAll: 0,
                              playtimeToday: 0,
                              activeDays: 1,
                              activeDaysConsecutive: 1
                          },
                          achievementsList: [],
                          purchasesListV2: [],
                          rewards: [],
                          triggers: [],
                          uniques: [],
                          token: "",
                          firstReqHash: "",
                          sessionStart: (new Date).toISOString(),
                          playerSchedulers: [],
                          rewardsData: {
                              activatedTriggersNow: [],
                              claimedTriggersNow: [],
                              claimedSchedulersDaysNow: [],
                              givenAchievements: [],
                              givenRewards: [],
                              givenProducts: []
                          },
                          playerEvents: [],
                          experiments: [],
                          segments: [],
                          newSegments: [],
                          leftSegments: [],
                          serverTime: (new Date).toISOString()
                      };
                      return yield this.savePlayer(r),
                      r
                  }
                  )))).then((t => (this._setPlayer(t, e),
                  Gs()(t))))
              }
              ))
          }
          setAchievementProgress({id: e, tag: t, progress: r}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  const n = this.gameState.config.achievements.find((r => r.id === e || r.tag === t));
                  if (!n)
                      throw new Error("achievement_not_found");
                  const i = this.player.player.achievementsList.find((e => e.achievementId === n.id));
                  if (null == i ? void 0 : i.unlocked)
                      throw new Error("achievement_already_unlocked");
                  const s = this.player.setAchievementProgress(n.id, r);
                  return yield this.savePlayer(this.player.player),
                  Object.assign(Object.assign({}, s), {
                      achievement: n
                  })
              }
              ))
          }
          unlockAchievement({id: e, tag: t}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  const r = this.gameState.config.achievements.find((r => r.id === e || r.tag === t));
                  if (!r)
                      throw new Error("achievement_not_found");
                  const n = this.player.player.achievementsList.find((e => e.achievementId === r.id));
                  if (null == n ? void 0 : n.unlocked)
                      throw new Error("achievement_already_unlocked");
                  const i = this.player.giveAchievement(r.id);
                  return yield this.savePlayer(this.player.player),
                  Object.assign(Object.assign({}, i), {
                      achievement: r
                  })
              }
              ))
          }
          giveReward({id: e, tag: t}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  const r = this.gameState.config.rewards.find((r => r.id === e || r.tag === t));
                  if (!r)
                      throw new Error("reward_not_found");
                  const n = this.player.giveReward(r.id, 1, !1);
                  return yield this.savePlayer(this.player.player),
                  Object.assign(Object.assign({}, n), {
                      reward: r
                  })
              }
              ))
          }
          joinEvent({eventId: e}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  const t = this.gameState.config.events.find((t => t.id === e));
                  if (!t)
                      throw new Error("event_not_found");
                  if (this.player.player.playerEvents.find((e => e.eventId === t.id)))
                      throw new Error("already_joined");
                  const r = this.player.joinEvent(t.id);
                  return yield this.savePlayer(this.player.player),
                  Object.assign({}, r)
              }
              ))
          }
          registerScheduler({schedulerId: e}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  const t = this.gameState.config.schedulers.find((t => t.id === e));
                  if (!t)
                      throw new Error("scheduler_not_found");
                  if (this.player.player.playerSchedulers.find((e => e.schedulerId === t.id)))
                      throw new Error("already_registered");
                  const r = this.player.registerScheduler(t.id);
                  return yield this.savePlayer(this.player.player),
                  Object.assign({}, r)
              }
              ))
          }
          registerUniqueValue({tag: e, value: t}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  if (this.player.player.uniques.find((r => r.tag === e && r.value === t)))
                      throw new Error("already_exists");
                  const r = this.player.registerUniqueValue(e, t);
                  return yield this.savePlayer(this.player.player),
                  Object.assign({}, r)
              }
              ))
          }
          deleteUniqueValue({tag: e}) {
              return Zs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  !this.player)
                      throw new Error("player_not_found");
                  if (!this.player.player.uniques.find((t => t.tag === e)))
                      throw new Error("unique_value_not_found");
                  return this.player.deleteUniqueValue(e),
                  yield this.savePlayer(this.player.player),
                  {
                      success: !0
                  }
              }
              ))
          }
          _setPlayer(e, t) {
              this.player || (this.player = new Js(this.gameState.config)),
              this.player.setPlayer({
                  player: e,
                  isFirstRequest: t
              }) && this.savePlayer(e)
          }
          savePlayer(e) {
              return this.storage.set(this.storage.localStorages, Hs, e)
          }
      }
      class Qs {
          checkCensor() {
              return e = this,
              t = void 0,
              n = function*() {
                  return {
                      success: !0
                  }
              }
              ,
              new ((r = void 0) || (r = Promise))((function(i, s) {
                  function a(e) {
                      try {
                          c(n.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(n.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof r ? t : new r((function(e) {
                          e(t)
                      }
                      ))).then(a, o)
                  }
                  c((n = n.apply(e, t || [])).next())
              }
              ));
              var e, t, r, n
          }
      }
      y.kg.info("GameDistribution Special Build"),
      window.__SDKProvider = "GamePush",
      new class extends Ni {
          constructor() {
              super(...arguments),
              this.name = "gp"
          }
      }
      (void 0,{
          platformType: F.z.GAME_DISTRIBUTION,
          platformChunk: function(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  const [,t] = yield Promise.all([e.setupStorage([]), e.fetchConfig()])
                    , r = new Ui({
                      appId: t.platformConfig.appId
                  });
                  yield r.init();
                  const n = new Vi(r);
                  return {
                      adsAdapter: new $i(r),
                      appAdapter: new is,
                      playerAdapter: n,
                      platformAdapter: new Qi(r),
                      socialsAdapter: new es(r),
                      paymentsAdapter: new rs(r),
                      projectConfig: t
                  }
              }
              ,
              new ((n = void 0) || (n = Promise))((function(e, s) {
                  function a(e) {
                      try {
                          c(i.next(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function o(e) {
                      try {
                          c(i.throw(e))
                      } catch (e) {
                          s(e)
                      }
                  }
                  function c(t) {
                      var r;
                      t.done ? e(t.value) : (r = t.value,
                      r instanceof n ? r : new n((function(e) {
                          e(r)
                      }
                      ))).then(a, o)
                  }
                  c((i = i.apply(t, r || [])).next())
              }
              ));
              var t, r, n, i
          },
          servicesChunk: function(e) {
              const t = new fs(e)
                , r = new Xs(e.storage);
              return {
                  apiClient: t,
                  setupAnalytics: () => ({
                      counters: []
                  }),
                  projectService: new os(r),
                  achievementsService: new hs(r),
                  paymentsService: new ps,
                  gamesCollectionsService: new vs,
                  leaderboardsService: new ms,
                  documentsService: new gs,
                  imagesService: new ws,
                  filesService: new bs,
                  rewardsService: new Ps(r),
                  eventsService: new _s(r),
                  schedulersService: new Ts(r),
                  playerService: new Ds(r),
                  channelsService: new Fs,
                  aiService: new Qs
              }
          }
      })
  }
  )()
}
)();
