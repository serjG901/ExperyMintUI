import React from "react";
export default function GameIcon(){
  return (
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  className="inline-block"
  width="36"
  height="36"
>
  <circle cx="18" cy="9" r="9" fill="rgba(255,255,0,0.5)" />
  <circle cx="9" cy="18" r="9" fill="rgba(0,255,0,0.5)" />
  <circle cx="18" cy="27" r="9" fill="rgba(255,0,0,0.5)" />
  <circle cx="27" cy="18" r="9" fill="rgba(0,0,255,0.5)" />
  <circle cx="9" cy="18" r="9" fill="rgba(0,255,0,0.5)" />
  <circle cx="18" cy="9" r="9" fill="rgba(255,255,0,0.5)" />
  <circle cx="27" cy="18" r="9" fill="rgba(0,0,255,0.5)" />
  <circle cx="18" cy="27" r="9" fill="rgba(255,0,0,0.5)" />
  <circle
    cx="18"
    cy="18"
    r="15"
    stroke="white"
    strokeWidth="6"
    fill="rgba(255,255,255,0)"
  />
</svg>)
}
