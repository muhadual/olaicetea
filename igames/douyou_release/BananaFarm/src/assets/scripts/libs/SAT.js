function sat() {
    "use strict";
    var t = {};

    function o(t, o) {
        this.x = t || 0, this.y = o || 0
    }

    function e(t, e) {
        this.pos = t || new o, this.r = e || 0, this.offset = new o
    }

    function r(t, e) {
        this.pos = t || new o, this.angle = 0, this.offset = new o, this.setPoints(e || [])
    }

    function s(t, e, r) {
        this.pos = t || new o, this.w = e || 0, this.h = r || 0
    }

    function n() {
        this.a = null, this.b = null, this.overlapN = new o, this.overlapV = new o, this.clear()
    }
    t.Vector = o, t.V = o, o.prototype.copy = o.prototype.copy = function(t) {
        return this.x = t.x, this.y = t.y, this
    }, o.prototype.clone = o.prototype.clone = function() {
        return new o(this.x, this.y)
    }, o.prototype.perp = o.prototype.perp = function() {
        var t = this.x;
        return this.x = this.y, this.y = -t, this
    }, o.prototype.rotate = o.prototype.rotate = function(t) {
        var o = this.x,
            e = this.y;
        return this.x = o * Math.cos(t) - e * Math.sin(t), this.y = o * Math.sin(t) + e * Math.cos(t), this
    }, o.prototype.reverse = o.prototype.reverse = function() {
        return this.x = -this.x, this.y = -this.y, this
    }, o.prototype.normalize = o.prototype.normalize = function() {
        var t = this.len();
        return t > 0 && (this.x = this.x / t, this.y = this.y / t), this
    }, o.prototype.add = o.prototype.add = function(t) {
        return this.x += t.x, this.y += t.y, this
    }, o.prototype.sub = o.prototype.sub = function(t) {
        return this.x -= t.x, this.y -= t.y, this
    }, o.prototype.scale = o.prototype.scale = function(t, o) {
        return this.x *= t, this.y *= void 0 !== o ? o : t, this
    }, o.prototype.project = o.prototype.project = function(t) {
        var o = this.dot(t) / t.len2();
        return this.x = o * t.x, this.y = o * t.y, this
    }, o.prototype.projectN = o.prototype.projectN = function(t) {
        var o = this.dot(t);
        return this.x = o * t.x, this.y = o * t.y, this
    }, o.prototype.reflect = o.prototype.reflect = function(t) {
        var o = this.x,
            e = this.y;
        return this.project(t).scale(2), this.x -= o, this.y -= e, this
    }, o.prototype.reflectN = o.prototype.reflectN = function(t) {
        var o = this.x,
            e = this.y;
        return this.projectN(t).scale(2), this.x -= o, this.y -= e, this
    }, o.prototype.dot = o.prototype.dot = function(t) {
        return this.x * t.x + this.y * t.y
    }, o.prototype.len2 = o.prototype.len2 = function() {
        return this.dot(this)
    }, o.prototype.len = o.prototype.len = function() {
        return Math.sqrt(this.len2())
    }, t.Circle = e, e.prototype.getAABBAsBox = e.prototype.getAABBAsBox = function() {
        var t = this.r;
        return new s(this.pos.clone().add(this.offset).sub(new o(t, t)), 2 * t, 2 * t)
    }, e.prototype.getAABB = e.prototype.getAABB = function() {
        return this.getAABBAsBox().toPolygon()
    }, e.prototype.setOffset = e.prototype.setOffset = function(t) {
        return this.offset = t, this
    }, t.Polygon = r, r.prototype.setPoints = r.prototype.setPoints = function(t) {
        if (!this.points || this.points.length !== t.length) {
            var e, r = this.calcPoints = [],
                s = this.edges = [],
                n = this.normals = [];
            for (e = 0; e < t.length; e++) {
                var p = t[e],
                    i = e < t.length - 1 ? t[e + 1] : t[0];
                p === i || p.x !== i.x || p.y !== i.y ? (r.push(new o), s.push(new o), n.push(new o)) : (t.splice(e, 1), e -= 1)
            }
        }
        return this.points = t, this._recalc(), this
    }, r.prototype.setAngle = r.prototype.setAngle = function(t) {
        return this.angle = t, this._recalc(), this
    }, r.prototype.setOffset = r.prototype.setOffset = function(t) {
        return this.offset = t, this._recalc(), this
    }, r.prototype.rotate = r.prototype.rotate = function(t) {
        for (var o = this.points, e = o.length, r = 0; r < e; r++) o[r].rotate(t);
        return this._recalc(), this
    }, r.prototype.translate = r.prototype.translate = function(t, o) {
        for (var e = this.points, r = e.length, s = 0; s < r; s++) e[s].x += t, e[s].y += o;
        return this._recalc(), this
    }, r.prototype._recalc = function() {
        var t, o = this.calcPoints,
            e = this.edges,
            r = this.normals,
            s = this.points,
            n = this.offset,
            p = this.angle,
            i = s.length;
        for (t = 0; t < i; t++) {
            var h = o[t].copy(s[t]);
            h.x += n.x, h.y += n.y, 0 !== p && h.rotate(p)
        }
        for (t = 0; t < i; t++) {
            var a = o[t],
                u = t < i - 1 ? o[t + 1] : o[0],
                y = e[t].copy(u).sub(a);
            r[t].copy(y).perp().normalize()
        }
        return this
    }, r.prototype.getAABBAsBox = r.prototype.getAABBAsBox = function() {
        for (var t = this.calcPoints, e = t.length, r = t[0].x, n = t[0].y, p = t[0].x, i = t[0].y, h = 1; h < e; h++) {
            var a = t[h];
            a.x < r ? r = a.x : a.x > p && (p = a.x), a.y < n ? n = a.y : a.y > i && (i = a.y)
        }
        return new s(this.pos.clone().add(new o(r, n)), p - r, i - n)
    }, r.prototype.getAABB = r.prototype.getAABB = function() {
        return this.getAABBAsBox().toPolygon()
    }, r.prototype.getCentroid = r.prototype.getCentroid = function() {
        for (var t = this.calcPoints, e = t.length, r = 0, s = 0, n = 0, p = 0; p < e; p++) {
            var i = t[p],
                h = p === e - 1 ? t[0] : t[p + 1],
                a = i.x * h.y - h.x * i.y;
            r += (i.x + h.x) * a, s += (i.y + h.y) * a, n += a
        }
        return new o(r /= n *= 3, s /= n)
    }, t.Box = s, s.prototype.toPolygon = s.prototype.toPolygon = function() {
        var t = this.pos,
            e = this.w,
            s = this.h;
        return new r(new o(t.x, t.y), [new o, new o(e, 0), new o(e, s), new o(0, s)])
    }, t.Response = n, n.prototype.clear = n.prototype.clear = function() {
        return this.aInB = !0, this.bInA = !0, this.overlap = Number.MAX_VALUE, this
    };
    for (var p = [], i = 0; i < 10; i++) p.push(new o);
    var h = [];
    for (i = 0; i < 5; i++) h.push([]);
    var a = new n,
        u = new s(new o, 1e-6, 1e-6).toPolygon();

    function y(t, o, e) {
        for (var r = Number.MAX_VALUE, s = -Number.MAX_VALUE, n = t.length, p = 0; p < n; p++) {
            var i = t[p].dot(o);
            i < r && (r = i), i > s && (s = i)
        }
        e[0] = r, e[1] = s
    }

    function c(t, o, e, r, s, n) {
        var i = h.pop(),
            a = h.pop(),
            u = p.pop().copy(o).sub(t),
            c = u.dot(s);
        if (y(e, s, i), y(r, s, a), a[0] += c, a[1] += c, i[0] > a[1] || a[0] > i[1]) return p.push(u), h.push(i), h.push(a), !0;
        if (n) {
            var l, f, v = 0;
            i[0] < a[0] ? (n.aInB = !1, i[1] < a[1] ? (v = i[1] - a[0], n.bInA = !1) : v = (l = i[1] - a[0]) < (f = a[1] - i[0]) ? l : -f) : (n.bInA = !1, i[1] > a[1] ? (v = i[0] - a[1], n.aInB = !1) : v = (l = i[1] - a[0]) < (f = a[1] - i[0]) ? l : -f);
            var x = Math.abs(v);
            x < n.overlap && (n.overlap = x, n.overlapN.copy(s), v < 0 && n.overlapN.reverse())
        }
        return p.push(u), h.push(i), h.push(a), !1
    }

    function l(t, o) {
        var e = t.len2(),
            r = o.dot(t);
        return r < 0 ? f : r > e ? x : v
    }
    t.isSeparatingAxis = c;
    var f = -1,
        v = 0,
        x = 1;

    function g(t, o, e) {
        for (var r = p.pop().copy(o.pos).add(o.offset).sub(t.pos), s = o.r, n = s * s, i = t.calcPoints, h = i.length, a = p.pop(), u = p.pop(), y = 0; y < h; y++) {
            var c = y === h - 1 ? 0 : y + 1,
                v = 0 === y ? h - 1 : y - 1,
                g = 0,
                A = null;
            a.copy(t.edges[y]), u.copy(r).sub(i[y]), e && u.len2() > n && (e.aInB = !1);
            var b = l(a, u);
            if (b === f) {
                a.copy(t.edges[v]);
                var B = p.pop().copy(r).sub(i[v]);
                if ((b = l(a, B)) === x) {
                    if ((w = u.len()) > s) return p.push(r), p.push(a), p.push(u), p.push(B), !1;
                    e && (e.bInA = !1, A = u.normalize(), g = s - w)
                }
                p.push(B)
            } else if (b === x) {
                if (a.copy(t.edges[c]), u.copy(r).sub(i[c]), (b = l(a, u)) === f) {
                    if ((w = u.len()) > s) return p.push(r), p.push(a), p.push(u), !1;
                    e && (e.bInA = !1, A = u.normalize(), g = s - w)
                }
            } else {
                var d = a.perp().normalize(),
                    w = u.dot(d),
                    P = Math.abs(w);
                if (w > 0 && P > s) return p.push(r), p.push(d), p.push(u), !1;
                e && (A = d, g = s - w, (w >= 0 || g < 2 * s) && (e.bInA = !1))
            }
            A && e && Math.abs(g) < Math.abs(e.overlap) && (e.overlap = g, e.overlapN.copy(A))
        }
        return e && (e.a = t, e.b = o, e.overlapV.copy(e.overlapN).scale(e.overlap)), p.push(r), p.push(a), p.push(u), !0
    }

    function A(t, o, e) {
        for (var r = t.calcPoints, s = r.length, n = o.calcPoints, p = n.length, i = 0; i < s; i++)
            if (c(t.pos, o.pos, r, n, t.normals[i], e)) return !1;
        for (i = 0; i < p; i++)
            if (c(t.pos, o.pos, r, n, o.normals[i], e)) return !1;
        return e && (e.a = t, e.b = o, e.overlapV.copy(e.overlapN).scale(e.overlap)), !0
    }
    return t.pointInCircle = function(t, o) {
        var e = p.pop().copy(t).sub(o.pos).sub(o.offset),
            r = o.r * o.r,
            s = e.len2();
        return p.push(e), s <= r
    }, t.pointInPolygon = function(t, o) {
        u.pos.copy(t), a.clear();
        var e = A(u, o, a);
        return e && (e = a.aInB), e
    }, t.testCircleCircle = function(t, o, e) {
        var r = p.pop().copy(o.pos).add(o.offset).sub(t.pos).sub(t.offset),
            s = t.r + o.r,
            n = s * s,
            i = r.len2();
        if (i > n) return p.push(r), !1;
        if (e) {
            var h = Math.sqrt(i);
            e.a = t, e.b = o, e.overlap = s - h, e.overlapN.copy(r.normalize()), e.overlapV.copy(r).scale(e.overlap), e.aInB = t.r <= o.r && h <= o.r - t.r, e.bInA = o.r <= t.r && h <= t.r - o.r
        }
        return p.push(r), !0
    }, t.testPolygonCircle = g, t.testCirclePolygon = function(t, o, e) {
        var r = g(o, t, e);
        if (r && e) {
            var s = e.a,
                n = e.aInB;
            e.overlapN.reverse(), e.overlapV.reverse(), e.a = e.b, e.b = s, e.aInB = e.bInA, e.bInA = n
        }
        return r
    }, t.testPolygonPolygon = A, t
}
window.SAT = sat();