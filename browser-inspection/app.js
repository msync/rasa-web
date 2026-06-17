let xi = [], bs = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? bs : xi).push(t = t + s[e]);
})();
function Fr(s) {
  if (s < 768) return !1;
  for (let e = 0, t = xi.length; ; ) {
    let i = e + t >> 1;
    if (s < xi[i]) t = i;
    else if (s >= bs[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function gn(s) {
  return s >= 127462 && s <= 127487;
}
const mn = 8205;
function Hr(s, e, t = !0, i = !0) {
  return (t ? xs : Vr)(s, e, i);
}
function xs(s, e, t) {
  if (e == s.length) return e;
  e && ys(s.charCodeAt(e)) && ws(s.charCodeAt(e - 1)) && e--;
  let i = ri(s, e);
  for (e += bn(i); e < s.length; ) {
    let n = ri(s, e);
    if (i == mn || n == mn || t && Fr(n))
      e += bn(n), i = n;
    else if (gn(n)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && gn(ri(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Vr(s, e, t) {
  for (; e > 0; ) {
    let i = xs(s, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function ri(s, e) {
  let t = s.charCodeAt(e);
  if (!ws(t) || e + 1 == s.length) return t;
  let i = s.charCodeAt(e + 1);
  return ys(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function ys(s) {
  return s >= 56320 && s < 57344;
}
function ws(s) {
  return s >= 55296 && s < 56320;
}
function bn(s) {
  return s < 65536 ? 1 : 2;
}
class M {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = qe(this, e, t);
    let n = [];
    return this.decompose(
      0,
      e,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      n,
      1
      /* Open.From */
    ), ne.from(n, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = qe(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), ne.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new it(this), r = new it(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new it(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new vs(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Ss(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? M.empty : e.length <= 32 ? new P(e) : ne.from(P.split(e, []));
  }
}
class P extends M {
  constructor(e, t = zr(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((t ? i : l) >= e)
        return new qr(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new P(xn(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), l = Bt(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new P(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new P(l.slice(0, a)), new P(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof P))
      return super.replace(e, t, i);
    [e, t] = qe(this, e, t);
    let n = Bt(this.text, Bt(i.text, xn(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new P(n, r) : ne.from(P.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = qe(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > e && o && (n += i), e < a && t > r && (n += l.slice(Math.max(0, e - r), t - r)), r = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let r of e)
      i.push(r), n += r.length + 1, i.length == 32 && (t.push(new P(i, n)), i = [], n = -1);
    return n > -1 && t.push(new P(i, n)), t;
  }
}
class ne extends M {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (e <= a && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = qe(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = a, new ne(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = qe(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r], a = o + l.length;
      o > e && r && (n += i), e < a && t > o && (n += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof ne))
      return 0;
    let i = 0, [n, r, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], h = e.children[r];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new P(d, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, o = n >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof ne)
        for (let g of d.children)
          f(g);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof P && a && (p = c[c.length - 1]) instanceof P && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new P(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : ne.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new ne(l, t);
  }
}
M.empty = /* @__PURE__ */ new P([""], 0);
function zr(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function Bt(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
function xn(s, e, t) {
  return Bt(s, [""], e, t);
}
class it {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof P ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof P ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof P) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof P ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class vs {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new it(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Ss {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (M.prototype[Symbol.iterator] = function() {
  return this.iter();
}, it.prototype[Symbol.iterator] = vs.prototype[Symbol.iterator] = Ss.prototype[Symbol.iterator] = function() {
  return this;
});
class qr {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function qe(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function re(s, e, t = !0, i = !0) {
  return Hr(s, e, t, i);
}
function $r(s) {
  return s >= 56320 && s < 57344;
}
function jr(s) {
  return s >= 55296 && s < 56320;
}
function Kr(s, e) {
  let t = s.charCodeAt(e);
  if (!jr(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return $r(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Gr(s) {
  return s < 65536 ? 1 : 2;
}
const yi = /\r\n?|\n/;
var X = /* @__PURE__ */ (function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
})(X || (X = {}));
class ue {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let r = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, n, r), n += r) : n += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    wi(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new ue(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : ks(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : vi(this, e, t);
  }
  mapPos(e, t = -1, i = X.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return r + (e - n);
        r += l;
      } else {
        if (i != X.Simple && h >= e && (i == X.TrackDel && n < e && h > e || i == X.TrackBefore && n < e || i == X.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == n || t < 0 ? r : r + a;
        r += a;
      }
      n = h;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= t && l >= e)
        return n < e && l > t ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ue(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new ue(e);
  }
}
class F extends ue {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return wi(this, (t, i, n, r, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return vi(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(M.empty);
        i.push(o ? e.slice(r, r + o) : M.empty);
      }
      r += o;
    }
    return new F(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : ks(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : vi(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    wi(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return ue.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], n = [], r = new lt(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, a - l);
        z(n, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        z(t, c, f), f > 0 && xe(i, t, r.text), r.forward(c), l += c;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, h - l);
        z(t, c, -1), z(n, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return {
      changes: new F(t, i),
      filtered: ue.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let n = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !n.length)
        return;
      o < t && z(n, t - o, -1);
      let f = new F(n, r);
      l = l ? l.compose(f.map(l)) : f, n = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof F) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? M.of(d.split(i || yi)) : d : M.empty, g = p.length;
        if (f == u && g == 0)
          return;
        f < o && a(), f > o && z(n, f - o, -1), z(n, u - f, g), xe(r, n, p), o = u;
      }
    }
    return h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new F(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == "number")
        t.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(M.empty);
          i[n] = M.of(r.slice(1)), t.push(r[0], i[n].length);
        }
      }
    }
    return new F(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new F(e, t);
  }
}
function z(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && t <= 0 && t == s[n + 1] ? s[n] += e : n >= 0 && e == 0 && s[n] == 0 ? s[n + 1] += t : i ? (s[n] += e, s[n + 1] += t) : s.push(e, t);
}
function xe(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(M.empty);
    s.push(t);
  }
}
function wi(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let h = n, c = r, f = M.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(t || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      e(n, h, r, c, f), n = h, r = c;
    }
  }
}
function vi(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, o = new lt(s), l = new lt(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      z(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (z(n, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (z(n, 0, o.ins), r && xe(r, n, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      z(n, h, a < o.i ? o.ins : 0), r && a < o.i && xe(r, n, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? F.createSet(n, r) : ue.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function ks(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new lt(s), o = new lt(e);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? F.createSet(i, n) : ue.create(i);
    if (r.ins == 0)
      z(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      z(i, 0, o.ins, l), n && xe(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          z(i, a, c, l), n && c && xe(n, i, o.text);
        } else o.ins == -1 ? (z(i, r.off ? 0 : r.len, a, l), n && xe(n, i, r.textBit(a))) : (z(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && xe(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class lt {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? M.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? M.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Me {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new Me(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor)
      return y.range(e, t, void 0, void 0, i);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return y.range(this.anchor, n, void 0, void 0, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return y.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Me(e, t, i);
  }
}
class y {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : y.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new y([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return y.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, y.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new y(e.ranges.map((t) => Me.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new y([y.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < e.length; n++) {
      let r = e[n];
      if (r.empty ? r.from <= i : r.from < i)
        return y.normalized(e.slice(), t);
      i = r.to;
    }
    return new y(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, n) {
    return Me.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, n, r) {
    let o = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return !r && e != t && (r = t < e ? 1 : -1), t < e ? Me.create(t, e, 48 | o) : Me.create(e, t, (r ? r < 0 ? 8 : 16 : 0) | o);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, r) => n.from - r.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let r = e[n], o = e[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? y.range(a, l) : y.range(l, a));
      }
    }
    return new y(e, t);
  }
}
function Cs(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Yi = 0;
class S {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Yi++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new S(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Ji), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Lt([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Lt(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Lt(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Ji(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class Lt {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Yi++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = e[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || Si(f, c)) {
          let d = i(f);
          if (l ? !yn(d, f.values[o], n) : !n(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let g = Ft(u, p);
          if (this.dependencies.every((m) => m instanceof S ? u.facet(m) === f.facet(m) : m instanceof ve ? u.field(m, !1) == f.field(m, !1) : !0) || (l ? yn(d = i(f), g, n) : n(d = i(f), g)))
            return f.values[o] = g, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function yn(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function Si(s, e) {
  let t = !1;
  for (let i of e)
    nt(s, i) & 1 && (t = !0);
  return t;
}
function _r(s, e, t) {
  let i = t.map((a) => s[a.id]), n = t.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Ft(a, i[c]);
      if (n[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        nt(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!Si(a, r))
        return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = Si(a, i), f = h.config.facets[e.id], u = h.facet(e);
      if (f && !c && Ji(t, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return e.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const wt = /* @__PURE__ */ S.define({ static: !0 });
class ve {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ve(Yi++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(wt).find((i) => i.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[t], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[t] = o, 1);
      },
      reconfigure: (i, n) => {
        let r = i.facet(wt), o = n.facet(wt), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, wt.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const Ae = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Qe(s) {
  return (e) => new As(e, s);
}
const Qi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Qe(Ae.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Qe(Ae.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Qe(Ae.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Qe(Ae.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Qe(Ae.lowest)
};
class As {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Qt {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new ki(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Qt.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class ki {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Wt {
  constructor(e, t, i, n, r, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of Ur(e, t, o))
      u instanceof ve ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of n)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i?.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = c && c[u] || [];
      if (d.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, Ji(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((b) => b.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((b) => m.dynamicSlot(b)));
        l[p.id] = h.length << 1, h.push((m) => _r(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Wt(e, o, f, l, a, r);
  }
}
function Ur(s, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof ki && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof ki) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof As)
      r(o.inner, o.prec);
    else if (o instanceof ve)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof Lt)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, Ae.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(s, Ae.default), i.reduce((o, l) => o.concat(l));
}
function nt(s, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[t] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | n;
}
function Ft(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const Ms = /* @__PURE__ */ S.define(), Ci = /* @__PURE__ */ S.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), Ts = /* @__PURE__ */ S.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Rs = /* @__PURE__ */ S.define(), Os = /* @__PURE__ */ S.define(), Es = /* @__PURE__ */ S.define(), Ds = /* @__PURE__ */ S.define({
  combine: (s) => s.length ? s[0] : !1
});
class Ye {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new Xr();
  }
}
class Xr {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Ye(this, e);
  }
}
class Yr {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new I(this, e);
  }
}
class I {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new I(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new Yr(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let r = n.map(t);
      r && i.push(r);
    }
    return i;
  }
}
I.reconfigure = /* @__PURE__ */ I.define();
I.appendConfig = /* @__PURE__ */ I.define();
class q {
  constructor(e, t, i, n, r, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Cs(i, t.newLength), r.some((l) => l.type == q.time) || (this.annotations = r.concat(q.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, n, r, o) {
    return new q(e, t, i, n, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(q.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
q.time = /* @__PURE__ */ Ye.define();
q.userEvent = /* @__PURE__ */ Ye.define();
q.addToHistory = /* @__PURE__ */ Ye.define();
q.remote = /* @__PURE__ */ Ye.define();
function Jr(s, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == e.length || e[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < e.length)
      r = e[n++], o = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Bs(s, e, t) {
  var i;
  let n, r, o;
  return t ? (n = e.changes, r = F.empty(e.changes.length), o = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: I.mapEffects(s.effects, n).concat(I.mapEffects(e.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function Ai(s, e, t) {
  let i = e.selection, n = Fe(e.annotations);
  return e.userEvent && (n = n.concat(q.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof F ? e.changes : F.of(e.changes || [], t, s.facet(Ts)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: Fe(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ls(s, e, t) {
  let i = Ai(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = Bs(i, Ai(s, e[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = q.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Zr(t ? Qr(n) : n);
}
function Qr(s) {
  let e = s.startState, t = !0;
  for (let n of e.facet(Rs)) {
    let r = n(s);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : Jr(t, r));
  }
  if (t !== !0) {
    let n, r;
    if (t === !1)
      r = s.changes.invertedDesc, n = F.empty(e.doc.length);
    else {
      let o = s.changes.filter(t);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = q.create(e, n, s.selection && s.selection.map(r), I.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(Os);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof q ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof q ? s = r[0] : s = Ls(e, Fe(r), !1);
  }
  return s;
}
function Zr(s) {
  let e = s.startState, t = e.facet(Es), i = s;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n](s);
    r && Object.keys(r).length && (i = Bs(i, Ai(e, r, s.changes.newLength), !0));
  }
  return i == s ? s : q.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const eo = [];
function Fe(s) {
  return s == null ? eo : Array.isArray(s) ? s : [s];
}
var ce = /* @__PURE__ */ (function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
})(ce || (ce = {}));
const to = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Mi;
try {
  Mi = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function io(s) {
  if (Mi)
    return Mi.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || to.test(t)))
      return !0;
  }
  return !1;
}
function no(s) {
  return (e) => {
    if (!/\S/.test(e))
      return ce.Space;
    if (io(e))
      return ce.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return ce.Word;
    return ce.Other;
  };
}
class E {
  constructor(e, t, i, n, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      nt(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return nt(this, i), Ft(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Ls(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let l of e.effects)
      l.is(Qt.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => n.set(h, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(I.reconfigure) ? (t = null, i = l.value) : l.is(I.appendConfig) && (t = null, i = Fe(i).concat(l.value));
    let r;
    t ? r = e.startState.values.slice() : (t = Wt.resolve(i, n, this), r = new E(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(Ci) ? e.newSelection : e.newSelection.asSingle();
    new E(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: y.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], o = Fe(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = n.mapDesc(h, !0);
      r.push(a.range.map(f)), n = n.compose(c), o = I.mapEffects(o, c).concat(I.mapEffects(Fe(a.effects), f));
    }
    return {
      changes: n,
      selection: y.create(r, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof F ? e : F.of(e, this.doc.length, this.facet(E.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return M.of(e.split(this.facet(E.lineSeparator) || yi));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (nt(this, t), Ft(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let n = e[i];
        n instanceof ve && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r], l = e[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return E.create({
      doc: e.doc,
      selection: y.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = Wt.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof M ? e.doc : M.of((e.doc || "").split(t.staticFacet(E.lineSeparator) || yi)), n = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return Cs(n, i.length), t.staticFacet(Ci) || (n = n.asSingle()), new E(t, i, n, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(E.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(E.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Ds);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(E.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > t.length ? i : t[r - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let n = [];
    for (let r of this.facet(Ms))
      for (let o of r(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return no(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = re(t, o, !1);
      if (r(t.slice(a, o)) != ce.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = re(t, l);
      if (r(t.slice(l, a)) != ce.Word)
        break;
      l = a;
    }
    return o == l ? null : y.range(o + i, l + i);
  }
}
E.allowMultipleSelections = Ci;
E.tabSize = /* @__PURE__ */ S.define({
  combine: (s) => s.length ? s[0] : 4
});
E.lineSeparator = Ts;
E.readOnly = Ds;
E.phrases = /* @__PURE__ */ S.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((n) => s[n] == e[n]);
  }
});
E.languageData = Ms;
E.changeFilter = Rs;
E.transactionFilter = Os;
E.transactionExtender = Es;
Qt.reconfigure = /* @__PURE__ */ I.define();
function so(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
class Oe {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return at.create(e, t, this);
  }
}
Oe.prototype.startSide = Oe.prototype.endSide = 0;
Oe.prototype.point = !1;
Oe.prototype.mapMode = X.TrackDel;
function Zi(s, e) {
  return s == e || s.constructor == e.constructor && s.eq(e);
}
class at {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new at(e, t, i);
  }
}
function Ti(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class en {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, f = this.to[a] + e, u, d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), n.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new en(n, r, i, l) : null, pos: o };
  }
}
class T {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new T(e, t, i, n);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(Ti)), this.isEmpty)
      return t.length ? T.of(t) : this;
    let l = new Ps(this, null, -1).goto(0), a = 0, h = [], c = new Ht();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(at.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? T.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (n = Math.max(n, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new T(i, t, r || T.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return ht.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return ht.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, n, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = wn(o, l, i), h = new Ze(o, a, r), c = new Ze(l, a, r);
    i.iterGaps((f, u, d) => vn(h, f, c, u, d, n)), i.empty && i.length == 0 && vn(h, 0, c, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, n) {
    n == null && (n = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = wn(r, o), a = new Ze(r, l, 0).goto(i), h = new Ze(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !Ri(a.active, h.active) || a.point && (!h.point || !Zi(a.point, h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, n, r = -1) {
    let o = new Ze(e, null, r).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        n.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new Ht();
    for (let n of e instanceof at ? [e] : t ? ro(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return T.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != T.empty; n = n.nextLayer)
        t = new T(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
T.empty = /* @__PURE__ */ new T([], [], null, -1);
function ro(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if (Ti(e, i) > 0)
        return s.slice().sort(Ti);
      e = i;
    }
  return s;
}
T.empty.nextLayer = T.empty;
class Ht {
  finishChunk(e) {
    this.chunks.push(new en(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Ht())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let n = e - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(T.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = T.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function wn(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == r.chunkPos[o] && !t?.touchesRange(l, l + r.chunk[o].length) && n.add(r.chunk[o]);
    }
  return n;
}
class Ps {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class ht {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new Ps(o, t, i, r));
    return n.length == 1 ? n[0] : new ht(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      oi(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      oi(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), oi(this.heap, 0);
    }
  }
}
function oi(s, e) {
  for (let t = s[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), t.compare(n) < 0)
      break;
    s[i] = t, s[e] = n, e = i;
  }
}
class Ze {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ht.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    vt(this.active, e), vt(this.activeTo, e), vt(this.activeRank, e), this.minActive = Sn(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    St(this.active, t, i), St(this.activeTo, t, n), St(this.activeRank, t, r), e && St(e, t, this.cursor.from), this.minActive = Sn(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && vt(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function vn(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e, h = !!r.boundChange;
  for (let c = !1; ; ) {
    let f = s.to + a - t.to, u = f || s.endSide - t.endSide, d = u < 0 ? s.to + a : t.to, p = Math.min(d, o);
    if (s.point || t.point ? (s.point && t.point && Zi(s.point, t.point) && Ri(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(l, p, s.point, t.point), c = !1) : (c && r.boundChange(l), p > l && !Ri(s.active, t.active) && r.compareRange(l, p, s.active, t.active), h && p < o && (f || s.openEnd(d) != t.openEnd(d)) && (c = !0)), d > o)
      break;
    l = d, u <= 0 && s.next(), u >= 0 && t.next();
  }
}
function Ri(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !Zi(s[t], e[t]))
      return !1;
  return !0;
}
function vt(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function St(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function Sn(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function oo(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = re(s, n);
  }
  return s.length;
}
const Oi = "ͼ", kn = typeof Symbol > "u" ? "__" + Oi : Symbol.for(Oi), Ei = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), Cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class $e {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in e) r(n(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Cn[kn] || 1;
    return Cn[kn] = e + 1, Oi + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let n = e[Ei], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new lo(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let An = /* @__PURE__ */ new Map();
class lo {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = An.get(i);
      if (r) return e[Ei] = r;
      this.sheet = new n.CSSStyleSheet(), An.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Ei] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i) for (let h = 0; h < l.rules.length; h++)
          i.insertRule(l.rules[h], n++);
      } else {
        for (; r < a; ) n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var ye = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ct = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, ao = typeof navigator < "u" && /Mac/.test(navigator.platform), ho = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var V = 0; V < 10; V++) ye[48 + V] = ye[96 + V] = String(V);
for (var V = 1; V <= 24; V++) ye[V + 111] = "F" + V;
for (var V = 65; V <= 90; V++)
  ye[V] = String.fromCharCode(V + 32), ct[V] = String.fromCharCode(V);
for (var li in ye) ct.hasOwnProperty(li) || (ct[li] = ye[li]);
function co(s) {
  var e = ao && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || ho && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? ct : ye)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let $ = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Di = typeof document < "u" ? document : { documentElement: { style: {} } };
const Bi = /* @__PURE__ */ /Edge\/(\d+)/.exec($.userAgent), Is = /* @__PURE__ */ /MSIE \d/.test($.userAgent), Li = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec($.userAgent), Zt = !!(Is || Li || Bi), Mn = !Zt && /* @__PURE__ */ /gecko\/(\d+)/i.test($.userAgent), ai = !Zt && /* @__PURE__ */ /Chrome\/(\d+)/.exec($.userAgent), Tn = "webkitFontSmoothing" in Di.documentElement.style, Pi = !Zt && /* @__PURE__ */ /Apple Computer/.test($.vendor), Rn = Pi && (/* @__PURE__ */ /Mobile\/\w+/.test($.userAgent) || $.maxTouchPoints > 2);
var x = {
  mac: Rn || /* @__PURE__ */ /Mac/.test($.platform),
  windows: /* @__PURE__ */ /Win/.test($.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test($.platform),
  ie: Zt,
  ie_version: Is ? Di.documentMode || 6 : Li ? +Li[1] : Bi ? +Bi[1] : 0,
  gecko: Mn,
  gecko_version: Mn ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec($.userAgent) || [0, 0])[1] : 0,
  chrome: !!ai,
  chrome_version: ai ? +ai[1] : 0,
  ios: Rn,
  android: /* @__PURE__ */ /Android\b/.test($.userAgent),
  webkit: Tn,
  webkit_version: Tn ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec($.userAgent) || [0, 0])[1] : 0,
  safari: Pi,
  safari_version: Pi ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec($.userAgent) || [0, 0])[1] : 0,
  tabSize: Di.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function tn(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const Vt = /* @__PURE__ */ Object.create(null);
function nn(s, e, t) {
  if (s == e)
    return !0;
  s || (s = Vt), e || (e = Vt);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - 0 != n.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function fo(s, e) {
  for (let t = s.attributes.length - 1; t >= 0; t--) {
    let i = s.attributes[t].name;
    e[i] == null && s.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? s.style.cssText = i : s.getAttribute(t) != i && s.setAttribute(t, i);
  }
}
function On(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function uo(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ei {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var j = /* @__PURE__ */ (function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
})(j || (j = {}));
class W extends Oe {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new pt(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Ee(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, n;
    if (e.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = Ns(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Ee(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new gt(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return T.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
W.none = T.empty;
class pt extends W {
  constructor(e) {
    let { start: t, end: i } = Ns(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? tn(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || Vt;
  }
  eq(e) {
    return this == e || e instanceof pt && this.tagName == e.tagName && nn(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
pt.prototype.point = !1;
class gt extends W {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof gt && this.spec.class == e.spec.class && nn(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
gt.prototype.mapMode = X.TrackBefore;
gt.prototype.point = !0;
class Ee extends W {
  constructor(e, t, i, n, r, o) {
    super(t, i, r, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? X.TrackBefore : X.TrackAfter : X.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? j.WidgetRange : this.startSide <= 0 ? j.WidgetBefore : j.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Ee && po(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Ee.prototype.point = !0;
function Ns(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function po(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function He(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
class ft extends Oe {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof ft && this.tagName == e.tagName && nn(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new ft(e.tagName, e.attributes || Vt, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return T.of(e, t);
  }
}
ft.prototype.startSide = ft.prototype.endSide = -1;
function ut(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function Ii(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function st(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Ii(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function Pt(s) {
  return s.nodeType == 3 ? dt(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function rt(s, e, t, i) {
  return t ? En(s, e, t, i, -1) || En(s, e, t, i, 1) : !1;
}
function we(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function zt(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function En(s, e, t, i, n) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : pe(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      e = we(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[e + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = n < 0 ? pe(s) : 0;
    } else
      return !1;
  }
}
function pe(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function qt(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function go(s) {
  let e = s.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function Ws(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function mo(s, e, t, i, n, r, o, l) {
  let a = s.ownerDocument, h = a.defaultView || window;
  for (let c = s, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, g = 1;
      if (d)
        u = go(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let w = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Ws(c, w)), u = {
          left: w.left,
          right: w.left + c.clientWidth * p,
          top: w.top,
          bottom: w.top + c.clientHeight * g
        };
      }
      let m = 0, b = 0;
      if (n == "nearest")
        e.top < u.top + o ? (b = e.top - (u.top + o), t > 0 && e.bottom > u.bottom + b && (b = e.bottom - u.bottom + o)) : e.bottom > u.bottom - o && (b = e.bottom - u.bottom + o, t < 0 && e.top - b < u.top && (b = e.top - (u.top + o)));
      else {
        let w = e.bottom - e.top, k = u.bottom - u.top;
        b = (n == "center" && w <= k ? e.top + w / 2 - k / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - k + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left + r ? (m = e.left - (u.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + r)) : e.right > u.right - r && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = e.left - (u.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || b)
        if (d)
          h.scrollBy(m, b);
        else {
          let w = 0, k = 0;
          if (b) {
            let D = c.scrollTop;
            c.scrollTop += b / g, k = (c.scrollTop - D) * g;
          }
          if (m) {
            let D = c.scrollLeft;
            c.scrollLeft += m / p, w = (c.scrollLeft - D) * p;
          }
          e = {
            left: e.left - w,
            top: e.top - k,
            right: e.right - w,
            bottom: e.bottom - k
          }, w && Math.abs(w - m) < 1 && (i = "nearest"), k && Math.abs(k - b) < 1 && (n = "nearest");
        }
      if (d)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = {
        left: Math.max(e.left, u.left),
        right: Math.min(e.right, u.right),
        top: Math.max(e.top, u.top),
        bottom: Math.min(e.bottom, u.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Fs(s, e = !0) {
  let t = s.ownerDocument, i = null, n = null;
  for (let r = s.parentNode; r && !(r == t.body || (!e || i) && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), e && !i && r.scrollWidth > r.clientWidth && (i = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: i, y: n };
}
class bo {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? pe(t) : 0), i, Math.min(e.focusOffset, i ? pe(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
}
let Ce = null;
x.safari && x.safari_version >= 26 && (Ce = !1);
function Hs(s) {
  if (s.setActive)
    return s.setActive();
  if (Ce)
    return s.focus(Ce);
  let e = [];
  for (let t = s; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (s.focus(Ce == null ? {
    get preventScroll() {
      return Ce = { preventScroll: !0 }, !0;
    }
  } : void 0), !Ce) {
    Ce = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], r = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Dn;
function dt(s, e, t = e) {
  let i = Dn || (Dn = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function Ve(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function xo(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function yo(s, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, pe(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = pe(t));
    } else {
      if (t == s)
        return !0;
      i = we(t), t = t.parentNode;
    }
}
function Vs(s) {
  return s instanceof Window ? s.pageYOffset > Math.max(0, s.document.documentElement.scrollHeight - s.innerHeight - 4) : s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function zs(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = pe(t);
    } else if (t.parentNode && !zt(t))
      i = we(t), t = t.parentNode;
    else
      return null;
  }
}
function qs(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !zt(t))
      i = we(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Z {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new Z(e.parentNode, we(e), t);
  }
  static after(e, t) {
    return new Z(e.parentNode, we(e) + 1, t);
  }
}
var N = /* @__PURE__ */ (function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
})(N || (N = {}));
const De = N.LTR, sn = N.RTL;
function $s(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const wo = /* @__PURE__ */ $s("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), vo = /* @__PURE__ */ $s("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Ni = /* @__PURE__ */ Object.create(null), ie = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  Ni[e] = t, Ni[t] = -e;
}
function js(s) {
  return s <= 247 ? wo[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? vo[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const So = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class oe {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? sn : De;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, n) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Ks(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !Ks(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const R = [];
function ko(s, e, t, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, l = r < i.length ? i[r].from : t, a = r ? 256 : n;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = js(s.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), R[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = R[h];
      if (u == 128)
        h < l - 1 && c == R[h + 1] && c & 24 ? u = R[h] = c : R[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && R[d] == 64; )
          d++;
        let p = h && c == 8 || d < t && R[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let g = h; g < d; g++)
          R[g] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (R[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function Co(s, e, t, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if (d = Ni[u = s.charCodeAt(f)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (ie[g + 1] == -d) {
              let m = ie[g + 2], b = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              b && (R[f] = R[ie[g]] = b), l = g;
              break;
            }
        } else {
          if (ie.length == 189)
            break;
          ie[l++] = f, ie[l++] = u, ie[l++] = a;
        }
      else if ((p = R[f]) == 2 || p == 1) {
        let g = p == n;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let b = ie[m + 2];
          if (b & 2)
            break;
          if (g)
            ie[m + 2] |= 2;
          else {
            if (b & 4)
              break;
            ie[m + 2] |= 4;
          }
        }
      }
  }
}
function Ao(s, e, t, i) {
  for (let n = 0, r = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : s, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let h = R[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (n == t.length)
              break;
            c = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (R[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < e ? R[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, g = n, m = g ? t[g - 1].to : s; p > a; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : s), R[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function Wi(s, e, t, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let g = R[a];
        g != l && (c = !1, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (f)
            break e;
          let g = r[h];
          if (!c)
            for (let m = g.to, b = h + 1; ; ) {
              if (m == t)
                break e;
              if (b < r.length && r[b].from == m)
                m = r[b++].to;
              else {
                if (R[m] == l)
                  break e;
                break;
              }
            }
          if (h++, u)
            u.push(g);
          else {
            g.from > a && o.push(new oe(a, g.from, d));
            let m = g.direction == De != !(d % 2);
            Fi(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (c ? R[p] != l : R[p] == l))
            break;
          p++;
        }
      u ? Wi(s, a, p, i + 1, n, u, o) : a < p && o.push(new oe(a, p, d)), a = p;
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let g = R[a - 1];
        g != l && (c = !1, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e: for (; ; )
        if (h && p == r[h - 1].to) {
          if (f)
            break e;
          let g = r[--h];
          if (!c)
            for (let m = g.from, b = h; ; ) {
              if (m == e)
                break e;
              if (b && r[b - 1].to == m)
                m = r[--b].from;
              else {
                if (R[m - 1] == l)
                  break e;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < a && o.push(new oe(g.to, a, d));
            let m = g.direction == De != !(d % 2);
            Fi(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), a = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (c ? R[p - 1] != l : R[p - 1] == l))
            break;
          p--;
        }
      u ? Wi(s, p, a, i + 1, n, u, o) : p < a && o.push(new oe(p, a, d)), a = p;
    }
}
function Fi(s, e, t, i, n, r, o) {
  let l = e % 2 ? 2 : 1;
  ko(s, n, r, i, l), Co(s, n, r, i, l), Ao(n, r, i, l), Wi(s, n, r, e, t, i, o);
}
function Mo(s, e, t) {
  if (!s)
    return [new oe(0, 0, e == sn ? 1 : 0)];
  if (e == De && !t.length && !So.test(s))
    return Gs(s.length);
  if (t.length)
    for (; s.length > R.length; )
      R[R.length] = 256;
  let i = [], n = e == De ? 0 : 1;
  return Fi(s, n, n, t, 0, s.length, i), i;
}
function Gs(s) {
  return [new oe(0, s, 0)];
}
let _s = "";
function To(s, e, t, i, n) {
  var r;
  let o = i.head - s.from, l = oe.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], o = a.side(!n, t), h = a.side(n, t);
  }
  let c = re(s.text, o, a.forward(n, t));
  (c < a.from || c > a.to) && (c = h), _s = s.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return f && c == h && f.level + (n ? 0 : 1) < a.level ? y.cursor(f.side(!n, t) + s.from, f.forward(n, t) ? 1 : -1, f.level) : y.cursor(c + s.from, a.forward(n, t) ? -1 : 1, a.level);
}
function Ro(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = js(s.charCodeAt(i));
    if (n == 1)
      return De;
    if (n == 2 || n == 4)
      return sn;
  }
  return De;
}
const Us = /* @__PURE__ */ S.define(), Xs = /* @__PURE__ */ S.define(), Ys = /* @__PURE__ */ S.define(), Js = /* @__PURE__ */ S.define(), Hi = /* @__PURE__ */ S.define(), Qs = /* @__PURE__ */ S.define(), Zs = /* @__PURE__ */ S.define(), rn = /* @__PURE__ */ S.define(), on = /* @__PURE__ */ S.define(), er = /* @__PURE__ */ S.define({
  combine: (s) => s.some((e) => e)
}), tr = /* @__PURE__ */ S.define({
  combine: (s) => s.some((e) => e)
}), ir = /* @__PURE__ */ S.define();
class ze {
  constructor(e, t, i, n, r, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new ze(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new ze(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const kt = /* @__PURE__ */ I.define({ map: (s, e) => s.map(e) }), nr = /* @__PURE__ */ I.define();
function fe(s, e, t) {
  let i = s.facet(Js);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const he = /* @__PURE__ */ S.define({ combine: (s) => s.length ? s[0] : !0 });
let Oo = 0;
const We = /* @__PURE__ */ S.define({
  combine(s) {
    return s.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (s[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class je {
  constructor(e, t, i, n, r) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(We.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(We.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = t || {};
    return new je(Oo++, e, i, n, (l) => {
      let a = [];
      return o && a.push(ti.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : W.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return je.define((i, n) => new e(i, n), t);
  }
}
class hi {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (fe(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        fe(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        fe(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const sr = /* @__PURE__ */ S.define(), ln = /* @__PURE__ */ S.define(), ti = /* @__PURE__ */ S.define(), rr = /* @__PURE__ */ S.define(), an = /* @__PURE__ */ S.define(), mt = /* @__PURE__ */ S.define(), or = /* @__PURE__ */ S.define();
function Bn(s, e) {
  let t = s.state.facet(or);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return T.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, l, a) {
      let h = r - e.from, c = o - e.from, f = n;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = Ro(e.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          p.to = c, f = p.inner;
        else {
          let g = { from: h, to: c, direction: d, inner: [] };
          f.push(g), f = g.inner;
        }
      }
    }
  }), n;
}
const lr = /* @__PURE__ */ S.define();
function ar(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(lr)) {
    let o = r(s);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const et = /* @__PURE__ */ S.define();
class J {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new J(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = n < e.length ? e[n].fromB : 1e9, a = r < t.length ? t[r] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + o, f = h, u = c;
      for (; ; )
        if (r < t.length && t[r] <= f) {
          let d = t[r + 1];
          r += 2, f = Math.max(f, d);
          for (let p = n; p < e.length && e[p].fromB <= f; p++)
            o = e[p].toA - e[p].toB;
          u = Math.max(u, d + o);
        } else if (n < e.length && e[n].fromB <= f) {
          let d = e[n++];
          f = Math.max(f, d.toB), u = Math.max(u, d.toA), o = d.toA - d.toB;
        } else
          break;
      i.push(new J(c, u, h, f));
    }
    return i;
  }
}
class $t {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = F.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new J(r, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new $t(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const Eo = [];
class L {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Eo;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && fo(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let n of this.children) {
      if (n == e)
        return i;
      i += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = we(this.dom), n = this.length ? e > 0 : t > 0;
    return new Z(this.parent.dom, i + (n ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof ni)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class ii extends L {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, i = null, n, r = e?.node == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, n = i ? i.nextSibling : t.firstChild, r && n != l.dom && (r.written = !0), l.dom.parentNode == t)
        for (; n && n != l.dom; )
          n = Ln(n);
      else
        t.insertBefore(l.dom, n);
      i = l.dom;
    }
    for (n = i ? i.nextSibling : t.firstChild, r && n && (r.written = !0); n; )
      n = Ln(n);
    this.length = o;
  }
}
function Ln(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class ni extends ii {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = L.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, n = 0, r = 0; ; )
      if (n == i.children.length) {
        if (!t.length)
          return;
        i = i.parent, i.breakAfter && r++, n = t.pop();
      } else {
        let o = i.children[n++];
        if (o instanceof de)
          t.push(n), i = o, n = 0;
        else {
          let l = r + o.length, a = e(o, r);
          if (a !== void 0)
            return a;
          r = l + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, n = -1, r, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (e >= a && e <= h) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (i = void 0);
        }
        (a < e || e == h && (t < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, n = e - a), (h > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, o = e - a);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: n } : { tile: r, offset: o };
  }
}
class de extends ii {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new de(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Ke extends ii {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let n = new Ke(t || document.createElement("div"), e);
    return (!t || !i) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let n = null, r = -1, o = null, l = -1;
    function a(c, f) {
      for (let u = 0, d = 0; u < c.children.length && d <= f; u++) {
        let p = c.children[u], g = d + p.length;
        g >= f && (p.isComposite() ? a(p, f - d) : (!o || o.isHidden && (t > 0 || i && Bo(o, p))) && (g > f || p.flags & 32) ? (o = p, l = f - d) : (d < f || p.flags & 16 && !p.isHidden) && (n = p, r = f - d)), d = g;
      }
    }
    a(this, e);
    let h = (t < 0 ? n : o) || n || o;
    return h ? { tile: h, offset: h == n ? r : l } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : Do(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: n, offset: r } = i;
      if (this.dom.contains(n.dom))
        return n.isText() ? new Z(n.dom, Math.min(n.dom.nodeValue.length, r)) : n.domPosFor(r, n.flags & 16 ? 1 : n.flags & 32 ? -1 : t);
      let o = i.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new Z(a.dom, 0);
        a == i.tile && (l = !0);
      }
    }
    return new Z(this.dom, 0);
  }
}
function Do(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = Pt(e);
  return t[t.length - 1] || null;
}
function Bo(s, e) {
  let t = s.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class G extends ii {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new G(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Te extends L {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    e > i && (e = i);
    let n = e, r = e, o = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? x.chrome || x.gecko || (e ? (n--, o = 1) : r < i && (r++, o = -1)) : t < 0 ? n-- : r < i && r++;
    let l = dt(this.dom, n, r).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return x.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? qt(a, o < 0) : a || null;
  }
  static of(e, t) {
    let i = new Te(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class Be extends L {
  constructor(e, t, i, n) {
    super(e, t, n), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, i) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n)
      return n;
    if (i)
      return qt(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(e > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return qt(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return M.empty;
    let { root: e } = this;
    if (!e)
      return M.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, n, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new Be(r, i, e, n);
  }
}
class jt extends L {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return M.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Lo {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: n, index: r, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; )
      if (n.isComposite())
        if (o) {
          if (!e)
            break;
          i && i.break(), e--, o = !1;
        } else if (r == n.children.length) {
          if (!e && !l.length)
            break;
          i && i.leave(n), o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
        } else {
          let a = n.children[r], h = a.breakAfter;
          (t > 0 ? a.length <= e : a.length < e) && (!i || i.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!h, r++, e -= a.length) : (l.push({ tile: n, index: r }), n = a, r = 0, i && a.isComposite() && i.enter(a));
        }
      else if (r == n.length)
        o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
      else if (e) {
        let a = Math.min(e, n.length - r);
        i && i.skip(n, r, r + a), e -= a, r += a;
      } else
        break;
    return this.tile = n, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Po {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = n;
  }
}
class Io {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, n) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new Te(l.dom, l.text + e);
      a.parent = o;
    } else
      o.append(n || Te.of(e, (r = this.cache.find(Te)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? ci(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let n = i;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l], h = n.lastChild;
      if (h instanceof G && h.mark.eq(a.mark))
        h.dom != a.dom && h.setDOM(ci(a.dom)), n = h;
      else {
        if (this.cache.reused.get(a)) {
          let f = L.get(a.dom);
          f && f.setDOM(ci(a.dom));
        }
        let c = G.of(a.mark, a.dom);
        n.append(c), n = c;
      }
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
    }
    let r = L.get(e.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let o = new Te(e.text, e.text.nodeValue);
    o.flags |= 8, this.pos = e.range.toB, n.append(o);
  }
  addInlineWidget(e, t, i) {
    let n = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    n || this.flushBuffer();
    let r = this.ensureMarks(t, i);
    !n && !(e.flags & 16) && r.append(this.getBuffer(1)), r.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = hr);
    let n = Ke.start(e, t || ((i = this.cache.find(Ke)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = n);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let n = this.curLine;
    for (let r = e.length - 1; r >= 0; r--) {
      let o = e[r], l;
      if (t > 0 && (l = n.lastChild) && l instanceof G && l.mark.eq(o))
        n = l, t--;
      else {
        let a = G.of(o, (i = this.cache.find(G, (h) => h.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        n.append(a), n = a, t = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !Pn(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(x.ios && Pn(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        fi,
        0,
        32
        /* TileFlag.After */
      ) || new Be(
        fi.toDOM(),
        0,
        fi,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank, i = new Po(e.from, e.to, e.value, t), n = this.wrappers.length;
        for (; n > 0 && (this.wrappers[n - 1].rank - i.rank || this.wrappers[n - 1].to - i.to) < 0; )
          n--;
        this.wrappers.splice(n, 0, i);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let n = t.lastChild;
      if (i.from < this.pos && n instanceof de && n.wrapper.eq(i.wrapper))
        t = n;
      else {
        let r = de.of(i.wrapper, (e = this.cache.find(de, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(r), t = r;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(
      jt,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new jt(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class No {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: n, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = n;
      let l = this.textOff = Math.min(e, n.length);
      return r ? null : n.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const Kt = [Be, Ke, Te, G, jt, de, ni];
for (let s = 0; s < Kt.length; s++)
  Kt[s].bucket = s;
class Wo {
  constructor(e) {
    this.view = e, this.buckets = Kt.map(() => []), this.index = Kt.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, i = 2) {
    let n = e.bucket, r = this.buckets[n], o = this.index[n];
    for (let l = r.length - 1; l >= 0; l--) {
      let a = (l + o) % r.length, h = r[a];
      if ((!t || t(h)) && !this.reused.has(h))
        return r.splice(a, 1), a < o && this.index[n]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(e, t, i) {
    let n = this.buckets[0];
    if (n.length)
      for (let r = 0, o = 0; ; r++) {
        if (r == n.length) {
          if (o)
            return null;
          o = 1, r = 0;
        }
        let l = n[r];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view, l.widget)))
          return n.splice(r, 1), r < this.index[0] && this.index[0]--, l.widget == e && l.length == t && (l.flags & 497) == i ? (this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l) : (this.reused.set(
            l,
            2
            /* Reused.DOM */
          ), new Be(l.dom, t, e, l.flags & -498 | i));
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++)
      this.buckets[e].length = this.index[e] = 0;
  }
}
class Fo {
  constructor(e, t, i, n, r) {
    this.view = e, this.decorations = n, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new Wo(e), this.text = new No(e.state.doc), this.builder = new Io(this.cache, new ni(e, e.contentDOM), T.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new Lo(t), this.reuseWalker = {
      skip: (o, l, a) => {
        if (this.cache.add(o), o.isComposite())
          return !1;
      },
      enter: (o) => this.cache.add(o),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > n) {
        let h = a - n;
        this.preserve(h, !o, !l), n = a, r += h;
      }
      if (!l)
        break;
      t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, l.toA), this.emit(t.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(r, l.toB)), r = l.toB, n = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let n = zo(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < o.length ? Be.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, n, r), r = n.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, n, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), n, r)), r = n.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof jt)
          this.cache.add(o);
        else if (o instanceof G)
          this.builder.ensureLine(null), this.builder.addMark(o, n, r), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), r = n.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof G && n.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? n.length && (n.length = r = 0) : o instanceof G && (n.shift(), r = Math.min(r, n.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, n = this.builder, r = 0, o = T.spans(this.decorations, e, t, {
      point: (l, a, h, c, f, u) => {
        if (h instanceof Ee) {
          if (this.disallowBlockEffectsFor[u]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = c.length, f > c.length)
            n.continueWidget(a - l);
          else {
            let d = h.widget || (h.block ? Ge.block : Ge.inline), p = Ho(h), g = this.cache.findWidget(d, a - l, p) || Be.of(d, this.view, a - l, p);
            h.block ? (h.startSide > 0 && n.addLineStartIfNotCovered(i), n.addBlockWidget(g)) : (n.ensureLine(i), n.addInlineWidget(g, c, f));
          }
          i = null;
        } else
          i = Vo(i, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let f = l; f < a; ) {
          let u = this.text.next(Math.min(512, a - f));
          u == null ? (n.addLineStartIfNotCovered(i), n.addBreak(), f++) : (n.ensureLine(i), n.addText(u, h, f == l ? c : h.length), f += u.length), i = null;
        }
      }
    });
    n.addLineStartIfNotCovered(i), this.openWidget = o > r, this.openMarks = o;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let n = e.parentNode; ; n = n.parentNode) {
      let r = L.get(n);
      if (n == this.view.contentDOM)
        break;
      r instanceof G ? t.push(r) : r?.isLine() ? i = r : r instanceof de || (n.nodeName == "DIV" && !i && n != this.view.contentDOM ? i = new Ke(n, hr) : i || t.push(G.of(new pt({ tagName: n.nodeName.toLowerCase(), attributes: uo(n) }), n)));
    }
    return { line: i, marks: t };
  }
}
function Pn(s, e) {
  let t = (i) => {
    for (let n of i.children)
      if ((e ? n.isText() : n.length) || t(n))
        return !0;
    return !1;
  };
  return t(s);
}
function Ho(s) {
  let e = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (e |= 256), e;
}
const hr = { class: "cm-line" };
function Vo(s, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (s || (s = { class: "cm-line" }), t && tn(t, s), i && (s.class += " " + i)), s;
}
function zo(s) {
  let e = [];
  for (let t = s.parents.length; t > 1; t--) {
    let i = t == s.parents.length ? s.tile : s.parents[t].tile;
    i instanceof G && e.push(i.mark);
  }
  return e;
}
function ci(s) {
  let e = L.get(s);
  return e && e.setDOM(s.cloneNode()), s;
}
class Ge extends ei {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Ge.inline = /* @__PURE__ */ new Ge("span");
Ge.block = /* @__PURE__ */ new Ge("div");
const fi = /* @__PURE__ */ new class extends ei {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class In {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = W.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ni(e, e.contentDOM), this.updateInner([new J(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: f }) => f < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !Yo(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let r = n > -1 ? $o(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: f } = this.hasComposition;
      i = new J(c, f, e.changes.mapPos(c, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (x.ie || x.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = Go(o, this.decorations, e.changes);
    a.length && (i = J.extendWithRanges(i, a));
    let h = Uo(l, this.blockWrappers, e.changes);
    return h.length && (i = J.extendWithRanges(i, h)), r && !i.some((c) => c.fromA <= r.range.fromA && c.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new Fo(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && L.get(t.text) && l.cache.reused.set(
          L.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = l.run(e, t), Vi(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = x.chrome || x.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof ui && n.push(r.dom);
    i.updateGaps(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(nr) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, n = this.view.root.activeElement, r = n == i, o = !r && !(this.view.state.facet(he) || i.tabIndex > -1) && st(i, this.view.observer.selectionRange) && !(n && i.contains(n));
    if (!(r || t || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), x.gecko && a.empty && !this.hasComposition && qo(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null)), h = c = new Z(u, 0), l = !0;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!rt(h.node, h.offset, f.anchorNode, f.anchorOffset) || !rt(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      x.android && x.chrome && i.contains(f.focusNode) && Xo(f.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = ut(this.view.root);
      if (u) if (a.empty) {
        if (x.gecko) {
          let d = jo(h.node, h.offset);
          if (d && d != 3) {
            let p = (d == 1 ? zs : qs)(h.node, h.offset);
            p && (h = new Z(p.node, p.offset));
          }
        }
        u.collapse(h.node, h.offset), a.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = a.bidiLevel);
      } else if (u.extend) {
        u.collapse(h.node, h.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), d.setEnd(c.node, c.offset), d.setStart(h.node, h.offset), u.removeAllRanges(), u.addRange(d);
      }
      o && this.view.root.activeElement == i && (i.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Z(f.anchorNode, f.anchorOffset), this.impreciseHead = c.precise ? null : new Z(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && rt(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = ut(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(n, r);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let n = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (e == i.dom)
        r = i.dom.childNodes[t];
      else {
        let o = pe(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == i.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild)
        return n;
      for (; r && !L.get(r); )
        r = r.nextSibling;
      if (!r)
        return n + i.length;
      for (let o = 0, l = n; ; o++) {
        let a = i.children[o];
        if (a.dom == r)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? n + t : n + (t ? i.length : 0) : n;
  }
  domAtPos(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(n, t);
  }
  inlineDOMNearPos(e, t) {
    let i, n = -1, r = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e)
          return !0;
        h.flags & 16 && (r = !0);
      } else {
        let f = c + h.length;
        if (c <= e && (i = h, n = e - c, r = f < e), f >= e && !o && (o = h, l = e - c, a = c > e), c > e && o)
          return !0;
      }
    }), !i && !o ? this.domAtPos(e, t) : (r && o ? i = null : a && i && (o = null), i && t < 0 || !o ? i.domIn(n, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof ui ? null : i.coordsInWidget(n, t, !0) : i.coordsIn(n, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function n(r, o) {
      if (r.isComposite())
        for (let l of r.children) {
          if (l.length >= o) {
            let a = n(l, o);
            if (a)
              return a;
          }
          if (o -= l.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let l = re(r.text, o);
        if (l == o)
          return null;
        let a = dt(r.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return n(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == N.LTR, h = 0, c = (f, u, d) => {
      for (let p = 0; p < f.children.length && !(u > n); p++) {
        let g = f.children[p], m = u + g.length, b = g.dom.getBoundingClientRect(), { height: w } = b;
        if (d && !p && (h += b.top - d.top), g instanceof de)
          m > i && c(g, u, b);
        else if (u >= i && (h > 0 && t.push(-h), t.push(w + h), h = 0, o)) {
          let k = g.dom.lastChild, D = k ? Pt(k) : [];
          if (D.length) {
            let C = D[D.length - 1], v = a ? C.right - b.left : b.right - C.left;
            v > l && (l = v, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = m);
          }
        }
        d && p == f.children.length - 1 && (h += d.bottom - b.bottom), u = m + g.breakAfter;
      }
    };
    return c(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? N.RTL : N.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = Pt(h.dom);
          if (c.length != 1)
            return;
          l += c[0].width, a = c[0].height;
        }
        if (l)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, n, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Pt(t.firstChild)[0];
      i = t.getBoundingClientRect().height, n = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: n, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(W.replace({
          widget: new ui(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return W.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(ti).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(an).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(T.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(rr).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = c.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let c of this.view.state.facet(ir))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (f) {
        fe(this.view.state, f, "scroll handler");
      }
    let { range: i } = e, n = this.coordsAt(i.head, (t = i.assoc) !== null && t !== void 0 ? t : i.empty ? 0 : i.head > i.anchor ? -1 : 1), r;
    if (!n)
      return;
    !i.empty && (r = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let o = ar(this.view), l = {
      left: n.left - o.left,
      top: n.top - o.top,
      right: n.right + o.right,
      bottom: n.bottom + o.bottom
    }, { offsetWidth: a, offsetHeight: h } = this.view.scrollDOM;
    if (mo(this.view.scrollDOM, l, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, a), -a), Math.max(Math.min(e.yMargin, h), -h), this.view.textDirection == N.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let c = this.view.docView.lineAt(i.head, 1);
      c && c.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    Vi(this.tile);
  }
}
function Vi(s, e) {
  let t = e?.get(s);
  if (t != 1) {
    t == null && s.destroy();
    for (let i of s.children)
      Vi(i, e);
  }
}
function qo(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function cr(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = zs(t.focusNode, t.focusOffset), n = qs(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = L.get(n.node);
    if (!l || l.isText() && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = L.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function $o(s, e, t) {
  let i = cr(s, t);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || s.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc;
  return { range: new J(a.mapPos(r), a.mapPos(o), r, o), text: n };
}
function jo(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Ko = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    He(e, t, this.changes);
  }
  comparePoint(e, t) {
    He(e, t, this.changes);
  }
  boundChange(e) {
    He(e, e, this.changes);
  }
};
function Go(s, e, t) {
  let i = new Ko();
  return T.compare(s, e, t, i), i.changes;
}
class _o {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    He(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    He(e, e, this.changes);
  }
}
function Uo(s, e, t) {
  let i = new _o();
  return T.compare(s, e, t, i), i.changes;
}
function Xo(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Yo(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
class ui extends ei {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function Jo(s, e, t = 1) {
  let i = s.charCategorizer(e), n = s.doc.lineAt(e), r = e - n.from;
  if (n.length == 0)
    return y.cursor(e);
  r == 0 ? t = 1 : r == n.length && (t = -1);
  let o = r, l = r;
  t < 0 ? o = re(n.text, r, !1) : l = re(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = re(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = re(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return y.range(o + n.from, l + n.from);
}
function Qo(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(t.from, t.to);
  return t.from + oo(o, r, s.state.tabSize);
}
function zi(s, e, t) {
  let i = s.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!n || r.type == j.Text && (n.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (n = r);
      }
    }
    return n || i;
  }
  return i;
}
function Zo(s, e, t, i) {
  let n = zi(s, e.head, e.assoc || -1), r = !i || n.type != j.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: t == (l == N.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return y.cursor(a, t ? -1 : 1);
  }
  return y.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function Nn(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = To(n, r, o, l, t), c = _s;
    if (!h) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return l;
      c = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), h = s.visualLineSide(n, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function el(s, e, t) {
  let i = s.state.charCategorizer(e), n = i(t);
  return (r) => {
    let o = i(r);
    return n == ce.Space && (n = o), n == o;
  };
}
function tl(s, e, t, i) {
  let n = e.head, r = t ? 1 : -1;
  if (n == (t ? s.state.doc.length : 0))
    return y.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(n, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), c = s.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let p = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - p.from))), l = (r < 0 ? p.top : p.bottom) + c;
  }
  let f = a.left + o, u = s.viewState.heightOracle.textHeight >> 1, d = i ?? u;
  for (let p = 0; ; p += u) {
    let g = l + (d + p) * r, m = qi(s, { x: f, y: g }, !1, r);
    if (t ? g > a.bottom : g < a.top)
      return y.cursor(m.pos, m.assoc);
    let b = s.coordsAtPos(m.pos, m.assoc), w = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? w > l : w < l))
      return y.cursor(m.pos, m.assoc, void 0, o);
  }
}
function ot(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          e = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function fr(s, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let n = e.ranges[i], r = null;
    if (n.empty) {
      let o = ot(s, n.from, 0);
      o != n.from && (r = y.cursor(o, -1));
    } else {
      let o = ot(s, n.from, -1), l = ot(s, n.to, 1);
      (o != n.from || l != n.to) && (r = y.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function di(s, e, t) {
  let i = ot(s.state.facet(mt).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : y.cursor(i, i < t.from ? 1 : -1);
}
class se {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function qi(s, e, t, i) {
  let n = s.contentDOM.getBoundingClientRect(), r = n.top + s.viewState.paddingTop, { x: o, y: l } = e, a = l - r, h;
  for (; ; ) {
    if (a < 0)
      return new se(0, 1);
    if (a > s.viewState.docHeight)
      return new se(s.state.doc.length, -1);
    if (h = s.elementAtHeight(a), i == null)
      break;
    if (h.type == j.Text) {
      if (i < 0 ? h.to < s.viewport.from : h.from > s.viewport.to)
        break;
      let u = s.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= a + r : u.bottom >= a + r))
        break;
    }
    let f = s.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (s.viewport.from >= h.to || s.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == j.Text) {
      let f = Qo(s, n, h, o, l);
      return new se(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != j.Text)
    return a < (h.top + h.bottom) / 2 ? new se(h.from, 1) : new se(h.to, -1);
  let c = s.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = s.docView.lineAt(h.from, -2)), new il(s, o, l, s.textDirectionAt(h.from)).scanTile(c, h.from);
}
class il {
  constructor(e, t, i, n) {
    this.view = e, this.x = t, this.y = i, this.baseDir = n, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[oe.find(n, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: n } = this.bidiSpansAt(e);
    return n[oe.find(n, e - i.from, -1, t)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(e, t) {
    let { spans: i, line: n } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + n.from < t);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically and is closest horizontally. The caller is responsible
  // for dividing its content into N pieces, and pass an array with
  // N+1 positions (including the position after the last piece). For
  // a text tile, these will be character clusters, for a composite
  // tile, these will be child tiles.
  scan(e, t, i = !1) {
    let n = 0, r = e.length - 1, o = /* @__PURE__ */ new Set(), l = this.bidiIn(e[0], e[r]), a, h, c = -1, f = 1e9, u;
    e: for (; n < r; ) {
      let p = r - n, g = n + r >> 1;
      t: if (o.has(g)) {
        let b = n + Math.floor(Math.random() * p);
        for (let w = 0; w < p; w++) {
          if (!o.has(b)) {
            g = b;
            break t;
          }
          b++, b == r && (b = n);
        }
        break e;
      }
      o.add(g);
      let m = t(g);
      if (m)
        for (let b = 0; b < m.length; b++) {
          let w = m[b], k = 0;
          if (!(w.width == 0 && m.length > 1)) {
            if (w.bottom < this.y)
              (!a || a.bottom < w.bottom) && (a = w), k = 1;
            else if (w.top > this.y)
              (!h || h.top > w.top) && (h = w), k = -1;
            else {
              let D = w.left > this.x ? this.x - w.left : w.right < this.x ? this.x - w.right : 0, C = Math.abs(D);
              C < f && (c = g, f = C, u = w), D && (k = D < 0 == (this.baseDir == N.LTR) ? -1 : 1);
            }
            k == -1 && (!l || this.baseDirAt(e[g], 1)) ? r = g : k == 1 && (!l || this.baseDirAt(e[g + 1], -1)) && (n = g + 1);
          }
        }
    }
    if (!u) {
      if (!h && !a)
        return { i: e[0], after: !1 };
      let p = a && (!h || this.y - a.bottom < h.top - this.y) ? a : h;
      return this.y = (p.top + p.bottom) / 2, this.scan(e, t, !0);
    }
    if (f && !i) {
      let { top: p, bottom: g } = u;
      if (a && a.bottom > (p + p + g) / 3)
        return this.y = a.bottom - 1, this.scan(e, t, !0);
      if (h && h.top < (p + g + g) / 3)
        return this.y = h.top + 1, this.scan(e, t, !0);
    }
    let d = (l ? this.dirAt(e[c], 1) : this.baseDir) == N.LTR;
    return {
      i: c,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == d
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = re(e.text, r))
      i.push(t + r);
    i.push(t + e.length);
    let n = this.scan(i, (r) => {
      let o = i[r] - t, l = i[r + 1] - t;
      return dt(e.dom, o, l).getClientRects();
    });
    return n.after ? new se(i[n.i + 1], -1) : new se(i[n.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new se(t, 1);
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText())
        return this.scanText(l, t);
      if (l.isComposite())
        return this.scanTile(l, t);
    }
    let i = [t];
    for (let l = 0, a = t; l < e.children.length; l++)
      i.push(a += e.children[l].length);
    let n = this.scan(i, (l) => {
      let a = e.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : dt(a.dom, 0, a.length)).getClientRects();
    }), r = e.children[n.i], o = i[n.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : n.after ? new se(i[n.i + 1], -1) : new se(o, 1);
  }
}
const Ne = "￿";
class nl {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(E.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Ne;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = L.get(n), l = n.nextSibling;
      if (l == t) {
        o?.breakAfter && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = L.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : zt(n)) || zt(l) && (n.nodeName != "BR" || o?.isWidget()) && this.text.length > r) && !rl(l, t) && this.lineBreak(), n = l;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(t)) && (r = l.index, o = l[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    let t = L.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (sl(e, i.node, i.offset) ? t : 0));
  }
}
function sl(s, e, t) {
  for (; ; ) {
    if (!e || t < pe(e))
      return !1;
    if (e == s)
      return !0;
    t = we(e) + 1, e = e.parentNode;
  }
}
function rl(s, e) {
  let t;
  for (; !(s == e || !s); s = s.nextSibling) {
    let i = L.get(s);
    if (!i?.isWidget())
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let n = i.overrideDOMText;
      if (n?.length)
        return !1;
    }
  return !0;
}
class Wn {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class ol {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView, l = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = ur(e.docView.tile, t, i, 0))) {
      let a = r || o ? [] : al(e), h = new nl(a, e);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = hl(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange, h = r && r.node == a.focusNode && r.offset == a.focusOffset || !Ii(e.contentDOM, a.focusNode) ? l.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset), c = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !Ii(e.contentDOM, a.anchorNode) ? l.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset), f = e.viewport;
      if ((x.ios || x.chrome) && l.main.empty && h != c && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(h, c), d = Math.max(h, c), p = f.from - u, g = f.to - d;
        (p == 0 || p == 1 || u == 0) && (g == 0 || g == -1 || d == e.state.doc.length) && (h = 0, c = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && l.ranges.length > 1)
        this.newSel = l.replaceRange(y.range(c, h));
      else if (e.lineWrapping && c == h && !(l.main.empty && l.main.head == h) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(h, -1), d = 0;
        u && (d = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = y.create([y.cursor(h, d)]);
      } else
        this.newSel = y.single(c, h);
    }
  }
}
function ur(s, e, t, i) {
  if (s.isComposite()) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < s.children.length; a++) {
      let f = s.children[a], u = h + f.length;
      if (h < e && u > t)
        return ur(f, e, t, h);
      if (u >= e && n == -1 && (n = a, r = h), h > t && f.dom.parentNode == s.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + s.length : l,
      startDOM: (n ? s.children[n - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: o < s.children.length && o >= 0 ? s.children[o].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function dr(s, e) {
  let t, { newSel: i } = e, { state: n } = s, r = n.selection.main, o = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: a } = e.bounds, h = r.from, c = null;
    (o === 8 || x.android && e.text.length < a - l) && (h = r.to, c = "end");
    let f = n.doc.sliceString(l, a, Ne), u, d;
    !r.empty && r.from >= l && r.to <= a && (e.typeOver || f != e.text) && f.slice(0, r.from - l) == e.text.slice(0, r.from - l) && f.slice(r.to - l) == e.text.slice(u = e.text.length - (f.length - (r.to - l))) ? t = {
      from: r.from,
      to: r.to,
      insert: M.of(e.text.slice(r.from - l, u).split(Ne))
    } : (d = pr(f, e.text, h - l, c)) && (x.chrome && o == 13 && d.toB == d.from + 2 && e.text.slice(d.from, d.toB) == Ne + Ne && d.toB--, t = {
      from: l + d.from,
      to: l + d.toA,
      insert: M.of(e.text.slice(d.from, d.toB).split(Ne))
    });
  } else i && (!s.hasFocus && n.facet(he) || Gt(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((x.mac || x.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: M.of([t.insert.toString().replace(".", " ")]) }) : n.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: n.toText(s.inputState.insertingText)
  } : x.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: M.of([" "]) }), t)
    return hn(s, t, i, o);
  if (i && !Gt(i, r)) {
    let l = !1, a = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (l = !0), a = s.inputState.lastSelectionOrigin, a == "select.pointer" && (i = fr(n.facet(mt).map((h) => h(s)), i))), s.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function hn(s, e, t, i = -1) {
  if (x.ios && s.inputState.flushIOSKey(e))
    return !0;
  let n = s.state.selection.main;
  if (x.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && s.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Ve(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && Ve(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Ve(s.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, l = () => o || (o = ll(s, e, t));
  return s.state.facet(Qs).some((a) => a(s, e.from, e.to, r, l)) || s.dispatch(l()), !0;
}
function ll(s, e, t) {
  let i, n = s.state, r = n.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let a = e.from < r.from ? -1 : 1, h = a < 0 ? r.from : r.to, c = ot(n.facet(mt).map((f) => f(s)), h, a);
    e.from == c && (o = c);
  }
  if (o > -1)
    i = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let a = r.from < e.from ? n.sliceDoc(r.from, e.from) : "", h = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(a + e.insert.sliceString(0, void 0, s.state.lineBreak) + h));
  } else {
    let a = n.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let c = s.state.sliceDoc(e.from, e.to), f, u = t && cr(s, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        f = { from: u.from, to: u.to - p };
      } else
        f = s.state.doc.lineAt(r.head);
      let d = r.to - e.to;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: a, range: h || p.map(a) };
        let g = p.to - d, m = g - c.length;
        if (s.state.sliceDoc(m, g) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= f.from && m <= f.to)
          return { range: p };
        let b = n.changes({ from: m, to: g, insert: e.insert }), w = p.to - r.to;
        return {
          changes: b,
          range: h ? y.range(Math.max(0, h.anchor + w), Math.max(0, h.head + w)) : p.map(b)
        };
      });
    } else
      i = {
        changes: a,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, l += ".compose", s.inputState.compositionFirstChange && (l += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: l, scrollIntoView: !0 });
}
function pr(s, e, t, i) {
  let n = Math.min(s.length, e.length), r = 0;
  for (; r < n && s.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == n && s.length == e.length)
    return null;
  let o = s.length, l = e.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && s.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function al(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return t && (e.push(new Wn(t, i)), (n != t || r != i) && e.push(new Wn(n, r))), e;
}
function hl(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null;
}
function Gt(s, e) {
  return e.head == s.main.head && e.anchor == s.main.anchor;
}
class cl {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, x.safari && e.contentDOM.addEventListener("input", () => null), x.gecko && Al(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !xl(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = fl(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && mr.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), x.android && x.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return x.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = gr.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || ul.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ve(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : x.safari && !x.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Fn(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      fe(t.state, n);
    }
  };
}
function fl(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec, r = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (r)
      for (let l in r) {
        let a = r[l];
        a && t(l).handlers.push(Fn(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Fn(i.value, a));
      }
  }
  for (let i in ee)
    t(i).handlers.push(ee[i]);
  for (let i in _)
    t(i).observers.push(_[i]);
  return e;
}
const gr = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], ul = "dthko", mr = [16, 17, 18, 20, 91, 92, 224, 225], Ct = 6;
function At(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function dl(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class pl {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Fs(e.contentDOM), this.atoms = e.state.facet(mt).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(E.allowMultipleSelections) && gl(e, t), this.dragging = bl(e, t) && yr(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && dl(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = ar(this.view);
    e.clientX - a.left <= n + Ct ? t = -At(n - e.clientX) : e.clientX + a.right >= o - Ct && (t = At(e.clientX - o)), e.clientY - a.top <= r + Ct ? i = -At(r - e.clientY) : e.clientY + a.bottom >= l - Ct && (i = At(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = fr(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function gl(s, e) {
  let t = s.state.facet(Us);
  return t.length ? t[0](e) : x.mac ? e.metaKey : e.ctrlKey;
}
function ml(s, e) {
  let t = s.state.facet(Xs);
  return t.length ? t[0](e) : x.mac ? !e.altKey : !e.ctrlKey;
}
function bl(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = ut(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function xl(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = L.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const ee = /* @__PURE__ */ Object.create(null), _ = /* @__PURE__ */ Object.create(null), br = x.ie && x.ie_version < 15 || x.ios && x.webkit_version < 604;
function yl(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), xr(s, t.value);
  }, 50);
}
function si(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function xr(s, e) {
  e = si(s.state, rn, e);
  let { state: t } = s, i, n = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if ($i != null && t.selection.ranges.every((a) => a.empty) && $i == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: y.cursor(h.from + f.length)
      };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = r.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: y.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
_.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
_.wheel = _.mousewheel = (s) => {
  s.inputState.lastWheelEvent = Date.now();
};
ee.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
_.touchstart = (s, e) => {
  let t = s.inputState, i = e.targetTouches[0];
  t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
_.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
ee.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(Ys))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = vl(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new pl(s, e, t, i)), i && s.observer.ignore(() => {
      Hs(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  } else
    s.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Hn(s, e, t, i) {
  if (i == 1)
    return y.cursor(e, t);
  if (i == 2)
    return Jo(s.state, e, t);
  {
    let n = s.docView.lineAt(e, t), r = s.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, y.range(o, l);
  }
}
const wl = x.ie && x.ie_version <= 11;
let Vn = null, zn = 0, qn = 0;
function yr(s) {
  if (!wl)
    return s.detail;
  let e = Vn, t = qn;
  return Vn = s, qn = Date.now(), zn = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (zn + 1) % 3 : 1;
}
function vl(s, e) {
  let t = s.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = yr(e), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = s.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), h, c = Hn(s, a.pos, a.assoc, i);
      if (t.pos != a.pos && !o) {
        let f = Hn(s, t.pos, t.assoc, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? y.range(u, d, c.assoc) : y.range(d, u, c.assoc);
      }
      return o ? n.replaceRange(n.main.extend(c.from, c.to, c.assoc)) : l && i == 1 && n.ranges.length > 1 && (h = Sl(n, a.pos)) ? h : l ? n.addRange(c) : y.create([c]);
    }
  };
}
function Sl(s, e) {
  for (let t = 0; t < s.ranges.length; t++) {
    let { from: i, to: n } = s.ranges[t];
    if (i <= e && n >= e)
      return y.create(s.ranges.slice(0, t).concat(s.ranges.slice(t + 1)), s.mainIndex == t ? 0 : s.mainIndex - (s.mainIndex > t ? 1 : 0));
  }
  return null;
}
ee.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let n = s.docView.tile.nearest(e.target);
    if (n && n.isWidget()) {
      let r = n.posAtStart, o = r + n.length;
      (r >= t.to || o <= t.from) && (t = y.range(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", si(s.state, on, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
ee.dragend = (s) => (s.inputState.draggedContent = null, !1);
function $n(s, e, t, i) {
  if (t = si(s.state, rn, t), !t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && ml(s, e) ? { from: r.from, to: r.to } : null, l = { from: n, insert: t }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
ee.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, r = () => {
      ++n == t.length && $n(s, e, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return $n(s, e, i, !0), !0;
  }
  return !1;
};
ee.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = br ? null : e.clipboardData;
  return t ? (xr(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (yl(s), !1);
};
function kl(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Cl(s) {
  let e = [], t = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (e.push(s.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (e.push(o.text), t.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: si(s, on, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let $i = null;
ee.copy = ee.cut = (s, e) => {
  if (!st(s.contentDOM, s.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: n } = Cl(s.state);
  if (!t && !n)
    return !1;
  $i = n ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = br ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (kl(s, t), !1);
};
const wr = /* @__PURE__ */ Ye.define();
function vr(s, e) {
  let t = [];
  for (let i of s.facet(Zs)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t.length ? s.update({ effects: t, annotations: wr.of(!0) }) : null;
}
function Sr(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = vr(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
_.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Sr(s);
};
_.blur = (s) => {
  s.observer.clearSelectionRange(), Sr(s);
};
_.compositionstart = _.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
_.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, x.chrome && x.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
_.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
ee.beforeinput = (s, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (s.inputState.insertingText = e.data, s.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = s.posAtDOM(l.startContainer, l.startOffset), h = s.posAtDOM(l.endContainer, l.endOffset);
      return hn(s, { from: a, to: h, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (x.chrome && x.android && (n = gr.find((r) => r.inputType == e.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return x.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), x.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => _.compositionend(s, e), 20), !1;
};
const jn = /* @__PURE__ */ new Set();
function Al(s) {
  jn.has(s) || (jn.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const Kn = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let _e = !1;
function Gn() {
  _e = !1;
}
class Ml {
  constructor(e) {
    this.lineWrapping = e, this.doc = M.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Kn.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, r, o) {
    let l = Kn.indexOf(e) > -1, a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Tl {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Q {
  /**
  @internal
  */
  constructor(e, t, i, n, r) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? j.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof Ee ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Q(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var O = /* @__PURE__ */ (function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
})(O || (O = {}));
const It = 1e-3;
class K {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > It && (_e = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return K.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = n[l], u = r.lineAt(a, O.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : r.lineAt(h, O.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, c = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, O.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = cn.build(i.setDoc(o), e, c, f);
      r = _t(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new U(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, n = 0, r = 0;
    for (; ; )
      if (t == i)
        if (n > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new Ol(K.of(e.slice(0, t)), o, K.of(e.slice(i)));
  }
}
function _t(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (_e = !0), e);
}
K.prototype.size = 1;
const Rl = /* @__PURE__ */ W.replace({});
class kr extends K {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Q(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, n) {
    return this.spaceAbove && e < i + this.spaceAbove ? new Q(n, 0, i, this.spaceAbove, Rl) : this.mainBlock(i, n);
  }
  lineAt(e, t, i, n, r) {
    let o = this.mainBlock(n, r);
    return this.spaceAbove ? this.blockAt(0, i, n, r).join(o) : o;
  }
  forEachLine(e, t, i, n, r, o) {
    e <= r + this.length && t >= r && o(this.lineAt(0, O.ByPos, i, n, r));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setMeasuredHeight(n), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class U extends kr {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new Q(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof U || n instanceof H && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof H ? n = new U(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : K.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setMeasuredHeight(n) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class H extends K {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, r = n - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new Q(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(r + h);
      return new Q(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == O.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == O.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Q(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - o, u = n + l * f + a * (h.from - r - f);
    return new Q(h.from, h.length, Math.max(n, Math.min(u, n + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, n, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = n; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Q(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof H ? i[i.length - 1] = new H(r.length + n) : i.push(null, new H(n - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof H ? i[0] = new H(e + r.length) : i.unshift(new H(e - 1), null);
    }
    return K.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new H(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new H(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new H(n.from - t - 1).updateHeight(e, t)); l <= r && n.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = n.heights[n.index++], u = 0;
        f < 0 && (u = -f, f = n.heights[n.index++]), a == -1 ? a = f : Math.abs(f - a) >= It && (a = -2);
        let d = new U(c, f, u);
        d.outdated = !1, o.push(d), l += c + 1;
      }
      l <= r && o.push(null, new H(r - l).updateHeight(e, l));
      let h = K.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= It || Math.abs(a - this.heightMetrics(e, t).perLine) >= It) && (_e = !0), _t(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Ol extends K {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, n) {
    let r = i + this.left.height;
    return e < r ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, r, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = t == O.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == O.ByPosNoHeight ? O.ByPosNoHeight : O.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, n, r).join(h);
  }
  forEachLine(e, t, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, n, r, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, O.ByPos, i, n, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, n, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (e > 0 && _n(r, o - 1), t < this.length) {
      let l = r.length;
      this.decomposeRight(t, r), _n(r, l);
    }
    return K.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? K.of(this.break ? [e, null, t] : [e, t]) : (this.left = _t(this.left, e), this.right = _t(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: o } = this, l = t + r.length + this.break, a = null;
    return n && n.from <= t + r.length && n.more ? a = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function _n(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof H && (i = s[e + 1]) instanceof H && s.splice(e - 1, 3, new H(t.length + 1 + i.length));
}
const El = 5;
class cn {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof U ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new U(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new kr(o, n, i)) : (o || r || n >= El) && this.addLineDeco(n, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new U(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new H(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof U)
      return e;
    let t = new U(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof U) && !this.isCovered ? this.nodes.push(new U(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof U && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let r = new cn(i, e);
    return T.spans(t, i, n, r, 0), r.finish(i);
  }
}
function Dl(s, e, t) {
  let i = new Bl();
  return T.compare(s, e, t, i, 0), i.changes;
}
class Bl {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && He(e, t, this.changes, 5);
  }
}
function Ll(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == s.parentNode ? n.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
function Pl(s) {
  let e = s.getBoundingClientRect(), t = s.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Il(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class pi {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.size = i, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], r = t[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return W.replace({
      widget: new Nl(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Nl extends ei {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Un {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Xn, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = N.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet(ln).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Ml(i), this.stateDeco = Yn(t), this.heightMap = K.empty().applyChanges(this.stateDeco, M.empty, this.heightOracle.setDoc(t.doc), [new J(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = W.set(this.lineGaps.map((n) => n.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        e.push(new Mt(r, o));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Xn : new fn(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(tt(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = Yn(this.state);
    let n = e.changedRanges, r = J.extendWithRanges(n, Dl(i, this.stateDeco, e ? e.changes : F.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    Gn(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || _e) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(tr) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? N.RTL : N.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: C, scaleY: v } = Ws(t, l);
      (C > 5e-3 && Math.abs(this.scaleX - C) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = C, this.scaleY = v, h |= 16, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = Fs(this.view.contentDOM, !1).y;
    d != this.scrollParent && (this.scrollParent = d, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Vs(this.scrollParent || e.win);
    let g = (this.printing ? Il : Ll)(t, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let w = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (w != this.inView && (this.inView = w, w && (a = !0)), !this.inView && !this.scrollTarget && !Pl(e.dom))
      return 0;
    let k = l.width;
    if ((this.contentDOMWidth != k || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let C = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(C) && (o = !0), o || n.lineWrapping && Math.abs(k - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: v, charWidth: B, textHeight: te } = e.docView.measureTextSize();
        o = v > 0 && n.refresh(r, v, B, te, Math.max(5, k / B), C), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && b > 0 ? c = Math.max(m, b) : m < 0 && b < 0 && (c = Math.min(m, b)), Gn();
      for (let v of this.viewports) {
        let B = v.from == this.viewport.from ? C : e.docView.measureVisibleLineHeights(v);
        this.heightMap = (o ? K.empty().applyChanges(this.stateDeco, M.empty, this.heightOracle, [new J(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Tl(v.from, B));
      }
      _e && (h |= 2);
    }
    let D = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return D && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || D) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Mt(n.lineAt(o - i * 1e3, O.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, O.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = n.lineAt(h, O.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new Mt(n.lineAt(u - 1e3 / 2, O.ByHeight, r, 0, 0).from, n.lineAt(u + c + 1e3 / 2, O.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Mt(this.heightMap.lineAt(i, O.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, O.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, O.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, O.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new pi(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != N.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let b of g)
        if (b > c && b < f) {
          a(c, b - 10, u, d), a(b + 10, f, u, d);
          return;
        }
      let m = Fl(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - c) < r && Math.abs(b.to - f) < r && !g.some((w) => b.from < w && b.to > w));
      if (!m) {
        if (f < u.to && t && i && t.visibleRanges.some((k) => k.from <= f && k.to >= f)) {
          let k = t.moveToLineBoundary(y.cursor(f), !1, !0).head;
          k > c && (f = k);
        }
        let b = this.gapSize(u, c, f, d), w = i || b < 2e6 ? b : 2e6;
        m = new pi(c, f, b, w);
      }
      l.push(m);
    }, h = (c) => {
      if (c.length < o || c.type != j.Text)
        return;
      let f = Wl(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (u != null) {
          let w = Rt(f, u), k = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = w - k, b = w + k;
        } else
          m = (this.visibleTop - c.top - g) / c.height, b = (this.visibleBottom - c.top + g) / c.height;
        d = Tt(f, m), p = Tt(f, b);
      } else {
        let g = f.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let v of e)
            v.from >= c.from && v.from < c.to && v.size != v.displaySize && v.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = v.size - v.displaySize);
        let w = this.pixelViewport.left + b, k = this.pixelViewport.right + b, D, C;
        if (u != null) {
          let v = Rt(f, u), B = ((k - w) / 2 + m) / g;
          D = v - B, C = v + B;
        } else
          D = (w - m) / g, C = (k + m) / g;
        d = Tt(f, D), p = Tt(f, C);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, n) {
    let r = Rt(n, i) - Rt(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    pi.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = W.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    T.spans(t, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (n |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || tt(this.heightMap.lineAt(e, O.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || tt(this.heightMap.lineAt(this.scaler.fromDOM(e), O.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return tt(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Mt {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Wl(s, e, t) {
  let i = [], n = s, r = 0;
  return T.spans(t, s, e, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function Tt({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = e[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Rt(s, e) {
  let t = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / s.total;
}
function Fl(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const Xn = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
function Yn(s) {
  let e = s.facet(ti).filter((i) => typeof i != "function"), t = s.facet(an).filter((i) => typeof i != "function");
  return t.length && e.push(T.join(t)), e;
}
class fn {
  constructor(e, t, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, O.ByPos, e, 0, 0).top, c = t.lineAt(a, O.ByPos, e, 0, 0).bottom;
      return n += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top)
        return n + (e - i) * this.scale;
      if (e <= r.bottom)
        return r.domTop + (e - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop)
        return i + (e - n) / this.scale;
      if (e <= r.domBottom)
        return r.top + (e - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(e) {
    return e instanceof fn ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function tt(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new Q(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => tt(n, e)) : s._content);
}
const Ot = /* @__PURE__ */ S.define({ combine: (s) => s.join(" ") }), ji = /* @__PURE__ */ S.define({ combine: (s) => s.indexOf(!0) > -1 }), Ki = /* @__PURE__ */ $e.newName(), Cr = /* @__PURE__ */ $e.newName(), Ar = /* @__PURE__ */ $e.newName(), Mr = { "&light": "." + Cr, "&dark": "." + Ar };
function Gi(s, e, t) {
  return new $e(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : s + " " + i;
    }
  });
}
const Hl = /* @__PURE__ */ Gi("." + Ki, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    userSelect: "none",
    // #1708
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Mr), Vl = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, gi = x.ie && x.ie_version <= 11;
class zl {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new bo(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (x.ie && x.ie_version <= 11 || x.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && x.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(x.chrome && x.chrome_version < 126) && (this.editContext = new $l(e), e.state.facet(he) && (e.contentDOM.editContext = this.editContext.editContext)), gi && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(he) ? i.root.activeElement != this.dom : !st(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.tile.nearest(n.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (x.ie && x.ie_version <= 11 || x.android && x.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && rt(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ut(e.root);
    if (!t)
      return !1;
    let i = x.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && ql(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = st(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && yo(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, Vl), gi && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), gi && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Ve(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, n = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o && (o.typeOver && (n = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && st(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new ol(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = dr(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !Gt(this.view.state.selection, t.newSel.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Jn(t, e.previousSibling || e.target.previousSibling, -1), n = Jn(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(he) != e.state.facet(he) && (e.view.contentDOM.editContext = e.state.facet(he) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Jn(s, e, t) {
  for (; e; ) {
    let i = L.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Qn(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return rt(o.node, o.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
function ql(s, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(s.root)[0];
    if (n)
      return Qn(s, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? Qn(s, t) : null;
}
class $l {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = e.state.selection.main, { anchor: r, head: o } = n, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > i.text.length;
      l == this.from && r < this.from ? l = r : a == this.to && r > this.to && (a = r);
      let c = pr(e.state.sliceDoc(l, a), i.text, (h ? n.from : n.to) - l, h ? "end" : null);
      if (!c) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Gt(u, n) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let f = {
        from: c.from + l,
        to: c.toA + l,
        insert: M.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if ((x.mac || x.android) && f.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: M.of([i.text.replace(".", " ")]) }), this.pendingContextChange = f, !e.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        hn(e, f, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), f.from < f.to && !f.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), n.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            n.push(W.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: nr.of(W.set(n)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let n = ut(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((r, o, l, a, h) => {
      if (i)
        return;
      let c = h.length - (o - r);
      if (n && o >= n.to)
        if (n.from == r && n.to == o && n.insert.eq(h)) {
          n = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (r += t, o += t, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      t += c;
    }), n && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class A {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || xo(e.parent) || document, this.viewState = new Un(this, e.state || E.create(e)), e.scrollTo && e.scrollTo.is(kt) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(We).map((n) => new hi(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new zl(this), this.inputState = new cl(this), this.inputState.ensureHandlers(this.plugins), this.docView = new In(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof q ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, n, r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(wr)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = vr(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(E.phrases) != this.state.facet(E.phrases))
      return this.setState(r);
    n = $t.create(this, r, e), n.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection, { x: p, y: g } = this.state.facet(A.cursorScrollMargin);
          f = new ze(d.empty ? d : y.cursor(d.head, d.head > d.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let d of u.effects)
          d.is(kt) && (f = d.value.clip(this.state));
      }
      this.viewState.update(n, f), this.bidiCache = Ut.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(et) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Ot) != n.state.facet(Ot) && (this.viewState.mustMeasureContent = !0), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(Hi))
        try {
          u(n);
        } catch (d) {
          fe(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !dr(this, c) && h.force && Ve(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Un(this, e), this.plugins = e.facet(We).map((i) => new hi(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new In(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(We), i = e.state.facet(We);
    if (t != i) {
      let n = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0)
          n.push(new hi(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != e && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          fe(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.viewState.scrollParent, n = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Vs(i || this.win))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure();
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return fe(this.state, p), Zn;
          }
        }), f = $t.create(this, this.state, []), u = !1;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != Zn)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              fe(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o) / this.scaleY;
              if ((p > 1 || p < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                n = n + p, i ? i.scrollTop += p : this.win.scrollBy(0, p), o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(Hi))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Ki + " " + (this.state.facet(ji) ? Ar : Cr) + " " + this.state.facet(Ot);
  }
  updateAttrs() {
    let e = es(this, sr, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(he) ? "true" : "false",
      class: "cm-content",
      style: `${x.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), es(this, ln, t);
    let i = this.observer.ignore(() => {
      let n = On(this.contentDOM, this.contentAttrs, t), r = On(this.dom, this.editorAttrs, e);
      return n || r;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        if (n.is(A.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(et);
    let e = this.state.facet(A.cspNonce);
    $e.mount(this.root, this.styleModules.concat(Hl).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return di(this, e, Nn(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return di(this, e, Nn(this, e, t, (i) => el(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), r = i[t ? i.length - 1 : 0];
    return y.cursor(r.side(t, n) + e.from, r.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return Zo(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return di(this, e, tl(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let i = qi(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), qi(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(e), r = this.bidiSpans(n), o = r[oe.find(r, e - n.from, -1, t)];
    return qt(i, o.dir == N.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(er) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > jl)
      return Gs(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Ks(r.isolates, i = Bn(this, e))))
        return r.order;
    i || (i = Bn(this, e));
    let n = Mo(e.text, t, i);
    return this.bidiCache.push(new Ut(e.from, e.to, t, i, !0, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || x.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Hs(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    var i, n, r, o;
    return kt.of(new ze(typeof e == "number" ? y.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (n = t.x) !== null && n !== void 0 ? n : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (o = t.xMargin) !== null && o !== void 0 ? o : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return kt.of(new ze(y.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return je.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return je.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = $e.newName(), n = [Ot.of(i), et.of(Gi(`.${i}`, e))];
    return t && t.dark && n.push(ji.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Qi.lowest(et.of(Gi("." + Ki, e, Mr)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && L.get(i) || L.get(e);
    return ((t = n?.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
A.styleModule = et;
A.inputHandler = Qs;
A.clipboardInputFilter = rn;
A.clipboardOutputFilter = on;
A.scrollHandler = ir;
A.focusChangeEffect = Zs;
A.perLineTextDirection = er;
A.exceptionSink = Js;
A.updateListener = Hi;
A.editable = he;
A.mouseSelectionStyle = Ys;
A.dragMovesSelection = Xs;
A.clickAddsSelectionRange = Us;
A.decorations = ti;
A.blockWrappers = rr;
A.outerDecorations = an;
A.atomicRanges = mt;
A.bidiIsolatedRanges = or;
A.cursorScrollMargin = /* @__PURE__ */ S.define({
  combine: (s) => {
    let e = 5, t = 5;
    for (let i of s)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
A.scrollMargins = lr;
A.darkTheme = ji;
A.cspNonce = /* @__PURE__ */ S.define({ combine: (s) => s.length ? s[0] : "" });
A.contentAttributes = ln;
A.editorAttributes = sr;
A.lineWrapping = /* @__PURE__ */ A.contentAttributes.of({ class: "cm-lineWrapping" });
A.announce = /* @__PURE__ */ I.define();
const jl = 4096, Zn = {};
class Ut {
  constructor(e, t, i, n, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : N.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new Ut(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function es(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && tn(o, t);
  }
  return t;
}
const Kl = x.mac ? "mac" : x.windows ? "win" : x.linux ? "linux" : "key";
function Gl(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Et(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const _l = /* @__PURE__ */ Qi.default(/* @__PURE__ */ A.domEventHandlers({
  keydown(s, e) {
    return Jl(Ul(e.state), s, e, "editor");
  }
})), Tr = /* @__PURE__ */ S.define({ enables: _l }), ts = /* @__PURE__ */ new WeakMap();
function Ul(s) {
  let e = s.facet(Tr), t = ts.get(e);
  return t || ts.set(e, t = Yl(e.reduce((i, n) => i.concat(n), []))), t;
}
let be = null;
const Xl = 4e3;
function Yl(s, e = Kl) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => Gl(b, e));
    for (let b = 1; b < p.length; b++) {
      let w = p.slice(0, b).join(" ");
      n(w, !0), d[w] || (d[w] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(k) => {
          let D = be = { view: k, prefix: w, scope: o };
          return setTimeout(() => {
            be == D && (be = null);
          }, Xl), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = d[g] || (d[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && m.run.push(a), h && (m.preventDefault = !0), c && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, _i));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let _i = null;
function Jl(s, e, t, i) {
  _i = e;
  let n = co(e), r = Kr(n, 0), o = Gr(r) == n.length && n != " ", l = "", a = !1, h = !1, c = !1;
  be && be.view == t && be.scope == i && (l = be.prefix + " ", mr.indexOf(e.keyCode) < 0 && (h = !0, be = null));
  let f = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let b of m.run)
        if (!f.has(b) && (f.add(b), b(t)))
          return m.stopPropagation && (c = !0), !0;
      m.preventDefault && (m.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = s[i], p, g;
  return d && (u(d[l + Et(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(x.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(x.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = ye[e.keyCode]) && p != n ? (u(d[l + Et(p, e, !0)]) || e.shiftKey && (g = ct[e.keyCode]) != n && g != p && u(d[l + Et(g, e, !1)])) && (a = !0) : o && e.shiftKey && u(d[l + Et(n, e, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && e.stopPropagation(), _i = null, a;
}
class Re {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(e, t, i, n, r) {
    this.className = e, this.left = t, this.top = i, this.width = n, this.height = r;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(e, t, i) {
    if (i.empty) {
      let n = e.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = Rr(e);
      return [new Re(t, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return Ql(e, t, i);
  }
}
function Rr(s) {
  let e = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == N.LTR ? e.left : e.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: e.top - s.scrollDOM.scrollTop * s.scaleY };
}
function is(s, e, t, i) {
  let n = s.coordsAtPos(e, t * 2);
  if (!n)
    return i;
  let r = s.dom.getBoundingClientRect(), o = (n.top + n.bottom) / 2, l = s.posAtCoords({ x: r.left + 1, y: o }), a = s.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function Ql(s, e, t) {
  if (t.to <= s.viewport.from || t.from >= s.viewport.to)
    return [];
  let i = Math.max(t.from, s.viewport.from), n = Math.min(t.to, s.viewport.to), r = s.textDirection == N.LTR, o = s.contentDOM, l = o.getBoundingClientRect(), a = Rr(s), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = zi(s, i, 1), p = zi(s, n, -1), g = d.type == j.Text ? d : null, m = p.type == j.Text ? p : null;
  if (g && (s.lineWrapping || d.widgetLineBreaks) && (g = is(s, i, 1, g)), m && (s.lineWrapping || p.widgetLineBreaks) && (m = is(s, n, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return w(k(t.from, t.to, g));
  {
    let C = g ? k(t.from, null, g) : D(d, !1), v = m ? k(null, t.to, m) : D(p, !0), B = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && C.bottom + s.defaultLineHeight / 2 < v.top ? B.push(b(f, C.bottom, u, v.top)) : C.bottom < v.top && s.elementAtHeight((C.bottom + v.top) / 2).type == j.Text && (C.bottom = v.top = (C.bottom + v.top) / 2), w(C).concat(B).concat(w(v));
  }
  function b(C, v, B, te) {
    return new Re(e, C - a.left, v - a.top, Math.max(0, B - C), te - v);
  }
  function w({ top: C, bottom: v, horizontal: B }) {
    let te = [];
    for (let ge = 0; ge < B.length; ge += 2)
      te.push(b(B[ge], C, B[ge + 1], v));
    return te;
  }
  function k(C, v, B) {
    let te = 1e9, ge = -1e9, bt = [];
    function pn(Se, me, Le, ke, Je) {
      let le = s.coordsAtPos(Se, Se == B.to ? -2 : 2), ae = s.coordsAtPos(Le, Le == B.from ? 2 : -2);
      !le || !ae || (te = Math.min(le.top, ae.top, te), ge = Math.max(le.bottom, ae.bottom, ge), Je == N.LTR ? bt.push(r && me ? f : le.left, r && ke ? u : ae.right) : bt.push(!r && ke ? f : ae.left, !r && me ? u : le.right));
    }
    let xt = C ?? B.from, yt = v ?? B.to;
    for (let Se of s.visibleRanges)
      if (Se.to > xt && Se.from < yt)
        for (let me = Math.max(Se.from, xt), Le = Math.min(Se.to, yt); ; ) {
          let ke = s.state.doc.lineAt(me);
          for (let Je of s.bidiSpans(ke)) {
            let le = Je.from + ke.from, ae = Je.to + ke.from;
            if (le >= Le)
              break;
            ae > me && pn(Math.max(le, me), C == null && le <= xt, Math.min(ae, Le), v == null && ae >= yt, Je.dir);
          }
          if (me = ke.to + 1, me >= Le)
            break;
        }
    return bt.length == 0 && pn(xt, C == null, yt, v == null, s.textDirection), { top: te, bottom: ge, horizontal: bt };
  }
  function D(C, v) {
    let B = l.top + (v ? C.top : C.bottom);
    return { top: B, bottom: B, horizontal: [] };
  }
}
function Zl(s, e) {
  return s.constructor == e.constructor && s.eq(e);
}
class ea {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Nt) != e.state.facet(Nt) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Nt);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Zl(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let n of e)
        n.update && t && n.constructor && this.drawn[i].constructor && n.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(n.draw(), t);
      for (; t; ) {
        let n = t.nextSibling;
        t.remove(), t = n;
      }
      this.drawn = e, x.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Nt = /* @__PURE__ */ S.define();
function Or(s) {
  return [
    je.define((e) => new ea(e, s)),
    Nt.of(s)
  ];
}
const Ue = /* @__PURE__ */ S.define({
  combine(s) {
    return so(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function ta(s = {}) {
  return [
    Ue.of(s),
    ia,
    na,
    sa,
    tr.of(!0)
  ];
}
function Er(s) {
  return s.startState.facet(Ue) != s.state.facet(Ue);
}
const ia = /* @__PURE__ */ Or({
  above: !0,
  markers(s) {
    let { state: e } = s, t = e.facet(Ue), i = [];
    for (let n of e.selection.ranges) {
      let r = n == e.selection.main;
      if (n.empty || t.drawRangeCursor && !(r && x.ios && t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = n.empty ? n : y.cursor(n.head, n.assoc);
        for (let a of Re.forRange(s, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(s, e) {
    s.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Er(s);
    return t && ns(s.state, e), s.docChanged || s.selectionSet || t;
  },
  mount(s, e) {
    ns(e.state, s);
  },
  class: "cm-cursorLayer"
});
function ns(s, e) {
  e.style.animationDuration = s.facet(Ue).cursorBlinkRate + "ms";
}
const na = /* @__PURE__ */ Or({
  above: !1,
  markers(s) {
    let e = [], { main: t, ranges: i } = s.state.selection;
    for (let n of i)
      if (!n.empty)
        for (let r of Re.forRange(s, "cm-selectionBackground", n))
          e.push(r);
    if (x.ios && !t.empty && s.state.facet(Ue).iosSelectionHandles) {
      for (let n of Re.forRange(s, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1)))
        e.push(n);
      for (let n of Re.forRange(s, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1)))
        e.push(n);
    }
    return e;
  },
  update(s, e) {
    return s.docChanged || s.selectionSet || s.viewportChanged || Er(s);
  },
  class: "cm-selectionLayer"
}), sa = /* @__PURE__ */ Qi.highest(/* @__PURE__ */ A.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
}));
class Xe extends Oe {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
Xe.prototype.elementClass = "";
Xe.prototype.toDOM = void 0;
Xe.prototype.mapMode = X.TrackBefore;
Xe.prototype.startSide = Xe.prototype.endSide = -1;
Xe.prototype.point = !0;
const ss = Object.freeze({
  logo: "./assets/brand/logo.svg",
  mark: "./assets/brand/mark.svg"
}), Y = Object.freeze({
  surface: "#0d0f12",
  panel: "#12161c",
  panelRaised: "#151a22",
  line: "#29313d",
  lineStrong: "#3a4656",
  text: "#e8edf2",
  muted: "#9aa6b6",
  gold: "#e8b84a",
  blue: "#78a7ff",
  green: "#83d7aa",
  violet: "#b08cff",
  red: "#ff8ca3"
});
function ra() {
  return `
    :host {
      color-scheme: dark;
      --rasa-surface: ${Y.surface};
      --rasa-panel: ${Y.panel};
      --rasa-panel-raised: ${Y.panelRaised};
      --rasa-line: ${Y.line};
      --rasa-line-strong: ${Y.lineStrong};
      --rasa-text: ${Y.text};
      --rasa-muted: ${Y.muted};
      --rasa-gold: ${Y.gold};
      --rasa-blue: ${Y.blue};
      --rasa-green: ${Y.green};
      --rasa-violet: ${Y.violet};
      --rasa-red: ${Y.red};
      font-family:
        Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    }
  `;
}
function oa() {
  return `
    ${ra()}

    .topbar {
      align-items: center;
      background: linear-gradient(180deg, #151a22 0%, #11161d 100%);
      border: 1px solid var(--rasa-line);
      border-radius: 8px;
      box-shadow: 0 16px 60px rgba(0, 0, 0, 0.18);
      box-sizing: border-box;
      display: flex;
      gap: 18px;
      justify-content: space-between;
      min-height: 72px;
      padding: 16px 20px;
    }

    .brand {
      align-items: center;
      display: flex;
      gap: 14px;
      min-width: 0;
    }

    .brand-logo {
      display: block;
      flex: 0 0 auto;
      height: 34px;
      opacity: 0.95;
      width: auto;
    }

    .brand-copy {
      min-width: 0;
    }

    .eyebrow {
      color: var(--rasa-gold);
      display: block;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0;
      line-height: 1;
      margin-bottom: 6px;
      text-transform: uppercase;
    }

    h1 {
      color: var(--rasa-text);
      font-size: 21px;
      line-height: 1.05;
      margin: 0;
    }

    .topbar-subtitle {
      color: var(--rasa-muted);
      display: block;
      font-size: 13px;
      font-weight: 650;
      margin-top: 5px;
    }

    .status {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
    }

    .brand-mark {
      height: 24px;
      opacity: 0.75;
      width: 24px;
    }

    .pill {
      border: 1px solid var(--rasa-line-strong);
      border-radius: 999px;
      color: var(--rasa-muted);
      display: inline-flex;
      font-size: 12px;
      font-weight: 750;
      line-height: 1;
      padding: 7px 10px;
      white-space: nowrap;
    }

    .pill.ok {
      border-color: rgba(131, 215, 170, 0.42);
      color: var(--rasa-green);
    }

    .pill.warn {
      border-color: rgba(232, 184, 74, 0.46);
      color: var(--rasa-gold);
    }

    @media (max-width: 840px) {
      .topbar {
        align-items: flex-start;
        flex-direction: column;
      }

      .status {
        justify-content: flex-start;
      }
    }
  `;
}
function la({ eyebrow: s, title: e, subtitle: t = "", badges: i = [] }) {
  const n = i.map((r) => {
    const o = r.role ? ` data-role="${Pe(r.role)}"` : "";
    return `<span class="pill${r.tone ? ` ${Pe(r.tone)}` : ""}"${o}>${Pe(r.label)}</span>`;
  }).join("");
  return `
    <header class="topbar">
      <div class="brand">
        <img class="brand-logo" src="${ss.logo}" alt="Rasa" />
        <div class="brand-copy">
          <span class="eyebrow">${Pe(s)}</span>
          <h1>${Pe(e)}</h1>
          ${t ? `<span class="topbar-subtitle">${Pe(t)}</span>` : ""}
        </div>
      </div>
      <div class="status">
        <img class="brand-mark" src="${ss.mark}" alt="" aria-hidden="true" />
        ${n}
      </div>
    </header>
  `;
}
function Pe(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function un(s, e, t) {
  const i = String(s), n = Ui(e), r = Math.max(n, Ui(t));
  return {
    start: rs(i, n),
    end: rs(i, r)
  };
}
function rs(s, e) {
  const t = String(s), i = Ui(e);
  let n = 0, r = 0;
  for (const o of t) {
    const l = n + aa(o);
    if (l > i || (n = l, r += o.length, n === i))
      return r;
  }
  return t.length;
}
function Ui(s) {
  const e = Number(s);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function aa(s) {
  const e = s.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const ha = Object.freeze({
  boolean: "rasa-token-boolean",
  character: "rasa-token-character",
  comment: "rasa-token-comment",
  delimiter: "rasa-token-delimiter",
  keyword: "rasa-token-keyword",
  metadata: "rasa-token-metadata",
  nil: "rasa-token-nil",
  number: "rasa-token-number",
  "reader-macro": "rasa-token-reader-macro",
  string: "rasa-token-string",
  symbol: "rasa-token-symbol"
}), Dr = I.define(), Xi = I.define();
function Br(s) {
  return ha[s] ?? "rasa-token-unknown";
}
function ca(s, e) {
  const t = String(s), i = [];
  let n = 0;
  for (const r of Lr(e, t))
    r.start > n && i.push({ text: t.slice(n, r.start), className: "" }), i.push({
      text: t.slice(r.start, r.end),
      className: Br(r.kind)
    }), n = r.end;
  return n < t.length && i.push({ text: t.slice(n), className: "" }), i;
}
function os(s, e) {
  const t = typeof e == "string" ? e : "", i = typeof e == "number" ? e : t.length, n = Lr(s, t || i).map(
    (r) => W.mark({ class: Br(r.kind) }).range(
      r.start,
      r.end
    )
  );
  return W.set(n, !0);
}
function fa(s = []) {
  return [ve.define({
    create(t) {
      return os(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(Dr))
          return os(n.value, i.state.doc.toString());
      return i.docChanged ? W.none : t.map(i.changes);
    },
    provide: (t) => A.decorations.from(t)
  })];
}
function ua(s = []) {
  return [ve.define({
    create(t) {
      return ls(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(Xi))
          return ls(
            n.value,
            i.state.doc.toString()
          );
      return i.docChanged ? W.none : t.map(i.changes);
    },
    provide: (t) => A.decorations.from(t)
  })];
}
function ls(s, e) {
  const t = da(s, e).map((i) => {
    const n = ["rasa-evidence-span"];
    return i.pinned && n.push("rasa-evidence-pinned"), W.mark({
      class: n.join(" "),
      attributes: {
        "data-evidence-group": i.group || ""
      }
    }).range(i.start, i.end);
  });
  return W.set(t, !0);
}
function Lr(s, e) {
  const t = typeof e == "number" ? e : String(e).length;
  return [...s].map((i) => {
    const n = typeof e == "number" ? {
      start: as(i.start, t),
      end: as(i.end, t)
    } : un(e, i.start, i.end);
    return {
      kind: String(i.kind),
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function da(s, e) {
  const t = String(e);
  return [...s].map((i) => {
    const n = un(t, i.start, i.end);
    return {
      ...i,
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function as(s, e) {
  const t = Number(s);
  return Number.isFinite(t) ? Math.max(0, Math.min(e, Math.trunc(t))) : 0;
}
const hs = Object.freeze({
  reader: 1,
  analysis: 2,
  ir: 4,
  facts: 8,
  eval: 16,
  all: 31
}), pa = [
  "memory",
  "rasa_alloc",
  "rasa_free",
  "rasa_eval_source",
  "rasa_inspect_source",
  "rasa_syntax_tokens",
  "rasa_report_ptr",
  "rasa_report_len",
  "rasa_report_free"
], Dt = Object.freeze({
  includeEval: 1,
  includePlan: 2,
  summary: 0,
  standard: 256,
  full: 512
});
class dn {
  static async load(e, t = {}) {
    const i = await fetch(e);
    if (!i.ok)
      throw new Error(`failed to load Rasa engine: ${i.status}`);
    const n = await i.arrayBuffer();
    let r = null;
    const o = t.imports || {}, l = t.hostCall || null, a = {
      rasa_host_call() {
        return 1;
      },
      ...o.env || {}
    };
    l && (a.rasa_host_call = (f, u, d) => {
      try {
        const p = new Uint8Array(r.memory.buffer, f, u), g = l(cs(p)), m = Ie(g), b = r.rasa_alloc(m.length);
        if (b === 0 && m.length > 0)
          return 2;
        new Uint8Array(r.memory.buffer, b, m.length).set(
          m
        );
        const w = new DataView(r.memory.buffer);
        return w.setUint32(d, b, !0), w.setUint32(d + 4, m.length, !0), 0;
      } catch {
        return 1;
      }
    });
    const { instance: h, module: c } = await WebAssembly.instantiate(n, { ...o, env: a });
    return r = h.exports, new dn(h.exports, c);
  }
  constructor(e, t = null, i = pa) {
    for (const n of i)
      if (!e[n])
        throw new Error(`missing Rasa Wasm export ${n}`);
    if (!(e.memory instanceof WebAssembly.Memory))
      throw new Error("missing Rasa Wasm exported memory");
    this.exports = e, this.module = t;
  }
  imports() {
    return this.module ? WebAssembly.Module.imports(this.module) : [];
  }
  evaluate(e, t = hs.all) {
    return this.callText("rasa_eval_source", Ie(e), t);
  }
  inspect(e, t = {}) {
    return JSON.parse(
      this.callText("rasa_inspect_source", Ie(e), ga(t))
    );
  }
  syntaxTokens(e) {
    return JSON.parse(this.callText("rasa_syntax_tokens", Ie(e)));
  }
  callText(e, t, i = void 0) {
    return this.callInput(
      t,
      (n, r) => i === void 0 ? this.exports[e](n, r) : this.exports[e](n, r, i)
    );
  }
  createSession() {
    return this.requireExport("rasa_session_new"), this.exports.rasa_session_new();
  }
  freeSession(e) {
    this.requireExport("rasa_session_free"), this.exports.rasa_session_free(e);
  }
  loadPackage(e, t) {
    return this.requireExport("rasa_session_load_package"), this.callInput(
      Ie(t),
      (i, n) => this.exports.rasa_session_load_package(e, i, n)
    );
  }
  evaluateSession(e, t, i = hs.all) {
    return this.requireExport("rasa_session_eval"), this.callInput(
      Ie(t),
      (n, r) => this.exports.rasa_session_eval(e, n, r, i)
    );
  }
  callInput(e, t) {
    const i = this.exports.rasa_alloc(e.length);
    if (i === 0 && e.length > 0)
      throw new Error("Rasa engine allocation failed");
    e.length > 0 && new Uint8Array(this.exports.memory.buffer, i, e.length).set(e);
    const n = t(i, e.length);
    if (this.exports.rasa_free(i, e.length), n === 0)
      throw new Error("Rasa engine did not return a report handle");
    try {
      return this.readReport(n);
    } finally {
      this.exports.rasa_report_free(n);
    }
  }
  requireExport(e) {
    if (!this.exports[e])
      throw new Error(`missing Rasa Wasm export ${e}`);
  }
  readReport(e) {
    const t = this.exports.rasa_report_ptr(e), i = this.exports.rasa_report_len(e);
    if (t === 0 || i === 0)
      throw new Error("Rasa engine returned an empty report");
    const n = new Uint8Array(this.exports.memory.buffer, t, i);
    return cs(n);
  }
}
function Ie(s) {
  return new TextEncoder().encode(s);
}
function cs(s) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(s);
}
function ga(s = {}) {
  const e = s.detail || "standard";
  let t = 0;
  return s.includeEval !== !1 && (t |= Dt.includeEval), s.includePlan !== !1 && (t |= Dt.includePlan), t |= Dt[e] ?? Dt.standard, t;
}
const Pr = `(def scores ^vector [^i64 12 ^i64 25 ^i64 40])

(count scores)`, fs = [
  {
    label: "Example 1",
    source: Pr
  },
  {
    label: "Example 2",
    source: `{:sum (+ ^i64 1 ^i64 2 ^i64 3)
 :max (max ^i64 5 ^i64 2 ^i64 9)
 :ready true}`
  },
  {
    label: "Example 3",
    source: `(def user ^map {:name ^string "Rasa" :score ^i64 42})

(assoc user :level :demo)`
  },
  {
    label: "Example 4",
    source: `(def inc-score (fn ^i64 [^i64 score] (inc score)))

(inc-score 41)`
  },
  {
    label: "Example 5",
    source: `(let [scores ^vector [^i64 12 ^i64 25 ^i64 40]
      boosted (map inc scores)]
  {:count (count boosted)
   :total (reduce + 0 boosted)
   :kept (filter pos? boosted)})`
  }
];
function ma(s, e, t = {}) {
  const i = t.selectedGroup || null, n = ya(s), r = i && n.find((o) => o.id === i) || null;
  return {
    status: ba(s),
    result: xa(s),
    groups: n,
    activeGroup: r,
    plan: va(s),
    diagnostics: Sa(s, e),
    sourceHighlights: wa(s, { selectedGroup: i })
  };
}
function ba(s = {}) {
  const e = s.failedPhase;
  return s.status === "ok" ? "ok" : e ? `failed in :${e}` : s.status;
}
function xa(s = {}) {
  const e = s.eval || {};
  return {
    status: e.status || s.status || "unknown",
    value: e.value ?? "nil",
    observedType: e.observedType || "unknown",
    provenance: e.provenance || "runtime-observed"
  };
}
function ya(s = {}) {
  const e = s.evidence?.groups || [];
  return Da(e.filter(Ea), s.source).slice(0, 8).map(Pa);
}
function wa(s = {}, e = {}) {
  const t = new Set([e.selectedGroup].filter(Boolean));
  return t.size ? (s.evidence?.indexes?.spans || []).filter((i) => (i.groups || []).some((n) => t.has(n))).map((i) => ({
    group: (i.groups || []).find((n) => t.has(n)) || "",
    start: i.start,
    end: i.end,
    pinned: !!(e.selectedGroup && i.groups.includes(e.selectedGroup))
  })) : [];
}
function va(s = {}) {
  const e = s.plan || {};
  return {
    status: e.status || e.availability || "unavailable",
    lanes: e.lanes || [],
    candidates: e.candidates || []
  };
}
function Sa(s = {}, e = "") {
  const t = Object.entries(s.phases || {}).flatMap(
    ([r, o]) => (o.diagnostics || []).map((l) => mi(r, l, e))
  ), i = (s.plan?.diagnostics || []).map(
    (r) => mi("plan", r, e)
  ), n = (s.eval?.diagnostics || []).map(
    (r) => mi("eval", r, e)
  );
  return Ra(
    Ta([...t, ...i, ...n])
  ).slice(0, 3);
}
function mi(s, e, t) {
  const i = e.span || null, n = e.evidence || {}, r = e.kind || "diagnostic", o = !!e.recoverable;
  return {
    phase: s,
    kind: r,
    title: ka(s, r, o),
    status: Ca(s, o),
    recoverable: o,
    message: e.message || "",
    span: i,
    excerpt: i ? Wa(t, i) : "",
    location: Ma(i),
    expected: n.expected || "",
    actual: n.actual || "",
    subject: n.subject || "",
    provenance: `:${s} / :${r}`,
    impact: Aa(s, o)
  };
}
function ka(s, e, t) {
  return t ? {
    "fact-uncertainty": "Evidence, not a checked guarantee",
    "memory-profile-constraint": "Representation constraint rejected",
    "insufficient-backend-evidence": "Backend plan kept conservative"
  }[e] || `${us(s)} note` : s === "eval" ? "Evaluation blocker" : `${us(s)} blocker`;
}
function Ca(s, e) {
  return e ? s === "plan" ? "conservative plan" : "recoverable" : s === "eval" ? "blocks evaluation" : "blocks phase";
}
function Aa(s, e) {
  return e && s === "plan" ? "Planning continues, but later views should treat this as evidence rather than a committed optimization." : e ? "Later phases can continue, but claims should stay conservative." : s === "eval" ? "Evaluation is blocked until this diagnostic is resolved." : `:${s} is blocked until this diagnostic is resolved.`;
}
function Ma(s) {
  return s ? `Source bytes ${s.start}..${s.end}.` : "Whole artifact; no single source span was reported.";
}
function us(s) {
  return String(s || "compiler").split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function Ta(s) {
  const e = /* @__PURE__ */ new Set();
  return s.filter((t) => {
    const i = Oa(t);
    return e.has(i) ? !1 : (e.add(i), !0);
  });
}
function Ra(s) {
  return [...s].sort(
    (e, t) => Number(e.recoverable) - Number(t.recoverable)
  );
}
function Oa(s) {
  const e = s.span ? `${s.span.source}:${s.span.start}:${s.span.end}` : "";
  return [
    s.phase,
    s.kind,
    s.recoverable,
    s.message,
    e,
    s.subject,
    s.expected,
    s.actual
  ].join("\0");
}
function Ea(s = {}) {
  return Ir(s) || (s.phases || []).includes("plan") || (s.provenances || []).includes("hinted") || (s.keys || []).some(
    (e) => ["scalar-type", "collection-kind", "known-keys", "host-free"].includes(e)
  );
}
function Ir(s = {}) {
  return (s.keys || []).includes("diagnostic");
}
function Da(s, e = {}) {
  const t = Number(e.bytes);
  return [...s].sort(
    (i, n) => Ba(i, n, t) || ds(i) - ds(n) || La(i.subject, n.subject)
  );
}
function ds(s = {}) {
  return Ir(s) ? 0 : (s.provenances || []).includes("hinted") ? 1 : (s.phases || []).includes("plan") ? 2 : (s.keys || []).some((e) => ["scalar-type", "collection-kind"].includes(e)) ? 3 : 4;
}
function Ba(s, e, t) {
  const i = ps(s, t), n = ps(e, t);
  return i.kind - n.kind || i.start - n.start || i.end - n.end;
}
function ps(s = {}, e) {
  const t = s.span || null;
  if (!t)
    return { kind: 2, start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
  const i = Number.isFinite(Number(t.start)) ? Number(t.start) : Number.MAX_SAFE_INTEGER, n = Number.isFinite(Number(t.end)) ? Number(t.end) : Number.MAX_SAFE_INTEGER;
  return { kind: i === 0 && Number.isFinite(e) && n >= e ? 1 : 0, start: i, end: n };
}
function La(s, e) {
  return String(s || "").localeCompare(String(e || ""));
}
function Pa(s) {
  const e = Ia(s);
  return {
    ...s,
    subjectId: s.subject || "",
    displaySubject: e || s.subject || ""
  };
}
function Ia(s = {}) {
  const e = s.entries || [], t = (l) => Na(e.find((a) => a.key === l)?.value), i = t("callee-symbol");
  if (i)
    return `call ${i}`;
  const n = t("collection-kind");
  if (n)
    return `${n} literal`;
  const r = t("literal-kind"), o = t("scalar-type");
  return r && o ? `${o} ${r}` : r ? `${r} literal` : o ? `${o} hint` : t("host-free") ? "source plan" : "";
}
function Na(s) {
  const e = String(s || "").trim();
  return e ? e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : e.startsWith(":") ? e.slice(1) : e : "";
}
function Wa(s, e, t = 28) {
  const i = String(s), { start: n, end: r } = un(i, e.start, e.end), o = Math.max(0, n - t), l = Math.min(i.length, r + t), a = o > 0 ? "..." : "", h = l < i.length ? "..." : "";
  return `${a}${i.slice(o, l)}${h}`;
}
function Nr(s) {
  return s ? `bytes ${s.start}..${s.end}` : "no source span";
}
function Fa(s) {
  if (!s)
    return "No evidence selected";
  const e = (s.keys || []).slice(0, 3).map((i) => `:${i}`).join(" "), t = s.displaySubject && s.subjectId ? `${s.displaySubject} · ${s.subjectId}` : s.displaySubject || s.subject || "";
  return e ? `${t} ${e}` : t;
}
function Ha(s) {
  return Xt(s, 0);
}
function Xt(s, e) {
  return s == null ? "nil" : Array.isArray(s) ? za(s, e) : typeof s == "object" ? Va(s, e) : typeof s == "string" ? JSON.stringify(s) : typeof s == "boolean" ? s ? "true" : "false" : String(s);
}
function Va(s, e) {
  const t = Object.entries(s);
  if (!t.length)
    return "{}";
  const i = Yt(e + 1), n = Yt(e);
  return `{
${t.map(
    ([o, l]) => `${i}:${$a(o)} ${Xt(l, e + 1)}`
  ).join(`
`)}
${n}}`;
}
function za(s, e) {
  if (!s.length)
    return "[]";
  if (s.every(qa))
    return `[${s.map((n) => Xt(n, e)).join(" ")}]`;
  const t = Yt(e + 1), i = Yt(e);
  return `[
${s.map((n) => `${t}${Xt(n, e + 1)}`).join(`
`)}
${i}]`;
}
function qa(s) {
  return s === null || typeof s != "object";
}
function $a(s) {
  return String(s).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function Yt(s) {
  return "  ".repeat(s);
}
class ja {
  constructor(e = 4) {
    this.limit = e, this.artifacts = /* @__PURE__ */ new Map(), this.reports = /* @__PURE__ */ new Map();
  }
  inspect(e, t) {
    const i = String(t), n = this.artifacts.get(i);
    if (n)
      return { artifact: n, cacheHit: !0 };
    const r = e.inspect(i, {
      includeEval: !0,
      includePlan: !0,
      detail: "standard"
    });
    return gs(this.artifacts, i, r, this.limit), { artifact: r, cacheHit: !1 };
  }
  runtimeReport(e, t, i) {
    const n = String(t), r = this.reports.get(n);
    if (r)
      return r;
    const o = e.evaluate(n), l = {
      text: o,
      tokens: i(o)
    };
    return gs(this.reports, n, l, this.limit), l;
  }
}
function gs(s, e, t, i) {
  for (s.set(e, t); s.size > i; )
    s.delete(s.keys().next().value);
}
const Ka = `
:host {
  --rasa-bg: #0b0d10;
  --rasa-panel: #131820;
  --rasa-panel-soft: #0f141a;
  --rasa-panel-raised: #171d26;
  --rasa-border: #29323d;
  --rasa-border-strong: #3c4856;
  --rasa-text: #e7edf4;
  --rasa-muted: #9da9b7;
  --rasa-dim: #6d7885;
  --rasa-reader: #d9aa45;
  --rasa-analysis: #6aa7ff;
  --rasa-ir: #b48cff;
  --rasa-facts: #79c99a;
  --rasa-plan: #63c5c6;
  --rasa-eval: #e78aa5;
  --rasa-error: #ff7078;
  --rasa-radius: 8px;
  display: block;
  color: var(--rasa-text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

.shell {
  height: calc(100vh - 48px);
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 14px;
  overflow: hidden;
  background: var(--rasa-bg);
}

.topbar,
.source-panel,
.evidence-panel,
.focus-panel {
  border: 1px solid var(--rasa-border);
  border-radius: var(--rasa-radius);
  background: var(--rasa-panel);
  min-width: 0;
}

.topbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
}

.brand {
  min-width: 0;
}

.eyebrow,
.label {
  color: var(--rasa-reader);
  font-size: 12px;
  font-weight: 760;
  letter-spacing: 0;
  text-transform: uppercase;
}

.label {
  color: var(--rasa-muted);
}

h1,
h2 {
  margin: 0;
  letter-spacing: 0;
}

h1 {
  margin-top: 2px;
  font-size: 19px;
  line-height: 1.22;
  font-weight: 760;
}

h2 {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 760;
}

.status {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.brand-mark {
  width: 28px;
  height: 32px;
  object-fit: contain;
  opacity: 0.62;
  flex: 0 0 auto;
}

.pill,
.semantic-tag,
.example-button {
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--rasa-border-strong);
  border-radius: 999px;
  white-space: nowrap;
}

.pill {
  padding: 0 9px;
  color: var(--rasa-muted);
  font-size: 12px;
}

.pill.ok {
  color: var(--rasa-facts);
}

.pill.warn {
  color: var(--rasa-reader);
}

.cockpit {
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(320px, 0.95fr) minmax(360px, 1.2fr) minmax(320px, 0.9fr);
  gap: 14px;
}

.source-panel,
.evidence-panel,
.focus-panel {
  min-height: 0;
  overflow: hidden;
  display: grid;
}

.source-panel {
  grid-template-rows: auto auto minmax(0, 1fr);
}

.evidence-panel {
  grid-template-rows: auto auto minmax(0, 1fr);
}

.focus-panel {
  grid-template-rows: auto minmax(0, 1fr);
}

.panel-head {
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 12px;
  border-bottom: 1px solid var(--rasa-border);
}

.source-head {
  align-items: flex-start;
}

.panel-subtitle,
.status-text,
.metric-meta {
  display: block;
  margin-top: 2px;
  color: var(--rasa-muted);
  font-size: 12px;
}

button {
  min-height: 32px;
  border: 1px solid var(--rasa-border-strong);
  border-radius: 7px;
  padding: 0 12px;
  color: #0b0d10;
  background: var(--rasa-text);
  font-weight: 760;
  cursor: pointer;
}

button:disabled {
  color: var(--rasa-dim);
  background: #1d242e;
  cursor: default;
}

.example-rail {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}

.example-rail {
  padding: 9px 10px;
  border-bottom: 1px solid var(--rasa-border);
  background: var(--rasa-panel-soft);
}

.example-button {
  color: var(--rasa-muted);
  background: #111720;
  font-size: 12px;
  font-weight: 720;
}

.example-button:hover {
  color: var(--rasa-text);
  border-color: var(--rasa-analysis);
  background: #172131;
}

.editor {
  min-height: 0;
}

.cm-editor {
  height: 100%;
  background: #0e1319;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 14px;
}

.cm-scroller {
  cursor: text;
}

.cm-content {
  padding: 14px;
  caret-color: var(--rasa-reader);
}

.cm-focused {
  outline: none;
}

.cm-cursorLayer {
  pointer-events: none;
}

.cm-cursor {
  border-left: 2px solid var(--rasa-reader) !important;
  margin-left: -1px;
}

.cm-selectionBackground,
.cm-focused .cm-selectionBackground {
  background: color-mix(in srgb, var(--rasa-analysis) 30%, transparent) !important;
}

.rasa-evidence-span {
  background: color-mix(in srgb, var(--rasa-facts) 18%, transparent);
  box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--rasa-facts) 75%, transparent);
}

.rasa-evidence-pinned {
  background: color-mix(in srgb, var(--rasa-analysis) 22%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-analysis);
}

.rasa-token-comment { color: #677482; font-style: italic; }
.rasa-token-delimiter { color: #8492a2; }
.rasa-token-reader-macro,
.rasa-token-metadata { color: var(--rasa-reader); font-weight: 760; }
.rasa-token-keyword { color: #82d4b5; }
.rasa-token-string { color: #efc66d; }
.rasa-token-number,
.rasa-token-boolean,
.rasa-token-nil { color: var(--rasa-ir); }
.rasa-token-symbol { color: #d9e1eb; }
.rasa-token-character { color: #93caff; }

.result-strip {
  display: grid;
  gap: 8px;
  padding: 10px;
  border-bottom: 1px solid var(--rasa-border);
  background: var(--rasa-panel-soft);
}

.result-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--rasa-eval) 44%, var(--rasa-border));
  border-radius: 7px;
  background: #111922;
}

.result-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px 0;
}

.result-value {
  max-height: 210px;
  min-height: 54px;
  margin: 0;
  padding: 8px 10px 10px;
  overflow: auto;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 16px;
  line-height: 1.45;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.metric-deck {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.metric-card {
  min-width: 0;
  padding: 9px 10px;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: #10161d;
}

.metric-label {
  display: block;
  color: var(--rasa-muted);
  font-size: 11px;
  font-weight: 760;
  text-transform: uppercase;
}

.metric-value {
  display: block;
  margin-top: 4px;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 15px;
  line-height: 1.25;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.metric-card .metric-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-list {
  min-height: 0;
  overflow: auto;
  padding: 10px;
  display: grid;
  align-content: start;
  gap: 9px;
  background: #0d1218;
}

.evidence-card {
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: #111720;
  cursor: pointer;
  overflow: hidden;
}

.evidence-card:hover,
.evidence-card[data-selected="true"] {
  border-color: var(--rasa-analysis);
  background: #131d28;
}

.evidence-card[data-phase~="facts"] {
  border-left: 3px solid var(--rasa-facts);
}

.evidence-card[data-phase~="plan"] {
  border-left: 3px solid var(--rasa-plan);
}

.evidence-card-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px 4px;
}

.evidence-subject {
  min-width: 0;
  overflow: hidden;
  display: flex;
  align-items: baseline;
  gap: 7px;
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-label {
  overflow: hidden;
  color: var(--rasa-text);
  font-weight: 760;
  text-overflow: ellipsis;
}

.evidence-id {
  flex: none;
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 680;
}

.evidence-span {
  flex: none;
  color: var(--rasa-muted);
  font-size: 12px;
}

.evidence-tags,
.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px 10px;
}

.semantic-tag {
  min-height: 22px;
  padding: 0 7px;
  color: var(--rasa-muted);
  background: #0e141b;
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
}

.evidence-entries {
  display: grid;
  border-top: 1px solid var(--rasa-border);
}

.evidence-entry {
  min-width: 0;
  padding: 7px 10px;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.evidence-entry + .evidence-entry {
  border-top: 1px solid var(--rasa-border);
}

.focus-body {
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: #0d1218;
}

.focus-body > * {
  flex: none;
}

.focus-card,
.debug-artifact {
  min-width: 0;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: #111720;
  overflow: hidden;
}

.focus-card[data-phase~="facts"] {
  border-color: color-mix(in srgb, var(--rasa-facts) 55%, var(--rasa-border));
}

.focus-card[data-phase~="plan"],
.plan-card {
  border-color: color-mix(in srgb, var(--rasa-plan) 55%, var(--rasa-border));
}

.focus-card-error,
.diagnostic-card[data-status="blocking"] {
  border-color: color-mix(in srgb, var(--rasa-error) 60%, var(--rasa-border));
}

.focus-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 11px;
  border-bottom: 1px solid var(--rasa-border);
}

.diagnostics-note {
  margin: 3px 0 0;
  max-width: 34ch;
  color: var(--rasa-muted);
  font-size: 11px;
  line-height: 1.35;
}

.edn-block {
  margin: 0;
  max-height: 260px;
  overflow: auto;
  padding: 11px;
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.plan-grid,
.diagnostic-list {
  display: grid;
}

.diagnostics-card {
  max-height: min(420px, 70vh);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.diagnostic-list {
  min-height: 0;
  overflow: auto;
}

.plan-row {
  display: grid;
  grid-template-columns: minmax(90px, 0.38fr) minmax(0, 1fr);
  gap: 10px;
  padding: 8px 10px;
  border-top: 1px solid var(--rasa-border);
}

.plan-row:first-child {
  border-top: 0;
}

.plan-row span {
  min-width: 0;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.plan-row strong {
  min-width: 0;
  color: var(--rasa-text);
  font-size: 12px;
  line-height: 1.4;
}

.diagnostic-card {
  padding: 10px;
  border-top: 1px solid var(--rasa-border);
}

.diagnostic-card:first-child {
  border-top: 0;
}

.diagnostic-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.diagnostic-head strong,
.diagnostic-card code {
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
}

.diagnostic-head strong {
  min-width: 0;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: normal;
}

.diagnostic-head span {
  flex: none;
  border: 1px solid var(--rasa-border);
  border-radius: 999px;
  color: var(--rasa-muted);
  font-size: 11px;
  line-height: 1;
  padding: 4px 7px;
  text-transform: lowercase;
}

.diagnostic-card p {
  margin: 7px 0 9px;
  color: var(--rasa-text);
  font-size: 13px;
  line-height: 1.45;
}

.diagnostic-detail {
  display: grid;
  gap: 6px;
  margin: 0;
}

.diagnostic-detail div {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 9px;
  align-items: start;
}

.diagnostic-detail dt {
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0;
  text-transform: uppercase;
}

.diagnostic-detail dd {
  margin: 0;
  min-width: 0;
  color: var(--rasa-text);
  font-size: 12px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.diagnostic-detail dd[data-field="provenance"] {
  color: var(--rasa-reader);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
}

.diagnostic-card code {
  display: block;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(--rasa-border);
  border-radius: 6px;
  background: rgba(6, 10, 14, 0.45);
  color: var(--rasa-reader);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.diagnostic-card[data-status="recoverable"] .diagnostic-head span {
  border-color: color-mix(in srgb, var(--rasa-plan) 55%, var(--rasa-border));
  color: var(--rasa-plan);
}

.debug-artifact {
  color: var(--rasa-muted);
}

.debug-artifact summary {
  padding: 10px 11px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 760;
  text-transform: uppercase;
}

.runtime-summary {
  border-top: 1px solid var(--rasa-border);
}

.empty-sections {
  color: var(--rasa-muted);
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  padding: 12px;
  background: #111720;
}

.shell-article {
  height: auto;
  min-height: 560px;
}

.shell-article .topbar {
  display: none;
}

.shell-article .cockpit {
  grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1.1fr);
}

.shell-article .focus-panel {
  display: grid;
  grid-column: 1 / -1;
  min-height: 260px;
}

.shell-article .focus-body {
  max-height: 340px;
}

.shell-article .source-panel,
.shell-article .evidence-panel {
  min-height: 520px;
}

@media (max-width: 1060px) {
  .shell {
    height: auto;
    min-height: calc(100vh - 24px);
    overflow: visible;
  }

  .cockpit,
  .shell-article .cockpit {
    grid-template-columns: 1fr;
  }

  .source-panel,
  .evidence-panel,
  .focus-panel,
  .shell-article .source-panel,
  .shell-article .evidence-panel {
    min-height: 420px;
  }

  .focus-panel {
    min-height: 360px;
  }
}

@media (max-width: 720px) {
  .topbar {
    grid-template-columns: 1fr;
  }

  .status {
    justify-content: flex-start;
  }

  .result-strip {
    grid-template-columns: 1fr;
  }
}
`;
class Ga extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.engine = null, this.editor = null, this.runCount = 0, this.currentRun = null, this.inspectionSession = new ja(), this.selectedGroup = null, this.syntaxTimer = null;
  }
  connectedCallback() {
    this.render(), this.mountEditor(), this.loadEngine(), this.refreshSyntax();
  }
  disconnectedCallback() {
    this.syntaxTimer && (clearTimeout(this.syntaxTimer), this.syntaxTimer = null), this.editor?.destroy(), this.editor = null;
  }
  get engineUrl() {
    return this.getAttribute("engine-url") || "./engine.wasm";
  }
  get demoMode() {
    return this.getAttribute("mode") === "article" ? "article" : "workbench";
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${oa()}${Ka}</style>
      <section class="shell shell-${this.demoMode}" aria-label="Rasa browser inspection workbench">
        ${la({
      eyebrow: "Rasa Browser Demo",
      title: "Evidence workbench",
      subtitle: "Compiler evidence rendered directly from the browser Wasm artifact",
      badges: [
        { role: "engine", label: "engine loading", tone: "warn" },
        { role: "session", label: "stateless evaluator" },
        { role: "syntax", label: "syntax provider pending" }
      ]
    })}

        <section class="cockpit" aria-label="Rasa evidence cockpit">
          <section class="source-panel" aria-label="Rasa source">
            <div class="panel-head source-head">
              <div>
                <span class="label">Source</span>
                <span class="panel-subtitle">Rasa forms evaluated in-browser</span>
              </div>
              <button type="button" data-role="run">Run</button>
            </div>
            <div class="example-rail" data-role="examples">
              ${fs.map((e, t) => eh(e, t)).join("")}
            </div>
            <div class="editor" data-role="editor"></div>
          </section>

          <section class="evidence-panel" aria-label="Grouped evidence">
            <div class="panel-head">
              <div>
                <span class="label">Evidence</span>
                <span class="panel-subtitle" data-role="evidence-count">waiting for run</span>
              </div>
            </div>
            <div class="result-strip" data-role="result-strip"></div>
            <div class="evidence-list" data-role="evidence-list"></div>
          </section>

          <aside class="focus-panel" aria-label="Focused evidence">
            <div class="panel-head">
              <div>
                <span class="label">Focus</span>
                <span class="panel-subtitle" data-role="last-run">not run yet</span>
              </div>
            </div>
            <div class="focus-body" data-role="focus-body"></div>
          </aside>
        </section>
      </section>
    `, this.shadowRoot.querySelector('[data-role="run"]').addEventListener("click", () => this.run()), this.shadowRoot.querySelector('[data-role="examples"]').addEventListener("click", (e) => this.loadExample(e)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("click", (e) => this.pinEvidence(e));
  }
  mountEditor() {
    const e = this.shadowRoot.querySelector('[data-role="editor"]'), t = this.getAttribute("source") || Pr;
    this.editor = new A({
      parent: e,
      state: E.create({
        doc: t,
        extensions: [
          ta(),
          Tr.of([
            {
              key: "Mod-Enter",
              run: () => (this.run(), !0)
            }
          ]),
          A.lineWrapping,
          fa(),
          ua(),
          A.updateListener.of((i) => {
            i.docChanged && (this.scheduleSyntaxRefresh(), this.clearEvidenceState());
          })
        ]
      })
    }), this.editor.dispatch({
      selection: { anchor: t.length },
      scrollIntoView: !0
    }), this.editor.focus();
  }
  async loadEngine() {
    try {
      this.engine = await dn.load(this.engineUrl), this.setPill("engine", "engine ready", "ok"), this.scheduleSyntaxRefresh(0);
    } catch (e) {
      this.setPill("engine", "engine unavailable", "warn"), this.showError("Engine unavailable", e.message);
    }
  }
  scheduleSyntaxRefresh(e = 80) {
    this.syntaxTimer && clearTimeout(this.syntaxTimer), this.syntaxTimer = setTimeout(() => {
      this.syntaxTimer = null, this.refreshSyntax();
    }, e);
  }
  async refreshSyntax() {
    if (!(!this.engine || !this.editor))
      try {
        const e = this.engine.syntaxTokens(this.sourceText());
        this.editor.dispatch({
          effects: Dr.of(e.tokens || [])
        }), this.setPill("syntax", "syntax ready", "ok");
      } catch {
        this.setPill("syntax", "syntax pending", "warn");
      }
  }
  async run() {
    const e = this.shadowRoot.querySelector('[data-role="run"]');
    e.disabled = !0;
    try {
      if (!this.engine)
        throw new Error("Rasa engine is not loaded yet");
      const t = this.sourceText(), i = this.inspectionSession.inspect(this.engine, t);
      this.runCount += 1, this.currentRun = { source: t, ...i }, this.selectedGroup = null, this.renderWorkbench();
    } catch (t) {
      this.showError("Inspection error", t.message);
    } finally {
      e.disabled = !1, this.editor?.focus();
    }
  }
  loadExample(e) {
    const t = e.target.closest("button[data-example-index]");
    if (!t)
      return;
    const i = fs[Number(t.dataset.exampleIndex)];
    !i || !this.editor || (this.editor.dispatch({
      changes: { from: 0, to: this.editor.state.doc.length, insert: i.source },
      selection: { anchor: i.source.length },
      scrollIntoView: !0
    }), this.editor.focus(), this.scheduleSyntaxRefresh(0), this.clearEvidenceState());
  }
  pinEvidence(e) {
    const t = e.target.closest("[data-evidence-group]");
    t && (this.selectedGroup = t.dataset.evidenceGroup, this.renderWorkbench());
  }
  clearEvidenceState({ evidenceCount: e = "run to inspect evidence", lastRun: t = "not run yet" } = {}) {
    this.currentRun = null, this.selectedGroup = null, this.editor?.dispatch({ effects: Xi.of([]) }), this.shadowRoot.querySelector('[data-role="result-strip"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-list"]').textContent = "", this.shadowRoot.querySelector('[data-role="focus-body"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = e, this.shadowRoot.querySelector('[data-role="last-run"]').textContent = t;
  }
  renderWorkbench() {
    if (!this.currentRun)
      return;
    const e = ma(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: this.selectedGroup
    });
    this.selectedGroup && !e.groups.some((n) => n.id === this.selectedGroup) && (this.selectedGroup = null), this.renderResult(e), this.renderEvidenceList(e), this.renderFocus(e);
    const t = this.selectedGroup ? e.sourceHighlights : [];
    this.editor?.dispatch({ effects: Xi.of(t) });
    const i = this.currentRun.cacheHit ? " / cached" : "";
    this.shadowRoot.querySelector('[data-role="last-run"]').textContent = `run ${this.runCount} / ${e.status}${i}`;
  }
  renderResult(e) {
    const t = this.shadowRoot.querySelector('[data-role="result-strip"]');
    t.textContent = "", t.append(_a(e.result, this), Ua(e));
  }
  renderEvidenceList(e) {
    const t = this.shadowRoot.querySelector('[data-role="evidence-list"]');
    if (t.textContent = "", this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = `${e.groups.length} inspection groups; click a card to pin source evidence`, !e.groups.length) {
      const i = document.createElement("div");
      i.className = "empty-sections", i.textContent = "No inspection evidence for this source. Artifact data still has the raw report.", t.append(i);
      return;
    }
    for (const i of e.groups) {
      const n = document.createElement("article");
      n.className = "evidence-card", n.dataset.evidenceGroup = i.id, n.dataset.phase = (i.phases || []).join(" "), n.dataset.domain = (i.domains || []).join(" "), n.dataset.provenance = (i.provenances || []).join(" "), n.dataset.selected = String(i.id === this.selectedGroup), n.innerHTML = `
        <div class="evidence-card-head">
          <span class="evidence-subject">
            <span class="evidence-label"></span>
            <span class="evidence-id"></span>
          </span>
          <span class="evidence-span"></span>
        </div>
        <div class="evidence-tags"></div>
        <div class="evidence-entries"></div>
      `, n.querySelector(".evidence-label").textContent = i.displaySubject || i.subject, n.querySelector(".evidence-id").textContent = i.subjectId || "", n.querySelector(".evidence-span").textContent = Nr(i.span);
      const r = n.querySelector(".evidence-tags");
      for (const l of [...i.keys || [], ...i.provenances || []].slice(0, 5))
        r.append(Wr(l));
      const o = n.querySelector(".evidence-entries");
      for (const l of Xa(i)) {
        const a = document.createElement("div");
        a.className = "evidence-entry", a.dataset.phase = l.phase, a.dataset.provenance = l.provenance, a.textContent = `:${l.key} ${l.value}`, o.append(a);
      }
      t.append(n);
    }
  }
  renderFocus(e) {
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]');
    t.textContent = "", t.append(Ya(e.activeGroup, this)), t.append(Ja(e.plan)), e.diagnostics.length && t.append(Qa(e.diagnostics)), t.append(Za(this.currentRun.artifact, this));
  }
  showError(e, t) {
    this.clearEvidenceState({ evidenceCount: "browser demo error", lastRun: e });
    const i = this.shadowRoot.querySelector('[data-role="focus-body"]'), n = document.createElement("article");
    n.className = "focus-card focus-card-error", n.innerHTML = `
      <div class="focus-card-head">
        <h2></h2>
        <span class="status-text">client</span>
      </div>
      <pre class="edn-block"></pre>
    `, n.querySelector("h2").textContent = e, n.querySelector("pre").textContent = t, i.append(n);
  }
  setPill(e, t, i) {
    const n = this.shadowRoot.querySelector(`[data-role="${e}"]`);
    n.textContent = t, n.classList.toggle("ok", i === "ok"), n.classList.toggle("warn", i === "warn");
  }
  syntaxTokensFor(e) {
    try {
      return this.engine?.syntaxTokens(e)?.tokens || [];
    } catch {
      return [];
    }
  }
  sourceText() {
    return this.editor?.state.doc.toString() || "";
  }
  runtimeReport() {
    return !this.engine || !this.currentRun ? null : this.inspectionSession.runtimeReport(
      this.engine,
      this.currentRun.source,
      (e) => this.syntaxTokensFor(e)
    );
  }
}
function _a(s, e) {
  const t = document.createElement("article");
  t.className = "result-card", t.dataset.status = s.status || "unknown", t.innerHTML = `
    <div class="result-card-head">
      <span class="metric-label">Result</span>
      <span class="status-text"></span>
    </div>
    <pre class="result-value"></pre>
  `, t.querySelector(".status-text").textContent = s.status || "";
  const i = String(s.value ?? "nil");
  return Jt(t.querySelector(".result-value"), i, e.syntaxTokensFor(i)), t;
}
function Ua(s) {
  const e = document.createElement("div");
  return e.className = "metric-deck", e.append(
    ms("Observed", s.result.observedType, s.result.provenance),
    ms("Plan", s.plan.status, `${s.plan.candidates.length} candidates`)
  ), e;
}
function ms(s, e, t) {
  const i = document.createElement("div");
  return i.className = "metric-card", i.innerHTML = `
    <span class="metric-label"></span>
    <strong class="metric-value"></strong>
    <span class="metric-meta"></span>
  `, i.querySelector(".metric-label").textContent = s, i.querySelector(".metric-value").textContent = String(e ?? "nil"), i.querySelector(".metric-meta").textContent = t || "", i;
}
function Xa(s) {
  return (s.entries || []).slice(0, 3);
}
function Wr(s) {
  const e = document.createElement("span");
  return e.className = "semantic-tag", e.textContent = s.startsWith(":") ? s : `:${s}`, e;
}
function Ya(s, e) {
  const t = document.createElement("article");
  t.className = "focus-card", t.dataset.phase = (s?.phases || []).join(" "), t.dataset.domain = (s?.domains || []).join(" "), t.dataset.provenance = (s?.provenances || []).join(" "), t.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="focus-tags"></div>
    <pre class="edn-block"></pre>
  `, t.querySelector("h2").textContent = Fa(s), t.querySelector(".status-text").textContent = s ? Nr(s.span) : "click evidence";
  const i = t.querySelector(".focus-tags");
  for (const n of [
    ...s?.phases || [],
    ...s?.domains || [],
    ...s?.provenances || []
  ])
    i.append(Wr(n));
  return Jt(
    t.querySelector(".edn-block"),
    s?.rendered || "Click an evidence group to inspect Rasa-owned annotations and source spans.",
    e.syntaxTokensFor(s?.rendered || "")
  ), t;
}
function Ja(s) {
  const e = document.createElement("article");
  e.className = "focus-card plan-card", e.dataset.phase = "plan", e.innerHTML = `
    <div class="focus-card-head">
      <h2>Plan</h2>
      <span class="status-text"></span>
    </div>
    <div class="plan-grid"></div>
  `, e.querySelector(".status-text").textContent = s.status;
  const t = e.querySelector(".plan-grid");
  for (const i of s.lanes.slice(0, 3))
    t.append(bi(i.lane, `${i.memoryPath} / ${i.status}`));
  for (const i of s.candidates.slice(0, 4))
    t.append(bi(i.candidate, i.reason || i.status));
  return t.childElementCount || t.append(bi("plan", "unavailable for this source")), e;
}
function Qa(s) {
  const e = document.createElement("article");
  e.className = "focus-card diagnostics-card", e.innerHTML = `
    <div class="focus-card-head">
      <div>
        <h2>Diagnostics</h2>
        <p class="diagnostics-note">
          Compiler signals that change what the browser demo can safely claim.
        </p>
      </div>
      <span class="status-text"></span>
    </div>
    <div class="diagnostic-list"></div>
  `, e.querySelector(".status-text").textContent = `${s.length} signals`;
  const t = e.querySelector(".diagnostic-list");
  for (const i of s) {
    const n = document.createElement("div");
    n.className = "diagnostic-card", n.dataset.phase = i.phase, n.dataset.status = i.recoverable ? "recoverable" : "blocking", n.innerHTML = `
      <div class="diagnostic-head">
        <strong></strong>
        <span></span>
      </div>
      <p></p>
      <dl class="diagnostic-detail">
        <div>
          <dt>Impact</dt>
          <dd data-field="impact"></dd>
        </div>
        <div>
          <dt>Scope</dt>
          <dd data-field="location"></dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd data-field="provenance"></dd>
        </div>
      </dl>
      <code data-field="excerpt"></code>
    `, n.querySelector("strong").textContent = i.title, n.querySelector("span").textContent = i.status, n.querySelector("p").textContent = i.message, n.querySelector('[data-field="impact"]').textContent = i.impact, n.querySelector('[data-field="location"]').textContent = i.location, n.querySelector('[data-field="provenance"]').textContent = i.provenance;
    const r = n.querySelector('[data-field="excerpt"]');
    i.excerpt ? r.textContent = i.excerpt : r.remove(), t.append(n);
  }
  return e;
}
function Za(s, e) {
  const t = document.createElement("details");
  return t.className = "debug-artifact", t.innerHTML = `
    <summary>Artifact data</summary>
    <div class="debug-artifact-body"></div>
  `, t.addEventListener(
    "toggle",
    () => {
      if (!t.open || t.dataset.rendered === "true")
        return;
      const i = t.querySelector(".debug-artifact-body"), n = document.createElement("pre");
      n.className = "edn-block";
      const r = document.createElement("div");
      r.className = "runtime-summary", r.textContent = "Runtime report";
      const o = document.createElement("pre");
      o.className = "edn-block runtime-report";
      let l = null;
      const a = Ha(s);
      try {
        l = e.runtimeReport();
      } catch (h) {
        l = { text: `runtime report unavailable: ${h.message}`, tokens: [] };
      }
      Jt(n, a, e.syntaxTokensFor(a)), Jt(o, l?.text || "nil", l?.tokens || []), i.append(n, r, o), t.dataset.rendered = "true";
    },
    { once: !0 }
  ), t;
}
function bi(s, e) {
  const t = document.createElement("div");
  return t.className = "plan-row", t.innerHTML = `
    <span></span>
    <strong></strong>
  `, t.querySelector("span").textContent = s, t.querySelector("strong").textContent = e, t;
}
function eh(s, e) {
  return `<button type="button" class="example-button" data-example-index="${e}">${s.label}</button>`;
}
function Jt(s, e, t) {
  s.textContent = "";
  for (const i of ca(e, t)) {
    if (!i.className) {
      s.append(document.createTextNode(i.text));
      continue;
    }
    const n = document.createElement("span");
    n.className = i.className, n.textContent = i.text, s.append(n);
  }
}
customElements.define("rasa-browser-inspection-workbench", Ga);
