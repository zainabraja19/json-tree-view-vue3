import { defineComponent as A, reactive as D, computed as V, resolveComponent as B, openBlock as d, createElementBlock as g, createElementVNode as k, withModifiers as L, normalizeClass as w, createTextVNode as N, toDisplayString as _, Fragment as R, renderList as K, createBlock as E, createCommentVNode as j, withKeys as J, normalizeStyle as U } from "vue";
const C = (t) => ({
  is: () => C(t),
  default: () => t
}), O = (t) => ({
  is: (a, n) => a(t) ? C(n()) : O(t),
  default: (a) => a()
}), M = (t) => ({
  is: (a, n) => a(t) ? C(n()) : O(t)
}), $ = (t) => () => t, Y = { class: "json-view-item" }, z = { key: 0 }, F = ["aria-expanded"], H = { class: "properties" }, x = { key: 0 }, I = ["role", "tabindex"], q = { class: "value-key" }, G = ["innerHTML"];
var S = /* @__PURE__ */ ((t) => (t[t.OBJECT = 0] = "OBJECT", t[t.ARRAY = 1] = "ARRAY", t[t.VALUE = 2] = "VALUE", t))(S || {});
const P = /* @__PURE__ */ A({
  name: "JsonTreeViewItem",
  __name: "JsonTreeViewItem",
  props: {
    data: {},
    maxDepth: { default: 1 },
    canSelect: { type: Boolean, default: !1 }
  },
  emits: ["selected"],
  setup(t, { emit: a }) {
    const n = t, u = a, l = D({
      open: n.data.depth < n.maxDepth
    }), m = () => {
      l.open = !l.open;
    }, v = (e) => u("selected", {
      key: e.key,
      value: e.value,
      path: e.path
    }), o = (e) => u("selected", e), c = (e) => {
      const s = Number(e.key);
      return isNaN(s) ? `"${e.key}":` : `${e.key}":`;
    }, i = (e) => (console.log(e.value), `"${e.value}"`), r = (e) => M(typeof e).is((s) => s === "string", $("var(--jtv-string-color)")).is((s) => s === "number", $("var(--jtv-number-color)")).is((s) => s === "boolean", $("var(--jtv-boolean-color)")).is((s) => s === "object", $("var(--jtv-null-color)")).default($("var(--jtv-valueKey-color)")), h = V(() => ({
      "chevron-arrow": !0,
      opened: l.open
    })), b = V(() => ({
      "value-key": !0,
      "can-select": n.canSelect
    })), p = V(() => {
      const e = n.data.length;
      return n.data.type === 1 ? e === 1 ? `${e} element` : `${e} elements` : e === 1 ? `${e} property` : `${e} properties`;
    }), f = V(() => i(n.data));
    return (e, s) => {
      const T = B("JsonTreeViewItem", !0);
      return d(), g("div", Y, [
        e.data.type === 0 || e.data.type === 1 ? (d(), g("div", z, [
          k("button", {
            class: "data-key",
            "aria-expanded": l.open ? "true" : "false",
            onClick: L(m, ["stop"])
          }, [
            k("div", {
              class: w(h.value)
            }, null, 2),
            N(" " + _(e.data.key) + ": ", 1),
            k("span", H, _(p.value), 1)
          ], 8, F),
          l.open ? (d(), g("div", x, [
            (d(!0), g(R, null, K(e.data.children, (y) => (d(), E(T, {
              key: c(y),
              data: y,
              maxDepth: e.maxDepth,
              canSelect: e.canSelect,
              onSelected: o
            }, null, 8, ["data", "maxDepth", "canSelect"]))), 128))
          ])) : j("", !0)
        ])) : j("", !0),
        e.data.type === 2 ? (d(), g("div", {
          key: 1,
          class: w(b.value),
          role: e.canSelect ? "button" : void 0,
          tabindex: e.canSelect ? "0" : void 0,
          onClick: s[0] || (s[0] = (y) => v(e.data)),
          onKeyup: [
            s[1] || (s[1] = J((y) => v(e.data), ["enter"])),
            s[2] || (s[2] = J((y) => v(e.data), ["space"]))
          ]
        }, [
          k("span", q, _(e.data.key) + ":", 1),
          k("span", {
            style: U({ color: r(e.data.value) }),
            innerHTML: f.value
          }, null, 12, G)
        ], 42, I)) : j("", !0)
      ]);
    };
  }
}), Q = /* @__PURE__ */ A({
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
    const n = t, u = a, l = (o) => u("selected", o), m = (o, c, i, r, h) => {
      if (c instanceof Object) {
        if (c instanceof Array) {
          const p = c.map(
            (f, e) => m(
              e.toString(),
              f,
              i + 1,
              h ? `${r}${o}[${e}].` : `${r}`,
              !1
            )
          );
          return {
            key: o,
            type: S.ARRAY,
            depth: i,
            path: r,
            length: p.length,
            children: p
          };
        }
        const b = Object.entries(c).map(
          ([p, f]) => m(p, f, i + 1, h ? `${r}${o}.` : `${r}`, !0)
        );
        return {
          key: o,
          type: S.OBJECT,
          depth: i,
          path: r,
          length: b.length,
          children: b
        };
      } else
        return {
          key: o,
          type: S.VALUE,
          path: h ? `${r}${o}` : r.slice(0, -1),
          depth: i,
          value: c
        };
    }, v = V(() => {
      const o = JSON.parse(n.json);
      return o instanceof Object ? m(n.rootKey, { ...o }, 0, "", !0) : {
        key: n.rootKey,
        type: S.VALUE,
        path: "",
        depth: 0,
        value: n.json
      };
    });
    return (o, c) => (d(), E(P, {
      class: w([{ "root-item": !0, dark: o.colorScheme === "dark" }]),
      data: v.value,
      maxDepth: o.maxDepth,
      onSelected: l
    }, null, 8, ["class", "data", "maxDepth"]));
  }
}), W = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [u, l] of a)
    n[u] = l;
  return n;
}, Z = /* @__PURE__ */ W(Q, [["__scopeId", "data-v-f85384eb"]]);
export {
  Z as JsonTreeView,
  P as JsonTreeViewItem
};
//# sourceMappingURL=json-tree-view-vue3.es.js.map
