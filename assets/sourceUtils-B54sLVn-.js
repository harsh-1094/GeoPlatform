const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-XVSBCdvj.js","./geometryEngineBase-BFdP1FEr.js","./index-CMpZlGG4.js","./index-D5mPmoJv.css","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{dU as f,dV as h,dT as m,dW as p,bd as g,dX as y,dY as a,_ as w}from"./index-CMpZlGG4.js";import{n as _}from"./date-M6n_RqpC.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function v(n){return new q(n)}const u=new Set;function A(n,r,e,d=!1){u.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(u.add(t.name),t&&(d||t.editable)){const l=f(t,o);if(l)return c(h(l,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return m(n)&&typeof r=="string"?e=parseFloat(r):p(n)&&r!=null&&typeof r!="string"?e=String(r):g(n)&&typeof r=="string"&&(e=_(r)),y(e)}let s;function F(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-XVSBCdvj.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),s}async function G(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{v as d,c as f,G as j,A as p,F as y};
