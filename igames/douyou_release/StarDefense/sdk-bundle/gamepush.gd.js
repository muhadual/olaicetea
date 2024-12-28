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
                  return e instanceof A || !(!e || !e[E])
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
                  new A(r)
              }
                , T = g;
              T.l = S,
              T.i = P,
              T.w = function(e, t) {
                  return _(e, {
                      locale: t.$L,
                      utc: t.$u,
                      x: t.$x,
                      $offset: t.$offset
                  })
              }
              ;
              var A = function() {
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
                          if (T.u(t))
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
                      return T
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
                      return T.u(e) ? this[t] : this.set(r, e)
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
                        , a = !!T.u(t) || t
                        , h = T.p(e)
                        , f = function(e, t) {
                          var n = T.w(r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y,t,e), r);
                          return a ? n : n.endOf(o)
                      }
                        , p = function(e, t) {
                          return T.w(r.toDate()[e].apply(r.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), r)
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
                      var a, c = T.p(e), h = "set" + (this.$u ? "UTC" : ""), f = (a = {},
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
                      return this[T.p(e)]()
                  }
                  ,
                  y.add = function(r, a) {
                      var h, d = this;
                      r = Number(r);
                      var f = T.p(a)
                        , p = function(e) {
                          var t = _(d);
                          return T.w(t.date(t.date() + Math.round(e * r)), d)
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
                      return T.w(y, this)
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
                        , i = T.z(this)
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
                          return T.s(s % 12 || 12, e, "0")
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
                                  return T.s(t.$y, 4, "0");
                              case "M":
                                  return o + 1;
                              case "MM":
                                  return T.s(o + 1, 2, "0");
                              case "MMM":
                                  return u(r.monthsShort, o, l, 3);
                              case "MMMM":
                                  return u(l, o);
                              case "D":
                                  return t.$D;
                              case "DD":
                                  return T.s(t.$D, 2, "0");
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
                                  return T.s(s, 2, "0");
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
                                  return T.s(a, 2, "0");
                              case "s":
                                  return String(t.$s);
                              case "ss":
                                  return T.s(t.$s, 2, "0");
                              case "SSS":
                                  return T.s(t.$ms, 3, "0");
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
                      var f, p = this, v = T.p(a), y = _(r), m = (y.utcOffset() - this.utcOffset()) * e, g = this - y, w = function() {
                          return T.m(p, y)
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
                      return d ? f : T.a(f)
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
                      return T.w(this.$d, this)
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
                , k = A.prototype;
              return _.prototype = k,
              [["$ms", r], ["$s", n], ["$m", i], ["$H", s], ["$W", o], ["$M", l], ["$y", u], ["$D", d]].forEach((function(e) {
                  k[e[1]] = function(t) {
                      return this.$g(t, e[0], e[1])
                  }
              }
              )),
              _.extend = function(e, t) {
                  return e.$i || (e(t, A, _),
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
            , T = "[object Arguments]"
            , A = "[object Function]"
            , k = "[object Object]"
            , O = {};
          O[T] = O["[object Array]"] = O["[object ArrayBuffer]"] = O["[object DataView]"] = O["[object Boolean]"] = O["[object Date]"] = O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Map]"] = O["[object Number]"] = O[k] = O["[object RegExp]"] = O["[object Set]"] = O["[object String]"] = O["[object Symbol]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0,
          O["[object Error]"] = O[A] = O["[object WeakMap]"] = !1,
          e.exports = function e(t, r, C, R, I, x) {
              var D, N = 1 & r, M = 2 & r, j = 4 & r;
              if (C && (D = I ? C(t, R, I, x) : C(t)),
              void 0 !== D)
                  return D;
              if (!E(t))
                  return t;
              var F = g(t);
              if (F) {
                  if (D = v(t),
                  !N)
                      return l(t, D)
              } else {
                  var L = p(t)
                    , U = L == A || "[object GeneratorFunction]" == L;
                  if (w(t))
                      return c(t, N);
                  if (L == k || L == T || U && !I) {
                      if (D = M || U ? {} : m(t),
                      !N)
                          return M ? u(t, o(D, t)) : h(t, a(D, t))
                  } else {
                      if (!O[L])
                          return I ? t : {};
                      D = y(t, L, N)
                  }
              }
              x || (x = new n);
              var B = x.get(t);
              if (B)
                  return B;
              x.set(t, D),
              P(t) ? t.forEach((function(n) {
                  D.add(e(n, r, C, n, t, x))
              }
              )) : b(t) && t.forEach((function(n, i) {
                  D.set(i, e(n, r, C, i, t, x))
              }
              ));
              var G = F ? void 0 : (j ? M ? f : d : M ? _ : S)(t);
              return i(G || t, (function(n, i) {
                  G && (n = t[i = n]),
                  s(D, i, e(n, r, C, i, t, x))
              }
              )),
              D
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
                , T = "ASUS"
                , A = "BlackBerry"
                , k = "Google"
                , O = "Huawei"
                , C = "LG"
                , R = "Microsoft"
                , I = "Motorola"
                , x = "Samsung"
                , D = "Sharp"
                , N = "Sony"
                , M = "Xiaomi"
                , j = "Zebra"
                , F = "Facebook"
                , L = "Chromium OS"
                , U = "Mac OS"
                , B = function(e) {
                  for (var t = {}, r = 0; r < e.length; r++)
                      t[e[r].toUpperCase()] = e[r];
                  return t
              }
                , G = function(e, t) {
                  return i(e) === h && -1 !== $(t).indexOf($(e))
              }
                , $ = function(e) {
                  return e.toLowerCase()
              }
                , W = function(e, t) {
                  if (i(e) === h)
                      return e = e.replace(/^\s\s*/, ""),
                      i(t) === c ? e : e.substring(0, 350)
              }
                , V = function(e, t) {
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
                , q = function(e, t) {
                  for (var r in t)
                      if (i(t[r]) === l && t[r].length > 0) {
                          for (var n = 0; n < t[r].length; n++)
                              if (G(t[r][n], e))
                                  return "?" === r ? a : r
                      } else if (G(t[r], e))
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
                  browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [v, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [v, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, v], [/opios[\/ ]+([\w\.]+)/i], [v, [d, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [v, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, v], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [v, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [v, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [v, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [v, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [v, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [v, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], v], [/\bfocus\/([\w\.]+)/i], [v, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [v, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [v, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [v, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [v, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [v, [d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [v, [d, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], v], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], v], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [d, v], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, F], v], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [d, v], [/\bgsa\/([\w\.]+) .*safari\//i], [v, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [v, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [v, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], v], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [v, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, v], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [v, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [v, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [v, q, {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/"
                  }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, v], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], v], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [v, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, v], [/(cobalt)\/([\w\.]+)/i], [d, [v, /master.|lts./, ""]]],
                  cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[y, "amd64"]], [/(ia32(?=;))/i], [[y, $]], [/((?:i[346]|x)86)[;\)]/i], [[y, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[y, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[y, "armhf"]], [/windows (ce|mobile); ppc;/i], [[y, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[y, /ower/, "", $]], [/(sun4\w)[;\)]/i], [[y, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[y, $]]],
                  device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [p, x], [f, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [p, x], [f, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [u, [p, _], [f, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [p, _], [f, w]], [/(macintosh);/i], [u, [p, _]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [p, D], [f, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [p, O], [f, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [u, [p, O], [f, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [p, M], [f, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [p, M], [f, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [p, "OPPO"], [f, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [p, "Vivo"], [f, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [p, "Realme"], [f, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [p, I], [f, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [p, I], [f, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [p, C], [f, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [p, C], [f, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [p, "Lenovo"], [f, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [p, "Nokia"], [f, g]], [/(pixel c)\b/i], [u, [p, k], [f, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [p, k], [f, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [p, N], [f, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [p, N], [f, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [p, "OnePlus"], [f, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [p, S], [f, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [p, S], [f, g]], [/(playbook);[-\w\),; ]+(rim)/i], [u, p, [f, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [p, A], [f, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [p, T], [f, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [p, T], [f, g]], [/(nexus 9)/i], [u, [p, "HTC"], [f, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [p, [u, /_/g, " "], [f, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [p, "Acer"], [f, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [p, "Meizu"], [f, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [p, u, [f, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [p, u, [f, w]], [/(surface duo)/i], [u, [p, R], [f, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [p, "Fairphone"], [f, g]], [/(u304aa)/i], [u, [p, "AT&T"], [f, g]], [/\bsie-(\w*)/i], [u, [p, "Siemens"], [f, g]], [/\b(rct\w+) b/i], [u, [p, "RCA"], [f, w]], [/\b(venue[\d ]{2,7}) b/i], [u, [p, "Dell"], [f, w]], [/\b(q(?:mv|ta)\w+) b/i], [u, [p, "Verizon"], [f, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [p, "Barnes & Noble"], [f, w]], [/\b(tm\d{3}\w+) b/i], [u, [p, "NuVision"], [f, w]], [/\b(k88) b/i], [u, [p, "ZTE"], [f, w]], [/\b(nx\d{3}j) b/i], [u, [p, "ZTE"], [f, g]], [/\b(gen\d{3}) b.+49h/i], [u, [p, "Swiss"], [f, g]], [/\b(zur\d{3}) b/i], [u, [p, "Swiss"], [f, w]], [/\b((zeki)?tb.*\b) b/i], [u, [p, "Zeki"], [f, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[p, "Dragon Touch"], u, [f, w]], [/\b(ns-?\w{0,9}) b/i], [u, [p, "Insignia"], [f, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [p, "NextBook"], [f, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[p, "Voice"], u, [f, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[p, "LvTel"], u, [f, g]], [/\b(ph-1) /i], [u, [p, "Essential"], [f, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [p, "Envizen"], [f, w]], [/\b(trio[-\w\. ]+) b/i], [u, [p, "MachSpeed"], [f, w]], [/\btu_(1491) b/i], [u, [p, "Rotor"], [f, w]], [/(shield[\w ]+) b/i], [u, [p, "Nvidia"], [f, w]], [/(sprint) (\w+)/i], [p, u, [f, g]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [p, R], [f, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [p, j], [f, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [p, j], [f, g]], [/smart-tv.+(samsung)/i], [p, [f, b]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [p, x], [f, b]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[p, C], [f, b]], [/(apple) ?tv/i], [p, [u, "Apple TV"], [f, b]], [/crkey/i], [[u, "Chromecast"], [p, k], [f, b]], [/droid.+aft(\w)( bui|\))/i], [u, [p, S], [f, b]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [u, [p, D], [f, b]], [/(bravia[\w ]+)( bui|\))/i], [u, [p, N], [f, b]], [/(mitv-\w{5}) bui/i], [u, [p, M], [f, b]], [/Hbbtv.*(technisat) (.*);/i], [p, u, [f, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[p, W], [u, W], [f, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[f, b]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [p, u, [f, m]], [/droid.+; (shield) bui/i], [u, [p, "Nvidia"], [f, m]], [/(playstation [345portablevi]+)/i], [u, [p, N], [f, m]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [p, R], [f, m]], [/((pebble))app/i], [p, u, [f, E]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [u, [p, _], [f, E]], [/droid.+; (glass) \d/i], [u, [p, k], [f, E]], [/droid.+; (wt63?0{2,3})\)/i], [u, [p, j], [f, E]], [/(quest( 2| pro)?)/i], [u, [p, F], [f, E]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [p, [f, P]], [/(aeobc)\b/i], [u, [p, S], [f, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [f, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [f, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[f, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[f, g]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [p, "Generic"]]],
                  engine: [[/windows.+ edge\/([\w\.]+)/i], [v, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [v, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, v], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [v, d]],
                  os: [[/microsoft (windows) (vista|xp)/i], [d, v], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [d, [v, q, z]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[d, "Windows"], [v, q, z]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[v, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, U], [v, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [v, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, v], [/\(bb(10);/i], [v, [d, A]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [v, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [v, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [v, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [v, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [v, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, L], v], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, v], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], v], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, v]]
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
                      V.call(t, u, f.browser),
                      t.major = i(e = t.version) === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a,
                      p && n && n.brave && i(n.brave.isBrave) == o && (t.name = "Brave"),
                      t
                  }
                  ,
                  this.getCPU = function() {
                      var e = {};
                      return e.architecture = a,
                      V.call(e, u, f.cpu),
                      e
                  }
                  ,
                  this.getDevice = function() {
                      var e = {};
                      return e.vendor = a,
                      e.model = a,
                      e.type = a,
                      V.call(e, u, f.device),
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
                      V.call(e, u, f.engine),
                      e
                  }
                  ,
                  this.getOS = function() {
                      var e = {};
                      return e.name = a,
                      e.version = a,
                      V.call(e, u, f.os),
                      p && !e.name && d && "Unknown" != d.platform && (e.name = d.platform.replace(/chrome os/i, L).replace(/macos/i, U)),
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
                      return u = i(e) === h && e.length > 350 ? W(e, 350) : e,
                      this
                  }
                  ,
                  this.setUA(u),
                  this
              };
              K.VERSION = "1.0.35",
              K.BROWSER = B([d, v, "major"]),
              K.CPU = B([y]),
              K.DEVICE = B([u, p, f, m, g, b, w, E, P]),
              K.ENGINE = K.OS = B([d, v]),
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
              Z: () => L,
              M: () => U
          });
          var n, i, s, a, o, c, l, h, u, d, f, p, v, y, m, g, w, b, E, P, S, _, T, A = r(6558), k = r(1437), O = r(4835), C = r(8293), R = r(6388), I = r(6041), x = function(e, t, r, n) {
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
          }, D = function(e, t, r, n, i) {
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
          const j = "already_unlocked"
            , F = "achievement_not_found";
          class L extends R.Z {
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
                  D(this, i, r.project.achievements, "f"),
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
                  D(this, a, [...r.achievements], "f"),
                  D(this, o, [...r.achievementsGroups], "f"),
                  N(this, n, "m", S).call(this),
                  N(this, n, "m", _).call(this),
                  D(this, s, t, "f"),
                  N(this, s, "f").on("setAchievementsList", (e => N(this, n, "m", E).call(this, e.achievements))),
                  N(this, s, "f").on("markAchievementsUnlocked", (e => {
                      e.forEach((e => {
                          const {achievement: t, playerAchievement: r} = N(this, n, "m", b).call(this, e);
                          if (!t)
                              return void A.kg.error(`achievement not found, ID: ${e}`);
                          if (r)
                              return void A.kg.error(`player achievement already unlocked, ID: ${e}, Tag: ${t.tag}`);
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
                          k.p)(U(o)).catch(A.kg.error)]).then(( () => {
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
                  return x(this, void 0, void 0, (function*() {
                      this.gp.loader.inc();
                      try {
                          const [t] = yield Promise.all([this.fetch(), this.gp.loadOverlay(), (0,
                          k.p)(O.Z.app.trophy).catch(A.kg.error)]);
                          this.gp.loader.dec(),
                          t.achievements.length > 0 ? (this._events.emit("open"),
                          yield this.gp.overlay.openAchievements(t, {
                              scrollTo: e
                          }).catch(A.kg.error),
                          this._events.emit("close")) : A.kg.error(new Error("Empty achievements list"))
                      } catch (e) {
                          this.gp.loader.dec(),
                          A.kg.error(e)
                      }
                  }
                  ))
              }
              fetch() {
                  return x(this, void 0, void 0, (function*() {
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
                  return x(this, void 0, void 0, (function*() {
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
                          return r(F);
                      if (null == o ? void 0 : o.unlocked)
                          return r(j);
                      if (N(this, y, "f").has(a.id))
                          return r(j);
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
                          k.p)(U(a)).catch(A.kg.error)]).then(( () => {
                              this.gp.overlay.unlockAchievement(a)
                          }
                          )),
                          t.done({
                              achievement: a,
                              success: !0,
                              error: ""
                          })
                      } catch (n) {
                          "string" == typeof n ? (n === j && N(this, y, "f").add(a.id),
                          A.kg.error(n),
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
                  return x(this, void 0, void 0, (function*() {
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
                      setTimeout(( () => x(this, void 0, void 0, (function*() {
                          const t = N(this, h, "f")[a]
                            , {playerAchievement: c} = N(this, n, "m", b).call(this, a);
                          if (N(this, y, "f").has(o.id))
                              return s(j);
                          if (null == c ? void 0 : c.unlocked)
                              return s(j);
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
                              k.p)(U(a)).catch(A.kg.error)]).then(( () => {
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
                              "string" == typeof t ? (t === j && N(this, y, "f").add(o.id),
                              A.kg.error(t),
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
                      r.ready) : s(F)
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
              t || O.Z.cdn.trophy
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
              D(this, c, [...e], "f"),
              N(this, n, "m", T).call(this)
          }
          ,
          P = function(e) {
              N(this, c, "f").some((t => t.achievementId === e.achievementId)) ? D(this, c, N(this, c, "f").map((t => t.achievementId === e.achievementId ? e : t)), "f") : N(this, c, "f").push(e),
              N(this, n, "m", T).call(this)
          }
          ,
          S = function() {
              D(this, d, {}, "f"),
              D(this, f, {}, "f"),
              N(this, a, "f").forEach((e => {
                  N(this, d, "f")[e.id] = e,
                  N(this, f, "f")[e.tag] = e
              }
              ))
          }
          ,
          _ = function() {
              D(this, v, {}, "f"),
              N(this, o, "f").forEach((e => {
                  N(this, v, "f")[e.id] = e
              }
              ))
          }
          ,
          T = function() {
              D(this, p, {}, "f"),
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
              Z: () => O
          });
          var n, i, s, a, o, c, l, h, u, d, f, p, v, y, m, g, w = r(6558), b = r(8293), E = r(6388), P = r(5942), S = r(6041), _ = function(e, t, r, n) {
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
          }, T = function(e, t, r, n, i) {
              if ("m" === n)
                  throw new TypeError("Private method is not writable");
              if ("a" === n && !i)
                  throw new TypeError("Private accessor was defined without a setter");
              if ("function" == typeof t ? e !== t || !i : !t.has(e))
                  throw new TypeError("Cannot write private member to an object whose class did not declare it");
              return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
              r
          }, A = function(e, t, r, n) {
              if ("a" === r && !n)
                  throw new TypeError("Private accessor was defined without a getter");
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                  throw new TypeError("Cannot read private member from an object whose class did not declare it");
              return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
          };
          const k = "product_not_found";
          class O extends E.Z {
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
                  T(this, a, p.products, "f"),
                  A(this, n, "m", m).call(this),
                  T(this, i, t, "f"),
                  A(this, i, "f").on("setPurchasedList", (e => A(this, n, "m", y).call(this, e.playerPurchases))),
                  A(this, i, "f").on("markPurchasesGiven", (e => {
                      e.forEach((e => {
                          const {product: t} = A(this, n, "m", f).call(this, e);
                          if (!t)
                              return void w.kg.error(`product not found, ID: ${e}`);
                          const r = {
                              productId: t.id,
                              tag: t.tag,
                              payload: {},
                              createdAt: this.gp.serverTime,
                              expiredAt: t.isSubscription ? C(this.gp.serverTime, t.period) : "",
                              gift: !0,
                              subscribed: t.isSubscription
                          };
                          A(this, s, "f").push(r),
                          A(this, n, "m", g).call(this),
                          this._events.emit(t.isSubscription ? "subscribe" : "purchase", {
                              product: t,
                              purchase: r
                          })
                      }
                      ))
                  }
                  )),
                  A(this, i, "f").on("syncPurchases", (e => A(this, n, "m", d).call(this).finally(e))),
                  this.gp.on("change:language", (e => {
                      A(this, a, "f").forEach((t => {
                          t.name = t.names[e] || t.names.en,
                          t.description = t.descriptions[e] || t.descriptions.en
                      }
                      )),
                      A(this, n, "m", m).call(this)
                  }
                  )),
                  this.adapter.mapProducts(this.gp, this.products).then((t => {
                      T(this, a, t, "f"),
                      A(this, a, "f").forEach((t => {
                          t.name = t.names[e.language] || t.names.en,
                          t.description = t.descriptions[e.language] || t.descriptions.en,
                          t.icon = (0,
                          S.Z)(t.icon, 256, 256, !1),
                          t.iconSmall = (0,
                          S.Z)(t.icon, 48, 48, !1)
                      }
                      )),
                      A(this, n, "m", m).call(this)
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
                  return [...A(this, a, "f")]
              }
              get purchases() {
                  return [...A(this, s, "f")]
              }
              fetchProducts() {
                  return _(this, void 0, void 0, (function*() {
                      const e = (0,
                      b._)();
                      this.gp.loader.inc();
                      try {
                          const t = this.purchases
                            , r = yield this.adapter.mapProducts(this.gp, this.products);
                          T(this, a, r, "f"),
                          A(this, n, "m", m).call(this),
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
                  return _(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (A(this, o, "f")[t])
                          throw new Error("payment_in_progress");
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:purchase", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a} = A(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(k);
                      r.ready.finally(( () => {
                          delete A(this, o, "f")[t]
                      }
                      )),
                      A(this, o, "f")[t] = r,
                      this.gp.loader.inc();
                      try {
                          let e, t, o = !0, c = "";
                          if (this.gp.player.isLoggedInByPlatform)
                              this.gp.player.isLoggedInByPlatform && !this.gp.player.credentials && (yield this.gp.player.sync());
                          else if (this.gp.platform.type === P.z.YANDEX) {
                              if (!(yield this.gp.player.login({
                                  withSecretCode: !1
                              })))
                                  return i("user_not_logged_in")
                          } else
                              yield this.gp.player.sync({
                                  silent: !1
                              });
                          try {
                              t = yield this.adapter.purchase(a)
                          } catch (e) {
                              throw e
                          }
                          if (this.adapter.isServerValidation)
                              e = {
                                  productId: a.id,
                                  tag: a.tag,
                                  payload: t,
                                  createdAt: this.gp.serverTime,
                                  expiredAt: "",
                                  gift: !1,
                                  subscribed: !1
                              };
                          else
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
                          A(this, s, "f").push({
                              productId: a.id,
                              tag: a.tag,
                              createdAt: e.createdAt,
                              expiredAt: e.expiredAt,
                              payload: e.payload,
                              gift: e.gift,
                              subscribed: e.subscribed
                          }),
                          A(this, n, "m", g).call(this),
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
                  return _(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      A(this, c, "f")[t] && (yield A(this, c, "f")[t]);
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:consume", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a} = A(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(k);
                      A(this, c, "f")[t] = r,
                      this.gp.loader.inc();
                      const o = a.id;
                      try {
                          const {product: e, purchase: t} = yield this.gp._services.paymentsService.consume({
                              id: o
                          });
                          t.gift || (yield this.adapter.consume(t));
                          const i = A(this, s, "f").findIndex((t => t.productId === e.id));
                          -1 !== i && (A(this, s, "f").splice(i, 1),
                          A(this, n, "m", g).call(this)),
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
                          delete A(this, c, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              subscribe(e) {
                  return _(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (A(this, o, "f")[t])
                          return A(this, o, "f")[t];
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:subscribe", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a, purchase: c} = A(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(k);
                      A(this, o, "f")[t] = r,
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
                                  expiredAt: (null == c ? void 0 : c.expiredAt) || C(this.gp.serverTime, a.period),
                                  gift: !1,
                                  subscribed: !0
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
                          o ? (c && T(this, s, A(this, s, "f").filter((e => e.productId !== c.productId)), "f"),
                          A(this, s, "f").push({
                              tag: a.tag,
                              productId: a.id,
                              createdAt: e.createdAt,
                              expiredAt: e.expiredAt,
                              payload: e.payload,
                              gift: e.gift,
                              subscribed: !0
                          }),
                          A(this, n, "m", g).call(this),
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
                          delete A(this, o, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              unsubscribe(e) {
                  return _(this, void 0, void 0, (function*() {
                      const t = Number(e.id) || e.tag;
                      if (A(this, o, "f")[t])
                          return A(this, o, "f")[t];
                      const r = (0,
                      b._)()
                        , i = t => (r.abort(t),
                      this._events.emit("error:unsubscribe", t, {
                          input: e
                      }),
                      r.ready)
                        , {product: a, purchase: c} = A(this, n, "m", f).call(this, t);
                      if (!a)
                          return i(k);
                      A(this, o, "f")[t] = r,
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
                          T(this, s, A(this, s, "f").map((e => e.productId !== c.productId ? e : Object.assign(Object.assign({}, e), {
                              subscribed: !1
                          }))), "f"),
                          A(this, n, "m", g).call(this),
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
                          delete A(this, o, "f")[t]
                      }
                      )),
                      r.ready
                  }
                  ))
              }
              has(e) {
                  return !!A(this, n, "m", f).call(this, e).purchase
              }
              getProduct(e) {
                  return A(this, n, "m", f).call(this, e).product
              }
              getPurchase(e) {
                  return A(this, n, "m", f).call(this, e).purchase
              }
          }
          function C(e, t) {
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
              return _(this, void 0, void 0, (function*() {
                  const {purchases: e, payload: t} = yield this.adapter.fetchPurchases();
                  if (0 === e.length)
                      return;
                  const {purchases: r} = yield this.gp._services.paymentsService.sync({
                      purchases: e,
                      payload: t
                  });
                  A(this, n, "m", y).call(this, r),
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
                , r = A(this, n, "m", p).call(this, e);
              if (!r)
                  return t;
              t.product = r;
              const i = A(this, n, "m", v).call(this, r.id);
              return i && (t.purchase = i),
              t
          }
          ,
          p = function(e) {
              return A(this, l, "f")[e] || A(this, h, "f")[e]
          }
          ,
          v = function(e) {
              return A(this, u, "f")[e]
          }
          ,
          y = function(e) {
              T(this, s, e.map((e => Object.assign(Object.assign({}, e), {
                  id: e.productId
              }))), "f"),
              A(this, n, "m", g).call(this)
          }
          ,
          m = function() {
              T(this, l, {}, "f"),
              T(this, h, {}, "f"),
              A(this, a, "f").forEach((e => {
                  A(this, l, "f")[e.id] = e,
                  A(this, h, "f")[e.tag] = e
              }
              ))
          }
          ,
          g = function() {
              T(this, s, A(this, s, "f").reduce(( (e, t) => {
                  const r = A(this, n, "m", p).call(this, t.productId);
                  return r && e.push(Object.assign(Object.assign({}, t), {
                      id: r.id,
                      tag: r.tag
                  })),
                  e
              }
              ), []), "f"),
              T(this, u, {}, "f"),
              A(this, s, "f").forEach((e => {
                  A(this, u, "f")[e.productId] = e
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
                  return !this.isPreloaderPlaying && this.adapter.isFullscreenAvailable && (null === (e = this.fullscreenBanner) || void 0 === e ? void 0 : e.enabled) && !this.fullscreenDisplayIntervalId && !this.isBannerLimitReached(s.$.FULLSCREEN)
              }
              get isRewardedAvailable() {
                  var e;
                  return this.adapter.isRewardedAvailable && (null === (e = this.rewardedVideo) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.REWARDED)
              }
              get isPreloaderAvailable() {
                  var e;
                  return this.adapter.isPreloaderAvailable && (null === (e = this.preloaderBanner) || void 0 === e ? void 0 : e.enabled) && !this.isBannerLimitReached(s.$.PRELOADER)
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
                      c.Z)(3e3)),
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
              }
              showRewardedVideo({showRewardedFailedOverlay: e=!1}={}) {
                  return l(this, void 0, void 0, (function*() {
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
              showPreloader() {
                  return l(this, void 0, void 0, (function*() {
                      if (yield this.gp._pointersManager.waitForPointersUp(),
                      !this.isPreloaderAvailable)
                          return this._events.emit("close", !1),
                          this._events.emit("preloader:close", !1),
                          !1;
                      const e = this.gp.fullscreen.isEnabled
                        , t = e && this.adapter.needToLeaveFullscreenBeforeAds;
                      t && (yield this.gp.loadOverlay(),
                      this.gp.fullscreen.close(),
                      yield(0,
                      c.Z)(200)),
                      this.sendShowAdsInfo({
                          type: "PRELOADER",
                          action: "REQUEST"
                      }),
                      this._events.emit("start"),
                      this._events.emit("preloader:start"),
                      this.isPreloaderPlaying = !0;
                      const r = !!(yield this.adapter.showPreloader(this.preloaderBanner).catch(( () => !1)));
                      return t && (this.gp.overlay.closePreAdCountdownOverlay(),
                      yield this.gp.overlay.showPreAdCountdownOverlayFinish(e)),
                      this.sendShowAdsInfo({
                          type: "PRELOADER",
                          action: r ? "DISPLAY" : "ERROR"
                      }),
                      this.isPreloaderPlaying = !1,
                      this._events.emit("close", r),
                      this._events.emit("preloader:close", r),
                      r && this._trackBannerDisplay(s.$.PRELOADER),
                      r
                  }
                  ))
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
              Do: () => ge,
              N0: () => be,
              CP: () => Ee,
              LH: () => Ne,
              W2: () => We,
              x1: () => Ve,
              OB: () => it,
              U7: () => ht,
              zn: () => dt
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
                      var T = o.extensions;
                      "object" == i(S = T) && null !== S && (_ = T)
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
          var T = function() {
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
          _(T);
          var A = function() {
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
          _(A);
          var k = Object.freeze({
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
          function O(e) {
              return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
              switch (O(e)) {
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
          function x(e, t) {
              for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
              }
          }
          var D = function() {
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
              }]) && x(t.prototype, r),
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
              for (var i = 0; i < t.length && j(t[i]); )
                  ++i;
              for (var s = t.length; s > i && j(t[s - 1]); )
                  --s;
              return t.slice(i, s).join("\n")
          }
          function j(e) {
              for (var t = 0; t < e.length; ++t)
                  if (" " !== e[t] && "\t" !== e[t])
                      return !1;
              return !0
          }
          var F = function() {
              function e(e) {
                  var t = new A(k.SOF,0,0,0,0,null);
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
                  if (e.kind !== k.EOF)
                      do {
                          var t;
                          e = null !== (t = e.next) && void 0 !== t ? t : e.next = U(this, e)
                      } while (e.kind === k.COMMENT);
                  return e
              }
              ,
              e
          }();
          function L(e) {
              return isNaN(e) ? k.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
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
                      return new A(k.BANG,s,s + 1,o,c,t);
                  case 35:
                      return G(r, s, o, c, t);
                  case 36:
                      return new A(k.DOLLAR,s,s + 1,o,c,t);
                  case 38:
                      return new A(k.AMP,s,s + 1,o,c,t);
                  case 40:
                      return new A(k.PAREN_L,s,s + 1,o,c,t);
                  case 41:
                      return new A(k.PAREN_R,s,s + 1,o,c,t);
                  case 46:
                      if (46 === n.charCodeAt(s + 1) && 46 === n.charCodeAt(s + 2))
                          return new A(k.SPREAD,s,s + 3,o,c,t);
                      break;
                  case 58:
                      return new A(k.COLON,s,s + 1,o,c,t);
                  case 61:
                      return new A(k.EQUALS,s,s + 1,o,c,t);
                  case 64:
                      return new A(k.AT,s,s + 1,o,c,t);
                  case 91:
                      return new A(k.BRACKET_L,s,s + 1,o,c,t);
                  case 93:
                      return new A(k.BRACKET_R,s,s + 1,o,c,t);
                  case 123:
                      return new A(k.BRACE_L,s,s + 1,o,c,t);
                  case 124:
                      return new A(k.PIPE,s,s + 1,o,c,t);
                  case 125:
                      return new A(k.BRACE_R,s,s + 1,o,c,t);
                  case 34:
                      return 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) ? q(r, s, o, c, t, e) : V(r, s, o, c, t);
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
                      return $(r, s, a, o, c, t);
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
                  throw E(r, s, B(a))
              }
              var l = e.line
                , h = 1 + s - e.lineStart;
              return new A(k.EOF,i,i,l,h,t)
          }
          function B(e) {
              return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(L(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(L(e), ".")
          }
          function G(e, t, r, n, i) {
              var s, a = e.body, o = t;
              do {
                  s = a.charCodeAt(++o)
              } while (!isNaN(s) && (s > 31 || 9 === s));
              return new A(k.COMMENT,t,o,r,n,i,a.slice(t + 1, o))
          }
          function $(e, t, r, n, i, s) {
              var a = e.body
                , o = r
                , c = t
                , l = !1;
              if (45 === o && (o = a.charCodeAt(++c)),
              48 === o) {
                  if ((o = a.charCodeAt(++c)) >= 48 && o <= 57)
                      throw E(e, c, "Invalid number, unexpected digit after 0: ".concat(L(o), "."))
              } else
                  c = W(e, c, o),
                  o = a.charCodeAt(c);
              if (46 === o && (l = !0,
              o = a.charCodeAt(++c),
              c = W(e, c, o),
              o = a.charCodeAt(c)),
              69 !== o && 101 !== o || (l = !0,
              43 !== (o = a.charCodeAt(++c)) && 45 !== o || (o = a.charCodeAt(++c)),
              c = W(e, c, o),
              o = a.charCodeAt(c)),
              46 === o || function(e) {
                  return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
              }(o))
                  throw E(e, c, "Invalid number, expected digit but got: ".concat(L(o), "."));
              return new A(l ? k.FLOAT : k.INT,t,c,n,i,s,a.slice(t, c))
          }
          function W(e, t, r) {
              var n = e.body
                , i = t
                , s = r;
              if (s >= 48 && s <= 57) {
                  do {
                      s = n.charCodeAt(++i)
                  } while (s >= 48 && s <= 57);
                  return i
              }
              throw E(e, i, "Invalid number, expected digit but got: ".concat(L(s), "."))
          }
          function V(e, t, r, n, i) {
              for (var s, a, o, c, l = e.body, h = t + 1, u = h, d = 0, f = ""; h < l.length && !isNaN(d = l.charCodeAt(h)) && 10 !== d && 13 !== d; ) {
                  if (34 === d)
                      return f += l.slice(u, h),
                      new A(k.STRING,t,h + 1,r,n,i,f);
                  if (d < 32 && 9 !== d)
                      throw E(e, h, "Invalid character within String: ".concat(L(d), "."));
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
          function q(e, t, r, n, i, s) {
              for (var a = e.body, o = t + 3, c = o, l = 0, h = ""; o < a.length && !isNaN(l = a.charCodeAt(o)); ) {
                  if (34 === l && 34 === a.charCodeAt(o + 1) && 34 === a.charCodeAt(o + 2))
                      return h += a.slice(c, o),
                      new A(k.BLOCK_STRING,t,o + 3,r,n,i,M(h));
                  if (l < 32 && 9 !== l && 10 !== l && 13 !== l)
                      throw E(e, o, "Invalid character within String: ".concat(L(l), "."));
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
              return new A(k.NAME,t,o,r,n,i,s.slice(t, o))
          }
          var K = function() {
              function e(e, t) {
                  var r = function(e) {
                      return e instanceof D
                  }(e) ? e : new D(e);
                  this._lexer = new F(r),
                  this._options = t
              }
              var t = e.prototype;
              return t.parseName = function() {
                  var e = this.expectToken(k.NAME);
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
                      definitions: this.many(k.SOF, this.parseDefinition, k.EOF),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseDefinition = function() {
                  if (this.peek(k.NAME))
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
                      if (this.peek(k.BRACE_L))
                          return this.parseOperationDefinition();
                      if (this.peekDescription())
                          return this.parseTypeSystemDefinition()
                  }
                  throw this.unexpected()
              }
              ,
              t.parseOperationDefinition = function() {
                  var e = this._lexer.token;
                  if (this.peek(k.BRACE_L))
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
                  return this.peek(k.NAME) && (t = this.parseName()),
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
                  var e = this.expectToken(k.NAME);
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
                  return this.optionalMany(k.PAREN_L, this.parseVariableDefinition, k.PAREN_R)
              }
              ,
              t.parseVariableDefinition = function() {
                  var e = this._lexer.token;
                  return {
                      kind: P.VARIABLE_DEFINITION,
                      variable: this.parseVariable(),
                      type: (this.expectToken(k.COLON),
                      this.parseTypeReference()),
                      defaultValue: this.expectOptionalToken(k.EQUALS) ? this.parseValueLiteral(!0) : void 0,
                      directives: this.parseDirectives(!0),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseVariable = function() {
                  var e = this._lexer.token;
                  return this.expectToken(k.DOLLAR),
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
                      selections: this.many(k.BRACE_L, this.parseSelection, k.BRACE_R),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseSelection = function() {
                  return this.peek(k.SPREAD) ? this.parseFragment() : this.parseField()
              }
              ,
              t.parseField = function() {
                  var e, t, r = this._lexer.token, n = this.parseName();
                  return this.expectOptionalToken(k.COLON) ? (e = n,
                  t = this.parseName()) : t = n,
                  {
                      kind: P.FIELD,
                      alias: e,
                      name: t,
                      arguments: this.parseArguments(!1),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.peek(k.BRACE_L) ? this.parseSelectionSet() : void 0,
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseArguments = function(e) {
                  var t = e ? this.parseConstArgument : this.parseArgument;
                  return this.optionalMany(k.PAREN_L, t, k.PAREN_R)
              }
              ,
              t.parseArgument = function() {
                  var e = this._lexer.token
                    , t = this.parseName();
                  return this.expectToken(k.COLON),
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
                      value: (this.expectToken(k.COLON),
                      this.parseValueLiteral(!0)),
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseFragment = function() {
                  var e = this._lexer.token;
                  this.expectToken(k.SPREAD);
                  var t = this.expectOptionalKeyword("on");
                  return !t && this.peek(k.NAME) ? {
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
                  case k.BRACKET_L:
                      return this.parseList(e);
                  case k.BRACE_L:
                      return this.parseObject(e);
                  case k.INT:
                      return this._lexer.advance(),
                      {
                          kind: P.INT,
                          value: t.value,
                          loc: this.loc(t)
                      };
                  case k.FLOAT:
                      return this._lexer.advance(),
                      {
                          kind: P.FLOAT,
                          value: t.value,
                          loc: this.loc(t)
                      };
                  case k.STRING:
                  case k.BLOCK_STRING:
                      return this.parseStringLiteral();
                  case k.NAME:
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
                  case k.DOLLAR:
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
                      block: e.kind === k.BLOCK_STRING,
                      loc: this.loc(e)
                  }
              }
              ,
              t.parseList = function(e) {
                  var t = this
                    , r = this._lexer.token;
                  return {
                      kind: P.LIST,
                      values: this.any(k.BRACKET_L, (function() {
                          return t.parseValueLiteral(e)
                      }
                      ), k.BRACKET_R),
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseObject = function(e) {
                  var t = this
                    , r = this._lexer.token;
                  return {
                      kind: P.OBJECT,
                      fields: this.any(k.BRACE_L, (function() {
                          return t.parseObjectField(e)
                      }
                      ), k.BRACE_R),
                      loc: this.loc(r)
                  }
              }
              ,
              t.parseObjectField = function(e) {
                  var t = this._lexer.token
                    , r = this.parseName();
                  return this.expectToken(k.COLON),
                  {
                      kind: P.OBJECT_FIELD,
                      name: r,
                      value: this.parseValueLiteral(e),
                      loc: this.loc(t)
                  }
              }
              ,
              t.parseDirectives = function(e) {
                  for (var t = []; this.peek(k.AT); )
                      t.push(this.parseDirective(e));
                  return t
              }
              ,
              t.parseDirective = function(e) {
                  var t = this._lexer.token;
                  return this.expectToken(k.AT),
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
                  return this.expectOptionalToken(k.BRACKET_L) ? (e = this.parseTypeReference(),
                  this.expectToken(k.BRACKET_R),
                  e = {
                      kind: P.LIST_TYPE,
                      type: e,
                      loc: this.loc(t)
                  }) : e = this.parseNamedType(),
                  this.expectOptionalToken(k.BANG) ? {
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
                  if (e.kind === k.NAME)
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
                  return this.peek(k.STRING) || this.peek(k.BLOCK_STRING)
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
                    , n = this.many(k.BRACE_L, this.parseOperationTypeDefinition, k.BRACE_R);
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
                  this.expectToken(k.COLON);
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
                      this.expectOptionalToken(k.AMP);
                      do {
                          t.push(this.parseNamedType())
                      } while (this.expectOptionalToken(k.AMP) || this.peek(k.NAME));
                      return t
                  }
                  return this.delimitedMany(k.AMP, this.parseNamedType)
              }
              ,
              t.parseFieldsDefinition = function() {
                  var e;
                  return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(k.BRACE_L) && this._lexer.lookahead().kind === k.BRACE_R ? (this._lexer.advance(),
                  this._lexer.advance(),
                  []) : this.optionalMany(k.BRACE_L, this.parseFieldDefinition, k.BRACE_R)
              }
              ,
              t.parseFieldDefinition = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription()
                    , r = this.parseName()
                    , n = this.parseArgumentDefs();
                  this.expectToken(k.COLON);
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
                  return this.optionalMany(k.PAREN_L, this.parseInputValueDef, k.PAREN_R)
              }
              ,
              t.parseInputValueDef = function() {
                  var e = this._lexer.token
                    , t = this.parseDescription()
                    , r = this.parseName();
                  this.expectToken(k.COLON);
                  var n, i = this.parseTypeReference();
                  this.expectOptionalToken(k.EQUALS) && (n = this.parseValueLiteral(!0));
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
                  return this.expectOptionalToken(k.EQUALS) ? this.delimitedMany(k.PIPE, this.parseNamedType) : []
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
                  return this.optionalMany(k.BRACE_L, this.parseEnumValueDefinition, k.BRACE_R)
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
                  return this.optionalMany(k.BRACE_L, this.parseInputValueDef, k.BRACE_R)
              }
              ,
              t.parseTypeSystemExtension = function() {
                  var e = this._lexer.lookahead();
                  if (e.kind === k.NAME)
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
                    , r = this.optionalMany(k.BRACE_L, this.parseOperationTypeDefinition, k.BRACE_R);
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
                  this.expectToken(k.AT);
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
                  return this.delimitedMany(k.PIPE, this.parseDirectiveLocation)
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
                      return new T(e,this._lexer.lastToken,this._lexer.source)
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
                  if (t.kind !== k.NAME || t.value !== e)
                      throw E(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(J(t), "."));
                  this._lexer.advance()
              }
              ,
              t.expectOptionalKeyword = function(e) {
                  var t = this._lexer.token;
                  return t.kind === k.NAME && t.value === e && (this._lexer.advance(),
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
                  return e === k.BANG || e === k.DOLLAR || e === k.AMP || e === k.PAREN_L || e === k.PAREN_R || e === k.SPREAD || e === k.COLON || e === k.EQUALS || e === k.AT || e === k.BRACKET_L || e === k.BRACKET_R || e === k.BRACE_L || e === k.PIPE || e === k.BRACE_R
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
          var ce, le, he, ue, de, fe, pe, ve, ye, me, ge, we, be, Ee, Pe, Se, _e, Te, Ae, ke, Oe, Ce, Re, Ie, xe, De, Ne, Me, je, Fe, Le, Ue, Be, Ge, $e, We, Ve, qe, ze, Ye, Ke, Je, Ze, He, Xe, Qe, et, tt, rt, nt, it, st, at, ot, ct, lt, ht, ut, dt, ft, pt, vt, yt, mt;
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
              e.FetchSessionsStats = "FetchSessionsStats"
          }(ce || (ce = {})),
          function(e) {
              e.Skip = "SKIP",
              e.Analytics = "ANALYTICS",
              e.Ai = "AI"
          }(le || (le = {})),
          function(e) {
              e.Any = "ANY",
              e.Admin = "ADMIN",
              e.Player = "PLAYER",
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
              e.Gpt = "GPT"
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
              e.Preloader = "PRELOADER",
              e.Fullscreen = "FULLSCREEN",
              e.Rewarded = "REWARDED",
              e.Sticky = "STICKY"
          }(me || (me = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Achievement = "ACHIEVEMENT",
              e.Product = "PRODUCT"
          }(ge || (ge = {})),
          function(e) {
              e.Awaits = "AWAITS",
              e.Running = "RUNNING",
              e.Succeed = "SUCCEED",
              e.Failed = "FAILED"
          }(we || (we = {})),
          function(e) {
              e.Eq = "EQ",
              e.Ne = "NE",
              e.Lt = "LT",
              e.Gt = "GT",
              e.Lte = "LTE",
              e.Gte = "GTE"
          }(be || (be = {})),
          function(e) {
              e.PlayerStat = "PLAYER_STAT",
              e.EntityStat = "ENTITY_STAT",
              e.PlayerField = "PLAYER_FIELD"
          }(Ee || (Ee = {})),
          function(e) {
              e.Rub = "RUB",
              e.Usd = "USD",
              e.Eur = "EUR"
          }(Pe || (Pe = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(Se || (Se = {})),
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
          }(_e || (_e = {})),
          function(e) {
              e.Purchases = "Purchases",
              e.Ads = "Ads"
          }(Te || (Te = {})),
          function(e) {
              e.Raw = "RAW",
              e.Txt = "TXT",
              e.Html = "HTML"
          }(Ae || (Ae = {})),
          function(e) {
              e.PlayerPrivacyPolicy = "PLAYER_PRIVACY_POLICY"
          }(ke || (ke = {})),
          function(e) {
              e.Name = "NAME",
              e.Description = "DESCRIPTION",
              e.Review = "REVIEW",
              e.FullDescription = "FULL_DESCRIPTION",
              e.HowToPlay = "HOW_TO_PLAY",
              e.ShareText = "SHARE_TEXT",
              e.DocumentContent = "DOCUMENT_CONTENT"
          }(Oe || (Oe = {})),
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
          }(Ce || (Ce = {})),
          function(e) {
              e.Event = "EVENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(Re || (Re = {})),
          function(e) {
              e.Event = "EVENT",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Count = "COUNT"
          }(Ie || (Ie = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }(xe || (xe = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Count = "COUNT",
              e.Size = "SIZE"
          }(De || (De = {})),
          function(e) {
              e.Any = "ANY",
              e.Portrait = "PORTRAIT",
              e.Landscape = "LANDSCAPE"
          }(Ne || (Ne = {})),
          function(e) {
              e.Day = "DAY",
              e.Month = "MONTH",
              e.Year = "YEAR"
          }(Me || (Me = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }(je || (je = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Count = "COUNT"
          }(Fe || (Fe = {})),
          function(e) {
              e.GameIcon = "GAME_ICON",
              e.GameIcon4X3 = "GAME_ICON4X3",
              e.GameIcon3X4 = "GAME_ICON3X4",
              e.GameCover = "GAME_COVER",
              e.GameCoverPortrait = "GAME_COVER_PORTRAIT",
              e.GameBackground = "GAME_BACKGROUND",
              e.GameScreenshotAlbum = "GAME_SCREENSHOT_ALBUM",
              e.GameScreenshotPortrait = "GAME_SCREENSHOT_PORTRAIT"
          }(Le || (Le = {})),
          function(e) {
              e.Date = "DATE",
              e.Plan = "PLAN",
              e.Project = "PROJECT"
          }(Ue || (Ue = {})),
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
          }(Ge || (Ge = {})),
          function(e) {
              e.Android = "ANDROID"
          }($e || ($e = {})),
          function(e) {
              e.Add = "ADD",
              e.Remove = "REMOVE",
              e.Set = "SET"
          }(We || (We = {})),
          function(e) {
              e.PlayerField = "PLAYER_FIELD"
          }(Ve || (Ve = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(qe || (qe = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Avg = "AVG",
              e.Peak = "PEAK"
          }(ze || (ze = {})),
          function(e) {
              e.New = "NEW",
              e.Paid = "PAID"
          }(Ye || (Ye = {})),
          function(e) {
              e.Company = "COMPANY",
              e.Individual = "INDIVIDUAL",
              e.SoleProprietor = "SOLE_PROPRIETOR"
          }(Ke || (Ke = {})),
          function(e) {
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
              e.Custom = "CUSTOM",
              e.None = "NONE"
          }(Je || (Je = {})),
          function(e) {
              e.Player = "PLAYER",
              e.Product = "PRODUCT",
              e.Platform = "PLATFORM",
              e.Consumed = "CONSUMED",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(Ze || (Ze = {})),
          function(e) {
              e.Player = "PLAYER",
              e.Product = "PRODUCT",
              e.Platform = "PLATFORM",
              e.Consumed = "CONSUMED",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Total = "TOTAL",
              e.Price = "PRICE"
          }(He || (He = {})),
          function(e) {
              e.Common = "COMMON",
              e.Uncommon = "UNCOMMON",
              e.Rare = "RARE",
              e.Epic = "EPIC",
              e.Legendary = "LEGENDARY",
              e.Mythic = "MYTHIC"
          }(Xe || (Xe = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(Qe || (Qe = {})),
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
          }(et || (et = {})),
          function(e) {
              e.Common = "COMMON"
          }(tt || (tt = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(rt || (rt = {})),
          function(e) {
              e.Reward = "REWARD",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.GivenCount = "GIVEN_COUNT",
              e.AcceptedCount = "ACCEPTED_COUNT"
          }(nt || (nt = {})),
          function(e) {
              e.ActiveDays = "ACTIVE_DAYS",
              e.ActiveDaysConsecutive = "ACTIVE_DAYS_CONSECUTIVE"
          }(it || (it = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Project = "PROJECT"
          }(st || (st = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.SessionTime = "SESSION_TIME",
              e.SessionsCount = "SESSIONS_COUNT",
              e.InGameTime = "IN_GAME_TIME"
          }(at || (at = {})),
          function(e) {
              e.Px = "PX",
              e.Percent = "PERCENT"
          }(ot || (ot = {})),
          function(e) {
              e.Asc = "ASC",
              e.Desc = "DESC"
          }(ct || (ct = {})),
          function(e) {
              e.Account = "Account",
              e.Project = "Project",
              e.Platform = "Platform"
          }(lt || (lt = {})),
          function(e) {
              e.Desktop = "Desktop",
              e.Ios = "IOS",
              e.Android = "Android",
              e.Tv = "TV"
          }(ht || (ht = {})),
          function(e) {
              e.Honorary = "HONORARY",
              e.Release = "RELEASE",
              e.Absolute = "ABSOLUTE",
              e.Start = "START",
              e.Advanced = "ADVANCED",
              e.Pro = "PRO",
              e.Enterprise = "ENTERPRISE"
          }(ut || (ut = {})),
          function(e) {
              e.Common = "COMMON",
              e.Scheduler = "SCHEDULER",
              e.Event = "EVENT"
          }(dt || (dt = {})),
          function(e) {
              e.Trigger = "TRIGGER",
              e.Type = "TYPE",
              e.Entity = "ENTITY",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Project = "PROJECT"
          }(ft || (ft = {})),
          function(e) {
              e.Trigger = "TRIGGER",
              e.Type = "TYPE",
              e.Entity = "ENTITY",
              e.Platform = "PLATFORM",
              e.Dev = "DEV",
              e.Date = "DATE",
              e.Count = "COUNT"
          }(pt || (pt = {})),
          function(e) {
              e.Date = "DATE",
              e.Platform = "PLATFORM",
              e.Plan = "PLAN",
              e.Action = "ACTION",
              e.Project = "PROJECT"
          }(vt || (vt = {})),
          function(e) {
              e.Date = "DATE",
              e.Action = "ACTION",
              e.Requests = "REQUESTS",
              e.Plan = "PLAN",
              e.Platform = "PLATFORM"
          }(yt || (yt = {})),
          function(e) {
              e.PurchasePlayerPurchase = "PurchasePlayerPurchase",
              e.ConsumePlayerPurchase = "ConsumePlayerPurchase",
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
              e.GivePlayerReward = "GivePlayerReward"
          }(mt || (mt = {})),
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
              e.GOOGLE_PLAY = "GOOGLE_PLAY",
              e.PLAYDECK = "PLAYDECK",
              e.NONE = "NONE",
              e.CUSTOM = "CUSTOM"
          }(n || (n = {}))
      }
      ,
      180: (e, t, r) => {
          "use strict";
          r.d(t, {
              $: () => n,
              iA: () => c
          });
          var n, i, s, a = r(5942);
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
              e.Rtb = "RTB"
          }(i || (i = {})),
          function(e) {
              e.top = "TOP",
              e.bottom = "BOTTOM"
          }(s || (s = {}));
          const o = () => ({
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
            , c = {
              appId: "",
              communityLinks: {
                  en: ""
              },
              gameLink: "",
              tag: "",
              cloudSavesEnabled: !1,
              customAdsConfigId: "",
              customAdsConfig: {
                  id: "",
                  name: "",
                  adFoxOwnerId: "",
                  description: "",
                  configs: {
                      web: {
                          banners: [Object.assign(Object.assign({}, o()), {
                              type: n.FULLSCREEN
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.PRELOADER
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.REWARDED
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.STICKY
                          })]
                      },
                      android: {
                          banners: [Object.assign(Object.assign({}, o()), {
                              type: n.FULLSCREEN
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.PRELOADER
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.REWARDED
                          }), Object.assign(Object.assign({}, o()), {
                              type: n.STICKY
                          })]
                      }
                  }
              },
              type: a.z.NONE,
              payload: null,
              banners: [Object.assign(Object.assign({}, o()), {
                  type: n.FULLSCREEN,
                  enabled: !0,
                  frequency: 60
              }), Object.assign(Object.assign({}, o()), {
                  type: n.PRELOADER,
                  enabled: !1
              }), Object.assign(Object.assign({}, o()), {
                  type: n.REWARDED,
                  enabled: !0
              }), Object.assign(Object.assign({}, o()), {
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
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                      var r = []
                        , n = !0
                        , i = !1
                        , s = void 0;
                      try {
                          for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (r.push(a.value),
                          !t || r.length !== t); n = !0)
                              ;
                      } catch (e) {
                          i = !0,
                          s = e
                      } finally {
                          try {
                              n || null == o.return || o.return()
                          } finally {
                              if (i)
                                  throw s
                          }
                      }
                      return r
                  }
              }(e, t) || o(e, t) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function i(e, t) {
              var r;
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                  if (Array.isArray(e) || (r = o(e)) || t && e && "number" == typeof e.length) {
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
              var s, a = !0, c = !1;
              return {
                  s: function() {
                      r = e[Symbol.iterator]()
                  },
                  n: function() {
                      var e = r.next();
                      return a = e.done,
                      e
                  },
                  e: function(e) {
                      c = !0,
                      s = e
                  },
                  f: function() {
                      try {
                          a || null == r.return || r.return()
                      } finally {
                          if (c)
                              throw s
                      }
                  }
              }
          }
          function s(e, t, r) {
              return t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = r,
              e
          }
          function a(e) {
              return function(e) {
                  if (Array.isArray(e))
                      return c(e)
              }(e) || function(e) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                      return Array.from(e)
              }(e) || o(e) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function o(e, t) {
              if (e) {
                  if ("string" == typeof e)
                      return c(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
              }
          }
          function c(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var r = 0, n = new Array(t); r < t; r++)
                  n[r] = e[r];
              return n
          }
          function l(e) {
              return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              )(e)
          }
          function h(e) {
              return "string" == typeof e
          }
          function u(e) {
              return "number" == typeof e && Number.isFinite(e)
          }
          function d(e) {
              return "boolean" == typeof e
          }
          function f(e) {
              return void 0 === e
          }
          function p(e) {
              return null === e
          }
          function v(e) {
              return p(e) || f(e)
          }
          r.d(t, {
              Uo: () => R,
              GH: () => L,
              Ff: () => M,
              h$: () => j,
              lR: () => F
          });
          var y = [h, u, d, p, f, function(e) {
              return "bigint" == typeof e
          }
          , function(e) {
              return "symbol" == l(e)
          }
          ];
          function m(e) {
              return Array.isArray(e)
          }
          function g(e) {
              if (function(e) {
                  return y.some((function(t) {
                      return t(e)
                  }
                  ))
              }(e))
                  return !1;
              var t = Object.getPrototypeOf(e);
              return null === t || t === Object.prototype
          }
          function w(e) {
              return !v(e)
          }
          function b(e) {
              throw h(e) ? new Error(e) : e
          }
          function E(e) {
              return {
                  and: function() {
                      return E(e)
                  },
                  andThen: function() {
                      return E(e)
                  },
                  err: function() {
                      return _(e)
                  },
                  expect: function(e) {
                      return b(e)
                  },
                  expectErr: function() {
                      return e
                  },
                  inspect: function() {
                      return E(e)
                  },
                  inspectErr: function(t) {
                      return t(e),
                      E(e)
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
                      return E(e)
                  },
                  mapErr: function(t) {
                      return E(t(e))
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
                      return S
                  },
                  or: function(e) {
                      return e
                  },
                  orElse: function(t) {
                      return t(e)
                  },
                  unwrap: function() {
                      return b("called Result.unwrap on an `Err` value")
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
          function P(e) {
              return {
                  and: function(e) {
                      return e
                  },
                  andThen: function(t) {
                      return t(e)
                  },
                  err: function() {
                      return S
                  },
                  expect: function() {
                      return e
                  },
                  expectErr: function(e) {
                      return b(e)
                  },
                  inspect: function(t) {
                      return t(e),
                      P(e)
                  },
                  inspectErr: function() {
                      return P(e)
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
                      return P(t(e))
                  },
                  mapErr: function() {
                      return P(e)
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
                      return _(e)
                  },
                  or: function() {
                      return P(e)
                  },
                  orElse: function() {
                      return P(e)
                  },
                  unwrap: function() {
                      return e
                  },
                  unwrapErr: function() {
                      return b("called Result.unwrapErr on an `Ok` value")
                  },
                  unwrapOr: function() {
                      return e
                  },
                  unwrapOrElse: function() {
                      return e
                  }
              }
          }
          var S = {
              and: function() {
                  return S
              },
              andThen: function() {
                  return S
              },
              expect: function(e) {
                  return b(e)
              },
              filter: function() {
                  return S
              },
              inspect: function() {
                  return S
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
                  return S
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
                  return b("called Option.unwrap on a `None` value")
              },
              unwrapOr: function(e) {
                  return e
              },
              unwrapOrElse: function(e) {
                  return e()
              },
              okOr: function(e) {
                  return E(e)
              },
              okOrElse: function(e) {
                  return E(e())
              }
          };
          function _(e) {
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
                      return t(e) ? _(e) : S
                  },
                  inspect: function(t) {
                      return t(e),
                      _(e)
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
                      return _(t(e))
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
                      return _(e)
                  },
                  orElse: function() {
                      return _(e)
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
                      return P(e)
                  },
                  okOrElse: function() {
                      return P(e)
                  }
              }
          }
          function T(e) {
              return w(e) ? _(e) : S
          }
          function A(e, t) {
              return t < 0 ? e.length + t : t
          }
          function k(e, t) {
              return T(e[A(e, t)])
          }
          function O(e, t) {
              for (var r = Object.create(null), n = 0; n < e.length; n++) {
                  var i = e[n]
                    , s = t(i, n);
                  s in r || (r[s] = []),
                  r[s].push(i)
              }
              return r
          }
          function C(e) {
              var t, r = f(e) ? [] : Array.isArray(e) ? e : Array.from(e);
              return s(t = {}, Symbol.iterator, regeneratorRuntime.mark((function e() {
                  return regeneratorRuntime.wrap((function(e) {
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
              ))),
              s(t, "append", (function() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                  return C([].concat(a(r), t))
              }
              )),
              s(t, "at", (function(e) {
                  return k(r, e)
              }
              )),
              s(t, "concat", (function(e) {
                  return C([].concat(a(r), a(e)))
              }
              )),
              s(t, "compact", (function() {
                  return C(r.filter(w))
              }
              )),
              s(t, "drop", (function(e) {
                  return C(r.slice(e))
              }
              )),
              s(t, "each", (function(e) {
                  return r.forEach(e),
                  C(r)
              }
              )),
              s(t, "every", (function(e) {
                  return r.every(e)
              }
              )),
              s(t, "filter", (function(e) {
                  return C(r.filter(e))
              }
              )),
              s(t, "find", (function(e) {
                  return T(r.find(e))
              }
              )),
              s(t, "first", (function() {
                  return k(r, 0)
              }
              )),
              s(t, "group", (function(e) {
                  return O(r, e)
              }
              )),
              s(t, "groupBy", (function(e) {
                  return function(e, t) {
                      return O(e, (function(e) {
                          return e[t]
                      }
                      ))
                  }(r, e)
              }
              )),
              s(t, "includes", (function(e) {
                  return r.includes(e)
              }
              )),
              s(t, "insert", (function(e, t) {
                  return C(function(e, t, r) {
                      r = A(e, r);
                      var n = a(e);
                      return n.splice(r, 0, t),
                      n
                  }(r, e, t))
              }
              )),
              s(t, "isEmpty", (function() {
                  return 0 === r.length
              }
              )),
              s(t, "last", (function() {
                  return k(r, -1)
              }
              )),
              s(t, "len", (function() {
                  return r.length
              }
              )),
              s(t, "map", (function(e) {
                  return C(r.map(e))
              }
              )),
              s(t, "move", (function(e, t) {
                  return C(function(e, t, r) {
                      t = A(e, t),
                      r = A(e, r);
                      var n = a(e)
                        , i = n.splice(t, 1)[0];
                      return n.splice(r, 0, i),
                      n
                  }(r, e, t))
              }
              )),
              s(t, "prepend", (function() {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                  return C([].concat(t, a(r)))
              }
              )),
              s(t, "reduce", (function(e, t) {
                  return r.reduce(t, e)
              }
              )),
              s(t, "remove", (function(e) {
                  return C(function(e, t) {
                      t = A(e, t);
                      var r = a(e);
                      return r.splice(t, 1),
                      r
                  }(r, e))
              }
              )),
              s(t, "reverse", (function() {
                  return C(a(r).reverse())
              }
              )),
              s(t, "shuffle", (function() {
                  return C(function(e) {
                      for (var t = a(e), r = t.length - 1; r > 0; r--) {
                          var n = Math.floor(Math.random() * (r + 1))
                            , i = t[r];
                          t[r] = t[n],
                          t[n] = i
                      }
                      return t
                  }(r))
              }
              )),
              s(t, "some", (function(e) {
                  return r.some(e)
              }
              )),
              s(t, "sort", (function(e) {
                  return C(a(r).sort(e))
              }
              )),
              s(t, "swap", (function(e, t) {
                  return C(function(e, t, r) {
                      t = A(e, t),
                      r = A(e, r);
                      var n = a(e)
                        , i = n[t];
                      return n[t] = n[r],
                      n[r] = i,
                      n
                  }(r, e, t))
              }
              )),
              s(t, "take", (function(e) {
                  return C(r.slice(0, e))
              }
              )),
              s(t, "toArray", (function() {
                  return a(r)
              }
              )),
              s(t, "toJSON", (function() {
                  return a(r)
              }
              )),
              t
          }
          var R, I = function(e) {
              return function(t) {
                  if (!m(t))
                      return E({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      });
                  for (var r = new Array(t.length), n = 0; n < t.length; n++) {
                      var i = e(t[n]);
                      if (i.isErr())
                          return E(i.unwrapErr());
                      r.push(i.unwrap())
                  }
                  return P(r)
              }
          }, x = Object.freeze(Object.defineProperty({
              __proto__: null,
              array: I,
              boolean: function(e) {
                  return function(t) {
                      if (null != e && e.coerce)
                          if (h(t))
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
                      return d(t) ? P(t) : E({
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
                          return P(r.reduce((function(e, t) {
                              return t(e)
                          }
                          ), e))
                      }
                      ))
                  }
              },
              date: function(e) {
                  return function(t) {
                      return null != e && e.coerce && (u(t) || h(t)) && (t = new Date(t)),
                      function(e) {
                          return function(e, t) {
                              return t instanceof e
                          }(Date, e) && u(e.getTime())
                      }(t) ? P(t) : E({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              defaulted: function(e, t) {
                  return function(r) {
                      return v(r) ? P(t) : e(r)
                  }
              },
              enums: function(e) {
                  var t = Object.values(e);
                  return function(e) {
                      return t.includes(e) ? P(e) : E({
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
                                  return E(a.unwrapErr());
                              Object.assign(n, a.unwrap())
                          }
                      } catch (e) {
                          s.e(e)
                      } finally {
                          s.f()
                      }
                      return P(n)
                  }
              },
              list: function(e) {
                  var t = I(e);
                  return function(e) {
                      return t(e).andThen((function(e) {
                          return P(C(e))
                      }
                      ))
                  }
              },
              literal: function(e) {
                  return function(t) {
                      return t === e ? P(t) : E({
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
                      u(t) ? P(t) : E({
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
                      if (!g(e))
                          return E({
                              path: [],
                              message: "",
                              actual: "",
                              expected: ""
                          });
                      var r, s = Object.create(null), a = i(t);
                      try {
                          for (a.s(); !(r = a.n()).done; ) {
                              var o = n(r.value, 2)
                                , c = o[0]
                                , l = (0,
                              o[1])(s[c]);
                              if (l.isErr())
                                  return E(l.unwrapErr())
                          }
                      } catch (e) {
                          a.e(e)
                      } finally {
                          a.f()
                      }
                      return P(s)
                  }
              },
              optional: function(e) {
                  return function(t) {
                      return v(t) ? P(S) : e(t).andThen((function(e) {
                          return P(_(e))
                      }
                      ))
                  }
              },
              record: function(e, t) {
                  return function(r) {
                      if (!g(r))
                          return E({
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
                              E(u)
                          }
                          var d = t(l);
                          if (d.isErr()) {
                              var f = d.unwrapErr();
                              return f.path.unshift(c),
                              E(f)
                          }
                          i[h.unwrap()] = d.unwrap()
                      }
                      return P(i)
                  }
              },
              string: function(e) {
                  return function(t) {
                      return null != e && e.coerce && (t = String(t)),
                      h(t) ? P(null != e && e.trim ? t.trim() : t) : E({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              tuple: function(e) {
                  var t = a(e.entries());
                  return function(r) {
                      if (!m(r))
                          return E({
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
                                  E(u)
                              }
                              a[l] = h.unwrap()
                          }
                      } catch (e) {
                          o.e(e)
                      } finally {
                          o.f()
                      }
                      return P(a)
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
                                  return P(s.unwrap())
                          }
                      } catch (e) {
                          n.e(e)
                      } finally {
                          n.f()
                      }
                      return E({
                          path: [],
                          message: "",
                          actual: "",
                          expected: ""
                      })
                  }
              },
              unknown: function(e) {
                  return P(e)
              }
          }, Symbol.toStringTag, {
              value: "Module"
          })), D = r(180), N = r(2940);
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
          }(R || (R = {}));
          const M = x.enums(R)
            , j = {
              [R.EN]: "en-US",
              [R.FR]: "fr-FR",
              [R.IT]: "it-IT",
              [R.DE]: "de-DE",
              [R.ES]: "es-ES",
              [R.ZH]: "zh-CN",
              [R.PT]: "pt-BR",
              [R.KO]: "ko-KR",
              [R.JA]: "ja-JP",
              [R.RU]: "ru-RU",
              [R.TR]: "tr-TR",
              [R.AR]: "ar-SA",
              [R.HI]: "hi-IN",
              [R.ID]: "id-ID"
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
                  orientation: N.LH.Any,
                  showOrientationOverlay: !1,
                  showUnsupportedOSOverlay: !1,
                  targetOS: [],
                  communityLinks: {
                      en: ""
                  }
              },
              platformConfig: D.iA,
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
            , L = {
              limits: {
                  [D.$.PRELOADER]: {
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
                  [D.$.FULLSCREEN]: {
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
                  [D.$.REWARDED]: {
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
                  [D.$.STICKY]: {
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
  a.h = () => "30e10931c772892c21d2",
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
        , n = a(8293);
      class i {
          constructor(e, t) {
              this.config = e,
              this.adapter = t
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
          get isExternalLinksAllowed() {
              return this.adapter.isExternalLinksAllowed
          }
          get type() {
              return this.adapter.type
          }
          get availableSocialNetworks() {
              return this.adapter.socialNetworks
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
      var s = a(3379)
        , o = a.n(s)
        , c = a(8205);
      o()(c.Z, {
          insert: "head",
          singleton: !1
      }),
      c.Z.locals;
      var l, h, u = a(6558), d = a(4414), f = function(e, t, r, n) {
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
      }, p = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, v = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class y {
          constructor(e=[]) {
              this.storages = e,
              l.set(this, void 0),
              h.set(this, ""),
              this.isEmptyOnBoot = !0,
              this.temp = {},
              p(this, l, (0,
              n._)(), "f"),
              this.ready = v(this, l, "f").ready
          }
          get localStorages() {
              return this.storages.filter((e => !0 === e.isLocal))
          }
          setStorages(e) {
              this.storages = e,
              Promise.all([this._get(e, "context"), this._get(e, "config")]).then(( ([e,t]) => {
                  p(this, h, e || "", "f"),
                  this.isEmptyOnBoot = !t,
                  v(this, l, "f").done()
              }
              ))
          }
          replaceStorages(e) {
              this.storages = e
          }
          _get(e, t) {
              const r = (0,
              n._)();
              return Promise.all(this.storages.map((e => {
                  const r = (0,
                  n._)(n.s);
                  return e.get(t).then(r.done).catch(r.abort),
                  r.ready.catch((e => (u.kg.warn(e),
                  null)))
              }
              ))).then((e => r.done(e.find(Boolean)))),
              r.ready
          }
          _set(e, t, r) {
              return Promise.all(e.map((e => e.set(t, r))))
          }
          set(e, t, r) {
              return this._set(e, `${t}${v(this, h, "f")}`, r)
          }
          setRaw(e, t, r) {
              return this._set(e, `${t}`, r)
          }
          get(e, t) {
              return this._get(e, `${t}${v(this, h, "f")}`)
          }
          getRaw(e, t) {
              return this._get(e, `${t}`)
          }
          isEmptyContext() {
              return !v(this, h, "f")
          }
          setContext(e) {
              p(this, h, e, "f"),
              this._set(this.localStorages, "context", v(this, h, "f"))
          }
          migrateToContext(e) {
              return f(this, void 0, void 0, (function*() {
                  p(this, h, "", "f");
                  const [t,r,n] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                    , i = r || (null == t ? void 0 : t.secretCode);
                  return p(this, h, e, "f"),
                  yield Promise.all([this.savePlayer(t), this.saveSecretCode(i), this.saveLanguage(n)]),
                  p(this, h, "", "f"),
                  yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]),
                  [t, i]
              }
              ))
          }
          clearContext(e) {
              return f(this, void 0, void 0, (function*() {
                  const t = v(this, h, "f");
                  p(this, h, e, "f"),
                  yield Promise.all([this.savePlayer(null), this.saveSecretCode(null), this.saveLanguage(null)]),
                  p(this, h, t, "f")
              }
              ))
          }
          extractFromContext(e) {
              return f(this, void 0, void 0, (function*() {
                  const t = v(this, h, "f");
                  p(this, h, e, "f");
                  const [r,n,i] = yield Promise.all([this.loadPlayer(), this.loadSecretCode(), this.loadLanguage()])
                    , s = n || (null == r ? void 0 : r.secretCode);
                  return p(this, h, t, "f"),
                  [r, s, i]
              }
              ))
          }
          copyFromContext(e, t) {
              return f(this, void 0, void 0, (function*() {
                  const r = v(this, h, "f")
                    , [n,i,s] = yield this.extractFromContext(e);
                  p(this, h, t, "f"),
                  yield Promise.all([this.savePlayer(n), this.saveSecretCode(i), this.saveLanguage(s)]),
                  p(this, h, r, "f")
              }
              ))
          }
          loadPlayer() {
              return this.get(this.storages, "players").then(( ([e]=[null]) => e))
          }
          savePlayer(e) {
              return this.set(this.storages, "players", [e]).catch(u.kg.warn)
          }
          loadSecretCode() {
              return this.get(this.localStorages, "sk").catch(u.kg.warn)
          }
          saveSecretCode(e) {
              return this.set(this.localStorages, "sk", e).catch(u.kg.warn)
          }
          loadLanguage() {
              return this.get(this.localStorages, "lang").catch((e => (u.kg.warn(e),
              null)))
          }
          saveLanguage(e) {
              return this.set(this.localStorages, "lang", e).catch(u.kg.warn)
          }
          loadConfig() {
              return this._get(this.localStorages, "config").then((e => Object.assign(Object.assign({}, d.lR), e))).catch((e => (u.kg.warn(e),
              d.lR)))
          }
          saveConfig(e) {
              return this._set(this.localStorages, "config", e).catch(u.kg.warn)
          }
          loadAdsInfo() {
              const e = this._get(this.localStorages, "adsInfo").then((e => Object.assign(Object.assign({}, d.GH), e))).catch((e => (u.kg.warn(e),
              d.GH)));
              return e.then((e => this.temp.adsInfo = e)),
              e
          }
          saveAdsInfo(e) {
              return this._set(this.localStorages, "adsInfo", e).catch(u.kg.warn)
          }
          saveIsExistsShortcut(e) {
              this.set(this.localStorages, "isExistsShortcut", e)
          }
          loadIsExistsShortcut() {
              return this.get(this.localStorages, "isExistsShortcut")
          }
          isCrazyGamesAccountLinked(e) {
              var t;
              return f(this, void 0, void 0, (function*() {
                  return Boolean(null !== (t = yield this.getRaw(this.localStorages, `crazyGames.account${e}.linked`)) && void 0 !== t && t)
              }
              ))
          }
          setCrazyGamesAccountLinked(e) {
              return f(this, void 0, void 0, (function*() {
                  yield this.setRaw(this.localStorages, `crazyGames.account${e}.linked`, !0)
              }
              ))
          }
      }
      l = new WeakMap,
      h = new WeakMap;
      var m = a(6388)
        , g = function(e, t, r, n) {
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
      class w extends Error {
          constructor() {
              super("throttled invocation was canceled"),
              this.name = "CanceledError"
          }
      }
      class b {
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
                      throw new w;
                  return e()
              }
              ))
          }
      }
      function E(e, t, r={}) {
          const n = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0
            , i = r.getNextArgs || ( (e, t) => t);
          let s, a = Promise.resolve(), o = new b(a,0), c = null;
          function l() {
              const t = s;
              c = null,
              s = null;
              const r = ( () => g(this, void 0, void 0, (function*() {
                  return yield e.apply(this, t)
              }
              )))();
              return o = new b(r,n),
              r
          }
          function h(...e) {
              return s = s ? i(s, e) : e,
              c || (c = o.then(l.bind(this))),
              c
          }
          return h.cancel = () => g(this, void 0, void 0, (function*() {
              const e = a;
              o.cancel(),
              c = null,
              s = null,
              a = Promise.resolve(),
              o = new b(a,0),
              yield e
          }
          )),
          h.flush = () => g(this, void 0, void 0, (function*() {
              o.flush(),
              yield a
          }
          )),
          h
      }
      function P(e) {
          return function(t, r, n) {
              const i = n.value;
              return n.value = E(i, e),
              n
          }
      }
      E.CanceledError = w;
      const S = e => {
          if ("Problem" === (null == e ? void 0 : e.__typename))
              throw e.message
      }
      ;
      new TextEncoder;
      var _ = a(6480)
        , T = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }
        , A = function(e, t, r, n) {
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
      class k extends m.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          open(e={
              orderBy: ["score"]
          }) {
              return A(this, void 0, void 0, (function*() {
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
              return A(this, void 0, void 0, (function*() {
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
              return A(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r, withMe: i, limit: s} = e
                    , a = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      _.pY)(r),
                      withMe: (0,
                      _.oo)(r, i)
                  });
                  try {
                      const {result: e, playerResult: r} = yield this.gp._services.leaderboardsService.getRating(a);
                      S(e),
                      S(r),
                      O(e, r, a.showNearest, a.withMe, (0,
                      _.wQ)(s, e.leaderboard)),
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
              return A(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r, withMe: i, limit: s} = e
                    , a = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      _.pY)(r),
                      withMe: (0,
                      _.oo)(r, i)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getRatingVariant(a)
                        , {result: r, playerResult: n} = e;
                      S(r),
                      S(n),
                      O(r, n, a.showNearest, a.withMe, (0,
                      _.wQ)(s, r.leaderboard)),
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
              return A(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r} = e
                    , i = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      _.pY)(r)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getPlayerRating(i);
                      S(e),
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
              return A(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  this.gp.loader.inc();
                  const {showNearest: r} = e
                    , i = Object.assign(Object.assign({}, e), {
                      showNearest: (0,
                      _.pY)(r)
                  });
                  try {
                      const e = yield this.gp._services.leaderboardsService.getPlayerRatingVariant(i);
                      S(e),
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
              return A(this, void 0, void 0, (function*() {
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
      function O(e, t, r, n, i) {
          e.countOfPlayersAbove = (0,
          _.q3)(e.players, (null == t ? void 0 : t.abovePlayers) || []),
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
          _.oo)(r, n), (0,
          _.wQ)(i, e.leaderboard), null == t ? void 0 : t.player, null == t ? void 0 : t.abovePlayers, null == t ? void 0 : t.belowPlayers, (0,
          _.pY)(r))
      }
      T([P(500)], k.prototype, "open", null),
      T([P(500)], k.prototype, "openScoped", null),
      T([P(500)], k.prototype, "fetch", null),
      T([P(500)], k.prototype, "fetchScoped", null),
      T([P(500)], k.prototype, "fetchPlayerRating", null),
      T([P(500)], k.prototype, "fetchPlayerRatingScoped", null),
      T([P(500)], k.prototype, "publishRecord", null);
      var C = a(5942);
      const R = {
          data: e => String(e || ""),
          stats: e => Number(e) || 0,
          flag: e => Boolean(e) || !1,
          service: null,
          accounts: null
      }
        , I = ["name", "avatar"];
      class x extends m.Z {
          constructor(e={}, t) {
              super(),
              this.credentials = "",
              this.isPublicFieldsDirty = !1,
              this.fields = t,
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
              return !this.fields.filter((e => !I.includes(e.key))).some((e => this.get(e.key) !== e.default))
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
                  score: e.score || 0
              },
              e.credentials && (this.credentials = String(e.credentials)),
              this.fields.forEach((t => {
                  if (!(t.key in e))
                      return void (this.state[t.key] = t.default);
                  const r = R[t.type];
                  if (!r)
                      return void (this.state[t.key] = e[t.key] || t.default);
                  const n = r(e[t.key]);
                  this.state[t.key] = t.variants.length && !t.variants.some((e => e.value === n)) ? t.default : n
              }
              )),
              this._events.emit("change")
          }
          toJSON() {
              return Object.assign({}, this.state)
          }
          getField(e) {
              const t = this.fields.find((t => t.key === e));
              if (!t) {
                  const t = `Field "${e}" not exists on player model`;
                  throw u.kg.error(t),
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
          get(e) {
              return this.state[e]
          }
          set(e, t) {
              const r = this.state[e];
              this.state[e] = this._convert(e, t),
              r !== this.state[e] && (this.getField(e).public && (this.isPublicFieldsDirty = !0),
              this._events.emit("change"))
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
              this.fields.forEach((e => this.set(e.key, e.default)))
          }
          remove() {
              this.state.id = 0,
              this.reset()
          }
          _convert(e, t) {
              const r = this.getField(e)
                , n = R[r.type];
              if (!n) {
                  const t = `Cannot mutate "${e}", it's readonly`;
                  throw u.kg.error(t),
                  new Error(t)
              }
              const i = n(t);
              if (r.variants.length && !r.variants.some((e => e.value === i))) {
                  const t = `Invalid variant ${i} of "${e}"`;
                  throw u.kg.error(t),
                  new Error(t)
              }
              return i
          }
      }
      const D = []
        , N = e => (D.push(e),
      () => {
          D.splice(D.indexOf(e), 1)
      }
      );
      let M = performance.now();
      const j = e => {
          const t = e - M;
          M = e,
          D.forEach((e => e(t))),
          requestAnimationFrame(j)
      }
      ;
      requestAnimationFrame(j);
      var F, L, U, B, G, $, W, V, q, z, Y, K, J, Z, H, X, Q = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, ee = function(e, t, r, n) {
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
      }, te = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, re = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const ne = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
      class ie extends x {
          constructor(e={}, t, r, i, s, a) {
              super(e, t),
              this.playerAdapter = r,
              this.gp = i,
              F.add(this),
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
              L.set(this, ""),
              U.set(this, void 0),
              B.set(this, `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},`),
              G.set(this, !1),
              this._platformData = {},
              $.set(this, void 0),
              W.set(this, ( () => {}
              )),
              Y.set(this, (function({silent: e=!0, override: t=!1}={}) {
                  return ee(this, void 0, void 0, (function*() {
                      this.gp.loader.inc();
                      const r = (0,
                      n._)();
                      yield this.gp._storage.savePlayer(this.toJSON()).catch(u.kg.warn);
                      const i = this.gp.platform.config.cloudSavesEnabled;
                      let s = !1;
                      try {
                          if (yield re(this, F, "m", q).call(this, e),
                          re(this, G, "f") && this.isStub) {
                              const [e] = yield this.gp._storage.extractFromContext(re(this, B, "f"));
                              e && (delete e.platformType,
                              delete e.secretCode,
                              delete e.credentials,
                              e.name = this.name,
                              e.avatar = this.avatar,
                              e.id = this.id,
                              this.fromJSON(e))
                          }
                          if (this.isPublicFieldsDirty || re(this, U, "f").isDirty() || i || this.isFirstRequest) {
                              const n = this.toJSON();
                              i || this.fields.forEach((e => {
                                  e.public || delete n[e.key]
                              }
                              ));
                              const a = yield this.gp._services.playerService.sync(Object.assign({
                                  override: t,
                                  playerState: n
                              }, re(this, U, "f").export()), {
                                  withToken: this.isFirstRequest
                              });
                              switch (a.__typename) {
                              case "PlayerSyncConflict":
                                  {
                                      this.gp.loader.dec();
                                      const t = a;
                                      let n;
                                      i ? (yield this.gp.loadOverlay(),
                                      s = !0,
                                      n = yield this.gp.overlay.pickPlayerOnConflict(t)) : n = this.toJSON(),
                                      this.gp.loader.inc();
                                      const o = this.toJSON();
                                      this.has("name") && !n.name && (n.name = this.get("name")),
                                      this.has("avatar") && !n.avatar && (n.avatar = this.get("avatar"));
                                      const c = yield this.gp._services.playerService.sync(Object.assign({
                                          playerState: n,
                                          override: !0
                                      }, re(this, U, "f").export()), {
                                          withToken: this.isFirstRequest
                                      });
                                      if ("Player" !== c.__typename)
                                          return void r.abort();
                                      e || re(this, F, "m", H).call(this, "");
                                      const l = c.state.credentials && !this.credentials;
                                      o.id === c.state.id && (yield this.gp._storage.clearContext(re(this, B, "f"))),
                                      s && this.gp.overlay.close(),
                                      yield re(this, F, "m", J).call(this, c, l),
                                      r.done(),
                                      yield re(this, F, "m", Z).call(this, c.state);
                                      break
                                  }
                              case "Player":
                                  {
                                      const {state: t} = a;
                                      e || re(this, F, "m", H).call(this, "");
                                      const n = 0 === this.id;
                                      yield re(this, F, "m", J).call(this, a, n),
                                      r.done(),
                                      yield re(this, F, "m", Z).call(this, t),
                                      this.playerAdapter.publishRecord(t);
                                      break
                                  }
                              }
                          }
                          r.done()
                      } catch (e) {
                          r.abort(e)
                      } finally {
                          this._hasFirstSync = !0,
                          this.isPublicFieldsDirty = !1,
                          this.gp.loader.dec()
                      }
                      return r.ready.then(( () => this._events.emit("sync", !0))).catch(( () => this._events.emit("sync", !1))),
                      r.ready
                  }
                  ))
              }
              )),
              K.set(this, (function() {
                  return ee(this, void 0, void 0, (function*() {
                      this.gp.loader.inc();
                      try {
                          const e = yield this.gp._services.playerService.getPlayer({
                              withToken: !0
                          });
                          yield re(this, F, "m", J).call(this, e, !0),
                          yield re(this, F, "m", Z).call(this, e.state),
                          this._events.emit("load", !0)
                      } catch (e) {
                          u.kg.error(e),
                          this._events.emit("load", !1)
                      } finally {
                          this.gp.loader.dec()
                      }
                  }
                  ))
              }
              ));
              const o = (0,
              n._)();
              this.ready = o.ready,
              te(this, $, a, "f"),
              te(this, U, s, "f"),
              s.on("syncPlayer", ( () => {
                  this.ready.then(( () => this.sync().finally(( () => s.commitSyncPlayer()))))
              }
              )),
              re(this, F, "m", V).call(this).finally(( () => this._init(o)))
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
                  secretCode: this.secretCode || re(this, L, "f")
              })
          }
          get _isAuthorizedAtPlatform() {
              return this.playerAdapter.isAuthorizedAtPlatform
          }
          get(e) {
              return "secretCode" === e ? this.secretCode || re(this, L, "f") : "credentials" === e ? this.credentials || this.playerAdapter.userId : super.get(e)
          }
          _init(e) {
              return ee(this, void 0, void 0, (function*() {
                  Promise.all([this.gp._storage.loadPlayer(), this.gp._storage.loadSecretCode(), this.gp.ready]).then(( ([t,r]) => {
                      this.fromJSON(t || {}),
                      te(this, L, (null == t ? void 0 : t.secretCode) || "", "f"),
                      this.secretCode = r,
                      re(this, $, "f").call(this, this._authInfo),
                      this.isFirstRequest = !0,
                      (this.id ? re(this, K, "f").call(this) : re(this, Y, "f").call(this)).finally(( () => ee(this, void 0, void 0, (function*() {
                          this.isFirstRequest = !1,
                          this.isLoggedInByPlatform && (yield re(this, U, "f").syncPurchases()),
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
              return ee(this, void 0, void 0, (function*() {
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
              return ee(this, void 0, void 0, (function*() {
                  return re(this, Y, "f").call(this, e)
              }
              ))
          }
          load() {
              return ee(this, void 0, void 0, (function*() {
                  return re(this, K, "f").call(this)
              }
              ))
          }
          login(e={}) {
              var t;
              return ee(this, void 0, void 0, (function*() {
                  let r = !1;
                  if (this.gp.platform._hasAuthModal)
                      return (yield this.playerAdapter.loginPlayer(this)).id ? void (yield re(this, Y, "f").call(this, {
                          silent: !1
                      }).then(( () => {
                          r = !0,
                          this._events.emit("login", !0)
                      }
                      )).catch((e => {
                          u.kg.error(e),
                          this._events.emit("login", !1)
                      }
                      ))) : void this._events.emit("login", !1);
                  if (this.gp.platform.hasIntegratedAuth || this.gp.platform.isSecretCodeAuthAvailable) {
                      try {
                          yield this.gp.loadOverlay();
                          const {type: n, secretCode: i} = yield this.gp.overlay.login({
                              withSecretCode: this.gp.platform.isSecretCodeAuthAvailable && (null === (t = e.withSecretCode) || void 0 === t || t)
                          });
                          switch (n) {
                          case "PLATFORM_AUTH":
                              yield re(this, Y, "f").call(this, {
                                  silent: !1
                              }).then(( () => {
                                  r = !0,
                                  this._events.emit("login", !0)
                              }
                              )).catch((e => {
                                  u.kg.error(e),
                                  this._events.emit("login", !1)
                              }
                              ));
                              break;
                          case "SECRET_KEY_AUTH_LOGIN":
                              re(this, F, "m", H).call(this, i),
                              yield re(this, K, "f").call(this).then(( () => {
                                  r = !0,
                                  this._events.emit("login", !0)
                              }
                              )).catch((e => {
                                  u.kg.error(e),
                                  this._events.emit("login", !1)
                              }
                              ))
                          }
                          this.gp.overlay.close()
                      } catch (e) {
                          u.kg.error(e),
                          this._events.emit("login", !1)
                      }
                      return r
                  }
                  this._events.emit("login", !1)
              }
              ))
          }
          resetCredentials() {
              te(this, L, "", "f"),
              this.credentials = "",
              re(this, F, "m", H).call(this, ""),
              this._hasFirstSync = !1,
              this.isFirstRequest = !0
          }
      }
      L = new WeakMap,
      U = new WeakMap,
      B = new WeakMap,
      G = new WeakMap,
      $ = new WeakMap,
      W = new WeakMap,
      Y = new WeakMap,
      K = new WeakMap,
      F = new WeakSet,
      V = function() {
          return ee(this, void 0, void 0, (function*() {
              const {platformData: e, key: t} = yield this.playerAdapter.getPlayerContext().catch((e => (u.kg.error(e),
              {
                  platformData: null,
                  key: ""
              })));
              let r;
              if (this._platformData = e || {},
              re(this, $, "f").call(this, this._authInfo),
              r = this.gp.platform.type === C.z.CUSTOM ? `,${this.gp.platform.type}:${this.gp.platform.config.tag},${this.gp.isDev ? "d" : "p"},${t}` : `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},${t}`,
              null == e ? void 0 : e.savedState) {
                  u.kg.info("found saved state...");
                  const e = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},null`
                    , [t] = yield this.gp._storage.extractFromContext(e);
                  t && (this.fromJSON(t),
                  yield re(this, Y, "f").call(this),
                  yield this.gp._storage.copyFromContext(r, e))
              }
              if (this.gp.platform.type === C.z.SMARTMARKET) {
                  const e = `,SBER_MARKET,${this.gp.isDev ? "d" : "p"},`
                    , [t] = yield this.gp._storage.extractFromContext(e);
                  t && (delete t.platformType,
                  this.fromJSON(t),
                  yield re(this, Y, "f").call(this),
                  yield this.gp._storage.clearContext(e))
              }
              if ([C.z.POKI, C.z.VK_PLAY, C.z.CRAZY_GAMES, C.z.WG_PLAYGROUND, C.z.BEELINE, C.z.KONGREGATE, C.z.GOOGLE_PLAY, C.z.PLAYDECK, C.z.CUSTOM].includes(this.gp.platform.type) && this.gp.platform.config.cloudSavesEnabled) {
                  const e = `,NONE,${this.gp.isDev ? "d" : "p"},`
                    , [t] = yield this.gp._storage.extractFromContext(r);
                  let n = !t;
                  if (t && (this.fromJSON(t),
                  this.isStub && (n = !0)),
                  n) {
                      const [t] = yield this.gp._storage.extractFromContext(e);
                      t && (delete t.platformType,
                      delete t.secretCode,
                      delete t.credentials,
                      t.id = this.id,
                      this.fromJSON(t),
                      this.gp._storage.setContext(r),
                      yield re(this, Y, "f").call(this))
                  }
              }
              if (!this.gp._storage.isEmptyOnBoot && this.gp._storage.isEmptyContext()) {
                  u.kg.info("Applying migration...");
                  const [e,t] = yield this.gp._storage.migrateToContext(r);
                  this.secretCode = t,
                  this.fromJSON(e),
                  te(this, L, e.secretCode, "f"),
                  re(this, $, "f").call(this, this._authInfo),
                  yield re(this, Y, "f").call(this)
              }
              te(this, G, !!t, "f"),
              this.gp._storage.setContext(r)
          }
          ))
      }
      ,
      q = function(e) {
          return ee(this, void 0, void 0, (function*() {
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
                  yield re(this, F, "m", z).call(this, r, e)
              }
          }
          ))
      }
      ,
      z = function(e, t) {
          return ee(this, void 0, void 0, (function*() {
              e.name && !this.get("name") && (this.name = e.name),
              this.name && ne.test(this.name) && (this.name = this.name.replace(/@.*/, "")),
              e.photoLarge && this._isRequredAvatarUpdate && (this.avatar = e.photoLarge),
              t || (yield re(this, F, "m", V).call(this))
          }
          ))
      }
      ,
      J = function(e, t) {
          return ee(this, void 0, void 0, (function*() {
              this._firstReqHash = e.firstReqHash,
              this.stats = e.stats,
              re(this, F, "m", X).call(this, e.token);
              const r = !!this.credentials
                , n = !this.isFirstRequest || this.id === e.state.id;
              !this.gp.platform.config.cloudSavesEnabled && n ? this.fields.filter((e => e.public)).forEach((t => {
                  this.set(t.key, e.state[t.key])
              }
              )) : this.fromJSON(e.state),
              !r && this.credentials.length > 0 && !t && (yield this.gp._storage.clearContext(re(this, B, "f"))),
              te(this, L, e.state.secretCode, "f"),
              this._events.emit("sync:before"),
              re(this, $, "f").call(this, this._authInfo),
              yield this.gp._storage.savePlayer(this.toJSON());
              const i = Date.parse(e.sessionStart)
                , s = i > 0 ? Date.parse(this.gp.serverTime) - i : 0;
              let a = this.stats.playtimeAll + s / 1e3
                , o = this.stats.playtimeToday + s / 1e3;
              re(this, W, "f").call(this),
              te(this, W, N((e => {
                  a += e / 1e3,
                  o += e / 1e3,
                  this.stats.playtimeAll = Math.floor(a),
                  this.stats.playtimeToday = Math.floor(o)
              }
              )), "f"),
              re(this, U, "f").reset(),
              re(this, U, "f").markTriggersActivated(e.rewardsData.activatedTriggersNow),
              re(this, U, "f").markTriggersClaimed(e.rewardsData.claimedTriggersNow),
              re(this, U, "f").markRewardsGiven(e.rewardsData.givenRewards),
              re(this, U, "f").markAchievementsUnlocked(e.rewardsData.givenAchievements),
              re(this, U, "f").markPurchasesGiven(e.rewardsData.givenProducts),
              re(this, U, "f").markSchedulersDaysClaimed(e.rewardsData.claimedSchedulersDaysNow),
              re(this, U, "f").setPlayerSegments(e.segments, e.newSegments, e.leftSegments),
              re(this, U, "f").setAchievementsList(e.achievementsList),
              re(this, U, "f").setPurchasedList(e.purchasesListV2),
              re(this, U, "f").setRewardsList(e.rewards),
              re(this, U, "f").setTriggersList(e.triggers),
              re(this, U, "f").setPlayerSchedulersList(e.playerSchedulers),
              re(this, U, "f").setPlayerEventsList(e.playerEvents),
              re(this, U, "f").setExperiments(e.experiments)
          }
          ))
      }
      ,
      Z = function(e) {
          return ee(this, void 0, void 0, (function*() {
              this.isStub ? (this.tempSecredCode = e.secretCode,
              re(this, F, "m", H).call(this, e.secretCode)) : this.tempSecredCode && this.tempSecredCode === e.secretCode && (re(this, F, "m", H).call(this, ""),
              this.tempSecredCode = ""),
              this.isLoggedInByPlatform = this.playerAdapter.hasCredetials,
              this.isLoggedIn = this.isLoggedInByPlatform,
              this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode,
              this.secretCode && this.secretCode != e.secretCode && re(this, F, "m", H).call(this, e.secretCode),
              this.hasAnyCredentials || (re(this, F, "m", H).call(this, e.secretCode),
              this.hasAnyCredentials = !0)
          }
          ))
      }
      ,
      H = function(e) {
          this.secretCode = e,
          this.gp._storage.saveSecretCode(this.secretCode),
          re(this, $, "f").call(this, this._authInfo)
      }
      ,
      X = function(e) {
          e && this.gp.channels._connect(e)
      }
      ,
      Q([P(300)], ie.prototype, "fetchFields", null),
      Q([P(300)], ie.prototype, "sync", null),
      Q([P(300)], ie.prototype, "load", null);
      class se extends m.Z {
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
      var ae, oe = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class ce {
          constructor() {
              this.counters = [],
              this.visitParams = {},
              this._experimentsVisitParams = {},
              this._segmentsVisitParams = {},
              ae.set(this, 0)
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
              }(this, ae, "f") || oe(this, ae, window.setTimeout(( () => {
                  oe(this, ae, 0, "f");
                  const e = Object.assign(Object.assign(Object.assign({}, this._experimentsVisitParams), this._segmentsVisitParams), this.visitParams);
                  this.counters.forEach((t => t.setVisitParams(e)))
              }
              ), 100), "f")
          }
      }
      ae = new WeakMap;
      var le, he, ue, de = function(e, t, r, n) {
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
      }, fe = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class pe extends m.Z {
          constructor(e, t, r) {
              super(),
              this.adapter = e,
              this.gp = t,
              this.config = r,
              le.add(this)
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
              return this.adapter.getCommunityLink(fe(this, le, "a", ue))
          }
          get shareParams() {
              return this.adapter.shareParams || {}
          }
          _getShareOptions(e) {
              return de(this, void 0, void 0, (function*() {
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
              return de(this, void 0, void 0, (function*() {
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
                          u.kg.warn(e)
                      }
                  return yield this.gp.loadOverlay(),
                  this.gp.overlay.share(e, yield this._getShareOptions(t))
              }
              ))
          }
          share(e={}) {
              return de(this, void 0, void 0, (function*() {
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
              return de(this, void 0, void 0, (function*() {
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
              return de(this, void 0, void 0, (function*() {
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
              return de(this, void 0, void 0, (function*() {
                  if (!this.canJoinCommunity)
                      return this._events.emit("joinCommunity", !1),
                      !1;
                  let e = !0;
                  return this.isSupportsNativeCommunityJoin && (e = yield this.adapter.joinCommunity(fe(this, le, "a", he))),
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
      le = new WeakSet,
      he = function() {
          return this.config.platformConfig.communityLinks[this.gp.language] || this.config.platformConfig.communityLinks.en || ""
      }
      ,
      ue = function() {
          return fe(this, le, "a", he) || this.config.config.communityLinks[this.gp.language] || this.config.config.communityLinks.en || ""
      }
      ;
      var ve = a(2954)
        , ye = function(e, t, r, n) {
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
      function me() {
          var e;
          return ye(this, void 0, void 0, (function*() {
              const t = new URL(window.location.href)
                , {searchParams: r, hostname: i} = t
                , s = yield function() {
                  return ye(this, void 0, void 0, (function*() {
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
                  platformType: C.z.YANDEX
              } : i.includes("gamemonetize.co") ? {
                  platformType: C.z.GAME_MONETIZE
              } : i.includes("gamedistribution.co") ? {
                  platformType: C.z.GAME_DISTRIBUTION
              } : i.includes("crazygames.com") ? {
                  platformType: C.z.CRAZY_GAMES
              } : i.includes(".gamepix.com") ? {
                  platformType: C.z.GAMEPIX
              } : i.includes(".wgplayground.com") ? {
                  platformType: C.z.WG_PLAYGROUND
              } : i.includes("poki.com") || r.has("pokiDebug") || i.includes("poki-gdn.com") ? {
                  platformType: C.z.POKI
              } : r.has("api_id") && r.has("viewer_id") && r.has("auth_key") || r.get("vk_user_id") && r.get("sign") && r.get("vk_app_id") ? {
                  platformType: C.z.VK
              } : r.has("auth_sig") && r.has("session_key") ? {
                  platformType: C.z.OK
              } : r.has("gp_beeline_token") ? {
                  platformType: C.z.BEELINE
              } : i.includes(".konggames.com") || r.has("kongregate_game_version") && r.has("kongregate_host") ? {
                  platformType: C.z.KONGREGATE
              } : i.includes("static.developer.sberdevices.ru") || Array.isArray(window.appInitialData) && window.appInitialData.some((e => "app_context" === (null == e ? void 0 : e.type))) ? {
                  platformType: C.z.SMARTMARKET
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
                  platformType: C.z.VK_PLAY
              } : s ? {
                  platformType: C.z.GOOGLE_PLAY
              } : "true" === r.get("telegram") && "true" === r.get("playdeck") ? {
                  platformType: C.z.PLAYDECK
              } : function(e) {
                  var t, r;
                  const n = null === (t = e.get("_platform")) || void 0 === t ? void 0 : t.toUpperCase()
                    , i = null === (r = e.get("_platform-key")) || void 0 === r ? void 0 : r.trim();
                  return n === C.z.CUSTOM && !!i
              }(r) ? {
                  platformType: C.z.CUSTOM,
                  platformKey: r.get("_platform-key") || ""
              } : (null === (e = r.get("_platform")) || void 0 === e ? void 0 : e.toUpperCase()) !== C.z.CUSTOM ? {
                  platformType: r.get("_platform")
              } : {
                  platformType: C.z.NONE
              }
          }
          ))
      }
      var ge, we = a(3080);
      function be(e) {
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
      function Ee(e, t) {
          var r = indexedDB.open(e);
          r.onupgradeneeded = function() {
              return r.result.createObjectStore(t)
          }
          ;
          var n = be(r);
          return function(e, r) {
              return n.then((function(n) {
                  return r(n.transaction(t, e).objectStore(t))
              }
              ))
          }
      }
      function Pe() {
          return ge || (ge = Ee("keyval-store", "keyval")),
          ge
      }
      class Se {
          constructor(e) {
              this.projectId = e,
              this.isLocal = !0;
              try {
                  this.store = Ee(`gs-db-project-${this.projectId}`, "storage")
              } catch (e) {
                  u.kg.error(e)
              }
          }
          set(e, t) {
              return this.store ? function(e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pe())("readwrite", (function(r) {
                      return r.put(t, e),
                      be(r.transaction)
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
                  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe())("readonly", (function(t) {
                      return be(t.get(e))
                  }
                  ))
              }(e, this.store).then(t.done).catch(( () => t.done(null))),
              t.ready
          }
      }
      var _e, Te = function(e, t, r, n) {
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
      }, Ae = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class ke {
          constructor(e) {
              this.projectId = e,
              _e.set(this, void 0),
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
                  }(this, _e, window.localStorage, "f")
              } catch (e) {}
          }
          getKey(e) {
              return `gs-db-project-${this.projectId}-${e}`
          }
          set(e, t) {
              return Te(this, void 0, void 0, (function*() {
                  Ae(this, _e, "f").setItem(this.getKey(e), JSON.stringify(t))
              }
              ))
          }
          get(e) {
              return Te(this, void 0, void 0, (function*() {
                  try {
                      return JSON.parse(Ae(this, _e, "f").getItem(this.getKey(e)) || "null")
                  } catch (e) {}
              }
              ))
          }
      }
      _e = new WeakMap;
      var Oe = a(4687)
        , Ce = a(1437)
        , Re = a(4835)
        , Ie = function(e, t, r, n) {
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
      const xe = e => {
          var t;
          return (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t ? void 0 : t.src) || ""
      }
        , De = e => {
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
              icon: xe(t.icon)
          })
      }
        , Ne = [C.z.YANDEX, C.z.VK, C.z.OK, C.z.GAMEPIX];
      class Me extends m.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          get isAvailable() {
              return this.gp.platform.isExternalLinksAllowed || Ne.includes(this.gp.platform.type)
          }
          open({id: e, tag: t, shareParams: r}={
              tag: "ALL",
              shareParams: {}
          }) {
              return Ie(this, void 0, void 0, (function*() {
                  if (this.isAvailable) {
                      this.gp.loader.inc();
                      try {
                          const [n] = yield Promise.all([this.fetch({
                              id: e,
                              tag: t,
                              shareParams: r
                          }), this.gp.loadOverlay(), (0,
                          Ce.p)(Re.Z.app.trophy).catch(u.kg.error)]);
                          this.gp.loader.dec(),
                          n.games.length > 0 && (this._events.emit("open"),
                          yield this.gp.overlay.openGamesCollections(n).catch(u.kg.error),
                          this._events.emit("close"))
                      } catch (e) {
                          this.gp.loader.dec(),
                          u.kg.error(e)
                      }
                  } else
                      u.kg.warn(`Not available on ${this.gp.platform.type}`)
              }
              ))
          }
          fetch({id: e, tag: t="ALL", shareParams: r={}}={
              tag: "ALL",
              shareParams: {}
          }) {
              return Ie(this, void 0, void 0, (function*() {
                  if (!this.isAvailable)
                      return void u.kg.warn(`Not available on ${this.gp.platform.type}`);
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
                          games: n.games.filter((e => e.url)).map(De)
                      });
                      Object.keys(r).length > 0 && (s.games = s.games.map((e => Object.assign(Object.assign({}, e), {
                          url: this.gp.socials.addShareParamsToUrl(e.url, r)
                      })))),
                      s.games || u.kg.warn("empty games collection"),
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
      var je, Fe, Le, Ue = function(e, t, r, n) {
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
      }, Be = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Ge {
          constructor(e) {
              this.queryBuilder = e,
              je.set(this, {}),
              Fe.set(this, (function(e={}, t) {
                  return Ue(this, void 0, void 0, (function*() {
                      const r = (0,
                      n._)();
                      e.limit = e.limit || 10;
                      try {
                          const n = yield t(e)
                            , i = n.length === e.limit;
                          Be(this, je, "f")[this.queryBuilder(e)] = Object.assign(Object.assign({}, e), {
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
              Le.set(this, (function(e={}, t) {
                  return Ue(this, void 0, void 0, (function*() {
                      const r = this.queryBuilder(e)
                        , i = Be(this, je, "f")[r];
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
                      const o = Object.assign({}, Be(this, je, "f")[r])
                        , c = Object.assign(Object.assign({}, i), {
                          offset: a
                      });
                      Be(this, je, "f")[r] = c;
                      try {
                          const e = yield t(c)
                            , n = e.length === c.limit;
                          Be(this, je, "f")[r].canLoadMore = n,
                          s.done({
                              items: e,
                              canLoadMore: n
                          })
                      } catch (e) {
                          Be(this, je, "f")[r] = o,
                          s.abort(e)
                      }
                      return s.ready
                  }
                  ))
              }
              ))
          }
          fetch(e={}, t) {
              return Be(this, Fe, "f").call(this, e, t)
          }
          fetchMore(e={}, t) {
              return Ue(this, void 0, void 0, (function*() {
                  return Be(this, Le, "f").call(this, e, t)
              }
              ))
          }
      }
      je = new WeakMap,
      Fe = new WeakMap,
      Le = new WeakMap;
      var $e, We, Ve, qe, ze, Ye, Ke, Je, Ze, He, Xe = function(e, t, r, n) {
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
      }, Qe = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, et = function(e, t) {
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
      class tt extends m.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this._config = t,
              $e.set(this, new Ge((e => ["channels", (e.tags || []).join(","), e.search || "", (e.ids || []).join(","), e.onlyJoined || !1, e.onlyOwned || !1].join(":")))),
              We.set(this, new Ge((e => `channelsMembers:${e.channelId}`))),
              Ve.set(this, new Ge((e => `invites:${e.channelId}`))),
              qe.set(this, new Ge((e => `channelsInvites:${e.channelId}`))),
              ze.set(this, new Ge((e => "sentInvites"))),
              Ye.set(this, new Ge((e => `channelsJoinRequests:${e.channelId}`))),
              Ke.set(this, new Ge((e => "sentJoinRequests"))),
              Je.set(this, new Ge((e => `channelsJoinRequests:${e.channelId}:${(e.tags || []).join(",")}`))),
              Ze.set(this, new Ge((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`))),
              He.set(this, new Ge((e => `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`)))
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
                  u.kg.error(e),
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
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Je, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMessages"),
                  t
              }
              ))
          }
          fetchMoreMessages(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Je, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreMessages"),
                  t
              }
              ))
          }
          fetchPersonalMessages(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ze, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchPersonalMessages"),
                  t
              }
              ))
          }
          fetchMorePersonalMessages(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ze, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchPersonalMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMorePersonalMessages"),
                  t
              }
              ))
          }
          fetchFeedMessages(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, He, "f").fetch(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchFeedMessages"),
                  t
              }
              ))
          }
          fetchMoreFeedMessages(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, He, "f").fetchMore(e, (e => this.gp._services.channelsService.messages.fetchFeedMessages(e).then((e => e.items))));
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
              const r = et(e, ["seconds"]);
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
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, We, "f").fetch(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                  return this._handleResponse(t, "fetchMembers"),
                  t
              }
              ))
          }
          fetchMoreMembers(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, We, "f").fetchMore(e, (e => this.gp._services.channelsService.members.fetchMembers(e).then((e => e.players))));
                  return this._handleResponse(t, "fetchMoreMembers"),
                  t
              }
              ))
          }
          fetchInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ve, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchInvites"),
                  t
              }
              ))
          }
          fetchMoreInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ve, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreInvites"),
                  t
              }
              ))
          }
          fetchChannelInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, qe, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchChannelInvites"),
                  t
              }
              ))
          }
          fetchMoreChannelInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, qe, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchChannelInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreChannelInvites"),
                  t
              }
              ))
          }
          fetchSentInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, ze, "f").fetch(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchSentInvites"),
                  t
              }
              ))
          }
          fetchMoreSentInvites(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, ze, "f").fetchMore(e, (e => this.gp._services.channelsService.invites.fetchSentInvites(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreSentInvites"),
                  t
              }
              ))
          }
          fetchJoinRequests(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ye, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchJoinRequests"),
                  t
              }
              ))
          }
          fetchMoreJoinRequests(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ye, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchMoreJoinRequests"),
                  t
              }
              ))
          }
          fetchSentJoinRequests(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ke, "f").fetch(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
                  return this._handleResponse(t, "fetchSentJoinRequests"),
                  t
              }
              ))
          }
          fetchMoreSentJoinRequests(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = Qe(this, Ke, "f").fetchMore(e, (e => this.gp._services.channelsService.joinRequests.fetchSentJoinRequests(e).then((e => e.items))));
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
              return Xe(this, void 0, void 0, (function*() {
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
                              throw u.kg.error("access_denied"),
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
                          u.kg.error(e)
                      }
                  } else
                      u.kg.error("empty_channel_id")
              }
              ))
          }
          openPersonalChat({playerId: e, tags: t}={
              playerId: 0,
              tags: []
          }) {
              return Xe(this, void 0, void 0, (function*() {
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
                          u.kg.error(e)
                      }
                  } else
                      u.kg.error("empty_player_id")
              }
              ))
          }
          openFeed({playerId: e, tags: t}={
              playerId: 0,
              tags: []
          }) {
              return Xe(this, void 0, void 0, (function*() {
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
                          u.kg.error(e)
                      }
                  } else
                      u.kg.error("empty_player_id")
              }
              ))
          }
          openChatOverlay(e, t, r) {
              return Xe(this, void 0, void 0, (function*() {
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
              return Xe(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchChannel(e);
                  return this._handleResponse(t, "fetchChannel"),
                  t
              }
              ))
          }
          fetchPersonalChannel(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchPersonalChannel(e);
                  return this._handleResponse(t, "fetchPersonalChannel"),
                  t
              }
              ))
          }
          fetchFeedChannel(e) {
              return Xe(this, void 0, void 0, (function*() {
                  const t = this.gp._services.channelsService.channels.fetchFeedChannel(e);
                  return this._handleResponse(t, "fetchFeedChannel"),
                  t
              }
              ))
          }
          fetchChannels(e) {
              var {ids: t=[]} = e
                , r = et(e, ["ids"]);
              return Xe(this, void 0, void 0, (function*() {
                  const e = r;
                  (t = t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                  const n = Qe(this, $e, "f").fetch(r, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
                  return this._handleResponse(n, "fetchChannels"),
                  n
              }
              ))
          }
          fetchMoreChannels(e) {
              var {ids: t=[]} = e
                , r = et(e, ["ids"]);
              return Xe(this, void 0, void 0, (function*() {
                  const e = r;
                  (t = null == t ? void 0 : t.map((e => Number(String(e).trim()))).filter(Boolean)).length > 0 && (e.ids = t);
                  const n = Qe(this, $e, "f").fetchMore(r, (e => this.gp._services.channelsService.channels.fetchChannels(e).then((e => e.items))));
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
              return Xe(this, void 0, void 0, (function*() {
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
      $e = new WeakMap,
      We = new WeakMap,
      Ve = new WeakMap,
      qe = new WeakMap,
      ze = new WeakMap,
      Ye = new WeakMap,
      Ke = new WeakMap,
      Je = new WeakMap,
      Ze = new WeakMap,
      He = new WeakMap;
      var rt = function(e, t, r, n) {
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
      class nt extends m.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          open({type: e}) {
              return rt(this, void 0, void 0, (function*() {
                  this.gp.loader.inc();
                  try {
                      const [t] = yield Promise.all([this.fetch({
                          type: e
                      }), this.gp.loadOverlay(), (0,
                      Ce.p)(Re.Z.app.trophy).catch(u.kg.error)]);
                      this.gp.loader.dec(),
                      t ? (t.format = "HTML",
                      this._events.emit("open"),
                      yield this.gp.overlay.openDocument(t).catch(u.kg.error),
                      this._events.emit("close")) : u.kg.error(new Error("document not found"))
                  } catch (e) {
                      this.gp.loader.dec(),
                      u.kg.error(e)
                  }
              }
              ))
          }
          fetch({type: e, format: t="HTML"}) {
              return rt(this, void 0, void 0, (function*() {
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
      var it, st = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, at = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const ot = {
          data: e => String(e || ""),
          stats: e => Number(e) || 0,
          flag: e => Boolean(e) || !1,
          image: e => String(e || ""),
          doc_html: e => String(e || ""),
          file: e => String(e || "")
      };
      class ct extends m.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              this.platformAdapter = t,
              this.state = {},
              this.list = [],
              it.set(this, (function(e) {
                  this.state = {},
                  this.list = e,
                  e.forEach((e => {
                      var t;
                      const r = (null === (t = ot[e.type]) || void 0 === t ? void 0 : t.call(ot, e.value)) || e.value;
                      this.state[e.key] = r
                  }
                  )),
                  this._events.emit("change")
              }
              )),
              at(this, it, "f").call(this, r)
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
                      return at(this, it, "f").call(this, e),
                      this._events.emit("fetch", e),
                      e
                  } catch (e) {
                      u.kg.error(e),
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
                  u.kg.error(e),
                  this._events.emit("error:fetchPlatformVariables", (null == e ? void 0 : e.message) || e)
              }
              )),
              t
          }
      }
      it = new WeakMap,
      st([P(300)], ct.prototype, "fetch", null),
      st([P(300)], ct.prototype, "fetchPlatformVariables", null);
      var lt, ht, ut, dt, ft = a(6041), pt = function(e, t, r, n) {
          var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(e, t, r, n);
          else
              for (var o = e.length - 1; o >= 0; o--)
                  (i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, r, a) : i(t, r)) || a);
          return s > 3 && a && Object.defineProperty(t, r, a),
          a
      }, vt = function(e, t, r, n) {
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
      const gt = "empty_url"
        , wt = "empty_content"
        , bt = "empty_filename";
      class Et extends Ge {
          constructor() {
              super(Pt),
              lt.set(this, void 0),
              ht.set(this, {}),
              ut.set(this, (function(e, t) {
                  var {url: r, filename: n} = e
                    , i = mt(e, ["url", "filename"]);
                  return vt(this, void 0, void 0, (function*() {
                      if (!r)
                          throw u.kg.error(gt),
                          new Error(gt);
                      if (!n)
                          throw u.kg.error(bt),
                          new Error(bt);
                      if (yt(this, ht, "f")[r]) {
                          const e = new File([yt(this, ht, "f")[r]],n,yt(this, ht, "f")[r]);
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
                          throw u.kg.error(e),
                          e
                      }
                  }
                  ))
              }
              )),
              dt.set(this, (function(e, t) {
                  return vt(this, void 0, void 0, (function*() {
                      const {content: r, filename: n} = e
                        , i = mt(e, ["content", "filename"]);
                      if (!r.trim())
                          throw u.kg.error(wt),
                          new Error(wt);
                      if (!n)
                          throw u.kg.error(bt),
                          new Error(bt);
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
              }(this, lt, e, "f")
          }
          chooseFile(e) {
              return vt(this, void 0, void 0, (function*() {
                  const t = (0,
                  n._)();
                  try {
                      const r = yield yt(this, lt, "f").call(this, e)
                        , n = URL.createObjectURL(r);
                      yt(this, ht, "f")[n] = r,
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
              return vt(this, void 0, void 0, (function*() {
                  const r = (0,
                  n._)();
                  try {
                      e.file || (e.file = yield yt(this, lt, "f").call(this, e.accept));
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
              return vt(this, void 0, void 0, (function*() {
                  return yt(this, ut, "f").call(this, e, t)
              }
              ))
          }
          uploadContent(e, t) {
              return vt(this, void 0, void 0, (function*() {
                  return yt(this, dt, "f").call(this, e, t)
              }
              ))
          }
      }
      function Pt(e) {
          return `p${e.playerId || 0}:${(e.tags || []).join(",")}`
      }
      lt = new WeakMap,
      ht = new WeakMap,
      ut = new WeakMap,
      dt = new WeakMap,
      pt([P(300)], Et.prototype, "uploadUrl", null),
      pt([P(300)], Et.prototype, "uploadContent", null);
      var St, _t = function(e, t, r, n) {
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
      }, Tt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const At = "image/png,.jpeg,.jpg";
      class kt extends m.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this.acl = t,
              St.set(this, new Et)
          }
          get canUpload() {
              return this.acl.canUploadImages
          }
          resize(e, t, r, n) {
              return (0,
              ft.Z)(e, t, r, n)
          }
          chooseFile() {
              return _t(this, void 0, void 0, (function*() {
                  const e = Tt(this, St, "f").chooseFile(At);
                  return e.then((e => this._events.emit("choose", e))),
                  e.catch((e => this._events.emit("error:choose", e))),
                  e
              }
              ))
          }
          upload(e={}) {
              return _t(this, void 0, void 0, (function*() {
                  const t = Tt(this, St, "f").upload(Object.assign(Object.assign({}, e), {
                      accept: At
                  }), ( ({file: e, tags: t}) => _t(this, void 0, void 0, (function*() {
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
              return _t(this, void 0, void 0, (function*() {
                  return Tt(this, St, "f").uploadUrl(Object.assign(Object.assign({}, e), {
                      filename: "image.jpeg"
                  }), (e => this.upload(e)))
              }
              ))
          }
          fetch(e={}) {
              return _t(this, void 0, void 0, (function*() {
                  const t = Tt(this, St, "f").fetch(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetch", e))),
                  t.catch((e => this._events.emit("error:fetch", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          fetchMore(e={}) {
              return _t(this, void 0, void 0, (function*() {
                  const t = Tt(this, St, "f").fetchMore(e, (e => this.gp._services.imagesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetchMore", e))),
                  t.catch((e => this._events.emit("error:fetchMore", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
      }
      St = new WeakMap;
      var Ot, Ct = function(e, t, r, n) {
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
      }, Rt = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class It extends m.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              this.acl = t,
              Ot.set(this, new Et)
          }
          get canUpload() {
              return this.acl.canUploadFiles
          }
          chooseFile(e) {
              return Ct(this, void 0, void 0, (function*() {
                  const t = Rt(this, Ot, "f").chooseFile(e);
                  return t.then((e => this._events.emit("choose", e))),
                  t.catch((e => this._events.emit("error:choose", e))),
                  t
              }
              ))
          }
          upload(e) {
              return Ct(this, void 0, void 0, (function*() {
                  const t = Rt(this, Ot, "f").upload(e, (e => this.gp._services.filesService.upload(e)));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("upload", e))),
                  t.catch((e => this._events.emit("error:upload", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          uploadContent(e) {
              return Ct(this, void 0, void 0, (function*() {
                  return Rt(this, Ot, "f").uploadContent(e, (e => this.upload(e)))
              }
              ))
          }
          uploadUrl(e) {
              return Ct(this, void 0, void 0, (function*() {
                  return Rt(this, Ot, "f").uploadUrl(e, (e => this.upload(e)))
              }
              ))
          }
          loadContent(e) {
              return Ct(this, void 0, void 0, (function*() {
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
              return Ct(this, void 0, void 0, (function*() {
                  const t = Rt(this, Ot, "f").fetch(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetch", e))),
                  t.catch((e => this._events.emit("error:fetch", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
          fetchMore(e={}) {
              return Ct(this, void 0, void 0, (function*() {
                  const t = Rt(this, Ot, "f").fetchMore(e, (e => this.gp._services.filesService.fetch(e).then((e => e.items))));
                  return this.gp.loader.inc(),
                  t.then((e => this._events.emit("fetchMore", e))),
                  t.catch((e => this._events.emit("error:fetchMore", e))),
                  t.finally(( () => this.gp.loader.dec())),
                  t
              }
              ))
          }
      }
      Ot = new WeakMap;
      var xt = a(1049);
      class Dt extends m.Z {
          constructor(e) {
              super(),
              this.gp = e
          }
          fetch({ids: e}) {
              return t = this,
              r = void 0,
              s = function*() {
                  if (0 === e.map(Number).filter(Boolean).length)
                      throw u.kg.error("empty_ids"),
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
      let Nt;
      try {
          new EventTarget,
          Nt = !0
      } catch (e) {
          Nt = !1
      }
      var Mt = Nt ? EventTarget : class {
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
        , jt = Nt ? Event : class {
          constructor(e) {
              this.type = e
          }
      }
      ;
      class Ft extends jt {
          constructor(e, t) {
              super(e),
              this.newState = t.newState,
              this.oldState = t.oldState,
              this.originalEvent = t.originalEvent
          }
      }
      const Lt = "active"
        , Ut = "passive"
        , Bt = "hidden"
        , Gt = "frozen"
        , $t = "terminated"
        , Wt = "object" == typeof safari && safari.pushNotification
        , Vt = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow"in self ? "pagehide" : "unload"]
        , qt = e => (e.preventDefault(),
      e.returnValue = "Are you sure?")
        , zt = [[Lt, Ut, Bt, $t], [Lt, Ut, Bt, Gt], [Bt, Ut, Lt], [Gt, Bt], [Gt, Lt], [Gt, Ut]].map((e => e.reduce(( (e, t, r) => (e[t] = r,
      e)), {})))
        , Yt = () => document.visibilityState === Bt ? Bt : document.hasFocus() ? Lt : Ut
        , Kt = new class extends Mt {
          constructor() {
              super();
              const e = Yt();
              this.s = e,
              this.i = [],
              this.a = this.a.bind(this),
              Vt.forEach((e => addEventListener(e, this.a, !0))),
              Wt && addEventListener("beforeunload", (e => {
                  this.n = setTimeout(( () => {
                      e.defaultPrevented || e.returnValue.length > 0 || this.r(e, Bt)
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
              !this.i.indexOf(e) > -1 && (0 === this.i.length && addEventListener("beforeunload", qt),
              this.i.push(e))
          }
          removeUnsavedChanges(e) {
              const t = this.i.indexOf(e);
              t > -1 && (this.i.splice(t, 1),
              0 === this.i.length && removeEventListener("beforeunload", qt))
          }
          r(e, t) {
              if (t !== this.s) {
                  const r = ( (e, t) => {
                      for (let r, n = 0; r = zt[n]; ++n) {
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
                      this.dispatchEvent(new Ft("statechange",{
                          oldState: n,
                          newState: i,
                          originalEvent: e
                      }))
                  }
              }
          }
          a(e) {
              switch (Wt && clearTimeout(this.n),
              e.type) {
              case "pageshow":
              case "resume":
                  this.r(e, Yt());
                  break;
              case "focus":
                  this.r(e, Lt);
                  break;
              case "blur":
                  this.s === Lt && this.r(e, Yt());
                  break;
              case "pagehide":
              case "unload":
                  this.r(e, e.persisted ? Gt : $t);
                  break;
              case "visibilitychange":
                  this.s !== Gt && this.s !== $t && this.r(e, Yt());
                  break;
              case "freeze":
                  this.r(e, Gt)
              }
          }
      }
        , Jt = ["hidden", "frozen", "terminated"];
      function Zt({url: e, blur: t=0, fade: r=0}) {
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
          })) : u.kg.warn("Empty background url")
      }
      class Ht {
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
      var Xt;
      class Qt {
          constructor() {
              Xt.set(this, [new Ht])
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
                  }(this, Xt, "f")) {
                      const r = yield t.getLanguage(e);
                      if (null !== r)
                          return (0,
                          d.Ff)(r.toLowerCase()).unwrapOr(null)
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
      Xt = new WeakMap;
      var er = a(2940);
      const tr = () => window.matchMedia("(orientation: portrait)").matches
        , rr = e => {
          const t = tr();
          return t && e === er.LH.Portrait || !t && e === er.LH.Landscape
      }
      ;
      var nr, ir = a(8866), sr = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class ar {
          constructor() {
              nr.set(this, new Set),
              document.addEventListener("pointerdown", (e => {
                  sr(this, nr, "f").add(e.pointerId)
              }
              )),
              document.addEventListener("pointerup", (e => {
                  sr(this, nr, "f").delete(e.pointerId)
              }
              ))
          }
          waitForPointersUp() {
              return e = this,
              t = void 0,
              n = function*() {
                  const e = new Promise((e => {
                      if (0 === sr(this, nr, "f").size)
                          return e();
                      const t = r => {
                          if (sr(this, nr, "f").delete(r.pointerId),
                          0 === sr(this, nr, "f").size)
                              return document.removeEventListener("pointerup", t),
                              e()
                      }
                      ;
                      document.addEventListener("pointerup", t)
                  }
                  ));
                  yield Promise.race([e, (0,
                  ir.Z)(1500)])
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
      nr = new WeakMap;
      const or = {
          [er.W2.Add]: (e, t) => {
              e.player.add(t.key, t.value)
          }
          ,
          [er.W2.Remove]: (e, t) => {
              e.player.add(t.key, -t.value)
          }
          ,
          [er.W2.Set]: (e, t) => {
              e.player.set(t.key, t.value)
          }
      }
        , cr = {
          [er.x1.PlayerField]: or
      };
      var lr, hr, ur, dr, fr, pr, vr, yr, mr, gr, wr, br, Er, Pr, Sr, _r, Tr, Ar = function(e, t, r, n) {
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
      }, kr = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, Or = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const Cr = "reward_not_found";
      class Rr extends m.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              lr.add(this),
              hr.set(this, void 0),
              ur.set(this, []),
              dr.set(this, []),
              fr.set(this, []),
              pr.set(this, {}),
              vr.set(this, {}),
              yr.set(this, {}),
              kr(this, dr, r, "f"),
              Or(this, lr, "m", _r).call(this),
              kr(this, hr, t, "f"),
              Or(this, hr, "f").on("setRewardsList", (e => Or(this, lr, "m", br).call(this, e.playerRewards, e.notSentGivenList, e.notSentAcceptedList))),
              Or(this, hr, "f").on("markRewardsGiven", (e => {
                  e.forEach((e => {
                      const t = Or(this, lr, "m", mr).call(this, e);
                      if (!t)
                          return void u.kg.error(`reward not found', ID ${e}`);
                      Or(this, lr, "m", Er).call(this, t.id);
                      const r = Or(this, lr, "m", wr).call(this, t.id);
                      this._events.emit("give", r),
                      t.isAutoAccept && this._events.emit("accept", r)
                  }
                  ))
              }
              )),
              this.gp.on("change:language", (e => {
                  Or(this, dr, "f").forEach((t => {
                      t.name = t.names[e] || t.names.en,
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  )),
                  Or(this, lr, "m", _r).call(this)
              }
              )),
              Or(this, dr, "f").forEach((e => {
                  e.description = e.descriptions[this.gp.language] || e.descriptions.en,
                  e.name = e.names[this.gp.language] || e.names.en,
                  e.icon = (0,
                  ft.Z)(e.icon, 256, 256, !1),
                  e.iconSmall = (0,
                  ft.Z)(e.icon, 48, 48, !1)
              }
              )),
              this.gp.on("gameStart", ( () => Ar(this, void 0, void 0, (function*() {
                  yield this.gp.player.ready,
                  Or(this, fr, "f").forEach((e => {
                      const t = Or(this, lr, "m", mr).call(this, e.rewardId);
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
              return [...Or(this, dr, "f")]
          }
          get givenList() {
              return [...Or(this, fr, "f")]
          }
          give(e) {
              return Ar(this, void 0, void 0, (function*() {
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
                  if (Or(this, ur, "f").includes(t))
                      return i(Cr),
                      r.ready;
                  const s = Or(this, lr, "m", mr).call(this, t);
                  if (!s)
                      return i(Cr),
                      r.ready;
                  if (e.lazy) {
                      let e = {
                          rewardId: s.id,
                          countTotal: 1,
                          countAccepted: 0
                      };
                      Or(this, lr, "m", Er).call(this, s.id),
                      Or(this, hr, "f").addGivenReward({
                          id: s.id,
                          count: 1
                      });
                      const t = Or(this, lr, "m", gr).call(this, s.id);
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
                      Or(this, lr, "m", Er).call(this, t.id);
                      const i = Or(this, lr, "m", gr).call(this, t.id);
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
                      "reward_not_found" === n && Or(this, ur, "f").push(t),
                      "string" == typeof n ? (u.kg.error(n),
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
              return Ar(this, void 0, void 0, (function*() {
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
                  if (Or(this, ur, "f").includes(t))
                      return i(Cr),
                      r.ready;
                  if (!this.hasUnaccepted(t))
                      return i("reward_already_accepted"),
                      r.ready;
                  const {reward: s, playerReward: a} = Or(this, lr, "m", wr).call(this, t);
                  return a ? (Or(this, lr, "m", Pr).call(this, a),
                  Or(this, hr, "f").addAcceptedReward({
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
              return (null === (t = Or(this, lr, "m", wr).call(this, e).playerReward) || void 0 === t ? void 0 : t.countTotal) > 0
          }
          hasAccepted(e) {
              var t;
              return (null === (t = Or(this, lr, "m", wr).call(this, e).playerReward) || void 0 === t ? void 0 : t.countAccepted) > 0
          }
          hasUnaccepted(e) {
              const {playerReward: t} = Or(this, lr, "m", wr).call(this, e);
              return !!t && t.countTotal > t.countAccepted
          }
          getReward(e) {
              return Or(this, lr, "m", wr).call(this, e)
          }
      }
      function Ir(e, t=1) {
          e.countAccepted += t
      }
      hr = new WeakMap,
      ur = new WeakMap,
      dr = new WeakMap,
      fr = new WeakMap,
      pr = new WeakMap,
      vr = new WeakMap,
      yr = new WeakMap,
      lr = new WeakSet,
      mr = function(e) {
          return Or(this, pr, "f")[e] || Or(this, vr, "f")[e]
      }
      ,
      gr = function(e) {
          return Or(this, yr, "f")[e]
      }
      ,
      wr = function(e) {
          const t = {
              reward: null,
              playerReward: null
          }
            , r = Or(this, lr, "m", mr).call(this, e);
          if (!r)
              return t;
          t.reward = r;
          const n = Or(this, lr, "m", gr).call(this, r.id);
          return t.playerReward = n || {
              rewardId: r.id,
              countAccepted: 0,
              countTotal: 0
          },
          t
      }
      ,
      br = function(e, t, r) {
          let n = [...r];
          const i = t.reduce(( (t, {id: r, count: n}) => {
              const i = e.find((e => e.rewardId === r));
              return i ? (i.countTotal += n,
              t) : (Or(this, dr, "f").find((e => e.id === r)) && t.push({
                  rewardId: r,
                  countTotal: n,
                  countAccepted: 0
              }),
              t)
          }
          ), [])
            , s = [...e, ...i];
          kr(this, fr, s.reduce(( (e, t) => {
              if (Or(this, dr, "f").find((e => e.id === t.rewardId))) {
                  const r = n.find((e => e.id === t.rewardId));
                  r && (n = n.filter((e => e.id !== t.rewardId)),
                  Ir(t, r.count)),
                  e.push(t)
              }
              return e
          }
          ), []), "f"),
          Or(this, lr, "m", Tr).call(this)
      }
      ,
      Er = function(e) {
          if (!Or(this, lr, "m", mr).call(this, e))
              return;
          const t = Or(this, lr, "m", gr).call(this, e);
          t ? t.countTotal += 1 : (Or(this, fr, "f").unshift({
              rewardId: e,
              countTotal: 1,
              countAccepted: 0
          }),
          Or(this, lr, "m", Tr).call(this))
      }
      ,
      Pr = function(e) {
          const t = Or(this, lr, "m", mr).call(this, e.rewardId);
          t ? (Ir(e),
          Or(this, lr, "m", Sr).call(this, t)) : u.kg.error(`Reward ${e.rewardId} not found`)
      }
      ,
      Sr = function(e) {
          try {
              t = this.gp,
              e.mutations.forEach((e => {
                  const r = cr[e.type];
                  if (!r)
                      throw new Error(`Unknown mutation type: ${e.type}`);
                  const n = r[e.action];
                  if (!n)
                      throw new Error(`Unknown mutation action: ${e.action}`);
                  n(t, e)
              }
              ))
          } catch (e) {
              u.kg.error("failed to apply reward", e)
          }
          var t
      }
      ,
      _r = function() {
          kr(this, pr, {}, "f"),
          kr(this, vr, {}, "f"),
          Or(this, dr, "f").forEach((e => {
              Or(this, pr, "f")[e.id] = e,
              Or(this, vr, "f")[e.tag] = e
          }
          ))
      }
      ,
      Tr = function() {
          kr(this, yr, {}, "f"),
          Or(this, fr, "f").forEach((e => {
              Or(this, yr, "f")[e.rewardId] = e
          }
          ))
      }
      ;
      var xr, Dr, Nr, Mr, jr, Fr, Lr, Ur, Br, Gr, $r, Wr, Vr = function(e, t, r, n) {
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
      }, zr = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const Yr = "trigger_not_found";
      class Kr extends m.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              xr.add(this),
              Dr.set(this, void 0),
              Nr.set(this, []),
              Mr.set(this, []),
              jr.set(this, {}),
              Fr.set(this, {}),
              Lr.set(this, {}),
              qr(this, Nr, [...r.triggers, ...r.schedulers.reduce(( (e, t) => [...e, ...t.triggers]), []), ...r.events.reduce(( (e, t) => [...e, ...t.triggers]), [])], "f"),
              zr(this, xr, "m", $r).call(this),
              qr(this, Dr, t, "f"),
              zr(this, Dr, "f").on("setTriggersList", (e => {
                  qr(this, Mr, e.playerTriggers.filter((e => !!zr(this, jr, "f")[e.triggerId])), "f"),
                  zr(this, xr, "m", Wr).call(this)
              }
              )),
              zr(this, Dr, "f").on("markTriggersActivated", (e => {
                  e.forEach((e => {
                      const {trigger: t, isActivated: r} = zr(this, xr, "m", Br).call(this, e);
                      t ? r || (zr(this, Mr, "f").push({
                          triggerId: e,
                          claimed: !1
                      }),
                      zr(this, xr, "m", Wr).call(this),
                      this._events.emit("activate", {
                          trigger: t
                      }),
                      u.kg.info(`🎉 Trigger activated, ID: ${e}, Tag: ${t.tag}`)) : u.kg.error(`trigger not found, ID: ${e}`)
                  }
                  ))
              }
              )),
              zr(this, Dr, "f").on("markTriggersClaimed", (e => {
                  e.forEach((e => {
                      const {trigger: t, isClaimed: r} = zr(this, xr, "m", Br).call(this, e);
                      t ? r || (qr(this, Mr, zr(this, Mr, "f").map((t => t.triggerId === e ? Object.assign(Object.assign({}, t), {
                          claimed: !0
                      }) : t)), "f"),
                      zr(this, xr, "m", Wr).call(this),
                      this._events.emit("claim", {
                          trigger: t
                      }),
                      u.kg.info(`🎉 Trigger claimed, ID: ${e}, Tag: ${t.tag}`)) : u.kg.error(`trigger not found, ID: ${e}`)
                  }
                  ))
              }
              )),
              this.gp.on("change:language", (e => {
                  zr(this, Nr, "f").forEach((t => {
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  )),
                  zr(this, xr, "m", $r).call(this)
              }
              ))
          }
          get list() {
              return [...zr(this, Nr, "f")]
          }
          get activatedList() {
              return [...zr(this, Mr, "f")]
          }
          isActivated(e) {
              return zr(this, xr, "m", Br).call(this, e).isActivated
          }
          isClaimed(e) {
              return zr(this, xr, "m", Br).call(this, e).isClaimed
          }
          getTrigger(e) {
              return zr(this, xr, "m", Br).call(this, e)
          }
          claim(e) {
              return Vr(this, void 0, void 0, (function*() {
                  const t = e.id || e.tag
                    , r = zr(this, xr, "m", Ur).call(this, t)
                    , i = (0,
                  n._)();
                  try {
                      if (!r)
                          throw u.kg.error(`trigger not found, ID: ${t}`),
                          new Error(Yr);
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
              return Vr(this, void 0, void 0, (function*() {
                  const r = e || t
                    , {isActivated: n, isClaimed: i} = zr(this, xr, "m", Gr).call(this, r);
                  if (!n)
                      throw u.kg.error(`trigger is not activated, ID: ${r}`),
                      new Error("trigger_not_activated");
                  if (i)
                      throw u.kg.error(`trigger is already claimed, ID: ${r}`),
                      new Error("trigger_already_claimed");
                  return zr(this, Dr, "f").addClaimedTrigger(r),
                  yield zr(this, Dr, "f").syncPlayer(),
                  zr(this, xr, "m", Br).call(this, r)
              }
              ))
          }
      }
      Dr = new WeakMap,
      Nr = new WeakMap,
      Mr = new WeakMap,
      jr = new WeakMap,
      Fr = new WeakMap,
      Lr = new WeakMap,
      xr = new WeakSet,
      Ur = function(e) {
          return zr(this, jr, "f")[e] || zr(this, Fr, "f")[e]
      }
      ,
      Br = function(e) {
          const t = {
              trigger: null,
              isActivated: !1,
              isClaimed: !1
          }
            , r = zr(this, xr, "m", Ur).call(this, e);
          if (!r)
              return t;
          if (t.trigger = r,
          r) {
              const e = zr(this, Lr, "f")[r.id];
              e && (t.isActivated = !0,
              t.isClaimed = e.claimed)
          }
          return t
      }
      ,
      Gr = function(e) {
          const t = zr(this, Lr, "f")[e];
          return t ? {
              isActivated: !0,
              isClaimed: t.claimed
          } : {
              isActivated: !1,
              isClaimed: !1
          }
      }
      ,
      $r = function() {
          qr(this, jr, {}, "f"),
          qr(this, Fr, {}, "f"),
          zr(this, Nr, "f").forEach((e => {
              zr(this, jr, "f")[e.id] = e,
              zr(this, Fr, "f")[e.tag] = e
          }
          ))
      }
      ,
      Wr = function() {
          qr(this, Lr, {}, "f"),
          zr(this, Mr, "f").forEach((e => {
              zr(this, Lr, "f")[e.triggerId] = e
          }
          ))
      }
      ;
      var Jr, Zr = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, Hr = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class Xr extends m.Z {
          constructor() {
              super(...arguments),
              this.acceptedRewards = [],
              this.givenRewards = [],
              this.unlockedAchievements = [],
              this.purchasedProducts = [],
              this.claimedTriggers = [],
              this.claimedSchedulersDays = [],
              Jr.set(this, null)
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
          syncPurchases() {
              const e = (0,
              n._)();
              return this._events.emit("syncPurchases", e.done),
              e.ready
          }
          syncPlayer() {
              if (Zr(this, Jr, "f"))
                  return Zr(this, Jr, "f").ready;
              const e = (0,
              n._)();
              return Hr(this, Jr, e, "f"),
              (0,
              ir.Z)(300).then(( () => this._events.emit("syncPlayer"))),
              e.ready
          }
          commitSyncPlayer() {
              var e;
              null === (e = Zr(this, Jr, "f")) || void 0 === e || e.done(),
              Hr(this, Jr, null, "f")
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
      Jr = new WeakMap;
      var Qr, en, tn, rn, nn, sn, an, on, cn, ln, hn, un, dn = function(e, t, r, n) {
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
      }, fn = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, pn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      const vn = "scheduler_not_found"
        , yn = "wrong_day"
        , mn = "day_not_reached"
        , gn = "nothing_to_claim"
        , wn = {
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
      class bn extends m.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              Qr.add(this),
              en.set(this, void 0),
              tn.set(this, []),
              rn.set(this, []),
              fn(this, tn, r, "f"),
              fn(this, en, t, "f"),
              pn(this, en, "f").on("setPlayerSchedulersList", ( ({playerSchedulers: e}) => {
                  fn(this, rn, e.filter((e => pn(this, tn, "f").some((t => t.id === e.schedulerId)))), "f")
              }
              ))
          }
          get list() {
              return [...pn(this, tn, "f")]
          }
          get activeList() {
              return [...pn(this, rn, "f")]
          }
          getSchedulersTriggers() {
              return pn(this, tn, "f").reduce(( (e, {triggers: t}) => [...e, ...t]), [])
          }
          getScheduler(e) {
              const {scheduler: t, playerScheduler: r} = pn(this, Qr, "m", sn).call(this, e);
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
              i = t.type === er.OB.ActiveDays ? a.activeDays : a.activeDaysConsecutive),
              {
                  scheduler: t,
                  isRegistered: n,
                  currentDay: i,
                  daysClaimed: s,
                  stats: a
              }
          }
          isRegistered(e) {
              return !!pn(this, Qr, "m", sn).call(this, e).playerScheduler
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
              const {scheduler: n} = pn(this, Qr, "m", sn).call(this, e);
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
                  return wn;
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
                  return wn;
              const {currentDay: r} = t;
              return this.getSchedulerDay(e, r)
          }
          claimDay(e, t) {
              return dn(this, void 0, void 0, (function*() {
                  return pn(this, Qr, "m", un).call(this, "claimDay", pn(this, Qr, "m", on).call(this, e, t), {
                      schedulerIdOrTag: e,
                      day: t
                  })
              }
              ))
          }
          claimDayAdditional(e, t, r) {
              return dn(this, void 0, void 0, (function*() {
                  return pn(this, Qr, "m", un).call(this, "claimDayAdditional", pn(this, Qr, "m", cn).call(this, e, t, r), {
                      schedulerIdOrTag: e,
                      day: t,
                      triggerIdOrTag: r
                  })
              }
              ))
          }
          claimAllDay(e, t) {
              return dn(this, void 0, void 0, (function*() {
                  return pn(this, Qr, "m", un).call(this, "claimAllDay", pn(this, Qr, "m", ln).call(this, e, t), {
                      schedulerIdOrTag: e,
                      day: t
                  })
              }
              ))
          }
          claimAllDays(e) {
              return dn(this, void 0, void 0, (function*() {
                  return pn(this, Qr, "m", un).call(this, "claimAllDays", pn(this, Qr, "m", hn).call(this, e), {
                      schedulerIdOrTag: e
                  })
              }
              ))
          }
          register(e) {
              return dn(this, void 0, void 0, (function*() {
                  return pn(this, Qr, "m", un).call(this, "register", pn(this, Qr, "m", nn).call(this, (null == e ? void 0 : e.id) || (null == e ? void 0 : e.tag)), e)
              }
              ))
          }
      }
      en = new WeakMap,
      tn = new WeakMap,
      rn = new WeakMap,
      Qr = new WeakSet,
      nn = function(e) {
          return dn(this, void 0, void 0, (function*() {
              const t = this.getScheduler(e);
              if (!t.scheduler)
                  throw new Error(vn);
              const {scheduler: r} = t
                , n = yield this.gp._services.schedulersService.register({
                  schedulerId: r.id
              });
              pn(this, rn, "f").push(Object.assign(Object.assign({}, n), {
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
      sn = function(e) {
          const t = {
              scheduler: null,
              playerScheduler: null
          }
            , r = pn(this, tn, "f").find((t => t.tag === e || t.id === Number(e)));
          return r ? (t.scheduler = r,
          r && (t.playerScheduler = pn(this, rn, "f").find((e => e.schedulerId === r.id))),
          t) : t
      }
      ,
      an = function(e, t) {
          return !Number.isNaN(e) && e > 0 && e <= t.days
      }
      ,
      on = function(e, t) {
          return dn(this, void 0, void 0, (function*() {
              const {scheduler: r, isDayReached: n, isDayClaimed: i} = this.getSchedulerDay(e, t);
              if (!r)
                  throw vn;
              if (!pn(this, Qr, "m", an).call(this, t, r))
                  throw yn;
              if (!n)
                  throw mn;
              if (i)
                  throw "day_already_claimed";
              return pn(this, en, "f").addClaimedSchedulerDay({
                  schedulerId: r.id,
                  day: t
              }),
              yield pn(this, en, "f").syncPlayer(),
              this.getSchedulerDay(e, t)
          }
          ))
      }
      ,
      cn = function(e, t, r) {
          return dn(this, void 0, void 0, (function*() {
              const {scheduler: n, isDayReached: i} = this.getSchedulerDay(e, t);
              if (!n)
                  throw vn;
              if (!pn(this, Qr, "m", an).call(this, t, n))
                  throw yn;
              if (!i)
                  throw mn;
              const s = n.triggers.find((e => e.id === r || e.tag === r));
              if (!s)
                  throw Yr;
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
      ln = function(e, t) {
          return dn(this, void 0, void 0, (function*() {
              const {scheduler: r, isDayReached: n} = this.getSchedulerDay(e, t);
              if (!r)
                  throw vn;
              if (!pn(this, Qr, "m", an).call(this, t, r))
                  throw yn;
              if (!n)
                  throw mn;
              const i = [];
              if (this.canClaimDay(e, t) && i.push(pn(this, Qr, "m", on).call(this, e, t)),
              r.triggers.forEach((r => {
                  this.canClaimDayAdditional(e, t, r.id) && i.push(pn(this, Qr, "m", cn).call(this, e, t, r.id))
              }
              )),
              0 === i.length)
                  throw gn;
              return yield Promise.all(i),
              this.getSchedulerDay(e, t)
          }
          ))
      }
      ,
      hn = function(e) {
          return dn(this, void 0, void 0, (function*() {
              const {scheduler: t} = pn(this, Qr, "m", sn).call(this, e);
              if (!t)
                  throw vn;
              const r = [];
              for (let n = 1; n <= t.days; n++)
                  this.canClaimAllDay(e, n) && r.push(this.claimAllDay(e, n).catch(u.kg.warn));
              if (0 === r.length)
                  throw gn;
              return yield Promise.all(r),
              this.getScheduler(e)
          }
          ))
      }
      ,
      un = function(e, t, r) {
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
      var En, Pn, Sn, _n, Tn, An = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, kn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class On extends m.Z {
          constructor(e, t, r) {
              super(),
              this.gp = e,
              En.add(this),
              Pn.set(this, void 0),
              Sn.set(this, []),
              _n.set(this, []),
              An(this, Sn, r.map((t => Object.assign(Object.assign({}, t), {
                  name: t.names[e.language] || t.names.en,
                  description: t.descriptions[e.language] || t.descriptions.en,
                  iconSmall: (0,
                  ft.Z)(t.icon, 48, 48, !1),
                  icon: (0,
                  ft.Z)(t.icon, 256, 256, !1),
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
              An(this, Pn, t, "f"),
              kn(this, Pn, "f").on("setPlayerEventsList", ( ({playerEvents: e}) => {
                  An(this, _n, e.filter((e => kn(this, Sn, "f").some((t => t.id === e.eventId)))), "f")
              }
              )),
              this.gp.on("change:language", (e => {
                  kn(this, Sn, "f").forEach((t => {
                      t.name = t.names[e] || t.names.en,
                      t.description = t.descriptions[e] || t.descriptions.en
                  }
                  ))
              }
              ))
          }
          get list() {
              return [...kn(this, Sn, "f")]
          }
          get activeList() {
              return [...kn(this, _n, "f")]
          }
          getEvent(e) {
              const {event: t, playerEvent: r} = kn(this, En, "m", Tn).call(this, e)
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
                      case er.Do.Reward:
                          const {reward: t} = this.gp.rewards.getReward(e.id);
                          t && n.rewards.push(Object.assign(Object.assign({}, t), {
                              isExists: this.gp.rewards.has(e.id)
                          }));
                          break;
                      case er.Do.Achievement:
                          const {achievement: r} = this.gp.achievements.getAchievement(e.id);
                          r && n.achievements.push(Object.assign(Object.assign({}, r), {
                              isExists: this.gp.achievements.has(e.id)
                          }));
                          break;
                      case er.Do.Product:
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
              const {event: t} = kn(this, En, "m", Tn).call(this, e);
              return !!(null == t ? void 0 : t.isActive)
          }
          isJoined(e) {
              const {event: t, playerEvent: r} = kn(this, En, "m", Tn).call(this, e);
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
                    , {event: s, playerEvent: a} = kn(this, En, "m", Tn).call(this, t);
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
                      kn(this, _n, "f").some((e => e.eventId === n.eventId)) || kn(this, _n, "f").push(n),
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
      Pn = new WeakMap,
      Sn = new WeakMap,
      _n = new WeakMap,
      En = new WeakSet,
      Tn = function(e) {
          const t = {
              event: null,
              playerEvent: null
          }
            , r = kn(this, Sn, "f").find((t => t.tag === e || t.id === e));
          return r ? (t.event = r,
          r && (t.playerEvent = kn(this, _n, "f").find((e => e.eventId === r.id))),
          t) : t
      }
      ;
      var Cn, Rn, In = a(6256);
      class xn {
          constructor() {
              Cn.add(this),
              this.type = function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, Cn, "m", Rn).call(this)
          }
          _satisfies(e) {
              return e.includes(this.type)
          }
      }
      Cn = new WeakSet,
      Rn = function() {
          const e = new In.UAParser
            , t = e.getOS()
            , r = e.getDevice();
          return "iOS" === t.name ? er.U7.Ios : "Android" === t.name ? er.U7.Android : "smarttv" === r.type ? er.U7.Tv : er.U7.Desktop
      }
      ;
      var Dn, Nn, Mn, jn, Fn, Ln = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, Un = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Bn {
          constructor(e, t) {
              this.gp = e,
              Dn.add(this),
              Nn.set(this, void 0),
              Mn.set(this, []),
              jn.set(this, {}),
              Ln(this, Nn, t, "f"),
              Un(this, Nn, "f").on("setExperiments", (e => Un(this, Dn, "m", Fn).call(this, e.playerExperiments)))
          }
          get map() {
              return Object.assign({}, Un(this, jn, "f"))
          }
          has(e, t) {
              return e in Un(this, jn, "f") && Un(this, jn, "f")[e] === t
          }
      }
      Nn = new WeakMap,
      Mn = new WeakMap,
      jn = new WeakMap,
      Dn = new WeakSet,
      Fn = function(e) {
          if (0 === e.length)
              return;
          let t = !1;
          const r = {};
          Ln(this, jn, e.reduce(( (e, n, i) => {
              var s;
              return e[n.experiment] = n.cohort,
              r[`${this.gp.name.toUpperCase()}_AB_${n.experiment}`] = n.cohort,
              t || (null === (s = Un(this, Mn, "f")[i]) || void 0 === s ? void 0 : s.cohort) === n.cohort || (t = !0),
              e
          }
          ), {}), "f"),
          Ln(this, Mn, e, "f"),
          this.gp.analytics._experimentsVisitParams = r,
          t && this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)
      }
      ;
      var Gn, $n, Wn, Vn, qn = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      }, zn = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Yn extends m.Z {
          constructor(e, t) {
              super(),
              this.gp = e,
              Gn.add(this),
              $n.set(this, void 0),
              Wn.set(this, []),
              qn(this, $n, t, "f"),
              zn(this, $n, "f").on("setPlayerSegments", (e => zn(this, Gn, "m", Vn).call(this, e.playerSegments, e.enterSegments, e.leftSegments)))
          }
          get list() {
              return [...zn(this, Wn, "f")]
          }
          has(e) {
              return zn(this, Wn, "f").includes(e)
          }
      }
      $n = new WeakMap,
      Wn = new WeakMap,
      Gn = new WeakSet,
      Vn = function(e, t, r) {
          (0 === zn(this, Wn, "f").length && e.length > 0 || t.length > 0 || r.length > 0) && (this.gp.analytics._segmentsVisitParams = e.reduce(( (e, t) => (e[`GP_SEGMENT_${t}`] = "1",
          e)), {}),
          this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)),
          qn(this, Wn, e, "f"),
          t.forEach((e => this._events.emit("enter", e))),
          r.forEach((e => this._events.emit("leave", e)))
      }
      ;
      var Kn, Jn, Zn, Hn, Xn, Qn, ei, ti, ri = function(e, t, r, n) {
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
      }, ni = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }, ii = function(e, t, r, n, i) {
          if ("m" === n)
              throw new TypeError("Private method is not writable");
          if ("a" === n && !i)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
          r
      };
      class si extends m.Z {
          constructor({projectId: e, publicToken: t, onReady: r}={}, n) {
              var i, s;
              super(),
              Kn.add(this),
              this.setBackground = Zt,
              this.name = "",
              this.isPaused = !1,
              this.isGameplay = !1,
              this.isGameStarted = !1,
              this.logger = u.kg,
              Jn.set(this, void 0),
              Zn.set(this, void 0),
              Hn.set(this, void 0),
              Xn.set(this, void 0),
              this._params = null === (s = new URL((null === (i = document.currentScript) || void 0 === i ? void 0 : i.src) || document.URL)) || void 0 === s ? void 0 : s.searchParams,
              this.projectId = null != e ? e : Number(this._params.get("projectId")),
              this.publicToken = null != t ? t : this._params.get("publicToken"),
              this.onReady = r,
              ni(this, Kn, "m", Qn).call(this, n)
          }
          get nativeSDK() {
              return this.platform.getNativeSDK()
          }
          get serverTime() {
              return new Date(ni(this, Xn, "f")).toISOString()
          }
          get isDev() {
              var e;
              return (null === (e = ni(this, Zn, "f")) || void 0 === e ? void 0 : e.isDev) || !1
          }
          get isAllowedOrigin() {
              var e;
              return (null === (e = ni(this, Zn, "f")) || void 0 === e ? void 0 : e.isAllowedOrigin) || !1
          }
          get locale() {
              return d.h$[this.language] || "en-US"
          }
          get isPortrait() {
              return tr()
          }
          init(e) {
              return ri(this, void 0, void 0, (function*() {
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
                  yield Promise.all([this.ads.checkAdblock()]).catch(u.kg.warn),
                  e.done(this)
              }
              ))
          }
          loadOverlay() {
              return ri(this, void 0, void 0, (function*() {
                  this.overlay || (this.overlay = yield Promise.all([a.e(527), a.e(573), a.e(415)]).then(a.bind(a, 3390)).then((e => e.default(this))),
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
              return ri(this, void 0, void 0, (function*() {
                  if (this.language !== e)
                      try {
                          if (!Object.values(d.Uo).includes(e))
                              throw new Error(`Language ${e} not supported`);
                          this.language = e,
                          this._storage.saveLanguage(e),
                          this.overlay && (yield this.overlay.changeLanguage(e)),
                          ni(this, Hn, "f").setLang(this.language),
                          this._events.emit("change:language", this.language)
                      } catch (e) {
                          u.kg.error(e)
                      }
              }
              ))
          }
          changeAvatarGenerator() {
              return ri(this, void 0, void 0, (function*() {
                  u.kg.warn("[DEPRECATED]: changeAvatarGenerator")
              }
              ))
          }
          generateAvatar(e, t) {
              return (0,
              xt.Z)(this.avatarGeneratorTemplate, e, t)
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
              return ri(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameStarted || (this._events.emit("gameStart"),
                  this.isGameStarted = !0)
              }
              ))
          }
          gameplayStart() {
              return ri(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameplay || (this.isGameplay = !0,
                  this._events.emit("gameplayStart"))
              }
              ))
          }
          gameplayStop() {
              return ri(this, void 0, void 0, (function*() {
                  yield this.ready,
                  this.isGameplay && (this.isGameplay = !1,
                  this._events.emit("gameplayStop"))
              }
              ))
          }
      }
      function ai(e) {
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
      Jn = new WeakMap,
      Zn = new WeakMap,
      Hn = new WeakMap,
      Xn = new WeakMap,
      Kn = new WeakSet,
      Qn = function(e) {
          var s;
          return ri(this, void 0, void 0, (function*() {
              const o = (0,
              n._)();
              this.ready = o.ready;
              const c = (null === (s = this._params) || void 0 === s ? void 0 : s.get("callback")) || "onGPInit";
              this.ready.then((e => {
                  var t, r, n, i;
                  this.onReady ? this.onReady(e) : (null === (r = (t = window)[c]) || void 0 === r || r.call(t, e),
                  "onGSInit" !== c && (null === (i = (n = window).onGSInit) || void 0 === i || i.call(n, e)))
              }
              )),
              this.fullscreen = new se,
              this.analytics = new ce,
              this.leaderboard = new k(this),
              this.gamesCollections = new Me(this),
              this.documents = new nt(this),
              this.players = new Dt(this),
              this.isMobile = t()({
                  tablet: !0,
                  featureDetect: !0
              }),
              this.device = new xn;
              const l = navigator.language.slice(0, 2).toLowerCase();
              let {platformType: h, platformKey: f} = yield me()
                , p = Object.values(d.Uo).includes(l) ? l : null;
              h !== C.z.GAME_DISTRIBUTION && h !== C.z.GAMEPIX && h !== C.z.WG_PLAYGROUND || (p = d.Uo.EN);
              const v = h === C.z.VK && this.device.type === er.U7.Ios && "file:" === location.protocol ? "".replace("https", "vkcors") : "";
              this._storage = new y;
              const m = e.servicesChunk({
                  apiUrl: v,
                  projectId: this.projectId,
                  publicToken: this.publicToken,
                  lang: p || d.Uo.EN,
                  platformType: h,
                  platformKey: f,
                  storage: this._storage
              })
                , {apiClient: g, setupAnalytics: w} = m
                , b = function(e, t) {
                  var r = {};
                  for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                      var i = 0;
                      for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                          t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                  }
                  return r
              }(m, ["apiClient", "setupAnalytics"])
                , E = e => {
                  g.setPlayerData(e)
              }
              ;
              ii(this, Hn, g, "f"),
              this._services = b,
              this._pointersManager = new ar,
              ii(this, Jn, new Qt, "f");
              const P = {
                  gp: this,
                  setupStorage: e => {
                      const t = [new Se(this.projectId), ...e];
                      try {
                          null !== window.localStorage && t.push(new ke(this.projectId))
                      } catch (e) {}
                      return this._storage.setStorages(t),
                      this._storage.ready
                  }
                  ,
                  fetchConfig: e => ri(this, void 0, void 0, (function*() {
                      yield this._storage.ready;
                      const [t,r,n,i] = yield Promise.all([this._storage.loadLanguage(), this._storage.loadConfig(), this._storage.loadAdsInfo(), ni(this, Jn, "f").getLanguage(this.name)]);
                      return t || this._storage.saveLanguage(null),
                      this.language = i || t || e || p || d.Uo.EN,
                      ni(this, Hn, "f").setLang(this.language),
                      this._services.projectService.fetchConfig().then((e => {
                          const t = e || r
                            , {platformConfig: n} = t;
                          return h !== n.type && ni(this, Hn, "f").setPlatform(n.type, n.tag),
                          t
                      }
                      )).catch((e => (console.error(e),
                      r)))
                  }
                  ))
              };
              // if (e.platformType && e.platformType !== h)
              //     throw new Error("wrong platform type");
              var S, _;
              (e.platformChunk ? e.platformChunk(P) : e.preparePlatform({
                  platformType: h,
                  tools: P
              })).then((e => ri(this, void 0, void 0, (function*() {
                  const {adsAdapter: t, playerAdapter: n, platformAdapter: s, socialsAdapter: c, paymentsAdapter: l, projectConfig: d, appAdapter: f} = e;
                  if (ii(this, Zn, d, "f"),
                  ii(this, Xn, Date.parse(d.serverTime), "f"),
                  N((e => {
                      ii(this, Xn, ni(this, Xn, "f") + e, "f")
                  }
                  )),
                  h !== C.z.GAMEPIX && h !== C.z.GAME_DISTRIBUTION && h !== C.z.WG_PLAYGROUND) {
                      const {counters: e} = w(d.config);
                      e.forEach((e => this.analytics.addCounter(e)))
                  }
                  this.avatarGenerator = d.config.avatarGenerator,
                  this.avatarGeneratorTemplate = d.config.avatarGeneratorTemplate,
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
                  }(d.config.showLoader),
                  this._storage.saveConfig(d);
                  const p = new Xr;
                  this.platform = new i(d.platformConfig,s),
                  this.ads = new r.Z(this,t,d),
                  this.app = new ve.Z(this,f,d),
                  this.socials = new pe(c,this,d),
                  this.channels = new tt(this,d),
                  this.player = new ie({},d.playerFields,n,this,p,E),
                  this.payments = new Oe.Z(this,p,l,d),
                  this.variables = new ct(this,s,d.gameVariables || []),
                  this.images = new kt(this,d.acl),
                  this.files = new It(this,d.acl),
                  this.achievements = new we.Z(this,p,d),
                  this.rewards = new Rr(this,p,d.rewards),
                  this.triggers = new Kr(this,p,d),
                  this.schedulers = new bn(this,p,d.schedulers),
                  this.segments = new Yn(this,p),
                  this.events = new On(this,p,d.events),
                  this.experiments = new Bn(this,p),
                  this.isDev ? (this.devtools = yield Promise.all([a.e(527), a.e(718)]).then(a.bind(a, 4070)).then((e => e.default(this, p, d))),
                  d.config.showReqCounter && ni(this, Hn, "f").addCounterListener((e => {
                      this.devtools.showCounter(e)
                  }
                  ))) : u.kg.stopCollect(),
                  ni(this, Kn, "m", ti).call(this),
                  ni(this, Kn, "m", ei).call(this),
                  this.init(o)
              }
              )))).catch(u.kg.error),
              S = () => this.pause(),
              _ = () => {
                  this.ads && (this.ads.isFullscreenPlaying || this.ads.isPreloaderPlaying || this.ads.isRewardedPlaying || this.resume())
              }
              ,
              Kt.addEventListener("statechange", (e => {
                  Jt.includes(e.newState) ? S() : _()
              }
              ))
          }
          ))
      }
      ,
      ei = function() {
          const {showOrientationOverlay: e, orientation: t} = ni(this, Zn, "f").config
            , r = e && this.isMobile && t != er.LH.Any
            , n = () => ri(this, void 0, void 0, (function*() {
              var e;
              r && !rr(t) ? (yield this.loadOverlay(),
              rr(t) || this.overlay.showOrientationOverlay(t)) : null === (e = this.overlay) || void 0 === e || e.closeOrientationOverlay()
          }
          ));
          var i;
          i = e => {
              this._events.emit("change:orientation", e),
              n()
          }
          ,
          window.matchMedia("(orientation: portrait)").addEventListener("change", ( () => requestAnimationFrame(( () => i(tr()))))),
          n()
      }
      ,
      ti = function() {
          return ri(this, void 0, void 0, (function*() {
              const {showUnsupportedOSOverlay: e, targetOS: t} = ni(this, Zn, "f").config;
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
      var oi = a(280);
      o()(oi.Z, {
          insert: "head",
          singleton: !1
      }),
      oi.Z.locals;
      const ci = "gp-gamedistribution-sticky";
      var li = function(e, t, r, n) {
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
      class hi {
          constructor(e) {
              this.config = e,
              this.app = function() {
                  const e = document.createElement("div");
                  e.id = "gs-gamedistribution",
                  document.body.appendChild(e);
                  const t = {
                      sticky: null
                  };
                  return window.addEventListener("resize", ( () => ai(t))),
                  {
                      banners: t,
                      createSticky(r) {
                          t.sticky || (t.sticky = function(t) {
                              const r = document.createElement("div");
                              r.className = `${ci} ${ci}_${t.position || "bottom"}`;
                              const n = document.createElement("div");
                              n.id = "responsive-banner-container",
                              n.className = `${ci}__creative`;
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
              }(),
              this.readyRewardedAd = (0,
              n._)()
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
              return li(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  return this.ready = e.ready,
                  window.GD_OPTIONS = {
                      gameId: this.config.appId,
                      onEvent: t => {
                          switch (t.name) {
                          case "SDK_READY":
                          case "SDK_ERROR":
                              e.done(this);
                              break;
                          case "SDK_REWARDED_WATCH_COMPLETE":
                              this.readyRewardedAd.done(!0);
                              break;
                          case "SDK_GAME_START":
                              this.readyRewardedAd.done(!1)
                          }
                      }
                  },
              
                  e.done(this),
                  e.ready
              }
              ))
          }
          getPlayer() {
              return li(this, void 0, void 0, (function*() {
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
              try {
                  this.wsdk.showAd(e).then(( () => t.done(!0))).catch((e => {
                      u.kg.error("[GameDistribution] failed to show interstitial ads:", e),
                      t.done(!1)
                  }
                  ))
              } catch (e) {
                  t.abort(e)
              }
              return t.ready
          }
          showFullscreen() {
              return this.showAd("interstitial")
          }
          showPreloader() {
              return this.showAd("interstitial")
          }
          showRewardedVideo() {
              this.readyRewardedAd = (0,
              n._)();
              try {
                  this.wsdk.showAd("rewarded").catch((e => {
                      u.kg.error("[GameDistribution] failed to show rewarded video:", e),
                      this.readyRewardedAd.done(!1)
                  }
                  ))
              } catch (e) {
                  this.readyRewardedAd.abort(e)
              }
              return this.readyRewardedAd.ready
          }
          showSticky() {
              const e = (0,
              n._)();
              try {
                  this.wsdk.showAd("display", {
                      containerId: "responsive-banner-container"
                  }).then(( () => e.done(!0))).catch((t => {
                      u.kg.error("[GameDistribution] failed to show sticky-banner:", t),
                      e.done(!1)
                  }
                  ))
              } catch (t) {
                  e.abort(t)
              }
              return e.ready
          }
      }
      var ui = function(e, t, r, n) {
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
      class di {
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
            return true;
            //   return ui(this, void 0, void 0, (function*() {
            //       return yield this.sdk.ready,
            //       this.sdk.showPreloader().catch(( () => !1))
            //   }
            //   ))
          }
          showFullscreen() {
              return ui(this, void 0, void 0, (function*() {
                  return yield this.sdk.ready,
                  this.sdk.showFullscreen().catch(( () => !1))
              }
              ))
          }
          async showRewardedVideo() {
            //   return ui(this, void 0, void 0, (function*() {
            //       return yield this.sdk.ready,
            //       this.sdk.showRewardedVideo().catch(( () => !1))
            //   }
            //   ))
            try {
                return await new Promise((resolve, reject) => {
                    // setTimeout(() => {
                        // if (Math.random() > 0.5) {
                        //     resolve(true);
                        // } else {
                        //     reject(false);
                        // }
                    // }, 1000);
                    wsdk.showAd("rewarded")
                    .then(()=>{
                        resolve(true);
                    })
                    .catch(()=>{
                        resolve(true);
                    })
                });
            } catch (error) {
                console.error("Error in showRewardedVideo:", error);
                return false;
            }
          }
          showSticky(e) {
              return ui(this, void 0, void 0, (function*() {
                  return !!this.sdk.app.banners.sticky || (this.sdk.app.createSticky(e),
                  this.sdk.showSticky())
              }
              ))
          }
          refreshSticky(e) {
              return ui(this, void 0, void 0, (function*() {
                  return this.sdk.app.closeSticky(),
                  this.showSticky(e)
              }
              ))
          }
          closeSticky() {
              return ui(this, void 0, void 0, (function*() {
                  yield this.sdk.ready,
                  this.sdk.app.closeSticky()
              }
              ))
          }
      }
      var fi = function(e, t, r, n) {
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
      class pi {
          constructor(e) {
              this.sdk = e,
              this.hasCredetials = !1,
              this.userId = "",
              this.isAuthorizedAtPlatform = !0
          }
          getPlayerAuthInfo() {
              return fi(this, void 0, void 0, (function*() {
                  const e = (0,
                  n._)();
                  return e.done({}),
                  e.ready
              }
              ))
          }
          getPlayerContext() {
              return fi(this, void 0, void 0, (function*() {
                  return {
                      platformData: yield this.getPlayerAuthInfo(),
                      key: ""
                  }
              }
              ))
          }
          loginPlayer() {
              return fi(this, void 0, void 0, (function*() {
                  return this.sdk.getPlayer()
              }
              ))
          }
          getPlayer() {
              return fi(this, void 0, void 0, (function*() {
                  return this.sdk.getPlayer()
              }
              ))
          }
          publishRecord(e) {}
          isPlatformAvatar() {
              return !1
          }
      }
      const vi = (e, t) => ({
          type: e,
          getLink: t
      })
        , yi = vi("facebook", (e => `//www.facebook.com/sharer/sharer.php?u=${e.url}`))
        , mi = vi("whatsapp", (e => `//api.whatsapp.com/send?text=${e.text}%20${e.url}`))
        , gi = vi("telegram", (e => `//t.me/share/url?url=${e.url}&text=${e.text}`))
        , wi = (vi("vkontakte", (e => `//vk.com/share.php?url=${e.url}&title=${e.text}&image=${e.image}`)),
      vi("twitter", (e => `//twitter.com/share?text=${e.text}&url=${e.url}`)))
        , bi = (vi("odnoklassniki", (e => `//connect.ok.ru/offer?url=${e.url}&title=${e.text}&imageUrl=${e.image}`)),
      vi("viber", (e => `viber://forward?text=${e.text}%20${e.url}`)))
        , Ei = (vi("moymir", (e => `//connect.mail.ru/share?url=${e.url}&title=${e.text}&image_url=${e.image}`)),
      [yi, wi, gi, mi, bi])
        , Pi = {
          success: !0,
          payload: {}
      };
      var Si = function(e, t, r, n) {
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
      class _i {
          constructor(e) {
              this.sdk = e,
              this.hasIntegratedAuth = !1,
              this.isExternalLinksAllowed = !1,
              this.isSecretCodeAuthAvailable = !1,
              this._hasAuthModal = !1,
              this.type = C.z.GAME_DISTRIBUTION,
              this.socialNetworks = Ei,
              this.isSupportsImageUploading = !1,
              this.hasAccountLinkingFeature = !1,
              this.isSupportsRemoteVariables = !1
          }
          getSDK() {
              return this.sdk
          }
          getNativeSDK() {
              return this.sdk.wsdk
          }
          requestPermissions() {
              return Si(this, void 0, void 0, (function*() {
                  return Pi
              }
              ))
          }
          uploadImage() {
              return null
          }
          getVariables() {
              return Si(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
      }
      class Ti {
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
      var Ai = function(e, t, r, n) {
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
      class ki {
          constructor(e) {
              this.sdk = e,
              this.isSupportsSubscriptions = !1,
              this.isSupportsPayments = !1,
              this.isServerValidation = !1
          }
          mapProducts(e, t) {
              return Ai(this, void 0, void 0, (function*() {
                  return t
              }
              ))
          }
          consumeAllExpired(e, t, r) {
              return Ai(this, void 0, void 0, (function*() {}
              ))
          }
          fetchPurchases() {
              return Ai(this, void 0, void 0, (function*() {
                  return {
                      payload: {},
                      purchases: []
                  }
              }
              ))
          }
          purchase(e) {
              return Ai(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          consume(e) {
              return Ai(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          subscribe(e, t) {
              return Ai(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
          unsubscribe(e, t) {
              return Ai(this, void 0, void 0, (function*() {
                  return {}
              }
              ))
          }
      }
      var Oi = function(e, t, r, n) {
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
      class Ci {
          constructor() {
              this.canAddShortcut = !1,
              this.canRequestReview = !1,
              this.isAlreadyReviewed = !1
          }
          addShortcut() {
              return Oi(this, void 0, void 0, (function*() {
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
              return Oi(this, void 0, void 0, (function*() {}
              ))
          }
      }
      var Ri, Ii = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class xi {
          constructor(e) {
              Ri.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Ri, e, "f")
          }
          fetchConfig() {
              return Ii(this, Ri, "f").fetchConfig()
          }
          fetchVariables() {
              return e = this,
              t = void 0,
              n = function*() {
                  return {
                      items: yield Ii(this, Ri, "f").fetchGameVariables()
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
      Ri = new WeakMap;
      var Di, Ni = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      class Mi {
          constructor(e) {
              Di.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Di, e, "f")
          }
          setProgress(e) {
              return Ni(this, Di, "f").setAchievementProgress(e)
          }
          unlock(e) {
              return Ni(this, Di, "f").unlockAchievement(e)
          }
      }
      Di = new WeakMap;
      var ji = function(e, t, r, n) {
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
      const Fi = "method_not_supported";
      class Li {
          constructor(e, t, r, n, i, s) {
              this.apiUrl = e,
              this.projectId = t,
              this.publicToken = r,
              this.lang = n,
              this.platformType = i,
              this.platformKey = s
          }
          get reqCounter() {
              return 0
          }
          set reqCounter(e) {}
          addCounterListener(e) {}
          setLang(e) {}
          setPlayerData(e) {}
          ping(e) {}
          setPlatform(e, t) {}
          signQuery(e=null) {
              return ji(this, void 0, void 0, (function*() {}
              ))
          }
          fetch(e, t, r) {
              return ji(this, void 0, void 0, (function*() {
                  return Promise.resolve({})
              }
              ))
          }
          fetchMany(e, t, r={}) {
              return ji(this, void 0, void 0, (function*() {
                  return Promise.resolve({})
              }
              ))
          }
      }
      class Ui {
          constructor() {}
          sync() {
              throw Fi
          }
          fetch() {
              throw Fi
          }
          getPaymentLink() {
              throw Fi
          }
          purchase() {
              throw Fi
          }
          findProduct() {
              throw Fi
          }
          consume() {
              throw Fi
          }
          cancelSubscription() {
              throw Fi
          }
          resumeSubscription() {
              throw Fi
          }
      }
      class Bi {
          constructor() {}
          fetch() {
              throw Fi
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
          constructor() {}
          getRating() {
              return Gi(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
          getPlayerRating() {
              return Gi(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
          getRatingVariant() {
              return Gi(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
          getPlayerRatingVariant() {
              return Gi(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
          publishRecord() {
              return Gi(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
      }
      class Wi {
          constructor() {}
          fetch() {
              throw Fi
          }
      }
      class Vi {
          constructor() {}
          fetch() {
              throw Fi
          }
          upload() {
              throw Fi
          }
          uploadByURL() {
              throw Fi
          }
          saveByURL() {
              throw Fi
          }
      }
      class qi {
          constructor() {}
          fetch() {
              throw Fi
          }
          upload() {
              throw Fi
          }
      }
      var zi;
      class Yi {
          constructor(e) {
              zi.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, zi, e, "f")
          }
          give(e) {
              return function(e, t, r, n) {
                  if ("a" === r && !n)
                      throw new TypeError("Private accessor was defined without a getter");
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                      throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
              }(this, zi, "f").giveReward(e)
          }
      }
      zi = new WeakMap;
      var Ki;
      class Ji {
          constructor(e) {
              Ki.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Ki, e, "f")
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
                  }(this, Ki, "f").joinEvent(e)
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
      Ki = new WeakMap;
      var Zi;
      class Hi {
          constructor(e) {
              Zi.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Zi, e, "f")
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
                  }(this, Zi, "f").registerScheduler(e)
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
      Zi = new WeakMap;
      const Xi = new TextEncoder;
      var Qi, es = function(e, t, r, n) {
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
      }, ts = function(e, t, r, n) {
          if ("a" === r && !n)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      };
      let rs = !0;
      class ns {
          constructor(e) {
              Qi.set(this, void 0),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, Qi, e, "f")
          }
          sync({playerState: e, override: t, acceptedRewards: r, givenRewards: n, claimedTriggers: i, claimedSchedulersDays: s}, {withToken: a}) {
              ( (e, t, r) => {
                  const n = Xi.encode(JSON.stringify(e)).length;
                  if (n > 1048576 && u.kg.warn(`Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round(n / 1024 / 1024 * 100) / 100} MB`),
                  n > 2097152)
                      throw new Error("max_data_limit_exceeded")
              }
              )(e);
              const o = ts(this, Qi, "f").sync({
                  playerState: e,
                  override: t,
                  acceptedRewards: r,
                  givenRewards: n,
                  claimedTriggers: i,
                  claimedSchedulersDays: s,
                  isFirstRequest: rs
              });
              return rs = !1,
              o
          }
          getPlayer({withToken: e}) {
              const t = ts(this, Qi, "f").getPlayer({
                  isFirstRequest: rs
              });
              return rs = !1,
              t
          }
          fetchFields() {
              return es(this, void 0, void 0, (function*() {
                  return {
                      items: yield ts(this, Qi, "f").fetchPlayerFields()
                  }
              }
              ))
          }
          checkCode({secretCode: e}) {
              return es(this, void 0, void 0, (function*() {
                  return {
                      success: !1
                  }
              }
              ))
          }
          fetchPlayers({ids: e}) {
              return es(this, void 0, void 0, (function*() {
                  throw Fi
              }
              ))
          }
      }
      Qi = new WeakMap;
      class is {
          constructor() {}
          fetchInvites() {
              throw Fi
          }
          fetchChannelInvites() {
              throw Fi
          }
          fetchSentInvites() {
              throw Fi
          }
          sendInvite() {
              throw Fi
          }
          cancelInvite() {
              throw Fi
          }
          acceptInvite() {
              throw Fi
          }
          rejectInvite() {
              throw Fi
          }
      }
      class ss {
          fetchJoinRequests() {
              throw Fi
          }
          fetchSentJoinRequests() {
              throw Fi
          }
          acceptJoinRequest() {
              throw Fi
          }
          rejectJoinRequest() {
              throw Fi
          }
      }
      class as {
          mute() {
              throw Fi
          }
          unmute() {
              throw Fi
          }
          fetchMembers() {
              throw Fi
          }
          join() {
              throw Fi
          }
          cancelJoin() {
              throw Fi
          }
          leave() {
              throw Fi
          }
          kick() {
              throw Fi
          }
      }
      class os {
          constructor() {}
          fetchMessages() {
              throw Fi
          }
          fetchPersonalMessages() {
              throw Fi
          }
          fetchFeedMessages() {
              throw Fi
          }
          sendMessage() {
              throw Fi
          }
          sendFeedMessage() {
              throw Fi
          }
          sendPersonalMessage() {
              throw Fi
          }
          editMessage() {
              throw Fi
          }
          deleteMessage() {
              throw Fi
          }
      }
      class cs {
          constructor() {}
          fetchChannel() {
              throw Fi
          }
          fetchPersonalChannel() {
              throw Fi
          }
          fetchFeedChannel() {
              throw Fi
          }
          fetchChannels() {
              throw Fi
          }
          createChannel() {
              throw Fi
          }
          updateChannel() {
              throw Fi
          }
          deleteChannel() {
              throw Fi
          }
      }
      class ls {
          constructor() {
              this.channels = new cs,
              this.messages = new os,
              this.members = new as,
              this.invites = new is,
              this.joinRequests = new ss
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
      var hs = a(6609)
        , us = a.n(hs)
        , ds = a(9639)
        , fs = a.n(ds);
      const ps = {
          [er.N0.Eq]: (e, t) => t.some((t => e == t)),
          [er.N0.Ne]: (e, t) => t.every((t => e != t)),
          [er.N0.Lt]: (e, t) => e < t[0],
          [er.N0.Gt]: (e, t) => e > t[0],
          [er.N0.Lte]: (e, t) => e <= t[0],
          [er.N0.Gte]: (e, t) => e >= t[0]
      }
        , vs = {
          [er.CP.EntityStat]: (e, t, r) => {
              switch (r.type) {
              case er.zn.Event:
                  {
                      const n = e.playerEvents.find((e => e.eventId === r.entityId));
                      if (!n)
                          throw new Error(`Player does not participate in ID ${r.entityId} event`);
                      return n.stats[t.key] || 0
                  }
              case er.zn.Scheduler:
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
          [er.CP.PlayerStat]: (e, t, r) => e.stats[t.key] || 0,
          [er.CP.PlayerField]: (e, t, r) => e.state[t.key] || ""
      };
      const ys = {
          [er.W2.Add]: (e, t) => (Number.isNaN(t.value) ? u.kg.warn(`Invalid value for mutation, key ${t.key}: ${t.value}`) : e[t.key] += t.value,
          e),
          [er.W2.Set]: (e, t) => (e[t.key] = t.value,
          e),
          [er.W2.Remove]: (e, t) => (e[t.key] -= t.value,
          e)
      }
        , ms = {
          [er.x1.PlayerField]: (e, t) => ys[t.action](e, t)
      };
      var gs;
      class ws {
          constructor(e) {
              this.game = e,
              gs.set(this, ( () => {}
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
                          const r = e.type === er.OB.ActiveDays ? t.stats.activeDays : t.stats.activeDaysConsecutive
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
                                  const n = vs[r.type];
                                  return (0,
                                  ps[r.operator])(n(e, r, t), r.value)
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
                      n && (n.daysClaimed.includes(e.day) || r.days < e.day || (r.type == er.OB.ActiveDays && n.stats.activeDays >= e.day || r.type == er.OB.ActiveDaysConsecutive && n.stats.activeDaysConsecutive >= e.day) && (n.daysClaimed.push(e.day),
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
              }(this, gs, "f").call(this),
              function(e, t, r, n, i) {
                  if ("m" === n)
                      throw new TypeError("Private method is not writable");
                  if ("a" === n && !i)
                      throw new TypeError("Private accessor was defined without a setter");
                  if ("function" == typeof t ? e !== t || !i : !t.has(e))
                      throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r)
              }(this, gs, N((e => {
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
              const i = r.type === er.OB.ActiveDays ? "activeDays" : "activeDaysConsecutive";
              (t || r.isRepeat && n.stats[i] > r.days) && (n.stats = {
                  activeDays: 1,
                  activeDaysConsecutive: 1
              },
              n.daysClaimed = [])
          }
          updateModifiedAt() {
              let e = !1;
              const [t,r] = (n = this.player.state.modifiedAt,
              [fs()().isAfter(n, "day"), fs()().diff(n, "day", !0)]);
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
              const r = fs()()
                , n = fs()(t.dateStart)
                , i = fs()(t.dateEnd);
              return r.isAfter(n) && r.isBefore(i)
          }
          resetSession() {
              this.player.stats.playtimeToday = 0,
              this.player.sessionStart = (new Date).toISOString()
          }
          giveBonus(e) {
              switch (e.type) {
              case er.Do.Reward:
                  this.giveReward(e.id, 1, !0);
                  break;
              case er.Do.Achievement:
                  this.rewardsData.givenRewards.push(e.id),
                  this.giveAchievement(e.id);
                  break;
              case er.Do.Product:
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
                  expiredAt: "",
                  gift: !0,
                  subscribed: !1
              };
              t.isSubscription && (r.expiredAt = fs()().add(t.period, "days").toISOString()),
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
                  const r = ms[t.type];
                  if (!r)
                      throw new Error(`Unknown mutation type: ${t.type}`);
                  return r(e, t)
              }(this.player.state, e)
          }
      }
      gs = new WeakMap;
      var bs = function(e, t, r, n) {
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
      const Es = "ofl:player_allData";
      class Ps {
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
                  throw u.kg.error('failed to parse project config "./gs-config.json"', e),
                  e
              }
              return e.serverTime = (new Date).toISOString(),
              this.gameState.config = e,
              this.readyTransaction.done(),
              e
          }
          fetchConfig() {
              var e;
              return bs(this, void 0, void 0, (function*() {
                  const t = (null === (e = window.__GS_BOOT_CFG__) || void 0 === e ? void 0 : e.version) || 0;
                  return fetch(`./gs-config.json?v=${t}`).then((e => e.json())).then((e => this.setProjectConfig(e))).catch(( () => bs(this, void 0, void 0, (function*() {
                      const e = yield this.storage.loadConfig();
                      return this.setProjectConfig(e)
                  }
                  ))))
              }
              ))
          }
          fetchGameVariables() {
              return bs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  us()(this.gameState.config.gameVariables)
              }
              ))
          }
          fetchPlayerFields() {
              return bs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  this.gameState.config.playerFields
              }
              ))
          }
          sync(e) {
              return bs(this, void 0, void 0, (function*() {
                  if (yield this.ready,
                  this.player || (yield this.getPlayer({
                      isFirstRequest: e.isFirstRequest
                  })),
                  !this.player)
                      throw new Error("player_not_found");
                  const t = yield this.player.sync(e);
                  return yield this.savePlayer(t),
                  us()(t)
              }
              ))
          }
          getPlayer({isFirstRequest: e}) {
              return bs(this, void 0, void 0, (function*() {
                  return yield this.ready,
                  this.storage.get(this.storage.localStorages, Es).then((e => bs(this, void 0, void 0, (function*() {
                      if (e)
                          return e;
                      const t = {
                          state: {
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
                          },
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
                          leftSegments: []
                      };
                      return yield this.savePlayer(t),
                      t
                  }
                  )))).then((t => (this._setPlayer(t, e),
                  us()(t))))
              }
              ))
          }
          setAchievementProgress({id: e, tag: t, progress: r}) {
              return bs(this, void 0, void 0, (function*() {
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
              return bs(this, void 0, void 0, (function*() {
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
              return bs(this, void 0, void 0, (function*() {
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
              return bs(this, void 0, void 0, (function*() {
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
              return bs(this, void 0, void 0, (function*() {
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
          _setPlayer(e, t) {
              this.player || (this.player = new ws(this.gameState.config)),
              this.player.setPlayer({
                  player: e,
                  isFirstRequest: t
              }) && this.savePlayer(e)
          }
          savePlayer(e) {
              return this.storage.set(this.storage.localStorages, Es, e)
          }
      }
      u.kg.info("GameDistribution Special Build"),
      window.__SDKProvider = "GamePush",
      new class extends si {
          constructor() {
              super(...arguments),
              this.name = "gp"
          }
      }
      (void 0,{
          platformType: C.z.GAME_DISTRIBUTION,
          platformChunk: function(e) {
              return t = this,
              r = void 0,
              i = function*() {
                  const [,t] = yield Promise.all([e.setupStorage([]), e.fetchConfig()])
                    , r = new hi({
                      appId: t.platformConfig.appId
                  });
                  yield r.init();
                  const n = new pi(r);
                  return {
                      adsAdapter: new di(r),
                      appAdapter: new Ci,
                      playerAdapter: n,
                      platformAdapter: new _i(r),
                      socialsAdapter: new Ti(r),
                      paymentsAdapter: new ki(r),
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
              const t = new Li(e.apiUrl,e.projectId,e.publicToken,e.lang,e.platformType,e.platformKey)
                , r = new Ps(e.storage);
              return {
                  apiClient: t,
                  setupAnalytics: () => ({
                      counters: []
                  }),
                  projectService: new xi(r),
                  achievementsService: new Mi(r),
                  paymentsService: new Ui,
                  gamesCollectionsService: new Bi,
                  leaderboardsService: new $i,
                  documentsService: new Wi,
                  imagesService: new Vi,
                  filesService: new qi,
                  rewardsService: new Yi(r),
                  eventsService: new Ji(r),
                  schedulersService: new Hi(r),
                  playerService: new ns(r),
                  channelsService: new ls
              }
          }
      })
  }
  )()
}
)();
