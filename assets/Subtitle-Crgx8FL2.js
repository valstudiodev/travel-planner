import{n as e,t}from"./index-BWEeN95A.js";var n=t();function r({children:e,className:t}){return(0,n.jsx)(`article`,{className:`
      bus-card bg-bg
      text-text text-xl rounded
      p-4 border-primary border-2
       items-end gap-10 justify-between 
      ${t}
      `,children:e})}function i({id:e,isSelected:t,onSelect:r,className:i,...a}){let o=()=>{r(e)};return(0,n.jsx)(`button`,{...a,className:`select-button ${i}`,"aria-pressed":t,onClick:o,children:t?`Selected`:`Select`})}function a({maxWidth:e=1280,className:t=``,children:r,...i}){return(0,n.jsx)(`div`,{...i,className:`container mx-auto px-3.75 ${t}`,style:{...i.style,maxWidth:e},children:r})}function o({title:e,className:t}){return(0,n.jsx)(`h1`,{className:t,children:e})}function s({to:t,children:r,className:i=``,...a}){let o=e(),s=()=>{o(t)};return(0,n.jsx)(`button`,{...a,className:`button-next ${i}`,onClick:s,children:r})}function c(){return(0,n.jsx)(`header`,{className:`header-page bg-surface \r
      py-5 px-3 text-2xl`,children:(0,n.jsx)(`h2`,{children:`TravelPlanner`})})}function l({children:e,className:t}){return(0,n.jsx)(`h3`,{className:`subtitle ${t}`,children:e})}export{a,o as i,c as n,i as o,s as r,r as s,l as t};