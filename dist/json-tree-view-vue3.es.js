import { defineComponent as C, reactive as D, computed as $, resolveComponent as N, openBlock as u, createElementBlock as y, createElementVNode as g, withModifiers as B, normalizeClass as j, createTextVNode as T, toDisplayString as b, Fragment as R, renderList as K, createBlock as A, createCommentVNode as _, withKeys as J, normalizeStyle as L } from "vue";
const w = (t) => ({
  is: () => w(t),
  default: () => t
}), O = (t) => ({
  is: (a, o) => a(t) ? w(o()) : O(t),
  default: (a) => a()
}), U = (t) => ({
  is: (a, o) => a(t) ? w(o()) : O(t)
}), k = (t) => () => t, Y = { class: "json-view-item" }, z = { key: 0 }, x = ["aria-expanded"], F = { class: "properties" }, I = { key: 0 }, M = ["role", "tabindex"], q = { class: "value-key" }, G = ["v-html"];
var V = /* @__PURE__ */ ((t) => (t[t.OBJECT = 0] = "OBJECT", t[t.ARRAY = 1] = "ARRAY", t[t.VALUE = 2] = "VALUE", t))(V || {});
const H = /* @__PURE__ */ C({
  name: "JsonTreeViewItem",
  __name: "JsonTreeViewItem",
  props: {
    data: {},
    maxDepth: { default: 1 },
    canSelect: { type: Boolean, default: !1 }
  },
  emits: ["selected"],
  setup(t, { emit: a }) {
    const o = t, p = a, l = D({
      open: o.data.depth < o.maxDepth
    }), m = () => {
      l.open = !l.open;
    }, v = (e) => p("selected", {
      key: e.key,
      value: e.value,
      path: e.path
    }), s = (e) => p("selected", e), c = (e) => {
      const n = Number(e.key);
      return isNaN(n) ? `"${e.key}":` : `${e.key}":`;
    }, i = (e) => U(typeof e).is((n) => n === "string", k("var(--jtv-string-color)")).is((n) => n === "number", k("var(--jtv-number-color)")).is((n) => n === "boolean", k("var(--jtv-boolean-color)")).is((n) => n === "object", k("var(--jtv-null-color)")).default(k("var(--jtv-valueKey-color)")), r = $(() => ({
      "chevron-arrow": !0,
      opened: l.open
    })), h = $(() => ({
      "value-key": !0,
      "can-select": o.canSelect
    })), S = $(() => {
      const e = o.data.length;
      return o.data.type === 1 ? e === 1 ? `${e} element` : `${e} elements` : e === 1 ? `${e} property` : `${e} properties`;
    }), d = $(() => JSON.stringify(o.data.value));
    return (e, n) => {
      const E = N("JsonTreeViewItem", !0);
      return u(), y("div", Y, [
        e.data.type === 0 || e.data.type === 1 ? (u(), y("div", z, [
          g("button", {
            class: "data-key",
            "aria-expanded": l.open ? "true" : "false",
            onClick: B(m, ["stop"])
          }, [
            g("div", {
              class: j(r.value)
            }, null, 2),
            T(" " + b(e.data.key) + ": ", 1),
            g("span", F, b(S.value), 1)
          ], 8, x),
          l.open ? (u(), y("div", I, [
            (u(!0), y(R, null, K(e.data.children, (f) => (u(), A(E, {
              key: c(f),
              data: f,
              maxDepth: e.maxDepth,
              canSelect: e.canSelect,
              onSelected: s
            }, null, 8, ["data", "maxDepth", "canSelect"]))), 128))
          ])) : _("", !0)
        ])) : _("", !0),
        e.data.type === 2 ? (u(), y("div", {
          key: 1,
          class: j(h.value),
          role: e.canSelect ? "button" : void 0,
          tabindex: e.canSelect ? "0" : void 0,
          onClick: n[0] || (n[0] = (f) => v(e.data)),
          onKeyup: [
            n[1] || (n[1] = J((f) => v(e.data), ["enter"])),
            n[2] || (n[2] = J((f) => v(e.data), ["space"]))
          ]
        }, [
          g("span", q, b(e.data.key) + ":", 1),
          g("span", {
            style: L({ color: i(e.data.value) }),
            "v-html": d.value
          }, b(d.value), 13, G)
        ], 42, M)) : _("", !0)
      ]);
    };
  }
}), P = /* @__PURE__ */ C({
  name: "JsonTreeView",
  __name: "JsonTreeView",
  props: {
    json: {},
    rootKey: { default: "/" },
    maxDepth: { default: 1 },
    colorScheme: { default: "light" }
  },
  emits: ["selected"],
  setup(t, { emit: a }) {
    const o = t, p = a, l = (s) => p("selected", s), m = (s, c, i, r, h) => {
      if (c instanceof Object) {
        if (c instanceof Array) {
          const d = c.map(
            (e, n) => m(
              n.toString(),
              e,
              i + 1,
              h ? `${r}${s}[${n}].` : `${r}`,
              !1
            )
          );
          return {
            key: s,
            type: V.ARRAY,
            depth: i,
            path: r,
            length: d.length,
            children: d
          };
        }
        const S = Object.entries(c).map(
          ([d, e]) => m(d, e, i + 1, h ? `${r}${s}.` : `${r}`, !0)
        );
        return {
          key: s,
          type: V.OBJECT,
          depth: i,
          path: r,
          length: S.length,
          children: S
        };
      } else
        return {
          key: s,
          type: V.VALUE,
          path: h ? `${r}${s}` : r.slice(0, -1),
          depth: i,
          value: c
        };
    }, v = $(() => {
      const s = JSON.parse(o.json);
      return s instanceof Object ? m(o.rootKey, { ...s }, 0, "", !0) : {
        key: o.rootKey,
        type: V.VALUE,
        path: "",
        depth: 0,
        value: o.json
      };
    });
    return (s, c) => (u(), A(H, {
      class: j([{ "root-item": !0, dark: s.colorScheme === "dark" }]),
      data: v.value,
      maxDepth: s.maxDepth,
      onSelected: l
    }, null, 8, ["class", "data", "maxDepth"]));
  }
}), Q = (t, a) => {
  const o = t.__vccOpts || t;
  for (const [p, l] of a)
    o[p] = l;
  return o;
}, X = /* @__PURE__ */ Q(P, [["__scopeId", "data-v-f85384eb"]]);
export {
  X as JsonTreeView,
  H as JsonTreeViewItem
};
//# sourceMappingURL=json-tree-view-vue3.es.js.map
