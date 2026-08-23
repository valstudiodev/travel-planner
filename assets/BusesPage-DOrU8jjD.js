import{a as e,l as t}from"./index-WBu2V70S.js";import{n,t as r}from"./buses-BwO0BApu.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./Subtitle-C_r-5Wyu.js";import{t as u}from"./NextButton-DoFZRNec.js";var d=t();function f({busId:t,isSelected:n=!1}){let r=i();return(0,d.jsx)(`button`,{type:`button`,className:`select-bus-button
       rounded-xl px-4 py-1 cursor-pointer
      transition-all duration-300 text-surface 
      ${n?`bg-text-muted`:`bg-primary`}`,"aria-pressed":n,onClick:()=>r(e(t)),children:n?`Selected`:` Select`})}function p({buses:e,className:t}){let r=s(e=>e.trip.selectedBusIds);return(0,d.jsx)(`ul`,{className:`bus-list ${t}`,children:e.map(e=>{let t=r.includes(e.id);return(0,d.jsx)(`li`,{className:`bus-list__item`,children:(0,d.jsx)(n,{bus:e,variant:`default`,action:(0,d.jsx)(f,{busId:e.id,isSelected:t})})},e.id)})})}function m(){console.log(`---Buses page render---`);let e=s(e=>e.trip.selectedBusIds).length>0;return(0,d.jsx)(`section`,{className:`buses-page\r
    py-10`,children:(0,d.jsx)(a,{children:(0,d.jsxs)(`div`,{className:`buses-page__inner\r
        bg-text-muted \r
          rounded`,children:[(0,d.jsx)(o,{}),(0,d.jsxs)(`div`,{className:`buses-page__body  p-10`,children:[(0,d.jsx)(c,{className:`text-surface\r
          text-5xl text-center mb-5`,title:`Choose your bus`}),(0,d.jsx)(l,{className:`text-surface\r
              text-4xl text-center mb-5`,children:`Select one or more options`}),(0,d.jsx)(p,{buses:r,className:`grid grid-cols-2 gap-5\r
              mb-10 max-[675px]:grid-cols-1`}),(0,d.jsx)(u,{to:`/hotel-page`,className:`px-6 py-2\r
                rounded`,disabled:!e,children:`Continue to Hotels`})]})]})})})}export{m as default};