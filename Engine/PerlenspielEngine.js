const PS = (function () {
    "use strict";
    const e = function (...e) {
            let t = Object.create(null);
            return Object.assign(t, ...e), t;
        },
        t = "sprite_",
        n = "pathmap_",
        r = "Too many arguments",
        o = "Missing argument(s)",
        i = 512,
        l = 1.25,
        a = 8,
        u = 64,
        s = 65536,
        d = 256,
        f = Object.create(null),
        c = 1.4142,
        g = e({ png: !0, jpg: !0, jpeg: !0, bmp: !0, gif: !0 }),
        h = [
            "a0",
            "bb0",
            "b0",
            "c1",
            "db1",
            "d1",
            "eb1",
            "e1",
            "f1",
            "gb1",
            "g1",
            "ab1",
            "a1",
            "bb1",
            "b1",
            "c2",
            "db2",
            "d2",
            "eb2",
            "e2",
            "f2",
            "gb2",
            "g2",
            "ab2",
            "a2",
            "bb2",
            "b2",
            "c3",
            "db3",
            "d3",
            "eb3",
            "e3",
            "f3",
            "gb3",
            "g3",
            "ab3",
            "a3",
            "bb3",
            "b3",
            "c4",
            "db4",
            "d4",
            "eb4",
            "e4",
            "f4",
            "gb4",
            "g4",
            "ab4",
            "a4",
            "bb4",
            "b4",
            "c5",
            "db5",
            "d5",
            "eb5",
            "e5",
            "f5",
            "gb5",
            "g5",
            "ab5",
            "a5",
            "bb5",
            "b5",
            "c6",
            "db6",
            "d6",
            "eb6",
            "e6",
            "f6",
            "gb6",
            "g6",
            "ab6",
            "a6",
            "bb6",
            "b6",
            "c7",
            "db7",
            "d7",
            "eb7",
            "e7",
            "f7",
            "gb7",
            "g7",
            "ab7",
            "a7",
            "bb7",
            "b7",
            "c8",
        ],
        p = [
            "a2",
            "bb2",
            "b2",
            "c3",
            "db3",
            "d3",
            "eb3",
            "e3",
            "f3",
            "gb3",
            "g3",
            "ab3",
            "a3",
            "bb3",
            "b3",
            "c4",
            "db4",
            "d4",
            "eb4",
            "e4",
            "f4",
            "gb4",
            "g4",
            "ab4",
            "a4",
            "bb4",
            "b4",
            "c5",
            "db5",
            "d5",
            "eb5",
            "e5",
            "f5",
            "gb5",
            "g5",
            "ab5",
            "a5",
            "bb5",
            "b5",
            "c6",
            "db6",
            "d6",
            "eb6",
            "e6",
            "f6",
            "gb6",
            "g6",
            "ab6",
            "a6",
            "bb6",
            "b6",
            "c7",
            "db7",
            "d7",
            "eb7",
            "e7",
            "f7",
        ],
        m = [
            "a4",
            "bb4",
            "b4",
            "c5",
            "db5",
            "d5",
            "eb5",
            "e5",
            "f5",
            "gb5",
            "g5",
            "ab5",
            "a5",
            "bb5",
            "b5",
            "c6",
            "db6",
            "d6",
            "eb6",
            "e6",
            "f6",
            "gb6",
            "g6",
            "ab6",
            "a6",
            "bb6",
            "b6",
            "c7",
            "db7",
            "d7",
            "eb7",
            "e7",
            "f7",
            "gb7",
            "g7",
            "ab7",
            "a7",
            "bb7",
            "b7",
        ],
        b = e({
            cover: e({
                bgColor: 16777215,
                textColor: 0,
                text: "Touch image to begin",
                file: "cover.png",
            }),
            grid: e({
                width: 512,
                x: 8,
                y: 8,
                max: 32,
                plane: 0,
                color: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                    rgb: 16777215,
                    str: "rgba(255,255,255,1)",
                }),
                shadow: e({
                    show: !1,
                    r: 192,
                    g: 192,
                    b: 192,
                    a: 255,
                    rgb: 12632256,
                    str: "rgba(192,192,192,1)",
                    params: "0px 0px 64px 8px ",
                }),
                padLeft: 0,
                padRight: 0,
                ready: !1,
                timeExit: 0,
            }),
            status: e({
                text: "",
                label: "",
                exec: null,
                color: e({ r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" }),
            }),
            fader: e({
                active: !1,
                kill: !1,
                r: 0,
                g: 0,
                b: 0,
                rgb: null,
                tr: 0,
                tg: 0,
                tb: 0,
                trgb: 0,
                tstr: null,
                step: 0,
                rate: 0,
                onStep: null,
                onEnd: null,
                params: null,
            }),
            bead: e({
                dirty: !0,
                active: !0,
                visible: !0,
                planes: null,
                color: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                    rgb: 16777215,
                    str: "rgba(255,255,255,1)",
                }),
                bgColor: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 0,
                    rgb: 16777215,
                    str: "rgba(255,255,255,0)",
                }),
                fbgColor: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                    rgb: 16777215,
                    str: "rgba(255,255,255,1)",
                }),
                radius: 0,
                scale: 100,
                minimum: 8,
                data: 0,
                exec: null,
                timeTouch: 0,
                timeRelease: 0,
                timeEnter: 0,
                timeExit: 0,
                border: e({
                    width: 1,
                    equal: !0,
                    top: 1,
                    left: 1,
                    bottom: 1,
                    right: 1,
                    color: e({
                        r: 128,
                        g: 128,
                        b: 128,
                        a: 255,
                        rgb: 8421504,
                        str: "rgba(128,128,128,1)",
                    }),
                    max: 0,
                    gmax: 0,
                }),
                glyph: e({
                    str: "",
                    code: 0,
                    scale: 100,
                    size: 0,
                    x: 0,
                    y: 0,
                    color: e({ r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" }),
                    font: null,
                }),
            }),
            paths: e({ no_diagonals: !1, cut_corners: !1 }),
            audio: e({
                volume: 0.5,
                max_volume: 1,
                path: "https://perlenspiel.net/audio/",
                fileTypes: ["ogg", "mp3"],
                loop: !1,
                error_sound: "fx_uhoh",
            }),
            font: e({
                name: "'Droid Sans', sans-serif",
                file: "https://fonts.googleapis.com/css?family=Droid+Sans.css",
            }),
        }),
        S = e({
            engine: "Perlenspiel",
            major: 3,
            minor: 3,
            revision: 13,
            audio: null,
            host: null,
            inputs: e({ touch: !1, gamepad: !1 }),
            date: null,
        }),
        _ = [],
        P = [],
        E = [],
        R = [],
        y = [];
    let v = null,
        T = !1;
    const w = e({ capture: !1 }),
        x = e({ capture: !0 }),
        A = e({ passive: !0 }),
        U = e({ once: !0 });
    let L, C, N, D, F;
    const O = [];
    let k,
        M,
        I = !1,
        B = 0,
        Y = null;
    const W = [];
    let K = 0;
    const j = [];
    let z = 0;
    const G = [];
    let q = 0;
    const H = [];
    let V;
    const $ = function () {
        (H.length = 0), (V = 0);
    };
    let X = null,
        Q = "",
        J = null,
        Z = 50,
        ee = 1,
        te = !1;
    const ne = [],
        re = [],
        oe = [],
        ie = [],
        le = [];
    let ae,
        ue,
        se,
        de,
        fe,
        ce = !1,
        ge = !1,
        he = !0,
        pe = !1,
        me = !1,
        be = !1,
        Se = -1,
        _e = -1,
        Pe = null,
        Ee = null,
        Re = !1,
        ye = !1;
    const ve = [];
    let Te = 0;
    const we = "number",
        xe = "string",
        Ae = "object",
        Ue = "function",
        Le = "undefined",
        Ce = "array",
        Ne = function (e) {
            let t = typeof e;
            if (t === we) {
                if (Number.isNaN(e)) return "nan";
                if (Number.isInteger(e) && !Number.isSafeInteger(e)) return "unsafe";
                if (!Number.isFinite(e)) return "infinity";
            } else if (t === Ae) {
                if (!e) return "null";
                if (e instanceof Array) return Ce;
            }
            return t;
        },
        De = function (e, t, n, r = !1) {
            return !0 === e || !1 === e
                ? e
                : void 0 === e
                    ? r
                    : null !== e &&
                    0 !== e &&
                    (e === PS.CURRENT
                        ? t
                        : e === PS.DEFAULT
                            ? n
                            : Ne(e) === we || PS.ERROR);
        },
        Fe = function (e) {
            return (
                e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0),
                    e.preventDefault(),
                    !1
            );
        },
        Oe = function (e, t, n) {
            let r = void 0 !== t ? t : 0,
                o = void 0 !== n ? n : 10,
                i = "";
            16 === o ? (i = "0x") : 8 === o ? (i = "0o") : 2 === o && (i = "0b");
            let l = Math.abs(Math.floor(e)).toString(o).toUpperCase();
            if (r) {
                let e = l.length;
                for (; e < r; ) (l = "0" + l), (e += 1);
            }
            return i + l;
        },
        ke = function (e) {
            Object.getOwnPropertyNames(e).forEach(function (t) {
                Object.defineProperty(e, t, { writable: !1, configurable: !1 });
            });
        };
    let Me = 802701;
    const Ie = function (e, t) {
        let n,
            r = Math.floor(e);
        return r < 2
            ? 1
            : (t && ((n = Me), (Me = t)),
                (r =
                    (function () {
                        let e = 1e4 * Math.sin(Me);
                        return (Me += 1), e - Math.floor(e);
                    })() * r),
            t && (Me = n),
                (r = Math.floor(r) + 1));
    };
    let Be = null,
        Ye = null;
    !(function () {
        let e = {};
        const t = function (e, t) {
                t && !e._duration && (e._duration = t.duration),
                0 === Object.keys(e._sprite).length &&
                (e._sprite = { __default: [0, 1e3 * e._duration] }),
                "loaded" !== e._state &&
                ((e._state = "loaded"),
                    e._emit("load", e._newID, e._src),
                    e._loadQueue());
            },
            n = function (n, r) {
                const o = function () {
                    r._emit("loaderror", null, "Data decode failed @ '" + r._src + "'");
                };
                Ye.ctx.decodeAudioData(
                    n,
                    function (n) {
                        n && r._sounds.length > 0 ? ((e[r._src] = n), t(r, n)) : o();
                    },
                    o
                );
            },
            r = function () {
                try {
                    "undefined" != typeof AudioContext
                        ? (Ye.ctx = new AudioContext())
                        : "undefined" != typeof webkitAudioContext
                            ? (Ye.ctx = new webkitAudioContext())
                            : (Ye.usingWebAudio = !1);
                } catch (e) {
                    Ye.usingWebAudio = !1;
                }
                let e = /iP(hone|od|ad)/.test(Ye._navigator && Ye._navigator.platform),
                    t =
                        Ye._navigator &&
                        Ye._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    n = t ? parseInt(t[1], 10) : null;
                if (e && n && n < 9) {
                    let e = /safari/.test(
                        Ye._navigator && Ye._navigator.userAgent.toLowerCase()
                    );
                    ((Ye._navigator && Ye._navigator.standalone && !e) ||
                        (Ye._navigator && !Ye._navigator.standalone && !e)) &&
                    (Ye.usingWebAudio = !1);
                }
                Ye.usingWebAudio &&
                ((Ye.masterGain =
                    void 0 === Ye.ctx.createGain
                        ? Ye.ctx.createGainNode()
                        : Ye.ctx.createGain()),
                    Ye.masterGain.gain.setValueAtTime(
                        Ye._muted ? 0 : 1,
                        Ye.ctx.currentTime
                    ),
                    Ye.masterGain.connect(Ye.ctx.destination)),
                    Ye._setup();
            },
            o = function (e) {
                (this._parent = e), this.init();
            };
        (o.prototype = {
            init: function () {
                const e = this._parent;
                return (
                    (this._muted = e._muted),
                        (this._loop = e._loop),
                        (this._volume = e._volume),
                        (this._rate = e._rate),
                        (this._seek = 0),
                        (this._paused = !0),
                        (this._ended = !0),
                        (this._sprite = "__default"),
                        (this._id = Ye._counter),
                        (Ye._counter += 1),
                        (e._newID = this._id),
                        e._sounds.push(this),
                        this.create(),
                        this
                );
            },
            create: function () {
                const e = this,
                    t = e._parent;
                let n = Ye._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return (
                    t._webAudio
                        ? ((e._node =
                            void 0 === Ye.ctx.createGain
                                ? Ye.ctx.createGainNode()
                                : Ye.ctx.createGain()),
                            e._node.gain.setValueAtTime(n, Ye.ctx.currentTime),
                            (e._node.paused = !0),
                            e._node.connect(Ye.masterGain))
                        : ((e._node = new Audio()),
                            (e._errorFn = e._errorListener.bind(e)),
                            e._node.addEventListener("error", e._errorFn, !1),
                            (e._loadFn = e._loadListener.bind(e)),
                            e._node.addEventListener(Ye._canPlayEvent, e._loadFn, !1),
                            (e._node.src = t._src),
                            (e._node.preload = "auto"),
                            (e._node.volume = n * Ye.volume()),
                            e._node.load()),
                        e
                );
            },
            reset: function () {
                const e = this._parent;
                return (
                    (this._muted = e._muted),
                        (this._loop = e._loop),
                        (this._volume = e._volume),
                        (this._rate = e._rate),
                        (this._seek = 0),
                        (this._rateSeek = 0),
                        (this._paused = !0),
                        (this._ended = !0),
                        (this._sprite = "__default"),
                        (this._id = Ye._counter),
                        (Ye._counter += 1),
                        (e._newID = this._id),
                        this
                );
            },
            _errorListener: function () {
                const e = this._parent;
                this._parent._emit(
                    "loaderror",
                    null,
                    "Load failure on '" +
                    e._src +
                    "' [code : " +
                    (this._node.error ? this._node.error.code : 0) +
                    "]"
                ),
                    this._node.removeEventListener("error", this._errorFn, !1);
            },
            _loadListener: function () {
                const e = this._parent;
                (e._duration = Math.ceil(10 * this._node.duration) / 10),
                0 === Object.keys(e._sprite).length &&
                (e._sprite = { __default: [0, 1e3 * e._duration] }),
                "loaded" !== e._state &&
                ((e._state = "loaded"),
                    e._emit("load", e._newID, e._src),
                    e._loadQueue()),
                    this._node.removeEventListener(Ye._canPlayEvent, this._loadFn, !1);
            },
        }),
            ((Be = function (e) {
                const t = this;
                if (e) {
                    if (!e.src || 0 === e.src.length)
                        return void console.error(
                            "An array of source files must be passed with any new Howl."
                        );
                    t.init(e);
                }
            }).prototype = {
                init: function (e) {
                    const t = this;
                    return (
                        Ye.ctx || r(),
                            (t._autoplay = e.autoplay || !1),
                            (t._format = "string" != typeof e.format ? e.format : [e.format]),
                            (t._html5 = e.html5 || !1),
                            (t._muted = e.mute || !1),
                            (t._loop = e.loop || !1),
                            (t._pool = e.pool || 5),
                            (t._preload = "boolean" != typeof e.preload || e.preload),
                            (t._rate = e.rate || 1),
                            (t._sprite = e.sprite || {}),
                            (t._src = "string" != typeof e.src ? e.src : [e.src]),
                            (t._volume = void 0 !== e.volume ? e.volume : 1),
                            (t._xhrWithCredentials = e.xhrWithCredentials || !1),
                            (t._duration = 0),
                            (t._state = "unloaded"),
                            (t._sounds = []),
                            (t._endTimers = {}),
                            (t._queue = []),
                            (t._playLock = !1),
                            (t._onend = e.onend ? [{ fn: e.onend }] : []),
                            (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                            (t._onload = e.onload ? [{ fn: e.onload }] : []),
                            (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                            (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                            (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                            (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                            (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                            (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                            (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                            (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                            (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                            (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                            (t._onresume = []),
                            (t._newID = 0),
                            (t._webAudio = Ye.usingWebAudio && !t._html5),
                        void 0 !== Ye.ctx &&
                        Ye.ctx &&
                        Ye.mobileAutoEnable &&
                        Ye._enableMobileAudio(),
                            Ye._howls.push(t),
                        t._autoplay &&
                        t._queue.push({
                            event: "play",
                            action: function () {
                                t.play();
                            },
                        }),
                        t._preload && t.load(),
                            t
                    );
                },
                load: function () {
                    const r = this;
                    let i,
                        l,
                        a = null;
                    if (Ye.noAudio)
                        return (
                            r._emit(
                                "loaderror",
                                null,
                                "Audio is not supported on this browser"
                            ),
                                null
                        );
                    "string" == typeof r._src && (r._src = [r._src]);
                    for (let e = 0; e < r._src.length; e++) {
                        if (r._format && r._format[e]) i = r._format[e];
                        else {
                            if (!(l = r._src[e]) || "string" != typeof l)
                                return r._emit("loaderror", null, "Audio source invalid"), null;
                            (i = /^data:audio\/([^;,]+);/i.exec(l)) ||
                            (i = /\.([^.]+)$/.exec(l.split("?", 1)[0])),
                            i && (i = i[1].toLowerCase());
                        }
                        if (!i)
                            return (
                                r._emit("loaderror", null, "No valid file extension found"),
                                    null
                            );
                        if (i && Ye.codecs(i)) {
                            a = r._src[e];
                            break;
                        }
                    }
                    return a
                        ? ((r._src = a),
                            (r._state = "loading"),
                        "https:" === window.location.protocol &&
                        "http:" === a.slice(0, 5) &&
                        ((r._html5 = !0), (r._webAudio = !1)),
                            new o(r),
                        r._webAudio &&
                        (function (r) {
                            let o = r._src;
                            if (e[o])
                                return (r._duration = e[o].duration), void t(r, null);
                            if (/^data:[^;]+;base64,/.test(o)) {
                                let e = window.atob(o.split(",")[1]),
                                    t = new Uint8Array(e.length);
                                for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
                                n(t.buffer, r);
                            } else {
                                let t = new XMLHttpRequest();
                                t.open("GET", o, !0),
                                    (t.withCredentials = r._xhrWithCredentials),
                                    (t.responseType = "arraybuffer"),
                                    (t.onload = function () {
                                        let e = (t.status + "")[0];
                                        "0" === e || "2" === e || "3" === e
                                            ? n(t.response, r)
                                            : r._emit(
                                                "loaderror",
                                                null,
                                                "Failure loading '" +
                                                o +
                                                "' [status = " +
                                                t.status +
                                                ", code " +
                                                e +
                                                "]"
                                            );
                                    }),
                                    (t.onerror = function () {
                                        r._webAudio &&
                                        ((r._html5 = !0),
                                            (r._webAudio = !1),
                                            (r._sounds = []),
                                            delete e[o],
                                            r.load());
                                    }),
                                    (function (e) {
                                        try {
                                            e.send();
                                        } catch (t) {
                                            e.onerror();
                                        }
                                    })(t);
                            }
                        })(r),
                            r)
                        : (r._emit("loaderror", null, "Unsupported file type"), null);
                },
                play: function (e, t) {
                    const n = this;
                    let r,
                        o,
                        i,
                        l,
                        a,
                        u,
                        s,
                        d,
                        f,
                        c,
                        g,
                        h,
                        p,
                        m = null;
                    if ("number" == typeof e) (m = e), (e = null);
                    else {
                        if ("string" == typeof e && "loaded" === n._state && !n._sprite[e])
                            return null;
                        if (void 0 === e) {
                            for (e = "__default", r = 0, o = 0; o < n._sounds.length; o++)
                                n._sounds[o]._paused &&
                                !n._sounds[o]._ended &&
                                (r++, (m = n._sounds[o]._id));
                            1 === r ? (e = null) : (m = null);
                        }
                    }
                    return (i = m ? n._soundById(m) : n._inactiveSound())
                        ? (m && !e && (e = i._sprite || "__default"),
                            "loaded" !== n._state
                                ? ((i._sprite = e),
                                    (i._ended = !1),
                                    (l = i._id),
                                    n._queue.push({
                                        event: "play",
                                        action: function () {
                                            n.play(l);
                                        },
                                    }),
                                    l)
                                : m && !i._paused
                                    ? (t || n._loadQueue("play"), i._id)
                                    : (n._webAudio && Ye._autoResume(),
                                        (a = Math.max(
                                            0,
                                            i._seek > 0 ? i._seek : n._sprite[e][0] / 1e3
                                        )),
                                        (u = Math.max(
                                            0,
                                            (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - a
                                        )),
                                        (s = (1e3 * u) / Math.abs(i._rate)),
                                        (i._paused = !1),
                                        (i._ended = !1),
                                        (i._sprite = e),
                                        (i._seek = a),
                                        (i._start = n._sprite[e][0] / 1e3),
                                        (i._stop = (n._sprite[e][0] + n._sprite[e][1]) / 1e3),
                                        (i._loop = !(!i._loop && !n._sprite[e][2])),
                                        i._seek >= i._stop
                                            ? void n._ended(i)
                                            : ((d = i._node),
                                                n._webAudio
                                                    ? ((f = function () {
                                                        n._refreshBuffer(i),
                                                            (c = i._muted || n._muted ? 0 : i._volume),
                                                            d.gain.setValueAtTime(c, Ye.ctx.currentTime),
                                                            (i._playStart = Ye.ctx.currentTime),
                                                            void 0 === d.bufferSource.start
                                                                ? i._loop
                                                                    ? d.bufferSource.noteGrainOn(0, a, 86400)
                                                                    : d.bufferSource.noteGrainOn(0, a, u)
                                                                : i._loop
                                                                    ? d.bufferSource.start(0, a, 86400)
                                                                    : d.bufferSource.start(0, a, u),
                                                        s !== 1 / 0 &&
                                                        (n._endTimers[i._id] = setTimeout(
                                                            n._ended.bind(n, i),
                                                            s
                                                        )),
                                                        t ||
                                                        setTimeout(function () {
                                                            n._emit("play", i._id, null);
                                                        }, 0);
                                                    }),
                                                        "running" === Ye.state
                                                            ? f()
                                                            : (n.once("resume", f), n._clearTimer(i._id)))
                                                    : ((g = function () {
                                                        (d.currentTime = a),
                                                            (d.muted =
                                                                i._muted || n._muted || Ye._muted || d.muted),
                                                            (d.volume = i._volume * Ye.volume()),
                                                            (d.playbackRate = i._rate);
                                                        try {
                                                            if (
                                                                (d.play(),
                                                                t || n._emit("play", i._id, null),
                                                                    (d.playbackRate = i._rate),
                                                                    d.paused)
                                                            )
                                                                return void n._emit(
                                                                    "playerror",
                                                                    i._id,
                                                                    "Playback error on '" + n._src + "' [code 2]"
                                                                );
                                                            "__default" !== e || i._loop
                                                                ? (n._endTimers[i._id] = setTimeout(
                                                                    n._ended.bind(n, i),
                                                                    s
                                                                ))
                                                                : ((n._endTimers[i._id] = function () {
                                                                    n._ended(i),
                                                                        d.removeEventListener(
                                                                            "ended",
                                                                            n._endTimers[i._id],
                                                                            !1
                                                                        );
                                                                }),
                                                                    d.addEventListener(
                                                                        "ended",
                                                                        n._endTimers[i._id],
                                                                        !1
                                                                    ));
                                                        } catch (e) {
                                                            n._emit(
                                                                "playerror",
                                                                i._id,
                                                                "Playback error on '" +
                                                                n._src +
                                                                "' [code 3, " +
                                                                e.message +
                                                                "]"
                                                            );
                                                        }
                                                    }),
                                                        (h =
                                                            (window && window.ejecta) ||
                                                            (!d.readyState && Ye._navigator.isCocoonJS)),
                                                        d.readyState >= 3 || h
                                                            ? g()
                                                            : ((p = function () {
                                                                g(),
                                                                    d.removeEventListener(
                                                                        Ye._canPlayEvent,
                                                                        p,
                                                                        !1
                                                                    );
                                                            }),
                                                                d.addEventListener(Ye._canPlayEvent, p, !1),
                                                                n._clearTimer(i._id))),
                                                i._id)))
                        : null;
                },
                pause: function (e) {
                    const t = this;
                    if ("loaded" !== t._state || t._playLock)
                        return (
                            t._queue.push({
                                event: "pause",
                                action: function () {
                                    t.pause(e);
                                },
                            }),
                                t
                        );
                    let n = t._getSoundIds(e);
                    for (let e = 0; e < n.length; e++) {
                        t._clearTimer(n[e]);
                        let r = t._soundById(n[e]);
                        if (
                            r &&
                            !r._paused &&
                            ((r._seek = t.seek(n[e])),
                                (r._rateSeek = 0),
                                (r._paused = !0),
                                t._stopFade(n[e]),
                                r._node)
                        )
                            if (t._webAudio) {
                                if (!r._node.bufferSource) continue;
                                void 0 === r._node.bufferSource.stop
                                    ? r._node.bufferSource.noteOff(0)
                                    : r._node.bufferSource.stop(0),
                                    t._cleanBuffer(r._node);
                            } else
                                (isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
                                r._node.pause();
                        arguments[1] || t._emit("pause", r ? r._id : null, null);
                    }
                    return t;
                },
                stop: function (e, t) {
                    const n = this;
                    if ("loaded" !== n._state || n._playLock)
                        return (
                            n._queue.push({
                                event: "stop",
                                action: function () {
                                    n.stop(e);
                                },
                            }),
                                n
                        );
                    let r = n._getSoundIds(e);
                    for (let e = 0; e < r.length; e++) {
                        n._clearTimer(r[e]);
                        let o = n._soundById(r[e]);
                        o &&
                        ((o._seek = o._start || 0),
                            (o._rateSeek = 0),
                            (o._paused = !0),
                            (o._ended = !0),
                            n._stopFade(r[e]),
                        o._node &&
                        (n._webAudio
                            ? o._node.bufferSource &&
                            (void 0 === o._node.bufferSource.stop
                                ? o._node.bufferSource.noteOff(0)
                                : o._node.bufferSource.stop(0),
                                n._cleanBuffer(o._node))
                            : (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                            ((o._node.currentTime = o._start || 0), o._node.pause())),
                        t || n._emit("stop", o._id, null));
                    }
                    return n;
                },
                mute: function (e, t) {
                    const n = this;
                    if ("loaded" !== n._state || n._playLock)
                        return (
                            n._queue.push({
                                event: "mute",
                                action: function () {
                                    n.mute(e, t);
                                },
                            }),
                                n
                        );
                    if (void 0 === t) {
                        if ("boolean" != typeof e) return n._muted;
                        n._muted = e;
                    }
                    let r = n._getSoundIds(t);
                    for (let t = 0; t < r.length; t++) {
                        let o = n._soundById(r[t]);
                        o &&
                        ((o._muted = e),
                        o._interval && n._stopFade(o._id),
                            n._webAudio && o._node
                                ? o._node.gain.setValueAtTime(
                                    e ? 0 : o._volume,
                                    Ye.ctx.currentTime
                                )
                                : o._node && (o._node.muted = !!Ye._muted || e),
                            n._emit("mute", o._id, null));
                    }
                    return n;
                },
                volume: function () {
                    const e = this;
                    let t,
                        n,
                        r,
                        o,
                        i,
                        l = arguments;
                    if (0 === l.length) return e._volume;
                    if (
                        (1 === l.length || (2 === l.length && void 0 === l[1])
                            ? (n = (t = e._getSoundIds()).indexOf(l[0])) >= 0
                                ? (i = parseInt(l[0], 10))
                                : (o = parseFloat(l[0]))
                            : l.length >= 2 &&
                            ((o = parseFloat(l[0])), (i = parseInt(l[1], 10))),
                            !(void 0 !== o && o >= 0 && o <= 1))
                    )
                        return (r = i ? e._soundById(i) : e._sounds[0]) ? r._volume : 0;
                    if ("loaded" !== e._state || e._playLock)
                        return (
                            e._queue.push({
                                event: "volume",
                                action: function () {
                                    e.volume.apply(e, l);
                                },
                            }),
                                e
                        );
                    void 0 === i && (e._volume = o), (i = e._getSoundIds(i));
                    for (let t = 0; t < i.length; t++)
                        (r = e._soundById(i[t])) &&
                        ((r._volume = o),
                        l[2] || e._stopFade(i[t]),
                            e._webAudio && r._node && !r._muted
                                ? r._node.gain.setValueAtTime(o, Ye.ctx.currentTime)
                                : r._node && !r._muted && (r._node.volume = o * Ye.volume()),
                            e._emit("volume", r._id, null));
                    return e;
                },
                fade: function (e, t, n, r) {
                    const o = this;
                    if ("loaded" !== o._state || o._playLock)
                        return (
                            o._queue.push({
                                event: "fade",
                                action: function () {
                                    o.fade(e, t, n, r);
                                },
                            }),
                                o
                        );
                    o.volume(e, r);
                    let i = o._getSoundIds(r);
                    for (let l = 0; l < i.length; l++) {
                        let a = o._soundById(i[l]);
                        if (a) {
                            if ((r || o._stopFade(i[l]), o._webAudio && !a._muted)) {
                                let r = Ye.ctx.currentTime,
                                    o = r + n / 1e3;
                                (a._volume = e),
                                    a._node.gain.setValueAtTime(e, r),
                                    a._node.gain.linearRampToValueAtTime(t, o);
                            }
                            o._startFadeInterval(a, e, t, n, i[l], void 0 === r);
                        }
                    }
                    return o;
                },
                _startFadeInterval: function (e, t, n, r, o, i) {
                    const l = this;
                    let a = t,
                        u = n - t,
                        s = Math.abs(u / 0.01),
                        d = Math.max(4, s > 0 ? r / s : r),
                        f = Date.now();
                    (e._fadeTo = n),
                        (e._interval = setInterval(function () {
                            let o = (Date.now() - f) / r;
                            (f = Date.now()),
                                (a += u * o),
                                (a = Math.max(0, a)),
                                (a = Math.min(1, a)),
                                (a = Math.round(100 * a) / 100),
                                l._webAudio ? (e._volume = a) : l.volume(a, e._id, !0),
                            i && (l._volume = a),
                            ((n < t && a <= n) || (n > t && a >= n)) &&
                            (clearInterval(e._interval),
                                (e._interval = null),
                                (e._fadeTo = null),
                                l.volume(n, e._id),
                                l._emit("fade", e._id, null));
                        }, d));
                },
                _stopFade: function (e) {
                    const t = this;
                    let n = t._soundById(e);
                    return (
                        n &&
                        n._interval &&
                        (t._webAudio &&
                        n._node.gain.cancelScheduledValues(Ye.ctx.currentTime),
                            clearInterval(n._interval),
                            (n._interval = null),
                            t.volume(n._fadeTo, e),
                            (n._fadeTo = null),
                            t._emit("fade", e, null)),
                            t
                    );
                },
                loop: function () {
                    const e = this;
                    let t,
                        n,
                        r,
                        o = arguments;
                    if (0 === o.length) return e._loop;
                    if (1 === o.length) {
                        if ("boolean" != typeof o[0])
                            return !!(r = e._soundById(parseInt(o[0], 10))) && r._loop;
                        (t = o[0]), (e._loop = t);
                    } else 2 === o.length && ((t = o[0]), (n = parseInt(o[1], 10)));
                    let i = e._getSoundIds(n);
                    for (let n = 0; n < i.length; n++)
                        (r = e._soundById(i[n])) &&
                        ((r._loop = t),
                        e._webAudio &&
                        r._node &&
                        r._node.bufferSource &&
                        ((r._node.bufferSource.loop = t),
                        t &&
                        ((r._node.bufferSource.loopStart = r._start || 0),
                            (r._node.bufferSource.loopEnd = r._stop))));
                    return e;
                },
                seek: function () {
                    const e = this;
                    let t,
                        n,
                        r,
                        o,
                        i,
                        l,
                        a,
                        u,
                        s,
                        d,
                        f = arguments;
                    if (
                        (0 === f.length
                            ? (o = e._sounds[0]._id)
                            : 1 === f.length
                                ? (n = (t = e._getSoundIds()).indexOf(f[0])) >= 0
                                    ? (o = parseInt(f[0], 10))
                                    : e._sounds.length &&
                                    ((o = e._sounds[0]._id), (r = parseFloat(f[0])))
                                : 2 === f.length &&
                                ((r = parseFloat(f[0])), (o = parseInt(f[1], 10))),
                        void 0 === o)
                    )
                        return e;
                    if ("loaded" !== e._state || e._playLock)
                        return (
                            e._queue.push({
                                event: "seek",
                                action: function () {
                                    e.seek.apply(e, f);
                                },
                            }),
                                e
                        );
                    if ((i = e._soundById(o))) {
                        if (!("number" == typeof r && r >= 0))
                            return e._webAudio
                                ? ((s = e.playing(o) ? Ye.ctx.currentTime - i._playStart : 0),
                                    (d = i._rateSeek ? i._rateSeek - i._seek : 0),
                                i._seek + (d + s * Math.abs(i._rate)))
                                : i._node.currentTime;
                        (l = e.playing(o)) && e.pause(o, !0),
                            (i._seek = r),
                            (i._ended = !1),
                            e._clearTimer(o),
                        !e._webAudio && i._node && (i._node.currentTime = r),
                            (a = function () {
                                e._emit("seek", o, null), l && e.play(o, !0);
                            }),
                            l && !e._webAudio
                                ? ((u = function () {
                                    e._playLock ? setTimeout(u, 0) : a();
                                }),
                                    setTimeout(u, 0))
                                : a();
                    }
                    return e;
                },
                playing: function (e) {
                    const t = this;
                    if ("number" == typeof e) {
                        let n = t._soundById(e);
                        return !!n && !n._paused;
                    }
                    for (let e = 0; e < t._sounds.length; e++)
                        if (!t._sounds[e]._paused) return !0;
                    return !1;
                },
                duration: function (e) {
                    const t = this;
                    let n = t._duration,
                        r = t._soundById(e);
                    return r && (n = t._sprite[r._sprite][1] / 1e3), n;
                },
                state: function () {
                    return this._state;
                },
                unload: function () {
                    let t = this,
                        n = t._sounds;
                    for (let e = 0; e < n.length; e++) {
                        if ((n[e]._paused || t.stop(n[e]._id), !t._webAudio)) {
                            /MSIE |Trident\//.test(
                                Ye._navigator && Ye._navigator.userAgent
                            ) ||
                            (n[e]._node.src =
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
                                n[e]._node.removeEventListener("error", n[e]._errorFn, !1),
                                n[e]._node.removeEventListener(
                                    Ye._canPlayEvent,
                                    n[e]._loadFn,
                                    !1
                                );
                        }
                        delete n[e]._node, t._clearTimer(n[e]._id);
                    }
                    let r = Ye._howls.indexOf(t);
                    r >= 0 && Ye._howls.splice(r, 1);
                    let o = !0;
                    for (let e = 0; e < Ye._howls.length; e++)
                        if (Ye._howls[e]._src === t._src) {
                            o = !1;
                            break;
                        }
                    return (
                        e && o && delete e[t._src],
                            (Ye.noAudio = !1),
                            (t._state = "unloaded"),
                            (t._sounds = []),
                            (t = null),
                            null
                    );
                },
                on: function (e, t, n, r) {
                    let o = this["_on" + e];
                    return (
                        "function" == typeof t &&
                        o.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }),
                            this
                    );
                },
                off: function (e, t, n) {
                    const r = this;
                    let o = r["_on" + e];
                    if (("number" == typeof t && ((n = t), (t = null)), t || n))
                        for (let e = 0; e < o.length; e++) {
                            let r = n === o[e].id;
                            if ((t === o[e].fn && r) || (!t && r)) {
                                o.splice(e, 1);
                                break;
                            }
                        }
                    else if (e) r["_on" + e] = [];
                    else {
                        let e = Object.keys(r);
                        for (let t = 0; t < e.length; t++)
                            0 === e[t].indexOf("_on") &&
                            Array.isArray(r[e[t]]) &&
                            (r[e[t]] = []);
                    }
                    return r;
                },
                once: function (e, t, n) {
                    return this.on(e, t, n, 1), this;
                },
                _emit: function (e, t, n) {
                    const r = this;
                    let o = r["_on" + e];
                    const i = function (e) {
                        e.call(this, t, n);
                    };
                    for (let n = o.length - 1; n >= 0; n--)
                        ("load" !== e && o[n].id !== t && o[n].id) ||
                        (setTimeout(i.bind(r, o[n].fn), 0),
                        o[n].once && r.off(e, o[n].fn, o[n].id));
                    return r._loadQueue(e), r;
                },
                _loadQueue: function (e) {
                    const t = this;
                    if (t._queue.length > 0) {
                        let n = t._queue[0];
                        n.event === e && (t._queue.shift(), t._loadQueue()),
                        e || n.action();
                    }
                    return t;
                },
                _ended: function (e) {
                    const t = this,
                        n = e._parent,
                        r = e._sprite;
                    if (
                        !t._webAudio &&
                        e._node &&
                        !e._node.paused &&
                        !e._node.ended &&
                        e._node.currentTime < e._stop
                    )
                        return setTimeout(t._ended.bind(t, e), 100), t;
                    let o = !(!e._loop && !t._sprite[r][2]);
                    if (
                        (t._emit("end", e._id, n._src),
                        !t._webAudio && o && t.stop(e._id, !0).play(e._id),
                        t._webAudio && o)
                    ) {
                        t._emit("play", e._id, null),
                            (e._seek = e._start || 0),
                            (e._rateSeek = 0),
                            (e._playStart = Ye.ctx.currentTime);
                        let n = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                        t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), n);
                    }
                    return (
                        t._webAudio &&
                        !o &&
                        ((e._paused = !0),
                            (e._ended = !0),
                            (e._seek = e._start || 0),
                            (e._rateSeek = 0),
                            t._clearTimer(e._id),
                            t._cleanBuffer(e._node),
                            Ye._autoSuspend()),
                        t._webAudio || o || t.stop(e._id, !0),
                            t
                    );
                },
                _clearTimer: function (e) {
                    const t = this;
                    if (t._endTimers[e]) {
                        if ("function" != typeof t._endTimers[e])
                            clearTimeout(t._endTimers[e]);
                        else {
                            let n = t._soundById(e);
                            n &&
                            n._node &&
                            n._node.removeEventListener("ended", t._endTimers[e], !1);
                        }
                        delete t._endTimers[e];
                    }
                    return t;
                },
                _soundById: function (e) {
                    const t = this;
                    for (let n = 0; n < t._sounds.length; n++)
                        if (e === t._sounds[n]._id) return t._sounds[n];
                    return null;
                },
                _inactiveSound: function () {
                    const e = this;
                    e._drain();
                    for (let t = 0; t < e._sounds.length; t++)
                        if (e._sounds[t]._ended) return e._sounds[t].reset();
                    return new o(e);
                },
                _drain: function () {
                    const e = this;
                    let t = e._pool,
                        n = 0;
                    if (!(e._sounds.length < t)) {
                        for (let t = 0; t < e._sounds.length; t++)
                            e._sounds[t]._ended && n++;
                        for (let r = e._sounds.length - 1; r >= 0; r--) {
                            if (n <= t) return;
                            e._sounds[r]._ended &&
                            (e._webAudio &&
                            e._sounds[r]._node &&
                            e._sounds[r]._node.disconnect(0),
                                e._sounds.splice(r, 1),
                                n--);
                        }
                    }
                },
                _getSoundIds: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        let e = [];
                        for (let n = 0; n < t._sounds.length; n++) e.push(t._sounds[n]._id);
                        return e;
                    }
                    return [e];
                },
                _refreshBuffer: function (t) {
                    return (
                        (t._node.bufferSource = Ye.ctx.createBufferSource()),
                            (t._node.bufferSource.buffer = e[this._src]),
                            t._panner
                                ? t._node.bufferSource.connect(t._panner)
                                : t._node.bufferSource.connect(t._node),
                            (t._node.bufferSource.loop = t._loop),
                        t._loop &&
                        ((t._node.bufferSource.loopStart = t._start || 0),
                            (t._node.bufferSource.loopEnd = t._stop || 0)),
                            t._node.bufferSource.playbackRate.setValueAtTime(
                                t._rate,
                                Ye.ctx.currentTime
                            ),
                            this
                    );
                },
                _cleanBuffer: function (e) {
                    if (Ye._scratchBuffer && e.bufferSource) {
                        (e.bufferSource.onended = null), e.bufferSource.disconnect(0);
                        try {
                            e.bufferSource.buffer = Ye._scratchBuffer;
                        } catch (e) {}
                    }
                    return (e.bufferSource = null), this;
                },
            });
        const i = function () {
            this.init();
        };
        (i.prototype = {
            init: function () {
                const e = this || Ye;
                return (
                    (e.major = 2),
                        (e.minor = 0),
                        (e.revision = 15),
                        (e._counter = 1),
                        (e._codecs = {}),
                        (e._howls = []),
                        (e._muted = !1),
                        (e._volume = 1),
                        (e._canPlayEvent = "canplaythrough"),
                        (e._navigator =
                            "undefined" != typeof window && window.navigator
                                ? window.navigator
                                : null),
                        (e.masterGain = null),
                        (e.noAudio = !1),
                        (e.usingWebAudio = !0),
                        (e.autoSuspend = !0),
                        (e.ctx = null),
                        (e._mobileEnabled = !1),
                        (e.isMobile =
                            /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(
                                e._navigator && e._navigator.userAgent
                            )),
                        (e.mobileAutoEnable = !0),
                        e._setup(),
                        e
                );
            },
            volume: function (e) {
                const t = this || Ye;
                if (
                    ((e = parseFloat(e)), t.ctx || r(), void 0 !== e && e >= 0 && e <= 1)
                ) {
                    if (((t._volume = e), t._muted)) return t;
                    t.usingWebAudio &&
                    t.masterGain.gain.setValueAtTime(e, Ye.ctx.currentTime);
                    for (let n = 0; n < t._howls.length; n++)
                        if (!t._howls[n]._webAudio) {
                            let r = t._howls[n]._getSoundIds();
                            for (let o = 0; o < r.length; o++) {
                                let i = t._howls[n]._soundById(r[o]);
                                i && i._node && (i._node.volume = i._volume * e);
                            }
                        }
                    return t;
                }
                return t._volume;
            },
            mute: function (e) {
                const t = this || Ye;
                t.ctx || r(),
                    (t._muted = e),
                t.usingWebAudio &&
                t.masterGain.gain.setValueAtTime(
                    e ? 0 : t._volume,
                    Ye.ctx.currentTime
                );
                for (let n = 0; n < t._howls.length; n++)
                    if (!t._howls[n]._webAudio) {
                        let r = t._howls[n]._getSoundIds();
                        for (let o = 0; o < r.length; o++) {
                            let i = t._howls[n]._soundById(r[o]);
                            i && i._node && (i._node.muted = !!e || i._muted);
                        }
                    }
                return t;
            },
            unload: function () {
                const e = this || Ye;
                for (let t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                return (
                    e.usingWebAudio &&
                    e.ctx &&
                    void 0 !== e.ctx.close &&
                    (e.ctx.close(), (e.ctx = null), r()),
                        e
                );
            },
            codecs: function (e) {
                return (this || Ye)._codecs[e.replace(/^x-/, "")];
            },
            _setup: function () {
                const e = this || Ye;
                if (
                    ((e.state = (e.ctx && e.ctx.state) || "running"),
                        e._autoSuspend(),
                        !e.usingWebAudio)
                )
                    if ("undefined" != typeof Audio)
                        try {
                            void 0 === new Audio().oncanplaythrough &&
                            (e._canPlayEvent = "canplay");
                        } catch (t) {
                            e.noAudio = !0;
                        }
                    else e.noAudio = !0;
                try {
                    new Audio().muted && (e.noAudio = !0);
                } catch (e) {}
                return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function () {
                const e = this || Ye;
                let t = null;
                try {
                    t = "undefined" != typeof Audio ? new Audio() : null;
                } catch (t) {
                    return e;
                }
                if (!t || "function" != typeof t.canPlayType) return e;
                let n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                    o = r && parseInt(r[0].split("/")[1], 10) < 33;
                return (
                    (e._codecs = {
                        mp3: !(
                            o ||
                            (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))
                        ),
                        mpeg: !!n,
                        opus: !!t
                            .canPlayType('audio/ogg; codecs="opus"')
                            .replace(/^no$/, ""),
                        ogg: !!t
                            .canPlayType('audio/ogg; codecs="vorbis"')
                            .replace(/^no$/, ""),
                        oga: !!t
                            .canPlayType('audio/ogg; codecs="vorbis"')
                            .replace(/^no$/, ""),
                        wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(
                            t.canPlayType("audio/x-m4a;") ||
                            t.canPlayType("audio/m4a;") ||
                            t.canPlayType("audio/aac;")
                        ).replace(/^no$/, ""),
                        mp4: !!(
                            t.canPlayType("audio/x-mp4;") ||
                            t.canPlayType("audio/mp4;") ||
                            t.canPlayType("audio/aac;")
                        ).replace(/^no$/, ""),
                        weba: !!t
                            .canPlayType('audio/webm; codecs="vorbis"')
                            .replace(/^no$/, ""),
                        webm: !!t
                            .canPlayType('audio/webm; codecs="vorbis"')
                            .replace(/^no$/, ""),
                        dolby: !!t
                            .canPlayType('audio/mp4; codecs="ec-3"')
                            .replace(/^no$/, ""),
                        flac: !!(
                            t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")
                        ).replace(/^no$/, ""),
                    }),
                        e
                );
            },
            _enableMobileAudio: function () {
                const e = this || Ye;
                if (e._mobileEnabled || !e.ctx || !e.isMobile) return e;
                (e._mobileEnabled = !1),
                    (e.mobileAutoEnable = !1),
                e._mobileUnloaded ||
                44100 === e.ctx.sampleRate ||
                ((e._mobileUnloaded = !0), e.unload()),
                    (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
                const t = function () {
                    Ye._autoResume();
                    let n = e.ctx.createBufferSource();
                    (n.buffer = e._scratchBuffer),
                        n.connect(e.ctx.destination),
                        void 0 === n.start ? n.noteOn(0) : n.start(0),
                    "function" == typeof e.ctx.resume && e.ctx.resume(),
                        (n.onended = function () {
                            n.disconnect(0),
                                (e._mobileEnabled = !0),
                                document.removeEventListener("touchstart", t, !0),
                                document.removeEventListener("touchend", t, !0),
                                document.removeEventListener("click", t, !0);
                            for (let t = 0; t < e._howls.length; t++)
                                e._howls[t]._emit("unlock", null, null);
                        });
                };
                return (
                    document.addEventListener("touchstart", t, !0),
                        document.addEventListener("touchend", t, !0),
                        document.addEventListener("click", t, !0),
                        e
                );
            },
            _autoSuspend: function () {
                const e = this;
                if (
                    !e.autoSuspend ||
                    !e.ctx ||
                    void 0 === e.ctx.suspend ||
                    !Ye.usingWebAudio
                )
                    return e;
                for (let t = 0; t < e._howls.length; t++)
                    if (e._howls[t]._webAudio)
                        for (let n = 0; n < e._howls[t]._sounds.length; n++)
                            if (!e._howls[t]._sounds[n]._paused) return e;
                return (
                    e._suspendTimer && clearTimeout(e._suspendTimer),
                        (e._suspendTimer = setTimeout(function () {
                            e.autoSuspend &&
                            ((e._suspendTimer = null),
                                (e.state = "suspending"),
                                e.ctx.suspend().then(function () {
                                    (e.state = "suspended"),
                                    e._resumeAfterSuspend &&
                                    (delete e._resumeAfterSuspend, e._autoResume());
                                }));
                        }, 3e4)),
                        e
                );
            },
            _autoResume: function () {
                const e = this;
                return e.ctx && void 0 !== e.ctx.resume && Ye.usingWebAudio
                    ? ("running" === e.state && e._suspendTimer
                        ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                        : "suspended" === e.state
                            ? (e.ctx.resume().then(function () {
                                e.state = "running";
                                for (let t = 0; t < e._howls.length; t++)
                                    e._howls[t]._emit("resume", null, null);
                            }),
                            e._suspendTimer &&
                            (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                            : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                        e)
                    : e;
            },
        }),
            (Ye = new i());
    })();
    const We = function (e, t) {
        const n = this;
        (n.func = e),
            (n.delay = t),
            (n.timeout = null),
            (n.count = 0),
            (n.startTime = window.performance.now()),
            (n.timeout = window.setTimeout(function () {
                n.tick();
            }, n.delay));
    };
    (We.prototype.tick = function () {
        const e = this;
        e.func(), (e.count += 1);
        let t = Math.max(
            1,
            e.startTime + (e.count + 1) * e.delay - window.performance.now()
        );
        e.timeout = window.setTimeout(function () {
            e.tick();
        }, t);
    }),
        (We.prototype.stop = function () {
            const e = this;
            e.timeout && (window.clearTimeout(e.timeout), (e.timeout = null));
        });
    const Ke = function (e) {
        let t = e.toString();
        t.length < 1 && (t = ""), (X.innerHTML = Q = t);
    };
    let je = !1;
    const ze = {
            DISPLAY: !1,
            DISPLAY_RATE: 60,
            delay: 0,
            timer: null,
            next: !1,
            onTick: function () {
                (ze.next = !0),
                ze.DISPLAY &&
                (ze.delay > 0
                    ? (ze.delay -= 1)
                    : ((ze.delay = ze.DISPLAY_RATE),
                        Ke(ze.fps.toFixed(2) + " FPS | " + ze.tps.toFixed(2) + " TPS"),
                        Xe()));
            },
            RATE: Math.round(1e3 / 60),
            FPS_UPPER: 65,
            FPS_FILTER: 50,
            request: null,
            timeNow: 0,
            timePrev: 0,
            tickPrev: 0,
            fps: 0,
            tps: 0,
            ticks: 0,
            keyOptions: { time: 0 },
            onFrame: function () {
                let e, t, n, r, o, i;
                ze.request = window.requestAnimationFrame(ze.onFrame);
                let l = window.performance.now();
                ze.timeNow = l;
                let a = l - ze.timePrev,
                    u = l - ze.tickPrev,
                    s = 1e3 / a;
                if (
                    (l !== ze.timePrev &&
                    ((ze.fps += (s - ze.fps) / ze.FPS_FILTER), (ze.timePrev = l)),
                    ze.fps > ze.FPS_UPPER)
                ) {
                    if (!ze.next) return;
                    ze.next = !1;
                }
                if (
                    ((s = 1e3 / u),
                    l !== ze.tickPrev &&
                    ((ze.tps += (s - ze.tps) / ze.FPS_FILTER), (ze.tickPrev = l)),
                        (ze.ticks += 1),
                        je)
                )
                    return;
                let d = "[_tick] ",
                    c = !1;
                if ((V += 1) >= 4)
                    for (V = 0, e = H.length, t = 0; t < e; ) {
                        let r = H[t],
                            o = r.frames.length;
                        if (r.kill) H.splice(t, 1), (e -= 1);
                        else if (r.active) {
                            let i = r.frames[r.step],
                                l = r.onStep;
                            if (l) {
                                (n = [o, r.step, i.rgb]), r.params && (n = n.concat(r.params));
                                try {
                                    let e = l.apply(f, n);
                                    (!1 !== e && null !== e) ||
                                    ((r.step = o - 1), (i = r.frames[r.step])),
                                        (c = !0);
                                } catch (e) {
                                    return void ct(
                                        d + "fader .onStep failed [" + e.message + "]",
                                        e
                                    );
                                }
                            }
                            if (r.exec)
                                try {
                                    r.exec(i, r.element);
                                } catch (e) {
                                    return void ct(
                                        d + "fader .exec failed [" + e.message + "]",
                                        e
                                    );
                                }
                            if (((r.step += 1), r.step >= o)) {
                                if (
                                    ((r.active = !1),
                                        (r.step = 0),
                                        (r.frames.length = 0),
                                        r.execEnd)
                                )
                                    try {
                                        r.execEnd(i, r.element);
                                    } catch (e) {
                                        return void ct(
                                            d + "fader .execEnd failed [" + e.message + "]",
                                            e
                                        );
                                    }
                                if ((l = r.onEnd)) {
                                    (n = r.params) || (n = []);
                                    try {
                                        l.apply(f, n), (c = !0);
                                    } catch (e) {
                                        return void ct(
                                            d + "fader .onEnd failed [" + e.message + "]",
                                            e
                                        );
                                    }
                                }
                                H.splice(t, 1), (e -= 1);
                            } else t += 1;
                        } else t += 1;
                    }
                if (((e = le.length), he && e > 0))
                    if (ae > 0) ae -= 1;
                    else if (((ae = ue), PS.keyDown))
                        for (t = 0; t < e; t += 1) {
                            let e = le[t];
                            if (e) {
                                ze.keyOptions.time = ze.ticks;
                                try {
                                    PS.keyDown(e, ce, ge, ze.keyOptions), (c = !0);
                                } catch (e) {
                                    return void ct(
                                        d + "Key repeat failed [" + e.message + "]",
                                        e
                                    );
                                }
                            }
                        }
                if ((e = G.length) > 0)
                    for (t = 0; t < e; ) {
                        if (((i = (r = G[t]).id), (r.count -= 1), r.count < 1)) {
                            r.count = r.delay;
                            try {
                                (o = r.exec.apply(f, r.arglist)), (c = !0);
                            } catch (e) {
                                o = ct(d + "Timed function failed [" + e.message + "]", e);
                            }
                            o === PS.ERROR && PS.timerStop(i), (e = G.length);
                        }
                        e > 0 && (r = G[t]) && r.id === i && (t += 1);
                    }
                c && lt();
            },
            start: function () {
                (G.length = 0),
                    (q = 0),
                    $(),
                    (ze.delay = ze.DISPLAY_RATE),
                    (ze.fps = ze.tps = ze.ticks = 0),
                    (ze.tickPrev = ze.timePrev = ze.timeNow = window.performance.now()),
                    (ze.timer = new We(ze.onTick, ze.RATE)),
                    (ze.request = window.requestAnimationFrame(ze.onFrame));
            },
            stop: function () {
                (ze.DISPLAY = !1),
                ze.request &&
                (window.cancelAnimationFrame(ze.request), (ze.request = null)),
                ze.timer && (ze.timer.stop(), (ze.timer = null));
            },
        },
        Ge = function (e, t, n, r, o, i, l, a, u) {
            const s = r * (1 - a);
            (u.r = Math.floor(o * a + e * s)),
                (u.g = Math.floor(i * a + t * s)),
                (u.b = Math.floor(l * a + n * s));
        },
        qe = function (e, t) {
            const n = {};
            let r = t.a;
            return (
                r < 1
                    ? Object.assign(n, e)
                    : r < 255
                        ? Ge(e.r, e.g, e.b, 1, t.r, t.g, t.b, y[r], n)
                        : Object.assign(n, t),
                    (n.a = 255),
                    (n.rgb = n.r * s + n.g * d + n.b),
                    (n.str = _[n.r] + P[n.g] + P[n.b] + R[n.a]),
                    n
            );
        },
        He = function (e) {
            let t = F.context,
                n = F.bead_size,
                r = e.left,
                o = e.top,
                i = n,
                l = n,
                a = e.border,
                u = a.colorNow || a.color,
                s = u.a,
                d = F.colorNow || F.color,
                f = e.bgColor;
            if (!e.visible) return (t.fillStyle = d.str), void t.fillRect(r, o, i, l);
            let c = e.size < n,
                g = e.radius,
                h = e.planes[0].color.a,
                p = null;
            (c || g > 0 || h < 255 || (a.width > 0 && s < 255)) &&
            ((p = qe(d, f)),
                (t.fillStyle = p.str),
                t.fillRect(r, o, i, l),
            c && ((r += e.margin), (o += e.margin), (i = e.size), (l = e.size)));
            let m = Math.floor((i * g) / 100);
            if (a.width > 0) {
                if (s > 0)
                    if (((u = a.colorNow || a.color), (t.fillStyle = u.str), g < 1)) {
                        let e = a.top;
                        e > 0 && t.fillRect(r, o, i, e);
                        let n = a.bottom;
                        n > 0 && t.fillRect(r, o + l - n, i, n);
                        let u = a.left;
                        u > 0 && t.fillRect(r, o + e, u, l - e - n),
                        (u = a.right) > 0 && t.fillRect(r + i - u, o + e, u, l - e - n);
                    } else
                        g < 50
                            ? t.fillRoundedRect(r + 0, o + 0, i - 0, l - 0, m)
                            : t.fillCircle(r + 0, o + 0, i - 0, l - 0);
                (r += a.left),
                    (o += a.top),
                    (i -= a.left + a.right),
                    (l -= a.top + a.bottom),
                s > 0 &&
                g > 0 &&
                (p || (p = qe(d, f)),
                    (t.fillStyle = p.str),
                    g < 50
                        ? t.fillRoundedRect(r + 0, o + 0, i - 0, l - 0, m)
                        : t.fillCircle(r + 0, o + 0, i - 0, l - 0));
            }
            let b = e.colorNow || e.color;
            (t.fillStyle = b.str),
                g < 1
                    ? t.fillRect(r, o, i, l)
                    : g < 50
                        ? t.fillRoundedRect(r + 0, o + 0, i - 0, l - 0, m)
                        : t.fillCircle(r + 0, o + 0, i - 0, l - 0);
            let S = e.glyph,
                _ = S.colorNow || S.color;
            S.str.length > 0 &&
            _.a > 0 &&
            ((F.context.font = S.font),
                (t.fillStyle = _.str),
                t.fillText(S.str, e.left + S.x, e.top + S.y));
        },
        Ve = function () {
            let e = (F.colorNow || F.color).str;
            (F.canvas.style.backgroundColor = e),
                (document.body.style.backgroundColor = e),
                (k.statusP.style.backgroundColor = e),
                (k.inputP.style.backgroundColor = e),
                (X.style.backgroundColor = e);
            for (let e = 0; e < F.count; e += 1) {
                let t = O[e];
                He(t);
            }
        },
        $e = function (e) {
            (F.colorNow = e), Ve();
        },
        Xe = function () {
            let e = F.colorNow ? F.colorNow : F.color;
            e.r > 127 || e.g > 127 || e.b > 127
                ? (X.style.color = "rgba(0,0,0,1)")
                : (X.style.color = "rgba(255,255,255,1)");
        },
        Qe = function () {
            (F.colorNow = null), Xe();
        },
        Je = function (e) {
            (k.statusP.style.color = e.str), (k.inputP.style.color = e.str);
        },
        Ze = function (e, t) {
            let n = O[t];
            (n.colorNow = e), He(n);
        },
        et = function (e, t) {
            let n = O[t];
            (n.colorNow = null), He(n);
        },
        tt = function (e, t) {
            let n = O[t];
            (n.border.colorNow = e), He(n);
        },
        nt = function (e, t) {
            let n = O[t];
            (n.border.colorNow = null), He(n);
        },
        rt = function (e, t) {
            let n = O[t];
            (n.glyph.colorNow = e), He(n);
        },
        ot = function (e, t) {
            let n = O[t];
            (n.glyph.colorNow = null), He(n);
        },
        it = function (e) {
            (e.dirty = !0), (I = !0);
        },
        lt = function () {
            if (((B = 0), I)) {
                let e = F.count;
                for (let t = 0; t < e; t += 1) {
                    let e = O[t];
                    e.dirty && ((e.dirty = !1), He(e), (B += 1));
                }
                I = !1;
            }
        },
        at = function (e) {
            (e && typeof e === xe) || (e = "???"), PS.debug("WARNING: " + e + "\n");
        },
        ut = function (e) {
            let t = "";
            if (-1 !== e.search(".js")) {
                let n,
                    r = e.lastIndexOf("/") + 1;
                3 ===
                (n = e.substr(r).replace(/^[\s()]+|[\s()]+$/g, "")).split(":")
                    .length && (n = n.substr(0, n.lastIndexOf(":"))),
                "" !== n && (t += "    " + n + "\n");
            } else 0;
            return t;
        },
        st = function () {
            J && (window.clearInterval(J), (J = null)),
                (X.innerHTML = Q = "&nbsp;"),
                (Z = 50),
                (ee = 1),
                (X.style.opacity = "1.0");
        },
        dt = function () {
            Z > 0
                ? (Z -= 1)
                : ((ee -= 0.05) <= 0 && st(), (X.style.opacity = ee.toString()));
        },
        ft = function (e) {
            st(), Xe(), Ke(e), (J = window.setInterval(dt, 100));
        },
        ct = function (e, t) {
            ze.stop(), (e && typeof e === xe) || (e = "???");
            let n = "ERROR: " + e;
            return (
                st(),
                    Ke(n),
                    (n += "\n"),
                t &&
                t.stack &&
                (n +=
                    (function (e) {
                        if ((console && console.log && console.log(e), !e.split))
                            return e;
                        let t = e.split("\n"),
                            n = "",
                            r = t.length;
                        for (let e = 0; e < r; e += 1) n += ut(t[e]);
                        return n;
                    })(t.stack) + "\n"),
                    PS.debug(n),
                fe && PS.audioPlay(b.audio.error_sound, { path: b.audio.path }),
                    PS.ERROR
            );
        },
        gt = function (e) {
            try {
                throw new Error("!");
            } catch (t) {
                return ct(e, t);
            }
        },
        ht = function (e) {
            (e.active = !1),
                (e.kill = !1),
                (e.r = 0),
                (e.g = 0),
                (e.b = 0),
                (e.rgb = null),
                (e.tr = 0),
                (e.tg = 0),
                (e.tb = 0),
                (e.trgb = 0),
                (e.tstr = null),
                (e.step = 0),
                (e.rate = 0),
                (e.onStep = null),
                (e.onEnd = null),
                (e.params = null),
                (e.frames = []),
                (e.colorNow = null);
        },
        pt = function (e, t, n) {
            let r = { element: e, exec: t, execEnd: n };
            return ht(r), r;
        },
        mt = function (e, t, n, r, o, i, l, a, u) {
            let f;
            if (
                ((e.step = 0),
                    (e.frames.length = 0),
                t === i && n === l && r === a && o === u)
            )
                return;
            (e.tr = i),
                (e.tg = l),
                (e.tb = a),
                (e.ta = u),
                (e.trgb = i * s + l * d + a),
                (e.tstr = _[i] + P[l] + P[a] + R[u]);
            let c = t,
                g = n,
                h = r,
                p = o,
                m = t > i ? 0 - (t - i) : i - t,
                b = n > l ? 0 - (n - l) : l - n,
                S = r > a ? 0 - (r - a) : a - r,
                E = o > u ? 0 - (o - u) : u - o,
                y = 100 / (e.rate < 4 ? 1 : Math.ceil(e.rate / 4)),
                v = 0;
            do {
                let T = !1,
                    w = {};
                if (
                    ((v += y) >= 100
                        ? ((w.r = i), (w.g = l), (w.b = a), (w.a = u))
                        : (c !== i &&
                        ((c = t + (f = (v * m) / 100)), (c = Math.round(c)), (T = !0)),
                            (w.r = c),
                        g !== l &&
                        ((g = n + (f = (v * b) / 100)), (g = Math.round(g)), (T = !0)),
                            (w.g = g),
                        h !== a &&
                        ((h = r + (f = (v * S) / 100)), (h = Math.round(h)), (T = !0)),
                            (w.b = h),
                        p !== u &&
                        ((p = o + (f = (v * E) / 100)), (p = Math.round(p)), (T = !0)),
                            (w.a = p)),
                        (w.rgb = w.r * s + w.g * d + w.b),
                        (w.str = _[w.r] + P[w.g] + P[w.b] + R[w.a]),
                        e.frames.push(w),
                        !T)
                )
                    return;
            } while (v < 100);
        },
        bt = function (e, t, n, r, o, i, l, a, u) {
            mt(e, t, n, r, o, i, l, a, u),
            e.frames.length > 0 && ((e.kill = !1), (e.active = !0), H.push(e));
        },
        St = function (e, t, n, r, o) {
            let i = e.active;
            e.active = !1;
            let l = e.frames.length;
            if (l > 0) {
                let i = e.step;
                i >= l && (i = l - 1);
                let a = e.frames[i];
                mt(e, a.r, a.g, a.b, a.a, t, n, r, o);
            }
            e.frames.length > 0 && (e.active = i);
        },
        _t = function (e) {
            const t = Object.create(null);
            !(function (e, t, n) {
                let r = {},
                    o = t.r,
                    i = t.g,
                    l = t.b,
                    a = e.planes,
                    u = a.length;
                for (let e = 0; e < u; e += 1) {
                    let t = a[e].color,
                        n = t.r,
                        u = t.g,
                        s = t.b,
                        d = t.a;
                    d > 0 &&
                    (d < 255
                        ? (Ge(o, i, l, 1, n, u, s, y[d], r),
                            (o = r.r),
                            (i = r.g),
                            (l = r.b))
                        : ((o = n), (i = u), (l = s)));
                }
                (n.rgb = o * s + i * d + l),
                    (n.r = o),
                    (n.g = i),
                    (n.b = l),
                    (n.a = 255),
                    (n.str = _[o] + P[i] + E[l]);
            })(e, qe(F.color, e.bgColor), t);
            let n = t.rgb,
                r = t.r,
                o = t.g,
                i = t.b,
                l = t.a,
                a = e.color,
                u = a.r,
                f = a.g,
                c = a.b;
            if (
                ((a.rgb = n),
                    (a.r = r),
                    (a.g = o),
                    (a.b = i),
                    (a.a = l),
                    (a.str = t.str),
                    e.visible)
            ) {
                let t = e.fader;
                t.rate > 0
                    ? null !== t.rgb
                        ? bt(t, t.r, t.g, t.b, 255, r, o, i, 255)
                        : t.active
                            ? St(t, r, o, i, 255)
                            : bt(t, u, f, c, 255, r, o, i, 255)
                    : it(e);
            }
        },
        Pt = function (e, t, n, r, o) {
            let i,
                l = n;
            if (l !== PS.CURRENT && l !== PS.DEFAULT)
                if ((i = Ne(l)) === Le) l = PS.CURRENT;
                else {
                    if (i !== we) return gt(e + "red value invalid");
                    (l = Math.floor(l)) < 0 ? (l = 0) : l > 255 && (l = 255);
                }
            let a = r;
            if (a !== PS.CURRENT && a !== PS.DEFAULT)
                if ((i = Ne(a)) === Le) a = PS.CURRENT;
                else {
                    if (i !== we) return gt(e + "green value invalid");
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                }
            let u = o;
            if (u !== PS.CURRENT && u !== PS.DEFAULT)
                if ((i = Ne(u)) === Le) u = PS.CURRENT;
                else {
                    if (i !== we) return gt(e + "blue value invalid");
                    (u = Math.floor(u)) < 0 ? (u = 0) : u > 255 && (u = 255);
                }
            return (t.rgb = null), (t.r = l), (t.g = a), (t.b = u), PS.DONE;
        },
        Et = function (e, t) {
            let n,
                r,
                o,
                i = Math.floor(t);
            if (i < 1) i = n = r = o = 0;
            else if (i >= 16777215) (i = 16777215), (n = r = o = 255);
            else {
                n = i / s;
                let e = (n = Math.floor(n)) * s;
                (r = (i - e) / d), (o = i - e - (r = Math.floor(r)) * d);
            }
            (e.rgb = i), (e.r = n), (e.g = r), (e.b = o);
        },
        Rt = e({ rgb: null, r: null, g: null, b: null, str: "" }),
        yt = function (e, t, n, r) {
            let o,
                i,
                l,
                a = Rt;
            (a.rgb = null), (a.r = null), (a.g = null), (a.b = null), (a.str = "");
            let u = Ne(t);
            if (void 0 !== n || void 0 !== r) {
                if (u !== we && u !== Le && t !== PS.CURRENT && t !== PS.DEFAULT)
                    return gt(
                        u === Ce
                            ? e + "Extraneous arguments after color array"
                            : u === Ae
                                ? e + "Extraneous arguments after color object"
                                : e + "red argument invalid"
                    );
                if ((o = Pt(e, a, t, n, r)) === PS.ERROR) return PS.ERROR;
            } else if (u === we) Et(a, t);
            else if (u === Ce) {
                if ((l = t.length) < 1) a.rgb = PS.CURRENT;
                else if ((o = Pt(e, a, t[0], t[1], t[2])) === PS.ERROR) return PS.ERROR;
            } else if (u === Ae)
                if (((i = t.rgb), (u = Ne(i)) === Le || null === i)) {
                    if ((o = Pt(e, a, t.r, t.g, t.b)) === PS.ERROR) return PS.ERROR;
                } else if (u === we) Et(a, i);
                else {
                    if (i !== PS.CURRENT && i !== PS.DEFAULT)
                        return gt(e + ".rgb property invalid");
                    a.rgb = i;
                }
            else if (u === Le || t === PS.CURRENT) a.rgb = PS.CURRENT;
            else {
                if (t !== PS.DEFAULT) return gt(e + "color argument invalid");
                a.rgb = PS.DEFAULT;
            }
            return a;
        },
        vt = function (e) {
            let t = F.bead_size;
            e.glyph.x = Math.round(t / 2);
            let n = e.glyph.scale,
                r = n < 100 ? Math.round((t * n) / 100) : t,
                o = Math.round(r / 2);
            (e.glyph.size = o),
                (e.glyph.font = o + "px " + b.font.name),
                (e.glyph.y = Math.round((t - o) / 2 + o / 2));
        },
        Tt = function (t) {
            return e({
                index: t,
                dirty: !0,
                active: !0,
                visible: !0,
                radius: 0,
                scale: 0,
                minimum: b.bead.minimum,
                data: 0,
                exec: null,
                colorNow: null,
                fader: pt(t, Ze, et),
                color: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                    rgb: 16777215,
                    str: "rgba(255,255,255,1)",
                }),
                bgColor: e({
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 0,
                    rgb: 16777215,
                    str: "rgba(255,255,255,0)",
                }),
                border: e({
                    width: 1,
                    equal: !0,
                    top: 1,
                    left: 1,
                    bottom: 1,
                    right: 1,
                    colorNow: null,
                    color: e({
                        r: 128,
                        g: 128,
                        b: 128,
                        a: 255,
                        rgb: 8421504,
                        str: "rgba(128,128,128,1)",
                    }),
                    fader: pt(t, tt, nt),
                }),
                glyph: e({
                    str: "",
                    code: 0,
                    scale: 100,
                    size: 0,
                    x: 0,
                    y: 0,
                    font: null,
                    colorNow: null,
                    color: e({ r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" }),
                    fader: pt(t, rt, ot),
                }),
                planes: [
                    e({
                        height: 0,
                        color: e({
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 255,
                            rgb: 16777215,
                            str: "rgba(255,255,255,1)",
                        }),
                    }),
                ],
            });
        },
        wt = function (t) {
            (t.dirty = !0),
                (t.active = !0),
                (t.visible = !0),
                (t.radius = 0),
                (t.scale = 100),
                (t.minimum = b.bead.minimum),
                (t.data = 0),
                (t.exec = null),
                (t.colorNow = null),
                ht(t.fader);
            let n = t.color;
            (n.r = 255),
                (n.g = 255),
                (n.b = 255),
                (n.a = 255),
                (n.rgb = 16777215),
                (n.str = "rgba(255,255,255,1)"),
                ((n = t.bgColor).r = 255),
                (n.g = 255),
                (n.b = 255),
                (n.a = 0),
                (n.rgb = 16777215),
                (n.str = "rgba(255,255,255,0)"),
                ((n = t.border).width = 1),
                (n.equal = !0),
                (n.top = 1),
                (n.left = 1),
                (n.bottom = 1),
                (n.right = 1),
                (n.colorNow = null),
                ht(n.fader),
                ((n = t.border.color).r = 128),
                (n.g = 128),
                (n.b = 128),
                (n.a = 255),
                (n.rgb = 8421504),
                (n.str = "rgba(128,128,128,1)"),
                ((n = t.glyph).str = ""),
                (n.code = 0),
                (n.scale = 100),
                (n.size = 0),
                (n.x = 0),
                (n.y = 0),
                (n.font = null),
                (n.colorNow = null),
                ht(n.fader),
                ((n = t.glyph.color).r = 0),
                (n.g = 0),
                (n.b = 0),
                (n.a = 255),
                (n.rgb = 0),
                (n.str = "rgba(0,0,0,1)"),
                (t.planes = [
                    e({
                        height: 0,
                        color: e({
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 255,
                            rgb: 16777215,
                            str: "rgba(255,255,255,1)",
                        }),
                    }),
                ]);
        },
        xt = function (e, t) {
            let n,
                r,
                o = e.planes;
            if (t < 1) return (n = o[0]).color;
            let i = o.length;
            for (r = 1; r < i; r += 1) if ((n = o[r]).height === t) return n.color;
            let l = b.bead.color,
                a = { rgb: l.rgb, r: l.r, g: l.g, b: l.b, a: 0 };
            if (e.active) {
                for (r = 0; r < i && !((n = o[r]).height > t); ) r += 1;
                o.splice(r, 0, { height: t, color: a });
            }
            return a;
        },
        At = function (e) {
            return e.glyph.code > 0 ? e.border.gmax : e.border.max;
        },
        Ut = function (e, t) {
            (e.border.equal = !0),
                (e.border.width = t),
                (e.border.top = t),
                (e.border.left = t),
                (e.border.bottom = t),
                (e.border.right = t);
        },
        Lt = function (e) {
            let t,
                n = F.bead_size;
            if (e.scale < 100) {
                let r = n - (t = Math.floor((n * e.scale) / 100));
                r > 0 && r % 2 && (t += 1);
            } else
                (t = n),
                    (e.margin = 0),
                    (e.senseLeft = e.left),
                    (e.senseRight = e.right),
                    (e.senseTop = e.top),
                    (e.senseBottom = e.bottom);
            if (((e.size = t), t !== n)) {
                let r = Math.floor((n - t) / 2);
                (e.margin = r),
                    (e.senseLeft = e.left + r),
                    (e.senseRight = e.right - r),
                    (e.senseTop = e.top + r),
                    (e.senseBottom = e.bottom - r);
            }
            let r = e.border;
            (r.max = Math.floor((t - e.minimum) / 2)),
                (r.gmax = Math.floor((t - e.glyph.size) / 2));
            let o = At(e);
            if (r.equal) r.width > o && Ut(e, o);
            else {
                let e = r.top;
                e > o && (r.top = o),
                (e = r.left) > o && (r.left = o),
                (e = r.bottom) > o && (r.bottom = o),
                (e = r.right) > o && (r.right = o);
            }
        },
        Ct = function (e) {
            let t = e.data;
            return null === t ? 0 : t;
        },
        Nt = function (t) {
            Y = e({ start: t, end: 0, duration: 0, events: [] });
        },
        Dt = function (t, n, r) {
            Y.events.push(e({ x: t, y: n, start: r, end: 0, duration: 0 }));
        },
        Ft = function (e) {
            let t = Y.events.length;
            if (t > 0) {
                let n = Y.events[t - 1];
                (Y.end = e),
                    (n.end = e),
                    (n.duration = e - n.start),
                    (Y.duration += n.duration);
            }
        },
        Ot = function (e) {
            let t = !1;
            if (Y.events.length > 1) {
                Ft(e);
                let n = (function () {
                    let e = {
                            start: Y.start,
                            end: Y.end,
                            duration: Y.duration,
                            events: [],
                        },
                        t = Y.events.length;
                    for (let n = 0; n < t; n += 1) {
                        let t = Y.events[n];
                        e.events.push({
                            x: t.x,
                            y: t.y,
                            start: t.start,
                            end: t.end,
                            duration: t.duration,
                        });
                    }
                    return e;
                })();
                try {
                    PS.swipe(n, { time: e }), (t = !0);
                } catch (e) {
                    return ct("PS.swipe() failed [" + e.message + "]", e);
                }
            }
            return (Y = null), t;
        },
        kt = e({ time: 0 }),
        Mt = function (e) {
            let t;
            if (e.active) {
                let n = !1,
                    r = ze.ticks;
                if (
                    ((kt.time = e.timeTouch = r),
                    PS.swipe && (Nt(r), Dt(e.x, e.y, r)),
                        e.exec)
                )
                    try {
                        (t = Ct(e)), e.exec(e.x, e.y, t, kt), (n = !0);
                    } catch (t) {
                        return ct(
                            "Bead " +
                            e.x +
                            ", " +
                            e.y +
                            " function failed [" +
                            t.message +
                            "]",
                            t
                        );
                    }
                if (PS.touch)
                    try {
                        (t = Ct(e)), PS.touch(e.x, e.y, t, kt), (n = !0);
                    } catch (e) {
                        return ct("PS.touch() failed [" + e.message + "]", e);
                    }
                n && lt();
            }
            return PS.DONE;
        },
        It = e({ time: 0 }),
        Bt = function (e) {
            if (e.active) {
                let t = ze.ticks;
                if (((e.timeRelease = t), PS.release)) {
                    try {
                        let n = Ct(e);
                        (It.time = t), PS.release(e.x, e.y, n, It);
                    } catch (e) {
                        return ct("PS.release() failed [" + e.message + "]", e);
                    }
                    lt();
                }
                PS.swipe && Ot();
            }
            return PS.DONE;
        },
        Yt = e({ time: 0, touching: !1 }),
        Wt = function (e) {
            if (((be = !0), e.active)) {
                let t = ze.ticks;
                if (
                    ((e.timeEnter = t), me && PS.swipe && Y && Dt(e.x, e.y, t), PS.enter)
                ) {
                    try {
                        let n = Ct(e);
                        (Yt.time = t), (Yt.touching = me), PS.enter(e.x, e.y, n, Yt);
                    } catch (e) {
                        return ct("PS.enter() failed [" + e.message + "]", e);
                    }
                    lt();
                }
            }
            return PS.DONE;
        },
        Kt = e({ time: 0, touching: !1 }),
        jt = function (e) {
            if (e.active) {
                let t = ze.ticks;
                if (((e.timeExit = t), me && PS.swipe && Y && Ft(t), PS.exit)) {
                    try {
                        let n = Ct(e);
                        (Kt.time = t), (Kt.touching = me), PS.exit(e.x, e.y, n, Kt);
                    } catch (e) {
                        return ct("PS.exit() failed [" + e.message + "]", e);
                    }
                    lt();
                }
            }
            return PS.DONE;
        },
        zt = e({ time: 0, touching: !1 }),
        Gt = function () {
            be = !1;
            let e = ze.ticks;
            if (((F.timeExit = e), PS.exitGrid)) {
                try {
                    (zt.time = e), (zt.touching = me), PS.exitGrid(zt);
                } catch (e) {
                    return ct("PS.exitGrid() failed [" + e.message + "]", e);
                }
                lt();
            }
            return me && PS.swipe && Y && Dt(-1, -1, e), PS.DONE;
        },
        qt = function () {
            (be = !1), (Se = -1), (_e = -1), (me = !1), (Y = null), (de = -1);
        },
        Ht = function (e, t) {
            let n = F.canvas,
                r =
                    e +
                    (document.body.scrollLeft +
                        document.documentElement.scrollLeft -
                        n.offsetLeft -
                        F.padLeft),
                o =
                    t +
                    (document.body.scrollTop +
                        document.documentElement.scrollTop -
                        n.offsetTop -
                        F.padRight);
            if (r >= F.left && r < F.right && o >= F.top && o < F.bottom) {
                let e = 0;
                for (; e < F.count; ) {
                    let t = O[e];
                    if (o >= t.top && o < t.bottom) {
                        for (let n = 0; n < F.x; n += 1) {
                            if (
                                r >= t.senseLeft &&
                                r < t.senseRight &&
                                o >= t.senseTop &&
                                o < t.senseBottom
                            )
                                return t;
                            t = O[(e += 1)];
                        }
                        return null;
                    }
                    e += F.x;
                }
            }
            return null;
        },
        Vt = function (e) {
            Re && Ee.blur();
            let t = ze.ticks;
            return (me = !0), PS.swipe && (Nt(t), Dt(-1, -1, t)), Fe(e);
        },
        $t = function (e) {
            return PS.swipe && Y && Ot(ze.ticks), (me = !1), Fe(e);
        },
        Xt = function (e) {
            return Ee.focus(), Fe(e);
        },
        Qt = function (e) {
            return Fe(e);
        },
        Jt = function (e) {
            Re && Ee.blur();
            let t = e.clientX,
                n = e.clientY;
            me = !0;
            let r = Ht(t, n);
            return r && Mt(r), Fe(e);
        },
        Zt = function (e) {
            let t = e.clientX,
                n = e.clientY;
            me = !1;
            let r = Ht(t, n);
            return r && Bt(r), Fe(e);
        },
        en = function (e) {
            let t,
                n = e.clientX,
                r = e.clientY,
                o = Ht(n, r);
            return (
                o
                    ? o.index !== Se &&
                    (-1 !== Se && ((t = O[Se]), jt(t)), Wt(o), (Se = o.index))
                    : -1 !== Se && ((t = O[Se]), jt(t), (Se = -1)),
                    Fe(e)
            );
        },
        tn = function (e) {
            if (-1 !== Se) {
                let e = O[Se];
                jt(e), (Se = -1);
            }
            let t = e.relatedTarget;
            return (
                t &&
                (t = t.id) &&
                ("outer" === t || "main" === t || t.length < 1) &&
                Gt(),
                    Fe(e)
            );
        },
        nn = function (e) {
            if ((Re && Ee.blur(), -1 !== de)) return Fe(e);
            let t = e.changedTouches[0];
            (de = t.identifier), (me = !0);
            let n = t.pageX,
                r = t.pageY,
                o = Ht(n, r);
            return (
                o ? ((be = !0), Mt(o), (_e = o.index)) : ((_e = -1), (be = !1)), Fe(e)
            );
        },
        rn = function (e) {
            let t = e.changedTouches.length;
            for (let n = 0; n < t; n += 1) {
                let t = e.changedTouches[n];
                if (t.identifier === de) {
                    (de = -1), (be = !1);
                    let e = t.pageX,
                        n = t.pageY,
                        r = Ht(e, n);
                    r && Bt(r), (_e = -1), (me = !1);
                    break;
                }
            }
            return Fe(e);
        },
        on = function (e) {
            let t,
                n = e.changedTouches.length;
            for (let r = 0; r < n; r += 1) {
                let n = e.changedTouches[r];
                if (n.identifier === de) {
                    let e = n.pageX,
                        r = n.pageY,
                        o = Ht(e, r);
                    o
                        ? ((be = !0),
                        _e !== o.index &&
                        (-1 !== _e && ((t = O[_e]), jt(t)), Wt(o), (_e = o.index)))
                        : (-1 !== _e && ((t = O[_e]), jt(t)), (_e = -1), be && Gt());
                    break;
                }
            }
            return Fe(e);
        },
        ln = function () {
            (le.length = 0), (ce = !1), (ge = !1);
            for (let e = 0; e < 256; e += 1) ie[e] = 0;
        },
        an = function (e, t) {
            let n = e;
            return (
                n >= 65 && n <= 90
                    ? t || (n += 32)
                    : ((n = ne[n]), t && n < 256 && (n = re[n])),
                    n
            );
        },
        un = function (e) {
            return e >= 32 || 13 === e || 8 === e || 9 === e || 27 === e;
        },
        sn = function (e) {
            const t = "[_keyDown] ";
            let n, r;
            if (ye) return !0;
            let o = !1;
            (ce = e.shiftKey), (ge = e.ctrlKey);
            let i = e.which || e.keyCode,
                l = an(i, ce);
            if (un(l)) {
                if (
                    !ie[l] &&
                    ((ie[l] = 1),
                    l !== i &&
                    ie[i] &&
                    ((ie[i] = 0), (r = le.indexOf(i)) >= 0 && le.splice(r, 1)),
                    le.length < 1 && (ae = se),
                    le.indexOf(l) < 0 && le.push(l),
                        PS.keyDown)
                )
                    try {
                        (ze.keyOptions.time = ze.ticks),
                            PS.keyDown(l, ce, ge, ze.keyOptions),
                            (o = !0);
                    } catch (e) {
                        ct(t + "PS.keyDown failed [" + e.message + "]", e);
                    }
            } else if (16 === l)
                for (n = le.length, r = 0; r < n; r += 1)
                    if (
                        ((l = i = le[r]),
                            i >= 97 && i <= 122 ? (l -= 32) : i < 256 && (l = re[i]),
                        l !== i && ((ie[i] = 0), (ie[l] = 1), (le[r] = l), PS.keyDown))
                    )
                        try {
                            (ze.keyOptions.time = ze.ticks),
                                PS.keyDown(l, !0, ge, ze.keyOptions),
                                (o = !0);
                        } catch (e) {
                            ct(t + "PS.keyDown failed [" + e.message + "]", e);
                        }
            return o && lt(), Fe(e);
        },
        dn = e({ time: 0 }),
        fn = function (e) {
            const t = "[_keyUp] ";
            let n, r;
            if (ye) return !0;
            let o = !1,
                i = (ce = e.shiftKey),
                l = (ge = e.ctrlKey),
                a = e.which || e.keyCode,
                u = an(a, ce);
            if (un(u)) {
                if (
                    ((ie[u] = 0),
                    (n = le.indexOf(u)) >= 0 && le.splice(n, 1),
                    le.length < 1 && ((ae = 0), (ce = !1), (ge = !1)),
                        PS.keyUp)
                )
                    try {
                        (dn.time = ze.ticks), PS.keyUp(u, i, l, dn), (o = !0);
                    } catch (e) {
                        ct(t + "PS.keyUp failed [" + e.message + "]", e);
                    }
            } else if (16 === u)
                for (r = le.length, n = 0; n < r; n += 1)
                    if (
                        ((u = a = le[n]),
                        a < 256 && (u = oe[a]),
                        u !== a && ((ie[a] = 0), (ie[u] = 1), (le[n] = u), PS.keyDown))
                    )
                        try {
                            (dn.time = ze.ticks), PS.keyDown(u, !1, l, dn), (o = !0);
                        } catch (e) {
                            ct(t + "PS.keyDown failed [" + e.message + "]", e);
                        }
            return o && lt(), Fe(e);
        },
        cn = e({ wheel: 0 }),
        gn = e({ time: 0 }),
        hn = function (e) {
            if (!be) return !0;
            let t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            return (
                (t = t >= 1 ? PS.WHEEL_FORWARD : PS.WHEEL_BACKWARD),
                    (cn.wheel = t),
                    (gn.time = ze.ticks),
                    (function (e, t) {
                        if (PS.input) {
                            try {
                                PS.input(e, t);
                            } catch (e) {
                                ct("PS.input() failed [" + e.message + "]", e);
                            }
                            lt();
                        }
                    })(cn, gn),
                    Fe(e)
            );
        },
        pn = function () {
            te ||
            (ln(),
                document.addEventListener("keydown", sn, !!T && w),
                document.addEventListener("keyup", fn, !!T && w),
                (te = !0));
        },
        mn = function () {
            te &&
            ((te = !1),
                document.removeEventListener("keydown", sn, !1),
                document.removeEventListener("keyup", fn, !1));
        },
        bn = function (e) {
            let t,
                n,
                r,
                o = F.color,
                i = F.fader,
                l = e.rgb;
            return l === PS.CURRENT
                ? o.rgb
                : (null === l
                    ? ((t = e.r) === PS.CURRENT
                        ? (e.r = t = o.r)
                        : t === PS.DEFAULT && (e.r = t = b.grid.color.r),
                        (n = e.g) === PS.CURRENT
                            ? (e.g = n = o.g)
                            : n === PS.DEFAULT && (e.g = n = b.grid.color.g),
                        (r = e.b) === PS.CURRENT
                            ? (e.b = r = o.b)
                            : r === PS.DEFAULT && (e.b = r = b.grid.color.b),
                        (e.rgb = t * s + n * d + r))
                    : l === PS.DEFAULT &&
                    (e = {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255,
                        rgb: 16777215,
                        str: "rgba(255,255,255,1)",
                    }),
                (o.rgb !== e.rgb ||
                    (i.rate > 0 && null !== i.rgb && i.rgb !== e.rgb)) &&
                ((o.rgb = e.rgb),
                    (t = e.r),
                    (n = e.g),
                    (r = e.b),
                    (o.str = e.str = _[t] + P[n] + E[r]),
                    i.rate > 0
                        ? null !== i.rgb
                            ? bt(i, i.r, i.g, i.b, 255, t, n, r, 255)
                            : i.active
                                ? St(i, t, n, r, 255)
                                : bt(i, o.r, o.g, o.b, 255, t, n, r, 255)
                        : (Ve(), Xe()),
                    (o.r = t),
                    (o.g = n),
                    (o.b = r)),
                    o.rgb);
        },
        Sn = function (e, t) {
            let n,
                r,
                o,
                i = F.shadow,
                l = t.rgb;
            var a;
            return (
                l !== PS.CURRENT &&
                (null === l
                    ? ((n = t.r) === PS.CURRENT
                        ? (t.r = n = i.r)
                        : n === PS.DEFAULT && (t.r = n = b.grid.shadow.r),
                        (r = t.g) === PS.CURRENT
                            ? (t.g = r = i.g)
                            : r === PS.DEFAULT && (t.g = r = b.grid.shadow.g),
                        (o = t.b) === PS.CURRENT
                            ? (t.b = o = i.b)
                            : o === PS.DEFAULT && (t.b = o = b.grid.shadow.b),
                        (t.rgb = n * s + r * d + o))
                    : l === PS.DEFAULT &&
                    (t = {
                        show: !1,
                        r: 192,
                        g: 192,
                        b: 192,
                        a: 255,
                        rgb: 12632256,
                        str: "rgba(192,192,192,1)",
                        params: "0px 0px 64px 8px ",
                    }),
                i.rgb !== t.rgb &&
                ((i.rgb = t.rgb),
                    (n = t.r),
                    (r = t.g),
                    (o = t.b),
                    (i.str = t.str = _[n] + P[r] + E[o]),
                    (i.r = n),
                    (i.g = r),
                    (i.b = o))),
                e !== PS.CURRENT && (F.shadow.show = e),
                    F.shadow.show
                        ? ((a = i), (F.canvas.style.boxShadow = F.shadow.params + a.str))
                        : (F.canvas.style.boxShadow = "none"),
                    { show: F.shadow.show, rgb: i.rgb }
            );
        },
        _n = function (e, t) {
            let n;
            if (
                ($(),
                    ht(F.fader),
                    ht(k.fader),
                    qt(),
                    (F.plane = 0),
                F.ready && e === F.x && t === F.y)
            )
                for (let e = 0; e < F.count; e += 1) (n = O[e]), wt(n), Lt(n), vt(n);
            else {
                (F.x = e), (F.y = t), (F.count = e * t), (F.left = 0), (F.top = 0);
                let r = Math.floor(e >= t ? N / e : N / t);
                (F.bead_size = r),
                    (F.width = r * e),
                    (F.height = r * t),
                    (F.right = F.width),
                    (F.bottom = F.height),
                    (F.canvas.width = F.width),
                    (F.canvas.height = F.height),
                    (F.context.textAlign = "center"),
                    (F.context.textBaseline = "middle");
                let o = 0,
                    i = F.top;
                for (let l = 0; l < t; l += 1) {
                    let t = F.left;
                    for (let a = 0; a < e; a += 1)
                        ((n = O[o]).x = a),
                            (n.y = l),
                            (n.left = t),
                            (n.right = t + r),
                            (n.top = i),
                            (n.bottom = i + r),
                            wt(n),
                            Lt(n),
                            vt(n),
                            (t += r),
                            (o += 1);
                    i += r;
                }
                for (; o < 1024; ) ((n = O[o]).visible = !1), (n.active = !1), (o += 1);
            }
            (I = !0),
                bn({ rgb: PS.DEFAULT }),
                PS.statusColor(PS.DEFAULT),
                lt(),
                (F.ready = !0);
        },
        Pn = function (e, t) {
            if (Ne(e) !== we) return gt(t + "x argument not a number");
            let n = Math.floor(e);
            return n < 0
                ? gt(t + "x argument negative")
                : n >= F.x
                    ? gt(t + "x argument exceeds grid width")
                    : n;
        },
        En = function (e, t) {
            if (Ne(e) !== we) return gt(t + "y argument not a number");
            let n = Math.floor(e);
            return n < 0
                ? gt(t + "y argument negative")
                : n >= F.y
                    ? gt(t + "y argument exceeds grid height")
                    : n;
        },
        Rn = function (e, t, n, r, o, i, l, a) {
            let u, s, d;
            if (n === PS.ALL) {
                if (r === PS.ALL) {
                    for (let e = 0; e < F.y; e += 1)
                        for (
                            let n = 0;
                            n < F.x && (d = t(n, e, o, i, l, a)) !== PS.ERROR;
                            n += 1
                        );
                    return d;
                }
                if ((s = En(r, e)) === PS.ERROR) return PS.ERROR;
                for (
                    let e = 0;
                    e < F.x && (d = t(e, s, o, i, l, a)) !== PS.ERROR;
                    e += 1
                );
                return d;
            }
            if (r === PS.ALL) {
                if ((u = Pn(n, e)) === PS.ERROR) return PS.ERROR;
                for (
                    let e = 0;
                    e < F.y && (d = t(u, e, o, i, l, a)) !== PS.ERROR;
                    e += 1
                );
                return d;
            }
            return (u = Pn(n, e)) === PS.ERROR
                ? PS.ERROR
                : (s = En(r, e)) === PS.ERROR
                    ? PS.ERROR
                    : (d = t(u, s, o, i, l, a));
        },
        yn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r],
                i = b.bead.color,
                l = xt(o, F.plane),
                a = o.fader,
                u = n.rgb;
            if (!o.active || u === PS.CURRENT) return l.rgb;
            if (null === u) {
                let e = n.r;
                e === PS.CURRENT
                    ? (n.r = e = l.r)
                    : e === PS.DEFAULT && (n.r = e = i.r);
                let t = n.g;
                t === PS.CURRENT
                    ? (n.g = t = l.g)
                    : t === PS.DEFAULT && (n.g = t = i.g);
                let r = n.b;
                r === PS.CURRENT
                    ? (n.b = r = l.b)
                    : r === PS.DEFAULT && (n.b = r = i.b),
                    (n.rgb = e * s + t * d + r);
            } else
                u === PS.DEFAULT &&
                (n = {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 255,
                    rgb: 16777215,
                    str: "rgba(255,255,255,1)",
                });
            return (
                (l.rgb !== n.rgb ||
                    (a.rate > 0 && null !== a.rgb && a.rgb !== n.rgb)) &&
                ((l.rgb = n.rgb), (l.r = n.r), (l.g = n.g), (l.b = n.b), _t(o)),
                    l.rgb
            );
        },
        vn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r],
                i = xt(o, F.plane);
            return (
                o.active && n !== PS.CURRENT && n !== i.a && ((i.a = n), _t(o)), i.a
            );
        },
        Tn = function (t, n) {
            let r, o, i;
            if (void 0 === n || n === PS.CURRENT)
                return {
                    rgb: PS.CURRENT,
                    r: 0,
                    g: 0,
                    b: 0,
                    onStep: PS.CURRENT,
                    onEnd: PS.CURRENT,
                    params: PS.CURRENT,
                };
            if (n === PS.DEFAULT)
                return {
                    rgb: PS.DEFAULT,
                    r: 0,
                    g: 0,
                    b: 0,
                    onStep: PS.DEFAULT,
                    onEnd: PS.DEFAULT,
                    params: PS.DEFAULT,
                };
            if (Ne(n) !== Ae) return gt(t + "options argument invalid");
            let l = e(n);
            (l.r = 0), (l.g = 0), (l.b = 0);
            let a = n.rgb;
            if (a !== PS.CURRENT && a !== PS.DEFAULT)
                if (null == a) l.rgb = PS.CURRENT;
                else {
                    if (Ne(a) !== we) return gt(t + "options.rgb property invalid");
                    if ((a = Math.floor(a)) <= PS.COLOR_BLACK)
                        (a = PS.COLOR_BLACK), (r = 0), (i = 0), (o = 0);
                    else if (a >= PS.COLOR_WHITE)
                        (a = PS.COLOR_WHITE), (r = 255), (i = 255), (o = 255);
                    else {
                        r = a / s;
                        let e = (r = Math.floor(r)) * s;
                        (i = (a - e) / d), (o = a - e - (i = Math.floor(i)) * d);
                    }
                    (l.rgb = a), (l.r = r), (l.g = i), (l.b = o);
                }
            if ((a = l.onStep) !== PS.CURRENT && a !== PS.DEFAULT)
                if (null == a) l.onStep = PS.CURRENT;
                else if (Ne(a) !== Ue) return gt(t + "options.onStep property invalid");
            if ((a = l.onEnd) !== PS.CURRENT && a !== PS.DEFAULT)
                if (null == a) l.onEnd = PS.CURRENT;
                else if (Ne(a) !== Ue) return gt(t + "options.onEnd property invalid");
            if ((a = l.params) !== PS.CURRENT && a !== PS.DEFAULT)
                if (null == a) l.params = PS.CURRENT;
                else if (Ne(a) !== Ce) return gt(t + "options.params property invalid");
            return l;
        },
        wn = function (e, t, n, r) {
            let o = t * F.x + e,
                i = O[o],
                l = i.color,
                a = i.fader,
                u = a.rate;
            if (i.active) {
                let e = n === PS.CURRENT ? u : n === PS.DEFAULT ? b.fader.rate : n,
                    t = r.rgb;
                t !== PS.CURRENT &&
                (t === PS.DEFAULT ? (a.rgb = b.fader.rgb) : (a.rgb = t),
                    (a.r = r.r),
                    (a.g = r.g),
                    (a.b = r.b)),
                (t = r.onStep) !== PS.CURRENT &&
                (t === PS.DEFAULT ? (a.onStep = b.fader.onStep) : (a.onStep = t)),
                (t = r.onEnd) !== PS.CURRENT &&
                (t === PS.DEFAULT ? (a.onEnd = b.fader.onEnd) : (a.onEnd = t)),
                (t = r.params) !== PS.CURRENT &&
                (t === PS.DEFAULT ? (a.params = b.fader.params) : (a.params = t)),
                u !== e &&
                ((a.rate = e),
                    e < 1
                        ? ((a.active = !1), (a.kill = !0))
                        : a.active && St(a, l.r, l.g, l.b, 255));
            }
            return {
                rate: a.rate,
                rgb: a.rgb,
                onStep: a.onStep,
                onEnd: a.onEnd,
                params: a.params,
            };
        },
        xn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return (
                o.active &&
                n !== PS.CURRENT &&
                o.scale !== n &&
                ((o.scale = n), Lt(o), it(o)),
                    o.scale
            );
        },
        An = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            if (o.active && n !== PS.CURRENT && o.radius !== n) {
                if (((o.radius = n), !o.border.equal && n > 0)) {
                    let e = Math.max(
                        o.border.top,
                        o.border.left,
                        o.border.bottom,
                        o.border.right
                    );
                    Ut(o, e);
                }
                it(o);
            }
            return o.radius;
        },
        Un = function (e, t, n) {
            let r,
                o,
                i,
                l = t * F.x + e,
                a = O[l],
                u = b.bead.bgColor,
                f = a.bgColor,
                c = n.rgb;
            return a.active && c !== PS.CURRENT
                ? (null === c
                    ? ((r = n.r) === PS.CURRENT
                        ? (n.r = r = f.r)
                        : r === PS.DEFAULT && (n.r = r = u.r),
                        (o = n.g) === PS.CURRENT
                            ? (n.g = o = f.g)
                            : o === PS.DEFAULT && (n.g = o = u.g),
                        (i = n.b) === PS.CURRENT
                            ? (n.b = i = f.b)
                            : i === PS.DEFAULT && (n.b = i = u.b),
                        (n.rgb = r * s + o * d + i))
                    : c === PS.DEFAULT &&
                    (n = {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 0,
                        rgb: 16777215,
                        str: "rgba(255,255,255,0)",
                    }),
                f.rgb !== n.rgb &&
                ((f.rgb = n.rgb),
                    (f.r = r = n.r),
                    (f.g = o = n.g),
                    (f.b = i = n.b),
                    (f.str = _[r] + P[o] + P[i] + R[f.a]),
                a.active && (a.scale < 100 || a.radius > 0) && it(a)),
                    f.rgb)
                : f.rgb;
        },
        Ln = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r],
                i = o.bgColor;
            return (
                n !== PS.CURRENT &&
                n !== i.a &&
                ((i.a = n),
                    (i.str = _[i.r] + P[i.g] + P[i.b] + R[n]),
                o.active && (o.scale < 100 || o.radius > 0) && it(o)),
                    i.a
            );
        },
        Cn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return (
                o.active &&
                n !== PS.CURRENT &&
                (null === n
                    ? ((o.data = b.bead.data),
                        (o.fader.data = o.data),
                        (o.border.fader.data = o.data),
                        (o.glyph.fader.data = o.data))
                    : ((o.data = n),
                        (o.fader.data = n),
                        (o.border.fader.data = n),
                        (o.glyph.fader.data = n))),
                    o.data
            );
        },
        Nn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return o.active && n !== PS.CURRENT && (o.exec = n), o.exec;
        },
        Dn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return (
                o.active &&
                n !== PS.CURRENT &&
                o.visible !== n &&
                ((o.visible = n),
                n ||
                ((o.fader.kill = !0),
                    (o.border.fader.kill = !0),
                    (o.glyph.fader.kill = !0)),
                    it(o)),
                    o.visible
            );
        },
        Fn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return n !== PS.CURRENT && (o.active = n), o.active;
        },
        On = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            return (
                o.active &&
                n !== PS.CURRENT &&
                o.minimum !== n &&
                (n > o.size && (n = o.size), (o.minimum = n), Lt(o), it(o)),
                    o.minimum
            );
        },
        kn = function (e, t, n) {
            let r = t * F.x + e,
                o = O[r];
            if (o.active && n !== PS.CURRENT) {
                let e = At(o);
                if (Ne(n) === we)
                    n > e && (n = e), n !== o.border.width && (Ut(o, n), it(o));
                else {
                    let t = !1,
                        r = n.top;
                    r === PS.CURRENT
                        ? (r = o.border.top)
                        : (r > e && (r = e),
                        r !== o.border.top && ((o.border.top = r), (t = !0)));
                    let i = n.left;
                    i === PS.CURRENT
                        ? (i = o.border.left)
                        : (i > e && (i = e),
                        i !== o.border.left && ((o.border.left = i), (t = !0)));
                    let l = n.bottom;
                    l === PS.CURRENT
                        ? (l = o.border.bottom)
                        : (l > e && (l = e),
                        l !== o.border.bottom && ((o.border.bottom = l), (t = !0)));
                    let a = n.right;
                    a === PS.CURRENT
                        ? (a = o.border.right)
                        : (a > e && (a = e),
                        a !== o.border.right && ((o.border.right = a), (t = !0))),
                        r === i && r === a && r === l
                            ? (Ut(o, r), t && it(o))
                            : o.radius > 0
                                ? ((e = Math.max(r, i, l, a)), Ut(o, e), it(o))
                                : ((o.border.equal = !1), t && it(o));
                }
            }
            let i = {
                top: o.border.top,
                left: o.border.left,
                bottom: o.border.bottom,
                right: o.border.right,
                equal: o.border.equal,
            };
            return (
                o.border.equal ||
                (o.border.width = Math.max(i.top, i.left, i.bottom, i.right)),
                    (i.width = o.border.width),
                    i
            );
        };
    function Mn(e, t, n) {
        let r, o, i, l, a, u, f, c, g, h;
        return (
            (r = t * F.x + e),
                (i = (o = O[r]).border.color),
                (l = o.border.fader),
                (a = b.bead.border.color),
                (u = n.rgb),
            o.active &&
            u !== PS.CURRENT &&
            (null === u
                ? ((f = n.r) === PS.CURRENT
                    ? (n.r = f = i.r)
                    : f === PS.DEFAULT && (n.r = f = a.r),
                    (c = n.g) === PS.CURRENT
                        ? (n.g = c = i.g)
                        : c === PS.DEFAULT && (n.g = c = a.g),
                    (g = n.b) === PS.CURRENT
                        ? (n.b = g = i.b)
                        : g === PS.DEFAULT && (n.b = g = a.b),
                    (n.rgb = f * s + c * d + g))
                : u === PS.DEFAULT &&
                (n = {
                    r: 128,
                    g: 128,
                    b: 128,
                    a: 255,
                    rgb: 8421504,
                    str: "rgba(128,128,128,1)",
                }),
            (i.rgb !== n.rgb ||
                (l.rate > 0 && null !== l.rgb && l.rgb !== n.rgb)) &&
            ((i.rgb = n.rgb),
                (f = n.r),
                (c = n.g),
                (g = n.b),
                (n.a = h = i.a),
                (i.str = n.str = _[f] + P[c] + P[g] + R[h]),
            o.visible &&
            (l.rate > 0
                ? null !== l.rgb
                    ? bt(l, l.r, l.g, l.b, h, f, c, g, h)
                    : l.active
                        ? St(l, f, c, g, h)
                        : bt(l, i.r, i.g, i.b, h, f, c, g, h)
                : it(o)),
                (i.r = f),
                (i.g = c),
                (i.b = g))),
                i.rgb
        );
    }
    function In(e, t, n) {
        let r, o, i, l, a, u, s;
        return (
            (r = t * F.x + e),
                (i = (o = O[r]).border.color),
            o.active &&
            n !== PS.CURRENT &&
            n !== i.a &&
            ((l = i.r),
                (a = i.g),
                (u = i.b),
                (i.str = _[l] + P[a] + P[u] + R[n]),
            o.visible &&
            ((s = o.border.fader).rate > 0
                ? s.active
                    ? St(s, l, a, u, n)
                    : null !== s.rgb
                        ? bt(s, s.r, s.g, s.b, i.a, l, a, u, n)
                        : bt(s, l, a, u, i.a, l, a, u, n)
                : it(o)),
                (i.a = n)),
                i.a
        );
    }
    function Bn(e, t, n, r) {
        let o, i, l, a, u, s, d;
        return (
            (o = t * F.x + e),
                (a = (i = O[o]).border.color),
                (u = (l = i.border.fader).rate),
            i.active &&
            ((s = n === PS.CURRENT ? u : n === PS.DEFAULT ? b.fader.rate : n),
            (d = r.rgb) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.rgb = b.fader.rgb) : (l.rgb = d),
                (l.r = r.r),
                (l.g = r.g),
                (l.b = r.b)),
            (d = r.onStep) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.onStep = b.fader.onStep) : (l.onStep = d)),
            (d = r.onEnd) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.onEnd = b.fader.onEnd) : (l.onEnd = d)),
            (d = r.params) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.params = b.fader.params) : (l.params = d)),
            u !== s &&
            ((l.rate = s),
                s < 1
                    ? ((l.active = !1), (l.kill = !0))
                    : l.active && St(l, a.r, a.g, a.b, 255))),
                {
                    rate: l.rate,
                    rgb: l.rgb,
                    onStep: l.onStep,
                    onEnd: l.onEnd,
                    params: l.params,
                }
        );
    }
    function Yn(e, t, n) {
        let r, o;
        return (
            (r = t * F.x + e),
            (o = O[r]).active &&
            n !== PS.CURRENT &&
            o.glyph.str !== n &&
            ((o.glyph.str = n),
                n.length > 0 ? (o.glyph.code = n.charCodeAt(0)) : (o.glyph.code = 0),
                it(o)),
                o.glyph.code
        );
    }
    function Wn(e, t, n) {
        let r,
            o,
            i,
            l,
            a = t * F.x + e,
            u = O[a],
            f = u.glyph.color,
            c = u.glyph.fader,
            g = b.bead.glyph.color,
            h = n.rgb;
        return (
            u.active &&
            h !== PS.CURRENT &&
            (null === h
                ? ((r = n.r) === PS.CURRENT
                    ? (n.r = r = f.r)
                    : r === PS.DEFAULT && (n.r = r = g.r),
                    (o = n.g) === PS.CURRENT
                        ? (n.g = o = f.g)
                        : o === PS.DEFAULT && (n.g = o = g.g),
                    (i = n.b) === PS.CURRENT
                        ? (n.b = i = f.b)
                        : i === PS.DEFAULT && (n.b = i = g.b),
                    (n.rgb = r * s + o * d + i))
                : h === PS.DEFAULT &&
                (n = { r: 0, g: 0, b: 0, a: 255, rgb: 0, str: "rgba(0,0,0,1)" }),
            (f.rgb !== n.rgb ||
                (c.rate > 0 && null !== c.rgb && c.rgb !== n.rgb)) &&
            ((f.rgb = n.rgb),
                (r = n.r),
                (o = n.g),
                (i = n.b),
                (n.a = l = f.a),
                (f.str = n.str = _[r] + P[o] + P[i] + R[l]),
            u.visible &&
            (c.rate > 0
                ? null !== c.rgb
                    ? bt(c, c.r, c.g, c.b, l, r, o, i, l)
                    : c.active
                        ? St(c, r, o, i, l)
                        : bt(c, f.r, f.g, f.b, l, r, o, i, l)
                : it(u)),
                (f.r = r),
                (f.g = o),
                (f.b = i))),
                f.rgb
        );
    }
    function Kn(e, t, n) {
        let r, o, i, l, a, u, s;
        return (
            (r = t * F.x + e),
                (i = (o = O[r]).glyph.color),
            o.active &&
            n !== PS.CURRENT &&
            n !== i.a &&
            ((l = i.r),
                (a = i.g),
                (u = i.b),
                (i.str = _[l] + P[a] + P[u] + R[n]),
            o.visible &&
            ((s = o.glyph.fader).rate > 0
                ? s.active
                    ? St(s, l, a, u, n)
                    : bt(s, l, a, u, i.a, l, a, u, n)
                : it(o)),
                (i.a = n)),
                i.a
        );
    }
    function jn(e, t, n) {
        let r, o, i;
        return (
            (r = t * F.x + e),
                (i = (o = O[r]).glyph.scale),
            o.active &&
            n !== PS.CURRENT &&
            n !== i &&
            ((o.glyph.scale = n), o.visible && (vt(o), it(o))),
                o.glyph.scale
        );
    }
    function zn(e, t, n, r) {
        let o, i, l, a, u, s, d;
        return (
            (o = t * F.x + e),
                (l = (i = O[o]).glyph.color),
                (u = (a = i.glyph.fader).rate),
            i.active &&
            ((s = n === PS.CURRENT ? u : n === PS.DEFAULT ? b.fader.rate : n),
            (d = r.rgb) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (a.rgb = b.fader.rgb) : (a.rgb = d),
                (a.r = r.r),
                (a.g = r.g),
                (a.b = r.b)),
            (d = r.onStep) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (a.onStep = b.fader.onStep) : (a.onStep = d)),
            (d = r.onEnd) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (a.onEnd = b.fader.onEnd) : (a.onEnd = d)),
            (d = r.params) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (a.params = b.fader.params) : (a.params = d)),
            u !== s &&
            ((a.rate = s),
                s < 1
                    ? ((a.active = !1), (a.kill = !0))
                    : a.active && St(a, l.r, l.g, l.b, 255))),
                {
                    rate: a.rate,
                    rgb: a.rgb,
                    onStep: a.onStep,
                    onEnd: a.onEnd,
                    params: a.params,
                }
        );
    }
    function Gn(e) {
        let t, n, r, o, i, l, a, u;
        for (t = e.getAttribute("data-id"), n = W.length, r = 0; r < n; r += 1)
            if ((o = W[r]).id === t) {
                (i = o.exec), (l = o.format), (a = o.source), W.splice(r, 1);
                break;
            }
        if (
            (u = (function (e, t) {
                let n, r, o, i, l, a, u, f, c, g, h, p, m, b, S;
                if (((n = "[_imageExtract] "), (r = e.width), Ne(r) !== we || r < 1))
                    return gt(n + "image width invalid");
                if (((r = Math.floor(r)), (o = e.height), Ne(o) !== we || o < 1))
                    return gt(n + "image height invalid");
                o = Math.floor(o);
                try {
                    (M.width = r),
                        (M.height = o),
                        (i = M.getContext("2d")).drawImage(e, 0, 0, r, o, 0, 0, r, o);
                } catch (e) {
                    return ct(n + "image extraction failed @ 1 [" + e.message + "]", e);
                }
                try {
                    l = i.getImageData(0, 0, r, o);
                } catch (e) {
                    return ct(n + "image extraction failed @ 2 [" + e.message + "]", e);
                }
                if (
                    ((a = { width: l.width, height: l.height }),
                        (f = (u = l.data).length),
                        (c = []),
                        (h = g = 0),
                    1 === t)
                )
                    for (c.length = f / 4; g < f; )
                        (p = u[g]),
                            (m = u[g + 1]),
                            (b = u[g + 2]),
                            (c[h] = p * s + m * d + b),
                            (g += 4),
                            (h += 1);
                else if (2 === t)
                    for (c.length = f / 2; g < f; )
                        (p = u[g]),
                            (m = u[g + 1]),
                            (b = u[g + 2]),
                            (S = u[g + 3]),
                            (c[h] = p * s + m * d + b),
                            (c[h + 1] = S),
                            (g += 4),
                            (h += 2);
                else if (3 === t)
                    for (c.length = (f / 4) * 3; g < f; )
                        (p = u[g]),
                            (m = u[g + 1]),
                            (b = u[g + 2]),
                            (c[h] = p),
                            (c[h + 1] = m),
                            (c[h + 2] = b),
                            (g += 4),
                            (h += 3);
                else
                    for (c.length = f; g < f; )
                        (c[g] = u[g]),
                            (c[(g += 1)] = u[g]),
                            (c[(g += 1)] = u[g]),
                            (c[(g += 1)] = u[g]),
                            (g += 1);
                return (a.pixelSize = t), (a.data = c), a;
            })(e, l)) !== PS.ERROR
        )
            try {
                (u.source = a), (u.id = t), i(u);
            } catch (e) {
                ct("[PS.imageLoad] .exec function failed [" + e.message + "]", e);
            }
    }
    function qn(e, t) {
        let n, r, o, i, l, a, u, s;
        if (Ne(t) !== Ae) return gt(e + "image argument not an object");
        if (((n = t.width), Ne(n) !== we))
            return gt(e + "image.width not a number");
        if ((n = Math.floor(n)) < 1) return gt(e + "image.width < 1");
        if (((t.width = n), (r = t.height), Ne(r) !== we))
            return gt(e + "image.height not a number");
        if ((r = Math.floor(r)) < 1) return gt(e + "image.height < 1");
        if (((t.height = r), (o = t.pixelSize), Ne(o) !== we))
            return gt(e + "image.pixelSize not a number");
        if ((o = Math.floor(o)) < 1 && o > 4)
            return gt(e + "image.pixelSize is not 1, 2, 3 or 4");
        if (((t.pixelSize = o), (l = t.data), Ne(l) !== Ce))
            return gt(e + "image.data is not an array");
        if ((a = l.length) !== (i = n * r * o))
            return gt(e + "image.data length invalid");
        for (u = 0; u < a; u += 1) {
            if (((s = l[u]), Ne(s) !== we))
                return gt(e + "image.data[" + u + "] not a number");
            if (s < 0) return gt(e + "image.data[" + u + "] negative");
            if (o < 3) {
                if (s > 16777215) return gt(e + "image.data[" + u + "] > 0xFFFFFF");
            } else if (s > 255) return gt(e + "image.data[" + u + "] > 255");
        }
        return !0;
    }
    function Hn(e, t, n, r, o, i, l) {
        let a;
        return (
            e < 3
                ? ((a = ""),
                    (a += t ? Oe(n, 6, 16) : n),
                2 === e && (a += t ? ", " + Oe(l, 2, 16) : ", " + l))
                : ((a = t
                    ? Oe(r, 2, 16) + ", " + Oe(o, 2, 16) + ", " + Oe(i, 2, 16)
                    : r + ", " + o + ", " + i),
                4 === e && (a += t ? ", " + Oe(l, 2, 16) : ", " + l)),
                a
        );
    }
    function Vn() {
        let e;
        return (
            (e = {
                id: t + z,
                placed: !1,
                visible: !0,
                x: 0,
                y: 0,
                ax: 0,
                ay: 0,
                image: null,
                color: null,
                collide: null,
                width: 0,
                height: 0,
                plane: -1,
            }),
                (z += 1),
                j.push(e),
                e
        );
    }
    function $n(e, t) {
        let n, r, o;
        if (typeof e !== xe || e.length < 1)
            return gt(t + "sprite argument invalid");
        for (n = j.length, r = 0; r < n; r += 1) if ((o = j[r]).id === e) return o;
        return gt(t + "sprite id '" + e + "' does not exist");
    }
    function Xn(e, t, n, r, o) {
        let i, l, a, u, s, d, f, c, g;
        if (
            (void 0 === t && ((t = e.x), (n = e.y), (r = e.width), (o = e.height)),
                (i = F.x),
                !((t -= e.ax) >= i))
        ) {
            if (t < 0) {
                if ((r += t) < 1) return;
                t = 0;
            }
            if (
                (t + r > i && (r = i - t), (a = t + r), (l = F.y), !((n -= e.ay) >= l))
            ) {
                if (n < 0) {
                    if ((o += n) < 1) return;
                    n = 0;
                }
                for (n + o > l && (o = l - n), u = n + o, d = n; d < u; d += 1)
                    for (s = t; s < a; s += 1)
                        (f = O[(c = s + d * i)]).active &&
                        (((g = xt(f, e.plane)).r = 255),
                            (g.g = 255),
                            (g.b = 255),
                            (g.a = 0),
                            (g.rgb = 16777215),
                            _t(f));
            }
        }
    }
    function Qn(e) {
        let t, n, r, o, i, l, a, u, f, c, g, h, p, m, b, S, _, P, E, R, y, v;
        if (
            ((t = e.width),
                (n = e.height),
                !(t < 1 || n < 1 || ((r = F.x), (f = 0), (i = e.x - e.ax) >= r)))
        ) {
            if (i < 0) {
                if ((t += i) < 1) return;
                (i = 0), (f = e.width - t);
            }
            if (
                (i + t > r && (t = r - i),
                    (a = i + t),
                    (o = F.y),
                    (c = 0),
                    !((l = e.y - e.ay) >= o))
            ) {
                if (l < 0) {
                    if ((n += l) < 1) return;
                    (l = 0), (c = e.height - n);
                }
                if ((l + n > o && (n = o - l), (u = l + n), (g = e.color)))
                    for (p = l; p < u; p += 1)
                        for (h = i; h < a; h += 1)
                            (m = O[(b = h + p * r)]).active &&
                            (((S = xt(m, e.plane)).rgb = g.rgb),
                                (S.r = g.r),
                                (S.g = g.g),
                                (S.b = g.b),
                                (S.a = g.a),
                                _t(m));
                else
                    for (_ = e.image.data, p = l; p < u; p += 1) {
                        for (P = 4 * (c * e.width + f), h = i; h < a; h += 1)
                            (m = O[(b = h + p * r)]).active &&
                            ((E = _[P]),
                                (R = _[P + 1]),
                                (y = _[P + 2]),
                                (v = _[P + 3]),
                                ((S = xt(m, e.plane)).rgb = E * s + R * d + y),
                                (S.r = E),
                                (S.g = R),
                                (S.b = y),
                                (S.a = v),
                                _t(m)),
                                (P += 4);
                        c += 1;
                    }
            }
        }
    }
    function Jn(e, t) {
        let n, r, o, i, l, a, u, s, d, f, c, g, h, p, m, b, S, _;
        for (
            n = "[_collisionCheck] ",
                i = e.x - e.ax,
                l = e.y - e.ay,
                a = e.width,
                u = e.height,
                s = e.collide,
                r = j.length,
                o = 0;
            o < r;
            o += 1
        )
            if (
                (f = (d = j[o]).id) !== t &&
                d.visible &&
                d.placed &&
                ((c = d.x - d.ax),
                    (g = d.y - d.ay),
                    (h = d.width),
                    (p = d.height),
                    (m = d.collide),
                    (b = c > i ? c - i : i - c),
                    (S = g > l ? g - l : l - g),
                    (_ = null),
                    i === c - a || i === c + h
                        ? ((l <= g && S <= u) || (l >= g && S <= p)) && (_ = PS.SPRITE_TOUCH)
                        : l === g - u || l === g + p
                            ? ((i <= c && b <= a) || (i >= c && b <= h)) && (_ = PS.SPRITE_TOUCH)
                            : i >= c && i < c + h
                                ? ((l <= g && S < u) || (l >= g && S < p)) && (_ = PS.SPRITE_OVERLAP)
                                : c >= i &&
                                c < i + a &&
                                ((g <= l && S < p) || (g >= l && S < u)) &&
                                (_ = PS.SPRITE_OVERLAP),
                    _)
            ) {
                if (s)
                    try {
                        s(t, e.plane, f, d.plane, _);
                    } catch (e) {
                        return void ct(
                            n + t + " collide function failed [" + e.message + "]",
                            e
                        );
                    }
                if (m)
                    try {
                        m(f, d.plane, t, e.plane, _);
                    } catch (e) {
                        return void ct(
                            n + f + " collide function failed [" + e.message + "]",
                            e
                        );
                    }
            }
    }
    function Zn(e) {
        (this.content = []), (this.scoreFunction = e);
    }
    function er(e, t, n, r) {
        let o, i, l;
        return (l =
            (o = n > e ? n - e : e - n) > (i = r > t ? r - t : t - r)
                ? i * c + (o - i)
                : o * c + (i - o));
    }
    function tr(e, t, n, r, o, i) {
        let l, a, u, s, d, f, g, h, p, m, b, S, _, P, E;
        return (
            (l = []),
                (a = r.x),
                (s = t - 1),
                (d = n - 1),
                (h = (u = r.y) * t),
                (f = (u - 1) * t),
                (g = (u + 1) * t),
                (S = !1),
                (_ = !1),
                (P = !1),
                (E = !1),
            a > 0 &&
            ((b = e[(m = h + (p = a - 1))]).value
                ? b.closed || ((b.cost = b.value), l.push(b))
                : (E = !0)),
            a < s &&
            ((b = e[(m = h + (p = a + 1))]).value
                ? b.closed || ((b.cost = b.value), l.push(b))
                : (P = !0)),
            u > 0 &&
            ((b = e[(m = f + a)]).value
                ? b.closed || ((b.cost = b.value), l.push(b))
                : (S = !0)),
            u < d &&
            ((b = e[(m = g + a)]).value
                ? b.closed || ((b.cost = b.value), l.push(b))
                : (_ = !0)),
            o ||
            (a > 0 &&
            ((p = a - 1),
            u > 0 &&
            (i || (!E && !S)) &&
            (b = e[(m = f + p)]).value &&
            !b.closed &&
            ((b.cost = b.value * c), l.push(b)),
            u < d &&
            (i || (!E && !_)) &&
            (b = e[(m = g + p)]).value &&
            !b.closed &&
            ((b.cost = b.value * c), l.push(b))),
            a < s &&
            ((p = a + 1),
            u > 0 &&
            (i || (!S && !P)) &&
            (b = e[(m = f + p)]).value &&
            !b.closed &&
            ((b.cost = b.value * c), l.push(b)),
            u < d &&
            (i || (!_ && !P)) &&
            (b = e[(m = g + p)]).value &&
            !b.closed &&
            ((b.cost = b.value * c), l.push(b)))),
                l
        );
    }
    function nr(e) {
        return e.f;
    }
    function rr(e) {
        let t, n, r;
        for (t = ve.length, n = 0; n < t; n += 1)
            if ((r = ve[n]).id === e) return r;
        return null;
    }
    function or(e) {
        let t = e.toString();
        (k.inputP.style.display = "none"),
            (k.statusNode.nodeValue = k.text = t),
            (k.statusP.style.display = "block");
    }
    function ir(e, t) {
        let n;
        if (((je = !1), (n = k.exec) && typeof n === Ue))
            try {
                n(e);
            } catch (e) {
                ct("PS.statusInput() callback failed [" + e.message + "]", e);
            }
        k.input.removeEventListener("keydown", t, !1), or(k.text), pn();
    }
    function lr(e) {
        let t;
        return (
            (t = e.which) || (t = e.keyCode),
                t === PS.KEY_ENTER
                    ? (ir(k.input.value, lr), Fe(e))
                    : t !== PS.KEY_ESCAPE || (ir("", lr), Fe(e))
        );
    }
    Zn.prototype = {
        push: function (e) {
            this.content.push(e), this.bubbleUp(this.content.length - 1);
        },
        pop: function () {
            let e, t;
            return (
                (e = this.content[0]),
                    (t = this.content.pop()),
                this.content.length > 0 && ((this.content[0] = t), this.sinkDown(0)),
                    e
            );
        },
        remove: function (e) {
            let t, n, r;
            for (t = this.content.length, n = 0; n < t; n += 1)
                if (this.content[n] === e) {
                    (r = this.content.pop()),
                    n !== t - 1 &&
                    ((this.content[n] = r), this.bubbleUp(n), this.sinkDown(n));
                    break;
                }
        },
        size: function () {
            let e;
            return (e = this.content.length);
        },
        bubbleUp: function (e) {
            let t, n, r, o;
            for (
                t = this.content[e], n = this.scoreFunction(t);
                e > 0 &&
                ((r = Math.floor((e + 1) / 2) - 1),
                    (o = this.content[r]),
                    !(n >= this.scoreFunction(o)));

            )
                (this.content[r] = t), (this.content[e] = o), (e = r);
        },
        sinkDown: function (e) {
            let t = this.content.length,
                n = this.content[e],
                r = this.scoreFunction(n);
            for (;;) {
                let o = 2 * (e + 1),
                    i = o - 1,
                    l = null,
                    a = 0;
                if (i < t) {
                    let e = this.content[i];
                    (a = this.scoreFunction(e)) < r && (l = i);
                }
                if (o < t) {
                    let e = this.content[o];
                    this.scoreFunction(e) < (null === l ? r : a) && (l = o);
                }
                if (null === l) break;
                (this.content[e] = this.content[l]), (this.content[l] = n), (e = l);
            }
        },
        rescore: function (e) {
            this.sinkDown(this.content.indexOf(e));
        },
    };
    const ar = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        ur = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ],
        sr = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
        dr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        fr = function (e) {
            let t = new Date(),
                n = {
                    time: t.getTime(),
                    year: t.getFullYear(),
                    mon: t.getMonth(),
                    dom: t.getDate(),
                    dow: t.getDay(),
                    h24: t.getHours(),
                    h12: 0,
                    min: t.getMinutes(),
                    sec: t.getSeconds(),
                    ms: e || t.getMilliseconds(),
                    zone: t.getTimezoneOffset(),
                    ampm: "AM",
                };
            (n.h12 = n.h24 + 1),
            n.h24 > 11 && ((n.ampm = "PM"), n.h24 > 12 && (n.h12 = n.h24 - 12)),
                (n.str = {
                    month_full: ar[n.mon],
                    month_short: ur[n.mon],
                    month_num: Oe(n.mon, 2),
                    day_full: sr[n.dow],
                    day_short: dr[n.dow],
                    dom: Oe(n.dom, 2),
                    hour12: Oe(n.h12, 2),
                    minute: Oe(n.min, 2),
                    second: Oe(n.sec, 2),
                    millisecond: Oe(n.ms, 3),
                });
            let r = n.str;
            return (
                (r.time =
                    r.hour12 + ":" + r.minute + ":" + r.second + "+" + r.millisecond),
                    (r.date_full =
                        r.day_full +
                        " " +
                        r.dom +
                        " " +
                        r.month_full +
                        " " +
                        r.year +
                        " " +
                        r.time +
                        " " +
                        n.ampm),
                    (r.date_short =
                        r.day_short +
                        " " +
                        r.dom +
                        " " +
                        r.month_short +
                        " " +
                        n.year +
                        " " +
                        r.time +
                        " " +
                        n.ampm),
                    (n.timestamp =
                        n.str.day_short +
                        "_" +
                        n.str.dom +
                        "_" +
                        n.str.month_short +
                        "_" +
                        n.year +
                        "_" +
                        n.str.time +
                        "_" +
                        n.ampm),
                    ke(r),
                    ke(n),
                    n
            );
        },
        cr = {
            howls: Object.create(null),
            sources: function (e, t, n) {
                let r = [],
                    o = 0,
                    i = n.fileTypes.length;
                for (let e = 0; e < i; e += 1) {
                    let i = n.fileTypes[e];
                    Ye.codecs(i) && ((r[o] = n.path + t + "." + i), (o += 1));
                }
                return r.length < 1
                    ? gt(e + "No params.fileTypes formats supported in this browser")
                    : ((n.src = r), n);
            },
            verifyParams: function (e, t, n) {
                let r = t;
                if (null === r) r = "";
                else {
                    if (typeof r !== xe) return gt(e + "filename is not a valid string");
                    if (!r) return PS.DONE;
                }
                let o = n;
                if (void 0 === o || o === PS.DEFAULT) {
                    let e = Object.create(null);
                    return (
                        Object.assign(e, {
                            defaults: !0,
                            path: b.audio.path,
                            fileTypes: b.audio.fileTypes,
                            volume: b.audio.volume,
                            onLoad: null,
                            onEnd: null,
                            autoplay: !1,
                            loop: !1,
                            lock: !1,
                            data: r,
                        }),
                            e
                    );
                }
                if (Ne(o) !== Ae) return gt(e + "params argument is not an object");
                let i = o.path;
                if (null == i || i === PS.DEFAULT) o.path = b.audio.path;
                else {
                    if (typeof i !== xe)
                        return gt(e + "params.path property is not a valid string");
                    i || (o.path = b.audio.path);
                }
                if (null == (i = o.fileTypes) || i === PS.DEFAULT)
                    o.fileTypes = b.audio.fileTypes;
                else {
                    if (Ne(i) !== Ce)
                        return gt(e + "params.fileTypes property is not an array");
                    {
                        let t = i.length;
                        if (t < 1) return gt(e + "params.fileTypes array is empty");
                        let n = 0;
                        for (; n < t; ) {
                            let r = i[n];
                            if (!r || typeof r !== xe)
                                return gt(e + "params.fileTypes element " + n + " invalid");
                            if ("ogg" !== (r = r.toLowerCase()) && "mp3" !== r && "wav" !== r)
                                return gt(
                                    e + "params.fileTypes unsupported extension: '" + r + "'"
                                );
                            Ye.codecs(r)
                                ? ((i[n] = r), (n += 1))
                                : (i.splice(n, 1), (t -= 1));
                        }
                        if (t < 1)
                            return gt(
                                e +
                                "No extensions in params.fileTypes supported by this browser"
                            );
                    }
                }
                if (null == (i = o.volume) || i === PS.DEFAULT)
                    o.volume = b.audio.volume;
                else {
                    if (Ne(i) !== we) return gt(e + "params.volume is not a number");
                    i > 1 ? (o.volume = 1) : i < 0 && (o.volume = 0);
                }
                if (null == (i = o.onLoad) || i === PS.DEFAULT) o.onLoad = null;
                else if (typeof i !== Ue)
                    return gt(e + "params.onLoad is not a function");
                if (null == (i = o.onEnd) || i === PS.DEFAULT) o.onEnd = null;
                else if (typeof i !== Ue)
                    return gt(e + "params.onEnd is not a function");
                if (
                    ((void 0 !== (i = o.data) && i !== PS.DEFAULT) || (o.data = r),
                    void 0 === (i = o.autoplay) ||
                    !1 === i ||
                    null === i ||
                    0 === i ||
                    i === PS.DEFAULT)
                )
                    o.autoplay = !1;
                else {
                    if (!0 !== i && Ne(i) !== we)
                        return gt(e + "params.autoplay invalid");
                    o.autoplay = !0;
                }
                if (
                    void 0 === (i = o.loop) ||
                    !1 === i ||
                    null === i ||
                    0 === i ||
                    i === PS.DEFAULT
                )
                    o.loop = !1;
                else {
                    if (!0 !== i && Ne(i) !== we) return gt(e + "params.loop invalid");
                    o.loop = !0;
                }
                if (
                    void 0 === (i = o.lock) ||
                    !1 === i ||
                    null === i ||
                    0 === i ||
                    i === PS.DEFAULT
                )
                    o.lock = !1;
                else {
                    if (!0 !== i && Ne(i) !== we)
                        return gt(e + "params.autoplay invalid");
                    o.lock = !0;
                }
                return o;
            },
            verifyChannel: function (e, t) {
                return typeof t !== xe
                    ? gt(e + "Channel ID is not a valid string")
                    : t
                        ? cr.howls[t]
                            ? t
                            : gt(e + "Channel ID '" + t + "' unrecognized or expired")
                        : PS.DONE;
            },
            response: function (t) {
                return e({
                    channel: t.channel,
                    name: t.name,
                    path: t.path,
                    url: t.url,
                    duration: t.duration,
                    data: t.data,
                });
            },
            load: function (t, n, r, o) {
                let i = cr.sources(t, n, r);
                if (i === PS.ERROR) return PS.ERROR;
                (i.onloaderror = function (e, n) {
                    Ye.isMobile && Ye.mobileAutoEnable && !Ye._mobileEnabled
                        ? l.once("unlock", function () {
                            l.load();
                        })
                        : gt(t + n);
                }),
                    (i.onplayerror = function (e, n) {
                        Ye.isMobile && Ye.mobileAutoEnable && !Ye._mobileEnabled
                            ? l.once("unlock", function () {
                                l.play();
                            })
                            : gt(t + n);
                    }),
                    (i.onload = function (r, a) {
                        let u = "channel_" + r,
                            s = cr.howls[u];
                        if (s) return void gt(t, "Cache clash @ " + u);
                        (s = e({
                            id: r,
                            channel: u,
                            howl: l,
                            name: n,
                            path: i.path,
                            url: a,
                            duration: l.duration(),
                            data: i.data,
                        })),
                            (cr.howls[u] = s);
                        let d = i.onLoad;
                        if (d && typeof d === Ue) {
                            let e = cr.response(s);
                            try {
                                d(e);
                            } catch (e) {
                                ct(
                                    t +
                                    ".onLoad error @ " +
                                    u +
                                    ":\n'" +
                                    a +
                                    "'\n[" +
                                    e.message +
                                    "]",
                                    e
                                );
                            }
                        }
                        o && l.play(r);
                    }),
                    (i.onend = function (e, n) {
                        let r = "channel_" + e,
                            o = cr.howls[r];
                        if (!o) return void gt(t, r + " unrecognized or expired");
                        let l = i.onEnd;
                        if (l && typeof l === Ue) {
                            let e = cr.response(o);
                            try {
                                l(e);
                            } catch (e) {
                                ct(
                                    t +
                                    ".onEnd error @ " +
                                    r +
                                    ":\n'" +
                                    n +
                                    "'\n[" +
                                    e.message +
                                    "]",
                                    e
                                );
                            }
                        }
                    }),
                    (i.preload = !1),
                    (i.autoplay = !1);
                let l = new Be(i);
                return l && (l = l.load()) ? PS.DONE : PS.ERROR;
            },
            playChannel: function (e, t, n) {
                let r = cr.howls[t],
                    o = r.id,
                    i = r.howl;
                i.volume(n.volume, o), i.loop(n.loop, o);
                let l = i._onloaderror;
                Ne(l) === Ce &&
                l.length < 1 &&
                i.on("loaderror", function (t, n) {
                    Ye.isMobile && Ye.mobileAutoEnable && !Ye._mobileEnabled
                        ? i.once("unlock", function () {
                            i.load();
                        })
                        : gt(e + n);
                }),
                    (l = i._onplayerror),
                Ne(l) === Ce &&
                l.length < 1 &&
                i.on("playerror", function (t, n) {
                    Ye.isMobile && Ye.mobileAutoEnable && !Ye._mobileEnabled
                        ? i.once("unlock", function () {
                            i.play();
                        })
                        : gt(e + n);
                }),
                    (l = i._onload),
                    Ne(l) === Ce && l.length < 1
                        ? i.on("load", function (e, t) {})
                        : ((i.preload = !0), (i.autoplay = !0)),
                    i.on("end", function (o, i) {
                        let l = n.onEnd;
                        if (l && Ne(l) === Ue)
                            try {
                                l(r);
                            } catch (n) {
                                ct(
                                    e +
                                    ".onEnd error @ " +
                                    t +
                                    ":\n'" +
                                    i +
                                    "'\n[" +
                                    n.message +
                                    "]",
                                    n
                                );
                            }
                    }),
                    i.seek(0, o),
                    i.play(o);
            },
            pause: function (e, t) {
                let n = cr.howls[t],
                    r = n.howl;
                return r.playing() ? r.pause(n.id) : r.play(n.id), t;
            },
            stop: function (e, t) {
                let n = cr.howls[t];
                return n.howl.stop(n.id), t;
            },
            fade: function (e, t, n, r, o, i) {
                let l = cr.howls[t],
                    a = l.howl;
                if (!a.playing()) return PS.DONE;
                let u = l.id;
                if ((n === PS.CURRENT && (n = a.volume(u)), n === r)) {
                    if (i && Ne(i) === Ue)
                        try {
                            i(t);
                        } catch (n) {
                            ct(e + ".onEnd error @ " + t + ":\n[" + n.message + "]", n);
                        }
                    return t;
                }
                return (
                    i &&
                    Ne(i) === Ue &&
                    a.once("fade", function (n) {
                        try {
                            i(t);
                        } catch (n) {
                            ct(e + ".onEnd error @ " + t + ":\n[" + n.message + "]", n);
                        }
                    }),
                        a.fade(n, r, o, u),
                        t
                );
            },
        };
    const gr = e({
        ALL: "PS.ALL",
        CURRENT: "PS.CURRENT",
        DONE: "PS.DONE",
        DEFAULT: "PS.DEFAULT",
        ERROR: "PS.ERROR",
        EMPTY: "PS.EMPTY",
        UNEQUAL: "PS.UNEQUAL",
        GRID: "PS.GRID",
        STATUS: "PS.STATUS",
        HTML5_AUDIO: "PS.HTML5_AUDIO",
        WEB_AUDIO: "PS.WEB_AUDIO",
        SPRITE_TOUCH: "PS.SPRITE_TOUCH",
        SPRITE_OVERLAP: "PS.SPRITE_OVERLAP",
        COLOR_BLACK: 0,
        COLOR_WHITE: 16777215,
        COLOR_GRAY_LIGHT: 12632256,
        COLOR_GRAY: 8421504,
        COLOR_GRAY_DARK: 4210752,
        COLOR_RED: 16711680,
        COLOR_ORANGE: 16744448,
        COLOR_YELLOW: 16776960,
        COLOR_GREEN: 65280,
        COLOR_BLUE: 255,
        COLOR_INDIGO: 4194559,
        COLOR_VIOLET: 8388863,
        COLOR_MAGENTA: 16711935,
        COLOR_CYAN: 65535,
        ALPHA_OPAQUE: 255,
        ALPHA_TRANSPARENT: 0,
        KEY_ENTER: 13,
        KEY_TAB: 9,
        KEY_ESCAPE: 27,
        KEY_SPACE: 32,
        KEY_DELETE: 1010,
        KEY_ARROW_LEFT: 1005,
        KEY_ARROW_UP: 1006,
        KEY_ARROW_RIGHT: 1007,
        KEY_ARROW_DOWN: 1008,
        KEY_PAD_0: 96,
        KEY_PAD_1: 97,
        KEY_PAD_2: 98,
        KEY_PAD_3: 99,
        KEY_PAD_4: 100,
        KEY_PAD_5: 101,
        KEY_PAD_6: 102,
        KEY_PAD_7: 103,
        KEY_PAD_8: 104,
        KEY_PAD_9: 105,
        KEY_F1: 112,
        KEY_F2: 113,
        KEY_F3: 114,
        KEY_F4: 115,
        KEY_F5: 116,
        KEY_F6: 117,
        KEY_F7: 118,
        KEY_F8: 119,
        KEY_F9: 120,
        KEY_F10: 121,
        WHEEL_FORWARD: "PS.WHEEL_FORWARD",
        WHEEL_BACKWARD: "PS.WHEEL_BACKWARD",
        _sys: function (t, n, r) {
            let o, s, d, f, c, g, h, p, m, I, B;
            for (
                o = void 0 === t || Ne(t) !== we ? b.cover.bgColor : t,
                    s = void 0 === n || Ne(n) !== we ? b.cover.textColor : n,
                    d = void 0 === r || Ne(r) !== xe ? b.cover.text : r,
                    Me = Math.floor(1e6 * Math.random()) + 1,
                    _.length = 256,
                    P.length = 256,
                    E.length = 256,
                    R.length = 256,
                    y.length = 256,
                    c = 0;
                c < 256;
                c += 1
            )
                (_[c] = "rgba(" + c + ","),
                    (P[c] = c + ","),
                    (E[c] = c + ",1)"),
                    (g = Math.floor(100 * Math.max(0, Math.min(c / 255, 1))) / 100),
                    (y[c] = g),
                    (R[c] = g + ")");
            !(function () {
                let t,
                    n = null,
                    r = null,
                    o = null,
                    i = window.navigator.userAgent;
                const l = function (e) {
                        let t = i.match(e);
                        return (t && t.length > 1 && t[1]) || "";
                    },
                    a = function (e) {
                        let t = i.match(e);
                        return (t && t.length > 1 && t[2]) || "";
                    };
                let u = l(/(ipod|iphone|ipad)/i).toLowerCase(),
                    s = !/like android/i.test(i) && /android/i.test(i),
                    d = /nexus\s*[0-6]\s*/i.test(i),
                    f = !d && /nexus\s*[0-9]+/i.test(i),
                    c = /CrOS/.test(i),
                    g = /silk/i.test(i),
                    h = /sailfish/i.test(i),
                    p = /tizen/i.test(i),
                    m = /(web|hpw)os/i.test(i),
                    b = /windows phone/i.test(i),
                    _ = !b && /windows/i.test(i),
                    P = !u && !g && /macintosh/i.test(i),
                    E = !s && !h && !p && !m && /linux/i.test(i),
                    R = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                    y = l(/version\/(\d+(\.\d+)?)/i),
                    v =
                        !(/tablet/i.test(i) && !/tablet pc/i.test(i)) &&
                        /[^-]mobi/i.test(i),
                    T = /xbox/i.test(i);
                /firefox|iceweasel|fxios/i.test(i)
                    ? ((t = "Firefox"),
                    (v || /fennec/.test(i)) && (t += " Mobile"),
                        (n = l(/(?:firefox|iceweasel|fxios)[ /](\d+(\.\d+)?)/i)),
                    /\((mobile|tablet);[^)]*rv:[\d.]+\)/i.test(i) &&
                    ((r = "Firefox OS"), (v = !0)))
                    : /chrome|crios|crmo/i.test(i)
                        ? ((t = "Chrome"), (n = l(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)))
                        : /chromium/i.test(i)
                            ? ((t = "Chromium"),
                                (n = l(/(?:chromium)[\s/](\d+(?:\.\d+)?)/i) || y))
                            : /safari|applewebkit/i.test(i)
                                ? ((t = "Safari"), y && (n = y))
                                : /edg([ea]|ios)/i.test(i)
                                    ? ((t = "Microsoft Edge"), (n = R))
                                    : /msie/.test(i)
                                        ? ((t = "Internet Explorer"),
                                        /iemobile/.test(i) && ((t += " Mobile"), (v = !0)),
                                            (n = /msie \d+[.]\d+/.exec(i)[0].split(" ")[1]))
                                        : /trident/.test(i)
                                            ? ((t = "Internet Explorer"),
                                                (n = /rv:\d+[.]\d+/.exec(i)[0].split(":")[1]))
                                            : /opera/i.test(i)
                                                ? ((t = "Opera"),
                                                    /mini/.test(i)
                                                        ? (t += " Mini")
                                                        : /mobile/.test(i) && ((t += " Mobile"), (v = !0)),
                                                    (n = y || l(/(?:opera|opr|opios)[\s/](\d+(\.\d+)?)/i)))
                                                : /opr\/|opios/i.test(i)
                                                    ? ((t = "Opera"),
                                                        /mini/.test(i)
                                                            ? (t += " Mini")
                                                            : /mobile/.test(i) && ((t += " Mobile"), (v = !0)),
                                                        (n = l(/(?:opr|opios)[\s/](\d+(\.\d+)?)/i) || y))
                                                    : g
                                                        ? ((t = "Amazon Silk"), (n = l(/silk\/(\d+(\.\d+)?)/i)), (v = !0))
                                                        : /blackberry|\bbb\d+/i.test(i) || /rim\stablet/i.test(i)
                                                            ? ((t = "BlackBerry"),
                                                                (n = y || l(/blackberry[\d]+\/(\d+(\.\d+)?)/i)),
                                                                (r = "BlackBerry OS"),
                                                                (o = l(/rim\stablet\sos\s(\d+(\.\d+)*)/i)),
                                                                (v = !0))
                                                            : /googlebot/i.test(i)
                                                                ? ((t = "Googlebot"), (n = l(/googlebot\/(\d+(\.\d+))/i) || y))
                                                                : p
                                                                    ? ((t = "Tizen"),
                                                                        (n = l(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y),
                                                                        (r = "TizenOS"),
                                                                        (o = l(/tizen[/\s](\d+(\.\d+)*)/i)),
                                                                        (v = !0))
                                                                    : /vivaldi/i.test(i)
                                                                        ? ((t = "Vivaldi"), (n = l(/vivaldi\/(\d+(\.\d+)?)/i) || y))
                                                                        : /falkon/i.test(i)
                                                                            ? ((t = "Falkon"), (n = l(/falkon\/(\d+(\.\d+)?)/i) || y))
                                                                            : /seamonkey\//i.test(i)
                                                                                ? ((t = "SeaMonkey"), (n = l(/seamonkey\/(\d+(\.\d+)?)/i)))
                                                                                : /slimerjs/i.test(i)
                                                                                    ? ((t = "SlimerJS"), (n = l(/slimerjs\/(\d+(\.\d+)?)/i)))
                                                                                    : ((t = l(/^(.*)\/(.*) /)), (n = a(/^(.*)\/(.*) /))),
                r ||
                (_
                    ? ((r = "Windows"),
                        b
                            ? ((r += " Phone"),
                                (o = l(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)),
                                (v = !0))
                            : (o = (function (e) {
                                switch (e) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return;
                                }
                            })(l(/Windows ((NT|XP)( \d\d?.\d)?)/i))))
                    : P
                        ? ((r = "macOS"),
                            (o = (o = l(/Mac OS X (\d+([_.\s]\d+)*)/i)).replace(
                                /[_\s]/g,
                                "."
                            )))
                        : b || (!s && !g)
                            ? !b && u
                                ? ((r = "iOS"),
                                    (o = (o = l(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
                                        /[_\s]/g,
                                        "."
                                    )),
                                    (v = !0))
                                : c
                                    ? (r = "Chrome OS")
                                    : E
                                        ? (r = "Linux")
                                        : T
                                            ? (r = "Xbox")
                                            : m
                                                ? ((r = "WebOS"), (o = l(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)))
                                                : p && ((r = "Tizen"), (o = l(/tizen[/\s](\d+(\.\d+)*)/i)))
                            : ((r = "Android"),
                                f ? (r += " Nexus Tablet") : d && (r += " Nexus Mobile"),
                                (o = l(/android[ /-](\d+(\.\d+)*)/i)),
                                (v = !0))),
                n || ((n = /version\/[.\d]+/.exec(i)) && (n = n[0].split("/")[1])),
                    (S.host = e({
                        app_name: t,
                        app_version: n,
                        os_name: r,
                        os_version: o,
                        mobile: v,
                    }));
            })(),
                (function () {
                    let e, t, n, r, o, s, d;
                    (L =
                        window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth),
                        (C =
                            window.innerHeight ||
                            document.documentElement.clientHeight ||
                            document.body.clientHeight),
                        L >= (e = (i / 4) * 5) && C >= e
                            ? ((r = i), (o = l), (s = a), (d = u))
                            : ((t = (L / 5) * 4),
                                (n = (C / 5) * 4),
                                (r = Math.min(t, n)),
                                (r = 8 * Math.floor(r / 8)),
                                (o = l * (r / i)),
                                (o = Math.floor(100 * o) / 100),
                                (d = u * (r / i)),
                                (d = Math.floor(d)),
                                (s = Math.floor(d / 8))),
                        (N = r),
                        (D = o + "em"),
                        (b.grid.shadow.params = "0px 0px " + d + "px " + s + "px ");
                })(),
                (T = !1);
            try {
                let e = Object.defineProperty(Object.create(null), "capture", {
                    get: function () {
                        return (T = !0), !0;
                    },
                });
                window.addEventListener("test", null, e);
            } catch (e) {}
            (S.inputs.touch = pe =
                (function () {
                    try {
                        return document.createEvent("TouchEvent"), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                ze.start(),
                (document.body.id = "body");
            let Y = document.getElementById("outer");
            Y ||
            (((Y = document.createElement("div")).id = "outer"),
                document.body.appendChild(Y)),
            (v = document.getElementById("main")) ||
            (((v = document.createElement("div")).id = "main"), Y.appendChild(v)),
                (v.style.width = N + "px"),
                (PS._mainLeft = v.offsetLeft),
                (PS._mainTop = v.offsetTop);
            let W = document.getElementById("stsp");
            W || (((W = document.createElement("p")).id = "stsp"), v.appendChild(W)),
                (W.style.fontSize = D),
                (W.style.display = "block");
            let j = document.createTextNode("");
            W.appendChild(j);
            let G = document.getElementById("inp");
            G || (((G = document.createElement("p")).id = "inp"), v.appendChild(G)),
                (G.style.fontSize = D),
                (G.style.display = "none"),
            (p = document.getElementById("inlabel")) ||
            (((p = document.createElement("span")).id = "inlabel"),
                G.appendChild(p));
            let q = document.createTextNode("");
            p.appendChild(q),
            (p = document.getElementById("inspan")) ||
            (((p = document.createElement("span")).id = "inspan"),
                G.appendChild(p));
            let H = document.getElementById("inbox");
            H ||
            (((H = document.createElement("input")).id = "inbox"),
                p.appendChild(H)),
                (H.tabindex = 0),
                (H.wrap = "soft"),
                (k = e({
                    statusP: W,
                    statusNode: j,
                    inputP: G,
                    inputNode: q,
                    input: H,
                    colorNow: null,
                    fader: pt("stsp", Je, null),
                    text: "",
                    label: "",
                    exec: null,
                    color: e({
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255,
                        rgb: 16777215,
                        str: "rgba(255,255,255,1)",
                    }),
                }));
            let V = new Blob(
                    [
                        '<svg id="PSLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <style type="text/css"> .st0{fill:#6A98BA;} .st1{fill:#EDE945;} .st2{fill:#F47829;} .st3{fill:#86568E;} .st4{fill:#A0C73B;} </style> <rect x="128" y="304" class="st0" width="32" height="32"/> <rect x="160" y="144" class="st1" width="32" height="32"/> <rect x="192" y="208" class="st2" width="32" height="32"/> <rect x="224" y="304" class="st0" width="32" height="32"/> <rect x="256" y="336" class="st3" width="32" height="32"/> <rect x="288" y="304" class="st0" width="32" height="32"/> <rect x="320" y="240" class="st4" width="32" height="32"/> <rect x="352" y="208" class="st2" width="32" height="32"/> </svg>',
                    ],
                    { type: "image/svg+xml" }
                ),
                $ = URL.createObjectURL(V),
                Q = document.getElementById("cover");
            Q ||
            ((Q = document.createElement("img")).addEventListener(
                "load",
                function () {
                    URL.revokeObjectURL($);
                },
                !T || U
            ),
                (Q.id = "cover"),
                (Q.src = $),
                v.appendChild(Q)),
                (I = N.toString()),
                (Q.width = I),
                (Q.height = I);
            let J = document.getElementById("grid");
            if (!J) {
                if (!(J = document.createElement("canvas")))
                    return void window.alert("[PS.sys] HTML5 canvas not supported.");
                (J.id = "grid"), v.appendChild(J);
            }
            for (
                J.width = N,
                    J.style.backgroundColor = b.grid.color.str,
                    be = !1,
                    qt(),
                (X = document.getElementById("footer")) ||
                (((X = document.createElement("p")).id = "footer"),
                    v.appendChild(X)),
                (Pe = document.getElementById("debug")) ||
                (((Pe = document.createElement("div")).id = "debug"),
                    v.appendChild(Pe)),
                (Ee = document.getElementById("monitor")) ||
                (((Ee = document.createElement("textarea")).id = "monitor"),
                    Pe.appendChild(Ee)),
                    Ee.rows = 8,
                    Ee.wrap = "soft",
                    Ee.readonly = "readonly",
                    Ee.onfocus = function () {
                        ye = !0;
                    },
                    Ee.onblur = function () {
                        ye = !1;
                    },
                    Ee.addEventListener("mousedown", Xt, !!T && w),
                    Ee.addEventListener("mouseup", Qt, !!T && w),
                    Re = !1,
                    ye = !1,
                    ie.length = 256,
                    ne.length = 256,
                    re.length = 256,
                    oe.length = 256,
                    c = 0;
                c < 256;
                c += 1
            )
                (ie[c] = 0), (ne[c] = c), (re[c] = c), (oe[c] = c);
            for (
                te = !1,
                    ce = !1,
                    ge = !1,
                    he = !0,
                    ue = 6,
                    se = 30,
                    ne[33] = PS.KEY_PAGE_UP,
                    ne[34] = PS.KEY_PAGE_DOWN,
                    ne[35] = PS.KEY_END,
                    ne[36] = PS.KEY_HOME,
                    ne[37] = PS.KEY_ARROW_LEFT,
                    ne[38] = PS.KEY_ARROW_UP,
                    ne[39] = PS.KEY_ARROW_RIGHT,
                    ne[40] = PS.KEY_ARROW_DOWN,
                    ne[45] = PS.KEY_INSERT,
                    ne[46] = PS.KEY_DELETE,
                    ne[188] = 44,
                    ne[190] = 46,
                    ne[191] = 47,
                    ne[192] = 96,
                    ne[219] = 91,
                    ne[220] = 92,
                    ne[221] = 93,
                    ne[222] = 39,
                    re[96] = 126,
                    re[49] = 33,
                    re[50] = 64,
                    re[51] = 35,
                    re[52] = 36,
                    re[53] = 37,
                    re[54] = 94,
                    re[55] = 38,
                    re[56] = 42,
                    re[57] = 40,
                    re[48] = 41,
                    re[45] = 95,
                    re[61] = 43,
                    re[91] = 123,
                    re[93] = 125,
                    re[92] = 124,
                    re[59] = 58,
                    re[39] = 34,
                    re[44] = 60,
                    re[46] = 62,
                    re[47] = 63,
                    c = 65;
                c < 91;
                c += 1
            )
                oe[c] = c + 32;
            for (
                oe[126] = 96,
                    oe[33] = 49,
                    oe[64] = 50,
                    oe[35] = 51,
                    oe[36] = 52,
                    oe[37] = 53,
                    oe[94] = 54,
                    oe[38] = 55,
                    oe[42] = 56,
                    oe[40] = 57,
                    oe[41] = 48,
                    oe[95] = 45,
                    oe[43] = 51,
                    oe[123] = 91,
                    oe[125] = 93,
                    oe[124] = 92,
                    oe[58] = 59,
                    oe[34] = 39,
                    oe[60] = 44,
                    oe[62] = 46,
                    oe[63] = 47,
                    window.onblur = ln,
                (m = J.getContext("2d")).constructor.prototype.fillRoundedRect ||
                (m.constructor.prototype.fillRoundedRect = function (
                    e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    l
                ) {
                    void 0 === o && (o = 5),
                        this.beginPath(),
                        "Opera" === S.host.app
                            ? (this.moveTo(e + n - o, t),
                                this.arcTo(e + o, t, e, t + o, o),
                                this.arcTo(e, t + r - o, e + o, t + r, o),
                                this.arcTo(e + n - o, t + r, e + n, t + r - o, o),
                                this.arcTo(e + n, t + o, e + n - o, t, o))
                            : (this.moveTo(e + o, t),
                                this.arcTo(e + n, t, e + n, t + r, o),
                                this.arcTo(e + n, t + r, e, t + r, o),
                                this.arcTo(e, t + r, e, t, o),
                                this.arcTo(e, t, e + n, t, o)),
                        this.closePath(),
                        l ? this.stroke() : (i || void 0 === i) && this.fill();
                }),
                m.constructor.prototype.fillCircle ||
                (m.constructor.prototype.fillCircle = function (e, t, n, r, o, i) {
                    let l = n / 2;
                    this.beginPath(),
                        this.arc(e + l, t + l, l, 0, 2 * Math.PI, !0),
                        this.closePath(),
                        i ? this.stroke() : (o || void 0 === o) && this.fill();
                }),
                    F = e({
                        canvas: J,
                        context: m,
                        colorNow: null,
                        fader: pt("grid", $e, Qe),
                        width: 512,
                        x: 8,
                        y: 8,
                        max: 32,
                        plane: 0,
                        color: e({
                            r: 48,
                            g: 48,
                            b: 48,
                            a: 255,
                            rgb: 3158064,
                            str: "rgba(48,48,48,1)",
                        }),
                        shadow: e({
                            show: !1,
                            r: 192,
                            g: 192,
                            b: 192,
                            a: 255,
                            rgb: 12632256,
                            str: "rgba(192,192,192,1)",
                            params: "0px 0px 64px 8px ",
                        }),
                        padLeft: 0,
                        padRight: 0,
                        ready: !1,
                        timeExit: 0,
                    }),
                    O.length = g = 1024,
                    c = 0;
                c < g;
                c += 1
            )
                O[c] = Tt(c);
            (z = 0),
                (Te = 0),
                (K = 0),
                ((m = (M = document.createElement("canvas")).getContext(
                    "2d"
                )).imageSmoothingEnabled = !1),
                (m.webkitImageSmoothingEnabled = !1),
                (h = Object.create(null)),
                Et(h, o),
                (I = _[h.r] + P[h.g] + E[h.b]),
                (document.body.style.backgroundColor = I),
                (k.statusP.style.backgroundColor = I),
                (X.style.backgroundColor = I),
                (h = Object.create(null)),
                Et(h, s),
                (I = _[h.r] + P[h.g] + E[h.b]),
                (k.statusP.style.color = I),
                (X.style.color = I),
                (B = new Image());
            const Z = function () {
                    document.removeEventListener("click", Z, !T || x),
                        document.removeEventListener("touchstart", Z, !T || x),
                        document.removeEventListener("touchend", Z, !T || x),
                        st(),
                        (Q.style.display = "none"),
                        (J.style.display = "block");
                    let e = window.getComputedStyle(F.canvas, null);
                    (F.padLeft = parseInt(
                        e.getPropertyValue("padding-top").replace("px", ""),
                        10
                    )),
                        (F.padRight = parseInt(
                            e.getPropertyValue("padding-left").replace("px", ""),
                            10
                        )),
                        PS.gridColor(b.grid.color),
                        (X.style.color = "rgba(0,0,0,1)"),
                        PS.statusColor(b.status.color),
                        or("Perlenspiel " + S.major + "." + S.minor);
                    let t = "() function invalid; will be ignored";
                    if (
                        (PS.init &&
                        typeof PS.init !== Ue &&
                        ((PS.init = null), at("PS.init" + t)),
                        PS.touch &&
                        typeof PS.touch !== Ue &&
                        ((PS.touch = null), at("PS.touch" + t)),
                        PS.release &&
                        typeof PS.release !== Ue &&
                        ((PS.release = null), at("PS.release" + t)),
                        PS.enter &&
                        typeof PS.enter !== Ue &&
                        ((PS.enter = null), at("PS.enter" + t)),
                        PS.exit &&
                        typeof PS.exit !== Ue &&
                        ((PS.exit = null), at("PS.exit" + t)),
                        PS.exitGrid &&
                        typeof PS.exitGrid !== Ue &&
                        ((PS.exitGrid = null), at("PS.exitGrid" + t)),
                        PS.keyDown &&
                        typeof PS.keyDown !== Ue &&
                        ((PS.keyDown = null), at("PS.keyDown" + t)),
                        PS.keyUp &&
                        typeof PS.keyUp !== Ue &&
                        ((PS.keyUp = null), at("PS.keyUp" + t)),
                        PS.input &&
                        typeof PS.input !== Ue &&
                        ((PS.input = null), at("PS.input" + t)),
                        PS.swipe &&
                        typeof PS.swipe !== Ue &&
                        ((PS.swipe = null), at("PS.swipe" + t)),
                            _n(b.grid.x, b.grid.y),
                            (function () {
                                let e = F.canvas;
                                (e.style.display = "block"),
                                    qt(),
                                    document.addEventListener("mousedown", Vt, !!T && w),
                                    document.addEventListener("mouseup", $t, !!T && w),
                                    e.addEventListener("mousedown", Jt, !!T && w),
                                    e.addEventListener("mouseup", Zt, !!T && w),
                                    e.addEventListener("mousemove", en, !!T && w),
                                    e.addEventListener("mouseout", tn, !!T && w),
                                    pn(),
                                    window.addEventListener("mousewheel", hn, !T || A),
                                pe &&
                                (document.addEventListener("touchmove", on, !!T && w),
                                    document.addEventListener("touchstart", nn, !!T && w),
                                    document.addEventListener("touchend", rn, !!T && w),
                                    document.addEventListener("touchcancel", rn, !!T && w));
                            })(),
                            PS.init)
                    ) {
                        S.date = fr(!1);
                        try {
                            PS.init(S, { time: ze.ticks }), lt();
                        } catch (e) {
                            ct("PS.init() failed [" + e.message + "]", e);
                        }
                    }
                },
                ee = function (e) {
                    console &&
                    console.log &&
                    console.log(
                        "PS3 WARNING: '" +
                        b.cover.file +
                        "' load error; using default image"
                    ),
                        (this.src = null),
                        le(e);
                },
                le = function () {
                    B.removeEventListener("load", le, !0),
                        B.removeEventListener("error", ee, !0),
                    void 0 !== this && this.src && (Q.src = this.src),
                        (Q.alt = "[Cover Image]"),
                        or(d),
                        (Ye.autoSuspend = !1),
                        (fe = null),
                    (f = PS.audioLoad(b.audio.error_sound, {
                        lock: !0,
                        onLoad: function (e) {
                            e && e !== PS.ERROR && (fe = e.name),
                                document.addEventListener("touchstart", Z, !T || x),
                                document.addEventListener("touchend", Z, !T || x),
                                document.addEventListener("click", Z, !T || x);
                        },
                    })) === PS.ERROR && at("Error sound '" + fe + "' not loaded"),
                        (S.audio = e({
                            engine: "Howler",
                            major: Ye.major,
                            minor: Ye.minor,
                            revision: Ye.revision,
                            mode: Ye.noAudio ? "x" : Ye.usingWebAudio ? "w" : "h",
                        })),
                        (I = "PS " + S.major + "." + S.minor + "." + S.revision),
                        Ye.noAudio
                            ? (I += " | Silent")
                            : (I +=
                                " | H " +
                                Ye.major +
                                "." +
                                Ye.minor +
                                "." +
                                Ye.revision +
                                S.audio.mode),
                        (I +=
                            " | " +
                            S.host.os_name +
                            " " +
                            S.host.os_version +
                            " " +
                            S.host.app_name +
                            " " +
                            S.host.app_version),
                    pe && (I += " | Touch"),
                        ft(I);
                };
            B.addEventListener("load", le, !T || U),
                B.addEventListener("error", ee, !T || U),
                (B.src = b.cover.file);
        },
        gridSize: function (e, t) {
            const n = "[PS.gridSize] ";
            let o,
                i,
                l = arguments.length;
            if (l > 0) {
                if (l > 2) return gt(n + r);
                (o = e), (i = t);
                let a = b.grid.max;
                if (o === PS.DEFAULT) o = b.grid.x;
                else if (o === PS.CURRENT) o = F.x;
                else {
                    if (Ne(o) !== we) return gt(n + "x argument invalid");
                    (o = Math.floor(o)) < 1 ? (o = 1) : o > a && (o = a);
                }
                if (i === PS.DEFAULT) i = b.grid.y;
                else if (i === PS.CURRENT) i = F.y;
                else {
                    if (Ne(i) !== we) return gt(n + "y argument invalid");
                    (i = Math.floor(i)) < 1 ? (i = 1) : i > a && (i = a);
                }
                _n(o, i);
            }
            const a = Object.create(null);
            return Object.assign(a, { width: F.x, height: F.y }), Object.freeze(a), a;
        },
        gridPlane: function (e) {
            const t = "[PS.gridPlane] ";
            if (arguments.length > 1) return gt(t + r);
            let n = e,
                o = Ne(n);
            if (o !== Le && n !== PS.CURRENT) {
                if (n === PS.DEFAULT) n = 0;
                else {
                    if (o !== we) return gt(t + "plane argument invalid");
                    (n = Math.floor(n)) < 1 && (n = 0);
                }
                F.plane = n;
            }
            return F.plane;
        },
        gridColor: function (e, t, n) {
            const o = "[PS.gridColor] ";
            if (arguments.length > 3) return gt(o + r);
            let i = yt(o, e, t, n);
            return i === PS.ERROR ? PS.ERROR : bn(i);
        },
        gridFade: function (e, t) {
            const n = "[PS.gridFade] ";
            let o;
            if (arguments.length > 2) return gt(n + r);
            let i = F.color,
                l = F.fader,
                a = l.rate,
                u = Ne(e);
            if (u === Le || e === PS.CURRENT) o = a;
            else if (e === PS.DEFAULT) o = b.fader.rate;
            else {
                if (u !== we) return gt(n + "rate argument invalid");
                (o = Math.floor(e)) < 0 && (o = 0);
            }
            let s = Tn(n, t);
            if (s === PS.ERROR) return PS.ERROR;
            let d = s.rgb;
            d !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.rgb = b.fader.rgb) : (l.rgb = d),
                (l.r = t.r),
                (l.g = t.g),
                (l.b = t.b)),
            (d = s.onStep) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.onStep = b.fader.onStep) : (l.onStep = d)),
            (d = s.onEnd) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.onEnd = b.fader.onEnd) : (l.onEnd = d)),
            (d = s.params) !== PS.CURRENT &&
            (d === PS.DEFAULT ? (l.params = b.fader.params) : (l.params = d)),
            a !== o &&
            ((l.rate = o),
                o < 1
                    ? ((l.active = !1), (l.kill = !0))
                    : l.active && St(l, i.r, i.g, i.b, 255));
            const f = Object.create(null);
            return (
                Object.assign(f, {
                    rate: l.rate,
                    rgb: l.rgb,
                    onStep: l.onStep,
                    onEnd: l.onEnd,
                    params: l.params,
                }),
                    Object.freeze(f),
                    f
            );
        },
        gridShadow: function (e, t, n, o) {
            const i = "[PS.gridShadow] ";
            if (arguments.length > 4) return gt(i + r);
            let l = e;
            if (!0 !== l && !1 !== l && l !== PS.CURRENT)
                if (l === PS.DEFAULT || null === l || 0 === l) l = !1;
                else {
                    if (Ne(l) !== we) return gt(i + "First argument invalid");
                    l = !0;
                }
            let a = yt(i, t, n, o);
            return a === PS.ERROR ? PS.ERROR : Sn(l, a);
        },
        gridRefresh: function () {
            return arguments.length > 0 ? gt("[PS.gridRefresh] " + r) : (lt(), B);
        },
        color: function (e, t, n, i, l) {
            const a = "[PS.color] ",
                u = arguments.length;
            if (u < 2) return gt(a + o);
            if (u > 5) return gt(a + r);
            let s = yt(a, n, i, l);
            return s === PS.ERROR ? PS.ERROR : Rn(a, yn, e, t, s);
        },
        alpha: function (e, t, n) {
            const i = "[PS.alpha] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "alpha argument invalid");
                    a = b.bead.color.a;
                }
            }
            return Rn(i, vn, e, t, a);
        },
        fade: function (e, t, n, i) {
            const l = "[PS.fade] ",
                a = arguments.length;
            if (a < 2) return gt(l + o);
            if (a > 4) return gt(l + r);
            let u = n;
            if (u !== PS.CURRENT && u !== PS.DEFAULT) {
                let e = Ne(u);
                if (e === Le) u = PS.CURRENT;
                else {
                    if (e !== we) return gt(l + "rate argument invalid");
                    (u = Math.floor(u)) < 0 && (u = 0);
                }
            }
            let s = Tn(l, i);
            return s === PS.ERROR ? PS.ERROR : Rn(l, wn, e, t, u, s);
        },
        scale: function (e, t, n) {
            const i = "[PS.scale] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 50 ? (a = 50) : a > 100 && (a = 100);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "scale parameter invalid");
                    a = 100;
                }
            }
            return Rn(i, xn, e, t, a);
        },
        radius: function (e, t, n) {
            const i = "[PS.radius] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 50 && (a = 50);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "radius parameter invalid");
                    a = 0;
                }
            }
            return Rn(i, An, e, t, a);
        },
        bgColor: function (e, t, n, i, l) {
            const a = "[PS.bgColor] ",
                u = arguments.length;
            if (u < 2) return gt(a + o);
            if (u > 5) return gt(a + r);
            let s = yt(a, n, i, l);
            return s === PS.ERROR ? PS.ERROR : Rn(a, Un, e, t, s);
        },
        bgAlpha: function (e, t, n) {
            const i = "[PS.bgAlpha] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "alpha argument invalid");
                    a = b.bead.bgColor.a;
                }
            }
            return Rn(i, Ln, e, t, a);
        },
        data: function (e, t, n) {
            const i = "[PS.data] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            return (
                void 0 === a ? (a = PS.CURRENT) : a === PS.DEFAULT && (a = 0),
                    Rn(i, Cn, e, t, a)
            );
        },
        exec: function (e, t, n) {
            const i = "[PS.exec] ";
            let l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (a === PS.DEFAULT) a = b.bead.exec;
                else if (e !== Ue) return gt(i + "exec argument invalid");
            }
            return Rn(i, Nn, e, t, a);
        },
        visible: function (e, t, n) {
            const i = "[PS.visible] ";
            let l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = De(n, PS.CURRENT, !0, PS.CURRENT);
            return a === PS.ERROR
                ? gt(i + "show argument [3] invalid")
                : Rn(i, Dn, e, t, a);
        },
        active: function (e, t, n) {
            const i = "[PS.active] ";
            let l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = De(n, PS.CURRENT, !0, PS.CURRENT);
            return a === PS.ERROR
                ? gt(i + "active argument [3] invalid")
                : Rn(i, Fn, e, t, a);
        },
        minimum: function (e, t, n) {
            const l = "[PS.minimum] ";
            let a = arguments.length;
            if (a < 2) return gt(l + o);
            if (a > 3) return gt(l + r);
            let u = n;
            if (u !== PS.CURRENT)
                if (void 0 === u) u = PS.CURRENT;
                else if (u === PS.DEFAULT) u = b.bead.minimum;
                else {
                    if (Ne(u) !== we) return gt(l + "minimum argument [3] invalid");
                    (u = Math.floor(u)) < 0 ? (u = 0) : u > i && (u = i);
                }
            return Rn(l, On, e, t, u);
        },
        border: function (e, t, n) {
            const i = "[PS.border] ";
            let l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = b.bead.border,
                u = n;
            if (u !== PS.CURRENT) {
                let e = Ne(u);
                if (e === Le) u = PS.CURRENT;
                else if (u === PS.DEFAULT) u = a.width;
                else if (e === we) (u = Math.floor(u)) < 0 && (u = 0);
                else {
                    if (e !== Ae) return gt(i + "width argument [3] invalid");
                    {
                        let t = u.top;
                        if (t !== PS.CURRENT)
                            if ((e = Ne(t)) === Le) u.top = PS.CURRENT;
                            else if (e === we)
                                (t = Math.floor(t)) < 0 && (t = 0), (u.top = t);
                            else {
                                if (t !== PS.DEFAULT)
                                    return gt(i + ".top property of width invalid");
                                u.top = a.top;
                            }
                        let n = u.left;
                        if (n !== PS.CURRENT)
                            if ((e = Ne(n)) === Le) u.left = PS.CURRENT;
                            else if (e === we)
                                (n = Math.floor(n)) < 0 && (n = 0), (u.left = n);
                            else {
                                if (n !== PS.DEFAULT)
                                    return gt(i + ".left property of width invalid");
                                u.left = a.left;
                            }
                        let r = u.bottom;
                        if (r !== PS.CURRENT)
                            if ((e = Ne(r)) === Le) u.bottom = PS.CURRENT;
                            else if (e === we)
                                (r = Math.floor(r)) < 0 && (r = 0), (u.bottom = r);
                            else {
                                if (r !== PS.DEFAULT)
                                    return gt(i + ".bottom property of width invalid");
                                u.bottom = a.bottom;
                            }
                        let o = u.right;
                        if (o !== PS.CURRENT)
                            if ((e = Ne(o)) === Le) u.right = PS.CURRENT;
                            else if (e === we)
                                (o = Math.floor(o)) < 0 && (o = 0), (u.right = o);
                            else {
                                if (o !== PS.DEFAULT)
                                    return gt(i + ".right property of width invalid");
                                u.right = a.right;
                            }
                    }
                }
            }
            return Rn(i, kn, e, t, u);
        },
        borderColor: function (e, t, n, i, l) {
            const a = "[PS.borderColor] ";
            let u = arguments.length;
            if (u < 2) return gt(a + o);
            if (u > 5) return gt(a + r);
            let s = yt(a, n, i, l);
            return s === PS.ERROR ? PS.ERROR : Rn(a, Mn, e, t, s);
        },
        borderAlpha: function (e, t, n) {
            const i = "[PS.borderAlpha] ";
            let l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "alpha argument [3] invalid");
                    a = b.bead.border.color.a;
                }
            }
            return Rn(i, In, e, t, a);
        },
        borderFade: function (e, t, n, i) {
            const l = "[PS.borderFade] ";
            let a = arguments.length;
            if (a < 2) return gt(l + o);
            if (a > 4) return gt(l + r);
            let u = n;
            if (u !== PS.CURRENT && u !== PS.DEFAULT) {
                let e = Ne(u);
                if (e === Le) u = PS.CURRENT;
                else {
                    if (e !== we) return gt(l + "rate argument not a number");
                    (u = Math.floor(u)) < 0 && (u = 0);
                }
            }
            let s = Tn(l, i);
            return s === PS.ERROR ? PS.ERROR : Rn(l, Bn, e, t, u, s);
        },
        glyph: function (e, t, n) {
            const i = "[PS.glyph] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (void 0 === a) a = PS.CURRENT;
            else if (a === PS.DEFAULT) a = "";
            else if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === we)
                    if ((a = Math.floor(a)) < 1) a = "";
                    else {
                        if (a > 1114111)
                            return gt(i + "glyph argument [3] exceeds UTF-8 limit");
                        a = String.fromCodePoint(a);
                    }
                else {
                    if (e !== xe) return gt(i + "glyph argument [3] invalid");
                    if (a.length > 0) {
                        let e = a.charCodeAt(0);
                        92 === e
                            ? (a = decodeURI(a)).length > 0 &&
                            ((e = a.charCodeAt(0)), (a = String.fromCodePoint(e)))
                            : (a = String.fromCodePoint(e));
                    }
                }
            }
            return Rn(i, Yn, e, t, a);
        },
        glyphColor: function (e, t, n, i, l) {
            const a = "[PS.glyphColor] ",
                u = arguments.length;
            if (u < 2) return gt(a + o);
            if (u > 5) return gt(a + r);
            let s = yt(a, n, i, l);
            return s === PS.ERROR ? PS.ERROR : Rn(a, Wn, e, t, s);
        },
        glyphAlpha: function (e, t, n) {
            const i = "[PS.glyphAlpha] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "alpha argument [3] invalid");
                    a = b.bead.glyph.color.a;
                }
            }
            return Rn(i, Kn, e, t, a);
        },
        glyphScale: function (e, t, n) {
            const i = "[PS.glyphScale] ",
                l = arguments.length;
            if (l < 2) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = n;
            if (a !== PS.CURRENT) {
                let e = Ne(a);
                if (e === Le) a = PS.CURRENT;
                else if (e === we)
                    (a = Math.floor(a)) < 50 ? (a = 50) : a > 100 && (a = 100);
                else {
                    if (a !== PS.DEFAULT) return gt(i + "scale argument [3] invalid");
                    a = b.bead.glyph.scale;
                }
            }
            return Rn(i, jn, e, t, a);
        },
        glyphFade: function (e, t, n, i) {
            const l = "[PS.glyphFade] ",
                a = arguments.length;
            if (a < 2) return gt(l + o);
            if (a > 4) return gt(l + r);
            let u = n;
            if (u !== PS.CURRENT && u !== PS.DEFAULT) {
                let e = Ne(u);
                if (e === Le) u = PS.CURRENT;
                else {
                    if (e !== we) return gt(l + "rate argument [3] invalid");
                    (u = Math.floor(u)) < 0 && (u = 0);
                }
            }
            let s = Tn(l, i);
            return s === PS.ERROR ? PS.ERROR : Rn(l, zn, e, t, u, s);
        },
        statusText: function (e) {
            if (arguments.length > 1) return gt("[PS.statusText] " + r);
            let t = e;
            return (
                void 0 !== t &&
                t !== PS.CURRENT &&
                (t === PS.DEFAULT && (t = b.status.text), or(t)),
                    k.text
            );
        },
        statusInput: function (e, t) {
            const n = "[PS.statusInput] ";
            if (2 !== arguments.length) return gt(n + "Expected 2 arguments");
            if (!t || typeof t !== Ue) return gt(n + "function argument [2] invalid");
            let r = e.toString();
            return (
                r.length > 16 && (r = r.substring(0, 16)),
                    (function (e, t) {
                        let n;
                        (k.statusP.style.display = "none"),
                        (n = e).length < 1 && (n = ">"),
                            (k.label = n),
                            (k.inputNode.nodeValue = n),
                            (k.exec = t),
                            (k.input.value = ""),
                            mn(),
                            (je = !0),
                            k.input.addEventListener("keydown", lr, !!T && w),
                            (k.inputP.style.display = "block"),
                            k.input.focus();
                    })(r, t),
                    k.label
            );
        },
        statusColor: function (e, t, n) {
            const o = "[PS.statusColor] ";
            if (arguments.length > 3) return gt(o + r);
            let i = yt(o, e, t, n);
            if (i === PS.ERROR) return PS.ERROR;
            let l = k.color,
                a = b.status.color,
                u = k.fader,
                f = i.rgb;
            if (f !== PS.CURRENT) {
                let e, t, n;
                null === f
                    ? ((e = i.r) === PS.CURRENT
                        ? (i.r = e = l.r)
                        : e === PS.DEFAULT && (i.r = e = a.r),
                        (t = i.g) === PS.CURRENT
                            ? (i.g = t = l.g)
                            : t === PS.DEFAULT && (i.g = t = a.g),
                        (n = i.b) === PS.CURRENT
                            ? (i.b = n = l.b)
                            : n === PS.DEFAULT && (i.b = n = a.b),
                        (i.rgb = e * s + t * d + n))
                    : f === PS.DEFAULT &&
                    ((i = Object.create(null)), Object.assign(i, a)),
                (l.rgb !== i.rgb ||
                    (u.rate > 0 && null !== u.rgb && u.rgb !== i.rgb)) &&
                ((l.rgb = i.rgb),
                    (e = i.r),
                    (t = i.g),
                    (n = i.b),
                    (l.str = i.str = _[e] + P[t] + E[n]),
                    u.rate > 0
                        ? (null !== u.rgb && bt(u, u.r, u.g, u.b, 255, e, t, n, 255),
                            u.active
                                ? St(u, e, t, n, 255)
                                : bt(u, l.r, l.g, l.b, 255, e, t, n, 255))
                        : Je(l),
                    (l.r = e),
                    (l.g = t),
                    (l.b = n));
            }
            return l.rgb;
        },
        statusFade: function (e, t) {
            const n = "[PS.statusFade] ";
            if (arguments.length > 2) return gt(n + r);
            let o = k.color,
                i = k.fader,
                l = i.rate,
                a = e;
            if (void 0 === a || a === PS.CURRENT) a = l;
            else if (a === PS.DEFAULT) a = b.fader.rate;
            else {
                if (Ne(a) !== we) return gt(n + "rate argument [1] invalid");
                (a = Math.floor(a)) < 0 && (a = 0);
            }
            let u = Tn(n, t);
            if (u === PS.ERROR) return PS.ERROR;
            let s = u.rgb;
            return (
                s !== PS.CURRENT &&
                (s === PS.DEFAULT ? (i.rgb = b.fader.rgb) : (i.rgb = s),
                    (i.r = u.r),
                    (i.g = u.g),
                    (i.b = u.b)),
                (s = u.onStep) !== PS.CURRENT &&
                (s === PS.DEFAULT ? (i.onStep = b.fader.onStep) : (i.onStep = s)),
                (s = u.onEnd) !== PS.CURRENT &&
                (s === PS.DEFAULT ? (i.onStep = b.fader.onEnd) : (i.onStep = s)),
                (s = u.params) !== PS.CURRENT &&
                (s === PS.DEFAULT ? (i.params = b.fader.params) : (i.params = s)),
                l !== a &&
                ((i.rate = a),
                    a < 1
                        ? ((i.active = !1), (i.kill = !0))
                        : i.active && St(i, o.r, o.g, o.b, 255)),
                    {
                        rate: i.rate,
                        rgb: i.rgb,
                        onStep: i.onStep,
                        onEnd: i.onEnd,
                        params: i.params,
                    }
            );
        },
        _footerFade: function (e) {
            ft(e);
        },
        timerStart: function (t, n) {
            const r = "[PS.timerStart] ",
                i = arguments.length;
            if (i < 2) return gt(r + o);
            let l = t;
            if (l === PS.DEFAULT) l = 60;
            else {
                if (Ne(l) !== we) return gt(r + "ticks argument [1] invalid");
                if ((l = Math.floor(l)) < 1)
                    return gt(r + "ticks argument [1] must be >= 1");
            }
            if (!n || typeof n !== Ue)
                return gt(r + "exec argument [2] is not a function");
            let a = [];
            if (i > 2) {
                let e = i - 2;
                a.length = e;
                for (let t = 0; t < e; t += 1) a[t] = arguments[t + 2];
            }
            let u = "timer_" + q;
            return (
                (q += 1),
                    G.push(e({ id: u, delay: l, count: l, exec: n, arglist: a })),
                    u
            );
        },
        timerStop: function (e) {
            const t = "[PS.timerStop] ";
            if (arguments.length < 1) return gt(t + "Argument missing");
            if (!e || typeof e !== xe) return gt(t + "id argument [1] invalid");
            let n = G.length;
            for (let t = 0; t < n; t += 1) {
                if (G[t].id === e) return G.splice(t, 1), e;
            }
            return gt(t + "timer id '" + e + "' not found");
        },
        random: function (e) {
            const t = "[PS.random] ",
                n = arguments.length;
            return n < 1
                ? gt(t + o)
                : n > 1
                    ? gt(t + r)
                    : Ne(e) !== we
                        ? gt(t + "range argument [1] is not a number")
                        : Ie(e, 0);
        },
        seed: function (e) {
            const t = "[PS.seed] ",
                n = arguments.length;
            if (n < 1) return gt(t + o);
            if (n > 1) return gt(t + r);
            let i = e;
            return Ne(i) !== we
                ? gt(t + "seeder argument [1] is not a number")
                : ((i = Math.floor(i)) < 1 && (i = 1), (Me = i));
        },
        makeRGB: function (e, t, n) {
            const i = "[PS.makeRGB] ",
                l = arguments.length;
            if (l < 3) return gt(i + o);
            if (l > 3) return gt(i + r);
            let a = e;
            if (Ne(a) !== we) return gt(i + "red argument [1] is not a number");
            (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
            let u = t;
            if (Ne(u) !== we) return gt(i + "green argument [2] is not a number");
            (u = Math.floor(u)) < 0 ? (u = 0) : u > 255 && (u = 255);
            let f = n;
            return Ne(f) !== we
                ? gt(i + "blue argument [3] is not a number")
                : ((f = Math.floor(f)) < 0 ? (f = 0) : f > 255 && (f = 255),
                a * s + u * d + f);
        },
        unmakeRGB: function (e, t) {
            const n = "[PS.unmakeRGB] ",
                i = arguments.length;
            if (i < 2) return gt(n + o);
            if (i > 2) return gt(n + r);
            let l,
                a,
                u,
                f = e;
            if (Ne(f) !== we) return gt(n + "rgb argument [1] is not a number");
            if ((f = Math.floor(f)) < 1) (f = 0), (l = 0), (a = 0), (u = 0);
            else if (e >= 16777215) (f = 16777215), (l = 255), (a = 255), (u = 255);
            else {
                l = f / s;
                let e = (l = Math.floor(l)) * s;
                (a = (f - e) / d), (u = f - e - (a = Math.floor(a)) * d);
            }
            let c = Ne(t);
            if (c === Ae) (t.rgb = f), (t.r = l), (t.g = a), (t.b = u);
            else {
                if (c !== Ce)
                    return gt(n + "result argument [2] is not an array/object");
                t.length < 3 && (t.length = 3), (t[0] = l), (t[1] = a), (t[2] = u);
            }
            return t;
        },
        applyRect: function (e, t, n, r, i) {
            const l = "[PS.applyRect] ",
                a = arguments.length;
            if (a < 5) return gt(l + o);
            let u = F.x,
                s = F.y,
                d = e;
            if (d === PS.DEFAULT) d = 0;
            else {
                if (Ne(d) !== we) return gt(l + "left argument [1] invalid");
                if ((d = Math.floor(d)) >= u) return PS.DONE;
                d < 0 && (d = 0);
            }
            let c = t;
            if (c === PS.DEFAULT) c = 0;
            else {
                if (Ne(c) !== we) return gt(l + "top argument [2] invalid");
                if ((c = Math.floor(c)) >= s) return PS.DONE;
                c < 0 && (c = 0);
            }
            let g = n;
            if (g === PS.DEFAULT) g = u - d;
            else {
                if (Ne(g) !== we) return gt(l + "width argument [3] invalid");
                if ((g = Math.floor(g)) < 1) return PS.DONE;
                d + g > u && (g = u - d);
            }
            let h = d + g,
                p = r;
            if (p === PS.DEFAULT) p = s - c;
            else {
                if (Ne(p) !== we) return gt(l + "height argument [4] invalid");
                if ((p = Math.floor(p)) < 1) return PS.DONE;
                c + p > s && (p = s - c);
            }
            let m = c + p;
            if (!i || typeof i !== Ue)
                return gt(l + "exec argument [5] is not a function");
            let b,
                S = [0, 0];
            if (a > 5) {
                let e = a - 5;
                for (let t = 0; t < e; t += 1) S.push(arguments[t + 5]);
            }
            for (let e = c; e < m; e += 1) {
                S[1] = e;
                for (let t = d; t < h; t += 1) {
                    S[0] = t;
                    try {
                        b = i.apply(f, S);
                    } catch (n) {
                        b = ct(
                            l + "exec failed @" + t + ", " + e + " [" + n.message + "]",
                            n
                        );
                    }
                    if (b === PS.ERROR) return PS.ERROR;
                }
            }
            return b;
        },
        hex: function (e, t) {
            const n = "[PS.hex] ";
            let r = e;
            if (Ne(r) !== we) return gt(n + "value argument [1] invalid");
            (r = Math.trunc(r)) < 0 && (r = 0 - r);
            let o = t;
            if (void 0 === o || t === PS.DEFAULT) o = 2;
            else {
                if (Ne(o) !== we) return gt(n + "padding argument [2] invalid");
                (o = Math.floor(o)) < 1 && (o = 1);
            }
            return Oe(r, o, 16);
        },
        keyRepeat: function (e, t, n) {
            let r, o, i, l, a;
            if (((r = "[PS.keyRepeat] "), (i = De(e, he, !0, !0)) === PS.ERROR))
                return gt(r + "repeat argument invalid");
            if ((o = Ne((a = t))) === Le || a === PS.DEFAULT) a = 30;
            else if (a === PS.CURRENT) a = se;
            else {
                if (o !== we) return gt(r + "init argument invalid");
                (a = Math.floor(a)) < 1 && (a = 1);
            }
            if ((o = Ne((l = n))) === Le || l === PS.DEFAULT) l = 6;
            else if (l === PS.CURRENT) l = ue;
            else {
                if (o !== we) return gt(r + "delay argument invalid");
                (l = Math.floor(l)) < 1 && (l = 1);
            }
            return { repeat: (he = i), init: (se = a), delay: (ue = l) };
        },
        date: function () {
            return arguments.length > 0 ? gt("[PS.date] " + r) : fr(!1);
        },
        elapsed: function () {
            if (arguments.length > 0) return gt("[PS.elapsed] " + r);
            return new Date().getTime() - S.date.time;
        },
        imageLoad: function (t, n, i) {
            const l = "[PS.imageLoad] ",
                a = arguments.length;
            if (a < 2) return gt(l + o);
            if (a > 3) return gt(l + r);
            let u = t;
            if (!u || typeof u !== xe) return gt(l + "filename argument [1] invalid");
            let s = t.substr(t.lastIndexOf(".") + 1);
            if (!(s = s.toLowerCase()) || !g[s])
                return gt(l + "filename [3] extension invalid [" + s + "]");
            if (!n || typeof n !== Ue) return gt(l + "exec argument [2] invalid");
            let d = i;
            if (void 0 === d || d === PS.DEFAULT) d = 4;
            else {
                if (Ne(d) !== we) return gt(l + "format argument [3] invalid");
                if ((d = Math.floor(d)) < 1 && d > 4)
                    return gt(l + "format argument [3] is not 1, 2, 3 or 4");
            }
            let f = "image_" + K;
            (K += 1), W.push(e({ id: f, source: u, exec: n, format: d }));
            try {
                let e = new Image();
                e.setAttribute("data-id", f),
                    (e.onload = function () {
                        Gn(e);
                    }),
                    (e.onerror = function () {
                        !(function (e) {
                            let t, n, r, o, i;
                            for (
                                t = e.getAttribute("data-id"), n = W.length, r = 0;
                                r < n;
                                r += 1
                            )
                                if ((o = W[r]).id === t) {
                                    (i = o.exec), W.splice(r, 1);
                                    break;
                                }
                            try {
                                i(PS.ERROR);
                            } catch (e) {
                                ct(
                                    "[PS.imageLoad] .exec function failed [" + e.message + "]",
                                    e
                                );
                            }
                            gt("[PS.imageLoad] Error loading " + e.src);
                        })(e);
                    }),
                    (e.src = u);
            } catch (e) {
                return ct(l + "Error loading " + u + " [" + e.message + "]", e);
            }
            return f;
        },
        imageBlit: function (e, t, n, i) {
            let l,
                a,
                u,
                f,
                c,
                g,
                h,
                p,
                m,
                b,
                S,
                _,
                P,
                E,
                R,
                y,
                v,
                T,
                w,
                x,
                A,
                U,
                L,
                C,
                N,
                D,
                k,
                M,
                I,
                B,
                Y,
                W,
                K,
                j,
                z,
                G,
                q;
            if (((l = "[PS.imageBlit] "), (a = arguments.length) < 3))
                return gt(l + o);
            if (a > 4) return gt(l + r);
            if (
                ((u = F.x),
                    (f = F.y),
                    (g = t),
                    (h = n),
                    (p = i),
                qn(l, (c = e)) === PS.ERROR)
            )
                return PS.ERROR;
            if (
                ((m = c.width),
                    (b = c.height),
                    (S = c.pixelSize),
                    (_ = c.data),
                (P = Ne(g)) === Le || g === PS.DEFAULT)
            )
                g = 0;
            else {
                if (P !== we) return gt(l + "xpos argument invalid");
                g = Math.floor(g);
            }
            if ((P = Ne(h)) === Le || h === PS.DEFAULT) h = 0;
            else {
                if (P !== we) return gt(l + "ypos argument invalid");
                h = Math.floor(h);
            }
            if (g >= u || h >= f || g + m < 1 || h + b < 1) return !1;
            if ((P = Ne(p)) === Le || p === PS.DEFAULT)
                (E = 0), (R = 0), (y = m), (v = b);
            else {
                if (P !== Ae) return gt(l + "region argument invalid");
                if (((R = p.left), (P = Ne(R)) === Le || R === PS.DEFAULT)) R = 0;
                else {
                    if (P !== we) return gt(l + "region.left invalid");
                    if ((R = Math.floor(R)) < 0) R = 0;
                    else if (R >= m) return gt(l + "region.left outside image");
                }
                if (((E = p.top), (P = Ne(E)) === Le || E === PS.DEFAULT)) E = 0;
                else {
                    if (P !== we) return gt(l + "region.top invalid");
                    if ((E = Math.floor(E)) < 0) E = 0;
                    else if (E >= b) return gt(l + "region.top outside image");
                }
                if (((y = p.width), (P = Ne(y)) === Le || y === PS.DEFAULT)) y = m - R;
                else {
                    if (P !== we) return gt(l + "region.width invalid");
                    if ((y = Math.floor(y)) < 1) return !1;
                    R + y > m && (y = m - R);
                }
                if (g + y < 1) return !1;
                if (((v = p.height), (P = Ne(v)) === Le || v === PS.DEFAULT)) v = b - E;
                else {
                    if (P !== we) return gt(l + "region.height invalid");
                    if ((v = Math.floor(v)) < 1) return !1;
                    E + v > b && (v = b - E);
                }
                if (h + v < 1) return !1;
            }
            if (g < 0) {
                if ((y += g) < 1) return !1;
                (R -= g), (g = 0);
            }
            if (((w = g + y) > u && (y = u - g), y < 1)) return !1;
            if (h < 0) {
                if ((v += h) < 1) return !1;
                (E -= h), (h = 0);
            }
            if (((w = h + v) > f && (v = f - h), v < 1)) return !1;
            for (
                x = m * S,
                    q = !1,
                    B = 255,
                    T = F.plane,
                    A = E * x + R * S,
                    C = h,
                    N = 0;
                N < v;
                N += 1
            ) {
                for (U = A, L = g, D = 0; D < y; D += 1)
                    (z = O[(j = L + C * u)]).active &&
                    ((q = !0),
                        S < 3
                            ? ((k = (Y = _[U]) / s),
                                (M = (Y - (W = (k = Math.floor(k)) * s)) / d),
                                (I = Y - W - (K = (M = Math.floor(M)) * d)),
                            2 === S && (B = _[U + 1]))
                            : ((k = _[U]),
                                (M = _[U + 1]),
                                (I = _[U + 2]),
                                (Y = k * s + M * d + I),
                            4 === S && (B = _[U + 3])),
                        ((G = xt(z, T)).r = k),
                        (G.g = M),
                        (G.b = I),
                        (G.a = B),
                        (G.rgb = Y),
                        _t(z)),
                        (L += 1),
                        (U += S);
                (C += 1), (A += x);
            }
            return q && lt(), !0;
        },
        imageCapture: function (e, t) {
            let n, o, i, l, a, u, s, d, f, c, g, h, p, m, b, S, _, P, E, R, y, v, T;
            if (((n = "[PS.imageCapture] "), (o = arguments.length) > 2))
                return gt(n + r);
            if (((l = t), (a = Ne((i = e))) === Le || i === PS.DEFAULT)) i = 3;
            else {
                if (a !== we) return gt(n + "format argument invalid");
                if ((i = Math.floor(i)) < 1 && i > 4)
                    return gt(n + "format argument is not 1, 2, 3 or 4");
            }
            if (((u = F.x), (s = F.y), (a = Ne(l)) === Le || l === PS.DEFAULT))
                (f = 0), (c = 0), (g = u), (h = s);
            else {
                if (a !== Ae) return gt(n + "region argument invalid");
                if (((c = l.left), (a = Ne(c)) === Le || c === PS.DEFAULT)) c = 0;
                else {
                    if (a !== we) return gt(n + "region.left not a number");
                    if ((c = Math.floor(c)) < 0) c = 0;
                    else if (c >= u) return gt(n + "region.left outside grid");
                }
                if (((f = l.top), (a = Ne(f)) === Le || f === PS.DEFAULT)) f = 0;
                else {
                    if (a !== we) return gt(n + "region.top not a number");
                    if ((f = Math.floor(f)) < 0) f = 0;
                    else if (f >= s) return gt(n + "region.top outside grid");
                }
                if (((g = l.width), (a = Ne(g)) === Le || g === PS.DEFAULT)) g = u - c;
                else {
                    if (a !== we) return gt(n + "region.width not a number");
                    ((g = Math.floor(g)) < 1 || c + g > u) && (g = u - c);
                }
                if (((h = l.height), (a = Ne(h)) === Le || h === PS.DEFAULT)) h = s - f;
                else {
                    if (a !== we) return gt(n + "region.height not a number");
                    ((h = Math.floor(h)) < 1 || f + h > s) && (h = s - f);
                }
            }
            if (
                ((_ = "image_" + K),
                    (K += 1),
                    (m = {
                        source: PS.GRID,
                        id: _,
                        width: g,
                        height: h,
                        pixelSize: i,
                        valid: !0,
                        data: [],
                    }),
                (p = g * h) < 1)
            )
                return m;
            for (
                (d = m.data).length = p * i, b = c + g, S = f + h, P = 0, R = f;
                R < S;
                R += 1
            )
                for (E = c; E < b; E += 1)
                    (T = (v = O[(y = E + R * u)]).color),
                        i < 3
                            ? ((d[P] = T.rgb), 2 === i && (d[P + 1] = T.a))
                            : ((d[P] = T.r),
                                (d[P + 1] = T.g),
                                (d[P + 2] = T.b),
                            4 === i && (d[P + 3] = T.a)),
                        (P += i);
            return m;
        },
        imageDump: function (e, t, n, i, l) {
            let a,
                u,
                f,
                c,
                g,
                h,
                p,
                m,
                b,
                S,
                _,
                P,
                E,
                R,
                y,
                v,
                T,
                w,
                x,
                A,
                U,
                L,
                C,
                N,
                D,
                F,
                O,
                k,
                M,
                I,
                B,
                Y;
            if (((a = "[PS.imageDump] "), (u = arguments.length) < 1))
                return gt(a + o);
            if (u > 5) return gt(a + r);
            if (((c = t), (g = n), (h = i), qn(a, (f = e)) === PS.ERROR))
                return PS.ERROR;
            if (
                ((m = f.width),
                    (b = f.height),
                    (S = f.pixelSize),
                    (_ = f.data),
                (P = Ne(c)) === Le || c === PS.DEFAULT)
            )
                (E = 0), (R = 0), (y = m), (v = b);
            else {
                if (P !== Ae) return gt(a + "region argument invalid");
                if (((R = c.left), (P = Ne(R)) === Le || R === PS.DEFAULT)) R = 0;
                else {
                    if (P !== we) return gt(a + "region.left invalid");
                    if ((R = Math.floor(R)) < 0) R = 0;
                    else if (R >= m) return gt(a + "region.left outside grid");
                }
                if (((E = c.top), (P = Ne(E)) === Le || E === PS.DEFAULT)) E = 0;
                else {
                    if (P !== we) return gt(a + "region.top invalid");
                    if ((E = Math.floor(E)) < 0) E = 0;
                    else if (E >= b) return gt(a + "region.top outside grid");
                }
                if (((y = c.width), (P = Ne(y)) === Le || y === PS.DEFAULT)) y = m - R;
                else {
                    if (P !== we) return gt(a + "region.width invalid");
                    ((y = Math.floor(y)) < 1 || R + y > m) && (y = m - R);
                }
                if (((v = c.height), (P = Ne(v)) === Le || v === PS.DEFAULT)) v = b - E;
                else {
                    if (P !== we) return gt(a + "region.height invalid");
                    ((v = Math.floor(v)) < 1 || E + v > b) && (v = b - E);
                }
            }
            if (((T = y * v), (P = Ne(g)) === Le || g === PS.DEFAULT)) g = S;
            else {
                if (P !== we) return gt(a + "format argument invalid");
                if ((g = Math.floor(g)) < 1 || g > 4)
                    return gt(a + "format argument is not 1, 2, 3 or 4");
            }
            if ((P = Ne(h)) === Le || h === PS.DEFAULT) h = y;
            else {
                if (P !== we) return gt(a + "length argument invalid");
                (h = Math.floor(h)) < 1 && (h = 1), h > T && (h = T);
            }
            if ((p = De(l, PS.ERROR, !0, !0)) === PS.ERROR)
                return gt(a + "hex argument invalid");
            if (
                ((w =
                    "\nlet myImage = {\n\twidth : " +
                    y +
                    ", height : " +
                    v +
                    ", pixelSize : " +
                    g +
                    ",\n\tdata : ["),
                T < 1)
            )
                return (w += "]\n};\n"), PS.debug(w), PS.DONE;
            for (
                w += "\n\t", L = 255, U = A = 0, C = E * (x = m * S) + R * S, D = 0;
                D < v;
                D += 1
            ) {
                for (N = C, F = 0; F < y; F += 1)
                    S < 3
                        ? ((I = _[N]) < 1
                            ? (O = k = M = 0)
                            : I >= 16777215
                                ? (O = k = M = 255)
                                : ((O = I / s),
                                    (k = (I - (B = (O = Math.floor(O)) * s)) / d),
                                    (M = I - B - (Y = (k = Math.floor(k)) * d))),
                        2 === S && (L = _[N + 1]))
                        : ((O = _[N]),
                            (k = _[N + 1]),
                            (M = _[N + 2]),
                            (I = O * s + k * d + M),
                        4 === S && (L = _[N + 3])),
                        (w += Hn(g, p, I, O, k, M, L)),
                    (U += 1) < T &&
                    ((w += ","),
                        (A += 1) < h ? (w += " ") : ((A = 0), (w += "\n\t"))),
                        (N += S);
                C += x;
            }
            return (w += "\n\t]\n};\n"), PS.debug(w), PS.DONE;
        },
        spriteSolid: function (e, t) {
            let n, i, l, a, u;
            if (((n = "[PS.spriteSolid] "), (i = arguments.length) < 2))
                return gt(n + o);
            if (i > 2) return gt(n + r);
            if (((a = t), (l = e) === PS.DEFAULT)) l = 1;
            else {
                if (Ne(l) !== we) return gt(n + "width argument invalid");
                (l = Math.floor(l)) < 1 && (l = 1);
            }
            if (a === PS.DEFAULT) a = 1;
            else {
                if (Ne(a) !== we) return gt(n + "height argument invalid");
                (a = Math.floor(a)) < 1 && (a = 1);
            }
            return (
                ((u = Vn()).width = l),
                    (u.height = a),
                    (u.color = { rgb: 0, r: 0, g: 0, b: 0, a: 255 }),
                    u.id
            );
        },
        spriteSolidColor: function (e, t, n, i) {
            let l, a, u, f, c, g, h, p, m;
            return (
                (l = "[PS.spriteSolidColor] "),
                    (a = arguments.length) < 1
                        ? gt(l + o)
                        : a > 4
                            ? gt(l + r)
                            : (u = $n(e, l)) === PS.ERROR
                                ? PS.ERROR
                                : (c = u.color)
                                    ? (f = yt(l, t, n, i)) === PS.ERROR
                                        ? PS.ERROR
                                        : ((g = f.rgb) !== PS.CURRENT &&
                                        (null === g
                                            ? ((h = f.r) === PS.CURRENT
                                                ? (f.r = h = c.r)
                                                : h === PS.DEFAULT && (f.r = h = 0),
                                                (p = f.g) === PS.CURRENT
                                                    ? (f.g = p = c.g)
                                                    : p === PS.DEFAULT && (f.g = p = 0),
                                                (m = f.b) === PS.CURRENT
                                                    ? (f.b = m = c.b)
                                                    : m === PS.DEFAULT && (f.b = m = 0),
                                                (f.rgb = g = h * s + p * d + m))
                                            : g === PS.DEFAULT &&
                                            ((f.rgb = g = 0), (f.r = 0), (f.g = 0), (f.b = 0)),
                                        c.rgb !== g &&
                                        ((c.rgb = g),
                                            (c.r = f.r),
                                            (c.g = f.g),
                                            (c.b = f.b),
                                        u.visible && u.placed && (Qn(u), lt()))),
                                            c.rgb)
                                    : gt(l + "Cannot set color of image sprite " + u.id)
            );
        },
        spriteSolidAlpha: function (e, t) {
            let n, i, l, a, u, s, d;
            if (((n = "[PS.spriteSolidAlpha] "), (i = arguments.length) < 1))
                return gt(n + o);
            if (i > 2) return gt(n + r);
            if (((a = t), (u = $n((l = e), n)) === PS.ERROR)) return PS.ERROR;
            if (!(s = u.color))
                return gt(n + "Cannot set alpha of image sprite " + u.id);
            if ((d = Ne(a)) !== Le && a !== PS.CURRENT) {
                if (a === PS.DEFAULT) a = 255;
                else {
                    if (d !== we) return gt(n + "alpha argument invalid");
                    (a = Math.floor(a)) < 0 ? (a = 0) : a > 255 && (a = 255);
                }
                s.a !== a && ((s.a = a), u.visible && u.placed && (Qn(u), lt()));
            }
            return s.a;
        },
        spriteImage: function (e, t) {
            let n,
                i,
                l,
                a,
                u,
                f,
                c,
                g,
                h,
                p,
                m,
                b,
                S,
                _,
                P,
                E,
                R,
                y,
                v,
                T,
                w,
                x,
                A,
                U,
                L,
                C;
            if (((n = "[PS.spriteImage] "), (i = arguments.length) < 1))
                return gt(n + o);
            if (i > 2) return gt(n + r);
            if (qn(n, e) === PS.ERROR) return PS.ERROR;
            if (
                ((h = g = 0),
                    (p = l = e.width),
                    (m = a = e.height),
                    (u = e.pixelSize),
                    (f = e.data),
                (c = Ne(t)) !== Le && t !== PS.DEFAULT)
            ) {
                if (c !== Ae) return gt(n + "region argument invalid");
                if (((h = t.left), (c = Ne(h)) === Le || h === PS.DEFAULT)) h = 0;
                else {
                    if (c !== we) return gt(n + "region.left invalid");
                    if ((h = Math.floor(h)) < 0) h = 0;
                    else if (h >= l) return gt(n + "region.left outside image");
                }
                if (((g = t.top), (c = Ne(g)) === Le || g === PS.DEFAULT)) g = 0;
                else {
                    if (c !== we) return gt(n + "region.top invalid");
                    if ((g = Math.floor(g)) < 0) g = 0;
                    else if (g >= a) return gt(n + "region.top outside image");
                }
                if (((p = t.width), (c = Ne(p)) === Le || p === PS.DEFAULT)) p = l - h;
                else {
                    if (c !== we) return gt(n + "region.width invalid");
                    ((p = Math.floor(p)) < 1 || h + p > l) && (p = l - h);
                }
                if (((m = t.height), (c = Ne(m)) === Le || m === PS.DEFAULT)) m = a - g;
                else {
                    if (c !== we) return gt(n + "region.height invalid");
                    ((m = Math.floor(m)) < 1 || g + m > a) && (m = a - g);
                }
            }
            for (
                (b = []).length = p * m * 4,
                    A = 255,
                    _ = g * (S = l * u) + h * u,
                    y = 0,
                    R = 0;
                R < m;
                R += 1
            ) {
                for (P = _, E = 0; E < p; E += 1)
                    u < 3
                        ? ((v = f[P]) < 1
                            ? (v = T = w = x = 0)
                            : v >= 16777215
                                ? ((v = 16777215), (T = w = x = 255))
                                : ((T = v / s),
                                    (w = (v - (U = (T = Math.floor(T)) * s)) / d),
                                    (x = v - U - (L = (w = Math.floor(w)) * d))),
                        2 === u && (A = f[P + 1]))
                        : ((T = f[P]),
                            (w = f[P + 1]),
                            (x = f[P + 2]),
                        4 === u && (A = f[P + 3])),
                        (b[y] = T),
                        (b[y + 1] = w),
                        (b[y + 2] = x),
                        (b[y + 3] = A),
                        (P += u),
                        (y += 4);
                _ += S;
            }
            return (
                ((C = Vn()).width = p),
                    (C.height = m),
                    (C.image = {
                        id: "image_" + K,
                        width: p,
                        height: m,
                        pixelSize: 4,
                        data: b,
                    }),
                    (K += 1),
                    C.id
            );
        },
        spriteShow: function (e, t) {
            let n, i, l, a, u;
            return (
                (n = "[PS.spriteShow] "),
                    (i = arguments.length) < 1
                        ? gt(n + o)
                        : i > 2
                            ? gt(n + r)
                            : (u = $n((l = e), n)) === PS.ERROR
                                ? PS.ERROR
                                : (a = De(t, PS.CURRENT, !0, PS.CURRENT)) === PS.ERROR
                                    ? gt(n + "show argument invalid")
                                    : (a !== PS.CURRENT &&
                                    u.visible !== a &&
                                    ((u.visible = a),
                                    u.placed && (a ? (Qn(u), Jn(u, l)) : Xn(u), lt())),
                                        u.visible)
            );
        },
        spriteAxis: function (e, t, n) {
            let i, l, a, u, s, d, f;
            if (((i = "[PS.spriteAxis] "), (l = arguments.length) < 1))
                return gt(i + o);
            if (l > 3) return gt(i + r);
            if (((u = t), (s = n), (d = $n((a = e), i)) === PS.ERROR))
                return PS.ERROR;
            if ((f = Ne(u)) === Le || u === PS.CURRENT) u = d.ax;
            else if (u === PS.DEFAULT) u = 0;
            else {
                if (f !== we) return gt(i + "x argument invalid");
                u = Math.floor(u);
            }
            if ((f = Ne(s)) === Le || s === PS.CURRENT) s = d.ay;
            else if (s === PS.DEFAULT) s = 0;
            else {
                if (f !== we) return gt(i + "y argument invalid");
                s = Math.floor(s);
            }
            return (
                (u === d.ax && s === d.ay) ||
                ((d.ax = u),
                    (d.ay = s),
                d.visible && d.placed && (Qn(d), Jn(d, a), lt())),
                    { x: d.ax, y: d.ay }
            );
        },
        spritePlane: function (e, t) {
            let n, i, l, a, u, s;
            if (((n = "[PS.spritePlane] "), (i = arguments.length) < 1))
                return gt(n + o);
            if (i > 2) return gt(n + r);
            if (((a = t), (u = $n((l = e), n)) === PS.ERROR)) return PS.ERROR;
            if ((s = Ne(a)) !== Le && a !== PS.CURRENT) {
                if (a === PS.DEFAULT) a = 0;
                else {
                    if (s !== we) return gt(n + "plane argument invalid");
                    (a = Math.floor(a)) < 1 && (a = 0);
                }
                u.plane !== a &&
                (u.visible && u.placed && Xn(u),
                    (u.plane = a),
                u.visible && u.placed && (Qn(u), lt()));
            }
            return u.plane < 0 ? 0 : u.plane;
        },
        spriteMove: function (e, t, n) {
            let i, l, a, u, s, d, f, c, g, h, p, m, b, S, _, P;
            if (((i = "[PS.spriteMove] "), (l = arguments.length) < 1))
                return gt(i + o);
            if (l > 3) return gt(i + r);
            if (((u = t), (s = n), (d = $n((a = e), i)) === PS.ERROR))
                return PS.ERROR;
            if ((f = Ne(u)) === Le || u === PS.CURRENT) u = d.x;
            else if (u === PS.DEFAULT) u = 0;
            else {
                if (f !== we) return gt(i + "x argument invalid");
                u = Math.floor(u);
            }
            if ((f = Ne(s)) === Le || s === PS.CURRENT) s = d.y;
            else if (s === PS.DEFAULT) s = 0;
            else {
                if (f !== we) return gt(i + "y argument invalid");
                s = Math.floor(s);
            }
            return (
                (d.placed && u === d.x && s === d.y) ||
                ((P = !1),
                d.plane < 0 && (d.plane = F.plane),
                d.visible &&
                d.placed &&
                ((g = d.y),
                    (p = d.height),
                    u > d.x
                        ? ((h = u - d.x), (c = d.x))
                        : d.x > u
                            ? ((h = d.x - u), (c = d.x + d.width - h))
                            : (h = 0),
                    h >= d.width
                        ? ((P = !0), Xn(d))
                        : ((m = d.x),
                            (S = d.width),
                            s > d.y
                                ? ((_ = s - d.y), (b = d.y))
                                : d.y > s
                                    ? ((_ = d.y - s), (b = d.y + d.height - _))
                                    : (_ = 0),
                            _ >= d.height
                                ? ((P = !0), Xn(d))
                                : _ < 1
                                    ? ((P = !0), Xn(d, c, g, h, p))
                                    : S < 1
                                        ? ((P = !0), Xn(d, m, b, S, _))
                                        : ((P = !0),
                                            (S -= h),
                                        u > d.x && (m += h),
                                            Xn(d, c, g, h, p),
                                            Xn(d, m, b, S, _)))),
                    (d.x = u),
                    (d.y = s),
                    (d.placed = !0),
                d.visible && ((P = !0), Qn(d), Jn(d, a)),
                P && lt()),
                    { x: d.x, y: d.y }
            );
        },
        spriteCollide: function (e, t) {
            let n, i, l, a, u;
            if (((n = "[PS.spriteCollide] "), (i = arguments.length) < 1))
                return gt(n + o);
            if (i > 2) return gt(n + r);
            if ((l = $n(e, n)) === PS.ERROR) return PS.ERROR;
            if ((u = Ne((a = t))) !== Le && a !== PS.CURRENT) {
                if (a === PS.DEFAULT) a = null;
                else if (u !== Ue) return gt(n + "exec argument not a function");
                l.collide !== a &&
                ((l.collide = a), a && l.visible && l.placed && Jn(l, e));
            }
            return l.collide;
        },
        spriteDelete: function (e) {
            let t, n, i, l, a;
            if (((t = "[PS.spriteDelete] "), (n = arguments.length) < 1))
                return gt(t + o);
            if (n > 1) return gt(t + r);
            if (typeof e !== xe || e.length < 1)
                return gt(t + "sprite argument invalid");
            for (i = j.length, l = 0; l < i; l += 1)
                if ((a = j[l]).id === e) return Xn(a), j.splice(l, 1), lt(), PS.DONE;
            return gt(t + "sprite id '" + e + "' not found");
        },
        audioLoad: function (e, t) {
            const n = "[PS.audioLoad] ",
                i = arguments.length;
            if (i < 1) return gt(n + o + " [expected 1 or 2]");
            if (i > 2) return gt(n + r + " [" + i + "] passed; expected 1 or 2]");
            let l = Object.create(null),
                a = e,
                u = Ne(a);
            return u === xe
                ? (l = cr.verifyParams(n, a, t)) === PS.DONE || l === PS.ERROR
                    ? l
                    : cr.load(n, a, l, l.autoplay)
                : u !== Ae
                    ? gt(n + "filename argument is not a string or object")
                    : Object.keys(a).length < 1
                        ? gt(n + "filename object is empty")
                        : cr.load(n, a, l, l.autoplay);
        },
        audioPlay: function (e, t) {
            const n = "[PS.audioPlay] ",
                i = arguments.length;
            if (i < 1) return gt(n + o + " [expected 1 or 2]");
            if (i > 2) return gt(n + r + " [" + i + " passed, expected 1 or 2]");
            let l = e,
                a = cr.verifyParams(n, e, t);
            return a === PS.DONE || a === PS.ERROR ? a : cr.load(n, l, a, !0);
        },
        audioPlayChannel: function (e, t) {
            const n = "[PS.audioPlayChannel] ",
                i = arguments.length;
            if (i < 1) return gt(n + o + " [expected 1 or 2]");
            if (i > 2) return gt(n + r + " [" + i + " passed, expected 1 or 2]");
            let l = cr.verifyChannel(n, e);
            if (l === PS.DONE || l === PS.ERROR) return l;
            let a = cr.verifyParams(n, l, t);
            return a === PS.DONE || a === PS.ERROR ? a : (cr.playChannel(n, l, a), l);
        },
        audioPause: function (e) {
            const t = "[PS.audioPause] ",
                n = arguments.length;
            if (n < 1) return gt(t + o + " [expected 1]");
            if (n > 1) return gt(t + r + " [" + n + " passed; expected 1]");
            let i = cr.verifyChannel(t, e);
            return i === PS.DONE || i === PS.ERROR ? i : cr.pause(t, i);
        },
        audioStop: function (e) {
            const t = "[PS.audioStop] ",
                n = arguments.length;
            if (n < 1) return gt(t + o + " [expected 1]");
            if (n > 1) return gt(t + r + " [" + n + " passed; expected 1]");
            let i = cr.verifyChannel(t, e);
            return i === PS.DONE || i === PS.ERROR ? i : cr.stop(t, i);
        },
        audioFade: function (e, t, n, i, l) {
            const a = "[PS.audioFade] ",
                u = arguments.length;
            if (u < 1) return gt(a + o + " [expected 4 or 5]");
            if (u > 5) return gt(a + r + " [" + u + " passed; expected 4 or 5]");
            let s = cr.verifyChannel(a, e);
            if (s === PS.DONE || s === PS.ERROR) return s;
            let d = t;
            if (d !== PS.CURRENT) {
                if (Ne(d) !== we)
                    return gt(a + "Argument 2 is not a number or PS.CURRENT");
                d < 0 ? (d = 0) : d > 1 && (d = 1);
            }
            let f = n;
            if (Ne(f) !== we) return gt(a + "Argument 3 is not a number");
            if (f === d) return gt(a + "Arguments 2 and 3 are identical");
            f < 0 ? (f = 0) : f > 1 && (f = 1);
            let c = i;
            if (void 0 === c || c === PS.DEFAULT) c = 1e3;
            else {
                if (Ne(c) !== we)
                    return gt(a + "Argument 4 is not a number or PS.DEFAULT");
                if ((c = Math.floor(c)) <= 0) return gt(a + "Argument 4 <= 0");
            }
            let g = l;
            if (void 0 === g || g === PS.DEFAULT) g = null;
            else if (Ne(g) !== Ue)
                return gt(a + "Argument 5 is not a function or PS.DEFAULT");
            return cr.fade(a, s, d, f, c, g);
        },
        piano: function (e, t) {
            const n = "[PS.piano] ",
                i = h.length,
                l = arguments.length;
            if (l < 1) return gt(n + o + " [expected 1 or 2]");
            if (l > 2) return gt(n + r + " [" + l + " passed; expected 1 or 2]");
            let a = e;
            if (Ne(a) !== we) return gt(n + "index argument invalid");
            (a = Math.floor(a)) < 1 ? (a = 1) : a > i && (a = i);
            let u = t;
            if (!0 !== u && !1 !== u)
                if (null == u) u = !1;
                else if (Ne(u) !== we) return gt(n + "flag argument invalid");
            let s = "piano_" + h[a - 1];
            return u && (s = "l_" + s), s;
        },
        harpsichord: function (e, t) {
            const n = "[PS.harpsichord] ",
                i = p.length,
                l = arguments.length;
            if (l < 1) return gt(n + o + " [expected 1 or 2");
            if (l > 2) return gt(n + r + " [" + l + " passed; expected 1 or 2]");
            let a = e;
            if (Ne(a) !== we) return gt(n + "index argument invalid");
            (a = Math.floor(a)) < 1 ? (a = 1) : a > i && (a = i);
            let u = t;
            if (!0 !== u && !1 !== u)
                if (null == u) u = !1;
                else if (Ne(u) !== we) return gt(n + "flag argument invalid");
            let s = "hchord_" + p[a - 1];
            return u && (s = "l_" + s), s;
        },
        xylophone: function (e) {
            const t = "[PS.xylophone] ",
                n = m.length,
                i = arguments.length;
            if (i < 1) return gt(t + o + " [expected 1]");
            if (i > 1) return gt(t + r + " [" + i + " passed; expected 1]");
            let l = e;
            return Ne(l) !== we
                ? gt(t + "index argument invalid")
                : ((l = Math.floor(l)) < 1 ? (l = 1) : l > n && (l = n),
                "xylo_" + m[l - 1]);
        },
        debug: function (e) {
            if (arguments.length > 1) return gt("[PS.debug] " + r + " [expected 1]");
            let t = e;
            if (
                (void 0 === t ? (t = "") : Ne(t) !== xe && (t = t.toString()),
                Re || ((Pe.style.display = "inline"), (Re = !0), (ye = !1)),
                t.length > 0)
            ) {
                let e = document.getElementById("monitor");
                (e.value += t),
                    (e.scrollTop = e.scrollHeight),
                console && console.log && console.log(t);
            }
            return (
                (function () {
                    let e = document.getElementById("main");
                    e.scrollTop = e.scrollHeight;
                })(),
                    PS.DONE
            );
        },
        debugClose: function () {
            if (arguments.length > 0) return gt("[PS.debugClose] " + r);
            document.getElementById("debug").style.display = "none";
            return (Re = !1), PS.DONE;
        },
        debugClear: function () {
            return arguments.length > 0
                ? gt("[PS.debugClear] " + r)
                : ((Ee.value = ""), PS.DONE);
        },
        line: function (e, t, n, i) {
            const l = "[PS.line] ",
                a = arguments.length;
            if (a < 4) return gt(l + o + " [expected 4]");
            if (a > 4) return gt(l + r + " [expected 4]");
            let u = e,
                s = t,
                d = n,
                f = i;
            return Ne(u) !== we
                ? gt(l + "x1 argument not a number")
                : ((u = Math.floor(u)),
                    Ne(s) !== we
                        ? gt(l + "y1 argument not a number")
                        : ((s = Math.floor(s)),
                            Ne(d) !== we
                                ? gt(l + "x2 argument not a number")
                                : ((d = Math.floor(d)),
                                    Ne(f) !== we
                                        ? gt(l + "y2 argument not a number")
                                        : (function (e, t, n, r) {
                                            let o, i, l, a, u, s, d;
                                            for (
                                                l = e < n ? 1 : -1,
                                                    a = t < r ? 1 : -1,
                                                    u =
                                                        (o = n > e ? n - e : e - n) -
                                                        (i = r > t ? r - t : t - r),
                                                    d = [];
                                                e !== n || t !== r;

                                            ) {
                                                if (
                                                    ((s = 2 * u) > -i && ((u -= i), (e += l)),
                                                    e === n && t === r)
                                                ) {
                                                    d.push([e, t]);
                                                    break;
                                                }
                                                s < o && ((u += o), (t += a)), d.push([e, t]);
                                            }
                                            return d;
                                        })(u, s, d, (f = Math.floor(f))))));
        },
        pathMap: function (e) {
            const t = "[PS.pathMap] ",
                i = arguments.length;
            if (i < 1) return gt(t + o + " [expected 1]");
            if (i > 1) return gt(t + r + " [expected 1]");
            if (qn(t, e) === PS.ERROR) return PS.ERROR;
            if (1 !== e.pixelSize) return gt(t + "image is not format 1");
            return (function (e, t, r) {
                let o, i, l, a, u, s, d, f;
                for (i = r.length, (o = []).length = i, l = 0, u = 0; u < t; u += 1)
                    for (a = 0; a < e; a += 1)
                        (s = {
                            x: a,
                            y: u,
                            value: (d = r[l]),
                            ovalue: d,
                            f: 0,
                            g: 0,
                            h: 0,
                            cost: 0,
                            parent: null,
                            closed: !1,
                            visited: !1,
                        }),
                            (o[l] = s),
                            (l += 1);
                return (
                    (f = { id: n + Te, width: e, height: t, nodes: o }),
                        (Te += 1),
                        ve.push(f),
                        f
                );
            })(e.width, e.height, e.data).id;
        },
        pathFind: function (e, t, n, i, l, a) {
            const u = "[PS.pathFind] ",
                s = arguments.length;
            if (s < 5) return gt(u + o);
            if (s > 6) return gt(u + r);
            let d = e;
            if (!d || typeof d !== xe) return gt(u + "pathmap argument invalid");
            let f = rr(d);
            if (!f) return gt(u + d + " not found");
            let c = t;
            if (Ne(c) !== we) return gt(u + "x1 argument not a number");
            if ((c = Math.floor(c)) < 0 || c >= f.width)
                return gt(u + "x1 argument is outside " + d);
            let g = n;
            if (Ne(g) !== we) return gt(u + "y1 argument not a number");
            if ((g = Math.floor(g)) < 0 || g >= f.height)
                return gt(u + "y1 argument is outside " + d);
            let h = i;
            if (Ne(h) !== we) return gt(u + "x2 argument not a number");
            if ((h = Math.floor(h)) < 0 || h >= f.width)
                return gt(u + "x2 argument is outside " + d);
            let p = l;
            if (Ne(p) !== we) return gt(u + "y2 argument not a number");
            if ((p = Math.floor(p)) < 0 || p >= f.height)
                return gt(u + "y2 argument is outside " + d);
            let m = b.paths.no_diagonals,
                S = b.paths.cut_corners,
                _ = a;
            if (void 0 !== _ && _ !== PS.DEFAULT) {
                if (Ne(_) !== Ae) return gt(u + "options argument invalid");
                let e = _.no_diagonals;
                if (!0 === e || !1 === e) m = e;
                else if (void 0 === e || e === PS.DEFAULT) m = b.paths.no_diagonals;
                else {
                    if (Ne(e) !== we) return gt(u + "options.no_diagonals invalid");
                    m = 0 !== e;
                }
                if (!0 === (e = _.cut_corners) || !1 === e) S = e;
                else if (void 0 === e || e === PS.DEFAULT) S = b.paths.cut_corners;
                else {
                    if (Ne(e) !== we) return gt(u + "options.cut_corners invalid");
                    S = 0 !== e;
                }
            }
            return (function (e, t, n, r, o, i, l) {
                let a, u, s, d, f, c, g, h, p, m, b, S, _, P, E, R;
                if (t === r && n === o) return [];
                if (
                    ((a = e.width),
                        (u = e.height),
                        !(f = (s = e.nodes)[(d = n * a + t)]).value)
                )
                    return [];
                if (!(f = s[(d = o * a + r)]).value) return [];
                if (
                    !i &&
                    (c = (function (e, t, n, r, o, i) {
                        let l, a, u, s, d, f, c, g, h;
                        for (
                            u = n < o ? 1 : -1,
                                s = r < i ? 1 : -1,
                                d = (l = o > n ? o - n : n - o) - (a = i > r ? i - r : r - i),
                                c = [];
                            n !== o || r !== i;

                        ) {
                            if (
                                ((f = 2 * d) > -a && ((d -= a), (n += u)), n === o && r === i)
                            )
                                return c.push([n, r]), c;
                            if (
                                (f < l && ((d += l), (r += s)), !(g = e[(h = r * t + n)]).value)
                            )
                                return null;
                            c.push([n, r]);
                        }
                        return c;
                    })(s, a, t, n, r, o))
                )
                    return c;
                for (g = s.length, S = 0; S < g; S += 1)
                    ((f = s[S]).f = 0),
                        (f.g = 0),
                        (f.h = 0),
                        (f.cost = 0),
                        (f.closed = !1),
                        (f.visited = !1),
                        (f.parent = null);
                for (
                    c = [], h = new Zn(nr), f = s[(d = n * a + t)], h.push(f);
                    h.size() > 0;

                ) {
                    if ((p = h.pop()).x === r && p.y === o) {
                        for (R = p; R.parent; ) c.push([R.x, R.y]), (R = R.parent);
                        c.reverse();
                        break;
                    }
                    for (
                        p.closed = !0, b = (m = tr(s, a, u, p, i, l)).length, S = 0;
                        S < b;
                        S += 1
                    )
                        (_ = m[S]),
                            (P = p.g + _.cost),
                        (!(E = _.visited) || P < _.g) &&
                        ((_.visited = !0),
                            (_.parent = p),
                            (_.h = _.h || er(_.x, _.y, r, o)),
                            (_.g = P),
                            (_.f = _.g + _.h),
                            E ? h.rescore(_) : h.push(_));
                }
                return c;
            })(f, c, g, h, p, m, S);
        },
        pathData: function (e, t, n, i, l, a) {
            const u = "[PS.pathData] ",
                s = arguments.length;
            if (s < 5) return gt(u + o + "[expected 5 or 6]");
            if (s > 6) return gt(u + r + "[expected 5 or 6]");
            let d = e;
            if (!d || typeof d !== xe) return gt(u + "pathmap argument invalid");
            let f = rr(d);
            if (!f) return gt(u + d + " not found");
            let c = t;
            if (Ne(c) !== we) return gt(u + "left argument not a number");
            if ((c = Math.floor(c)) < 0 || c >= f.width)
                return gt(u + "left argument is outside " + d);
            let g = n;
            if (Ne(g) !== we) return gt(u + "top argument not a number");
            if ((g = Math.floor(g)) < 0 || g >= f.height)
                return gt(u + "top argument is outside " + d);
            let h = i;
            if (h === PS.DEFAULT) h = 1;
            else {
                if (Ne(h) !== we) return gt(u + "width argument not a number");
                if ((h = Math.floor(h)) < 1) h = 1;
                else {
                    let e = f.width - c;
                    h > e && (h = e);
                }
            }
            let p = l;
            if (p === PS.DEFAULT) p = 1;
            else {
                if (Ne(p) !== we) return gt(u + "height argument not a number");
                if ((p = Math.floor(p)) < 1) p = 1;
                else {
                    let e = f.height - g;
                    p > e && (p = e);
                }
            }
            let m = a;
            if (m !== PS.DEFAULT && m !== PS.CURRENT)
                if (void 0 === m) m = PS.CURRENT;
                else {
                    if (Ne(m) !== we) return gt(u + "data argument not a number");
                    if (m < 0) return gt(u + "data argument < 0");
                }
            return (function (e, t, n, r, o, i) {
                let l, a, u, s, d, f, c, g;
                for (
                    (l = []).length = r * o, a = e.nodes, u = n + o, c = 0, f = n;
                    f < u;
                    f += 1
                )
                    for (s = f * e.width + t, d = 0; d < r; d += 1)
                        (g = a[s]),
                        i !== PS.CURRENT &&
                        (i === PS.DEFAULT ? (g.value = g.ovalue) : (g.value = i)),
                            (l[c] = g.value),
                            (c += 1),
                            (s += 1);
                return l;
            })(f, c, g, h, p, m);
        },
        pathDelete: function (e) {
            const t = "[PS.pathDelete] ";
            return arguments.length < 1
                ? gt(t + o + " [expected 1]")
                : e && typeof e === xe
                    ? (function (e) {
                        let t, n, r, o, i;
                        for (t = ve.length, n = 0; n < t; n += 1)
                            if ((r = ve[n]).id === e) {
                                for (t = (o = r.nodes).length, i = 0; i < t; i += 1)
                                    o[i] = null;
                                return (r.nodes = null), ve.splice(n, 1), !0;
                            }
                        return !1;
                    })(e)
                        ? PS.DONE
                        : gt(t + e + " not found")
                    : gt(t + "pathmap argument invalid");
        },
        pathNear: function (e, t, n, i, l) {
            const a = "[PS.pathNear] ",
                u = arguments.length;
            if (u < 5) return gt(a + o + " [expected 5]");
            if (u > 5) return gt(a + r + " [expected 5]");
            if (!e || typeof e !== xe) return gt(a + "pathmap argument invalid");
            let s = rr(e);
            return s
                ? (function (e, t, n, r, o) {
                    let i, l, a, u, s, d, f, c, g, h, p, m, b, S, _, P, E, R, y;
                    for (i = e.nodes, l = e.width, a = e.height, u = 1; u < l; ) {
                        if (
                            ((s = []),
                                (g = o + u),
                            (h = d = r - u) < 0 && (h = 0),
                            (p = (c = r + u) + 1) >= l && (p = l),
                            (f = o - u) >= 0)
                        )
                            for (m = f * l + h, b = h; b < p; b += 1)
                                (S = i[m]).value && s.push([S.x, S.y]), (m += 1);
                        if (g < a)
                            for (m = g * l + h, b = h; b < p; b += 1)
                                (S = i[m]).value && s.push([S.x, S.y]), (m += 1);
                        if (((h = f + 1) < 0 && (h = 0), (p = g) >= a && (p = a), d >= 0))
                            for (m = h * l + d, b = h; b < p; b += 1)
                                (S = i[m]).value && s.push([S.x, S.y]), (m += l);
                        if (c < l)
                            for (m = h * l + c, b = h; b < p; b += 1)
                                (S = i[m]).value && s.push([S.x, S.y]), (m += l);
                        if ((_ = s.length)) {
                            if (1 === _) return s[0];
                            for (P = l + a, b = 0; b < _; b += 1)
                                (R = er(t, n, (y = s[b])[0], y[1])) < P && ((P = R), (E = b));
                            return s[E];
                        }
                        u += 1;
                    }
                    return [t, n];
                })(s, t, n, i, l)
                : gt(a + e + " not found");
        },
        _error: function (e) {
            return gt(e);
        },
        _footerText: function (e) {
            let t, n, o;
            return (
                (t = "[PS._footerText] "),
                    arguments.length > 1
                        ? gt("[PS._footerText] " + r)
                        : ((o = Ne((n = e))),
                        n !== PS.CURRENT &&
                        o !== Le &&
                        (n === PS.DEFAULT ? (n = "") : o !== xe && (n = n.toString()),
                            st(),
                            Ke(n.trim())),
                            Q)
            );
        },
    });
    return ke(gr), gr;
})();
!(function () {
    "use strict";
    let e, t, n, r, o, i, l;
    if (
        ((e = 0),
            (n = (t = ["webkit", "moz", "ms", "o"]).length),
            !window.requestAnimationFrame)
    ) {
        for (r = 0; r < n; r += 1)
            (o = t[r]),
                (window.requestAnimationFrame = window[o + "RequestAnimationFrame"]);
        window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (t) {
            let n, r, o;
            return (
                (n = new Date().getTime()),
                    (r = Math.max(0, 16 - (n - e))),
                    (o = window.setTimeout(function () {
                        t(n + r);
                    }, r)),
                    (e = n + r),
                    o
            );
        });
    }
    if (!window.cancelAnimationFrame) {
        for (r = 0; r < n; r += 1)
            (o = t[r]),
                (window.cancelAnimationFrame =
                    window[o + "CancelAnimationFrame"] ||
                    window[o + "CancelRequestAnimationFrame"]);
        window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (e) {
            window.clearTimeout(e);
        });
    }
    String.fromCodePoint ||
    ((l = function () {
        let e, t, n, r, o, i, l, a;
        if (!(e = arguments.length)) return "";
        for (t = 16384, n = "", o = [], r = 0; r < e; ) {
            if (
                ((i = Number(arguments[r])),
                !isFinite(i) || i < 0 || i > 1114111 || Math.floor(i) !== i)
            )
                throw RangeError("Invalid code point: " + i);
            i <= 65535
                ? o.push(i)
                : ((l = 55296 + ((i -= 65536) >> 10)),
                    (a = (i % 1024) + 56320),
                    o.push(l, a)),
            (r + 1 === e || o.length > 16384) &&
            ((n += String.fromCharCode.apply(null, o)), (o.length = 0)),
                (r += 1);
        }
        return n;
    }),
        (i = (function () {
            let e, t, n;
            (e = {}), (t = Object.defineProperty);
            try {
                n = t(e, e, e) && t;
            } catch (e) {}
            return n;
        })())
            ? i(String, "fromCodePoint", { value: l, configurable: !0, writable: !0 })
            : (String.fromCodePoint = l));
})();
