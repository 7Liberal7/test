﻿(function () {
  try {
    (function (vd) {
      function mk(a) { return a.replace(nk, function (c, b, d, e) { return "" + b + e }) } function wd(a, c) { if (!c) return !1; var b = O(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function ok(a, c) { return Ha(a, c, function (b) { var d = n(b, "settings.dr"); return { eh: pk(a, d), isEnabled: n(b, "settings.auto_goals") } }) } function qk(a, c) {
        function b() { var m = l + "0", p = l + "1"; h[m] ? h[p] ? (l = l.slice(0, -1), --k) : (g[p] = e(8), h[p] = 1) : (g[m] = e(8), h[m] = 1) } function d() {
          var m = l + "1"; h[l + "0"] ? h[m] ? (l = l.slice(0, -1), --k) : (l += "1",
            h[l] = 1) : (l += "0", h[l] = 1)
        } function e(m) { void 0 === m && (m = 1); var p = f.slice(k, k + m); k += m; return p } for (var f = ug(a, c, ""), g = {}, h = {}, k = 1, l = ""; k < f.length - 1;)("0" === e() ? d : b)(); return g
      } function rk(a, c, b, d, e) { b = Je(a, a.document.body, b); d = Je(a, a.document.body, d); F(e.target, [b, d]) && Ke(a, c) } function vg(a, c, b, d) { (b = sk(a, d, b)) && Ke(a, c, b) } function wg(a, c) { var b = xg(a, c); return tk(a, b) } function xg(a, c) { var b = Je(a, a.document.body, c); return b ? uk(a, b) : "" } function Ke(a, c, b) { (c = Ka(a, c)) && c.params(Dc(["__ym", "dr", b || u(yg, vk)(a)])) }
      function Je(a, c, b) { var d = null; try { d = b ? kc(a, c, b) : d } catch (e) { } return d } function ug(a, c, b) { try { var d = oa(a.atob(c)); return y(function (e) { e = e.charCodeAt(0).toString(2); return zg("0", 8 - e.length) + e }, d).join(b) } catch (e) { return "" } } function yg(a) { return Wa(a, 10, 99) } function uk(a, c) { if (!c) return ""; var b = [], d = n(a, "document"); Le(a, c, function (e) { e.nodeType === d.TEXT_NODE && e.textContent ? b.push(e.textContent.trim()) : e instanceof HTMLImageElement && e.alt && b.push(e.alt.trim()) }); return 0 === b.length ? "" : b.join(" ") } function wk(a,
        c, b) { var d; a = Ag(a, c); return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + a, d.rt = "https://" + a + ".mc.yandex.ru/watch/3/1", d)[b] } function xk(a, c, b, d) { a = n(d, "data"); if (La(a)) { var e = a.split("*"); a = e[0]; var f = e[1]; e = e[2]; "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e) } } function yk(a, c, b, d) { d = n(d, "target"); (d = Db("button,input", a, d)) && "submit" === d.type && (d = Bg(a, d)) && (b.push(d), T(a, K([!1, a, c, b, d], Cg), 300)) } function Cg(a, c, b, d, e) {
          var f = tb(c)(e, d), g = -1 !==
            f; if (a || g) g && d.splice(f, 1), a = Dg(c, e), a = "?" + Ec(a), d = K([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Eg), Me(c, b, "form", d)(a)
        } function Eg(a, c, b) { return zk(a, c).then(function (d) { d && Eb(a, c, b)() }) } function Ak(a) { a = Bk(a); return ca(a) ? G("x", a) : a } function Ck(a) { return G("x", Dk(a) || []) } function Dk(a) { var c = n(a, "speechSynthesis.getVoices"); if (!c) return ""; a = C(c, a.speechSynthesis); return Vb(function (b) { return y(w(b, n), Ek) }, a()) } function Fk(a) {
          if (a = Gk(a)) try {
            for (var c = [], b = 0; b < Fg.length; b += 1) {
              var d = a(Fg[b]);
              c.push(d)
            } var e = c
          } catch (f) { e = [] } else e = []; return e ? G("x", e) : ""
        } function Hk(a) { var c = Ik(a); return c ? G("x", y(function (b) { b = c[b]; return G("x", y(u(P, da("concat", ""), w(b, n)), ["matches", "media"])) }, ea(c))) : "" } function Jk(a, c) {
          var b = c.Rg; if (!Kk(a, b)) return ""; var d = []; a: { var e = Lk(a, b); try { var f = K(e, u)()(); break a } catch (I) { if ("ccf" === I.message) { f = null; break a } ob(I) } f = void 0 } if (Ia(f)) var g = ""; else try { g = f.toDataURL() } catch (I) { g = "" } (f = g) && d.push(f); var h = b.getContextAttributes(); try {
            var k = Da(b.getSupportedExtensions,
              "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
          } catch (I) { k = [] } k = G(";", k); f = Ne(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = Ne(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l = b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS), q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
          if (q) { var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT); 0 === r && (r = 2) } r = {
            Hj: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h, "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": p, "webgl max anisotropy": q ? r : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
            "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE), "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS), "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
            "webgl max viewport dims": Ne(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS), "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS), "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
          }; Oe(d, r, ": "); a: {
            try {
              var t = b.getExtension("WEBGL_debug_renderer_info"); if (t) {
                var x = {
                  "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                  "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                }; break a
              }
            } catch (I) { } x = {}
          } Oe(d, x); if (!b.getShaderPrecisionFormat) return G("~", d); Oe(d, Mk(b)); return G("~", d)
        } function Oe(a, c, b) { void 0 === b && (b = ":"); z(function (d) { return a.push("" + d[0] + b + d[1]) }, Aa(c)) } function Nk(a) { var c = Ok(a); return c ? J(function (b, d, e) { d = "" + (e + 1); var f = c.supportsVersion; return Q(f) ? f.call(c, e + 1) ? b + d : b + "0" : b }, "", Pk(19)) + c.canMakePayments() : "" } function Ok(a) {
          var c = n(a, "ApplePaySession"), b = O(a).protocol; return !c || "https:" !==
            b || ub(a) ? "" : c
        } function Qk(a, c) { var b = Ma(a), d = "wv2rf:" + U(c), e = c.qb, f = Pe(a), g = b.l(d), h = c.bj; return S(f) || Ia(g) ? pa(function (k, l) { Ha(a, c, function (m) { var p = n(m, "settings.webvisor.forms"); p = !n(m, "settings.x3") && p; f = Pe(a) || n(m, "settings.eu"); b.o(d, xd(p)); l({ qb: e, sf: !!f, Jf: p, lg: h }) }) }) : Qe({ qb: e, sf: f, Jf: !!parseInt(g, 10), lg: h }) } function Rk() {
          var a = J(function (c, b) { c[b[0]] = { cd: 0, Og: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132],
          ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]); return { Ig: function (c) { if (c.length) return { type: "activity", data: J(function (b, d) { var e = a[d]; return Math.round(b + e.cd * e.Og) }, 0, ea(a)) } }, ri: function (c) { c && (c = a[c.data.type]) && (c.cd += 1) } }
        } function Sk(a, c, b, d) {
          function e() { l || (l = !0, Gg(a, m, function (q) { f(q[0], q[1]) }, 20, 200, "s.w2.sf.ms"), m = []) } function f(q, r) { h(q, c, r)["catch"](A(a, "s.w2.p")) } function g() {
            var q =
              !1; return J(function (r, t, x) { p = Re(function (I, Y) { return I[2].partNum - Y[2].partNum }, p); t = t[2]; q = q || t.end; return r && x + 1 === t.partNum }, !0, p) && q
          } void 0 === d && (d = Wb); var h = qa(a, "W", c), k = !1, l = !1, m = [], p = []; T(a, e, 5E3); return function (q, r, t, x) {
            var I = "m" === q; r = { F: d(t), H: ta(), $: r, Pe: !I && Hg(t), rf: b }; if ("m" === q) if (r.H.o("bt", 1), k) f(r, x); else {
              var Y = J(function (wa, Ja) { var Fb = "page" === Ja.type && !Ja.L, lc = "eof" === Ja.data.type, Se = Fb && !!Ja.partNum; return { fd: wa.fd || Se, ed: wa.ed || Fb, dd: wa.dd || lc } }, { ed: !1, dd: !1, fd: !1 }, t); q = Y.ed;
              I = Y.dd; Y = Y.fd; q && (Y ? (p.push([r, x, t[0]]), g() && (z(function (wa) { return f(wa[0], wa[1]) }, p), k = !0, p = [])) : (k = !0, f(r, x))); l ? q || f(r, x) : (q || m.push([r, x]), (k || I) && e())
            } else f(r, x)
          }
        } function Tk(a) {
          if (a.type && a.event) switch (a.type) {
            case "page": var c = a.data, b = c.wa, d = c.Rc, e = c.content; delete c.wa; delete c.Rc; delete c.content; c = { type: "page", data: { L: a.L || 0, content: e, wa: b, Rc: d, Y: c } }; a.K && (c.K = a.K); return c; case "event": a: {
              c = { type: "event", K: a.K, data: { L: a.L, type: a.event, Y: {} } }; b = B({}, a.data); switch (a.event) {
                case "zoom": c.data.Y =
                  { sg: { x: 0, y: 0, level: 0 }, vg: b, duration: 1 }; break; case "keystroke": c.data.Y = b.uc; break; case "deviceRotation": case "resize": c.data.Y = b; break; case "windowfocus": case "windowblur": case "focus": c.data.target = b.target; c.data.Y = null; break; case "touchmove": case "touchstart": case "touchend": case "touchcancel": case "touchforcechange": case "scroll": case "change": case "click": case "mousemove": case "mousedown": case "mouseup": case "selection": case "stylechange": c.data.target = b.target; delete b.target; c.data.Y = b; break;
                case "srcset": a = { type: "mutation", K: a.K, data: { L: a.L, Y: { ya: [{ bd: [{ id: b.target, pb: { src: { yc: "", n: b.value, r: !1 } }, ua: 0 }] }], index: 0 } } }; break a
              }a = c
            } break; case "mutation": return Uk(a)
          }return a
        } function Uk(a) {
          var c = B({}, a.data), b = []; switch (a.event) {
            case "tc": b = [{ d: [{ id: c.target, Wb: { yc: "", n: c.value }, ua: c.index }] }]; break; case "ac": b = [{ bd: [{ id: c.target, pb: J(function (d, e) { var f = e[1]; d[e[0]] = { yc: "", n: f, r: ra(f) }; return d }, {}, Aa(c.attributes)), ua: c.index }] }]; break; case "re": b = [{
              Ie: y(function (d) { return { id: d, ua: c.index } },
                c.fa)
            }]; break; case "ad": b = [{ Le: y(function (d) { return { id: d.id, Af: d.name, Bf: d.zf, Vd: d.parent, Yd: d.$d, Pd: d.next, pb: d.attributes, ua: c.index, Wb: d.content, Ka: d.hidden } }, c.fa) }]
          }return { type: "mutation", K: a.K, data: { L: a.L, Y: { ya: b, index: c.index } } }
        } function Vk(a) {
          return {
            xh: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, zh: function () {
              if (a.document.doctype) {
                var c = B({ name: "html", publicId: "", systemId: "" }, a.document.doctype), b = c.publicId, d = c.systemId; return "<!DOCTYPE " +
                  G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
              } return null
            }, Jh: function () { try { if (!a.sessionStorage) return null; var c = a.sessionStorage.getItem("__vw_tab_guid"), b = !1; try { var d = a.opener ? a.opener.sessionStorage : null; b = !!d && c === d.getItem("__vw_tab_guid") } catch (e) { b = !0 } if (!c || b) c = Ig(), a.sessionStorage.setItem("__vw_tab_guid", c); return c } catch (e) { return null } }
          }
        } function Wk(a, c, b) {
          var d = Fc(a), e = fa(a), f = ub(a), g = c.wd(), h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"), k = w(d,
            P); if (h) { if (!g) return T(a, C(d.V, d, "i", { ma: !1 }), 10), { vd: k, Vf: D, stop: D }; ob(pb()) } d.C("sr", function (r) { var t, x = Jg(a, r.source); x && Te(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ja().X(x), t)) }); d.C("sd", function (r) { var t = r.data; r = r.source; (a === r || Jg(a, r)) && d.V("sdr", { data: t.data, L: t.frameId }) }); if (f && !g) {
              var l = !1, m = 0, p = function () { var r; Te(a, a.parent, (r = {}, r.type = "sr", r)); m = T(a, p, 100, "if.i") }; p(); var q = function (r) {
                d.da("\u043d", q); ha(a, m); var t = mc(a, r.origin).host; l || r.source !== a.parent || !r.data.frameId ||
                  "about:blank" !== O(a).host && !F(t, b) || (l = !0, d.V("i", { L: r.data.frameId, ma: !0 }))
              }; d.C("\u043d", q); T(a, function () { d.da("\u043d", q); ha(a, m); l || (l = !0, d.V("i", { ma: !1 })) }, 2E3, "if.r")
            } e = e.C(a, ["message"], function (r) { var t = qb(a, r.data); t && t.type && F(t.type, Xk) && d.V(t.type, { data: t, source: r.source, origin: r.origin }) }); return { vd: k, Vf: function (r) { var t; return Te(a, a.parent, (t = {}, t.frameId = c.wd(), t.data = r, t.type = "sd", t)) }, stop: e }
        } function Jg(a, c) { try { return Xa(u(V("contentWindow"), ua(c)), oa(a.document.querySelectorAll("iframe"))) } catch (b) { return null } }
      function Te(a, c, b) { a = bb(a, b); c.postMessage(a, "*") } function Ig() { return Gb() + Gb() + "-" + Gb() + "-" + Gb() + "-" + Gb() + "-" + Gb() + Gb() + Gb() } function Gb() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } function Yk(a, c) { if (La(c)) return c; var b = a.textContent; if (La(b)) return b; b = a.data; if (La(b)) return b; b = a.nodeValue; return La(b) ? b : "" } function Zk(a, c, b, d, e) {
        void 0 === d && (d = {}); void 0 === e && (e = ya(c)); var f = B(J(function (g, h) { g[h.name] = h.value; return g }, {}, oa(c.attributes)), d); B(f, $k(c, e, f)); if (d =
          J(function (g, h) { var k = h[0], l = yd(a, c, k, h[1], b, e), m = l.value; ra(m) ? delete f[k] : f[k] = m; return g || l.Gd }, !1, Aa(f)) && Gc(c)) f.width = d.width, f.height = d.height; return f
      } function $k(a, c, b) { var d = {}; zd(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function yd(a, c, b, d, e, f) {
        void 0 === f && (f = ya(c)); var g = { Gd: !1, value: d }; if (zd(c)) "value" === b ? !ra(d) && "" !== d && (b = e.sf, e = e.Jf, f = Hc(a, c), (e ? nc(a, c, b) : !Ad(c)) || f) && (g.Gd = f, g.value = G("", y(w("\u2022", P), ("" + d).split("")))) : "checked" === b && F((c.getAttribute("type") ||
          "").toLowerCase(), al) && (g.value = c.checked ? "checked" : null); else if ("IMG" === f && "src" === b) (f = Hc(a, c)) ? (g.Gd = f, g.value = bl) : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : ""; else if (F(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === Kg(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && F(b, ["src", "type"])) g.value = null; return g
      } function Ue(a, c, b, d) { void 0 === d && (d = "wv2"); return { G: function (e, f) { return A(a, d + "." + b + "." + f, e, void 0, c) } } } function cl(a,
        c) { var b = a.document; if (F(b.readyState, ["interactive", "complete"])) vb(a, c); else { var d = fa(a), e = d.C, f = d.Kb, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function dl(a, c) { var b = el(a), d = qa(a, "r", c), e = A(a, "rts.p"); return Ha(a, c, C(J, null, function (f, g) { var h = { id: g.Yg, aa: g.aa }; h = d({ $: g.zi, H: ta(g.Ng), F: g.R, Gb: g.Gb }, h, g.Fi)["catch"](e); return f.then(w(h, P)) }, L.resolve(""), b))["catch"](e) } function Lg(a, c, b) {
          c = Ic(a, void 0, c); c = Mg(a, c.l("phc_settings") ||
            ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g ? fl(a, b.Qe, { jg: gl }).Lf(g).then(function (h) { return hl(b, { sb: d, Cb: e, $f: f }, h.ga, g, h.oa) })["catch"](function () { }) : L.resolve()
        } function gl(a, c, b) { a = il(b.Ic); if ("href" === b.je) { var d = b.hb; c = d.href; b = c.replace(a, b.Pa); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.hb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Pa)) && a !== b.hb.textContent) return b.hb.textContent = a, !0; return !1 } function hl(a, c, b, d, e) {
          var f;
          c.sb && c.Cb && (c.sb === a.sb && c.Cb === a.Cb || B(a, c, { ga: {}, Va: !0 }), 0 < e && Sa(a.oa, [e]), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.ga[l] && a.ga[l][g] ? a.ga[l][g] : 0); B(a.ga, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = 1 + (a.ga[l] ? a.ga[l][g] : 0); B(a.ga, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, b), a.uf && (a.Va || b.length) && ((c = Ka(a.b, a.Qe)) && c.params("__ym", "phc", (f = {}, f.clientId = a.sb, f.orderId = a.Cb, f.service_id = a.$f, f.phones = a.ga, f.performance = a.oa, f)), a.Va = !1))
        } function jl(a, c) {
          try {
            var b =
              c.origin
          } catch (e) { } if (b) { var d = Ta(u(Ya, pa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]); b = F(b.replace(/\/?$/, "/"), kl); if (d || b) d = qb(a, c.data), "appendremote" === n(d, "action") && ll(a, c, d) }
        } function Ng(a, c) {
          var b, d, e, f, g = c.data; g = void 0 === g ? "" : g; var h = c.id; h = void 0 === h ? "" : h; var k = R(a), l = {}; l.getCachedTags = Og; l.form = (b = {}, b.closest = w(a, Bg), b.select = w(a, ml), b.getData = w(a, Dg), b); l.button = (d = {}, d.closest = w(a, Pg), d.select = w(a, Qg),
            d.getData = w(a, Rg), d); l.phone = (e = {}, e.hidePhones = K([a, null, [g]], Sg), e); l.status = (f = {}, f.checkStatus = K([a, parseInt(h, 10)], nl), f); k.o("_u", l); b = c.lang; b = void 0 === b ? "" : b; d = c.appVersion; d = void 0 === d ? "" : d; e = c.fileId; e = void 0 === e ? "" : e; f = c.beta; f = void 0 === f ? !1 : f; d = G(".", u(cb(u(P, parseInt)), oc(Boolean))(d.split("."))); F(e, ol) && F(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"), b = pl(b) ? b : "") : b = ""; b &&
              pc(a, { src: b })
        } function ql(a, c) {
          var b = Za(a); if (b) {
            b = b("div"); var d = Hb(a); if (d) {
              b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>'; var e = b.firstChild; e.onload = function () { pc(e.contentWindow, { src: c }) }; a._ym__remoteIframeEl = e; d.appendChild(b); b.removeChild(e); var f = null; b.attachShadow ? f = b.attachShadow({ mode: "open" }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
              f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
            }
          }
        } function nl(a) { var c, b = parseInt(Tg(a), 10); a = R(a).l("getCounters", Jc)(); a = y(V("id"), a); return c = { id: b }, c.counterFound = !!b && F(b, a), c } function Tg(a) { a = O(a).search.substring(1); return rl(a)["_ym_status-check"] || "" } function Sg(a, c, b) {
          var d; c = Ug(a, c, { jg: sl, ii: (d = {}, d.href = !0, d) }); b = W(Boolean, y(function (f) { return "*" === f ? f : Kc(f) }, b)); var e = y(u(P, da("concat", [""]), tl("reverse"), Ea), b); b = Lc(a); d = Vg(a, b, 1E3); c = C(c.Lf, c, e, !1); d.C(c); ul(a,
            b); Wg(a, b); c()
        } function sl(a, c, b) { var d = Za(a), e = b.hb, f = b.Ic, g = e.parentNode, h = e.textContent; if ("text" === b.je && h && d && g) { b = d("small"); Xg(b); var k = h.split(""), l = h.replace(/\s/g, "").length; z(da("appendChild", b), J(function (m, p) { var q = m.fa, r = m.qg, t = d("small"); t.innerHTML = p; var x = vl.test(p); Xg(t); x && (t.style.opacity = "" + (l - r - 1) / l); q.push(t); return { fa: q, qg: r + (x ? 1 : 0) } }, { fa: [], qg: 0 }, k).fa); wl(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0 } return !1 } function wl(a, c, b, d) {
          function e() {
            z(w(["style", "opacity",
              ""], Dc), oa(b.childNodes)); if (c) { var k = Ka(a, c); k && k.extLink("tel:" + d, {}) } g(); h()
          } var f = fa(a), g = D, h = D; g = f.C(b, ["mouseenter"], function (k) { if (k.target === b) { var l = T(a, e, 200, "ph.h.e"); (h || D)(); h = f.C(b, ["mouseleave"], function (m) { m.target === b && ha(a, l) }) } })
        } function Wg(a, c) { return Bd(a).then(function () { var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); ia("MutationObserver", a.MutationObserver) && (new MutationObserver(c.V)).observe(d, e) }) } function ul(a, c) {
          return fa(a).C(a, ["load"],
            c.V)
        } function Ug(a, c, b) { function d(k) { var l; return f(a, c, k) ? null === (l = h[k.Ic]) || void 0 === l ? void 0 : l.Wc : null } var e, f = b.jg; b = b.ii; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h; return { Lf: function (k) { return new L(function (l, m) { k && k.length || m(); h = Yg()(k); l(Bd(a).then(function () { var p = ba(a), q = p(X), r = g.href ? xl(a, h) : [], t = g.text ? Zg(a, h) : []; return { ga: W(ca, W(Boolean, y(d, r.concat(t)))), oa: p(X) - q } })["catch"](function () { return { ga: [], oa: 0 } })) }) } } } function xl(a, c) {
          var b = a.document.body; if (!b) return []; var d = $g(c);
          return J(function (e, f) { var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) { var k = (d.exec(h) || [])[0], l = k ? Kc(k) : "", m = c[l]; S(m) || !l && "*" !== m.Wc[0] || (e.push({ je: "href", hb: f, Ic: l, Pa: ah(k, c[l].Pa), Ri: g }), g = Kc(h.slice(4)), l = Yg()([l ? m.Wc : [g, ""]]), e.push.apply(e, Zg(a, l, f))) } return e }, [], oa(b.querySelectorAll("a")))
        } function Zg(a, c, b) {
          void 0 === b && (b = a.document.body); if (!b) return []; var d = [], e = $g(c); Le(a, b, function (f) {
            if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
              var g =
                W(Boolean, e.exec(f.textContent || "") || []); z(function (h) { var k = Kc(h); S(c[k]) || d.push({ je: "text", hb: f, Ic: k, Pa: ah(h, c[k].Pa), Ri: f.textContent || "" }) }, g)
            }
          }, function (f) { return e.test(f.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
        } function Yg() { return qc(function (a, c) { var b = y(Kc, c), d = b[0]; b = b[1]; a[d] = { Pa: b, Wc: c }; var e = bh(d); e !== d && (a[e] = { Pa: bh(b), Wc: c }); return a }, {}) } function ah(a, c) {
          for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
            var h = d[g]; "0" <= h && "9" >= h ? (b.push(e[f]),
              f += 1) : b.push(d[g])
          } return G("", b) + c.slice(f + 1)
        } function bh(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function $g(a) { return new RegExp("(?:" + G("|", y(ch, ea(a))) + ")") } function dh(a, c, b, d) { if (c) { var e = []; c && (a.document.documentElement.contains(c) ? Le(a, c, da("push", e), d) : Sa(e, eh(a, c, d))); z(b, e) } } function Le(a, c, b, d, e) {
          function f(g) { return Q(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT } void 0 === e && (e = -1); if (Q(b) && f(c) === a.NodeFilter.FILTER_ACCEPT &&
            (b(c), !Ve(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: f } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
        } function eh(a, c, b) { var d = [], e = u(P, da("push", d)); Q(b) ? (b = b(c), (ra(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) { c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) { var g = eh(a, c[b]); z(e, g) } } return d } function Bd(a, c) { function b(e) { n(c, d) ? e() : T(a, w(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return new L(b) } function yl(a,
          c) { function b(e) { n(c, d) ? e() : T(a, w(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return pa(function (e, f) { b(f) }) } function Dg(a, c, b) { return fh(a, c, ["i", "n", "p"], void 0, b) } function zl(a, c, b) { var d, e; var f = n(b, "ecommerce") || {}; var g = n(b, "event") || ""; f = (g = gh[g]) ? We(g, f, "items") : void 0; if (!f) a: { f = b; !ca(b) && Cd(a, rc(b)) && (f = Ba(f)); if (ca(f) && (a = gh[f[1]], "event" === f[0] && a)) { f = We(a, f[2], "items"); break a } f = void 0 } (b = f || Al(b)) && c && c((d = {}, d.__ym = (e = {}, e.ecommerce = [b], e), d)) }
      function Al(a) { var c = n(a, "ecommerce") || {}; a = W(Ib(Bl), ea(c)); a = J(function (b, d) { b[d] = c[d]; return b }, {}, a); return ea(a).length ? a : void 0 } function Cl(a, c, b) {
        var d = !1, e = ""; if (!sc(c)) return wb(b, "Ecommerce data should be an object"), d; var f = c.goods; switch (a) {
          case "detail": case "add": case "remove": ca(f) && f.length ? (d = Dd(function (g) { return sc(g) && (La(g.id) || Cd(b, g.id) || La(g.name)) }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
            break; case "purchase": Cd(b, c.id) || La(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
        }wb(b, e); return d
      } function We(a, c, b) { var d, e; if (c) { var f = c.purchase || c; c = ea(f); var g = f[b]; if (g) { var h = (d = {}, d[a] = (e = {}, e.products = y(Dl, g), e), d); 1 < c.length && (h[a].actionField = J(function (k, l) { if (l === b) return k; if ("currency" === l) return h.currencyCode = f.currency, k; k[Xe[l] || l] = f[l]; return k }, {}, c)); return h } } } function Dl(a) {
        var c = {}; z(function (b) {
          var d = Xe[b] || b; -1 !== b.indexOf("item_category") ?
            (d = Xe.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
        }, ea(a)); return c
      } function El(a, c) { var b = hh(a), d = U(c), e = b[d]; e || (e = {}, b[d] = e); e.Th = !0; if (b = e.ag) d = ih(a), z(d, b) } function Fl(a, c, b, d) { var e; if (a = Ka(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); F(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Yf((e = {}, e.type = "params", e.data = f, e))) } } function jh(a, c, b) {
        var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { C(e, d)(bb(a, c)) } catch (f) { } else kh =
          T(a, K([a, c, 2 * b], jh), b, "ai.d"); return function () { return ha(a, kh) }
      } function Gl(a, c, b) { if (b && (b = Pg(a, b), b = Rg(a, b))) { b = "?" + Ec(b); var d = Eb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + "."); Me(a, c, "btn", d)(b) } } function Hl(a, c) { var b = Ma(a); if ("" !== b.l("cc")) return 0; var d = w("cc", b.o); d(0); var e = ba(a), f = R(a); f = u(V(Oa({ Kc: 1 }) + ".c"), Mc(function (g) { d(g + "&" + e(ib)) }), w("cc", f.o)); qa(a, "6", c)({}).then(f)["catch"](u(Mc(function () { var g = e(ib); b.o("cc", "&" + g) }), A(a, "cc"))) } function Il(a, c) {
        var b; a((b = {}, b.clickmap =
          S(c) ? !0 : c, b))
      } function Jl(a, c, b, d, e) {
        function f() { k && k.stop() } if (!c.Ra) return L.resolve(D); var g = qa(a, "4", c), h = { F: { "wv-type": "0" }, H: ta() }; b = new Kl(a, b, function (l, m, p) {
          if (g) {
            m = "wv-data=" + lh(l, !0); for (var q = l.length, r = 0, t = 255, x = 255, I, Y, wa; q;) { I = 21 < q ? 21 : q; q -= I; do Y = "string" === typeof l ? l.charCodeAt(r) : l[r], r += 1, 255 < Y && (wa = Y >> 8, Y &= 255, Y ^= wa), t += Y, x += t; while (--I); t = (t & 255) + (t >> 8); x = (x & 255) + (x >> 8) } l = (t & 255) + (t >> 8) << 8 | (x & 255) + (x >> 8); g(B({}, h, { $: m, F: { "wv-check": 65535 === l ? 0 : l, "wv-type": "0" } }), c, p)["catch"](A(a,
              "m.n.m.s"))
          }
        }); var k = Ll(a, b, d, e); return Ha(a, c, function (l) { l && R(a).o("isEU", n(l, "settings.eu")); !Ye(a) && k && mh(a, l) && k.start(); return f })
      } function mh(a, c) { var b = Jb(a), d = b.l("visorc"); F(d, ["w", "b"]) || (d = ""); nh(a) && oh(a, Nc, "visorc") && !Ml.test(jb(a) || "") || (d = "b"); var e = n(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = R(a).l("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.o("visorc", d, 30); return "w" === d } function Ll(a, c, b, d) {
        var e = a.document, f = [], g = fa(a), h = ":submit" + Math.random(), k = [], l = C(c.flush, c),
          m = Ca(function (r, t) { A(a, "hfv." + r, function () { try { var x = t.type } catch (I) { return } x = F(x, d); c.push(t, { type: r }); x && l() })() }), p = A(a, "sfv", function () {
            if (!Ze(a)) {
              var r = b(a), t = Nl(a); z(function (x) { f.push(g.C(x.target, [x.event], m(x.type))) }, r); z(function (x) { f.push(g.C(x.target, [x.event], A(a, "hff." + x.type + "." + x.event, function (I) { z(pa({ b: a, ha: I, flush: l }), x.M) }))) }, t); k = ph(a, "form", e); e.attachEvent && (r = ph(a, "form *", e), z(function (x) { f.push(g.C(x, ["submit"], m("form"))) }, k), z(function (x) {
                $e(x) && f.push(g.C(x, ["change"],
                  m("formInput")))
              }, r)); z(function (x) { var I = x.submit; if (Q(I) || "object" === typeof I && Ol.test("" + I)) x[h] = I, x.submit = A(a, "fv", function () { var Y = { target: x, type: "submit" }; m("document")(Y); return x[h]() }) }, k)
            }
          }), q = A(a, "ufv", function () { z(Ea, f); z(function (r) { r && (r.submit = r[h]) }, k); c.flush() }); return { start: p, stop: q }
      } function Pl(a, c) { var b = W(function (e) { return 0 < e.M.length }, c), d = qh({ target: a.document, type: "document" }); return y(u(P, d, Ql(a)), b) } function rh(a, c) {
        var b = a.b, d = [], e = c.form; if (!c[Na] && e) {
          var f = e.elements;
          e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; Ed(h) && !h[Na] && Sa(d, Xb(b, h)) }
        } else Sa(d, Xb(b, c)); return d
      } function af(a) { if (Oc) { Oc = !1; var c = kb(a.b), b = []; $a(a.b, b, 15) ? a = [] : (N(b, c), a = b); return a } } function sh(a) { if (!Oc) { Oc = !0; a = kb(a.b); var c = []; xb(c, 14); N(c, a); return c } } function Rl(a, c, b) {
        var d = c[Na]; if (d) {
          a: {
            var e = kb(a), f = c[Na]; if (0 < f) {
              var g = []; c = bf(a, c); var h = Yb[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.Ff) { h.Ff = k; if ($a(a, g, 9)) { a = []; break a } N(g, e); N(g, f); N(g, c[0]); N(g, c[1]) } if (l !== h.size) {
                h.size = l; if ($a(a,
                  g, 10)) { a = []; break a } N(g, e); N(g, f); N(g, c[2]); N(g, c[3])
              } if (g.length) { a = g; break a }
            } a = []
          } Sa(b, a)
        } return d
      } function nc(a, c, b) { void 0 === b && (b = !1); if ("button" === c.getAttribute("type")) return !1; var d = Ad(c), e = Fd(c); a = th(a, c) || b && e; return !d && a } function th(a, c) { return uh(a, c) || Pc(a, c) ? !0 : Hc(a, c) } function Fd(a) { if (!a) return !1; var c = a.placeholder, b = a.type; a = W(vh, [a.className, a.id, a.name]); return b && F(b, Sl) || Ta(Ya(Tl), a) || vh(c) && Ul.test(c) } function vh(a) { return !!(a && 2 < a.length) } function zd(a) {
        try {
          var c = ya(a); if (F(c,
            cf)) { if ("INPUT" === c) { var b = a.type; return !b || F(b.toLocaleLowerCase(), Vl) } return !0 }
        } catch (d) { } return !1
      } function wh(a, c) { return c && Zb("(ym-disable-submit|-metrika-noform)", c) } function Ad(a) { return a && Zb("ym-record-keys", a) } function Wl(a, c) { return G("", y(function (b) { return a.isNaN(b) ? Xl.test(b) ? (b = b.toUpperCase() === b ? Yl : Zl, String.fromCharCode(Wa(a, b[0], b[1]))) : b : "" + Wa(a, 0, 9) }, c.split(""))) } function Hc(a, c) {
        if (ra(c)) return !1; if (Ve(c)) { var b = c.parentNode; return (ra(b) ? 0 : 11 === b.nodeType) ? !1 : Hc(a, c.parentNode) } if ($l.test(c.className)) return !0;
        b = xh(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content *"); return d && (am.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
      } function bm(a, c, b, d, e) { var f; c = { H: ta(), F: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f) }; d(c, e)["catch"](A(a, "c.s.c")) } function cm(a, c, b, d, e) {
        if (Qc(a, "ymDisabledClickmap") || Ze(a) || !c || !c.element) return !1; a = ya(c.element); if (e && !e(c.element, a) || F(c.button, [2, 3]) && "A" !== a || Ta(ua(a), d)) return !1; d = c.element; if (c && b) {
          if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x -
            c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
        } for (; d;) { if (dm(d)) return !1; d = d.parentElement } return !0
      } function em(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function fm(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function yh(a, c) {
        var b = Hb(a), d = df(a); return {
          x: c.pageX || c.clientX + d.x -
            (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
        }
      } function gm(a) { var c = A(a, "i.clch", hm); fa(a).C(a.document, ["click"], C(c, null, a), { passive: !1 }); return function (b) { var d = ja.Ia, e = a.Ya[ja.Rb], f = !!e._informer; e._informer = B({ domain: "informer.yandex.ru" }, b); f || pc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" }) } } function im(a) {
        var c = void 0; void 0 === c && (c = jm); var b = n(a, "navigator") || {}; c = y(w(b, n), c); c = G("x", c); try {
          var d = n(a, "navigator.getGamepads"); var e = Da(d, "getGamepads") && a.navigator.getGamepads() ||
            []
        } catch (f) { e = [] } return c + "x" + rc(e)
      } function km(a) { try { var c = rc(a) ? a : []; return G(",", [a.name, a.description, u(oa, oc(Boolean), cb(lm), Rc(","))(c)]) } catch (b) { return "" } } function lm(a) { return G(",", [a.description, a.suffixes, a.type]) } function Mk(a) {
        return J(function (c, b) { var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = n(e, "rangeMax") || "n"; return c }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
          a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int",
          a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
            a.LOW_INT)]])
      } function Lk(a, c) {
        return [function () { var b = c.createBuffer(); b && c.getParameter && ia("getParameter", c.getParameter) || ef(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(mm); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.Zh = 3; b.mi = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); d && e || ef(); return { fe: d, lj: e, kj: b } }, function (b) {
          var d = b.fe, e = b.lj; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
          c.compileShader(e); c.attachShader(d, e); (d = c.createShader(c.FRAGMENT_SHADER)) || ef(); return B(b, { uh: d })
        }, function (b) { var d = b.fe, e = b.uh; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"); c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); return b }, function (b) {
          var d = b.fe; b = b.kj; d.jj = c.getAttribLocation(d, "attrVertex"); d.oi = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.ak); c.vertexAttribPointer(d.jj,
            b.Zh, c.FLOAT, !1, 0, 0); c.uniform2f(d.oi, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.mi); return c.canvas
        }]
      } function Kk(a, c) { if (!Q(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !ia("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function Ne(a, c) { c.clearColor(0, 0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]" } function nm(a) { a = n(a, "screen") || {}; return G("x", y(w(a, n), om)) } function Ik(a) {
        var c =
          n(a, "matchMedia"); if (!c || !ia("matchMedia", c)) return ""; var b = da("matchMedia", a); return J(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, pm)
      } function Bk(a) { a = Za(a); if (!a) return ""; a = a("video"); try { var c = da("canPlayType", a), b = Vb(function (d) { return y(u(P, da("concat", d + "; codecs=")), qm) }, zh); return y(c, [].concat(zh, b)) } catch (d) { return "canPlayType" } } function rm(a) { a = n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" } function sm(a, c, b, d, e) {
        var f = e(X); return tm(a, b, c)(Kb(function (g) {
          z(function (h) {
            ff(a,
              "d.s", h)
          }, g); g = e(ib); d.o("ds", g)
        }, function (g) { var h = g.Kc, k = g.host; if (n(h, "settings")) return ob(pb("ds.e")); d.o("ds", e(ib)); g = e(X) - f; k = k[1]; var l, m; h = ta((l = {}, l.di = h, l.dit = g, l.dip = k, l)); l = (m = {}, m["page-url"] = O(a).href, m); return qa(a, "S", Ah)({ H: h, F: l }, Ah)["catch"](A(a, "ds.rs")) }))
      } function um(a, c, b, d, e) { return new L(function (f, g) { var h = R(a); if (h.l("dSync", !1)) return g(); h.o("dSync", !0); h = d.l("ds", 0); h = parseInt("" + h, 10); return 60 >= c(ib) - h ? g() : vm(a) ? f(void 0) : Bh(e) ? g() : f(wm(a, b)) }) } function tm(a, c, b) {
        var d =
          qa(a, "s", c); return xm(y(function (e) { return zm(d(Am, y(function (f) { var g = f[1], h = f[2]; f = G("", y(function (k) { return String.fromCharCode(k.charCodeAt(0) + 10) }, f[0].split(""))); return "http" + (h ? "s" : "") + "://" + f + ":" + g + "/p" }, e), { rg: !1, Hi: !0 }).then(function (f) { return B({}, f, { host: e[f.hj] }) })) }, b))
      } function Bm(a, c, b) {
        var d = c || {}, e = qa(a, "u", b), f = Ma(a); return {
          l: function (g, h) { return S(d[g]) ? f.l(g, h) : d[g] }, o: function (g, h) {
            var k, l = "" + h; d[g] = l; f.o(g, l); return e({ F: (k = {}, k.key = g, k.value = l, k) }, [ja.Ia + "//mc.yandex.ru/user_storage_set"],
              {})["catch"](A(a, "u.d.s.s"))
          }
        }
      } function Cm(a, c) {
        if (a.$i()) {
          var b = null; try { b = c.target || c.srcElement } catch (t) { } if (b) { 3 === b.nodeType && (b = b.parentNode); for (var d = b && b.nodeName && ("" + b.nodeName).toLowerCase(); n(b, "parentNode.nodeName") && ("a" !== d && "area" !== d || !b.href && !b.getAttribute("xlink:href"));)d = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase(); var e = b.href ? b : null } else e = null; if (e && !Zb("ym-disable-tracklink", e)) {
            var f = a.b, g = a.globalStorage; b = a.Zg; var h = a.$g, k = a.Rh, l = a.sender, m = a.mh, p = h.ec,
              q = e.href; d = $b(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, "")); d = q === d ? "" : d; if (Zb("ym-external-link", e)) Gd(f, h, { url: q, yb: !0, title: d, sender: l }); else {
                p = p ? mc(f, p).hostname : O(f).hostname; m = RegExp("\\.(" + G("|", y(Dm, m)) + ")$", "i"); var r = e.protocol + "//" + e.hostname + e.pathname; m = Ch.test(r) || Ch.test(q) || m.test(q) || m.test(r); e = e.hostname; Dh(p) === Dh(e) ? m ? Gd(f, h, { url: q, rc: !0, title: d, sender: l }) : ((k = (f = g.l("pai", D)()) && f + "-" + k) && b.o("pai", k), d && b.o("il", $b(d).slice(0, 100))) : q && Em.test(q) || Gd(f, h, {
                  url: q, wc: !0,
                  yb: !0, rc: m, title: d, sender: l
                })
              }
          }
        }
      } function Gd(a, c, b, d) { var e, f = ta(); b.rc && f.o("dl", "1"); b.yb && f.o("ln", "1"); f = { H: f, title: b.title, wc: !!b.wc, R: b.R, F: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.ec || O(a).href, e) }; e = "Link"; b.rc ? e = b.yb ? "Ext link - File" : "File" : b.yb && (e = "Ext link"); b.sender(f, c).then(d || D).then(Eb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b))["catch"](A(a, "cl.p.s")).then(K([a, b.Sa || D, b.b], Lb)) } function Fm(a, c) {
        var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks =
          e, d))
      } function Gm(a, c, b, d) { var e = O(a), f = e.hostname; e = e.href; if (c = Sc(c).url) a = mc(a, c), f = a.hostname, e = a.href; return [d + "://" + f + "/" + b, e || ""] } function Hd(a, c) { return u(Eh(c), gf(a)) } function Tc(a, c) { return u(Hm(c), gf(a)) } function gf(a) { a = R(a); var c = a.l("dsjf") || pa({}); a.Qa("dsjf", c); return c } function Hg(a) { return !!Xa(function (c) { return F(c.type, ["articleInfo", "publishersHeader"]) }, a) } function Fh(a) {
        var c = hf(a).isEnabled, b = !1; try {
          b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1,
            2])])).size
        } catch (d) { } return Dd(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
      } function jf(a, c) { var b = c[1][3], d = 0, e = new a.Uint8Array(c[0]); return ac([b], function (f, g) { if (!f) return e; f[0](a, f[2], e, d); d += f[1]; g.push(f[3]); return e }) } function Id(a, c, b) {
        a = c(b); c = [D, 0, 0]; var d = [0, c, c, void 0]; return ac(a, function (e, f) {
          var g = e[0], h = e[1], k = e[2]; if (0 === g) return k(d, h), d; if (void 0 === h || null === h) return d; var l = g >> 3; if (g & 1) bc(d, db(l)), h = k(h), l & 2 && bc(d, db(h[1])), bc(d, h); else if (g & 4) for (g = h.length -
            1; 0 <= g;) { var m = k(h[g]); m.push([0, 0, kf]); m.push([0, db(l), bc]); m.unshift([0, 0, lf]); f.push.apply(f, m); --g } else if (g & 2) { k = e[2]; var p = e[3], q = e[4], r = e[5], t = ea(h); for (g = t.length - 1; 0 <= g;)m = t[g], m = [[0, 0, lf], [q, h[m], r], [k, m, p], [0, 0, kf], [0, db(l), bc]], f.push.apply(f, m), --g } else m = k(h), m.push([0, 0, kf]), m.push([0, db(l), bc]), m.unshift([0, 0, lf]), f.push.apply(f, m); return d
        })
      } function lf(a) {
        var c = a[1], b = a[0], d = a[2]; a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [D, 0, 0], a[2] = a[1]); bc(a, db(b));
        b && (a[2][3] = c[3], a[2] = d, a[0] += b)
      } function kf(a) { a[3] = [a[0], a[1], a[2], a[3]]; a[1] = [D, 0, 0]; a[2] = a[1]; a[0] = 0 } function bc(a, c) { a[0] += c[1]; a[2][3] = c; a[2] = c } function mf(a) { return [[385, a.Gg, db], [336, a.Ci, Im], [272, a.Jg, Jm], [208, a.event, Km], [144, a.hi, Lm], [80, a.page, Mm]] } function Nm(a) { return [[321, a.end, yb], [273, a.Vg, Om], [193, a.page, H], [144, a.data, mf], [65, a.K, H]] } function Gh(a) { return [[84, a.buffer, Nm]] } function Pm(a) { return [[129, a.position, H], [81, a.name, M]] } function Qm(a) { return [[81, a.name, M]] } function Rm(a) {
        return [[81,
          a.name, M]]
      } function Jm(a) { return [[593, a.fj, M], [532, a.Ii, Pm], [449, a.Oe, H], [401, a.Bi, M], [340, a.Ui, Qm], [276, a.Lg, Rm], [209, a.xi, M], [145, a.yi, M], [65, a.id, db]] } function Sm(a) { return [[513, a.Oe, H], [489, a.ei, Uc], [385, a.ab, H], [321, a.height, H], [257, a.width, H], [193, a.y, H], [129, a.x, H], [65, a.id, db]] } function Im(a) { return [[129, a.ab, H], [84, a.Kg, Sm]] } function Tm(a) { return [[81, a.hash, M]] } function Um(a) { return [[209, a.stack, M], [145, a.Gj, M], [81, a.code, M]] } function Vm(a) {
        return [[193, a.orientation, H], [129, a.height, H], [65,
          a.width, H]]
      } function Wm(a) { return [[84, a.uc, Xm]] } function Xm(a) { return [[273, a.vc, M], [193, a.tf, yb], [145, a.key, M], [65, a.id, H]] } function Ym(a) { return [[145, a.value, M], [81, a.Uj, M]] } function Zm(a) { return [[149, a.Ob, M], [81, a.method, M]] } function $m(a) { return [[257, a.fb, H], [193, a.gb, H], [129, a.height, H], [65, a.width, H]] } function an(a) { return [[144, a.vg, Hh], [80, a.sg, Hh]] } function Hh(a) { return [[193, a.y, H], [129, a.x, H], [105, a.level, Uc]] } function bn(a) { return [[84, a.touches, cn]] } function cn(a) {
        return [[297, a.force, Uc],
        [233, a.y, Uc], [169, a.x, Uc], [81, a.id, M]]
      } function dn(a) { return [[193, a.hidden, yb], [129, a.checked, yb], [81, a.value, M]] } function en(a) { return [[257, a.Ue, H], [193, a.bg, H], [129, a.end, H], [65, a.start, H]] } function fn() { return [] } function gn(a) { return [[193, a.page, yb], [129, a.y, H], [65, a.x, H]] } function hn(a) { return [[129, a.y, H], [65, a.x, H]] } function jn(a) { return [[84, a.ya, kn]] } function kn(a) { return [[257, a.index, H], [209, a.Ud, M], [145, a.style, M], [65, a.target, H]] } function Km(a) {
        return [[1168, a.Pi, jn], [1104, a.Qh, Tm], [1040,
          a.lh, Um], [976, a.dh, Vm], [912, a.ai, Wm], [848, a.Ei, $m], [784, a.pj, an], [720, a.Vj, Ym], [656, a.Rj, Zm], [592, a.Vi, bn], [528, a.Sg, dn], [464, a.Ki, en], [400, a.mj, fn], [336, a.Ji, gn], [272, a.fi, hn], [193, a.L, Jd], [129, a.target, Jd], [65, a.type, db]]
      } function Lm(a) { return [[257, a.L, Jd], [208, a.Y, ln], [129, a.K, H], [65, a.target, H]] } function ln(a) { return [[148, a.ya, mn], [65, a.index, H]] } function mn(a) { return [[276, a.d, nn], [212, a.bd, on], [148, a.Le, pn], [84, a.Ie, qn]] } function nn(a) { return [[193, a.ua, H], [144, a.Wb, Ih], [65, a.id, H]] } function on(a) {
        return [[193,
          a.ua, H], [146, a.pb, 81, M, 144, Ih], [65, a.id, H]]
      } function Ih(a) { return [[193, a.r, yb], [145, a.n, M], [81, a.yc, M]] } function pn(a) { return [[641, a.Ka, yb], [577, a.ua, H], [513, a.Pd, H], [465, a.Wb, M], [402, a.pb, 81, M, 145, M], [321, a.Yd, H], [273, a.Bf, M], [193, a.Vd, H], [145, a.Af, M], [65, a.id, H]] } function qn(a) { return [[321, a.ua, H], [257, a.Vd, H], [193, a.Pd, H], [129, a.Yd, H], [65, a.id, H]] } function Mm(a) { return [[321, a.wa, rn], [273, a.Rc, M], [193, a.L, Jd], [148, a.content, sn], [80, a.Y, tn]] } function sn(a) {
        return [[513, a.hidden, yb], [449, a.$d, H], [385,
          a.next, H], [337, a.content, M], [257, a.parent, H], [210, a.attributes, 81, M, 145, M], [145, a.name, M], [65, a.id, H]]
      } function tn(a) { return [[724, a.Nj, un], [656, a.location, vn], [592, a.viewport, Jh], [528, a.screen, Jh], [449, a.jf, yb], [401, a.Me, M], [337, a.referrer, M], [273, a.mg, M], [209, a.Je, M], [145, a.title, M], [81, a.doctype, M]] } function un(a) { return [[133, a.scroll, H], [65, a.target, H]] } function vn(a) { return [[209, a.path, M], [145, a.protocol, M], [81, a.host, M]] } function Jh(a) { return [[129, a.height, H], [65, a.width, H]] } function M(a) {
        var c =
          wn({}, a, [], 0); return c ? [xn, c, a] : [Kh, 1, 0]
      } function Om(a) { return [yn, a.length, a] } function yb(a) { return [Kh, 1, a ? 1 : 0] } function rn(a) { a = Lh(a); var c = a[0], b = a[1], d = (b >>> 28 | c << 4) >>> 0; c >>>= 24; return [Mh, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a] } function Uc(a) { return [zn, 4, a] } function Jd(a) { return db((a << 1 ^ a >> 31) >>> 0) } function H(a) { return 0 > a ? [Mh, 10, Lh(a)] : db(a) } function db(a) { return [An, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a] } function An(a, c, b, d) {
        for (a = c; 127 <
          a;)b[d++] = a & 127 | 128, a >>>= 7; b[d] = a
      } function Kh(a, c, b, d) { b[d] = c } function yn(a, c, b, d) { for (a = 0; a < c.length; ++a)b[d + a] = c[a] } function Nh(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c; else {
            if (2048 > c) { if (a) { g += 2; continue } d[e++] = c >> 6 | 192 } else {
              if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) { if (a) { g += 4; continue } c = 65536 + ((c & 1023) << 10) + (f & 1023); ++h; d[e++] = c >> 18 | 240; d[e++] = c >> 12 & 63 | 128 } else { if (a) { g += 3; continue } d[e++] = c >> 12 | 224 } d[e++] = c >> 6 & 63 |
                128
            } d[e++] = c & 63 | 128
          } return a ? g : e
        }
      } function zn(a, c, b, d) { return Bn(a)(a, c, b, d) } function Cn(a, c, b, d) { var e = 0 > c ? 1 : 0; e && (c = -c); if (0 === c) Vc(0 < 1 / c ? 0 : 2147483648, b, d); else if (a.isNaN(c)) Vc(2143289344, b, d); else if (3.4028234663852886E38 < c) Vc((e << 31 | 2139095040) >>> 0, b, d); else if (1.1754943508222875E-38 > c) Vc((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d); else { var f = a.Math.floor(a.Math.log(c) / Math.LN2); Vc((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d) } } function Vc(a, c, b) {
        c[b] = a &
          255; c[b + 1] = a >>> 8 & 255; c[b + 2] = a >>> 16 & 255; c[b + 3] = a >>> 24
      } function Mh(a, c, b, d) { a = c[0]; for (c = c[1]; a;)b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7; for (; 127 < c;)b[d++] = c & 127 | 128, c >>>= 7; b[d++] = c } function Lh(a) { if (!a) return [0, 0]; var c = 0 > a; c && (a = -a); var b = a >>> 0; a = (a - b) / 4294967296 >>> 0; c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0))); return [a, b] } function Kd(a) {
        return ca(a) ? y(Kd, a) : ra(a) || "object" !== typeof a ? a : J(function (c, b) {
          var d = b[0], e = b[1], f = Dn[d]; S(f) && (f = d); e = F(f, En) ? e : Kd(e); f ? c[f] = e : c[d] =
            e; return c
        }, {}, Aa(a))
      } function Eb(a, c, b, d) { return Oh(c) ? D : w(K(ka([a], d ? [b + ". Params:", d] : [b]), wb), Ea) } function wb() { var a = Ba(arguments), c = a.slice(1); Ld(a[0]).log.apply(wb, c) } function hf(a) { var c = Jb(a), b = O(a); c = "1" === c.l("debug"); b = -1 < b.href.indexOf("_ym_debug=1"); a = a._ym_debug; return { Nh: c, Wh: a || b, isEnabled: Ta(Boolean, [c, a, b]) } } function Fn(a, c, b) { var d; (d = va[c]) || (d = Fa); d = d.slice(); d.unshift(Gn); d.unshift(Hn); return y(u(Ph([a, c, b]), Ea), d) } function Qh(a, c) {
        var b = O(a), d = b.href, e = b.host, f = -1; if (!La(c) ||
          S(c)) return d; b = c.replace(Rh, ""); if (-1 !== b.search(In)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length - 1] = b, G("/", d); return ""
      } function Sh(a) { return { ba: function (c, b) { if (!c.H) return b(); var d = R(a).l("fid"); !Th && d && (Md(c, "fid", d), Th = !0); return b() } } } function Uh(a) {
        return {
          ba: function (c, b) {
            var d = c.H; if (d) {
              var e =
                R(a).l("adBlockEnabled"); e && d.o("adb", e)
            } b()
          }
        }
      } function Hn(a) { return { ba: function (c, b) { Ye(a) || b() } } } function Ye(a) { var c; return c = (c = !!R(a).l("oo")) || Ze(a) } function Jn(a) { a = Kn(a); return Ln[a] || a } function Mn(a) { a = Vh(a); return Nn[a] || "ru" } function Gn(a, c, b) { return { ba: function (d, e) { On(a, d, b, e) } } } function On(a, c, b, d) {
        var e = c.H; if (b.nj || !e) d(); else {
          var f = Nd(a), g = Ic(a, ""); d = u(function () { var r = Wh(f); r = "" + r + Pn(r, g); e.o("gdpr", r); Md(c, "gdpr", r) }, d); if (3 === b.id) d(); else {
            var h = R(a), k = h.l("f1"); if (k) k(d); else if (k =
              (k = Wh(f)) ? y(w(Od, n), k.split(",")) : [], Xh(k)) d(); else {
              var l = Pd(a), m = O(a), p = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.l("yaGdprCheck")); m = g.l("gdpr"); g.l("yandex_login") ? (k.push("13"), g.o("gdpr", tc, 525600)) : l ? F(m, Mb) ? m === nf ? k.push("12") : k.push("3") : of(a) || Wc(a) ? k.push("17") : Qn(a) && k.push("28") : k.push("14"); var q = w(f, Rn); Xh(k) ? (z(q, k), d()) : (Qd.push(d), h.o("f1", function (r, t) { var x = 0; if (t) { var I = bb(a, t) || ""; x += I.length } Qd.push(r); 1E6 >= x && Qd.push(r) }), (0, pf[0])(a).then(V("params.eu")).then(function (r) {
                if (r ||
                  p) { g.o("gdpr_popup", nf); Sn(a, b); if (ub(a)) return Tn(a, q, b); var t = Yh(a, f); if (t) return r = Un(a, q, t, b), r.then(K([a, b], Vn)), r } r || q("8"); return L.resolve({ value: tc, Hd: !0 })
              }).then(function (r) { g.Zb("gdpr_popup"); if (r) { var t = r.value; r = r.Hd; F(t, Mb) && g.o("gdpr", t, r ? void 0 : 525600) } t = ac(Qd, Ea); cc(a, t, 20)(Kb(A(a, "gdr"), D)); h.o("f1", Ea) })["catch"](A(a, "gdp.a")))
            }
          }
        }
      } function Vn(a, c) { if (Pd(a)) { var b = Nd(a), d = Ka(a, c); d = d && d.params; b = y(w(Wn, n), qf(b)); d && b.length && d("__ym", "gdpr", W(Boolean, b)) } } function Ka(a, c) {
        var b =
          R(a).l("counters", {}), d = U(c); return b[d]
      } function Tn(a, c, b) { var d = Rd(a, b); return new L(function (e) { var f; if (d) { var g = d.Z, h = u(w("4", c), w(null, e)), k = T(a, h, 2E3, "gdp.f.t"); d.Yf((f = {}, f.type = "isYandex", f)).then(function (l) { l.isYandex ? (c("5"), g.C(G(",", ka(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], rf)), function (m) { e({ value: Zh(m[1].type) }) })) : (c("6"), e(null)) })["catch"](h).then(K([a, k], ha)) } else e({ value: nf, Hd: !0 }) }) } function Sn(a, c) {
        var b = Rd(a, c); b && b.Z.C("isYandex", function () {
          var d; return d = { type: "isYandex" },
            d.isYandex = Pd(a), d
        }); return b
      } function Un(a, c, b, d) {
        var e = Xn(a, d.oj), f = Rd(a, d); if (!f) return L.resolve({ value: tc, Hd: !0 }); e = (d = Yn(a, d)) ? e + "_inversed_buttons" : e; c(d ? "30" : "29"); var g = pc(a, { src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js" }); return new L(function (h, k) {
          g ? (c("7"), g.onerror = function () { var l; c("9"); f.Xf((l = {}, l.type = "GDPR-ok-view-default", l)); h(null) }, g.onload = function () {
            c("10"); b.C(G(",", ka(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], rf)), function (l) {
              var m; l = l.type; f.Xf((m = {}, m.type =
                l, m)); h({ value: Zh(l) })
            })
          }) : (c("9"), k(pb("gdp.e")))
        })
      } function Xn(a, c) { var b = c || Vh(a); return F(b, Zn) ? b : "en" } function Yn(a, c) { var b = (Sd(a, c) || "").slice(-1); b = parseInt(b, 10); return !a.isNaN(b) && 1 > b } function $h(a, c) {
        var b = ai(a, c), d = [], e = []; if (!b) return null; var f = $n(a, b.le), g = ao(f); b.Z.C("initToParent", function (h) { g(d, b.rb[h[1].counterId]) }).C("parentConnect", function (h) { g(e, b.Db[h[1].counterId]) }); return {
          Z: b.Z, Yj: function (h, k) {
            return new L(function (l, m) {
              b.le(h, k, function (p, q) { l([p, q]) }); T(a, w(pb(), m),
                5100, "is.o")
            })
          }, Xf: function (h) { var k = { Zf: [], ze: [], data: h }; d.push(k); return f(b.rb, k, h) }, Yf: function (h) { var k = { Zf: [], ze: [], data: h }; e.push(k); return f(b.Db, k, h) }
        }
      } function Td() {
        return function (a, c, b) {
          return {
            ba: function (d, e) {
              var f, g = d.H, h = d.F; if (g && h) {
                var k = F(h["wv-type"], bo); if (!h["wv-type"] || k) {
                  var l = ba(a); g.pe("rqnl", 1); g = g.b(); for (var m = Xc(a), p = 1; m[p];)p += 1; d.Gb = p; m[p] = (f = {}, f.protocol = ja.Ia, f.host = "mc.yandex.ru", f.resource = k ? "webvisor" : "watch", f.postParams = d.$, f.time = l(X), f.counterType = b.aa, f.params =
                    h, f.browserInfo = g, f.counterId = b.id, f.ghid = uc(a), f); sf(a)
                }
              } e()
            }, Ga: function (d, e) { bi(a, d); e() }
          }
        }
      } function bi(a, c) { var b = Xc(a); c.H && !Ia(b) && (delete b[c.Gb], sf(a)) } function sf(a) { var c = Xc(a); Ma(a).o("retryReqs", c) } function Ud(a, c, b) {
        var d = Vd(a, c, b); return function (e, f, g) {
          var h; e = B({ H: ta() }, e); e.F || (e.F = {}); var k = e.F; k.wmode = "0"; k["wv-part"] = "" + g; k["wv-hit"] = k["wv-hit"] || "" + uc(a); k["page-url"] = k["page-url"] || a.location.href; k.rn = k.rn || "" + Wa(a); if (!k["wv-type"]) {
            g = e.Pe; var l = "4", m = "2"; e.rf && (l = "5", m = "3");
            k["wv-type"] = g ? l : m
          } f = "webvisor/" + f.id; return d(B(e, { F: k }), f, { Eb: (h = {}, h["Content-Type"] = "text/plain", h), pg: "POST" })
        }
      } function co(a, c, b, d) { c = d.l("cc"); d = K(["cc", ""], d.o); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && parseInt(e, 10)) && 1440 < ba(a)(ib) - e) return d(); b.o("cc", c) } else ua(0)(c) || d() } function eo(a, c, b, d) {
        return Ha(a, c, function (e) {
          if ("0" === n(e, "settings.pcs") && !Yc(a)) if (e = d.l("zzlc"), S(e) || Ia(e) || "na" === e) {
            e = "ru"; var f = ci(a, 68), g = di(a, 79); if (f || g) e = "md"; if (f = Za(a)) {
              var h = f("iframe"); B(h.style,
                { display: "none", width: "1px", height: "1px", visibility: "hidden" }); h.src = "https://mc.yandex." + e + fo("L21ldHJpa2EvenpsYy5odG1s"); if (e = Hb(a)) { e.appendChild(h); var k = 0, l = fa(a).C(a, ["message"], A(a, "zz.m", function (m) { (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (dc(h), m = m.substr(8), d.o("zzlc", m), b.o("zzlc", m), l(), ha(a, k)) })); k = T(a, u(l, w(h, dc)), 3E3) }
            }
          } else b.o("zzlc", e)
        })
      } function Ha(a, c, b) { a = U(c); return ei()(go(a)).then(b) } function ho(a, c, b) { c = U(c); a = tf(a); b = B({ oh: a(X) }, b); return ei()(io(c, b)) } function jo(a,
        c, b) {
        var d, e; c = Xa(w(a, n), ko); c = S(c) ? null : n(a, c); if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
          var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel"); Q(a) && (C(a, f, "y.metrika")(), a = n(f, "createOffer"), Q(a) && !a.length && (a = C(a, f)(), d = n(a, "then"), Q(d) && C(d, a, function (g) { var h = n(f, "setLocalDescription"); Q(h) && C(h, f, g, D, D)() })(), B(f, (e = {}, e.onicecandidate = function () {
            var g, h = n(f, "close"); if (Q(h)) {
              h = C(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) {
                f.onicecandidate =
                  D; "closed" !== f.iceConnectionState && h(); return
              } k && 0 < k.length && (g = Nb(k[1]), b.o("pp", g)); f.onicecandidate = D; h()
            }
          }, e))))
        }
      } function lo(a, c, b) { var d, e = ai(a, c); if (e) { e.Z.C("gpu-get", function () { var h; return h = {}, h.type = "gpu-get", h.pu = b.l("pu"), h }); var f = n(a, "opener"); if (f) { var g = T(a, K([a, c, b], fi), 200, "pu.m"); e.le(f, (d = {}, d.type = "gpu-get", d), function (h, k) { var l = n(k, "pu"); l && (ha(a, g), b.o("pu", l)) }) } else fi(a, c, b) } } function fi(a, c, b) { var d = n(a, "location.host"); a = Sd(a, c); b.o("pu", "" + Nb(d) + a) } function mo(a, c) {
        var b =
          Wd(a); c.C("initToParent", function (d) { var e = d[1]; b.rb[e.counterId] = { info: e, window: d[0].source } }).C("initToChild", function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.V("parentConnect", [e, d]) }).C("parentConnect", function (d) { var e = d[1]; e.counterId && (b.Db[e.counterId] = { info: e, window: d[0].source }) })
      } function uf(a, c, b) {
        return {
          ba: function (d, e) {
            var f = d.H; if (f && (!b || b.Wf)) {
              var g = a.document.title; d.title && (g = d.title); var h = Ob("getElementsByTagName", a.document); "string" !== typeof g && h && (g = h("title"), g = (g = n(g,
                "0.innerHtml")) ? g : ""); g = g.slice(0, ja.zg); f.o("t", g)
            } e()
          }
        }
      } function ec(a) { void 0 === a && (a = no); return function (c, b, d) { return { ba: function (e, f) { var g = e.H, h = e.F; if (g && h) { var k = Md(e); z(function (l) { var m = eb[l], p = "bi", q = g; eb[l] || (m = Zc[l], p = "tel", q = k); m && (m = E(p + ":" + l, m, null)(c, d, e), q.pe(l, m)) }, a) } f() } } } } function uc(a) { var c = R(a), b = c.l("hitId"); b || (b = Wa(a), c.o("hitId", b)); return b } function oo(a, c, b, d, e, f, g, h) { var k = b.l(f); ra(k) && (b.o(f, g), e(a, c, b, d), k = b.l(f, g)); S(h) || h.pe(f, "" + k); return k } function po(a, c) {
        if ($c(a)) {
          var b =
            jb(a).match(qo); if (b && b.length) return b[1] === c
        } return !1
      } function ci(a, c) { if (ad(a) && c) { var b = jb(a).match(ro); if (b && b.length) return +b[1] >= c } return !1 } function di(a, c) { var b = jb(a); return b && (b = b.match(so)) && 1 < b.length ? parseInt(b[1], 10) >= c : !1 } function lh(a, c) {
        void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >>
            12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63]])
        } switch (b - d) {
          case 1: b = a[d] << 4; e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "="]); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >>
            6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "="])
        }e = e.join(""); return c ? gi(e, !0) : e
      } function fo(a, c) {
        void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = gi(b)); b.length % 4;)b += "="; do {
          var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
            k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)); if (0 > f || 0 > g || 0 > h || 0 > k) return null; var l = f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
        } while (e < b.length); return d
      } function gi(a, c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return to[b] || b }) : "" } function hi(a, c) {
        var b = a.length ? y(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length =
          0; z(u(P, da("push", a)), c); return W(ua(null), b).length === a.length ? null : b
      } function ii(a, c, b) { return y(function (d) { var e = d[0], f = d[1]; if (Q(e)) return e(a, c) || null; if (Q(f)) return null; var g = !(!c[e] || !c[f]); !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(ji[d[0]] || ji[g])); return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null }, b) } function bd(a, c, b) {
        return {
          ba: function (d, e) {
            var f = ki(b), g = d.H; g ? g.l("pv") && !g.l("ar") ? (f.Ye = g, e()) : f.oc ? f.oc.push(e) : e() :
              e()
          }, Ga: function (d, e) { var f = d.H, g = d.Gi, h = ki(b); if (f) { var k = h.oc; h.Ye === f && k && (g && R(a).o("isEU", n(g, "settings.eu")), z(Ea, k), h.oc = null) } e() }
        }
      } function vf(a) { return { ba: function (c, b) { var d = a.document, e = c.H; if (e && wf(a)) { var f = fa(a), g = function (h) { wf(a) || (f.Kb(d, li, g), b()); return h }; f.C(d, li, g); e.o("pr", "1") } else b() } } } function Pa(a, c, b) {
        var d = Vd(a, c, b); return function (e, f) {
          var g, h = B({ H: ta() }, e), k = h.F, l = h.H; k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g); "0" !== f.aa && (k["cnt-class"] = f.aa);
          g = B(h, { F: B(h.F || {}, k) }); h = ""; if (g.H) { k = U(f); k = xf(f)[k] || {}; var m = k.status; "rt" === k.If && m ? (1 === m && (h = Ag(a, f) + "."), g.H.o("rt", m)) : h = "" } B(g, { kf: h }); return d(g, "watch/" + f.id, { Fe: !(!l.l("pv") || l.l("ar") || l.l("wh")) })
        }
      } function Vd(a, c, b) { var d = fc(a, c); return function (e, f, g) { void 0 === g && (g = {}); var h = uo(a); e.kf && (h = "" + e.kf + h); f = [ja.Ia + "//" + (h || "mc.yandex.ru") + "/" + f]; return yf(a, b, e, !0).then(K([e, f, g], d)).then(function (k) { e.Gi = k.Kc; return yf(a, b, e).then(w(k.Kc, P)) }) } } function uo(a) {
        var c = "mc.yandex.ru", b =
          n(a, "document.referrer"); if (!b) return c; (a = mc(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (a = a[0].split("yandex").reverse()[0].substring(1), a = F(a, mi) ? a : !1) : a = !1; return "mc.yandex." + (a || "ru")
      } function vo(a, c) { return a && c ? ni(a) === ni(c) : a || c ? !1 : !0 } function ni(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function yf(a, c, b, d) {
        void 0 === d && (d = !1); return new L(function (e, f) {
          function g(l, m) { m(); e() } var h = c.slice(); h.push({ ba: g, Ga: g }); var k = ac(h, function (l,
            m) { var p = d ? l.ba : l.Ga; if (p) try { p(b, m) } catch (q) { k(wo), f(q) } else m() }); k(oi)
        })
      } function vb(a, c, b) { var d = b || "as"; if (a.postMessage && !a.attachEvent) { b = fa(a); var e = "__ym__promise_" + Wa(a) + "_" + Wa(a), f = D; d = A(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.C(a, ["message"], d); a.postMessage(e, "*") } else T(a, c, 0, d) } function Gg(a, c, b, d, e, f) { void 0 === d && (d = 1); void 0 === e && (e = 200); void 0 === f && (f = "itc"); c = ac(c, b); cc(a, c, d, e)(Kb(A(a, f), D)) } function xo(a) {
        a.flush =
          !0
      } function cc(a, c, b, d, e) { function f(g, h) { function k() { try { var m = c(e(a, b)); l = l.concat(m) } catch (p) { return g(p) } c(yo); if (c(cd)) return h(l); f.flush ? (c(e(a, 1E4)), h(l)) : T(a, k, d) } var l = []; k() } void 0 === b && (b = 1); void 0 === d && (d = 200); void 0 === e && (e = pi); return pa(f) } function Qe(a) { return pa(function (c, b) { b(a) }) } function zm(a) { return pa(function (c, b) { a.then(b, c) }) } function zo(a) { var c = [], b = 0; return pa(function (d, e) { z(function (f, g) { f(Kb(d, function (h) { try { c[g] = h, b += 1, b === a.length && e(c) } catch (k) { d(k) } })) }, a) }) }
      function xm(a) { var c = [], b = !1; return pa(function (d, e) { function f(g) { c.push(g) === a.length && d(c) } z(function (g) { g(Kb(f, function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } })) }, a) }) } function ac(a, c) { void 0 === c && (c = P); return pa({ La: a, Id: c, te: !1, na: 0 }) } function oi(a) { function c() { function d() { b = !0; a.na += 1 } b = !1; a.Id(a.La[a.na], function () { d() }); b || (a.na += 1, d = C(oi, null, a)) } for (var b = !0; !cd(a) && b;)c() } function pi(a, c) { return function (b) { var d = ba(a), e = d(X); return qi(function (f, g) { d(X) - e >= c && g(ri) }, b) } } function Xd(a,
        c) { return function (b) { var d = ba(a), e = d(X); return Yd(function (f) { d(X) - e >= c && ri(f) })(b) } } function Yd(a) { return function (c) { for (var b; c.La.length && !cd(c);)b = c.La.pop(), b = c.Id(b, c.La), a(c); return b } } function Ao(a) { cd(a) && ob(vc("i")); var c = a.Id(a.La[a.na]); a.na += 1; return c } function yo(a) { a.te = !1 } function ri(a) { a.te = !0 } function wo(a) { a.na = a.La.length } function cd(a) { return a.te || a.La.length <= a.na } function fc(a, c) { return function (b, d, e) { void 0 === e && (e = {}); return si(a, c, d, b, B(e, { za: b.za || [], $: e.$ || b.$ })) } }
      function si(a, c, b, d, e, f, g) {
        var h; void 0 === f && (f = 0); void 0 === g && (g = 0); var k = B({}, e), l = c[g], m = l[0]; l = l[1]; var p = B({}, d.F), q = ba(a); d.H && (p["browser-info"] = ta(d.H.b()).o("st", q(Zd)).Ca()); !p.t && (q = d.Sc) && (q.o("ti", m), p.t = q.Ca()); q = b[f]; k.Eb && k.Eb["Content-Type"] || !k.$ || (k.Eb = B({}, k.Eb, (h = {}, h["Content-Type"] = "application/x-www-form-urlencoded", h)), k.$ = "site-info=" + zf(k.$)); k.pg = k.$ ? "POST" : "GET"; k.Fb = p; k.za.push(m); return l("" + q + (d.ji ? "/1" : ""), k).then(function (r) { return { Kc: r, hj: f } })["catch"](function (r) {
          var t =
            g + 1 >= c.length, x = f + 1 >= b.length; t && x && ob(r); return si(a, c, b, d, e, !x && t ? f + 1 : f, t ? 0 : g + 1)
        })
      } function ti(a, c) { var b = c.Ld, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = Jb(a), f = Ma(a), g = ba(a), h = g(Zd), k = ui(a, c), l = k[0]; k = k[1]; var m = e.l("d"); vi(a, c); var p = !1; !k && l && (k = l, p = !0); if (!k) k = G("", [g(Zd), Wa(a)]), p = !0; else if (!m || 15768E3 < h - parseInt(m, 10)) p = !0; p && !c.bb && (e.o(d, k, 525600, b), e.o("d", "" + h, 525600, b)); f.o(d, k); return k } function ui(a, c) { var b = Ma(a), d = Jb(a), e = c.Ld || "uid"; return [b.l(e), d.l(e)] } function kb(a) {
        a =
          ba(a); return Math.round(a(Af) / 50)
      } function Af(a) { var c = a.oa, b = c[1]; a = c[0] && b ? b() : X(a) - a.Sh; return Math.round(a) } function Zd(a) { return Math.round(X(a) / 1E3) } function ib(a) { return Math.floor(X(a) / 1E3 / 60) } function X(a) { var c = a.Be; return 0 !== c ? c : Bf(a.b, a.oa) } function tf(a) { var c = fa(a), b = wi(a), d = { b: a, Be: 0, oa: b, Sh: Bf(a, b) }, e = b[1]; b[0] && e || c.C(a, ["beforeunload", "unload"], function () { 0 === d.Be && (d.Be = Bf(a, d.oa)) }); return pa(d) } function Bo(a) { return (10 >= a ? "0" : "") + a } function xi(a, c, b) {
        void 0 === c && (c = ""); void 0 ===
          b && (b = "_ym"); var d = "" + b + c + "_"; return { Fd: Co(a), l: function (e, f) { var g = yi(a, "" + d + e); return Ia(g) && !S(f) ? f : g }, o: function (e, f) { zi(a, "" + d + e, f); return this }, Zb: function (e) { Ai(a, "" + d + e); return this } }
      } function zi(a, c, b) { var d = Cf(a); a = bb(a, b); if (!Ia(a)) try { d.setItem(c, a) } catch (e) { } } function yi(a, c) { var b = Cf(a); try { return qb(a, b.getItem(c)) } catch (d) { } return null } function Ai(a, c) { var b = Cf(a); try { b.removeItem(c) } catch (d) { } } function Cf(a) { try { return a.localStorage } catch (c) { } return null } function nh(a, c, b) {
        $d(a,
          "metrika_enabled", "1", 0, c, b); (b = Nc(a, "metrika_enabled")) && $d(a, "metrika_enabled", "", -100, c, void 0); return !!b
      } function Nc(a, c) { var b = null; try { b = a.document.cookie } catch (d) { return null } return (b = (new RegExp("(?:^|;\\s*)" + c + "=([^;]*)")).exec(b)) && 2 <= b.length ? decodeURIComponent(b[1]) : null } function oh(a, c, b) { F(b, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? a = !0 : (b = Nd(a), b = qf(b), a = c(a, "gdpr"), a = W(Ib(Do), b).length ? !0 : F(a, [tc, Eo])); return a } function Zh(a) {
        if (F(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return tc;
        a = a.replace("GDPR-ok-view-detailed-", ""); return F(a, Mb) ? a : tc
      } function Yh(a, c, b) { void 0 === b && (b = P); var d = Fc(a); b(d); var e = w(d, Fo); ae(a, c, function (f) { f.C(e) }); return d } function Fo(a, c) { var b = n(c, "ymetrikaEvent"); b && a.V(n(b, "type"), b) } function ae(a, c, b, d) { void 0 === b && (b = D); void 0 === d && (d = !1); var e = Lc(a); if (c && Q(c.push)) { var f = c.push; c.push = function () { var g = Ba(arguments), h = g[0]; d && e.V(h); g = f.apply(c, g); d || e.V(h); return g }; b(e); z(e.V, c); return e } } function Nd(a) {
        a = R(a); var c = a.l("dataLayer", []); a.o("dataLayer",
          c); return c
      } function Rn(a, c) { var b, d; a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function Vg(a, c, b) { function d() { f = 0; g && (g = !1, f = T(a, d, b), e.V(h)) } var e = Lc(a), f, g = !1, h; c.C(function (k) { g = !0; h = k; f || d(); return D }); return e } function Go(a, c) { return a.clearInterval(c) } function Ho(a, c, b, d) { return a.setInterval(A(a, "i.err." + (d || "def"), c), b) } function T(a, c, b, d) { return be(a, A(a, "d.err." + (d || "def"), c), b) } function Fc(a) {
        var c = {}; return {
          C: function (b, d) {
            z(function (e) { n(c, e) || (c[e] = Lc(a)); c[e].C(d) }, b.split(","));
            return this
          }, da: function (b, d) { z(function (e) { n(c, e) && c[e].da(d) }, b.split(",")); return this }, V: function (b, d) { return J(function (e, f) { return n(c, f) ? e.concat(A(a, "e." + f, c[f].V)(d)) : e }, [], b.split(",")) }
        }
      } function Lc(a) { var c = [], b = {}; b.Qj = c; b.C = u(da("push", c), w(b, P)); b.da = u(Df(tb(a))(c), Df(da("splice", c))(1), w(b, P)); b.V = u(P, Df(Ea), Io(c)); return b } function E(a, c, b) { return function () { return A(arguments[0], a, c, b).apply(this, arguments) } } function A(a, c, b, d, e) {
        var f = b || ob; return function () {
          var g = d; try {
            g = f.apply(e ||
              null, arguments)
          } catch (h) { ff(a, c, h) } return g
        }
      } function Bf(a, c) { var b = c || wi(a), d = b[0]; b = b[1]; return !isNaN(d) && Q(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function wi(a) { a = Ef(a); var c = n(a, "timing.navigationStart"), b = n(a, "now"); b && (b = C(b, a)); return [c, b] } function Ef(a) { return n(a, "performance") || n(a, "webkitPerformance") } function ff(a, c, b) {
        var d, e, f, g, h; if (!(.01 >= a.Math.random())) {
          var k = "u.a.e", l = ""; b && ("object" === typeof b ? (k = b.message, l = "string" === typeof b.stack && b.stack.replace(/\n/g,
            "\\n") || "n.s.e.s") : k = "" + b); if (!(Jo(k) || Ta(u(da("indexOf", k), ua(-1), zb), Ko) || Lo(k) && .1 <= a.Math.random())) {
              c = (d = {}, d.jserrs = (e = {}, e[ja.Ha] = (f = {}, f[k] = (g = {}, g[c] = (h = {}, h[a.location.href] = l, h), g), f), e), d); a: {
                var m; d = ja.Ia + "//mc.yandex.ru/watch/" + ja.wg; try { var p = Ff(a, "er")[0]; var q = void 0 === p ? [] : p; var r = q[1]; var t = void 0 === r ? null : r } catch (x) { break a } p = (m = {}, m["browser-info"] = "ar:1:pv:1:v:" + ja.Ha + ":vf:" + dd.version, m["page-url"] = a.location && "" + a.location.href, m); a = bb(a, c); if (t && a) t(d, {
                  Fb: p, za: [], $: "site-info=" +
                    zf(a)
                })["catch"](D)
              }
            }
        }
      } function Ab(a) { return y(function (c) { return !c || F(c, a) ? c : 0 }, gc) } function Bi(a) { var c = n(a, "navigator.sendBeacon"); return c && ia("sendBeacon", c) && !Wc(a) ? Mo(a, C(c, n(a, "navigator"))) : !1 } function Gf(a) { return Za(a) ? No(a) : !1 } function Md(a, c, b) { void 0 === b && (b = null); a.Sc || (a.Sc = Oo()); c && !Ia(b) && a.Sc.o(c, b); return a.Sc } function Po(a, c) { try { delete a[c] } catch (b) { a[c] = void 0 } } function Wa(a, c, b) {
        var d = S(b); S(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) +
          d
      } function Cd(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Hf(c) } function ed(a) { var c = Za(a); return c ? Qo(a, c) : !1 } function Rg(a, c, b) { var d = ya(c); return d && fh(a, c, W(Boolean, ["p", Ro[d], "c"]), Qg(a), b) } function Pg(a, c) { var b = Db(If, a, c); if (!b) { var d = Db("div", a, c); d && (Bb(If + ",div", a, d).length || (b = d)) } return b } function fh(a, c, b, d, e) {
        return J(function (f, g) {
          var h = null; g in Ci ? h = c.getAttribute && c.getAttribute(Ci[g]) : g in wc && (h = "p" === g ? wc[g](a, c, e) : "c" === g ? wc[g](a, c, d) : wc[g](a, c)); h && (h = h.slice(0,
            Di[g] || 100), f[g] = Jf[g] ? "" + Nb(h) : h); return f
        }, {}, b)
      } function ph(a, c, b) { if (a.document.querySelectorAll && ia("querySelectorAll", n(a, "Element.prototype.querySelectorAll"))) return oa(b.querySelectorAll(c)); var d = Ei(c.split(" "), b); return W(function (e, f) { return tb(a)(e, d) === f }, d) } function Ei(a, c) { var b = ka(a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ? Vb(w(b, Ei), oa(d)) : oa(d) } function kc(a, c, b) { return (a = Bb(b, a, c)) && a.length ? a[0] : null } function Bb(a, c, b) {
        return b ? (a = b.querySelectorAll(a)) ?
          oa(a) : [] : []
      } function pc(a, c) { var b = a.document, d = B({ type: "text/javascript", charset: "utf-8", async: !0 }, c), e = Za(a); if (e) { var f = e("script"); Fi(Aa, cb(function (l) { var m = l[0]; l = l[1]; "async" === m && l ? f.async = !0 : f[m] = l }))(d); try { var g = Ob("getElementsByTagName", b), h = g("head")[0]; if (!h) { var k = g("html")[0]; h = e("head"); k && k.appendChild(h) } h.insertBefore(f, h.firstChild); return f } catch (l) { } } } function So(a, c, b) {
        var d = Gi(c); F(b, d.eb) || d.eb.push(b); if (Ia(d.Wa)) {
          b = Za(a); if (!b) return null; b = b("iframe"); B(b.style, {
            display: "none",
            width: "1px", height: "1px", visibility: "hidden"
          }); b.src = c; a = Hb(a); if (!a) return null; a.appendChild(b); d.Wa = b
        } else (a = n(d.Wa, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.Wa
      } function To(a, c) { var b = ca(a) ? a : [a]; c = c || document; if (c.querySelectorAll) { var d = G(", ", y(function (e) { return "." + e }, b)); return oa(c.querySelectorAll(d)) } if (c.getElementsByClassName) return Vb(u(da("getElementsByClassName", c), oa), b); d = c.getElementsByTagName("*"); b = "(" + G("|", b) + ")"; return W(w(b, Zb), oa(d)) } function Hi(a, c, b) {
        for (var d =
          "", e = Og(), f = ya(c) || "*"; c && c.parentNode && !F(f, ["BODY", "HTML"]);)d += e[f] || "*", d += Ii(a, c, b) || "", c = c.parentElement, f = ya(c) || "*"; return $b(d, 128)
      } function Ii(a, c, b) { if (a = ce(a, c)) { a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) } } return 0 } function ce(a, c) { var b = n(a, "document"); if (!c || c === b.documentElement) return null; if (c === hc(a)) return b.documentElement; b = null; try { b = c.parentNode } catch (d) { } return b } function bf(a, c) {
        var b =
          Kf(a, c), d = b.left; b = b.top; var e = de(a, c); return [d, b, e[0], e[1]]
      } function de(a, c) { var b = n(a, "document"); if (c === hc(a) || c === b.documentElement) { b = Hb(a); var d = fd(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = Gc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight] } function Kf(a, c) {
        var b = c, d = n(a, "document"), e = ya(b); if (!b || !b.ownerDocument || "PARAM" === e || b === hc(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = b.getBoundingClientRect && Gc(b)) return b = df(a), {
          left: Math.round(d.left +
            b.x), top: Math.round(d.top + b.y)
        }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e }
      } function Db(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document)) return null; if (c.Element.prototype.closest && ia("closest", c.Element.prototype.closest) && b.closest) return b.closest(a); var d = xh(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (c.document.querySelectorAll && ia("querySelectorAll", n(c, "Element.prototype.querySelectorAll"))) {
          for (a =
            oa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === tb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null
        } return null
      } function Ji(a) { return ee(a) && !Ta(ua(a.type), Uo) ? fe(a) ? !a.checked : !a.value : Vo(a) ? !a.value : Wo(a) ? 0 > a.selectedIndex : !0 } function ya(a) { if (a) try { var c = a.nodeName; if (La(c)) return c; c = a.tagName; if (La(c)) return c } catch (b) { } } function Ki(a, c) { var b = a.document.getElementsByTagName("form"); return tb(a)(c, oa(b)) } function Xo(a, c, b) {
        b = Ob("dispatchEvent",
          b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (ia("(Event|Object|constructor)", e) || ge(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) { if ((a = Ob("createEvent", n(a, "document"))) && Q(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) } } d && b(d)
      } function Gc(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) { return "object" === typeof c && null !== c && 16389 === (c.Cf && c.Cf & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function df(a) {
        var c =
          hc(a), b = n(a, "document"); return { x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0 }
      } function fd(a) { var c = Lf(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = Hb(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight] } function Lf(a) {
        var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return ra(c) ||
          ra(b) ? null : [Math.floor(c), Math.floor(b), a]
      } function Hb(a) { var c = n(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : hc(a) || b } function hc(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } } function Zb(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function ic(a) { var c; try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c }
      function dc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Ve(a) { if (ra(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function Pb(a) { var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) { a: { if (Yo.test(a.location.host) && a.opera && Q(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1 } c = !c } return c ? Zo(a) : !1 } function $o(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(vc("http." +
          c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50))); else { e = null; if (d) try { (e = qb(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h
      } function Li(a, c, b) { (b = Ec(b)) && (a += "?" + b); c.$ && (a += (b ? "&" : "?") + c.$); return a } function bb(a, c) { try { return a.JSON.stringify(c) } catch (b) { return null } } function Ec(a) { return a ? u(Aa, qc(function (c, b) { var d = b[0], e = b[1]; S(e) || ra(e) || c.push(d + "=" + zf(e)); return c }, []), Rc("&"))(a) : "" } function rl(a) {
        return a ? u(cb(function (c) {
          var b = c.split("="); c = b[1]; b = b[0]; if (ra(c)) c =
            void 0; else { var d = ""; try { d = decodeURIComponent(c) } catch (e) { } c = d } return [b, c]
        }), qc(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {}
      } function zf(a) { try { return encodeURIComponent(a) } catch (c) { } a = G("", W(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) } function Mf() { var a = Ba(arguments); return ob(pb(a)) } function pb(a) { var c = ""; ca(a) ? c = G(".", a) : La(a) && (c = a); return vc("err.kn(" + ja.Ha + ")" + c) } function ap(a) { this.message = a } function Mi(a, c, b, d, e) {
        var f = a.addEventListener &&
          a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b)
      } function O(a) { return J(function (c, b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, bp) } function Ni(a) { return function (c) { var b = c || {}; return { b: w(b, P), l: function (d, e) { var f = b[d]; return S(f) && !S(e) ? e : f }, o: function (d, e) { b[d] = e; return this }, pe: function (d, e) { return "" === e || ra(e) ? this : this.o(d, e) }, Ca: w(b, a) } } } function cp(a,
        c, b, d, e) { var f = "object" === typeof a ? a : { id: a, aa: d, Sb: e, R: b }; a = J(function (g, h) { var k = h[1], l = k.ki; k = f[k.Ef]; g[h[0]] = l ? l(k) : k; return g }, {}, Aa(c)); Oi(a, a.R || {}); return a } function dp(a, c) { return J(function (b, d) { b[c[d[0]].Ef] = d[1]; return b }, {}, Aa(a)) } function Pi(a) { a = U(a); return Qb[a] && Qb[a].Xi } function Oi(a, c) { var b = U(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id"); Qb[b] || (Qb[b] = {}); if (d || e) Qb[b].Xi = d, Qb[b].Yi = e } function ep(a) { return he(a) || gd(a) || /mobile/i.test(jb(a)) || !S(n(a, "orientation")) } function wf(a) {
          return F("prerender",
            y(w(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
        } function fp(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function Sa(a, c) { z(u(P, da("push", a)), c); return a } function Re(a, c) { return Array.prototype.sort.call(c, a) } function oa(a) { return a ? ca(a) ? a : ie ? ie(a) : "number" === typeof a.length && 0 <= a.length ? Qi(a) : [] : [] } function Pk(a) { if (0 > a) return []; for (var c = [], b = 0; b <= a; b += 1)c.push(b); return c } function gp(a, c) {
          if (!ad(a)) return !0; try {
            c.call({ 0: !0, length: -Math.pow(2, 32) + 1 },
              function () { throw 1; })
          } catch (b) { return !1 } return !0
        } function je(a, c, b) { return b ? a : c } function Lb(a, c, b) { try { if (Q(c)) { var d = Ba(arguments).slice(3); ra(b) ? c.apply(void 0, d) : C.apply(void 0, ka([c, b], d))() } } catch (e) { be(a, w(e, ob), 0) } } function ob(a) { throw a; } function be(a, c, b) { return Ob("setTimeout", a)(c, b) } function ha(a, c) { return Ob("clearTimeout", a)(c) } function Jc() { return [] } function Wb() { return {} } function Ob(a, c) {
          var b = n(c, a), d = n(c, "constructor.prototype." + a) || b; try {
            if (d && d.apply) return function () {
              return d.apply(c,
                arguments)
            }
          } catch (e) { return b } return d
        } function Rb(a, c) { return function () { var b = Ba(arguments), d = b[0]; b = b.slice(1); var e = R(d), f = e.l("m720", {}), g = n(f, a); g || (g = v(c), f[a] = g, e.o("m720", f)); return g.apply(void 0, ka([d], b)) } } function Ea(a, c) { return c ? a(c) : a() } function v(a, c) { var b = [], d = []; var e = c ? c : P; return function () { var f = Ba(arguments), g = e.apply(void 0, f), h = Ri(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f } } function zb(a) { return !a } function rb(a, c) { return c } function P(a) { return a }
      function tb(a) { if (Nf) return Nf; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b = a.Array && a.Array.prototype && Da(a.Array.prototype.indexOf, "indexOf"); return Nf = a = c && b ? function (d, e) { return b.call(e, d) } : hp } function hp(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function ke(a) {
        a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return {
          Qa: function (b, d) { Of.call(c, b) || (c[b] = d); return this }, o: function (b, d) { c[b] = d; return this }, l: function (b, d) {
            var e = c[b]; return Of.call(c,
              b) || S(d) ? e : d
          }
        }
      } function ip(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function jp(a) { return S(a) ? [] : hd(function (c, b) { c.push([b, a[b]]); return c }, [], Si(a)) } function kp(a, c) { return hd(function (b, d, e) { d = a(d, e); return b.concat(ca(d) ? d : [d]) }, [], c) } function lp(a, c) { return hd(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function mp() { var a = Ba(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) Qc(b, d) && (c[d] = b[d]); Qc(b, "toString") && (c.toString = b.toString) } return c } function Si(a) {
        var c =
          [], b; for (b in a) Qc(a, b) && c.push(b); return c
      } function np(a, c) { return 1 <= Ti(ua(a), c).length } function Ti(a, c) { return hd(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Qc(a, c) { return ra(a) ? !1 : Of.call(a, c) } function ca(a) { if (id) return id(a); (id = Da(Array.isArray, "isArray")) || (id = op); return id(a) } function u() { var a = Ba(arguments), c = a.shift(); return function () { var b = c.apply(void 0, arguments); return J(Ui, b, a) } } function Dc(a, c) {
        void 0 === c && (c = {}); if (!a || 1 > a.length) return c; J(function (b, d, e) {
          if (e ===
            a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {}); return b[d]
        }, c, a); return c
      } function n(a, c) { return a ? J(function (b, d) { if (ra(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function qc(a, c) { return K([a, c], J) } function Ya(a) { return da("test", a) } function da(a, c) { return C(c[a], c) } function w(a, c) { return K([a], c) } function K(a, c) { return C.apply(void 0, ka([c, null], a)) } function pp() {
        var a = Ba(arguments), c = a[0], b = a[1], d = a.slice(2); return function () {
          var e = ka(d, Ba(arguments));
          if (Function.prototype.call) return Function.prototype.call.apply(c, ka([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Vi(f, e, b); delete b[f]; return e } return Vi(c, e)
        }
      } function Vi(a, c, b) { void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; Q(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e](); return f } function hd(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function sc(a) {
        return !Ia(a) &&
          !S(a) && "[object Object]" === Hf(a)
      } function ra(a) { return S(a) || Ia(a) } function Q(a) { return "function" === typeof a } function Df(a) { return la(function (c, b) { return a(b, c) }) } function la() { var a = Ba(arguments), c = a.shift(); return function () { var b = Ba(arguments); return c.length > b.length + a.length ? la.apply(void 0, ka([c], a, b)) : c.apply(void 0, ka(a, b)) } } function le(a) { return function (c) { return function (b) { return a(b, c) } } } function Ca(a) { return function (c) { return function (b) { return a(c, b) } } } function Ui(a, c) { return c(a) }
      function qp(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function Ba(a) { if (ie) try { return ie(a) } catch (c) { } return Qi(a) } function Qi(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function Pf(a, c) { Pf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) }; return Pf(a, c) } function Dm(a) {
        return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g,
          "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
      } function $b(a, c) { if (a) { var b = ("" + a).replace(Rh, ""); return c && b.length > c ? b.substr(0, c) : b } return "" } function vk(a) { return "" + a } function jd(a, c) { return !(!a || -1 === Kg(a, c)) } function Kg(a, c) {
        if (Wi) var b = Wi.call(a, c); else a: {
          b = 0; for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
            b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) { b = e - c.length + 1; break a } if (!b &&
              e > d) break
          } b = -1
        } return b
      } function La(a) { return "string" === typeof a } function Hf(a) { return Object.prototype.toString.call(a) } function Da(a, c) { return ia(c, a) && a } function ia(a, c) { var b = me(a, c); c && !b && Qf.push([a, c]); return b } function me(a, c) { if (!c || "function" !== typeof c) return !1; var b = new RegExp("function\\s*(" + a + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i"); try { return b.test("" + c) } catch (d) { } return !1 } function D() { } function za(a, c) {
        function b() { this.constructor = a } Pf(a, c); a.prototype = null ===
          c ? Object.create(c) : (b.prototype = c.prototype, new b)
      } function ka() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function Nb(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function rp() { } function sp(a, c) { return function () { a.apply(c, arguments) } } function xa(a) {
        if (!(this instanceof xa)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function"); this.xa = 0; this.Ge = !1; this.Fa = void 0; this.mb = []; Xi(a, this)
      } function Yi(a, c) { for (; 3 === a.xa;)a = a.Fa; 0 === a.xa ? a.mb.push(c) : (a.Ge = !0, xa.He(function () { var b = 1 === a.xa ? c.si : c.ui; if (null === b) (1 === a.xa ? Rf : kd)(c.Na, a.Fa); else { try { var d = b(a.Fa) } catch (e) { kd(c.Na, e); return } Rf(c.Na, d) } })) } function Rf(a, c) {
        try {
          if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then; if (c instanceof
              xa) { a.xa = 3; a.Fa = c; Sf(a); return } if ("function" === typeof b) { Xi(sp(b, c), a); return }
          } a.xa = 1; a.Fa = c; Sf(a)
        } catch (d) { kd(a, d) }
      } function kd(a, c) { a.xa = 2; a.Fa = c; Sf(a) } function Sf(a) { 2 === a.xa && 0 === a.mb.length && xa.He(function () { a.Ge || xa.Fg(a.Fa) }); for (var c = 0, b = a.mb.length; c < b; c++)Yi(a, a.mb[c]); a.mb = null } function tp(a, c, b) { this.si = "function" === typeof a ? a : null; this.ui = "function" === typeof c ? c : null; this.Na = b } function Xi(a, c) {
        var b = !1; try { a(function (d) { b || (b = !0, Rf(c, d)) }, function (d) { b || (b = !0, kd(c, d)) }) } catch (d) {
          b ||
            (b = !0, kd(c, d))
        }
      } function qb(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function $d(a, c, b, d, e, f) { if (oh(a, Nc, c)) { c = [c + "=" + encodeURIComponent(b)]; c = c.concat(up(a)); d && (b = new Date, b.setTime(b.getTime() + 6E4 * d), c.push("expires=" + b.toUTCString())); e && (d = e.replace(vp, ""), c.push("domain=" + d)); c.push("path=" + (f || "/")); f = G(";", c); try { a.document.cookie = f } catch (g) { } } } function Ic(a, c, b) {
        void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = wp(a), e = 1 === (d || "").split(".").length ? d : "." + d, f =
          b ? "_" + b : ""; return { Zb: function (g, h, k) { $d(a, "" + c + g + f, "", -100, h || e, k); return this }, l: function (g) { return Nc(a, "" + c + g + f) }, o: function (g, h, k, l, m) { $d(a, "" + c + g + f, h, k, l || e, m); return this } }
      } function mc(a, c) { var b = xp(a); return b ? (b.href = c, { protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href }) : {} } function fb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16,
        c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
      } function Sb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>>
          16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
      } function xc(a, c) { c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c] } function ab(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function ma(a, c) {
        return [a[0] ^
          c[0], a[1] ^ c[1]]
      } function Zi(a) { a = ma(a, [0, a[0] >>> 1]); a = fb(a, [4283543511, 3981806797]); a = ma(a, [0, a[0] >>> 1]); a = fb(a, [3301882366, 444984403]); return a = ma(a, [0, a[0] >>> 1]) } function yp(a, c) {
        void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { N: [0, d], O: [0, d] }; for (var f = 0; f < e; f += 16) {
          var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) <<
            24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = fb(h, ne); h = xc(h, 31); h = fb(h, oe); g.N = ma(g.N, h); g.N = xc(g.N, 27); g.N = Sb(g.N, g.O); g.N = Sb(fb(g.N, [0, 5]), [0, 1390208809]); k = fb(k, oe); k = xc(k, 33); k = fb(k, ne); g.O = ma(g.O, k); g.O = xc(g.O, 31); g.O = Sb(g.O, g.N); g.O = Sb(fb(g.O, [0, 5]), [0, 944331445])
        } e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
          case 15: h =
            ma(h, ab([0, b.charCodeAt(f + 14)], 48)); case 14: h = ma(h, ab([0, b.charCodeAt(f + 13)], 40)); case 13: h = ma(h, ab([0, b.charCodeAt(f + 12)], 32)); case 12: h = ma(h, ab([0, b.charCodeAt(f + 11)], 24)); case 11: h = ma(h, ab([0, b.charCodeAt(f + 10)], 16)); case 10: h = ma(h, ab([0, b.charCodeAt(f + 9)], 8)); case 9: h = ma(h, [0, b.charCodeAt(f + 8)]), h = fb(h, oe), h = xc(h, 33), h = fb(h, ne), d.O = ma(d.O, h); case 8: g = ma(g, ab([0, b.charCodeAt(f + 7)], 56)); case 7: g = ma(g, ab([0, b.charCodeAt(f + 6)], 48)); case 6: g = ma(g, ab([0, b.charCodeAt(f + 5)], 40)); case 5: g = ma(g, ab([0, b.charCodeAt(f +
              4)], 32)); case 4: g = ma(g, ab([0, b.charCodeAt(f + 3)], 24)); case 3: g = ma(g, ab([0, b.charCodeAt(f + 2)], 16)); case 2: g = ma(g, ab([0, b.charCodeAt(f + 1)], 8)); case 1: g = ma(g, [0, b.charCodeAt(f)]), g = fb(g, ne), g = xc(g, 31), g = fb(g, oe), d.N = ma(d.N, g)
        }d.N = ma(d.N, [0, b.length]); d.O = ma(d.O, [0, b.length]); d.N = Sb(d.N, d.O); d.O = Sb(d.O, d.N); d.N = Zi(d.N); d.O = Zi(d.O); d.N = Sb(d.N, d.O); d.O = Sb(d.O, d.N); return ("00000000" + (d.N[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.N[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.O[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.O[1] >>> 0).toString(16)).slice(-8)
      } function ld(a, c, b) { var d = c.getAttribute("itemtype"); b = Bb('[itemprop~="' + b + '"]', a, c); return d ? W(function (e) { return e.parentNode && Db("[itemtype]", a, e.parentNode) === c }, b) : b } function Ua(a, c, b) { return (a = ld(a, c, b)) && a.length ? a[0] : null } function Qa(a) { if (!a) return ""; a = ca(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || a[0].innerText || "" : "" } function $i(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Qa(a) : "" } function aj(a) {
        return (a =
          O(a).hash.split("#")[1]) ? a.split("?")[0] : ""
      } function zp(a, c) { var b = aj(a); bj = Ho(a, function () { var d = aj(a); d !== b && (c(), b = d) }, 200, "t.h"); return C(Go, null, a, bj) } function Ap(a, c, b) { var d, e, f = c.aa, g = c.Ce, h = c.ec, k = R(a), l = ta((d = {}, d.wh = "1", d.pv = "1", d)); Tf(f) && a.Eg && a.Eg.sj && l.o("ad", "1"); g && l.o("ut", "1"); f = k.l("lastReferrer"); d = O(a).href; h = { F: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e), H: l }; b(h, c)["catch"](A(a, "g.s")); k.o("lastReferrer", d) } function Bp(a, c) {
        if (ge(a)) return ha(a, c); Uf[c] = !0; return ha(a, pe[c] ||
          0)
      } function Cp(a, c, b) {
        function d() { Uf[t] = !0; f(!1); c() } function e() { ha(a, pe[t]); if (Uf[t]) f(!1); else { var I = Math.max(0, b - (m ? p : p + h(X) - q)); I ? pe[t] = T(a, d, I, "u.t.d.c") : d() } } function f(I) { z(function (Y) { var wa = Y[0], Ja = Y[1]; Y = Y[2]; I ? r.C(wa, Ja, Y) : r.Kb(wa, Ja, Y) }, x) } var g = w(!1, f); if (ge(a)) return { id: T(a, c, b, "u.t.d"), Te: g }; var h = ba(a), k = !1, l = !1, m = !0, p = 0, q = h(X), r = fa(a), t = cj; cj += 1; pe[t] = 0; var x = [[a, ["blur"], function () { m = k = l = !0; p += h(X) - q; q = h(X); e() }], [a, ["focus"], function () { k || l || (p = 0); q = h(X); k = l = !0; m = !1; e() }], [a.document,
        ["click", "mousemove", "keydown", "scroll"], function () { l || (k = !0, m = !1, l = !0, e()) }]]; f(!0); e(); return { id: t, Te: g }
      } function hm(a, c) { var b, d = ic(c), e = ja.Rb; if (d && Zb("ym-advanced-informer", d)) { var f = d.getAttribute("data-lang"), g = parseInt(d.getAttribute("data-cid") || "", 10); if (g || 0 === g) n(a, "Ya." + e + ".informer")((b = {}, b.i = d, b.id = g, b.lang = f, b)), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1 } } function Pc(a, c, b) {
        a = c && (jd(c.className, "ym-disable-keys") || jd(c.className, "-metrika-nokeys")); return b &&
          c ? a || !!To(["ym-disable-keys", "-metrika-nokeys"], c).length : a
      } function uh(a, c) { return ee(c) ? "password" === c.type || c.name && F(c.name.toLowerCase(), dj) || c.id && F(c.id.toLowerCase(), dj) : !1 } function ej(a, c) { var b = Math.max(0, Math.min(c, 65535)); Sa(a, [b >> 8, b & 255]) } function xb(a, c) { Sa(a, [c & 255]) } function $a(a, c, b) { return -1 !== tb(a)(b, Dp) ? (xb(c, b), !1) : !0 } function N(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)Sa(a, [b & 127 | 128]), b >>= 7; Sa(a, [b]) } function Vf(a, c) { N(a, c.length); for (var b = 0; b < c.length; b += 1)N(a, c.charCodeAt(b)) }
      function Wf(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)ej(a, b.charCodeAt(d)) } function Ep(a, c) { var b = []; if ($a(a, b, 27)) return []; N(b, c); return b } function Fp(a, c) {
        var b = ya(c); if (!b) return c[Na] = -1, null; var d = +c[Na]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.zj) return null; e = e.parentElement } e = 64; var f = ce(a, c), g = f && f[Na] ? f[Na] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = Gp()[b]; h || (e |= 2); var k = Ii(a, c); k || (e |= 4); var l =
          bf(a, c); (f = f ? bf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); Yb[d].Ff = l[0] + "x" + l[1]; Yb[d].size = l[2] + "x" + l[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if ($a(a, f, 1)) return null; N(f, d); xb(f, e); N(f, g); h ? xb(f, h) : Wf(f, b); k && N(f, k); e & 8 || (N(f, l[0]), N(f, l[1]), N(f, l[2]), N(f, l[3])); e & 32 && Wf(f, c.id); xb(f, 0); return f
      } function Hp(a, c) {
        var b = c[Na]; if (!b || 0 > b || !$e(c) || !c.form || wh(a, c.form)) return []; var d = Ki(a, c.form); if (0 > d) return []; if (ee(c)) {
          var e = {
            text: 0, color: 0, Yb: 0, Fj: 0, "datetime-local": 0,
            email: 0, Cf: 0, Xj: 0, search: 0, $j: 0, time: 0, url: 0, month: 0, bk: 0, password: 2, Wj: 3, Cj: 4, file: 6, image: 7
          }; e = e[c.type]
        } else { e = { wj: 1, xj: 5 }; var f = ya(c); e = S(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if ($a(a, g, 7)) return []; N(g, b); N(g, d); N(g, e); Vf(g, c.name || ""); N(g, f); return g
      } function Ip(a, c, b) {
        var d = Ki(a, b); if (0 > d) return []; var e = b.elements, f = e.length; b = []; for (var g = 0; g < f; g += 1)if (!Ji(e[g])) {
          var h =
            e[g][Na]; h && 0 < h && b.push(h)
        } e = []; if ($a(a, e, 11)) return []; N(e, c); N(e, d); N(e, b.length); for (a = 0; a < b.length; a += 1)N(e, b[a]); return e
      } function Xb(a, c, b) { void 0 === b && (b = []); for (var d = []; c && !Rl(a, c, b); c = ce(a, c))d.push(c); z(function (e) { Yb.gd += 1; var f = Yb.gd; e[Na] = f; Yb[f] = {}; f = Fp(a, e); e = Hp(a, e); f && e && (Sa(b, f), Sa(b, e)) }, Jp(d)); return b } function Kp(a) { var c = a.ha; if (!Oc || c && !c.fromElement) return sh(a) } function Lp(a) { var c = a.ha; if (c && !c.toElement) return af(a) } function fj(a) {
        var c = ic(a.ha); if (c && Ed(c)) {
          var b = rh(a,
            c); var d = kb(a.b), e = []; $a(a.b, e, 17) ? a = [] : (N(e, d), N(e, c[Na]), a = e); return ka(b, a)
        }
      } function gj(a) { var c = a.b, b = a.ha.target; if (b && Ed(b)) { c = Xb(c, b); var d = kb(a.b), e = []; $a(a.b, e, 18) ? a = [] : (N(e, d), N(e, b[Na]), a = e); return ka(c, a) } } function hj(a) {
        var c = a.b, b = ic(a.ha); if (!b || uh(c, b) || Pc(c, b)) return []; if ($e(b)) {
          var d = R(c).l("isEU"), e = nc(c, b, d); d = nc(c, b); if (fe(b)) var f = b.checked; else f = b.value, f = e ? G("", ij(f.split(""))) : f; c = Xb(c, b); e = kb(a.b); var g = []; $a(a.b, g, 39) ? a = [] : (N(g, e), N(g, b[Na]), Wf(g, String(f)), xb(g, d ? 1 : 0),
            a = g); return ka(c, a)
        }
      } function qe(a) {
        var c = a.b, b = a.ha, d = ic(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = w(e, Sa); d && Ed(d) ? f(rh(a, d)) : f(Xb(c, d)); var g = yh(c, b); a = kb(a.b); f = b.type; var h = [g.x, g.y]; g = b.which; b = b.button; var k; var l = de(c, d); var m = l[0]; for (l = l[1]; d && (!m || !l);)if (d = ce(c, d)) l = de(c, d), m = l[0], l = l[1]; d ? (m = d[Na], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = Kf(c, d), $a(c, k, l) ? c = [] : (N(k, a), N(k, m), N(k, Math.max(0, h[0] - d.left)),
          N(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, xb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = []; return ka(e, c)
      } function Mp(a) {
        var c = null, b = a.b, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Ia(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try { for (; c && 1 !== c.nodeType;)c = c.parentNode } catch (g) { return [] } if (!c) return []; d =
          nc(b, c) || Pc(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = nc(b, d) || Pc(b, d, !0), f += 1; if (e !== Xf) return Xf = e, d = d ? G("", ij(e.split(""))) : e, e = kb(a.b), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], $a(a.b, c, 29) ? a = [] : (N(c, e), Vf(c, b), Vf(c, d), a = c), a
      } function Np(a) { return ka(qe(a), Mp(a) || []) } function jj(a) {
        return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey ||
          a.altKey ? 16 : 0)
      } function kj(a) { var c = []; Yf || (Yf = !0, Xf && c.push.apply(c, Ep(a.b, kb(a.b))), vb(a.b, function () { Yf = !1 }, "fv.c")); return c } function lj(a, c, b, d) { var e = ic(c); if (!e || th(a, e)) return []; var f = Ad(e), g = Fd(e); c = nc(a, e); var h = R(a); if (!f && (g && h.l("isEU") || Pc(a, e))) a = []; else { f = Xb(a, e); h = kb(a); g = []; if ($a(a, g, 38)) a = []; else { N(g, h); ej(g, b); xb(g, d); a = e[Na]; if (!a || 0 > a) a = 0; N(g, a); xb(g, c ? 1 : 0); a = g } a = ka(f, a) } return a } function Op(a) {
        var c = a.b, b = a.ha, d = b.keyCode, e = jj(b), f = [], g = w(f, Sa); if ({
          3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1,
          18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1
        }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(lj(c, b, d, e | 16)), Zf = !1, vb(c, function () { Zf = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(kj(a)); return f
      } function Pp(a) { var c = a.b; a = a.ha; var b = []; Zf && !$f && 0 !== a.which && (b.push.apply(b, lj(c, a, a.charCode || a.keyCode, jj(a))), $f = !0, vb(c, function () { $f = !1 }, "fv.kp")); return b } function mj(a) {
        var c = a.b, b = ic(a.ha); if (!b || wh(c, b)) return [];
        var d = []; if ("FORM" === b.nodeName) { for (var e = b.elements, f = 0; f < e.length; f += 1)Ji(e[f]) || d.push.apply(d, Xb(c, e[f])); d.push.apply(d, Ip(c, kb(a.b), b)) } return d
      } function Qp(a) { var c = a.flush; a = ic(a.ha); "BODY" === ya(a) && c() } function re(a, c, b) { return function () { var d = Ka(a, c), e = Ba(arguments); if (d) return b.apply(void 0, e) } } function Rp(a, c, b) { return function () { var d = Ka(a, c), e = Ba(arguments); b.apply(void 0, e); return d } } function Sp(a, c, b, d) {
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++)e[f] = arguments[f];
          f = Dd(function (g) { return !1 === g }, e); return 0 < e.length && f || !b.length || !d ? d : u.apply(void 0, J(function (g, h, k) { return !1 === e[k] ? g : g.concat(function () { for (var l = [], m = 0; m < arguments.length; m++)l[m] = arguments[m]; return h.apply(void 0, ka([a, c], l)) }) }, [], b))(d)
        }
      } var dd = { construct: "Metrika2", callbackPostfix: "2", version: "ykcyjkqfpgygy63o3j" }, Qf = [], Wi = Da(String.prototype.indexOf, "indexOf"), Rh = /^\s+|\s+$/g, ie = Da(Array.from, "from"), nj = Da(Array.prototype.join, "join"), G = nj ? function (a, c) { return nj.call(c, a) } : qp, ua = Ca(function (a,
        c) { return a === c }), Mc = Ca(function (a, c) { a(c); return c }), Rc = Ca(G), pa = Ca(Ui), Ia = ua(null), S = ua(void 0), oj = Da(Function.prototype.bind, "bind"), C = oj ? function () { var a = Ba(arguments); return oj.apply(a[0], ka([a[1]], a.slice(2))) } : pp, Ph = Ca(K), tl = Ca(da), pj = Da(Array.prototype.reduce, "reduce"), J = pj ? function (a, c, b) { return pj.call(b, a, c) } : hd, V = le(n), rc = V("length"), Fi = u, id, op = u(Hf, ua("[object Array]")), Of = Object.prototype.hasOwnProperty, Aa = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : jp, ea = Object.keys ? Object.keys :
          Si, B = Object.assign || mp, qh = Ca(function (a, c) { return B({}, a, c) }), Nf, Ri = tb(window), Tp = le(Ri), R = v(ke), Dd = Array.prototype.every ? function (a, c) { return Array.prototype.every.call(c, a) } : function (a, c) { return J(function (b, d) { return b ? a(d) : !1 }, !0, c) }, qj = Da(Array.prototype.filter, "filter"), W = qj ? function (a, c) { return qj.call(c, a) } : Ti, oc = Ca(W), Xa = je(function (a, c) { return Array.prototype.find.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] }, ia("find", Array.prototype.find)), F = Array.prototype.includes ?
            function (a, c) { return Array.prototype.includes.call(c, a) } : np, Ib = le(F), rj = v(function (a) { a = n(a, "navigator") || {}; var c = n(a, "userAgent") || ""; return { qf: -1 < (n(a, "vendor") || "").indexOf("Apple"), og: c } }), ad = v(function (a) { var c = n(a, "document.documentElement.style"); a = n(a, "InstallTrigger"); return !(!(c && "MozAppearance" in c) || ra(a)) }), sj = Da(Array.prototype.map, "map"), y = sj && gp(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? sj.call(c, a) : [] } : lp, z = y, Vb = Array.prototype.flatMap ? function (a, c) {
              return Array.prototype.flatMap.call(c,
                a)
            } : kp, cb = Ca(y), Io = le(y), Ta = je(function (a, c) { return Array.prototype.some.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 }, ia("some", Array.prototype.some)), se = v(tb), Up = Ca(Re), tj = Da(Array.prototype.reverse, "reverse"), Jp = tj ? function (a) { return tj.call(a) } : fp, Yc = v(u(V("String.fromCharCode"), w("fromCharCode", ia), zb)), jb = v(V("navigator.userAgent")), he = v(u(jb, Ya(/ipad|iphone|ipod/i))), ag = v(function (a) { return n(a, "navigator.platform") || "" }), of = v(function (a) {
              a =
                rj(a); var c = a.og; return a.qf && (!c.match(/Safari/) && c.match(/Mobile/) || c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== c.indexOf("FB_IAB") || -1 !== c.indexOf("FBAV") || -1 !== c.indexOf("OKApp") || -1 !== c.indexOf("GSA/"))
            }), $c = v(function (a) { a = rj(a); var c = a.og; return a.qf && !c.match("CriOS") }), Wc = v(u(jb, da("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))), Vp =
          /Chrome\/(\d+)\./, Wp = v(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(Vp)) && a.length ? 76 <= parseInt(a[1], 10) : !1 }), gd = v(function (a) { var c = (jb(a) || "").toLowerCase(); a = ag(a); return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a)) }), Xp = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), Yp = v(function (a) { var c = n(a, "navigator.connection.type"); if (S(c)) return null; a = se(a)(c, Xp); return -1 === a ? c : "" + a }), ge = v(u(V("document.addEventListener"),
            zb)), uj = v(function (a) { var c = n(a, "navigator") || {}; return J(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), Vh = v(function (a) { var c = n(a, "navigator") || {}; a = uj(a); La(a) || (a = "", c = n(c, "languages.0"), La(c) && (a = c)); return a.toLowerCase().split("-")[0] }), ub = v(function (a) { var c = !1; try { c = a.top !== a } catch (b) { } return c }), Zp = v(function (a) { var c = !1; try { c = a.top.contentWindow } catch (b) { } return c }), $p = v(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }),
        aq = v(function (a) {
          var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum"); var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(Ta(w(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) ||
            Ta(w(n(a, "document"), n), c) || b || d && Ta(C(d.getAttribute, d), e))
        }), bq = v(function (a) { return !!(Ta(w(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(jb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), cq = v(function (a) { return Dd(w(a, n), ["ia_document.shareURL", "ia_document.referrer"]) }), dq = v(function (a) { a = n(a, "navigator.plugins"); return !!(a && rc(a) && Ta(u(V("name"), Ya(/Chrome PDF Viewer/)), a)) }), eq = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
          "\\$&")), Qn = v(u(V("navigator.userAgent"), Ya(eq))), te = v(function (a) { var c = jb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (c ? +c[1] : 0) ? !0 : (he(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && $c(a) }), fq = dd.construct, bg = ge(window), ja = { Bg: 24226447, wg: 26302566, Dg: 51533966, tj: 65446441, Ia: "https:", Ha: "720", Rb: fq, Ag: bg ? 512 : 2048, yg: bg ? 512 : 2048, zg: bg ? 100 : 400, uj: 100, vj: "noindex" }, Ga = { id: "id", Ce: "ut", aa: "type", Ld: "ldc", bb: "nck", ec: "url", th: "referrer" },
        gq = /^\d+$/, Tb = { id: function (a) { a = "" + (a || "0"); gq.test(a) || (a = "0"); try { var c = parseInt(a, 10) } catch (b) { c = 0 } return c }, aa: function (a) { return "" + (a || 0 === a ? a : "0") }, bb: Boolean, Ce: Boolean }; Ga.Sb = "defer"; Tb.Sb = Boolean; Ga.nj = "yaDisableGDPR"; Ga.oj = "yaGDPRLang"; Ga.exp = "experiments"; Ga.od = "ecommerce"; Tb.od = function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }; Ga.R = "params"; Ga.Yc = "userParams"; Ga.Nb = "accurateTrackBounce"; Ga.kg = "triggerEvent"; Tb.kg = Boolean; Ga.Wf = "sendTitle"; Tb.Wf = function (a) { return !!a || S(a) }; Ga.ye = "trackHash";
      Tb.ye = Boolean; Ga.Wg = "clickmap"; Ga.Ra = "webvisor"; Tb.Ra = Boolean; Ga.bj = "trustedDomains"; Ga.qb = "childIframe"; Tb.qb = Boolean; Ga.Vc = "trackLinks"; Ga.fh = "enableAll"; var vj = J(function (a, c) { var b = c[0]; a[b] = { Ef: c[1], ki: Tb[b] }; return a }, {}, Aa(Ga)), Qb = {}, U = v(function (a) { return a.id + ":" + a.aa }), Tf = ua("1"), ta = Ni(function (a) { var c = ""; a = J(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], Aa(a)); c && a.push(c); return G(":", a) }), wj = ja.Ia + "//mc.yandex.ru/metrika/metrika_match.html", bp = "hash host hostname href pathname port protocol search".split(" "),
        mi = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "), Kn = v(function (a) { a = O(a).hostname.split("."); return a[a.length - 1] }), xj = v(function (a) { return -1 !== O(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), Dh = v(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), hq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Pd = v(function (a) { a = O(a).hostname; var c = !1; a && (c = -1 !== a.search(hq)); return c }), iq = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, vm = v(function (a) { a = O(a).hostname; var c = !1; a && (c = -1 !== a.search(iq)); return c }), jq = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/, kq = v(function (a) { a = O(a).hostname; var c = !1; a && (c = -1 !== a.search(jq)); return c }), up = v(function (a) {
          var c = []; Wp(a) && "https:" === O(a).protocol && (c.push("SameSite=None"),
            c.push("Secure")); return c
        }), lq = v(function (a) { var c = !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", D, b) } catch (d) { } return c }), mq = Ca(function (a, c) { return a ? B({ capture: !0, passive: !0 }, c || {}) : !!c }), fa = v(function (a) { a = lq(a); var c = mq(a), b = {}; return B(b, { C: function (d, e, f, g) { z(function (h) { var k = c(g); Mi(d, h, f, k, !1) }, e); return C(b.Kb, b, d, e, f, g) }, Kb: function (d, e, f, g) { z(function (h) { var k = c(g); Mi(d, h, f, k, !0) }, e) } }) }), nq =
          setTimeout; xa.prototype["catch"] = function (a) { return this.then(null, a) }; xa.prototype.then = function (a, c) { var b = new this.constructor(rp); Yi(this, new tp(a, c, b)); return b }; xa.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) }; xa.all = function (a) {
            return new xa(function (c, b) {
              function d(h, k) {
                try {
                  if (k && ("object" === typeof k || "function" === typeof k)) {
                    var l =
                      k.then; if ("function" === typeof l) { l.call(k, function (m) { d(h, m) }, b); return }
                  } e[h] = k; 0 === --f && c(e)
                } catch (m) { b(m) }
              } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array")); var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
            })
          }; xa.resolve = function (a) { return a && "object" === typeof a && a.constructor === xa ? a : new xa(function (c) { c(a) }) }; xa.reject = function (a) { return new xa(function (c, b) { b(a) }) }; xa.race = function (a) {
            return new xa(function (c,
              b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)xa.resolve(a[d]).then(c, b) })
          }; xa.He = "function" === typeof setImmediate && function (a) { setImmediate(a) } || function (a) { nq(a, 0) }; xa.Fg = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var L = window.Promise, oq = Da(L, "Promise"), yj = Da(n(L, "resolve"), "resolve"), zj = Da(n(L, "reject"), "reject"), Aj = Da(n(L, "all"), "all"); if (F(!1, [oq,
            yj, zj, Aj])) L = xa; else { var ue = function (a) { return new Promise(a) }; ue.resolve = C(yj, L); ue.reject = C(zj, L); ue.all = C(Aj, L); L = ue } var Ko = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], md, vc = function (a) { return function (c) { if (md) return new md(c); if (ia("Error", a.Error)) return md = a.Error, new a.Error(c); md = ap; return new md(c) } }(window), Lo = Ya(/^http./), Jo = Ya(/^err.kn/), Yo = /[^a-z0-9.:-]/, Zo = la(function (a, c, b) {
              var d, e = new a.XMLHttpRequest, f = b.$, g = B(b.Fe ? (d = {},
                d.wmode = "7", d) : {}, b.Fb); return new L(function (h, k) { e.open(b.pg || "GET", c + "?" + Ec(g), !0); e.withCredentials = !1 !== b.rg; b.Tc && (e.timeout = b.Tc); Fi(Aa, cb(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.Eb); var l = la($o)(a, e, pb(b.za), b.Fe, b.Hi, h, k); e.onreadystatechange = l; try { e.send(f) } catch (m) { } })
            }), pq = v(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }), Za = v(u(V("document"), w("createElement", Ob))), xh = v(function (a) {
              var c = n(a, "Element.prototype"); return c ? (a = Xa(function (b) {
                return ia(b,
                  c[b])
              }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
            }), qq = ua("INPUT"), ee = u(ya, qq), rq = ua("TEXTAREA"), Vo = u(ya, rq), sq = ua("SELECT"), Wo = u(ya, sq), fe = u(V("type"), Ya(/^(checkbox|radio)$/)), $e = u(ya, Ya(/^INPUT|SELECT|TEXTAREA$/)), Ed = u(ya, Ya(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), cf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), Uo = ["submit", "image", "hidden"], tq = la(Db), Bj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
              Og = v(function () { for (var a = 59, c = {}, b = 0; b < Bj.length; b += 1)c[Bj[b]] = String.fromCharCode(a), a += 1; return c }), Gi = v(function (a) { return { Jj: a, Wa: null, eb: [] } }), Cj = la(Bb), Di = {}, Jf = {}; Di.p = 500; var Ci = { i: "id", n: "name", h: "href", ty: "type" }; Jf.h = !0; Jf.c = !0; var wc = {}; wc.p = Hi; wc.c = function (a, c, b) { (a = $b(n(c, "textContent"))) && b && (b = b(c), b.length && Ta(u(V("textContent"), $b, ua(a)), b) && (a = "")); ee(c) && (a = $b(c.getAttribute && c.getAttribute("value") || a)); return a }; var yc, If = "button," + y(function (a) { return 'input[type="' + a + '"]' },
                ["button", "submit", "reset", "file"]).join(",") + ",a", Qg = Cj(If), Ro = (yc = {}, yc.A = "h", yc.BUTTON = "i", yc.DIV = "i", yc.INPUT = "ty", yc), Qo = la(function (a, c, b, d) { return new L(function (e, f) { var g = Hb(a), h = c("img"), k = u(w(h, dc), w(pb(d.za), f)), l = be(a, k, d.Tc || 3E3); h.onerror = k; h.onload = u(w(h, dc), w(null, e), K([a, l], ha)); k = B({}, d.Fb); delete k.wmode; h.src = Li(b, d, k); $c(a) && (B(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h)) }) }), No = la(function (a, c, b) {
                  return new L(function (d, e) {
                    var f,
                      g, h = "_ymjsp" + Wa(a), k = B((f = {}, f.callback = h, f), b.Fb), l = K([a, h], Po); a[h] = function (p) { try { l(), dc(m), d(p) } catch (q) { e(q) } }; k.wmode = "5"; var m = pc(a, (g = {}, g.src = Li(c, b, k), g)); if (!m) return l(), e(vc("jp.s")); f = w(m, dc); f = u(f, w(pb(b.za), e)); g = be(a, f, b.Tc || 1E4); g = K([a, g], ha); m.onload = g; m.onerror = u(l, g, f)
                  })
                }), Mo = la(function (a, c, b, d) { return new L(function (e, f) { if (!n(a, "navigator.onLine")) return f(); var g = B(d.Fb, { "force-urlencoded": 1 }); return c(b + "?" + Ec(g), d.$) ? e("") : f() }) }), Oo = Ni(function (a) {
                  a = Aa(a); return G("",
                    y(function (c) { var b = c[0]; c = c[1]; return Ia(c) ? "" : b + "(" + c + ")" }, a))
                }), nd; var gc = [Bi, 0, Pb, Gf, ed]; var Dj = [Pb]; Dj.push(Gf); var Ej = Ab(Dj), zc = Ab([ed]), uq = Ab([Bi, ed]), ve = Ab([0, Pb, Gf, ed]); var sa = (nd = {}, nd.h = Ej, nd.f = Ej, nd.er = zc, nd); sa.d = zc; sa.s = Ab([Pb]); sa.S = sa.s; sa.u = zc; sa.pi = zc; sa.m = uq; sa["2"] = gc; sa["6"] = Ab([0, Pb]); sa.t = gc; sa.a = ve; sa.n = gc; sa.p = Ab([0, Pb]); sa["4"] = Ab([0, Pb, ed]); sa.r = ve; sa["1"] = ve; sa.g = ve; sa.c = zc; sa.e = gc; sa.adb = zc; sa.W = Ab([0, Pb]); sa["5"] = gc; var Ff = v(function (a, c) {
                  var b; (b = c ? sa[c] : gc) || (b = []);
                  b = J(function (d, e, f) { (e = e && e(a)) && d.push([f, e]); return d }, [], b); b.length || Mf(); return b
                }, rb), Mb = ["0", "1", "2", "3"], tc = Mb[0], nf = Mb[1], Eo = Mb[2], rf = y(u(P, da("concat", "GDPR-ok-view-detailed-")), Mb), Od = ka("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), rf, ["28", "29", "30"]), Do = "3 13 14 15 16 17 28".split(" "), qf = u(cb(V("ymetrikaEvent.type")), oc(Ib(Od))), vp = /:\d+$/, wp = v(function (a) {
                  var c = (O(a).host || "").split(".");
                  return 1 === c.length ? c[0] : J(function (b, d, e) { e += 1; 2 <= e && !b && (e = G(".", c.slice(-e)), nh(a, e) && (b = e)); return b }, "", c)
                }), Jb = v(Ic), Co = v(function (a) { zi(a, "_ymBRC", "1"); var c = "1" !== yi(a, "_ymBRC"); c || Ai(a, "_ymBRC"); return c }), Ma = v(xi), od = v(xi, function (a, c, b) { return "" + c + b }), ba = v(tf), vi = Rb("r", function (a, c) { var b = ui(a, c), d = b[0]; return !b[1] && d }), Sd = v(ti, function (a, c) { return "{" + c.Ld + c.bb }), xf = v(Wb, U), Ag = u(Sd, Nb), qi = la(function (a, c) { for (var b = []; !cd(c);) { var d = Ao(c); a(d, function (e) { return e(c) }); b.push(d) } return b }),
                  Kb = la(function (a, c, b) { return b(a, c) }), cg = la(function (a, c) { return pa(function (b, d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) }) }), we = la(function (a, c) { return pa(function (b, d) { return c(b, function (e) { try { a(e)(Kb(b, d)) } catch (f) { b(f) } }) }) }), xp = v(function (a) { if (a = Za(a)) return a("a") }), li = ["webkitvisibilitychange", "visibilitychange"], sb = K([1, null], je), xd = K([1, 0], je), ki = v(function () { return { Ye: null, oc: [] } }, U), gb, vq = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart",
                    "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], ji = (gb = {}, gb.responseEnd = 1, gb.domInteractive = 1, gb.domContentLoadedEventStart = 1, gb.domContentLoadedEventEnd = 1, gb.domComplete = 1, gb.loadEventStart = 1, gb.loadEventEnd = 1, gb.unloadEventStart = 1, gb.unloadEventEnd =
                      1, gb.secureConnectionStart = 1, gb), wq = v(Jc), to = { "*": "+", "-": "/", yj: "=", "+": "*", "/": "-", "=": "_" }, pd = v(function (a) { a = n(a, "console"); var c = n(a, "log"); c = me("log", c) ? C(c, a) : D; var b = n(a, "warn"); b = me("warn", b) ? C(b, a) : c; var d = n(a, "error"); a = me("error", d) ? C(d, a) : c; return { log: c, error: a, warn: b } }), xq = E("p.cd", function (a) {
                        if (gd(a) || he(a)) {
                          var c = Ma(a); if (ra(c.l("jn"))) {
                            c.o("jn", !1); var b = a.Dj || $c(a) ? function () { } : /./; a = pd(a); b.toString = function () { c.o("jn", !0); return "Yandex.Metrika counter is initialized" }; a.log("%c%s",
                              "color: inherit", b)
                          }
                        }
                      }), ro = /Firefox\/([0-9]+)/, qo = /([0-9\\.]+) Safari/, yq = /\sYptp\/\d\.(\d+)\s/, so = /Edg\/(\d+)\./, Fj = v(function (a) { var c; a: { if ((c = jb(a)) && (c = yq.exec(c)) && 1 < c.length) { c = parseInt(c[1], 10); break a } c = 0 } return 50 <= c && 99 >= c || di(a, 79) ? !1 : !te(a) || of(a) }), Fg = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                  Gk = v(function (a) { a = Za(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = C(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), Gj = Da(String.prototype.repeat, "repeat"), zg = Gj ? function (a, c) { return Gj.call(a, c) } : ip, ne = [2277735313, 289559509], oe = [1291169091, 658871167], Hj = /\/$/, zq = v(u(ba, pa(function (a) { return -(new a.b.Date).getTimezoneOffset() }))), Aq = u(ba,
                    pa(function (a) { a = new a.b.Date; return G("", y(Bo, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })), Bq = u(ba, pa(Zd)), Ij = v(u(ba, pa(function (a) { return a.oa[0] }))), Cq = v(Wb), Dq = v(Wb), Eq = v(function (a) {
                      var c = n(a, "webkitRequestFileSystem"); if (Q(c) && !gd(a)) return (new L(C(c, a, 0, 0))).then(function () { var d = n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {} }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](w(!0, P)); if (ad(a)) return c = n(a, "navigator.serviceWorker"),
                        L.resolve(S(c)); c = n(a, "openDatabase"); if ($c(a) && Q(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return L.resolve(b) } return L.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                    }), Fq = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Gq = v(function (a, c) { var b = Jb(a), d = O(a).search.match(Fq); return d && 2 <= d.length ? (d = d[2], c.bb || b.o("turbo_uid", d), d) : (b = b.l("turbo_uid")) ? b : "" }), Hq = v(function (a) { return Q(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null }), Iq = [["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], Jq = v(Jc), aa, lb, Kq =
                    v(function (a) { a = R(a); var c = a.l("counterNum", 0) + 1; a.o("counterNum", c); return c }, u(rb, U)), eb = (aa = {}, aa.vf = w(dd.version, P), aa.nt = Yp, aa.fp = function (a, c, b) {
                      if (b.F && b.F.nohit) return null; c = U(c); b = Cq(a); if (b[c]) return null; a: {
                        var d = Ij(a), e = n(a, "performance.getEntriesByType"); if (Q(e)) { if (a = W(u(P, V("name"), ua("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else {
                          e = n(a, "chrome.loadTimes"); if (Q(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a =
                            n(a, "performance.timing.msFirstPaint")) { a -= d; break a }
                        } a = void 0
                      } return a ? (b[c] = a, Math.round(a)) : null
                    }, aa.fu = function (a, c, b) { var d = b.F; if (!d) return null; c = (n(a, "document.referrer") || "").replace(Hj, ""); b = (d["page-ref"] || "").replace(Hj, ""); d = d["page-url"]; a = O(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b }, aa.en = pq, aa.la = uj, aa.ut = function (a, c, b) { var d = b.wc; (b = b.F) && (kq(a) || c.Ce || d) && (b.ut = "noindex"); return null }, aa.v = w(ja.Ha, P), aa.cn = Kq, aa.dp = function (a) {
                      var c = R(a), b = c.l("bt", {}); if (S(c.l("bt"))) {
                        var d =
                          n(a, "navigator.getBattery"); try { b.p = d ? d.call(a.navigator) : null } catch (e) { } c.o("bt", b); b.p && b.p.then && b.p.then(function (e) { b.ij = e.charging && 0 === e.chargingTime })
                      } return b.ij ? "1" : "0"
                    }, aa.ls = v(function (a, c) { var b = od(a, c.id), d = ba(a), e = b.l("lsid"); return +e ? e : (d = Wa(a, 0, d(X)), b.o("lsid", d), d) }, rb), aa.hid = uc, aa.z = zq, aa.i = Aq, aa.et = Bq, aa.c = u(V("navigator.cookieEnabled"), sb), aa.rn = u(P, Wa), aa.rqn = function (a, c, b) {
                      b = b.F; if (!b || b.nohit) return null; a = od(a, c.id); c = (a.l("reqNum", 0) || 0) + 1; a.o("reqNum", c); if (a.l("reqNum") ===
                        c) return c; a.Zb("reqNum"); return null
                    }, aa.u = Sd, aa.tp = u(rb, Pi, sb), aa.tpid = u(rb, function (a) { a = U(a); return Qb[a] && Qb[a].Yi || null }), aa.w = function (a) { a = fd(a); return a[0] + "x" + a[1] }, aa.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return G("x", [a, b, c]) } return null }, aa.sk = V("devicePixelRatio"), aa.ifr = u(ub, sb), aa.j = u($p, sb), aa.sti = function (a) { return ub(a) ? Zp(a) ? "1" : null : null }, aa), Zc = {}; eb.pri = function (a) {
                      if (Wc(a)) return null; var c = Dq(a), b =
                        c.Hf; S(b) && (c.Hf = null, Eq(a).then(function (d) { c.Hf = d })); return b ? 1 : null
                    }; B(eb, (lb = {}, lb.iss = u(aq, sb), lb.hdl = u(bq, sb), lb.iia = u(cq, sb), lb.cpf = u(dq, sb), lb.ntf = v(function (a) { a: switch (n(a, "Notification.permission")) { case "denied": a = !1; break a; case "granted": a = !0; break a; default: a = null }return Ia(a) ? null : a ? 2 : 1 }), lb.eu = function (a) { return R(a).l("isEU") }, lb.ns = Ij, lb.np = function (a) {
                      if (Wa(a, 0, 100)) a = null; else {
                        a = $b(ag(a), 100); for (var c = [], b = 0; b < a.length; b++) {
                          var d = a.charCodeAt(b); 128 > d ? c.push(d) : (127 < d && 2048 >
                            d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                        } a = lh(c)
                      } return a
                    }, lb.re = u(function (a, c) { return !c.bb && vi(a, c) }, sb), lb)); Zc.aw = function (a) { a = Xa(u(ra, zb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]); return ra(a) ? null : xd(!a) }; eb.ds = function (a, c, b) { b = b.F; if ((void 0 === b ? {} : b).nohit) return null; a = Ef(a); c = U(c); if (!a) return null; b = n(a, "timing"); if (!b) return null; a = ii(a, b, Iq); c = Jq(c); return (c = hi(c, a)) && G(",", c) }; eb.dsn = function (a, c, b) {
                      b = b.F; if ((void 0 === b ? {} :
                        b).nohit) return null; a = Ef(a); c = U(c); if (!a) return null; b = null; if (Q(a.getEntriesByType)) { var d = n(a.getEntriesByType("navigation"), "0"); d && (b = d) } if (!b) return null; a = ii(a, b, vq); c = wq(c); return (c = hi(c, a)) && G(",", c)
                    }; eb.bu = Hq; eb.td = Gq; eb.wv = w(2, P); Zc.clc = function (a) { return ke(a).l("cls") }; Zc.lt = function (a) { var c = ke(a).l("lt", null); return c ? a.Math.round(100 * c) : c }; eb.co = function (a) { return xd(R(a).l("jn")) }; var Lq = ea(eb), Mq = ea(Zc), no = Lq.concat(Mq); eb.we = function (a, c) { return sb(c.Ra) }; var ko = ["RTCPeerConnection",
                      "mozRTCPeerConnection", "webkitRTCPeerConnection"], Wd = v(function () { return { Db: {}, pending: {}, rb: {} } }), dg = V("postMessage"), Nq = la(function (a, c, b, d) { var e, f = { Yb: ba(a)(X), key: a.Math.random(), dir: 0 }; b.length && (f.Yb = parseInt(b[0], 10), f.key = parseFloat(b[1]), f.dir = parseInt(b[2], 10)); B(d, c); c = (e = { data: d }, e.__yminfo = G(":", ["__yminfo", f.Yb, f.key, f.dir]), e); return { Y: f, dg: bb(a, c) || "" } }), Oq = la(function (a, c, b, d, e) {
                        c = c(d); var f = Wd(a), g = G(":", [c.Y.Yb, c.Y.key]); if (dg(b)) {
                          f.pending[g] = e; try { b.postMessage(c.dg, "*") } catch (h) {
                            delete f.pending[g];
                            return
                          } T(a, function () { delete f.pending[g] }, 5E3, "if.s")
                        }
                      }), Pq = E("s.f", Oq), Qq = la(function (a, c, b, d, e, f) {
                        var g = null, h = null, k = Wd(a), l = null; try { g = qb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!ra(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ra(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !ca(l) && l.type && "0" === g && l.counterId) {
                          if (!l.toCounter || l.toCounter == h) {
                            k = null; try { k = f.source } catch (m) { } !Ia(k) && dg(k) && (f = d.V(l.type, [f, l]), e = y(u(P, qh(e)), f.concat([{}])), l = b([c, a, l.counterId],
                              e), k.postMessage(l.dg, "*"))
                          }
                        } else g === "" + h && ca(l) && W(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length && (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
                      }), Rq = E("s.fh", Qq), ai = v(function (a, c) {
                        var b, d = Ob("getElementsByTagName", n(a, "document")), e = Wd(a), f = dg(a), g = Fc(a), h = fa(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + uc(a), b); mo(a, g); b = Nq(a, f); var k = Pq(a, b([])); z(function (l) {
                          var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" },
                            function (p, q) { g.V("initToParent", [p, q]) })
                        }, d); ub(a) && k(a.parent, { type: "initToParent" }, function (l, m) { g.V("parentConnect", [l, m]) }); h.C(a, ["message"], Rq(a, c, b, g, f)); return { Z: g, Db: e.Db, rb: e.rb, le: k }
                      }, u(rb, U)), io = la(function (a, c, b) { var d = b[a]; d ? (d.Di = c, d.Of = !0, d.Nf ? d.Nf(c) : d.Na = L.resolve(c)) : b[a] = { Na: L.resolve(c), Di: c, Of: !0 } }), go = la(function (a, c) { if (!c[a]) { var b, d = new L(function (e) { b = e }); c[a] = { Nf: b, Na: d, Of: !1 } } return c[a].Na }), ei = v(u(Wb, pa)), eg = v(function (a, c, b) {
                        var d = R(a); c = Ma(a); var e = []; b = K([a, b, d,
                          c], oo); Wc(a) || po(a, "14.1") || e.push(K([jo, "pp", ""], b)); var f = Fj(a) && !ci(a, 68); f || e.push(K([lo, "pu", ""], b)); f || c.Fd || te(a) || (e.push(K([eo, "zzlc", "na"], b)), e.push(K([co, "cc", ""], b))); return e.length ? { Ga: function (g, h) { if (0 === d.l("isEU")) try { z(u(P, Ea), e) } catch (k) { } h() }, ba: function (g, h) { var k = g.H; if (k && 0 === d.l("isEU")) try { z(pa(k), e) } catch (l) { } h() } } : {}
                      }, function (a, c, b) { return U(b) }), Xc = Rb("retryReqs", function (a) { return Ma(a).l("retryReqs", {}) }), bo = ["0"], el = E("g.r", function (a) {
                        var c = ba(a), b = Xc(a), d = c(X),
                          e = uc(a); return J(function (f, g) { var h = g[0], k = g[1]; k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({ protocol: k.protocol, host: k.host, Fi: k.resource, zi: k.postParams, R: k.params, Ng: k.browserInfo, Lj: k.ghid, time: k.time, Gb: parseInt(h, 10), Yg: k.counterId, aa: k.counterType })); return f }, [], Aa(b))
                      }), pf = [], $n = la(function (a, c, b, d, e) {
                        return (new L(function (f, g) {
                          var h = ea(b), k = u(d.resolve ? d.resolve : P, Mc(f)), l = u(d.reject ? d.reject : P, Mc(g)); d.resolve = k; d.reject = l; z(function (m) {
                            var p;
                            d.ze.push(m); var q = b[m], r = T(a, w(pb(), l), 5100, "is.m"); c(q.window, B(e, (p = {}, p.toCounter = parseInt(m, 10), p)), function (t, x) { ha(a, r); d.Zf.push(m); d.resolve && d.resolve(x) })
                          }, h)
                        }))["catch"](A(a, "if.b"))
                      }), ao = la(function (a, c, b) { c = W(function (d) { return !F(b.info.counterId, d.ze) }, c); z(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c) }), Rd = v($h, u(rb, U)), Zn = "ru en et fi lt lv pl fr no sr".split(" "), Cb, Wn = (Cb = {}, Cb["GDPR-ok"] = "ok", Cb["GDPR-ok-view-default"] = "ok-default", Cb["GDPR-ok-view-detailed"] =
                        "ok-detailed", Cb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Cb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Cb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Cb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Cb), Qd = [], Wh = u(qf, cb(Tp(Od)), Rc(",")), Xh = u(oc(Ib(Od)), rc, Boolean), Pn = v(function (a, c) { var b = c.l("gdpr"); return F(b, Mb) ? "-" + b : "" }), Jj = v(Jc), hb, Va, Ln = (hb = {}, hb.am = "com.am", hb.tr = "com.tr", hb.ge = "com.ge", hb.il = "co.il", hb["\u0440\u0444"] = "ru", hb["xn--p1ai"] = "ru", hb["\u0443\u043a\u0440"] =
                          "ua", hb["xn--j1amh"] = "ua", hb["\u0431\u0435\u043b"] = "by", hb["xn--90ais"] = "by", hb), xe = "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0".split(" "), Kj = {
                            "an.yandex.ru/mapuid/google/?partner-tag=yandex_llc": { Tb: xe }, "an.yandex.ru/mapuid/google/?partner-tag=yandexcom": { Tb: xe }, "an.yandex.ru/mapuid/google/?partner-tag=yandexru": { Tb: xe }, "mc.edadeal.ru": { Gc: /^([^/]+\.)?edadeal\.ru$/, ig: "ru" }, "mc.yandexsport.ru": { Gc: /^([^/]+\.)?yandexsport\.ru$/, ig: "ru" }, "mc.kinopoisk.ru": {
                              Gc: /^([^/]+\.)?kinopoisk\.ru$/,
                              ig: "ru"
                            }
                          }, Nn = (Va = {}, Va.ka = "ge", Va.ro = "md", Va.tg = "tj", Va.tk = "tm", Va.et = "ee", Va.hy = "com.am", Va.he = "co.li", Va.ky = "kg", Va.uk = "ua", Va.be = "by", Va.tr = "com.tr", Va.kk = "kz", Va), Lj = v(Jc), Sq = v(function (a) { var c = u(oc(u(P, ua("ru"), zb)), qc(function (b, d) { b[d] = ["mc.yandex." + d]; return b }, {}))(mi); z(function (b) { var d = b[0]; b = b[1]; if (!b.Tb || F(a, b.Tb)) c[d] = [d] }, Aa(Kj)); return c }), Tq = v(function (a) { var c = O(a).hostname; return J(function (b, d) { var e = d[0], f = d[1]; f.Gc && !f.Gc.test(c) || b.push(e); return b }, [], Aa(Kj)) }), Uq = Ca(function (a,
                            c) { var b = xj(c), d = Mn(c), e = Tq(c) || [Jn(c)], f = ba(c), g = Ma(c), h = g.l("synced", {}); b = b ? e.concat(d) : e; h && (b = W(function (k) { var l = (h[k] || 1) + 1440 < f(ib); l && delete h[k]; return l }, b)); g.o("synced", h); return J(function (k, l) { z(function (m) { var p = { domain: m, ci: l }; jd(m, "/") && (p.Oh = 1); k.push(p) }, a[l] || []); return k }, [], b) }), Vq = function (a, c) {
                              return function (b, d, e) {
                                d = U(e); e = Sq(d); var f = Uq(e), g = F(d, xe); return te(b) || ad(b) ? {} : {
                                  ba: function (h, k) {
                                    var l = h.H, m = R(b); if (!xj(b) && !g || ub(b) || !l || !l.l("pv")) return k(); l = f(b); if (!l.length) return k();
                                    if (m.l("startSync")) Lj(b).push(k); else { m.o("startSync", !0); if (g) return a(b, l).then(k, k); m = pf[0]; if (!m) return k(); m(b).then(K([b, l], a)).then(k, u(Mc(k), A(b, c)))["catch"](D) }
                                  }
                                }
                              }
                            }(function (a, c) {
                              var b = ba(a), d = R(a), e = Ma(a), f = Ff(a, "c"), g = fc(a, f); return J(function (h, k) {
                                function l() { var q = e.l("synced"); d.o("startSync", !1); q && (q[k.ci] = p, e.o("synced", q)); z(Ea, Lj(a)) } var m = g({ za: ["sync.cook"] }, [ja.Ia + "//" + k.domain + (k.Oh ? "" : "/sync_cookie_image_check")], { Tc: 1500 }), p; m.then(function () { p = b(ib); l() })["catch"](function () {
                                  p =
                                    b(ib) - 1435; l()
                                }); m = w(m, P); return h.then(m)
                              }, L.resolve(""), c)["catch"](A(a, "ctl"))
                            }, "sy.c"), Wq = Ya(/^.+\.mtproxy\.yandex\.net$/), Ze = v(function (a) { if ("MetrikaPlayer" === a.name) return !0; a = O(a).hostname; return Wq(a) }), Th = !1, In = /^[a-z][\w.+-]+:/i, Mj = {}, ye, Fa = [vf, bd, ec(), uf], Nj = "et w v z i u vf".split(" "); Nj.push("we"); var fg = ec(Nj); Fa.push(Vq); Fa.unshift(function (a, c, b) { return { Ga: function (d, e) { var f = Ka(a, b); (f = f && f.userParams) && d.Yc && f(d.Yc); e() } } }); Fa.unshift(function (a, c, b) {
                              return {
                                ba: function (d, e) {
                                  if (d.R &&
                                    (Oi(b, d.R), !d.$ && d.H && d.F)) { var f = bb(a, d.R), g = Jj(a), h = d.H.l("pv"); f && !d.F.nohit && (h ? encodeURIComponent(f).length > ja.yg ? g.push([d.H, d.R]) : d.F["site-info"] = f : (d.$ = f, d.ji = !0)) } e()
                                }, Ga: function (d, e) { var f = Jj(a), g = Ka(a, b), h = g && g.params; h && (g = W(u(V("0"), ua(d.H)), f), z(function (k) { h(k[1]); k = se(a)(k, f); f.splice(k, 1) }, g)); e() }
                              }
                            }); Fa.push(Uh); Fa.push(Sh); Fa.push(eg); Fa.push(function (a) { return { ba: function (c, b) { var d = c.H, e = Ma(a).l("fip"); e && d && (d.o("fip", e), Md(c, "fip", xd(e))); b() } } }); Fa.push(Td()); var va = (ye =
                              {}, ye.h = Fa, ye.er = [], ye); va.adb = []; var Oj = [ec(), uf]; Oj.push(eg); va.f = Oj; va["2"] = Fa; va["1"] = function (a, c) { return W(u(Ib(c), zb), a) }(Fa, [uf]); va.a = Fa; va.g = Fa; va.e = Fa; var Pj = [bd]; Pj.push(function () { return function (a) { return { ba: function (c, b) { var d = c.H, e = void 0 === d ? ta() : d, f = c.Gb, g = Xc(a); d = e.l("rqnl", 0) + 1; e.o("rqnl", d); if (e = n(g, G(".", [f, "browserInfo"]))) e.rqnl = d, sf(a); b() }, Ga: function (c, b) { bi(a, c); b() } } } }()); va.r = Pj; var gg = []; gg.push(fg); gg.push(Td()); va.p = gg; va["6"] = [bd]; va.t = Fa; va["4"] = [fg]; va.W = [fg]; var qd =
                                [vf, bd, ec()]; qd.push(Uh); qd.push(eg); qd.push(Sh); qd.push(Td()); va.n = qd; va.d = [ec(["hid", "u", "v", "vf"])]; va.m = [ec(["u", "v", "vf"]), Td()]; va.s = []; va.u = []; va.S = [ec(["v", "hid", "u", "vf", "rn"])]; va.pi = []; Fa.unshift(function (a, c, b) { return { ba: function (d, e) { var f = d.H, g = d.F; if (!f || !g) return e(); !Mj[b.id] && f.l("pv") && b.exp && !g.nohit && (g.exp = b.exp, Mj[b.id] = !0); f = g["page-ref"]; var h = g["page-url"]; f && h !== f ? g["page-ref"] = Qh(a, f) : delete g["page-ref"]; g["page-url"] = Qh(a, h).slice(0, ja.Ag); return e() } } }); va["5"] = W(u(Ib([vf,
                                  bd]), zb), Fa); var ze, Qj = C(L.reject, L, pb()), na = (ze = {}, ze.h = Pa, ze.er = w(Qj, P), ze); na.a = Pa; na.p = Ud; na["4"] = Ud; na.f = Pa; na.n = Pa; na["6"] = function (a, c, b) { var d = fc(a, c); return function (e) { return yf(a, b, e, !0).then(K([e, ["https://mc.yandex.md/cc"], { Fe: !0, rg: !1 }], d)) } }; na["1"] = Pa; na.n = Pa; na.c = fc; na.g = Pa; na.e = Pa; na["2"] = Pa; na.r = function (a, c, b) { var d = Ud(a, c, b), e = Pa(a, c, b); return function (f, g, h) { return "webvisor" === h ? d(f, g, f.F["wv-part"]) : e(f, g) } }; na.adb = Vd; na.s = fc; na.S = Pa; na.u = fc; na.pi = fc; na.m = function (a, c, b) {
                                    return function (d,
                                      e) { var f, g = d.F; g = (f = {}, f["page-url"] = g && g["page-url"] || "", f); f = B(d, { F: B(d.F || {}, g) }); return Vd(a, c, b)(f, "clmap/" + e.id)["catch"](A(a, "c.m")) }
                                  }; na.d = Pa; na.t = Pa; na.W = Ud; na["5"] = Pa; var qa = E("g.sen", function (a, c, b) { var d = Ff(a, c); b = Fn(a, c, b); var e = na[c], f = e ? e(a, d, b) : Pa(a, d, b); return function () { var g = Ba(arguments), h = g.slice(1); g = B(g[0], { za: [c] }); return f.apply(void 0, ka([g], h)) } }, Qj), Oh = v(u(V("id"), Ib([26812653])), U), Xq = E("dc.init", function (a) {
                                    var c = O(a), b = pd(a), d = Jb(a), e = hf(a), f = e.Wh; e = e.Nh; f && !e && d.o("debug",
                                      "1", void 0, c.host); return Ye(a) || !f && !e ? { log: D, warn: D, error: D } : b
                                  }), Ld = v(Xq), Yq = A(window, "h.p", function (a, c) { var b, d, e = qa(a, "h", c), f = c.ec || "" + O(a).href, g = c.th || a.document.referrer, h = { H: ta((b = {}, b.pv = 1, b)), F: (d = {}, d["page-url"] = f, d["page-ref"] = g, d) }; h.R = c.R; h.Yc = c.Yc; c.Sb && h.F && (h.F.nohit = "1"); return e(h, c).then(function (k) { k && (c.Sb || Eb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.R)(), vb(a, K([a, c, k], ho))) })["catch"](A(a, "h.g.s")) }), Sc = v(Wb, U), Zq = E("p.ar", function (a, c) {
                                    var b = qa(a, "a",
                                      c); return function (d, e, f, g, h, k) { var l, m, p = { F: {}, H: ta((l = {}, l.pv = 1, l.ar = 1, l)) }; d && (e = sc(e) ? { title: e.title, Kf: e.referer, R: e.params, Sa: e.callback, b: e.ctx } : { title: e, Kf: f, R: g, Sa: h, b: k }, f = Sc(c), f.url !== d && (f.ref = f.url, f.url = d), d = d || O(a).href, f = e.Kf || f.ref || a.document.referrer, g = Eb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.R), b(B(p, { R: e.R, title: e.title, F: B(p.F, (m = {}, m["page-url"] = d, m["page-ref"] = f, m)) }), c).then(g)["catch"](A(a, "p.ar.s")).then(K([a, e.Sa || D, e.b], Lb))) }
                                  }), Dn = {
                                    K: "stamp", L: "frameId",
                                    Y: "meta", Me: "base", jf: "hasBase", Je: "address", mg: "ua", $d: "prev", zf: "namespace", uc: "keystrokes", tf: "isMeta", vc: "modifier", gb: "pageWidth", fb: "pageHeight", bg: "startNode", Ue: "endNode", sg: "zoomFrom", vg: "zoomTo", level: "level", duration: "duration", ua: "i", yc: "o", n: "n", r: "r", Wb: "ct", pb: "at", Af: "nm", Bf: "ns", Vd: "pa", Yd: "pr", Pd: "nx", Ka: "h", ya: "changes", Ie: "a", Le: "b", bd: "c", Ud: "op"
                                  }, En = ["attributes", "attrs"], Ae = function () {
                                    function a(c) { this.b = c } a.prototype.Ca = function (c) {
                                      var b = Kd(c); c = y(C(this.Da, this), b); return Qe(bb(this.b,
                                        y(function (d, e) { var f; return B({}, b[e], (f = {}, f.data = d, f)) }, c)))
                                    }; a.prototype.Da = function (c) { var b = c.data; "string" !== typeof b && (b = bb(this.b, Kd(c.data))); return b }; a.prototype.Ja = function (c) { return encodeURIComponent(c).length }; a.prototype.Qc = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return !!this.b.JSON }; return a
                                  }(), Bn = v(function (a) {
                                    function c(f, g, h, k) { d[0] = g; h[k] = e[3]; h[k + 1] = e[2]; h[k + 2] = e[1]; h[k + 3] = e[0] } function b(f,
                                      g, h, k) { d[0] = g; h[k] = e[0]; h[k + 1] = e[1]; h[k + 2] = e[2]; h[k + 3] = e[3] } if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Cn; var d = new Float32Array([-0]), e = new Uint8Array(d.buffer); return 128 === e[3] ? b : c
                                  }), xn = Nh(!1), wn = Nh(!0), $q = { Ui: "topics", Bi: "publicationDate", yi: "pageUrlCanonical", fj: "updateDate", Lg: "authors", Jg: "articleInfo", Ii: "rubric", Ci: "publishersHeader", ab: "involvedTime", xi: "pageTitle", ei: "maxScrolled", Oe: "chars", Kg: "articleMeta" }, ar = function () {
                                    function a(c) {
                                      this.b = c; this.zb =
                                        u(Aa, qc(function (b, d) { b[d[1]] = d[0]; return b }, {}))($q)
                                    } a.prototype.fg = function (c) { var b, d = this.Zd(c.data); return { K: ba(this.b)(Af), data: (b = {}, b[this.zb[c.type]] = d, b) } }; a.prototype.Zd = function (c) { var b = this; return ca(c) ? y(C(this.Zd, this), c) : sc(c) ? u(Aa, qc(function (d, e) { var f = e[0]; d[b.zb[f] || f] = b.Zd(e[1]); return d }, {}))(c) : c }; a.prototype.Da = function (c) { return Id(this.b, mf, this.fg(c))(Yd(D)) }; a.prototype.Ja = function (c) { return c[0] }; a.prototype.Qc = function (c) { return [c] }; a.prototype.Ca = function (c) {
                                      var b =
                                        this; c = Id(this.b, Gh, { buffer: y(C(this.fg, this), c) }); return cc(this.b, c, 20, 100, Xd)(we(function (d) { d = jf(b.b, d.slice(-4)); return cc(b.b, d, 20, 100, Xd) }))(cg(function (d) { return d[d.length - 1] }))
                                    }; a.prototype.isEnabled = function () { return Fh(this.b) }; return a
                                  }(), Rj = function () {
                                    function a(c, b, d) { this.Se = 0; this.Xd = 1; this.Zc = 5E3; this.b = c; this.qa = b; this.ne = d } a.prototype.Pc = function () { this.Se = T(this.b, u(C(this.flush, this), C(this.Pc, this)), this.Zc, "b.f") }; a.prototype.send = function (c, b) {
                                      this.ne(c, b || [], this.Xd); this.Xd +=
                                        1
                                    }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a
                                  }(), hg, ig = (hg = function (a) {
                                    function c(b, d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.xe = 0; d.ob = 0; d.ve = 0; d.buffer = []; d.Zc = 2E3; d.Z = Fc(b); d.Pc(); d.ve = f; return d } za(c, a); c.prototype.bf = function (b) { return W(Boolean, this.Z.V("ag", b)) }; c.prototype.af = function (b, d) { var e = this; b(Kb(A(this.b, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.Oi = function (b, d) {
                                      var e = this; ha(this.b, this.Se); var f = Math.ceil(this.qa.Ja(d) / 63E4), g = this.qa.Qc(d,
                                        f); z(function (h, k) { var l, m = B({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l)); l = e.qa.Ca([m], !1); e.af(l, [m]) }, g); this.Pc()
                                    }; c.prototype.send = function (b, d) { this.Z.V("se", d); a.prototype.send.call(this, b, d) }; c.ud = function (b, d, e, f, g) { c.ad["" + b + d] || (this.ad[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.ad[d] }; c.prototype.Yh = function () { return this.ve && this.xe >= this.ve }; c.prototype.push = function (b) {
                                      var d = this; if (!this.Yh()) {
                                        this.Z.V("p", b); var e = this.qa.Da(b), f = this.qa.Ja(e); 7E5 < f ? this.Oi(b, e) : (e = this.bf(this.buffer.concat([b])),
                                          e = J(function (g, h) { return g + d.qa.Ja(d.qa.Da(h)) }, 0, e), this.ob + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.ob += f)
                                      }
                                    }; c.prototype.C = function (b, d) { this.Z.C(b, d) }; c.prototype.da = function (b, d) { this.Z.da(b, d) }; c.prototype.flush = function () { var b = this.buffer.concat(this.bf(this.buffer)); if (b.length) { this.buffer = []; this.xe += this.ob; this.ob = 0; var d = this.qa.Ca(b); this.af(d, b) } }; return c
                                  }(Rj), hg.ad = {}, hg), rd, jg = (rd = {}, rd[1] = 500, rd[2] = 500, rd[3] = 0, rd), kg = function () {
                                    function a(c) {
                                      var b, d = this; this.id = "a"; this.Ed =
                                        !1; this.ub = {}; this.ib = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), Df: ["article"] }; this.Ae = (b = {}, b.Answer = 3, b.Review = 2, b); this.Xg = v(function (e, f) { wb(d.b, "Warning: content has only " + f.chars + " chars. Required " + jg[f.type], f) }); this.b = c; this.root = Hb(c)
                                    } a.prototype.Aa = function (c) { return c.element }; a.prototype.cf = function (c, b) { var d = this, e; A(this.b, "P.s." + b, function () { e = d.ub[b].call(d, c) })(); return e }; a.prototype.Ai = function (c) {
                                      var b = B({}, c); this.Ed && !b.id && F(c.type,
                                        [3, 2]) && (c = G(", ", y(V("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle = this.Kh(b.tb)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Hh()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                                    }; a.prototype.sa = function (c) {
                                      var b = this, d = {}, e = this.Aa(c); if (!e) return null; d.type = c.type; z(function (g) { d[g] = b.cf(c, g) }, ea(this.ub)); var f = ba(this.b); d.stamp = f(Af); d.element = c.element; d.tb = e; d = this.Ai(d); d.id = d.id ? Nb(d.id) :
                                        1; d.update = function (g) { return b.Aa(c) ? b.cf(c, g) : void 0 }; return d
                                    }; a.prototype.Kh = function (c) { for (var b = 1; 5 >= b; b += 1) { var d = Qa(kc(this.b, c, "h" + b)); if (d) return d } }; a.prototype.Hh = function () { var c = kc(this.b, this.root, '[rel="canonical"]'); if (c) return c.href }; a.prototype.gf = function () { return 1 }; a.prototype.dc = function () { return [] }; a.prototype.nh = function () {
                                      var c = this, b = this.dc(), d = 1; return J(function (e, f) {
                                        var g = c.sa({ element: f, type: c.gf(f) }) || []; ca(g) || (g = [g]); g = J(function (h, k) {
                                          var l = h.values, m = h.lf; k &&
                                            k.chars > jg[k.type] && !F(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= jg[k.type] && c.Xg(k.id, k); return { values: l, lf: m }
                                        }, { values: [], lf: y(V("id"), e) }, g).values; return e.concat(y(function (h) { var k; h = B((k = { index: d, me: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
                                      }, [], b)
                                    }; return a
                                  }(), Sj = function (a) {
                                    function c() {
                                      var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Ed = !0; d.Re = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                                      d.ub = (b = {}, b.id = function (e) { var f = e.data["@id"]; e = e.data.mainEntity || e.data.mainEntityOfPage; !f && e && (f = e["@id"]); return f }, b.chars = function (e) { return "string" === typeof e.data.text ? e.data.text.length : this.Aa(e).innerText.length }, b.authors = function (e) { var f = []; f = f.concat(this.cc(e.data, "author")); f = f.concat(this.cc(e.data.mainEntity, "author")); return f.concat(this.cc(e.data.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                        var f = e.data.headline || ""; e.data.Aj && (f += " " + e.data.alternativeHeadline); "" ===
                                          f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed)); 3 === e.type && e.data.parentItem && (f = e.data.parentItem.text); return f
                                      }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.cc(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                        var f = this, g = this.Aa(e); e = W(Boolean, y(function (h) {
                                          if (h = qb(f.b, h.innerText)) {
                                            var k = f.df(h);
                                            if (k) return J(function (l, m) { return l ? l : "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" === h["@type"]) return h
                                          } return null
                                        }, [e.element].concat(oa(Bb(this.Re, this.b, document.body === g ? document.documentElement : g))))); return e.length && (e = e[0].itemListElement, ca(e)) ? W(Boolean, y(function (h) { return h.item && !f.b.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
                                      }, b); return d
                                    } za(c, a); c.prototype.cc = function (b, d, e) {
                                      void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = ca(b[d]) ?
                                        b[d] : [b[d]]; b = W(Boolean, y(function (f) { return f ? "string" === typeof f ? f : J(function (g, h) { return g || f[h] }, "", e) : null }, b)); return y(function (f) { var g; return g = {}, g.name = f, g }, b)
                                    }; c.prototype.Aa = function (b) { var d = b.element, e = b.data["@id"], f = b.data.url; b = null; f && "string" === typeof f && (b = this.Xe(f)); !b && e && "string" === typeof e && (b = this.Xe(e)); b || (b = e = d.parentNode, !Db("head", this.b, d) && e && 0 !== e.innerText.length) || (b = this.b.document.body); return b }; c.prototype.Xe = function (b) {
                                      try {
                                        var d = mc(this.b, b).hash; if (d) {
                                          var e =
                                            kc(this.b, this.b.document.body, d); if (e) return e
                                        }
                                      } catch (f) { } return null
                                    }; c.prototype.Wd = function (b) { return this.Ae[b["@type"]] || 1 }; c.prototype.sa = function (b) {
                                      var d = this, e = b.element; if (!b.data && (b.data = qb(this.b, e.innerText), !b.data || !/schema\.org/.test(b.data["@context"]) && !ca(b.data))) return null; var f = this.df(b.data); if (f) return y(function (h) { if (!F(h["@type"], d.ib["schema.org"])) return null; h = { element: e, data: h, type: d.Wd(h) }; return a.prototype.sa.call(d, h) }, f); if ("QAPage" === b.data["@type"]) {
                                        var g =
                                          b.data.mainEntity || b.data.mainEntityOfPage; if (!g) return null
                                      } "Question" === b.data["@type"] && (g = b.data); return g ? (b = Vb(w(g, n), ["acceptedAnswer", "suggestedAnswer"]), y(function (h) { var k; if (!h || !F(h["@type"], d.ib["schema.org"])) return null; h = { element: e, type: d.Wd(h), data: B((k = {}, k.parentItem = g, k), h) }; return a.prototype.sa.call(d, h) }, b)) : F(b.data["@type"], this.ib["schema.org"]) ? a.prototype.sa.call(this, B(b, { type: this.Wd(b.data) })) : null
                                    }; c.prototype.dc = function () { return Bb(this.Re, this.b, this.root) }; c.prototype.df =
                                      function (b) { return ca(b) && b || b && ca(b["@graph"]) && b["@graph"] }; return c
                                  }(kg), lg = function (a) {
                                    function c() {
                                      var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Ed = !0; d.cj = da("exec", new RegExp("schema.org\\/(" + G("|", ea(d.Ae)) + ")$")); d.ub = (b = {}, b.id = function (e) { e = e.element; var f = Ua(this.b, e, "identifier"); return f ? Qa(f) : (f = Ua(this.b, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) {
                                        var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions",
                                          "description", "text"], h = 0; h < g.length; h += 1) { var k = Ua(this.b, e, g[h]); if (k) { f = Qa(k).length; break } } 0 === f && e.innerText && (f += e.innerText.length); return f
                                      }, b.topics = function (e) { var f = this, g = ld(this.b, e.element, "about"); return y(function (h) { var k = { name: Qa(h) }; if (g = Ua(f.b, h, "name")) k.name = Qa(g); return k }, g) }, b.rubric = function (e) {
                                        var f = this; (e = kc(this.b, e.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (e = kc(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]')); return e ? y(function (g) {
                                          return {
                                            name: Qa(Ua(f.b,
                                              g, "name")), position: Qa(Ua(f.b, g, "position"))
                                          }
                                        }, ld(this.b, e, "itemListElement")) : []
                                      }, b.updateDate = function (e) { return (e = Ua(this.b, e.element, "dateModified")) ? $i(e) : "" }, b.publicationDate = function (e) { return (e = Ua(this.b, e.element, "datePublished")) ? $i(e) : "" }, b.pageUrlCanonical = function (e) { e = ld(this.b, e.element, "url"); return e.length ? e[0].href ? e[0].href : Qa(e) : null }, b.pageTitle = function (e) {
                                        var f = "", g = e.element, h = Ua(this.b, g, "headline"); h && (f += Qa(h)); (h = Ua(this.b, g, "alternativeHeadline")) && (f += " " + Qa(h)); "" ===
                                          f && ((h = Ua(this.b, g, "name")) || (h = Ua(this.b, g, "itemReviewed")), h && (f += Qa(h))); 3 === e.type && (e = Db('[itemtype$="schema.org/Question"]', this.b, g)) && (e = Ua(this.b, e, "text")) && (f += Qa(e)); return f
                                      }, b.authors = function (e) {
                                        var f = this; e = ld(this.b, e.element, "author"); return y(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Ua(f.b, g, "name")) && (k.name = Qa(h)); k.name || (k.name = g.getAttribute("content") || g.innerText || g.getAttribute("href")); return k },
                                          e)
                                      }, b); return d
                                    } za(c, a); c.prototype.gf = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.cj(b)) ? this.Ae[b[1]] : 1 }; c.prototype.sa = function (b) { return b.element && b.element.innerText && b.element.innerText.length ? a.prototype.sa.call(this, b) : null }; c.prototype.dc = function () { var b = G(",", y(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.ib["schema.org"])); return Bb(b, this.b, this.root) }; return c
                                  }(kg), Tj = function (a) {
                                    function c(b) {
                                      var d; b = a.call(this, b) || this; b.id = "o"; b.ub = (d = {}, d.chars = function (e) {
                                        e =
                                          this.Aa(e); return e.innerText ? e.innerText.length : 0
                                      }, d.authors = function (e) { return this.sd(e.data.author) }, d.pageTitle = function (e) { return this.kc(e.data.title) || "" }, d.updateDate = function (e) { return this.kc(e.data.modified_time) }, d.publicationDate = function (e) { return this.kc(e.data.published_time) }, d.pageUrlCanonical = function (e) { return this.kc(e.data.url) }, d.rubric = function (e) { return this.sd(e.data.section) }, d.topics = function (e) { return this.sd(e.data.tag) }, d); b.gh = new RegExp("^(og:)?((" + G("|", b.ib.Df) +
                                        "):)?"); return b
                                    } za(c, a); c.prototype.sd = function (b) { var d; return b ? ca(b) ? y(function (e) { var f; return f = {}, f.name = e, f }, b) : [(d = {}, d.name = b, d)] : [] }; c.prototype.kc = function (b) { return ca(b) ? b.length ? b[0] : null : b }; c.prototype.dc = function () { var b = Bb('meta[property="og:type"]', this.b, this.b.document.body); return [this.b.document.head].concat(b) }; c.prototype.Ah = function (b) {
                                      var d = this, e = b.element, f = {}, g = this.Aa(b); e = Bb("meta[property]", this.b, e === this.b.document.head ? e : g); if (e.length) z(function (h) {
                                        try {
                                          if (h.parentNode ===
                                            g || h.parentNode === d.b.document.head) { var k = h.getAttribute("property").replace(d.gh, ""), l = Qa(h); f[k] ? ca(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l }
                                        } catch (m) { ff(d.b, "og.ed", m) }
                                      }, e); else return null; return F(f.type, this.ib.Df) ? B(b, { data: f }) : null
                                    }; c.prototype.Aa = function (b) { b = b.element; var d = this.b.document; return b === d.head ? d.body : b.parentNode }; c.prototype.sa = function (b) { return (b = this.Ah(b)) ? a.prototype.sa.call(this, b) : null }; return c
                                  }(kg), Uj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                                    br = function () {
                                      function a(c, b, d, e) { this.sc = !1; this.Y = {}; this.scroll = { x: 0, y: 0 }; this.ab = this.yf = 0; this.Nd = this.Gf = ""; this.ea = []; this.Ea = 0; this.lb = { Ka: 0, De: 0 }; this.buffer = d; this.Mb = C(this.Mb, this); this.fc = C(this.fc, this); this.Ac = C(this.Ac, this); this.b = c; this.jd = e; this.Lc = b; this.Jd = "pai" + b.id; this.vb(); this.Ve = fa(this.b); this.time = ba(this.b); this.ng(); this.lc = R(this.b) } a.prototype.start = function () {
                                        var c = this; if (!this.sc) {
                                          this.buffer.C("ag", this.fc); this.buffer.C("se", this.Ac); this.Qi(); var b = this.lc.l(this.Jd,
                                            []), d = !b.length; b.push(C(this.$h, this)); this.lc.Qa(this.Jd, b); d && this.Qf(); this.lc.Qa("pai", function () { return c.ea.length ? J(function (e, f) { return (e.Mc || 0) <= (f.Mc || 0) ? f : e }, c.ea[0], c.ea.slice(1)).id : 0 }); this.Mb({ type: "page", target: this.b })
                                        }
                                      }; a.prototype.stop = function () { this.buffer.da("se", this.Ac); this.buffer.da("ag", this.fc); this.dj(); this.sc = !0 }; a.prototype.wf = function (c) { return Db("html", this.b, c) !== this.b.document.documentElement }; a.prototype.Qf = function () {
                                        var c = this; A(this.b, "p.ic" + this.Lc.id, function () {
                                          if (!c.sc) {
                                            var b =
                                              c.lc.l(c.Jd), d = c.Lc.nh(); z(function (e) { var f = y(function (g) { return B({}, g) }, d); Q(e) && e(f) }, b); c.Ea = T(c.b, C(c.Qf, c), 1E3, "p")
                                          }
                                        })()
                                      }; a.prototype.$h = function (c) { this.sc || (this.ej(c), this.gj(), this.Li()) }; a.prototype.Mb = function (c) {
                                        var b = this; A(this.b, "p.ec." + this.Lc.id, function () {
                                          try { var d = c.type; var e = c.target } catch (l) { return } var f = "page" === d; if ("scroll" === d || f) { var g = [b.b, b.b.document, b.b.document.documentElement, hc(b.b)]; F(e, g) && b.vb() } ("resize" === d || f) && b.ng(); d = b.time(X); var h = Math.min(d - b.yf, 5E3);
                                          b.ab += Math.round(h); b.yf = d; if (b.Y && b.scroll && b.lb) { var k = b.lb.Ka * b.lb.De; b.ea = y(function (l) { var m = B({}, l), p = b.Y[m.id], q = Gc(l.tb); if (!p || b.wf(m.element) || !q) return m; l = b.b.Math; p = l.max((b.scroll.y + b.lb.Ka - p.y) / p.height, 0); var r = q.height * q.width; q = b.Pg(q); m.Mc = q / k; m.visibility = q / r; if (.9 <= m.visibility || .1 <= m.Mc) m.involvedTime += h; m.maxScrolled = l.round(1E4 * p) / 1E4; return m }, b.ea) }
                                        })()
                                      }; a.prototype.Pg = function (c) {
                                        var b = c.top, d = c.bottom, e = c.left, f = this.lb, g = f.De; f = f.Ka; var h = this.b.Math; c = h.min(h.max(c.right,
                                          0), g) - h.min(h.max(e, 0), g); return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
                                      }; a.prototype.ej = function (c) { var b = y(function (d) { return d.id }, this.ea); this.ea = this.ea.concat(W(function (d) { return !F(d.id, b) }, c)) }; a.prototype.ng = function () { var c = Lf(this.b) || fd(this.b); this.lb = { De: c[0], Ka: c[1] } }; a.prototype.gj = function () {
                                        var c = this; A(this.b, "p.um." + this.Lc.id, function () {
                                          var b = []; c.vb(); c.Y = J(function (d, e) {
                                            var f; if (c.wf(e.element)) b.push(e), delete d[e.id]; else {
                                              var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime,
                                                0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.tb && (f = Gc(e.tb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g
                                            } return d
                                          }, {}, c.ea); z(function (d) { d = se(c.b)(d, c.ea); c.ea.splice(d, 1) }, b)
                                        })()
                                      }; a.prototype.Ac = function () { this.Gf = this.Nd }; a.prototype.fc = function () {
                                        var c, b, d = y(w(this.Y, n), ea(this.Y)); return d.length && (this.Nd = bb(this.b, d), this.Gf !== this.Nd) ? (c =
                                          {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.ab, b), c) : null
                                      }; a.prototype.Li = function () {
                                        var c = this; if (this.ea.length) {
                                          var b = W(function (d) { return !d.me }, this.ea); z(function (d) { var e, f = B({}, d); delete f.tb; delete f.me; delete f.index; delete f.involvedTime; delete f.visibility; delete f.Mc; delete f.maxScrolled; delete f.update; delete f.element; delete f.type; c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e)); d.me = !0 }, b); b.length && wb(this.b, "Publisher content info found: ",
                                            b)
                                        }
                                      }; a.prototype.Qi = function () { this.Ve.C(this.b, Uj, this.Mb) }; a.prototype.dj = function () { this.Ve.Kb(this.b, Uj, this.Mb) }; a.prototype.vb = function () { this.scroll = { x: this.b.pageXOffset || n(this.b, "document.documentElement.scrollLeft") || 0, y: this.b.pageYOffset || n(this.b, "document.documentElement.scrollLeft") || 0 } }; return a
                                    }(), sd = {}; Sj && (sd.json_ld = Sj); lg && (sd.schema = lg, sd.microdata = lg); Tj && (sd.opengraph = Tj); var cr = E("p.p", function (a, c) {
                                      function b(l, m, p) { e(B({}, k, { $: l, Pe: Hg(m) }), c, p)["catch"](A(a, "s.ww.p")) }
                                      if (!ia("querySelectorAll", a.document.querySelectorAll)) return L.resolve(); var d = [new Ae(a)]; d.unshift(new ar(a)); var e = qa(a, "p", c), f = Xa(function (l) { return l.isEnabled() }, d); d = ta(); var g = od(a, c.id), h = g.l("pai"); h && (g.Zb("pai"), d.o("pai", h)); var k = { F: {}, H: d, rf: !(f instanceof Ae) }; return Ha(a, c, A(a, "ps.s", function (l) {
                                        if (l = n(l, "settings.publisher.schema")) {
                                          l = Pi(c) ? "microdata" : l; var m = sd[l]; if (m && f) {
                                            var p = U(c), q = ig.ud(p, "e", b, f, a); m = new m(a); (new br(a, m, q, p)).start(); wb(a, 'Publishers analytics schema "' +
                                              l + '"')
                                          }
                                        }
                                      }))
                                    }), Eh = la(function (a, c) { return c[a] || {} }), Hm = la(function (a, c, b) { var d = Eh(a, b); b[a] = B(d, c) }), dr = la(function (a, c) { delete c[a] }), er = E("c.c.cc", function (a) { var c = R(a), b = u(w(a, Hd), Ea, function (d) { var e; return B({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = d.clickmap && !!d.clickmap, e)) }); return A(a, "g.c.cc", u(C(c.l, c, "counters", {}), ea, cb(b))) }), fr = E("gt.c.rs", function (a, c) {
                                      var b, d = U(c), e = Tc(a, d), f = c.id, g = c.aa, h = c.Wg, k = c.Ra, l = c.ye; d = u(w(d, dr), gf(a)); e((b = {}, b.id = f, b.type = +g, b.clickmap = h, b.webvisor =
                                        !!k, b.trackHash = !!l, b)); return d
                                    }), bj, gr = E("th.e", function (a, c) { function b() { f || (h = Qc(a, "onhashchange") ? fa(a).C(a, ["hashchange"], g) : zp(a, g)) } var d = qa(a, "t", c), e = Tc(a, U(c)), f = !1, g = A(a, "h.h.ch", C(Ap, null, a, c, d)), h = D; c.ye && (b(), f = !0); return { Zi: A(a, "tr.hs.h", function (k) { var l; k ? b() : h(); f = !!k; e((l = {}, l.trackHash = f, l)) }), unsubscribe: h } }), Vj = {
                                      1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1,
                                      2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1
                                    }, hr = v(function () { return J(function (a, c) { var b = Nb(c + "/tag.js"); Vj[b] || (a[b] = 1); return a }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]) }), cj = 1, Uf = {}, pe = {}, jr = E("nb.p", function (a, c) {
                                      function b(I) { k() || (I = "number" === typeof I ? I : 15E3, I = Cp(a, d(!1), I), r = I.id, x = I.Te, l()) } function d(I) {
                                        return function (Y) {
                                          var wa, Ja, Fb; void 0 === Y && (Y = (wa = {}, wa.ctx = {}, wa.callback = D, wa)); if (I || !q && !h.Fd) {
                                            q = !0; l(); r && Bp(a,
                                              r); var lc = m(X); wa = (parseInt(h.l("lastHit"), 10) || 0) < lc - 18E5; var Se = .1 > Math.random(); h.o("lastHit", lc); lc = ta((Ja = {}, Ja.nb = "1", Ja.cl = t, Ja.ar = "1", Ja)); Ja = Sc(c); Ja = { F: (Fb = {}, Fb["page-url"] = Ja.url || O(a).href, Fb), H: lc }; Fb = pd(a).warn; !Y.callback && Y.ctx && Fb('"callback" argument missing'); (I || wa || Se || !vo(a.location.href, a.document.referrer)) && f(Ja, c).then(function () {
                                                if (!I) {
                                                  var Ac = .002, Bc = c.id === ja.Bg ? 1 : .002, Cc, Be, mg, Ce, ng; void 0 === Ac && (Ac = 1); void 0 === Bc && (Bc = 1); var td = a.performance; if (td && Q(td.getEntriesByType) &&
                                                    (Ac = Math.random() > Ac, Bc = Math.random() > Bc, !Ac || !Bc)) {
                                                    td = a.performance.getEntriesByType("resource"); for (var De = {}, og = {}, Ee = {}, ir = hr(a), pg = 0; pg < td.length; pg += 1) {
                                                      var mb = td[pg], Fe = mb.name.replace(/^https?:\/\//, "").split("?")[0], Wj = Nb(Fe), Xj = (Cc = {}, Cc.dns = Math.round(mb.domainLookupEnd - mb.domainLookupStart), Cc.tcp = Math.round(mb.connectEnd - mb.connectStart), Cc.duration = Math.round(mb.duration), Cc.response = Math.round(mb.responseEnd - mb.requestStart), Cc); "script" !== mb.initiatorType || Ac || (og[Fe] = B(Xj, (Be = {}, Be.name =
                                                        mb.name, Be.decodedBodySize = mb.decodedBodySize, Be))); !Vj[Wj] && !ir[Wj] || De[Fe] || Bc || (De[Fe] = B(Xj, (mg = {}, mg.pages = a.location.href, mg)))
                                                    } ea(De).length && (Ee.timings8 = De); ea(og).length && (Ee.scripts = og); if (ea(Ee).length) qa(a, "d", c)({ H: ta((Ce = {}, Ce.ar = "1", Ce.pv = "1", Ce)), $: bb(a, Ee) || void 0, F: (ng = {}, ng["page-url"] = a.location && "" + a.location.href, ng) }, { id: ja.Dg, aa: "0" })["catch"](A(a, "r.tim.ng2"))
                                                  }
                                                }
                                              }).then(K([a, Y.callback, Y.ctx], Lb), A(a, "l.o.l"))
                                          }
                                        }
                                      } var e, f = qa(a, "n", c), g = U(c), h = od(a, c.id), k = w(Hd(a, g), u(Ea, V("accurateTrackBounce"))),
                                        l = w((e = {}, e.accurateTrackBounce = !0, e), Tc(a, g)), m = ba(a), p = m(X), q = !1, r = 0, t = 0, x; Ha(a, c, function (I) { t = I.oh - p }); c.Nb && b(c.Nb); return { li: d(!0), Nb: b, nd: x }
                                    }), qg = ["yandex_metrika_callback" + dd.callbackPostfix, "yandex_metrika_callbacks" + dd.callbackPostfix], kr = E("cb.i", function (a) { var c = qg[0], b = qg[1]; if (Q(a[c])) a[c](); "object" === typeof a[b] && z(function (d, e) { a[b][e] = null; Lb(a, d) }, a[b]); z(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, qg) }), Yj = { Mj: Ya(/[/&=?#]/) }, Me = E("go.in", function (a, c, b, d) {
                                      void 0 === b && (b =
                                        "goal"); return function (e, f, g, h) { var k, l; if (!(!e || Yj[b] && Yj[b](e))) { var m = f, p = g || D; Q(f) && (p = f, m = void 0, h = g); var q = Eb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m), r = "goal" === b; f = qa(a, "g", c); g = Gm(a, c, e, b); e = g[0]; g = g[1]; f({ R: m, H: ta((k = {}, k.ar = 1, k)), F: (l = {}, l["page-url"] = e, l["page-ref"] = g, l) }, c).then(function () { r && q(); d && d() })["catch"](A(a, "g.s")).then(C(Lb, null, a, p, h)) } }
                                    }), Em = /^ *(data|javascript):/i, Ch = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) +
                                      ")$"]), "i"), lr = Ca(function (a, c) { La(c) ? a.push(c) : z(u(P, da("push", a)), c) }), mr = E("cl.p", function (a, c) {
                                        function b(m, p, q, r) { void 0 === r && (r = {}); q ? Gd(a, c, { url: q, yb: !0, rc: m, wc: p, sender: d, b: r.ctx, Sa: r.callback, title: r.title, R: r.params }) : f.warn("Empty link") } var d = qa(a, "2", c), e = [], f = pd(a), g = U(c), h = A(a, "s.s.tr", w(Tc(a, g), Fm)); g = { b: a, $g: c, mh: e, sender: d, globalStorage: R(a), Zg: od(a, c.id), Rh: uc(a), $i: w(Hd(a, g), u(Ea, V("trackLinks"))) }; g = A(a, "cl.p.c", w(g, Cm)); g = fa(a).C(a, ["click"], g); c.Vc && h(c.Vc); var k = A(a, "file.clc",
                                          K([!0, !1], b)), l = A(a, "e.l.l.clc", K([!1, !0], b)); e = A(a, "add.f.e.clc", lr(e)); return { file: k, ih: l, Hg: e, Vc: h, nd: g }
                                      }), nr = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], or = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Am = { F: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, Ah = { id: 42822899, aa: "0" }, wm = Rb("csp", function (a, c) { return qa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), Bh = u(V("settings.pcs"), ua("1")), pr = E("s", function (a,
                                        c) { return Ha(a, c, function (b) { var d = ba(a), e = Bm(a, b.userData, c), f = gd(a), g = u(ag, Ib(["iPhone", "iPad"]))(a); return (f || g) && um(a, d, c, e, b).then(function () { if (f) var h = nr; else if (g) h = or; else return; return sm(a, h, c, e, d) }, D) }) }), qr = v(u(V("performance.memory.jsHeapSizeLimit"), da("concat", ""))), zh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), qm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), pm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                                      om = ["availWidth", "availHeight", "availTop"], rr = ["webgl", "experimental-webgl"], mm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], ef = w(vc("ccf"), ob), jm = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), dm = Ca(Zb)("(ym-disable-clickmap|ym-clickmap-ignore)"), sr = E("clm.p", function (a, c) {
                                        if (Yc(a)) return D; var b = qa(a, "m", c), d = U(c), e = ba(a), f = e(X), g = w(Hd(a, d), u(Ea, V("clickmap"))), h, k = null, l = R(a); d = A(a, "clm.p.c", function (m) {
                                          var p = g(); if (p) {
                                            var q = l.l("cls",
                                              0); l.o("cls", q + 1); q = "object" === typeof p ? p : {}; var r = q.filter; p = q.isTrackHash || !1; var t = y(function (I) { return ("" + I).toUpperCase() }, q.ignoreTags || []); S(h) && (h = q.quota || null); var x = !!q.quota; m = { element: em(a, m), position: yh(a, m), button: fm(m), time: e(X) }; q = O(a).href; if (cm(a, m, k, t, r)) {
                                                if (x) { if (!h) return; --h } t = de(a, m.element); r = t[0]; t = t[1]; x = Kf(a, m.element); r = ["rn", Wa(a), "x", Math.floor(65535 * (m.position.x - x.left) / (r || 1)), "y", Math.floor(65535 * (m.position.y - x.top) / (t || 1)), "t", Math.floor((m.time - f) / 100), "p", Hi(a,
                                                  m.element), "X", m.position.x, "Y", m.position.y]; r = G(":", r); p && (r += ":wh:1"); bm(a, q, r, b, c); k = m
                                              }
                                          }
                                        }); return fa(a).C(n(a, "document"), ["click"], d)
                                      }), tr = v(function (a) { var c = R(a), b = c.l("isEU"); if (S(b)) { var d = parseInt(Nc(a, "is_gdpr") || "", 10); if (F(d, [0, 1])) c.o("isEU", d), b = !!d; else if (a = Ma(a).l("wasSynced"), a = n(a, "params.eu")) c.o("isEU", a), b = !!a } return b }, function (a) { return R(a).l("isEU") }), Pe = E("i.e", tr), ur = function () {
                                        function a(c, b) { this.b = c; this.yh = b } a.prototype.Ca = function (c) {
                                          return Qe(Vb(C(this.Da, this),
                                            c))
                                        }; a.prototype.Da = function (c, b) { var d = this, e = [], f = this.yh(this.b, b && b.type, c.type); f && (e = Vb(function (g) { return g({ b: d.b, ha: c }) || [] }, f)); return e }; a.prototype.Ja = function (c) { return c.length }; a.prototype.Qc = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
                                      }(), Kl = function (a) {
                                        function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.xg = 7500; b.Zc = 3E4; b.Pc(); return b } za(c, a); c.prototype.push = function (b, d) {
                                          var e = this.qa.Da(b, d); Sa(this.buffer, e); this.qa.Ja(this.buffer) > this.xg &&
                                            this.flush()
                                        }; c.prototype.flush = function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c
                                      }(Rj), Na = "metrikaId_" + Math.random(), Yb = { gd: 0 }, Zj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                                      Sl = ["email", "tel"], $l = /ym-hide-content/, am = /ym-show-content/, Xl = /^[\w\u0410-\u042f\u0430-\u044f]$/, Yl = [65, 90], Zl = [97, 122], Vl = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), Tl = new RegExp("(" + G("|", Zj) + ")", "i"), dj = ["password", "passwd", "pswd"], Ul = new RegExp("(" + G("|", Zj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                                        ")", "i"), Gp = v(function () {
                                          var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT =
                                            47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a
                                        }), Dp = [17, 18, 38, 32, 39, 15, 11, 7, 1], vr =
                                        function () {
                                          var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                                          return {
                                            Kj: new RegExp("(" + G("|", a) + ")", "i"), Tj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                              ")", "i"), Ij: /ym-record-keys/i, ni: "\u2022", Sj: 88
                                          }
                                        }(), ij = cb(w(vr.ni, P)), Oc = !0, Xf = "", Yf = !1, Zf = !0, $f = !1, Ql = Ca(function (a, c) { var b = K([a, "efv." + c.event], A); c.M = y(u(P, b), c.M); return c }), ak = v(function (a) {
                                          var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(af), b.push(Kp), b.push(Lp)); a.document.addEventListener ? c.push(gj) : (b.push(fj), d.push(gj)); c = ka([{ target: a, type: "window", event: "beforeunload", M: [D] }, { target: a, type: "window", event: "unload", M: [D] }, { event: "click", M: [qe] }, { event: "dblclick", M: [qe] }, {
                                            event: "mousedown",
                                            M: [qe]
                                          }, { event: "mouseup", M: [Np] }, { event: "keydown", M: [Op] }, { event: "keypress", M: [Pp] }, { event: "copy", M: [kj] }, { event: "blur", M: c }, { event: "focusin", M: b }, { event: "focusout", M: d }], !a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", M: [sh] }, { target: a, type: "window", event: "blur", M: [af] }] : [], a.document.addEventListener ? [{ event: "focus", M: [fj] }, { event: "change", M: [hj] }, { event: "submit", M: [mj] }] : [{ type: "formInput", event: "change", M: [hj] }, { type: "form", event: "submit", M: [mj] }]); return Pl(a, c)
                                        }), Nl =
                                        v(function (a) { return ka(hc(a) ? [{ target: a, type: "document", event: "mouseleave", M: [Qp] }] : []) }), wr = ["submit", "beforeunload", "unload"], xr = v(function (a, c) { var b = c(a); return J(function (d, e) { d[e.type + ":" + e.event] = e.M; return d }, {}, b) }), yr = w(ak, function (a, c, b, d) { return xr(c, a)[b + ":" + d] || [] }), Ol = /^\s*function submit\(\)/, Ml = /opera mini/i, zr = E("fw.p", function (a, c) { if (!c.Ra) return L.resolve(D); var b = new ur(a, yr); return Jl(a, c, b, ak, wr) }), Ar = E("pr.p", function (a, c) {
                                          var b, d; if (wf(a)) {
                                            var e = qa(a, "5", c), f = ta((b = {}, b.pq =
                                              1, b.ar = 1, b)); e({ H: f, F: (d = {}, d["page-url"] = O(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](A(a, "pr.p.s"))
                                          }
                                        }), Oa = u(ea, V("0")), Br = E("c.m.p", function (a, c) { var b = U(c); return w(Tc(a, b), Il) }), Cr = E("e.a.p", function (a, c) { var b = Ka(a, c); b = K([u(P, pa(!0)), W(Boolean, y(w(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], y); c.fh && b(); return b }), Dr = E("cc.i", function (a, c) { var b = K([a, c], Hl); b = K([a, b, 300], T); Ha(a, c, b) }), Er = E("s.f.i", function (a, c) {
                                          return Ha(a, c, function (b) {
                                            if (n(b, "settings.button_goals") ||
                                              -1 !== O(a).href.indexOf("yagoalsbuttons=1")) fa(a).C(a, ["click"], A(a, "c.t.c", u(V("target"), K([a, c], re(a, c, Gl))))), Eb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                                          })
                                        }), kh, Fr = E("p.ai", function (a, c) { return new L(function (b) { (Wc(a) || of(a)) && b(Ha(a, c, function (d) { var e; return (d = n(d, "settings.sbp")) ? jh(a, B({}, d, (e = {}, e.c = c.id, e)), 10) : D })); b(D) }) }), Gr = E("p.fh", function (a, c) {
                                          var b, d; void 0 === c && (c = !0); var e = Ma(a), f = ba(a), g = e.l("wasSynced"), h = { id: 3, aa: "0" }; return c && g && g.time + 864E5 > f(X) ? L.resolve(g) : qa(a, "f",
                                            h)({ H: ta((b = {}, b.pv = 1, b)), F: (d = {}, d["page-url"] = O(a).href, d["page-ref"] = a.document.referrer, d) }, h).then(function (k) { var l; k = (l = {}, l.time = f(X), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l); e.o("wasSynced", k); return k })["catch"](A(a, "f.h"))
                                        }), Hr = E("pa.int", function (a, c) {
                                          return A(a, "pa.c", function () {
                                            var b, d; var e = Ba(arguments), f = D; var g = null; var h = e.length; if (0 !== e.length && e[0]) {
                                              var k = e.slice(-1)[0]; Q(k) && (f = k, h = e.length + -1); var l = e.slice(-2)[0]; Q(l) && (f = l, g = k, h = e.length + -2); h = e.slice(0, h);
                                              g = { ah: g, Sa: f, R: 1 === h.length ? e[0] : Dc(h) }
                                            } else g = void 0; if (g && (e = g.ah, f = g.R, g = g.Sa, sc(f) || ca(f))) { h = qa(a, "1", c); k = Sc(c).url; l = n(f, "__ym.user_id"); var m = ea(f), p = F("__ymu", m), q = F("__ym", m) && l; m = !Oh(c); l = Eb(a, c, q ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + c.id, q ? void 0 : JSON.stringify(f)); h({ R: f, H: ta((b = {}, b.pa = 1, b.ar = 1, b)), F: (d = {}, d["page-url"] = k || O(a).href, d) }, c).then(m ? l : D)["catch"](A(a, "p.s")).then(C(Lb, null, a, g, e)) }
                                          })
                                        }), Ir = E("exps.int", function (a, c) {
                                          return A(a, "e.m", function (b, d, e) {
                                            var f,
                                              g; void 0 === d && (d = D); if (b && 0 < b.length) { var h = qa(a, "e", c), k = Sc(c).url; return h({ H: ta((f = {}, f.ex = 1, f.ar = 1, f)), F: (g = {}, g["page-url"] = k || O(a).href, g.exp = b, g) }, c).then(C(Lb, null, a, d, e), A(a, "exps.s")) }
                                          })
                                        }), Jr = E("y.p", function (a, c) { var b = $h(a, c); if (b) { var d = Nd(a), e = K([a, b, c], Fl); Yh(a, d, function (f) { f.C("params", e) }); b.Z.C("params", u(V("1"), e)) } }), Kr = Rb("is", function (a) {
                                          var c = Jb(a), b = "" + ja.Ha + Nb("Wjw75ghm7fa7JW8p"); if (O(a).hash.substring(1, b.length + 1) === b || c.l("debug_build") === ja.Ha) return c.o("debug_build",
                                            ja.Ha), pc(a, { src: "https://yastatic.net/metrika-static-watch/tag.js" })
                                        }), hh = v(Wb), Lr = u(da("exec", /counterID=(\d+)/), V("1")), ih = Ca(function (a, c) {
                                          var b = hh(a), d = oa(c), e = d[0], f = d[1]; d = d.slice(2); if (f) {
                                            var g = "" + e; var h = { id: 1, aa: "0" }; var k = Lr(g); k ? h.id = k : -1 === g.indexOf(":") ? h.id = parseInt(g, 10) : (g = g.split(":"), k = g[1], h.id = parseInt(g[0], 10), h.aa = Tf(k) ? "1" : "0"); h = [Ka(a, h), h]; g = h[0]; h = h[1]; k = U(h); b[k] || (b[k] = {}); b = b[k]; "init" === f ? (e = "yaCounter" + h.id, a[e] || (f = d[0], Kr(a) || (a[e] = new a.Ya[ja.Rb](B({}, f, h))))) : g &&
                                              g[f] && b.Th ? g[f].apply(g, d) : (h = b.ag, h || (h = [], b.ag = h), h.push(ka([e, f], d)))
                                          }
                                        }), nb, jc, Xe = (nb = {}, nb.transaction_id = "id", nb.item_id = "id", nb.item_name = "name", nb.item_brand = "brand", nb.promotion_name = "coupon", nb.index = "position", nb.item_variant = "variant", nb.value = "revenue", nb.item_category = "category", nb), gh = (jc = {}, jc.view_item = "detail", jc.add_to_cart = "add", jc.remove_from_cart = "remove", jc.begin_checkout = "checkout", jc.purchase = "purchase", jc), Bl = "currencyCode add delete remove purchase checkout detail".split(" "),
                                      bk = E("dl.w", function (a, c, b) { var d; ae(a, a[c], function (e) { b(e) }) || (d = T(a, function () { bk(a, c, b) }, 1E3, "ec.dl")); return C(ha, null, a, d) }), Mr = E("p.e", function (a, c) { var b = Ka(a, c); if (b && c.od) { b = C(b.params, b); var d = A(a, "h.ee", K([a, b], zl)); return bk(a, c.od, function (e) { e.C(d) }) } }), Nr = E("fid", function (a) {
                                        var c, b = D; if (!Q(a.PerformanceObserver)) return b; var d = R(a); if (d.l("fido")) return b; d.o("fido", !0); var e = new a.PerformanceObserver(A(a, "fid", function (f) {
                                          f = f.getEntries()[0]; d.o("fid", a.Math.round(100 * (f.processingStart -
                                            f.startTime))); b()
                                        })); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                                      }), Ge = la(function (a, c, b, d) { var e, f; (b = Ka(c, b)) && Cl(a, d, c) && (c = C(b.params, b), (a = We(a, d, "goods")) && c && c((e = {}, e.__ym = (f = {}, f.ecommerce = [a], f), e))) }), Or = E("ecm.a", Ge("add")), Pr = E("ecm.r", Ge("remove")), Qr = E("ecm.d", Ge("detail")), Rr = E("ecm.p", Ge("purchase")), Bg = tq("form"), ml = Cj("form"), ch = v(function (a) { return G("[^\\d<>]*", a.split("")) }), il = v(function (a) {
                                        return new RegExp(ch(a),
                                          "g")
                                      }), Kc = u(w("replace", da), Ph([/\D/g, ""]), Ea), vl = /\S/, Xg = w(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Dc), kl = ["https://iframe-toloka.com/"], pl = Ya(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), ol = ["form", "button", "phone", "status"], ll = v(function (a, c, b) {
                                        b.inline ? Ng(a, b) : (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode,
                                          a._ym__initMessage = b.initMessage, ql(a, b.resource))
                                      }, function (a, c, b) { return b.id }), Sr = E("cs.init", function (a, c) { var b; if (-1 < O(a).search.indexOf("_ym_status-check=") && c.id === parseInt(Tg(a), 10) && "0" === c.aa) { var d = (b = {}, b.lang = "ru", b.fileId = "status", b.id = "" + c.id, b); T(a, K([a, d, !1], Ng), 0, "cs") } }), ck = v(function (a) { return Yc(a) || !ia("querySelectorAll", a.document.querySelectorAll) }), fl = v(Ug), Mg = v(qb, rb), Tr = E("phc.p", function (a, c) {
                                        return ck(a) ? D : Ha(a, c, function (b) {
                                          var d = c.id, e = Ic(a, void 0, d), f = e.l("phc_settings") ||
                                            ""; if (b = n(b, "settings.phchange")) { var g = bb(a, b) || ""; g !== f && e.o("phc_settings", g) } else f && (b = Mg(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f = { sb: "", Cb: "", $f: 0, ga: {}, oa: [], uf: !1, Va: !0, b: a, Qe: c }, B(f, { uf: !0 }), Lg(a, d, f), b = Lc(a), e = Vg(a, b, 1E3), d = C(Lg, null, a, d, f), e.C(d), Wg(a, b))
                                        })
                                      }), Ur = E("phc.h", function (a, c) { return ep(a) || ck(a) ? null : Ha(a, c, function (b) { if (!n(b, "settings.phchange")) { var d = Ic(a, "").l("yaHidePhones"); d = d ? qb(a, d) : ""; (b = n(b, "settings.phhide") || d) && Sg(a, c, b) } }) }),
                                      Vr = E("up.int", function (a, c) { return A(a, "up.c", function (b, d, e) { var f, g = Ka(a, c), h = Ld(a).warn; g ? sc(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || D, e)) : h("Wrong user params") : h("No counter instance found") }) }), Wr = E("trigger.in", function (a, c) { c.kg && vb(a, K([a, "yacounter" + c.id + "inited"], Xo), "t.i") }), Xr = E("destruct.e", function (a, c, b) { return function () { var d = R(a), e = c.id; z(function (f, g) { return Q(f) && A(a, "dest.fr." + g, f)() }, b); delete d.l("counters")[U(c)]; delete a["yaCounter" + e] } }), Yr = E("fip", function (a, c) {
                                        if (!Fj(a) ||
                                          ad(a)) { var b = Ma(a); if (!b.l("fip")) { var d = u(cb(u(function (e, f) { return E("fip." + f, e)(a) }, C(yp, null))), Rc("-"))(c); b.o("fip", d) } }
                                      }), Zr = w("9-d5ve+.r%7", P), $r = E("ad", function (a, c) {
                                        if (!c.bb) {
                                          var b = R(a); if (!b.l("adBlockEnabled")) {
                                            var d = function (m) { F(m, ["2", "1"]) && b.o("adBlockEnabled", m) }, e = Jb(a), f = e.l("isad"); if (f) d(f); else {
                                              var g = w("adStatus", b.o), h = function (m) { m = m ? "1" : "2"; d(m); g("complete"); e.o("isad", m, 1200); return m }, k = qa(a, "adb", c); if (!b.l("adStatus")) {
                                                g("process"); var l = "metrika/a" + Zr().replace(/[^a-v]+/g,
                                                  "") + "t.gif"; cl(a, function () { return k({}, l).then(w(!1, h))["catch"](w(!0, h)) })
                                              }
                                            }
                                          }
                                        }
                                      }), as = E("pa.plgn", function (a, c) { var b = Rd(a, c); b && b.Z.C("pluginInfo", A(a, "c.plgn", function () { return dp(c, vj) })) }), bs = E("suid.int", function (a, c) { return A(a, "suid.c", function (b, d, e) { var f = Ka(a, c), g = pd(a); La(b) || Cd(a, b) ? (b = Dc(["__ym", "user_id", b]), f.params(b, d || D, e)) : g.error("Incorrect user ID") }) }), cs = E("guid.int", function (a, c) { return A(a, "guid.c", function (b) { var d = ti(a, c); b && Lb(a, b, null, d); return d }) }), Ra = function () {
                                        function a(c,
                                          b, d) { this.bi = "wv2.c"; this.Bb = []; this.ta = {}; this.b = c; this.J = Ue(c, this, d, this.bi); this.D = b; this.Ua = this.D.Ch(); this.start = this.J.G(this.start, "st"); this.stop = this.J.G(this.stop, "sp") } a.prototype.start = function () { var c = this; this.Bb = y(function (b) { var d = b[0], e = b[1]; b = Q(e) ? e : e.Bd; e = Q(e) ? c.b : e.target; b = C(c.J.G(b, d), c); return c.Ua.C(e, [d], b) }, Aa(this.ta)) }; a.prototype.stop = function () { z(Ea, this.Bb) }; a.prototype.X = function (c) { return this.D.ja().X(c) }; return a
                                      }(), bl = G("", ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA",
                                        "AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="]), al = ["checkbox", "radio"], rg = V("location.href"), ds = function (a) {
                                          function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ia = { elements: [], attributes: [] }; d.index = 0; d.Qd = d.J.G(d.Qd, "o"); d.kd = d.J.G(d.kd, "io"); d.$c = d.J.G(d.$c, "ao"); d.de = d.J.G(d.de, "a"); d.ae = d.J.G(d.ae, "at"); d.ee = d.J.G(d.ee, "r"); d.ce = d.J.G(d.ce, "c"); d.zc = new b.MutationObserver(d.Qd); return d } za(c, a); c.prototype.start = function () {
                                            this.zc.observe(this.b.document.documentElement, {
                                              attributes: !0,
                                              characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0
                                            })
                                          }; c.prototype.stop = function () { this.zc.disconnect() }; c.prototype.$c = function (b) { var d = b.target; b = b.attributeName; var e = this.ia.elements.indexOf(d); -1 === e && (e = this.ia.elements.push(d) - 1, this.ia.attributes[e] = {}); this.ia.attributes[e] || (this.ia.attributes[e] = {}); e = this.ia.attributes[e]; var f = d.getAttribute(b); e[b] = yd(this.b, d, b, f, this.D.ic()).value }; c.prototype.kd = function (b) {
                                            function d(k) {
                                              var l = tb(e.b)(k, f); return -1 ===
                                                l ? (f.push(k), k = { qd: {} }, g.push(k), k) : g[l]
                                            } var e = this, f = [], g = []; z(function (k) { var l = k.attributeName, m = k.removedNodes, p = k.oldValue, q = k.target, r = k.nextSibling, t = k.previousSibling; switch (k.type) { case "attributes": e.$c(k); var x = d(q); x.qd[l] || (x.qd[l] = yd(e.b, q, l, p, e.D.ic()).value); break; case "childList": m && z(function (I) { x = d(I); x.Ze || B(x, { Ze: q, rh: r ? r : void 0, sh: t ? t : void 0 }) }, oa(m)); break; case "characterData": x = d(q), x.$e || (x.$e = p) } }, b); var h = this.D.ja(); z(function (k, l) { h.oe(k, g[l]) }, f)
                                          }; c.prototype.Qd = function (b) {
                                            var d =
                                              this; if (rg(this.b)) { var e = this.D.K(); this.kd(b); z(function (f) { var g = f.addedNodes, h = f.removedNodes, k = f.target; switch (f.type) { case "childList": h && h.length && d.ee(oa(h), e); g && g.length && d.de(oa(g), e); break; case "characterData": d.ce(k, e) } }, b); this.ae(e) } else this.stop()
                                          }; c.prototype.ae = function (b) { var d = this; z(function (e, f) { var g = d.hc(); d.D.T("mutation", { index: g, attributes: d.ia.attributes[f], target: d.X(e) }, "ac", b) }, this.ia.elements); this.ia.elements = []; this.ia.attributes = [] }; c.prototype.de = function (b, d) {
                                            var e =
                                              this, f = this.hc(); this.D.ja().nc({ fa: b, Oc: function (g) { g = y(function (h) { h = B({}, h); delete h.node; return h }, g); e.D.T("mutation", { index: f, fa: g }, "ad", d) } })
                                          }; c.prototype.ee = function (b, d) { var e = this, f = this.hc(), g = this.D.ja(), h = y(function (k) { var l = g.removeNode(k); dh(e.b, k, function (m) { g.removeNode(m) }); return l }, b); this.D.T("mutation", { index: f, fa: h }, "re", d) }; c.prototype.ce = function (b, d) { var e = this.hc(); this.D.T("mutation", { value: b.textContent, target: this.X(b), index: e }, "tc", d) }; c.prototype.hc = function () {
                                            var b =
                                              this.index; this.index += 1; return b
                                          }; return c
                                        }(Ra), es = function () {
                                          function a(c, b) {
                                            var d = this; this.ac = []; this.bc = {}; this.Od = 1; this.Ea = 0; this.cb = {}; this.qc = {}; this.removeNode = function (f) { var g = d.X(f), h = ya(f); if (h) return h = "NR:" + h.toLowerCase(), d.bc[h] && d.Z.V(h, { data: { node: f, id: g } }), g }; this.Za = function (f) { var g = ya(f); if (g) { var h = f.__ym_indexer; h || (h = d.Od, f.__ym_indexer = h, d.Od += 1, g = "NA:" + g.toLowerCase(), d.bc[g] && d.Z.V(g, { data: { node: f, id: h } })); return h } return null }; this.b = c; var e = Ue(c, this, "i"); this.Z = Fc(c);
                                            this.options = b; this.start = e.G(this.start, "st"); this.stop = e.G(this.stop, "sp"); this.X = e.G(this.X, "i"); this.oe = e.G(this.oe, "o"); this.nc = e.G(this.nc, "a"); this.removeNode = e.G(this.removeNode, "r"); this.ca = e.G(this.ca, "s")
                                          } a.prototype.oe = function (c, b) { var d = this.Za(c); Ia(d) || (this.qc[d] && this.X(c), this.qc[d] = b) }; a.prototype.C = function (c, b, d) { c = "" + b + c; this.bc[c] = !0; this.Z.C(c, d) }; a.prototype.da = function (c, b, d) { c = "" + b + c; delete this.bc[c]; this.Z.da(c, d) }; a.prototype.start = function () {
                                            this.Ea = T(this.b, u(C(this.ca,
                                              this, !1), this.start), 50, "i.s")
                                          }; a.prototype.stop = function () { this.flush(); ha(this.b, this.Ea); this.ac = [] }; a.prototype.nc = function (c) { var b = this, d = [], e = 0, f = { Oc: c.Oc, result: [], pc: 0, fa: d }; this.ac.push(f); z(function (g) { dh(b.b, g, function (h) { var k = b.Za(h); Ia(k) || (d.push(h), b.cb[k] && b.X(h), b.cb[k] = { node: h, event: f, aj: e }, e += 1) }) }, c.fa) }; a.prototype.X = function (c) {
                                            if (c === this.b) return 0; var b = this.Za(c), d = this.cb[b], e = this.vh(b), f = e.Ze, g = e.qd, h = e.$e, k = e.rh, l = e.sh; if (d) {
                                              e = d.event; d = d.aj; var m = this.b.document.documentElement ===
                                                c; k = k || c.nextSibling; var p = l || c.previousSibling; l = !m && k ? this.Za(k) : null; p = !m && p ? this.Za(p) : null; m = this.b; k = this.options; f = this.Za(f || c.parentNode || c.parentElement) || 0; var q = void 0; void 0 === p && (p = null); void 0 === l && (l = null); void 0 === g && (g = {}); void 0 === q && (q = ya(c)); if (S(q)) c = void 0; else {
                                                  f = { id: b, $d: p !== f ? p : null, next: l !== f ? l : null, parent: f, name: q.toLowerCase(), node: c }; if (Ve(c)) { if (h = Yk(c, h), f.attributes = {}, f.content = h) if (c = Hc(m, c)) f.content = "" !== h.trim() ? Wl(m, h) : h, f.hidden = c } else {
                                                    f.attributes = Zk(m, c, k,
                                                      g, q); if (h = zd(c) && Fd(c)) f.hidden = h; c.namespaceURI && jd(c.namespaceURI, "svg") && (f.zf = c.namespaceURI)
                                                  } c = f
                                                } if (S(c)) return; delete this.cb[b]; e.result[d] = c; e.pc += 1; e.fa.length === e.pc && e.Oc(e.result)
                                            } return b
                                          }; a.prototype.flush = function () { this.ca(!0) }; a.prototype.ca = function (c) { var b = this; if (rg(this.b)) { var d = ea(this.cb); d = y(function (e) { return b.cb[e].node }, d); d = ac(d, this.X); c = c ? qi(D) : pi(this.b, 20); d(c); this.ac = W(function (e) { return e.pc !== e.result.length }, this.ac) } }; a.prototype.vh = function (c) {
                                            if (Ia(c)) return {};
                                            var b = this.qc[c]; return b ? (delete this.qc[c], b) : {}
                                          }; return a
                                        }(), fs = ["input", "change", "keyup", "paste", "cut"], gs = function (a) {
                                          function c(b, d, e) { b = a.call(this, b, d, e) || this; b.inputs = {}; b.md = !1; b.Bc = b.J.G(b.Bc, "ii"); b.Cc = b.J.G(b.Cc, "ir"); b.Hc = b.J.G(b.Hc, "ri"); b.Xc = b.J.G(b.Xc, "ur"); b.Ad = b.J.G(b.Ad, "ce"); b.mc = b.J.G(b.mc, "vc"); return b } za(c, a); c.prototype.start = function () {
                                            var b = this, d = this.D.ja(); this.md = this.Tg(); z(function (e) { e = e.toLowerCase(); d.C(e, "NA:", C(b.Bc, b)); d.C(e, "NR:", C(b.Cc, b)) }, cf); this.Bb = [this.Ua.C(this.b.document,
                                              fs, C(this.Ad, this)), function () { z(function (e) { e = e.toLowerCase(); d.da(e, "NA:", b.Bc); d.da(e, "NR:", b.Cc) }, cf); z(b.Xc, ea(b.inputs)) }]
                                          }; c.prototype.Xc = function (b) { if (this.md) { var d = this.inputs[b]; d && (b = d.vi, d = d.element, b && this.b.Object.defineProperty(d, this.jc(d), b)) } }; c.prototype.Cc = function (b) { b && this.Xc(b.data.id) }; c.prototype.Bc = function (b) { b && (b = b.data, this.Hc(b.node, b.id)) }; c.prototype.jc = function (b) { return fe(b) ? "checked" : "value" }; c.prototype.Ad = function (b) {
                                            if (b = b.target) {
                                              var d = this.jc(b); this.mc(b[d],
                                                b)
                                            }
                                          }; c.prototype.mc = function (b, d) { var e = this.X(d), f = this.inputs[e]; if (!f && (f = this.Hc(f, e), !f)) return; e = f.Ug; var g = f.value, h = this.jc(d); b && !F(typeof b, ["string", "boolean", "number"]) || b === g || (g = yd(this.b, d, h, b, this.D.ic()).value, e ? this.D.T("event", { target: this.X(d), checked: !!b }, "change") : (e = Ad(d), h = Fd(d), this.D.T("event", { value: g, hidden: h && !e, target: this.X(d) }, "change")), f.value = b) }; c.prototype.Hc = function (b, d) {
                                            var e = this; if (!zd(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                                            var f = fe(b), g = this.jc(b), h = { element: b, Ug: f, value: b[g] }; this.inputs[d] = h; this.md && vb(this.b, function () { var k = e.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}, l = e.b.Object.getOwnPropertyDescriptor(b, g) || {}, m = B({}, k, l); if (ia("((set)?(\\s?" + g + ")?)?", m.set)) { try { e.b.Object.defineProperty(b, g, B({}, m, { configurable: !0, set: function (p) { e.mc(p, this); return m.set.call(this, p) } })) } catch (p) { } h.vi = m } }); return h
                                          }; c.prototype.Tg = function () {
                                            var b = !0, d = Za(this.b)("input"); try {
                                              d = Za(this.b)("input");
                                              d.value = "INPUT_VALUE"; d.style.setProperty("display", "none", "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}, f = this.b.Object.getOwnPropertyDescriptor(d, "value") || {}, g = B({}, e, f); this.b.Object.defineProperty(d, "value", B({}, g, { configurable: !0, set: function (h) { return g.set.call(d, h) } })); "INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
                                            } catch (h) {
                                              b =
                                                !1
                                            } return b
                                          }; return c
                                        }(Ra), hs = function (a) {
                                          function c() { var b, d = null !== a && a.apply(this, arguments) || this; d.Ma = { width: 0, height: 0, fb: 0, gb: 0, orientation: 0 }; d.ta = (b = {}, b.resize = function () { var e = this.zd(); this.Ph(e) && (this.Ma = e, this.Uf(e)) }, b.orientationchange = function () { var e = this.zd(); this.Ma.orientation !== e.orientation && (this.Ma = e, this.Mi(e)) }, b); return d } za(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.Tf() }; c.prototype.xf = function (b) { return !b.height || !b.width || !b.gb || !b.fb }; c.prototype.Ph =
                                            function (b) { return b.height !== this.Ma.height || b.width !== this.Ma.width }; c.prototype.zd = function () { var b = this.D.Xa(), d = fd(this.b), e = d[0]; d = d[1]; b = b.yd(); return { width: e, height: d, gb: b ? b.scrollWidth : 0, fb: b ? b.scrollHeight : 0, orientation: this.D.Xa().Eh() } }; c.prototype.Mi = function (b) { var d; void 0 === d && (d = this.D.K()); this.D.T("event", { width: b.width, height: b.height, orientation: b.orientation }, "deviceRotation", d) }; c.prototype.Uf = function (b, d) {
                                              void 0 === d && (d = this.D.K()); this.D.T("event", {
                                                width: b.width, height: b.height,
                                                gb: b.gb, fb: b.fb
                                              }, "resize", d)
                                            }; c.prototype.Tf = function () { var b = this.zd(); this.xf(b) ? T(this.b, C(this.Tf, this), 300) : (this.xf(this.Ma) && (this.Ma = b), this.Uf(b, 0)) }; return c
                                        }(Ra), He = function () {
                                          function a(c) { this.index = 0; this.kb = {}; this.b = c } a.prototype.Vb = function (c, b, d) {
                                            void 0 === d && (d = {}); var e = ba(this.b), f = this.index; this.index += 1; this.kb[f] = { Ea: 0, Hb: !1, ph: c, Ob: [], Kd: e(X) }; var g = this; return function () {
                                              var h = Ba(arguments), k = d.Va && !g.kb[f].Hb, l = g.kb[f]; ha(g.b, l.Ea); l.Ob = h; l.Hb = !0; var m = e(X); if (k || m - l.Kd >=
                                                b) c.apply(void 0, h), l.Kd = m; l.Ea = T(g.b, function () { k || (c.apply(void 0, h), l.Kd = e(X)); l.Hb = !1; l.Ob = [] }, b, "th")
                                            }
                                          }; a.prototype.flush = function () { var c = this; z(function (b) { var d = c.kb[b], e = d.Ea, f = d.ph, g = d.Ob; d.Hb && (c.kb[b].Hb = !1, f.apply(void 0, g), ha(c.b, e)) }, ea(this.kb)) }; return a
                                        }(), is = function (a) {
                                          function c(b, d, e) {
                                            var f; d = a.call(this, b, d, e) || this; d.gg = []; d.Ee = { x: 0, y: 0 }; d.ta = (f = {}, f.scroll = function (g) {
                                              if (this.D.Xa().pf()) this.Fc(g); else {
                                                var h = g.target, k = W(function (l) { return l[0] === h }, this.gg).pop(); k ? k = k[1] :
                                                  (k = this.ra.Vb(C(this.Fc, this), 100, { Va: !0 }), this.gg.push([h, k])); k(g)
                                              }
                                            }, f); d.ra = new He(b); d.Fc = d.J.G(d.Fc, "o"); return d
                                          } za(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.D.T("event", { x: Math.max(this.b.scrollX, 0), y: Math.max(this.b.scrollY, 0), page: !0, target: -1 }, "scroll", 0) }; c.prototype.stop = function () { a.prototype.stop.call(this); this.ra.flush() }; c.prototype.Fc = function (b) {
                                            var d = this.D.Xa().yd(); b = b.target; var e = this.vb(b); d = Ta(ua(b), [d, this.b, this.b.document]); var f = Math.max(e.left,
                                              0); e = Math.max(e.top, 0); if (d) { if (this.Ee.x === f && this.Ee.y === e) return; this.Ee = { x: f, y: e } } this.D.T("event", { x: f, y: e, page: d, target: d ? -1 : this.X(b) }, "scroll")
                                          }; c.prototype.vb = function (b) {
                                            var d = { left: 0, top: 0 }; if (!b) return d; if (b.window === b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView || e.parentWindow, h = e.body; return b !== e || (b = this.D.Xa().yd(), b) ? F(b, [f, h]) ? { top: b.scrollTop || g.scrollY, left: b.scrollLeft || g.scrollX } : {
                                              top: b.scrollTop || 0, left: b.scrollLeft ||
                                                0
                                            } : d
                                          }; return c
                                        }(Ra), js = ["mousemove", "mousedown", "mouseup", "click"], ks = function (a) {
                                          function c(b, d, e) { var f = a.call(this, b, d, e) || this; f.ta = J(function (g, h) { g[h] = f.ti; return g }, {}, js); f.ra = new He(b); f.xc = f.J.G(f.xc, "n"); f.Si = f.J.G(f.ra.Vb(C(f.xc, f), 100), "t"); return f } za(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.ra.flush() }; c.prototype.ti = function (b) { var d = null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.Si(b) : this.xc(b) }; c.prototype.xc = function (b) {
                                            var d = b.type, e = b.clientX;
                                            e = void 0 === e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.b.document.elementFromPoint(e, f); this.D.T("event", { x: e || 0, y: f || 0, target: this.X(b) }, d)
                                          }; return c
                                        }(Ra), ls = ["focus", "blur"], ms = function (a) { function c() { var b = null !== a && a.apply(this, arguments) || this; b.ta = J(function (d, e) { d[e] = b.qh; return d }, {}, ls); return b } za(c, a); c.prototype.qh = function (b) { var d = b.target; b = b.type; this.D.T("event", { target: this.X(d === this.b ? this.b.document.documentElement : d) }, b) }; return c }(Ra), ns = v(function (a) {
                                          var c =
                                            Da(a.getSelection, "getSelection"); return c ? C(c, a) : D
                                        }), os = u(ns, Ea), ps = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], qs = /text|search|password|tel|url/, rs = function (a) {
                                          function c() { var b = null !== a && a.apply(this, arguments) || this; b.Cd = !1; b.ta = J(function (d, e) { d[e] = b.Mh; return d }, {}, ps); return b } za(c, a); c.prototype.Mh = function (b) {
                                            var d = this.D, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.Ih(b) : this.Gh()) && e.start !== e.end ? (this.Cd = !0, d.T("event", e, "selection")) : this.Cd &&
                                              (this.Cd = !1, d.T("event", { start: 0, end: 0 }, "selection"))
                                          }; c.prototype.Gh = function () { var b = os(this.b); if (b && 0 < b.rangeCount) { b = b.getRangeAt(0) || this.b.document.createRange(); var d = this.X(b.startContainer), e = this.X(b.endContainer); if (!S(d) && !S(e)) return { start: b.startOffset, end: b.endOffset, bg: d, Ue: e } } }; c.prototype.Ih = function (b) { if (qs.test(b.type || "")) { var d = this.X(b); if (!S(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
                                        }(Ra), ss = { focus: "windowfocus", blur: "windowblur" }, ts = function (a) {
                                          function c(b,
                                            d, e) { b = a.call(this, b, d, e) || this; b.visibility = null; S(b.b.document.hidden) ? S(b.b.document.msHidden) ? S(b.b.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.J.G(b.handleEvent, "e"); return b } za(c, a); c.prototype.start = function () {
                                              this.Bb = [this.Ua.C(this.b, this.visibility ? [this.visibility.event] : ["focus", "blur"], C(this.handleEvent,
                                                this))]
                                            }; c.prototype.handleEvent = function (b) { this.D.T("event", {}, ss[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : b.type]) }; return c
                                        }(Ra), us = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], vs = function (a) {
                                          function c(b, d, e) {
                                            var f, g = a.call(this, b, d, e) || this; g.Uc = {}; g.scrolling = !1; g.Rf = 0; g.ta = J(function (h, k) { h[k] = { Bd: g.Wi, target: g.b.document }; return h }, (f = {}, f.scroll = {
                                              Bd: function () {
                                                var h = this; this.scrolling = !0; ha(this.b, this.Rf); this.Rf = T(this.b, function () {
                                                  h.scrolling =
                                                    !1
                                                }, 150)
                                              }, target: g.b.document
                                            }, f), us); g.ra = new He(b); g.Ab = g.J.G(g.Ab, "nh"); g.Ti = g.J.G(g.ra.Vb(g.Ab, g.D.Xa().pf() ? 0 : 50, { Va: !0 }), "th"); return g
                                          } za(c, a); c.prototype.Wi = function (b) { var d = this, e = "touchcancel" === b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && z(function (f) { var g = d.Lh(f); f.__ym_touch_id = g; e && delete d.Uc[f.identifier] }, oa(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.Ab(b) : this.Ti(b, this.D.K()) : this.Ab(b) }; c.prototype.Lh = function (b) {
                                            this.Uc[b.identifier] ||
                                              (this.Uc[b.identifier] = Ig()); return this.Uc[b.identifier]
                                          }; c.prototype.Ab = function (b, d) { void 0 === d && (d = this.D.K()); var e = b.type, f = y(function (g) { return { id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY), force: g.force } }, oa(b.changedTouches)); 0 < f.length && this.D.T("event", { touches: f, target: this.X(b.target) }, e, d) }; return c
                                        }(Ra), ws = function (a) {
                                          function c() {
                                            var b, d = null !== a && a.apply(this, arguments) || this; d.ta = (b = {}, b.load = {
                                              Bd: function (e) {
                                                e = e.target; "IMG" === ya(e) && e.getAttribute("srcset") &&
                                                  this.D.T("event", { target: this.X(e), value: e.currentSrc }, "srcset")
                                              }, target: d.b.document
                                            }, b); return d
                                          } za(c, a); return c
                                        }(Ra), xs = function (a) {
                                          function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ug = 1; d.ra = new He(b); d.Qb = d.J.G(d.Qb, "z"); return d } za(c, a); c.prototype.start = function () { if (this.hf()) { a.prototype.start.call(this); this.Qb(); var b = this.Ua.C(n(this.b, "visualViewport"), ["resize"], this.ra.Vb(this.Qb, 10)); this.Bb.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.ra.flush() }; c.prototype.Qb =
                                            function () { var b = this.hf(); b && b !== this.ug && (this.ug = b, this.Ni(b)) }; c.prototype.hf = function () { var b = Lf(this.b); return b ? b[2] : null }; c.prototype.Ni = function (b) { var d = df(this.b); this.D.T("event", { x: d.x, y: d.y, level: b }, "zoom") }; return c
                                        }(Ra), ud, Ie = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, dk = { "super": 1, Ej: 2, alt: 3, shift: 4, Zj: 5, "delete": 6, Bj: 6 }, ys = [4, 9, 8, 32, 37, 38, 39, 40, 46], ek = (ud = {}, ud["1"] = {
                                          91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;",
                                          16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;"
                                        }, ud["2"] = { 91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt", 17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete" }, ud.gi = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, ud), zs = /flash/, As = /ym-disable-keys/, Bs = /^&#/, Cs = function (a) {
                                          function c(b, d, e) {
                                            var f; d = a.call(this, b, d, e) || this; d.$a = {}; d.Ba = 0; d.va = []; d.eg = []; d.$b = 0; d.Mf = 0; d.ta = (f = {}, f.keydown = function (g) {
                                              if (this.tc(g) && !this.Xh(g)) {
                                                var h = g.keyCode; g.repeat || this.$a[h] || (this.$a[g.keyCode] =
                                                  !0, Ie[g.keyCode] && !this.Ba ? (this.Ba += 1, this.qe(g), this.reset(300)) : this.Ba ? (this.Qg(), this.ie(g), this.pd()) : (this.reset(), this.ie(g)))
                                              }
                                            }, f.keyup = function (g) { if (this.tc(g)) { var h = g.keyCode, k = Ie[g.keyCode]; this.$a[g.keyCode] && (this.$a[h] = !1); k && this.Ba && (this.Ba = 0, this.$a = {}); 1 === this.va.length && (g = this.va[0], F(g.keyCode, ys) && (this.Nc([g], !0), this.reset())); this.va = W(u(ua(h), zb), this.va); ha(this.b, this.$b) } }, f); d.Cg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2"; d.tc = d.J.G(d.tc, "v");
                                            d.pd = d.J.G(d.pd, "ec"); d.Nc = d.J.G(d.Nc, "sk"); d.xd = d.J.G(d.xd, "gk"); d.qe = d.J.G(d.qe, "sc"); d.Pb = d.J.G(d.Pb, "cc"); d.reset = d.J.G(d.reset, "r"); d.Jc = d.J.G(d.Jc, "rs"); return d
                                          } za(c, a); c.prototype.tc = function (b) { var d = this.b.document.activeElement; b = b.target; return !Ta(Boolean, [d && "OBJECT" === d.nodeName && zs.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && As.test(b.className)]) }; c.prototype.pd = function () {
                                            this.eg = this.va.slice(0); ha(this.b, this.$b); this.$b = T(this.b,
                                              w(this.eg, C(this.Nc, this)), 0, "e.c")
                                          }; c.prototype.Nc = function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.xd(b); this.D.T("event", { uc: e }, "keystroke") } }; c.prototype.xd = function (b) { var d = this; b = y(function (e) { e = e.keyCode; var f = Ie[e], g = d.Dh(e); return { id: e, key: g, tf: !!f && Bs.test(g), vc: f } }, b); return Re(function (e, f) { return (dk[e.vc] || 100) - (dk[f.vc] || 100) }, b) }; c.prototype.Dh = function (b) { return ek[this.Cg][b] || ek.gi[b] || String.fromCharCode(b) }; c.prototype.ie = function (b) { F(b, this.va) || this.va.push(b) };
                                          c.prototype.qe = function (b) { this.ie(b); this.Pb() }; c.prototype.Pb = function () { this.Ba ? T(this.b, this.Pb, 100) : this.va = [] }; c.prototype.Qg = function () { ha(this.b, this.Mf) }; c.prototype.reset = function (b) { b ? this.Mf = T(this.b, C(this.Jc, this), b) : this.Jc() }; c.prototype.Jc = function () { this.Ba = 0; this.va = []; this.$a = {}; ha(this.b, this.$b) }; c.prototype.Xh = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Ie[b.keyCode] : !1 }; return c
                                        }(Ra), Xk = ["sr", "sd", "\u043d"], Ds = /allow-same-origin/,
                                      Es = function (a) {
                                        function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ib = []; b.rd = {}; b.Rd = b.J.G(b.Rd, "fi"); b.Sd = b.J.G(b.Sd, "sd"); b.Td = b.J.G(b.Td, "src"); b.zc = new MutationObserver(b.Td); return b } za(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.D.ic().qb && this.D.ja().C("iframe", "NA:", C(this.Rd, this)); this.D.ef().vd().C("sdr", C(this.Sd, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); z(function (b) { b.D.stop() }, this.Ib) }; c.prototype.Td = function (b) {
                                          var d = b.pop().target; if (b = Xa(function (f) {
                                            return f.nf ===
                                              d
                                          }, this.Ib)) { this.Ib = W(function (f) { return f.nf !== d }, this.Ib); var e = b.D.wd(); try { b.D.stop() } catch (f) { } this.Ub(d, e) }
                                        }; c.prototype.Rd = function (b) { if (b) { var d = b.data.node; this.zc.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.Ub(d, b.data.id) } }; c.prototype.Ub = function (b, d) { var e = this; if (this.Vh(b)) Bd(this.b, b).then(function () { var f = e.D.Ub(b.contentWindow, d); e.Ib.push({ D: f, nf: b }) })["catch"](D) }; c.prototype.Sd = function (b) {
                                          var d = this, e = b.L; b = b.data; this.rd[e] || (this.rd[e] = { data: [] }); var f = this.rd[e];
                                          f.data = f.data.concat(b); this.b.isNaN(f.ld) && z(function (g) { "page" === g.type && (f.ld = g.data.wa - d.D.ff()) }, f.data); this.b.isNaN(f.ld) || (this.D.ca(y(function (g) { g.K += f.ld; g.K = d.b.Math.max(0, g.K); return g }, f.data)), f.data = [])
                                        }; c.prototype.Vh = function (b) { var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return b.getAttribute("_ym_ignore") || e && !e.match(Ds) || d && "about:blank" !== d && (d = mc(this.b, d).host) && O(this.b).host !== d ? !1 : n(b, "contentWindow.location.href") }; return c
                                      }(Ra), Fs = function (a) {
                                        function c(b,
                                          d, e) { b = a.call(this, b, d, e) || this; b.ke = b.J.G(b.ke, "ps"); return b } za(c, a); c.prototype.start = function () { this.D.ja().nc({ fa: [this.b.document.documentElement], Oc: this.ke }) }; c.prototype.ke = function (b) {
                                            var d = this.D.Fh(), e = d.xh(), f = O(this.b), g = f.host, h = f.protocol; f = f.pathname; var k = fd(this.b), l = k[0]; k = k[1]; this.D.T("page", {
                                              content: y(function (m) { m = B({}, m); delete m.node; return m }, b), Me: e || "", jf: !!e, viewport: { width: l, height: k }, title: this.b.document.title, doctype: d.zh() || "", Je: this.b.location.href, mg: this.b.navigator.userAgent,
                                              referrer: this.b.document.referrer, screen: { width: this.b.screen.width, height: this.b.screen.height }, location: { host: g, protocol: h, path: f }, wa: this.D.ff(), Rc: d.Jh()
                                            }, "page", 0)
                                          }; return c
                                      }(Ra), Gs = ["addRule", "removeRule", "insertRule", "deleteRule"], sg = [[function (a) {
                                        function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Oa = {}; b.Jb = {}; b.Ke = 0; b.Dc = b.J.G(b.Dc, "a"); b.jb = b.J.G(b.jb, "sr"); b.Ec = b.J.G(b.Ec, "r"); b.ca = b.J.G(b.ca, "d"); return b } za(c, a); c.prototype.start = function () {
                                          var b = this.D.ja(); b.C("style", "NA:", this.Dc); b.C("style",
                                            "NR:", this.Ec); this.ca()
                                        }; c.prototype.stop = function () { var b = this; a.prototype.stop.call(this); var d = this.D.ja(); d.da("style", "NA:", this.Dc); d.da("style", "NR:", this.Ec); this.ca(); ha(this.b, this.Ke); z(function (e) { b.Oa[e].sheet && b.Pf(b.Oa[e].sheet) }, ea(this.Oa)); this.Oa = {} }; c.prototype.ca = function () {
                                          var b = this; z(function (d) {
                                            var e = d[0]; d = d[1]; if (d.length) {
                                              for (var f = [], g = d[0].K, h = [], k = 0; k < d.length; k += 1) { var l = d[k], m = l.K; delete l.K; m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l]) } f.length && h.push(f); h.length && z(function (p) {
                                                b.D.T("event",
                                                  { target: parseInt(e, 10), ya: p }, "stylechange", g)
                                              }, h); delete b.Jb[e]
                                            }
                                          }, Aa(this.Jb)); this.Ke = T(this.b, this.ca, 100)
                                        }; c.prototype.jb = function (b, d, e, f, g) { void 0 === f && (f = ""); void 0 === g && (g = -1); this.Jb[b] || (this.Jb[b] = []); this.Jb[b].push({ Ud: d, style: f, index: g, K: e }) }; c.prototype.wi = function (b, d) {
                                          var e = this, f = b.addRule, g = b.removeRule, h = b.insertRule, k = b.deleteRule; Q(f) && (b.addRule = function (l, m, p) { e.jb(d, "a", e.D.K(), l + "{" + m + "}", p); return f.call(b, l, m, p) }); Q(g) && (b.removeRule = function (l) {
                                            e.jb(d, "r", e.D.K(), "", l);
                                            return g.call(b, l)
                                          }); Q(h) && (b.insertRule = function (l, m) { e.jb(d, "a", e.D.K(), l, m); return h.call(b, l, m) }); Q(k) && (b.deleteRule = function (l) { e.jb(d, "r", e.D.K(), "", l); return k.call(b, l) })
                                        }; c.prototype.Pf = function (b) { var d = this; z(function (e) { var f = d.b.CSSStyleSheet.prototype[e]; Q(f) && (b[e] = C(f, b)) }, Gs) }; c.prototype.jh = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Dc = function (b) {
                                          var d = b.data; b = d.id; d = d.node; if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                            var e = d.sheet, f = this.jh(e);
                                            if (f && f.length) { for (var g = [], h = 0; h < f.length; h += 1)g.push({ style: f[h].cssText, index: h, Ud: "a" }); this.D.T("event", { ya: g, target: b }, "stylechange") } this.wi(e, b); this.Oa[b] = d
                                          }
                                        }; c.prototype.Ec = function (b) { b = b.data.id; var d = this.Oa[b]; d && (delete this.Oa[b], d.sheet && this.Pf(d.sheet)) }; return c
                                      }(Ra), "ss"], [gs, "in"], [ds, "mu"], [hs, "r"], [is, "sc"], [ks, "mo"], [ms, "f"], [rs, "se"], [ts, "wf"], [vs, "t"], [ws, "src"], [xs, "z"], [Cs, "ks"]]; sg.push([Es, "if"]); sg.push([Fs, "pa"]); var Hs = v(function (a) {
                                        var c = a.document; return {
                                          yd: function () {
                                            if (c.scrollingElement) return c.scrollingElement;
                                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body; return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                                          }, Eh: function () { var b = a.screen; if (!b) return 0; var d = Xa(w(b, n), ["orientation", "mozOrientation", "msOrientation"]); return n(b, d + ".angle") || 0 }, Pj: w(a, ub), pf: w(a, gd), Oj: w(a, he)
                                        }
                                      }), Is = function () {
                                        function a(c, b) {
                                          var d = this; this.xb = 0; this.Xb = []; this.wb = null; this.ma = this.Lb = this.cg = !1; this.wa = 0; this.Fh = function () { return d.page }; this.wd = function () { return d.xb }; this.ff = function () { return d.wa };
                                          this.Ch = function () { return d.Ua }; this.ef = function () { return d.wb }; this.ja = function () { return d.Dd }; this.K = function () { return d.ue ? d.b.Math.max(d.ue(X) - d.wa, 0) : 0 }; this.ic = function () { return d.options }; this.Xa = function () { return d.Mg }; this.T = function (f, g, h, k) { void 0 === k && (k = d.K()); f = d.Bh(f, g, h, k); d.ca(f) }; this.Bh = function (f, g, h, k) { void 0 === k && (k = d.K()); return { type: f, data: g, K: k, L: d.xb, event: h } }; this.ca = function (f) {
                                            f = ca(f) ? f : [f]; d.cg && !d.Lb ? d.ma ? (f = y(function (g) { return g.L ? g : B(g, { L: d.xb }) }, f), d.ef().Vf(f)) :
                                              (f = y(Tk, f), d.ne(f)) : d.Xb = d.Xb.concat(f)
                                          }; this.b = c; var e = Ue(c, this, "R"); this.se = e.G(this.se, "s"); this.ca = e.G(this.ca, "sd"); e = R(c); e.l("wv2e") && Mf(); e.o("wv2e", !0); this.options = b; this.Ua = fa(c); this.Dd = new es(this.b, b); this.Mg = Hs(c); this.Ne = y(function (f) { return new f[0](c, d, f[1]) }, sg); this.Uh(); this.page = Vk(this.b); this.se()
                                        } a.prototype.start = function (c) { this.cg = !0; this.ne = c; this.Sf() }; a.prototype.stop = function () {
                                          rg(this.b) && (z(function (c) { return c.stop() }, this.Ne), this.Dd.stop(), this.wb && this.wb.stop(),
                                            this.ma || this.T("event", {}, "eof"))
                                        }; a.prototype.Ub = function (c, b) { var d = new a(c, B({}, this.options, { L: b })); d.start(D); return d }; a.prototype.Uh = function () { var c = this; this.ma = !!this.options.L; this.xb = this.options.L || 0; this.Lb = !this.ma; var b = this.options.lg || []; b.push(O(this.b).host); this.wb = Wk(this.b, this, b); b = this.wb.vd(); ub(this.b) ? this.Lb && b.C("i", function (d) { c.ma = d.ma; c.Lb = !1; d.L && (c.xb = d.L); c.Sf() }) : this.Lb = this.ma = !1 }; a.prototype.Sf = function () { var c = this.Xb.splice(0, this.Xb.length); this.ca(c) };
                                        a.prototype.se = function () { this.ue = tf(this.b); this.wa = this.ue(X); z(function (c) { c.start() }, this.Ne); this.Dd.start() }; return a
                                      }(), Z, Js = (Z = {}, Z.mousemove = 0, Z.mouseup = 1, Z.mousedown = 2, Z.click = 3, Z.scroll = 4, Z.windowblur = 5, Z.windowfocus = 6, Z.focus = 7, Z.blur = 8, Z.eof = 9, Z.selection = 10, Z.change = 11, Z.input = 12, Z.touchmove = 13, Z.touchstart = 14, Z.touchend = 15, Z.touchcancel = 16, Z.touchforcechange = 17, Z.canvasMethod = 18, Z.canvasProperty = 19, Z.zoom = 20, Z.resize = 21, Z.mediaMethod = 22, Z.mediaProperty = 23, Z.keystroke = 24, Z.deviceRotation =
                                        25, Z.fatalError = 26, Z.hashchange = 27, Z.stylechange = 28, Z), tg = Ca(function (a, c) { var b; return b = {}, b[Oa(a)] = c, b }), Ks = function () {
                                          function a(c) {
                                            var b; this.isSync = !1; this.Ta = []; this.We = []; this.b = c; this.zb = (b = {}, b.event = C(this.hh, this), b.page = tg({ page: 1 }), b.mutation = tg({ hi: 1 }), b.activity = tg({ Gg: 1 }), b); this.We = [[["scroll"], { Ji: 1 }], [["selection"], { Ki: 1 }], [["change", "input"], { Sg: 1 }], [["keystroke"], { ai: 1 }, { uc: 1 }], [["zoom"], { pj: 1 }], [["resize"], { Ei: 1 }], [["windowfocus", "windowblur", "focus", "blur", "eof"], { mj: 1 }], [["mousemove",
                                              "mouseup", "mousedown", "click"], { fi: 1 }], [["deviceRotation"], { dh: 1 }], [["fatalError"], { lh: 1 }], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], { Vi: 1 }, { touches: 1 }, { touches: 1 }], [["hashchange"], { Qh: 1 }], [["stylechange"], { Pi: 1 }, { ya: 1 }, { ya: 1 }]]
                                          } a.prototype.hh = function (c) {
                                            var b, d, e = c.type, f = Xa(u(V("0"), w(e, F)), this.We); f || ob(vc("vem." + e)); "eof" === e && (this.isSync = !0, z(pa(xo), this.Ta)); var g = f[1], h = f[2]; f = f[3]; var k = c.Y; return {
                                              event: (b = { type: Js[e], target: c.target, L: c.L }, b[Oa(g)] = h ? (d = {},
                                                d[Oa(h)] = f ? k[Oa(f)] : k, d) : k, b)
                                            }
                                          }; a.prototype.Ca = function (c, b) {
                                            var d = this; void 0 === b && (b = !1); var e = ac(c, function (h) { var k = !S(h.partNum); return { data: k ? void 0 : d.zb[h.type](h.data), Vg: k ? h.data : void 0, page: h.partNum, end: h.end, K: h.K } }), f = this.isSync || b ? Infinity : 10; e = cc(this.b, e, f); var g = [e]; this.Ta.push(e); return e(we(function (h) { h = Id(d.b, Gh, { buffer: h }); h = cc(d.b, h, f, 100, Xd); g.push(h); d.Ta.push(h); return h }))(we(function (h) { h = jf(d.b, h.slice(-4)); h = cc(d.b, h, f, 100, Xd); g.push(h); d.Ta.push(h); return h }))(cg(function (h) {
                                              h =
                                                h[h.length - 1]; z(function (k) { k = se(d.b)(k, d.Ta); d.Ta.splice(k, 1) }, g); return h
                                            }))
                                          }; a.prototype.Da = function (c) { return Id(this.b, mf, this.zb[c.type](c.data))(Yd(D)) }; a.prototype.Ja = function (c) { return c[0] }; a.prototype.Qc = function (c, b) { for (var d = jf(this.b, c)(Yd(D)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)f.push(d.slice(g * e, e * (g + 1))); return f }; a.prototype.isEnabled = function () { return Fh(this.b) }; return a
                                        }(), Ls = E("w2", function (a, c) {
                                          var b = R(a), d = U(c); if (c.Ra && !Yc(a) && a.MutationObserver && ia("Element", a.Element)) {
                                            ia("MutationObserver",
                                              a.MutationObserver) || Ld(a).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment"); var e = pa(function (g, h) { Ha(a, c, h)["catch"](g) }), f = yl(a)(we(K([a, c], Qk)))(cg(function (g) { return new Is(a, g) })); zo([f, e])(Kb(A(a, "wv2.R.c"), function (g) {
                                                function h() { l || (l = !0, k && k.stop()) } var k = g[0]; g = g[1]; var l = !1, m = b.l("wv2Counter"); if (!mh(a, g) || m) h(); else if (fa(a).C(a, ["beforeunload", "unload"], h), b.o("wv2Counter", d), b.o("stopRecorder", h), g = [new Ae(a)], g.unshift(new Ks(a)), g = Xa(function (t) { return t.isEnabled() },
                                                  g)) { m = Sk(a, c, !(g instanceof Ae), function () { return {} }); var p = ig.ud(d, "m", w("m", m), g, a), q = ig.ud(d, "e", w("e", m), g, a); g = Rk(); m = g.ri; q.C("ag", g.Ig); q.C("p", m); var r = cb(function (t) { "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t) }); T(a, h, 864E5); vb(a, function () { k.start(r) }) }
                                              }))
                                          }
                                        }), Ms = Ca(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.Md.o("ymoo" + a.jd, a.hg(ib)), a.hd && a.hd.destruct && a.hd.destruct()) }), Ns = E("wsa", function (a, c) {
                                          var b = {
                                            jd: U(c), hd: Ka(a,
                                              c), hg: ba(a), Md: Ma(a)
                                          }, d = b.hg(ib); if (b.Md.Fd) return !1; var e = b.Md.l("ymoo" + b.jd); if (e && 30 > d - e) return !0; Ha(a, c, Ms(b))["catch"](A(a, "d.f")); return !1
                                        }), Os = u(function (a) { a = n(a, "navigator.plugins") || []; return rc(a) ? u(oa, oc(Boolean), Up(function (c, b) { return c.name > b.name ? 1 : 2 }), cb(km))(a) : "" }, Rc(",")), Ps = function (a) { return function (c) { var b = Za(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.kh; e = e.bh; try { var g = da("getContext", b); d = y(u(P, g), e) } catch (h) { return "" } return (g = Xa(P, d)) ? f(c, { canvas: b, Rg: g }) : "" } }(function () {
                                          return {
                                            bh: rr,
                                            kh: Jk
                                          }
                                        }), Ek = ["name", "lang", "localService", "voiceURI", "default"], zk = v(function (a, c) { return Ha(a, c, V("settings.form_goals")) }, rb), Qs = w(!0, Cg), Rs = E("s.f.i", function (a, c) { var b = []; fa(a).C(a, ["click"], A(a, "s.f.c", K([a, c, b], yk))); fa(a).C(a, ["submit"], A(a, "s.f.e", u(V("target"), K([a, c, b], Qs)))); Eg(a, c, "Form goal. Counter " + c.id + ". Init.") }), fk = D, Ss = Rb("isp.stat", function (a, c, b) { var d, e = U(c); e = xf(c)[e].If; return qa(a, "pi", c)({ H: ta((d = {}, d[e] = 1, d)) }, [b]) }), Ts = Rb("isp.stat", function (a, c, b) {
                                          return new L(function (d,
                                            e) { if (So(a, wj, "isp")) { var f = function (g) { ("1" === g ? d : e)(); fk(); g = Gi(wj); F("isp", g.eb) && (g.eb = W(u(ua("isp"), zb), g.eb), g.eb.length || (dc(g.Wa), g.Wa = null)) }; fk = fa(a).C(a, ["message"], K([a, b, f], xk)); T(a, f, 1500) } else e() })
                                        }), Us = Rb("isp", function (a, c) {
                                          Ha(a, c, function (b) {
                                            var d = Xa(function (h) { return n(b, "settings." + h) }, ["rt", "mf"]); if (d && te(a)) {
                                              var e = Bh(b) && !Pd(a), f = U(c), g = xf(c); g[f] = { If: d, status: e ? 3 : 4 }; if (!e) return e = wk(a, c, d), ("mf" === d ? Ts : Ss)(a, c, e).then(function () { g[f].status = 1 })["catch"](function () {
                                                g[f].status =
                                                  2
                                              })
                                            }
                                          })["catch"](A(a, "l.isp"))
                                        }), gk = /[^\d]/g, Vs = /[^\d.,]/g, Ws = /[.,]$/, tk = E("ep.pp", function (a, c) { if (!c) return 0; a: { var b = c.replace(Vs, "").replace(Ws, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (F(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(b[0].replace(gk, "") + "." + d.replace(gk, "")); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = Math.min(b, d), b = Math.max(b, 0)); return b }), Xs = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.",
                                          "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], Ys = v(function (a) { return new RegExp(a.join("|"), "i") }), Zs = E("ep.cp", function (a) {
                                            if (!a) return "643"; var c = a.replace(/\s/g, ""); return (a = Xa(function (b) { return Ys(b[0]).test(c) },
                                              Xs)) ? a[1] : "643"
                                          }), sk = E("ep.en", function (a, c, b) { a = yg(a); c = "" + 100 * c + b + a; b = 16 - c.length; if (0 > b) return ""; c = zg("0", b) + c; b = c.slice(0, 8); c = c.slice(-8); b = (+b ^ 92844).toString(35); c = (+c ^ 92844).toString(35); return "" + b + "z" + c }), hk = u(xg, Zs), ik = E("ep.ctp", function (a, c, b, d) { var e = hk(a, b), f = wg(a, d); vg(a, c, e, f); ia("MutationObserver", a.MutationObserver) && (new MutationObserver(function () { var g = hk(a, b), h = wg(a, d); if (e !== g || f !== h) e = g, f = h, vg(a, c, e, f) })).observe(a.document.body, { attributes: !0, childList: !0, subtree: !0, characterData: !0 }) }),
                                        $s = E("ep.chp", function (a, c, b, d, e) { b && Ke(a, c); return d || e ? fa(a).C(a.document, ["click"], A(a, "ep.chp.cl", K([a, c, d, e], rk))) : D }), pk = E("ep.dec", function (a, c) {
                                          if (!c || Yc(a)) return []; var b = ug(a, c, " ").split(" "), d = b[1], e = b[2], f = b.slice(3); b = parseInt(b[0], 2); if (1 === b) b = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o"; else if (2 === b) b = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==";
                                          else return []; b = qk(a, b); f = f.join(""); e = parseInt(d + e, 2); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(parseInt(b[g], 2)), g = ""), h += 1; b = ""; for (e = 0; e < d.length;)f = d.charCodeAt(e), 128 > f ? (b += String.fromCharCode(f), e++) : 191 < f && 224 > f ? (g = d.charCodeAt(e + 1), b += String.fromCharCode((f & 31) << 6 | g & 63), e += 2) : (g = d.charCodeAt(e + 1), b += String.fromCharCode((f & 15) << 12 | (g & 63) << 6 | d.charCodeAt(e + 2) & 63), e += 3); d = qb(a, b); return ca(d) ? d : []
                                        }), at = E("ep.i", function (a, c) {
                                          return ia("querySelectorAll",
                                            a.document.querySelectorAll) ? ok(a, c).then(function (b) { var d = b.eh, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7], q = d[8], r = d[9]; if (!b.isEnabled) return L.resolve(D); var t = wd(a, e), x = wd(a, h), I = wd(a, m), Y = wd(a, q), wa = "" + e + f + g === "" + h + k + l; return Bd(a).then(function () { t && ik(a, c, f, g); x && !wa && ik(a, c, k, l); return $s(a, c, I || Y, p, r) }) }) : L.resolve(D)
                                        }), bt = /[\*\.\?\(\)]/g, ct = v(function (a, c, b) { try { var d = b.replace("\\s", " ").replace(bt, ""); Ld(a).warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter') } catch (e) { } },
                                          rb), dt = E("r.nn", function (a) { hf(a).isEnabled && ae(a, Qf, function (c) { c.C(function (b) { ct(a, b[1], b[0]); Qf.splice(100) }) }) }), et = E("lt.p", Rb("lt.p", function (a) { var c; if (ia("PerformanceObserver", a.PerformanceObserver)) { var b = 0, d = new a.PerformanceObserver(A(a, "lt.o", function (e) { e && e.getEntries && (e = e.getEntries(), b = J(function (f, g) { return f + g.duration }, b, e), ke(a).o("lt", b)) })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return D } return function () { return d.disconnect() } } return D })); "function" ==
                                            typeof Promise && Promise.resolve(); var nk = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/, ft = E("yid.e", function (a) { var c = O(a), b = c.href; if (jd(c.search, "ysclid")) { c = mk(b); var d; (null === (d = null === a || void 0 === a ? void 0 : a.history) || void 0 === d ? 0 : d.replaceState) && ia("replaceState", a.history.replaceState) && a.history.replaceState(void 0, "", c) } }), Ub = R(window); Ub.Qa("hitParam", {}); Ub.Qa("lastReferrer", window.location.href); Ub.Qa("getCounters", er(window)); pf.push(Gr); var jk = function () {
                                              return function (a, c, b, d) {
                                                var e = this; return A(window,
                                                  "c.i", function () {
                                                    function f(I) { return re(h, k, I)(h, k) } function g(I) { return Sp(h, k, r, I) } (!window || isNaN(a) && !a) && Mf(); var h = window, k = cp(a, vj, c, b, d); k.id || wb(h, "Invalid Metrika id: " + k.id); var l = U(k), m = Ub.l("counters", {}), p = [], q = [], r = [re, Rp]; if (m[l]) return wb(h, "Duplicate counter " + l + " initialization"), m[l]; var t = !1, x = Ub.l("hitParam", {}); x[l] && (t = !(!Tf(k.aa) || m[l])); x[l] = 1; e._webvisor = k.Ra || !1; m[l] = e; Ub.o("counters", m); Ub.Qa("counter", e); x = fr(window, k); p.push(x); Pe(window); Ns(window, k) && delete m[l];
                                                    f($r); Yr(h, [Ps, Os, Nk, rm, Fk, im, qr, nm, Ck, Ak, Hk]); q.push(w(xq, f)); f(Yq); q.push(w(dl, f)); f(Tr); f(Ur); e.hit = g(Zq(h, k))(); e.params = g(Hr(h, k))(); l = f(gr); p.push(n(l, Oa({ unsubscribe: 1 }))); e.trackHash = re(h, k, n(l, Oa({ Zi: 1 }))); e.reachGoal = g(Me(h, k))(); e.experiments = g(Ir(h, k))(); f(Wr); q.push(w(cr, f)); t || q.push(w(zr, f)); t = f(jr); p.push(n(t, Oa({ nd: 1 }))); e.notBounce = g(n(t, Oa({ li: 1 })))(); e.accurateTrackBounce = g(n(t, Oa({ Nb: 1 })))(); f(Jr); t = f(mr); p.push(n(t, Oa({ nd: 1 }))); e.extLink = g(n(t, Oa({ ih: 1 })))(); e.addFileExtension =
                                                      g(n(t, Oa({ Hg: 1 })))(); e.file = g(n(t, Oa({ file: 1 })))(); e.trackLinks = g(n(t, Oa({ Vc: 1 })))(); p.push(Mr(h, k)); p.push(Nr(h)); e.ecommerceAdd = g(Or(h, k))(); e.ecommerceRemove = g(Pr(h, k))(); e.ecommerceDetail = g(Qr(h, k))(); e.ecommercePurchase = g(Rr(h, k))(); t = f(Vr); e.userParams = g(t || D)(); e.destruct = g(Xr(h, k, p))(!0, !1); f(as); f(pr); t = f(bs); e.setUserID = g(t || D)(); e.getClientID = f(cs) || D; p.push(f(sr)); e.clickmap = g(Br(h, k))(); (t = f(at)) && t.then(da("push", p)); f(Ar); e.enableAll = g(Cr(h, k))(); f(Rs); f(Us); f(Dr); f(Er); f(ft); f(et);
                                                    q.push(w(Sr, f)); (t = f(Fr)) && t.then(da("push", p)); vb(h, K([h, q, Ea, 1, 10, "a.i"], Gg)); f(El); f(Ls); dt(h)
                                                  })()
                                              }
                                            }(); (function (a) { var c = R(a); c.l("i") || (c.o("i", !0), fa(a).C(a, ["message"], w(a, jl))) })(window); if (window.Ya && jk) { var kk = ja.Rb; window.Ya[kk] = jk; kr(window); var lk = window.Ya[kk]; lk.informer = gm(window); lk.counters = Ub.l("getCounters") } (function (a) { var c = n(a, "ym"); if (c) { var b = n(c, "a"); b || (c.a = [], b = c.a); var d = ih(a); ae(a, b, function (e) { e.C(d) }, !0) } })(window); vd.qj = 1; vd.rj = 10; return vd
    })({})
  } catch (vd) { };
}).call(this)
