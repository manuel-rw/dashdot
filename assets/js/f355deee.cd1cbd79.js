"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[647],{4591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="General",d={unversionedId:"config/general",id:"config/general",title:"General",description:"DASHDOT_PORT",source:"@site/docs/config/general.md",sourceDirName:"config",slug:"/config/general",permalink:"/docs/config/general",draft:!1,editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/config/general.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration Options",permalink:"/docs/config/"},next:{title:"Server Widget",permalink:"/docs/config/server"}},s={},c=[{value:"<code>DASHDOT_PORT</code>",id:"dashdot_port",level:2},{value:"<code>DASHDOT_WIDGET_LIST</code>",id:"dashdot_widget_list",level:2},{value:"<code>DASHDOT_ACCEPT_OOKLA_EULA</code>",id:"dashdot_accept_ookla_eula",level:2},{value:"<code>DASHDOT_USE_IMPERIAL</code>",id:"dashdot_use_imperial",level:2},{value:"<code>DASHDOT_DISABLE_INTEGRATIONS</code>",id:"dashdot_disable_integrations",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general"},"General"),(0,o.kt)("h2",{id:"dashdot_port"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_PORT")),(0,o.kt)("p",null,"The port where the express backend is running (the backend serves the frontend, so it is the same port for both)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"number")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"3001"))),(0,o.kt)("h2",{id:"dashdot_widget_list"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_WIDGET_LIST")),(0,o.kt)("p",null,"Change the order of the elements in the list, to change the position on the page, or remove an item from the list, to remove it from the page (The available options are: ",(0,o.kt)("inlineCode",{parentName:"p"},"os"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ram"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"network"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gpu"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"os,cpu,storage,ram,network"))),(0,o.kt)("h2",{id:"dashdot_accept_ookla_eula"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_ACCEPT_OOKLA_EULA")),(0,o.kt)("p",null,"Use the newer and more accurate ",(0,o.kt)("inlineCode",{parentName:"p"},"speedtest")," tool from Ookla, instead of the old ",(0,o.kt)("inlineCode",{parentName:"p"},"speedtest-cli")," for your speedtests.\nWhen passing this flag, you accept Ooklas: ",(0,o.kt)("a",{parentName:"p",href:"https://www.speedtest.net/about/eula"},"EULA"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.speedtest.net/about/terms"},"TERMS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.speedtest.net/about/privacy"},"PRIVACY"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("h2",{id:"dashdot_use_imperial"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_USE_IMPERIAL")),(0,o.kt)("p",null,"Shows any units in the imperial system, instead of the default metric"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("h2",{id:"dashdot_disable_integrations"},(0,o.kt)("inlineCode",{parentName:"h2"},"DASHDOT_DISABLE_INTEGRATIONS")),(0,o.kt)("p",null,"Disables support for integrations. This does two things: disable CORS and disable open API endpoints."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);