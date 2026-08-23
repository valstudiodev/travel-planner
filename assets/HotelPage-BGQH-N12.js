import{n as e}from"./index-BEgovTU8.js";import{a as t,i as n,n as r,r as i,t as a}from"./Subtitle-Dtiq7D60.js";import{t as o}from"./NextButton-DsWQkzWN.js";import{n as s,r as c,t as l}from"./HotelCard-CbxoCPsw.js";var u=e();function d({hotelId:e,isSelected:n=!1}){let{dispatch:r}=t();return(0,u.jsx)(`button`,{type:`button`,className:`select-bus-button
       rounded-xl px-4 py-1
      cursor-pointer hover:bg-primary-hover
      transition-all duration-300 text-surface ${n?`bg-text-muted`:`bg-primary`}`,"aria-pressed":n,onClick:()=>{r({type:`TOGGLE_HOTEL`,payload:e})},children:n?`Selected`:` Select`})}function f({hotels:e,className:n=``}){console.log(`---Hotel list render---`);let{state:r}=t();return(0,u.jsx)(`ul`,{className:`hotel-list ${n}`,children:e.map(e=>{let t=r.selectedHotelIds.includes(e.id);return(0,u.jsx)(`li`,{children:(0,u.jsx)(l,{hotel:e,action:(0,u.jsx)(d,{hotelId:e.id,isSelected:t})})},e.id)})})}function p(){console.log(`---Hotel page render---`);let{state:e}=t(),l=e.selectedHotelIds.length>0;return(0,u.jsx)(`section`,{className:`hotel-page\r
    py-10`,children:(0,u.jsx)(n,{className:`hotel-page__container`,children:(0,u.jsxs)(`div`,{className:`hotel-page__inner \r
        bg-text-muted `,children:[(0,u.jsx)(r,{}),(0,u.jsxs)(`div`,{className:`hotel-page__body p-5`,children:[(0,u.jsx)(i,{title:`Choose your hotel`,className:`text-surface\r
              text-5xl text-center mb-5`}),(0,u.jsx)(a,{className:`text-surface\r
              text-4xl text-center mb-5`,children:`Choose one or more options`}),(0,u.jsx)(f,{hotels:c,className:`grid grid-cols-2 gap-5\r
              mb-10`}),(0,u.jsxs)(`div`,{className:`hotel-page__actions\r
            flex items-center gap-5 justify-between`,children:[(0,u.jsx)(s,{direction:-1,className:`bg-success px-6 py-2 rounded text-surface\r
                hover:bg-green-700 transition-all duration-300 cursor-pointer`,children:`Back`}),(0,u.jsx)(o,{to:`/summary-page`,className:`bg-primary px-6 py-2\r
              rounded text-white`,disabled:!l,children:`Continue to summary`})]})]})]})})})}export{p as default};