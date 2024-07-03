!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.moment = t());
})(this, function () {
  "use strict";
  var H;
  function _() {
    return H.apply(null, arguments);
  }
  function y(e) {
    return (
      e instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function F(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }
  function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function L(e) {
    if (Object.getOwnPropertyNames)
      return 0 === Object.getOwnPropertyNames(e).length;
    for (var t in e) if (c(e, t)) return;
    return 1;
  }
  function g(e) {
    return void 0 === e;
  }
  function w(e) {
    return (
      "number" == typeof e ||
      "[object Number]" === Object.prototype.toString.call(e)
    );
  }
  function V(e) {
    return (
      e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    );
  }
  function G(e, t) {
    for (var n = [], s = e.length, i = 0; i < s; ++i) n.push(t(e[i], i));
    return n;
  }
  function E(e, t) {
    for (var n in t) c(t, n) && (e[n] = t[n]);
    return (
      c(t, "toString") && (e.toString = t.toString),
      c(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function l(e, t, n, s) {
    return Pt(e, t, n, s, !0).utc();
  }
  function p(e) {
    return (
      null == e._pf &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      e._pf
    );
  }
  function A(e) {
    if (null == e._isValid) {
      var t = p(e),
        n = j.call(t.parsedDateParts, function (e) {
          return null != e;
        }),
        n =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (n =
            n &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour),
        null != Object.isFrozen && Object.isFrozen(e))
      )
        return n;
      e._isValid = n;
    }
    return e._isValid;
  }
  function I(e) {
    var t = l(NaN);
    return null != e ? E(p(t), e) : (p(t).userInvalidated = !0), t;
  }
  var j =
      Array.prototype.some ||
      function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      },
    Z = (_.momentProperties = []),
    z = !1;
  function $(e, t) {
    var n,
      s,
      i,
      r = Z.length;
    if (
      (g(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      g(t._i) || (e._i = t._i),
      g(t._f) || (e._f = t._f),
      g(t._l) || (e._l = t._l),
      g(t._strict) || (e._strict = t._strict),
      g(t._tzm) || (e._tzm = t._tzm),
      g(t._isUTC) || (e._isUTC = t._isUTC),
      g(t._offset) || (e._offset = t._offset),
      g(t._pf) || (e._pf = p(t)),
      g(t._locale) || (e._locale = t._locale),
      0 < r)
    )
      for (n = 0; n < r; n++) g((i = t[(s = Z[n])])) || (e[s] = i);
    return e;
  }
  function q(e) {
    $(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === z && ((z = !0), _.updateOffset(this), (z = !1));
  }
  function v(e) {
    return e instanceof q || (null != e && null != e._isAMomentObject);
  }
  function B(e) {
    !1 === _.suppressDeprecationWarnings &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function e(r, a) {
    var o = !0;
    return E(function () {
      if ((null != _.deprecationHandler && _.deprecationHandler(null, r), o)) {
        for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++) {
          if (((e = ""), "object" == typeof arguments[i])) {
            for (t in ((e += "\n[" + i + "] "), arguments[0]))
              c(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", ");
            e = e.slice(0, -2);
          } else e = arguments[i];
          n.push(e);
        }
        B(
          r +
            "\nArguments: " +
            Array.prototype.slice.call(n).join("") +
            "\n" +
            new Error().stack
        ),
          (o = !1);
      }
      return a.apply(this, arguments);
    }, a);
  }
  var J = {};
  function Q(e, t) {
    null != _.deprecationHandler && _.deprecationHandler(e, t),
      J[e] || (B(t), (J[e] = !0));
  }
  function a(e) {
    return (
      ("undefined" != typeof Function && e instanceof Function) ||
      "[object Function]" === Object.prototype.toString.call(e)
    );
  }
  function X(e, t) {
    var n,
      s = E({}, e);
    for (n in t)
      c(t, n) &&
        (F(e[n]) && F(t[n])
          ? ((s[n] = {}), E(s[n], e[n]), E(s[n], t[n]))
          : null != t[n]
          ? (s[n] = t[n])
          : delete s[n]);
    for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n]));
    return s;
  }
  function K(e) {
    null != e && this.set(e);
  }
  (_.suppressDeprecationWarnings = !1), (_.deprecationHandler = null);
  var ee =
    Object.keys ||
    function (e) {
      var t,
        n = [];
      for (t in e) c(e, t) && n.push(t);
      return n;
    };
  function r(e, t, n) {
    var s = "" + Math.abs(e);
    return (
      (0 <= e ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, t - s.length))
        .toString()
        .substr(1) +
      s
    );
  }
  var te =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    se = {},
    ie = {};
  function s(e, t, n, s) {
    var i =
      "string" == typeof s
        ? function () {
            return this[s]();
          }
        : s;
    e && (ie[e] = i),
      t &&
        (ie[t[0]] = function () {
          return r(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (ie[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function re(e, t) {
    return e.isValid()
      ? ((t = ae(t, e.localeData())),
        (se[t] =
          se[t] ||
          (function (s) {
            for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++)
              ie[i[t]]
                ? (i[t] = ie[i[t]])
                : (i[t] = (e = i[t]).match(/\[[\s\S]/)
                    ? e.replace(/^\[|\]$/g, "")
                    : e.replace(/\\/g, ""));
            return function (e) {
              for (var t = "", n = 0; n < r; n++)
                t += a(i[n]) ? i[n].call(e, s) : i[n];
              return t;
            };
          })(t)),
        se[t](e))
      : e.localeData().invalidDate();
  }
  function ae(e, t) {
    var n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (ne.lastIndex = 0; 0 <= n && ne.test(e); )
      (e = e.replace(ne, s)), (ne.lastIndex = 0), --n;
    return e;
  }
  var oe = {};
  function t(e, t) {
    var n = e.toLowerCase();
    oe[n] = oe[n + "s"] = oe[t] = e;
  }
  function o(e) {
    return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0;
  }
  function ue(e) {
    var t,
      n,
      s = {};
    for (n in e) c(e, n) && (t = o(n)) && (s[t] = e[n]);
    return s;
  }
  var le = {};
  function n(e, t) {
    le[e] = t;
  }
  function he(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  function d(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function h(e) {
    var e = +e,
      t = 0;
    return (t = 0 != e && isFinite(e) ? d(e) : t);
  }
  function de(t, n) {
    return function (e) {
      return null != e
        ? (fe(this, t, e), _.updateOffset(this, n), this)
        : ce(this, t);
    };
  }
  function ce(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function fe(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      ("FullYear" === t && he(e.year()) && 1 === e.month() && 29 === e.date()
        ? ((n = h(n)),
          e._d["set" + (e._isUTC ? "UTC" : "") + t](
            n,
            e.month(),
            We(n, e.month())
          ))
        : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  var i = /\d/,
    u = /\d\d/,
    me = /\d{3}/,
    _e = /\d{4}/,
    ye = /[+-]?\d{6}/,
    f = /\d\d?/,
    ge = /\d\d\d\d?/,
    we = /\d\d\d\d\d\d?/,
    pe = /\d{1,3}/,
    ve = /\d{1,4}/,
    ke = /[+-]?\d{1,6}/,
    Me = /\d+/,
    De = /[+-]?\d+/,
    Se = /Z|[+-]\d\d:?\d\d/gi,
    Ye = /Z|[+-]\d\d(?::?\d\d)?/gi,
    m =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  function k(e, n, s) {
    be[e] = a(n)
      ? n
      : function (e, t) {
          return e && s ? s : n;
        };
  }
  function Oe(e, t) {
    return c(be, e)
      ? be[e](t._strict, t._locale)
      : new RegExp(
          M(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, n, s, i) {
                  return t || n || s || i;
                }
              )
          )
        );
  }
  function M(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var be = {},
    xe = {};
  function D(e, n) {
    var t,
      s,
      i = n;
    for (
      "string" == typeof e && (e = [e]),
        w(n) &&
          (i = function (e, t) {
            t[n] = h(e);
          }),
        s = e.length,
        t = 0;
      t < s;
      t++
    )
      xe[e[t]] = i;
  }
  function Te(e, i) {
    D(e, function (e, t, n, s) {
      (n._w = n._w || {}), i(e, n._w, n, s);
    });
  }
  var S,
    Y = 0,
    O = 1,
    b = 2,
    x = 3,
    T = 4,
    N = 5,
    Ne = 6,
    Pe = 7,
    Re = 8;
  function We(e, t) {
    var n;
    return isNaN(e) || isNaN(t)
      ? NaN
      : ((n = ((t % (n = 12)) + n) % n),
        (e += (t - n) / 12),
        1 == n ? (he(e) ? 29 : 28) : 31 - ((n % 7) % 2));
  }
  (S =
    Array.prototype.indexOf ||
    function (e) {
      for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    }),
    s("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    s("MMM", 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    s("MMMM", 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    t("month", "M"),
    n("month", 8),
    k("M", f),
    k("MM", f, u),
    k("MMM", function (e, t) {
      return t.monthsShortRegex(e);
    }),
    k("MMMM", function (e, t) {
      return t.monthsRegex(e);
    }),
    D(["M", "MM"], function (e, t) {
      t[O] = h(e) - 1;
    }),
    D(["MMM", "MMMM"], function (e, t, n, s) {
      s = n._locale.monthsParse(e, s, n._strict);
      null != s ? (t[O] = s) : (p(n).invalidMonth = e);
    });
  var Ce =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    Ue = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    He = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Fe = m,
    Le = m;
  function Ve(e, t) {
    var n;
    if (e.isValid()) {
      if ("string" == typeof t)
        if (/^\d+$/.test(t)) t = h(t);
        else if (!w((t = e.localeData().monthsParse(t)))) return;
      (n = Math.min(e.date(), We(e.year(), t))),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
    }
  }
  function Ge(e) {
    return null != e
      ? (Ve(this, e), _.updateOffset(this, !0), this)
      : ce(this, "Month");
  }
  function Ee() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)
      (t = l([2e3, r])),
        n.push(this.monthsShort(t, "")),
        s.push(this.months(t, "")),
        i.push(this.months(t, "")),
        i.push(this.monthsShort(t, ""));
    for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++)
      (n[r] = M(n[r])), (s[r] = M(s[r]));
    for (r = 0; r < 24; r++) i[r] = M(i[r]);
    (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + n.join("|") + ")",
        "i"
      ));
  }
  function Ae(e) {
    return he(e) ? 366 : 365;
  }
  s("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? r(e, 4) : "+" + e;
  }),
    s(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    s(0, ["YYYY", 4], 0, "year"),
    s(0, ["YYYYY", 5], 0, "year"),
    s(0, ["YYYYYY", 6, !0], 0, "year"),
    t("year", "y"),
    n("year", 1),
    k("Y", De),
    k("YY", f, u),
    k("YYYY", ve, _e),
    k("YYYYY", ke, ye),
    k("YYYYYY", ke, ye),
    D(["YYYYY", "YYYYYY"], Y),
    D("YYYY", function (e, t) {
      t[Y] = 2 === e.length ? _.parseTwoDigitYear(e) : h(e);
    }),
    D("YY", function (e, t) {
      t[Y] = _.parseTwoDigitYear(e);
    }),
    D("Y", function (e, t) {
      t[Y] = parseInt(e, 10);
    }),
    (_.parseTwoDigitYear = function (e) {
      return h(e) + (68 < h(e) ? 1900 : 2e3);
    });
  var Ie = de("FullYear", !0);
  function je(e, t, n, s, i, r, a) {
    var o;
    return (
      e < 100 && 0 <= e
        ? ((o = new Date(e + 400, t, n, s, i, r, a)),
          isFinite(o.getFullYear()) && o.setFullYear(e))
        : (o = new Date(e, t, n, s, i, r, a)),
      o
    );
  }
  function Ze(e) {
    var t;
    return (
      e < 100 && 0 <= e
        ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, t))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function ze(e, t, n) {
    n = 7 + t - n;
    return n - ((7 + Ze(e, 0, n).getUTCDay() - t) % 7) - 1;
  }
  function $e(e, t, n, s, i) {
    var r,
      t = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + ze(e, s, i),
      n =
        t <= 0
          ? Ae((r = e - 1)) + t
          : t > Ae(e)
          ? ((r = e + 1), t - Ae(e))
          : ((r = e), t);
    return { year: r, dayOfYear: n };
  }
  function qe(e, t, n) {
    var s,
      i,
      r = ze(e.year(), t, n),
      r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      r < 1
        ? (s = r + P((i = e.year() - 1), t, n))
        : r > P(e.year(), t, n)
        ? ((s = r - P(e.year(), t, n)), (i = e.year() + 1))
        : ((i = e.year()), (s = r)),
      { week: s, year: i }
    );
  }
  function P(e, t, n) {
    var s = ze(e, t, n),
      t = ze(e + 1, t, n);
    return (Ae(e) - s + t) / 7;
  }
  s("w", ["ww", 2], "wo", "week"),
    s("W", ["WW", 2], "Wo", "isoWeek"),
    t("week", "w"),
    t("isoWeek", "W"),
    n("week", 5),
    n("isoWeek", 5),
    k("w", f),
    k("ww", f, u),
    k("W", f),
    k("WW", f, u),
    Te(["w", "ww", "W", "WW"], function (e, t, n, s) {
      t[s.substr(0, 1)] = h(e);
    });
  function Be(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  s("d", 0, "do", "day"),
    s("dd", 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    s("ddd", 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    s("dddd", 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    s("e", 0, 0, "weekday"),
    s("E", 0, 0, "isoWeekday"),
    t("day", "d"),
    t("weekday", "e"),
    t("isoWeekday", "E"),
    n("day", 11),
    n("weekday", 11),
    n("isoWeekday", 11),
    k("d", f),
    k("e", f),
    k("E", f),
    k("dd", function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    k("ddd", function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    k("dddd", function (e, t) {
      return t.weekdaysRegex(e);
    }),
    Te(["dd", "ddd", "dddd"], function (e, t, n, s) {
      s = n._locale.weekdaysParse(e, s, n._strict);
      null != s ? (t.d = s) : (p(n).invalidWeekday = e);
    }),
    Te(["d", "e", "E"], function (e, t, n, s) {
      t[s] = h(e);
    });
  var Je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Ke = m,
    et = m,
    tt = m;
  function nt() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)
      (s = l([2e3, 1]).day(u)),
        (t = M(this.weekdaysMin(s, ""))),
        (n = M(this.weekdaysShort(s, ""))),
        (s = M(this.weekdays(s, ""))),
        i.push(t),
        r.push(n),
        a.push(s),
        o.push(t),
        o.push(n),
        o.push(s);
    i.sort(e),
      r.sort(e),
      a.sort(e),
      o.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i"
      ));
  }
  function st() {
    return this.hours() % 12 || 12;
  }
  function it(e, t) {
    s(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function rt(e, t) {
    return t._meridiemParse;
  }
  s("H", ["HH", 2], 0, "hour"),
    s("h", ["hh", 2], 0, st),
    s("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }),
    s("hmm", 0, 0, function () {
      return "" + st.apply(this) + r(this.minutes(), 2);
    }),
    s("hmmss", 0, 0, function () {
      return "" + st.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2);
    }),
    s("Hmm", 0, 0, function () {
      return "" + this.hours() + r(this.minutes(), 2);
    }),
    s("Hmmss", 0, 0, function () {
      return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2);
    }),
    it("a", !0),
    it("A", !1),
    t("hour", "h"),
    n("hour", 13),
    k("a", rt),
    k("A", rt),
    k("H", f),
    k("h", f),
    k("k", f),
    k("HH", f, u),
    k("hh", f, u),
    k("kk", f, u),
    k("hmm", ge),
    k("hmmss", we),
    k("Hmm", ge),
    k("Hmmss", we),
    D(["H", "HH"], x),
    D(["k", "kk"], function (e, t, n) {
      e = h(e);
      t[x] = 24 === e ? 0 : e;
    }),
    D(["a", "A"], function (e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    D(["h", "hh"], function (e, t, n) {
      (t[x] = h(e)), (p(n).bigHour = !0);
    }),
    D("hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[x] = h(e.substr(0, s))), (t[T] = h(e.substr(s))), (p(n).bigHour = !0);
    }),
    D("hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[x] = h(e.substr(0, s))),
        (t[T] = h(e.substr(s, 2))),
        (t[N] = h(e.substr(i))),
        (p(n).bigHour = !0);
    }),
    D("Hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[x] = h(e.substr(0, s))), (t[T] = h(e.substr(s)));
    }),
    D("Hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[x] = h(e.substr(0, s))),
        (t[T] = h(e.substr(s, 2))),
        (t[N] = h(e.substr(i)));
    });
  m = de("Hours", !0);
  var at,
    ot = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      months: Ce,
      monthsShort: Ue,
      week: { dow: 0, doy: 6 },
      weekdays: Je,
      weekdaysMin: Xe,
      weekdaysShort: Qe,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    R = {},
    ut = {};
  function lt(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function ht(e) {
    for (var t, n, s, i, r = 0; r < e.length; ) {
      for (
        t = (i = lt(e[r]).split("-")).length,
          n = (n = lt(e[r + 1])) ? n.split("-") : null;
        0 < t;

      ) {
        if ((s = dt(i.slice(0, t).join("-")))) return s;
        if (
          n &&
          n.length >= t &&
          (function (e, t) {
            for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)
              if (e[s] !== t[s]) return s;
            return n;
          })(i, n) >=
            t - 1
        )
          break;
        t--;
      }
      r++;
    }
    return at;
  }
  function dt(t) {
    var e;
    if (
      void 0 === R[t] &&
      "undefined" != typeof module &&
      module &&
      module.exports &&
      null != t.match("^[^/\\\\]*$")
    )
      try {
        (e = at._abbr), require("./locale/" + t), ct(e);
      } catch (e) {
        R[t] = null;
      }
    return R[t];
  }
  function ct(e, t) {
    return (
      e &&
        ((t = g(t) ? mt(e) : ft(e, t))
          ? (at = t)
          : "undefined" != typeof console &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      at._abbr
    );
  }
  function ft(e, t) {
    if (null === t) return delete R[e], null;
    var n,
      s = ot;
    if (((t.abbr = e), null != R[e]))
      Q(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (s = R[e]._config);
    else if (null != t.parentLocale)
      if (null != R[t.parentLocale]) s = R[t.parentLocale]._config;
      else {
        if (null == (n = dt(t.parentLocale)))
          return (
            ut[t.parentLocale] || (ut[t.parentLocale] = []),
            ut[t.parentLocale].push({ name: e, config: t }),
            null
          );
        s = n._config;
      }
    return (
      (R[e] = new K(X(s, t))),
      ut[e] &&
        ut[e].forEach(function (e) {
          ft(e.name, e.config);
        }),
      ct(e),
      R[e]
    );
  }
  function mt(e) {
    var t;
    if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e))
      return at;
    if (!y(e)) {
      if ((t = dt(e))) return t;
      e = [e];
    }
    return ht(e);
  }
  function _t(e) {
    var t = e._a;
    return (
      t &&
        -2 === p(e).overflow &&
        ((t =
          t[O] < 0 || 11 < t[O]
            ? O
            : t[b] < 1 || t[b] > We(t[Y], t[O])
            ? b
            : t[x] < 0 ||
              24 < t[x] ||
              (24 === t[x] && (0 !== t[T] || 0 !== t[N] || 0 !== t[Ne]))
            ? x
            : t[T] < 0 || 59 < t[T]
            ? T
            : t[N] < 0 || 59 < t[N]
            ? N
            : t[Ne] < 0 || 999 < t[Ne]
            ? Ne
            : -1),
        p(e)._overflowDayOfYear && (t < Y || b < t) && (t = b),
        p(e)._overflowWeeks && -1 === t && (t = Pe),
        p(e)._overflowWeekday && -1 === t && (t = Re),
        (p(e).overflow = t)),
      e
    );
  }
  var yt =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    gt =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    wt = /Z|[+-]\d\d(?::?\d\d)?/,
    pt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    vt = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    kt = /^\/?Date\((-?\d+)/i,
    Mt =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Dt = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
  function St(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = yt.exec(o) || gt.exec(o),
      o = pt.length,
      l = vt.length;
    if (u) {
      for (p(e).iso = !0, t = 0, n = o; t < n; t++)
        if (pt[t][1].exec(u[1])) {
          (i = pt[t][0]), (s = !1 !== pt[t][2]);
          break;
        }
      if (null == i) e._isValid = !1;
      else {
        if (u[3]) {
          for (t = 0, n = l; t < n; t++)
            if (vt[t][1].exec(u[3])) {
              r = (u[2] || " ") + vt[t][0];
              break;
            }
          if (null == r) return void (e._isValid = !1);
        }
        if (s || null == r) {
          if (u[4]) {
            if (!wt.exec(u[4])) return void (e._isValid = !1);
            a = "Z";
          }
          (e._f = i + (r || "") + (a || "")), Tt(e);
        } else e._isValid = !1;
      }
    } else e._isValid = !1;
  }
  function Yt(e, t, n, s, i, r) {
    e = [
      (function (e) {
        e = parseInt(e, 10);
        {
          if (e <= 49) return 2e3 + e;
          if (e <= 999) return 1900 + e;
        }
        return e;
      })(e),
      Ue.indexOf(t),
      parseInt(n, 10),
      parseInt(s, 10),
      parseInt(i, 10),
    ];
    return r && e.push(parseInt(r, 10)), e;
  }
  function Ot(e) {
    var t,
      n,
      s = Mt.exec(
        e._i
          .replace(/\([^()]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "")
      );
    s
      ? ((t = Yt(s[4], s[3], s[2], s[5], s[6], s[7])),
        (function (e, t, n) {
          if (!e || Qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay())
            return 1;
          (p(n).weekdayMismatch = !0), (n._isValid = !1);
        })(s[1], t, e) &&
          ((e._a = t),
          (e._tzm =
            ((t = s[8]),
            (n = s[9]),
            (s = s[10]),
            t
              ? Dt[t]
              : n
              ? 0
              : 60 * (((t = parseInt(s, 10)) - (n = t % 100)) / 100) + n)),
          (e._d = Ze.apply(null, e._a)),
          e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          (p(e).rfc2822 = !0)))
      : (e._isValid = !1);
  }
  function bt(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function xt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o,
      u,
      l,
      h,
      d,
      c = [];
    if (!e._d) {
      for (
        s = e,
          i = new Date(_.now()),
          n = s._useUTC
            ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
            : [i.getFullYear(), i.getMonth(), i.getDate()],
          e._w &&
            null == e._a[b] &&
            null == e._a[O] &&
            (null != (i = (s = e)._w).GG || null != i.W || null != i.E
              ? ((u = 1),
                (l = 4),
                (r = bt(i.GG, s._a[Y], qe(W(), 1, 4).year)),
                (a = bt(i.W, 1)),
                ((o = bt(i.E, 1)) < 1 || 7 < o) && (h = !0))
              : ((u = s._locale._week.dow),
                (l = s._locale._week.doy),
                (d = qe(W(), u, l)),
                (r = bt(i.gg, s._a[Y], d.year)),
                (a = bt(i.w, d.week)),
                null != i.d
                  ? ((o = i.d) < 0 || 6 < o) && (h = !0)
                  : null != i.e
                  ? ((o = i.e + u), (i.e < 0 || 6 < i.e) && (h = !0))
                  : (o = u)),
            a < 1 || a > P(r, u, l)
              ? (p(s)._overflowWeeks = !0)
              : null != h
              ? (p(s)._overflowWeekday = !0)
              : ((d = $e(r, a, o, u, l)),
                (s._a[Y] = d.year),
                (s._dayOfYear = d.dayOfYear))),
          null != e._dayOfYear &&
            ((i = bt(e._a[Y], n[Y])),
            (e._dayOfYear > Ae(i) || 0 === e._dayOfYear) &&
              (p(e)._overflowDayOfYear = !0),
            (h = Ze(i, 0, e._dayOfYear)),
            (e._a[O] = h.getUTCMonth()),
            (e._a[b] = h.getUTCDate())),
          t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = c[t] = n[t];
      for (; t < 7; t++)
        e._a[t] = c[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
      24 === e._a[x] &&
        0 === e._a[T] &&
        0 === e._a[N] &&
        0 === e._a[Ne] &&
        ((e._nextDay = !0), (e._a[x] = 0)),
        (e._d = (e._useUTC ? Ze : je).apply(null, c)),
        (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[x] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== r &&
          (p(e).weekdayMismatch = !0);
    }
  }
  function Tt(e) {
    if (e._f === _.ISO_8601) St(e);
    else if (e._f === _.RFC_2822) Ot(e);
    else {
      (e._a = []), (p(e).empty = !0);
      for (
        var t,
          n,
          s,
          i,
          r,
          a = "" + e._i,
          o = a.length,
          u = 0,
          l = ae(e._f, e._locale).match(te) || [],
          h = l.length,
          d = 0;
        d < h;
        d++
      )
        (n = l[d]),
          (t = (a.match(Oe(n, e)) || [])[0]) &&
            (0 < (s = a.substr(0, a.indexOf(t))).length &&
              p(e).unusedInput.push(s),
            (a = a.slice(a.indexOf(t) + t.length)),
            (u += t.length)),
          ie[n]
            ? (t ? (p(e).empty = !1) : p(e).unusedTokens.push(n),
              (s = n),
              (r = e),
              null != (i = t) && c(xe, s) && xe[s](i, r._a, r, s))
            : e._strict && !t && p(e).unusedTokens.push(n);
      (p(e).charsLeftOver = o - u),
        0 < a.length && p(e).unusedInput.push(a),
        e._a[x] <= 12 &&
          !0 === p(e).bigHour &&
          0 < e._a[x] &&
          (p(e).bigHour = void 0),
        (p(e).parsedDateParts = e._a.slice(0)),
        (p(e).meridiem = e._meridiem),
        (e._a[x] = (function (e, t, n) {
          if (null == n) return t;
          return null != e.meridiemHour
            ? e.meridiemHour(t, n)
            : null != e.isPM
            ? ((e = e.isPM(n)) && t < 12 && (t += 12),
              (t = e || 12 !== t ? t : 0))
            : t;
        })(e._locale, e._a[x], e._meridiem)),
        null !== (o = p(e).era) &&
          (e._a[Y] = e._locale.erasConvertYear(o, e._a[Y])),
        xt(e),
        _t(e);
    }
  }
  function Nt(e) {
    var t,
      n,
      s,
      i = e._i,
      r = e._f;
    if (
      ((e._locale = e._locale || mt(e._l)),
      null === i || (void 0 === r && "" === i))
    )
      return I({ nullInput: !0 });
    if (("string" == typeof i && (e._i = i = e._locale.preparse(i)), v(i)))
      return new q(_t(i));
    if (V(i)) e._d = i;
    else if (y(r)) {
      var a,
        o,
        u,
        l,
        h,
        d,
        c = e,
        f = !1,
        m = c._f.length;
      if (0 === m) (p(c).invalidFormat = !0), (c._d = new Date(NaN));
      else {
        for (l = 0; l < m; l++)
          (h = 0),
            (d = !1),
            (a = $({}, c)),
            null != c._useUTC && (a._useUTC = c._useUTC),
            (a._f = c._f[l]),
            Tt(a),
            A(a) && (d = !0),
            (h = (h += p(a).charsLeftOver) + 10 * p(a).unusedTokens.length),
            (p(a).score = h),
            f
              ? h < u && ((u = h), (o = a))
              : (null == u || h < u || d) && ((u = h), (o = a), d) && (f = !0);
        E(c, o || a);
      }
    } else if (r) Tt(e);
    else if (g((r = (i = e)._i))) i._d = new Date(_.now());
    else
      V(r)
        ? (i._d = new Date(r.valueOf()))
        : "string" == typeof r
        ? ((n = i),
          null !== (t = kt.exec(n._i))
            ? (n._d = new Date(+t[1]))
            : (St(n),
              !1 === n._isValid &&
                (delete n._isValid, Ot(n), !1 === n._isValid) &&
                (delete n._isValid,
                n._strict ? (n._isValid = !1) : _.createFromInputFallback(n))))
        : y(r)
        ? ((i._a = G(r.slice(0), function (e) {
            return parseInt(e, 10);
          })),
          xt(i))
        : F(r)
        ? (t = i)._d ||
          ((s = void 0 === (n = ue(t._i)).day ? n.date : n.day),
          (t._a = G(
            [n.year, n.month, s, n.hour, n.minute, n.second, n.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          )),
          xt(t))
        : w(r)
        ? (i._d = new Date(r))
        : _.createFromInputFallback(i);
    return A(e) || (e._d = null), e;
  }
  function Pt(e, t, n, s, i) {
    var r = {};
    return (
      (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
      (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
      ((F(e) && L(e)) || (y(e) && 0 === e.length)) && (e = void 0),
      (r._isAMomentObject = !0),
      (r._useUTC = r._isUTC = i),
      (r._l = n),
      (r._i = e),
      (r._f = t),
      (r._strict = s),
      (i = new q(_t(Nt((i = r)))))._nextDay &&
        (i.add(1, "d"), (i._nextDay = void 0)),
      i
    );
  }
  function W(e, t, n, s) {
    return Pt(e, t, n, s, !1);
  }
  (_.createFromInputFallback = e(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  )),
    (_.ISO_8601 = function () {}),
    (_.RFC_2822 = function () {});
  (ge = e(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = W.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : I();
    }
  )),
    (we = e(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = W.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : I();
      }
    ));
  function Rt(e, t) {
    var n, s;
    if (!(t = 1 === t.length && y(t[0]) ? t[0] : t).length) return W();
    for (n = t[0], s = 1; s < t.length; ++s)
      (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
    return n;
  }
  var Wt = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
  function Ct(e) {
    var e = ue(e),
      t = e.year || 0,
      n = e.quarter || 0,
      s = e.month || 0,
      i = e.week || e.isoWeek || 0,
      r = e.day || 0,
      a = e.hour || 0,
      o = e.minute || 0,
      u = e.second || 0,
      l = e.millisecond || 0;
    (this._isValid = (function (e) {
      var t,
        n,
        s = !1,
        i = Wt.length;
      for (t in e)
        if (c(e, t) && (-1 === S.call(Wt, t) || (null != e[t] && isNaN(e[t]))))
          return !1;
      for (n = 0; n < i; ++n)
        if (e[Wt[n]]) {
          if (s) return !1;
          parseFloat(e[Wt[n]]) !== h(e[Wt[n]]) && (s = !0);
        }
      return !0;
    })(e)),
      (this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60),
      (this._days = +r + 7 * i),
      (this._months = +s + 3 * n + 12 * t),
      (this._data = {}),
      (this._locale = mt()),
      this._bubble();
  }
  function Ut(e) {
    return e instanceof Ct;
  }
  function Ht(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Ft(e, n) {
    s(e, 0, 0, function () {
      var e = this.utcOffset(),
        t = "+";
      return (
        e < 0 && ((e = -e), (t = "-")),
        t + r(~~(e / 60), 2) + n + r(~~e % 60, 2)
      );
    });
  }
  Ft("Z", ":"),
    Ft("ZZ", ""),
    k("Z", Ye),
    k("ZZ", Ye),
    D(["Z", "ZZ"], function (e, t, n) {
      (n._useUTC = !0), (n._tzm = Vt(Ye, e));
    });
  var Lt = /([\+\-]|\d\d)/gi;
  function Vt(e, t) {
    var t = (t || "").match(e);
    return null === t
      ? null
      : 0 ===
        (t =
          60 *
            (e = ((t[t.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] +
          h(e[2]))
      ? 0
      : "+" === e[0]
      ? t
      : -t;
  }
  function Gt(e, t) {
    var n;
    return t._isUTC
      ? ((t = t.clone()),
        (n = (v(e) || V(e) ? e : W(e)).valueOf() - t.valueOf()),
        t._d.setTime(t._d.valueOf() + n),
        _.updateOffset(t, !1),
        t)
      : W(e).local();
  }
  function Et(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  function At() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  _.updateOffset = function () {};
  var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    jt =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function C(e, t) {
    var n,
      s = e;
    return (
      Ut(e)
        ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
        : w(e) || !isNaN(+e)
        ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
        : (t = It.exec(e))
        ? ((n = "-" === t[1] ? -1 : 1),
          (s = {
            y: 0,
            d: h(t[b]) * n,
            h: h(t[x]) * n,
            m: h(t[T]) * n,
            s: h(t[N]) * n,
            ms: h(Ht(1e3 * t[Ne])) * n,
          }))
        : (t = jt.exec(e))
        ? ((n = "-" === t[1] ? -1 : 1),
          (s = {
            y: Zt(t[2], n),
            M: Zt(t[3], n),
            w: Zt(t[4], n),
            d: Zt(t[5], n),
            h: Zt(t[6], n),
            m: Zt(t[7], n),
            s: Zt(t[8], n),
          }))
        : null == s
        ? (s = {})
        : "object" == typeof s &&
          ("from" in s || "to" in s) &&
          ((t = (function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
              return { milliseconds: 0, months: 0 };
            (t = Gt(t, e)),
              e.isBefore(t)
                ? (n = zt(e, t))
                : (((n = zt(t, e)).milliseconds = -n.milliseconds),
                  (n.months = -n.months));
            return n;
          })(W(s.from), W(s.to))),
          ((s = {}).ms = t.milliseconds),
          (s.M = t.months)),
      (n = new Ct(s)),
      Ut(e) && c(e, "_locale") && (n._locale = e._locale),
      Ut(e) && c(e, "_isValid") && (n._isValid = e._isValid),
      n
    );
  }
  function Zt(e, t) {
    e = e && parseFloat(e.replace(",", "."));
    return (isNaN(e) ? 0 : e) * t;
  }
  function zt(e, t) {
    var n = {};
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function $t(s, i) {
    return function (e, t) {
      var n;
      return (
        null === t ||
          isNaN(+t) ||
          (Q(
            i,
            "moment()." +
              i +
              "(period, number) is deprecated. Please use moment()." +
              i +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (n = e),
          (e = t),
          (t = n)),
        qt(this, C(e, t), s),
        this
      );
    };
  }
  function qt(e, t, n, s) {
    var i = t._milliseconds,
      r = Ht(t._days),
      t = Ht(t._months);
    e.isValid() &&
      ((s = null == s || s),
      t && Ve(e, ce(e, "Month") + t * n),
      r && fe(e, "Date", ce(e, "Date") + r * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      s) &&
      _.updateOffset(e, r || t);
  }
  (C.fn = Ct.prototype),
    (C.invalid = function () {
      return C(NaN);
    });
  (Ce = $t(1, "add")), (Je = $t(-1, "subtract"));
  function Bt(e) {
    return "string" == typeof e || e instanceof String;
  }
  function Jt(e) {
    return (
      v(e) ||
      V(e) ||
      Bt(e) ||
      w(e) ||
      (function (t) {
        var e = y(t),
          n = !1;
        e &&
          (n =
            0 ===
            t.filter(function (e) {
              return !w(e) && Bt(t);
            }).length);
        return e && n;
      })(e) ||
      (function (e) {
        var t,
          n,
          s = F(e) && !L(e),
          i = !1,
          r = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ],
          a = r.length;
        for (t = 0; t < a; t += 1) (n = r[t]), (i = i || c(e, n));
        return s && i;
      })(e) ||
      null == e
    );
  }
  function Qt(e, t) {
    var n, s;
    return e.date() < t.date()
      ? -Qt(t, e)
      : -(
          (n = 12 * (t.year() - e.year()) + (t.month() - e.month())) +
          (t - (s = e.clone().add(n, "months")) < 0
            ? (t - s) / (s - e.clone().add(n - 1, "months"))
            : (t - s) / (e.clone().add(1 + n, "months") - s))
        ) || 0;
  }
  function Xt(e) {
    return void 0 === e
      ? this._locale._abbr
      : (null != (e = mt(e)) && (this._locale = e), this);
  }
  (_.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (_.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  Xe = e(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  function Kt() {
    return this._locale;
  }
  var en = 126227808e5;
  function tn(e, t) {
    return ((e % t) + t) % t;
  }
  function nn(e, t, n) {
    return e < 100 && 0 <= e
      ? new Date(e + 400, t, n) - en
      : new Date(e, t, n).valueOf();
  }
  function sn(e, t, n) {
    return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n);
  }
  function rn(e, t) {
    return t.erasAbbrRegex(e);
  }
  function an() {
    for (
      var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length;
      r < a;
      ++r
    )
      t.push(M(i[r].name)),
        e.push(M(i[r].abbr)),
        n.push(M(i[r].narrow)),
        s.push(M(i[r].name)),
        s.push(M(i[r].abbr)),
        s.push(M(i[r].narrow));
    (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
  }
  function on(e, t) {
    s(0, [e, e.length], 0, t);
  }
  function un(e, t, n, s, i) {
    var r;
    return null == e
      ? qe(this, s, i).year
      : ((r = P(e, s, i)),
        function (e, t, n, s, i) {
          (e = $e(e, t, n, s, i)), (t = Ze(e.year, 0, e.dayOfYear));
          return (
            this.year(t.getUTCFullYear()),
            this.month(t.getUTCMonth()),
            this.date(t.getUTCDate()),
            this
          );
        }.call(this, e, (t = r < t ? r : t), n, s, i));
  }
  s("N", 0, 0, "eraAbbr"),
    s("NN", 0, 0, "eraAbbr"),
    s("NNN", 0, 0, "eraAbbr"),
    s("NNNN", 0, 0, "eraName"),
    s("NNNNN", 0, 0, "eraNarrow"),
    s("y", ["y", 1], "yo", "eraYear"),
    s("y", ["yy", 2], 0, "eraYear"),
    s("y", ["yyy", 3], 0, "eraYear"),
    s("y", ["yyyy", 4], 0, "eraYear"),
    k("N", rn),
    k("NN", rn),
    k("NNN", rn),
    k("NNNN", function (e, t) {
      return t.erasNameRegex(e);
    }),
    k("NNNNN", function (e, t) {
      return t.erasNarrowRegex(e);
    }),
    D(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) {
      s = n._locale.erasParse(e, s, n._strict);
      s ? (p(n).era = s) : (p(n).invalidEra = e);
    }),
    k("y", Me),
    k("yy", Me),
    k("yyy", Me),
    k("yyyy", Me),
    k("yo", function (e, t) {
      return t._eraYearOrdinalRegex || Me;
    }),
    D(["y", "yy", "yyy", "yyyy"], Y),
    D(["yo"], function (e, t, n, s) {
      var i;
      n._locale._eraYearOrdinalRegex &&
        (i = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse
          ? (t[Y] = n._locale.eraYearOrdinalParse(e, i))
          : (t[Y] = parseInt(e, 10));
    }),
    s(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
    s(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    on("gggg", "weekYear"),
    on("ggggg", "weekYear"),
    on("GGGG", "isoWeekYear"),
    on("GGGGG", "isoWeekYear"),
    t("weekYear", "gg"),
    t("isoWeekYear", "GG"),
    n("weekYear", 1),
    n("isoWeekYear", 1),
    k("G", De),
    k("g", De),
    k("GG", f, u),
    k("gg", f, u),
    k("GGGG", ve, _e),
    k("gggg", ve, _e),
    k("GGGGG", ke, ye),
    k("ggggg", ke, ye),
    Te(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
      t[s.substr(0, 2)] = h(e);
    }),
    Te(["gg", "GG"], function (e, t, n, s) {
      t[s] = _.parseTwoDigitYear(e);
    }),
    s("Q", 0, "Qo", "quarter"),
    t("quarter", "Q"),
    n("quarter", 7),
    k("Q", i),
    D("Q", function (e, t) {
      t[O] = 3 * (h(e) - 1);
    }),
    s("D", ["DD", 2], "Do", "date"),
    t("date", "D"),
    n("date", 9),
    k("D", f),
    k("DD", f, u),
    k("Do", function (e, t) {
      return e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient;
    }),
    D(["D", "DD"], b),
    D("Do", function (e, t) {
      t[b] = h(e.match(f)[0]);
    });
  ve = de("Date", !0);
  s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    t("dayOfYear", "DDD"),
    n("dayOfYear", 4),
    k("DDD", pe),
    k("DDDD", me),
    D(["DDD", "DDDD"], function (e, t, n) {
      n._dayOfYear = h(e);
    }),
    s("m", ["mm", 2], 0, "minute"),
    t("minute", "m"),
    n("minute", 14),
    k("m", f),
    k("mm", f, u),
    D(["m", "mm"], T);
  var ln,
    _e = de("Minutes", !1),
    ke =
      (s("s", ["ss", 2], 0, "second"),
      t("second", "s"),
      n("second", 15),
      k("s", f),
      k("ss", f, u),
      D(["s", "ss"], N),
      de("Seconds", !1));
  for (
    s("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      s(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      s(0, ["SSS", 3], 0, "millisecond"),
      s(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      s(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      s(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      s(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      s(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      s(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      t("millisecond", "ms"),
      n("millisecond", 16),
      k("S", pe, i),
      k("SS", pe, u),
      k("SSS", pe, me),
      ln = "SSSS";
    ln.length <= 9;
    ln += "S"
  )
    k(ln, Me);
  function hn(e, t) {
    t[Ne] = h(1e3 * ("0." + e));
  }
  for (ln = "S"; ln.length <= 9; ln += "S") D(ln, hn);
  (ye = de("Milliseconds", !1)),
    s("z", 0, 0, "zoneAbbr"),
    s("zz", 0, 0, "zoneName");
  i = q.prototype;
  function dn(e) {
    return e;
  }
  (i.add = Ce),
    (i.calendar = function (e, t) {
      1 === arguments.length &&
        (arguments[0]
          ? Jt(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : (function (e) {
                for (
                  var t = F(e) && !L(e),
                    n = !1,
                    s = [
                      "sameDay",
                      "nextDay",
                      "lastDay",
                      "nextWeek",
                      "lastWeek",
                      "sameElse",
                    ],
                    i = 0;
                  i < s.length;
                  i += 1
                )
                  n = n || c(e, s[i]);
                return t && n;
              })(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : (t = e = void 0));
      var e = e || W(),
        n = Gt(e, this).startOf("day"),
        n = _.calendarFormat(this, n) || "sameElse",
        t = t && (a(t[n]) ? t[n].call(this, e) : t[n]);
      return this.format(t || this.localeData().calendar(n, this, W(e)));
    }),
    (i.clone = function () {
      return new q(this);
    }),
    (i.diff = function (e, t, n) {
      var s, i, r;
      if (!this.isValid()) return NaN;
      if (!(s = Gt(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = o(t)))) {
        case "year":
          r = Qt(this, s) / 12;
          break;
        case "month":
          r = Qt(this, s);
          break;
        case "quarter":
          r = Qt(this, s) / 3;
          break;
        case "second":
          r = (this - s) / 1e3;
          break;
        case "minute":
          r = (this - s) / 6e4;
          break;
        case "hour":
          r = (this - s) / 36e5;
          break;
        case "day":
          r = (this - s - i) / 864e5;
          break;
        case "week":
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : d(r);
    }),
    (i.endOf = function (e) {
      var t, n;
      if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
        switch (((n = this._isUTC ? sn : nn), e)) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            t =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t +=
                36e5 -
                tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                1);
            break;
          case "minute":
            (t = this._d.valueOf()), (t += 6e4 - tn(t, 6e4) - 1);
            break;
          case "second":
            (t = this._d.valueOf()), (t += 1e3 - tn(t, 1e3) - 1);
        }
        this._d.setTime(t), _.updateOffset(this, !0);
      }
      return this;
    }),
    (i.format = function (e) {
      return (
        (e = e || (this.isUtc() ? _.defaultFormatUtc : _.defaultFormat)),
        (e = re(this, e)),
        this.localeData().postformat(e)
      );
    }),
    (i.from = function (e, t) {
      return this.isValid() && ((v(e) && e.isValid()) || W(e).isValid())
        ? C({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (i.fromNow = function (e) {
      return this.from(W(), e);
    }),
    (i.to = function (e, t) {
      return this.isValid() && ((v(e) && e.isValid()) || W(e).isValid())
        ? C({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (i.toNow = function (e) {
      return this.to(W(), e);
    }),
    (i.get = function (e) {
      return a(this[(e = o(e))]) ? this[e]() : this;
    }),
    (i.invalidAt = function () {
      return p(this).overflow;
    }),
    (i.isAfter = function (e, t) {
      return (
        (e = v(e) ? e : W(e)),
        !(!this.isValid() || !e.isValid()) &&
          ("millisecond" === (t = o(t) || "millisecond")
            ? this.valueOf() > e.valueOf()
            : e.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (i.isBefore = function (e, t) {
      return (
        (e = v(e) ? e : W(e)),
        !(!this.isValid() || !e.isValid()) &&
          ("millisecond" === (t = o(t) || "millisecond")
            ? this.valueOf() < e.valueOf()
            : this.clone().endOf(t).valueOf() < e.valueOf())
      );
    }),
    (i.isBetween = function (e, t, n, s) {
      return (
        (e = v(e) ? e : W(e)),
        (t = v(t) ? t : W(t)),
        !!(this.isValid() && e.isValid() && t.isValid()) &&
          ("(" === (s = s || "()")[0]
            ? this.isAfter(e, n)
            : !this.isBefore(e, n)) &&
          (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (i.isSame = function (e, t) {
      var e = v(e) ? e : W(e);
      return (
        !(!this.isValid() || !e.isValid()) &&
        ("millisecond" === (t = o(t) || "millisecond")
          ? this.valueOf() === e.valueOf()
          : ((e = e.valueOf()),
            this.clone().startOf(t).valueOf() <= e &&
              e <= this.clone().endOf(t).valueOf()))
      );
    }),
    (i.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (i.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (i.isValid = function () {
      return A(this);
    }),
    (i.lang = Xe),
    (i.locale = Xt),
    (i.localeData = Kt),
    (i.max = we),
    (i.min = ge),
    (i.parsingFlags = function () {
      return E({}, p(this));
    }),
    (i.set = function (e, t) {
      if ("object" == typeof e)
        for (
          var n = (function (e) {
              var t,
                n = [];
              for (t in e) c(e, t) && n.push({ unit: t, priority: le[t] });
              return (
                n.sort(function (e, t) {
                  return e.priority - t.priority;
                }),
                n
              );
            })((e = ue(e))),
            s = n.length,
            i = 0;
          i < s;
          i++
        )
          this[n[i].unit](e[n[i].unit]);
      else if (a(this[(e = o(e))])) return this[e](t);
      return this;
    }),
    (i.startOf = function (e) {
      var t, n;
      if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
        switch (((n = this._isUTC ? sn : nn), e)) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
            break;
          case "minute":
            (t = this._d.valueOf()), (t -= tn(t, 6e4));
            break;
          case "second":
            (t = this._d.valueOf()), (t -= tn(t, 1e3));
        }
        this._d.setTime(t), _.updateOffset(this, !0);
      }
      return this;
    }),
    (i.subtract = Je),
    (i.toArray = function () {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (i.toObject = function () {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (i.toDate = function () {
      return new Date(this.valueOf());
    }),
    (i.toISOString = function (e) {
      var t;
      return this.isValid()
        ? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 ||
          9999 < t.year()
          ? re(
              t,
              e
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : a(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", re(t, "Z"))
          : re(
              t,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
        : null;
    }),
    (i.inspect = function () {
      var e, t, n;
      return this.isValid()
        ? ((t = "moment"),
          (e = ""),
          this.isLocal() ||
            ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (e = "Z")),
          (t = "[" + t + '("]'),
          (n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          this.format(t + n + "-MM-DD[T]HH:mm:ss.SSS" + (e + '[")]')))
        : "moment.invalid(/* " + this._i + " */)";
    }),
    "undefined" != typeof Symbol &&
      null != Symbol.for &&
      (i[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">";
      }),
    (i.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (i.toString = function () {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (i.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (i.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (i.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (i.eraName = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].name;
        if (t[n].until <= e && e <= t[n].since) return t[n].name;
      }
      return "";
    }),
    (i.eraNarrow = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].narrow;
        if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
      }
      return "";
    }),
    (i.eraAbbr = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].abbr;
        if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
      }
      return "";
    }),
    (i.eraYear = function () {
      for (
        var e, t, n = this.localeData().eras(), s = 0, i = n.length;
        s < i;
        ++s
      )
        if (
          ((e = n[s].since <= n[s].until ? 1 : -1),
          (t = this.clone().startOf("day").valueOf()),
          (n[s].since <= t && t <= n[s].until) ||
            (n[s].until <= t && t <= n[s].since))
        )
          return (this.year() - _(n[s].since).year()) * e + n[s].offset;
      return this.year();
    }),
    (i.year = Ie),
    (i.isLeapYear = function () {
      return he(this.year());
    }),
    (i.weekYear = function (e) {
      return un.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (i.isoWeekYear = function (e) {
      return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (i.quarter = i.quarters =
      function (e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }),
    (i.month = Ge),
    (i.daysInMonth = function () {
      return We(this.year(), this.month());
    }),
    (i.week = i.weeks =
      function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }),
    (i.isoWeek = i.isoWeeks =
      function (e) {
        var t = qe(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }),
    (i.weeksInYear = function () {
      var e = this.localeData()._week;
      return P(this.year(), e.dow, e.doy);
    }),
    (i.weeksInWeekYear = function () {
      var e = this.localeData()._week;
      return P(this.weekYear(), e.dow, e.doy);
    }),
    (i.isoWeeksInYear = function () {
      return P(this.year(), 1, 4);
    }),
    (i.isoWeeksInISOWeekYear = function () {
      return P(this.isoWeekYear(), 1, 4);
    }),
    (i.date = ve),
    (i.day = i.days =
      function (e) {
        var t, n, s;
        return this.isValid()
          ? ((t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()),
            null != e
              ? ((n = e),
                (s = this.localeData()),
                (e =
                  "string" != typeof n
                    ? n
                    : isNaN(n)
                    ? "number" == typeof (n = s.weekdaysParse(n))
                      ? n
                      : null
                    : parseInt(n, 10)),
                this.add(e - t, "d"))
              : t)
          : null != e
          ? this
          : NaN;
      }),
    (i.weekday = function (e) {
      var t;
      return this.isValid()
        ? ((t = (this.day() + 7 - this.localeData()._week.dow) % 7),
          null == e ? t : this.add(e - t, "d"))
        : null != e
        ? this
        : NaN;
    }),
    (i.isoWeekday = function (e) {
      var t, n;
      return this.isValid()
        ? null != e
          ? ((t = e),
            (n = this.localeData()),
            (n =
              "string" == typeof t
                ? n.weekdaysParse(t) % 7 || 7
                : isNaN(t)
                ? null
                : t),
            this.day(this.day() % 7 ? n : n - 7))
          : this.day() || 7
        : null != e
        ? this
        : NaN;
    }),
    (i.dayOfYear = function (e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }),
    (i.hour = i.hours = m),
    (i.minute = i.minutes = _e),
    (i.second = i.seconds = ke),
    (i.millisecond = i.milliseconds = ye),
    (i.utcOffset = function (e, t, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this._isUTC ? i : Et(this);
      if ("string" == typeof e) {
        if (null === (e = Vt(Ye, e))) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return (
        !this._isUTC && t && (s = Et(this)),
        (this._offset = e),
        (this._isUTC = !0),
        null != s && this.add(s, "m"),
        i !== e &&
          (!t || this._changeInProgress
            ? qt(this, C(e - i, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              _.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }),
    (i.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (i.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e), (this._isUTC = !1), e) &&
          this.subtract(Et(this), "m"),
        this
      );
    }),
    (i.parseZone = function () {
      var e;
      return (
        null != this._tzm
          ? this.utcOffset(this._tzm, !1, !0)
          : "string" == typeof this._i &&
            (null != (e = Vt(Se, this._i))
              ? this.utcOffset(e)
              : this.utcOffset(0, !0)),
        this
      );
    }),
    (i.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? W(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (i.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (i.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (i.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (i.isUtc = At),
    (i.isUTC = At),
    (i.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }),
    (i.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (i.dates = e("dates accessor is deprecated. Use date instead.", ve)),
    (i.months = e("months accessor is deprecated. Use month instead", Ge)),
    (i.years = e("years accessor is deprecated. Use year instead", Ie)),
    (i.zone = e(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function (e, t) {
        return null != e
          ? (this.utcOffset((e = "string" != typeof e ? -e : e), t), this)
          : -this.utcOffset();
      }
    )),
    (i.isDSTShifted = e(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function () {
        var e, t;
        return (
          g(this._isDSTShifted) &&
            ($((e = {}), this),
            (e = Nt(e))._a
              ? ((t = (e._isUTC ? l : W)(e._a)),
                (this._isDSTShifted =
                  this.isValid() &&
                  0 <
                    (function (e, t, n) {
                      for (
                        var s = Math.min(e.length, t.length),
                          i = Math.abs(e.length - t.length),
                          r = 0,
                          a = 0;
                        a < s;
                        a++
                      )
                        ((n && e[a] !== t[a]) || (!n && h(e[a]) !== h(t[a]))) &&
                          r++;
                      return r + i;
                    })(e._a, t.toArray())))
              : (this._isDSTShifted = !1)),
          this._isDSTShifted
        );
      }
    ));
  u = K.prototype;
  function cn(e, t, n, s) {
    var i = mt(),
      s = l().set(s, t);
    return i[n](s, e);
  }
  function fn(e, t, n) {
    if ((w(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
      return cn(e, t, n, "month");
    for (var s = [], i = 0; i < 12; i++) s[i] = cn(e, i, n, "month");
    return s;
  }
  function mn(e, t, n, s) {
    t =
      ("boolean" == typeof e
        ? w(t) && ((n = t), (t = void 0))
        : ((t = e), (e = !1), w((n = t)) && ((n = t), (t = void 0))),
      t || "");
    var i,
      r = mt(),
      a = e ? r._week.dow : 0,
      o = [];
    if (null != n) return cn(t, (n + a) % 7, s, "day");
    for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
    return o;
  }
  (u.calendar = function (e, t, n) {
    return a((e = this._calendar[e] || this._calendar.sameElse))
      ? e.call(t, n)
      : e;
  }),
    (u.longDateFormat = function (e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n
            .match(te)
            .map(function (e) {
              return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                ? e.slice(1)
                : e;
            })
            .join("")),
          this._longDateFormat[e]);
    }),
    (u.invalidDate = function () {
      return this._invalidDate;
    }),
    (u.ordinal = function (e) {
      return this._ordinal.replace("%d", e);
    }),
    (u.preparse = dn),
    (u.postformat = dn),
    (u.relativeTime = function (e, t, n, s) {
      var i = this._relativeTime[n];
      return a(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (u.pastFuture = function (e, t) {
      return a((e = this._relativeTime[0 < e ? "future" : "past"]))
        ? e(t)
        : e.replace(/%s/i, t);
    }),
    (u.set = function (e) {
      var t, n;
      for (n in e)
        c(e, n) && (a((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }),
    (u.eras = function (e, t) {
      for (
        var n, s = this._eras || mt("en")._eras, i = 0, r = s.length;
        i < r;
        ++i
      )
        switch (
          ("string" == typeof s[i].since &&
            ((n = _(s[i].since).startOf("day")), (s[i].since = n.valueOf())),
          typeof s[i].until)
        ) {
          case "undefined":
            s[i].until = 1 / 0;
            break;
          case "string":
            (n = _(s[i].until).startOf("day").valueOf()),
              (s[i].until = n.valueOf());
        }
      return s;
    }),
    (u.erasParse = function (e, t, n) {
      var s,
        i,
        r,
        a,
        o,
        u = this.eras();
      for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
        if (
          ((r = u[s].name.toUpperCase()),
          (a = u[s].abbr.toUpperCase()),
          (o = u[s].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case "N":
            case "NN":
            case "NNN":
              if (a === e) return u[s];
              break;
            case "NNNN":
              if (r === e) return u[s];
              break;
            case "NNNNN":
              if (o === e) return u[s];
          }
        else if (0 <= [r, a, o].indexOf(e)) return u[s];
    }),
    (u.erasConvertYear = function (e, t) {
      var n = e.since <= e.until ? 1 : -1;
      return void 0 === t
        ? _(e.since).year()
        : _(e.since).year() + (t - e.offset) * n;
    }),
    (u.erasAbbrRegex = function (e) {
      return (
        c(this, "_erasAbbrRegex") || an.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }),
    (u.erasNameRegex = function (e) {
      return (
        c(this, "_erasNameRegex") || an.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }),
    (u.erasNarrowRegex = function (e) {
      return (
        c(this, "_erasNarrowRegex") || an.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }),
    (u.months = function (e, t) {
      return e
        ? (y(this._months)
            ? this._months
            : this._months[
                (this._months.isFormat || He).test(t) ? "format" : "standalone"
              ])[e.month()]
        : y(this._months)
        ? this._months
        : this._months.standalone;
    }),
    (u.monthsShort = function (e, t) {
      return e
        ? (y(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort[He.test(t) ? "format" : "standalone"])[
            e.month()
          ]
        : y(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }),
    (u.monthsParse = function (e, t, n) {
      var s, i;
      if (this._monthsParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            e = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = l([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === t
              ? -1 !== (i = S.call(this._shortMonthsParse, e))
                ? i
                : null
              : -1 !== (i = S.call(this._longMonthsParse, e))
              ? i
              : null
            : "MMM" === t
            ? -1 !== (i = S.call(this._shortMonthsParse, e)) ||
              -1 !== (i = S.call(this._longMonthsParse, e))
              ? i
              : null
            : -1 !== (i = S.call(this._longMonthsParse, e)) ||
              -1 !== (i = S.call(this._shortMonthsParse, e))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = l([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              "^" + this.months(i, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[s] = new RegExp(
              "^" + this.monthsShort(i, "").replace(".", "") + "$",
              "i"
            ))),
          n ||
            this._monthsParse[s] ||
            ((i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
            (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (u.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || Ee.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (c(this, "_monthsRegex") || (this._monthsRegex = Le),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (u.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || Ee.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (u.week = function (e) {
      return qe(e, this._week.dow, this._week.doy).week;
    }),
    (u.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (u.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (u.weekdays = function (e, t) {
      return (
        (t = y(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ]),
        !0 === e ? Be(t, this._week.dow) : e ? t[e.day()] : t
      );
    }),
    (u.weekdaysMin = function (e) {
      return !0 === e
        ? Be(this._weekdaysMin, this._week.dow)
        : e
        ? this._weekdaysMin[e.day()]
        : this._weekdaysMin;
    }),
    (u.weekdaysShort = function (e) {
      return !0 === e
        ? Be(this._weekdaysShort, this._week.dow)
        : e
        ? this._weekdaysShort[e.day()]
        : this._weekdaysShort;
    }),
    (u.weekdaysParse = function (e, t, n) {
      var s, i;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            e = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = l([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === t
              ? -1 !== (i = S.call(this._weekdaysParse, e))
                ? i
                : null
              : "ddd" === t
              ? -1 !== (i = S.call(this._shortWeekdaysParse, e))
                ? i
                : null
              : -1 !== (i = S.call(this._minWeekdaysParse, e))
              ? i
              : null
            : "dddd" === t
            ? -1 !== (i = S.call(this._weekdaysParse, e)) ||
              -1 !== (i = S.call(this._shortWeekdaysParse, e)) ||
              -1 !== (i = S.call(this._minWeekdaysParse, e))
              ? i
              : null
            : "ddd" === t
            ? -1 !== (i = S.call(this._shortWeekdaysParse, e)) ||
              -1 !== (i = S.call(this._weekdaysParse, e)) ||
              -1 !== (i = S.call(this._minWeekdaysParse, e))
              ? i
              : null
            : -1 !== (i = S.call(this._minWeekdaysParse, e)) ||
              -1 !== (i = S.call(this._weekdaysParse, e)) ||
              -1 !== (i = S.call(this._shortWeekdaysParse, e))
            ? i
            : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = l([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
              "i"
            ))),
          this._weekdaysParse[s] ||
            ((i =
              "^" +
              this.weekdays(i, "") +
              "|^" +
              this.weekdaysShort(i, "") +
              "|^" +
              this.weekdaysMin(i, "")),
            (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (u.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ke),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (u.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = et),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (u.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || nt.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = tt),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (u.isPM = function (e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }),
    (u.meridiem = function (e, t, n) {
      return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    ct("en", {
      eras: [
        {
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD",
        },
        {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC",
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (1 === h((e % 100) / 10)
            ? "th"
            : 1 == t
            ? "st"
            : 2 == t
            ? "nd"
            : 3 == t
            ? "rd"
            : "th")
        );
      },
    }),
    (_.lang = e("moment.lang is deprecated. Use moment.locale instead.", ct)),
    (_.langData = e(
      "moment.langData is deprecated. Use moment.localeData instead.",
      mt
    ));
  var _n = Math.abs;
  function yn(e, t, n, s) {
    t = C(t, n);
    return (
      (e._milliseconds += s * t._milliseconds),
      (e._days += s * t._days),
      (e._months += s * t._months),
      e._bubble()
    );
  }
  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function wn(e) {
    return (4800 * e) / 146097;
  }
  function pn(e) {
    return (146097 * e) / 4800;
  }
  function vn(e) {
    return function () {
      return this.as(e);
    };
  }
  (pe = vn("ms")),
    (me = vn("s")),
    (Ce = vn("m")),
    (we = vn("h")),
    (ge = vn("d")),
    (Je = vn("w")),
    (m = vn("M")),
    (_e = vn("Q")),
    (ke = vn("y"));
  function kn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var ye = kn("milliseconds"),
    ve = kn("seconds"),
    Ie = kn("minutes"),
    u = kn("hours"),
    Mn = kn("days"),
    Dn = kn("months"),
    Sn = kn("years");
  var Yn = Math.round,
    On = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function bn(e, t, n, s) {
    var i = C(e).abs(),
      r = Yn(i.as("s")),
      a = Yn(i.as("m")),
      o = Yn(i.as("h")),
      u = Yn(i.as("d")),
      l = Yn(i.as("M")),
      h = Yn(i.as("w")),
      i = Yn(i.as("y")),
      r =
        (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) ||
        (a <= 1 ? ["m"] : a < n.m && ["mm", a]) ||
        (o <= 1 ? ["h"] : o < n.h && ["hh", o]) ||
        (u <= 1 ? ["d"] : u < n.d && ["dd", u]);
    return (
      ((r =
        (r = null != n.w ? r || (h <= 1 ? ["w"] : h < n.w && ["ww", h]) : r) ||
        (l <= 1 ? ["M"] : l < n.M && ["MM", l]) ||
        (i <= 1 ? ["y"] : ["yy", i]))[2] = t),
      (r[3] = 0 < +e),
      (r[4] = s),
      function (e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s);
      }.apply(null, r)
    );
  }
  var xn = Math.abs;
  function Tn(e) {
    return (0 < e) - (e < 0) || +e;
  }
  function Nn() {
    var e, t, n, s, i, r, a, o, u, l, h;
    return this.isValid()
      ? ((e = xn(this._milliseconds) / 1e3),
        (t = xn(this._days)),
        (n = xn(this._months)),
        (o = this.asSeconds())
          ? ((s = d(e / 60)),
            (i = d(s / 60)),
            (e %= 60),
            (s %= 60),
            (r = d(n / 12)),
            (n %= 12),
            (a = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
            (u = Tn(this._months) !== Tn(o) ? "-" : ""),
            (l = Tn(this._days) !== Tn(o) ? "-" : ""),
            (h = Tn(this._milliseconds) !== Tn(o) ? "-" : ""),
            (o < 0 ? "-" : "") +
              "P" +
              (r ? u + r + "Y" : "") +
              (n ? u + n + "M" : "") +
              (t ? l + t + "D" : "") +
              (i || s || e ? "T" : "") +
              (i ? h + i + "H" : "") +
              (s ? h + s + "M" : "") +
              (e ? h + a + "S" : ""))
          : "P0D")
      : this.localeData().invalidDate();
  }
  var U = Ct.prototype;
  return (
    (U.isValid = function () {
      return this._isValid;
    }),
    (U.abs = function () {
      var e = this._data;
      return (
        (this._milliseconds = _n(this._milliseconds)),
        (this._days = _n(this._days)),
        (this._months = _n(this._months)),
        (e.milliseconds = _n(e.milliseconds)),
        (e.seconds = _n(e.seconds)),
        (e.minutes = _n(e.minutes)),
        (e.hours = _n(e.hours)),
        (e.months = _n(e.months)),
        (e.years = _n(e.years)),
        this
      );
    }),
    (U.add = function (e, t) {
      return yn(this, e, t, 1);
    }),
    (U.subtract = function (e, t) {
      return yn(this, e, t, -1);
    }),
    (U.as = function (e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ("month" === (e = o(e)) || "quarter" === e || "year" === e)
        switch (((t = this._days + s / 864e5), (n = this._months + wn(t)), e)) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(pn(this._months))), e)) {
          case "week":
            return t / 7 + s / 6048e5;
          case "day":
            return t + s / 864e5;
          case "hour":
            return 24 * t + s / 36e5;
          case "minute":
            return 1440 * t + s / 6e4;
          case "second":
            return 86400 * t + s / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + s;
          default:
            throw new Error("Unknown unit " + e);
        }
    }),
    (U.asMilliseconds = pe),
    (U.asSeconds = me),
    (U.asMinutes = Ce),
    (U.asHours = we),
    (U.asDays = ge),
    (U.asWeeks = Je),
    (U.asMonths = m),
    (U.asQuarters = _e),
    (U.asYears = ke),
    (U.valueOf = function () {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * h(this._months / 12)
        : NaN;
    }),
    (U._bubble = function () {
      var e = this._milliseconds,
        t = this._days,
        n = this._months,
        s = this._data;
      return (
        (0 <= e && 0 <= t && 0 <= n) ||
          (e <= 0 && t <= 0 && n <= 0) ||
          ((e += 864e5 * gn(pn(n) + t)), (n = t = 0)),
        (s.milliseconds = e % 1e3),
        (e = d(e / 1e3)),
        (s.seconds = e % 60),
        (e = d(e / 60)),
        (s.minutes = e % 60),
        (e = d(e / 60)),
        (s.hours = e % 24),
        (t += d(e / 24)),
        (n += e = d(wn(t))),
        (t -= gn(pn(e))),
        (e = d(n / 12)),
        (n %= 12),
        (s.days = t),
        (s.months = n),
        (s.years = e),
        this
      );
    }),
    (U.clone = function () {
      return C(this);
    }),
    (U.get = function (e) {
      return (e = o(e)), this.isValid() ? this[e + "s"]() : NaN;
    }),
    (U.milliseconds = ye),
    (U.seconds = ve),
    (U.minutes = Ie),
    (U.hours = u),
    (U.days = Mn),
    (U.weeks = function () {
      return d(this.days() / 7);
    }),
    (U.months = Dn),
    (U.years = Sn),
    (U.humanize = function (e, t) {
      var n, s;
      return this.isValid()
        ? ((n = !1),
          (s = On),
          "object" == typeof e && ((t = e), (e = !1)),
          "boolean" == typeof e && (n = e),
          "object" == typeof t &&
            ((s = Object.assign({}, On, t)), null != t.s) &&
            null == t.ss &&
            (s.ss = t.s - 1),
          (e = this.localeData()),
          (t = bn(this, !n, s, e)),
          n && (t = e.pastFuture(+this, t)),
          e.postformat(t))
        : this.localeData().invalidDate();
    }),
    (U.toISOString = Nn),
    (U.toString = Nn),
    (U.toJSON = Nn),
    (U.locale = Xt),
    (U.localeData = Kt),
    (U.toIsoString = e(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Nn
    )),
    (U.lang = Xe),
    s("X", 0, 0, "unix"),
    s("x", 0, 0, "valueOf"),
    k("x", De),
    k("X", /[+-]?\d+(\.\d{1,3})?/),
    D("X", function (e, t, n) {
      n._d = new Date(1e3 * parseFloat(e));
    }),
    D("x", function (e, t, n) {
      n._d = new Date(h(e));
    }),
    (_.version = "2.29.4"),
    (H = W),
    (_.fn = i),
    (_.min = function () {
      return Rt("isBefore", [].slice.call(arguments, 0));
    }),
    (_.max = function () {
      return Rt("isAfter", [].slice.call(arguments, 0));
    }),
    (_.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (_.utc = l),
    (_.unix = function (e) {
      return W(1e3 * e);
    }),
    (_.months = function (e, t) {
      return fn(e, t, "months");
    }),
    (_.isDate = V),
    (_.locale = ct),
    (_.invalid = I),
    (_.duration = C),
    (_.isMoment = v),
    (_.weekdays = function (e, t, n) {
      return mn(e, t, n, "weekdays");
    }),
    (_.parseZone = function () {
      return W.apply(null, arguments).parseZone();
    }),
    (_.localeData = mt),
    (_.isDuration = Ut),
    (_.monthsShort = function (e, t) {
      return fn(e, t, "monthsShort");
    }),
    (_.weekdaysMin = function (e, t, n) {
      return mn(e, t, n, "weekdaysMin");
    }),
    (_.defineLocale = ft),
    (_.updateLocale = function (e, t) {
      var n, s;
      return (
        null != t
          ? ((s = ot),
            null != R[e] && null != R[e].parentLocale
              ? R[e].set(X(R[e]._config, t))
              : ((t = X((s = null != (n = dt(e)) ? n._config : s), t)),
                null == n && (t.abbr = e),
                ((s = new K(t)).parentLocale = R[e]),
                (R[e] = s)),
            ct(e))
          : null != R[e] &&
            (null != R[e].parentLocale
              ? ((R[e] = R[e].parentLocale), e === ct() && ct(e))
              : null != R[e] && delete R[e]),
        R[e]
      );
    }),
    (_.locales = function () {
      return ee(R);
    }),
    (_.weekdaysShort = function (e, t, n) {
      return mn(e, t, n, "weekdaysShort");
    }),
    (_.normalizeUnits = o),
    (_.relativeTimeRounding = function (e) {
      return void 0 === e ? Yn : "function" == typeof e && ((Yn = e), !0);
    }),
    (_.relativeTimeThreshold = function (e, t) {
      return (
        void 0 !== On[e] &&
        (void 0 === t ? On[e] : ((On[e] = t), "s" === e && (On.ss = t - 1), !0))
      );
    }),
    (_.calendarFormat = function (e, t) {
      return (e = e.diff(t, "days", !0)) < -6
        ? "sameElse"
        : e < -1
        ? "lastWeek"
        : e < 0
        ? "lastDay"
        : e < 1
        ? "sameDay"
        : e < 2
        ? "nextDay"
        : e < 7
        ? "nextWeek"
        : "sameElse";
    }),
    (_.prototype = i),
    (_.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM",
    }),
    _
  );
});
