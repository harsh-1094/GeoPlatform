import{P as f}from"./index-CMpZlGG4.js";import{h as p}from"./PooledRBush-DMCqn6bw.js";import{i as u}from"./MeshLocalVertexSpace-D_y133qT.js";import{M as l}from"./vertexSpaceConversion-BZpuzIGD.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-BuDQkvDN.js";import"./computeTranslationToOriginAndRotation-DZh6nAa0.js";import"./meshVertexSpaceUtils-C4YHLpB1.js";import"./vec3-CxxmtVH7.js";import"./projection-VSQzL1yA.js";import"./DoubleArray-DxJkORee.js";import"./BufferView-w6uWFPe6.js";import"./vec4-BwgHBVSR.js";class R{async createIndex(r,o){var i;const n=new Array;if(!((i=r.vertexAttributes)!=null&&i.position))return new p;const e=d(r),a=o!=null?await o.invoke("createIndexThread",e,{transferList:n}):this.createIndexThread(e).result;return m().fromJSON(a)}createIndexThread(r){const o=m();if(!r)return{result:o.toJSON()};const n=new Float64Array(r.position);return r.components?h(o,n,r.components.map(e=>new Uint32Array(e))):x(o,n)}}function x(t,r){const o=new Array(r.length/9);let n=0;for(let e=0;e<r.length;e+=9)o[n++]=c(r,e,e+3,e+6);return t.load(o),{result:t.toJSON()}}function h(t,r,o){let n=0;for(const i of o)n+=i.length/3;const e=new Array(n);let a=0;for(const i of o)for(let s=0;s<i.length;s+=3)e[a++]=c(r,3*i[s],3*i[s+1],3*i[s+2]);return t.load(e),{result:t.toJSON()}}function d(t){var i;const{vertexAttributes:{position:r},vertexSpace:o,spatialReference:n,transform:e}=t,a=(i=l({vertexAttributes:{position:r},vertexSpace:o,spatialReference:n,transform:e},new u,{allowBufferReuse:!0}))==null?void 0:i.position;return a?!t.components||t.components.some(s=>!s.faces)?{position:a.buffer}:{position:a.buffer,components:t.components.map(s=>s.faces)}:null}function m(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,r,o,n){return{minX:Math.min(t[r],t[o],t[n]),maxX:Math.max(t[r],t[o],t[n]),minY:Math.min(t[r+1],t[o+1],t[n+1]),maxY:Math.max(t[r+1],t[o+1],t[n+1]),p0:[t[r],t[r+1],t[r+2]],p1:[t[o],t[o+1],t[o+2]],p2:[t[n],t[n+1],t[n+2]]}}export{R as default};
