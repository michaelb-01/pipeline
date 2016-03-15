/* Gridifier v2.~.~ source file for custom build.
 * Async Responsive HTML Grids
 * http://gridifier.io
 * 
 * Gridifier is dual-licensed:
 *   Non-commercial license - https://creativecommons.org/licenses/by-nc-sa/4.0/.
 *   Commercial license - http://gridifier.io/license (Commercial license).
 * Read http://gridifier.io/license for details.
 * Copyright 2015 nTech
 */
!function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports && exports ? module.exports = e() : t.Gridifier = e();
}(this, function() {
    var t = function(t, e) {
        var n = function(t, e) {
            for (var n in e) t.prototype[n] = e[n];
        }, i = function(t, e) {
            for (var n in e) !function(t, n) {
                Qt[t] = function() {
                    return e[t].apply(n, arguments);
                };
            }(n, t);
        }, r = function(t) {
            throw new Error(N.ERR + t);
        }, s = function() {
            return function() {};
        }, o = function(t, e) {
            return function() {
                return e[t].apply(e, arguments);
            };
        }, a = s(), u = s(), c = function() {
            return {
                isScheduled: function() {
                    return !1;
                }
            };
        }, l = s(), h = s(), f = s(), d = s(), g = s(), _ = s(), p = (s(), s()), m = s(), v = s(), C = s(), T = s(), y = s(), A = s(), E = s(), x = s(), I = s(), D = function() {
            return {
                getCoordsChanger: s()
            };
        }, R = s(), S = s(), O = s(), P = s(), F = s(), N = {
            DATA: "data-gridifier",
            OWCACHED: "-cached-per-ow",
            OHCACHED: "-cached-per-oh",
            ERR: "Gridifier error: ",
            NOT_NATIVE: "is not jQuery/Native DOM object.",
            IS_ACTIVE: "-toggle-is-active"
        }, w = {
            SRM: {
                CACHED_PER_OW_ITEM_GUID_DATA: N.DATA + N.OWCACHED + "-guid",
                CACHED_PER_OH_ITEM_GUID_DATA: N.DATA + N.OHCACHED + "-guid",
                CACHED_PER_OW_DATA: N.DATA + N.OWCACHED,
                CACHED_PER_OH_DATA: N.DATA + N.OHCACHED,
                EMPTY_DATA: "e"
            },
            COLL: {
                SORT_INDEX_DATA: N.DATA + "-orig-sort-index",
                NOT_COLLECTABLE_DATA: N.DATA + "-not-collectable"
            },
            ITEM: {
                IS_CONNECTED_DATA: N.DATA + "-connected"
            },
            REND: {
                CN_RENDERED_DATA: N.DATA + "-cn-rendered",
                SCH_TO_HIDE_DATA: N.DATA + "-sch-to-hide",
                SILENT_DATA: N.DATA + "-sch-for-silentr"
            },
            DRAGIFIER_REPOS_DELAY: 20,
            DRAGIFIER_DISCR_REPOS_DELAY: 100,
            IS_DRAGGABLE_DATA: N.DATA + "-is-draggable",
            GUID_DATA: N.DATA + "-guid",
            RANGE_SIZE: 500,
            REFLOW_FIX_DELAY: 0,
            UPDATE_Z_DELAY: 100,
            INSERT_QUEUE_DELAY: 100,
            INSERT_BATCH_DELAY: 100,
            RENDER_QUEUE_DELAY: 20,
            RENDER_DEF_DELAY: 40,
            DISC_TYPES: {
                SOFT: 0,
                HARD: 1
            },
            DISC_BATCH: 12,
            DISC_DELAY: 60,
            RSORT_REPOS_DELAY: 20,
            MAX_Z: "16777271"
        }, L = {
            IS_ACTIVE: N.DATA + N.IS_ACTIVE,
            IS_ACTIVE_WITH_CC: N.DATA + N.IS_ACTIVE + "-with-cc",
            SYNCER_DATA: N.DATA + "-toggle-syncer-id"
        }, b = {
            MATRICES: {
                X: "1, 0, 0, ",
                Y: "0, 1, 0, ",
                Z: "0, 0, 1, ",
                XY: "1, 1, 0, ",
                XZ: "1, 0, 1, ",
                YZ: "0, 1, 1, ",
                XYZ: "1, 1, 1, "
            },
            FNS: {
                X: "rotateX",
                Y: "rotateY",
                Z: "rotateZ"
            },
            FADES: {
                NONE: 0,
                FULL: 1,
                ON_HIDE_MIDDLE: 2
            },
            GUID_DATA: N.DATA + "rotate-guid",
            SCENE_CLASS_PREFIX: "gridifierRotateSceneId"
        }, B = {
            INITIAL_GUID: -1,
            SHIFTED: 8,
            APPEND: {
                DEF: 0,
                REV: 1
            },
            PREPEND: {
                DEF: 2,
                REV: 3
            },
            LEFT: {
                TOP: 0,
                BOTTOM: 1
            },
            BOTTOM: {
                RIGHT: 2,
                LEFT: 3
            },
            RIGHT: {
                TOP: 4,
                BOTTOM: 5
            },
            TOP: {
                LEFT: 6,
                RIGHT: 7
            },
            CLEANERS: {
                INSIDE: 0,
                INSIDE_OR_BEFORE: 1
            }
        }, M = {
            PREPEND: 0,
            REV_PREPEND: 1,
            APPEND: 2,
            REV_APPEND: 3,
            MIR_PREPEND: 4,
            INS_BEFORE: 5,
            INS_AFTER: 6,
            SIL_APPEND: 7
        }, H = {
            SHOW: 0,
            HIDE: 1,
            RENDER: 2,
            DEL_RENDER: 3
        }, G = {
            FILTER: "filter",
            SORT: "sort",
            TOGGLE: "toggle",
            DRAG: "drag",
            RSORT: "rsort",
            COORDSCHANGER: "coordsChanger"
        }, V = {
            NOT_NATIVE: "one of items " + N.NOT_NATIVE,
            GRID_NOT_NATIVE: "grid " + N.NOT_NATIVE,
            NO_CNS: "no inserted items",
            CANT_FIND_CN: "can't find conn. by item",
            WRONG_IBA_ITEM: "wrong insertBefore/After targetItem",
            TOO_BIG_ITEM: "too wide(ver.grid)/too tall(hor.grid) item"
        }, Y = {
            SHOW: "Show",
            HIDE: "Hide",
            GRID_RESIZE: "GridResize",
            CSS_CHANGE: "CssChange",
            REPOSITION_END: "RepositionEnd",
            REPOSITION: "Reposition",
            DISCONNECT: "Disconnect",
            INSERT: "Insert",
            DRAG_END: "DragEnd"
        }, U = {
            REPOSITION_END_FOR_DRAG: "RepositionEndForDrag",
            BEFORE_SHOW_FOR_RSORT: "BeforeShowForRsort",
            SET_SETTING_FOR_NZER: "SetSettingForNzer",
            RSORT_CHANGE: "RsortChange"
        }, q = {
            getComputedCSS: null,
            _getProps: {
                forOw: [ "paddingLeft", "paddingRight", "marginLeft", "marginRight", "borderLeftWidth", "borderRightWidth" ],
                forOh: [ "paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth" ],
                forPosLeft: [ "marginLeft" ],
                forPosTop: [ "marginTop" ]
            },
            _prefixedProps: {
                boxSizing: null
            },
            _borderBoxType: null,
            _borderBoxTypes: {
                OUTER: 0,
                INNER: 1
            },
            _ptValsCalcType: null,
            _ptValsCalcTypes: {
                BROWSER: 0,
                RECALC: 1
            },
            recalcPtWidthFn: function(t, e, n, i) {
                return this.outerWidth(t, e, n, i);
            },
            recalcPtHeightFn: function(t, e, n, i) {
                return this.outerHeight(t, e, n, i);
            },
            _lastRawWidth: null,
            _lastRawHeight: null,
            _lastBorderWidth: null,
            _lastBorderHeight: null,
            _hasLastBorderBox: !1,
            init: function() {
                this.getComputedCSS = this._getComputedCSSFn(), this._findPrefixedProps(), this._findBorderBoxType(W.div()), 
                this._findPtValsCalcType(W.div(), W.div());
            },
            clearRecursiveSubcallsData: function() {
                this._lastRawWidth = null, this._lastRawHeight = null, this._lastBorderWidth = null, 
                this._lastBorderHeight = null, this._hasLastBorderBox = !1;
            },
            _areBrowserPtVals: function() {
                return this._ptValsCalcType == this._ptValsCalcTypes.BROWSER;
            },
            _areRecalcPtVals: function() {
                return this._ptValsCalcType == this._ptValsCalcTypes.RECALC;
            },
            getUncomputedCSS: function(t) {
                var e = t.parentNode.cloneNode(), n = t.cloneNode();
                e.appendChild(n), e.style.display = "none";
                var i = "HTML" == t.parentNode.nodeName ? t.parentNode : t.parentNode.parentNode;
                i.appendChild(e);
                for (var r = this.getComputedCSS(n), s = {}, o = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "width", "height" ], a = 0; a < o.length; a++) s[o[a]] = r[o[a]];
                return i.removeChild(e), s;
            },
            _ensureHasParentNode: function(t) {
                null != t.parentNode && W.hasOwnProp(t.parentNode, "innerHTML") || r("no parentNode");
            },
            _ensureHasComputedProp: function(t, e) {
                e in t || r("no prop " + e);
            },
            _hasPtCSSVal: function(t, e, n) {
                var i = function(t, e, n) {
                    this._ensureHasParentNode(e), n = n || this.getUncomputedCSS(e), this._ensureHasComputedProp(n, t);
                    var i = new RegExp("(.*\\d)%$");
                    return i.test(n[t]);
                };
                if (W.isArray(t)) {
                    for (var r = 0; r < t.length; r++) if (i.call(this, t[r], e, n)) return !0;
                    return !1;
                }
                return i.call(this, t, e, n);
            },
            _getPtCSSVal: function(t, e, n) {
                return this._ensureHasParentNode(e), n = n || this.getUncomputedCSS(e), this._ensureHasComputedProp(n, t), 
                n[t];
            },
            _recalcPtVal: function(t, e, n, i) {
                var r = parseFloat(this._getPtCSSVal(i, t, n));
                return e / 100 * r;
            },
            _recalcTwoSidePropPtVals: function(t, e, n, i, r, s) {
                var o = r + (s ? "Top" : "Left"), a = r + (s ? "Bottom" : "Right"), u = n[o], c = n[a];
                return this._hasPtCSSVal(o, t, i) && (u = this._recalcPtVal(t, e, i, o)), this._hasPtCSSVal(a, t, i) && (c = this._recalcPtVal(t, e, i, a)), 
                u + c;
            },
            _isDefBoxSizing: function(t) {
                var e = this._prefixedProps.boxSizing;
                return e && t[e] && "border-box" === t[e] ? !0 : !1;
            },
            _isOuterBoxSizing: function() {
                return this._borderBoxType === this._borderBoxTypes.OUTER;
            },
            _isCascadedCSSVal: function(t) {
                return window.getComputedStyle || -1 !== t.indexOf("px") ? !1 : !0;
            },
            _cascadedToComputed: function(t, e, n) {
                var i = new RegExp("(?=.*\\d)");
                if (!i.test(e)) return e;
                var r = t.style, s = t.runtimeStyle, o = r.left, a = s && s.left;
                return a && (s.left = n.left), r.left = e, e = r.pixelLeft, r.left = o, a && (s.left = a), 
                e;
            },
            _normalizeComputedCSS: function(t) {
                var e = parseFloat(t), n = -1 === t.indexOf("%") && !isNaN(e);
                return n ? e : !1;
            },
            _getComputedProps: function(t, e, n) {
                for (var i = {}, r = 0; r < this._getProps[t].length; r++) {
                    var s = this._getProps[t][r], o = e[s];
                    this._isCascadedCSSVal(o) && (o = this._cascadedToComputed(n, o, e)), o = parseFloat(o), 
                    o = isNaN(o) ? 0 : o, i[s] = o;
                }
                return i;
            },
            positionLeft: function(t) {
                var e = this.getComputedCSS(t);
                if ("none" == e.display) return 0;
                var n = this._getComputedProps("forPosLeft", e, t);
                return t.offsetLeft - n.marginLeft;
            },
            positionTop: function(t) {
                var e = this.getComputedCSS(t);
                if ("none" == e.display) return 0;
                var n = this._getComputedProps("forPosTop", e, t);
                return t.offsetTop - n.marginTop;
            },
            offsetLeft: function(t) {
                var e = t.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft;
                return e.left + n;
            },
            offsetTop: function(t) {
                var e = t.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop;
                return e.top + n;
            },
            cloneComputedStyle: function(t, e) {
                var n = function(t) {
                    return t.replace(/-+(.)?/g, function(t, e) {
                        return e ? e.toUpperCase() : "";
                    });
                }, i = this.getComputedCSS(t);
                for (var r in i) if ("cssText" != r) {
                    var s = n(r);
                    e.style[s] != i[s] && (e.style[s] = i[s]);
                }
                this._reclone(i, e);
            },
            _reclone: function(t, e) {
                for (var n = [ "font", "fontSize", "fontWeight", "lineHeight" ], i = [ "Width", "Color", "Style" ], r = [ "Left", "Right", "Top", "Bottom" ], s = 0; s < i.length; s++) for (var o = 0; o < r.length; o++) n.push("border" + r[o] + i[s]);
                for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    "undefined" != typeof t[a] && e.style[a] != t[a] && (e.style[a] = t[a]);
                }
            }
        };
        q._getComputedCSSFn = function() {
            return window.getComputedStyle ? function(t) {
                return window.getComputedStyle(t, null);
            } : function(t) {
                return t.currentStyle;
            };
        }, q._findPrefixedProps = function() {
            this._prefixedProps.boxSizing = k.get("boxSizing");
        }, q._findBorderBoxType = function(t) {
            W.css.set(t, {
                width: "100px",
                padding: "10px 20px",
                borderWidth: "10px 20px",
                borderStyle: "solid"
            });
            var e = this._prefixedProps.boxSizing;
            t.style[e] = "border-box";
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var i = this.getComputedCSS(t);
            100 === this._normalizeComputedCSS(i.width) ? this._borderBoxType = this._borderBoxTypes.OUTER : this._borderBoxType = this._borderBoxTypes.INNER, 
            n.removeChild(t);
        }, q._findPtValsCalcType = function(t, e, n) {
            W.css.set(t, {
                width: "1178px",
                height: "300px",
                position: "absolute",
                left: "-9000px",
                top: "0px",
                visibility: "hidden"
            });
            var i = document.body || document.documentElement;
            i.appendChild(t), W.css.set(e, {
                width: "10%",
                height: "200px"
            }), t.appendChild(e);
            var r = 117.796875.toFixed(1), s = parseFloat(this.outerWidth(e, !0, !0)).toFixed(1);
            this._ptValsCalcType = r == s ? this._ptValsCalcTypes.BROWSER : this._ptValsCalcTypes.RECALC, 
            i.removeChild(t);
        }, q.outerWidth = function(t, e, n, i) {
            var e = e || !1, n = n || !1, i = i || !1, r = this.getComputedCSS(t);
            if (n || this._areBrowserPtVals()) var s = !1; else if (this._areRecalcPtVals()) {
                this._ensureHasParentNode(t);
                var s = this._hasPtCSSVal("width", t);
            }
            if ("none" === r.display) return 0;
            var o = this._getComputedProps("forOw", r, t), a = o.paddingLeft + o.paddingRight, u = o.marginLeft + o.marginRight, c = o.borderLeftWidth + o.borderRightWidth, l = 0, h = this._normalizeComputedCSS(r.width);
            h !== !1 && (l = h);
            var f = null, d = null;
            return s && (f = this.getUncomputedCSS(t), d = this.recalcPtWidthFn.call(this, t.parentNode, !1, "HTML" == t.parentNode.nodeName, !0), 
            this._hasLastBorderBox && this._hasPtCSSVal("width", t, f) && (d -= this._lastBorderWidth)), 
            s && this._hasPtCSSVal([ "paddingLeft", "paddingRight" ], t, f) && (a = this._recalcTwoSidePropPtVals(t, d, o, f, "padding")), 
            s && this._hasPtCSSVal("width", t, f) && (l = this._recalcPtVal(t, d, f, "width")), 
            !this._isDefBoxSizing(r) || this._isDefBoxSizing(r) && !this._isOuterBoxSizing() ? (this._lastRawWidth = l, 
            l += a, i || (l += c), this._hasLastBorderBox = !1) : (this._hasLastBorderBox = !0, 
            this._lastRawWidth = l, this._lastBorderWidth = c), e && (s && this._hasPtCSSVal([ "marginLeft", "marginRight" ], t, f) && (u = this._recalcTwoSidePropPtVals(t, d, o, f, "margin")), 
            l += u), l;
        }, q.outerHeight = function(t, e, n, i) {
            var e = e || !1, n = n || !1, i = i || !1, r = this.getComputedCSS(t);
            if (n || this._areBrowserPtVals()) var s = !1; else if (this._areRecalcPtVals()) {
                this._ensureHasParentNode(t);
                var s = this._hasPtCSSVal("height", t);
            }
            if ("none" === r.display) return 0;
            var o = this._getComputedProps("forOh", r, t), a = o.paddingTop + o.paddingBottom, u = o.marginTop + o.marginBottom, c = o.borderTopWidth + o.borderBottomWidth, l = 0, h = this._normalizeComputedCSS(r.height);
            h !== !1 && (l = h);
            var f = null, d = null, g = null;
            return s && (f = this.getUncomputedCSS(t), d = this.recalcPtWidthFn.call(this, t.parentNode, !1, "HTML" == t.parentNode.nodeName, !0), 
            this._hasLastBorderBox && (d -= this._lastBorderWidth), g = this.recalcPtHeightFn.call(this, t.parentNode, !1, "HTML" == t.parentNode.nodeName, !0), 
            this._hasLastBorderBox && this._hasPtCSSVal("height", t, f) && (g -= this._lastBorderHeight)), 
            s && this._hasPtCSSVal([ "paddingTop", "paddingBottom" ], t, f) && (a = this._recalcTwoSidePropPtVals(t, d, o, f, "padding", !0)), 
            s && this._hasPtCSSVal("height", t, f) && (l = this._recalcPtVal(t, g, f, "height")), 
            !this._isDefBoxSizing(r) || this._isDefBoxSizing(r) && !this._isOuterBoxSizing() ? (this._lastRawHeight = l, 
            l += a, i || (l += c), this._hasLastBorderBox = !1) : (this._hasLastBorderBox = !0, 
            this._lastRawHeight = l, this._lastBorderHeight = c), e && (s && this._hasPtCSSVal([ "marginTop", "marginBottom" ], t, f) && (u = this._recalcTwoSidePropPtVals(t, d, o, f, "margin", !0)), 
            l += u), l;
        };
        var X = function() {
            function t(t) {
                if (t = t || window.event, t.isFixed) return t;
                if (t.isFixed = !0, t.preventDefault = t.preventDefault || function() {
                    this.returnValue = !1;
                }, t.stopPropagation = t.stopPropagation || function() {
                    this.cancelBubble = !0;
                }, t.target || (t.target = t.srcElement), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement == t.target ? t.toElement : t.fromElement), 
                null == t.pageX && null != t.clientX) {
                    var e = document.documentElement, n = document.body;
                    t.pageX = t.clientX + (e && e.scrollLeft || n && n.scrollLeft || 0) - (e.clientLeft || 0), 
                    t.pageY = t.clientY + (e && e.scrollTop || n && n.scrollTop || 0) - (e.clientTop || 0);
                }
                return !t.which && t.button && (t.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0), 
                t;
            }
            function e(e) {
                e = t(e);
                var i = this[n][e.type];
                for (var r in i) {
                    var s = i[r].call(this, e);
                    if (s === !1 ? (e.preventDefault(), e.stopPropagation()) : void 0 !== s && (e.result = s), 
                    e.stopNow) break;
                }
            }
            var n = "gridifierEvents", i = "gridifierHandle", r = function() {
                var t = new Date().getTime();
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var n = (t + 16 * Math.random()) % 16 | 0;
                    return t = Math.floor(t / 16), ("x" == e ? n : 3 & n | 8).toString(16);
                });
            };
            return {
                add: function(t, s, o) {
                    t.setInterval && t != window && !t.frameElement && (t = window), o.guid || (o.guid = r()), 
                    t[n] || (t[n] = {}, t[i] = function(n) {
                        return "undefined" != typeof X ? e.call(t, n) : void 0;
                    }), t[n][s] || (t[n][s] = {}, t.addEventListener ? t.addEventListener(s, t[i], !1) : t.attachEvent && t.attachEvent("on" + s, t[i])), 
                    t[n][s][o.guid] = o;
                },
                rm: function(t, e, r) {
                    var s = t[n] && t[n][e];
                    if (s) if (r) {
                        delete s[r.guid];
                        for (var o in s) return;
                        t.removeEventListener ? t.removeEventListener(e, t[i], !1) : t.detachEvent && t.detachEvent("on" + e, t[i]), 
                        delete t[n][e];
                        for (var o in t[n]) return;
                        try {
                            delete t[i], delete t[n];
                        } catch (a) {
                            t.removeAttribute(i), t.removeAttribute(n);
                        }
                    } else for (var u in s) delete t[n][e][u];
                }
            };
        }(), k = {
            _prefixes: [ "Moz", "Webkit", "ms", "Ms", "Khtml", "O" ],
            _getter: function(t, e, n) {
                e = e || document.documentElement;
                var i = e.style;
                if ("string" == typeof i[t]) return t;
                for (var r = t, t = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < this._prefixes.length; s++) {
                    var o = this._prefixes[s] + t;
                    if ("string" == typeof i[o]) return n(o, r, s);
                }
            },
            get: function(t, e) {
                return this._getter(t, e, function(t) {
                    return t;
                });
            },
            getForCss: function(t, e) {
                var n = this;
                return this._getter(t, e, function(t, e, i) {
                    return "-" + n._prefixes[i].toLowerCase() + "-" + e;
                });
            }
        }, W = {
            init: function() {
                this._createTrimFunction(), this._createHasOwnPropFn(), this._checkIfHasTransitions(W.div()), 
                this.browsers.init(), this.css3.init();
            },
            _createTrimFunction: function() {
                "function" != typeof String.prototype.gridifierTrim && (String.prototype.gridifierTrim = function() {
                    return this.replace(/^\s+|\s+$/g, "");
                });
            },
            _createHasOwnPropFn: function() {
                var t = W.div(), e = document.body || document.documentElement;
                e.appendChild(t), Object.prototype.hasOwnProperty.call(t, "innerHTML") ? this._hasOwnPropFn = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                } : this._hasOwnPropFn = function(t, e) {
                    for (var n in t) if (n == e) return !0;
                    return !1;
                }, e.removeChild(t);
            },
            _checkIfHasTransitions: function(t) {
                var e = [ "WebkitTransition", "MozTransition", "OTransition", "msTransition", "MsTransition", "transition" ];
                this._hasTransitions = !1;
                for (var n = 0; n < e.length; n++) void 0 !== t.style[e[n]] && (this._hasTransitions = !0);
            },
            get: function(t, e) {
                return t.getAttribute(e);
            },
            set: function(t, e, n) {
                if (this.isArray(e)) for (var i = 0; i < e.length; i++) t.setAttribute(e[i][0], e[i][1]); else t.setAttribute(e, n);
            },
            rm: function(t, e) {
                t.removeAttribute(e);
            },
            rmIfHas: function(t, e) {
                if (this.isArray(e)) for (var n in e) this.has(t, e[n]) && this.rm(t, e[n]); else this.has(t, e) && this.rm(t, e);
            },
            has: function(t, e) {
                return null === t.getAttribute(e) || "" === t.getAttribute(e) ? !1 : !0;
            },
            "int": function(t) {
                return parseInt(t, 10);
            },
            isJquery: function(t) {
                return "undefined" == typeof jQuery ? !1 : t && t instanceof jQuery;
            },
            isNative: function(t) {
                return "undefined" != typeof t && "undefined" != typeof t.tagName && "undefined" != typeof t.nodeName && "undefined" != typeof t.ownerDocument && "undefined" != typeof t.removeAttribute ? !0 : !1;
            },
            isArray: function(t) {
                return "[object Array]" == Object.prototype.toString.call(t);
            },
            isObj: function(t) {
                return "object" == typeof t && null !== t;
            },
            isChildOf: function(t, e) {
                if (t == e) return !1;
                for (var n = t.parentNode; void 0 != n; ) {
                    if (n == e) return !0;
                    if (n == document.body) break;
                    n = n.parentNode;
                }
                return !1;
            },
            hasTransitions: function() {
                return this._hasTransitions;
            },
            hasVal: function(t, e) {
                for (var n in t) if (t[n] == e) return !0;
                return !1;
            },
            hasOwnProp: function(t, e) {
                return this._hasOwnPropFn(t, e);
            },
            hasAnyProp: function(t, e) {
                for (var n = 0; n < e.length; n++) if (this._hasOwnPropFn(t, e[n])) return !0;
                return !1;
            },
            toFixed: function(t, e) {
                return parseFloat(+(Math.round(+(t.toString() + "e" + e)).toString() + "e" + -e));
            },
            areRoundedOrFlooredEq: function(t, e) {
                return Math.round(t) == Math.round(e) || Math.floor(t) == Math.floor(e);
            },
            areRoundedOrCeiledEq: function(t, e) {
                return Math.round(t) == Math.round(e) || Math.ceil(t) == Math.ceil(e);
            },
            filter: function(t, e, n) {
                for (var n = n || window, i = [], r = 0; r < t.length; r++) e.call(n, t[r]) && i.push(t[r]);
                return i;
            },
            show: function(t) {
                t.style.visibility = "visible";
            },
            hide: function(t) {
                t.style.visibility = "hidden";
            },
            div: function() {
                return document.createElement("div");
            },
            browsers: {
                _navigator: null,
                init: function() {
                    this._navigator = "undefined" != typeof navigator ? navigator.userAgent : "";
                },
                isAndroid: function() {
                    return /android/i.test(this._navigator);
                },
                isAndroidFirefox: function() {
                    return this.isAndroid() ? /firefox|iceweasel/i.test(this._navigator) : !1;
                },
                isAndroidUC: function() {
                    return this.isAndroid() ? /UCBrowser/i.test(this._navigator) : !1;
                }
            },
            css: {
                set: function(t, e) {
                    W.isNative(t) || r("Error: not DOM.");
                    for (var n in e) t.style[n] = e[n];
                },
                set4: function(t, e, n) {
                    for (var i = [ "Left", "Right", "Top", "Bottom" ], r = 0; r < i.length; r++) t.style[e + i[r]] = W.isObj(n) ? n[e + i[r]] : n;
                },
                hasClass: function(t, e) {
                    var n = t.getAttribute("class");
                    if (null == n || 0 == n.length) return !1;
                    n = n.split(" ");
                    for (var i = 0; i < n.length; i++) if (n[i] = n[i].gridifierTrim(), n[i] == e) return !0;
                    return !1;
                },
                addClass: function(t, e) {
                    var n = t.getAttribute("class");
                    if (null == n || 0 == n.length) var i = e; else var i = n + " " + e;
                    W.set(t, "class", i);
                },
                removeClass: function(t, e) {
                    for (var n = t.getAttribute("class").split(" "), i = "", r = 0; r < n.length; r++) n[r].gridifierTrim() != e && (i += n[r] + " ");
                    i = i.substring(0, i.length - 1), W.set(t, "class", i);
                }
            },
            css3: {
                _opacityProps: [ "opacity" ],
                _perspectiveProps: [ "perspective" ],
                _transformStyleProps: [ "transformStyle" ],
                _backfaceVisibilityProps: [ "backfaceVisibility" ],
                _transformOriginProps: [ "transformOrigin" ],
                init: function() {
                    for (var t = [ [ "Webkit", "Moz" ], [ "webkit", "moz", "o", "ms" ] ], e = 0; e < t[0].length; e++) {
                        var n = t[0][e];
                        this._opacityProps.push(n + "Opacity"), this._perspectiveProps.push(n + "Perspective"), 
                        this._transformStyleProps.push(n + "TransformStyle"), this._backfaceVisibilityProps.push(n + "BackfaceVisibility");
                    }
                    for (var e = 0; e < t[1].length; e++) this._transformOriginProps.push(t[1][e] + "TransformOrigin");
                },
                transition: function(t, e) {
                    t.style[k.get("transition", t)] = e;
                },
                transitionProperty: function(t, e) {
                    var n = t.style[k.get("transition", t)];
                    if (0 == n.length) return void (t.style[k.get("transition", t)] = e);
                    var i = function(t) {
                        return t.replace(/cubic-bezier\([^\)]+/g, function(t) {
                            return t.replace(/,/g, ";");
                        });
                    }, r = function(t) {
                        return t.replace(/cubic-bezier\([^\)]+/g, function(t) {
                            return t.replace(/;/g, ",");
                        });
                    }, s = i(e);
                    n = i(n);
                    for (var o = n.split(","), a = 0; a < o.length; a++) {
                        var u = o[a].gridifierTrim();
                        if (0 != u.length) {
                            var c = u.split(" "), l = c[0];
                            -1 === s.search(l) && (s += ", " + u);
                        }
                    }
                    t.style[k.get("transition", t)] = r(s).gridifierTrim();
                },
                transform: function(t, e) {
                    t.style[k.get("transform", t)] = e;
                },
                transformProperty: function(t, e, n) {
                    var i = t.style[k.get("transform", t)];
                    if (0 == i.length) return void (t.style[k.get("transform", t)] = e + "(" + n + ")");
                    for (var r = "", s = i.split(/\)/), o = !1, a = 0; a < s.length; a++) {
                        var u = s[a].gridifierTrim();
                        0 != u.length && (-1 !== u.search(e) ? (r += " " + e + "(" + n + ")", o = !0) : r += " " + u + ")");
                    }
                    o || (r += " " + e + "(" + n + ")"), t.style[k.get("transform", t)] = r.gridifierTrim();
                },
                style: function(t, e, n) {
                    for (var i = 0; i < e.length; i++) t.style[e[i]] = n;
                },
                opacity: function(t, e) {
                    this.style(t, this._opacityProps, e);
                },
                perspective: function(t, e) {
                    this.style(t, this._perspectiveProps, e);
                },
                transformStyle: function(t, e) {
                    this.style(t, this._transformStyleProps, e);
                },
                backfaceVisibility: function(t, e) {
                    this.style(t, this._backfaceVisibilityProps, e);
                },
                transformOrigin: function(t, e) {
                    for (var n = 0; n < this._transformOriginProps.length; n++) "undefined" != typeof t.style[this._transformOriginProps[n]] && (t.style[this._transformOriginProps[n]] = e);
                }
            },
            find: {
                byId: function(t) {
                    return document.getElementById(t);
                },
                byClass: function(t, e) {
                    return t.querySelectorAll("." + e);
                },
                byQuery: function(t, e) {
                    var n = e.gridifierTrim()[0];
                    if (">" == n) {
                        for (var i = e.substr(2, e.length - 1), r = t.querySelectorAll(i), s = [], o = 0; o < r.length; o++) r[o].parentNode == t && s.push(r[o]);
                        return s;
                    }
                    return t.querySelectorAll(e);
                }
            },
            remove: {
                byQuery: function(t, e) {
                    for (var n = W.find.byQuery(t, e), i = 0; i < n.length; i++) {
                        var r = n[i];
                        r.parentNode.removeChild(r);
                    }
                }
            }
        }, z = function() {};
        n(z, {
            find: function(t, e) {
                var e = e || !1, n = me.get();
                e || 0 != n.length || r(V.NO_CNS);
                for (var i = ie.get(t), s = null, o = 0; o < n.length; o++) if (i == n[o].itemGUID) {
                    s = n[o];
                    break;
                }
                if (null == s && !Be.isEmpty()) for (var a = Be.getQueued(), o = 0; o < a.length; o++) if (i == a[o].cn.itemGUID) {
                    s = a[o].cn;
                    break;
                }
                return e || null != s || r(V.CANT_FIND_CN), s;
            },
            create: function(t, e) {
                for (var n = [ "x1", "x2", "y1", "y2" ], i = 0; i < n.length; i++) {
                    var r = n[i], s = e[r];
                    e[r] = W.toFixed(e[r], 2), isNaN(e[r]) && (e[r] = s);
                }
                return e.item = t, e.itemGUID = ie.get(t), e.hOffset = W.hasOwnProp(e, "hOffset") ? e.hOffset : 0, 
                e.vOffset = W.hasOwnProp(e, "vOffset") ? e.vOffset : 0, e.restrictCollect = W.hasOwnProp(e, "restrictCollect") ? e.restrictCollect : !1, 
                jt.isConnected(t) || jt.markAsConnected(t), e;
            },
            rm: function(t, e) {
                for (var n = 0; n < t.length; n++) if (ie.get(e.item) == ie.get(t[n].item)) return void t.splice(n, 1);
            },
            _remapGUIDS: function(t) {
                for (var e = 0; e < t.length; e++) t[e].itemGUID = ie.markForAppend(t[e].item);
            },
            remapAllGUIDS: function() {
                ie.reinit(), this._remapGUIDS(ye.sortForReappend(me.get()));
            },
            remapGUIDSIn: function(t) {
                this._remapGUIDS(t);
            },
            getByGUIDS: function(t) {
                for (var e = me.get(), n = [], i = 0; i < e.length; i++) for (var r = 0; r < t.length; r++) if (e[i].itemGUID == t[r]) {
                    n.push(e[i]);
                    break;
                }
                return n;
            },
            syncParams: function(t) {
                for (var e = me.get(), n = [ "x1", "x2", "y1", "y2", "hOffset", "vOffset", "restrictCollect" ], i = 0; i < t.length; i++) for (var r = 0; r < e.length; r++) if (t[i].itemGUID == e[r].itemGUID) {
                    for (var s = 0; s < n.length; s++) e[r][n[s]] = t[i][n[s]];
                    break;
                }
            },
            _getMinSize: function(t, e, n, i) {
                var r = me.get();
                if (0 == r.length) return 0;
                for (var s = function(s) {
                    return r[s][t] >= r[s][e] || r[s][t] < 0 || r[s][e] > n ? Zt["outer" + i](r[s].item, !0) : r[s][e] - r[s][t] + 1;
                }, o = s(0), a = 1; a < r.length; a++) {
                    var u = s(a);
                    o > u && (o = u);
                }
                return o;
            },
            getMinWidth: function() {
                return this._getMinSize("x1", "x2", Jt.x2(), "Width");
            },
            getMinHeight: function() {
                return this._getMinSize("y1", "y2", Jt.y2(), "Height");
            },
            _compareGUIDS: function(t, e, n) {
                for (var i = ie.get(e), r = 0; r < t.length; r++) if (n(ie.get(t[r].item), i)) return !0;
                return !1;
            },
            isAnyGUIDSmallerThan: function(t, e) {
                return this._compareGUIDS(t, e, function(t, e) {
                    return e > t;
                });
            },
            isAnyGUIDBiggerThan: function(t, e) {
                return this._compareGUIDS(t, e, function(t, e) {
                    return t > e;
                });
            },
            getMaxY: function() {
                for (var t = me.get(), e = 0, n = 0; n < t.length; n++) t[n].y2 > e && (e = t[n].y2);
                return e;
            },
            restoreOnSortDispersion: function(t, e, n) {
                var i = ye.sortForReappend(me.get()), r = i[i.length - 1], s = function(t, e, n) {
                    t.x1 = e, t.x2 = e, t.y1 = n, t.y2 = n;
                };
                Kt.eq("append", "default") ? e(t, r, s) : n(t, r, s);
            },
            getAllBACoord: function(t, e) {
                for (var n = me.get(), i = [], r = 0; r < n.length; r++) Kt.eq("sortDispersion", !1) && e(n[r], t) && i.push(n[r]);
                return i;
            },
            fixAllXYPosAfterPrepend: function(t, e, n, i, r) {
                if (t[i] >= 0) return !1;
                var s = Math.round(Math.abs(t[i]));
                t[r] = Math.abs(t[i] - t[r]), t[i] = 0;
                for (var o = me.get(), a = 0; a < o.length; a++) t.itemGUID != o[a].itemGUID && (o[a][i] += s, 
                o[a][r] += s);
                for (var a = 0; a < e.length; a++) e[a][n] += s;
                return Te.incAllBy(s, i, r), Te.createPrepended(t[i], t[r], i, r), !0;
            }
        });
        var Q = function() {};
        n(Q, {
            isIntersectingAny: function(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], r = e.y1 < i.y1 && e.y2 < i.y1, s = e.y1 > i.y2 && e.y2 > i.y2, o = e.x1 < i.x1 && e.x2 < i.x1, a = e.x1 > i.x2 && e.x2 > i.x2;
                    if (!(r || s || o || a)) return !0;
                }
                return !1;
            },
            getAllWithIntersectedCenter: function(t) {
                for (var e = me.get(), n = [], i = 0; i < e.length; i++) {
                    var r = e[i].x2 - e[i].x1 + 1, s = e[i].y2 - e[i].y1 + 1, o = e[i].x1 + r / 2, a = e[i].y1 + s / 2, u = {
                        x1: o,
                        x2: o,
                        y1: a,
                        y2: a
                    };
                    this.isIntersectingAny([ u ], t) && n.push(e[i]);
                }
                return n;
            },
            _findAllMaybeIntCns: function(t, e) {
                for (var n = me.get(), i = [], r = 0; r < n.length; r++) e(t, n[r]) || i.push(n[r]);
                return i;
            },
            findAllMaybeIntOnVgAppend: function(t) {
                return this._findAllMaybeIntCns(t, function(t, e) {
                    return t.y > e.y2;
                });
            },
            findAllMaybeIntOnVgPrepend: function(t) {
                return this._findAllMaybeIntCns(t, function(t, e) {
                    return t.y < e.y1;
                });
            },
            findAllMaybeIntOnHgAppend: function(t) {
                return this._findAllMaybeIntCns(t, function(t, e) {
                    return t.x > e.x2;
                });
            },
            findAllMaybeIntOnHgPrepend: function(t) {
                return this._findAllMaybeIntCns(t, function(t, e) {
                    return t.x < e.x1;
                });
            }
        });
        var Z = function() {
            this._ranges = null, Kt.eq("grid", "vertical") ? this.init("y1", "y2") : this.init("x1", "x2");
        };
        n(Z, {
            init: function(t, e) {
                var n = {
                    cnIndexes: []
                };
                n[t] = -1, n[e] = w.RANGE_SIZE - 1, this._ranges = [ n ], this._attachAllCns(t, e);
            },
            incAllBy: function(t, e, n) {
                for (var i = 0; i < this._ranges.length; i++) this._ranges[i][e] += t, this._ranges[i][n] += t;
            },
            createPrepended: function(t, e, n, i) {
                var r = {
                    cnIndexes: []
                };
                r[n] = -1, r[i] = e, this._ranges.unshift(r);
            },
            _createNext: function(t, e) {
                var n = this._ranges[this._ranges.length - 1][e] + 1, i = {
                    cnIndexes: []
                };
                i[t] = n, i[e] = n + w.RANGE_SIZE - 1, this._ranges.push(i);
            },
            attachCn: function(t, e, n, i) {
                for (;t[i] + 1 > this._ranges[this._ranges.length - 1][i]; ) this._createNext(n, i);
                for (var s = !1, o = 0; o < this._ranges.length; o++) {
                    var a = t[i] < this._ranges[o][n], u = t[n] > this._ranges[o][i];
                    a || u || (this._ranges[o].cnIndexes.push(e), s = !0);
                }
                s || r("Range for cn NF");
            },
            _attachAllCns: function(t, e) {
                for (var n = me.get(), i = 0; i < n.length; i++) this.attachCn(n[i], i, t, e);
            },
            mapAllIntAndSideCns: function(t, e, n, i, r, s, o, a) {
                for (var u = this._ranges, c = r(u), l = [], h = 0; h < t.length; h++) {
                    for (var f = !1, d = c != r(u); !f; ) {
                        if (c > s(u) || 0 > c) {
                            c = r(u);
                            break;
                        }
                        t[h][e] >= u[c][n] && t[h][e] <= u[c][i] ? f = !0 : (c = a(c), d = !1);
                    }
                    d || (l = o(c, u)), t[h].cnIndexes = l;
                }
                return t;
            },
            firstRngIndexFn: function() {
                return function(t) {
                    return 0;
                };
            },
            lastRngIndexFn: function() {
                return function(t) {
                    return t.length - 1;
                };
            },
            lowerCrCnIndexesFn: function() {
                return function(t, e) {
                    for (var n = [], i = t; i >= 0; i--) n.push(e[i].cnIndexes);
                    return n;
                };
            },
            upperCrCnIndexesFn: function() {
                return function(t, e) {
                    for (var n = [], i = t; i < e.length; i++) n.push(e[i].cnIndexes);
                    return n;
                };
            },
            incFn: function() {
                return function(t) {
                    return ++t;
                };
            },
            decFn: function() {
                return function(t) {
                    return --t;
                };
            },
            getAllCnsFromIntRange: function(t, e, n) {
                for (var i = this._ranges, r = 0; r < i.length; r++) if (t >= i[r][e] && t <= i[r][n]) return i[r].cnIndexes;
                for (var s = function(t, e) {
                    for (var n = 0; n < t.length; n++) if (t[n] == e) return !0;
                    return !1;
                }, o = [], r = 0; r < i.length; r++) for (var a = 0; a < i[r].cnIndexes.length; a++) s(o, i[r].cnIndexes[a]) || o.push(i[r].cnIndexes[a]);
                return o;
            },
            getAllCnsFromIntAndTLSideRgs: function(t, e, n) {
                for (var i = this._ranges, r = [], s = null, o = i.length - 1; o >= 0; o--) if (t >= i[o][e] && t <= i[o][n]) {
                    s = o;
                    break;
                }
                null == s && (s = i.length - 1);
                for (var o = s; o >= 0; o--) r.push(i[o].cnIndexes);
                return r;
            },
            getAllCnsFromIntAndRBSideRgs: function(t, e, n) {
                for (var i = this._ranges, r = [], s = null, o = 0; o < i.length; o++) if (t >= i[o][e] && t <= i[o][n]) {
                    s = o;
                    break;
                }
                null == s && (s = 0);
                for (var o = s; o < i.length; o++) r.push(i[o].cnIndexes);
                return r;
            }
        });
        var j = function() {};
        n(j, {
            _sortForReappend: function(t, e, n, i) {
                if (Kt.eq("sortDispersion", !1)) t.sort(function(t, e) {
                    return ie.get(t.item) > ie.get(e.item) ? 1 : -1;
                }); else {
                    Kt.eq("append", "default") ? t.sort(function(t, i) {
                        return W.areRoundedOrFlooredEq(t[e], i[e]) ? t[n] < i[n] ? -1 : 1 : t[e] < i[e] ? -1 : 1;
                    }) : t.sort(function(t, n) {
                        return W.areRoundedOrFlooredEq(t[e], n[e]) ? t[i] > n[i] ? -1 : 1 : t[e] < n[e] ? -1 : 1;
                    });
                    var r = Kt.getApi("rsort");
                    t = r(t);
                }
                return t;
            },
            sortForReappend: function(t) {
                return Kt.eq("grid", "vertical") ? this._sortForReappend(t, "y1", "x1", "x2") : this._sortForReappend(t, "x1", "y2", "y1");
            }
        });
        var J = function() {
            this._lastXYExpandedCns = [];
        };
        n(J, {
            _isBefore: function(t, e, n, i) {
                return t[n] < e[n] && t[i] < e[n];
            },
            _isAfter: function(t, e, n, i) {
                return t[n] > e[i] && t[i] > e[i];
            },
            getLastXYExpandedCns: function() {
                return this._lastXYExpandedCns;
            },
            isIntMoreThanOneCnXY: function(t, e, n) {
                for (var i = this, r = me.get(), s = [], o = function(t) {
                    if (0 == s.length) return !1;
                    for (var o = 0; o < s.length; o++) {
                        var a = r[s[o]], u = a[e], c = a[n];
                        a[e] = Math.ceil(a[e]), a[n] = Math.floor(a[n]);
                        var l = i._isBefore(t, a, e, n), h = i._isAfter(t, a, e, n);
                        if (a[e] = u, a[n] = c, !l && !h) return !0;
                    }
                    return !1;
                }, a = 0, u = 0; u < r.length; u++) i._isBefore(t, r[u], e, n) || i._isAfter(t, r[u], e, n) || o(r[u]) || (s.push(u), 
                a++);
                return a > 1;
            },
            getMostBigFromAllXYIntCns: function(t, e, n) {
                for (var i = me.get(), r = null, s = 0; s < i.length; s++) if (!this._isBefore(t, i[s], e, n) && !this._isAfter(t, i[s], e, n)) if (null == r) r = i[s]; else {
                    var o = Math.abs(i[s][n] - i[s][e]), a = Math.abs(r[n] - r[e]);
                    o > a && (r = i[s]);
                }
                return r;
            },
            getAllXYIntCns: function(t, e, n) {
                for (var i = me.get(), r = [], s = 0; s < i.length; s++) this._isBefore(t, i[s], e, n) || this._isAfter(t, i[s], e, n) || r.push(i[s]);
                return r;
            },
            expandXYAllCnsToMostBig: function(t, e, n, i, r) {
                var s = o("eq", Kt), a = this.getMostBigFromAllXYIntCns(t, e, n);
                if (null != a) {
                    for (var u = this.getAllXYIntCns(t, e, n), c = [], l = 0; l < u.length; l++) if (u[l][e] = a[e], 
                    u[l][n] = a[n], s("align", "left") || s("align", "top")) 0 != u[l][i] && c.push(u[l]), 
                    u[l][i] = 0; else {
                        var h = Zt["outer" + r](u[l].item, !0);
                        if (s("align", "center")) var f = Math.abs(u[l][n] - u[l][e] + 1) / 2 - h / 2; else var f = Math.abs(u[l][n] - u[l][e] + 1) - h;
                        u[l][i] != f && (u[l][i] = f, c.push(u[l]));
                    }
                    this._lastXYExpandedCns = c;
                }
            }
        });
        var $ = function() {
            this._cleaner = null;
        };
        n($, {
            _updateCleaner: function() {
                var t = B.CLEANERS;
                this._cleaner = Kt.eq("sortDispersion", !1) ? t.INSIDE_OR_BEFORE : t.INSIDE;
            },
            _isInsideCleaner: function() {
                return this._updateCleaner(), this._cleaner == B.CLEANERS.INSIDE;
            },
            _isMappedCrIntAnySideCn: function(t, e, n, i, r) {
                for (var s = me.get(), o = 0; o < t.cnIndexes.length; o++) for (var a = 0; a < t.cnIndexes[o].length; a++) {
                    var u = s[t.cnIndexes[o][a]];
                    if (fe.roundCnPerCr(u, t), t[e] >= u[n] && t[e] <= u[i] && r.call(this, t, u)) return fe.unroundCnPerCr(u, t), 
                    !0;
                    fe.unroundCnPerCr(u, t);
                }
                return !1;
            },
            _isMappedCrIntAnyTopCn: function(t) {
                return this._isMappedCrIntAnySideCn(t, "x", "x1", "x2", function(t, e) {
                    return this._isInsideCleaner() ? t.y >= e.y1 && t.y <= e.y2 : t.y >= e.y1;
                });
            },
            _isMappedCrIntAnyBottomCn: function(t) {
                return this._isMappedCrIntAnySideCn(t, "x", "x1", "x2", function(t, e) {
                    return this._isInsideCleaner() ? t.y <= e.y2 && t.y >= e.y1 : t.y <= e.y2;
                });
            },
            _isMappedCrIntAnyLeftCn: function(t) {
                return this._isMappedCrIntAnySideCn(t, "y", "y1", "y2", function(t, e) {
                    return this._isInsideCleaner() ? t.x >= e.x1 && t.x <= e.x2 : t.x >= e.x1;
                });
            },
            _isMappedCrIntAnyRightCn: function(t) {
                return this._isMappedCrIntAnySideCn(t, "y", "y1", "y2", function(t, e) {
                    return this._isInsideCleaner() ? t.x <= e.x2 && t.x >= e.x1 : t.x <= e.x2;
                });
            },
            _rmIntFrom: function(t, e, n) {
                var i = ue.get(), r = ue.getClone();
                r.sort(function(t, i) {
                    return t[e] == i[e] ? 0 : n(t[e], i[e]) ? -1 : 1;
                }), r = me["mapAllIntAnd" + t + "Cns"](r);
                for (var s = 0; s < r.length; s++) {
                    var o = "_isMappedCrIntAny" + t + "Cn";
                    i[r[s].crIndex].isInt = this[o](r[s]);
                }
                for (var s = 0; s < i.length; s++) i[s].isInt && (i.splice(s, 1), s--);
            },
            rmIntFromTop: function() {
                this._rmIntFrom("Top", "y", function(t, e) {
                    return t.y > e.y;
                });
            },
            rmIntFromBottom: function() {
                this._rmIntFrom("Bottom", "y", function(t, e) {
                    return t.y < e.y;
                });
            },
            rmIntFromLeft: function() {
                this._rmIntFrom("Left", "x", function(t, e) {
                    return t.x > e.x;
                });
            },
            rmIntFromRight: function() {
                this._rmIntFrom("Right", "x", function(t, e) {
                    return t.x < e.x;
                });
            },
            _rmAllTooFar: function(t, e) {
                var n = ue.get();
                if (0 != n.length) {
                    for (var i = n[0], r = 1; r < n.length; r++) t(n[r], i) && (i = n[r]);
                    for (var r = 0; r < n.length; r++) e(n[r], i, W["int"](Kt.get("insertRange"))) && (n.splice(r, 1), 
                    r--);
                }
            },
            _crSmCr: function(t) {
                return function(e, n) {
                    return e[t] < n[t];
                };
            },
            _crBgCr: function(t) {
                return function(e, n) {
                    return e[t] > n[t];
                };
            },
            _crSmValidC: function(t, e) {
                return function(n, i, r) {
                    return n[t] < i[t] + r * e;
                };
            },
            _crBgValidC: function(t, e) {
                return function(n, i, r) {
                    return n[t] > i[t] + r * e;
                };
            },
            rmAllTooBottomFromMostTop: function() {
                this._rmAllTooFar(this._crSmCr("y"), this._crBgValidC("y", 1));
            },
            rmAllTooTopFromMostBottom: function() {
                this._rmAllTooFar(this._crBgCr("y"), this._crSmValidC("y", -1));
            },
            rmAllTooRightFromMostLeft: function() {
                this._rmAllTooFar(this._crSmCr("x"), this._crBgValidC("x", 1));
            },
            rmAllTooLeftFromMostRight: function() {
                this._rmAllTooFar(this._crBgCr("x"), this._crSmValidC("x", -1));
            }
        });
        var K = function() {
            this._crs = [], this._nextFlushCb = null;
        };
        n(K, {
            eq: function(t, e) {
                return t.side == e;
            },
            isInitial: function(t) {
                return t.itemGUID == B.INITIAL_GUID;
            },
            create: function(t, e, n, i, r) {
                this._crs.push({
                    type: t,
                    side: e,
                    x: W.toFixed(n, 2),
                    y: W.toFixed(i, 2),
                    itemGUID: "undefined" == typeof r ? B.INITIAL_GUID : r
                });
            },
            count: function() {
                return this._crs.length;
            },
            get: function() {
                return this._crs;
            },
            set: function(t) {
                this._crs = t;
            },
            setNextFlushCb: function(t) {
                this._nextFlushCb = t;
            },
            flush: function() {
                this._crs = [], "function" == typeof this._nextFlushCb && (this._nextFlushCb(), 
                this._nextFlushCb = null);
            },
            getClone: function() {
                for (var t = [], e = [ "type", "side", "x", "y", "itemGUID" ], n = 0; n < this._crs.length; n++) {
                    for (var i = {}, r = 0; r < e.length; r++) i[e[r]] = this._crs[n][e[r]];
                    i.crIndex = n, t.push(i);
                }
                return t;
            }
        });
        var tt = function() {};
        n(tt, {
            _mostYClose: function(t, e, n, i, r, s) {
                for (var o = me.get(), a = null, u = Kt.eq("grid", "vertical") ? r(t) : s(t), c = 0; c < u.length; c++) for (var l = 0; l < u[c].length; l++) {
                    var h = o[u[c][l]];
                    (t.x >= h.x1 && t.x <= h.x2 || e(t, h)) && n(t, h) && (null == a ? a = h : i(h, a) && (a = h));
                }
                return a;
            },
            _crXBgCnX2: function(t, e) {
                return t.x > e.x2;
            },
            _crXSmCnX1: function(t, e) {
                return t.x < e.x1;
            },
            _crYBgCnY2: function(t, e) {
                return t.y > e.y2;
            },
            _crYSmCnY1: function(t, e) {
                return t.y < e.y1;
            },
            _cnX1BgCnX2: function(t, e) {
                return t.x1 > e.x2;
            },
            _cnX1SmCnX1: function(t, e) {
                return t.x1 < e.x1;
            },
            _cnY2BgCnY2: function(t, e) {
                return t.y2 > e.y2;
            },
            _cnY1SmCnY1: function(t, e) {
                return t.y1 < e.y1;
            },
            _intXCns: function(t) {
                return me.getAllIntXCns(t);
            },
            _intXAndUpperCns: function(t) {
                return me.getAllIntXAndTopCns(t);
            },
            _intXAndLowerCns: function(t) {
                return me.getAllIntXAndBottomCns(t);
            },
            _intYAndLeftCns: function(t) {
                return me.getAllIntYAndLeftCns(t);
            },
            _intYAndRightCns: function(t) {
                return me.getAllIntYAndRightCns(t);
            },
            mostBottomFromTopOrTopLeft: function(t) {
                var e = this;
                return this._mostYClose(t, e._crXBgCnX2, e._crYBgCnY2, e._cnY2BgCnY2, e._intXAndUpperCns, e._intYAndLeftCns);
            },
            mostBottomFromTopOrTopRight: function(t) {
                var e = this;
                return this._mostYClose(t, e._crXSmCnX1, e._crYBgCnY2, e._cnY2BgCnY2, e._intXAndUpperCns, e._intYAndRightCns);
            },
            mostTopFromBottomOrBottomLeft: function(t) {
                var e = this;
                return this._mostYClose(t, e._crXBgCnX2, e._crYSmCnY1, e._cnY1SmCnY1, e._intXAndLowerCns, e._intYAndLeftCns);
            },
            mostTopFromBottomOrBottomRight: function(t) {
                var e = this;
                return this._mostYClose(t, e._crXSmCnX1, e._crYSmCnY1, e._cnY1SmCnY1, e._intXAndLowerCns, e._intYAndRightCns);
            },
            _mostXClose: function(t, e, n, i, r) {
                var s = me.get(), o = null, a = function(i) {
                    t.y >= i.y1 && t.y <= i.y2 && e(t, i) && (null == o ? o = i : n(i, o) && (o = i));
                };
                if (Kt.eq("grid", "vertical")) for (var u = i(t), c = 0; c < u.length; c++) a(s[u[c]]); else for (var u = r(t), c = 0; c < u.length; c++) for (var l = 0; l < u[c].length; l++) a(s[u[c][l]]);
                return o;
            },
            mostLeftFromRight: function(t) {
                var e = this;
                return this._mostXClose(t, e._crXSmCnX1, e._cnX1SmCnX1, e._intXCns, e._intYAndRightCns);
            },
            mostRightFromLeft: function(t) {
                var e = this;
                return this._mostXClose(t, e._crXBgCnX2, e._cnX1BgCnX2, e._intXCns, e._intYAndLeftCns);
            }
        });
        var et = function() {};
        n(et, {
            recreateForFirst: function(t, e) {
                Kt.eq("append", "reversed") ? (oe.setLast(M.REV_APPEND), this._recreate(t, e, Pe, "Rev")) : (oe.setLast(M.APPEND), 
                this._recreate(t, e, Se, "Def"));
            },
            _recreate: function(t, e, n, i) {
                me.reinitRanges(), o("recreateCrs", n)(), Kt.eq("grid", "vertical") ? ce.rmIntFromBottom() : ce.rmIntFromRight();
            }
        });
        var nt = function() {};
        n(nt, {
            roundCnPerCr: function(t, e) {
                t.origX1 = t.x1, t.origX2 = t.x2, t.origY1 = t.y1, t.origY2 = t.y2;
                var n = function(t) {
                    return ue.eq(e, t);
                };
                n(B.BOTTOM.LEFT) || n(B.RIGHT.TOP) ? (t.x1 = Math.floor(t.x1), t.y1 = Math.floor(t.y1)) : n(B.LEFT.TOP) || n(B.BOTTOM.RIGHT) ? (t.x2 = Math.ceil(t.x2), 
                t.y1 = Math.floor(t.y1)) : n(B.LEFT.BOTTOM) || n(B.TOP.RIGHT) ? (t.x2 = Math.ceil(t.x2), 
                t.y2 = Math.ceil(t.y2)) : (n(B.TOP.LEFT) || n(B.RIGHT.BOTTOM)) && (t.x1 = Math.floor(t.x1), 
                t.y2 = Math.ceil(t.y2));
            },
            unroundCnPerCr: function(t, e) {
                t.x1 = t.origX1, t.y1 = t.origY1, t.x2 = t.origX2, t.y2 = t.origY2;
            }
        });
        var it = function() {
            this._crs = null;
        };
        n(it, {
            attach: function(t) {
                this._crs = t;
            },
            getSelected: function() {
                return this._crs;
            },
            _selectOnlyMostSideCr: function(t, e, n) {
                for (var i = null, r = null, s = this._crs.length; s--; ) this._crs[s].side == t && (null == i || n(this._crs[s][e], r)) && (i = this._crs[s].itemGUID, 
                r = this._crs[s][e]);
                if (null != i) for (var s = this._crs.length; s--; ) this._crs[s].side == t && this._crs[s].itemGUID != i && this._crs.splice(s, 1);
            },
            _bgCond: function(t, e) {
                return t > e;
            },
            _smCond: function(t, e) {
                return e > t;
            },
            selectOnlyMostBottom: function(t) {
                this._selectOnlyMostSideCr(t, "y", this._bgCond);
            },
            selectOnlyMostTop: function(t) {
                this._selectOnlyMostSideCr(t, "y", this._smCond);
            },
            selectOnlyMostRight: function(t) {
                this._selectOnlyMostSideCr(t, "x", this._bgCond);
            },
            selectOnlyMostLeft: function(t) {
                this._selectOnlyMostSideCr(t, "x", this._smCond);
            },
            _selectOnly: function(t, e) {
                for (var n = 0; n < this._crs.length; n++) !ue.isInitial(this._crs[n]) && e(this._crs[n].itemGUID) && t != this._crs[n].side && (this._crs.splice(n, 1), 
                n--);
            },
            selectOnlyFromAppended: function(t) {
                this._selectOnly(t, function(t) {
                    return !ie.wasPrepended(t);
                });
            },
            selectOnlyFromPrepended: function(t) {
                this._selectOnly(t, function(t) {
                    return ie.wasPrepended(t);
                });
            }
        });
        var rt = function() {
            this._crs = null, this._newCrs = null;
        };
        n(rt, {
            attach: function(t) {
                this._crs = t, this._newCrs = [];
            },
            getNew: function() {
                return this._newCrs;
            },
            _createShifted: function(t, e, n) {
                this._newCrs.push({
                    type: n.type,
                    side: B.SHIFTED,
                    x: parseFloat(t),
                    y: parseFloat(e),
                    itemGUID: W["int"](n.itemGUID)
                });
            },
            shiftAll: function() {
                for (var t = [ [ B.LEFT.TOP, "LeftTop" ], [ B.LEFT.BOTTOM, "LeftBottom" ], [ B.BOTTOM.RIGHT, "BottomRight" ], [ B.BOTTOM.LEFT, "TopLeft" ], [ B.TOP.LEFT, "TopLeft" ], [ B.TOP.RIGHT, "BottomRight" ], [ B.RIGHT.BOTTOM, "RightBottom" ], [ B.RIGHT.TOP, "RightTop" ] ], e = 0; e < this._crs.length; e++) {
                    this._newCrs.push(this._crs[e]);
                    for (var n = 0; n < t.length; n++) if (ue.eq(this._crs[e], t[n][0])) {
                        this["_shift" + t[n][1]](this._crs[e]);
                        break;
                    }
                }
            },
            _shiftLeftTop: function(t) {
                var e = le.mostBottomFromTopOrTopLeft(t);
                null != e ? e.y2 + 1 != t.y && this._createShifted(t.x, e.y2 + 1, t) : 0 != t.y && this._createShifted(t.x, 0, t);
            },
            _shiftLeftBottom: function(t) {
                var e = le.mostTopFromBottomOrBottomLeft(t);
                if (null != e) e.y1 - 1 != t.y && this._createShifted(t.x, e.y1 - 1, t); else {
                    var n = ve.getMaxY();
                    0 != n && n - 1 != t.y && this._createShifted(t.x, n - 1, t);
                }
            },
            _shiftBottomRight: function(t) {
                var e = le.mostLeftFromRight(t);
                if (null != e) e.x1 - 1 != t.x && this._createShifted(e.x1 - 1, t.y, t); else {
                    if (Kt.eq("grid", "horizontal") && t.type == B.PREPEND.DEF) return;
                    t.x != Jt.x2() && this._createShifted(Jt.x2(), t.y, t);
                }
            },
            _shiftTopLeft: function(t) {
                var e = le.mostRightFromLeft(t);
                null != e ? e.x2 + 1 != t.x && this._createShifted(e.x2 + 1, t.y, t) : 0 != t.x && this._createShifted(0, t.y, t);
            },
            _shiftRightBottom: function(t) {
                var e = le.mostTopFromBottomOrBottomRight(t);
                if (null != e) e.y1 - 1 != t.y && this._createShifted(t.x, e.y1 - 1, t); else {
                    var n = ve.getMaxY();
                    0 != n && n - 1 != t.y && this._createShifted(t.x, n - 1, t);
                }
            },
            _shiftRightTop: function(t) {
                var e = le.mostBottomFromTopOrTopRight(t);
                null != e ? e.y2 + 1 != t.y && this._createShifted(t.x, e.y2 + 1, t) : 0 != t.y && this._createShifted(t.x, 0, t);
            },
            _shiftAllTo: function(t, e, n) {
                this._newCrs = this._crs;
                for (var i = 0; i < this._newCrs.length; i++) this._newCrs[i].side == t && (this._newCrs[i][e] = n);
            },
            shiftAllToRight: function(t) {
                this._shiftAllTo(t, "x", Jt.x2());
            },
            shiftAllToLeft: function(t) {
                this._shiftAllTo(t, "x", 0);
            },
            shiftAllToTop: function(t) {
                this._shiftAllTo(t, "y", 0);
            },
            shiftAllToBottom: function(t) {
                this._shiftAllTo(t, "y", Jt.y2());
            }
        });
        var st = function() {
            this._crs = null;
        };
        n(st, {
            attach: function(t) {
                this._crs = t;
            },
            getSorted: function() {
                return this._crs;
            },
            _sortForVG: function(t, e) {
                this._crs.sort(function(n, i) {
                    return W.areRoundedOrCeiledEq(n.y, i.y) ? t ? e ? n.x > i.x ? 1 : -1 : n.x < i.x ? 1 : -1 : e ? n.x > i.x ? 1 : -1 : n.x < i.x ? 1 : -1 : t ? n.y < i.y ? 1 : -1 : n.y < i.y ? -1 : 1;
                });
            },
            _sortForHG: function(t, e) {
                this._crs.sort(function(n, i) {
                    return W.areRoundedOrCeiledEq(n.x, i.x) ? t ? e ? n.y < i.y ? 1 : -1 : n.y > i.y ? 1 : -1 : e ? n.y < i.y ? -1 : 1 : n.y > i.y ? -1 : 1 : t ? n.x < i.x ? 1 : -1 : n.x < i.x ? -1 : 1;
                });
            },
            sortForPrepend: function() {
                var t = "default" == Kt.get("prepend");
                Kt.eq("grid", "vertical") ? this._sortForVG(!0, t) : this._sortForHG(!0, t);
            },
            sortForAppend: function() {
                var t = "default" == Kt.get("append");
                Kt.eq("grid", "vertical") ? this._sortForVG(!1, t) : this._sortForHG(!1, t);
            }
        });
        var ot = function() {
            this._collectFn = null, this._createCollectFn(), i(this, {
                collect: this.collect,
                collectNew: this.collectDisconnected,
                collectConnected: this.collectConnected
            });
        };
        n(ot, {
            _createCollectFn: function() {
                var t = this;
                this._collectFn = function(e) {
                    if (Kt.notEq("class", !1)) var n = "." + Kt.get("class"); else if (Kt.notEq("data", !1)) var n = "[" + Kt.get("data") + "]"; else var n = Kt.get("query");
                    return t.filterCollectable(W.find.byQuery(e, n));
                };
            },
            filterCollectable: function(t) {
                return W.filter(t, function(t) {
                    return !this.isNotCollectable(t);
                }, this);
            },
            markAsNotCollectable: function(t) {
                W.set(t, w.COLL.NOT_COLLECTABLE_DATA, "r");
            },
            unmarkAsNotCollectable: function(t) {
                W.rmIfHas(t, w.COLL.NOT_COLLECTABLE_DATA);
            },
            isNotCollectable: function(t) {
                return W.has(t, w.COLL.NOT_COLLECTABLE_DATA);
            },
            collect: function() {
                return this._collectFn(Jt.get());
            },
            collectByQuery: function(t) {
                return this.filterCollectable(W.find.byQuery(Jt.get(), t));
            },
            collectConnected: function() {
                return jt.filterConnected(this._collectFn(Jt.get()));
            },
            collectDisconnected: function() {
                return jt.filterNotConnected(this._collectFn(Jt.get()));
            },
            filter: function(t) {
                for (var e = Kt.getApi("filter"), n = 0; n < e.length; n++) {
                    for (var i = [], r = 0; r < t.length; r++) e[n](t[r]) && i.push(t[r]);
                    t = i;
                }
                return t;
            },
            sort: function(t) {
                return this.saveOriginalOrder(t), t.sort(function(t, e) {
                    return Kt.getApi("sort")(t, e, Ue, W);
                }), this.flushOriginalOrder(t), t;
            },
            saveOriginalOrder: function(t) {
                for (var e = 0; e < t.length; e++) W.set(t[e], w.COLL.SORT_INDEX_DATA, e + 1);
            },
            flushOriginalOrder: function(t) {
                for (var e = 0; e < t.length; e++) W.rm(t[e], w.COLL.SORT_INDEX_DATA);
            }
        });
        var at = function() {
            this._max = 9999, this._min = 1e4, this._firstPrepended = null;
        };
        n(at, {
            reinit: function() {
                this._max = 9999, this._min = 1e4;
            },
            reinitMax: function(t) {
                this._max = "undefined" == typeof t || null == t ? 9999 : t;
            },
            get: function(t) {
                return W["int"](W.get(t, w.GUID_DATA));
            },
            set: function(t, e) {
                W.set(t, w.GUID_DATA, e);
            },
            rm: function(t) {
                W.rm(t, w.GUID_DATA);
            },
            markForAppend: function(t) {
                return W.set(t, w.GUID_DATA, ++this._max), this._max;
            },
            markForPrepend: function(t) {
                return W.set(t, w.GUID_DATA, --this._min), this._min;
            },
            markIfFirstPrepended: function(t) {
                null == this._firstPrepended && (this._firstPrepended = W["int"](W.get(t, w.GUID_DATA)));
            },
            unmarkFirstPrepended: function() {
                this._firstPrepended = null;
            },
            wasPrepended: function(t) {
                return null == this._firstPrepended ? !1 : W["int"](t) <= this._firstPrepended;
            }
        });
        var ut = function() {};
        n(ut, {
            markAsConnected: function(t) {
                W.set(t, w.ITEM.IS_CONNECTED_DATA, "y");
            },
            unmarkAsConnected: function(t) {
                W.rm(t, w.ITEM.IS_CONNECTED_DATA);
            },
            isConnected: function(t) {
                return W.has(t, w.ITEM.IS_CONNECTED_DATA);
            },
            filterConnected: function(t) {
                return W.filter(t, function(t) {
                    return this.isConnected(t);
                }, this);
            },
            filterNotConnected: function(t) {
                return W.filter(t, function(t) {
                    return !this.isConnected(t);
                }, this);
            },
            toNative: function(t) {
                var e = [];
                if (W.isJquery(t)) for (var n = 0; n < t.length; n++) e.push(t.get(n)); else if (W.isNative(t)) e.push(t); else if (W.isArray(t)) for (var n = 0; n < t.length; n++) e.push(W.isJquery(t[n]) ? t[n].get(0) : t[n]), 
                W.isNative(e[e.length - 1]) || r(V.NOT_NATIVE); else r(V.NOT_NATIVE);
                return e;
            }
        });
        var ct = function() {
            this._eventsData = [];
            var t = function(t) {
                return function(e, n) {
                    var i = this.changeCss(t, e, n);
                    return re.updateAs(), be.fromFirstSortedCn(i), Qt;
                };
            };
            i(this, {
                toggleCss: t("toggle"),
                addCss: t("add"),
                rmCss: t("rm")
            });
        };
        n(ct, {
            changeCss: function(t, e, n) {
                for (var e = jt.filterConnected(jt.toNative(e)), n = W.isArray(n) ? n : [ n ], i = 0; i < e.length; i++) {
                    for (var r = [], s = [], o = function(t, e) {
                        r.push(e), W.css.hasClass(t, e) || W.css.addClass(t, e);
                    }, a = function(t, e) {
                        s.push(e), W.css.hasClass(t, e) && W.css.removeClass(t, e);
                    }, u = 0; u < n.length; u++) "toggle" == t ? W.css.hasClass(e[i], n[u]) ? a(e[i], n[u]) : o(e[i], n[u]) : "add" == t ? o(e[i], n[u]) : "rm" == t && a(e[i], n[u]);
                    this._saveEventData(e[i], r, s);
                }
                return e;
            },
            _saveEventData: function(t, e, n) {
                for (var i = ie.get(t), r = null, s = 0; s < this._eventsData.length; s++) if (this._eventsData[s].itemGUID == i) {
                    r = this._eventsData[s];
                    break;
                }
                null == r && (r = {}, this._eventsData.push(r)), r.itemGUID = i, r.added = e, r.removed = n;
            },
            emitEvents: function(t) {
                if (0 != this._eventsData.length) for (var e = 0; e < t.length; e++) for (var n = 0; n < this._eventsData.length; n++) if (W["int"](t[e].itemGUID) == this._eventsData[n].itemGUID) {
                    var i = this._eventsData[n];
                    !function(t, e, n) {
                        setTimeout(function() {
                            $t.emit(Y.CSS_CHANGE, t, e, n);
                        }, Kt.get("coordsChangeTime"));
                    }(t[e].item, i.added, i.removed), this._eventsData.splice(n, 1);
                    break;
                }
            }
        });
        var lt = function() {
            this._owCache = [], this._ohCache = [], this._nextOwGUID = 0, this._nextOhGUID = 0, 
            this._isActive = !1, this._owAntialias = 0, this._ohAntialias = 0;
        };
        n(lt, {
            setOuterWidthAntialiasValue: function(t) {
                this._owAntialias = t;
            },
            setOuterHeightAntialiasValue: function(t) {
                this._ohAntialias = t;
            },
            _markAsCachedPerOw: function(t, e) {
                W.set(t, [ [ w.SRM.CACHED_PER_OW_DATA, w.SRM.EMPTY_DATA ], [ w.SRM.CACHED_PER_OW_ITEM_GUID_DATA, e ] ]);
            },
            _markAsCachedPerOh: function(t, e) {
                W.set(t, [ [ w.SRM.CACHED_PER_OH_DATA, w.SRM.EMPTY_DATA ], [ w.SRM.CACHED_PER_OH_ITEM_GUID_DATA, e ] ]);
            },
            unmarkAsCached: function(t) {
                W.rmIfHas(t, [ w.SRM.CACHED_PER_OW_DATA, w.SRM.CACHED_PER_OW_ITEM_GUID_DATA, w.SRM.CACHED_PER_OH_DATA, w.SRM.CACHED_PER_OH_ITEM_GUID_DATA ]);
            },
            _getCachedItemEntry: function(t, e, n) {
                for (var i = 0; i < e.length; i++) if (parseInt(e[i].GUID) == parseInt(n)) return e[i];
            },
            _getOwCachedItemEntry: function(t) {
                return this._getCachedItemEntry(t, this._owCache, W.get(t, w.SRM.CACHED_PER_OW_ITEM_GUID_DATA));
            },
            _getOhCachedItemEntry: function(t) {
                return this._getCachedItemEntry(t, this._ohCache, W.get(t, w.SRM.CACHED_PER_OH_ITEM_GUID_DATA));
            },
            _isCallCached: function(t, e, n, i) {
                if (!W.has(t, n)) return !1;
                var r = i(t);
                return e ? null != r.cachedCalls.withMargins : null != r.cachedCalls.withoutMargins;
            },
            _isOwCallCached: function(t, e) {
                var n = this;
                return this._isCallCached(t, e, w.SRM.CACHED_PER_OW_DATA, function(t) {
                    return n._getOwCachedItemEntry(t);
                });
            },
            _isOhCallCached: function(t, e) {
                var n = this;
                return this._isCallCached(t, e, w.SRM.CACHED_PER_OH_DATA, function(t) {
                    return n._getOhCachedItemEntry(t);
                });
            },
            startCachingTransaction: function() {
                this._isActive = !0;
            },
            stopCachingTransaction: function() {
                this._isActive = !1;
                for (var t = 0; t < this._owCache.length; t++) this.unmarkAsCached(this._owCache[t].item);
                for (var t = 0; t < this._ohCache.length; t++) this.unmarkAsCached(this._ohCache[t].item);
                this._owCache = [], this._ohCache = [], this._nextOwGUID = 0, this._nextOhGUID = 0;
            },
            _callRealOuter: function(t, e, n, i, r, s, o) {
                var a = this, o = o || !1, u = q.recalcPtWidthFn, c = q.recalcPtHeightFn, l = function(t) {
                    return function(e, n, i, r) {
                        return a[t](e, n, !0, i, r, !0);
                    };
                };
                q.recalcPtWidthFn = l("outerWidth"), q.recalcPtHeightFn = l("outerHeight"), s || q.clearRecursiveSubcallsData();
                var h = o ? "outerHeight" : "outerWidth", f = q[h](t, e, i, r);
                return n || (f -= o ? this._ohAntialias : this._owAntialias), q.recalcPtWidthFn = u, 
                q.recalcPtHeightFn = c, f;
            },
            _callRealOw: function(t, e, n, i, r, s) {
                return this._callRealOuter(t, e, n, i, r, s);
            },
            _callRealOh: function(t, e, n, i, r, s) {
                return this._callRealOuter(t, e, n, i, r, s, !0);
            },
            _outer: function(t, e, n, i, r, s, o) {
                var a = arguments, o = o || !1;
                if (a[2] = a[2] || !1, a[5] = a[5] || !1, !this._isActive) return o ? this._callRealOh.apply(this, a) : this._callRealOw.apply(this, a);
                var u = null;
                if (!o && this._isOwCallCached(t, e) ? u = this._getOwCachedItemEntry(t) : o && this._isOhCallCached(t, e) && (u = this._getOhCachedItemEntry(t)), 
                null != u) {
                    var c = u.cachedCalls;
                    return e ? c.withMargins : c.withoutMargins;
                }
                var l = o ? this._callRealOh.apply(this, a) : this._callRealOw.apply(this, a);
                if (!o && W.has(t, w.SRM.CACHED_PER_OW_DATA) || o && W.has(t, w.SRM.CACHED_PER_OH_DATA)) {
                    var u = o ? this._getOhCachedItemEntry(t) : this._getOwCachedItemEntry(t);
                    e ? u.cachedCalls.withMargins = l : u.cachedCalls.withoutMargins = l;
                } else {
                    o ? this._markAsCachedPerOh(t, ++this._nextOhGUID) : this._markAsCachedPerOw(t, ++this._nextOwGUID);
                    var h = {
                        withMargins: e ? l : null,
                        withoutMargins: e ? null : l
                    }, f = o ? this._ohCache : this._owCache;
                    f.push({
                        GUID: o ? this._nextOhGUID : this._nextOwGUID,
                        item: t,
                        cachedCalls: h
                    });
                }
                return l;
            },
            outerWidth: function(t, e, n, i, r, s) {
                return this._outer(t, e, n, i, r, s);
            },
            outerHeight: function(t, e, n, i, r, s) {
                return this._outer(t, e, n, i, r, s, !0);
            },
            positionTop: function(t) {
                return q.positionTop(t);
            },
            positionLeft: function(t) {
                return q.positionLeft(t);
            },
            _offset: function(t, e, n, i) {
                var e = e || !1;
                if (e) var r = this[n](t), s = this[n](t, !0), o = s - r, a = o / 2, u = q[i](t) - a; else var u = q[i](t);
                return u;
            },
            offsetLeft: function(t, e) {
                return this._offset(t, e, "outerWidth", "offsetLeft");
            },
            offsetTop: function(t, e) {
                return this._offset(t, e, "outerHeight", "offsetTop");
            },
            viewportWidth: function() {
                return document.documentElement.clientWidth;
            },
            viewportHeight: function() {
                return document.documentElement.clientHeight;
            },
            viewportScrollLeft: function() {
                return window.pageXOffset || document.documentElement.scrollLeft;
            },
            viewportScrollTop: function() {
                return window.pageYOffset || document.documentElement.scrollTop;
            },
            viewportDocumentCoords: function() {
                return {
                    x1: this.viewportScrollLeft(),
                    x2: this.viewportScrollLeft() + this.viewportWidth() - 1,
                    y1: this.viewportScrollTop(),
                    y2: this.viewportScrollTop() + this.viewportHeight() - 1
                };
            },
            itemSizes: function(t) {
                return {
                    width: this.outerWidth(t, !0),
                    height: this.outerHeight(t, !0)
                };
            },
            copyComputedStyle: function(t, e) {
                var n = this, i = function(t, e) {
                    q.cloneComputedStyle(t, e);
                    for (var r = 0; r < t.childNodes.length; r++) if (1 == t.childNodes[r].nodeType) {
                        i(t.childNodes[r], e.childNodes[r]);
                        var s = q.getComputedCSS(t.childNodes[r]);
                        /.*px.*/.test(s.left) && (e.childNodes[r].style.left = n.positionLeft(t.childNodes[r]) + "px"), 
                        /.*px.*/.test(s.top) && (e.childNodes[r].style.top = n.positionTop(t.childNodes[r]) + "px");
                        var o = q.getUncomputedCSS(t.childNodes[r]);
                        e.childNodes[r].style.width = n.outerWidth(t.childNodes[r]) + "px", 0 != W["int"](o.height) && (e.childNodes[r].style.height = n.outerHeight(t.childNodes[r]) + "px");
                    }
                };
                i(t, e);
            }
        });
        var ht = function() {
            i(this, {
                disconnect: function(t) {
                    var e = this;
                    return t = jt.filterConnected(jt.toNative(t)), setTimeout(function() {
                        be.sync(), e.disconnect(t, w.DISC_TYPES.HARD), be.all();
                    }, w.REFLOW_FIX_DELAY), Qt;
                },
                pop: function() {
                    var t = Qt.first();
                    return null != t && Qt.disconnect(t), t;
                },
                shift: function() {
                    var t = Qt.last();
                    return null != t && Qt.disconnect(t), t;
                }
            });
        };
        n(ht, {
            disconnect: function(t, e) {
                var e = e || w.DISC_TYPES.SOFT, t = jt.filterConnected(jt.toNative(t));
                if (e == w.DISC_TYPES.HARD) for (var n = 0; n < t.length; n++) ne.markAsNotCollectable(t[n]);
                for (var i = this._findCnsToDisc(t), n = 0; n < i.length; n++) me.rm(i[n]), ie.rm(i[n].item);
                0 == me.count() && this._recreateCrs();
                for (var n = 0; n < i.length; n++) jt.unmarkAsConnected(i[n].item);
                me.reinitRanges(), this._scheduleRender(i);
            },
            _findCnsToDisc: function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(ve.find(t[n]));
                return ye.sortForReappend(e);
            },
            _recreateCrs: function() {
                ue.flush(), Kt.eq("append", "default") ? Se.createInitialCr() : Pe.createInitialCr();
            },
            _scheduleRender: function(t) {
                var e = He.itemsToBatches(t, w.DISC_BATCH, !0);
                xe.markAsSchToHide(t);
                for (var n = 0; n < e.length; n++) !function(t, e) {
                    setTimeout(function() {
                        xe.hide(t);
                    }, w.DISC_DELAY * e);
                }(e[n], n);
            }
        });
        var ft = function() {};
        n(ft, {
            filter: function() {
                var t = ne.collect(), e = ne.collectConnected(), n = ne.sort(ne.filter(t)), i = this._findConnItemsToHide(e);
                we.disconnect(i), this._recreateGUIDS(n), this._recreateCns(n);
            },
            _findConnItemsToHide: function(t) {
                return W.filter(t, function(t) {
                    return 0 == ne.filter([ t ]).length;
                }, this);
            },
            _recreateGUIDS: function(t) {
                ie.reinit();
                for (var e = 0; e < t.length; e++) ie.markForAppend(t[e]);
            },
            _recreateCns: function(t) {
                var e = me.get();
                if (e.splice(0, e.length), Kt.eq("grid", "vertical")) var n = {
                    c1: "y",
                    c2: "x"
                }; else var n = {
                    c1: "x",
                    c2: "y"
                };
                for (var i = 0, r = 0; r < t.length; r++) {
                    var s = {};
                    s[n.c1 + "1"] = i, s[n.c1 + "2"] = i, s[n.c2 + "1"] = 0, s[n.c2 + "2"] = 0, me.add(t[r], s), 
                    i++;
                }
            }
        });
        var dt = function() {};
        n(dt, {
            resort: function() {
                var t = ne.sort(ne.collectConnected());
                Kt.eq("sortDispersion", !0) && this._resortOnSD(t), ie.reinit();
                for (var e = 0; e < t.length; e++) ie.markForAppend(t[e]);
            },
            _resortOnSD: function(t) {
                if (Kt.eq("grid", "vertical")) var e = {
                    c1: "y",
                    c2: "x"
                }; else var e = {
                    c1: "x",
                    c2: "y"
                };
                for (var n = 0, i = 0; i < t.length; i++) {
                    var r = ve.find(t[i]);
                    r[e.c1 + "1"] = n, r[e.c1 + "2"] = n, r[e.c2 + "1"] = 0, r[e.c2 + "2"] = 0, n++;
                }
            }
        });
        var gt = function() {
            this._onResize = null, this._bindEvents(), i(this, {
                destroy: function() {
                    return this._unbindEvents(), Qt;
                },
                set: function(t, e) {
                    return Kt.set(t, e), Qt;
                },
                setApi: function(t, e) {
                    return Kt.setApi(t, e), Qt;
                },
                addApi: function(t, e, n) {
                    return Kt.addApi(t, e, n), Qt;
                },
                get: function(t) {
                    return Kt.get(t);
                },
                toggle: function(t) {
                    return Qt.setApi("toggle", t);
                },
                sort: function(t) {
                    return Qt.setApi("sort", t);
                },
                coordsChanger: function(t) {
                    return Qt.setApi("coordsChanger", t);
                },
                drag: function(t) {
                    return Qt.setApi("drag", t);
                },
                rsort: function(t) {
                    return Qt.setApi("rsort", t), be.all(), Qt;
                },
                resort: function() {
                    return be.sync(), Ne.resort(), be.all(), Qt;
                },
                filter: function(t) {
                    return be.sync(), Qt.setApi("filter", t), Le.filter(), be.all(), Qt;
                },
                reposition: function() {
                    return re.updateAs(), be.all(), Qt;
                },
                prepend: function(t, e, n) {
                    var i = o("eq", Kt);
                    if (i("loadImages", !0)) {
                        var r = i("prepend", "mirrored") ? M.INS_BEFORE : M.PREPEND;
                        ae.schedule(jt.toNative(t), r, {
                            batchSize: e,
                            batchDelay: n,
                            beforeItem: null
                        });
                    } else i("prepend", "mirrored") ? Qt.insertBefore(t, null, e, n) : this.exec(M.PREPEND, t, e, n);
                    return Qt;
                },
                append: function(t, e, n) {
                    return Kt.eq("loadImages", !0) ? ae.schedule(jt.toNative(t), M.APPEND, {
                        batchSize: e,
                        batchDelay: n
                    }) : this.exec(M.APPEND, t, e, n), Qt;
                },
                silentAppend: function(t, e, n) {
                    return Kt.eq("loadImages", !0) ? ae.schedule(jt.toNative(t), M.SIL_APPEND, {
                        batchSize: e,
                        batchDelay: n
                    }) : this.execSilentAppend(t, e, n), Qt;
                },
                silentRender: function(t, e, n) {
                    return Re.exec(t, e, n), Qt;
                },
                getSilent: function(t) {
                    return Re.getScheduled(t);
                },
                insertBefore: function(t, e, n, i) {
                    return Kt.eq("loadImages", !0) ? ae.schedule(jt.toNative(t), M.INS_BEFORE, {
                        batchSize: n,
                        batchDelay: i,
                        beforeItem: e
                    }) : this.exec(M.INS_BEFORE, t, n, i, e), Qt;
                },
                insertAfter: function(t, e, n, i) {
                    return Kt.eq("loadImages", !0) ? ae.schedule(jt.toNative(t), M.INS_AFTER, {
                        batchSize: n,
                        batchDelay: i,
                        afterItem: e
                    }) : this.exec(M.INS_AFTER, t, n, i, e), Qt;
                },
                appendNew: function(t, e) {
                    return Qt.append(Qt.collectNew(), t, e), Qt;
                },
                prependNew: function(t, e) {
                    return Qt.prepend(Qt.collectNew(), t, e), Qt;
                },
                rotate: function(t, e, n, i) {
                    Qt.toggle(e);
                    var t = jt.toNative(t);
                    return "undefined" == typeof n ? (xe.rotate(t), Qt) : (He.scheduleFnExec(t, n, i, function(t) {
                        xe.rotate(t);
                    }), Qt);
                }
            });
        };
        n(gt, {
            _bindEvents: function() {
                var t = o("get", Kt), e = null;
                this._onResize = function() {
                    return null == t("vpResizeDelay") ? void Qt.reposition() : (clearTimeout(e), void (e = setTimeout(function() {
                        Qt.reposition();
                    }, t("vpResizeDelay"))));
                }, X.add(window, "resize", this._onResize);
            },
            _unbindEvents: function() {
                X.rm(window, "resize", this._onResize), Qt.isDragifierOn() && Qt.dragifierOff();
            },
            exec: function(t, e, n, i, r) {
                setTimeout(function() {
                    He.schedule(t, e, n, i, r);
                }, w.REFLOW_FIX_DELAY);
            },
            execSilentAppend: function(t, e, n) {
                Re.schedule(jt.toNative(t)), this.exec(M.APPEND, t, e, n);
            }
        });
        var _t = function() {
            this._callbacks = {}, this._insertEvTimeout = null, this._init();
        };
        n(_t, {
            _init: function() {
                var t = this, e = function(e, n, i) {
                    for (var r in e) {
                        var s = e[r];
                        this._callbacks[s] = n ? null : [], function(e) {
                            i["on" + e] = function(i) {
                                n ? t._callbacks[e] = i : t._callbacks[e].push(i);
                            };
                        }(s);
                    }
                };
                e.call(t, Y, !1, Qt), e.call(t, U, !0, t);
            },
            _getArgs: function(t, e, n) {
                W.hasVal(t, e) || r("no " + e + " to emit");
                var i = [];
                return Array.prototype.push.apply(i, n), i.shift(), i;
            },
            emit: function(t) {
                var e = this._getArgs(Y, t, arguments), n = this;
                if (t == Y.INSERT) return void this._emitInsertEvent(e[0]);
                for (var i = 0; i < this._callbacks[t].length; i++) t == Y.REPOSITION || t == Y.REPOSITION_END ? !function(t, e) {
                    setTimeout(function() {
                        t.apply(n, e);
                    }, 0);
                }(this._callbacks[t][i], e) : this._callbacks[t][i].apply(this, e);
                if (t == Y.HIDE && ne.isNotCollectable(e[0])) for (var i = 0; i < this._callbacks[Y.DISCONNECT].length; i++) this._callbacks[Y.DISCONNECT][i](e[0]);
            },
            _emitInsertEvent: function(t) {
                var e = function(t) {
                    for (var e = 0; e < this._callbacks[Y.INSERT].length; e++) this._callbacks[Y.INSERT][e](t);
                };
                null != this._insertEvTimeout && (clearTimeout(this._insertEvTimeout), this._insertEvTimeout = null, 
                t = t.concat(this._insertEvItems));
                var n = this;
                this._insertEvItems = t, this._insertEvTimeout = setTimeout(function() {
                    n._insertEvTimeout = null, e.call(n, t);
                }, 20);
            },
            emitInternal: function(t) {
                var e = this._getArgs(U, t, arguments);
                null != this._callbacks[t] && (this._callbacks[t].apply(this, e), t == U.REPOSITION_END_FOR_DRAG && (this._callbacks[t] = null));
            },
            rmInternal: function(t) {
                this._getArgs(U, t, arguments), this._callbacks[t] = null;
            }
        });
        var pt = function() {
            var t = this;
            i(this, {
                first: function() {
                    return t.get("first");
                },
                last: function() {
                    return t.get("last");
                },
                next: function(e) {
                    return t.get("next", e);
                },
                prev: function(e) {
                    return t.get("prev", e);
                },
                all: function() {
                    return t.get("all");
                }
            });
        };
        n(pt, {
            get: function(t, e) {
                var n = me.get();
                if (0 == n.length) return "all" == t ? [] : null;
                if (n = ye.sortForReappend(n), "first" == t) return n[0].item;
                if ("last" == t) return n[n.length - 1].item;
                var i = function(t, e) {
                    return ie.get(t) == ie.get(jt.toNative(e)[0]);
                };
                if ("next" == t) {
                    for (var r = 0; r < n.length; r++) if (i(n[r].item, e)) return r + 1 > n.length - 1 ? null : n[r + 1].item;
                } else if ("prev" == t) {
                    for (var r = n.length - 1; r >= 0; r--) if (i(n[r].item, e)) return 0 > r - 1 ? null : n[r - 1].item;
                } else if ("all" == t) {
                    for (var s = [], r = 0; r < n.length; r++) s.push(n[r].item);
                    return s;
                }
                return null;
            }
        });
        var mt = function() {
            this._last = null;
        };
        n(mt, {
            isInitial: function(t) {
                return null == this._last ? (this._last = t, !0) : !1;
            },
            isSameAsPrev: function(t) {
                return this._last != t ? (this._last = t, !1) : !0;
            },
            setLast: function(t) {
                this._last = t;
            }
        });
        var vt = function(t, e, n, i, r) {
            this._op = e, this._crInitialCr = n, this._addItemCrs = i, this._cantFitCond = r;
            t.recreateCrs = o("_recreateCrs", this), t.createInitialCr = o("_createInitialCr", this);
        };
        n(vt, {
            initCrs: function(t, e, n) {
                return oe.isInitial(this._op) ? void this._createInitialCr() : void (oe.isSameAsPrev(this._op) || (this._recreateCrs(), 
                ce["rmIntFrom" + t](), ce["rmAllToo" + e + "FromMost" + n]()));
            },
            _createInitialCr: function() {
                this._crInitialCr(ue, Jt);
            },
            _recreateCrs: function(t) {
                var t = t || !1;
                t || ue.flush();
                for (var e = me.get(), n = 0; n < e.length; n++) this._addItemCrs.call(this, e[n], e[n].itemGUID);
                0 == ue.count() && this._createInitialCr();
            },
            cleanCrs: function(t, e, n) {
                ce["rmAllToo" + e + "FromMost" + n](), ce["rmIntFrom" + t]();
            },
            filterCrs: function(t, e, n, i, r) {
                var s = ue.getClone();
                return de.attach(s), de["selectOnlyFrom" + t](e), s = de.getSelected(), Kt.eq("intersections", !0) ? (ge.attach(s), 
                ge.shiftAll(), s = ge.getNew()) : (de.attach(s), de["selectOnlyMost" + n](e), s = de.getSelected(), 
                ge.attach(s), ge["shiftAllTo" + i](e), s = ge.getNew()), _e.attach(s), _e["sortFor" + r](), 
                _e.getSorted();
            },
            findCnCoords: function(t, e, n, i, s, o, a) {
                for (var u = null, c = 0; c < e.length; c++) {
                    var l = pe.find(this._op, t, e[c]);
                    if (!this._cantFitCond.call(this, l)) {
                        var h = Ce["findAllMaybeIntOn" + n](e[c]);
                        if (!Ce.isIntersectingAny(h, l)) {
                            u = l;
                            var f = me["getAll" + i](l[s]);
                            if (!ve["isAnyGUID" + o + "Than"](f, t) && (Kt.eq("intersections", !1) && me["isIntMoreThanOneCn" + a](u) && (u = null), 
                            null != u)) break;
                        }
                    }
                }
                return null == u && r(V.TOO_BIG_ITEM), u;
            },
            createCn: function(t, e, n) {
                var i = me.add(t, e);
                return Kt.eq("intersections", !1) && (Kt.eq("grid", "vertical") ? me.expandYAllRowCnsToMostTall(i) : me.expandXAllColCnsToMostWide(i)), 
                this._addItemCrs.call(this, i, ie.get(t)), i;
            },
            render: function(t, e) {
                if (Kt.eq("intersections", !0)) xe.show(e); else {
                    if (Kt.eq("grid", "vertical")) var n = me.getLastRowYExpandedCns(); else var n = me.getLastColXExpandedCns();
                    for (var i = 0; i < n.length; i++) n[i].itemGUID == e.itemGUID && (n.splice(i, 1), 
                    i--);
                    xe.renderAfterDelay(n), xe.show(e);
                }
            },
            fixAllXYPosAfterPrepend: function(t, e) {
                if (Kt.eq("grid", "vertical")) var n = me.fixAllYPosAfterPrepend(t, e); else var n = me.fixAllXPosAfterPrepend(t, e);
                return n;
            },
            renderAfterPrependFix: function(t) {
                xe.render(me.get(), [ t ]);
            }
        });
        var Ct = function() {
            this._fixRoundingVal = 1;
        };
        n(Ct, {
            fixLowRounding: function(t) {
                return t - this._fixRoundingVal;
            },
            fixHighRounding: function(t) {
                return t + this._fixRoundingVal;
            }
        });
        var Tt = function() {
            this._grid = null, this._markingFn = null, this._resizeTimeout = null, this._createMarkingFn(), 
            this._toNative(t), this._adjustCSS(), i(this, {
                grid: this.get,
                gridWidth: this.width,
                gridHeight: this.height
            });
        };
        n(Tt, {
            _createMarkingFn: function() {
                this._markingFn = function(t) {
                    Kt.notEq("class", !1) ? W.css.hasClass(t, Kt.get("class")) || W.css.addClass(t, Kt.get("class")) : Kt.notEq("data", !1) && W.set(t, Kt.get("data"), "gi");
                };
            },
            _toNative: function(t) {
                W.isJquery(t) ? this._grid = t.get(0) : W.isNative(t) ? this._grid = t : W.isArray(t) && W.isNative(t[0]) ? this._grid = t[0] : r(V.GRID_NOT_NATIVE);
            },
            _adjustCSS: function() {
                var t = q.getComputedCSS(this._grid);
                "relative" != t.position && "absolute" != t.position && W.css.set(this._grid, {
                    position: "relative"
                });
            },
            get: function() {
                return this._grid;
            },
            x2: function() {
                return Zt.outerWidth(this._grid, !1, !0) - 1;
            },
            y2: function() {
                return Zt.outerHeight(this._grid, !1, !0) - 1;
            },
            width: function() {
                return Math.round(this.x2() + 1);
            },
            height: function() {
                return Math.round(this.y2() + 1);
            },
            mark: function(t) {
                for (var t = jt.toNative(t), e = 0; e < t.length; e++) this._markingFn(t[e]);
                return t;
            },
            add: function(t) {
                for (var t = this.mark(t), e = 0; e < t.length; e++) W.isChildOf(t[e], this._grid) || this._grid.appendChild(t[e]);
            },
            ensureCanFit: function(t) {
                for (var e = this, n = function(t, n) {
                    var i = Math.round(Zt["outer" + n](t, !0)), s = Math.round(Zt["outer" + n](e._grid, !1, !0));
                    i > s && r("Item " + n + "(" + i + "px) > Grid " + n + "(" + s + "px).");
                }, i = 0; i < t.length; i++) n(t[i], Kt.eq("grid", "vertical") ? "Width" : "Height");
            },
            scheduleResize: function() {
                var t = this;
                clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(function() {
                    return Be.isEmpty() ? void (Kt.eq("grid", "vertical") ? t._resize.call(t, "y2", "height", function() {
                        return t.y2();
                    }) : t._resize.call(t, "x2", "width", function() {
                        return t.x2();
                    })) : void t.scheduleResize();
                }, Kt.get("gridResizeDelay"));
            },
            _resize: function(t, e, n) {
                var i = me.get();
                if (i.length > 0) {
                    for (var r = i[0][t], s = 1; s < i.length; s++) i[s][t] > r && (r = i[s][t]);
                    r += 1;
                } else var r = 0;
                var o = {};
                o[e] = r + "px", (Kt.eq("gridResize", "fit") || Kt.eq("gridResize", "expand") && n() < r) && W.css.set(this._grid, o), 
                $t.emit(Y.GRID_RESIZE, this._grid);
            }
        });
        var yt = function() {};
        n(yt, {
            exec: function(t) {
                var e = this;
                Ye.exec(t, function(t) {
                    e._append.call(e, t);
                });
            },
            _append: function(t) {
                ie.markForAppend(t), Kt.eq("append", "default") ? Se.position(t) : Pe.position(t);
            },
            execInsBefore: function(t, e) {
                var n = this;
                Ye.execInsertBA(t, e, function(t) {
                    n.exec.call(n, t);
                }, function() {
                    return 0;
                }, function(t, e) {
                    return t.splice(e, t.length - e);
                }, -1, function(t) {
                    be.from(t[0]);
                });
            },
            execInsAfter: function(t, e) {
                var n = this;
                Ye.execInsertBA(t, e, function(t) {
                    n.exec.call(n, t);
                }, function(t) {
                    return t.length - 1;
                }, function(t, e) {
                    return t.splice(e + 1, t.length - e - 1);
                }, 1, function(t) {
                    t.length > 0 && be.from(t[0]);
                });
            }
        });
        var At = function() {};
        n(At, {
            exec: function(t, e) {
                var t = jt.filterNotConnected(jt.toNative(t));
                if (0 != t.length) {
                    Zt.startCachingTransaction(), Jt.ensureCanFit(t), t = ne.sort(ne.filter(t));
                    for (var n = 0; n < t.length; n++) ne.unmarkAsNotCollectable(t[n]), Jt.add(t[n]), 
                    e(t[n]);
                    Zt.stopCachingTransaction(), Jt.scheduleResize(), $t.emit(Y.INSERT, t);
                }
            },
            execInsertBA: function(t, e, n, i, s, o, a) {
                var t = jt.filterNotConnected(jt.toNative(t));
                if (0 != t.length) {
                    var u = me.get();
                    if (0 == u.length) return void n(t);
                    u = ye.sortForReappend(u);
                    var c = [], e = this._getTargetItem(e, u, i), l = this._getTargetItemGuid(e, s, u, c);
                    null == l && r(V.WRONG_IBA_ITEM), this._reposition(c, t, l, n, o, a);
                }
            },
            _getTargetItem: function(t, e, n) {
                if ("undefined" == typeof t || null == t) var t = e[n(e)].item; else {
                    var t = jt.toNative(t)[0];
                    ("undefined" == typeof t || null == t) && (t = e[n(e)].item);
                }
                return t;
            },
            _getTargetItemGuid: function(t, e, n, i) {
                for (var r = null, s = 0; s < n.length; s++) if (ie.get(n[s].item) == ie.get(t)) {
                    r = n[s].itemGUID, Array.prototype.push.apply(i, e(n, s));
                    break;
                }
                return r;
            },
            _reposition: function(t, e, n, i, r, s) {
                me.reinitRanges(), ie.reinitMax(n + 1 * r);
                var o = Kt.eq("append", "default") ? Se : Pe;
                o.recreateCrs(), i(e), Kt.eq("sortDispersion", !1) ? (me.restore(t), ve.remapGUIDSIn(t)) : (me.restoreOnSortDispersion(t), 
                ve.remapAllGUIDS()), s(t);
            }
        });
        var Et = function() {};
        n(Et, {
            exec: function(t) {
                var e = this;
                Ye.exec(t, function(t) {
                    e._prepend.call(e, t);
                });
            },
            _prepend: function(t) {
                ie.markForPrepend(t), Kt.eq("prepend", "default") ? Oe.position(t) : Fe.position(t);
            }
        });
        var xt = function() {
            this._queue = [], this._isWaitingForRpsQueue = !1;
        };
        n(xt, {
            itemsToBatches: function(t, e, n) {
                for (var n = n || !1, t = n ? t : jt.toNative(t), i = [], r = 0, s = [], o = !1, a = 0; a < t.length; a++) s.push(t[a]), 
                o = !1, r++, r == e && (i.push(s), s = [], o = !0, r = 0);
                return o || i.push(s), i;
            },
            schedule: function(t, e, n, i, r) {
                this._schedule(e, r, n, i, t, this._exec);
            },
            scheduleFnExec: function(t, e, n, i) {
                for (var n = n || w.INSERT_BATCH_DELAY, r = this.itemsToBatches(t, e), s = 0; s < r.length; s++) !function(t, e) {
                    setTimeout(function() {
                        i(t);
                    }, n * e);
                }(r[s], s);
            },
            _schedule: function(t, e, n, i, r, s) {
                var o = this, a = function(t) {
                    setTimeout(function() {
                        o._execSchedule.call(o, t, e, r, s);
                    }, 0);
                };
                return "undefined" == typeof n ? void a(t) : void this.scheduleFnExec(t, n, i, function(t) {
                    a(t);
                });
            },
            _execSchedule: function(t, e, n, i) {
                var r = this;
                if (Be.isEmpty()) i(t, e, n); else {
                    if (r._queue.push({
                        op: n,
                        items: t,
                        targetItem: e
                    }), r._isWaitingForRpsQueue) return;
                    setTimeout(function() {
                        r._isWaitingForRpsQueue = !0, r._process.call(r);
                    }, w.INSERT_QUEUE_DELAY);
                }
            },
            _process: function() {
                for (var t = this, e = !0, n = 0; n < this._queue.length; n++) {
                    if (!Be.isEmpty()) {
                        setTimeout(function() {
                            t._process.call(t);
                        }, w.INSERT_QUEUE_DELAY), e = !1;
                        break;
                    }
                    var i = this._queue[n];
                    this._exec(i.items, i.targetItem, i.op), this._queue.shift(), n--;
                }
                e && (this._isWaitingForRpsQueue = !1);
            },
            _exec: function(t, e, n) {
                n == M.PREPEND ? Ve.exec(t) : n == M.APPEND ? Ge.exec(t) : n == M.INS_BEFORE ? Ge.execInsBefore(t, e) : n == M.INS_AFTER ? Ge.execInsAfter(t, e) : r("wrong op");
            }
        });
        var It = function() {};
        n(It, {
            isRendered: function(t) {
                return W.has(t.item, w.REND.CN_RENDERED_DATA);
            },
            markAsRendered: function(t) {
                W.set(t.item, w.REND.CN_RENDERED_DATA, "y");
            },
            unmarkAsRendered: function(t) {
                W.rm(t.item, w.REND.CN_RENDERED_DATA);
            },
            left: function(t) {
                var e = o("eq", Kt);
                if (e("grid", "vertical")) var n = t.x1; else var n = e("intersections", !0) ? t.x1 : t.x1 + t.hOffset;
                return n + "px";
            },
            top: function(t) {
                var e = o("eq", Kt);
                if (e("grid", "vertical")) var n = e("intersections", !0) ? t.y1 : t.y1 + t.vOffset; else var n = t.y1;
                return n + "px";
            }
        });
        var Dt = function() {
            this._queue = null, this._queueTimeout = null;
        };
        n(Dt, {
            _reinit: function() {
                null == this._queue ? this._queue = [] : clearTimeout(this._queueTimeout);
            },
            schedule: function(t, e, n, i, r) {
                if (this._reinit(), t != H.SHOW || !Re.isScheduled(e.item)) {
                    var s = this;
                    this._queue.push({
                        op: t,
                        cn: e,
                        left: n,
                        top: i,
                        delay: r
                    }), this._queueTimeout = setTimeout(function() {
                        s._process.call(s);
                    }, w.RENDER_QUEUE_DELAY);
                }
            },
            _getApi: function() {
                return {
                    toggle: qe,
                    cc: Kt.getApi("coordsChanger"),
                    grid: Jt.get(),
                    sr: q,
                    srManager: Zt,
                    collect: ne,
                    prefix: k,
                    dom: W,
                    getS: o("get", Kt),
                    EVENT: Y,
                    TOGGLE: L,
                    ROTATE: b
                };
            },
            _process: function() {
                for (var t = 0; t < this._queue.length; t++) {
                    var e = this._queue[t];
                    if (!Re.isScheduled(e.cn.item)) {
                        if (e.op == H.SHOW) {
                            if (!jt.isConnected(e.cn.item)) continue;
                            var n = "show";
                        } else var n = e.op == H.HIDE ? "hide" : "render";
                        this["_" + n](e.cn, e.left, e.top, this._getApi(), e.op, e.delay);
                    }
                }
                Jt.scheduleResize(), this._queue = null;
            },
            _show: function(t, e, n, i) {
                var r = o("get", Kt);
                i.dom.css.set(t.item, {
                    position: "absolute",
                    left: e,
                    top: n
                }), Kt.getApi("coordsChanger")(t.item, e, n, r("coordsChangeTime"), r("coordsChangeTiming"), i.dom, i.prefix, r, !0), 
                $t.emitInternal(U.BEFORE_SHOW_FOR_RSORT), Kt.getApi("toggle").show(t.item, e, n, r("toggleTime"), r("toggleTiming"), $t, Xe, i.dom, i, {
                    x1: e,
                    y1: n
                });
            },
            _hide: function(t, e, n, i) {
                var r = o("get", Kt);
                xe.unmarkAsSchToHide(t.item), Kt.getApi("toggle").hide(t.item, e, n, r("toggleTime"), r("toggleTiming"), $t, Xe, i.dom, i, {
                    x1: e,
                    y1: n
                });
            },
            _render: function(t, e, n, i, r, s) {
                var o = this;
                r == H.RENDER ? this._execRender(t.item, e, n, i) : setTimeout(function() {
                    var e = ve.find(t.item, !0);
                    null != e && o._execRender(e.item, Ie.left(e), Ie.top(e), i);
                }, s);
            },
            _execRender: function(t, e, n, i) {
                var r = o("get", Kt);
                if (W.has(t, L.IS_ACTIVE_WITH_CC)) var s = r("toggleTime"), a = r("toggleTiming"); else var s = r("coordsChangeTime"), a = r("coordsChangeTiming");
                Kt.getApi("coordsChanger")(t, e, n, s, a, i.dom, i.prefix, r);
            }
        });
        var Rt = function() {};
        n(Rt, {
            show: function(t) {
                var e = Ie;
                if (!W.isArray(t)) var t = [ t ];
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this.unmarkAsSchToHide(i.item), e.isRendered(i) || (e.markAsRendered(i), De.schedule(H.SHOW, i, e.left(i), e.top(i)));
                }
            },
            hide: function(t) {
                var e = Ie;
                if (!W.isArray(t)) var t = [ t ];
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this.wasSchToHide(i.item) && (e.unmarkAsRendered(i), De.schedule(H.HIDE, i, e.left(i), e.top(i)));
                }
            },
            renderRepositioned: function(t) {
                this.render(t, !1);
            },
            render: function(t, e) {
                for (var n = Ie, e = e || !1, i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (e !== !1) {
                        for (var s = !1, o = 0; o < e.length; o++) if (t[i].itemGUID == e[o].itemGUID) {
                            s = !0;
                            break;
                        }
                        if (s) continue;
                    }
                    De.schedule(H.RENDER, r, n.left(r), n.top(r));
                }
            },
            renderAfterDelay: function(t, e) {
                for (var e = e || w.RENDER_DEF_DELAY, n = 0; n < t.length; n++) De.schedule(H.DEL_RENDER, t[n], null, null, e);
            },
            rotate: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = ve.find(t[n]);
                    Ie.unmarkAsRendered(i), e.push(i);
                }
                this.show(e);
            },
            markAsSchToHide: function(t) {
                for (var e = 0; e < t.length; e++) W.set(t[e].item, w.REND.SCH_TO_HIDE_DATA, "y");
            },
            unmarkAsSchToHide: function(t) {
                W.rm(t, w.REND.SCH_TO_HIDE_DATA);
            },
            wasSchToHide: function(t) {
                return W.has(t, w.REND.SCH_TO_HIDE_DATA);
            }
        });
        var St = function() {};
        n(St, {
            get: function(t, e) {
                for (var n = me.get(), i = o("eq", Kt), r = 0; r < n.length; r++) if (!n[r].restrictCollect) if (i("sortDispersion", !1) && i("intersections", !0)) n[r].itemGUID >= e.itemGUID && (t.push(n[r]), 
                n.splice(r, 1), r--); else if (i("intersections", !1)) {
                    if (i("grid", "vertical")) var s = n[r].y2 >= e.y1; else var s = n[r].x2 >= e.x1;
                    s && (t.push(n[r]), n.splice(r, 1), r--);
                } else i("sortDispersion", !0) && this._getSDCond(n[r], e) && (t.push(n[r]), n.splice(r, 1), 
                r--);
                for (var a = ye.sortForReappend(t), u = [], r = 0; r < a.length; r++) u.push(a[r].item);
                return {
                    items: u,
                    cns: t,
                    firstCn: a[0]
                };
            },
            _getSDCond: function(t, e) {
                var n = o("eq", Kt);
                if (n("grid", "vertical")) if (n("append", "default")) var i = t.y1 > e.y1 || t.y1 == e.y1 && t.x1 >= e.x1; else var i = t.y1 > e.y1 || t.y1 == e.y1 && t.x1 <= e.x2; else if (n("append", "default")) var i = t.x1 > e.x1 || t.x1 == e.x1 && t.y1 >= e.y1; else var i = t.x1 > e.x1 || t.x1 == e.x1 && t.y1 <= e.y2;
                return i;
            },
            getForRepositionAll: function(t) {
                var e = [], n = [], i = [];
                this._findCns(t, e, n, i);
                var r = this._findFirstCnToRps(t, n);
                return {
                    items: e,
                    cns: i,
                    firstCn: r
                };
            },
            _findCns: function(t, e, n, i) {
                for (var r = 0; r < t.length; r++) t[r].restrictCollect ? n.push(t[r]) : (e.push(t[r].item), 
                i.push(t[r]));
            },
            _findFirstCnToRps: function(t, e) {
                var n = null;
                if (0 == e.length) n = t[0], t.splice(0, t.length); else {
                    for (var i = 0; i < t.length; i++) {
                        for (var r = !0, s = 0; s < e.length; s++) if (e[s].itemGUID == t[i].itemGUID) {
                            r = !1;
                            break;
                        }
                        if (r) {
                            n = t[i];
                            break;
                        }
                    }
                    t.splice(0, t.length);
                    for (var i = 0; i < e.length; i++) t.push(e[i]);
                }
                return n;
            }
        });
        var Ot = function() {
            this._queue = null, this._nextBatchTimeout = null, this._queueData = null, this._repositionStart = {
                gridX2: 0,
                gridY2: 0,
                vpWidth: null,
                vpHeight: null
            };
        };
        n(Ot, {
            isEmpty: function() {
                return null == this._nextBatchTimeout;
            },
            init: function(t, e) {
                this._queue = [], this._queueData = [];
                for (var n = 0; n < e.length; n++) this._queue.push({
                    item: t[n],
                    cn: e[n]
                });
            },
            stop: function() {
                return clearTimeout(this._nextBatchTimeout), this._nextBatchTimeout = null, {
                    queue: this._queue,
                    queueData: this._queueData
                };
            },
            start: function() {
                this._repositionStart = {
                    gridX2: Jt.x2(),
                    gridY2: Jt.y2(),
                    vpWidth: Zt.viewportWidth(),
                    vpHeight: Zt.viewportHeight()
                }, this._repositionNextBatch();
            },
            getQueued: function() {
                return this._queue;
            },
            _isSameRepositionProcess: function() {
                var t = !0;
                return Kt.eq("grid", "vertical") ? (this._repositionStart.gridX2 != Jt.x2() && (t = !1), 
                this._repositionStart.vpWidth != Zt.viewportWidth() && (t = !1)) : (this._repositionStart.gridY2 != Jt.y2() && (t = !1), 
                this._repositionStart.vpHeight != Zt.viewportHeight() && (t = !1)), t;
            },
            _repositionNextBatch: function(t) {
                var e = Kt.get("queueSize");
                e > this._queue.length && (e = this._queue.length), Zt.startCachingTransaction();
                var n = t || !1;
                return n && !this._isSameRepositionProcess() ? void Zt.stopCachingTransaction() : (this._execNextBatchReposition(e), 
                void this._processQueue(e));
            },
            _execNextBatchReposition: function(t) {
                for (var e = [], n = 0; t > n; n++) this._repositionItem(this._queue[n].item), ce["rmIntFrom" + (Kt.eq("grid", "vertical") ? "Bottom" : "Right")](), 
                e.push(ie.get(this._queue[n].item));
                Zt.stopCachingTransaction();
                var i = ve.getByGUIDS(e);
                Ee.emitEvents(i), xe.renderRepositioned(i);
            },
            _processQueue: function(t) {
                return this._queueData = this._queueData.concat(this._queue.splice(0, t)), 0 == this._queue.length ? ($t.emitInternal(U.REPOSITION_END_FOR_DRAG), 
                $t.emit(Y.REPOSITION_END), void (this._nextBatchTimeout = null)) : void this._scheduleNextBatchReposition();
            },
            _scheduleNextBatchReposition: function() {
                var t = this;
                this._nextBatchTimeout = setTimeout(function() {
                    t._repositionNextBatch.call(t, !0);
                }, Kt.get("queueDelay"));
            },
            _repositionItem: function(t) {
                Kt.eq("append", "reversed") ? Pe.position(t) : Se.position(t);
            }
        });
        var Pt = function() {};
        n(Pt, {
            all: function() {
                Zt.startCachingTransaction(), this._all(), Zt.stopCachingTransaction();
            },
            fromFirstSortedCn: function(t) {
                Zt.startCachingTransaction(), this._fromFirstSortedCn(t), Zt.stopCachingTransaction();
            },
            from: function(t) {
                this._from(t);
            },
            sync: function() {
                var t = me.get();
                if (!Be.isEmpty()) {
                    for (var e = Be.stop(), n = [], i = 0; i < e.queueData.length; i++) n.push(e.queueData[i].cn);
                    ve.syncParams(n);
                    for (var i = 0; i < e.queue.length; i++) t.push(e.queue[i].cn);
                }
            },
            _stop: function() {
                var t = [];
                if (!Be.isEmpty()) for (var e = Be.stop(), n = 0; n < e.queue.length; n++) e.queue[n].cn.restrictCollect || t.push(e.queue[n].cn);
                return t;
            },
            _all: function() {
                this.sync();
                var t = me.get();
                0 != t.length && (t = ye.sortForReappend(t), ie.unmarkFirstPrepended(), this._start(Me.getForRepositionAll(t)));
            },
            _from: function(t) {
                var e = this._stop();
                ie.unmarkFirstPrepended(), this._start(Me.get(e, t));
            },
            _fromFirstSortedCn: function(t) {
                for (var e = this._stop(), n = me.get(), i = [], r = 0; r < t.length; r++) {
                    for (var s = 0; s < n.length; s++) ie.get(n[s].item) != ie.get(t[r]) || i.push(n[s]);
                    for (var s = 0; s < e.length; s++) ie.get(e[s].item) != ie.get(t[r]) || i.push(e[s]);
                }
                var o = ye.sortForReappend(i);
                ie.unmarkFirstPrepended(), this._start(Me.get(e, o[0]));
            },
            _start: function(t) {
                he.recreateForFirst(t.firstCn.item, t.firstCn), Be.init(t.items, t.cns), Be.start();
            }
        });
        var Ft = function() {
            for (var t = function() {
                return function(t) {
                    return t;
                };
            }, e = function() {
                return function(t) {
                    return Math.round(t);
                };
            }, n = function() {
                return function(t, e, n, i) {
                    i.css.set(t, {
                        left: Math.round(parseFloat(e)) + "px",
                        top: Math.round(parseFloat(n)) + "px"
                    });
                };
            }, i = [ [ "default", new d() ], [ "position", new g() ], [ "translate", new _(t(), t(), s(), !1) ], [ "translateInt", new _(e(), e(), n(), !1) ], [ "translate3d", new _(t(), t(), s(), !0) ], [ "translate3dInt", new _(e(), e(), n(), !0) ] ], r = 0; r < i.length; r++) Kt.addApi("coordsChanger", i[r][0], i[r][1]);
        };
        d = function() {
            return function(t, e, n, i, r, s, o, a, u) {
                var u = u || !1;
                u || (e != t.style.left && s.css.set(t, {
                    left: e
                }), n != t.style.top && s.css.set(t, {
                    top: n
                }));
            };
        };
        var Nt = function() {
            this._settings = {
                grid: "vertical",
                prepend: "mirrored",
                append: "default",
                intersections: !0,
                align: "top",
                sortDispersion: !1,
                "class": "grid-item",
                data: !1,
                query: !1,
                loadImages: !1,
                dragifier: !1,
                dragifierMode: "i",
                gridResize: "fit",
                gridResizeDelay: 100,
                toggleTime: 500,
                toggleTiming: "ease",
                coordsChangeTime: 300,
                coordsChangeTiming: "ease",
                rotatePerspective: "200px",
                rotateBackface: !0,
                rotateAngles: [ 0, -180, 180, 0 ],
                widthPtAs: 0,
                widthPxAs: 0,
                heightPtAs: 0,
                heightPxAs: 0,
                repackSize: null,
                filter: {
                    selected: "all",
                    all: function(t) {
                        return !0;
                    }
                },
                sort: {
                    selected: "default",
                    "default": function(t, e, n, i) {
                        var r = "data-gridifier-orig-sort-index";
                        return i["int"](i.get(t, r)) - i["int"](i.get(e, r));
                    }
                },
                toggle: {
                    selected: "scale"
                },
                drag: {
                    selected: "cloneCss",
                    cloneCss: function(t, e, n) {
                        n.copyComputedStyle(e, t);
                    }
                },
                rsort: {
                    selected: "default",
                    "default": function(t) {
                        return t;
                    }
                },
                coordsChanger: {
                    selected: "translate3dInt"
                },
                insertRange: 3e3,
                vpResizeDelay: null,
                queueSize: 12,
                queueDelay: 25,
                disableQueueOnDrags: !0
            };
            var t = "undefined" != typeof e ? e : {};
            this._parse(t);
        };
        n(Nt, {
            _parse: function(t) {
                this._parseCoreSettings(t), this._adjustCoreSettings(t), this._parseApiSettings(t);
            },
            _parseCoreSettings: function(t) {
                W.hasAnyProp(t, [ "class", "data", "query" ]) && this.set([ [ "class", !1 ], [ "data", !1 ], [ "query", !1 ] ]);
                for (var e in t) {
                    var n = t[e], i = /^on(.*)$/;
                    W.hasOwnProp(this._settings, e) && !this._isApiSetting(e) ? this.set(e, n) : i.test(e) && Qt[e](n);
                }
            },
            _adjustCoreSettings: function(t) {
                this.eq("grid", "horizontal") && !W.hasOwnProp(t, "align") && this.set("align", "left"), 
                W.hasOwnProp(t, "align") && this.set("intersections", !1), this.eq("dragifierMode", "d") && (this.set("intersections", !0), 
                this.set("sortDispersion", !0), W.hasOwnProp(t, "disableQueueOnDrags") || this.set("disableQueueOnDrags", !1));
            },
            _parseApiSettings: function(t) {
                for (var e in t) {
                    var n = t[e];
                    this._isApiSetting(e) && this._parseApiSetting(e, n);
                }
            },
            _isApiSetting: function(t) {
                for (var e in G) if (G[e] == t) return !0;
                return !1;
            },
            _parseApiSetting: function(t, e) {
                if ("string" == typeof e || e instanceof String || t == G.FILTER && W.isArray(e)) this._settings[t].selected = e; else if ("function" == typeof e) this._settings[t].userfn = e, 
                this._settings[t].selected = "userfn"; else if ("object" == typeof e) {
                    for (var n in e) if ("selected" != n) {
                        var i = e[n];
                        this._settings[t][n] = i;
                    }
                    W.hasOwnProp(e, "selected") && (this._settings[t].selected = e.selected);
                }
            },
            get: function(t) {
                return this._check(t, "get"), this._settings[t];
            },
            set: function(t, e) {
                if (!W.isArray(t)) return this._check(t, "set"), this._settings[t] = e, void $t.emitInternal(U.SET_SETTING_FOR_NZER, t);
                for (var n = 0; n < t.length; n++) this.set(t[n][0], t[n][1]);
            },
            getApi: function(t) {
                this._check(t, "getApi");
                var e = this.get(t), n = function(e) {
                    r("getApi('" + t + "') -> " + e + " fn not found");
                };
                if (t != G.FILTER) return W.hasOwnProp(e, e.selected) || n(e.selected), e[e.selected];
                var i = e.selected;
                W.isArray(i) || (i = [ i ]);
                for (var s = [], o = 0; o < i.length; o++) W.hasOwnProp(e, i[o]) || n(i[o]), s.push(e[i[o]]);
                return s;
            },
            setApi: function(t, e) {
                this._check(t, "setApi"), this.get(t).selected = e, t == G.RSORT && $t.emitInternal(U.RSORT_CHANGE);
            },
            addApi: function(t, e, n) {
                this._check(t, "addApi"), this.get(t)[e] = n;
            },
            eq: function(t, e) {
                return this._check(t, "eq"), this._settings[t] == e;
            },
            notEq: function(t, e) {
                return !this.eq(t, e);
            },
            _check: function(t, e) {
                W.hasOwnProp(this._settings, t) || r("No setting '" + t + "' to " + e);
            }
        });
        var wt = function() {
            this._created = !1, this._repositionTimeout = null;
            var t = this;
            $t.onRsortChange(function() {
                t._update.call(t);
            }), this._update();
        };
        n(wt, {
            _update: function() {
                var t = this, e = Kt.get("rsort").selected;
                "default" == e || this._created || (this._created = !0, new u(Kt)), t._change(e);
            },
            _change: function(t) {
                var e = this;
                "default" == t ? $t.onBeforeShowForRsort(null) : $t.onBeforeShowForRsort(function() {
                    clearTimeout(e._repositionTimeout), e._repositionTimeout = setTimeout(function() {
                        e._reposition();
                    }, w.RESORT_REPOS_DELAY);
                });
            },
            _reposition: function() {
                if (null == Kt.get("repackSize")) return void be.all();
                var t = Kt.get("repackSize"), e = Qt.all();
                return e.length < t ? void be.all() : void be.fromFirstSortedCn([ e[e.length - t] ]);
            }
        });
        var Lt = function() {
            Kt.addApi("toggle", "scale", new m()), Kt.addApi("toggle", "scaleWithFade", new m(!0)), 
            Kt.addApi("toggle", "fade", new C()), Kt.addApi("toggle", "visibility", new p());
            new T(Kt), new A(Kt);
        };
        n(Lt, {
            hasTranslateTransform: function(t, e) {
                var n = /.*translate\((.*)\).*/, i = /.*translate3d\((.*)\).*/;
                return n.test(t.style[e.get("transform", t)]) || i.test(t.style[e.get("transform", t)]) ? !0 : !1;
            },
            updateTransformOrigin: function(t, e, n, i, r, s) {
                var o = parseFloat(e), a = parseFloat(n), u = parseFloat(t.style.left), c = parseFloat(t.style.top), l = function(t, e) {
                    return t > e ? t - e : e > t ? -1 * (e - t) : 0;
                }, h = l(o, u), f = l(a, c);
                s.css3.transformOrigin(t, h + i / 2 + "px " + (f + r / 2) + "px");
            },
            resetTransformOrigin: function(t, e) {
                e.css3.transformOrigin(t, "50% 50%");
            }
        });
        var bt = function() {
            this._syncTimeouts = {}, this._nextSyncId = 0;
        };
        n(bt, {
            markAsSynced: function(t) {
                W.set(t, L.SYNCER_DATA, ++this._nextSyncId);
            },
            isSynced: function(t) {
                return W.has(t, L.SYNCER_DATA);
            },
            _getSyncId: function(t) {
                return this.isSynced(t) ? W.get(t, L.SYNCER_DATA) : (this.markAsSynced(t), W.get(t, L.SYNCER_DATA));
            },
            add: function(t, e) {
                var n = this._getSyncId(t);
                W.hasOwnProp(this._syncTimeouts, n) || (this._syncTimeouts[n] = []), this._syncTimeouts[n].push(e);
            },
            flush: function(t) {
                var e = this._getSyncId(t);
                if (W.hasOwnProp(this._syncTimeouts, e)) {
                    for (var n = 0; n < this._syncTimeouts[e].length; n++) clearTimeout(this._syncTimeouts[e][n]);
                    this._syncTimeouts[e] = [];
                }
            }
        }), p = function() {
            return {
                show: function(t, e, n, i, r, s, o, a, u) {
                    o.flush(t), a.show(t), s.emit(u.EVENT.SHOW, t);
                },
                hide: function(t, e, n, i, r, s, o, a, u) {
                    o.flush(t), a.hide(t), s.emit(u.EVENT.HIDE, t);
                }
            };
        }, l = function() {
            this._shouldUpdateZ = !1, this._disableZUpdates = !1, this._updateZTimeout = null;
            var t = this;
            Qt.onReposition(function() {
                t._shouldUpdateZ && !t._disableZUpdates && (clearTimeout(t._updateZTimeout), t._updateZTimeout = setTimeout(function() {
                    t._updateZ.call(t);
                }, w.UPDATE_Z_DELAY));
            }), $t.onSetSettingForNzer(function(e) {
                for (var n = [ "widthPx", "heightPx", "widthPt", "heightPt" ], i = !1, r = 0; r < n.length; r++) e == n[r] + "As" && (i = !0);
                i && t.updateAs();
            }), i(this, {
                disableZUpdates: function() {
                    return t._disableZUpdates = !0, Qt;
                }
            }), this.updateAs();
        }, n(l, {
            updateAs: function() {
                var t = this._updateAs("x", "width", "Width"), e = this._updateAs("y", "height", "Height");
                this._shouldUpdateZ = t || e;
            },
            _updateAs: function(t, e, n) {
                var i = parseFloat(Kt.get(e + "PxAs")), r = parseFloat(Kt.get(e + "PtAs"));
                if (0 == i && 0 == r) return Zt["setOuter" + n + "AntialiasValue"](0), !1;
                if (0 != r) var s = (Jt[t + "2"]() + 1) * (r / 100); else var s = i;
                return Zt["setOuter" + n + "AntialiasValue"](s), !0;
            },
            _updateZ: function() {
                var t = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = Math.abs(t[e].x2 - t[e].x1) + 1, i = Math.abs(t[e].y2 - t[e].y1) + 1;
                        t[e].normArea = Math.round(n * i);
                    }
                }, e = function(t, e) {
                    return t.normArea > e.normArea ? 1 : t.normArea < e.normArea ? -1 : 0;
                }, n = function(t) {
                    for (var e = {}, n = 0; n < t.length; n++) "undefined" == typeof e[t[n].normArea] && (e[t[n].normArea] = []), 
                    e[t[n].normArea].push(t[n]);
                    return e;
                }, i = me.get();
                t(i), i.sort(e);
                var r = n(i), s = [];
                for (var o in r) r[o] = ye.sortForReappend(r[o]), s.push(W["int"](o));
                s.sort(function(t, e) {
                    return t > e ? 1 : e > t ? -1 : 0;
                });
                for (var a = 1, u = 0; u < s.length; u++) for (var c = 0; c < r[s[u]].length; c++) r[s[u]][c].item.style.zIndex = a, 
                a++;
            }
        });
        var Bt = function() {
            this._position = new vt(this, M.APPEND, function(t) {
                t.create(B.APPEND.DEF, B.RIGHT.TOP, 0, 0);
            }, function(t, e) {
                t.y2 + 1 <= Jt.y2() && ue.create(B.APPEND.DEF, B.BOTTOM.LEFT, parseFloat(t.x1), parseFloat(t.y2 + 1), W["int"](e)), 
                ue.create(B.APPEND.DEF, B.RIGHT.TOP, parseFloat(t.x2 + 1), parseFloat(t.y1), W["int"](e));
            }, function(t) {
                return t.y2 > se.fixHighRounding(Jt.y2());
            });
        };
        n(Bt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Right", "Left", "Right");
                var n = e.filterCrs("Prepended", B.RIGHT.TOP, "Right", "Top", "Append"), i = e.createCn(t, e.findCnCoords(t, n, "HgAppend", "BehindX", "x2", "Smaller", "X"), n);
                me.attachToRanges(i), e.cleanCrs("Right", "Left", "Right"), e.render(t, i);
            }
        });
        var Mt = function() {
            this._cns = [];
        };
        n(Mt, {
            reinitRanges: function() {
                Te.init("x1", "x2");
            },
            attachToRanges: function(t) {
                Te.attachCn(t, me.get().length - 1, "x1", "x2");
            },
            mapAllIntAndLeftCns: function(t) {
                var e = Te;
                return Te.mapAllIntAndSideCns(t, "x", "x1", "x2", e.lastRngIndexFn(), e.lastRngIndexFn(), e.lowerCrCnIndexesFn(), e.decFn());
            },
            mapAllIntAndRightCns: function(t) {
                var e = Te;
                return Te.mapAllIntAndSideCns(t, "x", "x1", "x2", e.firstRngIndexFn(), e.lastRngIndexFn(), e.upperCrCnIndexesFn(), e.incFn());
            },
            getAllIntYCns: function(t) {
                return Te.getAllCnsFromIntRange(t.x, "x1", "x2");
            },
            getAllIntYAndLeftCns: function(t) {
                return Te.getAllCnsFromIntAndTLSideRgs(t.x, "x1", "x2");
            },
            getAllIntYAndRightCns: function(t) {
                return Te.getAllCnsFromIntAndRBSideRgs(t.x, "x1", "x2");
            },
            getLastColXExpandedCns: function() {
                return Ae.getLastXYExpandedCns();
            },
            isIntMoreThanOneCnX: function(t) {
                return Ae.isIntMoreThanOneCnXY(t, "x1", "x2");
            },
            getMostWideFromAllXIntCns: function(t) {
                return Ae.getMostBigFromAllXYIntCns(t, "x1", "x2");
            },
            getAllXIntCns: function(t) {
                return Ae.getAllXYIntCns(t, "x1", "x2");
            },
            expandXAllColCnsToMostWide: function(t) {
                return Ae.expandXYAllCnsToMostBig(t, "x1", "x2", "hOffset", "Width");
            },
            get: function() {
                return this._cns;
            },
            count: function() {
                return this._cns.length;
            },
            restore: function(t) {
                this._cns = this._cns.concat(t);
            },
            add: function(t, e) {
                var n = ve.create(t, e);
                return this._cns.push(n), $t.emit(Y.REPOSITION, n.item, n, this), n;
            },
            rm: function(t) {
                ve.rm(this._cns, t);
            },
            restoreOnSortDispersion: function(t) {
                ve.restoreOnSortDispersion(t, function(t, e, n) {
                    for (var i = e.y2 + 1, r = 0; r < t.length; r++) n(t[r], e.x1, i++);
                }, function(t, e, n) {
                    for (var i = e.y1 - 1, r = 0; r < t.length; r++) n(t[r], e.x1, i--);
                }), this.restore(t);
            },
            getAllBehindX: function(t) {
                return ve.getAllBACoord(t, function(t, e) {
                    return t.x1 > e;
                });
            },
            getAllBeforeX: function(t) {
                return ve.getAllBACoord(t, function(t, e) {
                    return t.x2 < e;
                });
            },
            fixAllXPosAfterPrepend: function(t, e) {
                return ve.fixAllXYPosAfterPrepend(t, e, "x", "x1", "x2");
            }
        });
        var Ht = function() {};
        n(Ht, {
            find: function(t, e, n) {
                var i = Zt.itemSizes(e), r = parseFloat;
                return t == M.APPEND ? {
                    x1: r(n.x),
                    x2: r(n.x + i.width - 1),
                    y1: r(n.y),
                    y2: r(n.y + i.height - 1)
                } : t == M.REV_APPEND ? {
                    x1: r(n.x),
                    x2: r(n.x + i.width - 1),
                    y1: r(n.y - i.height + 1),
                    y2: r(n.y)
                } : t == M.PREPEND ? {
                    x1: r(n.x - i.width + 1),
                    x2: r(n.x),
                    y1: r(n.y - i.height + 1),
                    y2: r(n.y)
                } : t == M.REV_PREPEND ? {
                    x1: r(n.x - i.width + 1),
                    x2: r(n.x),
                    y1: r(n.y),
                    y2: r(n.y + i.height - 1)
                } : void 0;
            }
        });
        var Gt = function() {
            this._position = new vt(this, M.PREPEND, function(t, e) {
                t.create(B.PREPEND.DEF, B.TOP.RIGHT, 0, e.y2());
            }, function(t, e) {
                t.y1 - 1 >= 0 && ue.create(B.PREPEND.DEF, B.TOP.RIGHT, parseFloat(t.x2), parseFloat(t.y1 - 1), W["int"](e)), 
                ue.create(B.PREPEND.DEF, B.LEFT.BOTTOM, parseFloat(t.x1 - 1), parseFloat(t.y2), W["int"](e));
            }, function(t) {
                return t.y1 < se.fixLowRounding(0);
            });
        };
        n(Gt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Left", "Right", "Left");
                var n = e.filterCrs("Appended", B.LEFT.BOTTOM, "Left", "Bottom", "Prepend"), i = e.createCn(t, e.findCnCoords(t, n, "HgPrepend", "BeforeX", "x1", "Bigger", "X"), n);
                ie.markIfFirstPrepended(t);
                var r = e.fixAllXYPosAfterPrepend(i, ue.get());
                me.attachToRanges(i), e.cleanCrs("Left", "Right", "Left"), r && e.renderAfterPrependFix(i), 
                e.render(t, i);
            }
        });
        var Vt = function() {
            this._position = new vt(this, M.REV_APPEND, function(t, e) {
                t.create(B.APPEND.REV, B.TOP.LEFT, 0, parseFloat(e.y2()));
            }, function(t, e) {
                t.y1 - 1 >= 0 && ue.create(B.APPEND.REV, B.TOP.LEFT, parseFloat(t.x1), parseFloat(t.y1 - 1), W["int"](e)), 
                ue.create(B.APPEND.REV, B.RIGHT.BOTTOM, parseFloat(t.x2 + 1), parseFloat(t.y2), W["int"](e));
            }, function(t) {
                return t.y1 < se.fixLowRounding(0);
            });
        };
        n(Vt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Right", "Left", "Right");
                var n = e.filterCrs("Prepended", B.RIGHT.BOTTOM, "Right", "Bottom", "Append"), i = e.createCn(t, e.findCnCoords(t, n, "HgAppend", "BehindX", "x2", "Smaller", "X"), n);
                me.attachToRanges(i), e.cleanCrs("Right", "Left", "Right"), e.render(t, i);
            }
        });
        var Yt = function() {
            this._position = new vt(this, M.REV_PREPEND, function(t, e) {
                t.create(B.PREPEND.REV, B.LEFT.TOP, 0, 0);
            }, function(t, e) {
                t.y2 + 1 <= Jt.y2() && ue.create(B.PREPEND.REV, B.BOTTOM.RIGHT, parseFloat(t.x2), parseFloat(t.y2 + 1), W["int"](e)), 
                ue.create(B.PREPEND.REV, B.LEFT.TOP, parseFloat(t.x1 - 1), parseFloat(t.y1), W["int"](e));
            }, function(t) {
                return t.y2 > se.fixHighRounding(Jt.y2());
            });
        };
        n(Yt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Left", "Right", "Left");
                var n = e.filterCrs("Appended", B.LEFT.TOP, "Left", "Top", "Prepend"), i = e.createCn(t, e.findCnCoords(t, n, "HgPrepend", "BeforeX", "x1", "Bigger", "X"), n);
                ie.markIfFirstPrepended(t);
                var r = e.fixAllXYPosAfterPrepend(i, ue.get());
                me.attachToRanges(i), e.cleanCrs("Left", "Right", "Left"), r && e.renderAfterPrependFix(i), 
                e.render(t, i);
            }
        });
        var Ut = function() {
            this._position = new vt(this, M.APPEND, function(t) {
                t.create(B.APPEND.DEF, B.RIGHT.TOP, 0, 0);
            }, function(t, e) {
                t.x2 + 1 <= Jt.x2() && ue.create(B.APPEND.DEF, B.RIGHT.TOP, parseFloat(t.x2 + 1), parseFloat(t.y1), W["int"](e)), 
                ue.create(B.APPEND.DEF, B.BOTTOM.LEFT, parseFloat(t.x1), parseFloat(t.y2 + 1), W["int"](e));
            }, function(t) {
                return t.x2 > se.fixHighRounding(Jt.x2());
            });
        };
        n(Ut, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Bottom", "Top", "Bottom");
                var n = e.filterCrs("Prepended", B.BOTTOM.LEFT, "Bottom", "Left", "Append"), i = e.createCn(t, e.findCnCoords(t, n, "VgAppend", "BelowY", "y2", "Smaller", "Y"), n);
                me.attachToRanges(i), e.cleanCrs("Bottom", "Top", "Bottom"), e.render(t, i);
            }
        });
        var qt = function() {
            this._cns = [];
        };
        n(qt, {
            reinitRanges: function() {
                Te.init("y1", "y2");
            },
            attachToRanges: function(t) {
                Te.attachCn(t, me.get().length - 1, "y1", "y2");
            },
            mapAllIntAndTopCns: function(t) {
                var e = Te;
                return Te.mapAllIntAndSideCns(t, "y", "y1", "y2", e.lastRngIndexFn(), e.lastRngIndexFn(), e.lowerCrCnIndexesFn(), e.decFn());
            },
            mapAllIntAndBottomCns: function(t) {
                var e = Te;
                return Te.mapAllIntAndSideCns(t, "y", "y1", "y2", e.firstRngIndexFn(), e.lastRngIndexFn(), e.upperCrCnIndexesFn(), e.incFn());
            },
            getAllIntXCns: function(t) {
                return Te.getAllCnsFromIntRange(t.y, "y1", "y2");
            },
            getAllIntXAndTopCns: function(t) {
                return Te.getAllCnsFromIntAndTLSideRgs(t.y, "y1", "y2");
            },
            getAllIntXAndBottomCns: function(t) {
                return Te.getAllCnsFromIntAndRBSideRgs(t.y, "y1", "y2");
            },
            getLastRowYExpandedCns: function() {
                return Ae.getLastXYExpandedCns();
            },
            isIntMoreThanOneCnY: function(t) {
                return Ae.isIntMoreThanOneCnXY(t, "y1", "y2");
            },
            getMostTallFromAllYIntCns: function(t) {
                return Ae.getMostBigFromAllXYIntCns(t, "y1", "y2");
            },
            getAllYIntCns: function(t) {
                return Ae.getAllXYIntCns(t, "y1", "y2");
            },
            expandYAllRowCnsToMostTall: function(t) {
                return Ae.expandXYAllCnsToMostBig(t, "y1", "y2", "vOffset", "Height");
            },
            get: function() {
                return this._cns;
            },
            count: function() {
                return this._cns.length;
            },
            restore: function(t) {
                this._cns = this._cns.concat(t);
            },
            add: function(t, e) {
                var n = ve.create(t, e);
                return this._cns.push(n), $t.emit(Y.REPOSITION, n.item, n, this), n;
            },
            rm: function(t) {
                ve.rm(this._cns, t);
            },
            restoreOnSortDispersion: function(t) {
                ve.restoreOnSortDispersion(t, function(t, e, n) {
                    for (var i = e.x2 + 1, r = 0; r < t.length; r++) n(t[r], i++, e.y1);
                }, function(t, e, n) {
                    for (var i = e.x1 - 1, r = 0; r < t.length; r++) n(t[r], i--, e.y1);
                }), this.restore(t);
            },
            getAllBelowY: function(t) {
                return ve.getAllBACoord(t, function(t, e) {
                    return t.y1 > e;
                });
            },
            getAllAboveY: function(t) {
                return ve.getAllBACoord(t, function(t, e) {
                    return t.y2 < e;
                });
            },
            fixAllYPosAfterPrepend: function(t, e) {
                return ve.fixAllXYPosAfterPrepend(t, e, "y", "y1", "y2");
            }
        });
        var Xt = function() {};
        n(Xt, {
            find: function(t, e, n) {
                var i = Zt.itemSizes(e), r = parseFloat;
                return t == M.APPEND ? {
                    x1: r(n.x),
                    x2: r(n.x + i.width - 1),
                    y1: r(n.y),
                    y2: r(n.y + i.height - 1)
                } : t == M.REV_APPEND ? {
                    x1: r(n.x - i.width + 1),
                    x2: r(n.x),
                    y1: r(n.y),
                    y2: r(n.y + i.height - 1)
                } : t == M.PREPEND ? {
                    x1: r(n.x),
                    x2: r(n.x + i.width - 1),
                    y1: r(n.y - i.height + 1),
                    y2: r(n.y)
                } : t == M.REV_PREPEND ? {
                    x1: r(n.x - i.width + 1),
                    x2: r(n.x),
                    y1: r(n.y - i.height + 1),
                    y2: r(n.y)
                } : void 0;
            }
        });
        var kt = function() {
            this._position = new vt(this, M.PREPEND, function(t) {
                t.create(B.PREPEND.DEF, B.RIGHT.BOTTOM, 0, 0);
            }, function(t, e) {
                t.x2 + 1 <= Jt.x2() && ue.create(B.PREPEND.DEF, B.RIGHT.BOTTOM, parseFloat(t.x2 + 1), parseFloat(t.y2), W["int"](e)), 
                ue.create(B.PREPEND.DEF, B.TOP.LEFT, parseFloat(t.x1), parseFloat(t.y1 - 1), W["int"](e));
            }, function(t) {
                return t.x2 > se.fixHighRounding(Jt.x2());
            });
        };
        n(kt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Top", "Bottom", "Top");
                var n = e.filterCrs("Appended", B.TOP.LEFT, "Top", "Left", "Prepend"), i = e.createCn(t, e.findCnCoords(t, n, "VgPrepend", "AboveY", "y1", "Bigger", "Y"), n);
                ie.markIfFirstPrepended(t);
                var r = e.fixAllXYPosAfterPrepend(i, ue.get());
                me.attachToRanges(i), e.cleanCrs("Top", "Bottom", "Top"), r && e.renderAfterPrependFix(i), 
                e.render(t, i);
            }
        });
        var Wt = function() {
            this._position = new vt(this, M.REV_APPEND, function(t, e) {
                t.create(B.APPEND.REV, B.LEFT.TOP, parseFloat(e.x2()), 0);
            }, function(t, e) {
                t.x1 - 1 >= 0 && ue.create(B.APPEND.REV, B.LEFT.TOP, parseFloat(t.x1 - 1), parseFloat(t.y1), W["int"](e)), 
                ue.create(B.APPEND.REV, B.BOTTOM.RIGHT, parseFloat(t.x2), parseFloat(t.y2 + 1), W["int"](e));
            }, function(t) {
                return t.x1 < se.fixLowRounding(0);
            });
        };
        n(Wt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Bottom", "Top", "Bottom");
                var n = e.filterCrs("Prepended", B.BOTTOM.RIGHT, "Bottom", "Right", "Append"), i = e.createCn(t, e.findCnCoords(t, n, "VgAppend", "BelowY", "y2", "Smaller", "Y"), n);
                me.attachToRanges(i), e.cleanCrs("Bottom", "Top", "Bottom"), e.render(t, i);
            }
        });
        var zt = function() {
            this._position = new vt(this, M.REV_PREPEND, function(t, e) {
                t.create(B.PREPEND.REV, B.LEFT.BOTTOM, e.x2(), 0);
            }, function(t, e) {
                t.x1 - 1 >= 0 && ue.create(B.PREPEND.REV, B.LEFT.BOTTOM, parseFloat(t.x1 - 1), parseFloat(t.y2), W["int"](e)), 
                ue.create(B.PREPEND.REV, B.TOP.RIGHT, parseFloat(t.x2), parseFloat(t.y1 - 1), W["int"](e));
            }, function(t) {
                return t.x1 < se.fixLowRounding(0);
            });
        };
        n(zt, {
            position: function(t) {
                var e = this._position;
                e.initCrs("Top", "Bottom", "Top");
                var n = e.filterCrs("Appended", B.TOP.RIGHT, "Top", "Right", "Prepend"), i = e.createCn(t, e.findCnCoords(t, n, "VgPrepend", "AboveY", "y1", "Bigger", "Y"), n);
                ie.markIfFirstPrepended(t);
                var r = e.fixAllXYPosAfterPrepend(i, ue.get());
                me.attachToRanges(i), e.cleanCrs("Top", "Bottom", "Top"), r && e.renderAfterPrependFix(i), 
                e.render(t, i);
            }
        }), c = function() {}, n(c, {
            schedule: function(t) {
                for (var e = 0; e < t.length; e++) W.set(t[e], w.REND.SILENT_DATA, "y");
            },
            unschedule: function(t, e) {
                for (var n = 0; n < t.length; n++) W.rm(t[n], w.REND.SILENT_DATA), Ie.unmarkAsRendered(e[n]);
            },
            isScheduled: function(t) {
                return W.has(t, w.REND.SILENT_DATA);
            },
            _preUnschedule: function(t) {
                for (var e = 0; e < t.length; e++) W.rm(t[e], w.REND.SILENT_DATA);
            },
            getScheduled: function(t) {
                var t = t || !1, e = ne.collectByQuery("[" + w.REND.SILENT_DATA + "]");
                if (0 == e.length) return [];
                if (!t) return e;
                for (var n = {
                    left: Zt.offsetLeft(Jt.get()),
                    top: Zt.offsetTop(Jt.get())
                }, i = Zt.viewportDocumentCoords(), r = [], s = 0; s < e.length; s++) {
                    var o = ve.find(e[s], !0);
                    if (null != o) {
                        var a = {
                            x1: n.left + o.x1,
                            x2: n.left + o.x2,
                            y1: n.top + o.y1,
                            y2: n.top + o.y2
                        };
                        Ce.isIntersectingAny([ i ], a) && r.push(e[s]);
                    }
                }
                return r;
            },
            exec: function(t, e, n) {
                if ("undefined" != typeof t && null != t && t) {
                    t = jt.toNative(t);
                    for (var i = [], r = 0; r < t.length; r++) this.isScheduled(t[r]) && i.push(t[r]);
                    this._preUnschedule(i), t = i;
                }
                var s = this;
                setTimeout(function() {
                    s._exec.call(s, t, e, n);
                }, w.REFLOW_FIX_DELAY);
            },
            _exec: function(t, e, n) {
                if ("undefined" != typeof t && null != t && t) var i = t; else var i = this.getScheduled();
                if (0 != i.length) {
                    this._preUnschedule(i);
                    for (var r = [], s = [], o = 0; o < i.length; o++) {
                        var a = ve.find(i[o], !0);
                        null != a && r.push(a);
                    }
                    r = ye.sortForReappend(r);
                    for (var o = 0; o < r.length; o++) s.push(r[o].item);
                    return "undefined" == typeof e ? void this._render.call(this, s, r) : void this._execByBatches(s, r, e, n);
                }
            },
            _execByBatches: function(t, e, n, i) {
                if ("undefined" == typeof i) var i = w.INSERT_BATCH_DELAY;
                for (var r = He.itemsToBatches(t, n), s = He.itemsToBatches(e, n, !0), o = 0; o < r.length; o++) this._execBatch(r[o], s[o], o * i);
            },
            _execBatch: function(t, e, n) {
                var i = this;
                setTimeout(function() {
                    i._render.call(i, t, e);
                }, n);
            },
            _render: function(t, e) {
                this.unschedule(t, e), xe.show(e);
            }
        }), f = function(t) {
            this._image = t, this._loadedImage = null, this._isLoaded = !1, this._onLoad = null, 
            this._onError = null;
        }, n(f, {
            _bindEvents: function() {
                var t = this;
                t._onLoad = function() {
                    t._load.call(t);
                }, t._onError = function() {
                    t._error.call(t);
                }, X.add(t._loadedImage, "load", t._onLoad), X.add(t._loadedImage, "error", t._onError);
            },
            _unbindEvents: function() {
                var t = this;
                null != t._onLoad && X.rm(t._loadedImage, "load", t._onLoad), null != t._onError && X.rm(t._loadedImage, "error", t._onError);
            },
            destroy: function() {
                this._unbindEvents();
            },
            scheduleLoad: function() {
                return this._isAlreadyLoaded() ? (this._isLoaded = !0, void ae.onLoad(this._image)) : (this._loadedImage = this._loader(), 
                this._bindEvents(), void (this._loadedImage.src = this._image.src));
            },
            _loader: function() {
                return new Image();
            },
            isLoaded: function() {
                return this._isLoaded;
            },
            _isAlreadyLoaded: function() {
                return this._image.complete && void 0 !== this._image.naturalWidth && 0 !== this._image.naturalWidth;
            },
            _load: function() {
                this._isLoaded = !0, ae.onLoad(this._image);
            },
            _error: function() {
                this._isLoaded = !0, ae.onLoad(this._image);
            }
        }), h = function() {
            this._batches = [], this._loaded = [];
        }, n(h, {
            schedule: function(t, e, n) {
                if (0 == t.length) return this._batches.push({
                    items: t,
                    images: [],
                    op: e,
                    data: n
                }), void this._checkLoad();
                var i = this._findImages(t);
                if (this._batches.push({
                    items: t,
                    images: i,
                    op: e,
                    data: n
                }), 0 == i.length) return void this._checkLoad();
                for (var r = 0; r < i.length; r++) i[r].scheduleLoad();
            },
            _findImages: function(t) {
                for (var e = [], n = 0; n < t.length; n++) if ("IMG" != t[n].nodeName) {
                    if (this._isValidNode(t[n])) for (var i = t[n].querySelectorAll("img"), r = 0; r < i.length; r++) this._isAlreadyLoaded(i[r]) || e.push(new f(i[r]));
                } else this._isAlreadyLoaded(t[n]) || e.push(new f(t[n]));
                return e;
            },
            _isAlreadyLoaded: function(t) {
                for (var e = 0; e < this._loaded.length; e++) if (this._loaded[e] === t.src) return !0;
                return 0 == t.src.length;
            },
            _isValidNode: function(t) {
                return t.nodeType && (1 == t.nodeType || 9 == t.nodeType || 11 == t.nodeType);
            },
            onLoad: function(t) {
                this._loaded.push(t.src), this._checkLoad();
            },
            _checkLoad: function() {
                for (var t = 0; t < this._batches.length; t++) {
                    for (var e = !0, n = this._batches[t].images, i = 0; i < n.length; i++) if (!n[i].isLoaded()) {
                        e = !1;
                        break;
                    }
                    if (!e) break;
                    for (var i = 0; i < n.length; i++) n[i].destroy();
                    this._batches[t].images = [], this._callOp(this._batches[t].items, this._batches[t].op, this._batches[t].data), 
                    this._batches.splice(t, 1), t--;
                }
            },
            _callOp: function(t, e, n) {
                var i = n.batchSize, s = n.batchDelay;
                e == M.APPEND || e == M.PREPEND ? te.exec(e, t, i, s) : e == M.SIL_APPEND ? te.execSilentAppend(t, i, s) : e == M.INS_BEFORE ? te.exec(e, t, i, s, n.beforeItem) : e == M.INS_AFTER ? te.exec(e, t, i, s, n.afterItem) : r("Wrong op.");
            }
        }), S = function() {
            this._itemCenterCursorOffset = {
                x: null,
                y: null
            }, this._gridOffset = {
                left: null,
                top: null
            }, this._repositionTimeout = null;
        }, n(S, {
            calcGridOffsets: function() {
                this._gridOffset.left = Zt.offsetLeft(Jt.get()), this._gridOffset.top = Zt.offsetTop(Jt.get());
            },
            _getOffset: function(t, e, n, i, r, s, o) {
                var e = e || !1, a = ve.find(t);
                if (Kt.eq("intersections", !1) && Kt.eq("grid", n)) var u = a[i + "Offset"]; else var u = 0;
                if (!e) return this._gridOffset[r] + a[o] + u;
                var c = Zt["outer" + s](t), l = Zt["outer" + s](t, !0), h = l - c, f = h / 2;
                return this._gridOffset[r] + a[o] - f + u;
            },
            _getOffsetLeft: function(t, e) {
                return this._getOffset(t, e, "horizontal", "h", "left", "Width", "x1");
            },
            _getOffsetTop: function(t, e) {
                return this._getOffset(t, e, "vertical", "v", "top", "Height", "y1");
            },
            findItemCenterCursorOffsets: function(t, e, n) {
                var i = this._getOffsetLeft(t) + Zt.outerWidth(t, !0) / 2, r = this._getOffsetTop(t) + Zt.outerHeight(t, !0) / 2;
                this._itemCenterCursorOffset = {
                    x: i - e,
                    y: r - n
                };
            },
            createClone: function(t) {
                var e = t.cloneNode(!0), n = {
                    left: this._getOffsetLeft(t),
                    top: this._getOffsetTop(t)
                };
                return ne.markAsNotCollectable(e), Kt.getApi("drag")(e, t, Zt), W.hasTransitions() && (W.css3.transform(e, ""), 
                W.css3.transition(e, "none")), W.css.set(e, {
                    width: Zt.outerWidth(t) + "px",
                    height: Zt.outerHeight(t) + "px",
                    zIndex: w.MAX_Z,
                    left: n.left + "px",
                    top: n.top + "px"
                }), W.css.set4(e, "margin", q.getComputedCSS(t)), document.body.appendChild(e), 
                Ze.render(e, n.left, n.top), e;
            },
            createPointer: function(t) {
                var e = {
                    left: this._getOffsetLeft(t, !0),
                    top: this._getOffsetTop(t, !0)
                }, n = W.div();
                W.css.set(n, {
                    width: Zt.outerWidth(t, !0) + "px",
                    height: Zt.outerHeight(t, !0) + "px",
                    position: "absolute",
                    left: e.left - this._gridOffset.left + "px",
                    top: e.top - this._gridOffset.top + "px"
                });
                var i = q.getComputedCSS(t);
                Jt.get().appendChild(n), ke.getPointerStyler()(n, W);
                var r = parseFloat(i.marginLeft), s = parseFloat(i.marginTop);
                return Ze.render(n, e.left - this._gridOffset.left + (isNaN(r) ? 0 : r), e.top - this._gridOffset.top + (isNaN(s) ? 0 : s)), 
                n;
            },
            calcCloneNewDocPosition: function(t, e, n) {
                return {
                    x: e - Zt.outerWidth(t, !0) / 2 - -1 * this._itemCenterCursorOffset.x,
                    y: n - Zt.outerHeight(t, !0) / 2 - -1 * this._itemCenterCursorOffset.y
                };
            },
            calcCloneNewGridPosition: function(t, e) {
                return {
                    x1: e.x - this._gridOffset.left,
                    x2: e.x + Zt.outerWidth(t, !0) - 1 - this._gridOffset.left,
                    y1: e.y - this._gridOffset.top,
                    y2: e.y + Zt.outerHeight(t, !0) - 1 - this._gridOffset.top
                };
            },
            hasDragId: function(t, e) {
                for (var n = 0; n < e.length; n++) if (e[n] == t) return !0;
                return !1;
            },
            rmDragId: function(t, e) {
                for (var n = 0; n < e.length; n++) if (e[n] == t) {
                    e.splice(n, 1);
                    break;
                }
            },
            initItem: function(t) {
                W.hasTransitions() && W.css3.transitionProperty(t, "Visibility 0ms ease");
            },
            hideItem: function(t) {
                t.style.visibility = "hidden", W.set(t, w.IS_DRAGGABLE_DATA, "y");
            },
            showItem: function(t) {
                t.style.visibility = "visible", W.rm(t, w.IS_DRAGGABLE_DATA);
            },
            repositionItems: function() {
                if (Kt.eq("append", "default")) var t = function() {
                    Se.createInitialCr();
                }; else var t = function() {
                    Pe.createInitialCr();
                };
                ue.setNextFlushCb(t), $t.onRepositionEndForDrag(function() {
                    for (var t = ye.sortForReappend(me.get()), e = [], n = 0; n < t.length; n++) e.push(t[n].item);
                    $t.emit(Y.DRAG_END, e);
                }), this._reposition();
            },
            _reposition: function() {
                return W.browsers.isAndroidFirefox() || W.browsers.isAndroidUC() ? (clearTimeout(this._repositionTimeout), 
                void (this._repositionTimeout = setTimeout(function() {
                    be.all();
                }, w.DRAGIFIER_REPOS_DELAY))) : void be.all();
            }
        }), R = function() {
            this._items = [], this._isDragging = !1, this._areEventsBinded = !1, this._origReposQueueSize = null, 
            this._coordsChanger = ke.getCoordsChanger(), this._createEvents(), Kt.eq("dragifier", !1) || this._bindEvents(), 
            i(this, {
                dragifierOn: function() {
                    this._bindEvents();
                },
                dragifierOff: function() {
                    this._unbindEvents();
                },
                isDragifierOn: function() {
                    return this._areEventsBinded;
                }
            });
        }, n(R, {
            _createEvents: function() {
                var t = this;
                this._touch = {
                    start: function(e) {
                        t._touchStart.call(t, e);
                    },
                    end: function(e) {
                        t._isDragging && (e.preventDefault(), setTimeout(function() {
                            t._touchEnd.call(t, e);
                        }, 0));
                    },
                    move: function(e) {
                        t._isDragging && (e.preventDefault(), setTimeout(function() {
                            t._touchMove.call(t, e);
                        }, 0));
                    }
                }, this._mouse = {
                    down: function(e) {
                        t._mouseDown.call(t, e);
                    },
                    up: function(e) {
                        setTimeout(function() {
                            t._mouseUp.call(t, e);
                        }, 0);
                    },
                    move: function(e) {
                        setTimeout(function() {
                            t._mouseMove.call(t, e);
                        }, 0);
                    }
                };
            },
            _touchStart: function(t) {
                var e = this, n = t.changedTouches[0], i = e._findClosestConnected(t.target);
                return null != i ? (e._initDrag.call(e, t), e._isAlreadyDraggable(i) ? void e._findAlreadyDraggable(i).addDragId(n.identifier) : void e._initDraggableItem.call(e, i, n, !0)) : void 0;
            },
            _touchEnd: function(t) {
                var e = this;
                if (e._isDragging) {
                    for (var n = t.changedTouches, i = 0; i < n.length; i++) {
                        var r = e._findDraggableById(n[i].identifier, !0);
                        null != r.item && (r.item.rmDragId(n[i].identifier), 0 == r.item.getDragIdsCount() && (r.item.unbind(), 
                        e._items.splice(r.itemIndex, 1)));
                    }
                    0 == e._items.length && e._endDrag();
                }
            },
            _touchMove: function(t) {
                var e = this;
                if (e._isDragging) {
                    e._reposQueueSync();
                    for (var n = t.changedTouches, i = 0; i < n.length; i++) {
                        var r = e._findDraggableById(n[i].identifier);
                        null != r && r.dragMove(n[i].pageX, n[i].pageY);
                    }
                }
            },
            _mouseDown: function(t) {
                var e = this, n = e._findClosestConnected(t.target);
                null == n || W.browsers.isAndroidUC() || (e._initDrag.call(e, t), e._initDraggableItem.call(e, n, t, !1));
            },
            _mouseUp: function(t) {
                var e = this;
                e._isDragging && !W.browsers.isAndroidUC() && (e._endDrag(), e._items[0].unbind(), 
                e._items.splice(0, 1));
            },
            _mouseMove: function(t) {
                var e = this;
                e._isDragging && !W.browsers.isAndroidUC() && (e._reposQueueSync(), e._items[0].dragMove(t.pageX, t.pageY));
            },
            _initDrag: function(t) {
                t.preventDefault(), this._reposQueueOff(), ke.getSelectToggler().disableSelect(), 
                Zt.startCachingTransaction(), this._isDragging = !0;
            },
            _endDrag: function() {
                this._reposQueueOn(), ke.getSelectToggler().enableSelect(), Zt.stopCachingTransaction(), 
                this._isDragging = !1;
            },
            _initDraggableItem: function(t, e, n) {
                var i = this._createDraggableItem();
                i.bind(t, e.pageX, e.pageY), n && i.addDragId(e.identifier), this._items.push(i);
            },
            _toggleEvents: function(t) {
                X[t](Jt.get(), "mousedown", this._mouse.down), X[t](document.body, "mouseup", this._mouse.up), 
                X[t](document.body, "mousemove", this._mouse.move), X[t](Jt.get(), "touchstart", this._touch.start), 
                X[t](document.body, "touchend", this._touch.end), X[t](document.body, "touchmove", this._touch.move);
            },
            _bindEvents: function() {
                this._areEventsBinded || (this._areEventsBinded = !0, this._toggleEvents("add"));
            },
            _unbindEvents: function() {
                this._areEventsBinded && (this._areEventsBinded = !1, this._toggleEvents("rm"));
            },
            _reposQueueOff: function() {
                Kt.eq("disableQueueOnDrags", !1) || (this._origReposQueueSize = Kt.get("queueSize"), 
                this._reposQueueSync());
            },
            _reposQueueOn: function() {
                Kt.eq("disableQueueOnDrags", !1) || Kt.set("queueSize", this._origReposQueueSize);
            },
            _reposQueueSync: function() {
                Kt.eq("disableQueueOnDrags", !1) || Kt.set("queueSize", Qt.all().length);
            },
            _findClosestConnected: function(t) {
                if (t == Jt.get()) return null;
                for (var e = Kt.get("dragifier"), n = "string" == typeof e || e instanceof String, i = null, r = null, s = !1; null == i && r != Jt.get(); ) r = null == r ? t : r.parentNode, 
                n && W.css.hasClass(r, e) && (s = !0), jt.isConnected(r) && (i = r);
                return null == i || n && !s ? null : i;
            },
            _createDraggableItem: function() {
                return Kt.eq("dragifierMode", "i") ? new O() : new F();
            },
            _isAlreadyDraggable: function(t) {
                for (var e = 0; e < this._items.length; e++) if (ie.get(this._items[e].get()) == ie.get(t)) return !0;
                return !1;
            },
            _findAlreadyDraggable: function(t) {
                for (var e = 0; e < this._items.length; e++) if (ie.get(this._items[e].get()) == ie.get(t)) return this._items[e];
                r("Drag.item NF.");
            },
            _findDraggableById: function(t, e) {
                for (var e = e || !1, n = 0; n < this._items.length; n++) if (this._items[n].hasDragId(t)) return e ? {
                    item: this._items[n],
                    itemIndex: n
                } : this._items[n];
            },
            render: function(t, e, n) {
                this._coordsChanger(t, e, n, W);
            }
        }), D = function() {
            this._selectToggler = null;
        }, n(D, {
            getCoordsChanger: function() {
                return function(t, e, n, i) {
                    var e = parseFloat(e), n = parseFloat(n);
                    if (!i.hasTransitions()) return void i.css.set(t, {
                        left: e + "px",
                        top: n + "px"
                    });
                    var r = parseFloat(t.style.left), s = parseFloat(t.style.top), o = function(t, e) {
                        return t > e ? t - e : e > t ? -1 * (e - t) : 0;
                    }, a = o(e, r), u = o(n, s);
                    i.css3.transitionProperty(t, "none"), i.css3.perspective(t, "1000"), i.css3.backfaceVisibility(t, "hidden"), 
                    i.css3.transformProperty(t, "translate3d", a + "px," + u + "px,0px");
                };
            },
            getPointerStyler: function() {
                return function(t, e) {
                    e.css.addClass(t, "gridifier-drag-pointer"), t.style.backgroundColor = "red";
                };
            },
            getSelectToggler: function() {
                return null != this._selectToggler ? this._selectToggler : (this._selectToggler = {
                    _target: document.body,
                    _props: [ "webkitTouchCallout", "webkit", "khtml", "moz", "ms", "userSelect" ],
                    _origProps: {},
                    _hasProp: function(t) {
                        return "undefined" != typeof this._target.style[t];
                    },
                    disableSelect: function() {
                        for (var t = 0; t < this._props.length; t++) {
                            var e = 0 == t || 5 == t ? this._props[t] : this._props[t] + "UserSelect";
                            this._hasProp(e) && (this._origProps[e] = this._target.style[e], this._target.style[e] = "none");
                        }
                    },
                    enableSelect: function() {
                        for (var t in this._origProps) this._target.style[t] = this._origProps[t];
                        this._origProps = {};
                    }
                }, this._selectToggler);
            }
        }), O = function() {
            this._dragIds = [], this._item = null, this._clone = null;
        }, n(O, {
            get: function() {
                return this._item;
            },
            addDragId: function(t) {
                this._dragIds.push(t);
            },
            hasDragId: function(t) {
                return ze.hasDragId(t, this._dragIds);
            },
            rmDragId: function(t) {
                ze.rmDragId(t, this._dragIds);
            },
            getDragIdsCount: function() {
                return this._dragIds.length;
            },
            bind: function(t, e, n) {
                this._item = t, ze.initItem(t), ze.calcGridOffsets(), ze.findItemCenterCursorOffsets(t, e, n), 
                this._clone = ze.createClone(t), ze.hideItem(t);
            },
            unbind: function() {
                document.body.removeChild(this._clone), ze.showItem(this._item), this._item = null;
            },
            dragMove: function(t, e) {
                var n = ze.calcCloneNewDocPosition(this._item, t, e), i = ze.calcCloneNewGridPosition(this._item, n);
                Ze.render(this._clone, n.x, n.y);
                var r = this._getNewIntCns(i);
                0 != r.length && (Kt.eq("sortDispersion", !1) ? (this._swapGUIDS(r), ze.repositionItems()) : this._swapPositions(r) && ze.repositionItems());
            },
            _getNewIntCns: function(t) {
                for (var e = ie.get(this._item), n = Ce.getAllWithIntersectedCenter(t), i = [], r = 0; r < n.length; r++) n[r].itemGUID != e && i.push(n[r]);
                return i;
            },
            _swapGUIDS: function(t) {
                for (var e = ie.get(this._item), n = t[0], i = 0; i < t.length; i++) t[i].itemGUID < n.itemGUID && (n = t[i]);
                ie.set(this._item, n.itemGUID), ie.set(this._clone, n.itemGUID), ie.set(n.item, e);
            },
            _swapPositions: function(t) {
                var e = ve.find(this._item, !0);
                if (null == e) return !1;
                t = ye.sortForReappend(t);
                var n = t[0], i = ie.get(n.item), r = ie.get(this._item);
                return ie.set(this._item, i), ie.set(n.item, r), this._swapCnData(e, n, i), !0;
            },
            _swapCnData: function(t, e, n) {
                var i = t.item;
                t.item = e.item, e.item = i;
                var r = t.itemGUID;
                t.itemGUID = n, e.itemGUID = r;
            }
        }), I = function() {}, n(I, {
            _rev: function(t) {
                for (var e = [], n = 0, i = 0; i < t.length; i++) t[i].length > n && (n = t[i].length);
                for (var r = 0, s = 0; n > s; s++) {
                    for (var o = [], a = 0; a < t.length; a++) "undefined" != typeof t[a][r] && o.push(t[a][r]);
                    e.push(o), r++;
                }
                return e;
            },
            _coords: function(t) {
                return t.isInt = !1, t.centerX = t.x1 + (t.x2 - t.x1 + 1) / 2, t.centerY = t.y1 + (t.y2 - t.y1 + 1) / 2, 
                t;
            },
            _onDefAppend: function(t, e, n, i, r) {
                for (var s = [], o = -1, a = !0; a; ) {
                    for (var u = [], c = -1, l = !0; l; ) c += e, c > i ? l = !1 : u.push(this._coords(r(o, c, t, e)));
                    s.push(u), o += t, o + t > n && (a = !1);
                }
                return s;
            },
            _onRevAppend: function(t, e, n, i, r) {
                for (var s = [], o = -1, a = !0; a; ) {
                    for (var u = [], c = n + 1, l = !0; l; ) c -= e, 0 > c ? l = !1 : u.unshift(this._coords(r(o, c, t, e)));
                    s.push(u), o += t, o + t > i && (a = !1);
                }
                return s;
            },
            discretizeOnDefAppend: function(t, e) {
                var n = {
                    vg: function(t, e, n, i) {
                        return {
                            x1: e - i + 1,
                            x2: e,
                            y1: t + 1,
                            y2: t + n
                        };
                    },
                    hg: function(t, e, n, i) {
                        return {
                            x1: t + 1,
                            x2: t + n,
                            y1: e - i + 1,
                            y2: e
                        };
                    }
                };
                return Kt.eq("grid", "vertical") ? this._onDefAppend(e, t, Jt.y2(), Jt.x2(), n.vg) : this._rev(this._onDefAppend(t, e, Jt.x2(), Jt.y2(), n.hg));
            },
            discretizeOnRevAppend: function(t, e) {
                var n = {
                    vg: function(t, e, n, i) {
                        return {
                            x1: e,
                            x2: e + i - 1,
                            y1: t + 1,
                            y2: t + n
                        };
                    },
                    hg: function(t, e, n, i) {
                        return {
                            x1: t + 1,
                            x2: t + n,
                            y1: e,
                            y2: e + i - 1
                        };
                    }
                };
                return Kt.eq("grid", "vertical") ? this._onRevAppend(e, t, Jt.x2(), Jt.y2(), n.vg) : this._rev(this._onRevAppend(t, e, Jt.y2(), Jt.x2(), n.hg));
            },
            _normalizeCnXYCoords: function(t, e, n, i, r, s, o) {
                var a = e[r] - e[i] + 1, u = Zt["outer" + n](t, !0);
                return (u > a || a > u) && (o && Kt.eq("append", "default") ? e[i] = e[r] - u + 1 : e[r] = e[i] + u - 1), 
                e[i] < 0 && (e[i] = 0, e[r] = u - 1), e[r] > s && (e[r] = s, e[i] = e[r] - u + 1), 
                e;
            },
            normalizeCnXCoords: function(t, e) {
                var n = [ t, e, "Width", "x1", "x2", Jt.x2() ];
                return n.push(Kt.eq("grid", "vertical")), this._normalizeCnXYCoords.apply(this, n);
            },
            normalizeCnYCoords: function(t, e) {
                var n = [ t, e, "Height", "y1", "y2", Jt.y2() ];
                return n.push(!Kt.eq("grid", "vertical")), this._normalizeCnXYCoords.apply(this, n);
            }
        }), x = function() {
            this._cells = [];
        }, n(x, {
            cells: function() {
                return this._cells;
            },
            discretize: function() {
                var t = ve.getMinWidth(), e = ve.getMinHeight(), n = Kt.eq("append", "default") ? "Def" : "Rev";
                this._cells = We["discretizeOn" + n + "Append"](t, e);
            },
            intCellsToCoords: function(t) {
                for (var e = {
                    x1: t[0].x1,
                    x2: t[0].x2,
                    y1: t[0].y1,
                    y2: t[0].y2
                }, n = 1; n < t.length; n++) t[n].x1 < e.x1 && (e.x1 = t[n].x1), t[n].x2 > e.x2 && (e.x2 = t[n].x2), 
                t[n].y1 < e.y1 && (e.y1 = t[n].y1), t[n].y2 > e.y2 && (e.y2 = t[n].y2);
                return e;
            },
            markIntCellsBy: function(t) {
                for (var e = 0; e < this._cells.length; e++) for (var n = 0; n < this._cells[e].length; n++) {
                    var i = this._cells[e][n], r = {
                        x1: i.centerX,
                        x2: i.centerX,
                        y1: i.centerY,
                        y2: i.centerY
                    };
                    this._cells[e][n].isInt = Ce.isIntersectingAny([ r ], t);
                }
            },
            getAllCellsWithIntCenter: function(t) {
                for (var e = [], n = [], i = {
                    rows: 0,
                    cols: 0
                }, r = function(t) {
                    for (var e = 0; e < n.length; e++) if (n[e] == t) return !0;
                    return !1;
                }, s = 0; s < this._cells.length; s++) {
                    for (var o = !1, a = [], u = 0; u < this._cells[s].length; u++) {
                        var c = this._cells[s][u], l = {
                            x1: c.centerX,
                            x2: c.centerX,
                            y1: c.centerY,
                            y2: c.centerY
                        };
                        Ce.isIntersectingAny([ l ], t) && (a.push(c), o || (i.rows++, o = !0), r(u) || (i.cols++, 
                        n.push(u)));
                    }
                    a.length > 0 && e.push(a);
                }
                return {
                    intCells: e,
                    "int": i
                };
            }
        }), P = function() {}, n(P, {
            getIntCellsData: function(t) {
                return 0 == t["int"].cols && 0 == t["int"].rows && (t["int"].cols = 1, t["int"].rows = 1), 
                t;
            },
            isAnyIntCellEmpty: function(t) {
                for (var e = t.intCells, n = !1, i = 0; i < e.length; i++) for (var r = 0; r < e[i].length; r++) e[i][r].isInt || (n = !0);
                return n;
            },
            isIntEnoughRowsAndCols: function(t, e) {
                return e["int"].rows < t["int"].rows || e["int"].cols < t["int"].cols ? !1 : !0;
            },
            normalizeOverflowedCells: function(t, e, n) {
                if (n["int"].rows > e["int"].rows) for (var i = n["int"].rows - e["int"].rows, r = 0; i > r; r++) t.pop();
                if (n["int"].cols > e["int"].cols) for (var s = n["int"].cols - e["int"].cols, o = 0; o < t.length; o++) for (var r = 0; s > r; r++) t[o].pop();
                for (var a = [], o = 0; o < t.length; o++) for (var u = 0; u < t[o].length; u++) a.push(t[o][u]);
                return a;
            }
        }), F = function() {
            this._dragIds = [], this._item = null, this._itemCn = null, this._clone = null, 
            this._pointer = null, this._discretizer = new x();
        }, n(F, {
            get: function() {
                return this._item;
            },
            addDragId: function(t) {
                this._dragIds.push(t);
            },
            hasDragId: function(t) {
                return ze.hasDragId(t, this._dragIds);
            },
            rmDragId: function(t) {
                ze.rmDragId(t, this._dragIds);
            },
            getDragIdsCount: function() {
                return this._dragIds.length;
            },
            bind: function(t, e, n) {
                this._item = t, ze.initItem(t), this._initCn(), ze.calcGridOffsets(), ze.findItemCenterCursorOffsets(t, e, n), 
                this._clone = ze.createClone(t), this._pointer = ze.createPointer(t), this._discretizer.discretize(), 
                this._discretizer.markIntCellsBy(this._itemCn), ze.hideItem(t);
            },
            _initCn: function() {
                this._itemCn = ve.find(this._item), this._itemCn.restrictCollect = !0;
            },
            unbind: function() {
                document.body.removeChild(this._clone), Jt.get().removeChild(this._pointer), ze.showItem(this._item), 
                this._item = null, this._itemCn.restrictCollect = !1;
            },
            dragMove: function(t, e) {
                var n = ze.calcCloneNewDocPosition(this._item, t, e), i = ze.calcCloneNewGridPosition(this._item, n);
                Ze.render(this._clone, n.x, n.y);
                var r = Qe.getIntCellsData(this._discretizer.getAllCellsWithIntCenter(this._itemCn)), s = this._discretizer.getAllCellsWithIntCenter(i);
                Qe.isAnyIntCellEmpty(s) && Qe.isIntEnoughRowsAndCols(r, s) && this._repositionGrid(Qe.normalizeOverflowedCells(s.intCells, r, s));
            },
            _repositionGrid: function(t) {
                var e = this._discretizer.intCellsToCoords(t);
                e = We.normalizeCnXCoords(this._item, e), e = We.normalizeCnYCoords(this._item, e), 
                this._adjustPosition(e), this._discretizer.markIntCellsBy(e), setTimeout(function() {
                    ze.repositionItems();
                }, w.DRAGIFIER_DISCR_REPOS_DELAY);
            },
            _adjustPosition: function(t) {
                for (var e = [ "x1", "x2", "y1", "y2" ], n = 0; n < e.length; n++) this._itemCn[e[n]] = t[e[n]];
                var i = o("get", Kt);
                Kt.getApi("coordsChanger")(this._item, t.x1 + "px", t.y1 + "px", i("coordsChangeTime"), i("coordsChangeTiming"), W, k, i), 
                Ze.render(this._pointer, t.x1, t.y1);
            }
        }), g = function() {
            return function(t, e, n, i, r, s, o, a, u) {
                if (!s.hasTransitions()) return void a("coordsChanger")["default"].apply(this, arguments);
                e = parseFloat(e) + "px", n = parseFloat(n) + "px";
                var u = u || !1;
                return u ? void s.css3.transform(t, "scale3d(1,1,1)") : (e != t.style.left && (s.css3.transitionProperty(t, "left " + i + "ms " + r), 
                s.css.set(t, {
                    left: e
                })), void (n != t.style.top && (s.css3.transitionProperty(t, "top " + i + "ms " + r), 
                s.css.set(t, {
                    top: n
                }))));
            };
        }, _ = function(t, e, n, i) {
            var r = i ? "translate3d" : "translate", s = i ? "(0px,0px,0px)" : "(0px,0px)";
            return function(o, a, u, c, l, h, f, d, g) {
                if (!h.hasTransitions()) return void d("coordsChanger")["default"].apply(this, arguments);
                var g = g || !1;
                if (g) return n(o, a, u, h), void h.css3.transform(o, "scale3d(1,1,1) " + r + s);
                var a = parseFloat(a), u = parseFloat(u), _ = parseFloat(o.style.left), p = parseFloat(o.style.top), m = function(t, e) {
                    return t > e ? t - e : e > t ? -1 * (e - t) : 0;
                }, v = m(a, _), C = m(u, p), T = i ? /.*translate3d\((.*)\).*/ : /.*translate\((.*)\).*/, y = T.exec(o.style[f.get("transform")]);
                if (null == y || "undefined" == typeof y[1] || null == y[1]) var A = !0; else {
                    var E = y[1].split(","), x = E[0].gridifierTrim(), I = E[1].gridifierTrim();
                    if (x == v + "px" && I == C + "px") var A = !1; else var A = !0;
                }
                if (A) {
                    h.css3.transitionProperty(o, f.getForCss("transform", o) + " " + c + "ms " + l), 
                    v = t(v), C = e(C), i && (h.css3.perspective(o, "1000"), h.css3.backfaceVisibility(o, "hidden"));
                    var D = i ? ",0px" : "";
                    h.css3.transformProperty(o, r, v + "px," + C + "px" + D);
                }
            };
        }, u = function(t) {
            this._createBySizesRsorts(t);
        }, n(u, {
            _createBySizesRsorts: function(t) {
                var e = 1e5, n = o("addApi", t), i = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = Math.abs(t[e].x2 - t[e].x1) + 1, i = Math.abs(t[e].y2 - t[e].y1) + 1;
                        t[e].area = Math.round(n * i), t[e].isLandscape = n >= i;
                    }
                }, r = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        for (var i = !0, r = 0; r < e.length; r++) if (e[r].area == t[n].area) {
                            e[r].cns.push(t[n]), i = !1;
                            break;
                        }
                        i && e.push({
                            area: t[n].area,
                            cns: [ t[n] ]
                        });
                    }
                    return e;
                }, s = function(t) {
                    for (var e = [ {
                        area: "landscape",
                        cns: []
                    }, {
                        area: "portrait",
                        cns: []
                    } ], n = 0; n < t.length; n++) {
                        var i = t[n].isLandscape ? 0 : 1;
                        e[i].cns.push(t[n]);
                    }
                    return e;
                }, a = function(t, e, n) {
                    var n = n || !1;
                    if (n) var i = s(t); else {
                        var i = r(t);
                        i.sort(function(t, e) {
                            return parseFloat(e.area) - parseFloat(t.area);
                        });
                    }
                    for (var o = [], a = !1; !a; ) {
                        for (var u = !0, c = 0; c < i.length; c++) if (0 != i[c].cns.length) {
                            if (0 == c) for (var l = 0; e > l; l++) 0 != i[c].cns.length && o.push(i[c].cns.shift()); else o.push(i[c].cns.shift());
                            u = !1;
                        }
                        u && (a = !0);
                    }
                    return o;
                }, u = function(t) {
                    for (var e = 0, n = 0; n < t.length; n++) t[n].rsortPos = ++e;
                }, c = function(t, e) {
                    for (var n = [], i = [], r = 0; r < t.length; r++) i.push(t[r]), (r + 1) % e == 0 && (n.push(i), 
                    i = []);
                    return 0 != i.length && n.push(i), n;
                }, l = function(t, e) {
                    t.splice(0, t.length);
                    for (var n = 0; n < e.length; n++) for (var i = 0; i < e[n].length; i++) t.push(e[n][i]);
                    return t;
                }, h = function(t, e) {
                    return function(n) {
                        i(n), u(n);
                        for (var r = c(n, t), s = 0; s < r.length; s++) r[s] = a(r[s], e);
                        return l(n, r);
                    };
                };
                n("rsort", "areaEvenly", h(e, 1));
                for (var f = [ 2, 3, 4, 5 ], d = [], g = 0; g < f.length; g++) d.push([ "areaEvenlyAll-" + f[g], e, f[g] ]);
                for (var _ = [ 1, 2, 3, 4 ], g = 5; 50 >= g; g += 5) _.push(g);
                for (var g = 0; g < _.length; g++) for (var p = 1; 5 >= p; p++) d.push([ "areaEvenly" + _[g] + "-" + p, _[g], p ]);
                for (var g = 0; g < d.length; g++) {
                    var m = d[g];
                    n("rsort", m[0], h(m[1], m[2]));
                }
                var v = function(t) {
                    var n = t ? -1 : 1;
                    return function(t) {
                        i(t), u(t);
                        for (var r = c(t, e), s = 0; s < r.length; s++) r[s].sort(function(t, e) {
                            return t.area > e.area ? -1 * n : t.area < e.area ? 1 * n : t.rsortPos - e.rsortPos;
                        });
                        return l(t, r);
                    };
                };
                n("rsort", "areaDesc", v(!1)), n("rsort", "areaAsc", v(!0)), n("rsort", "orientationEvenly", function(t) {
                    i(t), u(t);
                    for (var n = c(t, e), r = 0; r < n.length; r++) n[r] = a(n[r], 1, !0);
                    return l(t, n);
                });
            }
        }), a = function() {
            var t = this;
            this._applyReplacers = function(t, e) {
                for (var n = 0; n < e.length; n++) t = t.replace(e[n][0], e[n][1]);
                return t;
            };
            var e = {
                byOriginalPos: function(t, e) {
                    return W["int"](W.get(t, w.COLL.SORT_INDEX_DATA)) - W["int"](W.get(e, w.COLL.SORT_INDEX_DATA));
                },
                byComparator: function(t, e, n) {
                    var i = n ? -1 : 1;
                    return t > e ? 1 * i : e > t ? -1 * i : 0;
                },
                byMultipleComparators: function(t, e, n) {
                    for (var i = 0; i < n.length; i++) {
                        var r = this.byComparator(n[i].forFirst, n[i].forSecond, n[i].reverseOrder);
                        {
                            if (0 != r) return r;
                            if (i == n.length - 1) return this.byOriginalPos(t, e);
                        }
                    }
                },
                buildComparators: function(t, e, n, i, s, o) {
                    if ("undefined" == typeof i && r("No sort comp param."), W.isArray(i)) for (var a = [], u = 0; u < i.length; u++) {
                        var o = !1;
                        -1 !== i[u].indexOf("|desc") && (o = !0, i[u] = i[u].replace("|desc", "")), a.push([ i[u], o ]);
                    } else var a = [ [ i, o ] ];
                    for (var c = [], u = 0; u < a.length; u++) c.push({
                        forFirst: n(t, a[u][0], s),
                        forSecond: n(e, a[u][0], s),
                        reverseOrder: a[u][1]
                    });
                    return c;
                },
                sortBy: function(t, e, n, i, r, s) {
                    return this.byMultipleComparators(t, e, this.buildComparators(t, e, n, i, s || !1, r || !1));
                }
            }, n = {
                Data: function(t, e) {
                    return W.get(t, e);
                },
                Content: function(t) {
                    return t.innerHTML;
                },
                Query: function(t, e) {
                    return W.find.byQuery(t, e)[0].innerHTML;
                }
            }, i = function(t, e, n) {
                return n(e ? this._applyReplacers(t, e) : t);
            }, s = {
                Def: function(t) {
                    return t;
                },
                Int: function(t) {
                    return W["int"](t);
                },
                Float: function(t) {
                    return parseFloat(t);
                }
            }, o = function(e, n) {
                return function(r, s, o) {
                    return i.call(t, e(r, s), o, n);
                };
            }, a = function(t, e) {
                return e ? function(e, n, i, r) {
                    return this.sortBy(e, n, t, null, i, r);
                } : function(e, n, i, r, s) {
                    return this.sortBy(e, n, t, i, r, s);
                };
            }, u = {};
            for (var c in n) for (var l in s) {
                var h = "by" + c + ("Def" == l ? "" : l);
                u[h] = o(n[c], s[l]), e[h] = a(u[h], "Content" == c);
            }
            return e.comparatorFns = u, e;
        }, A = function(t) {
            this._settings = t, this._rotate = new E(), this.create();
        }, n(A, {
            create: function() {
                for (var t = [ "", "WithFade", "WithFadeOut" ], e = [ b.FADES.NONE, b.FADES.FULL, b.FADES.ON_HIDE_MIDDLE ], n = 0; n < t.length; n++) {
                    for (var i in b.MATRICES) {
                        var r = b.MATRICES[i];
                        this._create("rotate3d" + i + t[n], "show3d", "hide3d", r, e[n]);
                    }
                    for (var i in b.FNS) {
                        var s = b.FNS[i];
                        this._create("rotate" + i + t[n], "show", "hide", s, e[n]);
                    }
                }
            },
            _create: function(t, e, n, i, r) {
                var s = this;
                s._settings.addApi("toggle", t, {
                    show: function(t, n, o, a, u, c, l, h, f, d) {
                        return l.flush(t), h.hasTransitions() ? (s._rotate.setFadeType(r), s._rotate.setParams(a, u, c, l, h, f, d), 
                        void s._rotate[e](t, i)) : (h.show(t), void c.emit(f.EVENT.SHOW, t));
                    },
                    hide: function(t, e, o, a, u, c, l, h, f, d) {
                        return l.flush(t), h.hasTransitions() ? (s._rotate.setFadeType(r), s._rotate.setParams(a, u, c, l, h, f, d), 
                        void s._rotate[n](t, i)) : (h.hide(t), void c.emit(f.EVENT.HIDE, t));
                    }
                });
            }
        }), E = function() {
            this._fadeType = null, this._nextRotateGUID = 0;
        }, n(E, {
            setParams: function(t, e, n, i, r, s, o) {
                this._time = t, this._timing = e, this._ev = n, this._sync = i, this._dom = r, this._api = s, 
                this._cn = o;
            },
            setFadeType: function(t) {
                this._fadeType = t;
            },
            show3d: function(t, e) {
                this._rotate(t, "rotate3d", e, !1);
            },
            hide3d: function(t, e) {
                this._rotate(t, "rotate3d", e, !0);
            },
            show: function(t, e) {
                this._rotate(t, e, "", !1);
            },
            hide: function(t, e) {
                this._rotate(t, e, "", !0);
            },
            _rotate: function(t, e, n, i) {
                var r = this._dom, s = this._api, o = this._ev, a = this._cn.x1, u = this._cn.y1, c = !i;
                if (r.has(t, s.ROTATE.GUID_DATA)) {
                    var l = !1, h = r.get(t, s.ROTATE.GUID_DATA), f = r.find.byClass(s.grid, s.ROTATE.SCENE_CLASS_PREFIX + h)[0], d = f.childNodes[0], g = d.childNodes[0], _ = d.childNodes[1], p = _.childNodes[0], m = s.getS("coordsChangeTime"), v = s.getS("coordsChangeTiming");
                    s.cc(f, a, u, m, v, r, s.prefix, s.getS);
                } else {
                    var l = !0;
                    r.set(t, s.ROTATE.GUID_DATA, ++this._nextRotateGUID);
                    var f = this._createScene(t, a, u), d = this._createFrames(f), p = this._createClone(t);
                    r.css.addClass(f, s.ROTATE.SCENE_CLASS_PREFIX + this._nextRotateGUID), r.set(t, s.TOGGLE.IS_ACTIVE, "y");
                    var g = this._createFrame(!0, d, e, n, c, 2), _ = this._createFrame(!1, d, e, n, c, 1);
                    _.appendChild(p), r.hide(t);
                }
                var C = s.prefix.getForCss("transform", g), T = s.prefix.getForCss("transform", _);
                r.css3.transitionProperty(g, C + " " + this._time + "ms " + this._timing), r.css3.transitionProperty(_, T + " " + this._time + "ms " + this._timing), 
                this._sync.add(t, setTimeout(function() {
                    var t = s.getS("rotateAngles"), i = t[c ? 2 : 0], o = t[c ? 3 : 1];
                    r.css3.transformProperty(g, e, n + i + "deg"), r.css3.transformProperty(_, e, n + o + "deg");
                }, 40)), l ? this._initFade(f, c, t) : this._syncFade(f, c), this._sync.add(t, setTimeout(function() {
                    f.parentNode.removeChild(f), r.rm(t, s.TOGGLE.IS_ACTIVE), r.rm(t, s.ROTATE.GUID_DATA), 
                    c ? (r.show(t), o.emit(s.EVENT.SHOW, t)) : (r.hide(t), o.emit(s.EVENT.HIDE, t));
                }, this._time + 40));
            },
            _createScene: function(t, e, n) {
                var i = this._api, r = this._dom, s = r.div(), o = i.sr.getUncomputedCSS(t);
                r.css.set(s, {
                    position: "absolute",
                    left: e,
                    top: n,
                    width: i.srManager.outerWidth(t) + "px",
                    height: i.srManager.outerHeight(t) + "px"
                }), r.css.set4(s, "margin", o), r.css3.perspective(s, i.getS("rotatePerspective")), 
                i.grid.appendChild(s);
                var a = i.getS("coordsChangeTime"), u = i.getS("coordsChangeTiming");
                return i.cc(s, e, n, a, u, r, i.prefix, i.getS, !0), i.cc(s, e, n, a, u, r, i.prefix, i.getS), 
                s;
            },
            _createFrames: function(t) {
                var e = this._dom, n = e.div();
                return e.css.set(n, {
                    width: "100%",
                    height: "100%",
                    position: "absolute"
                }), e.css3.transformStyle(n, "preserve-3d"), e.css3.perspective(n, this._api.getS("rotatePerspective")), 
                t.appendChild(n), n;
            },
            _createClone: function(t) {
                var e = this._dom, n = this._api, i = t.cloneNode(!0);
                n.collect.markAsNotCollectable(i);
                var r = n.sr.getUncomputedCSS(t), s = e["int"](r.height);
                return e.css.set(i, {
                    left: "0px",
                    top: "0px",
                    visibility: "visible",
                    width: n.srManager.outerWidth(t) + "px",
                    height: n.srManager.outerHeight(t) + "px"
                }), e.css.set4(i, "margin", 0), e.css3.transition(i, ""), e.css3.transform(i, ""), 
                0 == s && e.css.set4(i, "padding", 0), i;
            },
            _createFrame: function(t, e, n, i, r, s) {
                var o = this._dom, a = this._api, u = o.div();
                o.css.set(u, {
                    display: "block",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: s
                }), a.getS("rotateBackface") || o.css3.backfaceVisibility(u, "hidden"), e.appendChild(u);
                var c = a.prefix.getForCss("transform", u);
                o.css3.transitionProperty(u, c + " 0ms " + this._timing);
                var l = a.getS("rotateAngles");
                if (t) var h = r ? 0 : 2;
                if (!t) var h = r ? 1 : 3;
                return o.css3.transformProperty(u, n, i + l[h] + "deg"), u;
            },
            _initFade: function(t, e, n) {
                var i = this._dom, r = this._api, s = this._time, o = this._timing, a = r.prefix.getForCss("opacity", t), u = function() {
                    return i.css3.transition(t, "none"), i.css3.opacity(t, e ? 0 : 1), e ? 1 : 0;
                };
                if (this._fadeType != r.ROTATE.FADES.NONE) if (this._fadeType == r.ROTATE.FADES.FULL) {
                    var c = u();
                    this._sync.add(n, setTimeout(function() {
                        i.css3.transition(t, a + " " + s + "ms " + o), i.css3.opacity(t, c);
                    }, 40));
                } else {
                    if (i.css3.transition(t, a + " " + s / 2 + "ms " + o), e) return;
                    this._sync.add(n, setTimeout(function() {
                        i.css3.opacity(t, 0);
                    }, s / 2));
                }
            },
            _syncFade: function(t, e) {
                this._fadeType != this._api.ROTATE.FADES.NONE && this._dom.css3.opacity(t, e ? 1 : 0);
            }
        }), m = function(t) {
            var t = t || !1, e = function(t, e) {
                return function(n, i, r, s, o) {
                    if (e) {
                        var a = o.prefix.getForCss("opacity", n);
                        s.css3.transitionProperty(n, a + " " + i + "ms " + r);
                    }
                    s.css3.opacity(n, t);
                };
            };
            return t ? new v(e("0", !1), e("1", !0), e("0", !0), e("1", !1)) : new v(s(), s(), s(), s());
        }, v = function(t, e, n, i) {
            return {
                show: function(n, i, r, s, o, a, u, c, l, h) {
                    if (u.flush(n), !c.hasTransitions()) return c.show(n), void a.emit(l.EVENT.SHOW, n);
                    if (l.toggle.hasTranslateTransform(n, l.prefix)) {
                        var f = l.srManager;
                        l.toggle.updateTransformOrigin(n, h.x1, h.y1, f.outerWidth(n, !0), f.outerHeight(n, !0), c);
                    }
                    c.has(n, l.TOGGLE.IS_ACTIVE) || (c.css3.transition(n, "none"), t(n, s, o, c, l), 
                    c.css3.transformProperty(n, "scale3d", "0,0,0"), c.set(n, l.TOGGLE.IS_ACTIVE, "y")), 
                    u.add(n, setTimeout(function() {
                        var t = l.prefix.getForCss("transform", n);
                        c.show(n), c.css3.transition(n, t + " " + s + "ms " + o), c.css3.transformProperty(n, "scale3d", "1,1,1"), 
                        e(n, s, o, c, l);
                    }, 40)), u.add(n, setTimeout(function() {
                        l.toggle.resetTransformOrigin(n, c), c.rm(n, l.TOGGLE.IS_ACTIVE), a.emit(l.EVENT.SHOW, n);
                    }, s + 60));
                },
                hide: function(t, e, r, s, o, a, u, c, l, h) {
                    if (u.flush(t), !c.hasTransitions()) return c.hide(t), void a.emit(l.EVENT.HIDE, t);
                    if (l.toggle.hasTranslateTransform(t, l.prefix)) {
                        var f = l.srManager;
                        l.toggle.updateTransformOrigin(t, h.x1, h.y1, f.outerWidth(t, !0), f.outerHeight(t, !0), c);
                    }
                    var d = l.prefix.getForCss("transform", t);
                    c.css3.transition(t, d + " " + s + "ms " + o), c.set(t, l.TOGGLE.IS_ACTIVE, "y"), 
                    c.css3.transformProperty(t, "scale3d", "0,0,0"), n(t, s, o, c, l);
                    var g = s > 200 ? s - 100 : s - 50;
                    0 > g && (g = 0), u.add(t, setTimeout(function() {
                        c.hide(t);
                    }, g)), u.add(t, setTimeout(function() {
                        c.hide(t), c.css3.transition(t, "none"), c.css3.transformProperty(t, "scale3d", "1,1,1"), 
                        i(t, s, o, c, l), c.css3.transition(t, ""), l.toggle.resetTransformOrigin(t, c), 
                        c.rm(t, l.TOGGLE.IS_ACTIVE), a.emit(l.EVENT.HIDE, t);
                    }, s + 20));
                }
            };
        }, T = function(t) {
            this._create(t), this._createPairs(t), this._createCustom(t);
        }, n(T, {
            _create: function(t) {
                var e = [ "Left", "LeftTop", "LeftBottom", "Right", "RightTop", "RightBottom", "Top", "TopLeft", "TopRight", "Bottom", "BottomLeft", "BottomRight" ], n = [ [ !1, !1, !1 ], [ !0, !1, !1 ], [ !1, !0, !1 ], [ !1, !1, !0 ], [ !0, !1, !0 ], [ !1, !0, !0 ] ], i = function(e, i) {
                    for (var r = new y(), s = "toggle", o = 0; 5 >= o; o++) {
                        var a = n[o];
                        t.addApi(s, "slide" + e[o], r.create(!1, a[0], a[1], a[2], i));
                    }
                    for (var o = 0; 5 >= o; o++) {
                        var a = n[o];
                        t.addApi(s, "slide" + e[o + 6], r.create(!0, a[0], a[1], a[2], i));
                    }
                };
                i(e, !1);
                for (var r = 0; r < e.length; r++) e[r] += "WithFade";
                i(e, !0);
            },
            _createPairs: function(t) {
                for (var e = new y(), n = [ [ "LeftThenRight", "Left", "Right" ], [ "TopThenBottom", "Top", "Bottom" ], [ "LeftTopThenRightTop", "LeftTop", "RightTop" ], [ "TopLeftThenBottomLeft", "TopLeft", "BottomLeft" ], [ "LeftBottomThenRightBottom", "LeftBottom", "RightBottom" ], [ "TopRightThenBottomRight", "TopRight", "BottomRight" ] ], i = 0; i < n.length; i++) {
                    var r = "slide", s = "WithFade";
                    t.addApi("toggle", r + n[i][0], e.createCycled([ t.get("toggle")[r + n[i][1]], t.get("toggle")[r + n[i][2]] ])), 
                    t.addApi("toggle", r + n[i][0] + s, e.createCycled([ t.get("toggle")[r + n[i][1] + s], t.get("toggle")[r + n[i][2] + s] ]));
                }
            },
            _createCustom: function(t) {
                for (var e = new y(), n = "slide", i = "WithFade", r = [ [ "ClockwiseFromCenters", "Left", "Top", "Right", "Bottom" ], [ "ClockwiseFromSides", "Left", "Top", "Right", "Bottom" ], [ "ClockwiseFromCorners", "LeftTop", "RightTop", "RightBottom", "LeftBottom" ] ], s = 0; s < r.length; s++) t.addApi("toggle", n + r[s][0], e.createCycled([ t.get("toggle")[n + r[s][1]], t.get("toggle")[n + r[s][2]], t.get("toggle")[n + r[s][3]], t.get("toggle")[n + r[s][4]] ])), 
                t.addApi("toggle", n + r[s][0] + i, e.createCycled([ t.get("toggle")[n + r[s][1] + i], t.get("toggle")[n + r[s][2] + i], t.get("toggle")[n + r[s][3] + i], t.get("toggle")[n + r[s][4] + i] ]));
            }
        }), y = function() {}, n(y, {
            create: function(t, e, n, i, r) {
                var r = r || !1, t = t || !1;
                if (t) var s = "Height", o = "Width", a = "left"; else var s = "Width", o = "Height", a = "top";
                var e = e || !1, n = n || !1, u = !i, c = i, l = function(t, e) {
                    if (u) return -1 * e.srManager["outer" + s](t, !0);
                    if (c) {
                        var n = e.srManager["outer" + s](e.grid), i = e.srManager["outer" + s](t, !0);
                        return n + i;
                    }
                }, h = function(t, i) {
                    if (e) return 0;
                    if (n) {
                        var r = i.srManager["outer" + o](i.grid), s = i.srManager["outer" + o](t, !0);
                        return r + s;
                    }
                    return t.style[a];
                }, f = function(e, n) {
                    var i = {};
                    if (i.x = l(e, n) + "px", i.y = h(e, n) + "px", t) {
                        var r = i.y;
                        i.y = i.x, i.x = r;
                    }
                    return i;
                };
                return {
                    show: function(t, e, n, i, s, o, a, u, c, l) {
                        if (a.flush(t), !u.hasTransitions()) return u.show(t), void o.emit(c.EVENT.SHOW, t);
                        var h = f(t, c);
                        a.add(t, setTimeout(function() {
                            u.set(t, c.TOGGLE.IS_ACTIVE_WITH_CC, "y"), u.has(t, c.TOGGLE.IS_ACTIVE) || (r && (u.css3.transition(t, "none"), 
                            u.css3.opacity(t, 0), u.css3.transition(t, "")), c.cc(t, h.x, h.y, 0, s, u, c.prefix, c.getS), 
                            u.set(t, c.TOGGLE.IS_ACTIVE, "y"));
                        }, 0)), a.add(t, setTimeout(function() {
                            if (u.show(t), r) {
                                var e = c.prefix.getForCss("opacity", t);
                                u.css3.transitionProperty(t, e + " " + i + "ms " + s), u.css3.opacity(t, 1);
                            }
                            c.cc(t, l.x1, l.y1, i, s, u, c.prefix, c.getS);
                        }, 40)), a.add(t, setTimeout(function() {
                            u.rm(t, c.TOGGLE.IS_ACTIVE_WITH_CC), u.rm(t, c.TOGGLE.IS_ACTIVE), o.emit(c.EVENT.SHOW, t);
                        }, i + 60));
                    },
                    hide: function(t, e, n, i, s, o, a, u, c, l) {
                        if (a.flush(t), !u.hasTransitions()) return u.hide(t), void o.emit(c.EVENT.HIDE, t);
                        var h = f(t, c);
                        if (u.set(t, c.TOGGLE.IS_ACTIVE, "y"), u.set(t, c.TOGGLE.IS_ACTIVE_WITH_CC, "y"), 
                        r) {
                            var d = c.prefix.getForCss("opacity", t);
                            u.css3.transition(t, d + " " + i + "ms " + s), u.css3.opacity(t, 0);
                        }
                        c.cc(t, h.x, h.y, i, s, u, c.prefix, c.getS), a.add(t, setTimeout(function() {
                            u.hide(t);
                        }, i)), a.add(t, setTimeout(function() {
                            if (r) {
                                var e = c.prefix.getForCss("opacity", t);
                                u.css3.transitionProperty(t, e + " 0ms " + s), u.css3.opacity(t, 1);
                            }
                            u.rm(t, c.TOGGLE.IS_ACTIVE_WITH_CC), u.hide(t), u.rm(t, c.TOGGLE.IS_ACTIVE), o.emit(c.EVENT.HIDE, t);
                        }, i + 20));
                    }
                };
            },
            createCycled: function(t) {
                var e = 1;
                return {
                    show: function() {
                        e++;
                        var n = e % t.length, i = t[n];
                        i.show.apply(this, arguments);
                    },
                    hide: function() {
                        e++;
                        var n = e % t.length, i = t[n];
                        i.hide.apply(this, arguments);
                    }
                };
            }
        }), C = function() {
            return {
                show: function(t, e, n, i, r, s, o, a, u) {
                    return o.flush(t), a.hasTransitions() ? (a.has(t, u.TOGGLE.IS_ACTIVE) || (a.css3.transition(t, "none"), 
                    a.css3.opacity(t, "0"), a.set(t, u.TOGGLE.IS_ACTIVE, "y")), o.add(t, setTimeout(function() {
                        var e = u.prefix.getForCss("opacity", t);
                        a.show(t), a.css3.transition(t, e + " " + i + "ms " + r), a.css3.opacity(t, 1);
                    }, 40)), void o.add(t, setTimeout(function() {
                        a.rm(t, u.TOGGLE.IS_ACTIVE), s.emit(u.EVENT.SHOW, t);
                    }, i + 60))) : (a.show(t), void s.emit(u.EVENT.SHOW, t));
                },
                hide: function(t, e, n, i, r, s, o, a, u) {
                    if (o.flush(t), !a.hasTransitions()) return a.hide(t), void s.emit(u.EVENT.HIDE, t);
                    var c = u.prefix.getForCss("opacity", t);
                    a.css3.transition(t, c + " " + i + "ms " + r), a.set(t, u.TOGGLE.IS_ACTIVE, "y"), 
                    a.css3.opacity(t, "0"), o.add(t, setTimeout(function() {
                        a.rm(t, u.TOGGLE.IS_ACTIVE), a.hide(t), a.css3.transition(t, "none"), a.css3.opacity(t, "1"), 
                        a.css3.transition(t, ""), s.emit(u.EVENT.HIDE, t);
                    }, i + 20));
                }
            };
        }, W.init(), q.init();
        var Qt = this, Zt = new lt(), jt = new ut(), Jt = new Tt(), $t = new _t(), Kt = new Nt(), te = new gt(), ee = o("eq", Kt), ne = new ot(), ie = new at(), re = new l(), se = new Ct(), oe = new mt(), ae = new h(), ue = new K(), ce = new $(), le = new tt(), he = new et(), fe = new nt(), de = new it(), ge = new rt(), _e = new st(), pe = ee("grid", "vertical") ? new Xt() : new Ht(), me = ee("grid", "vertical") ? new qt() : new Mt(), ve = new z(), Ce = new Q(), Te = new Z(), ye = new j(), Ae = new J(), Ee = new ct(), xe = (new pt(), 
        new Rt()), Ie = new It(), De = new Dt(), Re = new c(), Se = ee("grid", "vertical") ? new Ut() : new Bt(), Oe = ee("grid", "vertical") ? new kt() : new Gt(), Pe = ee("grid", "vertical") ? new Wt() : new Vt(), Fe = ee("grid", "vertical") ? new zt() : new Yt(), Ne = new dt(), we = new ht(), Le = new ft(), be = new Pt(), Be = new Ot(), Me = new St(), He = new xt(), Ge = new yt(), Ve = new Et(), Ye = new At(), Ue = (new Ft(), 
        new wt(), new a()), qe = new Lt(), Xe = new bt(), ke = new D(), We = new I(), ze = new S(), Qe = new P(), Ze = new R();
        return this;
    };
    return t;
});