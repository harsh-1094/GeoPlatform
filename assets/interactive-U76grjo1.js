import{D as v,h as E}from"./index-CMpZlGG4.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.1
 */const r=/firefox/i.test(v()),n=r?new WeakMap:null;function g(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){const t=e.target;if(r&&!n.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const d=["mousedown","mouseup","click"];function u(e){const t=e.target;r&&!n.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const a={capture:!0};function D(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),f(e);return}b(e),e.el.removeAttribute("aria-disabled")}function f(e){if(e.el.click=g,r){const t=h(e),i=n.get(e.el);i!==t&&(l(i),n.set(e.el,t)),c(n.get(e.el));return}c(e.el)}function c(e){e&&(e.addEventListener("pointerdown",o,a),d.forEach(t=>e.addEventListener(t,u,a)))}function h(e){return e.el.parentElement||e.el}function I(e){return"disabled"in e}function b(e){if(delete e.el.click,r){const t=n.get(e.el);let i=!1;if(t!=null&&t.children){for(const s of t.children)if(I(s)&&s.disabled&&s!==e.el){i=!0;break}}i||l(t),n.delete(e.el);return}l(e.el)}function l(e){e&&(e.removeEventListener("pointerdown",o,a),d.forEach(t=>e.removeEventListener(t,u,a)))}function P(e){!e.disabled||!r||f(e)}function w(e){r&&b(e)}const k={container:"interaction-container"},M=({disabled:e},t)=>E("div",{class:k.container,inert:e},...t);export{M as I,P as c,w as d,D as u};
