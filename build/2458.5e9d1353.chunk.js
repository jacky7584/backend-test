(self.webpackChunkcmhomes_api=self.webpackChunkcmhomes_api||[]).push([[2458],{49699:(C,m,e)=>{"use strict";e.d(m,{Z:()=>y});var t=e(67294),p=e(53979),i=e(11047),o=e(29728),a=e(80120),r=e(85018),u=e(67109),h=e(45697),s=e.n(h),T=e(86896),P=e(30815),n=e(92807);const d=({onRegenerate:v,idToRegenerate:R,backUrl:Z,onError:N})=>{const{formatMessage:S}=(0,T.Z)(),[M,B]=(0,t.useState)(!1),{regenerateData:D,isLoadingConfirmation:H}=(0,n.rW)(Z,R,v,N),W=async()=>{D(),B(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(P.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>B(!0),name:"regenerate"},S({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(a.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(P.Z,null),isConfirmButtonLoading:H,isOpen:M,onToggleDialog:()=>B(!1),onConfirm:W,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};d.defaultProps={onRegenerate(){},onError:void 0},d.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired,onError:s().func};const l=d,g=({title:v,token:R,setToken:Z,canEditInputs:N,canRegenerate:S,isSubmitting:M,backUrl:B,regenerateUrl:D,onErrorRegenerate:H})=>{const{formatMessage:W}=(0,T.Z)(),Y=X=>{Z({...R,accessKey:X})};return t.createElement(p.T,{title:R?.name||W(v),primaryAction:N?t.createElement(i.k,{gap:2},S&&R?.id&&t.createElement(l,{backUrl:D,onRegenerate:Y,idToRegenerate:R?.id,onError:H}),t.createElement(o.z,{disabled:M,loading:M,startIcon:t.createElement(r.Z,null),type:"submit",size:"S"},W({id:"global.save",defaultMessage:"Save"}))):S&&R?.id&&t.createElement(l,{onRegenerate:Y,idToRegenerate:R?.id,backUrl:D}),navigationAction:t.createElement(a.rU,{startIcon:t.createElement(u.Z,null),to:B},W({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};g.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired,onErrorRegenerate:s().func},g.defaultProps={token:void 0,onErrorRegenerate:void 0};const y=g},89982:(C,m,e)=>{"use strict";e.d(m,{Z:()=>T});var t=e(67294),p=e(40619),i=e(82562),o=e(75515),a=e(45697),r=e.n(a),u=e(86896),h=e(51352);const s=({token:P,errors:n,values:d,onChange:l,isCreating:g})=>{const{formatMessage:y}=(0,u.Z)();return t.createElement(t.Fragment,null,t.createElement(p.P,{name:"lifespan",label:y({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:d.lifespan!==null?d.lifespan:"0",error:n.lifespan?y(n.lifespan?.id?n.lifespan:{id:n.lifespan,defaultMessage:n.lifespan}):null,onChange:v=>{l({target:{name:"lifespan",value:v}})},required:!0,disabled:!g,placeholder:"Select"},t.createElement(i.W,{value:"604800000"},y({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(i.W,{value:"2592000000"},y({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(i.W,{value:"7776000000"},y({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(i.W,{value:"0"},y({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!g&&`${y({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,h.IX)(P?.createdAt,parseInt(d.lifespan,10))}`))};s.propTypes={errors:r().shape({lifespan:r().string}),onChange:r().func.isRequired,values:r().shape({lifespan:r().oneOfType([r().number,r().string])}).isRequired,isCreating:r().bool.isRequired,token:r().shape({id:r().oneOfType([r().number,r().string]),type:r().string,lifespan:r().string,name:r().string,accessKey:r().string,permissions:r().array,description:r().string,createdAt:r().string})},s.defaultProps={errors:{},token:{}};const T=s},81384:(C,m,e)=>{"use strict";e.d(m,{Z:()=>T});var t=e(67294),p=e(12028),i=e(80120),o=e(65186),a=e(69427),r=e(45697),u=e.n(r),h=e(86896);const s=({token:P,tokenType:n})=>{const{formatMessage:d}=(0,h.Z)(),l=(0,i.lm)(),{trackUsage:g}=(0,i.rS)(),{copy:y}=(0,i.VP)(),v=R=>async()=>{await y(R)&&(g("didCopyTokenKey",{tokenType:n}),l({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(i.Y_,{endAction:P&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(p.h,{label:d({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:v(P),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:P||d({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:d(P?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(a.Z,null),iconBackground:"neutral100"})};s.defaultProps={token:null},s.propTypes={token:u().string,tokenType:u().string.isRequired};const T=s},37651:(C,m,e)=>{"use strict";e.d(m,{Z:()=>u});var t=e(67294),p=e(61467),i=e(45697),o=e.n(i),a=e(86896);const r=({errors:h,values:s,onChange:T,canEditInputs:P})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(p.g,{label:n({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:h.description?n(h.description?.id?h.description:{id:h.description,defaultMessage:h.description}):null,onChange:T,disabled:!P},s.description)};r.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},r.defaultProps={errors:{}};const u=r},72028:(C,m,e)=>{"use strict";e.d(m,{Z:()=>u});var t=e(67294),p=e(16364),i=e(45697),o=e.n(i),a=e(86896);const r=({errors:h,values:s,onChange:T,canEditInputs:P})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(p.o,{name:"name",error:h.name?n(h.name?.id?h.name:{id:h.name,defaultMessage:h.name}):null,label:n({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:T,value:s.name,disabled:!P,required:!0})};r.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},r.defaultProps={errors:{}};const u=r},32381:(C,m,e)=>{"use strict";e.d(m,{Z:()=>h});var t=e(67294),p=e(40619),i=e(82562),o=e(45697),a=e.n(o),r=e(86896);const u=({name:s,errors:T,values:P,onChange:n,canEditInputs:d,options:l,label:g})=>{const{formatMessage:y}=(0,r.Z)();return t.createElement(p.P,{name:s,label:y({id:g.id,defaultMessage:g.defaultMessage}),value:P&&P[s],error:T[s]?y(T[s]?.id?T[s]:{id:T[s],defaultMessage:T[s]}):null,onChange:n,placeholder:"Select",required:!0,disabled:!d},l&&l.map(({value:v,label:R})=>t.createElement(i.W,{key:v,value:v},y(R))))};u.propTypes={name:a().string,options:a().arrayOf(a().shape({label:a().shape({id:a().string,defaultMessage:a().string}),value:a().string})),errors:a().shape({type:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({type:a().string}).isRequired,label:a().shape({id:a().string,defaultMessage:a().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const h=u},81966:(C,m,e)=>{"use strict";e.d(m,{Z:()=>t,f:()=>p});const t="api-token",p="transfer-token"},92458:(C,m,e)=>{"use strict";e.d(m,{Z:()=>Ge});var t=e(67294),p=e(185),i=e(49066),o=e(11047),a=e(80120),r=e(41054),u=e(86896),h=e(88767),s=e(86706),T=e(16550),P=e(45697),n=e.n(P);const d=(0,t.createContext)({}),l=({children:c,...E})=>t.createElement(d.Provider,{value:E},c),g=()=>(0,t.useContext)(d);l.propTypes={children:n().node.isRequired};var y=e(35209),v=e(36364),R=e(81966),Z=e(49699),N=e(81384),S=e(41580),M=e(75515),B=e(11276),D=e(67819),H=e(89982),W=e(37651),Y=e(72028),X=e(32381);const _=({errors:c,onChange:E,canEditInputs:f,isCreating:I,values:x,apiToken:k,onDispatch:O,setHasChangedPermissions:V})=>{const{formatMessage:j}=(0,u.Z)(),F=({target:{value:z}})=>{V(!1),z==="full-access"&&O({type:"SELECT_ALL_ACTIONS"}),z==="read-only"&&O({type:"ON_CHANGE_READ_ONLY"})},w=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.Z,{variant:"delta",as:"h2"},j({id:"global.details",defaultMessage:"Details"})),t.createElement(B.r,{gap:5},t.createElement(D.P,{key:"name",col:6,xs:12},t.createElement(Y.Z,{errors:c,values:x,canEditInputs:f,onChange:E})),t.createElement(D.P,{key:"description",col:6,xs:12},t.createElement(W.Z,{errors:c,values:x,canEditInputs:f,onChange:E})),t.createElement(D.P,{key:"lifespan",col:6,xs:12},t.createElement(H.Z,{isCreating:I,errors:c,values:x,onChange:E,token:k})),t.createElement(D.P,{key:"type",col:6,xs:12},t.createElement(X.Z,{values:x,errors:c,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:z=>{F({target:{value:z}}),E({target:{name:"type",value:z}})},options:w,canEditInputs:f})))))};_.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,apiToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),onDispatch:n().func.isRequired,setHasChangedPermissions:n().func.isRequired},_.defaultProps={errors:{},apiToken:{}};const Q=_;var ne=e(53979),le=e(29728),de=e(85018);const J=({apiTokenName:c})=>{const{formatMessage:E}=(0,u.Z)();return(0,a.go)(),t.createElement(p.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"API Tokens"}),t.createElement(ne.T,{primaryAction:t.createElement(le.z,{disabled:!0,startIcon:t.createElement(de.Z,null),type:"button",size:"L"},E({id:"global.save",defaultMessage:"Save"})),title:c||E({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(i.D,null,t.createElement(a.dO,null)))};J.defaultProps={apiTokenName:null},J.propTypes={apiTokenName:n().string};const ce=J;var se=e(35161),ae=e.n(se),oe=e(13217),Ce=e.n(oe),ie=e(71997);const Me=c=>{switch(c){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},xe=(0,ie.ZP)(S.x)`
  margin: -1px;
  border-radius: ${({theme:c})=>c.spaces[1]} 0 0 ${({theme:c})=>c.spaces[1]};
`;function pe({route:c}){const{formatMessage:E}=(0,u.Z)(),{method:f,handler:I,path:x}=c,k=x?Ce()(x.split("/")):[],[O="",V=""]=I?I.split("."):[],j=Me(c.method);return t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h3"},E({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,O),t.createElement(M.Z,{variant:"delta",textColor:"primary600"},".",V)),t.createElement(o.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(xe,{background:j.background,borderColor:j.border,padding:2},t.createElement(M.Z,{fontWeight:"bold",textColor:j.text},f)),t.createElement(S.x,{paddingLeft:2,paddingRight:2},ae()(k,F=>t.createElement(M.Z,{key:F,textColor:F.includes(":")?"neutral600":"neutral900"},"/",F)))))}pe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},pe.propTypes={route:n().shape({handler:n().string,method:n().string,path:n().string})};const Oe=pe,Re=()=>{const{value:{selectedAction:c,routes:E}}=g(),{formatMessage:f}=(0,u.Z)(),I=c?.split(".")[0];return t.createElement(D.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},c?t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},E[I]?.map(x=>x.config.auth?.scope?.includes(c)||x.handler===c?t.createElement(Oe,{key:x.handler,route:x}):null)):t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(M.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var De=e(48734),Ie=e(74756),Se=e(63081),ve=e(36213),ke=e(78114),Le=e(48403),Be=e.n(Le);const Pe=(0,ie.iv)`
  background: ${c=>c.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ue=(0,ie.ZP)(S.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${c=>c.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${c=>c.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,be=ie.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:c})=>c.colors.neutral150};
`,ue=({controllers:c,label:E,orderNumber:f,disabled:I,onExpanded:x,indexExpandendCollapsedContent:k})=>{const{value:{onChangeSelectAll:O,onChange:V,selectedActions:j,setSelectedAction:F,selectedAction:w}}=g(),[z,re]=(0,t.useState)(!1),{formatMessage:Ee}=(0,u.Z)(),q=()=>{re(L=>!L),x(f)};(0,t.useEffect)(()=>{k!==null&&k!==f&&z&&re(!1)},[k,f,z]);const b=L=>L===w;return t.createElement(De.U,{expanded:z,onToggle:q,variant:f%2?"primary":"secondary"},t.createElement(Ie.B,{title:Be()(E)}),t.createElement(Se.v,null,c?.map(L=>{const ee=L.actions.every(K=>j.includes(K.actionId)),fe=L.actions.some(K=>j.includes(K.actionId));return t.createElement(S.x,{key:`${E}.${L?.controller}`},t.createElement(o.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(S.x,{paddingRight:4},t.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},L?.controller)),t.createElement(be,null),t.createElement(S.x,{paddingLeft:4},t.createElement(ve.X,{value:ee,indeterminate:!ee&&fe,onValueChange:()=>{O({target:{value:[...L.actions]}})},disabled:I},Ee({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(B.r,{gap:4,padding:4},L?.actions&&L?.actions.map(K=>t.createElement(D.P,{col:6,key:K.actionId},t.createElement(Ue,{isActive:b(K.actionId),padding:2,hasRadius:!0},t.createElement(ve.X,{value:j.includes(K.actionId),name:K.actionId,onValueChange:()=>{V({target:{value:K.actionId}})},disabled:I},K.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>F({target:{value:K.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(ke.Z,null)))))))})))};ue.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ue.propTypes={controllers:n().array,orderNumber:n().number,label:n().string.isRequired,disabled:n().bool,onExpanded:n().func,indexExpandendCollapsedContent:n().number};const Ze=ue,ge=({section:c,...E})=>{const[f,I]=(0,t.useState)(null),x=k=>I(k);return t.createElement(S.x,{padding:4,background:"neutral0"},c&&c.map((k,O)=>t.createElement(Ze,{key:k.apiId,label:k.label,controllers:k.controllers,orderNumber:O,indexExpandendCollapsedContent:f,onExpanded:x,name:k.apiId,...E})))};ge.defaultProps={section:null},ge.propTypes={section:n().arrayOf(n().object)};const We=ge,Ke=({...c})=>{const{value:{data:E}}=g(),{formatMessage:f}=(0,u.Z)();return t.createElement(B.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(D.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h2"},f({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(M.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),E?.permissions&&t.createElement(We,{section:E?.permissions,...c})),t.createElement(Re,null))},Ne=(0,t.memo)(Ke);var me=e(51352);const $e=(c,E=[])=>({...c,selectedAction:null,routes:[],selectedActions:[],data:(0,me.mk)(E)});var je=e(18172),Fe=e(97019),Ae=e.n(Fe);const ze={data:{},selectedActions:[]},He=(c,E)=>(0,je.ZP)(c,f=>{switch(E.type){case"ON_CHANGE":{f.selectedActions.includes(E.value)?Ae()(f.selectedActions,E.value):f.selectedActions.push(E.value);break}case"SELECT_ALL_IN_PERMISSION":{E.value.every(x=>f.selectedActions.includes(x.actionId))?E.value.forEach(x=>{Ae()(f.selectedActions,x.actionId)}):E.value.forEach(x=>{f.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{f.selectedActions=[...f.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=f.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));f.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{f.data=(0,me.mk)(E.value);break}case"UPDATE_ROUTES":{f.routes={...E.value};break}case"UPDATE_PERMISSIONS":{f.selectedActions=[...E.value];break}case"SET_SELECTED_ACTION":{f.selectedAction=E.value;break}default:return f}}),Ve="Name already taken",Ge=()=>{(0,a.go)();const{formatMessage:c}=(0,u.Z)(),{lockApp:E,unlockApp:f}=(0,a.o1)(),I=(0,a.lm)(),x=(0,T.k6)(),k=(0,s.v9)(v._),[O,V]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:j}=(0,a.rS)(),F=(0,t.useRef)(j),{setCurrentStep:w}=(0,a.c1)(),{allowedActions:{canCreate:z,canUpdate:re,canRegenerate:Ee}}=(0,a.ss)(k.settings["api-tokens"]),[q,b]=(0,t.useReducer)(He,ze,A=>$e(A,{})),{params:{id:L}}=(0,T.$B)("/settings/api-tokens/:id"),{get:ee,post:fe,put:K}=(0,a.kY)(),$=L==="create";(0,h.useQuery)("content-api-permissions",async()=>{const[A,G]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async te=>{const{data:U}=await ee(te);return U.data}));b({type:"UPDATE_PERMISSIONS_LAYOUT",value:A}),b({type:"UPDATE_ROUTES",value:G}),O&&(O?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),O?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),O?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:O?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{F.current($?"didAddTokenFromList":"didEditTokenFromList",{tokenType:R.Z})},[$]);const{status:Ye}=(0,h.useQuery)(["api-token",L],async()=>{const{data:{data:A}}=await ee(`/admin/api-tokens/${L}`);return V({...A}),A?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),A?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),A?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:A?.permissions}),A},{enabled:!$&&!O,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Xe=async(A,G)=>{F.current($?"willCreateToken":"willEditToken",{tokenType:R.Z}),E();const te=A.lifespan&&parseInt(A.lifespan,10)&&A.lifespan!=="0"?parseInt(A.lifespan,10):null;try{const{data:{data:U}}=$?await fe("/admin/api-tokens",{...A,lifespan:te,permissions:A.type==="custom"?q.selectedActions:null}):await K(`/admin/api-tokens/${L}`,{name:A.name,description:A.description,type:A.type,permissions:A.type==="custom"?q.selectedActions:null});$&&(x.replace(`/settings/api-tokens/${U.id}`,{apiToken:U}),w("apiTokens.success")),f(),V({...U}),I({type:"success",message:c($?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),F.current($?"didCreateToken":"didEditToken",{type:O.type,tokenType:R.Z})}catch(U){const Te=(0,y.Iz)(U.response.data);G.setErrors(Te),U?.response?.data?.error?.message===Ve?I({type:"warning",message:U.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:U?.response?.data?.message||"notification.error"}),f()}},[Qe,ye]=(0,t.useState)(!1),_e={...q,onChange:({target:{value:A}})=>{ye(!0),b({type:"ON_CHANGE",value:A})},onChangeSelectAll:({target:{value:A}})=>{ye(!0),b({type:"SELECT_ALL_IN_PERMISSION",value:A})},setSelectedAction:({target:{value:A}})=>{b({type:"SET_SELECTED_ACTION",value:A})}},he=re&&!$||z&&$;return!$&&!O&&Ye!=="success"?t.createElement(ce,{apiTokenName:O?.name}):t.createElement(l,{value:_e},t.createElement(p.o,null,t.createElement(a.SL,{name:"API Tokens"}),t.createElement(r.J9,{validationSchema:me.fK,validateOnChange:!1,initialValues:{name:O?.name||"",description:O?.description||"",type:O?.type,lifespan:O?.lifespan?O.lifespan.toString():O?.lifespan},enableReinitialize:!0,onSubmit:(A,G)=>Xe(A,G)},({errors:A,handleChange:G,isSubmitting:te,values:U,setFieldValue:Te})=>(Qe&&U?.type!=="custom"&&Te("type","custom"),t.createElement(a.l0,null,t.createElement(Z.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:O,setToken:V,canEditInputs:he,canRegenerate:Ee,isSubmitting:te,regenerateUrl:"/admin/api-tokens/"}),t.createElement(i.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(O?.name)&&t.createElement(N.Z,{token:O?.accessKey,tokenType:R.Z}),t.createElement(Q,{errors:A,onChange:G,canEditInputs:he,isCreating:$,values:U,apiToken:O,onDispatch:b,setHasChangedPermissions:ye}),t.createElement(Ne,{disabled:!he||U?.type==="read-only"||U?.type==="full-access"}))))))))}},51352:(C,m,e)=>{"use strict";e.d(m,{IX:()=>a,fK:()=>s,mk:()=>P});var t=e(66115),p=e(77349),i=e(51991);const a=(n,d,l="en")=>{if(d&&typeof d=="number"){const g=d/24/60/60/1e3;return(0,t.Z)((0,p.Z)(new Date(n),g),"PPP",{locale:i[l]})}return"Unlimited"};var r=e(80120),u=e(87561);const s=u.Ry().shape({name:u.Z_(r.I0.string).max(100).required(r.I0.required),type:u.Z_(r.I0.string).oneOf(["read-only","full-access","custom"]).required(r.I0.required),description:u.Z_().nullable(),lifespan:u.Rx().integer().min(0).nullable().defined(r.I0.required)}),P=n=>{const d={allActionsIds:[],permissions:[]};return d.permissions=Object.keys(n).map(l=>({apiId:l,label:l.split("::")[1],controllers:Object.keys(n[l].controllers).map(g=>({controller:g,actions:n[l].controllers[g].map(y=>{const v=`${l}.${g}.${y}`;return l.includes("api::")&&d.allActionsIds.push(v),{action:y,actionId:v}}).flat()})).flat()})),d}},41848:C=>{function m(e,t,p,i){for(var o=e.length,a=p+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}C.exports=m},42118:(C,m,e)=>{var t=e(41848),p=e(62722),i=e(42351);function o(a,r,u){return r===r?i(a,r,u):t(a,p,u)}C.exports=o},74221:C=>{function m(e,t,p,i){for(var o=p-1,a=e.length;++o<a;)if(i(e[o],t))return o;return-1}C.exports=m},62722:C=>{function m(e){return e!==e}C.exports=m},65464:(C,m,e)=>{var t=e(29932),p=e(42118),i=e(74221),o=e(7518),a=e(278),r=Array.prototype,u=r.splice;function h(s,T,P,n){var d=n?i:p,l=-1,g=T.length,y=s;for(s===T&&(T=a(T)),P&&(y=t(s,o(P)));++l<g;)for(var v=0,R=T[l],Z=P?P(R):R;(v=d(y,Z,v,n))>-1;)y!==s&&u.call(y,v,1),u.call(s,v,1);return s}C.exports=h},42351:C=>{function m(e,t,p){for(var i=p-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}C.exports=m},97019:(C,m,e)=>{var t=e(5976),p=e(45604),i=t(p);C.exports=i},45604:(C,m,e)=>{var t=e(65464);function p(i,o){return i&&i.length&&o&&o.length?t(i,o):i}C.exports=p},13217:(C,m,e)=>{var t=e(14259);function p(i){var o=i==null?0:i.length;return o?t(i,1,o):[]}C.exports=p},48734:(C,m,e)=>{"use strict";e.d(m,{U:()=>n,y:()=>T});var t=e(85893),p=e(67294),i=e(71997),o=e(13819),a=e(2504),r=e(75515),u=e(11047),h=e(41580);const s=({theme:d,expanded:l,variant:g,disabled:y,error:v})=>v?`1px solid ${d.colors.danger600} !important`:y?`1px solid ${d.colors.neutral150}`:l?`1px solid ${d.colors.primary600}`:g==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,T=(0,i.ZP)(r.Z)``,P=(0,i.ZP)(h.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${T} {
      color: ${({theme:d,expanded:l})=>l?void 0:d.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:d,expanded:l})=>l?void 0:d.colors.primary600};
    }

    & > ${u.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,n=({children:d,disabled:l=!1,error:g,expanded:y=!1,hasErrorMessage:v=!0,id:R,onToggle:Z,toggle:N,size:S="M",variant:M="primary",shadow:B})=>{const D=(0,a.M)(R),H=p.useMemo(()=>({expanded:y,onToggle:Z,toggle:N,id:D,size:S,variant:M,disabled:l}),[l,y,D,Z,S,N,M]);return(0,t.jsxs)(o.S.Provider,{value:H,children:[(0,t.jsx)(P,{"data-strapi-expanded":y,disabled:l,"aria-disabled":l,expanded:y,hasRadius:!0,variant:M,error:g,shadow:B,children:d}),g&&v&&(0,t.jsx)(h.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:g})})]})}},63081:(C,m,e)=>{"use strict";e.d(m,{v:()=>o});var t=e(85893),p=e(13819),i=e(41580);const o=({children:a,...r})=>{const{expanded:u,id:h}=(0,p.A)();if(!u)return null;const s=`accordion-content-${h}`,T=`accordion-label-${h}`,P=`accordion-desc-${h}`;return(0,t.jsx)(i.x,{role:"region",id:s,"aria-labelledby":T,"aria-describedby":P,...r,children:a})}},13819:(C,m,e)=>{"use strict";e.d(m,{A:()=>i,S:()=>p});var t=e(67294);const p=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),i=()=>(0,t.useContext)(p)},74756:(C,m,e)=>{"use strict";e.d(m,{B:()=>d});var t=e(85893),p=e(12645),i=e(71997),o=e(48734),a=e(13819);const r=({expanded:l,disabled:g,variant:y})=>{let v="neutral100";return l?v="primary100":g?v="neutral150":y==="primary"&&(v="neutral0"),v};var u=e(39785),h=e(52624),s=e(11047),T=e(75515);const P=(0,i.ZP)(u.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:g})=>g?l.colors.primary600:l.colors.neutral500};
    }
  }
`,n=(0,i.ZP)(s.k)`
  min-height: ${({theme:l,size:g})=>l.sizes.accordions[g]};
  border-radius: ${({theme:l,expanded:g})=>g?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,d=({title:l,description:g,as:y="span",togglePosition:v="right",action:R,...Z})=>{const{onToggle:N,toggle:S,expanded:M,id:B,size:D,variant:H,disabled:W}=(0,a.A)(),Y=`accordion-content-${B}`,X=`accordion-label-${B}`,_=`accordion-desc-${B}`,Q=D==="M"?6:4,ne=D==="M"?Q:Q-2,le=r({expanded:M,disabled:W,variant:H}),de={as:y,fontWeight:D==="S"?"bold":void 0,id:X,textColor:M?"primary600":"neutral700",ellipsis:!0,variant:D==="M"?"delta":void 0},J=M?"primary600":"neutral600",ce=M?"primary200":"neutral200",se=D==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{W||(S&&!N?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),S()):N&&N())},oe=(0,t.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:M?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:W?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(h.J,{as:p.Z,width:D==="M"?`${11/16}rem`:`${8/16}rem`,color:M?"primary600":"neutral600"})});return(0,t.jsx)(n,{paddingBottom:ne,paddingLeft:Q,paddingRight:Q,paddingTop:ne,background:le,expanded:M,size:D,justifyContent:"space-between",cursor:W?"not-allowed":"",children:(0,t.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[v==="left"&&oe,(0,t.jsx)(P,{onClick:ae,"aria-disabled":W,"aria-expanded":M,"aria-controls":Y,"aria-labelledby":X,"data-strapi-accordion-toggle":!0,expanded:M,type:"button",flex:1,minWidth:0,...Z,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.y,{...de,children:l}),g&&(0,t.jsx)(T.Z,{as:"p",id:_,textColor:J,children:g})]})}),v==="right"&&(0,t.jsxs)(s.k,{gap:3,children:[oe,R]}),v==="left"&&R]})})}}}]);
