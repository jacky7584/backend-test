"use strict";(self.webpackChunkcmhomes_api=self.webpackChunkcmhomes_api||[]).push([[9460],{93084:(L,g,t)=>{t.r(g),t.d(g,{default:()=>H});var e=t(67294),i=t(14087),v=t(185),f=t(53979),E=t(49066),y=t(29728),o=t(41580),h=t(11047),p=t(75515),B=t(11276),x=t(67819),O=t(40619),s=t(82562),n=t(80120),d=t(85018),r=t(41054),l=t(86896),c=t(88767),M=t(84419),a=t(99688);const R=async()=>{const{get:u}=(0,n.tg)(),{data:S}=await u("/users-permissions/advanced");return S},T=u=>{const{put:S}=(0,n.tg)();return S("/users-permissions/advanced",u)},z=[{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,a.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,a.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,a.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,a.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var j=t(87561);const C=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=j.Ry().shape({email_confirmation_redirection:j.nK().when("email_confirmation",{is:!0,then:j.Z_().matches(C).required(),otherwise:j.Z_().nullable()}),email_reset_password:j.Z_(n.I0.string).matches(C,n.I0.regex).nullable()}),N=()=>e.createElement(n.O4,{permissions:M._.readAdvancedSettings},e.createElement(U,null)),U=()=>{const{formatMessage:u}=(0,l.Z)(),S=(0,n.lm)(),{lockApp:K,unlockApp:F}=(0,n.o1)(),{notifyStatus:G}=(0,i.G)(),$=(0,c.useQueryClient)();(0,n.go)();const{isLoading:Q,allowedActions:{canUpdate:D}}=(0,n.ss)({update:M._.updateAdvancedSettings}),{status:X,data:I}=(0,c.useQuery)("advanced",()=>R(),{onSuccess(){G(u({id:(0,a.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){S({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}})}}),J=Q||X!=="success",w=(0,c.useMutation)(b=>T(b),{async onSuccess(){await $.invalidateQueries("advanced"),S({type:"success",message:{id:(0,a.OB)("notification.success.saved"),defaultMessage:"Saved"}}),F()},onError(){S({type:"warning",message:{id:(0,a.OB)("notification.error"),defaultMessage:"An error occured"}}),F()},refetchActive:!0}),{isLoading:V}=w,Y=async b=>{K();const A=b.email_confirmation?b.email_confirmation_redirection:"";await w.mutateAsync({...b,email_confirmation_redirection:A})};return J?e.createElement(v.o,{"aria-busy":"true"},e.createElement(n.SL,{name:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(f.T,{title:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(E.D,null,e.createElement(n.dO,null))):e.createElement(v.o,{"aria-busy":V},e.createElement(n.SL,{name:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(r.J9,{onSubmit:Y,initialValues:I.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0},({errors:b,values:A,handleChange:Z,isSubmitting:k,dirty:q})=>e.createElement(n.l0,null,e.createElement(f.T,{title:u({id:(0,a.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(y.z,{loading:k,type:"submit",disabled:D?!q:!D,startIcon:e.createElement(d.Z,null),size:"S"},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(E.D,null,e.createElement(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(p.Z,{variant:"delta",as:"h2"},u({id:"global.settings",defaultMessage:"Settings"})),e.createElement(B.r,{gap:6},e.createElement(x.P,{col:6,s:12},e.createElement(O.P,{label:u({id:(0,a.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:A.default_role,hint:u({id:(0,a.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:m=>Z({target:{name:"default_role",value:m}})},I.roles.map(m=>e.createElement(s.W,{key:m.type,value:m.type},m.name)))),z.map(m=>{let P=A[m.name];return P||(P=m.type==="bool"?!1:""),e.createElement(x.P,{key:m.name,...m.size},e.createElement(n.jm,{...m,value:P,error:b[m.name],disabled:m.name==="email_confirmation_redirection"&&A.email_confirmation===!1,onChange:Z}))}))))))))},H=N},99688:(L,g,t)=>{t.d(g,{YX:()=>f,OB:()=>E.Z});var e=t(41609),i=t.n(e);const f=y=>Object.keys(y).reduce((o,h)=>{const p=y[h].controllers,B=Object.keys(p).reduce((x,O)=>(i()(p[O])||(x[O]=p[O]),x),{});return i()(B)||(o[h]={controllers:B}),o},{});var E=t(97961)},49066:(L,g,t)=>{t.d(g,{D:()=>v});var e=t(85893),i=t(41580);const v=({children:f})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:f})},53979:(L,g,t)=>{t.d(g,{T:()=>B});var e=t(85893),i=t(67294),v=t(71997);const f=s=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(!0),l=([c])=>{r(c.isIntersecting)};return(0,i.useEffect)(()=>{const c=n.current,M=new IntersectionObserver(l,s);return c&&M.observe(n.current),()=>{c&&M.disconnect()}},[n,s]),[n,d]};var E=t(79698);const y=(s,n)=>{const d=(0,E.W)(n);(0,i.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(s)?s.forEach(l=>{l.current&&r.observe(l.current)}):s.current&&r.observe(s.current),()=>{r.disconnect()}},[s,d])};var o=t(41580),h=t(11047),p=t(75515);const B=s=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(null),[l,c]=f({root:null,rootMargin:"0px",threshold:0});return y(l,()=>{l.current&&r(l.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:l,children:c&&(0,e.jsx)(O,{ref:n,...s})}),!c&&(0,e.jsx)(O,{...s,sticky:!0,width:d?.width})]})};B.displayName="HeaderLayout";const x=(0,v.ZP)(o.x)`
  width: ${({width:s})=>s?`${s/16}rem`:void 0};
  z-index: ${({theme:s})=>s.zIndices[1]};
`,O=i.forwardRef(({navigationAction:s,primaryAction:n,secondaryAction:d,subtitle:r,title:l,sticky:c,width:M,...a},R)=>{const T=typeof r=="string";return c?(0,e.jsx)(x,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{children:[s&&(0,e.jsx)(o.x,{paddingRight:3,children:s}),(0,e.jsxs)(o.x,{children:[(0,e.jsx)(p.Z,{variant:"beta",as:"h1",...a,children:l}),T?(0,e.jsx)(p.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(h.k,{children:n?(0,e.jsx)(o.x,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(o.x,{ref:R,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(o.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(h.k,{justifyContent:"space-between",children:[(0,e.jsxs)(h.k,{minWidth:0,children:[(0,e.jsx)(p.Z,{as:"h1",variant:"alpha",...a,children:l}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),n]}),T?(0,e.jsx)(p.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},185:(L,g,t)=>{t.d(g,{o:()=>E});var e=t(85893),i=t(71997),v=t(41580);const f=(0,i.ZP)(v.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:y="main-content-title",...o})=>(0,e.jsx)(f,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...o})}}]);
