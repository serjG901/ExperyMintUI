import React from "react";
export default function ChatIcon(){
  return (<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  className="inline-block"
  width="36"
  height="36"
>
  <path
    d="M1 34 L1 6 L6 1 L30 1 L35 6 L35 24 L30 30 L7 30 L1 34 Z"
    fill="white"
    stroke="white"
    strokeWidth="2"
  />
  <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="2" fill="white" />
  <circle cx="30" cy="6" r="5" stroke="white" strokeWidth="2" fill="white" />
  <circle cx="30" cy="25" r="5" stroke="white" strokeWidth="2" fill="white" />
  <path
    d="M2 32 L2 6 L6 2 L30 2 L34 6 L34 25 L30 29 L6 29 L2 32 Z"
    fill="white"
  />
  <text
    fontFamily="sans-serif" fontWeight="bold"
    x="3"
    y="20"
    fill="black"
  >
    #@!
  </text>
</svg>)
}
