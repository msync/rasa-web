let Di = [], Ys = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? Ys : Di).push(t = t + s[e]);
})();
function Io(s) {
  if (s < 768) return !1;
  for (let e = 0, t = Di.length; ; ) {
    let i = e + t >> 1;
    if (s < Di[i]) t = i;
    else if (s >= Ys[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function Ln(s) {
  return s >= 127462 && s <= 127487;
}
const Pn = 8205;
function Ho(s, e, t = !0, i = !0) {
  return (t ? _s : Wo)(s, e, i);
}
function _s(s, e, t) {
  if (e == s.length) return e;
  e && Xs(s.charCodeAt(e)) && Js(s.charCodeAt(e - 1)) && e--;
  let i = ui(s, e);
  for (e += Nn(i); e < s.length; ) {
    let n = ui(s, e);
    if (i == Pn || n == Pn || t && Io(n))
      e += Nn(n), i = n;
    else if (Ln(n)) {
      let r = 0, o = e - 2;
      for (; o >= 0 && Ln(ui(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function Wo(s, e, t) {
  for (; e > 0; ) {
    let i = _s(s, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function ui(s, e) {
  let t = s.charCodeAt(e);
  if (!Js(t) || e + 1 == s.length) return t;
  let i = s.charCodeAt(e + 1);
  return Xs(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Xs(s) {
  return s >= 56320 && s < 57344;
}
function Js(s) {
  return s >= 55296 && s < 56320;
}
function Nn(s) {
  return s < 65536 ? 1 : 2;
}
class T {
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
    [e, t] = Ke(this, e, t);
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
    [e, t] = Ke(this, e, t);
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
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new nt(this), r = new nt(e);
    for (let o = t, a = t; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (a += n.value.length, n.done || a >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new nt(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Qs(this, e, t);
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
    return new Zs(i);
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
    return e.length == 1 && !e[0] ? T.empty : e.length <= 32 ? new P(e) : ne.from(P.split(e, []));
  }
}
class P extends T {
  constructor(e, t = Fo(e)) {
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
      let o = this.text[r], a = n + o.length;
      if ((t ? i : a) >= e)
        return new $o(n, a, i, o);
      n = a + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let r = e <= 0 && t >= this.length ? this : new P(In(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), a = Nt(r.text, o.text.slice(), 0, r.length);
      if (a.length <= 32)
        i.push(new P(a, o.length + r.length));
      else {
        let l = a.length >> 1;
        i.push(new P(a.slice(0, l)), new P(a.slice(l)));
      }
    } else
      i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof P))
      return super.replace(e, t, i);
    [e, t] = Ke(this, e, t);
    let n = Nt(this.text, Nt(i.text, In(this.text, 0, e)), t), r = this.length + i.length - (t - e);
    return n.length <= 32 ? new P(n, r) : ne.from(P.split(n, []), r);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Ke(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let a = this.text[o], l = r + a.length;
      r > e && o && (n += i), e < l && t > r && (n += a.slice(Math.max(0, e - r), t - r)), r = l + 1;
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
class ne extends T {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], a = n + o.length, l = i + o.lines - 1;
      if ((t ? l : a) >= e)
        return o.lineInner(e, t, i, n);
      n = a + 1, i = l + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let a = this.children[r], l = o + a.length;
      if (e <= l && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (l >= t ? 2 : 0));
        o >= e && l <= t && !h ? i.push(a) : a.decompose(e - o, t - o, i, h);
      }
      o = l + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Ke(this, e, t), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], a = r + o.length;
        if (e >= r && t <= a) {
          let l = o.replace(e - r, t - r, i), h = this.lines - o.lines + l.lines;
          if (l.lines < h >> 4 && l.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = l, new ne(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, a, l);
        }
        r = a + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Ke(this, e, t);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let a = this.children[r], l = o + a.length;
      o > e && r && (n += i), e < l && t > o && (n += a.sliceString(e - o, t - o, i)), o = l + 1;
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
    let i = 0, [n, r, o, a] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, r += t) {
      if (n == o || r == a)
        return i;
      let l = this.children[n], h = e.children[r];
      if (l != h)
        return i + l.scanIdentical(h, t);
      i += l.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let f of e)
      i += f.lines;
    if (i < 32) {
      let f = [];
      for (let p of e)
        p.flatten(f);
      return new P(f, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, o = n >> 1, a = [], l = 0, h = -1, c = [];
    function d(f) {
      let p;
      if (f.lines > r && f instanceof ne)
        for (let g of f.children)
          d(g);
      else f.lines > o && (l > o || !l) ? (u(), a.push(f)) : f instanceof P && l && (p = c[c.length - 1]) instanceof P && f.lines + p.lines <= 32 ? (l += f.lines, h += f.length + 1, c[c.length - 1] = new P(p.text.concat(f.text), p.length + 1 + f.length)) : (l + f.lines > n && u(), l += f.lines, h += f.length + 1, c.push(f));
    }
    function u() {
      l != 0 && (a.push(c.length == 1 ? c[0] : ne.from(c, h)), h = -1, l = c.length = 0);
    }
    for (let f of e)
      d(f);
    return u(), a.length == 1 ? a[0] : new ne(a, t);
  }
}
T.empty = /* @__PURE__ */ new P([""], 0);
function Fo(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function Nt(s, e, t = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let a = s[r], l = n + a.length;
    l >= t && (l > i && (a = a.slice(0, i - n)), n < t && (a = a.slice(t - n)), o ? (e[e.length - 1] += a, o = !1) : e.push(a)), n = l + 1;
  }
  return e;
}
function In(s, e, t) {
  return Nt(s, [""], e, t);
}
class nt {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof P ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, a = n instanceof P ? n.text.length : n.children.length;
      if (o == (t > 0 ? a : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof P) {
        let l = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, l.length > Math.max(0, e))
          return this.value = e == 0 ? l : t > 0 ? l.slice(e) : l.slice(0, l.length - e), this;
        e -= l.length;
      } else {
        let l = n.children[o + (t < 0 ? -1 : 0)];
        e > l.length ? (e -= l.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(l), this.offsets.push(t > 0 ? 1 : (l instanceof P ? l.text.length : l.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Qs {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new nt(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
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
class Zs {
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
typeof Symbol < "u" && (T.prototype[Symbol.iterator] = function() {
  return this.iter();
}, nt.prototype[Symbol.iterator] = Qs.prototype[Symbol.iterator] = Zs.prototype[Symbol.iterator] = function() {
  return this;
});
class $o {
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
function Ke(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function re(s, e, t = !0, i = !0) {
  return Ho(s, e, t, i);
}
function Vo(s) {
  return s >= 56320 && s < 57344;
}
function zo(s) {
  return s >= 55296 && s < 56320;
}
function qo(s, e) {
  let t = s.charCodeAt(e);
  if (!zo(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return Vo(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function jo(s) {
  return s < 65536 ? 1 : 2;
}
const Bi = /\r\n?|\n/;
var _ = /* @__PURE__ */ (function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
})(_ || (_ = {}));
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
    Li(this, e, t);
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
    return this.empty ? e : e.empty ? this : er(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : Pi(this, e, t);
  }
  mapPos(e, t = -1, i = _.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let a = this.sections[o++], l = this.sections[o++], h = n + a;
      if (l < 0) {
        if (h > e)
          return r + (e - n);
        r += a;
      } else {
        if (i != _.Simple && h >= e && (i == _.TrackDel && n < e && h > e || i == _.TrackBefore && n < e || i == _.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !a)
          return e == n || t < 0 ? r : r + l;
        r += l;
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
      let r = this.sections[i++], o = this.sections[i++], a = n + r;
      if (o >= 0 && n <= t && a >= e)
        return n < e && a > t ? "cover" : !0;
      n = a;
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
class W extends ue {
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
    return Li(this, (t, i, n, r, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return Pi(this, e, t, !0);
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
      let o = t[n], a = t[n + 1];
      if (a >= 0) {
        t[n] = a, t[n + 1] = o;
        let l = n >> 1;
        for (; i.length < l; )
          i.push(T.empty);
        i.push(o ? e.slice(r, r + o) : T.empty);
      }
      r += o;
    }
    return new W(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : er(this, e, !0);
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
    return e.empty ? this : Pi(this, e, t, !0);
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
    Li(this, e, t);
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
    e: for (let o = 0, a = 0; ; ) {
      let l = o == e.length ? 1e9 : e[o++];
      for (; a < l || a == l && r.len == 0; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, l - a);
        z(n, c, -1);
        let d = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        z(t, c, d), d > 0 && xe(i, t, r.text), r.forward(c), a += c;
      }
      let h = e[o++];
      for (; a < h; ) {
        if (r.done)
          break e;
        let c = Math.min(r.len, h - a);
        z(t, c, -1), z(n, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), a += c;
      }
    }
    return {
      changes: new W(t, i),
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
    let n = [], r = [], o = 0, a = null;
    function l(c = !1) {
      if (!c && !n.length)
        return;
      o < t && z(n, t - o, -1);
      let d = new W(n, r);
      a = a ? a.compose(d.map(a)) : d, n = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let d of c)
          h(d);
      else if (c instanceof W) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        l(), a = a ? a.compose(c.map(a)) : c;
      } else {
        let { from: d, to: u = d, insert: f } = c;
        if (d > u || d < 0 || u > t)
          throw new RangeError(`Invalid change range ${d} to ${u} (in doc of length ${t})`);
        let p = f ? typeof f == "string" ? T.of(f.split(i || Bi)) : f : T.empty, g = p.length;
        if (d == u && g == 0)
          return;
        d < o && l(), d > o && z(n, d - o, -1), z(n, u - d, g), xe(r, n, p), o = u;
      }
    }
    return h(e), l(!a), a;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new W(e ? [e, -1] : [], []);
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
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, a) => a && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          t.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(T.empty);
          i[n] = T.of(r.slice(1)), t.push(r[0], i[n].length);
        }
      }
    }
    return new W(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new W(e, t);
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
      s.push(T.empty);
    s.push(t);
  }
}
function Li(s, e, t) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let a = s.sections[o++], l = s.sections[o++];
    if (l < 0)
      n += a, r += a;
    else {
      let h = n, c = r, d = T.empty;
      for (; h += a, c += l, l && i && (d = d.append(i[o - 2 >> 1])), !(t || o == s.sections.length || s.sections[o + 1] < 0); )
        a = s.sections[o++], l = s.sections[o++];
      e(n, h, r, c, d), n = h, r = c;
    }
  }
}
function Pi(s, e, t, i = !1) {
  let n = [], r = i ? [] : null, o = new lt(s), a = new lt(e);
  for (let l = -1; ; ) {
    if (o.done && a.len || a.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && a.ins == -1) {
      let h = Math.min(o.len, a.len);
      z(n, h, -1), o.forward(h), a.forward(h);
    } else if (a.ins >= 0 && (o.ins < 0 || l == o.i || o.off == 0 && (a.len < o.len || a.len == o.len && !t))) {
      let h = a.len;
      for (z(n, a.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && l < o.i && o.len <= c && (z(n, 0, o.ins), r && xe(r, n, o.text), l = o.i), o.forward(c), h -= c;
      }
      a.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (a.ins == -1) {
          let d = Math.min(c, a.len);
          h += d, c -= d, a.forward(d);
        } else if (a.ins == 0 && a.len < c)
          c -= a.len, a.next();
        else
          break;
      z(n, h, l < o.i ? o.ins : 0), r && l < o.i && xe(r, n, o.text), l = o.i, o.forward(o.len - c);
    } else {
      if (o.done && a.done)
        return r ? W.createSet(n, r) : ue.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function er(s, e, t = !1) {
  let i = [], n = t ? [] : null, r = new lt(s), o = new lt(e);
  for (let a = !1; ; ) {
    if (r.done && o.done)
      return n ? W.createSet(i, n) : ue.create(i);
    if (r.ins == 0)
      z(i, r.len, 0, a), r.next();
    else if (o.len == 0 && !o.done)
      z(i, 0, o.ins, a), n && xe(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let l = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          z(i, l, c, a), n && c && xe(n, i, o.text);
        } else o.ins == -1 ? (z(i, r.off ? 0 : r.len, l, a), n && xe(n, i, r.textBit(l))) : (z(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, a), n && !o.off && xe(n, i, o.text));
        a = (r.ins > l || o.ins >= 0 && o.len > l) && (a || i.length > h), r.forward2(l), o.forward(l);
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
    return t >= e.length ? T.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? T.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
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
        let a = o.from, l = Math.max(r.to, o.to);
        n <= t && t--, e.splice(--n, 2, r.anchor > r.head ? y.range(l, a) : y.range(a, l));
      }
    }
    return new y(e, t);
  }
}
function tr(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let gn = 0;
class k {
  constructor(e, t, i, n, r) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = gn++, this.default = e([]), this.extensions = typeof r == "function" ? r(this) : r;
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
    return new k(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : mn), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new It([], this, 0, e);
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
    return new It(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new It(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function mn(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class It {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = gn++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = e[r] >> 1, a = this.type == 2, l = !1, h = !1, c = [];
    for (let d of this.dependencies)
      d == "doc" ? l = !0 : d == "selection" ? h = !0 : (((t = e[d.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[d.id]);
    return {
      create(d) {
        return d.values[o] = i(d), 1;
      },
      update(d, u) {
        if (l && u.docChanged || h && (u.docChanged || u.selection) || Ni(d, c)) {
          let f = i(d);
          if (a ? !Hn(f, d.values[o], n) : !n(f, d.values[o]))
            return d.values[o] = f, 1;
        }
        return 0;
      },
      reconfigure: (d, u) => {
        let f, p = u.config.address[r];
        if (p != null) {
          let g = jt(u, p);
          if (this.dependencies.every((m) => m instanceof k ? u.facet(m) === d.facet(m) : m instanceof ve ? u.field(m, !1) == d.field(m, !1) : !0) || (a ? Hn(f = i(d), g, n) : n(f = i(d), g)))
            return d.values[o] = g, 0;
        } else
          f = i(d);
        return d.values[o] = f, 1;
      }
    };
  }
}
function Hn(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function Ni(s, e) {
  let t = !1;
  for (let i of e)
    st(s, i) & 1 && (t = !0);
  return t;
}
function Ko(s, e, t) {
  let i = t.map((l) => s[l.id]), n = t.map((l) => l.type), r = i.filter((l) => !(l & 1)), o = s[e.id] >> 1;
  function a(l) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let d = jt(l, i[c]);
      if (n[c] == 2)
        for (let u of d)
          h.push(u);
      else
        h.push(d);
    }
    return e.combine(h);
  }
  return {
    create(l) {
      for (let h of i)
        st(l, h);
      return l.values[o] = a(l), 1;
    },
    update(l, h) {
      if (!Ni(l, r))
        return 0;
      let c = a(l);
      return e.compare(c, l.values[o]) ? 0 : (l.values[o] = c, 1);
    },
    reconfigure(l, h) {
      let c = Ni(l, i), d = h.config.facets[e.id], u = h.facet(e);
      if (d && !c && mn(t, d))
        return l.values[o] = u, 0;
      let f = a(l);
      return e.compare(f, u) ? (l.values[o] = u, 0) : (l.values[o] = f, 1);
    }
  };
}
const vt = /* @__PURE__ */ k.define({ static: !0 });
class ve {
  constructor(e, t, i, n, r) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new ve(gn++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(vt).find((i) => i.field == this);
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
        let r = i.facet(vt), o = n.facet(vt), a;
        return (a = r.find((l) => l.field == this)) && a != o.find((l) => l.field == this) ? (i.values[t] = a.create(i), 1) : n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, vt.of({ field: this, create: e })];
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
function Ze(s) {
  return (e) => new ir(e, s);
}
const bn = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Ze(Ae.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Ze(Ae.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Ze(Ae.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Ze(Ae.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Ze(Ae.lowest)
};
class ir {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class ri {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Ii(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return ri.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Ii {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class qt {
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
    for (let u of Go(e, t, o))
      u instanceof ve ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let a = /* @__PURE__ */ Object.create(null), l = [], h = [];
    for (let u of n)
      a[u.id] = h.length << 1, h.push((f) => u.slot(f));
    let c = i?.config.facets;
    for (let u in r) {
      let f = r[u], p = f[0].facet, g = c && c[u] || [];
      if (f.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (a[p.id] = l.length << 1 | 1, mn(g, f))
          l.push(i.facet(p));
        else {
          let m = p.combine(f.map((b) => b.value));
          l.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of f)
          m.type == 0 ? (a[m.id] = l.length << 1 | 1, l.push(m.value)) : (a[m.id] = h.length << 1, h.push((b) => m.dynamicSlot(b)));
        a[p.id] = h.length << 1, h.push((m) => Ko(m, p, f));
      }
    }
    let d = h.map((u) => u(a));
    return new qt(e, o, d, a, l, r);
  }
}
function Go(s, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, a) {
    let l = n.get(o);
    if (l != null) {
      if (l <= a)
        return;
      let h = i[l].indexOf(o);
      h > -1 && i[l].splice(h, 1), o instanceof Ii && t.delete(o.compartment);
    }
    if (n.set(o, a), Array.isArray(o))
      for (let h of o)
        r(h, a);
    else if (o instanceof Ii) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, a);
    } else if (o instanceof ir)
      r(o.inner, o.prec);
    else if (o instanceof ve)
      i[a].push(o), o.provides && r(o.provides, a);
    else if (o instanceof It)
      i[a].push(o), o.facet.extensions && r(o.facet.extensions, Ae.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, a);
    }
  }
  return r(s, Ae.default), i.reduce((o, a) => o.concat(a));
}
function st(s, e) {
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
function jt(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const nr = /* @__PURE__ */ k.define(), Hi = /* @__PURE__ */ k.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), sr = /* @__PURE__ */ k.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), rr = /* @__PURE__ */ k.define(), or = /* @__PURE__ */ k.define(), ar = /* @__PURE__ */ k.define(), lr = /* @__PURE__ */ k.define({
  combine: (s) => s.length ? s[0] : !1
});
class Je {
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
    return new Uo();
  }
}
class Uo {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Je(this, e);
  }
}
class Yo {
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
    return new Yo(e.map || ((t) => t));
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
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && tr(i, t.newLength), r.some((a) => a.type == q.time) || (this.annotations = r.concat(q.time.of(Date.now())));
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
q.time = /* @__PURE__ */ Je.define();
q.userEvent = /* @__PURE__ */ Je.define();
q.addToHistory = /* @__PURE__ */ Je.define();
q.remote = /* @__PURE__ */ Je.define();
function _o(s, e) {
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
function hr(s, e, t) {
  var i;
  let n, r, o;
  return t ? (n = e.changes, r = W.empty(e.changes.length), o = s.changes.compose(e.changes)) : (n = e.changes.map(s.changes), r = s.changes.mapDesc(e.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: I.mapEffects(s.effects, n).concat(I.mapEffects(e.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function Wi(s, e, t) {
  let i = e.selection, n = Ve(e.annotations);
  return e.userEvent && (n = n.concat(q.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof W ? e.changes : W.of(e.changes || [], t, s.facet(sr)),
    selection: i && (i instanceof y ? i : y.single(i.anchor, i.head)),
    effects: Ve(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
function cr(s, e, t) {
  let i = Wi(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = hr(i, Wi(s, e[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = q.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Jo(t ? Xo(n) : n);
}
function Xo(s) {
  let e = s.startState, t = !0;
  for (let n of e.facet(rr)) {
    let r = n(s);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : _o(t, r));
  }
  if (t !== !0) {
    let n, r;
    if (t === !1)
      r = s.changes.invertedDesc, n = W.empty(e.doc.length);
    else {
      let o = s.changes.filter(t);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = q.create(e, n, s.selection && s.selection.map(r), I.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(or);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof q ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof q ? s = r[0] : s = cr(e, Ve(r), !1);
  }
  return s;
}
function Jo(s) {
  let e = s.startState, t = e.facet(ar), i = s;
  for (let n = t.length - 1; n >= 0; n--) {
    let r = t[n](s);
    r && Object.keys(r).length && (i = hr(i, Wi(e, r, s.changes.newLength), !0));
  }
  return i == s ? s : q.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Qo = [];
function Ve(s) {
  return s == null ? Qo : Array.isArray(s) ? s : [s];
}
var ce = /* @__PURE__ */ (function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
})(ce || (ce = {}));
const Zo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Fi;
try {
  Fi = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function ea(s) {
  if (Fi)
    return Fi.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Zo.test(t)))
      return !0;
  }
  return !1;
}
function ta(s) {
  return (e) => {
    if (!/\S/.test(e))
      return ce.Space;
    if (ea(e))
      return ce.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return ce.Word;
    return ce.Other;
  };
}
class D {
  constructor(e, t, i, n, r, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let a = 0; a < this.config.dynamicSlots.length; a++)
      st(this, a << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return st(this, i), jt(this, i);
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
    return cr(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let a of e.effects)
      a.is(ri.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((l, h) => n.set(h, l)), t = null), n.set(a.value.compartment, a.value.extension)) : a.is(I.reconfigure) ? (t = null, i = a.value) : a.is(I.appendConfig) && (t = null, i = Ve(i).concat(a.value));
    let r;
    t ? r = e.startState.values.slice() : (t = qt.resolve(i, n, this), r = new D(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (l, h) => h.reconfigure(l, this), null).values);
    let o = e.startState.facet(Hi) ? e.newSelection : e.newSelection.asSingle();
    new D(t, e.newDoc, o, r, (a, l) => l.update(a, e), e);
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
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), r = [i.range], o = Ve(i.effects);
    for (let a = 1; a < t.ranges.length; a++) {
      let l = e(t.ranges[a]), h = this.changes(l.changes), c = h.map(n);
      for (let u = 0; u < a; u++)
        r[u] = r[u].map(c);
      let d = n.mapDesc(h, !0);
      r.push(l.range.map(d)), n = n.compose(c), o = I.mapEffects(o, c).concat(I.mapEffects(Ve(l.effects), d));
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
    return e instanceof W ? e : W.of(e, this.doc.length, this.facet(D.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return T.of(e.split(this.facet(D.lineSeparator) || Bi));
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
    return t == null ? e.default : (st(this, t), jt(this, t));
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
          let o = i[r], a = e[r];
          n.push(o.init((l) => o.spec.fromJSON(a, l)));
        }
    }
    return D.create({
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
    let t = qt.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof T ? e.doc : T.of((e.doc || "").split(t.staticFacet(D.lineSeparator) || Bi)), n = e.selection ? e.selection instanceof y ? e.selection : y.single(e.selection.anchor, e.selection.head) : y.single(0);
    return tr(n, i.length), t.staticFacet(Hi) || (n = n.asSingle()), new D(t, i, n, t.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(D.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(D.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(lr);
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
    for (let i of this.facet(D.phrases))
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
    for (let r of this.facet(nr))
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
    return ta(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), r = this.charCategorizer(e), o = e - i, a = e - i;
    for (; o > 0; ) {
      let l = re(t, o, !1);
      if (r(t.slice(l, o)) != ce.Word)
        break;
      o = l;
    }
    for (; a < n; ) {
      let l = re(t, a);
      if (r(t.slice(a, l)) != ce.Word)
        break;
      a = l;
    }
    return o == a ? null : y.range(o + i, a + i);
  }
}
D.allowMultipleSelections = Hi;
D.tabSize = /* @__PURE__ */ k.define({
  combine: (s) => s.length ? s[0] : 4
});
D.lineSeparator = sr;
D.readOnly = lr;
D.phrases = /* @__PURE__ */ k.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((n) => s[n] == e[n]);
  }
});
D.languageData = nr;
D.changeFilter = rr;
D.transactionFilter = or;
D.transactionExtender = ar;
ri.reconfigure = /* @__PURE__ */ I.define();
function dr(s, e, t = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], a = i[r];
      if (a === void 0)
        i[r] = o;
      else if (!(a === o || o === void 0)) if (Object.hasOwnProperty.call(t, r))
        i[r] = t[r](a, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
class Ee {
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
    return ht.create(e, t, this);
  }
}
Ee.prototype.startSide = Ee.prototype.endSide = 0;
Ee.prototype.point = !1;
Ee.prototype.mapMode = _.TrackDel;
function xn(s, e) {
  return s == e || s.constructor == e.constructor && s.eq(e);
}
class ht {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ht(e, t, i);
  }
}
function $i(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class yn {
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
    for (let o = n, a = r.length; ; ) {
      if (o == a)
        return o;
      let l = o + a >> 1, h = r[l] - e || (i ? this.value[l].endSide : this.value[l].startSide) - t;
      if (l == o)
        return h >= 0 ? o : a;
      h >= 0 ? a = l : o = l + 1;
    }
  }
  between(e, t, i, n) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + e, this.to[r] + e, this.value[r]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], r = [], o = -1, a = -1;
    for (let l = 0; l < this.value.length; l++) {
      let h = this.value[l], c = this.from[l] + e, d = this.to[l] + e, u, f;
      if (c == d) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = f = p, h.startSide != h.endSide && (f = t.mapPos(c, h.endSide), f < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), f = t.mapPos(d, h.endSide), u > f || u == f && h.startSide > 0 && h.endSide <= 0)
        continue;
      (f - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (a = Math.max(a, f - u)), i.push(h), n.push(u - o), r.push(f - o));
    }
    return { mapped: i.length ? new yn(n, r, i, a) : null, pos: o };
  }
}
class M {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new M(e, t, i, n);
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
    if (i && (t = t.slice().sort($i)), this.isEmpty)
      return t.length ? M.of(t) : this;
    let a = new ur(this, null, -1).goto(0), l = 0, h = [], c = new Kt();
    for (; a.value || l < t.length; )
      if (l < t.length && (a.from - t[l].from || a.startSide - t[l].value.startSide) >= 0) {
        let d = t[l++];
        c.addInner(d.from, d.to, d.value) || h.push(d);
      } else a.rangeIndex == 1 && a.chunkIndex < this.chunk.length && (l == t.length || this.chunkEnd(a.chunkIndex) < t[l].from) && (!o || n > this.chunkEnd(a.chunkIndex) || r < this.chunkPos[a.chunkIndex]) && c.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex]) ? a.nextChunk() : ((!o || n > a.to || r < a.from || o(a.from, a.to, a.value)) && (c.addInner(a.from, a.to, a.value) || h.push(ht.create(a.from, a.to, a.value))), a.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? M.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let a = this.chunkPos[o], l = this.chunk[o], h = e.touchesRange(a, a + l.length);
      if (h === !1)
        n = Math.max(n, l.maxPoint), t.push(l), i.push(e.mapPos(a));
      else if (h === !0) {
        let { mapped: c, pos: d } = l.map(a, e);
        c && (n = Math.max(n, c.maxPoint), t.push(c), i.push(d));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new M(i, t, r || M.empty, n);
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
    return ct.from([this]).goto(e);
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
    return ct.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, n, r = -1) {
    let o = e.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), a = t.filter((d) => d.maxPoint > 0 || !d.isEmpty && d.maxPoint >= r), l = Wn(o, a, i), h = new et(o, l, r), c = new et(a, l, r);
    i.iterGaps((d, u, f) => Fn(h, d, c, u, f, n)), i.empty && i.length == 0 && Fn(h, 0, c, 0, 0, n);
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
    let a = Wn(r, o), l = new et(r, a, 0).goto(i), h = new et(o, a, 0).goto(i);
    for (; ; ) {
      if (l.to != h.to || !Vi(l.active, h.active) || l.point && (!h.point || !xn(l.point, h.point)))
        return !1;
      if (l.to > n)
        return !0;
      l.next(), h.next();
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
    let o = new et(e, null, r).goto(t), a = t, l = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), d = o.pointFrom < t ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, l);
        n.point(a, h, o.point, c, d, o.pointRank), l = Math.min(o.openEnd(h), c.length);
      } else h > a && (n.span(a, h, o.active, l), l = o.openEnd(h));
      if (o.to > i)
        return l + (o.point && o.to > i ? 1 : 0);
      a = o.to, o.next();
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
    let i = new Kt();
    for (let n of e instanceof ht ? [e] : t ? ia(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return M.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != M.empty; n = n.nextLayer)
        t = new M(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
}
M.empty = /* @__PURE__ */ new M([], [], null, -1);
function ia(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if ($i(e, i) > 0)
        return s.slice().sort($i);
      e = i;
    }
  return s;
}
M.empty.nextLayer = M.empty;
class Kt {
  finishChunk(e) {
    this.chunks.push(new yn(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Kt())).add(e, t, i);
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
    return this.finishInner(M.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = M.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Wn(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let a = i.get(r.chunk[o]);
      a != null && (t ? t.mapPos(a) : a) == r.chunkPos[o] && !t?.touchesRange(a, a + r.chunk[o].length) && n.add(r.chunk[o]);
    }
  return n;
}
class ur {
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
class ct {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new ur(o, t, i, r));
    return n.length == 1 ? n[0] : new ct(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      fi(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      fi(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), fi(this.heap, 0);
    }
  }
}
function fi(s, e) {
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
class et {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ct.from(e, t, i);
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
    St(this.active, e), St(this.activeTo, e), St(this.activeRank, e), this.minActive = $n(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    kt(this.active, t, i), kt(this.activeTo, t, n), kt(this.activeRank, t, r), e && kt(e, t, this.cursor.from), this.minActive = $n(this.active, this.activeTo);
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
        this.removeActive(n), i && St(i, n);
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
function Fn(s, e, t, i, n, r) {
  s.goto(e), t.goto(i);
  let o = i + n, a = i, l = i - e, h = !!r.boundChange;
  for (let c = !1; ; ) {
    let d = s.to + l - t.to, u = d || s.endSide - t.endSide, f = u < 0 ? s.to + l : t.to, p = Math.min(f, o);
    if (s.point || t.point ? (s.point && t.point && xn(s.point, t.point) && Vi(s.activeForPoint(s.to), t.activeForPoint(t.to)) || r.comparePoint(a, p, s.point, t.point), c = !1) : (c && r.boundChange(a), p > a && !Vi(s.active, t.active) && r.compareRange(a, p, s.active, t.active), h && p < o && (d || s.openEnd(f) != t.openEnd(f)) && (c = !0)), f > o)
      break;
    a = f, u <= 0 && s.next(), u >= 0 && t.next();
  }
}
function Vi(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !xn(s[t], e[t]))
      return !1;
  return !0;
}
function St(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function kt(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function $n(s, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || s[n].endSide - s[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
function na(s, e, t, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= e)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? t - r % t : 1, n = re(s, n);
  }
  return s.length;
}
const zi = "ͼ", Vn = typeof Symbol > "u" ? "__" + zi : Symbol.for(zi), qi = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ge {
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
    function r(o, a, l, h) {
      let c = [], d = /^@(\w+)\b/.exec(o[0]), u = d && d[1] == "keyframes";
      if (d && a == null) return l.push(o[0] + ";");
      for (let f in a) {
        let p = a[f];
        if (/&/.test(f))
          r(
            f.split(/,\s*/).map((g) => o.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)),
            p,
            l
          );
        else if (p && typeof p == "object") {
          if (!d) throw new RangeError("The value of a property (" + f + ") should be a primitive value.");
          r(n(f), p, c, u);
        } else p != null && c.push(f.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && l.push((i && !d && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
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
    let e = zn[Vn] || 1;
    return zn[Vn] = e + 1, zi + e.toString(36);
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
    let n = e[qi], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new sa(e, r), n.mount(Array.isArray(t) ? t : [t], e);
  }
}
let qn = /* @__PURE__ */ new Map();
class sa {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = qn.get(i);
      if (r) return e[qi] = r;
      this.sheet = new n.CSSStyleSheet(), qn.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[qi] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < e.length; o++) {
      let a = e[o], l = this.modules.indexOf(a);
      if (l < r && l > -1 && (this.modules.splice(l, 1), r--, l = -1), l == -1) {
        if (this.modules.splice(r++, 0, a), i) for (let h = 0; h < a.rules.length; h++)
          i.insertRule(a.rules[h], n++);
      } else {
        for (; r < l; ) n += this.modules[r++].rules.length;
        n += a.rules.length, r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let l = 0; l < this.modules.length; l++)
        o += this.modules[l].getRules() + `
`;
      this.styleTag.textContent = o;
      let a = t.head || t;
      this.styleTag.parentNode != a && a.insertBefore(this.styleTag, a.firstChild);
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
}, dt = {
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
}, ra = typeof navigator < "u" && /Mac/.test(navigator.platform), oa = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var $ = 0; $ < 10; $++) ye[48 + $] = ye[96 + $] = String($);
for (var $ = 1; $ <= 24; $++) ye[$ + 111] = "F" + $;
for (var $ = 65; $ <= 90; $++)
  ye[$] = String.fromCharCode($ + 32), dt[$] = String.fromCharCode($);
for (var pi in ye) dt.hasOwnProperty(pi) || (dt[pi] = ye[pi]);
function aa(s) {
  var e = ra && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || oa && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? dt : ye)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let j = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ji = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ki = /* @__PURE__ */ /Edge\/(\d+)/.exec(j.userAgent), fr = /* @__PURE__ */ /MSIE \d/.test(j.userAgent), Gi = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(j.userAgent), oi = !!(fr || Gi || Ki), jn = !oi && /* @__PURE__ */ /gecko\/(\d+)/i.test(j.userAgent), gi = !oi && /* @__PURE__ */ /Chrome\/(\d+)/.exec(j.userAgent), Kn = "webkitFontSmoothing" in ji.documentElement.style, Ui = !oi && /* @__PURE__ */ /Apple Computer/.test(j.vendor), Gn = Ui && (/* @__PURE__ */ /Mobile\/\w+/.test(j.userAgent) || j.maxTouchPoints > 2);
var x = {
  mac: Gn || /* @__PURE__ */ /Mac/.test(j.platform),
  windows: /* @__PURE__ */ /Win/.test(j.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(j.platform),
  ie: oi,
  ie_version: fr ? ji.documentMode || 6 : Gi ? +Gi[1] : Ki ? +Ki[1] : 0,
  gecko: jn,
  gecko_version: jn ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(j.userAgent) || [0, 0])[1] : 0,
  chrome: !!gi,
  chrome_version: gi ? +gi[1] : 0,
  ios: Gn,
  android: /* @__PURE__ */ /Android\b/.test(j.userAgent),
  webkit: Kn,
  webkit_version: Kn ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(j.userAgent) || [0, 0])[1] : 0,
  safari: Ui,
  safari_version: Ui ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(j.userAgent) || [0, 0])[1] : 0,
  tabSize: ji.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function wn(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const Gt = /* @__PURE__ */ Object.create(null);
function vn(s, e, t) {
  if (s == e)
    return !0;
  s || (s = Gt), e || (e = Gt);
  let i = Object.keys(s), n = Object.keys(e);
  if (i.length - 0 != n.length - 0)
    return !1;
  for (let r of i)
    if (r != t && (n.indexOf(r) == -1 || s[r] !== e[r]))
      return !1;
  return !0;
}
function la(s, e) {
  for (let t = s.attributes.length - 1; t >= 0; t--) {
    let i = s.attributes[t].name;
    e[i] == null && s.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? s.style.cssText = i : s.getAttribute(t) != i && s.setAttribute(t, i);
  }
}
function Un(s, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? s.style.cssText = t[n] : s.setAttribute(n, t[n]));
  return i;
}
function ha(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class ai {
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
var V = /* @__PURE__ */ (function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
})(V || (V = {}));
class H extends Ee {
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
    return new gt(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Oe(e, t, t, i, e.widget || null, !1);
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
      let { start: r, end: o } = pr(e, t);
      i = (r ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Oe(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new mt(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return M.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
H.none = M.empty;
class gt extends H {
  constructor(e) {
    let { start: t, end: i } = pr(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? wn(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || Gt;
  }
  eq(e) {
    return this == e || e instanceof gt && this.tagName == e.tagName && vn(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
gt.prototype.point = !1;
class mt extends H {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof mt && this.spec.class == e.spec.class && vn(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
mt.prototype.mapMode = _.TrackBefore;
mt.prototype.point = !0;
class Oe extends H {
  constructor(e, t, i, n, r, o) {
    super(t, i, r, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? _.TrackBefore : _.TrackAfter : _.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? V.WidgetRange : this.startSide <= 0 ? V.WidgetBefore : V.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Oe && ca(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Oe.prototype.point = !0;
function pr(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function ca(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function ze(s, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= s ? t[n] = Math.max(t[n], e) : t.push(s, e);
}
class ut extends Ee {
  constructor(e, t, i) {
    super(), this.tagName = e, this.attributes = t, this.rank = i;
  }
  eq(e) {
    return e == this || e instanceof ut && this.tagName == e.tagName && vn(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new ut(e.tagName, e.attributes || Gt, e.rank == null ? 50 : Math.max(0, Math.min(e.rank, 100)));
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return M.of(e, t);
  }
}
ut.prototype.startSide = ut.prototype.endSide = -1;
function ft(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function Yi(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function rt(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Yi(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function Ht(s) {
  return s.nodeType == 3 ? pt(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function ot(s, e, t, i) {
  return t ? Yn(s, e, t, i, -1) || Yn(s, e, t, i, 1) : !1;
}
function we(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function Ut(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function Yn(s, e, t, i, n) {
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
function Yt(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function da(s) {
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
function gr(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function ua(s, e, t, i, n, r, o, a) {
  let l = s.ownerDocument, h = l.defaultView || window;
  for (let c = s, d = !1; c && !d; )
    if (c.nodeType == 1) {
      let u, f = c == l.body, p = 1, g = 1;
      if (f)
        u = da(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (d = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let w = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = gr(c, w)), u = {
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
        let w = e.bottom - e.top, v = u.bottom - u.top;
        b = (n == "center" && w <= v ? e.top + w / 2 - v / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - v + o) - u.top;
      }
      if (i == "nearest" ? e.left < u.left + r ? (m = e.left - (u.left + r), t > 0 && e.right > u.right + m && (m = e.right - u.right + r)) : e.right > u.right - r && (m = e.right - u.right + r, t < 0 && e.left < u.left + m && (m = e.left - (u.left + r))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == a ? e.left - r : e.right - (u.right - u.left) + r) - u.left, m || b)
        if (f)
          h.scrollBy(m, b);
        else {
          let w = 0, v = 0;
          if (b) {
            let R = c.scrollTop;
            c.scrollTop += b / g, v = (c.scrollTop - R) * g;
          }
          if (m) {
            let R = c.scrollLeft;
            c.scrollLeft += m / p, w = (c.scrollLeft - R) * p;
          }
          e = {
            left: e.left - w,
            top: e.top - v,
            right: e.right - w,
            bottom: e.bottom - v
          }, w && Math.abs(w - m) < 1 && (i = "nearest"), v && Math.abs(v - b) < 1 && (n = "nearest");
        }
      if (f)
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
function mr(s, e = !0) {
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
class fa {
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
function br(s) {
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
let _n;
function pt(s, e, t = e) {
  let i = _n || (_n = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function qe(s, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function pa(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function ga(s, e) {
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
function xr(s) {
  return s instanceof Window ? s.pageYOffset > Math.max(0, s.document.documentElement.scrollHeight - s.innerHeight - 4) : s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function yr(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = pe(t);
    } else if (t.parentNode && !Ut(t))
      i = we(t), t = t.parentNode;
    else
      return null;
  }
}
function wr(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !Ut(t))
      i = we(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class Q {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new Q(e.parentNode, we(e), t);
  }
  static after(e, t) {
    return new Q(e.parentNode, we(e) + 1, t);
  }
}
var N = /* @__PURE__ */ (function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
})(N || (N = {}));
const De = N.LTR, Sn = N.RTL;
function vr(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const ma = /* @__PURE__ */ vr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), ba = /* @__PURE__ */ vr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), _i = /* @__PURE__ */ Object.create(null), ie = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  _i[e] = t, _i[t] = -e;
}
function Sr(s) {
  return s <= 247 ? ma[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? ba[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const xa = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class oe {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Sn : De;
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
      let a = e[o];
      if (a.from <= t && a.to >= t) {
        if (a.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? a.from < t : a.to > t : e[r].level > a.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function kr(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !kr(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const E = [];
function ya(s, e, t, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e, a = r < i.length ? i[r].from : t, l = r ? 256 : n;
    for (let h = o, c = l, d = l; h < a; h++) {
      let u = Sr(s.charCodeAt(h));
      u == 512 ? u = c : u == 8 && d == 4 && (u = 16), E[h] = u == 4 ? 2 : u, u & 7 && (d = u), c = u;
    }
    for (let h = o, c = l, d = l; h < a; h++) {
      let u = E[h];
      if (u == 128)
        h < a - 1 && c == E[h + 1] && c & 24 ? u = E[h] = c : E[h] = 256;
      else if (u == 64) {
        let f = h + 1;
        for (; f < a && E[f] == 64; )
          f++;
        let p = h && c == 8 || f < t && E[f] == 8 ? d == 1 ? 1 : 8 : 256;
        for (let g = h; g < f; g++)
          E[g] = p;
        h = f - 1;
      } else u == 8 && d == 1 && (E[h] = 1);
      c = u, u & 7 && (d = u);
    }
  }
}
function wa(s, e, t, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, a = 0, l = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, c = o < i.length ? i[o].from : t;
    for (let d = h, u, f, p; d < c; d++)
      if (f = _i[u = s.charCodeAt(d)])
        if (f < 0) {
          for (let g = a - 3; g >= 0; g -= 3)
            if (ie[g + 1] == -f) {
              let m = ie[g + 2], b = m & 2 ? n : m & 4 ? m & 1 ? r : n : 0;
              b && (E[d] = E[ie[g]] = b), a = g;
              break;
            }
        } else {
          if (ie.length == 189)
            break;
          ie[a++] = d, ie[a++] = u, ie[a++] = l;
        }
      else if ((p = E[d]) == 2 || p == 1) {
        let g = p == n;
        l = g ? 0 : 1;
        for (let m = a - 3; m >= 0; m -= 3) {
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
function va(s, e, t, i) {
  for (let n = 0, r = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : s, a = n < t.length ? t[n].from : e;
    for (let l = o; l < a; ) {
      let h = E[l];
      if (h == 256) {
        let c = l + 1;
        for (; ; )
          if (c == a) {
            if (n == t.length)
              break;
            c = t[n++].to, a = n < t.length ? t[n].from : e;
          } else if (E[c] == 256)
            c++;
          else
            break;
        let d = r == 1, u = (c < e ? E[c] : i) == 1, f = d == u ? d ? 1 : 2 : i;
        for (let p = c, g = n, m = g ? t[g - 1].to : s; p > l; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : s), E[--p] = f;
        l = c;
      } else
        r = h, l++;
    }
  }
}
function Xi(s, e, t, i, n, r, o) {
  let a = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let l = e, h = 0; l < t; ) {
      let c = !0, d = !1;
      if (h == r.length || l < r[h].from) {
        let g = E[l];
        g != a && (c = !1, d = g == 16);
      }
      let u = !c && a == 1 ? [] : null, f = c ? i : i + 1, p = l;
      e: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (d)
            break e;
          let g = r[h];
          if (!c)
            for (let m = g.to, b = h + 1; ; ) {
              if (m == t)
                break e;
              if (b < r.length && r[b].from == m)
                m = r[b++].to;
              else {
                if (E[m] == a)
                  break e;
                break;
              }
            }
          if (h++, u)
            u.push(g);
          else {
            g.from > l && o.push(new oe(l, g.from, f));
            let m = g.direction == De != !(f % 2);
            Ji(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), l = g.to;
          }
          p = g.to;
        } else {
          if (p == t || (c ? E[p] != a : E[p] == a))
            break;
          p++;
        }
      u ? Xi(s, l, p, i + 1, n, u, o) : l < p && o.push(new oe(l, p, f)), l = p;
    }
  else
    for (let l = t, h = r.length; l > e; ) {
      let c = !0, d = !1;
      if (!h || l > r[h - 1].to) {
        let g = E[l - 1];
        g != a && (c = !1, d = g == 16);
      }
      let u = !c && a == 1 ? [] : null, f = c ? i : i + 1, p = l;
      e: for (; ; )
        if (h && p == r[h - 1].to) {
          if (d)
            break e;
          let g = r[--h];
          if (!c)
            for (let m = g.from, b = h; ; ) {
              if (m == e)
                break e;
              if (b && r[b - 1].to == m)
                m = r[--b].from;
              else {
                if (E[m - 1] == a)
                  break e;
                break;
              }
            }
          if (u)
            u.push(g);
          else {
            g.to < l && o.push(new oe(g.to, l, f));
            let m = g.direction == De != !(f % 2);
            Ji(s, m ? i + 1 : i, n, g.inner, g.from, g.to, o), l = g.from;
          }
          p = g.from;
        } else {
          if (p == e || (c ? E[p - 1] != a : E[p - 1] == a))
            break;
          p--;
        }
      u ? Xi(s, p, l, i + 1, n, u, o) : p < l && o.push(new oe(p, l, f)), l = p;
    }
}
function Ji(s, e, t, i, n, r, o) {
  let a = e % 2 ? 2 : 1;
  ya(s, n, r, i, a), wa(s, n, r, i, a), va(n, r, i, a), Xi(s, n, r, e, t, i, o);
}
function Sa(s, e, t) {
  if (!s)
    return [new oe(0, 0, e == Sn ? 1 : 0)];
  if (e == De && !t.length && !xa.test(s))
    return Cr(s.length);
  if (t.length)
    for (; s.length > E.length; )
      E[E.length] = 256;
  let i = [], n = e == De ? 0 : 1;
  return Ji(s, n, n, t, 0, s.length, i), i;
}
function Cr(s) {
  return [new oe(0, s, 0)];
}
let Ar = "";
function ka(s, e, t, i, n) {
  var r;
  let o = i.head - s.from, a = oe.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), l = e[a], h = l.side(n, t);
  if (o == h) {
    let u = a += n ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    l = e[a = u], o = l.side(!n, t), h = l.side(n, t);
  }
  let c = re(s.text, o, l.forward(n, t));
  (c < l.from || c > l.to) && (c = h), Ar = s.text.slice(Math.min(o, c), Math.max(o, c));
  let d = a == (n ? e.length - 1 : 0) ? null : e[a + (n ? 1 : -1)];
  return d && c == h && d.level + (n ? 0 : 1) < l.level ? y.cursor(d.side(!n, t) + s.from, d.forward(n, t) ? 1 : -1, d.level) : y.cursor(c + s.from, l.forward(n, t) ? -1 : 1, l.level);
}
function Ca(s, e, t) {
  for (let i = e; i < t; i++) {
    let n = Sr(s.charCodeAt(i));
    if (n == 1)
      return De;
    if (n == 2 || n == 4)
      return Sn;
  }
  return De;
}
const Mr = /* @__PURE__ */ k.define(), Tr = /* @__PURE__ */ k.define(), Rr = /* @__PURE__ */ k.define(), Er = /* @__PURE__ */ k.define(), Qi = /* @__PURE__ */ k.define(), Or = /* @__PURE__ */ k.define(), Dr = /* @__PURE__ */ k.define(), kn = /* @__PURE__ */ k.define(), Cn = /* @__PURE__ */ k.define(), Br = /* @__PURE__ */ k.define({
  combine: (s) => s.some((e) => e)
}), Lr = /* @__PURE__ */ k.define({
  combine: (s) => s.some((e) => e)
}), Pr = /* @__PURE__ */ k.define();
class je {
  constructor(e, t, i, n, r, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new je(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new je(y.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Ct = /* @__PURE__ */ I.define({ map: (s, e) => s.map(e) }), Nr = /* @__PURE__ */ I.define();
function de(s, e, t) {
  let i = s.facet(Er);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const he = /* @__PURE__ */ k.define({ combine: (s) => s.length ? s[0] : !0 });
let Aa = 0;
const We = /* @__PURE__ */ k.define({
  combine(s) {
    return s.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (s[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class Be {
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
    return new Be(Aa++, e, i, n, (a) => {
      let l = [];
      return o && l.push(li.of((h) => {
        let c = h.plugin(a);
        return c ? o(c) : H.none;
      })), r && l.push(r(a)), l;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Be.define((i, n) => new e(i, n), t);
  }
}
class mi {
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
            if (de(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
        de(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        de(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Ir = /* @__PURE__ */ k.define(), An = /* @__PURE__ */ k.define(), li = /* @__PURE__ */ k.define(), Hr = /* @__PURE__ */ k.define(), Mn = /* @__PURE__ */ k.define(), bt = /* @__PURE__ */ k.define(), Wr = /* @__PURE__ */ k.define();
function Xn(s, e) {
  let t = s.state.facet(Wr);
  if (!t.length)
    return t;
  let i = t.map((r) => r instanceof Function ? r(s) : r), n = [];
  return M.spans(i, e.from, e.to, {
    point() {
    },
    span(r, o, a, l) {
      let h = r - e.from, c = o - e.from, d = n;
      for (let u = a.length - 1; u >= 0; u--, l--) {
        let f = a[u].spec.bidiIsolate, p;
        if (f == null && (f = Ca(e.text, h, c)), l > 0 && d.length && (p = d[d.length - 1]).to == h && p.direction == f)
          p.to = c, d = p.inner;
        else {
          let g = { from: h, to: c, direction: f, inner: [] };
          d.push(g), d = g.inner;
        }
      }
    }
  }), n;
}
const Fr = /* @__PURE__ */ k.define();
function $r(s) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let r of s.state.facet(Fr)) {
    let o = r(s);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
const tt = /* @__PURE__ */ k.define();
class X {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new X(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
      let a = n < e.length ? e[n].fromB : 1e9, l = r < t.length ? t[r] : 1e9, h = Math.min(a, l);
      if (h == 1e9)
        break;
      let c = h + o, d = h, u = c;
      for (; ; )
        if (r < t.length && t[r] <= d) {
          let f = t[r + 1];
          r += 2, d = Math.max(d, f);
          for (let p = n; p < e.length && e[p].fromB <= d; p++)
            o = e[p].toA - e[p].toB;
          u = Math.max(u, f + o);
        } else if (n < e.length && e[n].fromB <= d) {
          let f = e[n++];
          d = Math.max(d, f.toB), u = Math.max(u, f.toA), o = f.toA - f.toB;
        } else
          break;
      i.push(new X(c, u, h, d));
    }
    return i;
  }
}
class _t {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = W.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, a, l) => n.push(new X(r, o, a, l))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new _t(e, t, i);
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
const Ma = [];
class L {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Ma;
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
      t && la(this.dom, t);
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
    return new Q(this.parent.dom, i + (n ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof ci)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class hi extends L {
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
    for (let a of this.children) {
      if (a.sync(e), o += a.length + a.breakAfter, n = i ? i.nextSibling : t.firstChild, r && n != a.dom && (r.written = !0), a.dom.parentNode == t)
        for (; n && n != a.dom; )
          n = Jn(n);
      else
        t.insertBefore(a.dom, n);
      i = a.dom;
    }
    for (n = i ? i.nextSibling : t.firstChild, r && n && (r.written = !0); n; )
      n = Jn(n);
    this.length = o;
  }
}
function Jn(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class ci extends hi {
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
        if (o instanceof fe)
          t.push(n), i = o, n = 0;
        else {
          let a = r + o.length, l = e(o, r);
          if (l !== void 0)
            return l;
          r = a + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, n = -1, r, o = -1;
    if (this.blockTiles((a, l) => {
      let h = l + a.length;
      if (e >= l && e <= h) {
        if (a.isWidget() && t >= -1 && t <= 1) {
          if (a.flags & 32)
            return !0;
          a.flags & 16 && (i = void 0);
        }
        (l < e || e == h && (t < -1 ? a.length : a.covers(1))) && (!i || !a.isWidget() && i.isWidget()) && (i = a, n = e - l), (h > e || e == l && (t > 1 ? a.length : a.covers(-1))) && (!r || !a.isWidget() && r.isWidget()) && (r = a, o = e - l);
      }
    }), !i && !r)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !r ? { tile: i, offset: n } : { tile: r, offset: o };
  }
}
class fe extends hi {
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
    let i = new fe(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Ue extends hi {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let n = new Ue(t || document.createElement("div"), e);
    return (!t || !i) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let n = null, r = -1, o = null, a = -1;
    function l(c, d) {
      for (let u = 0, f = 0; u < c.children.length && f <= d; u++) {
        let p = c.children[u], g = f + p.length;
        g >= d && (p.isComposite() ? l(p, d - f) : (!o || o.isHidden && (t > 0 || i && Ra(o, p))) && (g > d || p.flags & 32) ? (o = p, a = d - f) : (f < d || p.flags & 16 && !p.isHidden) && (n = p, r = d - f)), f = g;
      }
    }
    l(this, e);
    let h = (t < 0 ? n : o) || n || o;
    return h ? { tile: h, offset: h == n ? r : a } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : Ta(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: n, offset: r } = i;
      if (this.dom.contains(n.dom))
        return n.isText() ? new Q(n.dom, Math.min(n.dom.nodeValue.length, r)) : n.domPosFor(r, n.flags & 16 ? 1 : n.flags & 32 ? -1 : t);
      let o = i.tile.parent, a = !1;
      for (let l of o.children) {
        if (a)
          return new Q(l.dom, 0);
        l == i.tile && (a = !0);
      }
    }
    return new Q(this.dom, 0);
  }
}
function Ta(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = Ht(e);
  return t[t.length - 1] || null;
}
function Ra(s, e) {
  let t = s.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class G extends hi {
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
    let a = pt(this.dom, n, r).getClientRects();
    if (!a.length)
      return null;
    let l = a[(o ? o < 0 : t >= 0) ? 0 : a.length - 1];
    return x.safari && !o && l.width == 0 && (l = Array.prototype.find.call(a, (h) => h.width) || l), o ? Yt(l, o < 0) : l || null;
  }
  static of(e, t) {
    let i = new Te(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class Le extends L {
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
      return Yt(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let a = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let l = a ? r.length - 1 : 0; o = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || o.top < o.bottom); l += a ? -1 : 1)
        ;
      return Yt(o, !a);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return T.empty;
    let { root: e } = this;
    if (!e)
      return T.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, n, r) {
    return r || (r = e.toDOM(t), e.editable || (r.contentEditable = "false")), new Le(r, i, e, n);
  }
}
class Xt extends L {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return T.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Ea {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: n, index: r, beforeBreak: o, parents: a } = this;
    for (; e || t > 0; )
      if (n.isComposite())
        if (o) {
          if (!e)
            break;
          i && i.break(), e--, o = !1;
        } else if (r == n.children.length) {
          if (!e && !a.length)
            break;
          i && i.leave(n), o = !!n.breakAfter, { tile: n, index: r } = a.pop(), r++;
        } else {
          let l = n.children[r], h = l.breakAfter;
          (t > 0 ? l.length <= e : l.length < e) && (!i || i.skip(l, 0, l.length) !== !1 || !l.isComposite) ? (o = !!h, r++, e -= l.length) : (a.push({ tile: n, index: r }), n = l, r = 0, i && l.isComposite() && i.enter(l));
        }
      else if (r == n.length)
        o = !!n.breakAfter, { tile: n, index: r } = a.pop(), r++;
      else if (e) {
        let l = Math.min(e, n.length - r);
        i && i.skip(n, r, r + l), e -= l, r += l;
      } else
        break;
    return this.tile = n, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Oa {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = n;
  }
}
class Da {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, n) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), a = o.lastChild;
    if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
      let l = o.children[o.children.length - 1] = new Te(a.dom, a.text + e);
      l.parent = o;
    } else
      o.append(n || Te.of(e, (r = this.cache.find(Te)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? bi(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let n = i;
    for (let a = t.marks.length - 1; a >= 0; a--) {
      let l = t.marks[a], h = n.lastChild;
      if (h instanceof G && h.mark.eq(l.mark))
        h.dom != l.dom && h.setDOM(bi(l.dom)), n = h;
      else {
        if (this.cache.reused.get(l)) {
          let d = L.get(l.dom);
          d && d.setDOM(bi(l.dom));
        }
        let c = G.of(l.mark, l.dom);
        n.append(c), n = c;
      }
      this.cache.reused.set(
        l,
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
    e || (e = Vr);
    let n = Ue.start(e, t || ((i = this.cache.find(Ue)) === null || i === void 0 ? void 0 : i.dom), !!t);
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
      let o = e[r], a;
      if (t > 0 && (a = n.lastChild) && a instanceof G && a.mark.eq(o))
        n = a, t--;
      else {
        let l = G.of(o, (i = this.cache.find(G, (h) => h.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        n.append(l), n = l, t = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !Qn(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(x.ios && Qn(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        xi,
        0,
        32
        /* TileFlag.After */
      ) || new Le(
        xi.toDOM(),
        0,
        xi,
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
        let t = e.rank * 102 + e.value.rank, i = new Oa(e.from, e.to, e.value, t), n = this.wrappers.length;
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
      if (i.from < this.pos && n instanceof fe && n.wrapper.eq(i.wrapper))
        t = n;
      else {
        let r = fe.of(i.wrapper, (e = this.cache.find(fe, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
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
      Xt,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new Xt(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class Ba {
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
      let a = this.textOff = Math.min(e, n.length);
      return r ? null : n.slice(0, a);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const Jt = [Le, Ue, Te, G, Xt, fe, ci];
for (let s = 0; s < Jt.length; s++)
  Jt[s].bucket = s;
class La {
  constructor(e) {
    this.view = e, this.buckets = Jt.map(() => []), this.index = Jt.map(() => 0), this.reused = /* @__PURE__ */ new Map();
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
    for (let a = r.length - 1; a >= 0; a--) {
      let l = (a + o) % r.length, h = r[l];
      if ((!t || t(h)) && !this.reused.has(h))
        return r.splice(l, 1), l < o && this.index[n]--, this.reused.set(h, i), h;
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
        let a = n[r];
        if (!this.reused.has(a) && (o == 0 ? a.widget.compare(e) : a.widget.constructor == e.constructor && e.updateDOM(a.dom, this.view, a.widget)))
          return n.splice(r, 1), r < this.index[0] && this.index[0]--, a.widget == e && a.length == t && (a.flags & 497) == i ? (this.reused.set(
            a,
            1
            /* Reused.Full */
          ), a) : (this.reused.set(
            a,
            2
            /* Reused.DOM */
          ), new Le(a.dom, t, e, a.flags & -498 | i));
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
class Pa {
  constructor(e, t, i, n, r) {
    this.view = e, this.decorations = n, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new La(e), this.text = new Ba(e.state.doc), this.builder = new Da(this.cache, new ci(e, e.contentDOM), M.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new Ea(t), this.reuseWalker = {
      skip: (o, a, l) => {
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
      let a = o < e.length ? e[o++] : null, l = a ? a.fromA : this.old.root.length;
      if (l > n) {
        let h = l - n;
        this.preserve(h, !o, !a), n = l, r += h;
      }
      if (!a)
        break;
      t && a.fromA <= t.range.fromA && a.toA >= t.range.toA ? (this.forward(a.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(r, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, a.toA), this.emit(t.range.toB, a.toB)) : (this.forward(a.fromA, a.toA), this.emit(r, a.toB)), r = a.toB, n = a.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let n = Ha(this.old), r = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (o, a, l) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(l - a);
          else {
            let h = l > 0 || a < o.length ? Le.of(o.widget, this.view, l - a, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, n, r), r = n.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !a && l == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, n, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(a, l), n, r)), r = n.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof Xt)
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
    let i = null, n = this.builder, r = 0, o = M.spans(this.decorations, e, t, {
      point: (a, l, h, c, d, u) => {
        if (h instanceof Oe) {
          if (this.disallowBlockEffectsFor[u]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (l > this.view.state.doc.lineAt(a).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = c.length, d > c.length)
            n.continueWidget(l - a);
          else {
            let f = h.widget || (h.block ? Ye.block : Ye.inline), p = Na(h), g = this.cache.findWidget(f, l - a, p) || Le.of(f, this.view, l - a, p);
            h.block ? (h.startSide > 0 && n.addLineStartIfNotCovered(i), n.addBlockWidget(g)) : (n.ensureLine(i), n.addInlineWidget(g, c, d));
          }
          i = null;
        } else
          i = Ia(i, h);
        l > a && this.text.skip(l - a);
      },
      span: (a, l, h, c) => {
        for (let d = a; d < l; ) {
          let u = this.text.next(Math.min(512, l - d));
          u == null ? (n.addLineStartIfNotCovered(i), n.addBreak(), d++) : (n.ensureLine(i), n.addText(u, h, d == a ? c : h.length), d += u.length), i = null;
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
      r instanceof G ? t.push(r) : r?.isLine() ? i = r : r instanceof fe || (n.nodeName == "DIV" && !i && n != this.view.contentDOM ? i = new Ue(n, Vr) : i || t.push(G.of(new gt({ tagName: n.nodeName.toLowerCase(), attributes: ha(n) }), n)));
    }
    return { line: i, marks: t };
  }
}
function Qn(s, e) {
  let t = (i) => {
    for (let n of i.children)
      if ((e ? n.isText() : n.length) || t(n))
        return !0;
    return !1;
  };
  return t(s);
}
function Na(s) {
  let e = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (e |= 256), e;
}
const Vr = { class: "cm-line" };
function Ia(s, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (s || (s = { class: "cm-line" }), t && wn(t, s), i && (s.class += " " + i)), s;
}
function Ha(s) {
  let e = [];
  for (let t = s.parents.length; t > 1; t--) {
    let i = t == s.parents.length ? s.tile : s.parents[t].tile;
    i instanceof G && e.push(i.mark);
  }
  return e;
}
function bi(s) {
  let e = L.get(s);
  return e && e.setDOM(s.cloneNode()), s;
}
class Ye extends ai {
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
Ye.inline = /* @__PURE__ */ new Ye("span");
Ye.block = /* @__PURE__ */ new Ye("div");
const xi = /* @__PURE__ */ new class extends ai {
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
class Zn {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = H.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ci(e, e.contentDOM), this.updateInner([new X(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: d }) => d < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !Ga(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let r = n > -1 ? Fa(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: d } = this.hasComposition;
      i = new X(c, d, e.changes.mapPos(c, -1), e.changes.mapPos(d, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (x.ie || x.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, a = this.blockWrappers;
    this.updateDeco();
    let l = za(o, this.decorations, e.changes);
    l.length && (i = X.extendWithRanges(i, l));
    let h = ja(a, this.blockWrappers, e.changes);
    return h.length && (i = X.extendWithRanges(i, h)), r && !i.some((c) => c.fromA <= r.range.fromA && c.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, a = new Pa(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && L.get(t.text) && a.cache.reused.set(
          L.get(t.text),
          2
          /* Reused.DOM */
        ), this.tile = a.run(e, t), Zi(o, a.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = x.chrome || x.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof yi && n.push(r.dom);
    i.updateGaps(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Nr) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, n = this.view.root.activeElement, r = n == i, o = !r && !(this.view.state.facet(he) || i.tabIndex > -1) && rt(i, this.view.observer.selectionRange) && !(n && i.contains(n));
    if (!(r || t || o))
      return;
    let a = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, h, c;
    if (l.empty ? c = h = this.inlineDOMNearPos(l.anchor, l.assoc || 1) : (c = this.inlineDOMNearPos(l.head, l.head == l.from ? 1 : -1), h = this.inlineDOMNearPos(l.anchor, l.anchor == l.from ? 1 : -1)), x.gecko && l.empty && !this.hasComposition && Wa(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null)), h = c = new Q(u, 0), a = !0;
    }
    let d = this.view.observer.selectionRange;
    (a || !d.focusNode || (!ot(h.node, h.offset, d.anchorNode, d.anchorOffset) || !ot(c.node, c.offset, d.focusNode, d.focusOffset)) && !this.suppressWidgetCursorChange(d, l)) && (this.view.observer.ignore(() => {
      x.android && x.chrome && i.contains(d.focusNode) && Ka(d.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = ft(this.view.root);
      if (u) if (l.empty) {
        if (x.gecko) {
          let f = $a(h.node, h.offset);
          if (f && f != 3) {
            let p = (f == 1 ? yr : wr)(h.node, h.offset);
            p && (h = new Q(p.node, p.offset));
          }
        }
        u.collapse(h.node, h.offset), l.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = l.bidiLevel);
      } else if (u.extend) {
        u.collapse(h.node, h.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let f = document.createRange();
        l.anchor > l.head && ([h, c] = [c, h]), f.setEnd(c.node, c.offset), f.setStart(h.node, h.offset), u.removeAllRanges(), u.addRange(f);
      }
      o && this.view.root.activeElement == i && (i.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Q(d.anchorNode, d.anchorOffset), this.impreciseHead = c.precise ? null : new Q(d.focusNode, d.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && ot(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = ft(e.root), { anchorNode: n, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o)
      return;
    let a = o.posAtStart;
    if (t.head == a || t.head == a + o.length)
      return;
    let l = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!l || !h || l.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let d = e.observer.selectionRange;
    e.docView.posFromDOM(d.anchorNode, d.anchorOffset) != t.from && i.collapse(n, r);
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
          let a = e.parentNode;
          if (a == i.dom)
            break;
          o == 0 && a.firstChild != a.lastChild && (e == a.firstChild ? o = -1 : o = 1), e = a;
        }
        o < 0 ? r = e : r = e.nextSibling;
      }
      if (r == i.dom.firstChild)
        return n;
      for (; r && !L.get(r); )
        r = r.nextSibling;
      if (!r)
        return n + i.length;
      for (let o = 0, a = n; ; o++) {
        let l = i.children[o];
        if (l.dom == r)
          return a;
        a += l.length + l.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? n + t : n + (t ? i.length : 0) : n;
  }
  domAtPos(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(n, t);
  }
  inlineDOMNearPos(e, t) {
    let i, n = -1, r = !1, o, a = -1, l = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= e)
          return !0;
        h.flags & 16 && (r = !0);
      } else {
        let d = c + h.length;
        if (c <= e && (i = h, n = e - c, r = d < e), d >= e && !o && (o = h, a = e - c, l = c > e), c > e && o)
          return !0;
      }
    }), !i && !o ? this.domAtPos(e, t) : (r && o ? i = null : l && i && (o = null), i && t < 0 || !o ? i.domIn(n, t) : o.domIn(a, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: n } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof yi ? null : i.coordsInWidget(n, t, !0) : i.coordsIn(n, t);
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
        for (let a of r.children) {
          if (a.length >= o) {
            let l = n(a, o);
            if (l)
              return l;
          }
          if (o -= a.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let a = re(r.text, o);
        if (a == o)
          return null;
        let l = pt(r.dom, o, a).getClientRects();
        for (let h = 0; h < l.length; h++) {
          let c = l[h];
          if (h == l.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return n(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, a = -1, l = this.view.textDirection == N.LTR, h = 0, c = (d, u, f) => {
      for (let p = 0; p < d.children.length && !(u > n); p++) {
        let g = d.children[p], m = u + g.length, b = g.dom.getBoundingClientRect(), { height: w } = b;
        if (f && !p && (h += b.top - f.top), g instanceof fe)
          m > i && c(g, u, b);
        else if (u >= i && (h > 0 && t.push(-h), t.push(w + h), h = 0, o)) {
          let v = g.dom.lastChild, R = v ? Ht(v) : [];
          if (R.length) {
            let C = R[R.length - 1], S = l ? C.right - b.left : b.right - C.left;
            S > a && (a = S, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = m);
          }
        }
        f && p == d.children.length - 1 && (h += f.bottom - b.bottom), u = m + g.breakAfter;
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
        let a = 0, l;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = Ht(h.dom);
          if (c.length != 1)
            return;
          a += c[0].width, l = c[0].height;
        }
        if (a)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: a / o.length,
            textHeight: l
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, n, r;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = Ht(t.firstChild)[0];
      i = t.getBoundingClientRect().height, n = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: n, textHeight: r };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == t.viewports.length ? null : t.viewports[n], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let a = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(H.replace({
          widget: new yi(a),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return H.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(li).map((r) => (this.dynamicDecorationMap[e++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(Mn).map((r, o) => {
      let a = typeof r == "function";
      return a && (i = !0), a ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(M.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(Hr).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = c.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let c of this.view.state.facet(Pr))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (d) {
        de(this.view.state, d, "scroll handler");
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
    let o = $r(this.view), a = {
      left: n.left - o.left,
      top: n.top - o.top,
      right: n.right + o.right,
      bottom: n.bottom + o.bottom
    }, { offsetWidth: l, offsetHeight: h } = this.view.scrollDOM;
    if (ua(this.view.scrollDOM, a, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, h), -h), this.view.textDirection == N.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let c = this.view.docView.lineAt(i.head, 1);
      c && c.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    Zi(this.tile);
  }
}
function Zi(s, e) {
  let t = e?.get(s);
  if (t != 1) {
    t == null && s.destroy();
    for (let i of s.children)
      Zi(i, e);
  }
}
function Wa(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function zr(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = yr(t.focusNode, t.focusOffset), n = wr(t.focusNode, t.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let a = L.get(n.node);
    if (!a || a.isText() && a.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let l = L.get(i.node);
      !l || l.isText() && l.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Fa(s, e, t) {
  let i = zr(s, t);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, a = n.nodeValue;
  if (/[\n\r]/.test(a) || s.state.doc.sliceString(i.from, i.to) != a)
    return null;
  let l = e.invertedDesc;
  return { range: new X(l.mapPos(r), l.mapPos(o), r, o), text: n };
}
function $a(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let Va = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ze(e, t, this.changes);
  }
  comparePoint(e, t) {
    ze(e, t, this.changes);
  }
  boundChange(e) {
    ze(e, e, this.changes);
  }
};
function za(s, e, t) {
  let i = new Va();
  return M.compare(s, e, t, i), i.changes;
}
class qa {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    ze(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    ze(e, e, this.changes);
  }
}
function ja(s, e, t) {
  let i = new qa();
  return M.compare(s, e, t, i), i.changes;
}
function Ka(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function Ga(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
class yi extends ai {
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
function Ua(s, e, t = 1) {
  let i = s.charCategorizer(e), n = s.doc.lineAt(e), r = e - n.from;
  if (n.length == 0)
    return y.cursor(e);
  r == 0 ? t = 1 : r == n.length && (t = -1);
  let o = r, a = r;
  t < 0 ? o = re(n.text, r, !1) : a = re(n.text, r);
  let l = i(n.text.slice(o, a));
  for (; o > 0; ) {
    let h = re(n.text, o, !1);
    if (i(n.text.slice(h, o)) != l)
      break;
    o = h;
  }
  for (; a < n.length; ) {
    let h = re(n.text, a);
    if (i(n.text.slice(a, h)) != l)
      break;
    a = h;
  }
  return y.range(o + n.from, a + n.from);
}
function Ya(s, e, t, i, n) {
  let r = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let a = s.viewState.heightOracle.textHeight, l = Math.floor((n - t.top - (s.defaultLineHeight - a) * 0.5) / a);
    r += l * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(t.from, t.to);
  return t.from + na(o, r, s.state.tabSize);
}
function en(s, e, t) {
  let i = s.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let r of i.type) {
      if (r.from > e)
        break;
      if (!(r.to < e)) {
        if (r.from < e && r.to > e)
          return r;
        (!n || r.type == V.Text && (n.type != r.type || (t < 0 ? r.from < e : r.to > e))) && (n = r);
      }
    }
    return n || i;
  }
  return i;
}
function _a(s, e, t, i) {
  let n = en(s, e.head, e.assoc || -1), r = !i || n.type != V.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), a = s.textDirectionAt(n.from), l = s.posAtCoords({
      x: t == (a == N.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (l != null)
      return y.cursor(l, t ? -1 : 1);
  }
  return y.cursor(t ? n.to : n.from, t ? -1 : 1);
}
function es(s, e, t, i) {
  let n = s.state.doc.lineAt(e.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let a = e, l = null; ; ) {
    let h = ka(n, r, o, a, t), c = Ar;
    if (!h) {
      if (n.number == (t ? s.state.doc.lines : 1))
        return a;
      c = `
`, n = s.state.doc.line(n.number + (t ? 1 : -1)), r = s.bidiSpans(n), h = s.visualLineSide(n, !t);
    }
    if (l) {
      if (!l(c))
        return a;
    } else {
      if (!i)
        return h;
      l = i(c);
    }
    a = h;
  }
}
function Xa(s, e, t) {
  let i = s.state.charCategorizer(e), n = i(t);
  return (r) => {
    let o = i(r);
    return n == ce.Space && (n = o), n == o;
  };
}
function Ja(s, e, t, i) {
  let n = e.head, r = t ? 1 : -1;
  if (n == (t ? s.state.doc.length : 0))
    return y.cursor(n, e.assoc);
  let o = e.goalColumn, a, l = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(n, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), c = s.documentTop;
  if (h)
    o == null && (o = h.left - l.left), a = r < 0 ? h.top : h.bottom;
  else {
    let p = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(l.right - l.left, s.defaultCharacterWidth * (n - p.from))), a = (r < 0 ? p.top : p.bottom) + c;
  }
  let d = l.left + o, u = s.viewState.heightOracle.textHeight >> 1, f = i ?? u;
  for (let p = 0; ; p += u) {
    let g = a + (f + p) * r, m = tn(s, { x: d, y: g }, !1, r);
    if (t ? g > l.bottom : g < l.top)
      return y.cursor(m.pos, m.assoc);
    let b = s.coordsAtPos(m.pos, m.assoc), w = b ? (b.top + b.bottom) / 2 : 0;
    if (!b || (t ? w > a : w < a))
      return y.cursor(m.pos, m.assoc, void 0, o);
  }
}
function at(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(e - 1, e + 1, (r, o, a) => {
        if (e > r && e < o) {
          let l = i || t || (e - r < o - e ? -1 : 1);
          e = l < 0 ? r : o, i = l;
        }
      });
    if (!i)
      return e;
  }
}
function qr(s, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let n = e.ranges[i], r = null;
    if (n.empty) {
      let o = at(s, n.from, 0);
      o != n.from && (r = y.cursor(o, -1));
    } else {
      let o = at(s, n.from, -1), a = at(s, n.to, 1);
      (o != n.from || a != n.to) && (r = y.range(n.from == n.anchor ? o : a, n.from == n.head ? o : a));
    }
    r && (t || (t = e.ranges.slice()), t[i] = r);
  }
  return t ? y.create(t, e.mainIndex) : e;
}
function wi(s, e, t) {
  let i = at(s.state.facet(bt).map((n) => n(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : y.cursor(i, i < t.from ? 1 : -1);
}
class se {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function tn(s, e, t, i) {
  let n = s.contentDOM.getBoundingClientRect(), r = n.top + s.viewState.paddingTop, { x: o, y: a } = e, l = a - r, h;
  for (; ; ) {
    if (l < 0)
      return new se(0, 1);
    if (l > s.viewState.docHeight)
      return new se(s.state.doc.length, -1);
    if (h = s.elementAtHeight(l), i == null)
      break;
    if (h.type == V.Text) {
      if (i < 0 ? h.to < s.viewport.from : h.from > s.viewport.to)
        break;
      let u = s.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= l + r : u.bottom >= l + r))
        break;
    }
    let d = s.viewState.heightOracle.textHeight / 2;
    l = i > 0 ? h.bottom + d : h.top - d;
  }
  if (s.viewport.from >= h.to || s.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == V.Text) {
      let d = Ya(s, n, h, o, a);
      return new se(d, d == h.from ? 1 : -1);
    }
  }
  if (h.type != V.Text)
    return l < (h.top + h.bottom) / 2 ? new se(h.from, 1) : new se(h.to, -1);
  let c = s.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = s.docView.lineAt(h.from, -2)), new Qa(s, o, a, s.textDirectionAt(h.from)).scanTile(c, h.from);
}
class Qa {
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
    let n = 0, r = e.length - 1, o = /* @__PURE__ */ new Set(), a = this.bidiIn(e[0], e[r]), l, h, c = -1, d = 1e9, u;
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
          let w = m[b], v = 0;
          if (!(w.width == 0 && m.length > 1)) {
            if (w.bottom < this.y)
              (!l || l.bottom < w.bottom) && (l = w), v = 1;
            else if (w.top > this.y)
              (!h || h.top > w.top) && (h = w), v = -1;
            else {
              let R = w.left > this.x ? this.x - w.left : w.right < this.x ? this.x - w.right : 0, C = Math.abs(R);
              C < d && (c = g, d = C, u = w), R && (v = R < 0 == (this.baseDir == N.LTR) ? -1 : 1);
            }
            v == -1 && (!a || this.baseDirAt(e[g], 1)) ? r = g : v == 1 && (!a || this.baseDirAt(e[g + 1], -1)) && (n = g + 1);
          }
        }
    }
    if (!u) {
      if (!h && !l)
        return { i: e[0], after: !1 };
      let p = l && (!h || this.y - l.bottom < h.top - this.y) ? l : h;
      return this.y = (p.top + p.bottom) / 2, this.scan(e, t, !0);
    }
    if (d && !i) {
      let { top: p, bottom: g } = u;
      if (l && l.bottom > (p + p + g) / 3)
        return this.y = l.bottom - 1, this.scan(e, t, !0);
      if (h && h.top < (p + g + g) / 3)
        return this.y = h.top + 1, this.scan(e, t, !0);
    }
    let f = (a ? this.dirAt(e[c], 1) : this.baseDir) == N.LTR;
    return {
      i: c,
      // Test whether x is closes to the start or end of this element
      after: this.x > (u.left + u.right) / 2 == f
    };
  }
  scanText(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r = re(e.text, r))
      i.push(t + r);
    i.push(t + e.length);
    let n = this.scan(i, (r) => {
      let o = i[r] - t, a = i[r + 1] - t;
      return pt(e.dom, o, a).getClientRects();
    });
    return n.after ? new se(i[n.i + 1], -1) : new se(i[n.i], 1);
  }
  scanTile(e, t) {
    if (!e.length)
      return new se(t, 1);
    if (e.children.length == 1) {
      let a = e.children[0];
      if (a.isText())
        return this.scanText(a, t);
      if (a.isComposite())
        return this.scanTile(a, t);
    }
    let i = [t];
    for (let a = 0, l = t; a < e.children.length; a++)
      i.push(l += e.children[a].length);
    let n = this.scan(i, (a) => {
      let l = e.children[a];
      return l.flags & 48 ? null : (l.dom.nodeType == 1 ? l.dom : pt(l.dom, 0, l.length)).getClientRects();
    }), r = e.children[n.i], o = i[n.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : n.after ? new se(i[n.i + 1], -1) : new se(o, 1);
  }
}
const He = "￿";
class Za {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(D.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += He;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = L.get(n), a = n.nextSibling;
      if (a == t) {
        o?.breakAfter && !a && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let l = L.get(a);
      (o && l ? o.breakAfter : (o ? o.breakAfter : Ut(n)) || Ut(a) && (n.nodeName != "BR" || o?.isWidget()) && this.text.length > r) && !tl(a, t) && this.lineBreak(), n = a;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, a;
      if (this.lineSeparator ? (r = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (a = n.exec(t)) && (r = a.index, o = a[0].length), this.append(t.slice(i, r < 0 ? t.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let l of this.points)
          l.node == e && l.pos > this.text.length && (l.pos -= o - 1);
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
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (el(e, i.node, i.offset) ? t : 0));
  }
}
function el(s, e, t) {
  for (; ; ) {
    if (!e || t < pe(e))
      return !1;
    if (e == s)
      return !0;
    t = we(e) + 1, e = e.parentNode;
  }
}
function tl(s, e) {
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
class ts {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class il {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: r, impreciseAnchor: o } = e.docView, a = e.state.selection;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = jr(e.docView.tile, t, i, 0))) {
      let l = r || o ? [] : sl(e), h = new Za(l, e);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = rl(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, h = r && r.node == l.focusNode && r.offset == l.focusOffset || !Yi(e.contentDOM, l.focusNode) ? a.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Yi(e.contentDOM, l.anchorNode) ? a.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), d = e.viewport;
      if ((x.ios || x.chrome) && a.main.empty && h != c && (d.from > 0 || d.to < e.state.doc.length)) {
        let u = Math.min(h, c), f = Math.max(h, c), p = d.from - u, g = d.to - f;
        (p == 0 || p == 1 || u == 0) && (g == 0 || g == -1 || f == e.state.doc.length) && (h = 0, c = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && a.ranges.length > 1)
        this.newSel = a.replaceRange(y.range(c, h));
      else if (e.lineWrapping && c == h && !(a.main.empty && a.main.head == h) && e.inputState.lastTouchTime > Date.now() - 100) {
        let u = e.coordsAtPos(h, -1), f = 0;
        u && (f = e.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = y.create([y.cursor(h, f)]);
      } else
        this.newSel = y.single(c, h);
    }
  }
}
function jr(s, e, t, i) {
  if (s.isComposite()) {
    let n = -1, r = -1, o = -1, a = -1;
    for (let l = 0, h = i, c = i; l < s.children.length; l++) {
      let d = s.children[l], u = h + d.length;
      if (h < e && u > t)
        return jr(d, e, t, h);
      if (u >= e && n == -1 && (n = l, r = h), h > t && d.dom.parentNode == s.dom) {
        o = l, a = c;
        break;
      }
      c = u, h = u + d.breakAfter;
    }
    return {
      from: r,
      to: a < 0 ? i + s.length : a,
      startDOM: (n ? s.children[n - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: o < s.children.length && o >= 0 ? s.children[o].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function Kr(s, e) {
  let t, { newSel: i } = e, { state: n } = s, r = n.selection.main, o = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: a, to: l } = e.bounds, h = r.from, c = null;
    (o === 8 || x.android && e.text.length < l - a) && (h = r.to, c = "end");
    let d = n.doc.sliceString(a, l, He), u, f;
    !r.empty && r.from >= a && r.to <= l && (e.typeOver || d != e.text) && d.slice(0, r.from - a) == e.text.slice(0, r.from - a) && d.slice(r.to - a) == e.text.slice(u = e.text.length - (d.length - (r.to - a))) ? t = {
      from: r.from,
      to: r.to,
      insert: T.of(e.text.slice(r.from - a, u).split(He))
    } : (f = Gr(d, e.text, h - a, c)) && (x.chrome && o == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == He + He && f.toB--, t = {
      from: a + f.from,
      to: a + f.toA,
      insert: T.of(e.text.slice(f.from, f.toB).split(He))
    });
  } else i && (!s.hasFocus && n.facet(he) || Qt(i, r)) && (i = null);
  if (!t && !i)
    return !1;
  if ((x.mac || x.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: T.of([t.insert.toString().replace(".", " ")]) }) : n.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: n.toText(s.inputState.insertingText)
  } : x.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = y.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: T.of([" "]) }), t)
    return Tn(s, t, i, o);
  if (i && !Qt(i, r)) {
    let a = !1, l = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (a = !0), l = s.inputState.lastSelectionOrigin, l == "select.pointer" && (i = qr(n.facet(bt).map((h) => h(s)), i))), s.dispatch({ selection: i, scrollIntoView: a, userEvent: l }), !0;
  } else
    return !1;
}
function Tn(s, e, t, i = -1) {
  if (x.ios && s.inputState.flushIOSKey(e))
    return !0;
  let n = s.state.selection.main;
  if (x.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && s.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && qe(s.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && qe(s.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && qe(s.contentDOM, "Delete", 46)))
    return !0;
  let r = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, a = () => o || (o = nl(s, e, t));
  return s.state.facet(Or).some((l) => l(s, e.from, e.to, r, a)) || s.dispatch(a()), !0;
}
function nl(s, e, t) {
  let i, n = s.state, r = n.selection.main, o = -1;
  if (e.from == e.to && e.from < r.from || e.from > r.to) {
    let l = e.from < r.from ? -1 : 1, h = l < 0 ? r.from : r.to, c = at(n.facet(bt).map((d) => d(s)), h, l);
    e.from == c && (o = c);
  }
  if (o > -1)
    i = {
      changes: e,
      selection: y.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= r.from && e.to <= r.to && e.to - e.from >= (r.to - r.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let l = r.from < e.from ? n.sliceDoc(r.from, e.from) : "", h = r.to > e.to ? n.sliceDoc(e.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(l + e.insert.sliceString(0, void 0, s.state.lineBreak) + h));
  } else {
    let l = n.changes(e), h = t && t.main.to <= l.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && e.to <= r.to + 10 && e.to >= r.to - 10) {
      let c = s.state.sliceDoc(e.from, e.to), d, u = t && zr(s, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        d = { from: u.from, to: u.to - p };
      } else
        d = s.state.doc.lineAt(r.head);
      let f = r.to - e.to;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: h || p.map(l) };
        let g = p.to - f, m = g - c.length;
        if (s.state.sliceDoc(m, g) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        g >= d.from && m <= d.to)
          return { range: p };
        let b = n.changes({ from: m, to: g, insert: e.insert }), w = p.to - r.to;
        return {
          changes: b,
          range: h ? y.range(Math.max(0, h.anchor + w), Math.max(0, h.head + w)) : p.map(b)
        };
      });
    } else
      i = {
        changes: l,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let a = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, a += ".compose", s.inputState.compositionFirstChange && (a += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: a, scrollIntoView: !0 });
}
function Gr(s, e, t, i) {
  let n = Math.min(s.length, e.length), r = 0;
  for (; r < n && s.charCodeAt(r) == e.charCodeAt(r); )
    r++;
  if (r == n && s.length == e.length)
    return null;
  let o = s.length, a = e.length;
  for (; o > 0 && a > 0 && s.charCodeAt(o - 1) == e.charCodeAt(a - 1); )
    o--, a--;
  if (i == "end") {
    let l = Math.max(0, r - Math.min(o, a));
    t -= o + l - r;
  }
  if (o < r && s.length < e.length) {
    let l = t <= r && t >= o ? r - t : 0;
    r -= l, a = r + (a - o), o = r;
  } else if (a < r) {
    let l = t <= r && t >= a ? r - t : 0;
    r -= l, o = r + (o - a), a = r;
  }
  return { from: r, toA: o, toB: a };
}
function sl(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return t && (e.push(new ts(t, i)), (n != t || r != i) && e.push(new ts(n, r))), e;
}
function rl(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? y.single(t + e, i + e) : null;
}
function Qt(s, e) {
  return e.head == s.main.head && e.anchor == s.main.anchor;
}
class ol {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, x.safari && e.contentDOM.addEventListener("input", () => null), x.gecko && vl(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !pl(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
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
    let t = al(e), i = this.handlers, n = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length, a = i[r];
        a && o != !a.handlers.length && (n.removeEventListener(r, this.handleEvent), a = null), a || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !t[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Yr.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), x.android && x.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return x.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = Ur.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || ll.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, qe(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
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
function is(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (n) {
      de(t.state, n);
    }
  };
}
function al(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec, r = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (r)
      for (let a in r) {
        let l = r[a];
        l && t(a).handlers.push(is(i.value, l));
      }
    if (o)
      for (let a in o) {
        let l = o[a];
        l && t(a).observers.push(is(i.value, l));
      }
  }
  for (let i in ee)
    t(i).handlers.push(ee[i]);
  for (let i in U)
    t(i).observers.push(U[i]);
  return e;
}
const Ur = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], ll = "dthko", Yr = [16, 17, 18, 20, 91, 92, 224, 225], At = 6;
function Mt(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function hl(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class cl {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = mr(e.contentDOM), this.atoms = e.state.facet(bt).map((o) => o(e));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(D.allowMultipleSelections) && dl(e, t), this.dragging = fl(e, t) && Jr(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && hl(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, a = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: a } = this.scrollParents.y.getBoundingClientRect());
    let l = $r(this.view);
    e.clientX - l.left <= n + At ? t = -Mt(n - e.clientX) : e.clientX + l.right >= o - At && (t = Mt(e.clientX - o)), e.clientY - l.top <= r + At ? i = -Mt(r - e.clientY) : e.clientY + l.bottom >= a - At && (i = Mt(e.clientY - a)), this.setScrollSpeed(t, i);
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
    let { view: t } = this, i = qr(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function dl(s, e) {
  let t = s.state.facet(Mr);
  return t.length ? t[0](e) : x.mac ? e.metaKey : e.ctrlKey;
}
function ul(s, e) {
  let t = s.state.facet(Tr);
  return t.length ? t[0](e) : x.mac ? !e.altKey : !e.ctrlKey;
}
function fl(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = ft(s.root);
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
function pl(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = L.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const ee = /* @__PURE__ */ Object.create(null), U = /* @__PURE__ */ Object.create(null), _r = x.ie && x.ie_version < 15 || x.ios && x.webkit_version < 604;
function gl(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), Xr(s, t.value);
  }, 50);
}
function di(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function Xr(s, e) {
  e = di(s.state, kn, e);
  let { state: t } = s, i, n = 1, r = t.toText(e), o = r.lines == t.selection.ranges.length;
  if (nn != null && t.selection.ranges.every((l) => l.empty) && nn == r.toString()) {
    let l = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == l)
        return { range: h };
      l = c.from;
      let d = t.toText((o ? r.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: d },
        range: y.cursor(h.from + d.length)
      };
    });
  } else o ? i = t.changeByRange((l) => {
    let h = r.line(n++);
    return {
      changes: { from: l.from, to: l.to, insert: h.text },
      range: y.cursor(l.from + h.length)
    };
  }) : i = t.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
U.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
U.wheel = U.mousewheel = (s) => {
  s.inputState.lastWheelEvent = Date.now();
};
ee.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
U.touchstart = (s, e) => {
  let t = s.inputState, i = e.targetTouches[0];
  t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
U.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
ee.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(Rr))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = bl(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new cl(s, e, t, i)), i && s.observer.ignore(() => {
      br(s.contentDOM);
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
function ns(s, e, t, i) {
  if (i == 1)
    return y.cursor(e, t);
  if (i == 2)
    return Ua(s.state, e, t);
  {
    let n = s.docView.lineAt(e, t), r = s.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : r.from, a = n ? n.posAtEnd : r.to;
    return a < s.state.doc.length && a == r.to && a++, y.range(o, a);
  }
}
const ml = x.ie && x.ie_version <= 11;
let ss = null, rs = 0, os = 0;
function Jr(s) {
  if (!ml)
    return s.detail;
  let e = ss, t = os;
  return ss = s, os = Date.now(), rs = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (rs + 1) % 3 : 1;
}
function bl(s, e) {
  let t = s.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = Jr(e), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (t.pos = r.changes.mapPos(t.pos), n = n.map(r.changes));
    },
    get(r, o, a) {
      let l = s.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), h, c = ns(s, l.pos, l.assoc, i);
      if (t.pos != l.pos && !o) {
        let d = ns(s, t.pos, t.assoc, i), u = Math.min(d.from, c.from), f = Math.max(d.to, c.to);
        c = u < c.from ? y.range(u, f, c.assoc) : y.range(f, u, c.assoc);
      }
      return o ? n.replaceRange(n.main.extend(c.from, c.to, c.assoc)) : a && i == 1 && n.ranges.length > 1 && (h = xl(n, l.pos)) ? h : a ? n.addRange(c) : y.create([c]);
    }
  };
}
function xl(s, e) {
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
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", di(s.state, Cn, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
ee.dragend = (s) => (s.inputState.draggedContent = null, !1);
function as(s, e, t, i) {
  if (t = di(s.state, kn, t), !t)
    return;
  let n = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && ul(s, e) ? { from: r.from, to: r.to } : null, a = { from: n, insert: t }, l = s.state.changes(o ? [o, a] : a);
  s.focus(), s.dispatch({
    changes: l,
    selection: { anchor: l.mapPos(n, -1), head: l.mapPos(n, 1) },
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
      ++n == t.length && as(s, e, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < t.length; o++) {
      let a = new FileReader();
      a.onerror = r, a.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(a.result) || (i[o] = a.result), r();
      }, a.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return as(s, e, i, !0), !0;
  }
  return !1;
};
ee.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = _r ? null : e.clipboardData;
  return t ? (Xr(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (gl(s), !1);
};
function yl(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function wl(s) {
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
  return { text: di(s, Cn, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let nn = null;
ee.copy = ee.cut = (s, e) => {
  if (!rt(s.contentDOM, s.observer.selectionRange))
    return !1;
  let { text: t, ranges: i, linewise: n } = wl(s.state);
  if (!t && !n)
    return !1;
  nn = n ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = _r ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (yl(s, t), !1);
};
const Qr = /* @__PURE__ */ Je.define();
function Zr(s, e) {
  let t = [];
  for (let i of s.facet(Dr)) {
    let n = i(s, e);
    n && t.push(n);
  }
  return t.length ? s.update({ effects: t, annotations: Qr.of(!0) }) : null;
}
function eo(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = Zr(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
U.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), eo(s);
};
U.blur = (s) => {
  s.observer.clearSelectionRange(), eo(s);
};
U.compositionstart = U.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
U.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, x.chrome && x.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
U.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
ee.beforeinput = (s, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (s.inputState.insertingText = e.data, s.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (r && o.length) {
      let a = o[0], l = s.posAtDOM(a.startContainer, a.startOffset), h = s.posAtDOM(a.endContainer, a.endOffset);
      return Tn(s, { from: l, to: h, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (x.chrome && x.android && (n = Ur.find((r) => r.inputType == e.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return x.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), x.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => U.compositionend(s, e), 20), !1;
};
const ls = /* @__PURE__ */ new Set();
function vl(s) {
  ls.has(s) || (ls.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const hs = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let _e = !1;
function cs() {
  _e = !1;
}
class Sl {
  constructor(e) {
    this.lineWrapping = e, this.doc = T.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return hs.indexOf(e) > -1 != this.lineWrapping;
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
    let a = hs.indexOf(e) > -1, l = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != a;
    if (this.lineWrapping = a, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = r, l) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return l;
  }
}
class kl {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class J {
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
    return typeof this._content == "number" ? V.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof Oe ? this._content.widget : null;
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
    return new J(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var O = /* @__PURE__ */ (function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
})(O || (O = {}));
const Wt = 1e-3;
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
    this.height != e && (Math.abs(this.height - e) > Wt && (_e = !0), this.height = e);
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
    for (let a = n.length - 1; a >= 0; a--) {
      let { fromA: l, toA: h, fromB: c, toB: d } = n[a], u = r.lineAt(l, O.ByPosNoHeight, i.setDoc(t), 0, 0), f = u.to >= h ? u : r.lineAt(h, O.ByPosNoHeight, i, 0, 0);
      for (d += f.to - h, h = f.to; a > 0 && u.from <= n[a - 1].toA; )
        l = n[a - 1].fromA, c = n[a - 1].fromB, a--, l < u.from && (u = r.lineAt(l, O.ByPosNoHeight, i, 0, 0));
      c += u.from - l, l = u.from;
      let p = Rn.build(i.setDoc(o), e, c, d);
      r = Zt(r, r.replace(l, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Y(0, 0, 0);
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
          let a = e[t - 1];
          a.break ? e.splice(--t, 1, a.left, null, a.right) : e.splice(--t, 1, a.left, a.right), i += 1 + a.break, n -= a.size;
        } else if (r > n * 2) {
          let a = e[i];
          a.break ? e.splice(i, 1, a.left, null, a.right) : e.splice(i, 1, a.left, a.right), i += 2 + a.break, r -= a.size;
        } else
          break;
      else if (n < r) {
        let a = e[t++];
        a && (n += a.size);
      } else {
        let a = e[--i];
        a && (r += a.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new Al(K.of(e.slice(0, t)), o, K.of(e.slice(i)));
  }
}
function Zt(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (_e = !0), e);
}
K.prototype.size = 1;
const Cl = /* @__PURE__ */ H.replace({});
class to extends K {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new J(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, n) {
    return this.spaceAbove && e < i + this.spaceAbove ? new J(n, 0, i, this.spaceAbove, Cl) : this.mainBlock(i, n);
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
class Y extends to {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new J(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof Y || n instanceof F && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof F ? n = new Y(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : K.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setMeasuredHeight(n) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class F extends K {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, r = n - i + 1, o, a = 0;
    if (e.lineWrapping) {
      let l = Math.min(this.height, e.lineHeight * r);
      o = l / r, this.length > r + 1 && (a = (this.height - l) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: a };
  }
  blockAt(e, t, i, n) {
    let { firstLine: r, lastLine: o, perLine: a, perChar: l } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), d = a + c.length * l, u = Math.max(i, e - d / 2);
      return new J(c.from, c.length, u, d, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / a))), { from: c, length: d } = t.doc.line(r + h);
      return new J(c, d, i + a * h, a, 0);
    }
  }
  lineAt(e, t, i, n, r) {
    if (t == O.ByHeight)
      return this.blockAt(e, i, n, r);
    if (t == O.ByPosNoHeight) {
      let { from: f, to: p } = i.doc.lineAt(e);
      return new J(f, p - f, 0, 0, 0);
    }
    let { firstLine: o, perLine: a, perChar: l } = this.heightMetrics(i, r), h = i.doc.lineAt(e), c = a + h.length * l, d = h.number - o, u = n + a * d + l * (h.from - r - d);
    return new J(h.from, h.length, Math.max(n, Math.min(u, n + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, n, r, o) {
    e = Math.max(e, r), t = Math.min(t, r + this.length);
    let { firstLine: a, perLine: l, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, d = n; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - a;
        d += l * p + h * (e - r - p);
      }
      let f = l + h * u.length;
      o(new J(u.from, u.length, d, f, 0)), d += f, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof F ? i[i.length - 1] = new F(r.length + n) : i.push(null, new F(n - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof F ? i[0] = new F(e + r.length) : i.unshift(new F(e - 1), null);
    }
    return K.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new F(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new F(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let r = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], a = Math.max(t, n.from), l = -1;
      for (n.from > t && o.push(new F(n.from - t - 1).updateHeight(e, t)); a <= r && n.more; ) {
        let c = e.doc.lineAt(a).length;
        o.length && o.push(null);
        let d = n.heights[n.index++], u = 0;
        d < 0 && (u = -d, d = n.heights[n.index++]), l == -1 ? l = d : Math.abs(d - l) >= Wt && (l = -2);
        let f = new Y(c, d, u);
        f.outdated = !1, o.push(f), a += c + 1;
      }
      a <= r && o.push(null, new F(r - a).updateHeight(e, a));
      let h = K.of(o);
      return (l < 0 || Math.abs(h.height - this.height) >= Wt || Math.abs(l - this.heightMetrics(e, t).perLine) >= Wt) && (_e = !0), Zt(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Al extends K {
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
    let o = n + this.left.height, a = r + this.left.length + this.break, l = t == O.ByHeight ? e < o : e < a, h = l ? this.left.lineAt(e, t, i, n, r) : this.right.lineAt(e, t, i, o, a);
    if (this.break || (l ? h.to < a : h.from > a))
      return h;
    let c = t == O.ByPosNoHeight ? O.ByPosNoHeight : O.ByPos;
    return l ? h.join(this.right.lineAt(a, c, i, o, a)) : this.left.lineAt(a, c, i, n, r).join(h);
  }
  forEachLine(e, t, i, n, r, o) {
    let a = n + this.left.height, l = r + this.left.length + this.break;
    if (this.break)
      e < l && this.left.forEachLine(e, t, i, n, r, o), t >= l && this.right.forEachLine(e, t, i, a, l, o);
    else {
      let h = this.lineAt(l, O.ByPos, i, n, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, n, r, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, a, l, o);
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
    for (let a of i)
      r.push(a);
    if (e > 0 && ds(r, o - 1), t < this.length) {
      let a = r.length;
      this.decomposeRight(t, r), ds(r, a);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? K.of(this.break ? [e, null, t] : [e, t]) : (this.left = Zt(this.left, e), this.right = Zt(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: r, right: o } = this, a = t + r.length + this.break, l = null;
    return n && n.from <= t + r.length && n.more ? l = r = r.updateHeight(e, t, i, n) : r.updateHeight(e, t, i), n && n.from <= a + o.length && n.more ? l = o = o.updateHeight(e, a, i, n) : o.updateHeight(e, a, i), l ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function ds(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof F && (i = s[e + 1]) instanceof F && s.splice(e - 1, 3, new F(t.length + 1 + i.length));
}
const Ml = 5;
class Rn {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof Y ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Y(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new to(o, n, i)) : (o || r || n >= Ml) && this.addLineDeco(n, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Y(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new F(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Y)
      return e;
    let t = new Y(0, -1, 0);
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
    this.lineStart > -1 && !(t instanceof Y) && !this.isCovered ? this.nodes.push(new Y(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof Y && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let r = new Rn(i, e);
    return M.spans(t, i, n, r, 0), r.finish(i);
  }
}
function Tl(s, e, t) {
  let i = new Rl();
  return M.compare(s, e, t, i, 0), i.changes;
}
class Rl {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && ze(e, t, this.changes, 5);
  }
}
function El(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), a = Math.max(0, t.top), l = Math.min(n.innerHeight, t.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, d = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && d.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), a = Math.max(a, u.top), l = Math.min(h == s.parentNode ? n.innerHeight : l, u.bottom);
      }
      h = d.position == "absolute" || d.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: a - (t.top + e),
    bottom: Math.max(a, l) - (t.top + e)
  };
}
function Ol(s) {
  let e = s.getBoundingClientRect(), t = s.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Dl(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class vi {
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
    return H.replace({
      widget: new Bl(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class Bl extends ai {
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
class us {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = fs, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = N.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = t.facet(An).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new Sl(i), this.stateDeco = ps(t), this.heightMap = K.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle.setDoc(t.doc), [new X(0, 0, 0, t.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = H.set(this.lineGaps.map((n) => n.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        e.push(new Tt(r, o));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? fs : new En(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(it(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = ps(this.state);
    let n = e.changedRanges, r = X.extendWithRanges(n, Tl(i, this.stateDeco, e ? e.changes : W.empty(this.state.doc.length))), o = this.heightMap.height, a = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    cs(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || _e) && (e.flags |= 2), a ? (this.scrollAnchorPos = e.changes.mapPos(a.from, -1), this.scrollAnchorHeight = a.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let l = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < l.from || t.range.head > l.to) || !this.viewportIsAppropriate(l)) && (l = this.getViewport(0, t));
    let h = l.from != this.viewport.from || l.to != this.viewport.to;
    this.viewport = l, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Lr) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? N.RTL : N.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", a = t.getBoundingClientRect(), l = o || this.mustMeasureContent || this.contentDOMHeight != a.height;
    this.contentDOMHeight = a.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (a.width && a.height) {
      let { scaleX: C, scaleY: S } = gr(t, a);
      (C > 5e-3 && Math.abs(this.scaleX - C) > 5e-3 || S > 5e-3 && Math.abs(this.scaleY - S) > 5e-3) && (this.scaleX = C, this.scaleY = S, h |= 16, o = l = !0);
    }
    let d = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != d || this.paddingBottom != u) && (this.paddingTop = d, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (l = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let f = mr(this.view.contentDOM, !1).y;
    f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = xr(this.scrollParent || e.win);
    let g = (this.printing ? Dl : El)(t, this.paddingTop), m = g.top - this.pixelViewport.top, b = g.bottom - this.pixelViewport.bottom;
    this.pixelViewport = g;
    let w = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (w != this.inView && (this.inView = w, w && (l = !0)), !this.inView && !this.scrollTarget && !Ol(e.dom))
      return 0;
    let v = a.width;
    if ((this.contentDOMWidth != v || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = a.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), l) {
      let C = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(C) && (o = !0), o || n.lineWrapping && Math.abs(v - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: S, charWidth: B, textHeight: te } = e.docView.measureTextSize();
        o = S > 0 && n.refresh(r, S, B, te, Math.max(5, v / B), C), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && b > 0 ? c = Math.max(m, b) : m < 0 && b < 0 && (c = Math.min(m, b)), cs();
      for (let S of this.viewports) {
        let B = S.from == this.viewport.from ? C : e.docView.measureVisibleLineHeights(S);
        this.heightMap = (o ? K.empty().applyChanges(this.stateDeco, T.empty, this.heightOracle, [new X(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new kl(S.from, B));
      }
      _e && (h |= 2);
    }
    let R = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return R && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || R) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: a } = this, l = new Tt(n.lineAt(o - i * 1e3, O.ByHeight, r, 0, 0).from, n.lineAt(a + (1 - i) * 1e3, O.ByHeight, r, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < l.from || h > l.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), d = n.lineAt(h, O.ByPos, r, 0, 0), u;
        t.y == "center" ? u = (d.top + d.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < l.from ? u = d.top : u = d.bottom - c, l = new Tt(n.lineAt(u - 1e3 / 2, O.ByHeight, r, 0, 0).from, n.lineAt(u + c + 1e3 / 2, O.ByHeight, r, 0, 0).to);
      }
    }
    return l;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new Tt(this.heightMap.lineAt(i, O.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, O.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, O.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(t, O.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: a } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || r >= a + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && r < a + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new vi(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
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
    let a = [], l = (c, d, u, f) => {
      if (d - c < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let b of g)
        if (b > c && b < d) {
          l(c, b - 10, u, f), l(b + 10, d, u, f);
          return;
        }
      let m = Pl(e, (b) => b.from >= u.from && b.to <= u.to && Math.abs(b.from - c) < r && Math.abs(b.to - d) < r && !g.some((w) => b.from < w && b.to > w));
      if (!m) {
        if (d < u.to && t && i && t.visibleRanges.some((v) => v.from <= d && v.to >= d)) {
          let v = t.moveToLineBoundary(y.cursor(d), !1, !0).head;
          v > c && (d = v);
        }
        let b = this.gapSize(u, c, d, f), w = i || b < 2e6 ? b : 2e6;
        m = new vi(c, d, b, w);
      }
      a.push(m);
    }, h = (c) => {
      if (c.length < o || c.type != V.Text)
        return;
      let d = Ll(c.from, c.to, this.stateDeco);
      if (d.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, f, p;
      if (i) {
        let g = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, b;
        if (u != null) {
          let w = Et(d, u), v = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = w - v, b = w + v;
        } else
          m = (this.visibleTop - c.top - g) / c.height, b = (this.visibleBottom - c.top + g) / c.height;
        f = Rt(d, m), p = Rt(d, b);
      } else {
        let g = d.total * this.heightOracle.charWidth, m = n * this.heightOracle.charWidth, b = 0;
        if (g > 2e6)
          for (let S of e)
            S.from >= c.from && S.from < c.to && S.size != S.displaySize && S.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = S.size - S.displaySize);
        let w = this.pixelViewport.left + b, v = this.pixelViewport.right + b, R, C;
        if (u != null) {
          let S = Et(d, u), B = ((v - w) / 2 + m) / g;
          R = S - B, C = S + B;
        } else
          R = (w - m) / g, C = (v + m) / g;
        f = Rt(d, R), p = Rt(d, C);
      }
      f > c.from && l(c.from, f, c, d), p < c.to && l(p, c.to, c, d);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return a;
  }
  gapSize(e, t, i, n) {
    let r = Et(n, i) - Et(n, t);
    return this.heightOracle.lineWrapping ? e.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    vi.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = H.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    M.spans(t, this.viewport.from, this.viewport.to, {
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
        let o = this.visibleRanges[r], a = i[r];
        (o.from != a.from || o.to != a.to) && (n |= 4, e && e.mapPos(o.from, -1) == a.from && e.mapPos(o.to, 1) == a.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || it(this.heightMap.lineAt(e, O.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || it(this.heightMap.lineAt(this.scaler.fromDOM(e), O.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return it(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Tt {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function Ll(s, e, t) {
  let i = [], n = s, r = 0;
  return M.spans(t, s, e, {
    span() {
    },
    point(o, a) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = a;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), r += e - n), { total: r, ranges: i };
}
function Rt({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = e[n], a = o - r;
    if (i <= a)
      return r + i;
    i -= a;
  }
}
function Et(s, e) {
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
function Pl(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const fs = {
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
function ps(s) {
  let e = s.facet(li).filter((i) => typeof i != "function"), t = s.facet(Mn).filter((i) => typeof i != "function");
  return t.length && e.push(M.join(t)), e;
}
class En {
  constructor(e, t, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: a, to: l }) => {
      let h = t.lineAt(a, O.ByPos, e, 0, 0).top, c = t.lineAt(l, O.ByPos, e, 0, 0).bottom;
      return n += c - h, { from: a, to: l, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let a of this.viewports)
      a.domTop = o + (a.top - r) * this.scale, o = a.domBottom = a.domTop + (a.bottom - a.top), r = a.bottom;
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
    return e instanceof En ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function it(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new J(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((n) => it(n, e)) : s._content);
}
const Ot = /* @__PURE__ */ k.define({ combine: (s) => s.join(" ") }), sn = /* @__PURE__ */ k.define({ combine: (s) => s.indexOf(!0) > -1 }), rn = /* @__PURE__ */ Ge.newName(), io = /* @__PURE__ */ Ge.newName(), no = /* @__PURE__ */ Ge.newName(), so = { "&light": "." + io, "&dark": "." + no };
function on(s, e, t) {
  return new Ge(e, {
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
const Nl = /* @__PURE__ */ on("." + rn, {
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
}, so), Il = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Si = x.ie && x.ie_version <= 11;
class Hl {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new fa(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (x.ie && x.ie_version <= 11 || x.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && x.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(x.chrome && x.chrome_version < 126) && (this.editContext = new Fl(e), e.state.facet(he) && (e.contentDOM.editContext = this.editContext.editContext)), Si && (this.onCharData = (t) => {
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
    if (i.state.facet(he) ? i.root.activeElement != this.dom : !rt(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.tile.nearest(n.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (x.ie && x.ie_version <= 11 || x.android && x.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && ot(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ft(e.root);
    if (!t)
      return !1;
    let i = x.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Wl(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = rt(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && ga(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, Il), Si && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Si && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && qe(this.dom, r.key, r.keyCode));
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
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && rt(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new il(this.view, e, t, i);
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
    let i = this.view.state, n = Kr(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !Qt(this.view.state.selection, t.newSel.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = gs(t, e.previousSibling || e.target.previousSibling, -1), n = gs(t, e.nextSibling || e.target.nextSibling, 1);
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
function gs(s, e, t) {
  for (; e; ) {
    let i = L.get(e);
    if (i && i.parent == s)
      return i;
    let n = e.parentNode;
    e = n != s.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function ms(s, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, r = e.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return ot(o.node, o.offset, n, r) && ([t, i, n, r] = [n, r, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: r };
}
function Wl(s, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(s.root)[0];
    if (n)
      return ms(s, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? ms(s, t) : null;
}
class Fl {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = e.state.selection.main, { anchor: r, head: o } = n, a = this.toEditorPos(i.updateRangeStart), l = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: a, drifted: !1 });
      let h = l - a > i.text.length;
      a == this.from && r < this.from ? a = r : l == this.to && r > this.to && (l = r);
      let c = Gr(e.state.sliceDoc(a, l), i.text, (h ? n.from : n.to) - a, h ? "end" : null);
      if (!c) {
        let u = y.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Qt(u, n) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let d = {
        from: c.from + a,
        to: c.toA + a,
        insert: T.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if ((x.mac || x.android) && d.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (d = { from: a, to: l, insert: T.of([i.text.replace(".", " ")]) }), this.pendingContextChange = d, !e.state.readOnly) {
        let u = this.to - this.from + (d.to - d.from + d.insert.length);
        Tn(e, d, y.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), d.from < d.to && !d.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), a = this.toEditorPos(i.rangeEnd); o < a; o++) {
        let l = e.coordsForChar(o);
        r = l && new DOMRect(l.left, l.top, l.right - l.left, l.bottom - l.top) || r || new DOMRect(), n.push(r);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, a = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(a)) {
          let l = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (l < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(a) ? 1 : 2}px`;
            n.push(H.mark({ attributes: { style: c } }).range(l, h));
          }
        }
      }
      e.dispatch({ effects: Nr.of(H.set(n)) });
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
      let n = ft(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((r, o, a, l, h) => {
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || pa(e.parent) || document, this.viewState = new us(this, e.state || D.create(e)), e.scrollTo && e.scrollTo.is(Ct) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(We).map((n) => new mi(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Hl(this), this.inputState = new ol(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Zn(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
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
    let o = this.hasFocus, a = 0, l = null;
    e.some((u) => u.annotation(Qr)) ? (this.inputState.notifiedFocused = o, a = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, l = Zr(r, o), l || (a = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(D.phrases) != this.state.facet(D.phrases))
      return this.setState(r);
    n = _t.create(this, r, e), n.flags |= a;
    let d = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (d && (d = d.map(u.changes)), u.scrollIntoView) {
          let { main: f } = u.state.selection, { x: p, y: g } = this.state.facet(A.cursorScrollMargin);
          d = new je(f.empty ? f : y.cursor(f.head, f.head > f.anchor ? -1 : 1), "nearest", "nearest", g, p);
        }
        for (let f of u.effects)
          f.is(Ct) && (d = f.value.clip(this.state));
      }
      this.viewState.update(n, d), this.bidiCache = ei.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(tt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Ot) != n.state.facet(Ot) && (this.viewState.mustMeasureContent = !0), (t || i || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(Qi))
        try {
          u(n);
        } catch (f) {
          de(this.state, f, "update listener");
        }
    (l || c) && Promise.resolve().then(() => {
      l && this.state == l.startState && this.dispatch(l), c && !Kr(this, c) && h.force && qe(this.contentDOM, h.key, h.keyCode);
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
      this.viewState = new us(this, e), this.plugins = e.facet(We).map((i) => new mi(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Zn(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
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
          n.push(new mi(r));
        else {
          let a = this.plugins[o];
          a.mustUpdate = e, n.push(a);
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
          de(this.state, i, "doc view update listener");
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
      for (let a = 0; ; a++) {
        if (o < 0)
          if (xr(i || this.win))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let f = this.viewState.scrollAnchorAt(n);
            r = f.from, o = f.top;
          }
        this.updateState = 1;
        let l = this.viewState.measure();
        if (!l && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (a > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        l & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((f) => {
          try {
            return f.read(this);
          } catch (p) {
            return de(this.state, p), bs;
          }
        }), d = _t.create(this, this.state, []), u = !1;
        d.flags |= l, t ? t.flags |= l : t = d, this.updateState = 2, d.empty || (this.updatePlugins(d), this.inputState.update(d), this.updateAttrs(), u = this.docView.update(d), u && this.docViewUpdate());
        for (let f = 0; f < h.length; f++)
          if (c[f] != bs)
            try {
              let p = h[f];
              p.write && p.write(c[f], this);
            } catch (p) {
              de(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !d.viewportChanged && this.measureRequests.length == 0) {
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
      for (let a of this.state.facet(Qi))
        a(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return rn + " " + (this.state.facet(sn) ? no : io) + " " + this.state.facet(Ot);
  }
  updateAttrs() {
    let e = xs(this, Ir, {
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
    this.state.readOnly && (t["aria-readonly"] = "true"), xs(this, An, t);
    let i = this.observer.ignore(() => {
      let n = Un(this.contentDOM, this.contentAttrs, t), r = Un(this.dom, this.editorAttrs, e);
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
    this.styleModules = this.state.facet(tt);
    let e = this.state.facet(A.cspNonce);
    Ge.mount(this.root, this.styleModules.concat(Nl).reverse(), e ? { nonce: e } : void 0);
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
    return wi(this, e, es(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return wi(this, e, es(this, e, t, (i) => Xa(this, e.head, i)));
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
    return _a(this, e, t, i);
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
    return wi(this, e, Ja(this, e, t, i));
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
    let i = tn(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), tn(this, e, t);
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
    return Yt(i, o.dir == N.LTR == t > 0);
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
    return !this.state.facet(Br) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > $l)
      return Cr(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || kr(r.isolates, i = Xn(this, e))))
        return r.order;
    i || (i = Xn(this, e));
    let n = Sa(e.text, t, i);
    return this.bidiCache.push(new ei(e.from, e.to, t, i, !0, n)), n;
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
      br(this.contentDOM), this.docView.updateSelection();
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
    return Ct.of(new je(typeof e == "number" ? y.cursor(e) : e, (i = t.y) !== null && i !== void 0 ? i : "nearest", (n = t.x) !== null && n !== void 0 ? n : "nearest", (r = t.yMargin) !== null && r !== void 0 ? r : 5, (o = t.xMargin) !== null && o !== void 0 ? o : 5));
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
    return Ct.of(new je(y.cursor(i.from), "start", "start", i.top - e, t, !0));
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
    return Be.define(() => ({}), { eventHandlers: e });
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
    return Be.define(() => ({}), { eventObservers: e });
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
    let i = Ge.newName(), n = [Ot.of(i), tt.of(on(`.${i}`, e))];
    return t && t.dark && n.push(sn.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return bn.lowest(tt.of(on("." + rn, e, so)));
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
A.styleModule = tt;
A.inputHandler = Or;
A.clipboardInputFilter = kn;
A.clipboardOutputFilter = Cn;
A.scrollHandler = Pr;
A.focusChangeEffect = Dr;
A.perLineTextDirection = Br;
A.exceptionSink = Er;
A.updateListener = Qi;
A.editable = he;
A.mouseSelectionStyle = Rr;
A.dragMovesSelection = Tr;
A.clickAddsSelectionRange = Mr;
A.decorations = li;
A.blockWrappers = Hr;
A.outerDecorations = Mn;
A.atomicRanges = bt;
A.bidiIsolatedRanges = Wr;
A.cursorScrollMargin = /* @__PURE__ */ k.define({
  combine: (s) => {
    let e = 5, t = 5;
    for (let i of s)
      typeof i == "number" ? e = t = i : { x: e, y: t } = i;
    return { x: e, y: t };
  }
});
A.scrollMargins = Fr;
A.darkTheme = sn;
A.cspNonce = /* @__PURE__ */ k.define({ combine: (s) => s.length ? s[0] : "" });
A.contentAttributes = An;
A.editorAttributes = Ir;
A.lineWrapping = /* @__PURE__ */ A.contentAttributes.of({ class: "cm-lineWrapping" });
A.announce = /* @__PURE__ */ I.define();
const $l = 4096, bs = {};
class ei {
  constructor(e, t, i, n, r, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : N.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new ei(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function xs(s, e, t) {
  for (let i = s.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && wn(o, t);
  }
  return t;
}
const Vl = x.mac ? "mac" : x.windows ? "win" : x.linux ? "linux" : "key";
function zl(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, a;
  for (let l = 0; l < t.length - 1; ++l) {
    const h = t[l];
    if (/^(cmd|meta|m)$/i.test(h))
      a = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? a = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), a && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Dt(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const ql = /* @__PURE__ */ bn.default(/* @__PURE__ */ A.domEventHandlers({
  keydown(s, e) {
    return Ul(jl(e.state), s, e, "editor");
  }
})), ro = /* @__PURE__ */ k.define({ enables: ql }), ys = /* @__PURE__ */ new WeakMap();
function jl(s) {
  let e = s.facet(ro), t = ys.get(e);
  return t || ys.set(e, t = Gl(e.reduce((i, n) => i.concat(n), []))), t;
}
let be = null;
const Kl = 4e3;
function Gl(s, e = Vl) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, a) => {
    let l = i[o];
    if (l == null)
      i[o] = a;
    else if (l != a)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, a, l, h, c) => {
    var d, u;
    let f = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = a.split(/ (?!$)/).map((b) => zl(b, e));
    for (let b = 1; b < p.length; b++) {
      let w = p.slice(0, b).join(" ");
      n(w, !0), f[w] || (f[w] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(v) => {
          let R = be = { view: v, prefix: w, scope: o };
          return setTimeout(() => {
            be == R && (be = null);
          }, Kl), !0;
        }]
      });
    }
    let g = p.join(" ");
    n(g, !1);
    let m = f[g] || (f[g] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (d = f._any) === null || d === void 0 ? void 0 : d.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    l && m.run.push(l), h && (m.preventDefault = !0), c && (m.stopPropagation = !0);
  };
  for (let o of s) {
    let a = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of a) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: d } = o;
        for (let u in c)
          c[u].run.push((f) => d(f, an));
      }
    let l = o[e] || o.key;
    if (l)
      for (let h of a)
        r(h, l, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + l, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let an = null;
function Ul(s, e, t, i) {
  an = e;
  let n = aa(e), r = qo(n, 0), o = jo(r) == n.length && n != " ", a = "", l = !1, h = !1, c = !1;
  be && be.view == t && be.scope == i && (a = be.prefix + " ", Yr.indexOf(e.keyCode) < 0 && (h = !0, be = null));
  let d = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let b of m.run)
        if (!d.has(b) && (d.add(b), b(t)))
          return m.stopPropagation && (c = !0), !0;
      m.preventDefault && (m.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, f = s[i], p, g;
  return f && (u(f[a + Dt(n, e, !o)]) ? l = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(x.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(x.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = ye[e.keyCode]) && p != n ? (u(f[a + Dt(p, e, !0)]) || e.shiftKey && (g = dt[e.keyCode]) != n && g != p && u(f[a + Dt(g, e, !1)])) && (l = !0) : o && e.shiftKey && u(f[a + Dt(n, e, !0)]) && (l = !0), !l && u(f._any) && (l = !0)), h && (l = !0), l && c && e.stopPropagation(), an = null, l;
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
      let r = oo(e);
      return [new Re(t, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return Yl(e, t, i);
  }
}
function oo(s) {
  let e = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == N.LTR ? e.left : e.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: e.top - s.scrollDOM.scrollTop * s.scaleY };
}
function ws(s, e, t, i) {
  let n = s.coordsAtPos(e, t * 2);
  if (!n)
    return i;
  let r = s.dom.getBoundingClientRect(), o = (n.top + n.bottom) / 2, a = s.posAtCoords({ x: r.left + 1, y: o }), l = s.posAtCoords({ x: r.right - 1, y: o });
  return a == null || l == null ? i : { from: Math.max(i.from, Math.min(a, l)), to: Math.min(i.to, Math.max(a, l)) };
}
function Yl(s, e, t) {
  if (t.to <= s.viewport.from || t.from >= s.viewport.to)
    return [];
  let i = Math.max(t.from, s.viewport.from), n = Math.min(t.to, s.viewport.to), r = s.textDirection == N.LTR, o = s.contentDOM, a = o.getBoundingClientRect(), l = oo(s), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), d = a.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = a.right - (c ? parseInt(c.paddingRight) : 0), f = en(s, i, 1), p = en(s, n, -1), g = f.type == V.Text ? f : null, m = p.type == V.Text ? p : null;
  if (g && (s.lineWrapping || f.widgetLineBreaks) && (g = ws(s, i, 1, g)), m && (s.lineWrapping || p.widgetLineBreaks) && (m = ws(s, n, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return w(v(t.from, t.to, g));
  {
    let C = g ? v(t.from, null, g) : R(f, !1), S = m ? v(null, t.to, m) : R(p, !0), B = [];
    return (g || f).to < (m || p).from - (g && m ? 1 : 0) || f.widgetLineBreaks > 1 && C.bottom + s.defaultLineHeight / 2 < S.top ? B.push(b(d, C.bottom, u, S.top)) : C.bottom < S.top && s.elementAtHeight((C.bottom + S.top) / 2).type == V.Text && (C.bottom = S.top = (C.bottom + S.top) / 2), w(C).concat(B).concat(w(S));
  }
  function b(C, S, B, te) {
    return new Re(e, C - l.left, S - l.top, Math.max(0, B - C), te - S);
  }
  function w({ top: C, bottom: S, horizontal: B }) {
    let te = [];
    for (let ge = 0; ge < B.length; ge += 2)
      te.push(b(B[ge], C, B[ge + 1], S));
    return te;
  }
  function v(C, S, B) {
    let te = 1e9, ge = -1e9, xt = [];
    function Bn(Se, me, Ne, ke, Qe) {
      let ae = s.coordsAtPos(Se, Se == B.to ? -2 : 2), le = s.coordsAtPos(Ne, Ne == B.from ? 2 : -2);
      !ae || !le || (te = Math.min(ae.top, le.top, te), ge = Math.max(ae.bottom, le.bottom, ge), Qe == N.LTR ? xt.push(r && me ? d : ae.left, r && ke ? u : le.right) : xt.push(!r && ke ? d : le.left, !r && me ? u : ae.right));
    }
    let yt = C ?? B.from, wt = S ?? B.to;
    for (let Se of s.visibleRanges)
      if (Se.to > yt && Se.from < wt)
        for (let me = Math.max(Se.from, yt), Ne = Math.min(Se.to, wt); ; ) {
          let ke = s.state.doc.lineAt(me);
          for (let Qe of s.bidiSpans(ke)) {
            let ae = Qe.from + ke.from, le = Qe.to + ke.from;
            if (ae >= Ne)
              break;
            le > me && Bn(Math.max(ae, me), C == null && ae <= yt, Math.min(le, Ne), S == null && le >= wt, Qe.dir);
          }
          if (me = ke.to + 1, me >= Ne)
            break;
        }
    return xt.length == 0 && Bn(yt, C == null, wt, S == null, s.textDirection), { top: te, bottom: ge, horizontal: xt };
  }
  function R(C, S) {
    let B = a.top + (S ? C.top : C.bottom);
    return { top: B, bottom: B, horizontal: [] };
  }
}
function _l(s, e) {
  return s.constructor == e.constructor && s.eq(e);
}
class Xl {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(Ft) != e.state.facet(Ft) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(Ft);
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
    if (e.length != this.drawn.length || e.some((t, i) => !_l(t, this.drawn[i]))) {
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
const Ft = /* @__PURE__ */ k.define();
function ao(s) {
  return [
    Be.define((e) => new Xl(e, s)),
    Ft.of(s)
  ];
}
const Xe = /* @__PURE__ */ k.define({
  combine(s) {
    return dr(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Jl(s = {}) {
  return [
    Xe.of(s),
    Ql,
    Zl,
    eh,
    Lr.of(!0)
  ];
}
function lo(s) {
  return s.startState.facet(Xe) != s.state.facet(Xe);
}
const Ql = /* @__PURE__ */ ao({
  above: !0,
  markers(s) {
    let { state: e } = s, t = e.facet(Xe), i = [];
    for (let n of e.selection.ranges) {
      let r = n == e.selection.main;
      if (n.empty || t.drawRangeCursor && !(r && x.ios && t.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", a = n.empty ? n : y.cursor(n.head, n.assoc);
        for (let l of Re.forRange(s, o, a))
          i.push(l);
      }
    }
    return i;
  },
  update(s, e) {
    s.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = lo(s);
    return t && vs(s.state, e), s.docChanged || s.selectionSet || t;
  },
  mount(s, e) {
    vs(e.state, s);
  },
  class: "cm-cursorLayer"
});
function vs(s, e) {
  e.style.animationDuration = s.facet(Xe).cursorBlinkRate + "ms";
}
const Zl = /* @__PURE__ */ ao({
  above: !1,
  markers(s) {
    let e = [], { main: t, ranges: i } = s.state.selection;
    for (let n of i)
      if (!n.empty)
        for (let r of Re.forRange(s, "cm-selectionBackground", n))
          e.push(r);
    if (x.ios && !t.empty && s.state.facet(Xe).iosSelectionHandles) {
      for (let n of Re.forRange(s, "cm-selectionHandle cm-selectionHandle-start", y.cursor(t.from, 1)))
        e.push(n);
      for (let n of Re.forRange(s, "cm-selectionHandle cm-selectionHandle-end", y.cursor(t.to, 1)))
        e.push(n);
    }
    return e;
  },
  update(s, e) {
    return s.docChanged || s.selectionSet || s.viewportChanged || lo(s);
  },
  class: "cm-selectionLayer"
}), eh = /* @__PURE__ */ bn.highest(/* @__PURE__ */ A.theme({
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
class Pe extends Ee {
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
Pe.prototype.elementClass = "";
Pe.prototype.toDOM = void 0;
Pe.prototype.mapMode = _.TrackBefore;
Pe.prototype.startSide = Pe.prototype.endSide = -1;
Pe.prototype.point = !0;
const ki = /* @__PURE__ */ k.define(), th = /* @__PURE__ */ k.define(), $t = /* @__PURE__ */ k.define(), Ss = /* @__PURE__ */ k.define({
  combine: (s) => s.some((e) => e)
});
function ih(s) {
  return [
    nh
  ];
}
const nh = /* @__PURE__ */ Be.fromClass(class {
  constructor(s) {
    this.view = s, this.domAfter = null, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet($t).map((e) => new Cs(s, e)), this.fixed = !s.state.facet(Ss);
    for (let e of this.gutters)
      e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(s) {
    if (this.updateGutters(s)) {
      let e = this.prevViewport, t = s.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (s.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(Ss) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let e = this.dom.nextSibling;
    s && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = M.iter(this.view.state.facet(ki), this.view.viewport.from), i = [], n = this.gutters.map((r) => new sh(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let a of r.type)
          if (a.type == V.Text && o) {
            ln(t, i, a.from);
            for (let l of n)
              l.line(this.view, a, i);
            o = !1;
          } else if (a.widget)
            for (let l of n)
              l.widget(this.view, a);
      } else if (r.type == V.Text) {
        ln(t, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(s) {
    let e = s.startState.facet($t), t = s.state.facet($t), i = s.docChanged || s.heightChanged || s.viewportChanged || !M.eq(s.startState.facet(ki), s.state.facet(ki), s.view.viewport.from, s.view.viewport.to);
    if (e == t)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of t) {
        let o = e.indexOf(r);
        o < 0 ? n.push(new Cs(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (s) => A.scrollMargins.of((e) => {
    let t = e.plugin(s);
    if (!t || t.gutters.length == 0 || !t.fixed)
      return null;
    let i = t.dom.offsetWidth * e.scaleX, n = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
    return e.textDirection == N.LTR ? { left: i, right: n } : { right: i, left: n };
  })
});
function ks(s) {
  return Array.isArray(s) ? s : [s];
}
function ln(s, e, t) {
  for (; s.value && s.from <= t; )
    s.from == t && e.push(s.value), s.next();
}
class sh {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = M.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: n } = this, r = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == n.elements.length) {
      let a = new ho(e, o, r, i);
      n.elements.push(a), n.dom.appendChild(a.dom);
    } else
      n.elements[this.i].update(e, o, r, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let n = [];
    ln(this.cursor, n, t.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(e, t, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, n);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), n = i ? [i] : null;
    for (let r of e.state.facet(th)) {
      let o = r(e, t.widget, t);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(e, t, n);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Cs {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let l = r.getBoundingClientRect();
          o = (l.top + l.bottom) / 2;
        } else
          o = n.clientY;
        let a = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, a, n) && n.preventDefault();
      });
    this.markers = ks(t.markers(e)), t.initialSpacer && (this.spacer = new ho(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = ks(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], e);
      n != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [n]);
    }
    let i = e.view.viewport;
    return !M.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class ho {
  constructor(e, t, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, n);
  }
  update(e, t, i, n) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), rh(this.markers, n) || this.setMarkers(e, n);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let a = o, l = r < t.length ? t[r++] : null, h = !1;
      if (l) {
        let c = l.elementClass;
        c && (i += " " + c);
        for (let d = o; d < this.markers.length; d++)
          if (this.markers[d].compare(l)) {
            a = d, h = !0;
            break;
          }
      } else
        a = this.markers.length;
      for (; o < a; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(n);
          let d = n.nextSibling;
          n.remove(), n = d;
        }
      }
      if (!l)
        break;
      l.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(l.toDOM(e), n)), h && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function rh(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (!s[t].compare(e[t]))
      return !1;
  return !0;
}
const oh = /* @__PURE__ */ k.define(), ah = /* @__PURE__ */ k.define(), Fe = /* @__PURE__ */ k.define({
  combine(s) {
    return dr(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, t) {
        let i = Object.assign({}, e);
        for (let n in t) {
          let r = i[n], o = t[n];
          i[n] = r ? (a, l, h) => r(a, l, h) || o(a, l, h) : o;
        }
        return i;
      }
    });
  }
});
class Ci extends Pe {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Ai(s, e) {
  return s.state.facet(Fe).formatNumber(e, s.state);
}
const lh = /* @__PURE__ */ $t.compute([Fe], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(oh);
  },
  lineMarker(e, t, i) {
    return i.some((n) => n.toDOM) ? null : new Ci(Ai(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let n of e.state.facet(ah)) {
      let r = n(e, t, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Fe) != e.state.facet(Fe),
  initialSpacer(e) {
    return new Ci(Ai(e, As(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = Ai(t.view, As(t.view.state.doc.lines));
    return i == e.number ? e : new Ci(i);
  },
  domEventHandlers: s.facet(Fe).domEventHandlers,
  side: "before"
}));
function hh(s = {}) {
  return [
    Fe.of(s),
    ih(),
    lh
  ];
}
function As(s) {
  let e = 9;
  for (; e < s; )
    e = e * 10 + 9;
  return e;
}
const Ms = Object.freeze({
  logo: "./assets/brand/logo.svg",
  mark: "./assets/brand/mark.svg"
}), co = "rasa.theme", Vt = Object.freeze({
  dark: Object.freeze({
    colorScheme: "dark",
    surface: "#0d0f12",
    surfaceLift: "#111720",
    panel: "#12161c",
    panelSoft: "#0f141a",
    panelRaised: "#151a22",
    line: "#29313d",
    lineStrong: "#3a4656",
    text: "#e8edf2",
    muted: "#9aa6b6",
    dim: "#6d7885",
    gold: "#e8b84a",
    blue: "#78a7ff",
    green: "#83d7aa",
    violet: "#b08cff",
    teal: "#63c5c6",
    red: "#ff8ca3",
    success: "#83d7aa",
    danger: "#ff8ca3",
    warning: "#e8b84a",
    codeBg: "#0e1319",
    buttonText: "#0d0f12",
    shadow: "rgba(0, 0, 0, 0.18)",
    backdrop: "rgba(6, 10, 14, 0.45)",
    radius: "8px"
  }),
  light: Object.freeze({
    colorScheme: "light",
    surface: "#f7f8f5",
    surfaceLift: "#ffffff",
    panel: "#ffffff",
    panelSoft: "#f1f4f0",
    panelRaised: "#fbfcfa",
    line: "#d8ddd5",
    lineStrong: "#b8c0b4",
    text: "#17201a",
    muted: "#5d6a62",
    dim: "#879188",
    gold: "#8a6418",
    blue: "#315fa8",
    green: "#24704a",
    violet: "#6d4bab",
    teal: "#237071",
    red: "#a43b50",
    success: "#24704a",
    danger: "#a43b50",
    warning: "#8a6418",
    codeBg: "#f7faf6",
    buttonText: "#ffffff",
    shadow: "rgba(28, 37, 31, 0.12)",
    backdrop: "rgba(30, 38, 32, 0.25)",
    radius: "8px"
  })
});
Vt.dark;
function ch() {
  return `
    :host {
      ${Mi(Vt.dark)}
      --rasa-reader: var(--rasa-gold);
      --rasa-analysis: var(--rasa-blue);
      --rasa-ir: var(--rasa-violet);
      --rasa-facts: var(--rasa-green);
      --rasa-plan: var(--rasa-teal);
      --rasa-eval: var(--rasa-red);
      font-family:
        Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    }

    :host([data-theme="light"]) {
      ${Mi(Vt.light)}
    }

    :host([data-theme="dark"]) {
      ${Mi(Vt.dark)}
    }
  `;
}
function dh(s = document.documentElement) {
  const e = localStorage.getItem(co), t = e === "light" || e === "dark" ? e : window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
  return uo(t, s), t;
}
function uo(s, e = document.documentElement) {
  const t = s === "light" ? "light" : "dark";
  return e.dataset.rasaTheme = t, e.setAttribute("data-theme", t), localStorage.setItem(co, t), window.dispatchEvent(new CustomEvent("rasa-theme-change", { detail: { theme: t } })), t;
}
function uh(s = document.documentElement) {
  return uo(s.dataset.rasaTheme === "light" ? "dark" : "light", s);
}
function Ts(s) {
  return s === "light" ? "Dark" : "Light";
}
function Mi(s) {
  return `
      color-scheme: ${s.colorScheme};
      --rasa-surface: ${s.surface};
      --rasa-surface-lift: ${s.surfaceLift};
      --rasa-panel: ${s.panel};
      --rasa-panel-soft: ${s.panelSoft};
      --rasa-panel-raised: ${s.panelRaised};
      --rasa-line: ${s.line};
      --rasa-line-strong: ${s.lineStrong};
      --rasa-text: ${s.text};
      --rasa-muted: ${s.muted};
      --rasa-dim: ${s.dim};
      --rasa-gold: ${s.gold};
      --rasa-blue: ${s.blue};
      --rasa-green: ${s.green};
      --rasa-violet: ${s.violet};
      --rasa-teal: ${s.teal};
      --rasa-red: ${s.red};
      --rasa-success: ${s.success};
      --rasa-danger: ${s.danger};
      --rasa-warning: ${s.warning};
      --rasa-code-bg: ${s.codeBg};
      --rasa-button-text: ${s.buttonText};
      --rasa-shadow: ${s.shadow};
      --rasa-backdrop: ${s.backdrop};
      --rasa-radius: ${s.radius};
  `;
}
function fh() {
  return `
    ${ch()}

    /* Modern Glassmorphic Topbar */
    .topbar {
      align-items: center;
      background: rgba(15, 23, 42, 0.4);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      display: flex;
      gap: 24px;
      justify-content: space-between;
      min-height: 80px;
      padding: 16px 24px;
      margin-bottom: 24px;
      position: sticky;
      top: 16px;
      z-index: 100;
      transition: all 0.3s ease;
    }

    :root[data-rasa-theme="light"] .topbar {
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
    }

    .brand {
      align-items: center;
      display: flex;
      gap: 16px;
      min-width: 0;
    }

    .brand-logo {
      display: block;
      flex: 0 0 auto;
      height: 38px;
      opacity: 0.95;
      width: auto;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .brand-logo:hover {
      transform: scale(1.05) rotate(-2deg);
    }

    .brand-copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .eyebrow {
      color: #3b82f6; /* Modern Blue Accent */
      display: block;
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.05em;
      line-height: 1;
      margin-bottom: 6px;
      text-transform: uppercase;
    }

    h1 {
      color: var(--rasa-text);
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.05;
      margin: 0;
    }

    .topbar-subtitle {
      color: var(--rasa-muted);
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin-top: 4px;
      opacity: 0.8;
    }

    .status {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: flex-end;
    }

    .theme-toggle {
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 99px;
      color: var(--rasa-text);
      cursor: pointer;
      display: inline-flex;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      min-height: 36px;
      padding: 0 16px;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    :root[data-rasa-theme="light"] .theme-toggle {
      background: rgba(0, 0, 0, 0.03);
      border-color: rgba(0, 0, 0, 0.08);
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-1px);
    }

    :root[data-rasa-theme="light"] .theme-toggle:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    .brand-mark {
      height: 24px;
      opacity: 0.5;
      width: 24px;
      transition: opacity 0.3s;
    }

    .status:hover .brand-mark {
      opacity: 0.8;
    }

    /* Refined Pills */
    .pill {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
      border-radius: 99px;
      color: var(--rasa-muted);
      display: inline-flex;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      padding: 8px 12px;
      white-space: nowrap;
      transition: all 0.3s;
    }

    :root[data-rasa-theme="light"] .pill {
      border-color: rgba(0, 0, 0, 0.08);
      background: rgba(0, 0, 0, 0.02);
    }

    .pill.ok {
      border-color: rgba(16, 185, 129, 0.3); /* Emerald Green */
      background: rgba(16, 185, 129, 0.1);
      color: #34d399;
    }

    :root[data-rasa-theme="light"] .pill.ok {
      color: #059669;
    }

    .pill.warn {
      border-color: rgba(245, 158, 11, 0.3); /* Amber */
      background: rgba(245, 158, 11, 0.1);
      color: #fbbf24;
    }

    :root[data-rasa-theme="light"] .pill.warn {
      color: #d97706;
    }

    @media (max-width: 840px) {
      .topbar {
        align-items: flex-start;
        flex-direction: column;
        border-radius: 12px;
        padding: 16px;
        gap: 16px;
      }

      .status {
        justify-content: flex-start;
        width: 100%;
      }
    }
  `;
}
function ph({ eyebrow: s, title: e, subtitle: t = "", badges: i = [], themeToggle: n = !0 }) {
  const r = i.map((o) => {
    const a = o.role ? ` data-role="${Ie(o.role)}"` : "";
    return `<span class="pill${o.tone ? ` ${Ie(o.tone)}` : ""}"${a}>${Ie(o.label)}</span>`;
  }).join("");
  return `
    <header class="topbar">
      <div class="brand">
        <img class="brand-logo" src="${Ms.logo}" alt="Rasa" />
        <div class="brand-copy">
          <span class="eyebrow">${Ie(s)}</span>
          <h1>${Ie(e)}</h1>
          ${t ? `<span class="topbar-subtitle">${Ie(t)}</span>` : ""}
        </div>
      </div>
      <div class="status">
        <img class="brand-mark" src="${Ms.mark}" alt="" aria-hidden="true" />
        ${r}
        ${n ? '<button class="theme-toggle" type="button" data-role="theme-toggle" aria-label="Toggle color theme">Toggle Theme</button>' : ""}
      </div>
    </header>
  `;
}
function Ie(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
const gh = Object.freeze({
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
}), fo = I.define(), hn = I.define();
function po(s) {
  return gh[s] ?? "rasa-token-unknown";
}
function mh(s, e) {
  const t = String(s), i = [];
  let n = 0;
  for (const r of mo(e, t))
    r.start > n && i.push({ text: t.slice(n, r.start), className: "" }), i.push({
      text: t.slice(r.start, r.end),
      className: po(r.kind)
    }), n = r.end;
  return n < t.length && i.push({ text: t.slice(n), className: "" }), i;
}
function Rs(s, e) {
  const t = typeof e == "string" ? e : "", i = typeof e == "number" ? e : t.length, n = mo(s, t || i).map(
    (r) => H.mark({ class: po(r.kind) }).range(
      r.start,
      r.end
    )
  );
  return H.set(n, !0);
}
function bh(s = []) {
  return [ve.define({
    create(t) {
      return Rs(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(fo))
          return Rs(n.value, i.state.doc.toString());
      return i.docChanged ? H.none : t.map(i.changes);
    },
    provide: (t) => A.decorations.from(t)
  })];
}
function xh(s = []) {
  return [ve.define({
    create(t) {
      return Es(s, t.doc.toString());
    },
    update(t, i) {
      for (const n of i.effects)
        if (n.is(hn))
          return Es(
            n.value,
            i.state.doc.toString()
          );
      return i.docChanged ? H.none : t.map(i.changes);
    },
    provide: (t) => A.decorations.from(t)
  })];
}
function Es(s, e) {
  const t = yh(s, e).map((i) => {
    const n = ["rasa-evidence-span"];
    return i.pinned && n.push("rasa-evidence-pinned"), H.mark({
      class: n.join(" "),
      attributes: {
        "data-evidence-group": i.group || ""
      }
    }).range(i.start, i.end);
  });
  return H.set(t, !0);
}
function go(s, e, t) {
  const i = String(s), n = cn(e), r = Math.max(n, cn(t));
  return {
    start: Os(i, n),
    end: Os(i, r)
  };
}
function Os(s, e) {
  const t = String(s), i = cn(e);
  let n = 0, r = 0;
  for (const o of t) {
    const a = n + wh(o);
    if (a > i || (n = a, r += o.length, n === i))
      return r;
  }
  return t.length;
}
function mo(s, e) {
  const t = typeof e == "number" ? e : String(e).length;
  return [...s].map((i) => {
    const n = typeof e == "number" ? {
      start: Ds(i.start, t),
      end: Ds(i.end, t)
    } : go(e, i.start, i.end);
    return {
      kind: String(i.kind),
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function yh(s, e) {
  const t = String(e);
  return [...s].map((i) => {
    const n = go(t, i.start, i.end);
    return {
      ...i,
      start: n.start,
      end: n.end
    };
  }).filter((i) => i.start < i.end).sort((i, n) => i.start - n.start || i.end - n.end);
}
function Ds(s, e) {
  const t = Number(s);
  return Number.isFinite(t) ? Math.max(0, Math.min(e, Math.trunc(t))) : 0;
}
function cn(s) {
  const e = Number(s);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function wh(s) {
  const e = s.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
const bo = "wasm-component", vh = "browser-component-adapter-pending", Sh = "Browser execution is pending the Wasm component adapter. Use `ras` or `ras-wasm` locally for execution.", kh = "rasa-component/", xo = "rasa:runtime/host", Ch = "rasa:runtime/host@0.1.0", Ah = "rasa:runtime/session@0.1.0", yo = 1, wo = 2, vo = 4, So = 8, ko = 16, Mh = yo | wo | vo | So | ko, Th = 256;
class Rh extends Error {
  constructor(e = Sh) {
    super(e), this.name = "RasaBrowserRuntimeUnavailableError", this.runtimeKind = bo, this.unavailableReason = vh;
  }
}
class zt extends Error {
  constructor(e) {
    super(e), this.name = "RasaBrowserHostCallError";
  }
}
class On {
  static async load(e, t = {}) {
    const i = Ls(e), n = t.readBytes || Nh, r = await n(i, "Rasa runtime component"), o = Ls(
      t.adapterBaseUrl || kh,
      i
    ), l = await import(
      /* @vite-ignore */
      new URL("ras-runtime.js", o).href
    ), h = Oh(t.host), c = /* @__PURE__ */ new Map(), d = await l.instantiate(async (u) => {
      const f = new URL(u, o), p = c.get(f.href);
      if (p) return p;
      const g = await n(f, `Rasa component core module ${u}`), m = await WebAssembly.compile(g);
      return c.set(f.href, m), m;
    }, h);
    return new On({
      url: i.href,
      adapterBaseUrl: o.href,
      byteLength: r.byteLength,
      imports: h,
      session: d.session || d[Ah]
    });
  }
  constructor(e = {}) {
    if (!e.session)
      throw new Error("Rasa Wasm component adapter did not export the session interface");
    this.url = e.url ?? null, this.adapterBaseUrl = e.adapterBaseUrl ?? null, this.byteLength = e.byteLength ?? null, this.available = !0, this.runtimeKind = bo, this.unavailableReason = null, this.message = "Browser Wasm component runtime ready.", this.session = e.session, this.importObject = e.imports || {};
  }
  imports() {
    return Object.keys(this.importObject);
  }
  status() {
    return this.session.status();
  }
  renderHash() {
    return this.session.renderHash();
  }
  unavailableError() {
    return new Rh(this.message);
  }
  evaluate(e, t = null) {
    return this.session.evalSource($e(e), Ti(t));
  }
  inspect(e, t = null) {
    const i = this.session.inspectSource($e(e), Ti(t));
    return Bs(i, "inspection artifact");
  }
  syntaxTokens(e) {
    const t = this.session.syntaxTokens($e(e));
    return Bs(t, "syntax token payload");
  }
  createSession() {
    return this.session.sessionNew();
  }
  freeSession(e) {
    e != null && this.session.sessionFree(e);
  }
  loadPackage(e, t) {
    return this.session.sessionLoadPackage(e, Dn(t));
  }
  evaluateSession(e, t, i = null) {
    return this.session.sessionEval(e, $e(t), Ti(i));
  }
}
function $e(s) {
  return new TextEncoder().encode(String(s ?? ""));
}
function Eh(s) {
  return new TextDecoder("utf-8", { fatal: !0 }).decode(s);
}
function Oh(s = null) {
  const e = {
    [xo]: Dh(s),
    "wasi:cli/environment": { getEnvironment: () => [] },
    "wasi:cli/exit": {
      exit: () => {
        throw new Error("Rasa Wasm component requested wasi:cli/exit");
      }
    },
    "wasi:cli/stdin": { getStdin: () => new Ps() },
    "wasi:cli/stdout": { getStdout: () => new Ri() },
    "wasi:cli/stderr": { getStderr: () => new Ri() },
    "wasi:cli/terminal-input": { TerminalInput: Hh },
    "wasi:cli/terminal-output": { TerminalOutput: Wh },
    "wasi:cli/terminal-stdin": { getTerminalStdin: () => {
    } },
    "wasi:cli/terminal-stdout": { getTerminalStdout: () => {
    } },
    "wasi:cli/terminal-stderr": { getTerminalStderr: () => {
    } },
    "wasi:clocks/monotonic-clock": { subscribeDuration: () => new dn() },
    "wasi:io/error": { Error: Ih },
    "wasi:io/poll": { Pollable: dn, poll: () => [] },
    "wasi:io/streams": { InputStream: Ps, OutputStream: Ri },
    "wasi:random/insecure-seed": {
      getInsecureSeed: () => [1n, 2n]
    }
  };
  return Lh(e);
}
function Dh(s) {
  return {
    call(e) {
      if (!s)
        throw new zt("no browser host provider is registered");
      if (typeof s.callBytes == "function")
        return Bh(s.callBytes(e), "host.callBytes");
      if (typeof s.call == "function") {
        const t = s.call(Eh(e));
        if (Co(t))
          throw new zt("host.call must be synchronous in this story");
        return $e(t);
      }
      throw new zt("browser host provider does not implement call");
    }
  };
}
function Bh(s, e) {
  if (Co(s))
    throw new zt(`${e} must be synchronous in this story`);
  return Dn(s);
}
function Lh(s) {
  return {
    ...s,
    [Ch]: s[xo],
    "wasi:cli/environment@0.2.6": s["wasi:cli/environment"],
    "wasi:cli/exit@0.2.6": s["wasi:cli/exit"],
    "wasi:cli/stdin@0.2.6": s["wasi:cli/stdin"],
    "wasi:cli/stdout@0.2.6": s["wasi:cli/stdout"],
    "wasi:cli/stderr@0.2.6": s["wasi:cli/stderr"],
    "wasi:cli/terminal-input@0.2.6": s["wasi:cli/terminal-input"],
    "wasi:cli/terminal-output@0.2.6": s["wasi:cli/terminal-output"],
    "wasi:cli/terminal-stdin@0.2.6": s["wasi:cli/terminal-stdin"],
    "wasi:cli/terminal-stdout@0.2.6": s["wasi:cli/terminal-stdout"],
    "wasi:cli/terminal-stderr@0.2.6": s["wasi:cli/terminal-stderr"],
    "wasi:clocks/monotonic-clock@0.2.6": s["wasi:clocks/monotonic-clock"],
    "wasi:io/error@0.2.6": s["wasi:io/error"],
    "wasi:io/poll@0.2.6": s["wasi:io/poll"],
    "wasi:io/streams@0.2.6": s["wasi:io/streams"],
    "wasi:random/insecure-seed@0.3.0-rc-2026-03-15": s["wasi:random/insecure-seed"]
  };
}
function Ti(s) {
  if (typeof s == "number") return s;
  let e = Mh;
  return s?.phases && s.phases !== "all" && (e = (Array.isArray(s.phases) ? s.phases : [s.phases]).reduce((i, n) => i | Ph(n), 0)), s?.traces && (e |= Th), e;
}
function Ph(s) {
  switch (String(s)) {
    case "reader":
      return yo;
    case "analysis":
    case "analyze":
      return wo;
    case "ir":
      return vo;
    case "facts":
      return So;
    case "eval":
      return ko;
    default:
      return 0;
  }
}
function Bs(s, e) {
  try {
    return JSON.parse(s);
  } catch (t) {
    throw new Error(`failed to parse ${e}: ${t.message}`);
  }
}
function Dn(s) {
  return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : $e(s);
}
async function Nh(s, e) {
  const t = await fetch(s);
  if (!t.ok)
    throw new Error(`failed to load ${e}: ${t.status}`);
  return Dn(await t.arrayBuffer());
}
function Ls(s, e = null) {
  return new URL(String(s), e || globalThis.location?.href || import.meta.url);
}
function Co(s) {
  return s && typeof s.then == "function";
}
class Ih {
}
class dn {
  block() {
  }
}
class Ps {
}
class Ri {
  checkWrite() {
    return 0n;
  }
  write() {
  }
  blockingFlush() {
  }
  subscribe() {
    return new dn();
  }
}
class Hh {
}
class Wh {
}
const Ao = `(def scores ^vector [^i64 12 ^i64 25 ^i64 40])

{:count (count scores)
 :first (nth scores 0)
 :total (reduce + 0 scores)}`, Ns = [
  {
    label: "Example 1",
    source: Ao
  },
  {
    label: "Example 2",
    source: `(def sample ^map {:lane :browser :status :ready :score ^i64 9})

{:status (:status sample)
 :score (:score sample)
 :passed (< ^i64 5 (:score sample))}`
  },
  {
    label: "Example 3",
    source: `(def orders
  [{:id ^i64 1 :kind :book :qty ^i64 2 :unit ^i64 30}
   {:id ^i64 2 :kind :tool :qty ^i64 1 :unit ^i64 70}
   {:id ^i64 3 :kind :book :qty ^i64 3 :unit ^i64 30}
   {:id ^i64 4 :kind :demo :qty ^i64 1 :unit ^i64 0}])

(def billable #{:book :tool})

(def enriched
  (map
    (fn [order]
      (let [total (* (:qty order) (:unit order))]
        (assoc
          (assoc order :total total)
          :billable (some? (billable (:kind order))))))
    orders))

{:billable-kinds (into [] (map :kind (filter :billable enriched)))
 :billable-total (reduce + 0 (map :total (filter :billable enriched)))
 :by-id (zipmap (map :id enriched) enriched)}`
  },
  {
    label: "Example 4",
    source: `(def readings
  (map
    (fn [tick]
      {:tick tick :load (+ ^i64 20 (* tick ^i64 5))})
    (range)))

(def warm
  (drop-while
    (fn [reading] (< (:load reading) ^i64 45))
    readings))

(def steady
  (take-while
    (fn [reading] (< (:load reading) ^i64 80))
    warm))

(def alerts
  (remove
    (fn [reading] (< (:load reading) ^i64 60))
    steady))

{:warmup-start (first warm)
 :steady-window (into [] steady)
 :alert-loads (into [] (map :load alerts))
 :tick->load (zipmap (map :tick alerts) (map :load alerts))}`
  },
  {
    label: "Example 5",
    source: `(def events
  (mapcat
    (fn [batch]
      [{:batch batch :id (+ (* batch ^i64 10) ^i64 1) :kind :edge :cost (+ batch ^i64 5)}
       {:batch batch :id (+ (* batch ^i64 10) ^i64 2) :kind :core :cost (+ batch ^i64 20)}
       {:batch batch :id (+ (* batch ^i64 10) ^i64 3) :kind :drop :cost ^i64 0}])
    (range ^i64 1 ^i64 5)))

(def shaped
  (keep
    (fn [event]
      (if (= :drop (:kind event))
        nil
        (assoc event :weight (+ (:cost event) (:batch event)))))
    events))

(def window
  (take
    ^i64 5
    (filter
      (fn [event] (#{:edge :core} (:kind event)))
      shaped)))

(def by-id (zipmap (map :id window) window))

{:window (into [] window)
 :heavy (into [] (drop-while (fn [event] (< (:weight event) ^i64 24)) window))
 :lookup (by-id ^i64 32)
 :max-weight (reduce max ^i64 0 (map :weight window))
 :ids (into [] (map :id window))}`
  }
];
function Mo(s, e, t) {
  const i = String(s), n = fn(e), r = Math.max(n, fn(t));
  return {
    start: un(i, n),
    end: un(i, r)
  };
}
function un(s, e) {
  const t = String(s), i = fn(e);
  let n = 0, r = 0;
  for (const o of t) {
    const a = n + Fh(o);
    if (a > i || (n = a, r += o.length, n === i))
      return r;
  }
  return t.length;
}
function fn(s) {
  const e = Number(s);
  return Number.isFinite(e) ? Math.max(0, Math.trunc(e)) : 0;
}
function Fh(s) {
  const e = s.codePointAt(0);
  return e <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
}
function $h(s, e = []) {
  const t = String(s?.text || ""), i = ti(s?.start, 0), n = ti(s?.end, i + Yh(t)), r = e.map((h) => zh(t, i, n, h)).filter(Boolean), o = /* @__PURE__ */ new Set([0, t.length]);
  for (const h of r)
    o.add(h.start), o.add(h.end);
  const a = [...o].sort((h, c) => h - c), l = [];
  for (let h = 0; h < a.length; h += 1) {
    const c = a[h];
    Vh(l, t, c, r);
    const d = a[h + 1];
    if (d === void 0 || c >= d)
      continue;
    const u = jh(r, c, d);
    l.push({
      text: t.slice(c, d),
      marker: u ? u.publicMarker : null,
      zero: !1
    });
  }
  return l;
}
function Vh(s, e, t, i) {
  for (const n of i)
    !n.zero || n.start !== t || s.push({
      text: "",
      marker: n.publicMarker,
      zero: !0
    });
}
function zh(s, e, t, i) {
  const n = ti(i?.start, 0), r = ti(i?.end, n), o = Math.max(n, e), a = Math.min(Math.max(r, n), t);
  if (o > a || o === a && (o < e || o > t))
    return null;
  const l = o - e, h = a - e, c = l === h ? qh(s, l) : Mo(s, l, h);
  return {
    start: c.start,
    end: c.end,
    zero: c.start === c.end,
    priority: Gh(i, c),
    publicMarker: {
      kind: i?.kind || "primary",
      severity: i?.severity || "warning",
      label: i?.label || ""
    }
  };
}
function qh(s, e) {
  const t = un(s, e);
  return { start: t, end: t };
}
function jh(s, e, t) {
  return s.filter((i) => !i.zero && i.start <= e && i.end >= t).sort(Kh)[0];
}
function Kh(s, e) {
  return s.priority.kind - e.priority.kind || s.priority.severity - e.priority.severity || s.priority.width - e.priority.width || s.priority.label.localeCompare(e.priority.label);
}
function Gh(s, e) {
  return {
    kind: s?.kind === "primary" ? 0 : 1,
    severity: Uh(s?.severity),
    width: e.end - e.start,
    label: s?.label || ""
  };
}
function Uh(s) {
  return s === "error" ? 0 : s === "warning" ? 1 : 2;
}
function ti(s, e) {
  const t = Number(s);
  return Number.isFinite(t) ? t : e;
}
function Yh(s) {
  return new TextEncoder().encode(s).length;
}
function Is(s, e, t = {}) {
  const i = t.selectedGroup || null, n = Jh(s), r = i && n.find((o) => o.id === i) || null;
  return {
    status: _h(s),
    result: Xh(s),
    groups: n,
    activeGroup: r,
    phases: ec(s, n, r),
    plan: Zh(s),
    diagnostics: sc(s, e),
    sourceHighlights: Qh(s, { selectedGroup: i })
  };
}
const Hs = [
  "reader",
  "expand",
  "analyzer",
  "ir",
  "facts",
  "checks",
  "plan",
  "eval"
];
function _h(s = {}) {
  const e = s.failedPhase;
  return s.status === "ok" ? "ok" : e ? `failed in :${e}` : s.status;
}
function Xh(s = {}) {
  const e = s.eval || {};
  return {
    status: e.status || s.status || "unknown",
    value: e.value ?? "nil",
    observedType: e.observedType || "unknown",
    provenance: e.provenance || "runtime-observed"
  };
}
function Jh(s = {}) {
  const e = s.evidence?.groups || [];
  return hc(e.filter(lc), s.source).slice(0, 8).map(dc);
}
function Qh(s = {}, e = {}) {
  const t = new Set([e.selectedGroup].filter(Boolean));
  return t.size ? (s.evidence?.indexes?.spans || []).filter((i) => (i.groups || []).some((n) => t.has(n))).map((i) => ({
    group: (i.groups || []).find((n) => t.has(n)) || "",
    start: i.start,
    end: i.end,
    pinned: !!(e.selectedGroup && i.groups.includes(e.selectedGroup))
  })) : [];
}
function Zh(s = {}) {
  const e = s.plan || {};
  return {
    status: e.status || e.availability || "unavailable",
    lanes: e.lanes || [],
    candidates: e.candidates || []
  };
}
function ec(s = {}, e = [], t = null) {
  return [.../* @__PURE__ */ new Set([
    ...Object.keys(s.phases || {}),
    ...(e || []).flatMap((n) => n.phases || [])
  ])].sort((n, r) => Ws(n) - Ws(r) || Bo(n, r)).map((n) => {
    const r = s.phases?.[n] || {}, o = e.filter((l) => (l.phases || []).includes(n)).length, a = tc(s, n, r);
    return {
      id: n,
      label: nc(n),
      status: ic(s, n, r),
      groups: o,
      diagnostics: a,
      active: !!(t && (t.phases || []).includes(n))
    };
  });
}
function tc(s, e, t) {
  const i = Array.isArray(t.diagnostics) ? t.diagnostics.length : 0, n = Array.isArray(s.diagnosticViews) ? s.diagnosticViews.filter((a) => a.phase === e).length : 0, r = e === "plan" && Array.isArray(s.plan?.diagnostics) ? s.plan.diagnostics.length : 0, o = e === "eval" && Array.isArray(s.eval?.diagnostics) ? s.eval.diagnostics.length : 0;
  return i + n + r + o;
}
function ic(s, e, t = {}) {
  return s.failedPhase === e ? "failed" : t.status ? t.status : e === "plan" ? s.plan?.status || s.plan?.availability || "available" : e === "eval" ? s.eval?.status || s.eval?.availability || "available" : Object.prototype.hasOwnProperty.call(s.phases || {}, e) ? "available" : "waiting";
}
function nc(s) {
  return {
    reader: "Reader",
    expand: "Expand",
    analyzer: "Analyze",
    ir: "IR",
    facts: "Facts",
    checks: "Checks",
    plan: "Plan",
    eval: "Eval"
  }[s] || pn(s);
}
function Ws(s) {
  const e = Hs.indexOf(s);
  return e === -1 ? Hs.length : e;
}
function sc(s = {}, e = "") {
  if (Array.isArray(s.diagnosticViews) && s.diagnosticViews.length)
    return $s(
      Fs(s.diagnosticViews.map((r) => rc(r)))
    ).slice(0, 3);
  const t = Object.entries(s.phases || {}).flatMap(
    ([r, o]) => (o.diagnostics || []).map((a) => Ei(r, a, e))
  ), i = (s.plan?.diagnostics || []).map(
    (r) => Ei("plan", r, e)
  ), n = (s.eval?.diagnostics || []).map(
    (r) => Ei("eval", r, e)
  );
  return $s(
    Fs([...t, ...i, ...n])
  ).slice(0, 3);
}
function rc(s) {
  const e = s.phase || "compiler", t = s.kind || "diagnostic", i = !!s.recoverable;
  return {
    phase: e,
    kind: t,
    title: To(e, t, i),
    status: Ro(e, i),
    recoverable: i,
    message: s.message || "",
    span: s.span || null,
    sourceExcerpt: s.sourceExcerpt || null,
    excerpt: oc(s.sourceExcerpt) || "",
    location: Oo(s.span || null),
    expected: s.expected || "",
    actual: s.actual || "",
    subject: "",
    provenance: s.code || `:${e} / :${t}`,
    impact: s.impact || Eo(e, i)
  };
}
function Ei(s, e, t) {
  const i = e.span || null, n = e.evidence || {}, r = e.kind || "diagnostic", o = !!e.recoverable;
  return {
    phase: s,
    kind: r,
    title: To(s, r, o),
    status: Ro(s, o),
    recoverable: o,
    message: e.message || "",
    span: i,
    sourceExcerpt: null,
    excerpt: i ? pc(t, i) : "",
    location: Oo(i),
    expected: n.expected || "",
    actual: n.actual || "",
    subject: n.subject || "",
    provenance: `:${s} / :${r}`,
    impact: Eo(s, o)
  };
}
function To(s, e, t) {
  return t ? {
    "fact-uncertainty": "Evidence, not a checked guarantee",
    "memory-profile-constraint": "Representation constraint rejected",
    "insufficient-backend-evidence": "Backend plan kept conservative"
  }[e] || `${pn(s)} note` : s === "eval" ? "Evaluation blocker" : `${pn(s)} blocker`;
}
function Ro(s, e) {
  return e ? s === "plan" ? "conservative plan" : "recoverable" : s === "eval" ? "blocks evaluation" : "blocks phase";
}
function Eo(s, e) {
  return e && s === "plan" ? "Planning continues, but later views should treat this as evidence rather than a committed optimization." : e ? "Later phases can continue, but claims should stay conservative." : s === "eval" ? "Evaluation is blocked until this diagnostic is resolved." : `:${s} is blocked until this diagnostic is resolved.`;
}
function Oo(s) {
  return s ? `Source bytes ${s.start}..${s.end}.` : "Whole artifact; no single source span was reported.";
}
function oc(s) {
  const e = s?.lines || [];
  return e.length ? e.map((t) => t.text || "").join(`
`) : "";
}
function pn(s) {
  return String(s || "compiler").split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
}
function Fs(s) {
  const e = /* @__PURE__ */ new Set();
  return s.filter((t) => {
    const i = ac(t);
    return e.has(i) ? !1 : (e.add(i), !0);
  });
}
function $s(s) {
  return [...s].sort(
    (e, t) => Number(e.recoverable) - Number(t.recoverable)
  );
}
function ac(s) {
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
function lc(s = {}) {
  return Do(s) || (s.phases || []).includes("plan") || (s.provenances || []).includes("hinted") || (s.keys || []).some(
    (e) => ["scalar-type", "collection-kind", "known-keys", "host-free"].includes(e)
  );
}
function Do(s = {}) {
  return (s.keys || []).includes("diagnostic");
}
function hc(s, e = {}) {
  const t = Number(e.bytes);
  return [...s].sort(
    (i, n) => cc(i, n, t) || Vs(i) - Vs(n) || Bo(i.subject, n.subject)
  );
}
function Vs(s = {}) {
  return Do(s) ? 0 : (s.provenances || []).includes("hinted") ? 1 : (s.phases || []).includes("plan") ? 2 : (s.keys || []).some((e) => ["scalar-type", "collection-kind"].includes(e)) ? 3 : 4;
}
function cc(s, e, t) {
  const i = zs(s, t), n = zs(e, t);
  return i.kind - n.kind || i.start - n.start || i.end - n.end;
}
function zs(s = {}, e) {
  const t = s.span || null;
  if (!t)
    return { kind: 2, start: Number.MAX_SAFE_INTEGER, end: Number.MAX_SAFE_INTEGER };
  const i = Number.isFinite(Number(t.start)) ? Number(t.start) : Number.MAX_SAFE_INTEGER, n = Number.isFinite(Number(t.end)) ? Number(t.end) : Number.MAX_SAFE_INTEGER;
  return { kind: i === 0 && Number.isFinite(e) && n >= e ? 1 : 0, start: i, end: n };
}
function Bo(s, e) {
  return String(s || "").localeCompare(String(e || ""));
}
function dc(s) {
  const e = uc(s);
  return {
    ...s,
    subjectId: s.subject || "",
    displaySubject: e || s.subject || ""
  };
}
function uc(s = {}) {
  const e = s.entries || [], t = (a) => fc(e.find((l) => l.key === a)?.value), i = t("callee-symbol");
  if (i)
    return `call ${i}`;
  const n = t("collection-kind");
  if (n)
    return `${n} literal`;
  const r = t("literal-kind"), o = t("scalar-type");
  return r && o ? `${o} ${r}` : r ? `${r} literal` : o ? `${o} hint` : t("host-free") ? "source plan" : "";
}
function fc(s) {
  const e = String(s || "").trim();
  return e ? e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : e.startsWith(":") ? e.slice(1) : e : "";
}
function pc(s, e, t = 28) {
  const i = String(s), { start: n, end: r } = Mo(i, e.start, e.end), o = Math.max(0, n - t), a = Math.min(i.length, r + t), l = o > 0 ? "..." : "", h = a < i.length ? "..." : "";
  return `${l}${i.slice(o, a)}${h}`;
}
function Lo(s) {
  return s ? `bytes ${s.start}..${s.end}` : "no source span";
}
function gc(s) {
  if (!s)
    return "No evidence selected";
  const e = (s.keys || []).slice(0, 3).map((i) => `:${i}`).join(" "), t = s.displaySubject && s.subjectId ? `${s.displaySubject} · ${s.subjectId}` : s.displaySubject || s.subject || "";
  return e ? `${t} ${e}` : t;
}
function mc(s) {
  return ii(s, 0);
}
function ii(s, e) {
  return s == null ? "nil" : Array.isArray(s) ? xc(s, e) : typeof s == "object" ? bc(s, e) : typeof s == "string" ? JSON.stringify(s) : typeof s == "boolean" ? s ? "true" : "false" : String(s);
}
function bc(s, e) {
  const t = Object.entries(s);
  if (!t.length)
    return "{}";
  const i = ni(e + 1), n = ni(e);
  return `{
${t.map(
    ([o, a]) => `${i}:${wc(o)} ${ii(a, e + 1)}`
  ).join(`
`)}
${n}}`;
}
function xc(s, e) {
  if (!s.length)
    return "[]";
  if (s.every(yc))
    return `[${s.map((n) => ii(n, e)).join(" ")}]`;
  const t = ni(e + 1), i = ni(e);
  return `[
${s.map((n) => `${t}${ii(n, e + 1)}`).join(`
`)}
${i}]`;
}
function yc(s) {
  return s === null || typeof s != "object";
}
function wc(s) {
  return String(s).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase();
}
function ni(s) {
  return "  ".repeat(s);
}
class vc {
  constructor(e = 4) {
    this.limit = e, this.artifacts = /* @__PURE__ */ new Map(), this.reports = /* @__PURE__ */ new Map();
  }
  inspect(e, t) {
    qs(e);
    const i = String(t), n = this.artifacts.get(i);
    if (n)
      return { artifact: n, cacheHit: !0 };
    const r = e.inspect(i, {
      includeEval: !0,
      includePlan: !0,
      detail: "standard"
    });
    return js(this.artifacts, i, r, this.limit), { artifact: r, cacheHit: !1 };
  }
  runtimeReport(e, t, i) {
    qs(e);
    const n = String(t), r = this.reports.get(n);
    if (r)
      return r;
    const o = e.evaluate(n), a = {
      text: o,
      tokens: i(o)
    };
    return js(this.reports, n, a, this.limit), a;
  }
}
function qs(s) {
  if (s?.available === !1)
    throw s.unavailableError?.() || new Error(s.message || "browser runtime unavailable");
}
function js(s, e, t, i) {
  for (s.set(e, t); s.size > i; )
    s.delete(s.keys().next().value);
}
const Sc = `
:host {
  --rasa-bg: var(--rasa-surface, #0b0d10);
  --rasa-border: var(--rasa-line, #29323d);
  --rasa-border-strong: var(--rasa-line-strong, #3c4856);
  --rasa-error: var(--rasa-red, #ff7078);
  display: block;
  color: var(--rasa-text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

.shell {
  height: calc(100vh - 24px);
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 20px;
  overflow: hidden;
  background: var(--rasa-bg);
  padding: 12px;
}

.topbar,
.source-panel,
.evidence-panel,
.focus-panel {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  min-width: 0;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.source-panel:hover,
.evidence-panel:hover,
.focus-panel:hover {
  border-color: rgba(255, 255, 255, 0.1);
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
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 999px;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.pill {
  padding: 0 12px;
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 600;
}

.pill.ok {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
}

.pill.warn {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.1);
  color: #fbbf24;
}

.cockpit,
.workbench-grid {
  min-height: 0;
  display: grid;
  gap: 14px;
}

.workbench-grid {
  position: relative;
  grid-template-columns: minmax(280px, 0.78fr) minmax(520px, 1.46fr) minmax(300px, 0.82fr);
  isolation: isolate;
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

.centerstage {
  position: relative;
  grid-template-rows: auto auto auto minmax(0, 1fr);
  border-color: rgba(59, 130, 246, 0.2);
  background: rgba(59, 130, 246, 0.02);
  box-shadow: inset 0 0 40px rgba(59, 130, 246, 0.05), 0 8px 32px rgba(0, 0, 0, 0.2);
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
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.source-head {
  align-items: flex-start;
}

.stage-head {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.stage-badge {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 11px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-analysis);
  font-size: 12px;
  font-weight: 780;
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
  min-height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  padding: 0 16px;
  color: var(--rasa-text);
  background: rgba(255, 255, 255, 0.05);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.45;
  cursor: default;
}

.example-rail {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.command-shelf {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  align-items: stretch;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.example-card {
  min-width: 0;
  display: grid;
  grid-template-rows: minmax(46px, auto) auto;
  gap: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.example-card strong,
.example-card span {
  display: block;
  min-width: 0;
}

.example-card > div {
  min-width: 0;
  overflow: hidden;
}

.example-card strong {
  color: var(--rasa-text);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
}

.example-card span {
  margin-top: 3px;
  overflow: hidden;
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.example-actions {
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}

.example-button {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 28px;
  justify-content: center;
  padding: 0 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--rasa-analysis);
  background: rgba(255, 255, 255, 0.03);
  font-size: 12px;
  font-weight: 600;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.example-button-secondary {
  color: var(--rasa-facts);
}

.example-button:hover {
  color: var(--rasa-text);
  border-color: var(--rasa-analysis);
  background: rgba(255, 255, 255, 0.08);
}

.stage-body {
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  background: transparent;
}

.phase-rail {
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 8px;
  padding: 12px 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: transparent;
}

.phase-node {
  min-width: 0;
  min-height: 48px;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 4px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--rasa-muted);
  transition: all 0.2s ease;
}

.phase-node:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}
  cursor: default;
}

.phase-node:first-child {
  border-radius: 8px 0 0 8px;
}

.phase-node:last-child {
  border-radius: 0 8px 8px 0;
}

.phase-node[data-status="ok"],
.phase-node[data-status="available"] {
  color: var(--rasa-text);
  background: var(--rasa-panel-raised);
}

.phase-node[data-active="true"] {
  border-color: color-mix(in srgb, var(--rasa-analysis) 70%, var(--rasa-border));
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--rasa-analysis) 20%, var(--rasa-panel-raised)), var(--rasa-panel-raised));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rasa-analysis) 35%, transparent);
}

.phase-node[data-status="failed"] {
  border-color: color-mix(in srgb, var(--rasa-error) 60%, var(--rasa-border));
}

.phase-name {
  overflow: hidden;
  color: currentColor;
  font-size: 11px;
  font-weight: 820;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.phase-meta {
  overflow: hidden;
  color: var(--rasa-muted);
  font-size: 10px;
  font-weight: 680;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.editor-frame {
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  border-top: 1px solid color-mix(in srgb, var(--rasa-facts) 35%, var(--rasa-border));
  background: var(--rasa-panel-soft);
}

.editor-head,
.editor-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
}

.editor-head {
  border-bottom: 1px solid var(--rasa-border);
  background: linear-gradient(90deg, color-mix(in srgb, var(--rasa-facts) 8%, transparent), transparent);
}

.editor-foot {
  border-top: 1px solid var(--rasa-border);
  color: var(--rasa-muted);
  font-size: 12px;
  font-weight: 680;
}

.run-hint {
  flex: none;
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--rasa-facts) 42%, var(--rasa-border));
  border-radius: 999px;
  color: var(--rasa-facts);
  font-size: 11px;
  font-weight: 780;
}

.run-button {
  min-width: 86px;
  color: var(--rasa-button-text);
  background: linear-gradient(180deg, var(--rasa-green), var(--rasa-green));
  border-color: color-mix(in srgb, var(--rasa-facts) 65%, var(--rasa-border));
}

.editor {
  min-height: 0;
}

.cm-editor {
  height: 100%;
  background: var(--rasa-code-bg);
  color: var(--rasa-text);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 14px;
}

.cm-gutters {
  border-right: 1px solid var(--rasa-border) !important;
  background: var(--rasa-code-bg) !important;
  color: var(--rasa-dim) !important;
}

.cm-lineNumbers .cm-gutterElement {
  min-width: 3.5ch;
  padding: 0 10px 0 8px;
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

.cm-editor .cm-selectionBackground,
.cm-editor.cm-focused .cm-selectionBackground {
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

.rasa-token-comment { color: var(--rasa-dim); font-style: italic; }
.rasa-token-delimiter { color: var(--rasa-muted); }
.rasa-token-reader-macro,
.rasa-token-metadata { color: var(--rasa-reader); font-weight: 760; }
.rasa-token-keyword { color: var(--rasa-green); }
.rasa-token-string { color: var(--rasa-gold); }
.rasa-token-number,
.rasa-token-boolean,
.rasa-token-nil { color: var(--rasa-ir); }
.rasa-token-symbol { color: var(--rasa-text); }
.rasa-token-character { color: var(--rasa-blue); }

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
  background: var(--rasa-panel-raised);
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
  background: var(--rasa-panel-soft);
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
  background: var(--rasa-panel-soft);
}

.evidence-card {
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-surface-lift);
  cursor: pointer;
  overflow: hidden;
}

.evidence-card:hover,
.evidence-card:focus-visible,
.evidence-card[data-selected="true"] {
  border-color: var(--rasa-analysis);
  background: var(--rasa-panel-raised);
}

.evidence-card:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--rasa-analysis) 70%, transparent);
  outline-offset: 2px;
}

.evidence-card[data-selected="true"] {
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--rasa-analysis) 30%, transparent);
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
  background: var(--rasa-panel-soft);
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
  background: var(--rasa-panel-soft);
}

.focus-body > * {
  flex: none;
}

.focus-card,
.debug-artifact {
  min-width: 0;
  border: 1px solid var(--rasa-border);
  border-radius: 7px;
  background: var(--rasa-surface-lift);
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
.diagnostic-card code,
.source-excerpt {
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

.source-excerpt {
  margin-top: 8px;
  border: 1px solid var(--rasa-border);
  border-radius: 6px;
  background: rgba(6, 10, 14, 0.45);
  color: var(--rasa-reader);
  overflow: auto;
}

.source-excerpt code {
  display: block;
  color: inherit;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre;
}

.source-excerpt-frame {
  display: grid;
  padding: 7px 0;
}

.source-excerpt-line {
  display: grid;
  grid-template-columns: 4ch minmax(0, 1fr);
  gap: 9px;
  min-width: max-content;
  padding: 0 8px;
}

.source-excerpt-gutter {
  color: var(--rasa-muted);
  font-family: "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace;
  font-size: 11px;
  line-height: 1.65;
  text-align: right;
  user-select: none;
}

.source-excerpt-code {
  min-width: 0;
}

.source-marker {
  border-radius: 3px;
  background: color-mix(in srgb, var(--rasa-reader) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-reader);
  color: var(--rasa-text);
}

.source-marker[data-severity="error"] {
  background: color-mix(in srgb, var(--rasa-error) 18%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-error);
}

.source-marker[data-severity="warning"] {
  background: color-mix(in srgb, var(--rasa-plan) 16%, transparent);
  box-shadow: inset 0 -2px 0 var(--rasa-plan);
}

.source-marker-zero {
  display: inline-block;
  width: 2px;
  min-height: 1.2em;
  vertical-align: -0.18em;
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
  background: var(--rasa-surface-lift);
}

.connector-layer {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  overflow: visible;
}

.workbench-grid > *:not(.connector-layer):not(.connector-tip):not(.connector-hotspots) {
  position: relative;
  z-index: 2;
}

.connector-hotspots {
  display: contents;
}

.connector-hotspot {
  position: absolute;
  z-index: 4;
  width: 13px;
  min-height: 0;
  height: 13px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 46%, var(--rasa-border));
  border-radius: 999px;
  padding: 0;
  background:
    radial-gradient(circle, color-mix(in srgb, var(--rasa-analysis) 55%, transparent) 0 1px, transparent 2px),
    rgba(9, 13, 18, 0.84);
  box-shadow: 0 0 0 2px rgba(9, 13, 18, 0.56);
  cursor: help;
  opacity: 0.38;
  pointer-events: auto;
  transform: translate(-50%, -50%);
  transition:
    opacity 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.connector-hotspot:hover,
.connector-hotspot:focus-visible,
.connector-hotspot[data-active="true"] {
  border-color: var(--rasa-analysis);
  box-shadow:
    0 0 0 4px rgba(9, 13, 18, 0.64),
    0 0 18px color-mix(in srgb, var(--rasa-analysis) 34%, transparent);
  opacity: 0.96;
  outline: none;
  transform: translate(-50%, -50%) scale(1.08);
}

.connector-hotspot-source-focus,
.connector-hotspot-phase-source {
  border-color: color-mix(in srgb, var(--rasa-facts) 46%, var(--rasa-border));
  background:
    radial-gradient(circle, color-mix(in srgb, var(--rasa-facts) 55%, transparent) 0 1px, transparent 2px),
    rgba(9, 13, 18, 0.84);
}

.connector-hotspot-source-focus:hover,
.connector-hotspot-source-focus:focus-visible,
.connector-hotspot-source-focus[data-active="true"],
.connector-hotspot-phase-source:hover,
.connector-hotspot-phase-source:focus-visible,
.connector-hotspot-phase-source[data-active="true"] {
  border-color: var(--rasa-facts);
  box-shadow:
    0 0 0 4px rgba(9, 13, 18, 0.64),
    0 0 18px color-mix(in srgb, var(--rasa-facts) 34%, transparent);
}

.connector {
  fill: none;
  stroke-width: 1.55;
  stroke-linecap: round;
  stroke-dasharray: 6 9;
  opacity: 0.26;
  filter: drop-shadow(0 0 6px rgba(120, 167, 255, 0.12));
  transition:
    opacity 150ms ease,
    stroke-width 150ms ease,
    filter 150ms ease;
  pointer-events: none;
}

.connector-hit {
  fill: none;
  stroke: transparent;
  stroke-linecap: round;
  stroke-width: 18;
  opacity: 0;
  pointer-events: stroke;
  cursor: help;
}

.connector-point {
  fill: var(--rasa-code-bg);
  stroke-width: 2;
  opacity: 0.32;
  filter: drop-shadow(0 0 5px rgba(120, 167, 255, 0.16));
  transition:
    opacity 150ms ease,
    filter 150ms ease;
  pointer-events: none;
}

.connector-layer[data-connector-active="true"] .connector {
  stroke-width: 2;
  opacity: 0.54;
  filter: drop-shadow(0 0 8px rgba(120, 167, 255, 0.2));
}

.connector-layer[data-connector-active="true"] .connector[data-hovered="true"] {
  stroke-width: 2.85;
  stroke-dasharray: none;
  opacity: 0.96;
  filter: drop-shadow(0 0 14px rgba(120, 167, 255, 0.34));
}

.connector-layer[data-connector-active="true"] .connector-point {
  opacity: 0.64;
}

.connector-layer[data-connector-active="true"] .connector-point-source,
.connector-layer[data-connector-active="true"] .connector-point-focus {
  filter: drop-shadow(0 0 8px color-mix(in srgb, var(--rasa-facts) 38%, transparent));
}

.connector-evidence-phase,
.connector-phase-source,
.connector-phase-focus,
.connector-point-evidence,
.connector-point-phase {
  stroke: var(--rasa-analysis);
}

.connector-source-focus,
.connector-point-source,
.connector-point-focus {
  stroke: var(--rasa-facts);
}

.connector-tip {
  position: absolute;
  z-index: 4;
  width: min(280px, 28vw);
  padding: 9px 10px;
  border: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  border-radius: 8px;
  color: var(--rasa-text);
  background:
    linear-gradient(180deg, rgba(17, 24, 34, 0.98), rgba(12, 18, 25, 0.98));
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
  transform: translate(-50%, calc(-100% - 12px));
  pointer-events: none;
}

.connector-tip[hidden] {
  display: none;
}

.connector-tip::after {
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 10px;
  height: 10px;
  border-right: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  border-bottom: 1px solid color-mix(in srgb, var(--rasa-analysis) 44%, var(--rasa-border));
  background: rgba(12, 18, 25, 0.98);
  content: "";
  transform: translateX(-50%) rotate(45deg);
}

.connector-tip strong,
.connector-tip span {
  position: relative;
  z-index: 1;
  display: block;
}

.connector-tip strong {
  color: var(--rasa-analysis);
  font-size: 11px;
  font-weight: 820;
  letter-spacing: 0;
  text-transform: uppercase;
}

.connector-tip span {
  margin-top: 3px;
  color: var(--rasa-muted);
  font-size: 12px;
  line-height: 1.35;
}

.shell-article {
  height: auto;
  min-height: 560px;
}

.shell-article .topbar {
  display: none;
}

.shell-article .cockpit,
.shell-article .workbench-grid {
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
  .workbench-grid,
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
class kc extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.engine = null, this.editor = null, this.runCount = 0, this.currentRun = null, this.inspectionSession = new vc(), this.selectedGroup = null, this.workbenchModel = null, this.syntaxTimer = null, this.resizeObserver = null, this.themeListener = null;
  }
  connectedCallback() {
    this.syncTheme(dh()), this.themeListener = (e) => this.syncTheme(e.detail?.theme || "dark"), window.addEventListener("rasa-theme-change", this.themeListener), this.render(), this.mountEditor(), this.loadEngine(), this.refreshSyntax();
  }
  disconnectedCallback() {
    this.syntaxTimer && (clearTimeout(this.syntaxTimer), this.syntaxTimer = null), this.editor?.destroy(), this.editor = null, this.resizeObserver?.disconnect(), this.resizeObserver = null, this.themeListener && (window.removeEventListener("rasa-theme-change", this.themeListener), this.themeListener = null);
  }
  get runtimeUrl() {
    return this.getAttribute("runtime-url") || "./ras.wasm";
  }
  get demoMode() {
    return this.getAttribute("mode") === "article" ? "article" : "workbench";
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>${fh()}${Sc}</style>
      <section class="shell shell-${this.demoMode}" aria-label="Rasa browser inspection workbench">
        ${ph({
      eyebrow: "Rasa Browser Inspection",
      title: "Evidence workbench",
      subtitle: "Compiler evidence rendered directly from the browser Wasm artifact",
      badges: [
        { role: "runtime", label: "runtime loading", tone: "warn" },
        { role: "artifact", label: "source artifact" },
        { role: "syntax", label: "syntax provider pending" }
      ]
    })}

        <section class="workbench-grid" aria-label="Rasa evidence workbench">
          <svg class="connector-layer" data-role="connectors" aria-hidden="true"></svg>
          <div class="connector-hotspots" data-role="connector-hotspots"></div>
          <div class="connector-tip" data-role="connector-tip" hidden>
            <strong data-role="connector-tip-title"></strong>
            <span data-role="connector-tip-detail"></span>
          </div>

          <section class="evidence-panel" aria-label="Grouped evidence">
            <div class="panel-head">
              <div>
                <span class="label">Evidence</span>
                <span class="panel-subtitle" data-role="evidence-count">waiting for run</span>
              </div>
            </div>
            <div class="result-strip" data-role="result-strip"></div>
            <div class="evidence-list" data-role="evidence-list" role="list"></div>
          </section>

          <section class="source-panel centerstage" aria-label="Rasa centerstage">
            <div class="stage-head">
              <div>
                <span class="label">Centerstage</span>
                <span class="panel-subtitle">Source-first compiler inspection</span>
              </div>
              <span class="stage-badge">Editor surface</span>
            </div>

            <div class="example-rail command-shelf" data-role="examples">
              ${Ns.map((e, t) => Lc(e, t)).join("")}
            </div>

            <div class="phase-rail" data-role="phase-rail" aria-label="Rasa phase spine">
              ${Gs().map((e) => Us(e)).join("")}
            </div>

            <div class="stage-body">
              <div class="editor-frame">
                <div class="editor-head">
                  <div>
                    <span class="label">Rasa input</span>
                    <span class="panel-subtitle">Run the complete source</span>
                  </div>
                  <span class="run-hint">Primary+Enter runs</span>
                </div>
                <div class="editor" data-role="editor"></div>
                <div class="editor-foot">
                  <span>Examples load or append explicitly; typing never computes.</span>
                  <button type="button" class="run-button" data-role="run">Run</button>
                </div>
              </div>
            </div>
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
    `, this.shadowRoot.querySelector('[data-role="run"]').addEventListener("click", () => this.run()), this.shadowRoot.querySelector('[data-role="theme-toggle"]')?.addEventListener("click", () => this.syncTheme(uh())), this.shadowRoot.querySelector('[data-role="examples"]').addEventListener("click", (e) => this.applyExample(e)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("click", (e) => this.pinEvidence(e)), this.shadowRoot.querySelector('[data-role="evidence-list"]').addEventListener("keydown", (e) => this.pinEvidenceByKey(e)), this.shadowRoot.querySelector('[data-role="connectors"]').addEventListener("pointerover", (e) => this.showConnectorTip(e)), this.shadowRoot.querySelector('[data-role="connectors"]').addEventListener("pointerout", (e) => this.hideConnectorTip(e)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("pointerover", (e) => this.showConnectorTip(e)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("pointerout", (e) => this.hideConnectorTip(e)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("focusin", (e) => this.showConnectorTip(e)), this.shadowRoot.querySelector('[data-role="connector-hotspots"]').addEventListener("focusout", (e) => this.hideConnectorTip(e)), this.resizeObserver = new ResizeObserver(() => this.renderConnectors()), this.resizeObserver.observe(this.shadowRoot.querySelector(".workbench-grid")), this.updateThemeToggle();
  }
  syncTheme(e) {
    const t = e === "light" ? "light" : "dark";
    this.setAttribute("data-theme", t), this.updateThemeToggle();
  }
  updateThemeToggle() {
    const e = this.shadowRoot?.querySelector('[data-role="theme-toggle"]');
    if (e) {
      const t = this.getAttribute("data-theme") || "dark";
      e.textContent = Ts(t), e.setAttribute("aria-label", `Switch to ${Ts(t).toLowerCase()} theme`);
    }
  }
  mountEditor() {
    const e = this.shadowRoot.querySelector('[data-role="editor"]'), t = this.getAttribute("source") || Ao;
    this.editor = new A({
      parent: e,
      state: D.create({
        doc: t,
        extensions: [
          hh(),
          Jl(),
          ro.of([
            {
              key: "Mod-Enter",
              run: () => (this.run(), !0)
            }
          ]),
          A.lineWrapping,
          bh(),
          xh(),
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
      if (this.engine = await On.load(this.runtimeUrl), this.engine.available === !1) {
        this.setPill("runtime", "runtime unavailable", "warn"), this.setPill("syntax", "syntax fallback", "warn"), this.showRuntimeUnavailable(), this.scheduleSyntaxRefresh(0);
        return;
      }
      this.setPill("runtime", "runtime ready", "ok"), this.scheduleSyntaxRefresh(0);
    } catch (e) {
      this.setPill("runtime", "runtime unavailable", "warn"), this.showError("Engine unavailable", e.message);
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
          effects: fo.of(e.tokens || [])
        }), e.status === "unavailable" ? this.setPill("syntax", "syntax fallback", "warn") : this.setPill("syntax", "syntax ready", "ok");
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
      if (this.engine.available === !1) {
        this.showRuntimeUnavailable();
        return;
      }
      const t = this.sourceText(), i = this.inspectionSession.inspect(this.engine, t);
      this.runCount += 1, this.currentRun = { source: t, ...i }, this.selectedGroup = null, this.renderWorkbench();
    } catch (t) {
      this.showError("Inspection error", t.message);
    } finally {
      e.disabled = this.engine?.available === !1, this.editor?.focus();
    }
  }
  applyExample(e) {
    const t = e.target.closest("button[data-example-index][data-example-action]");
    if (!t)
      return;
    const i = Ns[Number(t.dataset.exampleIndex)];
    if (!i || !this.editor)
      return;
    const n = t.dataset.exampleAction, r = n === "append" ? Pc(i.source) : i.source, o = n === "append" ? this.editor.state.doc.length : 0, a = n === "append" ? this.editor.state.doc.length : this.editor.state.doc.length, l = o + r.length;
    this.editor.dispatch({
      changes: { from: o, to: a, insert: r },
      selection: { anchor: l },
      scrollIntoView: !0
    }), this.editor.focus(), this.scheduleSyntaxRefresh(0), this.clearEvidenceState();
  }
  pinEvidence(e) {
    const t = e.target.closest("[data-evidence-group]");
    t && (this.selectedGroup = t.dataset.evidenceGroup, this.renderWorkbench());
  }
  pinEvidenceByKey(e) {
    if (e.key !== "Enter" && e.key !== " ")
      return;
    const t = e.target.closest("[data-evidence-group]");
    t && (e.preventDefault(), this.selectedGroup = t.dataset.evidenceGroup, this.renderWorkbench());
  }
  showConnectorTip(e) {
    const t = e.target.closest?.(".connector-hotspot, .connector-hit");
    if (!t)
      return;
    const i = this.shadowRoot.querySelector('[data-role="connectors"]'), n = this.shadowRoot.querySelector('[data-role="connector-tip"]');
    i.dataset.connectorActive = "true";
    for (const r of i.querySelectorAll(".connector"))
      r.dataset.hovered = String(r.dataset.connector === t.dataset.connector);
    for (const r of this.shadowRoot.querySelectorAll(".connector-hotspot, .connector-hit"))
      r.dataset.active = String(r.dataset.connector === t.dataset.connector);
    n.querySelector('[data-role="connector-tip-title"]').textContent = t.dataset.tipTitle || "", n.querySelector('[data-role="connector-tip-detail"]').textContent = t.dataset.tipDetail || "", n.style.left = `${Number(t.dataset.tipX || 0)}px`, n.style.top = `${Number(t.dataset.tipY || 0)}px`, n.hidden = !1;
  }
  hideConnectorTip(e) {
    if (e?.relatedTarget?.closest?.(".connector-hotspot, .connector-hit"))
      return;
    const t = this.shadowRoot.querySelector('[data-role="connectors"]'), i = this.shadowRoot.querySelector('[data-role="connector-tip"]');
    delete t.dataset.connectorActive;
    for (const n of t.querySelectorAll(".connector"))
      delete n.dataset.hovered;
    for (const n of this.shadowRoot.querySelectorAll(".connector-hotspot, .connector-hit"))
      delete n.dataset.active;
    i.hidden = !0;
  }
  clearEvidenceState({ evidenceCount: e = "run to inspect evidence", lastRun: t = "not run yet" } = {}) {
    this.currentRun = null, this.selectedGroup = null, this.workbenchModel = null, this.editor?.dispatch({ effects: hn.of([]) }), this.hideConnectorTip(), this.shadowRoot.querySelector('[data-role="result-strip"]').textContent = "", this.shadowRoot.querySelector('[data-role="evidence-list"]').textContent = "", this.shadowRoot.querySelector('[data-role="focus-body"]').textContent = "", this.shadowRoot.querySelector('[data-role="connectors"]').textContent = "", this.shadowRoot.querySelector('[data-role="connector-hotspots"]').textContent = "", this.shadowRoot.querySelector('[data-role="phase-rail"]').innerHTML = Gs().map((i) => Us(i)).join(""), this.shadowRoot.querySelector('[data-role="evidence-count"]').textContent = e, this.shadowRoot.querySelector('[data-role="last-run"]').textContent = t;
  }
  renderWorkbench() {
    if (!this.currentRun)
      return;
    let e = Is(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: this.selectedGroup
    });
    this.workbenchModel = e, this.selectedGroup && !e.groups.some((n) => n.id === this.selectedGroup) && (this.selectedGroup = null, e = Is(this.currentRun.artifact, this.currentRun.source, {
      selectedGroup: this.selectedGroup
    }), this.workbenchModel = e), this.renderResult(e), this.renderPhaseRail(e), this.renderEvidenceList(e), this.renderFocus(e);
    const t = this.selectedGroup ? e.sourceHighlights : [];
    this.editor?.dispatch({ effects: hn.of(t) });
    const i = this.currentRun.cacheHit ? " / cached" : "";
    this.shadowRoot.querySelector('[data-role="last-run"]').textContent = `run ${this.runCount} / ${e.status}${i}`, this.renderConnectors(e);
  }
  renderResult(e) {
    const t = this.shadowRoot.querySelector('[data-role="result-strip"]');
    t.textContent = "", t.append(Cc(e.result, this), Ac(e));
  }
  renderPhaseRail(e) {
    const t = this.shadowRoot.querySelector('[data-role="phase-rail"]');
    t.textContent = "";
    for (const i of e.phases) {
      const n = document.createElement("button");
      n.type = "button", n.className = "phase-node", n.dataset.phaseNode = i.id, n.dataset.status = i.status || "unknown", n.dataset.active = String(!!i.active), n.innerHTML = `
        <span class="phase-name"></span>
        <span class="phase-meta"></span>
      `, n.querySelector(".phase-name").textContent = i.label, n.querySelector(".phase-meta").textContent = Po(i), t.append(n);
    }
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
      n.className = "evidence-card", n.dataset.evidenceGroup = i.id, n.dataset.phase = (i.phases || []).join(" "), n.dataset.domain = (i.domains || []).join(" "), n.dataset.provenance = (i.provenances || []).join(" "), n.dataset.selected = String(i.id === this.selectedGroup), n.tabIndex = 0, n.setAttribute("role", "listitem"), n.setAttribute("aria-current", i.id === this.selectedGroup ? "true" : "false"), n.innerHTML = `
        <div class="evidence-card-head">
          <span class="evidence-subject">
            <span class="evidence-label"></span>
            <span class="evidence-id"></span>
          </span>
          <span class="evidence-span"></span>
        </div>
        <div class="evidence-tags"></div>
        <div class="evidence-entries"></div>
      `, n.querySelector(".evidence-label").textContent = i.displaySubject || i.subject, n.querySelector(".evidence-id").textContent = i.subjectId || "", n.querySelector(".evidence-span").textContent = Lo(i.span);
      const r = n.querySelector(".evidence-tags");
      for (const a of [...i.keys || [], ...i.provenances || []].slice(0, 5))
        r.append(No(a));
      const o = n.querySelector(".evidence-entries");
      for (const a of Mc(i)) {
        const l = document.createElement("div");
        l.className = "evidence-entry", l.dataset.phase = a.phase, l.dataset.provenance = a.provenance, l.textContent = `:${a.key} ${a.value}`, o.append(l);
      }
      t.append(n);
    }
  }
  renderFocus(e) {
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]');
    t.textContent = "", t.append(Tc(e.activeGroup, this)), t.append(Rc(e.plan)), e.diagnostics.length && t.append(Ec(e.diagnostics)), t.append(Bc(this.currentRun.artifact, this));
  }
  showError(e, t) {
    this.clearEvidenceState({ evidenceCount: "browser inspection error", lastRun: e });
    const i = this.shadowRoot.querySelector('[data-role="focus-body"]'), n = document.createElement("article");
    n.className = "focus-card focus-card-error", n.innerHTML = `
      <div class="focus-card-head">
        <h2></h2>
        <span class="status-text">client</span>
      </div>
      <pre class="edn-block"></pre>
    `, n.querySelector("h2").textContent = e, n.querySelector("pre").textContent = t, i.append(n);
  }
  showRuntimeUnavailable() {
    const e = this.shadowRoot.querySelector('[data-role="run"]');
    e && (e.disabled = !0, e.title = "Browser Wasm component runtime is unavailable."), this.clearEvidenceState({
      evidenceCount: "source display available; browser runtime unavailable",
      lastRun: "runtime unavailable"
    });
    const t = this.shadowRoot.querySelector('[data-role="focus-body"]'), i = document.createElement("article");
    i.className = "focus-card focus-card-pending", i.innerHTML = `
      <div class="focus-card-head">
        <h2>Browser runtime unavailable</h2>
        <span class="status-text">wasm-component</span>
      </div>
      <p class="focus-lede"></p>
      <p class="focus-note"></p>
    `, i.querySelector(".focus-lede").textContent = "Browser execution requires the Rasa Wasm component runtime and generated adapter assets to load successfully.", i.querySelector(".focus-note").textContent = "Check that ras.wasm and rasa-component assets are published together. Source display, examples, and static inspection surfaces remain available when runtime loading fails.", t.append(i);
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
  renderConnectors(e = null) {
    const t = this.shadowRoot.querySelector('[data-role="connectors"]'), i = this.shadowRoot.querySelector('[data-role="connector-hotspots"]');
    if (!t || !i)
      return;
    if (!this.selectedGroup) {
      t.textContent = "", i.textContent = "";
      return;
    }
    const n = e || this.workbenchModel, r = this.shadowRoot.querySelector(".workbench-grid"), o = this.shadowRoot.querySelector(
      `.evidence-card[data-evidence-group="${CSS.escape(this.selectedGroup)}"]`
    ), l = (n?.activeGroup || null)?.phases?.[0] || "", h = l ? this.shadowRoot.querySelector(`.phase-node[data-phase-node="${CSS.escape(l)}"]`) : null, d = n?.sourceHighlights?.[0] || null ? this.shadowRoot.querySelector(".rasa-evidence-pinned") : null, u = this.shadowRoot.querySelector(".focus-body .focus-card");
    if (!r || !o || !u || !h)
      return;
    t.textContent = "", i.textContent = "";
    const f = r.getBoundingClientRect(), p = o.getBoundingClientRect(), g = h.getBoundingClientRect(), m = u.getBoundingClientRect(), b = Math.max(1, f.width), w = Math.max(1, f.height), v = {
      evidence: Bt(p.right, p.top + p.height / 2, f),
      phase: Bt(g.left + g.width / 2, g.top + g.height / 2, f),
      focus: Bt(m.left, m.top + 44, f)
    };
    if (d) {
      const S = d.getBoundingClientRect();
      v.source = Bt(
        S.left + S.width / 2,
        S.top + S.height / 2,
        f
      );
    }
    const R = h.querySelector(".phase-name")?.textContent || "phase", C = [
      Lt(
        "evidence-phase",
        v.evidence,
        v.phase,
        `Evidence to ${R}`,
        "This selected annotation group is reported under this compiler phase."
      )
    ];
    v.source ? C.push(
      Lt(
        "phase-source",
        v.phase,
        v.source,
        `${R} to source`,
        "This evidence includes a Rasa source span, so the editor can highlight the reported range."
      ),
      Lt(
        "source-focus",
        v.source,
        v.focus,
        "Source to focus",
        "The pinned source span expands into the focused evidence and artifact details."
      )
    ) : C.push(
      Lt(
        "phase-focus",
        v.phase,
        v.focus,
        `${R} to focus`,
        "This phase-level evidence has no source span, so the focus panel carries the detail."
      )
    ), t.setAttribute("viewBox", `0 0 ${b} ${w}`), t.innerHTML = `
      ${C.map(Ic).join("")}
      ${Pt("evidence", v.evidence)}
      ${Pt("phase", v.phase)}
      ${v.source ? Pt("source", v.source) : ""}
      ${Pt("focus", v.focus)}
    `, i.innerHTML = C.map(Hc).join("");
  }
}
function Cc(s, e) {
  const t = document.createElement("article");
  t.className = "result-card", t.dataset.status = s.status || "unknown", t.innerHTML = `
    <div class="result-card-head">
      <span class="metric-label">Result</span>
      <span class="status-text"></span>
    </div>
    <pre class="result-value"></pre>
  `, t.querySelector(".status-text").textContent = s.status || "";
  const i = String(s.value ?? "nil");
  return si(t.querySelector(".result-value"), i, e.syntaxTokensFor(i)), t;
}
function Ac(s) {
  const e = document.createElement("div");
  return e.className = "metric-deck", e.append(
    Ks("Observed", s.result.observedType, s.result.provenance),
    Ks("Plan", s.plan.status, `${s.plan.candidates.length} candidates`)
  ), e;
}
function Ks(s, e, t) {
  const i = document.createElement("div");
  return i.className = "metric-card", i.innerHTML = `
    <span class="metric-label"></span>
    <strong class="metric-value"></strong>
    <span class="metric-meta"></span>
  `, i.querySelector(".metric-label").textContent = s, i.querySelector(".metric-value").textContent = String(e ?? "nil"), i.querySelector(".metric-meta").textContent = t || "", i;
}
function Gs() {
  return [
    { id: "reader", label: "Reader", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "expand", label: "Expand", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "analyzer", label: "Analyze", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "ir", label: "IR", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "facts", label: "Facts", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "plan", label: "Plan", status: "waiting", groups: 0, diagnostics: 0 },
    { id: "eval", label: "Eval", status: "waiting", groups: 0, diagnostics: 0 }
  ];
}
function Us(s) {
  return `
    <button type="button" class="phase-node" data-phase-node="${Z(s.id)}" data-status="${Z(s.status || "waiting")}" data-active="false">
      <span class="phase-name">${Z(s.label)}</span>
      <span class="phase-meta">${Z(Po(s))}</span>
    </button>
  `;
}
function Po(s) {
  const e = [];
  return s.groups && e.push(`${s.groups} groups`), s.diagnostics && e.push(`${s.diagnostics} signals`), e.join(" / ") || s.status || "waiting";
}
function Mc(s) {
  return (s.entries || []).slice(0, 3);
}
function No(s) {
  const e = document.createElement("span");
  return e.className = "semantic-tag", e.textContent = s.startsWith(":") ? s : `:${s}`, e;
}
function Tc(s, e) {
  const t = document.createElement("article");
  t.className = "focus-card", t.dataset.phase = (s?.phases || []).join(" "), t.dataset.domain = (s?.domains || []).join(" "), t.dataset.provenance = (s?.provenances || []).join(" "), t.innerHTML = `
    <div class="focus-card-head">
      <h2></h2>
      <span class="status-text"></span>
    </div>
    <div class="focus-tags"></div>
    <pre class="edn-block"></pre>
  `, t.querySelector("h2").textContent = gc(s), t.querySelector(".status-text").textContent = s ? Lo(s.span) : "click evidence";
  const i = t.querySelector(".focus-tags");
  for (const n of [
    ...s?.phases || [],
    ...s?.domains || [],
    ...s?.provenances || []
  ])
    i.append(No(n));
  return si(
    t.querySelector(".edn-block"),
    s?.rendered || "Click an evidence group to inspect Rasa-owned annotations and source spans.",
    e.syntaxTokensFor(s?.rendered || "")
  ), t;
}
function Rc(s) {
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
    t.append(Oi(i.lane, `${i.memoryPath} / ${i.status}`));
  for (const i of s.candidates.slice(0, 4))
    t.append(Oi(i.candidate, i.reason || i.status));
  return t.childElementCount || t.append(Oi("plan", "unavailable for this source")), e;
}
function Ec(s) {
  const e = document.createElement("article");
  e.className = "focus-card diagnostics-card", e.innerHTML = `
    <div class="focus-card-head">
      <div>
        <h2>Diagnostics</h2>
        <p class="diagnostics-note">
          Compiler signals that change what the browser inspection can safely claim.
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
      <div class="source-excerpt" data-field="source-excerpt"></div>
    `, n.querySelector("strong").textContent = i.title, n.querySelector("span").textContent = i.status, n.querySelector("p").textContent = i.message, n.querySelector('[data-field="impact"]').textContent = i.impact, n.querySelector('[data-field="location"]').textContent = i.location, n.querySelector('[data-field="provenance"]').textContent = i.provenance;
    const r = n.querySelector('[data-field="source-excerpt"]');
    if (i.sourceExcerpt?.lines?.length)
      r.replaceChildren(Oc(i.sourceExcerpt));
    else if (i.excerpt) {
      const o = document.createElement("code");
      o.textContent = i.excerpt, r.replaceChildren(o);
    } else
      r.remove();
    t.append(n);
  }
  return e;
}
function Oc(s) {
  const e = document.createElement("div");
  e.className = "source-excerpt-frame";
  for (const t of s.lines || []) {
    const i = document.createElement("div");
    i.className = "source-excerpt-line";
    const n = document.createElement("span");
    n.className = "source-excerpt-gutter", n.textContent = String(t.line ?? "");
    const r = document.createElement("code");
    r.className = "source-excerpt-code", Dc(r, t, s.markers || []), i.append(n, r), e.append(i);
  }
  return e;
}
function Dc(s, e, t) {
  for (const i of $h(e, t))
    if (i.marker) {
      const n = document.createElement("span");
      n.className = "source-marker", i.zero && n.classList.add("source-marker-zero"), n.dataset.kind = i.marker.kind, n.dataset.severity = i.marker.severity, n.title = i.marker.label, n.textContent = i.text, s.append(n);
    } else i.text && s.append(document.createTextNode(i.text));
}
function Bc(s, e) {
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
      let a = null;
      const l = mc(s);
      try {
        a = e.runtimeReport();
      } catch (h) {
        a = { text: `runtime report unavailable: ${h.message}`, tokens: [] };
      }
      si(n, l, e.syntaxTokensFor(l)), si(o, a?.text || "nil", a?.tokens || []), i.append(n, r, o), t.dataset.rendered = "true";
    },
    { once: !0 }
  ), t;
}
function Oi(s, e) {
  const t = document.createElement("div");
  return t.className = "plan-row", t.innerHTML = `
    <span></span>
    <strong></strong>
  `, t.querySelector("span").textContent = s, t.querySelector("strong").textContent = e, t;
}
function Lc(s, e) {
  const t = Z(s.source.split(`
`).find(Boolean) || s.source);
  return `
    <article class="example-card">
      <div>
        <strong>${Z(s.label)}</strong>
        <span>${t}</span>
      </div>
      <div class="example-actions">
        <button type="button" class="example-button" data-example-index="${e}" data-example-action="load">Load</button>
        <button type="button" class="example-button example-button-secondary" data-example-index="${e}" data-example-action="append">Append</button>
      </div>
    </article>
  `;
}
function si(s, e, t) {
  s.textContent = "";
  for (const i of mh(e, t)) {
    if (!i.className) {
      s.append(document.createTextNode(i.text));
      continue;
    }
    const n = document.createElement("span");
    n.className = i.className, n.textContent = i.text, s.append(n);
  }
}
function Pc(s) {
  return `

${s}`;
}
function Bt(s, e, t) {
  return {
    x: s - t.left,
    y: e - t.top
  };
}
function Nc(s, e) {
  const t = Math.max(48, Math.abs(e.x - s.x) * 0.42);
  return `M ${s.x} ${s.y} C ${s.x + t} ${s.y}, ${e.x - t} ${e.y}, ${e.x} ${e.y}`;
}
function Lt(s, e, t, i, n) {
  return {
    detail: n,
    d: Nc(e, t),
    kind: s,
    mid: Wc(e, t),
    title: i
  };
}
function Ic(s) {
  return `
    <path class="connector connector-${s.kind}" data-connector="${s.kind}" d="${s.d}"></path>
    <path class="connector-hit connector-hit-${s.kind}" data-connector="${s.kind}" data-tip-title="${Z(s.title)}" data-tip-detail="${Z(s.detail)}" data-tip-x="${s.mid.x}" data-tip-y="${s.mid.y}" d="${s.d}"></path>
  `.trim();
}
function Hc(s) {
  return `
    <button class="connector-hotspot connector-hotspot-${s.kind}" type="button" aria-label="${Z(s.title)}" data-connector="${s.kind}" data-tip-title="${Z(s.title)}" data-tip-detail="${Z(s.detail)}" data-tip-x="${s.mid.x}" data-tip-y="${s.mid.y}" style="left: ${s.mid.x}px; top: ${s.mid.y}px"></button>
  `.trim();
}
function Pt(s, e) {
  return `<circle class="connector-point connector-point-${s}" cx="${e.x}" cy="${e.y}" r="3"></circle>`;
}
function Wc(s, e) {
  return {
    x: (s.x + e.x) / 2,
    y: (s.y + e.y) / 2
  };
}
function Z(s) {
  return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
customElements.define("rasa-browser-inspection-workbench", kc);
