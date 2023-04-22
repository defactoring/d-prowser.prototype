(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{81:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(9086)}])},9086:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var i=t(5944),a=t(7294),n=t(91),s=t(7722),o=t(1163),l=t(3366),c=t(7462),u=t(6010),d=t(4780),f=t(917),h=t(8216),v=t(7623),m=t(1496),k=t(1588),p=t(4867);function g(r){return(0,p.Z)("MuiCircularProgress",r)}(0,k.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var Z=t(5893);let x=["className","color","disableShrink","size","style","thickness","value","variant"],y=r=>r,w,P,_,b,C=(0,f.F4)(w||(w=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,f.F4)(P||(P=y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),N=r=>{let{classes:e,variant:t,color:i,disableShrink:a}=r,n={root:["root",t,`color${(0,h.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,h.Z)(t)}`,a&&"circleDisableShrink"]};return(0,d.Z)(n,g,e)},D=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,h.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>(0,c.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>"indeterminate"===r.variant&&(0,f.iv)(_||(_=y`
      animation: ${0} 1.4s linear infinite;
    `),C)),M=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),$=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.circle,e[`circle${(0,h.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>(0,c.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,f.iv)(b||(b=y`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)),E=a.forwardRef(function(r,e){let t=(0,v.Z)({props:r,name:"MuiCircularProgress"}),{className:i,color:a="primary",disableShrink:n=!1,size:s=40,style:o,thickness:d=3.6,value:f=0,variant:h="indeterminate"}=t,m=(0,l.Z)(t,x),k=(0,c.Z)({},t,{color:a,disableShrink:n,size:s,thickness:d,value:f,variant:h}),p=N(k),g={},y={},w={};if("determinate"===h){let r=2*Math.PI*((44-d)/2);g.strokeDasharray=r.toFixed(3),w["aria-valuenow"]=Math.round(f),g.strokeDashoffset=`${((100-f)/100*r).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,Z.jsx)(D,(0,c.Z)({className:(0,u.Z)(p.root,i),style:(0,c.Z)({width:s,height:s},y,o),ownerState:k,ref:e,role:"progressbar"},w,m,{children:(0,Z.jsx)(M,{className:p.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,Z.jsx)($,{className:p.circle,style:g,ownerState:k,cx:44,cy:44,r:(44-d)/2,fill:"none",strokeWidth:d})})}))});var R=function(){var r=(0,s.aC)(),e=r.loading,t=r.user,l=(0,o.useRouter)().push;return((0,a.useEffect)(function(){e||null===t||l("/")},[e,t]),e||null!==t)?(0,i.tZ)(E,{}):(0,i.tZ)(n.cL,{})}}},function(r){r.O(0,[18,54,91,774,888,179],function(){return r(r.s=81)}),_N_E=r.O()}]);