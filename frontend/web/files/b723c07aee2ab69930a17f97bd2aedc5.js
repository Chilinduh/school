/**handles:ohio-slider,jquery-mega-menu,tilt-effect,aos,ohio-main**/
!function (e) {
    "use strict";
    var i = {
        init: function (i) {
            return this.each(function () {
                var s = e(this), t = s.children().length, a = e(".slider-scroll-label").length, l = "", n = "",
                    r = s.hasClass("clb-slider") ? s.find(".clb-slider-item:not(.cloned)").length : s.children().length;
                const o = e("body").hasClass("rtl");
                var d = 1, c = 0, p = 0, g = 0, v = {
                    items: 1,
                    navBtn: !0,
                    dots: !1,
                    pagination: !1,
                    autoplay: !1,
                    autoplayTimeout: 3e3,
                    autoplayHoverPause: !0,
                    loop: !1,
                    responsive: !1,
                    mousewheel: !1,
                    drag: !1,
                    gap: 0,
                    scrollToSlider: !1,
                    verticalScroll: !1,
                    navBtnClasses: "",
                    startSlide: !1,
                    autoHeight: !1,
                    slidesCount: !1
                }, u = (s.data({slideNow: d}), b());
                !function (i) {
                    if (s.hasClass("clb-slider")) var a = s.find("> .clb-slider-outer-stage > .clb-slider-stage > .clb-slider-item"); else {
                        s.addClass("clb-slider");
                        var r = e('<div class="clb-slider-outer-stage"><div class="clb-slider-stage"></div><div>'),
                            a = s.children().addClass("clb-slider-item");
                        if (i.navBtn) {
                            var d = '<div class="clb-slider-nav-btn"><div class="prev-btn icon-button ' + i.navBtnClasses + '" tabindex="0"><i class="icon"><svg class="default" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8,16l1.4-1.4L3.8,9H16V7H3.8l5.6-5.6L8,0L0,8L8,16z"/></svg></i></div><div class="next-btn icon-button ' + i.navBtnClasses + '" tabindex="0"><i class="icon"><svg class="default" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/></svg></i></div></div>';
                            s.append(e(d))
                        }
                        if (i.verticalScroll) var c = L(a);
                        if (i.dots) {
                            for (var p = e('<div class="clb-slider-nav-dots"></div>'), v = e('<div class="clb-slider-dot"><svg width="22px" height="22px" viewBox="0 0 22 22"><g stroke="#17161A" stroke-width="2" fill="none" transform="translate(11, 11)"><circle cx="0" cy="0" r="10"></circle></g></svg></div>'), u = t; 0 != u; u--) v.clone().appendTo(p);
                            p.find(".clb-slider-dot:first-child").addClass("active"), s.append(p), l = s.find("> .clb-slider-nav-dots > .clb-slider-dot")
                        }
                        if (i.pagination) {
                            for (var h = e('<div class="clb-slider-pagination"></div>'), m = e('<div class="clb-slider-page"></div>'), u = 1; u <= t; u++) u < 10 ? m.clone().append('<span class="clb-slider-pagination-index"> 0' + u + "</span>").appendTo(h) : m.clone().append('<span class="clb-slider-pagination-index">' + u + "</span>").appendTo(h);
                            h.find(".clb-slider-page:first-child").addClass("active"), s.append(h), n = s.find("> .clb-slider-pagination > .clb-slider-page")
                        }
                        if (i.slidesCount) {
                            var f = e('<div class="clb-slider-count"><div class="clb-slider-count-current"></div><div class="clb-slider-count-total">' + t + "</div></div>"),
                                b = e('<div class="clb-slider-count-number"></div>');
                            s.append(f);
                            for (var w = s.find(".clb-slider-count-current"), u = 1; u <= t; u++) b.clone().append('<span class="clb-slider-pagination-index">' + u + "</span>").appendTo(w);
                            b.clone().append('<span class="clb-slider-pagination-index">' + t + "</span>").prependTo(w), b.clone().append('<span class="clb-slider-pagination-index">1</span>').appendTo(w), g = s.find(".clb-slider-count-number").height();
                            var x = s.find(".clb-slider-count-current");
                            x.css({
                                transform: "translate(0, -" + g + "px)",
                                "-webkit-transform": "translate(0, -" + g + "px)",
                                "-ms-transform": "translate(0, -" + g + "px)"
                            })
                        }
                        a.wrapAll(r)
                    }
                    i.loop || (a.slice(0, i.items).addClass("active"), e(a[0 + i.items]).addClass("next-slide"), s.addClass("first-slide"));
                    if (i.verticalScroll) {
                        var C = s.width();
                        i.items, i.gap, i.items;
                        s.find("> .clb-slider-outer-stage > .clb-slider-stage").css({"min-width": C + "px"});
                        var T = s.height(), y = T * t / i.items + i.gap / i.items * t;
                        a.css("height", c + "px"), o ? a.css("margin-left", i.gap + "px") : a.css("margin-right", i.gap + "px"), s.css("height", c);
                        var T = a.height();
                        s.find("> .clb-slider-stage").css({height: y + "px", width: "auto"})
                    } else {
                        var C = s.width(), S = C / i.items - i.gap + i.gap / i.items;
                        a.css("min-width", S + "px"), o ? a.css("margin-left", i.gap + "px") : a.css("margin-right", i.gap + "px");
                        var T = a.height();
                        s.find("> .clb-slider-outer-stage").css("max-width", S * i.items + "px")
                    }
                }(u);
                var h, m = s.find(" > .clb-slider-outer-stage > .clb-slider-stage"), f = m.find(" > .clb-slider-item");

                function b() {
                    var s = e.extend(v, i);
                    return v.responsive && e(v.responsive).each(function (t) {
                        for (var a in e(this)[t]) if (e(window).width() <= a) return s = e.extend(v, i.responsive[a])
                    }), s
                }

                function w(i, s, l, n, o, c) {
                    i.trigger("clb-slider.change").trigger("clb-slider.next-change"), (s.loop && d != t - r || d < r) && (n.removeClass("active prev-slide next-slide"), l.css({transition: "1s"}), i.removeClass("first-slide"), s.loop && ++d, s.loop ? (s.dots || s.pagination) && k(d - r) : (s.dots || s.pagination) && k(d), n.slice(d, d + s.items).addClass("active"), e(n[d - 1]).addClass("prev-slide"), e(n[d + s.items]).addClass("next-slide"), p = s.verticalScroll ? -i.height() / s.items * d - s.gap / s.items * d : -i.width() / s.items * d - s.gap / s.items * d, H(), s.loop || ++d == r && i.addClass("last-slide"), s.loop && d - s.items, d == t - r && s.loop && (n.slice(r, r + s.items).addClass("active"), 1, setTimeout(function () {
                        i.find("> .clb-slider-outer-stage > .clb-slider-stage > .cloned").removeClass("active"), e(n[d = r]).addClass("active"), p = s.verticalScroll ? -i.height() / s.items * d - s.gap / s.items * d : -i.width() / s.items * d - s.gap / s.items * d, H(), (s.dots || s.pagination) && k(d - r), l.css({transition: "none"}), a && S()
                    }, 1e3))), a && S(), y(d), setTimeout(function () {
                        i.trigger("clb-slider.changed")
                    }, 1e3)
                }

                function x(i, s, l, n, o, c) {
                    i.trigger("clb-slider.change").trigger("clb-slider.prev-change"), (s.loop && d != r - s.items || d > 1) && (l.css({transition: "1s"}), i.removeClass("last-slide"), s.loop || (--d - 1, 1 == d && i.addClass("first-slide")), p = s.verticalScroll ? -i.height() / s.items * (d - 1) - s.gap / s.items * d + +s.gap / s.items : -i.width() / s.items * (d - 1) - s.gap / s.items * d + +s.gap / s.items, H(), s.loop && --d - 1, s.loop ? ((s.dots || s.pagination) && k(d - r < 0 ? d : d - r), n.removeClass("active prev-slide next-slide"), n.slice(d, d + s.items).addClass("active"), e(n[d - 2]).addClass("prev-slide"), e(n[d + s.items]).addClass("next-slide")) : ((s.dots || s.pagination) && k(d - 1), n.removeClass("active prev-slide next-slide"), n.slice(d - 1, d + s.items - 1).addClass("active"), e(n[d - 2]).addClass("prev-slide"), e(n[d + s.items - 1]).addClass("next-slide")), d == r - s.items && s.loop && (n.slice(2 * r - s.items, 2 * r - s.items + s.items).addClass("active"), t - s.items - 1, setTimeout(function () {
                        i.find("> .clb-slider-outer-stage > .clb-slider-stage > .cloned").removeClass("active"), d = 2 * r - s.items, e(n[d]).addClass("active"), p = s.verticalScroll ? -i.height() / s.items * d - s.gap / s.items * d : -i.width() / s.items * d - s.gap / s.items * d, l.css({transition: "none"}), H(), s.pagination && k(d - r), a && S()
                    }, 1e3))), a && S(), y(d), setTimeout(function () {
                        i.trigger("clb-slider.changed")
                    }, 1e3)
                }

                function C(i, s, a) {
                    a.on("click", function () {
                        m.css({transition: "1s"}), c = e(this).index(), s.loop && (c = c + r - 1), c + 1 != d && (c + 1 > t - s.items && (c = c - s.items + 1), d = c, w(i, s, m, f))
                    })
                }

                function T(e) {
                    var i = e.find("> .clb-slider-outer-stage");
                    i[0].style.height = "";
                    var s = L(i.find("> .clb-slider-stage > .clb-slider-item.active"));
                    i.height(s)
                }

                function y(e) {
                    var i = s.find(".clb-slider-count-current"), t = i.find(".clb-slider-count-number"), a = 0,
                        l = s.find(".clb-slider-count-number").height();

                    function n() {
                        i.css({
                            transform: "translate(0, -" + l * a + "px)",
                            "-webkit-transform": "translate(0, -" + l * a + "px)",
                            "-ms-transform": "translate(0, -" + l * a + "px)"
                        })
                    }

                    i.css({transition: ".3s"}), u.loop ? (a = e - r + 1) == t.length ? a = 0 : a < 0 ? a = r + t : a > r ? setTimeout(function () {
                        a = 1, i.css({transition: "none"}), n()
                    }, 300) : 0 == a && setTimeout(function () {
                        a = r, i.css({transition: "none"}), n()
                    }, 300) : a = e, n()
                }

                function S() {
                    if (s.hasClass("clb-slider-scroll-bar")) {
                        let i = u.loop ? d - r + 1 : d, s = 100 / r * i;
                        s > 100 && (s = 100), e(".scroll-track").css("width", s + "%")
                    }
                }

                function k(i) {
                    l && (l.removeClass("active"), e(l[i]).addClass("active")), n && (n.removeClass("active"), e(n[i]).addClass("active"))
                }

                function H() {
                    p = Math.round(p), o && !u.verticalScroll && (p *= -1), u.verticalScroll ? m.css({
                        transform: "translate(0, " + p + "px)",
                        "-webkit-transform": "translate(0, " + p + "px)",
                        "-ms-transform": "translate(0, " + p + "px)"
                    }) : m.css({
                        transform: "translate(" + p + "px, 0)",
                        "-webkit-transform": "translate(" + p + "px, 0)",
                        "-ms-transform": "translate(" + p + "px, 0)"
                    })
                }

                function B() {
                    m.css({transition: "none"});
                    var e = b();
                    if (e.verticalScroll) {
                        var i = (r = s.width()) * t / e.items + e.gap / e.items * t;
                        s.find("> .clb-slider-stage").css({width: i + "px"});
                        var a = (n = s.height()) / e.items - e.gap + e.gap / e.items,
                            l = n * t / e.items + e.gap / e.items * t;
                        f.css("height", a + "px"), o ? f.css("margin-left", e.gap + "px") : f.css("margin-right", e.gap + "px"), s.css("height", a);
                        var n = f.height();
                        s.find("> .clb-slider-stage").css({height: l + "px", width: "auto"})
                    } else {
                        var r, c = (r = s.width()) / e.items - e.gap + e.gap / e.items;
                        i = r * t / e.items + e.gap / e.items * t;
                        f.css("min-width", c + "px"), o ? f.css("margin-left", e.gap + "px") : f.css("margin-right", e.gap + "px");
                        n = f.height();
                        s.find("> .clb-slider-stage").css({width: i + "px"})
                    }
                    p = e.verticalScroll ? -s.height() / e.items * d - e.gap / e.items * d : -s.width() / e.items * d - e.gap / e.items * d, H(), e.autoHeight && T(s)
                }

                function L(i) {
                    var s = 0;
                    return i.each(function () {
                        e(this).outerHeight() > s && (s = e(this).outerHeight())
                    }), s
                }

                !function () {
                    u.loop && (m.find(" > .cloned").length || (e(f).clone().addClass("cloned").appendTo(m), e(f).clone().addClass("cloned").prependTo(m)), f = m.find(" > .clb-slider-item"), d = r, t = f.length, f.slice(d, d + u.items).addClass("active"), p = u.verticalScroll ? -s.height() / u.items * d - u.gap / u.items * d : -s.width() / u.items * d - u.gap / u.items * d, H(), e(f[d - 1]).addClass("prev-slide"), e(f[d + u.items]).addClass("next-slide"));
                    !0 === u.mousewheel && function (i, s, a, r) {
                        i.offset().top, e(window).height(), i.outerHeight();
                        var o = !0;
                        if (-1 != navigator.userAgent.indexOf("Mac OS X")) ; else ;
                        i.on("wheel mousewheel", function (c) {
                            var p = c.originalEvent.deltaY;
                            if (-1 != navigator.userAgent.indexOf("Mac OS X")) var g = 1300; else var g = 1e3;
                            if ((1 == s.scrollToSlider && 1 == d && p > 0 || d == t && p < 0) && (e("html, body").animate({scrollTop: i.offset().top + "px"}), c.preventDefault()), !o) return !1;
                            p > 0 && d < t ? (w(i, s, a, r, l, n), o = !1, c.preventDefault()) : p < 0 && d > 1 && (x(i, s, a, r, l, n), o = !1, c.preventDefault()), setTimeout(function () {
                                o = !0
                            }, g)
                        })
                    }(s, u, m, f);
                    !0 === u.drag && function (e, i, s, t) {
                        var a = !0, r = 100;
                        e.find(" > .clb-slider-outer-stage ").on("mousedown touchstart", function (o) {
                            var d = o.clientX;
                            if ("touchstart" == o.type) {
                                d = o.originalEvent.touches[0].pageX;
                                var c = o.originalEvent.touches[0].pageY
                            }
                            e.find(" > .clb-slider-outer-stage ").on("mousemove touchmove", function (o) {
                                if (1 == a) {
                                    var p = o.pageX;
                                    if ("touchmove" == o.type) {
                                        if (o.originalEvent.touches[0].pageY > c + 40 || o.originalEvent.touches[0].pageY < c - 40) return;
                                        p = o.originalEvent.touches[0].pageX, r = 50
                                    }
                                    p + r < d ? (w(e, i, s, t, l, n), d = o.clientX, a = !1) : p - r > d && (x(e, i, s, t, l, n), d = o.clientX, a = !1)
                                }
                            }), setTimeout(function () {
                                a = !0
                            }, 1e3), e.find(" > .clb-slider-outer-stage ")[0].ondragstart = function () {
                                return !1
                            }
                        }), e.find(" > .clb-slider-outer-stage ").on("mouseup touchend", function (i) {
                            e.find(" > .clb-slider-outer-stage ").off("mousemove touchmove")
                        })
                    }(s, u, m, f);
                    !0 === u.autoplay && function (i, s, t, a) {
                        var r = setInterval(function () {
                            i.hasClass("stop-slide") || w(i, s, t, a, l, n)
                        }, s.autoplayTimeout);
                        1 == s.autoplayHoverPause && i.hover(function () {
                            e(this).addClass("stop-slide")
                        }, function () {
                            e(this).removeClass("stop-slide")
                        });
                        e(window).on("resize", function () {
                            clearInterval(r), r = setInterval(function () {
                                i.hasClass("stop-slide") || w(i, s, t, a, l, n)
                            }, s.autoplayTimeout)
                        })
                    }(s, u, m, f);
                    if (!0 === u.dots) {
                        var i = s.find(".clb-slider-dot, .clb-slider-page");
                        C(s, u, i)
                    }
                    if (!0 === u.pagination) {
                        var o = s.find(".clb-slider-dot, .clb-slider-page");
                        C(s, u, o)
                    }
                    u.verticalScroll && s.addClass("clb-slider-vertical");
                    !0 === u.navBtn && (s.find("> .clb-slider-nav-btn .next-btn").on("click", function () {
                        s.trigger("clb-slider.navBtnClick"), w(s, u, m, f, l, n)
                    }), s.find("> .clb-slider-nav-btn .prev-btn").on("click", function () {
                        s.trigger("clb-slider.navBtnClick"), x(s, u, m, f, l, n)
                    }));
                    !1 !== u.startSlide && (d = +u.startSlide, f.removeClass("active"), f.slice(d, +d + u.items).addClass("active"), p = u.verticalScroll ? -s.height() / u.items * d - u.gap / t - u.gap / 2 : -s.width() / u.items * d - u.gap / t - u.gap / 2, H(), d++);
                    e(window).on("keydown", function (e) {
                        var i = e.which || e.keyCode;
                        37 == i && x(s, u, m, f, l, n), 39 == i && w(s, u, m, f, l, n)
                    }), !0 === u.autoHeight && s.on("clb-slider.init clb-slider.changed", function () {
                        T(s)
                    });
                    a && S();
                    s.on("to-slide", function (e, i) {
                        d = i, w(s, u, m, f, l, n)
                    }), s.on("next-slide", function (e) {
                        w(s, u, m, f, l, n)
                    }), s.on("prev-slide", function (e) {
                        x(s, u, m, f, l, n)
                    }), setTimeout(function () {
                        s.trigger("clb-slider.init")
                    }, 10), s.on("executeAutoHeight", function () {
                        T(s)
                    })
                }();
                var X = !1, A = e(window).width();
                e(window).on("resize", function () {
                    e(window).width() != A && (h = new Date, !1 === X && (X = !0, setTimeout(function () {
                        new Date - h < 200 ? setTimeout(function () {
                            X = !1, B()
                        }, 200) : (X = !1, B())
                    }, 200)))
                })
            })
        }, destroy: function () {
            return this.each(function () {
                var i = e(this), s = i.find(".clb-slider-item");
                i.removeClass("clb-slider"), s.unwrap(), s.removeAttr("style").removeClass("clb-slider-item active")
            })
        }
    };
    jQuery.fn.clbSlider = function (s) {
        return i[s] ? i[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? void e.error("Method with name " + s + " doesn't exist") : i.init.apply(this, arguments)
    }
}(jQuery);

(function ($, window, document) {
    "use strict";
    var pluginName = "accessibleMegaMenu", defaults = {
        uuidPrefix: "accessible-megamenu",
        menuClass: "accessible-megamenu",
        topNavItemClass: "accessible-megamenu-top-nav-item",
        panelClass: "accessible-megamenu-panel",
        panelGroupClass: "accessible-megamenu-panel-group",
        hoverClass: "hover",
        focusClass: "focus",
        openClass: "open"
    }, Keyboard = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        keyMap: {
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            190: "."
        }
    };

    function AccessibleMegaMenu(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    AccessibleMegaMenu.prototype = (function () {
        var uuid = 0, keydownTimeoutDuration = 1000, keydownSearchString = "",
            isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
            _getPlugin, _addUniqueId, _togglePanel, _clickHandler, _clickOutsideHandler, _DOMAttrModifiedHandler,
            _focusInHandler, _focusOutHandler, _keyDownHandler, _mouseDownHandler, _mouseOverHandler, _mouseOutHandler,
            _toggleExpandedEventHandlers;
        _getPlugin = function (element) {
            return $(element).closest(':data(plugin_' + pluginName + ')').data("plugin_" + pluginName);
        };
        _addUniqueId = function (element) {
            element = $(element);
            var settings = this.settings;
            if (!element.attr("id")) {
                element.attr("id", settings.uuidPrefix + "-" + new Date().getTime() + "-" + (++uuid));
            }
        };
        _togglePanel = function (event, hide) {
            var target = $(event.target), that = this, settings = this.settings, menu = this.menu,
                topli = target.closest('.' + settings.topNavItemClass),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                newfocus;
            _toggleExpandedEventHandlers.call(this, hide);
            $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu, pointerup.outside-accessible-megamenu', _clickOutsideHandler);
            menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
            if (hide) {
                topli = menu.find('.' + settings.topNavItemClass + ' .' + settings.openClass + ':first').closest('.' + settings.topNavItemClass);
                if (!(topli.is(event.relatedTarget) || topli.has(event.relatedTarget).length > 0)) {
                    if ((event.type === 'mouseout' || event.type === 'focusout') && topli.has(document.activeElement).length > 0) {
                        return;
                    }
                    topli.find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
                    if ((event.type === 'keydown' && event.keyCode === Keyboard.ESCAPE) || event.type === 'DOMAttrModified') {
                        newfocus = topli.find(':tabbable:first');
                        setTimeout(function () {
                            menu.find('[aria-expanded].' + that.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
                            newfocus.focus();
                            that.justFocused = false;
                        }, 99);
                    }
                } else if (topli.length === 0) {
                    menu.find('[aria-expanded=true]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
                }
            } else {
                clearTimeout(that.focusTimeoutID);
                topli.siblings().find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
                topli.find('[aria-expanded]').attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false');
                jQuery(this.element).trigger('megamenu:open', topli.find('[aria-expanded]'));
                if (event.type === 'mouseover' && target.is(':tabbable') && topli.length === 1 && panel.length === 0 && menu.has(document.activeElement).length > 0) {
                    target.focus();
                    that.justFocused = false;
                }
                _toggleExpandedEventHandlers.call(that);
            }
        };
        _clickHandler = function (event) {
            var target = $(event.target), topli = target.closest('.' + this.settings.topNavItemClass),
                panel = target.closest('.' + this.settings.panelClass);
            if (topli.length === 1 && panel.length === 0 && topli.find('.' + this.settings.panelClass).length === 1) {
                if (!target.hasClass(this.settings.openClass)) {
                    event.preventDefault();
                    event.stopPropagation();
                    _togglePanel.call(this, event);
                } else {
                    if (this.justFocused) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.justFocused = false;
                    } else if (isTouch) {
                        event.preventDefault();
                        event.stopPropagation();
                        _togglePanel.call(this, event, target.hasClass(this.settings.openClass));
                    }
                }
            }
        };
        _clickOutsideHandler = function (event) {
            if (this.menu.has($(event.target)).length === 0) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };
        _DOMAttrModifiedHandler = function (event) {
            if (event.originalEvent.attrName === 'aria-expanded' && event.originalEvent.newValue === 'false' && $(event.target).hasClass(this.settings.openClass)) {
                event.preventDefault();
                event.stopPropagation();
                _togglePanel.call(this, event, true);
            }
        };
        _focusInHandler = function (event) {
            clearTimeout(this.focusTimeoutID);
            $(event.target).addClass(this.settings.focusClass).on('click.accessible-megamenu', $.proxy(_clickHandler, this));
            this.justFocused = true;
            if (this.panels.filter('.' + this.settings.openClass).length) {
                _togglePanel.call(this, event);
            }
        };
        _focusOutHandler = function (event) {
            this.justFocused = false;
            var that = this, target = $(event.target), topli = target.closest('.' + this.settings.topNavItemClass),
                keepOpen = false;
            target.removeClass(this.settings.focusClass).off('click.accessible-megamenu', _clickHandler);
            if (window.cvox) {
                that.focusTimeoutID = setTimeout(function () {
                    window.cvox.Api.getCurrentNode(function (node) {
                        if (topli.has(node).length) {
                            clearTimeout(that.focusTimeoutID);
                        } else {
                            that.focusTimeoutID = setTimeout(function (scope, event, hide) {
                                _togglePanel.call(scope, event, hide);
                            }, 275, that, event, true);
                        }
                    });
                }, 25);
            } else {
                that.focusTimeoutID = setTimeout(function () {
                    _togglePanel.call(that, event, true);
                }, 300);
            }
        };
        _keyDownHandler = function (event) {
            var target = $($(this).is('.hover:tabbable') ? this : event.target),
                that = target.is(event.target) ? this : _getPlugin(target), settings = that.settings, menu = that.menu,
                topnavitems = that.topnavitems, topli = target.closest('.' + settings.topNavItemClass),
                tabbables = menu.find(':tabbable'),
                panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
                panelGroups = panel.find('.' + settings.panelGroupClass),
                currentPanelGroup = target.closest('.' + settings.panelGroupClass), next,
                keycode = event.keyCode || event.which, start, i, o, label, found = false,
                newString = Keyboard.keyMap[event.keyCode] || '', regex,
                isTopNavItem = (topli.length === 1 && panel.length === 0);
            if (target.is('.hover:tabbable')) {
                $('html').off('keydown.accessible-megamenu');
            }
            switch (keycode) {
                case Keyboard.ESCAPE:
                    _togglePanel.call(that, event, true);
                    break;
                case Keyboard.DOWN:
                    event.preventDefault();
                    if (isTopNavItem) {
                        _togglePanel.call(that, event);
                        found = (topli.find('.' + settings.panelClass + ' :tabbable:first').focus().length === 1);
                    } else {
                        found = (tabbables.filter(':gt(' + tabbables.index(target) + '):first').focus().length === 1);
                    }
                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        found = ($(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                    }
                    break;
                case Keyboard.UP:
                    event.preventDefault();
                    if (isTopNavItem && target.hasClass(settings.openClass)) {
                        _togglePanel.call(that, event, true);
                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                        if (next.children('.' + settings.panelClass).length) {
                            found = (next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus() === 1);
                            jQuery(this.element).trigger('megamenu: open', next.children());
                        }
                    } else if (!isTopNavItem) {
                        found = (tabbables.filter(':lt(' + tabbables.index(target) + '):last').focus().length === 1);
                    }
                    if (!found && window.opera && opera.toString() === "[object Opera]" && (event.ctrlKey || event.metaKey)) {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        found = ($(':tabbable:lt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                    }
                    break;
                case Keyboard.RIGHT:
                    event.preventDefault();
                    if (isTopNavItem) {
                        found = (topnavitems.filter(':gt(' + topnavitems.index(topli) + '):first').find(':tabbable:first').focus().length === 1);
                    } else {
                        if (panelGroups.length && currentPanelGroup.length) {
                            found = (panelGroups.filter(':gt(' + panelGroups.index(currentPanelGroup) + '):first').find(':tabbable:first').focus().length === 1);
                        }
                        if (!found) {
                            found = (topli.find(':tabbable:first').focus().length === 1);
                        }
                    }
                    break;
                case Keyboard.LEFT:
                    event.preventDefault();
                    if (isTopNavItem) {
                        found = (topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last').find(':tabbable:first').focus().length === 1);
                    } else {
                        if (panelGroups.length && currentPanelGroup.length) {
                            found = (panelGroups.filter(':lt(' + panelGroups.index(currentPanelGroup) + '):last').find(':tabbable:first').focus().length === 1);
                        }
                        if (!found) {
                            found = (topli.find(':tabbable:first').focus().length === 1);
                        }
                    }
                    break;
                case Keyboard.TAB:
                    i = tabbables.index(target);
                    if (event.shiftKey && isTopNavItem && target.hasClass(settings.openClass)) {
                        _togglePanel(event, true);
                        next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
                        if (next.children('.' + settings.panelClass).length) {
                            found = next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus();
                            jQuery(this.element).trigger('megamenu: open', next.children());
                        }
                    } else if (event.shiftKey && i > 0) {
                        found = (tabbables.filter(':lt(' + i + '):last').focus().length === 1);
                    } else if (!event.shiftKey && i < tabbables.length - 1) {
                        found = (tabbables.filter(':gt(' + i + '):first').focus().length === 1);
                    } else if (window.opera && opera.toString() === "[object Opera]") {
                        tabbables = $(':tabbable');
                        i = tabbables.index(target);
                        if (event.shiftKey) {
                            found = ($(':tabbable:lt(' + $(':tabbable').index(target) + '):last').focus().length === 1);
                        } else {
                            found = ($(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1);
                        }
                    }
                    if (found) {
                        event.preventDefault();
                    }
                    break;
                case Keyboard.SPACE:
                    if (isTopNavItem) {
                        event.preventDefault();
                        _clickHandler.call(that, event);
                    }
                    break;
                default:
                    clearTimeout(this.keydownTimeoutID);
                    keydownSearchString += newString !== keydownSearchString ? newString : '';
                    if (keydownSearchString.length === 0) {
                        return;
                    }
                    this.keydownTimeoutID = setTimeout(function () {
                        keydownSearchString = '';
                    }, keydownTimeoutDuration);
                    if (isTopNavItem && !target.hasClass(settings.openClass)) {
                        tabbables = tabbables.filter('.' + settings.topNavItemClass + ' > :tabbable');
                    } else {
                        tabbables = topli.find(':tabbable');
                    }
                    if (event.shiftKey) {
                        tabbables = $(tabbables.get().reverse());
                    }
                    for (i = 0; i < tabbables.length; i++) {
                        o = tabbables.eq(i);
                        if (o.is(target)) {
                            start = (keydownSearchString.length === 1) ? i + 1 : i;
                            break;
                        }
                    }
                    regex = new RegExp('^' + keydownSearchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), 'i');
                    for (i = start; i < tabbables.length; i++) {
                        o = tabbables.eq(i);
                        label = $.trim(o.text());
                        if (regex.test(label)) {
                            found = true;
                            o.focus();
                            break;
                        }
                    }
                    if (!found) {
                        for (i = 0; i < start; i++) {
                            o = tabbables.eq(i);
                            label = $.trim(o.text());
                            if (regex.test(label)) {
                                o.focus();
                                break;
                            }
                        }
                    }
                    break;
            }
            that.justFocused = false;
        };
        _mouseDownHandler = function (event) {
            this.mouseTimeoutID = setTimeout(function () {
                clearTimeout(this.focusTimeoutID);
            }, 1);
        };
        _mouseOverHandler = function (event) {
            clearTimeout(this.mouseTimeoutID);
            $(event.target).addClass(this.settings.hoverClass);
            _togglePanel.call(this, event);
            if ($(event.target).is(':tabbable')) {
                $('html').on('keydown.accessible-megamenu', $.proxy(_keyDownHandler, event.target));
            }
        };
        _mouseOutHandler = function (event) {
            var that = this;
            $(event.target).removeClass(that.settings.hoverClass);
            that.mouseTimeoutID = setTimeout(function () {
                _togglePanel.call(that, event, true);
            }, 300);
            if ($(event.target).is(':tabbable')) {
                $('html').off('keydown.accessible-megamenu');
            }
        };
        _toggleExpandedEventHandlers = function (hide) {
            var menu = this.menu;
            if (hide) {
                $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', _clickOutsideHandler);
                menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu', _DOMAttrModifiedHandler);
            } else {
                $('html').on('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', $.proxy(_clickOutsideHandler, this));
                menu.find('[aria-expanded=true].' + this.settings.panelClass).on('DOMAttrModified.accessible-megamenu', $.proxy(_DOMAttrModifiedHandler, this));
            }
        };
        return {
            constructor: AccessibleMegaMenu, init: function () {
                var that = this, settings = this.settings, justFocused = this.justFocused = false,
                    nav = this.nav = $(this.element), menu = this.menu = nav.children().first(),
                    topnavitems = this.topnavitems = menu.children();
                nav.attr("role", "navigation");
                menu.addClass(settings.menuClass);
                topnavitems.each(function (i, topnavitem) {
                    var topnavitemlink, topnavitempanel;
                    topnavitem = $(topnavitem);
                    topnavitem.addClass(settings.topNavItemClass);
                    topnavitemlink = topnavitem.find(":tabbable:first");
                    topnavitempanel = topnavitem.children(":not(:tabbable):last");
                    _addUniqueId.call(that, topnavitemlink);
                    if (topnavitempanel.length) {
                        _addUniqueId.call(that, topnavitempanel);
                        topnavitemlink.attr({
                            "aria-haspopup": true,
                            "aria-owns": topnavitempanel.attr("id"),
                            "aria-controls": topnavitempanel.attr("id"),
                            "aria-expanded": false
                        });
                        topnavitempanel.attr({
                            "role": "group",
                            "aria-expanded": false,
                            "aria-hidden": true
                        }).addClass(settings.panelClass).not("[aria-labelledby]").attr("aria-labelledby", topnavitemlink.attr("id"));
                    }
                });
                this.panels = menu.find("." + settings.panelClass);
                menu.on("focusin.accessible-megamenu", ":tabbable, :focusable, ." + settings.panelClass, $.proxy(_focusInHandler, this)).on("focusout.accessible-megamenu", ":tabbable, :focusable, ." + settings.panelClass, $.proxy(_focusOutHandler, this)).on("keydown.accessible-megamenu", $.proxy(_keyDownHandler, this)).on("mouseover.accessible-megamenu", $.proxy(_mouseOverHandler, this)).on("mouseout.accessible-megamenu", $.proxy(_mouseOutHandler, this)).on("mousedown.accessible-megamenu", $.proxy(_mouseDownHandler, this));
                if (isTouch) {
                    menu.on("touchstart.accessible-megamenu", $.proxy(_clickHandler, this));
                }
                menu.find("hr").attr("role", "separator");
            }, getDefaults: function () {
                return this._defaults;
            }, getOption: function (opt) {
                return this.settings[opt];
            }, getAllOptions: function () {
                return this.settings;
            }, setOption: function (opt, value, reinitialize) {
                this.settings[opt] = value;
                if (reinitialize) {
                    this.init();
                }
            }
        };
    }());
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new AccessibleMegaMenu(this, options));
            }
        });
    };

    function visible(element) {
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
            return $.css(this, "visibility") === "hidden";
        }).length;
    }

    function focusable(element, isTabIndexNotNaN) {
        var map, mapName, img, nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap=#" + mapName + "]")[0];
            return !!img && visible(img);
        }
        return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible(element);
    }

    $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
            return function (elem) {
                return !!$.data(elem, dataName);
            };
        }) : function (elem, i, match) {
            return !!$.data(elem, match[3]);
        }, focusable: function (element) {
            return focusable(element, !isNaN($.attr(element, "tabindex")));
        }, tabbable: function (element) {
            var tabIndex = $.attr(element, "tabindex"), isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
        }
    });
}(jQuery, window, document));
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (s, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(s)), t(i), i
    } : t(jQuery)
}(function (t) {
    return t.fn.tilt = function (s) {
        const i = function () {
            this.ticking || (requestAnimationFrame(l.bind(this)), this.ticking = !0)
        }, e = function () {
            void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({transition: `${this.settings.speed}ms ${this.settings.easing}`}), this.settings.glare && this.glareElement.css({transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`}), this.timeout = setTimeout(() => {
                t(this).css({transition: ""}), this.settings.glare && this.glareElement.css({transition: ""})
            }, this.settings.speed)
        }, n = function (s) {
            this.ticking = !1, t(this).css({"will-change": "transform"}), e.call(this), t(this).trigger("tilt.mouseEnter")
        }, a = function (s) {
            return void 0 === s && (s = {
                pageX: t(this).offset().left + t(this).outerWidth() / 2,
                pageY: t(this).offset().top + t(this).outerHeight() / 2
            }), {x: s.pageX, y: s.pageY}
        }, h = function (t) {
            this.mousePositions = a(t), i.call(this)
        }, r = function () {
            e.call(this), this.reset = !0, i.call(this), t(this).trigger("tilt.mouseLeave")
        }, o = function () {
            const s = t(this).outerWidth(), i = t(this).outerHeight(), e = t(this).offset().left,
                n = t(this).offset().top;
            try {
                const t = (this.mousePositions.x - e) / s, a = (this.mousePositions.y - n) / i;
                return {
                    tiltX: (this.settings.maxTilt / 2 - t * this.settings.maxTilt).toFixed(2),
                    tiltY: (a * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                    percentageX: 100 * t,
                    percentageY: 100 * a,
                    angle: Math.atan2(this.mousePositions.x - (e + s / 2), -(this.mousePositions.y - (n + i / 2))) * (180 / Math.PI)
                }
            } catch (t) {
            }
        }, l = function () {
            if (this.transforms = o.call(this), this.reset) return this.reset = !1, t(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`), void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")));
            t(this).css("transform", `perspective(${this.settings.perspective}px) rotateX(${"x" === this.settings.disableAxis ? 0 : this.transforms.tiltY}deg) rotateY(${"y" === this.settings.disableAxis ? 0 : this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`), this.settings.glare && (this.glareElement.css("transform", `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`), this.glareElement.css("opacity", `${this.transforms.percentageY * this.settings.maxGlare / 100}`)), t(this).trigger("change", [this.transforms]), this.ticking = !1
        }, g = function () {
            this.glareElement.css({width: `${2 * t(this).outerWidth()}`, height: `${2 * t(this).outerWidth()}`})
        };
        return t.fn.tilt.destroy = function () {
            t(this).each(function () {
                t(this).find(".js-tilt-glare").remove(), t(this).css({
                    "will-change": "",
                    transform: ""
                }), t(this).off("mousemove mouseenter mouseleave")
            })
        }, t.fn.tilt.getValues = function () {
            const s = [];
            return t(this).each(function () {
                this.mousePositions = a.call(this), s.push(o.call(this))
            }), s
        }, t.fn.tilt.reset = function () {
            t(this).each(function () {
                this.mousePositions = a.call(this), this.settings = t(this).data("settings"), r.call(this), setTimeout(() => {
                    this.reset = !1
                }, this.settings.transition)
            })
        }, this.each(function () {
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
            }, s), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = (() => {
                t(this).data("settings", this.settings), this.settings.glare && function () {
                    const s = this.settings.glarePrerender;
                    if (s || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), s) return;
                    this.glareElementWrapper.css({
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }).css({overflow: "hidden", "pointer-events": "none"}), this.glareElement.css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        width: `${2 * t(this).outerWidth()}`,
                        height: `${2 * t(this).outerWidth()}`,
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    })
                }.call(this), function () {
                    t(this).on("mousemove", h), t(this).on("mouseenter", n), this.settings.reset && t(this).on("mouseleave", r), this.settings.glare && t(window).on("resize", g.bind(this))
                }.call(this)
            }), this.init()
        })
    }, t("[data-tilt]").tilt(), !0
});
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function () {
    return function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {exports: {}, id: o, loaded: !1};
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), f = o(c), s = n(8), d = o(s), l = n(9), p = o(l), m = n(10),
            b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = document.all && !window.atob, j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, O = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
            }, _ = function () {
                w = (0, h.default)(), O()
            }, S = function () {
                w.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            }, z = function (e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
            }, A = function (e) {
                return j = i(j, e), w = (0, h.default)(), z(j.disable) || x ? S() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function () {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function () {
                    O(!0)
                }), window.addEventListener("resize", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
                    (0, b.default)(w, j.once)
                }, j.throttleDelay)), j.disableMutationObserver || (0, d.default)("[data-aos]", _), w)
            };
        e.exports = {init: A, refresh: O, refreshHard: _}
    }, function (e, t) {
    }, , , , , function (e, t) {
        (function (t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b, o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(s, t), _ ? o(e) : g
                }

                function a(e) {
                    var n = e - w, o = e - k, i = t - n;
                    return S ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w, o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(), n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }

                var b, v, y, g, h, w, k = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0, a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }

            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f = "Expected a function", s = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt,
                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max,
                j = Math.min, O = function () {
                    return h.Date.now()
                };
            e.exports = o
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        (function (t) {
            "use strict";

            function n(e, t, n) {
                function i(t) {
                    var n = b, o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function r(e) {
                    return O = e, h = setTimeout(s, t), _ ? i(e) : g
                }

                function u(e) {
                    var n = e - w, o = e - O, i = t - n;
                    return S ? x(i, y - o) : i
                }

                function f(e) {
                    var n = e - w, o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function s() {
                    var e = j();
                    return f(e) ? d(e) : void (h = setTimeout(s, u(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? i(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(j())
                }

                function m() {
                    var e = j(), n = f(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(s, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }

                var b, v, y, g, h, w, O = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
            }

            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }

            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c = "Expected a function", f = NaN, s = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt,
                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max,
                x = Math.min, j = function () {
                    return g.Date.now()
                };
            e.exports = n
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";

        function n(e, t) {
            var n = new r(o);
            a = t, n.observe(i.documentElement, {childList: !0, subtree: !0, removedNodes: !0})
        }

        function o(e) {
            e && e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes), n = Array.prototype.slice.call(e.removedNodes),
                    o = t.concat(n).filter(function (e) {
                        return e.hasAttribute && e.hasAttribute("data-aos")
                    }).length;
                o && a()
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = window.document,
            r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            a = function () {
            };
        t.default = n
    }, function (e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                return function (t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            f = function () {
                function e() {
                    n(this, e)
                }

                return i(e, [{
                    key: "phone", value: function () {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile", value: function () {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet", value: function () {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new f
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e, t, n) {
            var o = e.node.getAttribute("data-aos-once");
            t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
        }, o = function (e, t) {
            var o = window.pageYOffset, i = window.innerHeight;
            e.forEach(function (e, r) {
                n(e, i + o, t)
            })
        };
        t.default = o
    }, function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(12), r = o(i), a = function (e, t) {
            return e.forEach(function (e, n) {
                e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
            }), e
        };
        t.default = a
    }, function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(13), r = o(i), a = function (e, t) {
            var n = 0, o = 0, i = window.innerHeight, a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                case"top-bottom":
                    break;
                case"center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case"bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case"top-center":
                    n += i / 2;
                    break;
                case"bottom-center":
                    n += i / 2 + e.offsetHeight;
                    break;
                case"center-center":
                    n += i / 2 + e.offsetHeight / 2;
                    break;
                case"top-top":
                    n += i;
                    break;
                case"bottom-top":
                    n += e.offsetHeight + i;
                    break;
                case"center-top":
                    n += e.offsetHeight / 2 + i
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
        };
        t.default = a
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {top: n, left: t}
        };
        t.default = n
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
                return {node: e}
            })
        };
        t.default = n
    }])
});
!function (e) {
    "use strict";

    function t() {
        e("[data-nav-search]").on("click", function (t) {
            t.preventDefault(), A(".search-popup"), e(".search-results:not(body)").empty()
        }), Clb.searchPopup.find("form").on("click", function (e) {
            e.stopPropagation()
        }), i(), o(), a()
    }

    function i() {
        Clb.header && Clb.header.length && (Clb.isMobileMenu ? (Clb.header.addClass("-mobile"), Clb.body.addClass("is-mobile-menu"), e(".nav").addClass("-visible")) : (Clb.header.removeClass("-mobile"), Clb.body.removeClass("is-mobile-menu"), e(".nav").removeClass("-visible")))
    }

    function o() {
        a(), Clb.isMobileMenu && Clb.megaMenu.find("ul").css({left: "", width: "", "max-width": "", "min-width": ""})
    }

    function a() {
        var t = Clb.headerFixed;
        e(document).scrollTop() > t.initialOffset ? (!Clb.isMobileMenu && t.enabled && !t.value || Clb.isMobileMenu && t.mobileEnabled && !t.mobileValue) && (Clb.isMobileMenu ? t.mobileValue = !0 : t.value = !0, Clb.header.addClass("-sticky"), Clb.logo.css("display", "none"), Clb.mobileLogo.css("display", "none"), Clb.logoForOnepage.css("display", "none"), Clb.isMobileMenu && Clb.fixedMobileLogo.length ? Clb.fixedMobileLogo.css("display", "flex") : Clb.fixedLogo.css("display", "flex")) : (t.value || t.mobileValue) && (t.value = !1, t.mobileValue = !1, Clb.header.removeClass("-sticky"), Clb.fixedLogo.css("display", ""), Clb.fixedMobileLogo.css("display", ""), Clb.isMobileMenu && Clb.mobileLogo.length ? (Clb.logo.css("display", "none"), Clb.logoForOnepage.css("display", "none"), Clb.mobileLogo.css("display", "flex")) : (Clb.logo.css("display", "flex"), Clb.logoForOnepage.css("display", ""), Clb.mobileLogo.css("display", "none"))), e(document).scrollTop() > t.initialOffset + 50 ? Clb.header.addClass("showed") : Clb.header.removeClass("showed")
    }

    function s() {
        if (e(".page-headline .page-title").hasClass("no-transition") && e(".page-headline h1").length) {
            var t = e(document).scrollTop() / 3;
            t = t > 200 ? 200 : t, e(".page-headline h1, .page-headline p.subtitle, .page-headline .tags").css({
                transform: "translate3d(0," + t + "px, 0)",
                opacity: 1 - t / 200
            })
        }
    }

    function n() {
        var t = e(".site-footer").height(), i = e(".sticky-product"), o = e(".sticky-nav:not(.sticky-nav-product)"),
            a = e(document).height() - e(window).height() - t;
        e(window).scroll(function () {
            e(window).scrollTop() > a && i.removeClass("-faded"), Clb.isMobile || (e(window).scrollTop() > a ? o.addClass("-fade-up") : o.removeClass("-fade-up"))
        })
    }

    function l() {
        setTimeout(function () {
            e(".sub-menu, .sub-sub-menu").each(function () {
                var t = e(this).find("> .mega-menu-item"), i = 0;
                t.each(function () {
                    i += e(this).outerHeight(!0)
                }), e(this).attr("data-sub-menu-height", i)
            })
        }, 300)
    }

    function r() {
        var t = 0, i = Boolean(e(".nav").attr("data-mobile-menu-second-click-link"));
        e('[aria-controls="site-menu"]').on("click", function () {
            A(".nav .mobile-overlay")
        }), e('[aria-label="close"], .overlay, .-mobile #site-navigation a').on("click", function () {
            e("#mega-menu-sub-" + t).removeClass("active"), e("#mega-menu-sub-" + t).removeAttr("id"), t--, e("#site-navigation").removeClass("active"), e(".close-menu").css("right", "-100%"), e(".hamburger").removeClass("hidden"), e("#masthead .search").removeClass("visible"), (Clb.isMobileMenu || Clb.isTablet) && S(e(".nav .mobile-overlay"))
        }), Clb.isTablet ? (e(document).on("keydown", function (t) {
            27 == t.keyCode && S(e(".nav .mobile-overlay"))
        }), l()) : e(document).on("click", function (t) {
            e(t.target).hasClass("sub-menu-wide") || e(t.target).parents(".nav-item").find(".sub-menu-wide").length || e(".sub-menu-wide").parent().removeClass("active")
        }), e("a.menu-link").on("click", function () {
            e(this).attr("href").includes("#") && (t = 0, e('[id^="mega-menu-sub-"]').removeClass("active"), e('[id^="mega-menu-sub-"]').removeAttr("id"), e("#site-navigation").removeClass("active"), e(".close-menu").css("right", "-100%"), e(".hamburger").removeClass("hidden"), e("#masthead .search").removeClass("visible"), S(e(".clb-popup.hamburger-nav")), S(e(".header .mobile-overlay.menu-mobile-overlay.visible")))
        }), e(".has-submenu > a").off().on("click touchend", function (t) {
            if (Clb.isTablet || Clb.isMobileMenu) {
                var o = e(this).parents(".sub-menu"), a = e(this).parent();
                if (a.hasClass("active")) {
                    const l = this.querySelector(".has-submenu-icon").contains(t.target);
                    if (i && !l) return;
                    if (a.removeClass("active"), (n = a.find(".sub-menu, .sub-sub-menu")).hasClass("sub-menu")) Clb.isMobileMenu && n.css("height", 0), a.find("active").removeClass("active"); else {
                        var s = n.data("sub-menu-height");
                        Clb.isMobileMenu && n.css("height", 0), e(this).parents(".sub-menu, .sub-sub-menu").length && Clb.isMobileMenu && e(this).parents(".sub-menu, .sub-sub-menu").each(function () {
                            s += e(this).data("sub-menu-height");
                            var t = 0;
                            e(this).find(".active > .sub-sub-menu").each(function () {
                                t += e(this).data("sub-menu-height")
                            }), e(this).css("height", e(this).data("sub-menu-height") + t)
                        }), Clb.isMobileMenu && o.css("height", o - s)
                    }
                } else {
                    var n = a.find("> .sub-menu, > .sub-sub-menu");
                    if (a.siblings().removeClass("active"), a.siblings().find(".mega-menu-item").removeClass("active"), Clb.isMobileMenu && (n.hasClass("sub-menu") ? a.siblings().find(".sub-menu, .sub-sub-menu").css("height", "0") : (a.siblings().find(".sub-menu, .sub-sub-menu").css("height", "0"), o.css("height", n.data("sub-menu-height")))), a.addClass("active"), Clb.isMobileMenu) if (n.hasClass("sub-menu")) n.css("height", n.data("sub-menu-height")); else {
                        s = n.data("sub-menu-height");
                        n.css("height", n.data("sub-menu-height")), e(this).parents(".sub-menu, .sub-sub-menu").length && e(this).parents(".sub-menu, .sub-sub-menu").each(function () {
                            s += e(this).data("sub-menu-height");
                            var t = 0;
                            e(this).find(".active > .sub-sub-menu").each(function () {
                                t += e(this).data("sub-menu-height")
                            }), e(this).css("height", e(this).data("sub-menu-height") + t)
                        }), o.css("height", s)
                    }
                }
                t.preventDefault()
            }
        }), e("#mega-menu-wrap .sub-sub-menu").each(function () {
            if (e(this).offset().left + e(this).outerWidth() > e(window).width()) {
                e(this).addClass("menu-left");
                var t = e(this).outerWidth();
                e(this).css("left", -t)
            }
        }), e('[aria-controls="site-menu"]').on("click", function (e) {
            e.preventDefault(), handleHamburgerMenu()
        });
        e('[aria-label="close"]').on("click", function () {
            e(".hamburger-nav").removeClass("visible").find(".menu > li").each(function (t) {
                e(this).removeClass("showed active")
            })
        }), e(".sub-menu-wide").parent().mouseover(function () {
            d()
        });
        var o = e(".hamburger-nav-holder");
        if (o.length) {
            var a = o.parents(".hamburger-nav");
            if (a.hasClass("type2") || a.hasClass("type3")) o.find(".mega-menu-item").each(function () {
                var t = e(this).find("> a");
                t.find("> span").clone().addClass("cloned").appendTo(t), t.find(".has-submenu-icon").addClass("icon-button -small")
            }), o.find(".has-submenu > a .has-submenu-icon").off().on("click touchend", function (t) {
                t.preventDefault();
                var i = e(this).parent().parent();
                i.hasClass("active") ? i.hasClass("active") && i.removeClass("active") : (i.siblings().removeClass("active"), i.siblings().find(".mega-menu-item").removeClass("active"), i.addClass("active"))
            })
        }
    }

    function d() {
        e(".nav-container .sub-menu-wide").each(function () {
            var t = e(this).parent().find(".menu-link").offset().left - e(window).height() / 100 * 3;
            e(this).css("left", -1 * t)
        })
    }

    function c() {
        var t = e(".nav-container .sub-menu-wide");
        t.css("left", ""), setTimeout(function () {
            t.each(function () {
                var t = e(this).parent().find(".menu-link").offset().left - e(window).height() / 100 * 3;
                e(this).css("left", -1 * t)
            })
        }, 1e3)
    }

    function h() {
        e("[data-ohio-accordion]").each(function () {
            var t = e(this), i = e(this).find(".accordion-button"), o = e(this).find(".accordion-item"),
                a = e(this).find(".accordion-collapse"), s = function (e) {
                    var i = t.find(".active"), s = a.eq(e);
                    o.eq(e).hasClass("active") ? (o.eq(e).removeClass("active"), o.eq(e).find(".accordion-collapse").css("height", "")) : (o.removeClass("active"), o.eq(e).addClass("active"), setTimeout(function () {
                        s.css("height", "");
                        var e = s.find(".accordion-body").outerHeight() + "px";
                        s.find(".accordion-collapse").css("height", ""), setTimeout(function () {
                            i.find(".accordion-collapse").css("height", ""), i.removeClass(".active"), s.css("height", e)
                        }, 30)
                    }, 30))
                };
            i.each(function (t) {
                e(this).on("click", function () {
                    s(t)
                })
            }), this.accordionToggle = s
        })
    }

    function u() {
        setTimeout(function () {
            e("[data-ohio-accordion]").each(function () {
                var t = e(this).find(".accordion-item.active"), i = t.find(".accordion-body");
                t.find(".accordion-collapse").css("height", i.outerHeight() + "px")
            })
        }, 100)
    }

    function f() {
        e(".contact-form").each(function () {
            var t = e(this).find('[type="submit"]'), i = e(this).find('[data-button-contact="true"] button');
            t.length && (i.html(t.val()), t.replaceWith(i), e(this).find(".ajax-loader").remove()), e(this).hasClass("without-label-offset") && (e(this).find(".wpcf7-form-control-wrap").after('<div class="focus"></div>'), e(this).find("input, textarea, select").on("focus", function () {
                e(this).parent().parent().find(".focus").addClass("active")
            }).on("blur", function () {
                e(this).parent().parent().find(".focus").removeClass("active")
            }))
        }), e(".contact-form form").on("submit", function () {
            var t = e(this).find("[data-button-loading]");
            t.hasClass("-link"), t.addClass("btn-loading")
        }), e(document).on("wpcf7spam wpcf7invalid wpcf7mailsent wpcf7mailfailed wpcf7submit ", function (t) {
            var i = e(".contact-form");
            e(i).find("[data-button-loading]").removeClass("btn-loading"), e(i).find("[data-button-loading]").hasClass("-link")
        })
    }

    function m() {
        e("[data-circle-progress]").each(function (t) {
            var i = e(this), o = e(this).find(".progress-value")[0], a = e(i).data("percent-value");
            const s = o.r.animVal.value, n = 2 * Math.PI * s;
            o.style.strokeDasharray = n, a < 0 && (a = 0), a > 100 && (a = 100), function (e) {
                var t = n * (1 - e / 100);
                o.style.strokeDashoffset = t
            }(a);
            var l = i.find(".range .range-value")[0];
            !function (e, t, i) {
                var o = e;
                setInterval(function () {
                    o < t && (o++, l.innerHTML = o)
                }, 1e3 / t)
            }(0, a)
        })
    }

    function p() {
        e("[data-compare]").each(function () {
            var t = e(this);
            t.compare({
                no_overlay: t.data("compare-without-overlay"),
                before_label: t.data("compare-before-label"),
                after_label: t.data("compare-after-label"),
                orientation: t.data("compare-orientation"),
                default_offset_pct: parseFloat(t.data("compare-position"))
            });
            var i = t.find(".compare-handle");
            i.find(".compare-left-arrow, .compare-right-arrow").remove(), i.each(function () {
                e(this).append('<button aria-label="Drag the handle" class="icon-button"><i class="icon"></i></button>')
            })
        })
    }

    function g() {
        e("[data-counter]").each(function () {
            var t = e(this);
            if (e(document).scrollTop() + e(window).height() > t.offset().top + t.height()) {
                var i = parseInt(t.attr("data-counter").replace(/\s/g, ""));
                t.removeAttr("data-counter");
                for (var o = 0; o <= 20; o++) !function (e) {
                    setTimeout(function () {
                        var o = Math.round(i / 20 * e);
                        t.find(".number").html(o)
                    }, 50 * e)
                }(o)
            }
        })
    }

    function b() {
        e("[data-countdown]").each(function () {
            const e = new Date(this.getAttribute("data-date"));
            if (isNaN(e)) return;
            const [t, i, o, a, s] = Array.from(this.querySelectorAll(".countdown-item .number"));
            jQuery(this).countdown(e, ({offset: e}) => {
                s.innerHTML = e.seconds, a.innerHTML = e.minutes, o.innerHTML = e.hours, i.innerHTML = e.months ? e.days : e.daysToMonth, t.innerHTML = e.months
            })
        })
    }

    function v() {
        e('div[data-dynamic-text="true"]').each(function () {
            var t = JSON.parse(e(this).attr("data-dynamic-text-options"));
            new Typed("#" + e(this).attr("id") + " .dynamic", t)
        })
    }

    function w() {
        e("body").on("click", "[data-gallery-item]", function () {
            Clb.body.addClass("gallery-opened");
            var t = e(this).closest("[data-gallery]"), i = e("#" + t.attr("data-gallery")), o = t.find(".gallery-item");
            i[0].options;
            if (e(".site-footer.sticky").length && !Clb.isMobile && Clb.header.css("z-index", "1"), A(i), e(this).closest(".ohio-widget").length) var a = e(this).find(".gimg").eq(0); else if (e(".single-product").length) a = e(this).parents(".woo-product-image-slider").find(".gimg").eq(0); else a = e(this).find(".gimg").eq(0);
            var s = a.clone().css({
                height: a.outerHeight() + "px",
                top: a.offset().top - e(window).scrollTop(),
                left: a.offset().left
            }).addClass("gallery-tmpimage"), n = e(document.createElement("div")).addClass("slider");
            i.find(".clb-popup-holder").append(n), o.each(function () {
                var t = e(document.createElement("div"));
                t.addClass("image-wrap").append(e(this).find(".gimg").eq(0).clone());
                var i = e(this).find(".card-details");
                if (i.length) {
                    var o = i.clone();
                    t.append(o).addClass("with-description"), e(window).width() > 787 && setTimeout(function () {
                        t.find(".image-wrap").css("height", "calc(100% - " + (o.outerHeight() - 5) + "px)")
                    }, 10)
                }
                n.append(t)
            });
            var l = e(this).attr("data-gallery-item");
            n.clbSlider({navBtn: !0, drag: !0, dots: !1, startSlide: l}), e(document.body).append(s);
            var r = n.find("img.gimg").eq(l);
            setTimeout(function () {
                s.css({
                    height: r.outerHeight() + "px",
                    top: r.offset().top - i.offset().top + "px",
                    left: "",
                    "margin-left": "-" + r.outerWidth() / 2 + "px"
                }).addClass("active"), n.addClass("ready"), setTimeout(function () {
                    n.addClass("visible")
                }, 200), setTimeout(function () {
                    s.remove()
                }, 800)
            }, 100)
        })
    }

    function C() {
        e(".horizontal-accordion").each(function () {
            var t, i, o = e(this), a = o.find(".horizontal-accordion-item"),
                s = Clb.isMobile ? 90 : 100 - 100 / (a.length - 1), n = a.length, l = 1, r = a.length - 1;
            if (Clb.isMobile) a.removeAttr("style"); else {
                for (a.eq(0).addClass("active"); n > 0; n--) a.eq(n - 1).css({"z-index": l}), n > 1 && (a.eq(n - 1).css({transform: "translateX(-" + s * r + "%)"}), r--), l++;
                a.on("click", function (n) {
                    t = e(this), i = a.index(t), function (e, t, i, o, a) {
                        var s, n, l = t;
                        i.hasClass("moved") ? (s = o.find(".horizontal-accordion-item.moved"), n = s.slice(t, s.length), s.each(function (e) {
                            e >= l && setTimeout(function () {
                                s.eq(l).css("transform", "translateX(-" + a * l + "%)"), l++
                            }, 50 * e)
                        }), n.removeClass("moved"), e.removeClass("active"), i.addClass("active")) : ((n = e.slice(0, t).addClass("moved")).each(function (t) {
                            setTimeout(function () {
                                e.eq(t).css("transform", "translateX(-" + a * (t + 1) + "%)")
                            }, 50 * t)
                        }), e.removeClass("active"), i.addClass("active"))
                    }(a, i, t, o, s), o.find(".horizontal-accordion-item.moved").length ? o.addClass("open") : setTimeout(function () {
                        o.removeClass("open")
                    }, 400)
                })
            }
        })
    }

    function y() {
        e("[data-parallax-bg]").each(function () {
            var t = e(this);
            t.parent(".wpb_wrapper").addClass("full-height");
            var i = t.find(".parallax-bg"), o = t.attr("data-parallax-speed");
            t.data("oldHeight", i.height()), t.data("isHeadlineLoad", !0), "vertical" == t.attr("data-parallax-bg") ? t.find(".parallax-bg").css({height: t.outerHeight() + 200 * o + "px"}) : t.find(".parallax-bg").css({width: t.outerWidth() + 200 * o + "px"}), i.addClass("vertical" == t.attr("data-parallax-bg") ? "" : "horizontal")
        })
    }

    function x() {
        var t = e(document).scrollTop(), i = e(window).height();
        e("[data-parallax-bg]").each(function () {
            var o = e(this), a = o.offset().top, s = o.outerHeight();
            o.outerWidth();
            if (a <= t + i && a + s >= t) {
                var n = 100 * parseFloat(o.attr("data-parallax-speed")), l = o.find(".parallax-bg"), r = l.height(),
                    d = o.data("oldHeight"), c = -2 * ((-a + t + i) / (s + i)) * n;
                o.parents(".page-headline").length && o.data("isHeadlineLoad") ? "vertical" == o.attr("data-parallax-bg") && (l.css("transform", "translate3d(0, " + -(r - d) / 2 + "px, 0)"), o.data("isHeadlineLoad", !1)) : "vertical" == o.attr("data-parallax-bg") ? (l.css("transform", "translate3d(0, " + c + "px, 0)"), o.parents(".page-headline").length && l.css("transition", "transform linear 0.1s")) : l.css("transform", "translate3d(" + c + "px, 0, 0)")
            }
        })
    }

    function _() {
        e("[data-ohio-progress-bar]:not([data-processed])").each(function () {
            var t, i = e(this), o = i.find(".progress-bar"), a = parseInt(i.attr("data-ohio-progress-bar")),
                s = i.find("[data-tooltip]").length, n = e(document).scrollTop() + e(window).height();
            if (0 == o.length && i.hasClass("split")) {
                (r = e(document.createElement("div")).addClass("line-split")).append(e(document.createElement("div")).addClass("line brand-bg-color"));
                for (var l = 0; l < 8; l++) {
                    var r = r.clone();
                    i.find(".line-wrap").append(r), r.find(".line").css({left: -(r.offset().left - i.offset().left) + "px"})
                }
                s && i.find(".line-wrap").append('<div class="line"><h4 class="line-percent"><span class="percent">0</span>%</h4></div>'), o = i.find(".line")
            }
            if (t = i.find(".percent"), n > i.offset().top + i.height()) {
                i.attr("data-processed", "true"), i.hasClass("inner"), o.css("width", a + "%");
                for (var d = 0; d <= 40; d++) !function (e) {
                    setTimeout(function () {
                        t.html(Math.round(a / 40 * e))
                    }, 30 * e)
                }(d)
            }
        })
    }

    function k(t) {
        void 0 === t && (t = e(".gimg")), e("[data-ohio-slider]").each(function () {
            var t = e(this), i = e(this).attr("data-ohio-slider");
            (i = i ? JSON.parse(i) : {}).autoplay && (i.autoplayTimeout = 1e3 * i.autoplayTimeout), i.items = +i.itemsDesktop || 5, i.responsive = {
                1180: {items: +i.itemsTablet || 3},
                768: {items: +i.itemsMobile || 1}
            }, delete i.itemsDesktop, delete i.itemsTablet, delete i.itemsMobile, t.clbSlider(i), t.hasClass("with-preloader") && (t.addClass("visible"), t.parent().find(".sk-preloader").addClass("hidden")), t.find(".cloned .elementor-invisible").removeClass("elementor-invisible")
        }), e("[data-ohio-slider-simple]").each(function () {
            var t = e(this);
            t.clbSlider({dots: !1, verticalScroll: !1, loop: !0, autoHeight: !0}).on("clb-slider.changed", function () {
                setTimeout(function () {
                    e(".ohio-masonry").masonry()
                }, 250)
            }), t.find(".cloned .elementor-invisible").removeClass("elementor-invisible")
        })
    }

    function T() {
        var t = e("[data-fullscreen-slider]");
        if (t.length) {
            var i = JSON.parse(t.attr("data-options"));
            t.clbSlider(i);
            var o = t.offset().top, a = t.height(),
                s = e(".header .hamburger, .header .hamburger-outer, .header .menu-blank, .header .menu-optional .lang-dropdown, .header .menu-optional .icon-button:not(.-small), .header .menu-optional .cart-button-total, .header:not(.-mobile) .menu > li > a"),
                n = t.find(".clb-slider-nav-btn .icon-button, .clb-slider-pagination .clb-slider-page"),
                l = t.find(".clb-slider-nav-dots .clb-slider-dot"), r = e(".social-bar"), d = e(".search-global"),
                c = e(".scroll-top"), h = e(".color-switcher-item.dark");
            t.on("clb-slider.changed", function () {
                var i = t.find(".clb-slider-outer-stage > .clb-slider-stage > .clb-slider-item.active"),
                    o = t.find(".clb-slider-nav-dots .clb-slider-dot.active"), a = i.data("pagination-color"),
                    f = i.data("header-nav-color"), m = i.data("social-networks-color"), p = i.data("search-color"),
                    g = i.data("scroll-to-top-color"), b = i.data("header-logo-type");
                s.css("transition", "none"), n.css("transition", "none"), l.css("transition", "none"), o.css("transition", "none"), r.css("transition", "none"), d.find(".ion").css("transition", "none"), c.css("transition", "none"), h.css("transition", "none"), s.css("color", f || ""), n.css("color", a || ""), l.css("color", a || ""), o.css("border-color", a || ""), r.css("color", m || ""), d.css("color", p || ""), c.css("color", g || ""), h.css("color", g || ""), b ? (Clb.logo.length && Clb.fixedLogo.length && e([Clb.logo[0], Clb.fixedLogo[0]]).css({
                    position: "absolute",
                    width: "0px",
                    height: "0px",
                    overflow: "hidden"
                }), "dark" == b && Clb.logoForOnepageDark && (Clb.logoForOnepageLight && Clb.logoForOnepageLight.addClass("hidden"), Clb.logoForOnepageDark.removeClass("hidden")), "light" == b && Clb.logoForOnepageLight && (Clb.logoForOnepageDark && Clb.logoForOnepageDark.addClass("hidden"), Clb.logoForOnepageLight.removeClass("hidden"))) : u(), setTimeout(function () {
                    s.css("transition", ""), n.css("transition", ""), l.css("transition", ""), o.css("transition", ""), r.css("transition", ""), d.find(".ion").css("transition", ""), c.css("transition", "")
                }, 300)
            }), (e(window).scrollTop() > o || e(window).scrollTop() < o) && M("hide-all"), e(window).on("scroll", function () {
                (e(window).scrollTop() > o + a || e(window).scrollTop() < o) && (s.css("color", ""), u()), e(window).scrollTop() > o || e(window).scrollTop() < o ? M("hide") : M("show")
            })
        }

        function u() {
            Clb.logoForOnepageDark && Clb.logoForOnepageDark.addClass("hidden"), Clb.logoForOnepageLight && Clb.logoForOnepageLight.addClass("hidden"), e([Clb.logo[0], Clb.fixedLogo[0]]).css({
                position: "",
                width: "",
                height: "",
                overflow: ""
            })
        }
    }

    function M(t) {
        var i = e(".scroll-top:not(.slider-scroll-label)"), o = e(".slider-scroll-label ");
        "show" == t ? (i.addClass("invisible").removeClass("visible"), o.addClass("visible").removeClass("invisible")) : "hide" == t ? (i.addClass("visible").removeClass("invisible"), o.addClass("invisible").removeClass("visible")) : "hide-all" == t && (i.addClass("invisible").removeClass("visible"), o.addClass("invisible").removeClass("visible"))
    }

    function L() {
        e("[data-ohio-tabs]").each(function () {
            var t = e(this), i = e(this).find(".tabs-nav-link"), o = e(this).find(".tabs-nav"),
                a = e(this).find(".tabs-nav .tabs-nav-line"), s = e(this).find(".tabs-content-item"),
                n = t.attr("data-options") ? JSON.parse(t.attr("data-options")) : {}, l = n.tabClass || "",
                r = n.tabActiveClass || "";
            i.length || (s.each(function () {
                var i = e(this).attr("data-title"), o = e(this).attr("data-icon") || "";
                t.find(".tabs-nav").append(e(document.createElement("li")).addClass("tabs-nav-link " + l).html('<i class="icon ' + o + '"></i>' + i))
            }), (i = e(this).find(".tabs-nav-link")).eq(0).addClass("active " + r)), t.find(".tabs-content-item.active").length || s.eq(0).addClass("active"), s.addClass(n.itemClass);
            var d = function () {
                var e = t.find(".tabs-nav .active");
                if (t.hasClass("-vertical") && !Clb.isMobile) a.css({
                    height: e.outerHeight() + "px",
                    transform: "translateY(" + (e.offset().top - o.offset().top) + "px)"
                }); else {
                    var i = e.outerWidth(), s = e.offset().left - o.offset().left + o.scrollLeft();
                    a.css({width: i + "px", transform: "translateX(" + s + "px)"})
                }
            };
            i.on("click", function () {
                i.removeClass("active " + r).addClass(l), s.removeClass("active"), e(this).addClass("active " + r), s.eq(e(this).index() - 1).addClass("active"), Clb.isMobile && o.animate({scrollLeft: this.offsetLeft + "px"}), d()
            }), d()
        })
    }

    function O() {
        e("[data-team-group]").each(function () {
            e(this);
            var t = e(this).find("[data-item]"), i = e(this).find("[data-trigger]"), o = -1, a = 100 / (i.length + 1);
            e(".team-group-item").css("min-width", a + "%");
            var s = function (e) {
                t.removeClass("active");
                var i = t.eq(e).addClass("active");
                o == e || Clb.isMobile || (o = e, i.css("min-width", ""), i.css("min-width", "0"), setTimeout(function () {
                    var e = i.find(">").outerWidth();
                    t.css("min-width", "0"), i.css("min-width", e + "px")
                }, 30))
            };
            i.on("mouseenter", function () {
                s(i.index(e(this)))
            }), s(0)
        })
    }

    function z() {
        e("[data-team-group]").each(function () {
            var t = e(this);
            t.find("[data-item]").each(function (i) {
                Clb.isMobile ? (e(this).css({height: "", width: ""}), e(this).find(" > * ").css({
                    height: "",
                    width: ""
                })) : (e(this).css("height", t.find("[data-trigger]").eq(i).find(">").outerHeight() + "px"), e(this).find(" > * ").css("width", t.find("[data-trigger]").eq(i).outerWidth() + "px"))
            })
        })
    }

    function q() {
        e("[data-arg-video-bg]").each(function () {
            var t = e(this).attr("data-arg-video-bg"), i = e(document.createElement("iframe"));
            i.addClass("arg-video-bg").attr("src", t), e(this).append(i)
        })
    }

    function A(t) {
        e(t).each(function () {
            e(this).addClass("visible"), e(this).find("[data-button-loading]").addClass("btn-loading")
        })
    }

    function S(t) {
        setTimeout(function () {
            t.removeClass("visible"), t.find(".clb-popup-holder").empty(), t.find(".clb-popup-holder").removeClass().addClass("clb-popup-holder"), e(".site-footer.sticky").length && !Clb.isMobile && Clb.header.css("z-index", "1000")
        }, 200)
    }

    function W() {
        e(document).on("click", ".video-button", function (t) {
            t.preventDefault();
            var i = e(".clb-popup.custom-popup"), o = e(this).attr("data-video");
            A(i);
            var a = i.find(".clb-popup-holder").addClass("clb-video-popup");
            a.siblings("[data-button-loading]").removeClass("btn-loading"), "custom" === e(this).attr("data-video-type") ? (a.append(e(document.createElement("video")).attr({
                autoplay: "true",
                controls: "true"
            })), i.find("video").append('<source src="' + o + '"></source>')) : a.append(e(document.createElement("iframe")).attr({
                src: o,
                allowfullscreen: "true",
                frameborder: "0"
            })), setTimeout(function () {
                e(".clb-popup").removeClass("container-loading")
            }, 1e3)
        })
    }

    function D() {
        e("[data-ohio-portfolio-grid]").each(function () {
            var t = e(this), i = e(this).find("[data-isotope-grid]"), o = e(this).find('[data-filter="portfolio"]'),
                a = t.find(".grid-item").length == t.find(".double-width").length ? ".double-width" : ".grid-item:not(.double-width)",
                s = t.find(a).filter(":visible"), n = s.length ? s[0].getBoundingClientRect().width : 0;
            i.isotope ? setTimeout(function () {
                i.isotope({percentPosition: !0, masonry: {columnWidth: n}})
            }, 10) : console.log("Isotope Grid is undefined"), o.attr("data-filter-paged") && o.find("a").each(function () {
                var t = e(this).attr("data-isotope-filter"), o = "*" == t ? i.find("> div").length : i.find(t).length;
                o < 10 && (o = "0" + o), e(this).find(".num").html(o)
            }), o.find("a").on("click", function () {
                return o.find(".active").removeClass("active"), e(this).addClass("active"), i.isotope && i.isotope({
                    filter: e(this).attr("data-isotope-filter"),
                    masonry: {percentPosition: !0, columnWidth: n, itemSelector: ".grid-item:not(.double-width)"}
                }), setTimeout(function () {
                    "undefined" != typeof AOS && AOS.refresh(), window.vc_waypoints && window.vc_waypoints(), t.find(".lazy-load").length && H(t) && B(e("[data-lazy-load]"))
                }, 600), ue(), !1
            }), e("body").on("ohio:lazy_load_complete", function () {
                t.find(".lazy-load").removeClass("is-loading"), t.find(".portfolio-grid").removeClass("is-loading")
            }), window.location.hash && o.find('a[href="' + window.location.hash + '"]').trigger("click")
        })
    }

    function H(t) {
        var i = !1, o = 0, a = e("[data-projects-per-page]").data("projects-per-page"),
            s = t.find("[data-category-count].active").data("category-count"), n = t.find(".lazy-load");
        return n.addClass("is-loading"), t.find(".portfolio-grid").addClass("is-loading"), e("[data-ohio-portfolio-grid]").each(function () {
            e(this).find('[data-filter="portfolio"]').next().find(".grid-item").each(function () {
                if ("none" == e(this)[0].style.display) i = !0; else if (++o >= a || o == s) return i = !1, n.removeClass("is-loading"), t.find(".portfolio-grid").removeClass("is-loading"), i
            })
        }), i
    }

    function F() {
        var t = e(".project-lightbox-gallery .slider"), i = Boolean(t.attr("data-slider-loop")),
            o = Boolean(t.attr("data-slider-navigation")), a = Boolean(t.attr("data-slider-dots")),
            s = Boolean(t.attr("data-slider-pagination")), n = Boolean(t.attr("data-slider-mousescroll")),
            l = Boolean(t.attr("data-slider-autoplay")), r = t.attr("data-slider-autoplay-time");
        e("[data-clb-portfolio-lightbox-slider]").each(function () {
            e(this).hasClass("clb-slider") || e(this).clbSlider({
                dots: a,
                pagination: s,
                mousewheel: n,
                autoplay: l,
                autoplayTimeout: r,
                loop: i,
                navBtn: o,
                drag: !0
            })
        }), t.find(".clb-slider-nav-btn .btn-round").removeClass("btn-round-light"), e(".btn-lightbox, .btn-lightbox-init").on("click", function (t) {
            t.preventDefault();
            var i = e(this).parents(".portfolio-item").attr("data-portfolio-popup");
            if (null != i) {
                var o = document.querySelector("#" + i);
                (function () {
                    if (!this.getAttribute("data-lightbox-loaded")) {
                        var t = this, i = t.querySelector(".project-lightbox-gallery"), o = 0;
                        i.classList.add("container-loading"), e(this).find("[data-ohio-lightbox-image]").each(function () {
                            var a = this, s = new Image;
                            s.src = a.getAttribute("data-ohio-lightbox-image"), s.onload = function () {
                                a.style.backgroundImage = "url(" + s.src + ")", ++o === e(t).find("[data-ohio-lightbox-image]").length && (i.classList.remove("container-loading"), t.setAttribute("data-lightbox-loaded", !0))
                            }
                        })
                    }
                }).call(o), function (t) {
                    var i = e(t).find("[data-lightbox-video-url]");
                    if (!i.length) return;
                    i.find("[data-lightbox-video-target]").attr("src", i.attr("data-lightbox-video-url"))
                }(o), A("#" + i)
            }
        })
    }

    function B(t) {
        if (t.data("lazy-load-loading")) return;
        let i = t.data("lazy-page") ? parseInt(t.data("lazy-page")) : 1, o = parseInt(t.attr("data-lazy-pages-count"));
        if (i >= o) return void t.remove();
        t.data("isLoaded", !1), t.data("lazy-load-loading", "true").addClass("active");
        let a = t.find(".button");
        a.addClass("btn-loading"), i += 1, t.data("lazy-page", i);
        let s = "", n = !1;
        if (t.data("lazy-load-shortcode")) n = {
            shortcode: t.data("lazy-load-shortcode"),
            paged: i,
            action: "ohio_lazy_load_shortcodes"
        }, s = t.data("lazy-load-rest"); else {
            let e = t.data("lazy-load-url-pattern");
            s = e ? e.replace("{{page}}", i) : "page/" + i
        }
        const l = t.data("lazy-load-scope"), r = `[data-lazy-item][data-lazy-scope="${l}"]`, d = t.data("lazy-load-id");
        e.ajax({
            url: s, data: n, method: n ? "POST" : "GET", success: function (o) {
                const s = (e, t) => {
                        const i = `[data-lazy-container="${l}"]`;
                        let o = e.parent().find(i);
                        return o.length ? o : (o = e.parent().parent().find(i)).length ? o : t.find(i)
                    }, n = e((new DOMParser).parseFromString(o, "text/html")),
                    c = s(n.find('[data-lazy-load-id="' + d + '"]'), n), h = s(t, e(document.body)), u = c.find(r);
                u.parent().find("[data-aos]").attr("data-aos-offset", "20000000"), u.addClass("hidden");
                var f = u.find("img"), m = u.find("[data-ohio-bg-image]").toArray().map(function (e) {
                    var t = new Image;
                    return t.src = e.getAttribute("data-ohio-bg-image"), t
                }), p = f.toArray().concat(m);
                h.append(u), f.removeAttr("loading"), e(document.body).append(n.find("[data-lazy-to-footer]"));
                var g = function () {
                    var e = !0;
                    p.forEach(function (t) {
                        !t.complete && e && (e = !1, t.onload = g)
                    }), e && b()
                }, b = function () {
                    u.removeClass("hidden"), F(), D();
                    var o = h.hasClass("portfolio-grid") && h.isotope, s = h.attr("data-shop-masonry") && h.isotope;
                    (o || s) && h.isotope().isotope("appended", u).isotope("layout"), (h.hasClass("ohio-masonry") || h.hasClass("masonry")) && h.masonry("appended", u, !1), u.parent().find("[data-aos]").attr("data-aos-offset", ""), "undefined" != typeof AOS && (AOS.init(), AOS.refresh()), fe(), u.find("[data-tilt]").tilt(), i >= parseInt(t.attr("data-lazy-pages-count")) ? (e("body").data("lazy-items", u), t.remove()) : (t.removeClass("active"), a.removeClass("btn-loading"), "scroll" == t.attr("data-lazy-load") ? setTimeout(function () {
                        t.removeData("lazy-load-loading"), E()
                    }, 500) : t.removeData("lazy-load-loading")), e("body").trigger("ohio:lazy_load_complete"), e("body").trigger("ohio:cursor_mouseleave")
                };
                g(), de(), ae(), Clb.isDesktop && ce(), setTimeout(function () {
                    ue()
                }, 100), t.data("isLoaded", !0)
            }
        })
    }

    function E() {
        e('[data-lazy-load="scroll"]').each(function () {
            e(document).scrollTop() + e(window).height() > e(this).offset().top && B(e(this))
        })
    }

    function I() {
        "undefined" != typeof AOS && setTimeout(function () {
            AOS.init()
        }, 600)
    }

    function j() {
        e(".page-sidebar").length || (e('[data-vc-stretch-content="true"], [data-vc-full-width="true"], [data-ohio-stretch-content="true"], .-alignfull').each(function () {
            Clb.isRtl ? (e(this).css("right", "0"), e(this).css({
                width: e("#page").width() + "px",
                right: e("#page").offset().left - e(this).offset().left + "px"
            })) : (e(this).css("left", "0"), e(this).css({
                width: e("#page").width() + "px",
                left: e("#page").offset().left - e(this).offset().left + "px"
            }))
        }), e('[data-vc-full-width="true"]').not('[data-vc-stretch-content="true"]').each(function () {
            e("#page").outerWidth(), e(this).closest(".page-container").outerWidth();
            Clb.isMobile
        }), e(".rev_slider_wrapper.fullwidthbanner-container, .rev_slider_wrapper.fullscreen-container").each(function () {
            e(this).css("padding-left", e("#page").offset().left + "px")
        }), setTimeout(function () {
            var t = e(".rev_slider");
            t.revredraw && t.revredraw()
        }, 30))
    }

    function R() {
        e("[data-ohio-scroll-anim]").each(function () {
            var t = e(this).attr("data-ohio-scroll-anim");
            e(this).offset().top < e(window).scrollTop() + e(window).height() - 50 && e(this).removeClass(t).removeAttr("data-ohio-scroll-anim")
        })
    }

    function V() {
        var t = e(window).height(), i = e(".site-footer").outerHeight(),
            o = e(".header-cap").length ? e(".header-cap").outerHeight() : 0,
            a = e("#wpadminbar").length ? e("#wpadminbar").outerHeight() : 0,
            s = e(".page-headline").length ? e(".page-headline").outerHeight() : 0;
        e("[data-ohio-full-height]").each(function () {
            var n = t - i - o - a - s;
            e(this).css("height", n + "px")
        })
    }

    function X() {
        var t = e("#content");
        if (t.length) {
            var i = t.outerWidth(), o = i / 2 - e("#content .page-container").width() / 2, a = function (e, t, i, a) {
                if (a) var s = e.find("> .wpb_column > .vc_column-inner, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap .elementor-widget-wrap, > .elementor-container  > .elementor-column > .elementor-widget-wrap"); else s = e.find("> .wpb_column, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap .elementor-widget-wrap, > .elementor-container  > .elementor-column > .elementor-widget-wrap");
                t && (s = e.find("> .parallax-content")), s = i ? s.last() : s.eq(0), Clb.isRtl ? Clb.isMobile ? s.css("padding-" + (i ? "left" : "right"), "") : s.css("padding-" + (i ? "left" : "right"), o + "px") : Clb.isMobile ? s.css("padding-" + (i ? "right" : "left"), "") : s.css("padding-" + (i ? "right" : "left"), o + "px")
            }, s = function (t, o, a) {
                if (a) var s = t.find("> .wpb_column > .vc_column-inner, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap, > .elementor-container  > .elementor-column > .elementor-widget-wrap"); else s = t.find("> .wpb_column > .vc_column-inner > .wpb_wrapper, > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap, > .elementor-container  > .elementor-column > .elementor-widget-wrap");
                s.css("min-width", ""), (s = o ? s.last() : s.eq(0)).css({
                    position: "",
                    left: "",
                    width: ""
                }).addClass("stretch-content"), s.length && (Clb.isRtl ? o ? s.css("min-width", i - (s.offset().left + s.outerWidth()) + "px") : s.css({
                    position: "relative",
                    right: -(e(window).width() - (s.offset().left + s.outerWidth())) + "px",
                    "min-width": s.outerWidth() + (e(window).width() - (s.offset().left + s.outerWidth())) + "px"
                }) : o ? s.css("min-width", i - s.offset().left + "px") : s.css({
                    position: "relative",
                    left: -s.offset().left + "px",
                    "min-width": s.offset().left + s.outerWidth() + "px"
                }), Clb.isMobile && s.css({"min-width": "", left: "", right: ""}))
            };
            e(".clb-column-padding-left").each(function () {
                a(e(this), e(this).hasClass("parallax"), !1, e(this).hasClass("inner"))
            }), e(".clb-column-padding-right").each(function () {
                a(e(this), e(this).hasClass("parallax"), !0, e(this).hasClass("inner"))
            }), e(".clb-stretch-column-left").each(function () {
                s(e(this), !1, e(this).hasClass("inner"))
            }), e(".clb-stretch-column-right").each(function () {
                s(e(this), !0, e(this).hasClass("inner"))
            })
        }
    }

    function P() {
        var t = e(".boxed-container");
        if (t.length && !Clb.body.hasClass("rtl")) {
            var i, o, a = t.width(), s = t.offset().left, n = e(".site-content > .page-container").outerWidth();
            e("[data-vc-full-width], .elementor-section-stretched").each(function () {
                e(this).css({
                    width: a,
                    left: "auto"
                }), o = e(this).offset().left, e(this).css({left: -1 * (o - s)}), i = (e(this).outerWidth() - n) / 2, e(this).hasClass("vc_row") && e(this).data("vc-full-width") && !e(this).data("vc-stretch-content") && e(this).css({
                    "padding-left": i,
                    "padding-right": i
                })
            })
        }
    }

    function Y() {
        var t = e("[data-button-loading]");
        t.each(function () {
            e(this).on("click", function () {
                var t = e(this).parents("form"), i = !0;
                t.find("[required]").each(function () {
                    e(this).val() || (i = !1)
                }), !e(this).hasClass("disabled") && i && (e(this).toggleClass("btn-loading"), e(this).find("i").hide())
            })
        })
    }

    function N() {
        var t = e(".header-4"), i = t.find(".nav");
        t.find(".left-part, .right-part").css("width", function (t) {
            var i = t.find(".left-part, .right-part"), o = 0;
            return i.each(function () {
                o < e(this).width() && (o = e(this).width())
            }), o + 1
        }(t));
        var o, a = e(".branding"), s = e("#mega-menu-wrap").find("> ul:not(.mobile-menu) > li"),
            n = a.outerWidth() - .0135 * e(window).width(),
            l = (o = s).length % 2 == 0 ? Math.round(o.length / 2 - 1) : Math.round(o.length / 2 - 2), r = 0, d = 0,
            h = e(s[l]).find("> .menu-link").css("padding-left"), u = 0;
        s.each(function (t) {
            t > l ? d += e(this).width() : r += e(this).width()
        }), Clb.body.hasClass("rtl") ? (u = a.offset().left - d + parseInt(h) / 2, e(s[l]).css("margin-left", n + "px")) : (u = a.offset().left - r + parseInt(h) / 2, e(s[l]).css("margin-right", n + "px")), i.offset({left: u}), c(), setTimeout(function () {
            t.css("opacity", "1")
        }, 500)
    }

    function Q() {
        jQuery.post(ohioVariables.url, {action: "ohio_subscribe_modal"}, function (t) {
            A(".clb-popup.subscribe-popup"), e(".clb-popup.subscribe-popup .clb-popup-holder").append(t);
            var i = e(".wpcf7-form");
            [].forEach.call(i, function (e) {
                wpcf7.init(e), f()
            })
        })
    }

    var J, $, G, U, K;

    function Z() {
        var t = e("[data-portfolio-grid-slider]"), i = e(".portfolio-item"), o = Boolean(t.attr("data-slider-loop")),
            a = Boolean(t.attr("data-slider-navigation")), s = Boolean(t.attr("data-slider-dots")),
            n = Boolean(t.attr("data-slider-pagination")), l = Boolean(t.attr("data-slider-mousescroll")),
            r = Boolean(t.attr("data-slider-dragcroll")), d = Boolean(t.attr("data-slider-autoplay")),
            c = (Boolean(t.attr("data-slider-autoplay-pause")), Boolean(t.attr("data-slider-vertical-orientation"))),
            h = Boolean(t.attr("data-slider-vertical-orientation-mobile")), u = t.attr("data-slider-autoplay-time");
        t.each(function () {
            var t = e(this), f = t.offset().top, m = t.height();
            if (t.hasClass("grid_3") || t.hasClass("grid_7") || t.hasClass("project-slider")) t.clbSlider({
                items: 1,
                loop: o,
                mousewheel: l,
                navBtn: a,
                drag: r,
                dots: s,
                pagination: n,
                scrollToSlider: !0,
                autoplay: d,
                autoplayTimeout: u,
                autoplayHoverPause: !0,
                verticalScroll: c,
                responsive: {768: {verticalScroll: h}}
            }), ie(t), te(t); else if (t.hasClass("grid_4")) t.clbSlider({
                items: 1,
                loop: o,
                mousewheel: l,
                navBtn: a,
                drag: !0,
                dots: !1,
                pagination: n,
                scrollToSlider: !0,
                verticalScroll: c,
                autoplay: d,
                autoplayTimeout: u,
                autoplayHoverPause: !0,
                responsive: {768: {verticalScroll: h}}
            }), ie(t), te(t); else if (t.hasClass("grid_6")) {
                const e = t.attr("data-slider-columns").split("-");
                t.clbSlider({
                    items: +e[0] || 3,
                    loop: o,
                    mousewheel: l,
                    navBtn: a,
                    drag: !0,
                    dots: !1,
                    pagination: n,
                    scrollToSlider: !0,
                    autoplay: d,
                    autoplayTimeout: u,
                    autoplayHoverPause: !0,
                    responsive: {768: {items: +e[2] || 1}, 1180: {items: +e[1] || 2}}
                }), ie(t), te(t)
            } else (t.hasClass("grid_5") || t.hasClass("grid_9") || t.hasClass("grid_10")) && function (t) {
                if (void 0 === t) var t = e(".portfolio-onepage-slider");
                t.each(function () {
                    if ((e(this).hasClass("grid_5") || e(this).hasClass("grid_9") || e(this).hasClass("grid_10")) && !e(this).hasClass("clb-smooth-slider")) {
                        e(this).addClass("clb-smooth-slider");
                        var t = 0, i = e(this).children().addClass("clb-smooth-slider-item"), o = i.length,
                            a = Boolean(e(this).attr("data-slider-loop")),
                            s = Boolean(e(this).attr("data-slider-navigation")),
                            n = Boolean(e(this).attr("data-slider-dots")),
                            l = Boolean(e(this).attr("data-slider-pagination")),
                            r = Boolean(e(this).attr("data-slider-mousescroll")),
                            d = Boolean(e(this).attr("data-slider-autoplay")),
                            c = e(this).attr("data-slider-autoplay-time");
                        if (e(this).css({height: i.height()}), e(window).on("resize", function () {
                            e(this).css({height: i.height()})
                        }), i.css({position: "absolute"}), e(this).on("next-slide", function (e) {
                            v()
                        }), e(this).on("prev-slide", function (e) {
                            w()
                        }), !0 === s) {
                            e(this).append(e('<div class="clb-slider-nav-btn"><div class="prev-btn icon-button" tabindex="0"><i class="icon"><svg class="default" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8,16l1.4-1.4L3.8,9H16V7H3.8l5.6-5.6L8,0L0,8L8,16z"/></svg></i></div><div class="next-btn icon-button" tabindex="0"><i class="icon"><svg class="default" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/></svg></i></div></div>'))
                        }
                        if (!0 === l || !0 === n) {
                            var h = e("<div></div>"), u = e('<div class="clb-slider-page"></div>');
                            if (!0 === l) {
                                h.addClass("clb-slider-pagination");
                                for (var f = 1; f <= o; f++) f < 10 ? u.clone().append('<span class="clb-slider-pagination-index"> 0' + f + "</span>").appendTo(h) : u.clone().append('<span class="clb-slider-pagination-index">' + f + "</span>").appendTo(h)
                            } else {
                                h.addClass("clb-slider-nav-dots"), u.addClass("clb-slider-dot");
                                for (var f = 1; f <= o; f++) u.clone().appendTo(h)
                            }
                            h.find(".clb-slider-page:first-child").addClass("active"), e(this).append(h), e(i).removeClass("prev-slide next-slide active"), e(i.slice(0, t)).addClass("prev-slide"), e(i.slice(t + 1)).addClass("next-slide"), e(i[t]).addClass("active");
                            var m = e(this).find(".clb-slider-page"), p = 0;
                            m.on("click", function () {
                                if (m.removeClass("active"), e(this).addClass("active"), (p = e(this).index()) != t) {
                                    p + 1 > o && (p = p - settings.items + 1);
                                    var a = t;
                                    t = p, function (o) {
                                        e(i[o]).addClass("last-slide"), e(i).removeClass("prev-slide next-slide active"), e(i.slice(0, t)).addClass("prev-slide"), e(i.slice(t)).addClass("next-slide"), e(i[t]).addClass("active"), e(i[t - 1]).addClass("prev-slide"), e(i[t + 1]).addClass("next-slide"), setTimeout(function () {
                                            e(i).removeClass("last-slide")
                                        }, 800), C()
                                    }(a)
                                }
                            })
                        } else e(i[t]).addClass("active"), e(i[o - 1]).addClass("prev-slide"), e(i[t + 1]).addClass("next-slide");
                        if (e(this).find(".next-btn").on("click", function () {
                            v()
                        }), e(this).find(".prev-btn").on("click", function () {
                            w()
                        }), e(window).on("keydown", function (e) {
                            var t = e.which || e.keyCode;
                            37 == t && w(), 39 == t && v()
                        }), !0 === r) {
                            if (-1 != navigator.userAgent.indexOf("Mac OS X")) var g = 1300; else var g = 1e3;
                            var b = !0;
                            e(this).offset().top, e(window).height(), e(this).outerHeight();
                            e(this).on("wheel mousewheel", function (i) {
                                var s = i.originalEvent.deltaY;
                                if ((0 == t && s > 0 || t == o && s < 0) && (e("html, body").animate({scrollTop: e(this).offset().top + "px"}), i.preventDefault()), !b) return !1;
                                s > 0 && t <= o - 1 ? (v(), b = !1, a ? i.preventDefault() : t != o ? i.preventDefault() : e("html, body").stop(!0, !0).finish()) : s < 0 && t >= 0 && (a ? i.preventDefault() : 0 != t ? i.preventDefault() : e("html, body").stop(!0, !0).finish(), w(), b = !1), setTimeout(function () {
                                    b = !0
                                }, g)
                            })
                        }
                        if (e(this).on("touchstart", function (t) {
                            var i = t.originalEvent.touches[0].pageX;
                            e(this).on("touchmove", function (e) {
                                var t = e.originalEvent.touches[0].pageX;
                                t + 50 < i ? (v(), i = e.clientX) : t - 50 > i && (w(), i = e.clientX)
                            }), e(this)[0].ondragstart = function () {
                                return !1
                            }
                        }), !0 === d) {
                            setInterval(function () {
                                e(this).hasClass("stop-slide") || v()
                            }, c);
                            e(this).hover(function () {
                                e(this).addClass("stop-slide")
                            }, function () {
                                e(this).removeClass("stop-slide")
                            })
                        }
                        const C = () => {
                            if (e(this).hasClass("portfolio-onepage-slider")) {
                                let i = 100 / o * (t + 1);
                                i > 100 && (i = 100), e(".scroll-track").css("width", i + "%")
                            }
                        };

                        function v() {
                            a ? t + 1 == o ? (t = 0, e(i).removeClass("active prev-slide last-slide"), e(i[o - 1]).addClass("prev-slide last-slide")) : t + 2 == o ? (e(i[0]).addClass("next-slide"), t++) : 0 == t ? (e(i[o - 1]).removeClass("prev-slide"), t++) : t++ : t++, l && (m.removeClass("active"), e(m[t]).addClass("active")), t != o && (e(i[t - 1]).addClass("last-slide").removeClass("active"), e(i[t - 2]).removeClass("prev-slide"), e(i[t]).removeClass("next-slide").addClass("active"), e(i[t - 1]).addClass("prev-slide"), e(i[t + 1]).addClass("next-slide"), setTimeout(function () {
                                e(i).removeClass("last-slide")
                            }, 800)), C()
                        }

                        function w() {
                            a ? t <= 0 ? (t = o - 1, e(i).removeClass("active next-slide last-slide"), e(i[0]).addClass("next-slide last-slide")) : 1 == t ? (e(i[o - 1]).addClass("prev-slide"), t--) : t == o - 1 ? (e(i[0]).removeClass("next-slide"), t--) : t-- : 0 != t && t--, l && (m.removeClass("active"), e(m[t]).addClass("active")), t < 0 || (e(i[t]).addClass("active").removeClass("prev-slide"), e(i[t + 1]).removeClass("active").addClass("last-slide"), e(i[t + 2]).removeClass("next-slide").removeClass("last-slide"), e(i[t - 1]).addClass("prev-slide"), e(i[t + 1]).addClass("next-slide"), setTimeout(function () {
                                e(i).removeClass("last-slide")
                            }, 800)), C()
                        }

                        C()
                    }
                })
            }();
            t.hasClass("grid_9") && e(".next-project-img-box").on("click", function () {
                e(this).trigger("prev-slide")
            });
            (e(window).scrollTop() > f + m / 2 || e(window).scrollTop() < f - m / 2) && M("hide-all"), e(window).on("scroll", function () {
                e(window).scrollTop() > f + m / 2 || e(window).scrollTop() < f - m / 2 ? M("hide") : M("show")
            }), Clb.isMobile || !i.hasClass("-layout3") && !i.hasClass("-layout6") || ee(t)
        })
    }

    function ee(t) {
        if (void 0 === t) t = e("[data-portfolio-grid-slider]");
        var i = t.find(".overlay"), o = 0, a = 0;
        i.each(function () {
            a = e(this).height(), o < a && (o = a)
        }), Clb.isMobile ? i.removeAttr("style") : i.css("height", o)
    }

    function te(t) {
        t.on("clb-slider.change", function () {
            e(this).addClass("perspective-remove")
        }), setTimeout(function () {
            t.on("clb-slider.changed", function () {
                e(this).removeClass("perspective-remove")
            })
        }, 500)
    }

    function ie(e) {
        e.on("clb-slider.next-change", function () {
            var t = e.find(".clb-slider-item.active");
            t.eq(0).addClass("last-active"), setTimeout(function () {
                t.eq(0).removeClass("last-active")
            }, 1e3)
        }).on("clb-slider.prev-change", function () {
            var t = e.find(".clb-slider-item.active");
            t.eq(t.length - 1).addClass("last-active"), setTimeout(function () {
                t.eq(t.length - 1).removeClass("last-active")
            }, 1e3)
        })
    }

    function oe() {
        const t = e("body").height();
        let i = (e(window).innerHeight() + e(window).scrollTop()) / t * 100;
        i > 100 && (i = 100), e(".scroll-top:not(.slider-scroll-label) .scroll-track").css("width", i + "%")
    }

    function ae() {
        if (e(".ohio-masonry").length) {
            setTimeout(function () {
                e(".ohio-masonry").each(function () {
                    var t = ".grid-item";
                    0 == e(this).find(".grid-item").length && (t = ".masonry-block");
                    var i = !this.hasAttribute("data-masonry-alignment") || "horizontal" === this.getAttribute("data-masonry-alignment");
                    e(this).masonry({
                        itemSelector: ".masonry-block",
                        columnWidth: t,
                        horizontalOrder: i,
                        isAnimated: !1,
                        hiddenStyle: {opacity: 0, transform: ""}
                    })
                }), setTimeout(function () {
                    I()
                }, 50)
            }, 50)
        } else I()
    }

    function se() {
        var t = e("[data-sticky-share-bar]");
        if (t.length) {
            var i = e(window).height(), o = t.height(), a = t.offset().top;
            e(window).on("scroll", function () {
                e(this).scrollTop() >= o - i + a ? t.addClass("scroll-disabled") : t.removeClass("scroll-disabled")
            })
        }
    }

    function ne() {
        var t = e(".project-slider.clb-slider, .portfolio-onepage-slider.clb-slider, [data-fullscreen-slider].clb-slider, .portfolio-onepage-slider.clb-smooth-slider"),
            i = e("body");
        t.length && t.find(".clb-slider-pagination").length && t.length && t.offset().top <= e(window).scrollTop() + 50 && i.addClass("slider-with-bullets"), e(window).on("scroll", function () {
            !function (o) {
                var a = o.scrollTop() + o.height() / 2;
                t.each(function () {
                    var t = e(this).offset().top, o = e(this);
                    if (t + o.outerHeight() > a && a > t) return i.addClass("slider-with-bullets"), !1;
                    i.removeClass("slider-with-bullets")
                })
            }(e(this))
        })
    }

    function le() {
        var t = new Object;
        t.switcher = e(".color-switcher"), t.switcherDarkWidth = 0, t.switcherLightWidth = 0, t.switcherToddler = t.switcher.find(".color-switcher-toddler"), t.switcherWidth = t.switcher.outerWidth(), t.transformRtl = Clb.isRtl ? 1 : -1;
        var i = e(".clb__light_section, .clb__dark_section");
        Clb.body.hasClass("dark-scheme") && t.switcher.addClass("dark"), -1 != document.cookie.indexOf("ohio-switcher-state=dark") && i.toggleClass("clb__light_section clb__dark_section"), t.switcherToddler.width("auto"), re(t), t.switcher.removeClass("-invisible")
    }

    function re(e) {
        if (e.switcher.hasClass("dark")) e.switcher.find(".color-switcher-item.dark").css("min-width", "auto"), e.switcher.find(".color-switcher-item.light").css("min-width", "auto"), e.switcherDarkWidth = e.switcher.find(".color-switcher-item.dark").outerWidth(), e.switcherToddler.width(e.switcherDarkWidth), e.switcher.find(".color-switcher-item.dark").css("min-width", e.switcherDarkWidth), Clb.isTablet || e.switcherToddler.css("transform", "translateX(0px)"); else if (e.switcherToddler.css("transform, translateX(0)"), e.switcher.find(".color-switcher-item.light").css("min-width", "auto"), e.switcher.find(".color-switcher-item.dark").css("min-width", "auto"), e.switcherLightWidth = e.switcher.find(".color-switcher-item.light").outerWidth(), e.switcherToddler.width(e.switcherLightWidth), e.switcher.find(".color-switcher-item.light").css("min-width", e.switcherLightWidth), !Clb.isTablet) {
            var t = (e.switcherWidth - e.switcherLightWidth) * e.transformRtl;
            e.switcherToddler.css("transform", "translateX(" + t + "px)")
        }
    }

    function de() {
        e("[data-interactive-links-grid]").each(function () {
            var t = e(this), i = t.find(".portfolio-item-wrap");
            !function (t) {
                var i = t.find("[data-featured-image]"), o = t.find(".portfolio-grid-images");
                o.empty(), i.each(function () {
                    var t = e('<div class="thumbnail"></div>');
                    t.css("background-image", "url(" + e(this).data("featured-image") + ")"), o.append(t)
                })
            }(t);
            var o = t.find(".portfolio-grid-images .thumbnail");
            i.each(function () {
                var t = e(this);
                t.mouseenter(function () {
                    t.find(".portfolio-item").addClass("visible"), i.find(".portfolio-item").not(".visible").addClass("invisible"), o.eq(t.index()).addClass("scale")
                }).mouseleave(function () {
                    i.find(".portfolio-item").removeClass("invisible visible"), o.removeClass("scale")
                })
            })
        })
    }

    function ce() {
        var t = e(".grid_11");
        if (t.length) {
            var i = t.find(".-layout11");
            i.on("mouseover mousemove", function (t) {
                e(this).find(".card-details")[0].style.transform = "translate(" + t.clientX + "px, " + t.clientY + "px)"
            }), i.on("mouseleave", function (t) {
                e(this).find(".card-details")[0].style.transform = "translate(0px, 0px)"
            })
        }
    }

    function he() {
        var t = e(".global-page-animation"), i = t.length;
        i && (e("a[href]:not(.btn-lightbox):not(.prettyphoto):not(.clb-scroll-top):not(.elementor-gallery-item):not([data-elementor-open-lightbox]):not(.woocommerce-MyAccount-downloads-file):not(.add_to_cart_button):not(.add_to_wishlist)").on("click", function (i) {
            var o = e(this).attr("href"), a = -1 == o.indexOf("http") && -1 != o.indexOf(":");
            o && "#" != o.charAt(0) && "_blank" != e(this).attr("target") && !a && (i.preventDefault(), t.removeClass("global-page-animation-active"), t.addClass("global-page-animation-fade-out"), setTimeout(function () {
                e(".page-preloader:not(.percentage-preloader)").removeClass("hidden")
            }, 800), setTimeout(function () {
                document.location.href = o
            }, 850))
        }), window.addEventListener("pageshow", function (i) {
            i.persisted && (e(".page-preloader:not(.percentage-preloader)").addClass("hidden"), t.removeClass("global-page-animation-fade-out"), t.addClass("global-page-animation-active"))
        }))
    }

    function ue() {
        e(".grid_12").each(function () {
            var t = e(this).find(".portfolio-grid-holder"), i = t.width(), o = e(this).find(".portfolio-grid"),
                a = o.width(), s = e(this).find(".grid-item"), n = e(this).find(".portfolio-filter"),
                l = t.find(".portfolio-grid-holder-underline"), r = e(window).width(), d = e(window).height();
            !function (t) {
                var i = t.find(".grid-item"), o = e(".portfolio-grid-images");
                o.empty(), i.each(function () {
                    var t = e(this).find(".portfolio-item-image");
                    o.append(t.clone())
                })
            }(e(this));
            var c = e(".portfolio-grid-images .portfolio-item-image");
            n.length && o.css("top", n.outerHeight() + "px"), Clb.isMobile ? setTimeout(function () {
                l.height(s.eq(0).height()), l.width(1)
            }, 300) : (t.height(a), o.css("min-height", i), o.css("max-height", i), setTimeout(function () {
                o.find("[data-aos-once]").addClass("aos-animate")
            }, 800), setTimeout(function () {
                l.width(s.eq(0).height()), l.height(1)
            }, 300)), s.each(function () {
                var o, a = e(this), s = a.offset().left, n = c.eq(a.index()), h = n.find(".card"), u = n.width(),
                    f = n.height(), m = 0, p = 0;
                a.find(".portfolio-item").on("mouseover mousemove", function (a) {
                    clearTimeout(o), o = setTimeout(function () {
                        h[0].style.transform = "rotate(0deg)"
                    }, 200);
                    var c = a.clientY, g = a.clientX, b = a.clientY;
                    if (Clb.isRtl) var v = e(this).offset().left + e(this).height() - t.offset().left - i; else v = e(this).offset().left - t.offset().left;
                    var w = (c - p + (g - m)) / -1;
                    Clb.isRtl && (g -= u / 2), s > r / 2 && (g -= u / 2), b > d / 1.5 && (c -= f), Clb.isMobile ? (v = e(this).offset().top - t.offset().top, l[0].style.transform = "translateY(" + v + "px)") : l[0].style.transform = "translateX(" + v + "px)", n.addClass("visible"), n[0].style.transform = "translate(" + g + "px, " + c + "px)", h[0].style.transform = "rotate(" + w + "deg)", h[0].style.filter = "brightnes(" + w + ")", setTimeout(function () {
                        n.addClass("animate")
                    }, 1), m = a.clientX, p = a.clientY
                }), a.find(".portfolio-item").on("mouseleave", function (e) {
                    n.removeClass("visible"), n[0].style.transform = "translate(0px, 0px)", h[0].style.transform = "rotate(0deg)", setTimeout(function () {
                        n.removeClass("animate")
                    }, 1)
                }), a.on("mouseout", function () {
                    clearTimeout(o)
                })
            })
        })
    }

    function fe() {
        e("[data-ohio-bg-image]").each(function () {
            e(this).css("background-image", "url(" + e(this).attr("data-ohio-bg-image") + ")")
        })
    }

    function me() {
        if (e("body").hasClass("custom-cursor")) {
            const i = document.querySelector(".circle-cursor-inner"),
                o = document.querySelector(".circle-cursor-outer");
            if (!i || !o) return;
            let a, s = 0, n = !1;

            function t() {
                o.style.transition = null, o.style.width = null, o.style.height = null, o.style.marginLeft = null, o.style.marginTop = null, n = !1
            }

            window.onmousemove = function (t) {
                n || (o.style.transform = "translate(" + t.clientX + "px, " + t.clientY + "px)"), i.style.transform = "translate(" + t.clientX + "px, " + t.clientY + "px)", a = t.clientY, s = t.clientX, e(t.target).is("iframe") ? (o.style.visibility = "hidden", i.style.visibility = "hidden") : (o.style.visibility = "visible", i.style.visibility = "visible")
            }, e("body").on("mouseenter", "a, .cursor-as-pointer", function () {
                i.classList.add("cursor-link-hover"), o.classList.add("cursor-link-hover")
            }), e("body").on("mouseleave", "a, .cursor-as-pointer", function () {
                e(this).is("a") && e(this).closest(".cursor-as-pointer").length || (i.classList.remove("cursor-link-hover"), o.classList.remove("cursor-link-hover"))
            }), e("body").on("mouseenter", "[data-cursor-class]", function () {
                const t = e(this).attr("data-cursor-class");
                -1 != t.indexOf("dark-color") && (i.classList.add("dark-color"), o.classList.add("dark-color")), -1 != t.indexOf("cursor-link") && (i.classList.add("cursor-link"), o.classList.add("cursor-link"))
            }), e("body").on("mouseleave", "[data-cursor-class]", function () {
                const t = e(this).attr("data-cursor-class");
                -1 != t.indexOf("dark-color") && (i.classList.remove("dark-color"), o.classList.remove("dark-color")), -1 != t.indexOf("cursor-link") && (i.classList.remove("cursor-link"), o.classList.remove("cursor-link"))
            }), e("body").on("mouseenter", ".cursor-magnet, .icon-button", function () {
                const t = e(this), i = window.pageYOffset || document.documentElement.scrollTop;
                o.style.transition = "all .2s ease-out", o.style.transform = "translate(" + t.offset().left + "px, " + (t.offset().top - i) + "px)", o.style.width = t.width() + "px", o.style.height = t.height() + "px", o.style.marginLeft = 0, o.style.marginTop = 0, n = !0
            }), e("body").on("mouseleave", ".cursor-magnet, .icon-button", t), e("body").on("ohio:cursor_mouseleave", function () {
                t(), o.style.transform = i.style.transform, i.classList.remove("cursor-link-hover"), o.classList.remove("cursor-link-hover")
            }), e("body").on("mouseenter", "iframe", function () {
                o.style.visibility = "hidden", i.style.visibility = "hidden"
            }), i.style.visibility = "visible", o.style.visibility = "visible"
        }
    }

    window.Clb = {
        init: function () {
            this.header = e("#masthead"), this.footer = e(".site-footer"), this.body = e("body"), this.headerIsFifth = Clb.header.hasClass("header-4"), this.headerIsSixth = Clb.header.hasClass("header-5"), this.wpadminbar = e("#wpadminbar"), this.headerFixed = {
                initialOffset: parseInt(this.header.attr("data-fixed-initial-offset")) || 150,
                enabled: e("[data-header-fixed]").length,
                value: !1,
                mobileEnabled: e("[data-mobile-header-fixed]").length,
                mobileValue: !1
            }, this.searchPopup = e(".search-popup"), this.subheader = e(".subheader"), this.siteBranding = this.header.find(".branding"), this.siteTitle = this.header.find(".branding-title"), this.logo = this.header.find(".logo"), this.fixedLogo = this.header.find(".logo-sticky"), this.mobileLogo = this.header.find(".logo-mobile"), this.fixedMobileLogo = this.header.find(".logo-sticky-mobile"), this.logoForOnepage = this.header.find(".logo-dynamic"), this.logoForOnepageDark = this.logoForOnepage.find(".dark"), this.logoForOnepageLight = this.logoForOnepage.find(".light"), this.megaMenu = this.header.find("#mega-menu-wrap"), this.mobileMenu = e("[data-mobile-menu-resolution]").data("mobile-menu-resolution"), this.containerLoading = e(".container-loading"), this.isRtl = e("body").hasClass("rtl"), this.isElementorPage = e("body").hasClass("elementor-page"), this.resize()
        }, resize: function () {
            this.isMobile = e(window).width() <= 768, this.isTablet = e(window).width() <= 1180, this.isDesktop = e(window).width() >= 1181, this.isMobileMenu = e(window).width() <= Clb.mobileMenu
        }
    }, window.handleHamburgerMenu = function () {
        e(".hamburger-nav").addClass("visible").find(".menu > li").each(function (t) {
            var i = e(this);
            setTimeout(function () {
                i.addClass("showed")
            }, 150 + 40 * t)
        })
    }, e(window).on("ohio:handle_accordion_box", h), e(window).on("ohio:handle_accordion_box_size", u), e(window).on("ohio:handle_contact_forms", f), e(window).on("ohio:handle_circle_progress_bar", m), e(window).on("ohio:handle_compare_shortcodes", p), e(window).on("ohio:handle_counter_box", g), e(window).on("ohio:handle_countdown_box", b), setTimeout(function () {
        e(window).on("ohio:handle_ohio_dynamic_text", v)
    }, 1e3), e(window).on("ohio:handle_gallery", w), e(window).on("ohio:handle_accordion_horizontal_box", C), e(window).on("ohio:handle_progress_bar", _), e(window).on("ohio:handle_sliders", k), e(window).on("ohio:handle_fullscreen_sliders", T), e(window).on("ohio:handle_tab_box", L), e(window).on("ohio:handle_cover_box", O), e(window).on("ohio:handle_cover_box_size", z), e(document).on("keydown", function (t) {
        var i = e(".clb-popup");
        27 == t.keyCode && S(i)
    }), e("body").on("click keydown", '[aria-label="close"]', function (t) {
        t.preventDefault(t), S(e(this).closest(".clb-popup"))
    }), e(window).on("ohio:handle_portfolio", D), e(window).on("ohio:handle_portfolio_popup", F), window.ohioRowRefresh = j, e(function () {
        var t = e(".header-wrap .right .languages");
        0 == t.find(".sub-nav.languages").children().length && t.hide()
    }), e.each(e("header.header-5"), function () {
        e(".menu-depth-1").removeClass("sub-menu-wide")
    }), e("[href=\\#subscribe-init]").on("click", function (e) {
        e.preventDefault(), Q()
    }), !ohioVariables.subscribe_popup_enable || (J = "subscribeCookie", ($ = document.cookie.match(new RegExp("(?:^|; )" + J.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent($[1]) : void 0) || function () {
        switch (ohioVariables.subscribe_popup_type) {
            case"time":
                setTimeout(function () {
                    Q()
                }, 1e3 * +ohioVariables.subscribe_popup_var);
                break;
            case"scroll":
                var t = !0;
                e(window).on("scroll", function (i) {
                    var o = e(window).scrollTop() / (e(document).height() - e(window).height()),
                        a = Math.round(100 * o);
                    t && a > ohioVariables.subscribe_popup_var && (Q(), t = !1)
                });
                break;
            case"exit":
                t = !0, e(document).on("mouseleave", function () {
                    t && (Q(), t = !1)
                })
        }
    }(), e(window).on("ohio:handle_portfolio_onepage_slider", Z), e(window).on("ohio:handle_masonry", ae), e(window).on("ohio:handle_remove_slider_bullets", ne), e(window).on("ohio:handle_interactive_links_grid", de), e(window).on("ohio:handle_portfolio_moving_details_grid", ce), e(window).on("ohio:handle_global_page_animation", he), e(window).on("ohio:portfolioGridType12", ue), e(window).on("ohio:handle_bg_images", fe), G = 0, U = 0, K = !1, e(window).on("load", function () {
        K = !0
    }), setTimeout(function () {
        var t = Math.floor(29 * Math.random()) + 70, i = setInterval(function () {
            e(".sk-percentage .sk-percentage-percent").html(U + "%"), e(".sk-percentage").css("width", U + "%"), 100 == G ? (clearInterval(i), setTimeout(function () {
                e("#page-preloader").addClass("hidden")
            }, 10)) : G == t ? K ? (G++, U++) : (G = t, U = t) : (G++, U++)
        }, 12)
    }), d(), i(), window.ohioRefreshFrontEnd = function () {
        h(), f(), w(), y(), x(), L(), q(), W(), R(), k()
    }, e(window).on("load", function () {
        var d, M, I, Q, J, $, G, U, K, te, ie;
        Clb.init(), V(), !Clb.isMobileMenu && Clb.headerIsFifth && N(), r(), t(), s(), e("select.lang-dropdown").on("change", function () {
            window.location.href = this.value
        }), (d = e(".site-footer.sticky")).length && !Clb.isTablet && (e(".site-content").css({"margin-bottom": d.outerHeight() + "px"}), d.addClass("visible")), j(), h(), u(), _(), v(), m(), g(), b(), O(), f(), w(), T(), C(), (M = e(".sticky-section")).length && M.each(function () {
            var t = e(this).find(".sticky-section-item-second-image"), i = 0, o = e(".sticky-section-item").height(),
                a = e(".sticky-section-item").offset().top, s = t.height(), n = e(window).height(), l = 0, r = s;
            e(window).on("scroll", function () {
                var d = e(this).scrollTop();
                l = d / (s + n) * 20, d > a + (o / 2 - s) && (d > i ? r > 0 && (t.css("clip-path", "inset(" + r + "px 0px 0px)"), r -= l) : r < s && (t.css("clip-path", "inset(" + r + "px 0px 0px)"), r += l)), i = d
            })
        }), y(), x(), L(), q(), W(), e(".sbi").each(function () {
            e(this).find("a.sbi_photo").addClass("-unlink").attr("data-cursor-class", "cursor-link")
        }), I = e('[aria-label="filter-overlay"]'), e('[aria-label="filter"]').on("click", function () {
            event.preventDefault(), A(".filter-holder .mobile-overlay")
        }), e('[aria-label="close"]').on("click", function () {
            S(I)
        }), e(document).on("keydown", function (e) {
            27 == e.keyCode && S(I)
        }), Q = function () {
            var t = e(".single-product-tabs"), i = e(t).offset().top;
            t.find('.tabs-nav-link[data-ohio-tab="reviews"]').click(), e("body,html").animate({scrollTop: i}, 1e3)
        }, window.location.hash.startsWith("#product_review") && Q(), e('a[href="#product_review"], .woo-review-link').on("click", function () {
            Q()
        }), D(), se(), R(), e('[data-lazy-load="click"]').on("click", function () {
            B(e(this))
        }), E(), Z(), F(), oe(), null != (J = e('#sb_instagram #sbi_images, #order_review, .portfolio-grid, [data-lazy-load-scope="projects"]')) && J.each(function () {
            var t = this,
                i = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(function (o) {
                    o.forEach(function (o) {
                        if ("sbi_images" == e(t).attr("id") && o.addedNodes.length && (instagramFeedCustomCursor(), i.disconnect()), "order_review" == e(t).attr("id") && o.addedNodes.length && (Y(), i.disconnect()), e(t).hasClass("lazy-load") && -1 != o.oldValue.indexOf("active") && e(t).data("isLoaded")) {
                            var a = e(t).parent();
                            a.find(".portfolio-filter").length && setTimeout(function () {
                                H(a) && B(e("[data-lazy-load]"))
                            }, 1e3)
                        }
                    })
                });
            i.observe(this, {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0,
                attributeOldValue: !0,
                characterDataOldValue: !0
            })
        }), ne(), de(), function () {
            var t = e(".scroll-scale-image").find(".project-gallery .project-image");
            if (t.length) {
                var i = 1, o = 0, a = t.offset().top, s = t.height(), n = e(window).height(), l = (s = t.height(), 0);
                e(window).on("scroll", function () {
                    var r = e(this).scrollTop();
                    l = r / (s + n) / 5, r < a + s && (r > o ? setTimeout(function () {
                        t.css("transform", "scale(" + i + ")"), i = 1 + l
                    }, 50) : (t.css("transform", "scale(" + i + ")"), i > 1.005 && (i = 1 + l))), o = r
                })
            }
        }(), ue(), ae(), ($ = e("#form_privacy_policy")).each(function () {
            e(this).length && e(this).parents(".wpcf7-form").find(".btn").prop("disabled", !0)
        }), $.on("change", function () {
            e(this).is(":checked") ? e(this).parents(".wpcf7-form").find(".btn").prop("disabled", !1) : e(this).parents(".wpcf7-form").find(".btn").prop("disabled", !0)
        }), function () {
            const t = e(".clb__dark_section, .clb__light_section");
            if (!t.length) return;
            const i = (e, t) => {
                const i = e.getBoundingClientRect(), o = t.getBoundingClientRect(), a = o.height;
                return Math.max(0, Math.min(i.top + i.height, o.top + a) - Math.max(i.top, o.top)) / a
            }, o = e(".dynamic-typo, .header-dynamic-typo"), a = .5;
            l(e(window));
            let s = 0, n = null;

            function l() {
                const s = e("#content");
                o.each(function () {
                    let o = !1;
                    const n = e(this);
                    t.each(function () {
                        const t = e(this), l = t.hasClass("site-footer sticky"), r = l ? i(s[0], n[0]) : 0,
                            d = i(this, n[0]), c = l ? r < d && d >= a : d >= a;
                        if (o = c, c) return t.hasClass("clb__dark_section") ? n.removeClass("dark-typo").addClass("light-typo") : t.hasClass("clb__light_section") && n.removeClass("light-typo").addClass("dark-typo"), !1
                    }), o || n.removeClass("dark-typo light-typo")
                })
            }

            e(window).on("scroll", function () {
                const e = Date.now();
                clearTimeout(n), e - s >= 100 && (l(), s = e), n = setTimeout(() => {
                    l(), s = e
                }, 100)
            })
        }(), le(), function () {
            var t = new Object;

            function i() {
                this.classList.contains("dark-typo") ? (this.classList.remove("dark-typo"), this.classList.add("light-typo")) : this.classList.contains("light-typo") && (this.classList.remove("light-typo"), this.classList.add("dark-typo"))
            }

            t.switcher = e(".color-switcher"), t.switcherDarkWidth = 0, t.switcherLightWidth = 0, t.switcherToddler = t.switcher.find(".color-switcher-toddler"), t.switcherWidth = t.switcher.outerWidth(), t.transformRtl = Clb.isRtl ? 1 : -1;
            var o = e(".clb__light_section, .clb__dark_section"), a = e(".scroll-top"), s = e(".social-bar"),
                n = e(".search-global.fixed"), l = e(".header-dynamic-typo");
            t.switcher.on("click", function () {
                t.switcherWidth = t.switcher.outerWidth(), e(Clb.body).addClass("switching"), e(Clb.body).toggleClass("dark-scheme"), e(this).toggleClass("dark"), re(t), o.toggleClass("clb__light_section clb__dark_section"), a.each(i), s.each(i), n.each(i), l.each(i), ohioVariables && ohioVariables.save_color_mode_state && (document.cookie = "ohio-switcher-state=" + (e(Clb.body).hasClass("dark-scheme") ? "dark" : "light") + ";path=/"), setTimeout(function () {
                    e(Clb.body).removeClass("switching")
                }, 10)
            })
        }(), he(), P(), G = e(".offer-banner.marquee").width(), U = e(".offer-banner.marquee .holder").width(), e(".offer-banner.marquee .holder").clone().appendTo(".offer-banner .container").addClass("cloned"), e(".offer-banner.marquee").addClass("animate"), U > G ? e(".offer-banner.marquee").addClass("stretch") : e(".holder.cloned").width(U), K = e(".offer-banner.flipping .offer-banner-item"), te = 0, ie = e(".offer-banner").data("flipping-interval"), function e() {
            var t = te === K.length - 1 ? 0 : te + 1;
            K.removeClass("is-visible").removeClass("is-next").removeClass("no-transition").removeClass("visible"), K.eq(te).addClass("is-visible"), K.eq(t).addClass("is-next"), ++te == K.length && (te = 0), setTimeout(e, ie)
        }(), Clb.isDesktop && ce(), Clb.isTablet || me(), e(window).on("resize", function () {
            t(), u(), C(), z()
        }), e(window).on("scroll", function () {
            _(), g()
        }), setTimeout(function () {
            X(), k(), p(), z()
        }, 10), setTimeout(function () {
            n()
        }, 100), e(".clb-slider-item").each(function () {
            e(this).hasClass("active") && e(this).find(".animated-holder").addClass("visible")
        }), Y(), Clb.body.addClass("page-is-loaded"), e(".scroll-top").on("click", function () {
            return e("html, body").animate({scrollTop: 0}, 800), !1
        }), e(".tooltip").each(function () {
            if (e(this).find(".tooltip-top, .tooltip-bottom").length) {
                var t = e(this).find(".tooltip-text");
                t.css("left", e(this).outerWidth() / 2 - t.outerWidth() / 2 + "px")
            }
        }), e("body").on("click", ".message-box .clb-close", function () {
            e(this).parent().slideUp({duration: 300, queue: !1}).fadeOut(300);
            var t = e(this);
            setTimeout(function () {
                t.remove()
            }, 350)
        }), e("body").on("click", ".alert [aria-label=close]", function (t) {
            t.preventDefault(), function (e, t, i) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
                var a = "expires=" + o.toUTCString();
                document.cookie = e + "=" + t + ";" + a + ";path=/"
            }("notification", "enabled", +ohioVariables.notification_expires), e(this).parents(".alert").addClass("-invisible")
        }), fe(), e(".wpb_wrapper").each(function () {
            var t = e(this).find("> div");
            1 == t.length && t.eq(0).hasClass("google-maps") && e(this).css("height", "100%")
        }), window.vc_waypoints && setTimeout(function () {
            window.vc_waypoints()
        }, 600), e(".mobile-social").on("click", function (t) {
            if (t.stopPropagation(), e(this).hasClass("active")) e(this).find(".social").css("height", "0px"), e(this).removeClass("active"); else {
                var i = e(this).find(".social"), o = e(this);
                i.css("height", ""), i.addClass("no-transition"), e(this).addClass("active");
                var a = i.outerHeight();
                e(this).removeClass("active"), setTimeout(function () {
                    i.css("height", a + "px"), i.removeClass("no-transition"), o.addClass("active")
                }, 50)
            }
        }), e(window).on("scroll", function () {
            var t = function () {
                i(), a(), s(), function () {
                    if (e(".bar").length) {
                        var t = e(".bar-hamburger .hamburger");
                        e(document).scrollTop() > 100 ? t.css("margin-top", "25px") : t.css("margin-top", "")
                    }
                }(), x(), R(), E(), oe()
            };
            window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                t()
            }) : t(), e(window).scrollTop() > 250 ? e(".scroll-top").addClass("visible") : e(".scroll-top").removeClass("visible")
        });
        var pe = e(window).width();
        e(window).height();
        e(window).on("resize", function () {
            Clb.resize(), V(), o(), s(), j(), u(), x(), R(), E(), se(), C(), i(), L(), P(), c(), le(), n(), setTimeout(function () {
                X(), ae(), Clb.isElementorPage && u(), ue()
            }, 1e3), !Clb.isMobileMenu && Clb.headerIsFifth && Clb.header.hasClass("header-4") && setTimeout(function () {
                Clb.header.find(".nav").removeAttr("style"), N()
            }, 100), Clb.isTablet && l(), e(window).width() !== pe && k(), Clb.isMobileMenu && Clb.headerIsFifth && e("#site-navigation, .left-part, .right-part, .nav-item").removeAttr("style"), "undefined" != typeof AOS && (setTimeout(function () {
                AOS.refresh()
            }, 10), setTimeout(function () {
                AOS.refresh(), window.vc_waypoints && window.vc_waypoints()
            }, 600)), e("[data-portfolio-grid-slider]").hasClass("grid_6") && ee(), Clb.isTablet || me()
        }), e("#page-preloader:not(.percentage-preloader), .container-loading:not(.loading-text)").addClass("hidden");
        var ge = navigator.userAgent.toLowerCase(), be = !1;
        -1 != ge.indexOf("safari") && (be = !(ge.indexOf("chrome") > -1)), (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || be) && (window.onpageshow = function (e) {
            e.persisted && window.location.reload()
        }), Clb.body.hasClass("global-page-animation") && Clb.body.addClass("global-page-animation-active"), e(".gimg").css("opacity", "1")
    }), e("body").hasClass("ohio-anchor-onepage") && (e("body #masthead a[href]:not(.hamburger-holder):not(.search-global), body .hamburger-nav a[href]").on("click", function (t) {
        if (e(this).attr("href").includes("#")) {
            t.preventDefault();
            var i = "#" + e(this).attr("href").split("#")[1];
            return e(i).length && e("html, body").animate({scrollTop: e(i).offset().top}, 500, function () {
                window.location.hash = i
            }), !1
        }
    }), "#" == window.location.hash.substring(0, 1) && e(window.location.hash).length && e("html, body").animate({scrollTop: e(window.location.hash).offset().top}, 500)), e(".filter select").change(function () {
        let t = e(this).find("option:selected");
        t.attr("data-select-href") && window.location.assign(t.attr("data-select-href"))
    }), e("body").on("ohio:quickview", function () {
        A(e("body").data("ohio:quickview-data"))
    }), e("body").on("ohio:btn-preloader", function () {
        Y()
    }), e(document.body).hasClass("auto-color-mode") && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && e(document.body).addClass("dark-scheme"), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t => {
        e(document.body).toggleClass("dark-scheme")
    }))
}(jQuery), jQuery(window).on("load", function () {
    function e(e) {
        var t = document.createElement("div");
        return t.classList.add("row-bg-lines", "page-container", "-" + e), t.innerHTML = "<div></div>".repeat(5), t
    }

    function t(e, t) {
        var i = document.createElement("div");
        return i.classList.add("row-bg-text", "vc_hidden-xs", t), i.innerText = e, i
    }

    function i(e, t) {
        var i = "container" === e.getAttribute("data-element_type");
        (e.querySelector(i ? ".e-con-inner" : ".elementor-container") || e).prepend(t)
    }

    jQuery(".elementor-motion-effects-container").length && setTimeout(function () {
        window.dispatchEvent(new Event("resize"))
    }, 500);

    function o(o) {
        var a = o[0], s = a.getAttribute("data-model-cid"), n = elementorFrontend.config.elements.data[s];
        "yes" === n.attributes.background_lines_enabled && i(a, e(n.attributes.background_lines_style)), n.attributes.side_title_text && i(a, t(n.attributes.side_title_text, n.attributes.side_title_position))
    }

    document.querySelectorAll("[ohio-side-title-text]").forEach(function (e) {
        var o = e.getAttribute("ohio-side-title-text"), a = e.getAttribute("ohio-side-title-position");
        i(e, t(o, a))
    }), document.querySelectorAll("[ohio-background-lines]").forEach(function (t) {
        i(t, e(t.getAttribute("ohio-background-lines")))
    }), jQuery(window).on("elementor/frontend/init", () => {
        elementorFrontend.isEditMode() && (elementorFrontend.hooks.addAction("frontend/element_ready/section", o), elementorFrontend.hooks.addAction("frontend/element_ready/container", o))
    })
}), jQuery(window).on("elementor/frontend/init", function () {
    jQuery(window).trigger("ohio:handle_global_page_animation")
});