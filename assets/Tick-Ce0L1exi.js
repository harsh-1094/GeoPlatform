import{eL as j}from"./index-CMpZlGG4.js";import{s as C,a as K,aB as Z,w,N as J,aC as X,r as k,aD as Q,E as O,a5 as H,af as W,aE as ee,an as z,aF as te,a2 as G}from"./Theme-F5oa1o6i.js";class ie extends X{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,i){this.processor&&this.processor.processRow(i),super._onSetIndex(e,t,i)}}class R extends Z{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class S extends C{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new ie}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,e.type==="clear")w(t,i=>{i.dispose()}),t.length=0,this._onDataClear();else if(e.type==="push"){const i=new R(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if(e.type==="setIndex"){const i=t[e.index],s=this._makeDataItem(e.newValue);i.bullets&&i.bullets.length==0&&(i.bullets=void 0),J(s).forEach(l=>{i.animate({key:l,to:s[l],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),i.dataContext=e.newValue}else if(e.type==="insertIndex"){const i=new R(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if(e.type==="removeIndex")t[e.index].dispose(),t.splice(e.index,1);else{if(e.type!=="moveIndex")throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},w(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},w(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&w(this._valueFields,i=>{const s=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[s],t[this._valueFieldsF[i].workingKey]=t[i]}),this._fields&&w(this._fields,i=>{const s=this.get(this._fieldsF[i]);t[i]=e[s]}),t}makeDataItem(e){let t=new R(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(e,t){return j(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return j(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}function se(r){return new Promise((e,t)=>{setTimeout(e,r)})}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:C.classNames.concat([S.className])});let ae={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function P(r,e){return e==null&&(e=1),ae[r]*e}function U(r,e,t,i,s,l,o){if(!o||s){let h=0;switch(s||e=="millisecond"||(h=r.getTimezoneOffset(),r.setUTCMinutes(r.getUTCMinutes()-h)),e){case"day":let d=r.getUTCDate();if(t>1){if(l){l=U(l,"day",1);let D=r.getTime()-l.getTime(),b=Math.floor(D/P("day")/t),x=P("day",b*t);r.setTime(l.getTime()+x-h*P("minute"))}}else r.setUTCDate(d);r.setUTCHours(0,0,0,0);break;case"second":let n=r.getUTCSeconds();t>1&&(n=Math.floor(n/t)*t),r.setUTCSeconds(n,0);break;case"millisecond":if(t==1)return r;let m=r.getUTCMilliseconds();m=Math.floor(m/t)*t,r.setUTCMilliseconds(m);break;case"hour":let f=r.getUTCHours();t>1&&(f=Math.floor(f/t)*t),r.setUTCHours(f,0,0,0);break;case"minute":let u=r.getUTCMinutes();t>1&&(u=Math.floor(u/t)*t),r.setUTCMinutes(u,0,0);break;case"month":let a=r.getUTCMonth();t>1&&(a=Math.floor(a/t)*t),r.setUTCMonth(a,1),r.setUTCHours(0,0,0,0);break;case"year":let g=r.getUTCFullYear();t>1&&(g=Math.floor(g/t)*t),r.setUTCFullYear(g,0,1),r.setUTCHours(0,0,0,0);break;case"week":if(t>1&&l){l=U(l,"week",1);let D=r.getTime()-l.getTime(),b=Math.floor(D/P("week")/t),x=P("week",b*t);r.setTime(l.getTime()+x-h*P("minute"))}let y=r.getUTCDate(),_=r.getUTCDay();O(i)||(i=1),y=_>=i?y-_+i:y-(7+_)+i,r.setUTCDate(y),r.setUTCHours(0,0,0,0)}if(!s&&e!="millisecond"&&(r.setUTCMinutes(r.getUTCMinutes()+h),e=="day"||e=="week"||e=="month"||e=="year")){let d=r.getTimezoneOffset();if(d!=h){let n=d-h;r.setUTCMinutes(r.getUTCMinutes()+n)}}return r}{if(isNaN(r.getTime()))return r;let h=o.offsetUTC(r),d=r.getTimezoneOffset(),n=o.parseDate(r),m=n.year,f=n.month,u=n.day,a=n.hour,g=n.minute,y=n.second,_=n.millisecond,D=n.weekday,b=h-d;switch(e){case"day":if(t>1&&l){l=U(l,"day",1,i,s,void 0,o);let T=r.getTime()-l.getTime(),N=Math.floor(T/P("day")/t),I=P("day",N*t);r.setTime(l.getTime()+I),n=o.parseDate(r),m=n.year,f=n.month,u=n.day}a=0,g=b,y=0,_=0;break;case"second":g+=b,t>1&&(y=Math.floor(y/t)*t),_=0;break;case"millisecond":g+=b,t>1&&(_=Math.floor(_/t)*t);break;case"hour":t>1&&(a=Math.floor(a/t)*t),g=b,y=0,_=0;break;case"minute":t>1&&(g=Math.floor(g/t)*t),g+=b,y=0,_=0;break;case"month":t>1&&(f=Math.floor(f/t)*t),u=1,a=0,g=b,y=0,_=0;break;case"year":t>1&&(m=Math.floor(m/t)*t),f=0,u=1,a=0,g=b,y=0,_=0;break;case"week":O(i)||(i=1),u=D>=i?u-D+i:u-(7+D)+i,a=0,g=b,y=0,_=0}let x=(r=new Date(m,f,u,a,g,y,_)).getTimezoneOffset(),c=o.offsetUTC(r)-x;return c!=b&&r.setTime(r.getTime()+6e4*(c-b)),r}}class $ extends S{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new X}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{width:k,height:k,position:"absolute"})})}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll(e=>{if(e.type==="clear")this._handleBullets(this.dataItems);else if(e.type==="push")this._handleBullets(this.dataItems);else if(e.type==="setIndex")this._handleBullets(this.dataItems);else if(e.type==="insertIndex")this._handleBullets(this.dataItems);else if(e.type==="removeIndex")this._handleBullets(this.dataItems);else{if(e.type!=="moveIndex")throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}}))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){w(e,t=>{const i=t.bullets;i&&(w(i,s=>{s.dispose()}),t.bullets=void 0)}),this.markDirtyValues()}getDataItemById(e){return Q(this.dataItems,t=>t.get("id")==e)}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each(t=>{this._makeBullet(e,t)}))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,i){const s=t(this._root,this,e);return s&&(s._index=i,this._makeBulletReal(e,s)),s}_makeBulletReal(e,t){let i=t.get("sprite");i&&(i._setDataItem(e),i.setRaw("position","absolute"),this.bulletsContainer.children.push(i)),t.series=this,e.bullets.push(t)}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t)}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const i=this.getPrivate("baseValueSeries");i&&this._disposers.push(i.onPrivate("startIndex",()=>{this.markDirtyValues()}))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,e!=0&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(e===0&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let i=this.get("tooltip");i&&(i.hide(0),i.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let i;const s=this.get("legendDataItem");if(s&&(i=s.get("markerRectangle"),i&&this.isVisible())){if(this.isDirty("stroke")){let l=this.get("stroke");i.set("stroke",l)}if(this.isDirty("fill")){let l=this.get("fill");i.set("fill",l)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let i=this.startIndex(),s=this.endIndex();s<this.dataItems.length&&s++;for(let l=i;l<s;l++){let o=this.dataItems[l];o.bullets||this._makeBullets(o)}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let i=this._valueFields;if(!i)throw new Error("No value fields are set for the series.");const s={},l={},o={},h={},d={},n={},m={},f={},u={};w(i,a=>{s[a]=0,l[a]=0,o[a]=0}),w(i,a=>{let g=a+"Change",y=a+"ChangePercent",_=a+"ChangePrevious",D=a+"ChangePreviousPercent",b=a+"ChangeSelection",x=a+"ChangeSelectionPercent",c="valueY";a!="valueX"&&a!="openValueX"&&a!="lowValueX"&&a!="highValueX"||(c="valueX");const T=this.getPrivate("baseValueSeries"),N=this.getPrivate("adjustedStartIndex",e);for(let I=N;I<t;I++){const v=this.dataItems[I];if(v){let p=v.get(a);p!=null&&(o[a]++,s[a]+=p,l[a]+=Math.abs(p),f[a]=s[a]/o[a],(h[a]>p||h[a]==null)&&(h[a]=p),(d[a]<p||d[a]==null)&&(d[a]=p),m[a]=p,n[a]==null&&(n[a]=p,u[a]=p,T&&(n[c]=T._getBase(c))),e===0&&(v.setRaw(g,p-n[c]),v.setRaw(y,(p-n[c])/n[c]*100)),v.setRaw(_,p-u[c]),v.setRaw(D,(p-u[c])/u[c]*100),v.setRaw(b,p-n[c]),v.setRaw(x,(p-n[c])/n[c]*100),u[a]=p)}}if(t<this.dataItems.length-1){const I=this.dataItems[t];if(I){let v=I.get(a);I.setRaw(_,v-u[c]),I.setRaw(D,(v-u[c])/u[c]*100),I.setRaw(b,v-n[c]),I.setRaw(x,(v-n[c])/n[c]*100)}}e>0&&e--,delete u[a];for(let I=e;I<N;I++){const v=this.dataItems[I];if(v){let p=v.get(a);u[a]==null&&(u[a]=p),p!=null&&(v.setRaw(_,p-u[c]),v.setRaw(D,(p-u[c])/u[c]*100),v.setRaw(b,p-n[c]),v.setRaw(x,(p-n[c])/n[c]*100),u[a]=p)}}}),w(i,a=>{this.setPrivate(a+"AverageSelection",f[a]),this.setPrivate(a+"CountSelection",o[a]),this.setPrivate(a+"SumSelection",s[a]),this.setPrivate(a+"AbsoluteSumSelection",l[a]),this.setPrivate(a+"LowSelection",h[a]),this.setPrivate(a+"HighSelection",d[a]),this.setPrivate(a+"OpenSelection",n[a]),this.setPrivate(a+"CloseSelection",m[a])}),e===0&&t===this.dataItems.length&&w(i,a=>{this.setPrivate(a+"Average",f[a]),this.setPrivate(a+"Count",o[a]),this.setPrivate(a+"Sum",s[a]),this.setPrivate(a+"AbsoluteSum",l[a]),this.setPrivate(a+"Low",h[a]),this.setPrivate(a+"High",d[a]),this.setPrivate(a+"Open",n[a]),this.setPrivate(a+"Close",m[a])})}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&w(e,t=>{const i=t.minValue||this.getPrivate(t.dataField+"Low")||0,s=t.maxValue||this.getPrivate(t.dataField+"High")||0;w(t.target._entities,l=>{const o=l.dataItem.get(t.dataField);if(!O(o)){t.neutral&&l.set(t.key,t.neutral);const h=l.states;if(h){const d=h.lookup("default");d&&t.neutral&&d.set(t.key,t.neutral)}if(!t.customFunction)return}if(t.customFunction)t.customFunction.call(this,l,i,s,o);else{let h,d;h=t.logarithmic?(Math.log(o)*Math.LOG10E-Math.log(i)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(i)*Math.LOG10E):(o-i)/(s-i),!O(o)||O(h)&&Math.abs(h)!=1/0||(h=.5),O(t.min)?d=t.min+(t.max-t.min)*h:t.min instanceof H?d=H.interpolate(h,t.min,t.max):t.min instanceof W&&(d=ee(h,t.min,t.max)),l.set(t.key,d);const n=l.states;if(n){const m=n.lookup("default");m&&m.set(t.key,d)}}})}),this.get("visible")){let t=this.dataItems.length,i=this.startIndex(),s=this.endIndex();s<t&&s++,i>0&&i--;for(let l=0;l<i;l++)this._hideBullets(this.dataItems[l]);for(let l=i;l<s;l++)this._positionBullets(this.dataItems[l]);for(let l=s;l<t;l++)this._hideBullets(this.dataItems[l])}}_positionBullets(e){e.bullets&&w(e.bullets,t=>{this._positionBullet(t);const i=t.get("sprite");t.get("dynamic")&&(i&&(i._markDirtyKey("fill"),i.markDirtySize()),i instanceof C&&i.walkChildren(s=>{s._markDirtyKey("fill"),s.markDirtySize(),s instanceof z&&s.text.markDirtyText()})),i instanceof z&&i.get("populateText")&&i.text.markDirtyText()})}_hideBullets(e){e.bullets&&w(e.bullets,t=>{let i=t.get("sprite");i&&i.setPrivate("visible",!1)})}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&w(t,i=>{i.dispose()})}_getItemReaderLabel(){return""}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return j(this,void 0,void 0,function*(){const s=[i.showDataItem.call(this,e,t)],l=e.bullets;l&&w(l,o=>{const h=o.get("sprite");h&&s.push(h.show(t))}),yield Promise.all(s)})}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return j(this,void 0,void 0,function*(){const s=[i.hideDataItem.call(this,e,t)],l=e.bullets;l&&w(l,o=>{const h=o.get("sprite");h&&s.push(h.hide(t))}),yield Promise.all(s)})}_sequencedShowHide(e,t){return j(this,void 0,void 0,function*(){if(this.get("sequencedInterpolation"))if(O(t)||(t=this.get("interpolationDuration",0)),t>0){const i=this.startIndex(),s=this.endIndex();yield Promise.all(G(this.dataItems,(l,o)=>j(this,void 0,void 0,function*(){let h=t||0;(o<i-10||o>s+10)&&(h=0);let d=this.get("sequencedDelay",0)+h/(s-i);yield se(d*(o-i)),e?yield this.showDataItem(l,h):yield this.hideDataItem(l,h)})))}else yield Promise.all(G(this.dataItems,i=>e?this.showDataItem(i,0):this.hideDataItem(i,0)))})}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const i=t.get("valueLabel");if(i){const l=i.text;let o="";i._setDataItem(e),o=this.get("legendValueText",l.get("text","")),i.set("text",o),l.markDirtyText()}const s=t.get("label");if(s){const l=s.text;let o="";s._setDataItem(e),o=this.get("legendLabelText",l.get("text","")),s.set("text",o),l.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function q(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];if(s.length>0){let l=s[0];if(l.length>0){let o=l[0];r.moveTo(o.x,o.y);for(let h=0,d=s.length;h<d;h++)le(r,s[h])}}}}function le(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];r.lineTo(s.x,s.y)}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([$.className])});class F extends K{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let i=e[0];this._display.moveTo(i.x,i.y),q(this._display,[[e]])}else if(t)q(this._display,t);else if(!this.get("draw")){let i=this.width(),s=this.height();this._display.moveTo(0,0),this._display.lineTo(i,s)}}}}function de(r){return function(){return r}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:K.classNames.concat([F.className])});const L=Math.PI,E=2*L,M=1e-6,re=E-M;function Y(r){this._+=r[0];for(let e=1,t=r.length;e<t;++e)this._+=arguments[e]+r[e]}function ne(r){let e=Math.floor(r);if(!(e>=0))throw new Error(`invalid digits: ${r}`);if(e>15)return Y;const t=10**e;return function(i){this._+=i[0];for(let s=1,l=i.length;s<l;++s)this._+=Math.round(arguments[s]*t)/t+i[s]}}class oe{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?Y:ne(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,s){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+s}`}bezierCurveTo(e,t,i,s,l,o){this._append`C${+e},${+t},${+i},${+s},${this._x1=+l},${this._y1=+o}`}arcTo(e,t,i,s,l){if(e=+e,t=+t,i=+i,s=+s,(l=+l)<0)throw new Error(`negative radius: ${l}`);let o=this._x1,h=this._y1,d=i-e,n=s-t,m=o-e,f=h-t,u=m*m+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(u>M)if(Math.abs(f*d-n*m)>M&&l){let a=i-o,g=s-h,y=d*d+n*n,_=a*a+g*g,D=Math.sqrt(y),b=Math.sqrt(u),x=l*Math.tan((L-Math.acos((y+u-_)/(2*D*b)))/2),c=x/b,T=x/D;Math.abs(c-1)>M&&this._append`L${e+c*m},${t+c*f}`,this._append`A${l},${l},0,0,${+(f*a>m*g)},${this._x1=e+T*d},${this._y1=t+T*n}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,i,s,l,o){if(e=+e,t=+t,o=!!o,(i=+i)<0)throw new Error(`negative radius: ${i}`);let h=i*Math.cos(s),d=i*Math.sin(s),n=e+h,m=t+d,f=1^o,u=o?s-l:l-s;this._x1===null?this._append`M${n},${m}`:(Math.abs(this._x1-n)>M||Math.abs(this._y1-m)>M)&&this._append`L${n},${m}`,i&&(u<0&&(u=u%E+E),u>re?this._append`A${i},${i},0,1,${f},${e-h},${t-d}A${i},${i},0,1,${f},${this._x1=n},${this._y1=m}`:u>M&&this._append`A${i},${i},0,${+(u>=L)},${f},${this._x1=e+i*Math.cos(l)},${this._y1=t+i*Math.sin(l)}`)}rect(e,t,i,s){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+s}h${-i}Z`}toString(){return this._}}function ce(r){let e=3;return r.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const i=Math.floor(t);if(!(i>=0))throw new RangeError(`invalid digits: ${t}`);e=i}return r},()=>new oe(e)}class V extends C{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(C.new(this._root,{width:k,height:k,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:k,height:k})})}}Object.defineProperty(V,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(V,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:C.classNames.concat([V.className])});class B extends V{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{width:k,height:k,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new te})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(t=>{if(t.type==="clear"){w(t.oldValues,s=>{this._removeSeries(s)});const i=this.get("colors");i&&i.reset()}else if(t.type==="push")e.moveValue(t.newValue),this._processSeries(t.newValue);else if(t.type==="setIndex")e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="insertIndex")e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="removeIndex")this._removeSeries(t.oldValue);else{if(t.type!=="moveIndex")throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}}))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(B,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(B,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:V.classNames.concat([B.className])});class A extends F{}Object.defineProperty(A,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(A,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:F.classNames.concat([A.className])});export{$ as D,U as I,B as R,A as U,ce as V,S as _,R as g,de as k};
