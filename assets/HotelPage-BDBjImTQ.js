import{l as e,o as t}from"./index-WBu2V70S.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./Subtitle-C_r-5Wyu.js";import{t as c}from"./NextButton-DoFZRNec.js";import{n as l,r as u,t as d}from"./HotelCard-Cdo2g4BI.js";var f=e();function p({hotelId:e,isSelected:r=!1}){let i=n();return(0,f.jsx)(`button`,{type:`button`,className:`select-bus-button
       rounded-xl px-4 py-1 cursor-pointer 
      transition-all duration-300 text-surface 
      ${r?`bg-text-muted`:`bg-primary`}`,"aria-pressed":r,onClick:()=>i(t(e)),children:r?`Selected`:` Select`})}function m({hotels:e,className:t=``}){console.log(`---Hotel list render---`);let n=a(e=>e.trip.selectedHotelIds);return(0,f.jsx)(`ul`,{className:`hotel-list ${t}`,children:e.map(e=>{let t=n.includes(e.id);return(0,f.jsx)(`li`,{children:(0,f.jsx)(d,{hotel:e,action:(0,f.jsx)(p,{hotelId:e.id,isSelected:t})})},e.id)})})}function h(){console.log(`---Hotel page render---`);let e=a(e=>e.trip.selectedHotelIds).length>0;return(0,f.jsx)(`section`,{className:`hotel-page\r
    py-10`,children:(0,f.jsx)(r,{className:`hotel-page__container`,children:(0,f.jsxs)(`div`,{className:`hotel-page__inner \r
        bg-text-muted `,children:[(0,f.jsx)(i,{}),(0,f.jsxs)(`div`,{className:`hotel-page__body p-5`,children:[(0,f.jsx)(o,{title:`Choose your hotel`,className:`text-surface\r
              text-5xl text-center mb-5`}),(0,f.jsx)(s,{className:`text-surface\r
              text-4xl text-center mb-5`,children:`Choose one or more options`}),(0,f.jsx)(m,{hotels:u,className:`grid grid-cols-2 max-[750px]:grid-cols-1 gap-5\r
              mb-10`}),(0,f.jsxs)(`div`,{className:`hotel-page__actions\r
            flex items-center gap-5 justify-between`,children:[(0,f.jsx)(l,{direction:-1,className:`px-6 py-2 rounded text-surface\r
                 transition-all duration-300 cursor-pointer`,children:`Back`}),(0,f.jsx)(c,{to:`/summary-page`,className:`bg-primary px-6 py-2\r
              rounded text-white`,disabled:!e,children:`Continue to summary`})]})]})]})})})}export{h as default};