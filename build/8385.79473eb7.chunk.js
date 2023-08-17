"use strict";(self.webpackChunkcmhomes_api=self.webpackChunkcmhomes_api||[]).push([[8385],{52713:(j,L,n)=>{n.d(L,{r:()=>v});var f=n(67294),E=n(41580),O=n(45697),b=n.n(O),K=n(99168);function F(M,C,p){if(!M||!C)return{display:"none"};const{x:P,y:U}=p;return{transform:`translate(${P}px, ${U}px)`}}function v({renderItem:M}){const{itemType:C,isDragging:p,item:P,initialOffset:U,currentOffset:B,mouseOffset:Y}=(0,K.useDragLayer)(A=>({item:A.getItem(),itemType:A.getItemType(),initialOffset:A.getInitialSourceClientOffset(),currentOffset:A.getSourceClientOffset(),isDragging:A.isDragging(),mouseOffset:A.getClientOffset()}));return p?f.createElement(E.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},f.createElement(E.x,{style:F(U,B,Y)},M({type:C,item:P}))):null}v.propTypes={renderItem:b().func.isRequired}},27661:(j,L,n)=>{var f=n(67294);const E=(0,f.createContext)();var O=null},21440:(j,L,n)=>{n.d(L,{PL:()=>K,Y9:()=>F.Y,zE:()=>ae,Ky:()=>X,fi:()=>se,zH:()=>de,r5:()=>o});var f=n(67294),E=n(86706),O=n(25398);const K=()=>{const e=(0,E.v9)(O.Z),r=(0,f.useCallback)(t=>e?.components?.[t]??{},[e]);return{...e,getComponentLayout:r}};var F=n(79116),v=n(80120),M=n(52861),C=n(42225),p=n(18172);const P={error:null,isLoading:!0,layout:{},layouts:{}},B=(e,r)=>(0,p.ZP)(e,t=>{switch(r.type){case"GET_DATA":{t.isLoading=!0,t.error=null,t.layout={};break}case"GET_DATA_SUCCEEDED":{const i=r.data.contentType.uid;t.layout=r.data,t.layouts[i]=r.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1,t.error=r.error;break}case"SET_LAYOUT_FROM_STATE":{t.error=null,t.layout=e.layouts[r.uid];break}case"UPDATE_LAYOUT":{const i=e.layout;t.layout={...i,contentType:{uid:i.contentType.uid,...r.newLayout.contentType}},t.layouts[i.contentType.uid]={...i,contentType:{uid:i.contentType.uid,...r.newLayout.contentType}};break}default:return t}});var Y=n(50361),A=n.n(Y),q=n(27361),I=n.n(q),oe=n(36968),S=n.n(oe),_=n(21892);const Q=(e,r)=>r.find(t=>t.uid===e),ie=(e,r)=>{const t=ee(e,r),i=k(t.contentType,r),m=te(t.contentType,t.components);return S()(t,["contentType","layouts","edit"],i),S()(t,["contentType","layouts","list"],m),Object.keys(t.components).forEach(c=>{const g=k(t.components[c],r);S()(t,["components",c,"layouts","edit"],g)}),t},ee=(e,r)=>{const t=(0,_.w8)(A()(e),r,"contentType"),{components:i,contentType:m}=t,c=g=>Object.keys(g.metadatas).reduce((h,R)=>{const N=I()(g,["attributes",R],{});let x=g.metadatas[R];if(N.type==="relation"){const ye=Q(N.targetModel,r),W=x.edit.mainField,G={name:W,schema:I()(ye,["attributes",W])};x={list:{...x.list,mainField:G},edit:{...x.edit,mainField:G}}}return h[R]=x,h},{});return S()(t,["contentType","metadatas"],c(m)),Object.keys(i).forEach(g=>{const h=i[g],R=c(h);S()(t,["components",g,"metadatas"],R)}),t},k=(e,r)=>e.layouts.edit.reduce((t,i)=>{const m=i.map(c=>{const g=I()(e,["attributes",c.name],{}),h={...c,fieldSchema:g,metadatas:I()(e,["metadatas",c.name,"edit"],{})};if(g.type==="relation"){const N=Q(g.targetModel,r).pluginOptions||{};S()(h,"targetModelPluginOptions",N),S()(h,"queryInfos",{shouldDisplayRelationLink:z(e,c.name,r)})}return h});return t.push(m),t},[]),te=(e,r)=>e.layouts.list.reduce((i,m)=>{const c=I()(e,["attributes",m],{}),g=I()(e,["metadatas",m,"list"],{}),h=c.type;if(h==="relation")return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:g}),i;if(h==="component"){const R=r[c.component],N=R.settings.mainField,x=R.attributes[N];return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:{...g,mainField:{...x,name:N}}}),i}return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:g}),i},[]),z=(e,r,t)=>{const i=I()(e,["attributes",r,"targetModel"],"");return Z(t).includes(i)},Z=e=>e.filter(r=>r.isDisplayed).map(({uid:r})=>r),V=ie,ae=e=>{const[{error:r,isLoading:t,layout:i,layouts:m},c]=(0,f.useReducer)(B,P),g=(0,f.useMemo)(C.Vo,[]),{schemas:h}=(0,E.v9)(W=>g(W),E.wU),R=(0,f.useRef)(!0),{get:N}=(0,v.kY)(),x=(0,f.useCallback)(async(W,G)=>{if(m[W]){c({type:"SET_LAYOUT_FROM_STATE",uid:W});return}c({type:"GET_DATA"});try{const{data:{data:re}}=await N(`/content-manager/content-types/${W}/configuration`,{cancelToken:G.token});c({type:"GET_DATA_SUCCEEDED",data:V(re,h)})}catch(re){if(M.default.isCancel(re))return;R.current&&console.error(re),R.current&&c({type:"GET_DATA_ERROR",error:re})}},[m,h,N]);(0,f.useEffect)(()=>()=>{R.current=!1},[]),(0,f.useEffect)(()=>{const G=M.default.CancelToken.source();return x(e,G),()=>{G.cancel("Operation canceled by the user.")}},[e,x]);const ye=(0,f.useCallback)(W=>{c({type:"UPDATE_LAYOUT",newLayout:V(W,h)})},[h]);return{error:r,isLoading:t,layout:i,updateLayout:ye}},ge=e=>e["content-manager_app"].collectionTypeLinks;var le=n(13218),T=n.n(le),H=n(80129);const ue=(e,r)=>Object.keys(e).reduce((t,i)=>{const m=e[i],c=I()(r,[i],m);return T()(m)?{...t,[i]:ue(m,c)}:(t[i]=c,t)},{}),ce=(e,r,t)=>{const i=e.find(({to:x})=>x.includes(r));if(!i)return"/";const{to:m,search:c}=i,g=(0,H.parse)(c),h=(0,H.parse)(t.substring(1)),R=ue(g,h);return`${m}?${(0,H.stringify)(R,{encode:!1})}`},X=e=>{const[{rawQuery:r}]=(0,v.Kx)(),t=(0,E.v9)(ge);return ce(t,e,r)};var Te=n(25950),$=n(16550);const se=()=>{const{search:e}=(0,$.TH)(),r=e?(0,H.parse)(e.substring(1)):{};return r.plugins?(0,H.stringify)({plugins:r.plugins},{encode:!1}):""},de=e=>{const r=(0,f.useRef)();return(0,f.useEffect)(()=>{r.current=e},[e]),r.current};var J=n(14996);const me=(e,r,t)=>({type:J.m,permissions:e,__meta__:{plugins:r,containerName:t}}),fe=()=>({type:J.Q}),s=e=>e["content-manager_rbacManager"].permissions,u=e=>e.rbacProvider.collectionTypesRelatedPermissions,o=(e,r,t="listView")=>{const i=(0,E.v9)(u),m=(0,E.v9)(s),c=(0,E.I0)(),g=i[r];return(0,f.useEffect)(()=>g?(c(me(g,e?e.plugins:null,t)),()=>{c(fe())}):()=>{},[g,c,e,t]),m};var d=n(27661);const y=()=>useContext(WysiwygContext),l=null},79116:(j,L,n)=>{n.d(L,{Y:()=>K});var f=n(67294),E=n(99168),O=n.n(E),b=n(25950);const K=(F,{type:v="STRAPI_DND",index:M,item:C={},onStart:p,onEnd:P,onGrabItem:U,onDropItem:B,onCancel:Y,onMoveItem:A,dropSensitivity:q="regular"})=>{const I=(0,f.useRef)(null),[{handlerId:oe},S]=(0,E.useDrop)({accept:v,collect(k){return{handlerId:k.getHandlerId()}},hover(k,te){if(!I.current)return;const z=k.index,Z=M;if(z!==Z){if(q==="regular"){const V=I.current.getBoundingClientRect(),ne=(V.bottom-V.top)/2,w=te.getClientOffset().y-V.top;if(z<Z&&w<ne||z>Z&&w>ne)return}A(Z,z),k.index=Z}}}),[{isDragging:_},Q,ie]=(0,E.useDrag)({type:v,item(){p&&p();const{width:k}=I.current?.getBoundingClientRect()??{};return{index:M,width:k,...C}},end(){P&&P()},canDrag:F,isDragging:C.id?k=>C.id===k.getItem().id:void 0,collect:k=>({isDragging:k.isDragging()})}),ee=(0,b.A)(F,M,{onGrabItem:U,onDropItem:B,onCancel:Y,onMoveItem:A});return[{handlerId:oe,isDragging:_,handleKeyDown:ee},I,S,Q,ie]}},25950:(j,L,n)=>{n.d(L,{A:()=>E});var f=n(67294);const E=(O,b,{onCancel:K,onDropItem:F,onGrabItem:v,onMoveItem:M})=>{const[C,p]=(0,f.useState)(!1),P=A=>{C&&(A==="UP"?M(b-1,b):A==="DOWN"&&M(b+1,b))},U=()=>{C?(F&&F(b),p(!1)):(v&&v(b),p(!0))},B=()=>{C&&(p(!1),K&&K(b))};return A=>{if(O&&!(A.key==="Tab"&&!C))switch(A.preventDefault(),A.key){case" ":case"Enter":U();break;case"Escape":B();break;case"ArrowDown":case"ArrowRight":P("DOWN");break;case"ArrowUp":case"ArrowLeft":P("UP");break;default:}}}},42225:(j,L,n)=>{n.d(L,{Jg:()=>M,KQ:()=>F,Vo:()=>v,Yg:()=>O});var f=n(20573),E=n(23301);const O=()=>p=>p["content-manager_app"]||E.E,b=()=>createSelector(O(),p=>p),K=()=>createSelector(O(),p=>p.models),F=()=>(0,f.P1)(O(),p=>({collectionTypeLinks:p.collectionTypeLinks,singleTypeLinks:p.singleTypeLinks})),v=()=>(0,f.P1)(O(),({components:p,models:P})=>({schemas:[...p,...P]})),M=(0,f.P1)(O(),p=>p.fieldSizes);var C=null},25398:(j,L,n)=>{n.d(L,{Z:()=>E});const E=O=>O["content-manager_editViewLayoutManager"].currentLayout},56837:(j,L,n)=>{n.d(L,{Z:()=>f});const f={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},45283:(j,L,n)=>{n.d(L,{Z:()=>E});const E=O=>`content-manager.${O}`},21892:(j,L,n)=>{n.d(L,{_Q:()=>Z.Z,W3:()=>b,ko:()=>F,FE:()=>M,Di:()=>U,Ex:()=>fe,du:()=>q,TA:()=>S,Ts:()=>ee,Uo:()=>te,OB:()=>z.Z,w8:()=>le,kc:()=>ue});var f=n(50361),E=n.n(f);const b=(s,u,a)=>{if(Array.isArray(s)&&u>=0&&a>=0&&u<=s.length-1&&a<=s.length-1){const o=E()(s),d=o.splice(u,1);return o.splice(a,0,d[0]),o}return s},F=s=>{const{type:u}=s;return u==="relation"?!(s?.relationType??"").toLowerCase().includes("morph"):!["json","dynamiczone","richtext","password"].includes(u)&&!!u},v=(s,u)=>{typeof s=="function"?s(u):s!=null&&(s.current=u)},M=(...s)=>u=>s.forEach(a=>v(a,u));var C=n(27361),p=n.n(C);const P=(s,u)=>Object.keys(s).reduce((a,o)=>{const d=p()(s,[o],{}),{default:y,component:l,type:e,required:r,min:t,repeatable:i}=d;if(y!==void 0&&(a[o]=y),e==="component"){const m=u?.[l]?.attributes??{},c=P(m,u);if(r===!0&&(a[o]=i===!0?[]:c),t&&i===!0&&r){a[o]=[];for(let g=0;g<t;g+=1)a[o].push(c)}}return e==="dynamiczone"&&r===!0&&(a[o]=[]),a},{}),U=P;var B=n(57557),Y=n.n(B);const q=({layouts:s,metadatas:u,...a})=>{const o=s.list.map(l=>l.name?l.name:l),d=Object.keys(u).reduce((l,e)=>{const r=p()(u,[e],{});let t=r.edit;return t.mainField&&(t={...t,mainField:r.edit.mainField.name}),{...l,[e]:{edit:t,list:Y()(r.list,["mainField"])}}},{}),y=s.edit.map(l=>l.map(({name:e,size:r})=>({name:e,size:r})));return{...a,layouts:{edit:y,list:o},metadatas:d}},I=(s,u)=>s.map(a=>({...a,subject:u})),S=s=>{const u={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(u).reduce((a,o)=>(a[o]=I(u[o],s),a),{})};var _=n(7654),Q=n.n(_);const ee=s=>s.split(".").filter(u=>Q()(parseInt(u,10))),te=s=>{if(s.length===0)return-1;const u=Math.max.apply(Math,s.map(a=>a.__temp_key__??0));return Number.isNaN(u)?-1:u};var z=n(45283),Z=n(56837),V=n(82492),ne=n.n(V),ae=n(36968),w=n.n(ae);const le=(s,u,a)=>{const o=e=>u.find(r=>r.uid===e),d=Object.assign({},s),y=s[a].uid,l=o(y);return w()(d,[a],ne()({},l,s[a])),Object.keys(s.components).forEach(e=>{const r=o(e);w()(d,["components",e],{...s.components[e],...r})}),d};var T=n(80120);const ue=(s,u,a)=>{const o=(d,y)=>Object.keys(d).reduce((l,e)=>{const r=(0,T.UN)(y,e),t=p()(d,e),i=(0,T.k2)(y,[e,"component"]),m=(0,T.k2)(y,[e,"repeatable"]);return r==="dynamiczone"?(l[e]=t.map(c=>o(c,a[c.__component])),l):r==="component"?(m?l[e]=t&&t.map(c=>o(c,a[i])):l[e]=t&&o(t,a[i]),l):(r!=="password"&&(l[e]=t),l)},{});return o(s,u)};var pe=n(51584),ce=n.n(pe),he=n(41609),X=n.n(he),Te=n(14841),$=n.n(Te),D=n(87561),se=n(72262);D.kM(D.nK,"defined",function(){return this.test("defined",T.I0.required,s=>s!==void 0)}),D.kM(D.IX,"notEmptyMin",function(s){return this.test("notEmptyMin",T.I0.min,u=>X()(u)?!0:u.length>=s)}),D.kM(D.Z_,"isInferior",function(s,u){return this.test("isInferior",s,function(a){return!a||Number.isNaN($()(a))?!0:$()(u)>=$()(a)})}),D.kM(D.Z_,"isSuperior",function(s,u){return this.test("isSuperior",s,function(a){return!a||Number.isNaN($()(a))?!0:$()(a)>=$()(u)})});const de=s=>p()(s,["attributes"],{}),J=(s,{components:u},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const o=de(s);return D.Ry().shape(Object.keys(o).reduce((d,y)=>{const l=o[y];if(l.type!=="relation"&&l.type!=="component"&&l.type!=="dynamiczone"){const e=me(l.type,l,a);d[y]=e}if(l.type==="relation"&&(d[y]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(l.relationType)?D.Ry().nullable():D.IX().nullable()),l.type==="component"){const e=J(u[l.component],{components:u},{...a,isFromComponent:!0});if(l.repeatable===!0){const{min:t,max:i,required:m}=l;let c=D.Vo(g=>{let h=D.IX().of(e);return t?m?h=h.min(t,T.I0.min):m!==!0&&X()(g)?h=h.nullable():h=h.min(t,T.I0.min):m&&!a.isDraft&&(h=h.min(1,T.I0.required)),i&&(h=h.max(i,T.I0.max)),h});return d[y]=c,d}const r=D.Vo(t=>t!==void 0?l.required===!0&&!a.isDraft?e.defined():e.nullable():l.required===!0?D.Ry().defined():D.Ry().nullable());return d[y]=r,d}if(l.type==="dynamiczone"){let e=D.IX().of(D.Vo(({__component:i})=>J(u[i],{components:u},{...a,isFromComponent:!0})));const{max:r,min:t}=l;t?l.required?e=e.test("min",T.I0.min,i=>a.isCreatingEntry?i&&i.length>=t:i===void 0?!0:i!==null&&i.length>=t).test("required",T.I0.required,i=>a.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null):e=e.notEmptyMin(t):l.required&&!a.isDraft&&(e=e.test("required",T.I0.required,i=>a.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null)),r&&(e=e.max(r,T.I0.max)),d[y]=e}return d},{}))},me=(s,u,a)=>{let o=D.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(s)&&(o=D.Z_()),s==="json"&&(o=D.nK(T.I0.json).test("isJSON",T.I0.json,d=>{if(!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",T.I0.required,d=>!(u.required&&(!d||!d.length)))),s==="email"&&(o=o.email(T.I0.email)),["number","integer","float","decimal"].includes(s)&&(o=D.Rx().transform(d=>Q()(d)?void 0:d).typeError()),s==="biginteger"&&(o=D.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(s)&&(o=D.hT()),Object.keys(u).forEach(d=>{const y=u[d];if(y||!ce()(y)&&Number.isInteger(Math.floor(y))||y===0)switch(d){case"required":{a.isDraft||(s==="password"&&a.isCreatingEntry&&(o=o.required(T.I0.required)),s!=="password"&&(a.isCreatingEntry?o=o.required(T.I0.required):o=o.test("required",T.I0.required,l=>l===void 0&&!a.isFromComponent?!0:(0,se.Z)(s)?l===0?!0:!!l:s==="boolean"?l!=null:s==="date"||s==="datetime"?typeof l=="string"?!X()(l):!X()(l?.toString()):!X()(l))));break}case"max":{s==="biginteger"?o=o.isInferior(T.I0.max,y):o=o.max(y,T.I0.max);break}case"maxLength":o=o.max(y,T.I0.maxLength);break;case"min":{s==="biginteger"?o=o.isSuperior(T.I0.min,y):o=o.min(y,T.I0.min);break}case"minLength":{a.isDraft||(o=o.min(y,T.I0.minLength));break}case"regex":o=o.matches(new RegExp(y),{message:T.I0.regex,excludeEmptyString:!u.required});break;case"lowercase":["text","textarea","email","string"].includes(s)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(s)&&(o=o.strict().uppercase());break;case"positive":(0,se.Z)(s)&&(o=o.positive());break;case"negative":(0,se.Z)(s)&&(o=o.negative());break;default:o=o.nullable()}}),o},fe=J},72262:(j,L,n)=>{n.d(L,{Z:()=>f});function f(E){return["integer","biginteger","decimal","float","number"].includes(E)}}}]);
