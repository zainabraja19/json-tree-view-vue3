(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i["json-tree-view-vue3"]={},i.Vue))})(this,function(i,e){"use strict";const B=n=>({is:()=>B(n),default:()=>n}),_=n=>({is:(a,o)=>a(n)?B(o()):_(n),default:a=>a()}),C=n=>({is:(a,o)=>a(n)?B(o()):_(n)}),u=n=>()=>n,E={class:"json-view-item"},j={key:0},w=["aria-expanded"],J={class:"properties"},N={key:0},T=["role","tabindex"],A={class:"value-key"},D=["innerHTML"];var y=(n=>(n[n.OBJECT=0]="OBJECT",n[n.ARRAY=1]="ARRAY",n[n.VALUE=2]="VALUE",n))(y||{});const b=e.defineComponent({name:"JsonTreeViewItem",__name:"JsonTreeViewItem",props:{data:{},maxDepth:{default:1},canSelect:{type:Boolean,default:!1}},emits:["selected"],setup(n,{emit:a}){const o=n,m=a,c=e.reactive({open:o.data.depth<o.maxDepth}),h=()=>{c.open=!c.open},k=t=>m("selected",{key:t.key,value:t.value,path:t.path}),s=t=>m("selected",t),d=t=>{const r=Number(t.key);return isNaN(r)?`"${t.key}":`:`${t.key}":`},p=t=>(console.log(t),`"${t}"`),l=t=>C(typeof t).is(r=>r==="string",u("var(--jtv-string-color)")).is(r=>r==="number",u("var(--jtv-number-color)")).is(r=>r==="boolean",u("var(--jtv-boolean-color)")).is(r=>r==="object",u("var(--jtv-null-color)")).default(u("var(--jtv-valueKey-color)")),V=e.computed(()=>({"chevron-arrow":!0,opened:c.open})),$=e.computed(()=>({"value-key":!0,"can-select":o.canSelect})),f=e.computed(()=>{const t=o.data.length;return o.data.type===1?t===1?`${t} element`:`${t} elements`:t===1?`${t} property`:`${t} properties`}),g=e.computed(()=>p(o.data));return(t,r)=>{const L=e.resolveComponent("JsonTreeViewItem",!0);return e.openBlock(),e.createElementBlock("div",E,[t.data.type===0||t.data.type===1?(e.openBlock(),e.createElementBlock("div",j,[e.createElementVNode("button",{class:"data-key","aria-expanded":c.open?"true":"false",onClick:e.withModifiers(h,["stop"])},[e.createElementVNode("div",{class:e.normalizeClass(V.value)},null,2),e.createTextVNode(" "+e.toDisplayString(t.data.key)+": ",1),e.createElementVNode("span",J,e.toDisplayString(f.value),1)],8,w),c.open?(e.openBlock(),e.createElementBlock("div",N,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.data.children,S=>(e.openBlock(),e.createBlock(L,{key:d(S),data:S,maxDepth:t.maxDepth,canSelect:t.canSelect,onSelected:s},null,8,["data","maxDepth","canSelect"]))),128))])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),t.data.type===2?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass($.value),role:t.canSelect?"button":void 0,tabindex:t.canSelect?"0":void 0,onClick:r[0]||(r[0]=S=>k(t.data)),onKeyup:[r[1]||(r[1]=e.withKeys(S=>k(t.data),["enter"])),r[2]||(r[2]=e.withKeys(S=>k(t.data),["space"]))]},[e.createElementVNode("span",A,e.toDisplayString(t.data.key)+":",1),e.createElementVNode("span",{style:e.normalizeStyle({color:l(t.data.value)}),innerHTML:g.value},null,12,D)],42,T)):e.createCommentVNode("",!0)])}}}),O=((n,a)=>{const o=n.__vccOpts||n;for(const[m,c]of a)o[m]=c;return o})(e.defineComponent({name:"JsonTreeView",__name:"JsonTreeView",props:{json:{},rootKey:{default:"/"},maxDepth:{default:1},colorScheme:{default:"light"}},emits:["selected"],setup(n,{emit:a}){const o=n,m=a,c=s=>m("selected",s),h=(s,d,p,l,V)=>{if(d instanceof Object){if(d instanceof Array){const f=d.map((g,t)=>h(t.toString(),g,p+1,V?`${l}${s}[${t}].`:`${l}`,!1));return{key:s,type:y.ARRAY,depth:p,path:l,length:f.length,children:f}}const $=Object.entries(d).map(([f,g])=>h(f,g,p+1,V?`${l}${s}.`:`${l}`,!0));return{key:s,type:y.OBJECT,depth:p,path:l,length:$.length,children:$}}else return{key:s,type:y.VALUE,path:V?`${l}${s}`:l.slice(0,-1),depth:p,value:d}},k=e.computed(()=>{const s=JSON.parse(o.json);return s instanceof Object?h(o.rootKey,{...s},0,"",!0):{key:o.rootKey,type:y.VALUE,path:"",depth:0,value:o.json}});return(s,d)=>(e.openBlock(),e.createBlock(b,{class:e.normalizeClass([{"root-item":!0,dark:s.colorScheme==="dark"}]),data:k.value,maxDepth:s.maxDepth,onSelected:c},null,8,["class","data","maxDepth"]))}}),[["__scopeId","data-v-f85384eb"]]);i.JsonTreeView=O,i.JsonTreeViewItem=b,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=json-tree-view-vue3.umd.js.map
