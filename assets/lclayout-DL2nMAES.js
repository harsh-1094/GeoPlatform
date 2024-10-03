import{al as Yt}from"./index-CMpZlGG4.js";var Ke,he,Qe,er={exports:{}},Ze;Ke=er,he=typeof document<"u"?(Ze=document.currentScript)==null?void 0:Ze.src:void 0,Qe=function(rr={}){var me,G,i=Object.assign({},rr),tr=new Promise((e,r)=>{me=e,G=r}),nr=!0,ve=Object.assign({},i),pe="./this.program",D="";function ar(e){return i.locateFile?i.locateFile(e,D):D+e}typeof document<"u"&&document.currentScript&&(D=document.currentScript.src),he&&(D=he),D=D.startsWith("blob:")?"":D.substr(0,D.replace(/[?#].*/,"").lastIndexOf("/")+1),i.print||console.log.bind(console);var V,J,U=i.printErr||console.error.bind(console);Object.assign(i,ve),ve=null,i.arguments&&i.arguments,i.thisProgram&&(pe=i.thisProgram),i.quit&&i.quit,i.wasmBinary&&(V=i.wasmBinary);var P,_,H,Y,g,v,ye,ge,we=!1;function _e(){var e=J.buffer;i.HEAP8=P=new Int8Array(e),i.HEAP16=H=new Int16Array(e),i.HEAPU8=_=new Uint8Array(e),i.HEAPU16=Y=new Uint16Array(e),i.HEAP32=g=new Int32Array(e),i.HEAPU32=v=new Uint32Array(e),i.HEAPF32=ye=new Float32Array(e),i.HEAPF64=ge=new Float64Array(e)}var be=[],Ae=[],Te=[];function or(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)sr(i.preRun.shift());ae(be)}function ir(){ae(Ae)}function ur(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)cr(i.postRun.shift());ae(Te)}function sr(e){be.unshift(e)}function lr(e){Ae.unshift(e)}function cr(e){Te.unshift(e)}var x=0,B=null;function fr(e){var r;x++,(r=i.monitorRunDependencies)==null||r.call(i,x)}function dr(e){var t;if(x--,(t=i.monitorRunDependencies)==null||t.call(i,x),x==0&&B){var r=B;B=null,r()}}function Ce(e){var t;(t=i.onAbort)==null||t.call(i,e),U(e="Aborted("+e+")"),we=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw G(r),r}var z,hr="data:application/octet-stream;base64,",Fe=e=>e.startsWith(hr);function Pe(e){if(e==z&&V)return new Uint8Array(V);throw"both async and sync fetching of the wasm failed"}function mr(e){return!V&&nr&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()}).catch(()=>Pe(e)):Promise.resolve().then(()=>Pe(e))}function We(e,r,t){return mr(e).then(n=>WebAssembly.instantiate(n,r)).then(t,n=>{U(`failed to asynchronously prepare wasm: ${n}`),Ce(n)})}function vr(e,r,t,n){return e||typeof WebAssembly.instantiateStreaming!="function"||Fe(r)||typeof fetch!="function"?We(r,t,n):fetch(r,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,t).then(n,function(o){return U(`wasm streaming compile failed: ${o}`),U("falling back to ArrayBuffer instantiation"),We(r,t,n)}))}function pr(){return{a:Vt}}function yr(){var e=pr();function r(n,a){return F=n.exports,J=F.M,_e(),Re=F.P,lr(F.N),dr(),F}function t(n){r(n.instance)}if(fr(),i.instantiateWasm)try{return i.instantiateWasm(e,r)}catch(n){U(`Module.instantiateWasm callback failed with error: ${n}`),G(n)}return vr(V,z,e,t).catch(G),{}}Fe(z="lclayout.wasm")||(z=ar(z));var ae=e=>{for(;e.length>0;)e.shift()(i)};i.noExitRuntime;class gr{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){v[this.ptr+4>>2]=r}get_type(){return v[this.ptr+4>>2]}set_destructor(r){v[this.ptr+8>>2]=r}get_destructor(){return v[this.ptr+8>>2]}set_caught(r){r=r?1:0,P[this.ptr+12]=r}get_caught(){return P[this.ptr+12]!=0}set_rethrown(r){r=r?1:0,P[this.ptr+13]=r}get_rethrown(){return P[this.ptr+13]!=0}init(r,t){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(t)}set_adjusted_ptr(r){v[this.ptr+16>>2]=r}get_adjusted_ptr(){return v[this.ptr+16>>2]}get_exception_ptr(){if(Le(this.get_type()))return v[this.excPtr>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.excPtr}}var wr=(e,r,t)=>{throw new gr(e).init(r,t),e},L={},oe=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function X(e){return this.fromWireType(v[e>>2])}var Ee,Se,$e,I={},k={},K={},Oe=e=>{throw new Ee(e)},ie=(e,r,t)=>{function n(u){var c=t(u);c.length!==e.length&&Oe("Mismatched type converter count");for(var f=0;f<e.length;++f)E(e[f],c[f])}e.forEach(function(u){K[u]=r});var a=new Array(r.length),o=[],l=0;r.forEach((u,c)=>{k.hasOwnProperty(u)?a[c]=k[u]:(o.push(u),I.hasOwnProperty(u)||(I[u]=[]),I[u].push(()=>{a[c]=k[u],++l===o.length&&n(a)}))}),o.length===0&&n(a)},_r=e=>{var r=L[e];delete L[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map(l=>l.getterReturnType).concat(a.map(l=>l.setterArgumentType));ie([e],o,l=>{var u={};return a.forEach((c,f)=>{var h=c.fieldName,p=l[f],m=c.getter,y=c.getterContext,S=l[f+a.length],R=c.setter,W=c.setterContext;u[h]={read:M=>p.fromWireType(m(y,M)),write:(M,s)=>{var d=[];R(W,M,S.toWireType(d,s)),oe(d)}}}),[{name:r.name,fromWireType:c=>{var f={};for(var h in u)f[h]=u[h].read(c);return n(c),f},toWireType:(c,f)=>{for(var h in u)if(!(h in f))throw new TypeError(`Missing field: "${h}"`);var p=t();for(h in u)u[h].write(p,f[h]);return c!==null&&c.push(n,p),p},argPackAdvance:$,readValueFromPointer:X,destructorFunction:n}]})},br=(e,r,t,n,a)=>{},Ar=()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);Se=e},w=e=>{for(var r="",t=e;_[t];)r+=Se[_[t++]];return r},C=e=>{throw new $e(e)};function Tr(e,r,t={}){var n=r.name;if(e||C(`type "${n}" must have a positive integer typeid pointer`),k.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;C(`Cannot register type '${n}' twice`)}if(k[e]=r,delete K[e],I.hasOwnProperty(e)){var a=I[e];delete I[e],a.forEach(o=>o())}}function E(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Tr(e,r,t)}var $=8,Cr=(e,r,t,n)=>{E(e,{name:r=w(r),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?t:n},argPackAdvance:$,readValueFromPointer:function(a){return this.fromWireType(_[a])},destructorFunction:null})},Fr=(e,r,t)=>{e=w(e),ie([],[r],n=>(n=n[0],i[e]=n.fromWireType(t),[]))},ue=[],j=[],se=e=>{e>9&&--j[e+1]==0&&(j[e]=void 0,ue.push(e))},Pr=()=>j.length/2-5-ue.length,Wr=()=>{j.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=Pr},b={toValue:e=>(e||C("Cannot use deleted val. handle = "+e),j[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const r=ue.pop()||j.length;return j[r]=e,j[r+1]=1,r}}}},Er={name:"emscripten::val",fromWireType:e=>{var r=b.toValue(e);return se(e),r},toWireType:(e,r)=>b.toHandle(r),argPackAdvance:$,readValueFromPointer:X,destructorFunction:null},Me=e=>E(e,Er),Sr=(e,r,t)=>{if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(...a){return e[r].overloadTable.hasOwnProperty(a.length)||C(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[a.length].apply(this,a)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},De=(e,r,t)=>{i.hasOwnProperty(e)?((t===void 0||i[e].overloadTable!==void 0&&i[e].overloadTable[t]!==void 0)&&C(`Cannot register public name '${e}' twice`),Sr(i,e,e),i.hasOwnProperty(t)&&C(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),i[e].overloadTable[t]=r):(i[e]=r,t!==void 0&&(i[e].numArguments=t))},$r=(e,r,t)=>{switch(r){case 1:return t?function(n){return this.fromWireType(P[n])}:function(n){return this.fromWireType(_[n])};case 2:return t?function(n){return this.fromWireType(H[n>>1])}:function(n){return this.fromWireType(Y[n>>1])};case 4:return t?function(n){return this.fromWireType(g[n>>2])}:function(n){return this.fromWireType(v[n>>2])};default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Or=(e,r,t,n)=>{function a(){}r=w(r),a.values={},E(e,{name:r,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,l)=>l.value,argPackAdvance:$,readValueFromPointer:$r(r,t,n),destructorFunction:null}),De(r,a)},Q=(e,r)=>Object.defineProperty(r,"name",{value:e}),je=e=>{var r=Je(e),t=w(r);return O(r),t},Z=(e,r)=>{var t=k[e];return t===void 0&&C(`${r} has unknown type ${je(e)}`),t},Mr=(e,r,t)=>{var n=Z(e,"enum");r=w(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Q(`${n.name}_${r}`,function(){})}});a.values[t]=o,a[r]=o},Dr=(e,r)=>{switch(r){case 4:return function(t){return this.fromWireType(ye[t>>2])};case 8:return function(t){return this.fromWireType(ge[t>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},jr=(e,r,t)=>{E(e,{name:r=w(r),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:$,readValueFromPointer:Dr(r,t),destructorFunction:null})};function Rr(e){for(var r=1;r<e.length;++r)if(e[r]!==null&&e[r].destructorFunction===void 0)return!0;return!1}function xr(e,r,t,n,a,o){var l=r.length;l<2&&C("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=r[1]!==null&&t!==null,c=Rr(r),f=r[0].name!=="void",h=l-2,p=new Array(h),m=[],y=[];return Q(e,function(...S){var R;S.length!==h&&C(`function ${e} called with ${S.length} arguments, expected ${h}`),y.length=0,m.length=u?2:1,m[0]=a,u&&(R=r[1].toWireType(y,this),m[1]=R);for(var W=0;W<h;++W)p[W]=r[W+2].toWireType(y,S[W]),m.push(p[W]);function M(s){if(c)oe(y);else for(var d=u?1:2;d<r.length;d++){var A=d===1?R:p[d-2];r[d].destructorFunction!==null&&r[d].destructorFunction(A)}if(f)return r[0].fromWireType(s)}return M(n(...m))})}var Re,xe,ke,kr=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(v[r+4*n>>2]);return t},Hr=(e,r,t)=>{i.hasOwnProperty(e)||Oe("Replacing nonexistent public symbol"),i[e].overloadTable!==void 0&&t!==void 0?i[e].overloadTable[t]=r:(i[e]=r,i[e].argCount=t)},Ir=(e,r,t)=>(e=e.replace(/p/g,"i"),(0,i["dynCall_"+e])(r,...t)),ee=[],He=e=>{var r=ee[e];return r||(e>=ee.length&&(ee.length=e+1),ee[e]=r=Re.get(e)),r},Vr=(e,r,t=[])=>e.includes("j")?Ir(e,r,t):He(r)(...t),Ur=(e,r)=>(...t)=>Vr(e,r,t),N=(e,r)=>{function t(){return e.includes("j")?Ur(e,r):He(r)}e=w(e);var n=t();return typeof n!="function"&&C(`unknown function pointer with signature ${e}: ${r}`),n},Yr=(e,r)=>{var t=Q(r,function(n){this.name=r,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},Br=(e,r)=>{var t=[],n={};function a(o){n[o]||k[o]||(K[o]?K[o].forEach(a):(t.push(o),n[o]=!0))}throw r.forEach(a),new xe(`${e}: `+t.map(je).join([", "]))},zr=e=>{const r=(e=e.trim()).indexOf("(");return r!==-1?e.substr(0,r):e},Nr=(e,r,t,n,a,o,l)=>{var u=kr(r,t);e=w(e),e=zr(e),a=N(n,a),De(e,function(){Br(`Cannot call ${e} due to unbound types`,u)},r-1),ie([],u,c=>{var f=[c[0],null].concat(c.slice(1));return Hr(e,xr(e,f,null,a,o),r-1),[]})},qr=(e,r,t)=>{switch(r){case 1:return t?n=>P[n]:n=>_[n];case 2:return t?n=>H[n>>1]:n=>Y[n>>1];case 4:return t?n=>g[n>>2]:n=>v[n>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Gr=(e,r,t,n,a)=>{r=w(r);var o=f=>f;if(n===0){var l=32-8*t;o=f=>f<<l>>>l}var u=r.includes("unsigned"),c=(f,h)=>{};E(e,{name:r,fromWireType:o,toWireType:u?function(f,h){return c(h,this.name),h>>>0}:function(f,h){return c(h,this.name),h},argPackAdvance:$,readValueFromPointer:qr(r,t,n!==0),destructorFunction:null})},Jr=(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(o){var l=v[o>>2],u=v[o+4>>2];return new n(P.buffer,u,l)}E(e,{name:t=w(t),fromWireType:a,argPackAdvance:$,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Lr=(e,r)=>{Me(e)},Ie=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,l=0;l<e.length;++l){var u=e.charCodeAt(l);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++l)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},Xr=(e,r,t)=>Ie(e,_,r,t),Ve=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},Ue=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Kr=(e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&Ue)return Ue.decode(e.subarray(r,a));for(var o="";r<a;){var l=e[r++];if(128&l){var u=63&e[r++];if((224&l)!=192){var c=63&e[r++];if((l=(240&l)==224?(15&l)<<12|u<<6|c:(7&l)<<18|u<<12|c<<6|63&e[r++])<65536)o+=String.fromCharCode(l);else{var f=l-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&l)<<6|u)}else o+=String.fromCharCode(l)}return o},le=(e,r)=>e?Kr(_,e,r):"",Qr=(e,r)=>{var t=(r=w(r))==="std::string";E(e,{name:r,fromWireType(n){var a,o=v[n>>2],l=n+4;if(t)for(var u=l,c=0;c<=o;++c){var f=l+c;if(c==o||_[f]==0){var h=le(u,f-u);a===void 0?a=h:(a+="\0",a+=h),u=f+1}}else{var p=new Array(o);for(c=0;c<o;++c)p[c]=String.fromCharCode(_[l+c]);a=p.join("")}return O(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var l=typeof a=="string";l||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||C("Cannot pass non-string to std::string"),o=t&&l?Ve(a):a.length;var u=de(4+o+1),c=u+4;if(v[u>>2]=o,t&&l)Xr(a,c,o+1);else if(l)for(var f=0;f<o;++f){var h=a.charCodeAt(f);h>255&&(O(c),C("String has UTF-16 code units that do not fit in 8 bits")),_[c+f]=h}else for(f=0;f<o;++f)_[c+f]=a[f];return n!==null&&n.push(O,u),u},argPackAdvance:$,readValueFromPointer:X,destructorFunction(n){O(n)}})},Ye=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Zr=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&Y[n];)++n;if((t=n<<1)-e>32&&Ye)return Ye.decode(_.subarray(e,t));for(var o="",l=0;!(l>=r/2);++l){var u=H[e+2*l>>1];if(u==0)break;o+=String.fromCharCode(u)}return o},et=(e,r,t)=>{if(t??(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var l=e.charCodeAt(o);H[r>>1]=l,r+=2}return H[r>>1]=0,r-n},rt=e=>2*e.length,tt=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=g[e+4*t>>2];if(a==0)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},nt=(e,r,t)=>{if(t??(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var l=e.charCodeAt(o);if(l>=55296&&l<=57343&&(l=65536+((1023&l)<<10)|1023&e.charCodeAt(++o)),g[r>>2]=l,(r+=4)+4>a)break}return g[r>>2]=0,r-n},at=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},ot=(e,r,t)=>{var n,a,o,l;t=w(t),r===2?(n=Zr,a=et,l=rt,o=u=>Y[u>>1]):r===4&&(n=tt,a=nt,l=at,o=u=>v[u>>2]),E(e,{name:t,fromWireType:u=>{for(var c,f=v[u>>2],h=u+4,p=0;p<=f;++p){var m=u+4+p*r;if(p==f||o(m)==0){var y=n(h,m-h);c===void 0?c=y:(c+="\0",c+=y),h=m+r}}return O(u),c},toWireType:(u,c)=>{typeof c!="string"&&C(`Cannot pass non-string to C++ string type ${t}`);var f=l(c),h=de(4+f+r);return v[h>>2]=f/r,a(c,h+4,f+r),u!==null&&u.push(O,h),h},argPackAdvance:$,readValueFromPointer:X,destructorFunction(u){O(u)}})},it=(e,r,t,n,a,o)=>{L[e]={name:w(r),rawConstructor:N(t,n),rawDestructor:N(a,o),fields:[]}},ut=(e,r,t,n,a,o,l,u,c,f)=>{L[e].fields.push({fieldName:w(r),getterReturnType:t,getter:N(n,a),getterContext:o,setterArgumentType:l,setter:N(u,c),setterContext:f})},st=(e,r)=>{E(e,{isVoid:!0,name:r=w(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},lt=1,ct=()=>lt,ft=(e,r,t)=>_.copyWithin(e,r,r+t),Be=(e,r,t)=>{var n=[],a=e.toWireType(n,t);return n.length&&(v[r>>2]=b.toHandle(n)),a},dt=(e,r,t)=>(e=b.toValue(e),r=Z(r,"emval::as"),Be(r,t,e)),ht={},ze=e=>{var r=ht[e];return r===void 0?w(e):r},ce=[],mt=(e,r,t,n,a)=>(e=ce[e])(r=b.toValue(r),r[t=ze(t)],n,a),vt=e=>{var r=ce.length;return ce.push(e),r},pt=(e,r)=>{for(var t=new Array(e),n=0;n<e;++n)t[n]=Z(v[r+4*n>>2],"parameter "+n);return t},yt=Reflect.construct,gt=(e,r,t)=>{var n=pt(e,r),a=n.shift();e--;var o=new Array(e),l=(c,f,h,p)=>{for(var m=0,y=0;y<e;++y)o[y]=n[y].readValueFromPointer(p+m),m+=n[y].argPackAdvance;var S=t===1?yt(f,o):f.apply(c,o);return Be(a,h,S)},u=`methodCaller<(${n.map(c=>c.name).join(", ")}) => ${a.name}>`;return vt(Q(u,l))},wt=(e,r)=>(e=b.toValue(e),r=b.toValue(r),b.toHandle(e[r])),_t=()=>b.toHandle([]),bt=e=>{e=b.toValue(e);for(var r=new Array(e.length),t=0;t<e.length;t++)r[t]=e[t];return b.toHandle(r)},At=e=>b.toHandle(ze(e)),Tt=e=>{var r=b.toValue(e);oe(r),se(e)},Ct=(e,r)=>{var t=(e=Z(e,"_emval_take_value")).readValueFromPointer(r);return b.toHandle(t)},Ft=()=>{Ce("")},Pt=()=>Date.now(),Ne=()=>2147483648,Wt=()=>Ne();ke=()=>performance.now();var Et=e=>{var r=(e-J.buffer.byteLength+65535)/65536;try{return J.grow(r),_e(),1}catch{}},St=e=>{var r=_.length;e>>>=0;var t=Ne();if(e>t)return!1;for(var n=(u,c)=>u+(c-u%c)%c,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var l=Math.min(t,n(Math.max(e,o),65536));if(Et(l))return!0}return!1},fe={},$t=()=>pe||"./this.program",q=()=>{if(!q.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:$t()};for(var r in fe)fe[r]===void 0?delete e[r]:e[r]=fe[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);q.strings=t}return q.strings},Ot=(e,r)=>{for(var t=0;t<e.length;++t)P[r++]=e.charCodeAt(t);P[r]=0},Mt=(e,r)=>{var t=0;return q().forEach((n,a)=>{var o=r+t;v[e+4*a>>2]=o,Ot(n,o),t+=n.length+1}),0},Dt=(e,r)=>{var t=q();v[e>>2]=t.length;var n=0;return t.forEach(a=>n+=a.length+1),v[r>>2]=n,0},re=e=>e%4==0&&(e%100!=0||e%400==0),jt=(e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t},qe=[31,29,31,30,31,30,31,31,30,31,30,31],Ge=[31,28,31,30,31,30,31,31,30,31,30,31],Rt=(e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=re(t.getFullYear()),a=t.getMonth(),o=(n?qe:Ge)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t};function xt(e,r,t){var n=Ve(e)+1,a=new Array(n);return Ie(e,a,0,a.length),a}var kt=(e,r)=>{P.set(e,r)},Ht=(e,r,t,n)=>{var a=v[n+40>>2],o={tm_sec:g[n>>2],tm_min:g[n+4>>2],tm_hour:g[n+8>>2],tm_mday:g[n+12>>2],tm_mon:g[n+16>>2],tm_year:g[n+20>>2],tm_wday:g[n+24>>2],tm_yday:g[n+28>>2],tm_isdst:g[n+32>>2],tm_gmtoff:g[n+36>>2],tm_zone:a?le(a):""},l=le(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)l=l.replace(new RegExp(c,"g"),u[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=["January","February","March","April","May","June","July","August","September","October","November","December"];function p(s,d,A){for(var T=typeof s=="number"?s.toString():s||"";T.length<d;)T=A[0]+T;return T}function m(s,d){return p(s,d,"0")}function y(s,d){function A(ne){return ne<0?-1:ne>0?1:0}var T;return(T=A(s.getFullYear()-d.getFullYear()))===0&&(T=A(s.getMonth()-d.getMonth()))===0&&(T=A(s.getDate()-d.getDate())),T}function S(s){switch(s.getDay()){case 0:return new Date(s.getFullYear()-1,11,29);case 1:return s;case 2:return new Date(s.getFullYear(),0,3);case 3:return new Date(s.getFullYear(),0,2);case 4:return new Date(s.getFullYear(),0,1);case 5:return new Date(s.getFullYear()-1,11,31);case 6:return new Date(s.getFullYear()-1,11,30)}}function R(s){var d=Rt(new Date(s.tm_year+1900,0,1),s.tm_yday),A=new Date(d.getFullYear(),0,4),T=new Date(d.getFullYear()+1,0,4),ne=S(A),Ut=S(T);return y(ne,d)<=0?y(Ut,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var W={"%a":s=>f[s.tm_wday].substring(0,3),"%A":s=>f[s.tm_wday],"%b":s=>h[s.tm_mon].substring(0,3),"%B":s=>h[s.tm_mon],"%C":s=>m((s.tm_year+1900)/100|0,2),"%d":s=>m(s.tm_mday,2),"%e":s=>p(s.tm_mday,2," "),"%g":s=>R(s).toString().substring(2),"%G":R,"%H":s=>m(s.tm_hour,2),"%I":s=>{var d=s.tm_hour;return d==0?d=12:d>12&&(d-=12),m(d,2)},"%j":s=>m(s.tm_mday+jt(re(s.tm_year+1900)?qe:Ge,s.tm_mon-1),3),"%m":s=>m(s.tm_mon+1,2),"%M":s=>m(s.tm_min,2),"%n":()=>`
`,"%p":s=>s.tm_hour>=0&&s.tm_hour<12?"AM":"PM","%S":s=>m(s.tm_sec,2),"%t":()=>"	","%u":s=>s.tm_wday||7,"%U":s=>{var d=s.tm_yday+7-s.tm_wday;return m(Math.floor(d/7),2)},"%V":s=>{var d=Math.floor((s.tm_yday+7-(s.tm_wday+6)%7)/7);if((s.tm_wday+371-s.tm_yday-2)%7<=2&&d++,d){if(d==53){var A=(s.tm_wday+371-s.tm_yday)%7;A==4||A==3&&re(s.tm_year)||(d=1)}}else{d=52;var T=(s.tm_wday+7-s.tm_yday-1)%7;(T==4||T==5&&re(s.tm_year%400-1))&&d++}return m(d,2)},"%w":s=>s.tm_wday,"%W":s=>{var d=s.tm_yday+7-(s.tm_wday+6)%7;return m(Math.floor(d/7),2)},"%y":s=>(s.tm_year+1900).toString().substring(2),"%Y":s=>s.tm_year+1900,"%z":s=>{var d=s.tm_gmtoff,A=d>=0;return d=(d=Math.abs(d)/60)/60*100+d%60,(A?"+":"-")+("0000"+d).slice(-4)},"%Z":s=>s.tm_zone,"%%":()=>"%"};for(var c in l=l.replace(/%%/g,"\0\0"),W)l.includes(c)&&(l=l.replace(new RegExp(c,"g"),W[c](o)));var M=xt(l=l.replace(/\0\0/g,"%"));return M.length>r?0:(kt(M,e),M.length-1)},It=(e,r,t,n,a)=>Ht(e,r,t,n);Ee=i.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Ar(),$e=i.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Wr(),xe=i.UnboundTypeError=Yr(Error,"UnboundTypeError");var te,Vt={a:wr,k:_r,w:br,E:Cr,u:Fr,v:Me,K:Or,q:Mr,t:jr,d:Nr,j:Gr,f:Jr,L:Lr,s:Qr,r:ot,l:it,e:ut,J:st,C:ct,H:ft,g:dt,n:mt,b:se,o:gt,h:wt,p:_t,I:bt,m:At,c:Tt,i:Ct,B:Ft,D:Pt,x:Wt,G:ke,F:St,z:Mt,A:Dt,y:It},F=yr(),Je=e=>(Je=F.O)(e),de=i._malloc=e=>(de=i._malloc=F.Q)(e),O=i._free=e=>(O=i._free=F.R)(e),Le=e=>(Le=F.S)(e);function Xe(){function e(){te||(te=!0,i.calledRun=!0,we||(ir(),me(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),ur()))}x>0||(or(),x>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),e()},1)):e()))}if(i.dynCall_viijii=(e,r,t,n,a,o,l)=>(i.dynCall_viijii=F.T)(e,r,t,n,a,o,l),i.dynCall_iiiiij=(e,r,t,n,a,o,l)=>(i.dynCall_iiiiij=F.U)(e,r,t,n,a,o,l),i.dynCall_iiiiijj=(e,r,t,n,a,o,l,u,c)=>(i.dynCall_iiiiijj=F.V)(e,r,t,n,a,o,l,u,c),i.dynCall_iiiiiijj=(e,r,t,n,a,o,l,u,c,f)=>(i.dynCall_iiiiiijj=F.W)(e,r,t,n,a,o,l,u,c,f),B=function e(){te||Xe(),te||(B=e)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Xe(),tr},Ke.exports=Qe;const Bt=Yt(er.exports),Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"}));export{Nt as l};
