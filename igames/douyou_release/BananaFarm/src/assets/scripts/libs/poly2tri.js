(function(t) {
    "object" == ("undefined" == typeof exports ? "undefined" : typeof exports) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).poly2tri = t()
})(function() {
    return function t(n, e, i) {
        function o(s, p) {
            if (!e[s]) {
                if (!n[s]) {
                    var a = "function" == typeof require && require;
                    if (!p && a) return a(s, !0);
                    if (r) return r(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = e[s] = {
                    exports: {}
                };
                n[s][0].call(u.exports, function(t) {
                    return o(n[s][1][t] || t)
                }, u, u.exports, t, n, e, i)
            }
            return e[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
        return o
    }({
        1: [function(t, n) {
            n.exports = {
                version: "1.5.0"
            }
        }, {}],
        2: [function(t, n) {
            "use strict";
            var e = function(t, n) {
                this.head_ = t, this.tail_ = n, this.search_node_ = t
            };
            e.prototype.head = function() {
                return this.head_
            }, e.prototype.setHead = function(t) {
                this.head_ = t
            }, e.prototype.tail = function() {
                return this.tail_
            }, e.prototype.setTail = function(t) {
                this.tail_ = t
            }, e.prototype.search = function() {
                return this.search_node_
            }, e.prototype.setSearch = function(t) {
                this.search_node_ = t
            }, e.prototype.findSearchNode = function() {
                return this.search_node_
            }, e.prototype.locateNode = function(t) {
                var n = this.search_node_;
                if (t < n.value) {
                    for (; n = n.prev;)
                        if (t >= n.value) return this.search_node_ = n, n
                } else
                    for (; n = n.next;)
                        if (t < n.value) return this.search_node_ = n.prev, n.prev;
                return null
            }, e.prototype.locatePoint = function(t) {
                var n = t.x,
                    e = this.findSearchNode(n),
                    i = e.point.x;
                if (n === i) {
                    if (t !== e.point)
                        if (t === e.prev.point) e = e.prev;
                        else {
                            if (t !== e.next.point) throw new Error("poly2tri Invalid AdvancingFront.locatePoint() call");
                            e = e.next
                        }
                } else if (n < i)
                    for (;
                        (e = e.prev) && t !== e.point;);
                else
                    for (;
                        (e = e.next) && t !== e.point;);
                return e && (this.search_node_ = e), e
            }, n.exports = e, n.exports.Node = function(t, n) {
                this.point = t, this.triangle = n || null, this.next = null, this.prev = null, this.value = t.x
            }
        }, {}],
        3: [function(t, n) {
            "use strict";
            n.exports = function(t, n) {
                if (!t) throw new Error(n || "Assert Failed")
            }
        }, {}],
        4: [function(t, n) {
            "use strict";
            var e = t("./xy"),
                i = function(t, n) {
                    this.x = +t || 0, this.y = +n || 0, this._p2t_edge_list = null
                };
            i.prototype.toString = function() {
                return e.toStringBase(this)
            }, i.prototype.toJSON = function() {
                return {
                    x: this.x,
                    y: this.y
                }
            }, i.prototype.clone = function() {
                return new i(this.x, this.y)
            }, i.prototype.set_zero = function() {
                return this.x = 0, this.y = 0, this
            }, i.prototype.set = function(t, n) {
                return this.x = +t || 0, this.y = +n || 0, this
            }, i.prototype.negate = function() {
                return this.x = -this.x, this.y = -this.y, this
            }, i.prototype.add = function(t) {
                return this.x += t.x, this.y += t.y, this
            }, i.prototype.sub = function(t) {
                return this.x -= t.x, this.y -= t.y, this
            }, i.prototype.mul = function(t) {
                return this.x *= t, this.y *= t, this
            }, i.prototype.length = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, i.prototype.normalize = function() {
                var t = this.length();
                return this.x /= t, this.y /= t, t
            }, i.prototype.equals = function(t) {
                return this.x === t.x && this.y === t.y
            }, i.negate = function(t) {
                return new i(-t.x, -t.y)
            }, i.add = function(t, n) {
                return new i(t.x + n.x, t.y + n.y)
            }, i.sub = function(t, n) {
                return new i(t.x - n.x, t.y - n.y)
            }, i.mul = function(t, n) {
                return new i(t * n.x, t * n.y)
            }, i.cross = function(t, n) {
                return "number" == typeof t ? "number" == typeof n ? t * n : new i(-t * n.y, t * n.x) : "number" == typeof n ? new i(n * t.y, -n * t.x) : t.x * n.y - t.y * n.x
            }, i.toString = e.toString, i.compare = e.compare, i.cmp = e.compare, i.equals = e.equals, i.dot = function(t, n) {
                return t.x * n.x + t.y * n.y
            }, n.exports = i
        }, {
            "./xy": 11
        }],
        5: [function(t, n) {
            "use strict";
            var e = t("./xy"),
                i = function(t, n) {
                    this.name = "PointError", this.points = n = n || [], this.message = t || "Invalid Points!";
                    for (var i = 0; i < n.length; i++) this.message += " " + e.toString(n[i])
                };
            (i.prototype = new Error).constructor = i, n.exports = i
        }, {
            "./xy": 11
        }],
        6: [function(t, n, e) {
            (function(n) {
                "use strict";
                var i = n.poly2tri;
                e.noConflict = function() {
                    return n.poly2tri = i, e
                }, e.VERSION = t("../dist/version.json").version, e.PointError = t("./pointerror"), e.Point = t("./point"), e.Triangle = t("./triangle"), e.SweepContext = t("./sweepcontext");
                var o = t("./sweep");
                e.triangulate = o.triangulate, e.sweep = {
                    Triangulate: o.triangulate
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../dist/version.json": 1,
            "./point": 4,
            "./pointerror": 5,
            "./sweep": 7,
            "./sweepcontext": 8,
            "./triangle": 9
        }],
        7: [function(t, n, e) {
            "use strict";
            var i = t("./assert"),
                o = t("./pointerror"),
                r = t("./triangle"),
                s = t("./advancingfront").Node,
                p = t("./utils"),
                a = p.EPSILON,
                h = p.Orientation,
                u = p.orient2d,
                d = p.inScanArea,
                g = p.isAngleObtuse;

            function f(t) {
                var n, e = t.pointCount();
                for (n = 1; n < e; ++n)
                    for (var i = t.getPoint(n), o = c(t, i), r = i._p2t_edge_list, s = 0; r && s < r.length; ++s) _(t, r[s], o)
            }

            function l(t) {
                for (var n = t.front().head().next.triangle, e = t.front().head().next.point; !n.getConstrainedEdgeCW(e);) n = n.neighborCCW(e);
                t.meshClean(n)
            }

            function c(t, n) {
                var e = t.locateNode(n),
                    i = v(t, n, e);
                return n.x <= e.point.x + a && C(t, e), b(t, i), i
            }

            function _(t, n, e) {
                t.edge_event.constrained_edge = n, t.edge_event.right = n.p.x > n.q.x, x(e.triangle, n.p, n.q) || (q(t, n, e), y(t, n.p, n.q, e.triangle, n.q))
            }

            function y(t, n, e, i, r) {
                if (!x(i, n, e)) {
                    var s = i.pointCCW(r),
                        p = u(e, s, n);
                    if (p === h.COLLINEAR) throw new o("poly2tri EdgeEvent: Collinear not supported!", [e, s, n]);
                    var a = i.pointCW(r),
                        d = u(e, a, n);
                    if (d === h.COLLINEAR) throw new o("poly2tri EdgeEvent: Collinear not supported!", [e, a, n]);
                    p === d ? y(t, n, e, i = p === h.CW ? i.neighborCCW(r) : i.neighborCW(r), r) : F(t, n, e, i, r)
                }
            }

            function x(t, n, e) {
                var i = t.edgeIndex(n, e);
                if (-1 !== i) {
                    t.markConstrainedEdgeByIndex(i);
                    var o = t.getNeighbor(i);
                    return o && o.markConstrainedEdgeByPoints(n, e), !0
                }
                return !1
            }

            function v(t, n, e) {
                var i = new r(n, e.point, e.next.point);
                i.markNeighbor(e.triangle), t.addToMap(i);
                var o = new s(n);
                return o.next = e.next, o.prev = e, e.next.prev = o, e.next = o, W(t, i) || t.mapTriangleToNodes(i), o
            }

            function C(t, n) {
                var e = new r(n.prev.point, n.point, n.next.point);
                e.markNeighbor(n.prev.triangle), e.markNeighbor(n.triangle), t.addToMap(e), n.prev.next = n.next, n.next.prev = n.prev, W(t, e) || t.mapTriangleToNodes(e)
            }

            function b(t, n) {
                for (var e = n.next; e.next && !g(e.point, e.next.point, e.prev.point);) C(t, e), e = e.next;
                for (e = n.prev; e.prev && !g(e.point, e.next.point, e.prev.point);) C(t, e), e = e.prev;
                n.next && n.next.next && m(n) && P(t, n)
            }

            function m(t) {
                var n = t.point.x - t.next.next.point.x,
                    e = t.point.y - t.next.next.point.y;
                return i(e >= 0, "unordered y"), n >= 0 || Math.abs(n) < e
            }

            function W(t, n) {
                for (var e = 0; e < 3; ++e)
                    if (!n.delaunay_edge[e]) {
                        var i = n.getNeighbor(e);
                        if (i) {
                            var o = n.getPoint(e),
                                r = i.oppositePoint(n, o),
                                s = i.index(r);
                            if (i.constrained_edge[s] || i.delaunay_edge[s]) {
                                n.constrained_edge[e] = i.constrained_edge[s];
                                continue
                            }
                            if (E(o, n.pointCCW(o), n.pointCW(o), r)) {
                                n.delaunay_edge[e] = !0, i.delaunay_edge[s] = !0, w(n, o, i, r);
                                var p = !W(t, n);
                                return p && t.mapTriangleToNodes(n), (p = !W(t, i)) && t.mapTriangleToNodes(i), n.delaunay_edge[e] = !1, i.delaunay_edge[s] = !1, !0
                            }
                        }
                    }
                return !1
            }

            function E(t, n, e, i) {
                var o = t.x - i.x,
                    r = t.y - i.y,
                    s = n.x - i.x,
                    p = n.y - i.y,
                    a = o * p - s * r;
                if (a <= 0) return !1;
                var h = e.x - i.x,
                    u = e.y - i.y,
                    d = h * r - o * u;
                return !(d <= 0) && (o * o + r * r) * (s * u - h * p) + (s * s + p * p) * d + (h * h + u * u) * a > 0
            }

            function w(t, n, e, i) {
                var o, r, s, p, a, h, u, d, g, f, l, c;
                o = t.neighborCCW(n), r = t.neighborCW(n), s = e.neighborCCW(i), p = e.neighborCW(i), a = t.getConstrainedEdgeCCW(n), h = t.getConstrainedEdgeCW(n), u = e.getConstrainedEdgeCCW(i), d = e.getConstrainedEdgeCW(i), g = t.getDelaunayEdgeCCW(n), f = t.getDelaunayEdgeCW(n), l = e.getDelaunayEdgeCCW(i), c = e.getDelaunayEdgeCW(i), t.legalize(n, i), e.legalize(i, n), e.setDelaunayEdgeCCW(n, g), t.setDelaunayEdgeCW(n, f), t.setDelaunayEdgeCCW(i, l), e.setDelaunayEdgeCW(i, c), e.setConstrainedEdgeCCW(n, a), t.setConstrainedEdgeCW(n, h), t.setConstrainedEdgeCCW(i, u), e.setConstrainedEdgeCW(i, d), t.clearNeighbors(), e.clearNeighbors(), o && e.markNeighbor(o), r && t.markNeighbor(r), s && t.markNeighbor(s), p && e.markNeighbor(p), t.markNeighbor(e)
            }

            function P(t, n) {
                for (u(n.point, n.next.point, n.next.next.point) === h.CCW ? t.basin.left_node = n.next.next : t.basin.left_node = n.next, t.basin.bottom_node = t.basin.left_node; t.basin.bottom_node.next && t.basin.bottom_node.point.y >= t.basin.bottom_node.next.point.y;) t.basin.bottom_node = t.basin.bottom_node.next;
                if (t.basin.bottom_node !== t.basin.left_node) {
                    for (t.basin.right_node = t.basin.bottom_node; t.basin.right_node.next && t.basin.right_node.point.y < t.basin.right_node.next.point.y;) t.basin.right_node = t.basin.right_node.next;
                    t.basin.right_node !== t.basin.bottom_node && (t.basin.width = t.basin.right_node.point.x - t.basin.left_node.point.x, t.basin.left_highest = t.basin.left_node.point.y > t.basin.right_node.point.y, N(t, t.basin.bottom_node))
                }
            }

            function N(t, n) {
                if (!T(t, n) && (C(t, n), n.prev !== t.basin.left_node || n.next !== t.basin.right_node)) {
                    if (n.prev === t.basin.left_node) {
                        if (u(n.point, n.next.point, n.next.next.point) === h.CW) return;
                        n = n.next
                    } else if (n.next === t.basin.right_node) {
                        if (u(n.point, n.prev.point, n.prev.prev.point) === h.CCW) return;
                        n = n.prev
                    } else n = n.prev.point.y < n.next.point.y ? n.prev : n.next;
                    N(t, n)
                }
            }

            function T(t, n) {
                var e;
                return e = t.basin.left_highest ? t.basin.left_node.point.y - n.point.y : t.basin.right_node.point.y - n.point.y, t.basin.width > e
            }

            function q(t, n, e) {
                t.edge_event.right ? I(t, n, e) : D(t, n, e)
            }

            function I(t, n, e) {
                for (; e.next.point.x < n.p.x;) u(n.q, e.next.point, n.p) === h.CCW ? k(t, n, e) : e = e.next
            }

            function k(t, n, e) {
                e.point.x < n.p.x && (u(e.point, e.next.point, e.next.next.point) === h.CCW ? A(t, n, e) : (S(t, n, e), k(t, n, e)))
            }

            function A(t, n, e) {
                C(t, e.next), e.next.point !== n.p && u(n.q, e.next.point, n.p) === h.CCW && u(e.point, e.next.point, e.next.next.point) === h.CCW && A(t, n, e)
            }

            function S(t, n, e) {
                u(e.next.point, e.next.next.point, e.next.next.next.point) === h.CCW ? A(t, n, e.next) : u(n.q, e.next.next.point, n.p) === h.CCW && S(t, n, e.next)
            }

            function D(t, n, e) {
                for (; e.prev.point.x > n.p.x;) u(n.q, e.prev.point, n.p) === h.CW ? O(t, n, e) : e = e.prev
            }

            function O(t, n, e) {
                e.point.x > n.p.x && (u(e.point, e.prev.point, e.prev.prev.point) === h.CW ? B(t, n, e) : (L(t, n, e), O(t, n, e)))
            }

            function L(t, n, e) {
                u(e.prev.point, e.prev.prev.point, e.prev.prev.prev.point) === h.CW ? B(t, n, e.prev) : u(n.q, e.prev.prev.point, n.p) === h.CW && L(t, n, e.prev)
            }

            function B(t, n, e) {
                C(t, e.prev), e.prev.point !== n.p && u(n.q, e.prev.point, n.p) === h.CW && u(e.point, e.prev.point, e.prev.prev.point) === h.CW && B(t, n, e)
            }

            function F(t, n, e, r, s) {
                var p = r.neighborAcross(s);
                i(p, "FLIP failed due to missing triangle!");
                var a = p.oppositePoint(r, s);
                if (r.getConstrainedEdgeAcross(s)) {
                    var h = r.index(s);
                    throw new o("poly2tri Intersecting Constraints", [s, a, r.getPoint((h + 1) % 3), r.getPoint((h + 2) % 3)])
                }
                d(s, r.pointCCW(s), r.pointCW(s), a) ? (w(r, s, p, a), t.mapTriangleToNodes(r), t.mapTriangleToNodes(p), s === e && a === n ? e === t.edge_event.constrained_edge.q && n === t.edge_event.constrained_edge.p && (r.markConstrainedEdgeByPoints(n, e), p.markConstrainedEdgeByPoints(n, e), W(t, r), W(t, p)) : F(t, n, e, r = M(t, u(e, a, n), r, p, s, a), s)) : (H(t, n, e, r, p, z(n, e, p, a)), y(t, n, e, r, s))
            }

            function M(t, n, e, i, o, r) {
                var s;
                return n === h.CCW ? (s = i.edgeIndex(o, r), i.delaunay_edge[s] = !0, W(t, i), i.clearDelaunayEdges(), e) : (s = e.edgeIndex(o, r), e.delaunay_edge[s] = !0, W(t, e), e.clearDelaunayEdges(), i)
            }

            function z(t, n, e, i) {
                var r = u(n, i, t);
                if (r === h.CW) return e.pointCCW(i);
                if (r === h.CCW) return e.pointCW(i);
                throw new o("poly2tri [Unsupported] nextFlipPoint: opposing point on constrained edge!", [n, i, t])
            }

            function H(t, n, e, o, r, s) {
                var p = r.neighborAcross(s);
                i(p, "FLIP failed due to missing triangle");
                var a = p.oppositePoint(r, s);
                d(e, o.pointCCW(e), o.pointCW(e), a) ? F(t, e, a, p, a) : H(t, n, e, o, p, z(n, e, p, a))
            }
            e.triangulate = function(t) {
                t.initTriangulation(), t.createAdvancingFront(), f(t), l(t)
            }
        }, {
            "./advancingfront": 2,
            "./assert": 3,
            "./pointerror": 5,
            "./triangle": 9,
            "./utils": 10
        }],
        8: [function(t, n) {
            "use strict";
            var e = t("./pointerror"),
                i = t("./point"),
                o = t("./triangle"),
                r = t("./sweep"),
                s = t("./advancingfront"),
                p = s.Node,
                a = function(t, n) {
                    if (this.p = t, this.q = n, t.y > n.y) this.q = t, this.p = n;
                    else if (t.y === n.y)
                        if (t.x > n.x) this.q = t, this.p = n;
                        else if (t.x === n.x) throw new e("poly2tri Invalid Edge constructor: repeated points!", [t]);
                    this.q._p2t_edge_list || (this.q._p2t_edge_list = []), this.q._p2t_edge_list.push(this)
                },
                h = function() {
                    this.left_node = null, this.bottom_node = null, this.right_node = null, this.width = 0, this.left_highest = !1
                };
            h.prototype.clear = function() {
                this.left_node = null, this.bottom_node = null, this.right_node = null, this.width = 0, this.left_highest = !1
            };
            var u = function() {
                    this.constrained_edge = null, this.right = !1
                },
                d = function(t, n) {
                    n = n || {}, this.triangles_ = [], this.map_ = [], this.points_ = n.cloneArrays ? t.slice(0) : t, this.edge_list = [], this.pmin_ = this.pmax_ = null, this.front_ = null, this.head_ = null, this.tail_ = null, this.af_head_ = null, this.af_middle_ = null, this.af_tail_ = null, this.basin = new h, this.edge_event = new u, this.initEdges(this.points_)
                };
            d.prototype.addHole = function(t) {
                this.initEdges(t);
                var n, e = t.length;
                for (n = 0; n < e; n++) this.points_.push(t[n]);
                return this
            }, d.prototype.AddHole = d.prototype.addHole, d.prototype.addHoles = function(t) {
                var n, e = t.length;
                for (n = 0; n < e; n++) this.initEdges(t[n]);
                return this.points_ = this.points_.concat.apply(this.points_, t), this
            }, d.prototype.addPoint = function(t) {
                return this.points_.push(t), this
            }, d.prototype.AddPoint = d.prototype.addPoint, d.prototype.addPoints = function(t) {
                return this.points_ = this.points_.concat(t), this
            }, d.prototype.triangulate = function() {
                return r.triangulate(this), this
            }, d.prototype.getBoundingBox = function() {
                return {
                    min: this.pmin_,
                    max: this.pmax_
                }
            }, d.prototype.getTriangles = function() {
                return this.triangles_
            }, d.prototype.GetTriangles = d.prototype.getTriangles, d.prototype.front = function() {
                return this.front_
            }, d.prototype.pointCount = function() {
                return this.points_.length
            }, d.prototype.head = function() {
                return this.head_
            }, d.prototype.setHead = function(t) {
                this.head_ = t
            }, d.prototype.tail = function() {
                return this.tail_
            }, d.prototype.setTail = function(t) {
                this.tail_ = t
            }, d.prototype.getMap = function() {
                return this.map_
            }, d.prototype.initTriangulation = function() {
                var t, n = this.points_[0].x,
                    e = this.points_[0].x,
                    o = this.points_[0].y,
                    r = this.points_[0].y,
                    s = this.points_.length;
                for (t = 1; t < s; t++) {
                    var p = this.points_[t];
                    p.x > n && (n = p.x), p.x < e && (e = p.x), p.y > o && (o = p.y), p.y < r && (r = p.y)
                }
                this.pmin_ = new i(e, r), this.pmax_ = new i(n, o);
                var a = .3 * (n - e),
                    h = .3 * (o - r);
                this.head_ = new i(n + a, r - h), this.tail_ = new i(e - a, r - h), this.points_.sort(i.compare)
            }, d.prototype.initEdges = function(t) {
                var n, e = t.length;
                for (n = 0; n < e; ++n) this.edge_list.push(new a(t[n], t[(n + 1) % e]))
            }, d.prototype.getPoint = function(t) {
                return this.points_[t]
            }, d.prototype.addToMap = function(t) {
                this.map_.push(t)
            }, d.prototype.locateNode = function(t) {
                return this.front_.locateNode(t.x)
            }, d.prototype.createAdvancingFront = function() {
                var t, n, e, i = new o(this.points_[0], this.tail_, this.head_);
                this.map_.push(i), t = new p(i.getPoint(1), i), n = new p(i.getPoint(0), i), e = new p(i.getPoint(2)), this.front_ = new s(t, e), t.next = n, n.next = e, n.prev = t, e.prev = n
            }, d.prototype.removeNode = function() {}, d.prototype.mapTriangleToNodes = function(t) {
                for (var n = 0; n < 3; ++n)
                    if (!t.getNeighbor(n)) {
                        var e = this.front_.locatePoint(t.pointCW(t.getPoint(n)));
                        e && (e.triangle = t)
                    }
            }, d.prototype.removeFromMap = function(t) {
                var n, e = this.map_,
                    i = e.length;
                for (n = 0; n < i; n++)
                    if (e[n] === t) {
                        e.splice(n, 1);
                        break
                    }
            }, d.prototype.meshClean = function(t) {
                for (var n, e, i = [t]; n = i.pop();)
                    if (!n.isInterior())
                        for (n.setInterior(!0), this.triangles_.push(n), e = 0; e < 3; e++) n.constrained_edge[e] || i.push(n.getNeighbor(e))
            }, n.exports = d
        }, {
            "./advancingfront": 2,
            "./point": 4,
            "./pointerror": 5,
            "./sweep": 7,
            "./triangle": 9
        }],
        9: [function(t, n) {
            "use strict";
            var e = function(t, n, e) {
                    this.points_ = [t, n, e], this.neighbors_ = [null, null, null], this.interior_ = !1, this.constrained_edge = [!1, !1, !1], this.delaunay_edge = [!1, !1, !1]
                },
                i = t("./xy").toString;
            e.prototype.toString = function() {
                return "[" + i(this.points_[0]) + i(this.points_[1]) + i(this.points_[2]) + "]"
            }, e.prototype.getPoint = function(t) {
                return this.points_[t]
            }, e.prototype.GetPoint = e.prototype.getPoint, e.prototype.getPoints = function() {
                return this.points_
            }, e.prototype.getNeighbor = function(t) {
                return this.neighbors_[t]
            }, e.prototype.containsPoint = function(t) {
                var n = this.points_;
                return t === n[0] || t === n[1] || t === n[2]
            }, e.prototype.containsEdge = function(t) {
                return this.containsPoint(t.p) && this.containsPoint(t.q)
            }, e.prototype.containsPoints = function(t, n) {
                return this.containsPoint(t) && this.containsPoint(n)
            }, e.prototype.isInterior = function() {
                return this.interior_
            }, e.prototype.setInterior = function(t) {
                return this.interior_ = t, this
            }, e.prototype.markNeighborPointers = function(t, n, e) {
                var i = this.points_;
                if (t === i[2] && n === i[1] || t === i[1] && n === i[2]) this.neighbors_[0] = e;
                else if (t === i[0] && n === i[2] || t === i[2] && n === i[0]) this.neighbors_[1] = e;
                else {
                    if (!(t === i[0] && n === i[1] || t === i[1] && n === i[0])) throw new Error("poly2tri Invalid Triangle.markNeighborPointers() call");
                    this.neighbors_[2] = e
                }
            }, e.prototype.markNeighbor = function(t) {
                var n = this.points_;
                t.containsPoints(n[1], n[2]) ? (this.neighbors_[0] = t, t.markNeighborPointers(n[1], n[2], this)) : t.containsPoints(n[0], n[2]) ? (this.neighbors_[1] = t, t.markNeighborPointers(n[0], n[2], this)) : t.containsPoints(n[0], n[1]) && (this.neighbors_[2] = t, t.markNeighborPointers(n[0], n[1], this))
            }, e.prototype.clearNeighbors = function() {
                this.neighbors_[0] = null, this.neighbors_[1] = null, this.neighbors_[2] = null
            }, e.prototype.clearDelaunayEdges = function() {
                this.delaunay_edge[0] = !1, this.delaunay_edge[1] = !1, this.delaunay_edge[2] = !1
            }, e.prototype.pointCW = function(t) {
                var n = this.points_;
                return t === n[0] ? n[2] : t === n[1] ? n[0] : t === n[2] ? n[1] : null
            }, e.prototype.pointCCW = function(t) {
                var n = this.points_;
                return t === n[0] ? n[1] : t === n[1] ? n[2] : t === n[2] ? n[0] : null
            }, e.prototype.neighborCW = function(t) {
                return t === this.points_[0] ? this.neighbors_[1] : t === this.points_[1] ? this.neighbors_[2] : this.neighbors_[0]
            }, e.prototype.neighborCCW = function(t) {
                return t === this.points_[0] ? this.neighbors_[2] : t === this.points_[1] ? this.neighbors_[0] : this.neighbors_[1]
            }, e.prototype.getConstrainedEdgeCW = function(t) {
                return t === this.points_[0] ? this.constrained_edge[1] : t === this.points_[1] ? this.constrained_edge[2] : this.constrained_edge[0]
            }, e.prototype.getConstrainedEdgeCCW = function(t) {
                return t === this.points_[0] ? this.constrained_edge[2] : t === this.points_[1] ? this.constrained_edge[0] : this.constrained_edge[1]
            }, e.prototype.getConstrainedEdgeAcross = function(t) {
                return t === this.points_[0] ? this.constrained_edge[0] : t === this.points_[1] ? this.constrained_edge[1] : this.constrained_edge[2]
            }, e.prototype.setConstrainedEdgeCW = function(t, n) {
                t === this.points_[0] ? this.constrained_edge[1] = n : t === this.points_[1] ? this.constrained_edge[2] = n : this.constrained_edge[0] = n
            }, e.prototype.setConstrainedEdgeCCW = function(t, n) {
                t === this.points_[0] ? this.constrained_edge[2] = n : t === this.points_[1] ? this.constrained_edge[0] = n : this.constrained_edge[1] = n
            }, e.prototype.getDelaunayEdgeCW = function(t) {
                return t === this.points_[0] ? this.delaunay_edge[1] : t === this.points_[1] ? this.delaunay_edge[2] : this.delaunay_edge[0]
            }, e.prototype.getDelaunayEdgeCCW = function(t) {
                return t === this.points_[0] ? this.delaunay_edge[2] : t === this.points_[1] ? this.delaunay_edge[0] : this.delaunay_edge[1]
            }, e.prototype.setDelaunayEdgeCW = function(t, n) {
                t === this.points_[0] ? this.delaunay_edge[1] = n : t === this.points_[1] ? this.delaunay_edge[2] = n : this.delaunay_edge[0] = n
            }, e.prototype.setDelaunayEdgeCCW = function(t, n) {
                t === this.points_[0] ? this.delaunay_edge[2] = n : t === this.points_[1] ? this.delaunay_edge[0] = n : this.delaunay_edge[1] = n
            }, e.prototype.neighborAcross = function(t) {
                return t === this.points_[0] ? this.neighbors_[0] : t === this.points_[1] ? this.neighbors_[1] : this.neighbors_[2]
            }, e.prototype.oppositePoint = function(t, n) {
                var e = t.pointCW(n);
                return this.pointCW(e)
            }, e.prototype.legalize = function(t, n) {
                var e = this.points_;
                if (t === e[0]) e[1] = e[0], e[0] = e[2], e[2] = n;
                else if (t === e[1]) e[2] = e[1], e[1] = e[0], e[0] = n;
                else {
                    if (t !== e[2]) throw new Error("poly2tri Invalid Triangle.legalize() call");
                    e[0] = e[2], e[2] = e[1], e[1] = n
                }
            }, e.prototype.index = function(t) {
                var n = this.points_;
                if (t === n[0]) return 0;
                if (t === n[1]) return 1;
                if (t === n[2]) return 2;
                throw new Error("poly2tri Invalid Triangle.index() call")
            }, e.prototype.edgeIndex = function(t, n) {
                var e = this.points_;
                if (t === e[0]) {
                    if (n === e[1]) return 2;
                    if (n === e[2]) return 1
                } else if (t === e[1]) {
                    if (n === e[2]) return 0;
                    if (n === e[0]) return 2
                } else if (t === e[2]) {
                    if (n === e[0]) return 1;
                    if (n === e[1]) return 0
                }
                return -1
            }, e.prototype.markConstrainedEdgeByIndex = function(t) {
                this.constrained_edge[t] = !0
            }, e.prototype.markConstrainedEdgeByEdge = function(t) {
                this.markConstrainedEdgeByPoints(t.p, t.q)
            }, e.prototype.markConstrainedEdgeByPoints = function(t, n) {
                var e = this.points_;
                n === e[0] && t === e[1] || n === e[1] && t === e[0] ? this.constrained_edge[2] = !0 : n === e[0] && t === e[2] || n === e[2] && t === e[0] ? this.constrained_edge[1] = !0 : (n === e[1] && t === e[2] || n === e[2] && t === e[1]) && (this.constrained_edge[0] = !0)
            }, n.exports = e
        }, {
            "./xy": 11
        }],
        10: [function(t, n, e) {
            "use strict";
            e.EPSILON = 1e-12;
            var i = {
                CW: 1,
                CCW: -1,
                COLLINEAR: 0
            };
            e.Orientation = i, e.orient2d = function(t, n, e) {
                var o = (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
                return o > -1e-12 && o < 1e-12 ? i.COLLINEAR : o > 0 ? i.CCW : i.CW
            }, e.inScanArea = function(t, n, e, i) {
                return !((t.x - n.x) * (i.y - n.y) - (i.x - n.x) * (t.y - n.y) >= -1e-12 || (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y) <= 1e-12)
            }, e.isAngleObtuse = function(t, n, e) {
                var i = n.x - t.x,
                    o = n.y - t.y;
                return i * (e.x - t.x) + o * (e.y - t.y) < 0
            }
        }, {}],
        11: [function(t, n) {
            "use strict";

            function e(t) {
                return "(" + t.x + ";" + t.y + ")"
            }
            n.exports = {
                toString: function(t) {
                    var n = t.toString();
                    return "[object Object]" === n ? e(t) : n
                },
                toStringBase: e,
                compare: function(t, n) {
                    return t.y === n.y ? t.x - n.x : t.y - n.y
                },
                equals: function(t, n) {
                    return t.x === n.x && t.y === n.y
                }
            }
        }, {}]
    }, {}, [6])(6)
});