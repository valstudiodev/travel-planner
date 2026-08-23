import{n as e}from"./index-BEgovTU8.js";import{n as t,t as n}from"./buses-CmXKmiTz.js";import{a as r,i,n as a,r as o,t as s}from"./Subtitle-Dtiq7D60.js";import{t as c}from"./NextButton-DsWQkzWN.js";var l=e();function u({busId:e,isSelected:t=!1}){let{dispatch:n}=r();return(0,l.jsx)(`button`,{type:`button`,className:`select-bus-button
       rounded-xl px-4 py-1
      cursor-pointer hover:bg-primary-hover
      transition-all duration-300 text-surface ${t?`bg-text-muted`:`bg-primary`}`,"aria-pressed":t,onClick:()=>{n({type:`TOGGLE_BUS`,payload:e})},children:t?`Selected`:` Select`})}function d({buses:e,className:n}){let{state:i}=r();return(0,l.jsx)(`ul`,{className:`bus-list ${n}`,children:e.map(e=>{let n=i.selectedBusIds.includes(e.id);return(0,l.jsx)(`li`,{className:`bus-list__item`,children:(0,l.jsx)(t,{bus:e,variant:`default`,action:(0,l.jsx)(u,{busId:e.id,isSelected:n})})},e.id)})})}function f(){console.log(`---Buses page render---`);let{state:e}=r(),t=e.selectedBusIds.length>0;return(0,l.jsx)(`section`,{className:`buses-page\r
    py-10`,children:(0,l.jsx)(i,{children:(0,l.jsxs)(`div`,{className:`buses-page__inner\r
        bg-text-muted \r
          rounded`,children:[(0,l.jsx)(a,{}),(0,l.jsxs)(`div`,{className:`buses-page__body  p-10`,children:[(0,l.jsx)(o,{className:`text-surface\r
          text-5xl text-center mb-5`,title:`Choose your bus`}),(0,l.jsx)(s,{className:`text-surface\r
              text-4xl text-center mb-5`,children:`Select one or more options`}),(0,l.jsx)(d,{buses:n,className:`grid grid-cols-2 gap-5\r
              mb-10 max-[675px]:grid-cols-1`}),(0,l.jsx)(c,{to:`/hotel-page`,className:`bg-primary px-6 py-2\r
          rounded text-white`,disabled:!t,children:`Continue to Hotels`})]})]})})})}export{f as default};