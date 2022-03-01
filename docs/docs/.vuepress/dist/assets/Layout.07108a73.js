var Ce=Object.defineProperty,xe=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var oe=(r,n,e)=>n in r?Ce(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,re=(r,n)=>{for(var e in n||(n={}))Te.call(n,e)&&oe(r,e,n[e]);if(se)for(var e of se(n))Be.call(n,e)&&oe(r,e,n[e]);return r},le=(r,n)=>xe(r,Se(n));import{e as C,H as ce,A as de,I as T,B as pe,f as b,r as F,o,n as y,w as S,d as L,g as s,a as p,t as N,G as R,j as w,C as ue,D as Ne,E as Me,q as $,T as ve,m as he,J as O,l as G,K as De,k as f,L as W,M as V,F as M,h as z,v as K,N as Ee,O as Pe,P as j,Q as me,R as fe,b as Re,S as _e,U as Oe,s as be,V as U,u as I,W as q,X as ze,Y as Ie,Z as Fe,_ as Ae}from"./app.13de8074.js";import{_ as E,a as He}from"./TentacleHome.d61f8182.js";import"./plugin-vue_export-helper.21dcd24c.js";const Ue=C({setup(r){const n=ce(),e=de(),u=T(),c=pe(),k=b(()=>u.value.home||n.value),_=b(()=>e.value.title),v=b(()=>c.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),t=()=>{if(!v.value)return null;const a=ue("img",{class:"logo",src:Ne(v.value),alt:_.value});return u.value.logoDark===void 0?a:ue(Me,a)};return(a,l)=>{const i=F("RouterLink");return o(),y(i,{to:s(k)},{default:S(()=>[L(t),s(_)?(o(),p("span",{key:0,class:R(["site-name",{"can-hide":s(v)}])},N(s(_)),3)):w("",!0)]),_:1},8,["to"])}}}),ge=C({setup(r){const n=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,c)=>(o(),y(ve,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:S(()=>[$(u.$slots,"default")]),_:3}))}}),We=["aria-label"],Ve={class:"title"},Ge=f("span",{class:"arrow down"},null,-1),Ke=["aria-label"],je={class:"title"},qe={class:"navbar-dropdown"},Xe={class:"navbar-dropdown-subtitle"},Ye={key:1},Je={class:"navbar-dropdown-subitem-wrapper"},Qe=C({props:{item:{type:Object,required:!0}},setup(r){const n=r,{item:e}=he(n),u=b(()=>e.value.ariaLabel||e.value.text),c=O(!1),k=G();De(()=>k.path,()=>{c.value=!1});const _=t=>{t.detail===0?c.value=!c.value:c.value=!1},v=(t,a)=>a[a.length-1]===t;return(t,a)=>(o(),p("div",{class:R(["navbar-dropdown-wrapper",{open:c.value}])},[f("button",{class:"navbar-dropdown-title",type:"button","aria-label":s(u),onClick:_},[f("span",Ve,N(s(e).text),1),Ge],8,We),f("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":s(u),onClick:a[0]||(a[0]=l=>c.value=!c.value)},[f("span",je,N(s(e).text),1),f("span",{class:R(["arrow",c.value?"down":"right"])},null,2)],8,Ke),L(ge,null,{default:S(()=>[W(f("ul",qe,[(o(!0),p(M,null,z(s(e).children,l=>(o(),p("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(o(),p(M,{key:0},[f("h4",Xe,[l.link?(o(),y(E,{key:0,item:l,onFocusout:i=>v(l,s(e).children)&&l.children.length===0&&(c.value=!1)},null,8,["item","onFocusout"])):(o(),p("span",Ye,N(l.text),1))]),f("ul",Je,[(o(!0),p(M,null,z(l.children,i=>(o(),p("li",{key:i.link,class:"navbar-dropdown-subitem"},[L(E,{item:i,onFocusout:d=>v(i,l.children)&&v(l,s(e).children)&&(c.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),y(E,{key:1,item:l,onFocusout:i=>v(l,s(e).children)&&(c.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[V,c.value]])]),_:1})],2))}}),ie=r=>decodeURI(r).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ze=(r,n)=>{if(n.hash===r)return!0;const e=ie(n.path),u=ie(r);return e===u},ke=(r,n)=>r.link&&Ze(r.link,n)?!0:r.children?r.children.some(e=>ke(e,n)):!1,Le=r=>!K(r)||/github\.com/.test(r)?"GitHub":/bitbucket\.org/.test(r)?"Bitbucket":/gitlab\.com/.test(r)?"GitLab":/gitee\.com/.test(r)?"Gitee":null,et={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},tt=({docsRepo:r,editLinkPattern:n})=>{if(n)return n;const e=Le(r);return e!==null?et[e]:null},nt=({docsRepo:r,docsBranch:n,docsDir:e,filePathRelative:u,editLinkPattern:c})=>{if(!u)return null;const k=tt({docsRepo:r,editLinkPattern:c});return k?k.replace(/:repo/,K(r)?r:`https://github.com/${r}`).replace(/:branch/,n).replace(/:path/,Ee(`${Pe(e)}/${u}`)):null},at={key:0,class:"navbar-items"},$e=C({setup(r){const n=()=>{const a=j(),l=ce(),i=de(),d=T();return b(()=>{var x,D;const m=Object.keys(i.value.locales);if(m.length<2)return[];const g=a.currentRoute.value.path,B=a.currentRoute.value.fullPath;return[{text:(x=d.value.selectLanguageText)!=null?x:"unknown language",ariaLabel:(D=d.value.selectLanguageAriaLabel)!=null?D:"unkown language",children:m.map(P=>{var J,Q,Z,ee,te,ne;const A=(Q=(J=i.value.locales)==null?void 0:J[P])!=null?Q:{},X=(ee=(Z=d.value.locales)==null?void 0:Z[P])!=null?ee:{},Y=`${A.lang}`,ye=(te=X.selectLanguageName)!=null?te:Y;let H;if(Y===i.value.lang)H=B;else{const ae=g.replace(l.value,P);a.getRoutes().some(we=>we.path===ae)?H=ae:H=(ne=X.home)!=null?ne:P}return{text:ye,link:H}})}]})},e=()=>{const a=T(),l=b(()=>a.value.repo),i=b(()=>l.value?Le(l.value):null),d=b(()=>l.value&&!K(l.value)?`https://github.com/${l.value}`:l.value),m=b(()=>d.value?a.value.repoLabel?a.value.repoLabel:i.value===null?"Source":i.value:null);return b(()=>!d.value||!m.value?[]:[{text:m.value,link:d.value}])},u=a=>me(a)?fe(a):a.children?le(re({},a),{children:a.children.map(u)}):a,k=(()=>{const a=T();return b(()=>(a.value.navbar||[]).map(u))})(),_=n(),v=e(),t=b(()=>[...k.value,..._.value,...v.value]);return(a,l)=>s(t).length?(o(),p("nav",at,[(o(!0),p(M,null,z(s(t),i=>(o(),p("div",{key:i.text,class:"navbar-item"},[i.children?(o(),y(Qe,{key:0,item:i},null,8,["item"])):(o(),y(E,{key:1,item:i},null,8,["item"]))]))),128))])):w("",!0)}}),st=["title"],ot={class:"icon",focusable:"false",viewBox:"0 0 32 32"},rt=Re('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),lt=[rt],ut={class:"icon",focusable:"false",viewBox:"0 0 32 32"},it=f("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),ct=[it],dt=C({setup(r){const n=T(),e=pe(),u=()=>{e.value=!e.value};return(c,k)=>(o(),p("button",{class:"toggle-dark-button",title:s(n).toggleDarkMode,onClick:u},[W((o(),p("svg",ot,lt,512)),[[V,!s(e)]]),W((o(),p("svg",ut,ct,512)),[[V,s(e)]])],8,st))}}),pt=["title"],vt=f("div",{class:"icon","aria-hidden":"true"},[f("span"),f("span"),f("span")],-1),ht=[vt],mt=C({emits:["toggle"],setup(r){const n=T();return(e,u)=>(o(),p("div",{class:"toggle-sidebar-button",title:s(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=c=>e.$emit("toggle"))},ht,8,pt))}}),ft=C({emits:["toggle-sidebar"],setup(r){const n=T(),e=O(null),u=O(null),c=O(0),k=b(()=>c.value?{maxWidth:c.value+"px"}:{}),_=b(()=>n.value.darkMode);_e(()=>{const a=v(e.value,"paddingLeft")+v(e.value,"paddingRight"),l=()=>{var i;window.innerWidth<=719?c.value=0:c.value=e.value.offsetWidth-a-(((i=u.value)==null?void 0:i.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function v(t,a){var d,m,g;const l=(g=(m=(d=t==null?void 0:t.ownerDocument)==null?void 0:d.defaultView)==null?void 0:m.getComputedStyle(t,null))==null?void 0:g[a],i=Number.parseInt(l,10);return Number.isNaN(i)?0:i}return(t,a)=>{const l=F("NavbarSearch");return o(),p("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(mt,{onToggle:a[0]||(a[0]=i=>t.$emit("toggle-sidebar"))}),f("span",{ref_key:"navbarBrand",ref:u},[L(Ue)],512),f("div",{class:"navbar-items-wrapper",style:Oe(s(k))},[$(t.$slots,"before"),L($e,{class:"can-hide"}),$(t.$slots,"after"),s(_)?(o(),y(dt,{key:0})):w("",!0),L(l)],4)],512)}}}),_t={class:"page-meta"},bt={key:0,class:"meta-item edit-link"},gt={key:1,class:"meta-item last-updated"},kt={class:"meta-item-label"},Lt={class:"meta-item-info"},$t={key:2,class:"meta-item contributors"},yt={class:"meta-item-label"},wt={class:"meta-item-info"},Ct=["title"],xt=be(", "),St=C({setup(r){const n=()=>{const t=T(),a=U(),l=I();return b(()=>{var D,P,A;if(!((P=(D=l.value.editLink)!=null?D:t.value.editLink)!=null?P:!0))return null;const{repo:d,docsRepo:m=d,docsBranch:g="main",docsDir:B="",editLinkText:h}=t.value;if(!m)return null;const x=nt({docsRepo:m,docsBranch:g,docsDir:B,filePathRelative:a.value.filePathRelative,editLinkPattern:(A=l.value.editLinkPattern)!=null?A:t.value.editLinkPattern});return x?{text:h!=null?h:"Edit this page",link:x}:null})},e=()=>{const t=T(),a=U(),l=I();return b(()=>{var m,g,B,h;return!((g=(m=l.value.lastUpdated)!=null?m:t.value.lastUpdated)!=null?g:!0)||!((B=a.value.git)==null?void 0:B.updatedTime)?null:new Date((h=a.value.git)==null?void 0:h.updatedTime).toLocaleString()})},u=()=>{const t=T(),a=U(),l=I();return b(()=>{var d,m,g,B;return((m=(d=l.value.contributors)!=null?d:t.value.contributors)!=null?m:!0)&&(B=(g=a.value.git)==null?void 0:g.contributors)!=null?B:null})},c=T(),k=n(),_=e(),v=u();return(t,a)=>{const l=F("ClientOnly");return o(),p("footer",_t,[s(k)?(o(),p("div",bt,[L(E,{class:"meta-item-label",item:s(k)},null,8,["item"])])):w("",!0),s(_)?(o(),p("div",gt,[f("span",kt,N(s(c).lastUpdatedText)+": ",1),L(l,null,{default:S(()=>[f("span",Lt,N(s(_)),1)]),_:1})])):w("",!0),s(v)&&s(v).length?(o(),p("div",$t,[f("span",yt,N(s(c).contributorsText)+": ",1),f("span",wt,[(o(!0),p(M,null,z(s(v),(i,d)=>(o(),p(M,{key:d},[f("span",{class:"contributor",title:`email: ${i.email}`},N(i.name),9,Ct),d!==s(v).length-1?(o(),p(M,{key:0},[xt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Tt={key:0,class:"page-nav"},Bt={class:"inner"},Nt={key:0,class:"prev"},Mt={key:1,class:"next"},Dt=C({setup(r){const n=t=>t===!1?null:me(t)?fe(t):ze(t)?t:!1,e=(t,a,l)=>{const i=t.findIndex(d=>d.link===a);if(i!==-1){const d=t[i+l];return(d==null?void 0:d.link)?d:null}for(const d of t)if(d.children){const m=e(d.children,a,l);if(m)return m}return null},u=I(),c=q(),k=G(),_=b(()=>{const t=n(u.value.prev);return t!==!1?t:e(c.value,k.path,-1)}),v=b(()=>{const t=n(u.value.next);return t!==!1?t:e(c.value,k.path,1)});return(t,a)=>s(_)||s(v)?(o(),p("nav",Tt,[f("p",Bt,[s(_)?(o(),p("span",Nt,[L(E,{item:s(_)},null,8,["item"])])):w("",!0),s(v)?(o(),p("span",Mt,[L(E,{item:s(v)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),Et={class:"page"},Pt={class:"theme-default-content"},Rt=C({setup(r){return(n,e)=>{const u=F("Content");return o(),p("main",Et,[$(n.$slots,"top"),f("div",Pt,[L(u)]),L(St),L(Dt),$(n.$slots,"bottom")])}}}),Ot={class:"sidebar-item-children"},zt=C({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(r){const n=r,{item:e,depth:u}=he(n),c=G(),k=j(),_=b(()=>ke(e.value,c)),v=b(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:_.value,collapsible:e.value.collapsible})),t=O(!0),a=O(void 0);return e.value.collapsible&&(t.value=_.value,a.value=()=>{t.value=!t.value},k.afterEach(()=>{t.value=_.value})),(l,i)=>{var m;const d=F("SidebarItem",!0);return o(),p("li",null,[s(e).link?(o(),y(E,{key:0,class:R(s(v)),item:s(e)},null,8,["class","item"])):(o(),p("p",{key:1,tabindex:"0",class:R(s(v)),onClick:i[0]||(i[0]=(...g)=>a.value&&a.value(...g)),onKeydown:i[1]||(i[1]=Ie((...g)=>a.value&&a.value(...g),["enter"]))},[be(N(s(e).text)+" ",1),s(e).collapsible?(o(),p("span",{key:0,class:R(["arrow",t.value?"down":"right"])},null,2)):w("",!0)],34)),((m=s(e).children)==null?void 0:m.length)?(o(),y(ge,{key:2},{default:S(()=>[W(f("ul",Ot,[(o(!0),p(M,null,z(s(e).children,g=>(o(),y(d,{key:`${s(u)}${g.text}${g.link}`,item:g,depth:s(u)+1},null,8,["item","depth"]))),128))],512),[[V,t.value]])]),_:1})):w("",!0)])}}}),It={key:0,class:"sidebar-items"},Ft=C({setup(r){const n=q();return(e,u)=>s(n).length?(o(),p("ul",It,[(o(!0),p(M,null,z(s(n),c=>(o(),y(zt,{key:c.link||c.text,item:c},null,8,["item"]))),128))])):w("",!0)}}),At={class:"sidebar"},Ht=C({setup(r){return(n,e)=>(o(),p("aside",At,[L($e),$(n.$slots,"top"),L(Ft),$(n.$slots,"bottom")]))}}),Kt=C({setup(r){const n=U(),e=I(),u=T(),c=b(()=>e.value.navbar!==!1&&u.value.navbar!==!1),k=q(),_=O(!1),v=h=>{_.value=typeof h=="boolean"?h:!_.value},t={x:0,y:0},a=h=>{t.x=h.changedTouches[0].clientX,t.y=h.changedTouches[0].clientY},l=h=>{const x=h.changedTouches[0].clientX-t.x,D=h.changedTouches[0].clientY-t.y;Math.abs(x)>Math.abs(D)&&Math.abs(x)>40&&(x>0&&t.x<=80?v(!0):v(!1))},i=b(()=>[{"no-navbar":!c.value,"no-sidebar":!k.value.length,"sidebar-open":_.value},e.value.pageClass]);let d;_e(()=>{d=j().afterEach(()=>{v(!1)})}),Fe(()=>{d()});const m=Ae(),g=m.resolve,B=m.pending;return(h,x)=>(o(),p("div",{class:R(["theme-container",s(i)]),onTouchstart:a,onTouchend:l},[$(h.$slots,"navbar",{},()=>[s(c)?(o(),y(ft,{key:0,onToggleSidebar:v},{before:S(()=>[$(h.$slots,"navbar-before")]),after:S(()=>[$(h.$slots,"navbar-after")]),_:3})):w("",!0)]),f("div",{class:"sidebar-mask",onClick:x[0]||(x[0]=D=>v(!1))}),$(h.$slots,"sidebar",{},()=>[L(Ht,null,{top:S(()=>[$(h.$slots,"sidebar-top")]),bottom:S(()=>[$(h.$slots,"sidebar-bottom")]),_:3})]),$(h.$slots,"page",{},()=>[s(e).home?(o(),y(He,{key:0})):(o(),y(ve,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(g),onBeforeLeave:s(B)},{default:S(()=>[(o(),y(Rt,{key:s(n).path},{top:S(()=>[$(h.$slots,"page-top")]),bottom:S(()=>[$(h.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{Kt as default};
