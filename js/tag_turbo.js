﻿(function () {
  try {
    (function (Ab) {
      function Bf(a, b) { var c = Cf(a), d = aa(a, "r", b), e = w(a, "rts.p"); return eb(a, b, E(C, null, function (f, g) { var h = { id: g.dc, H: g.H }; h = d({ D: g.Fc, A: Y(g.$b), o: g.C, ha: g.ha }, h, g.Jc)["catch"](e); return f.then(x(h, J)) }, K.resolve(""), c))["catch"](e) } function sd(a, b, c) {
        b = Bb(a, void 0, b); b = td(a, b.l("phc_settings") || ""); var d = n(b, "clientId"), e = n(b, "orderId"), f = n(b, "service_id"), g = n(b, "phones") || []; return d && e && g ? Df(a, c.mb, { Wc: Ef }).Ic(g).then(function (h) { return Ff(c, { $: d, da: e, Pb: f }, h.K, g, h.N) })["catch"](function () { }) :
          K.resolve()
      } function Ef(a, b, c) { a = Gf(c.$a); if ("href" === c.Hb) { var d = c.ga; b = d.href; c = b.replace(a, c.R); if (b !== c) return d.href = c, !0 } else if ((a = null === (d = c.ga.textContent) || void 0 === d ? void 0 : d.replace(a, c.R)) && a !== c.ga.textContent) return c.ga.textContent = a, !0; return !1 } function Ff(a, b, c, d, e) {
        var f; b.$ && b.da && (b.$ === a.$ && b.da === a.da || y(a, b, { K: {}, La: !0 }), 0 < e && Hf(a.N, [e]), A(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.K[l] && a.K[l][g] ? a.K[l][g] : 0); y(a.K, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), A(function (g) {
          var h,
            k, l = g[0]; g = g[1]; var m = 1 + (a.K[l] ? a.K[l][g] : 0); y(a.K, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
        }, c), a.Bb && (a.La || c.length) && ((b = Na(a.b, a.mb)) && b.params("__ym", "phc", (f = {}, f.clientId = a.$, f.orderId = a.da, f.service_id = a.Pb, f.phones = a.K, f.performance = a.N, f)), a.La = !1))
      } function If(a, b) { return ud(a).then(function () { var c, d = a.document.body, e = (c = {}, c.attributes = !0, c.childList = !0, c.subtree = !0, c); Aa("MutationObserver", a.MutationObserver) && (new MutationObserver(b.F)).observe(d, e) }) } function Jf(a, b) {
        var c = a.document.body; if (!c) return [];
        var d = vd(b); return C(function (e, f) { var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) { var k = (d.exec(h) || [])[0], l = k ? Cb(k) : "", m = b[l]; U(m) || !l && "*" !== m.Da[0] || (e.push({ Hb: "href", ga: f, $a: l, R: wd(k, b[l].R), Rc: g }), g = Cb(h.slice(4)), l = xd()([l ? m.Da : [g, ""]]), e.push.apply(e, yd(a, l, f))) } return e }, [], lc(c.querySelectorAll("a")))
      } function yd(a, b, c) {
        void 0 === c && (c = a.document.body); if (!c) return []; var d = [], e = vd(b); Kf(a, c, function (f) {
          if (f !== c && "script" !== (n(f, "parentNode.nodeName") ||
            "").toLowerCase()) { var g = R(Boolean, e.exec(f.textContent || "") || []); A(function (h) { var k = Cb(h); U(b[k]) || d.push({ Hb: "text", ga: f, $a: k, R: wd(h, b[k].R), Rc: f.textContent || "" }) }, g) }
        }, function (f) { return e.test(f.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
      } function xd() { return mc(function (a, b) { var c = z(Cb, b), d = c[0]; c = c[1]; a[d] = { R: c, Da: b }; var e = zd(d); e !== d && (a[e] = { R: zd(c), Da: b }); return a }, {}) } function wd(a, b) {
        for (var c = [], d = a.split(""), e = b.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
          var h = d[g];
          "0" <= h && "9" >= h ? (c.push(e[f]), f += 1) : c.push(d[g])
        } return B("", c) + b.slice(f + 1)
      } function zd(a) { var b = { 7: "8", 8: "7" }; return 11 === a.length && b[a[0]] ? "" + b[a[0]] + a.slice(1) : a } function vd(a) { return new RegExp("(?:" + B("|", z(Ad, W(a))) + ")") } function Kf(a, b, c, d, e) {
        function f(g) { return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT } void 0 === e && (e = -1); if (S(c) && f(b) === a.NodeFilter.FILTER_ACCEPT && (c(b), !Lf(b))) for (b = a.document.createTreeWalker(b, e, d ? { acceptNode: f } : null, !1); b.nextNode() &&
          !1 !== c(b.currentNode););
      } function ud(a, b) { function c(e) { n(b, d) ? e() : ja(a, x(e, c), 100) } void 0 === b && (b = a); var d = (b.nodeType ? "contentWindow." : "") + "document.body"; return new K(c) } function Mf(a, b, c) {
        var d, e; var f = n(c, "ecommerce") || {}; var g = n(c, "event") || ""; f = (g = Bd[g]) ? Cd(g, f, "items") : void 0; if (!f) a: { f = c; if (g = !ta(c)) g = Dd(c), g = a.isFinite(g) && !a.isNaN(g) && "[object Number]" === nc(g); g && (f = V(f)); if (ta(f) && (a = Bd[f[1]], "event" === f[0] && a)) { f = Cd(a, f[2], "items"); break a } f = void 0 } (c = f || Nf(c)) && b && b((d = {}, d.__ym = (e =
          {}, e.ecommerce = [c], e), d))
      } function Nf(a) { var b = n(a, "ecommerce") || {}; a = R(Oa(Of), W(b)); a = C(function (c, d) { c[d] = b[d]; return c }, {}, a); return W(a).length ? a : void 0 } function Cd(a, b, c) { var d, e; if (b) { var f = b.purchase || b; b = W(f); var g = f[c]; if (g) { var h = (d = {}, d[a] = (e = {}, e.products = z(Pf, g), e), d); 1 < b.length && (h[a].actionField = C(function (k, l) { if (l === c) return k; if ("currency" === l) return h.currencyCode = f.currency, k; k[oc[l] || l] = f[l]; return k }, {}, b)); return h } } } function Pf(a) {
        var b = {}; A(function (c) {
          var d = oc[c] || c; -1 !==
            c.indexOf("item_category") ? (d = oc.item_category, b[d] = b[d] ? b[d] + ("/" + a[c]) : a[c]) : b[d] = a[c]
        }, W(a)); return b
      } function Qf(a, b, c, d) { var e; if (a = Na(a, c)) { var f = d.data; c = "" + c.id; var g = d.sended || []; d.sended || (d.sended = g); F(c, g) || !a.params || d.counter && "" + d.counter !== c || (a.params(f), g.push(c), d.parent && b.Nb((e = {}, e.type = "params", e.data = f, e))) } } function Rf(a, b, c, d, e) {
        var f = e(G); return Sf(a, c, b)(fb(function (g) { A(function (h) { Ed(a, "d.s", h) }, g); g = e(Wa); d.m("ds", g) }, function (g) {
          var h = g.ab, k = g.host; if (n(h, "settings")) return Xa(Ja("ds.e"));
          d.m("ds", e(Wa)); g = e(G) - f; k = k[1]; var l, m; h = Y((l = {}, l.di = h, l.dit = g, l.dip = k, l)); l = (m = {}, m["page-url"] = L(a).href, m); return aa(a, "S", Fd)({ A: h, o: l }, Fd)["catch"](w(a, "ds.rs"))
        }))
      } function Tf(a, b, c, d, e) { return new K(function (f, g) { var h = T(a); if (h.l("dSync", !1)) return g(); h.m("dSync", !0); h = d.l("ds", 0); h = parseInt("" + h, 10); return 60 >= b(Wa) - h ? g() : Uf(a) ? f(void 0) : Vf(e) ? g() : f(Wf(a, c)) }) } function Sf(a, b, c) {
        var d = aa(a, "s", b); return Xf(z(function (e) {
          return Yf(d(Zf, z(function (f) {
            var g = f[1], h = f[2]; f = B("", z(function (k) {
              return String.fromCharCode(k.charCodeAt(0) +
                10)
            }, f[0].split(""))); return "http" + (h ? "s" : "") + "://" + f + ":" + g + "/p"
          }, e), { ed: !1, Kc: !0 }).then(function (f) { return y({}, f, { host: e[f.cd] }) }))
        }, c))
      } function $f(a, b, c) { var d = b || {}, e = aa(a, "u", c), f = Ea(a); return { l: function (g, h) { return U(d[g]) ? f.l(g, h) : d[g] }, m: function (g, h) { var k, l = "" + h; d[g] = l; f.m(g, l); return e({ o: (k = {}, k.key = g, k.value = l, k) }, ["https://mc.yandex.ru/user_storage_set"], {})["catch"](w(a, "u.d.s.s")) } } } function ag(a, b) {
        if (a.Vc()) {
          var c = null; try { c = b.target || b.srcElement } catch (v) { } if (c) {
            3 === c.nodeType &&
              (c = c.parentNode); for (var d = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== d && "area" !== d || !c.href && !c.getAttribute("xlink:href"));)d = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase(); var e = c.href ? c : null
          } else e = null; if (e && !Gd("ym-disable-tracklink", e)) {
            var f = a.b, g = a.globalStorage; c = a.ec; var h = a.fc, k = a.sc, l = a.sender, m = a.jc, p = h.Ma, q = e.href; d = Hd(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, "")); d = q === d ? "" : d; if (Gd("ym-external-link", e)) Db(f, h, {
              url: q, ca: !0,
              title: d, sender: l
            }); else { p = p ? pc(f, p).hostname : L(f).hostname; m = RegExp("\\.(" + B("|", z(bg, m)) + ")$", "i"); var u = e.protocol + "//" + e.hostname + e.pathname; m = Id.test(u) || Id.test(q) || m.test(q) || m.test(u); e = e.hostname; Jd(p) === Jd(e) ? m ? Db(f, h, { url: q, ta: !0, title: d, sender: l }) : ((k = (f = g.l("pai", H)()) && f + "-" + k) && c.m("pai", k), d && c.m("il", Hd(d).slice(0, 100))) : q && cg.test(q) || Db(f, h, { url: q, wa: !0, ca: !0, ta: m, title: d, sender: l }) }
          }
        }
      } function Db(a, b, c, d) {
        var e, f = Y(); c.ta && f.m("dl", "1"); c.ca && f.m("ln", "1"); f = {
          A: f, title: c.title,
          wa: !!c.wa, C: c.C, o: (e = {}, e["page-url"] = c.url, e["page-ref"] = b.Ma || L(a).href, e)
        }; e = "Link"; c.ta ? e = c.ca ? "Ext link - File" : "File" : c.ca && (e = "Ext link"); c.sender(f, b).then(d || H).then(gb(a, b, e + ". Counter " + b.id + ". Url: " + c.url, c))["catch"](w(a, "cl.p.s")).then(O([a, c.T || H, c.b], Pa))
      } function dg(a, b) { var c, d, e = (c = {}, c.string = !0, c.object = !0, c["boolean"] = b, c)[typeof b] || !1; a((d = {}, d.trackLinks = e, d)) } function eg(a, b, c, d) {
        var e = L(a), f = e.hostname; e = e.href; if (b = hb(b).url) a = pc(a, b), f = a.hostname, e = a.href; return [d + "://" +
          f + "/" + c, e || ""]
      } function qc(a, b) { return t(Kd(b), rc(a)) } function sc(a, b) { return t(fg(b), rc(a)) } function rc(a) { a = T(a); var b = a.l("dsjf") || na({}); a.V("dsjf", b); return b } function gg(a) { return !!tc(function (b) { return F(b.type, ["articleInfo", "publishersHeader"]) }, a) } function Eb(a) { return ta(a) ? z(Eb, a) : oa(a) || "object" !== typeof a ? a : C(function (b, c) { var d = c[0], e = c[1], f = hg[d]; U(f) && (f = d); e = F(f, ig) ? e : Eb(e); f ? b[f] = e : b[d] = e; return b }, {}, ua(a)) } function gb(a, b, c, d) {
        return Ld(b) ? H : x(O(da([a], d ? [c + ". Params:", d] : [c]),
          Qa), pa)
      } function Qa() { var a = V(arguments), b = a.slice(1); Md(a[0]).log.apply(Qa, b) } function Nd(a) { var b = Fb(a), c = L(a); b = "1" === b.l("debug"); c = -1 < c.href.indexOf("_ym_debug=1"); a = a._ym_debug; return { qc: b, wc: a || c, isEnabled: Od(Boolean, [b, a, c]) } } function jg(a, b, c) { var d; (d = ea[b]) || (d = va); d = d.slice(); d.unshift(kg); d.unshift(lg); return z(t(Pd([a, b, c]), pa), d) } function Qd(a, b) {
        var c = L(a), d = c.href, e = c.host, f = -1; if (!ib(b) || U(b)) return d; c = b.replace(Rd, ""); if (-1 !== c.search(mg)) return c; var g = c.charAt(0); if ("?" === g &&
          (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + c; if (-1 !== f) return d.substr(0, f) + c; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + c } else return d = d.split("/"), d[d.length - 1] = c, B("/", d); return ""
      } function lg(a) { return { I: function (b, c) { T(a).l("oo") || c() } } } function ng(a) { a = og(a); return pg[a] || a } function qg(a) { a = Sd(a); return rg[a] || "ru" } function kg(a, b, c) { return { I: function (d, e) { sg(a, d, c, e) } } } function sg(a, b, c, d) {
        var e = b.A; if (c.fd || !e) d(); else {
          var f = Gb(a), g = Bb(a,
            ""); d = t(function () { var u = Td(f); u = "" + u + tg(u, g); e.m("gdpr", u); Ud(b, "gdpr", u) }, d); if (3 === c.id) d(); else {
              var h = T(a), k = h.l("f1"); if (k) k(d); else if (k = (k = Td(f)) ? z(x(Hb, n), k.split(",")) : [], Vd(k)) d(); else {
                var l = uc(a), m = L(a), p = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.l("yaGdprCheck")); m = g.l("gdpr"); g.l("yandex_login") ? (k.push("13"), g.m("gdpr", Ya, 525600)) : l ? F(m, Ka) ? m === vc ? k.push("12") : k.push("3") : ug(a) || vg(a) ? k.push("17") : wg(a) && k.push("28") : k.push("14"); var q = x(f, xg); Vd(k) ? (A(q, k), d()) : (Ib.push(d), h.m("f1",
                  function (u, v) { var ka = 0; if (v) { var P = Ba(a, v) || ""; ka += P.length } Ib.push(u); 1E6 >= ka && Ib.push(u) }), (0, wc[0])(a).then(N("params.eu")).then(function (u) { if (u || p) { g.m("gdpr_popup", vc); yg(a, c); if (jb(a)) return zg(a, q, c); var v = Wd(a, f); if (v) return u = Ag(a, q, v, c), u.then(O([a, c], Bg)), u } u || q("8"); return K.resolve({ value: Ya, Ra: !0 }) }).then(function (u) { g.oa("gdpr_popup"); if (u) { var v = u.value; u = u.Ra; F(v, Ka) && g.m("gdpr", v, u ? void 0 : 525600) } v = xc(Ib, pa); Xd(a, v, 20)(fb(w(a, "gdr"), H)); h.m("f1", pa) })["catch"](w(a, "gdp.a")))
              }
            }
        }
      }
      function Bg(a, b) { if (uc(a)) { var c = Gb(a), d = Na(a, b); d = d && d.params; c = z(x(Cg, n), yc(c)); d && c.length && d("__ym", "gdpr", R(Boolean, c)) } } function Na(a, b) { var c = T(a).l("counters", {}), d = M(b); return c[d] } function zg(a, b, c) {
        var d = zc(a, c); return new K(function (e) {
          var f; if (d) {
            var g = d.J, h = t(x("4", b), x(null, e)), k = ja(a, h, 2E3, "gdp.f.t"); d.Nb((f = {}, f.type = "isYandex", f)).then(function (l) {
              l.isYandex ? (b("5"), g.B(B(",", da(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ac)), function (m) { e({ value: Yd(m[1].type) }) })) : (b("6"),
                e(null))
            })["catch"](h).then(O([a, k], La))
          } else e({ value: vc, Ra: !0 })
        })
      } function yg(a, b) { var c = zc(a, b); c && c.J.B("isYandex", function () { var d; return d = { type: "isYandex" }, d.isYandex = uc(a), d }); return c } function Ag(a, b, c, d) {
        var e = Dg(a, d.gd), f = zc(a, d); if (!f) return K.resolve({ value: Ya, Ra: !0 }); e = (d = Eg(a, d)) ? e + "_inversed_buttons" : e; b(d ? "30" : "29"); var g = Fg(a, { src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js" }); return new K(function (h, k) {
          g ? (b("7"), g.onerror = function () {
            var l; b("9"); f.Lb((l = {}, l.type = "GDPR-ok-view-default",
              l)); h(null)
          }, g.onload = function () { b("10"); c.B(B(",", da(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ac)), function (l) { var m; l = l.type; f.Lb((m = {}, m.type = l, m)); h({ value: Yd(l) }) }) }) : (b("9"), k(Ja("gdp.e")))
        })
      } function Dg(a, b) { var c = b || Sd(a); return F(c, Gg) ? c : "en" } function Eg(a, b) { var c = (Zd(a, b) || "").slice(-1); c = parseInt(c, 10); return !a.isNaN(c) && 1 > c } function $d(a, b) {
        var c = Hg(a, b), d = [], e = []; if (!c) return null; var f = Ig(a, c.Mb), g = Jg(f); c.J.B("initToParent", function (h) { g(d, c.Z[h[1].counterId]) }).B("parentConnect",
          function (h) { g(e, c.ea[h[1].counterId]) }); return { J: c.J, Sd: function (h, k) { return new K(function (l, m) { c.Mb(h, k, function (p, q) { l([p, q]) }); ja(a, x(Ja(), m), 5100, "is.o") }) }, Lb: function (h) { var k = { Ob: [], jb: [], data: h }; d.push(k); return f(c.Z, k, h) }, Nb: function (h) { var k = { Ob: [], jb: [], data: h }; e.push(k); return f(c.ea, k, h) } }
      } function Bc() {
        return function (a, b, c) {
          return {
            I: function (d, e) {
              var f, g = d.A, h = d.o; if (g && h) {
                var k = F(h["wv-type"], Kg); if (!h["wv-type"] || k) {
                  var l = Q(a); g.Qb("rqnl", 1); g = g.b(); for (var m = kb(a), p = 1; m[p];)p +=
                    1; d.ha = p; m[p] = (f = {}, f.protocol = "https:", f.host = "mc.yandex.ru", f.resource = k ? "webvisor" : "watch", f.postParams = d.D, f.time = l(G), f.counterType = c.H, f.params = h, f.browserInfo = g, f.counterId = c.id, f.ghid = Za(a), f); Cc(a)
                }
              } e()
            }, Y: function (d, e) { ae(a, d); e() }
          }
        }
      } function ae(a, b) { var c = kb(a); b.A && !Ma(c) && (delete c[b.ha], Cc(a)) } function Cc(a) { var b = kb(a); Ea(a).m("retryReqs", b) } function be(a, b, c) {
        var d = ce(a, b, c); return function (e, f, g) {
          var h; e = y({ A: Y() }, e); e.o || (e.o = {}); var k = e.o; k.wmode = "0"; k["wv-part"] = "" + g; k["wv-hit"] =
            k["wv-hit"] || "" + Za(a); k["page-url"] = k["page-url"] || a.location.href; k.rn = k.rn || "" + Ra(a); if (!k["wv-type"]) { g = e.bc; var l = "4", m = "2"; e.uc && (l = "5", m = "3"); k["wv-type"] = g ? l : m } f = "webvisor/" + f.id; return d(y(e, { o: k }), f, { fa: (h = {}, h["Content-Type"] = "text/plain", h), Xb: "POST" })
        }
      } function eb(a, b, c) { a = M(b); return de()(Lg(a)).then(c) } function Mg(a, b, c) { b = M(b); a = ee(a); c = y({ lc: a(G) }, c); return de()(Ng(b, c)) } function Og(a, b) {
        var c = Jb(a); b.B("initToParent", function (d) { var e = d[1]; c.Z[e.counterId] = { info: e, window: d[0].source } }).B("initToChild",
          function (d) { var e = d[0]; d = d[1]; e.source === a.parent && b.F("parentConnect", [e, d]) }).B("parentConnect", function (d) { var e = d[1]; e.counterId && (c.ea[e.counterId] = { info: e, window: d[0].source }) })
      } function Dc(a) { return { I: function (b, c) { var d = b.A; if (d) { var e = a.document.title; b.title && (e = b.title); var f = $a("getElementsByTagName", a.document); "string" !== typeof e && f && (e = f("title"), e = (e = n(e, "0.innerHtml")) ? e : ""); e = e.slice(0, Pg); d.m("t", e) } c() } } } function ab(a) {
        void 0 === a && (a = Qg); return function (b, c, d) {
          return {
            I: function (e,
              f) { var g = e.A, h = e.o; if (g && h) { var k = Ud(e); A(function (l) { var m = Sa[l], p = "bi", q = g; Sa[l] || (m = fe[l], p = "tel", q = k); m && (m = I(p + ":" + l, m, null)(b, d, e), q.Qb(l, m)) }, a) } f() }
          }
        }
      } function Za(a) { var b = T(a), c = b.l("hitId"); c || (c = Ra(a), b.m("hitId", c)); return c } function ge(a, b) { var c = a.length ? z(function (d, e) { var f = b[e]; return f === d ? null : f }, a) : b; a.length = 0; A(t(J, ba("push", a)), b); return R(Ca(null), c).length === a.length ? null : c } function he(a, b, c) {
        return z(function (d) {
          var e = d[0], f = d[1]; if (S(e)) return e(a, b) || null; if (S(f)) return null;
          var g = !(!b[e] || !b[f]); !g && 2 === d.length && (g = 0 === b[e] && 0 === b[f]) && (g = d[1], g = !(ie[d[0]] || ie[g])); return g ? (d = Math.round(b[e]) - Math.round(b[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && b[e] ? Math.round(b[e]) : null
        }, c)
      } function Ec(a, b, c) { return { I: function (d, e) { var f = je(c), g = d.A; g ? g.l("pv") && !g.l("ar") ? (f.sb = g, e()) : f.sa ? f.sa.push(e) : e() : e() }, Y: function (d, e) { var f = d.A, g = je(c); if (f) { var h = g.sa; g.sb === f && h && (A(pa, h), g.sa = null) } e() } } } function ke(a) {
        return {
          I: function (b, c) {
            var d = a.document, e = b.A; if (e && le(a)) {
              var f = Ta(a),
                g = function (h) { le(a) || (f.Ea(d, me, g), c()); return h }; f.B(d, me, g); e.m("pr", "1")
            } else c()
          }
        }
      } function la(a, b, c) { var d = ce(a, b, c); return function (e, f) { var g, h = y({ A: Y() }, e), k = h.o, l = h.A; k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g); "0" !== f.H && (k["cnt-class"] = f.H); g = y(h, { o: y(h.o || {}, k) }); return d(g, "watch/" + f.id, { Yb: !(!l.l("pv") || l.l("ar") || l.l("wh")) }) } } function ce(a, b, c) {
        var d = lb(a, b); return function (e, f, g) {
          void 0 === g && (g = {}); f = ["https://" + (Rg(a) || "mc.yandex.ru") + "/" + f]; return ne(a, c, e, !0).then(O([e,
            f, g], d)).then(function (h) { e.Rd = h.ab; return ne(a, c, e).then(x(h.ab, J)) })
        }
      } function Rg(a) { var b = "mc.yandex.ru", c = n(a, "document.referrer"); if (!c) return b; (a = pc(a, c).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (a = a[0].split("yandex").reverse()[0].substring(1), a = F(a, oe) ? a : !1) : a = !1; return "mc.yandex." + (a || "ru") } function Sg(a, b) { return a && b ? pe(a) === pe(b) : a || b ? !1 : !0 } function pe(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function ne(a, b, c, d) {
        void 0 === d &&
          (d = !1); return new K(function (e, f) { function g(l, m) { m(); e() } var h = b.slice(); h.push({ I: g, Y: g }); var k = xc(h, function (l, m) { var p = d ? l.I : l.Y; if (p) try { p(c, m) } catch (q) { k(Tg), f(q) } else m() }); k(qe) })
      } function re(a, b, c) { var d = c || "as"; if (a.postMessage && !a.attachEvent) { c = Ta(a); var e = "__ym__promise_" + Ra(a) + "_" + Ra(a), f = H; d = w(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), b()) }); f = c.B(a, ["message"], d); a.postMessage(e, "*") } else ja(a, b, 0, d) } function Ug(a, b, c, d, e, f) {
        void 0 ===
          d && (d = 1); void 0 === e && (e = 200); void 0 === f && (f = "itc"); b = xc(b, c); Xd(a, b, d, e)(fb(w(a, f), H))
      } function Xd(a, b, c, d, e) { function f(g, h) { function k() { try { var m = b(e(a, c)); l = l.concat(m) } catch (p) { return g(p) } b(Vg); if (b(Kb)) return h(l); f.flush ? (b(e(a, 1E4)), h(l)) : ja(a, k, d) } var l = []; k() } void 0 === c && (c = 1); void 0 === d && (d = 200); void 0 === e && (e = Wg); return na(f) } function Xg(a) { return na(function (b, c) { c(a) }) } function Yf(a) { return na(function (b, c) { a.then(c, b) }) } function Xf(a) {
        var b = [], c = !1; return na(function (d, e) {
          function f(g) {
            b.push(g) ===
              a.length && d(b)
          } A(function (g) { g(fb(f, function (h) { if (!c) try { e(h), c = !0 } catch (k) { f(k) } })) }, a)
        })
      } function xc(a, b) { void 0 === b && (b = J); return na({ va: a, Db: b, fb: !1, L: 0 }) } function qe(a) { function b() { function d() { c = !0; a.L += 1 } c = !1; a.Db(a.va[a.L], function () { d() }); c || (a.L += 1, d = E(qe, null, a)) } for (var c = !0; !Kb(a) && c;)b() } function Wg(a, b) { return function (c) { var d = Q(a), e = d(G); return Yg(function (f, g) { d(G) - e >= b && g(Zg) }, c) } } function $g(a) { Kb(a) && Xa(Error("i")); var b = a.Db(a.va[a.L]); a.L += 1; return b } function Vg(a) { a.fb = !1 }
      function Zg(a) { a.fb = !0 } function Tg(a) { a.L = a.va.length } function Kb(a) { return a.fb || a.va.length <= a.L } function lb(a, b) { return function (c, d, e) { void 0 === e && (e = {}); return se(a, b, d, c, y(e, { P: c.P || [], D: e.D || c.D })) } } function se(a, b, c, d, e, f, g) {
        var h; void 0 === f && (f = 0); void 0 === g && (g = 0); var k = y({}, e), l = b[g], m = l[0]; l = l[1]; var p = y({}, d.o), q = Q(a); d.A && (p["browser-info"] = Y(d.A.b()).m("st", q(Lb)).ia()); !p.t && (q = d.Ba) && (q.m("ti", m), p.t = q.ia()); q = c[f]; k.fa && k.fa["Content-Type"] || !k.D || (k.fa = y({}, k.fa, (h = {}, h["Content-Type"] =
          "application/x-www-form-urlencoded", h)), k.D = "site-info=" + Fc(k.D)); k.Xb = k.D ? "POST" : "GET"; k.Za = p; k.P.push(m); return l("" + q + (d.Ac ? "/1" : ""), k).then(function (u) { return { ab: u, cd: f } })["catch"](function (u) { var v = g + 1 >= b.length, ka = f + 1 >= c.length; v && ka && Xa(u); return se(a, b, c, d, e, !ka && v ? f + 1 : f, v ? 0 : g + 1) })
      } function te(a, b) { var c = Ea(a), d = Fb(a), e = b.Ta || "uid"; return [c.l(e), d.l(e)] } function ah(a) { var b = a.N, c = b[1]; a = b[0] && c ? c() : G(a) - a.tc; return Math.round(a) } function Lb(a) { return Math.round(G(a) / 1E3) } function Wa(a) {
        return Math.floor(G(a) /
          1E3 / 60)
      } function G(a) { var b = a.Zc; return 0 !== b ? b : ue(a.b, a.N) } function ee(a) { Ta(a); var b = ve(a); a = { b: a, Zc: 0, N: b, tc: ue(a, b) }; return na(a) } function bh(a) { return (10 >= a ? "0" : "") + a } function we(a, b, c) { void 0 === b && (b = ""); void 0 === c && (c = "_ym"); var d = "" + c + b + "_"; return { vc: ch(a), l: function (e, f) { var g = xe(a, "" + d + e); return Ma(g) && !U(f) ? f : g }, m: function (e, f) { ye(a, "" + d + e, f); return this }, oa: function (e) { ze(a, "" + d + e); return this } } } function ye(a, b, c) { var d = Gc(a); a = Ba(a, c); if (!Ma(a)) try { d.setItem(b, a) } catch (e) { } } function xe(a,
        b) { var c = Gc(a); try { return Mb(a, c.getItem(b)) } catch (d) { } return null } function ze(a, b) { var c = Gc(a); try { c.removeItem(b) } catch (d) { } } function Gc(a) { try { return a.localStorage } catch (b) { } return null } function Nb(a, b) { var c = null; try { c = a.document.cookie } catch (d) { return null } return (c = (new RegExp("(?:^|;\\s*)" + b + "=([^;]*)")).exec(c)) && 2 <= c.length ? decodeURIComponent(c[1]) : null } function Yd(a) {
          if (F(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Ya; a = a.replace("GDPR-ok-view-detailed-", ""); return F(a, Ka) ?
            a : Ya
        } function Wd(a, b, c) { void 0 === c && (c = J); var d = Hc(a); c(d); var e = x(d, dh); Ic(a, b, function (f) { f.B(e) }); return d } function dh(a, b) { var c = n(b, "ymetrikaEvent"); c && a.F(n(c, "type"), c) } function Ic(a, b, c, d) { void 0 === c && (c = H); void 0 === d && (d = !1); var e = Ob(a); if (b && S(b.push)) { var f = b.push; b.push = function () { var g = V(arguments), h = g[0]; d && e.F(h); g = f.apply(b, g); d || e.F(h); return g }; c(e); A(e.F, b); return e } } function Gb(a) { a = T(a); var b = a.l("dataLayer", []); a.m("dataLayer", b); return b } function xg(a, b) {
          var c, d; a.push((c = {},
            c.ymetrikaEvent = (d = {}, d.type = b, d), c))
        } function eh(a, b, c) { function d() { f = 0; g && (g = !1, f = ja(a, d, c), e.F(h)) } var e = Ob(a), f, g = !1, h; b.B(function (k) { g = !0; h = k; f || d(); return H }); return e } function ja(a, b, c, d) { return Jc(a, w(a, "d.err." + (d || "def"), b), c) } function Hc(a) {
          var b = {}; return {
            B: function (c, d) { A(function (e) { n(b, e) || (b[e] = Ob(a)); b[e].B(d) }, c.split(",")); return this }, U: function (c, d) { A(function (e) { n(b, e) && b[e].U(d) }, c.split(",")); return this }, F: function (c, d) {
              return C(function (e, f) {
                return n(b, f) ? e.concat(w(a,
                  "e." + f, b[f].F)(d)) : e
              }, [], c.split(","))
            }
          }
        } function Ob(a) { var b = [], c = {}; c.Cd = b; c.B = t(ba("push", b), x(c, J)); c.U = t(Kc(Pb(a))(b), Kc(ba("splice", b))(1), x(c, J)); c.F = t(J, Kc(pa), fh(b)); return c } function I(a, b, c) { return function () { return w(arguments[0], a, b, c).apply(this, arguments) } } function w(a, b, c, d, e) { var f = c || Xa; return function () { var g = d; try { g = f.apply(e || null, arguments) } catch (h) { Ed(a, b, h) } return g } } function ue(a, b) {
          var c = b || ve(a), d = c[0]; c = c[1]; return !isNaN(d) && S(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() :
            (new a.Date).getTime()
        } function ve(a) { a = Lc(a); var b = n(a, "timing.navigationStart"), c = n(a, "now"); c && (c = E(c, a)); return [b, c] } function Lc(a) { return n(a, "performance") || n(a, "webkitPerformance") } function Ed(a, b, c) {
          var d, e, f, g, h, k = "u.a.e", l = ""; c && ("object" === typeof c ? (k = c.message, l = "string" === typeof c.stack && c.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + c); if (!(gh(k) || Od(t(ba("indexOf", k), Ca(-1), mb), hh) || ih(k) && .1 <= a.Math.random())) {
            b = (d = {}, d.jserrs = (e = {}, e["720"] = (f = {}, f[k] = (g = {}, g[b] = (h = {}, h[a.location.href] =
              l, h), g), f), e), d); a: { var m; try { var p = Mc(a, "er")[0]; var q = void 0 === p ? [] : p; var u = q[1]; var v = void 0 === u ? null : u } catch (ka) { break a } d = (m = {}, m["browser-info"] = "ar:1:pv:1:v:720:vf:" + nb.version, m["page-url"] = a.location && "" + a.location.href, m); a = Ba(a, b); if (v && a) v("https://mc.yandex.ru/watch/26302566", { Za: d, P: [], D: "site-info=" + Fc(a) })["catch"](H) }
          }
        } function ob(a) { return z(function (b) { return !b || F(b, a) ? b : 0 }, pb) } function Ud(a, b, c) { void 0 === c && (c = null); a.Ba || (a.Ba = jh()); b && !Ma(c) && a.Ba.m(b, c); return a.Ba } function Ra(a,
          b, c) { var d = U(c); U(b) && d ? (d = 1, b = 1073741824) : d ? d = 1 : (d = b, b = c); return a.Math.floor(a.Math.random() * (b - d)) + d } function Nc(a) { var b = Oc(a); return b ? kh(a, b) : !1 } function Qb(a, b, c) { return (a = Pc(c, a, b)) && a.length ? a[0] : null } function Pc(a, b, c) { return c ? (a = c.querySelectorAll(a)) ? lc(a) : [] : [] } function Fg(a, b) {
            var c = a.document, d = y({ type: "text/javascript", charset: "utf-8", async: !0 }, b), e = Oc(a); if (e) {
              var f = e("script"); Ae(ua, qb(function (l) { var m = l[0]; l = l[1]; "async" === m && l ? f.async = !0 : f[m] = l }))(d); try {
                var g = $a("getElementsByTagName",
                  c), h = g("head")[0]; if (!h) { var k = g("html")[0]; h = e("head"); k && k.appendChild(h) } h.insertBefore(f, h.firstChild); return f
              } catch (l) { }
            }
          } function Qc(a, b, c) {
            if (!(b && b.Element && b.Element.prototype && b.document)) return null; if (b.Element.prototype.closest && Aa("closest", b.Element.prototype.closest) && c.closest) return c.closest(a); var d = lh(b); if (d) { for (; c && 1 === c.nodeType && !d.call(c, a);)c = c.parentElement || c.parentNode; return c && 1 === c.nodeType ? c : null } if (b.document.querySelectorAll && Aa("querySelectorAll", n(b, "Element.prototype.querySelectorAll"))) {
              for (a =
                lc((b.document || b.ownerDocument).querySelectorAll(a)); c && 1 === c.nodeType && -1 === Pb(b)(c, a);)c = c.parentElement || c.parentNode; return c && 1 === c.nodeType ? c : null
            } return null
          } function Be(a) { try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (b) { return "object" === typeof b && null !== b && 16389 === (b.Dc && b.Dc & 65535) ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 } : null } } function Ce(a) {
            var b = De(a); if (b) { var c = b[2]; return [a.Math.round(b[0] * c), a.Math.round(b[1] * c)] } b = Rc(a); return [n(b, "clientWidth") || a.innerWidth,
            n(b, "clientHeight") || a.innerHeight]
          } function De(a) { var b = n(a, "visualViewport.width"), c = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return oa(b) || oa(c) ? null : [Math.floor(b), Math.floor(c), a] } function Rc(a) { var b = n(a, "document") || {}, c = b.documentElement; return "CSS1Compat" === b.compatMode ? c : Ee(a) || c } function Ee(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (b) { return null } } function Gd(a, b) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(b.className) } catch (c) { return !1 } }
      function Fe(a) { var b = a && a.parentNode; b && b.removeChild(a) } function Lf(a) { if (oa(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function rb(a) { var b; if (b = n(a, "XMLHttpRequest")) if (b = "withCredentials" in new a.XMLHttpRequest) { a: { if (mh.test(a.location.host) && a.opera && S(a.opera.version) && (b = a.opera.version(), "string" === typeof b && "12" === b.split(".")[0])) { b = !0; break a } b = !1 } b = !b } return b ? nh(a) : !1 } function oh(a, b, c, d, e, f, g, h) {
        if (4 === b.readyState) if (200 === b.status || e || g(c), e) 200 === b.status ? f(b.responseText) : g(Error("http." +
          b.status + ".st." + b.statusText + ".rt." + ("" + b.responseText).substring(0, 50))); else { e = null; if (d) try { (e = Mb(a, b.responseText)) || g(c) } catch (k) { g(c) } f(e) } return h
      } function Ba(a, b) { try { return a.JSON.stringify(b) } catch (c) { return null } } function Ge(a) { return a ? t(ua, mc(function (b, c) { var d = c[0], e = c[1]; U(e) || oa(e) || b.push(d + "=" + Fc(e)); return b }, []), He("&"))(a) : "" } function Fc(a) { try { return encodeURIComponent(a) } catch (b) { } a = B("", R(function (b) { return 55296 >= b.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) }
      function Ie() { var a = V(arguments); return Xa(Ja(a)) } function Ja(a) { var b = ""; ta(a) ? b = B(".", a) : ib(a) && (b = a); return Error("err.kn(720)" + b) } function Je(a, b, c, d, e) { var f = a.addEventListener && a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](b, c, d); else a[e]("on" + b, c) } function L(a) { return C(function (b, c) { var d = n(a, "location." + c); b[c] = d ? "" + d : ""; return b }, {}, ph) } function Ke(a) {
        return function (b) {
          var c = b || {};
          return { b: x(c, J), l: function (d, e) { var f = c[d]; return U(f) && !U(e) ? e : f }, m: function (d, e) { c[d] = e; return this }, Qb: function (d, e) { return "" === e || oa(e) ? this : this.m(d, e) }, ia: x(c, a) }
        }
      } function qh(a, b, c, d, e) { var f = "object" === typeof a ? a : { id: a, H: d, ma: e, C: c }; a = C(function (g, h) { var k = h[1], l = k.Bc; k = f[k.Ec]; g[h[0]] = l ? l(k) : k; return g }, {}, ua(b)); Le(a, a.C || {}); return a } function Me(a) { a = M(a); return wa[a] && wa[a].Tc } function Le(a, b) {
        var c = M(a), d = n(b, "__ym.turbo_page"), e = n(b, "__ym.turbo_page_id"); wa[c] || (wa[c] = {}); if (d || e) wa[c].Tc =
          d, wa[c].Uc = e; if (d = n(b, "__ym.turbo_uid")) wa[c].Xc = d
      } function le(a) { return F("prerender", z(x(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Hf(a, b) { A(t(J, ba("push", a)), b); return a } function lc(a) { return a ? ta(a) ? a : Rb ? Rb(a) : "number" === typeof a.length && 0 <= a.length ? Ne(a) : [] : [] } function rh(a, b) { if (!Oe(a)) return !0; try { b.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (c) { return !1 } return !0 } function Sb(a, b, c) { return c ? a : b } function Pa(a, b, c) {
        try {
          if (S(b)) {
            var d = V(arguments).slice(3);
            oa(c) ? b.apply(void 0, d) : E.apply(void 0, da([b, c], d))()
          }
        } catch (e) { Jc(a, x(e, Xa), 0) }
      } function Xa(a) { throw a; } function Jc(a, b, c) { return $a("setTimeout", a)(b, c) } function La(a, b) { return $a("clearTimeout", a)(b) } function Tb() { return [] } function Sc() { return {} } function $a(a, b) { var c = n(b, a), d = n(b, "constructor.prototype." + a) || c; try { if (d && d.apply) return function () { return d.apply(b, arguments) } } catch (e) { return c } return d } function Tc(a, b) {
        return function () {
          var c = V(arguments), d = c[0]; c = c.slice(1); var e = T(d), f = e.l("m720",
            {}), g = n(f, a); g || (g = r(b), f[a] = g, e.m("m720", f)); return g.apply(void 0, da([d], c))
        }
      } function pa(a, b) { return b ? a(b) : a() } function r(a, b) { var c = [], d = []; var e = b ? b : J; return function () { var f = V(arguments), g = e.apply(void 0, f), h = Pe(g, d); if (-1 !== h) return c[h]; f = a.apply(void 0, f); c.push(f); d.push(g); return f } } function mb(a) { return !a } function Da(a, b) { return b } function J(a) { return a } function Pb(a) {
        if (Uc) return Uc; var b = !1; try { b = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var c = a.Array && a.Array.prototype && Fa(a.Array.prototype.indexOf,
          "indexOf"); return Uc = a = b && c ? function (d, e) { return c.call(e, d) } : sh
      } function sh(a, b) { for (var c = 0; c < b.length; c += 1)if (b[c] === a) return c; return -1 } function th(a) { return U(a) ? [] : Ub(function (b, c) { b.push([c, a[c]]); return b }, [], Qe(a)) } function uh(a, b) { return Ub(function (c, d, e) { c.push(a(d, e)); return c }, [], b) } function vh() { var a = V(arguments), b = a[0]; for (a = a.slice(1); a.length;) { var c = a.shift(), d; for (d in c) Vc(c, d) && (b[d] = c[d]); Vc(c, "toString") && (b.toString = c.toString) } return b } function Qe(a) {
        var b = [], c; for (c in a) Vc(a,
          c) && b.push(c); return b
      } function wh(a, b) { return 1 <= Re(Ca(a), b).length } function Re(a, b) { return Ub(function (c, d, e) { a(d, e) && c.push(d); return c }, [], b) } function Vc(a, b) { return oa(a) ? !1 : Wc.call(a, b) } function ta(a) { if (sb) return sb(a); (sb = Fa(Array.isArray, "isArray")) || (sb = xh); return sb(a) } function t() { var a = V(arguments), b = a.shift(); return function () { var c = b.apply(void 0, arguments); return C(Se, c, a) } } function yh(a, b) {
        void 0 === b && (b = {}); if (!a || 1 > a.length) return b; C(function (c, d, e) {
          if (e === a.length - 1) return c;
          e === a.length - 2 ? c[d] = a[e + 1] : c[d] || (c[d] = {}); return c[d]
        }, b, a); return b
      } function n(a, b) { return a ? C(function (c, d) { if (oa(c)) return c; try { return c[d] } catch (e) { } return null }, a, b.split(".")) : null } function mc(a, b) { return O([a, b], C) } function ba(a, b) { return E(b[a], b) } function x(a, b) { return O([a], b) } function O(a, b) { return E.apply(void 0, da([b, null], a)) } function zh() {
        var a = V(arguments), b = a[0], c = a[1], d = a.slice(2); return function () {
          var e = da(d, V(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(b,
            da([c], e)); if (c) { for (var f = "_b"; c[f];)f += "_" + f.length; c[f] = b; e = c[f] && Te(f, e, c); delete c[f]; return e } return Te(b, e)
        }
      } function Te(a, b, c) { void 0 === b && (b = []); c = c || {}; var d = b.length, e = a; S(e) && (e = "d", c[e] = a); var f; d ? 1 === d ? f = c[e](b[0]) : 2 === d ? f = c[e](b[0], b[1]) : 3 === d ? f = c[e](b[0], b[1], b[2]) : 4 === d && (f = c[e](b[0], b[1], b[2], b[3])) : f = c[e](); return f } function Ub(a, b, c) { for (var d = 0, e = c.length; d < e;)b = a(b, c[d], d), d += 1; return b } function Ue(a) { return !Ma(a) && !U(a) && "[object Object]" === nc(a) } function oa(a) {
        return U(a) ||
          Ma(a)
      } function S(a) { return "function" === typeof a } function Kc(a) { return X(function (b, c) { return a(c, b) }) } function X() { var a = V(arguments), b = a.shift(); return function () { var c = V(arguments); return b.length > c.length + a.length ? X.apply(void 0, da([b], a, c)) : b.apply(void 0, da(a, c)) } } function Vb(a) { return function (b) { return function (c) { return a(c, b) } } } function xa(a) { return function (b) { return function (c) { return a(b, c) } } } function Se(a, b) { return b(a) } function Ah(a, b) {
        for (var c = "", d = 0; d < b.length; d += 1)c += "" + (d ? a : "") +
          b[d]; return c
      } function V(a) { if (Rb) try { return Rb(a) } catch (b) { } return Ne(a) } function Ne(a) { for (var b = a.length, c = [], d = 0; d < b; d += 1)c.push(a[d]); return c } function Xc(a, b) { Xc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) { for (var e in d) d.hasOwnProperty(e) && (c[e] = d[e]) }; return Xc(a, b) } function bg(a) {
        return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g,
          "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
      } function Hd(a, b) { if (a) { var c = ("" + a).replace(Rd, ""); return b && c.length > b ? c.substr(0, b) : c } return "" } function ib(a) { return "string" === typeof a } function nc(a) { return Object.prototype.toString.call(a) } function Fa(a, b) { return Aa(b, a) && a } function Aa(a, b) { var c = Wb(a, b); b && !c && Yc.push([a, b]); return c } function Wb(a, b) {
        if (!b || "function" !== typeof b) return !1; var c = new RegExp("function\\s*(" + a + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}",
          "i"); try { return c.test("" + b) } catch (d) { } return !1
      } function H() { } function Ve(a, b) { function c() { this.constructor = a } Xc(a, b); a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c) } function da() { for (var a = 0, b = 0, c = arguments.length; b < c; b++)a += arguments[b].length; a = Array(a); var d = 0; for (b = 0; b < c; b++)for (var e = arguments[b], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function Zc(a) {
        a = "" + a; for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1)b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24); return b >>>
          0
      } function Mb(a, b) { if (!b) return null; try { return a.JSON.parse(b) } catch (c) { return null } } function Xb(a, b, c, d, e, f) { var g = Nb; if (F(b, ["gdpr", "gdpr_popup", "metrika_enabled"])) g = !0; else { var h = Gb(a); h = yc(h); g = g(a, "gdpr"); g = R(Oa(Bh), h).length ? !0 : F(g, [Ya, Ch]) } if (g) { b = [b + "=" + encodeURIComponent(c)]; d && (c = new Date, c.setTime(c.getTime() + 6E4 * d), b.push("expires=" + c.toUTCString())); e && (d = e.replace(Dh, ""), b.push("domain=" + d)); b.push("path=" + (f || "/")); f = B(";", b); try { a.document.cookie = f } catch (k) { } } } function Bb(a, b, c) {
        void 0 ===
          b && (b = "_ym_"); void 0 === c && (c = ""); var d = Eh(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = c ? "_" + c : ""; return { oa: function (g, h, k) { Xb(a, "" + b + g + f, "", -100, h || e, k); return this }, l: function (g) { return Nb(a, "" + b + g + f) }, m: function (g, h, k, l, m) { Xb(a, "" + b + g + f, h, k, l || e, m); return this } }
      } function pc(a, b) {
        var c = Fh(a); return c ? (c.href = b, { protocol: c.protocol, host: c.host, port: c.port, hostname: c.hostname, hash: c.hash, search: c.search, query: c.search.replace(/^\?/, ""), pathname: c.pathname || "/", path: (c.pathname || "/") + c.search, href: c.href }) :
          {}
      } function tb(a, b, c) { var d = b.getAttribute("itemtype"); c = Pc('[itemprop~="' + c + '"]', a, b); return d ? R(function (e) { return e.parentNode && Qc("[itemtype]", a, e.parentNode) === b }, c) : c } function fa(a, b, c) { return (a = tb(a, b, c)) && a.length ? a[0] : null } function ha(a) { if (!a) return ""; a = ta(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || a[0].innerText || "" : "" } function We(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : ha(a) : "" } function Gh(a, b) {
        if ($c(a)) return La(a, b); ad[b] = !0; return La(a,
          Yb[b] || 0)
      } function Hh(a, b, c) {
        function d() { ad[v] = !0; f(!1); b() } function e() { La(a, Yb[v]); if (ad[v]) f(!1); else { var P = Math.max(0, c - (m ? p : p + h(G) - q)); P ? Yb[v] = ja(a, d, P, "u.t.d.c") : d() } } function f(P) { A(function (ma) { var Ga = ma[0], qa = ma[1]; ma = ma[2]; P ? u.B(Ga, qa, ma) : u.Ea(Ga, qa, ma) }, ka) } var g = x(!1, f); if ($c(a)) return { id: ja(a, b, c, "u.t.d"), pb: g }; var h = Q(a), k = !1, l = !1, m = !0, p = 0, q = h(G), u = Ta(a), v = Xe; Xe += 1; Yb[v] = 0; var ka = [[a, ["blur"], function () { m = k = l = !0; p += h(G) - q; q = h(G); e() }], [a, ["focus"], function () {
          k || l || (p = 0); q = h(G); k = l =
            !0; m = !1; e()
        }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () { l || (k = !0, m = !1, l = !0, e()) }]]; f(!0); e(); return { id: v, pb: g }
      } function Ye(a, b, c) { return function () { var d = Na(a, b), e = V(arguments); if (d) return c.apply(void 0, e) } } function Ih(a, b, c) { return function () { var d = Na(a, b), e = V(arguments); c.apply(void 0, e); return d } } function Jh(a, b, c, d) {
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++)e[f] = arguments[f]; f = Kh(function (g) { return !1 === g }, e); return 0 < e.length && f || !c.length || !d ? d : t.apply(void 0,
            C(function (g, h, k) { return !1 === e[k] ? g : g.concat(function () { for (var l = [], m = 0; m < arguments.length; m++)l[m] = arguments[m]; return h.apply(void 0, da([a, b], l)) }) }, [], c))(d)
        }
      } var nb = { construct: "Metrika2", callbackPostfix: "2", version: "cw6wjz0t7d360thr0g" }, Yc = [], Ze = Fa(String.prototype.indexOf, "indexOf"), Rd = /^\s+|\s+$/g, Rb = Fa(Array.from, "from"), $e = Fa(Array.prototype.join, "join"), B = $e ? function (a, b) { return $e.call(b, a) } : Ah, Ca = xa(function (a, b) { return a === b }), bd = xa(function (a, b) { a(b); return b }), He = xa(B), na = xa(Se), Ma =
        Ca(null), U = Ca(void 0), af = Fa(Function.prototype.bind, "bind"), E = af ? function () { var a = V(arguments); return af.apply(a[0], da([a[1]], a.slice(2))) } : zh, Pd = xa(O), bf = Fa(Array.prototype.reduce, "reduce"), C = bf ? function (a, b, c) { return bf.call(c, a, b) } : Ub, N = Vb(n), Dd = N("length"), Ae = t, sb, xh = t(nc, Ca("[object Array]")), Wc = Object.prototype.hasOwnProperty, ua = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : th, W = Object.keys ? Object.keys : Qe, y = Object.assign || vh, Lh = xa(function (a, b) { return y({}, a, b) }), Uc, Pe = Pb(window),
        Mh = Vb(Pe), T = r(function (a) { a = a.Ya = a.Ya || {}; var b = a._metrika = a._metrika || {}; return { V: function (c, d) { Wc.call(b, c) || (b[c] = d); return this }, m: function (c, d) { b[c] = d; return this }, l: function (c, d) { var e = b[c]; return Wc.call(b, c) || U(d) ? e : d } } }), Kh = Array.prototype.every ? function (a, b) { return Array.prototype.every.call(b, a) } : function (a, b) { return C(function (c, d) { return c ? a(d) : !1 }, !0, b) }, cf = Fa(Array.prototype.filter, "filter"), R = cf ? function (a, b) { return cf.call(b, a) } : Re, cd = xa(R), tc = Sb(function (a, b) {
          return Array.prototype.find.call(b,
            a)
        }, function (a, b) { for (var c = 0; c < b.length; c += 1)if (a.call(b, b[c], c)) return b[c] }, Aa("find", Array.prototype.find)), F = Array.prototype.includes ? function (a, b) { return Array.prototype.includes.call(b, a) } : wh, Oa = Vb(F), df = r(function (a) { a = n(a, "navigator") || {}; var b = n(a, "userAgent") || ""; return { zb: -1 < (n(a, "vendor") || "").indexOf("Apple"), Vb: b } }), Oe = r(function (a) { var b = n(a, "document.documentElement.style"); a = n(a, "InstallTrigger"); return !(!(b && "MozAppearance" in b) || oa(a)) }), ef = Fa(Array.prototype.map, "map"), z = ef &&
          rh(window, Array.prototype.map) ? function (a, b) { return b && 0 < b.length ? ef.call(b, a) : [] } : uh, A = z, qb = xa(z), fh = Vb(z), Od = Sb(function (a, b) { return Array.prototype.some.call(b, a) }, function (a, b) { for (var c = 0; c < b.length; c += 1)if (c in b && a.call(b, b[c], c)) return !0; return !1 }, Aa("some", Array.prototype.some)), dd = r(Pb), Nh = r(t(N("String.fromCharCode"), x("fromCharCode", Aa), mb)), Zb = r(N("navigator.userAgent")), Oh = r(t(Zb, ba("test", /ipad|iphone|ipod/i))), ff = r(function (a) { return n(a, "navigator.platform") || "" }), ug = r(function (a) {
            a =
              df(a); var b = a.Vb; return a.zb && (!b.match(/Safari/) && b.match(/Mobile/) || b.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== b.indexOf("FB_IAB") || -1 !== b.indexOf("FBAV") || -1 !== b.indexOf("OKApp") || -1 !== b.indexOf("GSA/"))
          }), gf = r(function (a) { a = df(a); var b = a.Vb; return a.zb && !b.match("CriOS") }), vg = r(t(Zb, ba("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))), Ph =
          r(function (a) { var b = (Zb(a) || "").toLowerCase(); a = ff(a); return !(-1 === b.indexOf("android") || -1 === b.indexOf(b, "mobile") || !/^android|linux armv/i.test(a)) }), Qh = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), Rh = r(function (a) { var b = n(a, "navigator.connection.type"); if (U(b)) return null; a = dd(a)(b, Qh); return -1 === a ? b : "" + a }), $c = r(t(N("document.addEventListener"), mb)), hf = r(function (a) {
            var b = n(a, "navigator") || {}; return C(function (c, d) { return c || n(b, d) }, "", ["language", "userLanguage",
              "browserLanguage", "systemLanguage"])
          }), Sd = r(function (a) { var b = n(a, "navigator") || {}; a = hf(a); ib(a) || (a = "", b = n(b, "languages.0"), ib(b) && (a = b)); return a.toLowerCase().split("-")[0] }), jb = r(function (a) { var b = !1; try { b = a.top !== a } catch (c) { } return b }), Sh = r(function (a) { var b = !1; try { b = a.top.contentWindow } catch (c) { } return b }), Th = r(function (a) { var b = !1; try { b = a.navigator.javaEnabled() } catch (c) { } return b }), Uh = new RegExp(B("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
            "\\$&")), wg = r(t(N("navigator.userAgent"), ba("test", Uh))), Vh = r(function (a) { var b = Zb(a) || "", c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/); c = c ? [+c[1], +c[2]] : [0, 0]; b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (b ? +b[1] : 0) ? !0 : (Oh(a) || 10 < c[0] || 10 === c[0] && 13 <= c[1]) && gf(a) }), Wh = nb.construct, ed = $c(window), Xh = ed ? 512 : 2048, Yh = ed ? 512 : 2048, Pg = ed ? 100 : 400, Ha = { id: "id", Wb: "ut", H: "type", Ta: "ldc", Va: "nck", Ma: "url", mc: "referrer" }, Zh = /^\d+$/, fd = {
              id: function (a) {
                a = "" + (a || "0"); Zh.test(a) || (a = "0"); try { var b = parseInt(a, 10) } catch (c) {
                  b =
                    0
                } return b
              }, H: function (a) { return "" + (a || 0 === a ? a : "0") }, Va: Boolean, Wb: Boolean
            }; Ha.ma = "defer"; fd.ma = Boolean; Ha.fd = "yaDisableGDPR"; Ha.gd = "yaGDPRLang"; Ha.exp = "experiments"; Ha.Ja = "ecommerce"; fd.Ja = function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }; Ha.C = "params"; Ha.Fa = "accurateTrackBounce"; Ha.Ca = "trackLinks"; var $h = C(function (a, b) { var c = b[0]; a[c] = { Ec: b[1], Bc: fd[c] }; return a }, {}, ua(Ha)), wa = {}, M = r(function (a) { return a.id + ":" + a.H }), Y = Ke(function (a) {
              var b = ""; a = C(function (c, d) {
                var e = d[0], f = "" + e + ":" + d[1]; "t" === e ?
                  b = f : c.push(f); return c
              }, [], ua(a)); b && a.push(b); return B(":", a)
            }), ph = "hash host hostname href pathname port protocol search".split(" "), oe = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "), og = r(function (a) { a = L(a).hostname.split("."); return a[a.length - 1] }), jf = r(function (a) { return -1 !== L(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), Jd = r(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), ai = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
              uc = r(function (a) { a = L(a).hostname; var b = !1; a && (b = -1 !== a.search(ai)); return b }), bi = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, Uf = r(function (a) { a = L(a).hostname; var b = !1; a && (b = -1 !== a.search(bi)); return b }), ci = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/, di = r(function (a) { a = L(a).hostname; var b = !1; a && (b = -1 !== a.search(ci)); return b }), ei = r(function (a) {
                var b = !1; if (!a.addEventListener) return b; try {
                  var c = Object.defineProperty({},
                    "passive", { get: function () { b = !0; return 1 } }); a.addEventListener("test", H, c)
                } catch (d) { } return b
              }), fi = xa(function (a, b) { return a ? y({ capture: !0, passive: !0 }, b || {}) : !!b }), Ta = r(function (a) { a = ei(a); var b = fi(a), c = {}; return y(c, { B: function (d, e, f, g) { A(function (h) { var k = b(g); Je(d, h, f, k, !1) }, e); return E(c.Ea, c, d, e, f, g) }, Ea: function (d, e, f, g) { A(function (h) { var k = b(g); Je(d, h, f, k, !0) }, e) } }) }), K = window.Promise, hh = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], ih =
                ba("test", /^http./), gh = ba("test", /^err.kn/), mh = /[^a-z0-9.:-]/, nh = X(function (a, b, c) { var d, e = new a.XMLHttpRequest, f = c.D, g = y(c.Yb ? (d = {}, d.wmode = "7", d) : {}, c.Za); return new K(function (h, k) { e.open(c.Xb || "GET", b + "?" + Ge(g), !0); e.withCredentials = !1 !== c.ed; c.gb && (e.timeout = c.gb); Ae(ua, qb(function (m) { e.setRequestHeader(m[0], m[1]) }))(c.fa); var l = X(oh)(a, e, Ja(c.P), c.Yb, c.Kc, h, k); e.onreadystatechange = l; try { e.send(f) } catch (m) { } }) }), gi = r(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }),
              Oc = r(t(N("document"), x("createElement", $a))), lh = r(function (a) { var b = n(a, "Element.prototype"); return b ? (a = tc(function (c) { return Aa(c, b[c]) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? b[a] : null : null }), kh = X(function (a, b, c, d) {
                return new K(function (e, f) {
                  var g = Rc(a), h = b("img"), k = t(x(h, Fe), x(Ja(d.P), f)), l = Jc(a, k, d.gb || 3E3); h.onerror = k; h.onload = t(x(h, Fe), x(null, e), O([a, l], La)); l = y({}, d.Za); delete l.wmode; k = c; (l = Ge(l)) && (k += "?" + l); d.D && (k += (l ? "&" : "?") +
                    d.D); h.src = k; gf(a) && (y(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h))
                })
              }), jh = Ke(function (a) { a = ua(a); return B("", z(function (b) { var c = b[0]; b = b[1]; return Ma(b) ? "" : c + "(" + b + ")" }, a)) }), ub; var pb = [0, 0, rb, 0, Nc]; var kf = ob([rb]), $b = ob([Nc]), ac = ob([0, rb, 0, Nc]); var ca = (ub = {}, ub.h = kf, ub.f = kf, ub.er = $b, ub); ca.d = $b; ca.s = ob([rb]); ca.S = ca.s; ca.u = $b; ca["2"] = pb; ca.a = ac; ca.n = pb; ca.p = ob([0, rb]); ca.r = ac; ca["1"] = ac; ca.g = ac; ca.c = $b; ca.e = pb; var Mc = r(function (a, b) {
                var c; (c = b ? ca[b] :
                  pb) || (c = []); c = C(function (d, e, f) { (e = e && e(a)) && d.push([f, e]); return d }, [], c); c.length || Ie(); return c
              }, Da), Ka = ["0", "1", "2", "3"], Ya = Ka[0], vc = Ka[1], Ch = Ka[2], Ac = z(t(J, ba("concat", "GDPR-ok-view-detailed-")), Ka), Hb = da("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Ac, ["28", "29", "30"]), Bh = "3 13 14 15 16 17 28".split(" "), yc = t(qb(N("ymetrikaEvent.type")), cd(Oa(Hb))), Dh = /:\d+$/, Eh = r(function (a) {
                var b = (L(a).host ||
                  "").split("."); return 1 === b.length ? b[0] : C(function (c, d, e) { e += 1; 2 <= e && !c && (e = B(".", b.slice(-e)), Xb(a, "metrika_enabled", "1", 0, e, void 0), (d = Nb(a, "metrika_enabled")) && Xb(a, "metrika_enabled", "", -100, e, void 0), d && (c = e)); return c }, "", b)
              }), Fb = r(Bb), ch = r(function (a) { ye(a, "_ymBRC", "1"); var b = "1" !== xe(a, "_ymBRC"); b || ze(a, "_ymBRC"); return b }), Ea = r(we), vb = r(we, function (a, b, c) { return "" + b + c }), Q = r(ee), hi = Tc("r", function (a, b) { var c = te(a, b), d = c[0]; return !c[1] && d }), Zd = r(function (a, b) {
                var c = b.Ta, d = c || "uid"; c = c ? a.location.hostname :
                  void 0; var e = Fb(a), f = Ea(a), g = Q(a), h = g(Lb), k = te(a, b), l = k[0]; k = k[1]; var m = e.l("d"); hi(a, b); var p = !1; !k && l && (k = l, p = !0); if (!k) k = B("", [g(Lb), Ra(a)]), p = !0; else if (!m || 15768E3 < h - parseInt(m, 10)) p = !0; p && !b.Va && (e.m(d, k, 525600, c), e.m("d", "" + h, 525600, c)); f.m(d, k); return k
              }, function (a, b) { return "{" + b.Ta + b.Va }), Yg = X(function (a, b) { for (var c = []; !Kb(b);) { var d = $g(b); a(d, function (e) { return e(b) }); c.push(d) } return c }), fb = X(function (a, b, c) { return c(a, b) }), Fh = r(function (a) { if (a = Oc(a)) return a("a") }), me = ["webkitvisibilitychange",
                "visibilitychange"], bc = O([1, null], Sb); O([1, 0], Sb); var je = r(function () { return { sb: null, sa: [] } }, M), ra, ii = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], ie = (ra =
                  {}, ra.responseEnd = 1, ra.domInteractive = 1, ra.domContentLoadedEventStart = 1, ra.domContentLoadedEventEnd = 1, ra.domComplete = 1, ra.loadEventStart = 1, ra.loadEventEnd = 1, ra.unloadEventStart = 1, ra.unloadEventEnd = 1, ra.secureConnectionStart = 1, ra), ji = r(Tb), gd = r(function (a) { a = n(a, "console"); var b = n(a, "log"); b = Wb("log", b) ? E(b, a) : H; var c = n(a, "warn"); c = Wb("warn", c) ? E(c, a) : b; var d = n(a, "error"); a = Wb("error", d) ? E(d, a) : b; return { log: b, error: a, warn: c } }), lf = /\/$/, ki = r(t(Q, na(function (a) { return -(new a.b.Date).getTimezoneOffset() }))),
                  li = t(Q, na(function (a) { a = new a.b.Date; return B("", z(bh, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })), mi = t(Q, na(Lb)), ni = r(t(Q, na(function (a) { return a.N[0] }))), oi = r(Sc), pi = r(function (a) { return S(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null }), qi = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a,
                    b) { return n(b, "redirectCount") || n(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], ri = r(Tb), D, si = r(function (a) { a = T(a); var b = a.l("counterNum", 0) + 1; a.m("counterNum", b); return b }, t(Da, M)), Sa = (D = {}, D.vf = x(nb.version, J), D.nt = Rh, D.fp = function (a, b, c) {
                      if (c.o && c.o.nohit) return null;
                      b = M(b); c = oi(a); if (c[b]) return null; a: { var d = ni(a), e = n(a, "performance.getEntriesByType"); if (S(e)) { if (a = R(t(J, N("name"), Ca("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else { e = n(a, "chrome.loadTimes"); if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0 } return a ? (c[b] = a, Math.round(a)) : null
                    }, D.fu = function (a, b, c) {
                      var d = c.o; if (!d) return null; b = (n(a, "document.referrer") ||
                        "").replace(lf, ""); c = (d["page-ref"] || "").replace(lf, ""); d = d["page-url"]; a = L(a).href !== d; b = b !== c; c = 0; a && b ? c = 3 : b ? c = 1 : a && (c = 2); return c
                    }, D.en = gi, D.la = hf, D.ut = function (a, b, c) { var d = c.wa; (c = c.o) && (di(a) || b.Wb || d) && (c.ut = "noindex"); return null }, D.v = x("720", J), D.cn = si, D.dp = function (a) {
                      var b = T(a), c = b.l("bt", {}); if (U(b.l("bt"))) { var d = n(a, "navigator.getBattery"); try { c.p = d ? d.call(a.navigator) : null } catch (e) { } b.m("bt", c); c.p && c.p.then && c.p.then(function (e) { c.dd = e.charging && 0 === e.chargingTime }) } return c.dd ? "1" :
                        "0"
                    }, D.ls = r(function (a, b) { var c = vb(a, b.id), d = Q(a), e = c.l("lsid"); return +e ? e : (d = Ra(a, 0, d(G)), c.m("lsid", d), d) }, Da), D.hid = Za, D.z = ki, D.i = li, D.et = mi, D.c = t(N("navigator.cookieEnabled"), bc), D.rn = t(J, Ra), D.rqn = function (a, b, c) { c = c.o; if (!c || c.nohit) return null; a = vb(a, b.id); b = (a.l("reqNum", 0) || 0) + 1; a.m("reqNum", b); if (a.l("reqNum") === b) return b; a.oa("reqNum"); return null }, D.u = Zd, D.tp = t(Da, Me, bc), D.tpid = t(Da, function (a) { a = M(a); return wa[a] && wa[a].Uc || null }), D.w = function (a) { a = Ce(a); return a[0] + "x" + a[1] }, D.s = function (a) {
                      var b =
                        n(a, "screen"); if (b) { a = n(b, "width"); var c = n(b, "height"); b = n(b, "colorDepth") || n(b, "pixelDepth"); return B("x", [a, c, b]) } return null
                    }, D.sk = N("devicePixelRatio"), D.ifr = t(jb, bc), D.j = t(Th, bc), D.sti = function (a) { return jb(a) ? Sh(a) ? "1" : null : null }, D), fe = {}; Sa.ds = function (a, b, c) { c = c.o; if ((void 0 === c ? {} : c).nohit) return null; a = Lc(a); b = M(b); if (!a) return null; c = n(a, "timing"); if (!c) return null; a = he(a, c, qi); b = ri(b); return (b = ge(b, a)) && B(",", b) }; Sa.dsn = function (a, b, c) {
                      c = c.o; if ((void 0 === c ? {} : c).nohit) return null; a = Lc(a);
                      b = M(b); if (!a) return null; c = null; if (S(a.getEntriesByType)) { var d = n(a.getEntriesByType("navigation"), "0"); d && (c = d) } if (!c) return null; a = he(a, c, ii); b = ji(b); return (b = ge(b, a)) && B(",", b)
                    }; Sa.bu = pi; Sa.td = t(Da, function (a) { a = M(a); return wa[a] && wa[a].Xc || null }); var ti = W(Sa), ui = W(fe), Qg = ti.concat(ui), Jb = r(function () { return { ea: {}, pending: {}, Z: {} } }), hd = N("postMessage"), vi = X(function (a, b, c, d) {
                      var e, f = { Ha: Q(a)(G), key: a.Math.random(), dir: 0 }; c.length && (f.Ha = parseInt(c[0], 10), f.key = parseFloat(c[1]), f.dir = parseInt(c[2],
                        10)); y(d, b); b = (e = { data: d }, e.__yminfo = B(":", ["__yminfo", f.Ha, f.key, f.dir]), e); return { M: f, Rb: Ba(a, b) || "" }
                    }), wi = X(function (a, b, c, d, e) { b = b(d); var f = Jb(a), g = B(":", [b.M.Ha, b.M.key]); if (hd(c)) { f.pending[g] = e; try { c.postMessage(b.Rb, "*") } catch (h) { delete f.pending[g]; return } ja(a, function () { delete f.pending[g] }, 5E3, "if.s") } }), xi = I("s.f", wi), yi = X(function (a, b, c, d, e, f) {
                      var g = null, h = null, k = Jb(a), l = null; try { g = Mb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!oa(h) && h.substring && "__yminfo" === h.substring(0, 8) &&
                        !oa(l) && (g = h.split(":"), 4 === g.length)) if (h = b.id, b = g[1], a = g[2], g = g[3], !ta(l) && l.type && "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !Ma(k) && hd(k) && (f = d.F(l.type, [f, l]), e = z(t(J, Lh(e)), f.concat([{}])), l = c([b, a, l.counterId], e), k.postMessage(l.Rb, "*")) } } else g === "" + h && ta(l) && R(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length && (c = k.pending[B(":", [b, a])]) && c.apply(null, [f].concat(l))
                    }), zi = I("s.fh", yi), Hg = r(function (a, b) {
                      var c, d = $a("getElementsByTagName",
                        n(a, "document")), e = Jb(a), f = hd(a), g = Hc(a), h = Ta(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (c = {}, c.counterId = b.id, c.hid = "" + Za(a), c); Og(a, g); c = vi(a, f); var k = xi(a, c([])); A(function (l) { var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" }, function (p, q) { g.F("initToParent", [p, q]) }) }, d); jb(a) && k(a.parent, { type: "initToParent" }, function (l, m) { g.F("parentConnect", [l, m]) }); h.B(a, ["message"], zi(a, b, c, g, f)); return { J: g, ea: e.ea, Z: e.Z, Mb: k }
                    }, t(Da, M)), Ng = X(function (a, b, c) {
                      var d = c[a]; d ?
                        (d.Hc = b, d.Jb = !0, d.Ib ? d.Ib(b) : d.Xa = K.resolve(b)) : c[a] = { Xa: K.resolve(b), Hc: b, Jb: !0 }
                    }), Lg = X(function (a, b) { if (!b[a]) { var c, d = new K(function (e) { c = e }); b[a] = { Ib: c, Xa: d, Jb: !1 } } return b[a].Xa }), de = r(t(Sc, na)), kb = Tc("retryReqs", function (a) { return Ea(a).l("retryReqs", {}) }), Kg = ["0"], Cf = I("g.r", function (a) {
                      var b = Q(a), c = kb(a), d = b(G), e = Za(a); return C(function (f, g) {
                        var h = g[0], k = g[1]; k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({
                          protocol: k.protocol, host: k.host,
                          Jc: k.resource, Fc: k.postParams, C: k.params, $b: k.browserInfo, wd: k.ghid, time: k.time, ha: parseInt(h, 10), dc: k.counterId, H: k.counterType
                        })); return f
                      }, [], ua(c))
                    }), wc = [], Ig = X(function (a, b, c, d, e) {
                      return (new K(function (f, g) { var h = W(c), k = t(d.resolve ? d.resolve : J, bd(f)), l = t(d.reject ? d.reject : J, bd(g)); d.resolve = k; d.reject = l; A(function (m) { var p; d.jb.push(m); var q = c[m], u = ja(a, x(Ja(), l), 5100, "is.m"); b(q.window, y(e, (p = {}, p.toCounter = parseInt(m, 10), p)), function (v, ka) { La(a, u); d.Ob.push(m); d.resolve && d.resolve(ka) }) }, h) }))["catch"](w(a,
                        "if.b"))
                    }), Jg = X(function (a, b, c) { b = R(function (d) { return !F(c.info.counterId, d.jb) }, b); A(function (d) { var e; c.info.counterId && a((e = {}, e[c.info.counterId] = c, e), d, d.data) }, b) }), zc = r($d, t(Da, M)), Gg = "ru en et fi lt lv pl fr no sr".split(" "), Ia, Cg = (Ia = {}, Ia["GDPR-ok"] = "ok", Ia["GDPR-ok-view-default"] = "ok-default", Ia["GDPR-ok-view-detailed"] = "ok-detailed", Ia["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Ia["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Ia["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
                      Ia["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Ia), Ib = [], Td = t(yc, qb(Mh(Hb)), He(",")), Vd = t(cd(Oa(Hb)), Dd, Boolean), tg = r(function (a, b) { var c = b.l("gdpr"); return F(c, Ka) ? "-" + c : "" }), mf = r(Tb), sa, ia, pg = (sa = {}, sa.am = "com.am", sa.tr = "com.tr", sa.ge = "com.ge", sa.il = "co.il", sa["\u0440\u0444"] = "ru", sa["xn--p1ai"] = "ru", sa["\u0443\u043a\u0440"] = "ua", sa["xn--j1amh"] = "ua", sa["\u0431\u0435\u043b"] = "by", sa["xn--90ais"] = "by", sa), cc = "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0".split(" "), nf =
                        { "an.yandex.ru/mapuid/google/?partner-tag=yandex_llc": { na: cc }, "an.yandex.ru/mapuid/google/?partner-tag=yandexcom": { na: cc }, "an.yandex.ru/mapuid/google/?partner-tag=yandexru": { na: cc }, "mc.edadeal.ru": { ya: /^([^/]+\.)?edadeal\.ru$/, Sb: "ru" }, "mc.yandexsport.ru": { ya: /^([^/]+\.)?yandexsport\.ru$/, Sb: "ru" }, "mc.kinopoisk.ru": { ya: /^([^/]+\.)?kinopoisk\.ru$/, Sb: "ru" } }, rg = (ia = {}, ia.ka = "ge", ia.ro = "md", ia.tg = "tj", ia.tk = "tm", ia.et = "ee", ia.hy = "com.am", ia.he = "co.li", ia.ky = "kg", ia.uk = "ua", ia.be = "by", ia.tr = "com.tr",
                          ia.kk = "kz", ia), of = r(Tb), Ai = r(function (a) { var b = t(cd(t(J, Ca("ru"), mb)), mc(function (c, d) { c[d] = ["mc.yandex." + d]; return c }, {}))(oe); A(function (c) { var d = c[0]; c = c[1]; if (!c.na || F(a, c.na)) b[d] = [d] }, ua(nf)); return b }), Bi = r(function (a) { var b = L(a).hostname; return C(function (c, d) { var e = d[0], f = d[1]; f.ya && !f.ya.test(b) || c.push(e); return c }, [], ua(nf)) }), Ci = xa(function (a, b) {
                            var c = jf(b), d = qg(b), e = Bi(b) || [ng(b)], f = Q(b), g = Ea(b), h = g.l("synced", {}); c = c ? e.concat(d) : e; h && (c = R(function (k) {
                              var l = (h[k] || 1) + 1440 < f(Wa); l && delete h[k];
                              return l
                            }, c)); g.m("synced", h); return C(function (k, l) { A(function (m) { var p = { domain: m, zc: l }, q; if (q = m) { if (Ze) m = Ze.call(m, "/"); else a: { q = 0; for (var u = m.length - 1, v = 0; v < m.length; v += 1) { q = m[v] === "/"[q] ? q + 1 : 0; if (1 === q) { m = v - 1 + 1; break a } if (!q && v > u) break } m = -1 } q = -1 !== m } q && (p.rc = 1); k.push(p) }, a[l] || []); return k }, [], c)
                          }), Di = function (a, b) {
                            return function (c, d, e) {
                              d = M(e); e = Ai(d); var f = Ci(e), g = F(d, cc); return Vh(c) || Oe(c) ? {} : {
                                I: function (h, k) {
                                  var l = h.A, m = T(c); if (!jf(c) && !g || jb(c) || !l || !l.l("pv")) return k(); l = f(c); if (!l.length) return k();
                                  if (m.l("startSync")) of(c).push(k); else { m.m("startSync", !0); if (g) return a(c, l).then(k, k); m = wc[0]; if (!m) return k(); m(c).then(O([c, l], a)).then(k, t(bd(k), w(c, b)))["catch"](H) }
                                }
                              }
                            }
                          }(function (a, b) {
                            var c = Q(a), d = T(a), e = Ea(a), f = Mc(a, "c"), g = lb(a, f); return C(function (h, k) {
                              function l() { var q = e.l("synced"); d.m("startSync", !1); q && (q[k.zc] = p, e.m("synced", q)); A(pa, of(a)) } var m = g({ P: ["sync.cook"] }, ["https://" + k.domain + (k.rc ? "" : "/sync_cookie_image_check")], { gb: 1500 }), p; m.then(function () { p = c(Wa); l() })["catch"](function () {
                                p =
                                  c(Wa) - 1435; l()
                              }); m = x(m, J); return h.then(m)
                            }, K.resolve(""), b)["catch"](w(a, "ctl"))
                          }, "sy.c"), mg = /^[a-z][\w.+-]+:/i, pf = {}, dc, va = [ke, Ec, ab(), Dc], Ei = ab("et w v z i u vf".split(" ")); va.push(Di); va.unshift(function (a, b, c) {
                            return {
                              I: function (d, e) { if (d.C && (Le(c, d.C), !d.D && d.A && d.o)) { var f = Ba(a, d.C), g = mf(a), h = d.A.l("pv"); f && !d.o.nohit && (h ? encodeURIComponent(f).length > Yh ? g.push([d.A, d.C]) : d.o["site-info"] = f : (d.D = f, d.Ac = !0)) } e() }, Y: function (d, e) {
                                var f = mf(a), g = Na(a, c), h = g && g.params; h && (g = R(t(N("0"), Ca(d.A)), f),
                                  A(function (k) { h(k[1]); k = dd(a)(k, f); f.splice(k, 1) }, g)); e()
                              }
                            }
                          }); va.push(Bc()); var ea = (dc = {}, dc.h = va, dc.er = [], dc), Fi = [ab(), Dc]; ea.f = Fi; ea["2"] = va; ea["1"] = function (a, b) { return R(t(Oa(b), mb), a) }(va, [Dc]); ea.a = va; ea.g = va; ea.e = va; var qf = [Ec]; qf.push(function () { return function (a) { return { I: function (b, c) { var d = b.A, e = void 0 === d ? Y() : d, f = b.ha, g = kb(a); d = e.l("rqnl", 0) + 1; e.m("rqnl", d); if (e = n(g, B(".", [f, "browserInfo"]))) e.rqnl = d, Cc(a); c() }, Y: function (b, c) { ae(a, b); c() } } } }()); ea.r = qf; var id = []; id.push(Ei); id.push(Bc());
      ea.p = id; var rf = [ke, Ec, ab()]; rf.push(Bc()); ea.n = rf; ea.d = [ab(["hid", "u", "v", "vf"])]; ea.s = []; ea.u = []; ea.S = [ab(["v", "hid", "u", "vf", "rn"])]; va.unshift(function (a, b, c) { return { I: function (d, e) { var f = d.A, g = d.o; if (!f || !g) return e(); !pf[c.id] && f.l("pv") && c.exp && !g.nohit && (g.exp = c.exp, pf[c.id] = !0); f = g["page-ref"]; var h = g["page-url"]; f && h !== f ? g["page-ref"] = Qd(a, f) : delete g["page-ref"]; g["page-url"] = Qd(a, h).slice(0, Xh); return e() } } }); var ec, sf = E(K.reject, K, Ja()), Z = (ec = {}, ec.h = la, ec.er = x(sf, J), ec); Z.a = la; Z.p = be;
      Z.f = la; Z.n = la; Z["1"] = la; Z.n = la; Z.c = lb; Z.g = la; Z.e = la; Z["2"] = la; Z.r = function (a, b, c) { var d = be(a, b, c), e = la(a, b, c); return function (f, g, h) { return "webvisor" === h ? d(f, g, f.o["wv-part"]) : e(f, g) } }; Z.s = lb; Z.S = la; Z.u = lb; Z.d = la; var aa = I("g.sen", function (a, b, c) { var d = Mc(a, b); c = jg(a, b, c); var e = Z[b], f = e ? e(a, d, c) : la(a, d, c); return function () { var g = V(arguments), h = g.slice(1); g = y(g[0], { P: [b] }); return f.apply(void 0, da([g], h)) } }, sf), Ld = r(t(N("id"), Oa([26812653])), M), Gi = I("dc.init", function (a) {
        var b = L(a), c = gd(a), d = Fb(a),
          e = Nd(a), f = e.wc; e = e.qc; f && !e && d.m("debug", "1", void 0, b.host); return T(a).l("oo") || !f && !e ? { log: H, warn: H, error: H } : c
      }), Md = r(Gi), Hi = w(window, "h.p", function (a, b) { var c, d, e = aa(a, "h", b), f = b.Ma || "" + L(a).href, g = b.mc || a.document.referrer, h = { A: Y((c = {}, c.pv = 1, c)), o: (d = {}, d["page-url"] = f, d["page-ref"] = g, d) }; h.C = b.C; b.ma && h.o && (h.o.nohit = "1"); return e(h, b).then(function (k) { k && (b.ma || gb(a, b, "PageView. Counter " + b.id + ". URL: " + f + ". Referrer: " + g, b.C)(), re(a, O([a, b, k], Mg))) })["catch"](w(a, "h.g.s")) }), hb = r(Sc, M), Ii =
          I("p.ar", function (a, b) {
            var c = aa(a, "a", b); return function (d, e, f, g, h, k) {
              var l, m, p = { o: {}, A: Y((l = {}, l.pv = 1, l.ar = 1, l)) }; d && (e = Ue(e) ? { title: e.title, Gb: e.referer, C: e.params, T: e.callback, b: e.ctx } : { title: e, Gb: f, C: g, T: h, b: k }, f = hb(b), f.url !== d && (f.ref = f.url, f.url = d), d = d || L(a).href, f = e.Gb || f.ref || a.document.referrer, g = gb(a, b, "PageView. Counter " + b.id + ". URL: " + d + ". Referrer: " + f, e.C), c(y(p, { C: e.C, title: e.title, o: y(p.o, (m = {}, m["page-url"] = d, m["page-ref"] = f, m)) }), b).then(g)["catch"](w(a, "p.ar.s")).then(O([a, e.T ||
                H, e.b], Pa)))
            }
          }), hg = { Td: "stamp", vd: "frameId", M: "meta", od: "base", yd: "hasBase", ld: "address", Wd: "ua", Qd: "prev", Ed: "namespace", Bd: "keystrokes", Ad: "isMeta", Dd: "modifier", Od: "pageWidth", Nd: "pageHeight", Ud: "startNode", ud: "endNode", Yd: "zoomFrom", Zd: "zoomTo", level: "level", duration: "duration", zd: "i", Jd: "o", n: "n", r: "r", sd: "ct", md: "at", Gd: "nm", Hd: "ns", Md: "pa", Pd: "pr", Id: "nx", ba: "h", qd: "changes", kd: "a", nd: "b", pd: "c", Kd: "op" }, ig = ["attributes", "attrs"], tf = function () {
            function a(b) { this.b = b } a.prototype.ia = function (b) {
              var c =
                Eb(b); b = z(E(this.cb, this), c); return Xg(Ba(this.b, z(function (d, e) { var f; return y({}, c[e], (f = {}, f.data = d, f)) }, b)))
            }; a.prototype.cb = function (b) { var c = b.data; "string" !== typeof c && (c = Ba(this.b, Eb(b.data))); return c }; a.prototype.Oa = function (b) { return encodeURIComponent(b).length }; a.prototype.Oc = function (b, c) { for (var d = Math.ceil(b.length / c), e = [], f = 0; f < c; f += 1)e.push(b.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return !!this.b.JSON }; return a
          }(), jd, Ji = (jd = function (a) {
            function b(c, d, e, f) {
              void 0 ===
                f && (f = 0); d = a.call(this, c, d, e) || this; d.ib = 0; d.X = 0; d.hb = 0; d.buffer = []; d.lb = 2E3; d.J = Hc(c); d.eb(); d.hb = f; return d
            } Ve(b, a); b.prototype.ub = function (c) { return R(Boolean, this.J.F("ag", c)) }; b.prototype.tb = function (c, d) { var e = this; c(fb(w(this.b, "wv2.b.st"), function (f) { e.send(f, d) })) }; b.prototype.Pc = function (c, d) { var e = this; La(this.b, this.ob); var f = Math.ceil(this.O.Oa(d) / 63E4), g = this.O.Oc(d, f); A(function (h, k) { var l, m = y({}, c, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l)); l = e.O.ia([m], !1); e.tb(l, [m]) }, g); this.eb() };
            b.prototype.send = function (c, d) { this.J.F("se", d); a.prototype.send.call(this, c, d) }; b.nc = function (c, d, e, f) { b.Ga["" + c + "e"] || (this.Ga.e = new b(f, e, d, 0)); return this.Ga.e }; b.prototype.xc = function () { return this.hb && this.ib >= this.hb }; b.prototype.push = function (c) { var d = this; if (!this.xc()) { this.J.F("p", c); var e = this.O.cb(c), f = this.O.Oa(e); 7E5 < f ? this.Pc(c, e) : (e = this.ub(this.buffer.concat([c])), e = C(function (g, h) { return g + d.O.Oa(d.O.cb(h)) }, 0, e), this.X + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(c), this.X += f) } };
            b.prototype.B = function (c, d) { this.J.B(c, d) }; b.prototype.U = function (c, d) { this.J.U(c, d) }; b.prototype.flush = function () { var c = this.buffer.concat(this.ub(this.buffer)); if (c.length) { this.buffer = []; this.ib += this.X; this.X = 0; var d = this.O.ia(c); this.tb(d, c) } }; return b
          }(function () {
            function a(b, c, d) { this.ob = 0; this.Wa = 1; this.lb = 5E3; this.b = b; this.O = c; this.Nc = d } a.prototype.eb = function () { this.ob = ja(this.b, t(E(this.flush, this), E(this.eb, this)), this.lb, "b.f") }; a.prototype.send = function (b, c) {
              this.Nc(b, c || [], this.Wa);
              this.Wa += 1
            }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a
          }()), jd.Ga = {}, jd), wb, kd = (wb = {}, wb[1] = 500, wb[2] = 500, wb[3] = 0, wb), ld = function (a) {
            function b() {
              var c, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Ab = !0; d.Yc = ba("exec", new RegExp("schema.org\\/(" + B("|", W(d.Tb)) + ")$")); d.Ka = (c = {}, c.id = function (e) { e = e.element; var f = fa(this.b, e, "identifier"); return f ? ha(f) : (f = fa(this.b, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, c.chars = function (e) {
                var f =
                  0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = fa(this.b, e, g[h]); if (k) { f = ha(k).length; break } } 0 === f && e.innerText && (f += e.innerText.length); return f
              }, c.topics = function (e) { var f = this, g = tb(this.b, e.element, "about"); return z(function (h) { var k = { name: ha(h) }; if (g = fa(f.b, h, "name")) k.name = ha(g); return k }, g) }, c.rubric = function (e) {
                var f = this; (e = Qb(this.b, e.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (e = Qb(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]'));
                return e ? z(function (g) { return { name: ha(fa(f.b, g, "name")), position: ha(fa(f.b, g, "position")) } }, tb(this.b, e, "itemListElement")) : []
              }, c.updateDate = function (e) { return (e = fa(this.b, e.element, "dateModified")) ? We(e) : "" }, c.publicationDate = function (e) { return (e = fa(this.b, e.element, "datePublished")) ? We(e) : "" }, c.pageUrlCanonical = function (e) { e = tb(this.b, e.element, "url"); return e.length ? e[0].href ? e[0].href : ha(e) : null }, c.pageTitle = function (e) {
                var f = "", g = e.element, h = fa(this.b, g, "headline"); h && (f += ha(h)); (h = fa(this.b,
                  g, "alternativeHeadline")) && (f += " " + ha(h)); "" === f && ((h = fa(this.b, g, "name")) || (h = fa(this.b, g, "itemReviewed")), h && (f += ha(h))); 3 === e.type && (e = Qc('[itemtype$="schema.org/Question"]', this.b, g)) && (e = fa(this.b, e, "text")) && (f += ha(e)); return f
              }, c.authors = function (e) {
                var f = this; e = tb(this.b, e.element, "author"); return z(function (g) {
                  var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = fa(f.b, g, "name")) && (k.name = ha(h)); k.name || (k.name = g.getAttribute("content") ||
                    g.innerText || g.getAttribute("href")); return k
                }, e)
              }, c); return d
            } Ve(b, a); b.prototype.xb = function (c) { c = c.getAttribute("itemtype") || ""; return (c = this.Yc(c)) ? this.Tb[c[1]] : 1 }; b.prototype.Na = function (c) { return c.element && c.element.innerText && c.element.innerText.length ? a.prototype.Na.call(this, c) : null }; b.prototype.rb = function () { var c = B(",", z(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.Lc["schema.org"])); return Pc(c, this.b, this.root) }; return b
          }(function () {
            function a(b) {
              var c, d = this; this.id = "a";
              this.Ab = !1; this.Ka = {}; this.Lc = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), Ld: ["article"] }; this.Tb = (c = {}, c.Answer = 3, c.Review = 2, c); this.cc = r(function (e, f) { Qa(d.b, "Warning: content has only " + f.chars + " chars. Required " + kd[f.type], f) }); this.b = b; this.root = Rc(b)
            } a.prototype.vb = function (b) { return b.element }; a.prototype.wb = function (b, c) { var d = this, e; w(this.b, "P.s." + c, function () { e = d.Ka[c].call(d, b) })(); return e }; a.prototype.Gc = function (b) {
              var c = y({}, b); this.Ab && !c.id &&
                F(b.type, [3, 2]) && (b = B(", ", z(N("name"), c.authors || [])), c.pageTitle = b + ": " + c.pageTitle); c.pageTitle || (c.pageTitle = this.pc(c.aa)); c.pageUrlCanonical || (b = c.id, c.pageUrlCanonical = ("string" !== typeof b ? 0 : /^(https?:)\/\//.test(b)) ? c.id : this.oc()); c.id || (c.id = c.pageTitle || c.pageUrlCanonical); return c
            }; a.prototype.Na = function (b) {
              var c = this, d = {}, e = this.vb(b); if (!e) return null; d.type = b.type; A(function (g) { d[g] = c.wb(b, g) }, W(this.Ka)); var f = Q(this.b); d.stamp = f(ah); d.element = b.element; d.aa = e; d = this.Gc(d); d.id = d.id ?
                Zc(d.id) : 1; d.update = function (g) { return c.vb(b) ? c.wb(b, g) : void 0 }; return d
            }; a.prototype.pc = function (b) { for (var c = 1; 5 >= c; c += 1) { var d = ha(Qb(this.b, b, "h" + c)); if (d) return d } }; a.prototype.oc = function () { var b = Qb(this.b, this.root, '[rel="canonical"]'); if (b) return b.href }; a.prototype.xb = function () { return 1 }; a.prototype.rb = function () { return [] }; a.prototype.kc = function () {
              var b = this, c = this.rb(), d = 1; return C(function (e, f) {
                var g = b.Na({ element: f, type: b.xb(f) }) || []; ta(g) || (g = [g]); g = C(function (h, k) {
                  var l = h.values, m =
                    h.yb; k && k.chars > kd[k.type] && !F(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= kd[k.type] && b.cc(k.id, k); return { values: l, yb: m }
                }, { values: [], yb: z(N("id"), e) }, g).values; return e.concat(z(function (h) { var k; h = y((k = { index: d, bb: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
              }, [], c)
            }; return a
          }()), uf = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), Ki = function () {
            function a(b, c, d) {
              this.ua = !1; this.M = {}; this.scroll = { x: 0, y: 0 }; this.Qa = this.Eb =
                0; this.Ua = this.Fb = ""; this.G = []; this.Sc = 0; this.W = { ba: 0, kb: 0 }; this.buffer = d; this.ja = E(this.ja, this); this.qa = E(this.qa, this); this.xa = E(this.xa, this); this.b = b; this.za = c; this.Sa = "pai" + c.id; this.Pa(); this.qb = Ta(this.b); this.time = Q(this.b); this.Ub(); this.ra = T(this.b)
            } a.prototype.start = function () {
              var b = this; if (!this.ua) {
                this.buffer.B("ag", this.qa); this.buffer.B("se", this.xa); this.Qc(); var c = this.ra.l(this.Sa, []), d = !c.length; c.push(E(this.yc, this)); this.ra.V(this.Sa, c); d && this.Kb(); this.ra.V("pai", function () {
                  return b.G.length ?
                    C(function (e, f) { return (e.Aa || 0) <= (f.Aa || 0) ? f : e }, b.G[0], b.G.slice(1)).id : 0
                }); this.ja({ type: "page", target: this.b })
              }
            }; a.prototype.stop = function () { this.buffer.U("se", this.xa); this.buffer.U("ag", this.qa); this.$c(); this.ua = !0 }; a.prototype.Cb = function (b) { return Qc("html", this.b, b) !== this.b.document.documentElement }; a.prototype.Kb = function () {
              var b = this; w(this.b, "p.ic" + this.za.id, function () {
                if (!b.ua) {
                  var c = b.ra.l(b.Sa), d = b.za.kc(); A(function (e) { var f = z(function (g) { return y({}, g) }, d); S(e) && e(f) }, c); b.Sc = ja(b.b,
                    E(b.Kb, b), 1E3, "p")
                }
              })()
            }; a.prototype.yc = function (b) { this.ua || (this.ad(b), this.bd(), this.Mc()) }; a.prototype.ja = function (b) {
              var c = this; w(this.b, "p.ec." + this.za.id, function () {
                try { var d = b.type; var e = b.target } catch (l) { return } var f = "page" === d; if ("scroll" === d || f) { var g = [c.b, c.b.document, c.b.document.documentElement, Ee(c.b)]; F(e, g) && c.Pa() } ("resize" === d || f) && c.Ub(); d = c.time(G); var h = Math.min(d - c.Eb, 5E3); c.Qa += Math.round(h); c.Eb = d; if (c.M && c.scroll && c.W) {
                  var k = c.W.ba * c.W.kb; c.G = z(function (l) {
                    var m = y({}, l),
                      p = c.M[m.id], q = Be(l.aa); if (!p || c.Cb(m.element) || !q) return m; l = c.b.Math; p = l.max((c.scroll.y + c.W.ba - p.y) / p.height, 0); var u = q.height * q.width; q = c.ac(q); m.Aa = q / k; m.visibility = q / u; if (.9 <= m.visibility || .1 <= m.Aa) m.involvedTime += h; m.maxScrolled = l.round(1E4 * p) / 1E4; return m
                  }, c.G)
                }
              })()
            }; a.prototype.ac = function (b) { var c = b.top, d = b.bottom, e = b.left, f = this.W, g = f.kb; f = f.ba; var h = this.b.Math; b = h.min(h.max(b.right, 0), g) - h.min(h.max(e, 0), g); return (h.min(h.max(d, 0), f) - h.min(h.max(c, 0), f)) * b }; a.prototype.ad = function (b) {
              var c =
                z(function (d) { return d.id }, this.G); this.G = this.G.concat(R(function (d) { return !F(d.id, c) }, b))
            }; a.prototype.Ub = function () { var b = De(this.b) || Ce(this.b); this.W = { kb: b[0], ba: b[1] } }; a.prototype.bd = function () {
              var b = this; w(this.b, "p.um." + this.za.id, function () {
                var c = []; b.Pa(); b.M = C(function (d, e) {
                  var f; if (b.Cb(e.element)) c.push(e), delete d[e.id]; else {
                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.aa && (f = Be(e.aa)) && (g.x =
                      Math.max(Math.round(f.left) + b.scroll.x, 0), g.y = Math.max(Math.round(f.top) + b.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g
                  } return d
                }, {}, b.G); A(function (d) { d = dd(b.b)(d, b.G); b.G.splice(d, 1) }, c)
              })()
            }; a.prototype.xa = function () { this.Fb = this.Ua }; a.prototype.qa = function () { var b, c, d = z(x(this.M, n), W(this.M)); return d.length && (this.Ua = Ba(this.b, d), this.Fb !== this.Ua) ? (b = {}, b.type = "publishersHeader", b.data = (c = {}, c.articleMeta = d || [], c.involvedTime = this.Qa, c), b) : null }; a.prototype.Mc =
              function () { var b = this; if (this.G.length) { var c = R(function (d) { return !d.bb }, this.G); A(function (d) { var e, f = y({}, d); delete f.aa; delete f.bb; delete f.index; delete f.involvedTime; delete f.visibility; delete f.Aa; delete f.maxScrolled; delete f.update; delete f.element; delete f.type; b.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e)); d.bb = !0 }, c); c.length && Qa(this.b, "Publisher content info found: ", c) } }; a.prototype.Qc = function () { this.qb.B(this.b, uf, this.ja) }; a.prototype.$c = function () {
                this.qb.Ea(this.b,
                  uf, this.ja)
              }; a.prototype.Pa = function () { this.scroll = { x: this.b.pageXOffset || n(this.b, "document.documentElement.scrollLeft") || 0, y: this.b.pageYOffset || n(this.b, "document.documentElement.scrollLeft") || 0 } }; return a
          }(), md = {}; ld && (md.schema = ld, md.microdata = ld); var Li = I("p.p", function (a, b) {
            function c(l, m, p) { e(y({}, k, { D: l, bc: gg(m) }), b, p)["catch"](w(a, "s.ww.p")) } if (!Aa("querySelectorAll", a.document.querySelectorAll)) return K.resolve(); var d = [new tf(a)], e = aa(a, "p", b), f = tc(function (l) { return l.isEnabled() }, d);
            d = Y(); var g = vb(a, b.id), h = g.l("pai"); h && (g.oa("pai"), d.m("pai", h)); var k = { o: {}, A: d, uc: !(f instanceof tf) }; return eb(a, b, w(a, "ps.s", function (l) { if (l = n(l, "settings.publisher.schema")) { l = Me(b) ? "microdata" : l; var m = md[l]; if (m && f) { var p = M(b), q = Ji.nc(p, c, f, a); m = new m(a); (new Ki(a, m, q, p)).start(); Qa(a, 'Publishers analytics schema "' + l + '"') } } }))
          }), Kd = X(function (a, b) { return b[a] || {} }), fg = X(function (a, b, c) { var d = Kd(a, c); c[a] = y(d, b) }), Mi = X(function (a, b) { delete b[a] }), Ni = I("c.c.cc", function (a) {
            var b = T(a), c = t(x(a,
              qc), pa, function (d) { var e; return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = d.clickmap && !!d.clickmap, e)) }); return w(a, "g.c.cc", t(E(b.l, b, "counters", {}), W, qb(c)))
          }), Oi = I("gt.c.rs", function (a, b) { var c, d = M(b), e = sc(a, d), f = b.id, g = b.H, h = b.rd, k = b.Xd, l = b.Vd; d = t(x(d, Mi), rc(a)); e((c = {}, c.id = f, c.type = +g, c.clickmap = h, c.webvisor = !!k, c.trackHash = !!l, c)); return d }), vf = {
            1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1,
            1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1
          }, Pi = r(function () { return C(function (a, b) { var c = Zc(b + "/tag_turbo.js"); vf[c] || (a[c] = 1); return a }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]) }), Xe = 1, ad = {}, Yb = {}, Si = I("nb.p", function (a, b) {
            function c(P) { k() || (P = "number" === typeof P ? P : 15E3, P = Hh(a, d(!1), P), u = P.id, ka = P.pb, l()) } function d(P) {
              return function (ma) {
                var Ga, qa, xb; void 0 === ma && (ma = (Ga = {}, Ga.ctx = {}, Ga.callback = H, Ga)); if (P || !q &&
                  !h.vc) {
                  q = !0; l(); u && Gh(a, u); var fc = m(G); Ga = (parseInt(h.l("lastHit"), 10) || 0) < fc - 18E5; var Qi = .1 > Math.random(); h.m("lastHit", fc); fc = Y((qa = {}, qa.nb = "1", qa.cl = v, qa.ar = "1", qa)); qa = hb(b); qa = { o: (xb = {}, xb["page-url"] = qa.url || L(a).href, xb), A: fc }; xb = gd(a).warn; !ma.callback && ma.ctx && xb('"callback" argument missing'); (P || Ga || Qi || !Sg(a.location.href, a.document.referrer)) && f(qa, b).then(function () {
                    if (!P) {
                      var bb = .002, cb = 24226447 === b.id ? 1 : .002, db, gc, nd, hc, od; void 0 === bb && (bb = 1); void 0 === cb && (cb = 1); var yb = a.performance;
                      if (yb && S(yb.getEntriesByType) && (bb = Math.random() > bb, cb = Math.random() > cb, !bb || !cb)) {
                        yb = a.performance.getEntriesByType("resource"); for (var ic = {}, pd = {}, jc = {}, Ri = Pi(a), qd = 0; qd < yb.length; qd += 1) {
                          var ya = yb[qd], kc = ya.name.replace(/^https?:\/\//, "").split("?")[0], wf = Zc(kc), xf = (db = {}, db.dns = Math.round(ya.domainLookupEnd - ya.domainLookupStart), db.tcp = Math.round(ya.connectEnd - ya.connectStart), db.duration = Math.round(ya.duration), db.response = Math.round(ya.responseEnd - ya.requestStart), db); "script" !== ya.initiatorType ||
                            bb || (pd[kc] = y(xf, (gc = {}, gc.name = ya.name, gc.decodedBodySize = ya.decodedBodySize, gc))); !vf[wf] && !Ri[wf] || ic[kc] || cb || (ic[kc] = y(xf, (nd = {}, nd.pages = a.location.href, nd)))
                        } W(ic).length && (jc.timings8 = ic); W(pd).length && (jc.scripts = pd); if (W(jc).length) aa(a, "d", b)({ A: Y((hc = {}, hc.ar = "1", hc.pv = "1", hc)), D: Ba(a, jc) || void 0, o: (od = {}, od["page-url"] = a.location && "" + a.location.href, od) }, { id: 51533966, H: "0" })["catch"](w(a, "r.tim.ng2"))
                      }
                    }
                  }).then(O([a, ma.callback, ma.ctx], Pa), w(a, "l.o.l"))
                }
              }
            } var e, f = aa(a, "n", b), g = M(b), h =
              vb(a, b.id), k = x(qc(a, g), t(pa, N("accurateTrackBounce"))), l = x((e = {}, e.accurateTrackBounce = !0, e), sc(a, g)), m = Q(a), p = m(G), q = !1, u = 0, v = 0, ka; eb(a, b, function (P) { v = P.lc - p }); b.Fa && c(b.Fa); return { Cc: d(!0), Fa: c, Ia: ka }
          }), rd = ["yandex_metrika_callback" + nb.callbackPostfix, "yandex_metrika_callbacks" + nb.callbackPostfix], Ti = I("cb.i", function (a) { var b = rd[0], c = rd[1]; if (S(a[b])) a[b](); "object" === typeof a[c] && A(function (d, e) { a[c][e] = null; Pa(a, d) }, a[c]); A(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, rd) }), yf = {
            xd: ba("test",
              /[/&=?#]/)
          }, Ui = I("go.in", function (a, b, c, d) { void 0 === c && (c = "goal"); return function (e, f, g, h) { var k, l; if (!(!e || yf[c] && yf[c](e))) { var m = f, p = g || H; S(f) && (p = f, m = void 0, h = g); var q = gb(a, b, "Reach goal. Counter: " + b.id + ". Goal id: " + e, m), u = "goal" === c; f = aa(a, "g", b); g = eg(a, b, e, c); e = g[0]; g = g[1]; f({ C: m, A: Y((k = {}, k.ar = 1, k)), o: (l = {}, l["page-url"] = e, l["page-ref"] = g, l) }, b).then(function () { u && q(); d && d() })["catch"](w(a, "g.s")).then(E(Pa, null, a, p, h)) } } }), cg = /^ *(data|javascript):/i, Id = new RegExp(B("", ["\\.(" + B("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) +
            ")$"]), "i"), Vi = xa(function (a, b) { ib(b) ? a.push(b) : A(t(J, ba("push", a)), b) }), Wi = I("cl.p", function (a, b) {
              function c(m, p, q, u) { void 0 === u && (u = {}); q ? Db(a, b, { url: q, ca: !0, ta: m, wa: p, sender: d, b: u.ctx, T: u.callback, title: u.title, C: u.params }) : f.warn("Empty link") } var d = aa(a, "2", b), e = [], f = gd(a), g = M(b), h = w(a, "s.s.tr", x(sc(a, g), dg)); g = { b: a, fc: b, jc: e, sender: d, globalStorage: T(a), ec: vb(a, b.id), sc: Za(a), Vc: x(qc(a, g), t(pa, N("trackLinks"))) }; g = w(a, "cl.p.c", x(g, ag)); g = Ta(a).B(a, ["click"], g); b.Ca && h(b.Ca); var k = w(a, "file.clc",
                O([!0, !1], c)), l = w(a, "e.l.l.clc", O([!1, !0], c)); e = w(a, "add.f.e.clc", Vi(e)); return { file: k, ic: l, Zb: e, Ca: h, Ia: g }
            }), Xi = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Yi = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Zf = { o: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, Fd = { id: 42822899, H: "0" }, Wf = Tc("csp", function (a, b) { return aa(a, "s", b)({}, ["https://ymetrica1.com/watch/3/1"]) }), Vf = t(N("settings.pcs"), Ca("1")), Zi = I("s", function (a,
              b) { return eb(a, b, function (c) { var d = Q(a), e = $f(a, c.userData, b), f = Ph(a), g = t(ff, Oa(["iPhone", "iPad"]))(a); return (f || g) && Tf(a, d, b, e, c).then(function () { if (f) var h = Xi; else if (g) h = Yi; else return; return Rf(a, h, b, e, d) }, H) }) }), $i = r(function (a) { var b = T(a), c = b.l("isEU"); if (U(c)) { var d = parseInt(Nb(a, "is_gdpr") || "", 10); if (F(d, [0, 1])) b.m("isEU", d), c = !!d; else if (a = Ea(a).l("wasSynced"), a = n(a, "params.eu")) b.m("isEU", a), c = !!a } return c }, function (a) { return T(a).l("isEU") }), aj = I("i.e", $i), Ua = t(W, N("0")), bj = I("p.fh", function (a,
                b) { var c, d; void 0 === b && (b = !0); var e = Ea(a), f = Q(a), g = e.l("wasSynced"), h = { id: 3, H: "0" }; return b && g && g.time + 864E5 > f(G) ? K.resolve(g) : aa(a, "f", h)({ A: Y((c = {}, c.pv = 1, c)), o: (d = {}, d["page-url"] = L(a).href, d["page-ref"] = a.document.referrer, d) }, h).then(function (k) { var l; k = (l = {}, l.time = f(G), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l); e.m("wasSynced", k); return k })["catch"](w(a, "f.h")) }), cj = I("pa.int", function (a, b) {
                  return w(a, "pa.c", function () {
                    var c, d; var e = V(arguments), f = H; var g = null; var h = e.length; if (0 !==
                      e.length && e[0]) { var k = e.slice(-1)[0]; S(k) && (f = k, h = e.length + -1); var l = e.slice(-2)[0]; S(l) && (f = l, g = k, h = e.length + -2); h = e.slice(0, h); g = { hc: g, T: f, C: 1 === h.length ? e[0] : yh(h) } } else g = void 0; if (g && (e = g.hc, f = g.C, g = g.T, Ue(f) || ta(f))) {
                        h = aa(a, "1", b); k = hb(b).url; l = n(f, "__ym.user_id"); var m = W(f), p = F("__ymu", m), q = F("__ym", m) && l; m = !Ld(b); l = gb(a, b, q ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + b.id, q ? void 0 : JSON.stringify(f)); h({ C: f, A: Y((c = {}, c.pa = 1, c.ar = 1, c)), o: (d = {}, d["page-url"] = k || L(a).href, d) }, b).then(m ?
                          l : H)["catch"](w(a, "p.s")).then(E(Pa, null, a, g, e))
                      }
                  })
                }), dj = I("exps.int", function (a, b) { return w(a, "e.m", function (c, d, e) { var f, g; void 0 === d && (d = H); if (c && 0 < c.length) { var h = aa(a, "e", b), k = hb(b).url; return h({ A: Y((f = {}, f.ex = 1, f.ar = 1, f)), o: (g = {}, g["page-url"] = k || L(a).href, g.exp = c, g) }, b).then(E(Pa, null, a, d, e), w(a, "exps.s")) } }) }), ej = I("y.p", function (a, b) { var c = $d(a, b); if (c) { var d = Gb(a), e = O([a, c, b], Qf); Wd(a, d, function (f) { f.B("params", e) }); c.J.B("params", t(N("1"), e)) } }), za, Va, oc = (za = {}, za.transaction_id = "id",
                  za.item_id = "id", za.item_name = "name", za.item_brand = "brand", za.promotion_name = "coupon", za.index = "position", za.item_variant = "variant", za.value = "revenue", za.item_category = "category", za), Bd = (Va = {}, Va.view_item = "detail", Va.add_to_cart = "add", Va.remove_from_cart = "remove", Va.begin_checkout = "checkout", Va.purchase = "purchase", Va), Of = "currencyCode add delete remove purchase checkout detail".split(" "), zf = I("dl.w", function (a, b, c) {
                    var d; Ic(a, a[b], function (e) { c(e) }) || (d = ja(a, function () { zf(a, b, c) }, 1E3, "ec.dl")); return E(La,
                      null, a, d)
                  }), fj = I("p.e", function (a, b) { var c = Na(a, b); if (c && b.Ja) { c = E(c.params, c); var d = w(a, "h.ee", O([a, c], Mf)); return zf(a, b.Ja, function (e) { e.B(d) }) } }), Ad = r(function (a) { return B("[^\\d<>]*", a.split("")) }), Gf = r(function (a) { return new RegExp(Ad(a), "g") }), Cb = t(x("replace", ba), Pd([/\D/g, ""]), pa), gj = r(function (a) { return Nh(a) || !Aa("querySelectorAll", a.document.querySelectorAll) }), Df = r(function (a, b, c) {
                    function d(k) { var l; return f(a, b, k) ? null === (l = h[k.$a]) || void 0 === l ? void 0 : l.Da : null } var e, f = c.Wc; c = c.Fd;
                    var g = void 0 === c ? (e = {}, e.href = !0, e.text = !0, e) : c, h; return { Ic: function (k) { return new K(function (l, m) { k && k.length || m(); h = xd()(k); l(ud(a).then(function () { var p = Q(a), q = p(G), u = g.href ? Jf(a, h) : [], v = g.text ? yd(a, h) : []; return { K: R(ta, R(Boolean, z(d, u.concat(v)))), N: p(G) - q } })["catch"](function () { return { K: [], N: 0 } })) }) } }
                  }), td = r(Mb, Da), hj = I("phc.p", function (a, b) {
                    return gj(a) ? H : eb(a, b, function (c) {
                      var d = b.id, e = Bb(a, void 0, d), f = e.l("phc_settings") || ""; if (c = n(c, "settings.phchange")) {
                        var g = Ba(a, c) || ""; g !== f && e.m("phc_settings",
                          g)
                      } else f && (c = td(a, f)); e = n(c, "clientId"); f = n(c, "orderId"); c = n(c, "phones") || []; e && f && c.length && (f = { $: "", da: "", Pb: 0, K: {}, N: [], Bb: !1, La: !0, b: a, mb: b }, y(f, { Bb: !0 }), sd(a, d, f), c = Ob(a), e = eh(a, c, 1E3), d = E(sd, null, a, d, f), e.B(d), If(a, c))
                    })
                  }), ij = /[\*\.\?\(\)]/g, jj = r(function (a, b, c) { try { var d = c.replace("\\s", " ").replace(ij, ""); Md(a).warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter') } catch (e) { } }, Da), kj = I("r.nn", function (a) {
                    Nd(a).isEnabled && Ic(a, Yc, function (b) {
                      b.B(function (c) {
                        jj(a,
                          c[1], c[0]); Yc.splice(100)
                      })
                    })
                  }); "function" == typeof Promise && Promise.resolve(); var zb = T(window); zb.V("hitParam", {}); zb.V("getCounters", Ni(window)); wc.push(bj); var Af = function () {
                    return function (a, b, c, d) {
                      var e = this; return w(window, "c.i", function () {
                        function f(v) { return Ye(h, k, v)(h, k) } function g(v) { return Jh(h, k, u, v) } (!window || isNaN(a) && !a) && Ie(); var h = window, k = qh(a, $h, b, c, d); k.id || Qa(h, "Invalid Metrika id: " + k.id); var l = M(k), m = zb.l("counters", {}), p = [], q = [], u = [Ye, Ih]; if (m[l]) return Qa(h, "Duplicate counter " +
                          l + " initialization"), m[l]; m[l] = e; zb.m("counters", m); zb.V("counter", e); l = Oi(window, k); p.push(l); aj(window); f(Hi); q.push(x(Bf, f)); f(hj); e.hit = g(Ii(h, k))(); e.params = g(cj(h, k))(); e.reachGoal = g(Ui(h, k))(); e.experiments = g(dj(h, k))(); q.push(x(Li, f)); l = f(Si); p.push(n(l, Ua({ Ia: 1 }))); e.notBounce = g(n(l, Ua({ Cc: 1 })))(); f(ej); l = f(Wi); p.push(n(l, Ua({ Ia: 1 }))); e.extLink = g(n(l, Ua({ ic: 1 })))(); e.addFileExtension = g(n(l, Ua({ Zb: 1 })))(); e.file = g(n(l, Ua({ file: 1 })))(); e.trackLinks = g(n(l, Ua({ Ca: 1 })))(); p.push(fj(h, k)); f(Zi);
                        re(h, O([h, q, pa, 1, 10, "a.i"], Ug)); kj(h)
                      })()
                    }
                  }(); window.Ya && Af && (window.Ya[Wh] = Af, Ti(window)); Ab.hd = 1; Ab.jd = 10; return Ab
    })({})
  } catch (Ab) { };
}).call(this)
