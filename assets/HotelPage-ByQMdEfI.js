import{r as e,t}from"./index-BV1rQkTh.js";import{i as n,n as r,r as i,t as a}from"./Subtitle-B9MW43U0.js";import{t as o}from"./NextButton-5QumgxiH.js";import{n as s,r as c,t as l}from"./HotelCard-CIXHxfaS.js";var u=t();function d({hotelId:e,isSelected:t=!1,onSelect:n}){return(0,u.jsx)(`button`,{type:`button`,className:`select-bus-button
       rounded-xl px-4 py-1
      cursor-pointer hover:bg-primary-hover
      transition-all duration-300 text-surface ${t?`bg-text-muted`:`bg-primary`}`,"aria-pressed":t,onClick:()=>{n(e)},children:t?`Selected`:` Select`})}function f({hotels:e,selectedHotelId:t,onSelect:n,className:r=``}){return(0,u.jsx)(`ul`,{className:`hotel-list ${r}`,children:e.map(e=>{let r=t.includes(e.id);return(0,u.jsx)(`li`,{children:(0,u.jsx)(l,{hotel:e,action:(0,u.jsx)(d,{hotelId:e.id,isSelected:r,onSelect:n})})},e.id)})})}function p(){console.log(`---Hotel page render---`);let{selectedHotelIds:t,onSelectHotel:l}=e(),d=t.length>0;return(0,u.jsx)(`section`,{className:`hotel-page\r
    py-10`,children:(0,u.jsx)(n,{className:`hotel-page__container`,children:(0,u.jsxs)(`div`,{className:`hotel-page__inner \r
        bg-text-muted `,children:[(0,u.jsx)(r,{}),(0,u.jsxs)(`div`,{className:`hotel-page__body p-5`,children:[(0,u.jsx)(i,{title:`Choose your hotel`,className:`text-surface\r
              text-5xl text-center mb-5`}),(0,u.jsx)(a,{className:`text-surface\r
              text-4xl text-center mb-5`,children:`Choose one or more options`}),(0,u.jsx)(f,{hotels:c,selectedHotelId:t,onSelect:l,className:`grid grid-cols-2 gap-5\r
              mb-10`}),(0,u.jsxs)(`div`,{className:`hotel-page__actions\r
            flex items-center gap-5 justify-between`,children:[(0,u.jsx)(s,{direction:-1,className:`bg-success px-6 py-2 rounded text-surface\r
                hover:bg-green-700 transition-all duration-300 cursor-pointer`,children:`Back`}),(0,u.jsx)(o,{to:`/summary-page`,className:`bg-primary px-6 py-2\r
              rounded text-white`,disabled:!d,children:`Continue to summary`})]})]})]})})})}export{p as default};