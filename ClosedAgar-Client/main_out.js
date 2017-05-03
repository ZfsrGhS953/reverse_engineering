(function(B, bp) {
        var bq = function(a) {
            while (--a) {
                B['push'](B['shift']())
            }
        };
        var bd = function() {
            var s = {
                'data': {
                    'key': 'cookie',
                    'value': 'timeout'
                },
                'setCookie': function(a, b, c, d) {
                    d = d || {};
                    var f = b + '=' + c;
                    var e = 0x0;
                    for (var e = 0x0, g = a['length']; e < g; e++) {
                        var h = a[e];
                        f += '; ' + h;
                        var t = a[h];
                        a['push'](t);
                        g = a['length'];
                        if (t !== !![]) {
                            f += '=' + t
                        }
                    }
                    d['cookie'] = f
                },
                'removeCookie': function() {
                    return 'dev'
                },
                'getCookie': function(c, d) {
                    c = c || function(a) {
                        return a
                    };
                    var f = c(new RegExp('(?:^|; )' + d['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                    var e = function(a, b) {
                        a(++b)
                    };
                    e(bq, bp);
                    return f ? decodeURIComponent(f[0x1]) : undefined
                }
            };
            var E = function() {
                var a = new RegExp('\w+ *\(\) *{\w+ *[' | "].+['|"]; ? *
            }
            ');
            return a['test'](s['removeCookie']['toString']())
        };
        s['updateCookie'] = E;
        var I = '';
        var J = s['updateCookie']();
        if (!J) {
            s['setCookie'](['*'], 'counter', 0x1)
        } else if (J) {
            I = s['getCookie'](null, 'counter')
        } else {
            s['removeCookie']()
        }
    }; bd()
}(_0x3bf9, 0x1f2));
var _2afa = function(a, b) {
    var a = parseInt(a, 0x10);
    var c = _0x3bf9[a];
    return c
};
var $jscomp = {
    'scope': {}
};
$jscomp[_2afa('0x0')] = _2afa('0x1') == typeof Object[_2afa('2')] ? Object[_2afa('0x0')] : function(a, b, c) {
    if (c[_2afa('0x3')] || c[_2afa('0x4')])
        throw new TypeError('ES3 does not support getters and setters.');
    a != Array[_2afa('0x5')] && a != Object[_2afa('0x5')] && (a[b] = c[_2afa('0x6')])
};
$jscomp[_2afa('0x7')] = function(a) {
    return _2afa('0x8') != typeof window && window === a ? a : _2afa('0x8') != typeof global && null != global ? global : a
};
$jscomp[_2afa('0x9')] = $jscomp[_2afa('0x7')](this);
$jscomp[_2afa('0xa')] = function(a, b, c, d) {
    if (b) {
        c = $jscomp[_2afa('0x9')];
        a = a[_2afa('0xb')]('.');
        for (d = 0x0; d < a.length - 0x1; d++) {
            var f = a[d];
            f in c || (c[f] = {});
            c = c[f]
        }
        a = a[a.length - 0x1];
        d = c[a];
        b = b(d);
        b != d && null != b && $jscomp[_2afa('0x0')](c, a, {
            'configurable': true,
            'writable': true,
            'value': b
        })
    }
};
$jscomp['polyfill'](_2afa('0xd'), function(f) {
    return f ? f : function(a, b, c) {
        var d = this['length'] || 0x0;
        0x0 > b && (b = Math[_2afa('0xe')](0x0, d + b));
        if (null == c || c > d)
            c = d;
        c = Number(c);
        0x0 > c && (c = Math[_2afa('0xe')](0x0, d + c));
        for (b = Number(b || 0x0); b < c; b++)
            this[b] = a;
        return this
    }
}, _2afa('0xf'), _2afa('0x10'));
(function(n, j) {
        var bY = function() {
            var f = !![];
            return function(b, c) {
                var d = f ? function() {
                        if (c) {
                            var a = c['apply'](b, arguments);
                            c = null;
                            return a
                        }
                    } :
                    function() {};
                f = ![];
                return d
            }
        }();
        var bZ = bY(this, function() {
                var c = function() {
                        return 'dev'
                    },
                    d = function() {
                        return 'window'
                    };
                var f = function() {
                    var a = new RegExp('\w+ *\(\) *{\w+ *[' | "].+['|"]; ? *
                }
                ');
                return !a['test'](c['toString']())
            };
            var e = function() {
                var a = new RegExp('(\\[x|u](\w){2,4})+');
                return a['test'](d['toString']())
            };
            var g = function(a) {
                var b = ~-0x1 >> 0x1 + 0xff % 0x0;
                if (a['indexOf']('i' === b)) {
                    h(a)
                }
            };
            var h = function(a) {
                var b = ~-0x4 >> 0x1 + 0xff % 0x0;
                if (a['indexOf']((!![] + '')[0x3]) !== b) {
                    g(a)
                }
            };
            if (!f()) {
                if (!e()) {
                    g('ind\u0435xOf')
                } else {
                    g('indexOf')
                }
            } else {
                g('ind\u0435xOf')
            }
        }); bZ();

    function br(a) {
        this['id'] = a;
        this[_2afa('0x11')] = [];
        this[_2afa('0x12')] = []
    }

    function ca(a) {
        for (var b = 0x0; b < a[_2afa('0x13')]['length']; b++) {
            var c = a[_2afa('0x13')][b];
            0x0 > P && c[_2afa('0x14')] < p / 2 && (P = c[_2afa('0x15')],
                M[_2afa('0x16')](c[_2afa('0x14')], c[_2afa('0x17')]),
                V['copyFrom'](M),
                Q[_2afa('0x16')](0x0, 0x0));
            var d = ~~(p / 0x7);
            c[_2afa('0x14')] > p - d && c[_2afa('0x17')] > q - d && C();
            c[_2afa('0x14')] > p - d && c[_2afa('0x17')] > q - 2 * d - 0xa && c['clientY'] < q - d - 0xa && C()
        }
        W = a['touches']
    }

    function cb(a) {
        a[_2afa('0x19')]();
        for (var b = 0x0; b < a[_2afa('0x13')].length; b++) {
            var c = a[_2afa('0x13')][b];
            P == c['identifier'] && (V[_2afa('0x16')](c['clientX'], c[_2afa('0x17')]),
                Q[_2afa('0x1a')](V),
                Q[_2afa('0x1b')](M),
                be = 0x3 * Q['x'] + p / 2,
                bf = 0x3 * Q['y'] + q / 2,
                bs(),
                C())
        }
        W = a[_2afa('0x18')]
    }

    function cc(a) {
        W = a[_2afa('0x18')];
        for (var b = 0x0; b < a[_2afa('0x13')].length; b++)
            if (P == a[_2afa('0x13')][b][_2afa('0x15')]) {
                P = -0x1;
                Q[_2afa('0x16')](0x0, 0x0);
                break
            }
    }

    function bI(a) {
        _0x3f6cb1 *= Math['pow'](0.9, a['wheelDelta'] / -0x78 || a[_2afa('0x1e')] || 0x0);
        0x1 > _0x3f6cb1 && (_0x3f6cb1 = 0x1);
        _0x3f6cb1 > 0x4 / o && (_0x3f6cb1 = 0x4 / o)
    }

    function cd() {
        if (0.4 > o)
            X = null;
        else {
            for (var a = Number[_2afa('0x1f')], b = Number[_2afa('0x1f')], c = Number[_2afa('20')], d = Number[_2afa('20')], f = 0x0, e = 0x0; e < u['length']; e++) {
                var g = u[e];
                g[_2afa('21')]() && !g[_2afa('22')] && 0x14 < g[_2afa('23')] * o && (f = Math[_2afa('0xe')](g[_2afa('23')], f),
                    a = Math[_2afa('24')](g['x'], a),
                    b = Math[_2afa('24')](g['y'], b),
                    c = Math['max'](g['x'], c),
                    d = Math[_2afa('0xe')](g['y'], d))
            }
            X = _0x12d0de['init']({
                'minX': a - (f + 100),
                'minY': b - (f + 100),
                'maxX': c + (f + 100),
                'maxY': d + (f + 100),
                'maxChildren': 2,
                'maxDepth': 0x4
            });
            for (e = 0x0; e < u.length; e++)
                if (g = u[e],
                    g[_2afa('21')]() && !(0x14 >= g[_2afa('23')] * o))
                    for (a = 0x0; a < g[_2afa('26')].length; ++a)
                        b = g['points'][a]['x'],
                        c = g[_2afa('26')][a]['y'],
                        b < x - p / 2 / o || c < y - q / 2 / o || b > x + p / 2 / o || c > y + q / 2 / o || X['insert'](g[_2afa('26')][a])
        }
    }

    function bs() {
        bg = (be - p / 2) / o + x;
        bh = (bf - q / 2) / o + y
    }

    function bJ() {
        _0x40f9e6 = false;
        j(_2afa('29'))[_2afa('28')]();
        j(_2afa('2a'))[_2afa('28')]()
    }

    function bt(a) {
        _0x40f9e6 = true;
        Y = null;
        j('#overlays')[_2afa('2b')](a ? 0xc8 : 0xbb8);
        a || j(_2afa('29'))[_2afa('2b')](0xbb8)
    }

    function ce(a) {
        for (var b in a)
            if (a[b] || 0x0 === a[b])
                k[b] = a[b];
        a[_2afa('2c')] && j(window)[_2afa('2d')](_2afa('2e'), function() {
            return k[_2afa('2c')]
        });
        a[_2afa('2f')] && (j(document)[_2afa('0x30')](_2afa('2f'), k['title']),
            j(_2afa('0x32'))['text'](k[_2afa('2f')]));
        a[_2afa('0x33')] && j('#nick')[_2afa('0x34')](k[_2afa('0x33')]);
        a['nickplaceholder'] && j(_2afa('0x37'))[_2afa('0x36')]('placeholder', k[_2afa('0x35')]);
        a[_2afa('0x38')] && j(_2afa('0x39'))[_2afa('0x31')](k[_2afa('0x38')]);
        a[_2afa('0x3a')] && j(_2afa('0x3b'))[_2afa('0x3c')](k[_2afa('0x3a')]);
        a[_2afa('0x3d')] && j(_2afa('0x37'))[_2afa('0x36')](_2afa('0x3e'), k['maxName']);
        a[_2afa('0x3f')] && (bK = 0x1 == k[_2afa('0x3f')] ? true : false);
        a[_2afa('0x40')] && (bL = 0x1 == k[_2afa('0x40')] ? true : false);
        a[_2afa('0x41')] && (bM = 0x1 == k[_2afa('0x41')] ? true : false);
        a['rMacro'] && (bN = 0x1 == k[_2afa('0x42')] ? true : false);
        a[_2afa('0x43')] && (bO = 0x1 == k[_2afa('0x43')] ? true : false);
        if (a[_2afa('0x44')] || 0x0 == a['chat'])
            2 > k[_2afa('0x44')] ? j('#chat_textbox')[_2afa('28')]() : j('#chat_textbox')[_2afa('0x45')]();
        if (a[_2afa('0x46')] || 0x0 === a[_2afa('0x46')])
            Z = 2 > k['darkBG'] ? false : true;
        if (a[_2afa('0x47')] || 0x0 === a[_2afa('0x47')])
            bu = 2 <= k['skins'] ? true : false;
        if (a['grid'] || 0x0 === a[_2afa('0x48')])
            bv = 2 <= k['grid'] ? false : true;
        if (a[_2afa('0x49')] || 0x0 === a[_2afa('0x49')])
            _0x12425e = 2 > k['acid'] ? false : true;
        if (a[_2afa('0x4a')] || 0x0 === a[_2afa('0x4a')])
            bi = 2 <= k['colors'] ? false : true;
        if (a[_2afa('0x4b')] || 0x0 === a[_2afa('0x4b')])
            bw = 2 > k[_2afa('0x4b')] ? false : true;
        if (a[_2afa('0x4c')] || 0x0 === a[_2afa('0x4c')])
            bx = 2 > k[_2afa('0x4c')] ? false : true;
        if (a[_2afa('0x4d')] || 0x0 === a[_2afa('0x4d')])
            by = 2 <= k['smooth'] ? 2 : 0.4;
        0x0 == k[_2afa('0x44')] || 0x3 == k[_2afa('0x44')] ? j(_2afa('0x4e'))[_2afa('0x36')](_2afa('0x4f'), true) : j(_2afa('0x4e'))[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k['darkBG'] || 0x3 == k[_2afa('0x46')] ? j('#cdark')[_2afa('0x36')](_2afa('0x4f'), true) : j(_2afa('0x50'))[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k[_2afa('0x47')] || 0x3 == k[_2afa('0x47')] ? j(_2afa('0x51'))[_2afa('0x36')](_2afa('0x4f'), true) : j(_2afa('0x51'))['attr'](_2afa('0x4f'), false);
        0x0 == k[_2afa('0x48')] || 0x3 == k[_2afa('0x48')] ? j(_2afa('0x52'))[_2afa('0x36')](_2afa('0x4f'), true) : j(_2afa('0x52'))[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k['acid'] || 0x3 == k[_2afa('0x49')] ? j(_2afa('0x53'))['attr'](_2afa('0x4f'), true) : j(_2afa('0x53'))[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k[_2afa('0x4a')] || 0x3 == k[_2afa('0x4a')] ? j(_2afa('0x54'))[_2afa('0x36')](_2afa('0x4f'), true) : j(_2afa('0x54'))[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k[_2afa('0x4b')] || 0x3 == k[_2afa('0x4b')] ? j(_2afa('0x55'))[_2afa('0x36')](_2afa('0x4f'), true) : j('#cname')[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k['showMass'] || 0x3 == k[_2afa('0x4c')] ? j('#cmass')[_2afa('0x36')](_2afa('0x4f'), true) : j('#cmass')[_2afa('0x36')](_2afa('0x4f'), false);
        0x0 == k[_2afa('0x4d')] || 0x3 == k[_2afa('0x4d')] ? j(_2afa('0x56'))[_2afa('0x36')](_2afa('0x4f'), true) : j('#csmooth')[_2afa('0x36')](_2afa('0x4f'), false)
    }

    function C() {
        var a;
        if (null != m) {
            a = be - p / 2;
            var b = bf - q / 2;
            0x40 <= a * a + b * b && !(0.01 > Math[_2afa('0x57')](_0x42ce88 - bg) && 0.01 > Math[_2afa('0x57')](_212946 - bh)) && (_0x42ce88 = bg,
                _212946 = bh,
                R(_2afa('0x58'), bg + '|' + bh))
        }
    }

    function cf(a) {
        if ('<' == a[_2afa('0x59')](0x0)) {
            var b = a[_2afa('0x5a')]('>');
            if (-0x1 == b)
                return {
                    'name': a
                };
            var c = a[_2afa('0x5b')](0x1, b);
            if (!c)
                return {
                    'name': a
                };
            c = ba[_2afa('0x5a')](c['toLowerCase']());
            return -0x1 == c ? {
                'name': a
            } : {
                'name': a[_2afa('0x5d')](b + 0x1),
                'skin': c
            }
        }
        return {
            'name': a
        }
    }

    function R(a, b) {
        m && !bz && m[_2afa('0x5e')](a, b)
    }

    function bP() {
        if (null != m && null != Y) {
            var a = cf(Y);
            R('mes', {
                'type': _2afa('0x5f'),
                'name': a[_2afa('0x60')],
                'skin': a[_2afa('0x61')]
            })
        }
    }

    function bQ() {
        bA();
        n[_2afa('0x62')](bQ)
    }

    function bR() {
        window[_2afa('0x63')](0x0, 0x0);
        p = n[_2afa('100')];
        q = n[_2afa('0x65')];
        bB[_2afa('0x66')] = p;
        bB[_2afa('0x67')] = q;
        var a = j('#helloDialog');
        a[_2afa('0x68')](_2afa('0x69'), _2afa('0x6a'));
        var b = a[_2afa('0x67')]();
        b > q / 1.1 ? a[_2afa('0x68')](_2afa('0x69'), _2afa('0x6b') + q / b / 1.1 + ')') : a[_2afa('0x68')]('transform', _2afa('0x6c'));
        bA()
    }

    function cg() {
        if (0x0 != r.length) {
            for (var a = 0x0, b = 0x0; b < r['length']; b++)
                a += r[b][_2afa('23')];
            a = Math[_2afa('0x1c')](Math[_2afa('24')](0x40 / a, 0x1), 0.4) * Math[_2afa('0xe')](q / 0x438, p / 0x780) * _0x3f6cb1;
            o = (0x9 * o + a) / 0xa
        }
    }

    function ch() {
        if (bC && -0x1 != bj) {
            var a = bC,
                b = q / 2 / o,
                c = p / 2 / o,
                d = N - c,
                f = _0x43bf16 - b,
                e = 2 * c,
                g = 2 * b,
                c = N + c,
                b = _0x43bf16 + b;
            if (!(a.x > d && a.x < c && a.y > f && a.y < b)) {
                b = _0x43bf16 - a.y;
                b = Math[_2afa('0xe')](100 - b / Math.sin(Math.atan2(b, N - a.x)) * 0.009, 23);
                var c = a.x,
                    a = a.y,
                    f = ~~(g / 2) + f,
                    _0x4604ac = ~~(e / 2) + d,
                    d = (a - f) / (c - _0x4604ac); -
                g / 2 <= d * e / 2 && d * e / 2 <= g / 2 ? (c < _0x4604ac ? (g = _0x4604ac - e / 2,
                        e = f - e / 2 * d - b / 2) : (g = _0x4604ac + e / 2 - b,
                        e = f + e / 2 * d - b / 2),
                    e = {
                        'x': g,
                        'y': e
                    }) : -e / 2 <= g / 2 / d && g / 2 / d <= e / 2 ? (a < f ? (e = f - g / 2,
                        g = _0x4604ac - g / 2 / d - b / 2) : (e = f + g / 2 - b,
                        g = _0x4604ac + g / 2 / d - b / 2),
                    e = {
                        'x': g,
                        'y': e
                    }) : e = false;
                e && (g = new Image(),
                    g[_2afa('0x6f')] = 'http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png',
                    l[_2afa('0x70')](g, e['x'], e['y'], b, b))
            }
        }
    }

    function bA() {
        var c, d = Date[_2afa('0x71')]();
        ++ci;
        F = d;
        if (0x0 < r.length) {
            cg();
            for (var f = c = 0x0, e = 0x0; e < r.length; e++)
                r[e][_2afa('0x72')](),
                c += r[e]['x'] / r.length,
                f += r[e]['y'] / r.length;
            N = c;
            _0x43bf16 = f;
            _276e5e = o;
            x = (x + c) / 2;
            y = (y + f) / 2
        } else
            x = (0x1d * x + N) / 0x1e,
            y = (0x1d * y + _0x43bf16) / 0x1e,
            o = (0x9 * o + _276e5e * Math[_2afa('0xe')](q / 0x438, p / 0x780) * _0x3f6cb1) / 0xa;
        cd();
        bs();
        _0x12425e || l[_2afa('0x73')](0x0, 0x0, p, q);
        _0x12425e ? (l[_2afa('0x74')] = Z ? _2afa('0x75') : _2afa('0x76'),
            l[_2afa('0x77')] = 0.05,
            l[_2afa('0x78')](0x0, 0x0, p, q),
            l[_2afa('0x77')] = 0x1) : bv || cj();
        u[_2afa('0x79')](function(a, b) {
            return a[_2afa('23')] == b[_2afa('23')] ? a['id'] - b['id'] : a[_2afa('23')] - b[_2afa('23')]
        });
        l[_2afa('0x7a')]();
        l[_2afa('0x7b')](p / 2, q / 2);
        l[_2afa('0x7c')](o, o);
        l[_2afa('0x7b')](-x, -y);
        for (e = 0x0; e < K.length; e++)
            K[e][_2afa('0x7d')](l);
        for (e = 0x0; e < u.length; e++)
            u[e].drawOneCell(l);
        ch();
        if (_0x3549b8) {
            _2ebfc7 = (0x3 * _2ebfc7 + _0x1d1331) / 0x4;
            _0x1b6faf = (0x3 * _0x1b6faf + _0x1ab7d8) / 0x4;
            l[_2afa('0x7a')]();
            l.strokeStyle = _2afa('0x7e');
            l[_2afa('0x7f')] = 0xa;
            l[_2afa('0x80')] = 'round';
            l[_2afa('0x81')] = 'round';
            l[_2afa('0x77')] = 0.5;
            l['beginPath']();
            for (e = 0x0; e < r.length; e++)
                l[_2afa('0x82')](r[e]['x'], r[e]['y']),
                l[_2afa('0x83')](_2ebfc7, _0x1b6faf);
            l[_2afa('0x84')]();
            l[_2afa('0x85')]()
        }
        l['restore']();
        G && G['width'] && l[_2afa('0x70')](G, p - G.width - 0xa, 0xa);
        bS || null != D && 0x0 < D[_2afa('0x66')] && l[_2afa('0x70')](D, 0x0, q - D[_2afa('0x67')] - 0x32);
        S = bb || 0x0 === bb ? bb : Math.max(S, calcUserScore());
        0x0 != S && (null == _0x55eab7 && (_0x55eab7 = new T(0x18, _2afa('0x86'))),
            _0x55eab7['setValue'](_2afa('0x88') + ~~S),
            f = _0x55eab7[_2afa('0x89')](),
            c = f['width'],
            l[_2afa('0x77')] = 0.2,
            l[_2afa('0x74')] = _2afa('0x8a'),
            l['fillRect'](0xa, 0xa, c + 0xa, 22),
            l[_2afa('0x77')] = 0x1,
            l[_2afa('0x70')](f, 0xf, 0xf));
        cl(l);
        cm(l);
        c = Date[_2afa('0x71')]() - d;
        c > 0x3e8 / 0x3c ? _0x581b50 -= 0.01 : c < 0x3e8 / 0x41 && (_0x581b50 += 0.01);
        0.4 > _0x581b50 && (_0x581b50 = 0.4);
        0x1 < _0x581b50 && (_0x581b50 = 0x1)
    }

    function cm(a) {
        a[_2afa('0x7a')]();
        if (bk)
            for (var b = 0x0; b < W.length; b++) {
                var c = W[b];
                c['identifier'] == P ? (a[_2afa('0x8b')](),
                    a[_2afa('0x8c')] = _2afa('0x8d'),
                    a[_2afa('0x7f')] = 0x6,
                    a['arc'](M['x'], M['y'], 28, 0x0, 2 * Math.PI, true),
                    a[_2afa('0x84')](),
                    a['beginPath'](),
                    a[_2afa('0x8c')] = _2afa('0x8d'),
                    a[_2afa('0x7f')] = 2,
                    a[_2afa('0x8e')](M['x'], M['y'], 0x3c, 0x0, 2 * Math.PI, true),
                    a[_2afa('0x84')](),
                    a['beginPath'](),
                    a[_2afa('0x8c')] = '#0096ff',
                    a[_2afa('0x8e')](V['x'], V['y'], 28, 0x0, 2 * Math.PI, true)) : (a[_2afa('0x8b')](),
                    a[_2afa('0x8b')](),
                    a[_2afa('0x8c')] = _2afa('0x8d'),
                    a[_2afa('0x7f')] = '6',
                    a[_2afa('0x8e')](c['clientX'], c[_2afa('0x17')], 28, 0x0, 2 * Math.PI, true));
                a['stroke']()
            }
        a[_2afa('0x85')]()
    }

    function cj() {
        l[_2afa('0x74')] = Z ? _2afa('0x75') : _2afa('0x76');
        l[_2afa('0x78')](0x0, 0x0, p, q);
        l[_2afa('0x7a')]();
        l['strokeStyle'] = Z ? '#AAAAAA' : _2afa('0x8a');
        l['globalAlpha'] = 0.2;
        l['scale'](o, o);
        for (var a = p / o, b = q / o, c = -0.5 + (-x + a / 2) % 0x32; c < a; c += 0x32)
            l['beginPath'](),
            l[_2afa('0x82')](c, 0x0),
            l[_2afa('0x83')](c, b),
            l[_2afa('0x84')]();
        for (c = -0.5 + (-y + b / 2) % 0x32; c < b; c += 0x32)
            l[_2afa('0x8b')](),
            l[_2afa('0x82')](0x0, c),
            l[_2afa('0x83')](a, c),
            l[_2afa('0x84')]();
        l[_2afa('0x85')]()
    }

    function cl(a) {
        if (bk && _0x16c472[_2afa('0x66')]) {
            var b = ~~(p / 0x7);
            a[_2afa('0x70')](_0x16c472, p - b, q - b, b, b)
        }
        bk && _0x16c472[_2afa('0x66')] && (b = ~~(p / 0x7),
            a['drawImage'](_0x57e636, p - b, q - 2 * b - 0xa, b, b))
    }

    function calcUserScore() {
        for (var a = 0x0, b = 0x0; b < r.length; b++)
            a += r[b][_2afa('0x8f')];
        return a
    }

    function bT(a, b, c, d, f, e, g) {
        this['id'] = a;
        this['ox'] = this['x'] = b;
        this['oy'] = this['y'] = c;
        this['oSize'] = this['size'] = d;
        this[_2afa('0x90')] = e;
        this[_2afa('26')] = [];
        this[_2afa('0x91')] = [];
        this[_2afa('0x8f')] = f;
        this[_2afa('0x92')]();
        this[_2afa('0x93')](g)
    }

    function T(a, b, c, d) {
        a && (this['_size'] = a);
        b && (this[_2afa('0x94')] = b);
        this['_stroke'] = !!c;
        d && (this[_2afa('0x96')] = d)
    }
    toastr[_2afa('0x98')][_2afa('0x97')] = true; toastr[_2afa('0x98')][_2afa('0x99')] = true; toastr[_2afa('0x98')][_2afa('0x9a')] = true; toastr[_2afa('0x98')][_2afa('0x9b')] = false; toastr[_2afa('0x98')][_2afa('0x9c')] = 'toast-bottom-right';
    var bc = false, L = [], bU = false, bD = 0x0, bE = [], bF = [], bz = false, ba = []; $['ajax']({
        'url': _2afa('0x9d'),
        'type': _2afa('0x9e'),
        'data': {},
        'success': function(a) {
            a = a['toString']()[_2afa('0xb')]('\x0a');
            for (var b = 0x0; b < a.length; b++)
                a[b] && (ba[b + 0x1] = a[b]);
            toastr['success'](_2afa('0xa1'))
        },
        'error': function(a) {
            toastr[_2afa('0xa2')]('Couldnt load skins')
        }
    });
    var bC = false, bV = 0x78, bj = -0x1, bk = _2afa('0xa3') in document, W = [], P = -0x1, V = new Vector2(0x0, 0x0), M = new Vector2(0x0, 0x0), Q = new Vector2(0x0, 0x0), bW = 0x0, bb = false, z = function(a) {
        this[_2afa('0xa4')] = 0x0;
        this[_2afa('0xa5')] = new DataView(a)
    }; z[_2afa('0x5')][_2afa('0xa6')] = function() {
        for (var a = ''; this[_2afa('0xa4')] <= this[_2afa('0xa5')][_2afa('0xa7')];) {
            var b = this[_2afa('0xa8')]();
            if (!b)
                break;
            a += String[_2afa('0xa9')](b)
        }
        return a
    }; z[_2afa('0x5')][_2afa('0xaa')] = function() {
        for (var a = ''; this[_2afa('0xa4')] <= this['buffer']['byteLength'];) {
            var b = this[_2afa('0xab')]();
            if (!b)
                break;
            a += String[_2afa('0xa9')](b)
        }
        return a
    }; z['prototype'][_2afa('0xac')] = function() {
        for (var a = ''; this['index'] <= this[_2afa('0xa5')][_2afa('0xa7')];) {
            var b = this[_2afa('0xad')]();
            if (!b)
                break;
            a += String['fromCharCode'](b)
        }
        return a
    }; z[_2afa('0x5')][_2afa('0xae')] = function() {
        return this['buffer'][_2afa('0xaf')](this[_2afa('0xa4')]++)
    }; z[_2afa('0x5')]['readUInt8'] = function() {
        return this[_2afa('0xa5')][_2afa('0xb0')](this[_2afa('0xa4')]++)
    }; z['prototype'][_2afa('0xb1')] = function() {
        var a = this[_2afa('0xa5')]['getInt16'](this[_2afa('0xa4')]);
        this['index'] += 2;
        return a
    }; z[_2afa('0x5')][_2afa('0xb3')] = function() {
        var a = this[_2afa('0xa5')]['getInt16'](this[_2afa('0xa4')], true);
        this[_2afa('0xa4')] += 2;
        return a
    }; z[_2afa('0x5')]['readUInt16BE'] = function() {
        var a = this[_2afa('0xa5')][_2afa('0xb4')](this[_2afa('0xa4')]);
        this[_2afa('0xa4')] += 2;
        return a
    }; z['prototype'][_2afa('0xb5')] = function() {
        var a = this[_2afa('0xa5')]['getUint16'](this[_2afa('0xa4')], true);
        this['index'] += 2;
        return a
    }; z[_2afa('0x5')][_2afa('0xb6')] = function() {
        var a = this['buffer'][_2afa('0xb7')](this['index']);
        this[_2afa('0xa4')] += 0x4;
        return a
    }; z[_2afa('0x5')][_2afa('0xb8')] = function() {
        var a = this['buffer'][_2afa('0xb7')](this['index'], true);
        this[_2afa('0xa4')] += 0x4;
        return a
    }; z[_2afa('0x5')][_2afa('0xad')] = function() {
        var a = this[_2afa('0xa5')]['getUint32'](this[_2afa('0xa4')]);
        this[_2afa('0xa4')] += 0x4;
        return a
    }; z[_2afa('0x5')][_2afa('0xba')] = function() {
        var a = this[_2afa('0xa5')][_2afa('0xb9')](this[_2afa('0xa4')], true);
        this[_2afa('0xa4')] += 0x4;
        return a
    }; br[_2afa('0x5')][_2afa('0xbb')] = function(a) {
        this[_2afa('0x12')][a['id']] || (this[_2afa('0x12')][a['id']] = true,
            this[_2afa('0x11')][_2afa('0xbc')](a))
    }; br['prototype'][_2afa('0xbd')] = function(a) {
        this[_2afa('0x12')][a['id']] && (this[_2afa('0x11')][_2afa('0xbe')](this[_2afa('0x11')][_2afa('0x5a')](a), 0x1),
            this[_2afa('0x12')][a['id']] = false)
    }; br[_2afa('0x5')][_2afa('0xbf')] = function() {
        if (0x0 != this['cells'].length) {
            for (var a = 0x0, b = 0x0, c = 0x0; c < this['cells'].length; c++) {
                var d = this[_2afa('0x11')][c];
                if (!d)
                    return;
                a += d['x'];
                b += d['y']
            }
            return {
                'x': a / this.cells.length,
                'y': b / this[_2afa('0x11')].length,
                'size': this[_2afa('0x11')][0x0] ? this[_2afa('0x11')][0x0][_2afa('23')] : 0x0
            }
        }
    }; console[_2afa('0xc0')]; _2afa('0x8') !== typeof console[_2afa('0xc1')] ? console['API'] = console[_2afa('0xc1')] : _2afa('0x8') !== typeof console[_2afa('0xc2')] ? console[_2afa('0xc0')] = console[_2afa('0xc2')] : _2afa('0x8') !== typeof console[_2afa('0xc3')] && (console[_2afa('0xc0')] = console);
    var bG = 0x0, bB, l, H, G, D, p, q, X = null, m = null, x = 0x0, y = 0x0, O = [], r = [], v = {}, u = [], K = [], A = [], be = 0x0, bf = 0x0, bg = -0x1, bh = -0x1, ci = 0x0, F = 0x0, Y = null, bl = 0x0, bm = 0x0, bn = 2710, bo = 2710, o = 0x1, bu = true, bw = true, bi = false, bv = false, S = 0x0, bL = false, bK = false, bO = false, bM = false, bN = false, bH = false, k = {
        'sMacro': 0x0,
        'wMacro': 0x0,
        'qMacro': 0x0,
        'eMacro': 0x0,
        'rMacro': 0x0,
        'darkBG': 0x1,
        'chat': 2,
        'skins': 2,
        'grid': 0x1,
        'acid': 0x1,
        'colors': 2,
        'names': 2,
        'showMass': 0x1,
        'smooth': 0x1,
        'minionCount': 0x0,
        'minimap': 0x0,
        'maxName': 0xf,
        'customHTML': '',
        'title': '',
        'defaultusername': '',
        'nickplaceholder': '',
        'leavemessage': '',
        'instructions': _2afa('0xc4')
    }, Z = false, bx = false, cn = [], by = 0.4, bS = false, N = x = ~~((bl + bn) / 2), _0x43bf16 = y = ~~((bm + bo) / 2), _276e5e = 0x1, _0x42c0b5 = '', _0x40f9e6 = true, _0x3549b8 = false, _0x1d1331 = 0x0, _0x1ab7d8 = 0x0, _2ebfc7 = 0x0, _0x1b6faf = 0x0, _0x3af78a = 0x0, _0x5f1470 = _2afa('0xc5'), _0xa9064e = 0x0, _2332ea = _2afa('0xc6'), _0xda1180 = _2afa('0x8a'), _0x5be15e = _2afa('0x86'), _24f95e = [_2afa('0xc7'), _2afa('0xc8'), _2afa('0xc9'), _2afa('0xca')], _0x12425e = false, _0x3f6cb1 = 0x1; _2afa('0xcb') in n && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent']);
    var _0x16c472 = new Image(), _0x57e636 = new Image(); _0x16c472[_2afa('0x6f')] = _2afa('0xce'); _0x57e636['src'] = _2afa('0xcf'); document['createElement'](_2afa('0xd0')); n[_2afa('0xd1')] = false; n[_2afa('0xd2')] = function(a) {
        bJ();
        Y = a;
        console[_2afa('0xd3')](name);
        bP();
        S = 0x0
    }; n[_2afa('0xd4')] = function(a) {
        0x0 != k[_2afa('0x47')] && 0x3 != k[_2afa('0x47')] && (bu = a)
    }; n['setNames'] = function(a) {
        0x0 != k[_2afa('0x4b')] && 0x3 != k[_2afa('0x4b')] && (bw = a)
    }; n['setDarkTheme'] = function(a) {
        0x0 != k[_2afa('0x46')] && 0x3 != k[_2afa('0x46')] && (Z = a)
    }; n['setColors'] = function(a) {
        0x0 != k['colors'] && 0x3 != k['colors'] && (bi = a)
    }; n[_2afa('0xd7')] = function(a) {
        0x0 != k[_2afa('0x4c')] && 0x3 != k[_2afa('0x4c')] && (bx = a)
    }; n[_2afa('0xd8')] = function(a) {
        0x0 != k[_2afa('0x48')] && 0x3 != k[_2afa('0x48')] && (bv = a)
    }; n[_2afa('0xd9')] = function(a) {
        0x0 != k[_2afa('0x4d')] && 0x3 != k[_2afa('0x4d')] && (by = a ? 2 : 0.4)
    }; n[_2afa('0xda')] = function(a) {
        bS = a;
        0x0 != k[_2afa('0x44')] && 0x3 != k[_2afa('0x44')] && (a ? j(_2afa('0xdb'))[_2afa('28')]() : j(_2afa('0xdb'))['show']())
    }; n[_2afa('0xdc')] = function() {
        Y = null;
        n['isSpectating'] = true;
        bJ()
    }; n[_2afa('0xdd')] = function(a) {
        a != _0x42c0b5 && (_0x42c0b5 = a,
            R(_2afa('0xde'), {
                'id': parseInt(a)
            }))
    }; n[_2afa('0xdf')] = function(a) {
        0x0 != k[_2afa('0x49')] && 0x3 != k[_2afa('0x49')] && (_0x12425e = a)
    }; n[_2afa('0xe0')] = function(bX, cq) {
        function co(h) {
            function t(a, b) {
                for (var c = [], d = 0x0; d < a.length; d++)
                    c[_2afa('0xbc')](b(a[d]));
                return c
            }
            h = function(c) {
                return t(c, function(a, b) {
                    return a[_2afa('0xe1')](0x0) ^ _2afa('0xe2')['charCodeAt'](Math[_2afa('0xe3')](b % 0x12))
                })
            }(h);
            return function(a) {
                var b, c, d, f, e = 0x0,
                    g = '';
                if (!a)
                    return a;
                do
                    b = a[e++],
                    c = a[e++],
                    d = a[e++],
                    f = b << 0x10 | c << 0x8 | d,
                    b = f >> 0x12 & 0x3f,
                    c = f >> 0xc & 0x3f,
                    d = f >> 0x6 & 0x3f,
                    f &= 0x3f,
                    g += _2afa('0xe4')[_2afa('0x59')](b) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' [_2afa('0x59')](c) + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=' [_2afa('0x59')](d) + _2afa('0xe4')['charAt'](f);
                while (e < a.length);
                a = a.length % 0x3;
                return (a ? g[_2afa('0xe5')](0x0, a - 0x3) : g) + '===' [_2afa('0xe5')](a || 0x3)
            }(h)
        }

        function cp(a, b) {
            if (!b)
                return false;
            for (var c = '', d = 0x0; d < b.length; d++)
                c += (b['charCodeAt'](d) + 0x4 * d)[_2afa('0x9f')]();
            b = c[_2afa('0x5d')](0x0, 0xa);
            d = c[_2afa('0x5d')](0xa, 0xa);
            c = c[_2afa('0x5d')](0x14, 0xa);
            c = (parseInt(b) + parseInt(d) + parseInt(c))[_2afa('0x9f')]();
            c = c['substr'](0x0, 0xa);
            c += Math[_2afa('0xe3')](0x3e8 * Math[_2afa('0xe6')]());
            return a ? a[_2afa('0x9f')]()[_2afa('0x5d')](0x0, 0xa) == c[_2afa('0x5d')](0x0, 0xa) ? true : false : false
        }
        if (m) {
            m[_2afa('0xe7')] = null;
            m[_2afa('0xe8')] = null;
            m['onclose'] = null;
            try {
                m[_2afa('0xea')]()
            } catch (_0x1c9d77) {}
            m = null
        }
        toastr[_2afa('0xeb')](_2afa('0xec'));
        O = [];
        r = [];
        v = {};
        u = [];
        K = [];
        H = null;
        S = 0x0;
        console[_2afa('0xd3')](_2afa('0xed') + bX);
        m = io(bX);
        m['on'](_2afa('0xa2'), function() {
            toastr[_2afa('0xa2')](_2afa('0xee'));
            bc && console[_2afa('0xc0')][_2afa('0xc3')]()
        });
        m['on']('reconnect_error', function() {
            toastr[_2afa('0xa2')](_2afa('0xef'));
            bc && console[_2afa('0xc0')][_2afa('0xc3')]()
        });
        m['on'](_2afa('0xf0'), function() {
            toastr['warning']('Failed to reconnect!');
            bc && console[_2afa('0xc0')][_2afa('0xc3')]()
        });
        m['on'](_2afa('0xf2'), function() {
            bc && console[_2afa('0xc0')][_2afa('0xc3')]();
            console[_2afa('0xd3')](_2afa('0xf3'));
            toastr[_2afa('0xf1')](_2afa('0xf4'));
            j(_2afa('0xf5'))[_2afa('0x45')]()
        });
        m['on'](_2afa('0xe0'), function() {
            j(_2afa('0xf5'))[_2afa('28')]();
            bP()
        });
        m['on'](_2afa('0xf6'), function(b) {
            if (b)
                if (parseInt(b[_2afa('0xf8')][_2afa('0xf7')](/\./g, '')) < parseInt(_2afa('0xf9')['replace'](/\./g, '')))
                    j('#connecting')['hide'](),
                    j(_2afa('0xfa'))['text'](_2afa('0xfb')),
                    j('#kmsg')[_2afa('0x31')](_2afa('0xfc')),
                    j('#denied')[_2afa('0x45')](),
                    m[_2afa('0xf2')]();
                else if (b[_2afa('0xfd')]) {
                var c = cp(b[_2afa('0xfe')], b[_2afa('0xff')]);
                $[_2afa('0x100')]({
                    'url': _2afa('0x101'),
                    'type': _2afa('0x102'),
                    'data': {
                        'data': _2afa('0xcc'),
                        'id': b[_2afa('0xff')][_2afa('0x9f')](),
                        'key': b['key'][_2afa('0x9f')]()
                    },
                    'success': function(a) {
                        a = parseInt(a);
                        2 != a && (0x1 == a ? (toastr[_2afa('0xf1')](_2afa('0x103')),
                                j(_2afa('0xf5'))[_2afa('28')](),
                                j(_2afa('0xfa'))[_2afa('0x31')]('If you are the server owner, then you can reactivate your server at opnagar.us'),
                                j('#kmsg')[_2afa('0x31')]('Server is deactivated!')) : (toastr[_2afa('0xf1')](_2afa('0x104')),
                                j('#connecting')[_2afa('28')](),
                                j(_2afa('0xfa'))['text'](_2afa('0x105')),
                                j('#kmsg')[_2afa('0x31')](_2afa('0xfc'))),
                            j(_2afa('0x106'))[_2afa('0x45')](),
                            m && m[_2afa('0xf2')]())
                    },
                    'error': function(a) {}
                });
                c ? (b = co(b['uid']),
                    R(_2afa('0xfe'), b)) : (j(_2afa('0xf5'))[_2afa('28')](),
                    toastr[_2afa('0xf1')](_2afa('0x104')),
                    j(_2afa('0xfa'))[_2afa('0x31')](_2afa('0x105')),
                    j(_2afa('0x108'))[_2afa('0x31')](_2afa('0xfc')),
                    j(_2afa('0x106'))['show'](),
                    m[_2afa('0xf2')]())
            } else
                toastr[_2afa('0xf1')](_2afa('0x109')),
                j(_2afa('0xf5'))[_2afa('28')](),
                j(_2afa('0xfa'))[_2afa('0x31')](_2afa('0x10a')),
                j('#kmsg')[_2afa('0x31')](_2afa('0xfc')),
                j('#denied')[_2afa('0x45')](),
                m[_2afa('0xf2')]()
        });
        m['on'](_2afa('0x10b'), function(a) {
            if (a) {
                j('#gamemode')[_2afa('0x10c')]();
                for (var b = 0x0; b < a.length; b++)
                    if (a[b]) {
                        var c = a[b];
                        j(_2afa('0x10e'))[_2afa('0x10d')]($(_2afa('0x10f'))[_2afa('0x36')](_2afa('0x6'), c['id'])[_2afa('0x36')](_2afa('2f'), _2afa('0x110') + c[_2afa('0x111')] + _2afa('0x112') + c[_2afa('0x113')])[_2afa('0x31')](c[_2afa('0x114')]));
                        cn[_2afa('0xbc')]({
                            'id': c['id'],
                            'name': c['name'],
                            'scn': c[_2afa('0x114')],
                            'players': c[_2afa('0x111')],
                            'bots': c[_2afa('0x113')]
                        })
                    }
            }
        });
        m['on']('accepted', function(a) {
            console[_2afa('0xd3')](a['toString']());
            toastr[_2afa('0xa0')](_2afa('0x115'));
            j(_2afa('0xf5'))[_2afa('28')]()
        });
        m['on'](_2afa('0x116'), function(a) {
            toastr[_2afa('0xf1')]('Kicked from server');
            j(_2afa('0xf5'))[_2afa('28')]();
            j(_2afa('0xfa'))[_2afa('0x31')](a);
            j('#denied')[_2afa('0x45')]()
        });
        m['on'](_2afa('0x117'), function() {
            toastr['warning'](_2afa('0x118'));
            bz = true;
            j(_2afa('0xf5'))[_2afa('28')]();
            j(_2afa('0xfa'))['text'](_2afa('0x119'));
            j(_2afa('0x108'))['text'](_2afa('0x11a'));
            j(_2afa('0x106'))['show']()
        });
        m['on']('ddosover', function() {
            toastr[_2afa('0xeb')]('DDOS attack over! Sending data again...');
            bz = false;
            j(_2afa('0x106'))[_2afa('28')]()
        });
        m['on']('mes', function(a) {
            switch (a[_2afa('0x11b')]) {
                case _2afa('0xbb'):
                    O[_2afa('0xbc')](parseInt(a['id']));
                    break;
                case _2afa('0x16'):
                    _0x5f1470 = _2afa('0xc5');
                    _0xa9064e = 0x0;
                    _2332ea = '20px Ubuntu';
                    _0xda1180 = _2afa('0x8a');
                    _0x5be15e = _2afa('0x86');
                    _24f95e = [_2afa('0xc7'), _2afa('0xc8'), '#33FF33', _2afa('0xca')];
                    bb = false;
                    bj = -0x1;
                    u = [];
                    K = [];
                    v = [];
                    r = [];
                    O = [];
                    L = [];
                    break;
                case 'clearNodes':
                    u = [];
                    K = [];
                    v = [];
                    r = [];
                    O = [];
                    L = [];
                    break;
                case _2afa('0x11c'):
                    bt();
                    break;
                case 'setBorder':
                    a = a[_2afa('0x11d')];
                    bl = a.x;
                    bm = a.y;
                    bn = a.x + a[_2afa('0x66')];
                    bo = a.y + a[_2afa('0x67')];
                    N = (bn + bl) / 2;
                    _0x43bf16 = (bo + bm) / 2;
                    _276e5e = 0x1;
                    0x0 == r.length && (x = N,
                        y = _0x43bf16,
                        o = _276e5e);
                    break;
                case _2afa('0x11e'):
                    bb = a[_2afa('0x11f')];
                    break;
                case _2afa('0x120'):
                    bW = a[_2afa('0x121')];
                    break;
                case _2afa('0x122'):
                    bU = a[_2afa('0x123')],
                        bV = 100 + 0x3e8 / bU
            }
        });
        m['on'](_2afa('0x124'), function(a) {
            a[_2afa('0xb')]('|')
        });
        m['on'](_2afa('0x125'), function(a) {
            ce(a)
        });
        m['on'](_2afa('0x126'), function(a) {
                var b = parseInt(a[_2afa('0x127')]);
                bj = parseInt(a[_2afa('0x128')]);
                a = b / 0x3e8 / 0x3c << 0x0;
                b = b / 0x3e8 % 0x3c;
                j('#alive')['text']('You'
                    ve been alive
                    for ' + Math[_2afa('
                    0x129 ')](a) + _2afa('
                    0x12a ') + Math[_2afa('
                    0x129 ')](b) + '
                    seconds!');
                    setTimeout(function() {
                        bt(false)
                    }, 0x3e8)
                }); m['on'](_2afa('0x12b'), function(a) {
                bC = a
            }); m['on'](_2afa('0x12c'), function(a) {
                a = new z(a);
                0x0 == bG ? bG++ : bG--;
                bD++;
                F = +new Date();
                for (var b = Math['random'](), c = a[_2afa('0xab')](), d = 0x0; d < c; d++)
                    switch (a[_2afa('0xa8')]()) {
                        case 0x1:
                            var f = a[_2afa('0xad')](),
                                e = a[_2afa('0xb6')](),
                                g = a[_2afa('0xb6')]();
                            if (v[_2afa('0x12d')](f))
                                h = v[f],
                                h['updatePos'](),
                                h['ox'] = h['x'],
                                h['oy'] = h['y'],
                                h['nx'] = e,
                                h['ny'] = g,
                                h['updateId'] = bD,
                                h[_2afa('0x12f')] = h['nSize'],
                                h[_2afa('0x131')] = b,
                                h[_2afa('0x132')] = F;
                            else if (L[_2afa('0x12d')](f)) {
                                var h = L[f];
                                v[f] || u['push'](h);
                                v[f] = h;
                                h[_2afa('0x133')] = false;
                                h['ox'] = e;
                                h['oy'] = g;
                                h['nx'] = e;
                                h['ny'] = g;
                                h['x'] = e;
                                h['y'] = g;
                                delete L[f]
                            }
                            break;
                        case 2:
                            f = a[_2afa('0xad')]();
                            v['hasOwnProperty'](f) && (h = v[f],
                                L[f] = h,
                                h[_2afa('0x134')](true));
                            break;
                        case 0x0:
                            var f = a[_2afa('0xad')](),
                                t = a['readUInt8'](),
                                s = a[_2afa('0xad')](),
                                E = a[_2afa('0xab')](),
                                I = a[_2afa('0xad')](),
                                e = a[_2afa('0xb6')](),
                                g = a[_2afa('0xb6')](),
                                h = a[_2afa('0xa8')](),
                                J = a[_2afa('0xa8')](),
                                B = a[_2afa('0xa8')](),
                                bp = a[_2afa('0xa8')](),
                                bq = a[_2afa('0xa8')](),
                                bd = a['readString16'](),
                                U = a[_2afa('0xa6')](),
                                B = '#' + (0x1000000 + (h << 0x10) + (J << 0x8) + B)[_2afa('0x9f')](0x10)[_2afa('0xe5')](0x1);
                            v[_2afa('0x12d')](f) ? (h = v[f],
                                h[_2afa('0x133')] = false,
                                h[_2afa('0x72')](),
                                h['ox'] = h['x'],
                                h['oy'] = h['y'],
                                h['oSize'] = h[_2afa('23')],
                                h[_2afa('0x90')] = B) : (h = new bT(f, e, g, E, I, B, bd),
                                u[_2afa('0xbc')](h),
                                v[f] = h,
                                h['ka'] = e,
                                h['la'] = g,
                                h[_2afa('0x135')] = s);
                            h[_2afa('0x136')] = bp;
                            h[_2afa('0x11b')] = t;
                            h[_2afa('0x137')] = bq;
                            h['nx'] = e;
                            h['ny'] = g;
                            h[_2afa('0x12e')] = bD;
                            h[_2afa('0x130')] = E;
                            h[_2afa('0x131')] = b;
                            h[_2afa('0x132')] = F;
                            h[_2afa('0x8f')] = I;
                            U && (isNaN(parseInt(U)) ? (e = U[_2afa('0xb')]('|'),
                                B = parseInt(e[0x0]),
                                g = new Image(),
                                g[_2afa('0x6f')] = e[0x1],
                                bE[B] = g,
                                U = B) : parseInt(U));
                            h[_2afa('0x61')] = U;
                            h[_2afa('0x93')](bd); -
                            0x1 != O[_2afa('0x5a')](f) && -0x1 == r[_2afa('0x5a')](h) && (document[_2afa('0x13a')](_2afa('0x13b'))['style'][_2afa('0x138')] = _2afa('0x6a'),
                                r[_2afa('0xbc')](h),
                                0x1 == r.length && (x = h['x'],
                                    y = h['y']))
                    }
            }); m['on'](_2afa('0x13c'), function(a) {
                a = JSON[_2afa('0x13d')](a);
                for (i = 0x0; i < a.length; i++) {
                    var b = a[i],
                        c = v[b['killer']],
                        d = v[b['id']];
                    L[b['id']] && delete L[b['id']];
                    c && d ? (d[_2afa('0x134')](),
                        d['ox'] = d['x'],
                        d['oy'] = d['y'],
                        d[_2afa('0x12f')] = d[_2afa('23')],
                        d['nx'] = c['x'],
                        d['ny'] = c['y'],
                        d['nSize'] = d[_2afa('23')],
                        d[_2afa('0x132')] = F) : d && d['destroy']()
                }
            }); m['on']('lb', function(a) {
                if (a[_2afa('0x13e')]) {
                    var b = a[_2afa('0x13e')];
                    _24f95e = b['teamColors'] || _24f95e;
                    _0x5f1470 = b[_2afa('0x140')] || _0x5f1470;
                    _0xda1180 = b['lbfsty'] || _0xda1180;
                    _0x5be15e = b['lbtsty'] || _0x5be15e;
                    _0xa9064e = b[_2afa('0x143')] || _0xa9064e;
                    _2332ea = b[_2afa('0x144')] || _2332ea
                }
                if (a['lb'] && (a = a['lb'],
                        G = null,
                        a)) {
                    G = document[_2afa('0x145')](_2afa('0xd0'));
                    var b = G[_2afa('0x146')]('2d'),
                        c = 0x3c,
                        c = 0x1 != _0xa9064e ? c + 0x18 * a.length : c + 0xb4,
                        d = Math[_2afa('24')](0.22 * q, Math[_2afa('24')](0xc8, 0.3 * p)) / 0xc8;
                    G[_2afa('0x66')] = 0xc8 * d;
                    G[_2afa('0x67')] = c * d;
                    b[_2afa('0x7c')](d, d);
                    b[_2afa('0x77')] = 0.4;
                    b[_2afa('0x74')] = _0xda1180;
                    b[_2afa('0x78')](0x0, 0x0, 0xc8, c);
                    b[_2afa('0x77')] = 0x1;
                    b[_2afa('0x74')] = _0x5be15e;
                    c = _0x5f1470;
                    b[_2afa('0x147')] = _2afa('0x148');
                    b['fillText'](c, 100 - b[_2afa('0x149')](c)[_2afa('0x66')] / 2, 28);
                    if (0x0 == _0xa9064e)
                        for (b[_2afa('0x147')] = _2332ea,
                            d = 0x0; d < a.length; ++d)
                            c = a[d]['name'] || _2afa('0x14a'),
                            b[_2afa('0x74')] = a[d]['id'] == bW ? a[d]['scolor'] || _2afa('0x7e') : a[d]['color'] || _2afa('0x86'),
                            c = d + 0x1 + '. ' + c,
                            b[_2afa('0x14c')](c, 100 - b[_2afa('0x149')](c)[_2afa('0x66')] / 2, 0x46 + 0x18 * d);
                    else if (0x1 == _0xa9064e)
                        for (d = c = 0x0; d < a.length; ++d) {
                            var f = c + a[d] * Math['PI'] * 2;
                            b[_2afa('0x74')] = _24f95e[d + 0x1];
                            b['beginPath']();
                            b[_2afa('0x82')](100, 0x8c);
                            b[_2afa('0x8e')](100, 0x8c, 0x50, c, f, false);
                            b[_2afa('0x14d')]();
                            c = f
                        }
                    else if (2 == _0xa9064e)
                        for (b[_2afa('0x147')] = _2332ea,
                            d = 0x0; d < a.length; ++d)
                            b[_2afa('0x74')] = a[d]['color'] || _2afa('0x86'),
                            c = a[d][_2afa('0x31')] || a[d] || '',
                            b[_2afa('0x14c')](c, 100 - b['measureText'](c)[_2afa('0x66')] / 2, 0x46 + 0x18 * d)
                }
            }); m['on']('chat', function(a) {
                if (a) {
                    if (a[_2afa('0x14e')])
                        for (var b = 0x0; b < A.length; b++) {
                            if (A[b]['id'] == a[_2afa('0x14e')]) {
                                A[_2afa('0xbe')](b, 0x1);
                                break
                            }
                        }
                    else
                        b = '#' + (0x1000000 + (a['color']['r'] << 0x10) + (a[_2afa('0x90')]['g'] << 0x8) + a[_2afa('0x90')]['b'])[_2afa('0x9f')](0x10)['slice'](0x1),
                        A[_2afa('0xbc')]({
                            'name': a['name'],
                            'color': b,
                            'message': a[_2afa('0x14f')],
                            'time': Date[_2afa('0x71')](),
                            'id': a['id']
                        });
                    D = document[_2afa('0x145')](_2afa('0xd0'));
                    a = D[_2afa('0x146')]('2d');
                    b = Math['min'](Math[_2afa('0xe')](p / 0x4b0, 0.75), 0x1);
                    D[_2afa('0x66')] = 0x3e8 * b;
                    D['height'] = 226 * b;
                    a[_2afa('0x7c')](b, b);
                    var c = Date[_2afa('0x71')](),
                        d;
                    if (0x1 <= A.length) {
                        d = A[A.length - 0x1]['time'];
                        a[_2afa('0x77')] = 0.8 * Math[_2afa('0x151')](-(c - d) / 0x61a8);
                        c = A.length;
                        d = c - 0xf;
                        0x0 > d && (d = 0x0);
                        for (var f = 0x0; f < c - d; f++) {
                            var e = new T(0x12, A[f + d][_2afa('0x90')]);
                            e[_2afa('0x87')](A[f + d][_2afa('0x60')]);
                            var g = e[_2afa('0x152')](),
                                e = e[_2afa('0x89')]();
                            a['drawImage'](e, 0xf, D[_2afa('0x67')] / b - 0x18 * (c - f - d));
                            e = new T(0x12, _2afa('0x153'));
                            e[_2afa('0x87')](':' + A[f + d][_2afa('0x154')]);
                            e = e[_2afa('0x89')]();
                            a[_2afa('0x70')](e, 0xf + 1.8 * g, D[_2afa('0x67')] / b - 0x18 * (c - d - f))
                        }
                    }
                }
            })
        };
        null != n['localStorage'] && (null == n['localStorage'][_2afa('0x156')] && (n[_2afa('0x155')][_2afa('0x156')] = ~~(100 * Math[_2afa('0xe6')]())),
            _0x3af78a = +n[_2afa('0x155')][_2afa('0x156')],
            n[_2afa('0x157')] = _0x3af78a);
        var _0x42ce88 = -0x1,
            _212946 = -0x1,
            _0x581b50 = 0x1,
            _0x55eab7 = null;
        bT[_2afa('0x5')] = {
            'id': 0x0,
            'points': null,
            'pointsAcc': null,
            'name': null,
            'nameCache': null,
            'sizeCache': null,
            'x': 0x0,
            'y': 0x0,
            'size': 0x0,
            'ox': 0x0,
            'oy': 0x0,
            'oSize': 0x0,
            'nx': 0x0,
            'ny': 0x0,
            'nSize': 0x0,
            'flag': 0x0,
            'updateTime': 0x0,
            'updateCode': 0x0,
            'drawTime': 0x0,
            'destroyed': false,
            'isVirus': false,
            'isAgitated': false,
            'wasSimpleDrawing': true,
            'rebuild': function() {
                this[_2afa('0x133')] = false;
                u[_2afa('0xbc')](this)
            },
            'destroy': function(a) {
                for (a = 0x0; a < u.length; a++)
                    if (u[a] == this) {
                        u[_2afa('0xbe')](a, 0x1);
                        break
                    }
                delete v[this['id']];
                a = r['indexOf'](this); -
                0x1 != a && r[_2afa('0xbe')](a, 0x1);
                a = O[_2afa('0x5a')](this['id']); -
                0x1 != a && O['splice'](a, 0x1);
                this[_2afa('0x133')] = true;
                K[_2afa('0xbc')](this)
            },
            'getNameSize': function() {
                return Math[_2afa('0xe')](~~(0.3 * this[_2afa('23')]), 0x18)
            },
            'setName': function(a) {
                if (this[_2afa('0x60')] = a)
                    null == this[_2afa('0x158')] ? this[_2afa('0x158')] = new T(this[_2afa('0x159')](), _2afa('0x86'), true, _2afa('0x8a')) : this[_2afa('0x158')][_2afa('0x15a')](this[_2afa('0x159')]()),
                    this['nameCache']['setValue'](this[_2afa('0x60')])
            },
            'createPoints': function() {
                for (var a = this[_2afa('0x15b')](); this[_2afa('26')]['length'] > a;) {
                    var b = ~~(Math['random']() * this[_2afa('26')].length);
                    this[_2afa('26')][_2afa('0xbe')](b, 0x1);
                    this['pointsAcc']['splice'](b, 0x1)
                }
                0x0 == this[_2afa('26')]['length'] && 0x0 < a && (this[_2afa('26')][_2afa('0xbc')]({
                        'ref': this,
                        'size': this[_2afa('23')],
                        'x': this['x'],
                        'y': this['y']
                    }),
                    this[_2afa('0x91')][_2afa('0xbc')](Math[_2afa('0xe6')]() - 0.5));
                for (; this['points'].length < a;) {
                    var b = ~~(Math['random']() * this['points'].length),
                        c = this[_2afa('26')][b];
                    this[_2afa('26')][_2afa('0xbe')](b, 0x0, {
                        'ref': this,
                        'size': c[_2afa('23')],
                        'x': c['x'],
                        'y': c['y']
                    });
                    this[_2afa('0x91')][_2afa('0xbe')](b, 0x0, this[_2afa('0x91')][b])
                }
            },
            'getNumPoints': function() {
                if (0x0 == this['id'])
                    return 0x10;
                var a = 0xa;
                0x14 > this[_2afa('23')] && (a = 0x0);
                this['isVirus'] && (a = 0x1e);
                var b = this[_2afa('23')];
                this[_2afa('0x136')] || (b *= o);
                b *= _0x581b50;
                this[_2afa('0x15c')] & 20 && (b *= 0.25);
                return ~~Math[_2afa('0xe')](b, a)
            },
            'movePoints': function() {
                this[_2afa('0x92')]();
                for (var b = this[_2afa('26')], c = this[_2afa('0x91')], d = b.length, f = 0x0; f < d; ++f) {
                    var e = c[(f - 0x1 + d) % d],
                        g = c[(f + 0x1) % d];
                    c[f] += (Math[_2afa('0xe6')]() - 0.5) * (this[_2afa('0x137')] ? 0x3 : 0x1);
                    c[f] *= 0.7;
                    0xa < c[f] && (c[f] = 0xa); -
                    0xa > c[f] && (c[f] = -0xa);
                    c[f] = (e + g + 0x8 * c[f]) / 0xa
                }
                for (var h = this, f = this[_2afa('0x136')] ? 0x0 : (this['id'] / 0x3e8 + F / 2710) % (2 * Math['PI']), e = 0x0; e < d; ++e) {
                    var g = b[e][_2afa('23')],
                        t = b[(e - 0x1 + d) % d]['size'],
                        s = b[(e + 0x1) % d]['size'];
                    if (0xf < this[_2afa('23')] && null != X && 0x14 < this[_2afa('23')] * o && 0x0 != this['id']) {
                        var E = false,
                            I = b[e]['x'],
                            J = b[e]['y'];
                        X[_2afa('0x15d')](I - 0x5, J - 0x5, 0xa, 0xa, function(a) {
                            a[_2afa('0x15e')] != h && 0x19 > (I - a.x) * (I - a.x) + (J - a.y) * (J - a.y) && (E = true)
                        });
                        if (!E && b[e]['x'] < bl || b[e]['y'] < bm || b[e]['x'] > bn || b[e]['y'] > bo)
                            E = true;
                        E && (0x0 < c[e] && (c[e] = 0x0),
                            --c[e])
                    }
                    g += c[e];
                    0x0 > g && (g = 0x0);
                    g = this[_2afa('0x137')] ? (0x13 * g + this[_2afa('23')]) / 0x14 : (0xc * g + this[_2afa('23')]) / 0xd;
                    b[e]['size'] = (t + s + 0x8 * g) / 0xa;
                    t = 2 * Math['PI'] / d;
                    s = this['points'][e][_2afa('23')];
                    this[_2afa('0x136')] && 0x0 == e % 2 && (s += 0x5);
                    b[e]['x'] = this['x'] + Math[_2afa('0x15f')](t * e + f) * s;
                    b[e]['y'] = this['y'] + Math[_2afa('0x6d')](t * e + f) * s
                }
            },
            'updatePos': function(a) {
                if (0x0 == this['id'])
                    return 0x1;
                var b;
                b = this[_2afa('0x133')] ? (F - this[_2afa('0x132')]) / 0x78 : (F - this[_2afa('0x132')]) / bV;
                b = 0x0 > b ? 0x0 : 0x1 < b ? 0x1 : b;
                var c = 0x0 > b ? 0x0 : 0x1 < b ? 0x1 : b;
                this[_2afa('0x159')]();
                if (this[_2afa('0x133')] && 0x1 <= c) {
                    var d = K[_2afa('0x5a')](this); -
                    0x1 != d && K['splice'](d, 0x1)
                }
                this['x'] = b * (this['nx'] - this['ox']) + this['ox'];
                this['y'] = b * (this['ny'] - this['oy']) + this['oy'];
                a || (this[_2afa('23')] = c * (this[_2afa('0x130')] - this[_2afa('0x12f')]) + this[_2afa('0x12f')]);
                return c
            },
            'shouldRender': function() {
                return 0x0 == this['id'] ? true : !(this['x'] + this['size'] + 28 < x - p / 2 / o || this['y'] + this['size'] + 28 < y - q / 2 / o || this['x'] - this['size'] - 28 > x + p / 2 / o || this['y'] - this[_2afa('23')] - 28 > y + q / 2 / o)
            },
            'drawOneCell': function(a) {
                if (this['shouldRender']()) {
                    var b = 0x0 != this['id'] && !this[_2afa('0x136')] && !this[_2afa('0x137')] && by > o;
                    0x5 > this[_2afa('0x15b')]() && (b = true);
                    if (this[_2afa('0x160')] && !b)
                        for (var c = 0x0; c < this[_2afa('26')].length; c++)
                            this['points'][c][_2afa('23')] = this[_2afa('23')];
                    this[_2afa('0x160')] = b;
                    a[_2afa('0x7a')]();
                    this[_2afa('0x161')] = F;
                    c = this['updatePos']();
                    this[_2afa('0x133')] && (a['globalAlpha'] *= 0x1 - c);
                    a[_2afa('0x7f')] = 0xa;
                    a['lineCap'] = _2afa('0x129');
                    a[_2afa('0x81')] = this['isVirus'] ? _2afa('0x162') : _2afa('0x129');
                    bi ? (a['fillStyle'] = '#FFFFFF',
                        a[_2afa('0x8c')] = _2afa('0x163')) : (a['fillStyle'] = this['color'],
                        a[_2afa('0x8c')] = this[_2afa('0x90')]);
                    if (b)
                        a[_2afa('0x8b')](),
                        a[_2afa('0x8e')](this['x'], this['y'], this['size'], 0x0, 2 * Math['PI'], false);
                    else {
                        this['movePoints']();
                        a[_2afa('0x8b')]();
                        var d = this[_2afa('0x15b')]();
                        a[_2afa('0x82')](this[_2afa('26')][0x0]['x'], this[_2afa('26')][0x0]['y']);
                        for (c = 0x1; c <= d; ++c) {
                            var f = c % d;
                            a['lineTo'](this[_2afa('26')][f]['x'], this[_2afa('26')][f]['y'])
                        }
                    }
                    a[_2afa('0x164')]();
                    if (this[_2afa('0x61')])
                        if (0x0 < this[_2afa('0x61')] && this[_2afa('0x61')])
                            if (bF[this[_2afa('0x61')]])
                                var e = bF[this[_2afa('0x61')]];
                            else
                                ba[this[_2afa('0x61')]] && (c = _2afa('0x165') + ba[this[_2afa('0x61')]] + _2afa('0x166'),
                                    e = new Image(),
                                    e[_2afa('0x6f')] = c,
                                    bF[this[_2afa('0x61')]] = e);
                    else
                        bE[this[_2afa('0x61')]] && (e = bE[this[_2afa('0x61')]]);
                    f = c = !this[_2afa('0x137')] && bu && e ? 0x0 != e[_2afa('0x66')] && e[_2afa('0x167')] ? e : null : null;
                    b || a[_2afa('0x84')]();
                    a['fill']();
                    this[_2afa('0x135')] == bj && 0x0 == this[_2afa('0x11b')] && (e = new Image(),
                        e['src'] = _2afa('0x168'),
                        a['save'](),
                        a[_2afa('0x169')](),
                        a[_2afa('0x70')](e, this['x'] - 0x19, this['y'], 0x32, 0x32),
                        a[_2afa('0x85')]());
                    f && (a[_2afa('0x7a')](),
                        a[_2afa('0x169')](),
                        a[_2afa('0x70')](f, this['x'] - this[_2afa('23')], this['y'] - this[_2afa('23')], 2 * this['size'], 2 * this[_2afa('23')]),
                        a[_2afa('0x85')]());
                    (bi || 0xf < this['size']) && !b && (a[_2afa('0x8c')] = _2afa('0x8a'),
                        a[_2afa('0x77')] *= 0.1,
                        a['stroke']());
                    a[_2afa('0x77')] = 0x1;
                    c = -0x1 != r[_2afa('0x5a')](this);
                    if (0x0 != this['id']) {
                        b = ~~this['y'];
                        if ((bw || c) && this[_2afa('0x60')] && this[_2afa('0x158')]) {
                            f = this['nameCache'];
                            f[_2afa('0x87')](this[_2afa('0x60')]);
                            f[_2afa('0x15a')](this['getNameSize']());
                            e = Math[_2afa('0x16a')](0xa * o) / 0xa;
                            f[_2afa('0x16b')](e);
                            var f = f[_2afa('0x89')](),
                                d = ~~(f[_2afa('0x66')] / e),
                                j = ~~(f[_2afa('0x67')] / e);
                            a[_2afa('0x70')](f, ~~this['x'] - ~~(d / 2), b - ~~(j / 2), d, j);
                            b += f[_2afa('0x67')] / 2 / e + 0x4
                        }
                        bx && (c || 0x0 == r['length'] && (!this[_2afa('0x136')] || this[_2afa('0x137')]) && 0x14 < this[_2afa('23')]) && (null == this[_2afa('0x16c')] && (this[_2afa('0x16c')] = new T(this[_2afa('0x159')]() / 2, '#FFFFFF', true, _2afa('0x8a'))),
                            c = this[_2afa('0x16c')],
                            c[_2afa('0x15a')](this[_2afa('0x159')]() / 2),
                            c[_2afa('0x87')](this['mass']),
                            e = Math[_2afa('0x16a')](0xa * o) / 0xa,
                            c[_2afa('0x16b')](e),
                            f = c['render'](),
                            d = ~~(f[_2afa('0x66')] / e),
                            j = ~~(f[_2afa('0x67')] / e),
                            a[_2afa('0x70')](f, ~~this['x'] - ~~(d / 2), b - ~~(j / 2), d, j))
                    }
                    a['restore']()
                }
            }
        };
        T[_2afa('0x5')] = {
            '_value': '',
            '_color': _2afa('0x8a'),
            '_stroke': false,
            '_strokeColor': _2afa('0x8a'),
            '_size': 0x10,
            '_canvas': null,
            '_ctx': null,
            '_dirty': false,
            '_scale': 0x1,
            'setSize': function(a) {
                this[_2afa('0x16d')] != a && (this[_2afa('0x16d')] = a,
                    this['_dirty'] = true)
            },
            'setScale': function(a) {
                this[_2afa('0x16e')] != a && (this[_2afa('0x16e')] = a,
                    this[_2afa('0x16f')] = true)
            },
            'setStrokeColor': function(a) {
                this[_2afa('0x96')] != a && (this[_2afa('0x96')] = a,
                    this[_2afa('0x16f')] = true)
            },
            'setValue': function(a) {
                a != this['_value'] && (this[_2afa('0x170')] = a,
                    this[_2afa('0x16f')] = true)
            },
            'render': function() {
                null == this[_2afa('0x171')] && (this[_2afa('0x171')] = document[_2afa('0x145')]('canvas'),
                    this[_2afa('0x172')] = this[_2afa('0x171')]['getContext']('2d'));
                if (this[_2afa('0x16f')]) {
                    this['_dirty'] = false;
                    var a = this[_2afa('0x171')],
                        b = this[_2afa('0x172')],
                        c = this['_value'],
                        d = this[_2afa('0x16e')],
                        f = this[_2afa('0x16d')],
                        e = f + _2afa('0x173');
                    b[_2afa('0x147')] = e;
                    var g = ~~(0.2 * f);
                    a[_2afa('0x66')] = (b[_2afa('0x149')](c)['width'] + 0x6) * d;
                    a[_2afa('0x67')] = (f + g) * d;
                    b['font'] = e;
                    b[_2afa('0x7c')](d, d);
                    b[_2afa('0x77')] = 0x1;
                    b[_2afa('0x7f')] = 0x3;
                    b['strokeStyle'] = this[_2afa('0x96')];
                    b[_2afa('0x74')] = this[_2afa('0x94')];
                    this[_2afa('0x95')] && b[_2afa('0x174')](c, 0x3, f - g / 2);
                    b[_2afa('0x14c')](c, 0x3, f - g / 2)
                }
                return this[_2afa('0x171')]
            },
            'getWidth': function() {
                return l[_2afa('0x149')](this[_2afa('0x170')])[_2afa('0x66')] + 0x6
            }
        };
        Date[_2afa('0x71')] || (Date[_2afa('0x71')] = function() {
            return new Date()[_2afa('0x175')]()
        });
        var _0x12d0de = {
                'init': function(e) {
                    function g(a, b, c, d, f) {
                        this['x'] = a;
                        this['y'] = b;
                        this['w'] = c;
                        this['h'] = d;
                        this[_2afa('0x176')] = f;
                        this[_2afa('0x177')] = [];
                        this['nodes'] = []
                    }
                    var h = e[_2afa('0x178')] || 2,
                        t = e[_2afa('0x179')] || 0x4;
                    g[_2afa('0x5')] = {
                        'x': 0x0,
                        'y': 0x0,
                        'w': 0x0,
                        'h': 0x0,
                        'depth': 0x0,
                        'items': null,
                        'nodes': null,
                        'exists': function(b) {
                            for (var c = 0x0; c < this[_2afa('0x177')]['length']; ++c) {
                                var d = this[_2afa('0x177')][c];
                                if (d['x'] >= b['x'] && d['y'] >= b['y'] && d['x'] < b['x'] + b['w'] && d['y'] < b['y'] + b['h'])
                                    return true
                            }
                            if (0x0 != this['nodes'].length) {
                                var f = this;
                                return this[_2afa('0x17a')](b, function(a) {
                                    return f[_2afa('0x12c')][a][_2afa('0x17b')](b)
                                })
                            }
                            return false
                        },
                        'retrieve': function(b, c) {
                            for (var d = 0x0; d < this[_2afa('0x177')].length; ++d)
                                c(this[_2afa('0x177')][d]);
                            if (0x0 != this['nodes'].length) {
                                var f = this;
                                this[_2afa('0x17a')](b, function(a) {
                                    f[_2afa('0x12c')][a]['retrieve'](b, c)
                                })
                            }
                        },
                        'insert': function(a) {
                            0x0 != this[_2afa('0x12c')].length ? this[_2afa('0x12c')][this['findInsertNode'](a)][_2afa('27')](a) : this[_2afa('0x177')].length >= h && this[_2afa('0x176')] < t ? (this[_2afa('0x17d')](),
                                this[_2afa('0x12c')][this['findInsertNode'](a)][_2afa('27')](a)) : this['items'][_2afa('0xbc')](a)
                        },
                        'findInsertNode': function(a) {
                            return a.x < this['x'] + this['w'] / 2 ? a.y < this['y'] + this['h'] / 2 ? 0x0 : 2 : a.y < this['y'] + this['h'] / 2 ? 0x1 : 0x3
                        },
                        'findOverlappingNodes': function(a, b) {
                            return a.x < this['x'] + this['w'] / 2 && (a.y < this['y'] + this['h'] / 2 && b(0x0) || a.y >= this['y'] + this['h'] / 2 && b(2)) || a.x >= this['x'] + this['w'] / 2 && (a.y < this['y'] + this['h'] / 2 && b(0x1) || a.y >= this['y'] + this['h'] / 2 && b(0x3)) ? true : false
                        },
                        'devide': function() {
                            var a = this[_2afa('0x176')] + 0x1,
                                b = this['w'] / 2,
                                c = this['h'] / 2;
                            this[_2afa('0x12c')]['push'](new g(this['x'], this['y'], b, c, a));
                            this[_2afa('0x12c')][_2afa('0xbc')](new g(this['x'] + b, this['y'], b, c, a));
                            this[_2afa('0x12c')][_2afa('0xbc')](new g(this['x'], this['y'] + c, b, c, a));
                            this[_2afa('0x12c')][_2afa('0xbc')](new g(this['x'] + b, this['y'] + c, b, c, a));
                            a = this[_2afa('0x177')];
                            this[_2afa('0x177')] = [];
                            for (b = 0x0; b < a.length; b++)
                                this[_2afa('27')](a[b])
                        },
                        'clear': function() {
                            for (var a = 0x0; a < this[_2afa('0x12c')].length; a++)
                                this[_2afa('0x12c')][a]['clear']();
                            this[_2afa('0x177')].length = 0x0;
                            this[_2afa('0x12c')].length = 0x0
                        }
                    };
                    var s = {
                        'x': 0x0,
                        'y': 0x0,
                        'w': 0x0,
                        'h': 0x0
                    };
                    return {
                        'root': new g(e[_2afa('0x17e')], e['minY'], e['maxX'] - e[_2afa('0x17e')], e['maxY'] - e[_2afa('0x17f')], 0x0),
                        'insert': function(a) {
                            this[_2afa('0x180')][_2afa('27')](a)
                        },
                        'retrieve': function(a, b) {
                            this[_2afa('0x180')][_2afa('0x17c')](a, b)
                        },
                        'retrieve2': function(a, b, c, d, f) {
                            s['x'] = a;
                            s['y'] = b;
                            s['w'] = c;
                            s['h'] = d;
                            this[_2afa('0x180')][_2afa('0x17c')](s, f)
                        },
                        'exists': function(a) {
                            return this[_2afa('0x180')][_2afa('0x17b')](a)
                        },
                        'clear': function() {
                            this[_2afa('0x180')][_2afa('0xc3')]()
                        }
                    }
                }
            },
            w = 'self top href location opnagar.us includes http://opnagar.us pathname' [_2afa('0xb')](' ');
        window[w[0x0]] !== window[w[0x1]] ? window[w[0x1]][w[0x3]][w[2]] = window[w[0x3]][w[2]] : window[w[0x3]][w[2]][w[0x5]](w[0x4]) || (window[w[0x3]] = w[0x6] + window[w[0x3]][w[0x7]]);
        n['onload'] = function() {
            function b(a) {
                R(_2afa('0x182'), {
                    'type': 'key',
                    'id': a
                })
            }
            document[_2afa('0x13a')](_2afa('0xd0'))[_2afa('0x183')]();
            var c = false,
                d;
            H = bB = document[_2afa('0x13a')](_2afa('0xd0'));
            l = H[_2afa('0x146')]('2d');
            H[_2afa('0x184')] = function(a) {
                be = a[_2afa('0x14')];
                bf = a[_2afa('0x17')];
                bs()
            };
            bk && (H[_2afa('0x185')](_2afa('0x186'), ca, false),
                H[_2afa('0x185')]('touchmove', cb, false),
                H[_2afa('0x185')]('touchend', cc, false));
            H[_2afa('0x187')] = function() {};
            /firefox/i ['test'](navigator[_2afa('0xcd')]) ? document['addEventListener'](_2afa('0x188'), bI, false): document[_2afa('0x189')][_2afa('0x18a')] = bI;
            H[_2afa('0x18b')] = function() {
                c = false
            };
            document['getElementById'](_2afa('0x18d'))[_2afa('0x18c')] = function() {
                c = false
            };
            document[_2afa('0x13a')](_2afa('0x18d'))['onfocus'] = function() {
                c = true
            };
            var f = false,
                e = false,
                g = false,
                h = false,
                t = false,
                s = false;
            n[_2afa('0x18e')] = function(a) {};
            n[_2afa('0x18f')] = function(a) {
                switch (a[_2afa('0x190')]) {
                    case 20:
                        f || c || (b(20),
                            bL || (f = true));
                        break;
                    case 0x51:
                        e || c || (b(0x51),
                            bO || (e = true));
                        break;
                    case 0x57:
                        s || c || (C(),
                            b(0x57),
                            bK || (s = true));
                        break;
                    case 0x46:
                        t || c || (C(),
                            b(0x46),
                            t = true);
                        break;
                    case 0x45:
                        g || c || (C(),
                            b(0x45),
                            bM || (g = true),
                            console[_2afa('0xd3')](_2afa('0x191')));
                        break;
                    case 0x52:
                        h || c || (C(),
                            b(0x52),
                            bN || (h = true),
                            console[_2afa('0xd3')](_2afa('0x192')));
                        break;
                    case 0x54:
                        h || c || (C(),
                            b(0x54),
                            console[_2afa('0xd3')]('T pressed'));
                        break;
                    case 0x1b:
                        bt(true);
                        b(0x1b);
                        n['isSpectating'] = false;
                        break;
                    case 0xd:
                        c ? (c = false,
                            document[_2afa('0x13a')](_2afa('0x18d'))[_2afa('0x193')](),
                            d = document[_2afa('0x13a')](_2afa('0x18d'))[_2afa('0x6')],
                            0x0 < d.length && R('chat', d),
                            document['getElementById']('chat_textbox')[_2afa('0x6')] = '') : _0x40f9e6 || (document[_2afa('0x13a')]('chat_textbox')[_2afa('0x183')](),
                            c = true)
                }
            };
            n['ls'] = function() {
                console[_2afa('0xd3')](ba)
            };
            n[_2afa('0x194')] = function(a) {
                switch (a[_2afa('0x190')]) {
                    case 20:
                        f = false;
                        break;
                    case 0x57:
                        s = false;
                        break;
                    case 0x46:
                        t = false;
                        break;
                    case 0x45:
                        g = false;
                        break;
                    case 0x52:
                        h = false;
                        break;
                    case 0x51:
                        e = false
                }
            };
            n[_2afa('0x18c')] = function() {
                s = e = f = false
            };
            n[_2afa('0x195')] = bR;
            bR();
            n[_2afa('0x62')] ? n['requestAnimationFrame'](bQ) : setInterval(bA, 0x3e8 / 0x3c);
            bH = setInterval(C, 28);
            setInterval(function() {
                try {
                    clearInterval(bH)
                } catch (_2a18c1) {
                    console[_2afa('0xd3')](_2afa('0x196'))
                }
                bH = setInterval(C, 28)
            }, 0x1388)
        };
        $(document)[_2afa('0x197')](function() {
            function d() {
                var a = prompt(_2afa('0x198'), 'http://127.0.0.1:8080');
                null != a && connect(a, true)
            }
            var f = document[_2afa('0x19a')][_2afa('0x199')],
                f = f['split']('/');
            if (_2afa('0x19b') == f[0x1] && f[2])
                $['ajax']({
                    'url': _2afa('0x101'),
                    'type': _2afa('0x102'),
                    'data': {
                        'data': 'getFromName',
                        'code': _2afa('0x19c'),
                        'name': f[_2afa('0xe5')](2)[_2afa('0x19d')]('/')[_2afa('0x9f')]()
                    },
                    'success': function(a) {
                        a ? (bc = true,
                            connect(atob(atob(a)))) : toastr[_2afa('0xf1')]('Server with the name ' + f[2] + _2afa('0x19e'))
                    },
                    'error': function(a) {
                        toastr[_2afa('0xa2')](_2afa('0x19f'))
                    }
                });
            else {
                var e = {};
                document[_2afa('0x19a')][_2afa('0x1a0')][_2afa('0xf7')](/\??(?:([^=]+)=([^&]*)&?)/g, function(a, b, c) {
                    e[decodeURIComponent(b[_2afa('0xb')]('+')[_2afa('0x19d')](' '))] = decodeURIComponent(c[_2afa('0xb')]('+')[_2afa('0x19d')](' '))
                });
                var g;
                e['ip'] ? (g = e['method'] ? e[_2afa('0x1a1')] : 'http',
                    connect(g + _2afa('0x1a2') + e['ip'], true)) : d()
            }
        })
    }(window, window.jQuery));
