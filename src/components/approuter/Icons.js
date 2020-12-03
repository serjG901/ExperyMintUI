import React from "react";

export function AccountIcon() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      width="36"
      height="36"
    >
      <circle
        fill="white"
        stroke="white"
        strokeWidth="2"
        cx="18"
        cy="9"
        r="8"
      />
      <path
        d="M5 35 L5 28 L12 22 L24 22 L31 28 L31 35 Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <circle
        cx="11"
        cy="28"
        r="6"
        stroke="white"
        strokeWidth="2"
        fill="white"
      />
      <circle
        cx="25"
        cy="28"
        r="6"
        stroke="white"
        strokeWidth="2"
        fill="white"
      />
      <path
        d="M6 36 L6 29 L12 23 L24 23 L30 29 L30 36 Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}

export function GameIcon() {
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
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg
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
      <circle
        cx="30"
        cy="6"
        r="5"
        stroke="white"
        strokeWidth="2"
        fill="white"
      />
      <circle
        cx="30"
        cy="25"
        r="5"
        stroke="white"
        strokeWidth="2"
        fill="white"
      />
      <path
        d="M2 32 L2 6 L6 2 L30 2 L34 6 L34 25 L30 29 L6 29 L2 32 Z"
        fill="white"
      />
      <text fontFamily="sans-serif" fontWeight="bold" x="3" y="20" fill="black">
        #@!
      </text>
    </svg>
  );
}

export function QuitIcon() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      width="36"
      height="36"
    >
      <path d="M10 26 L26 10" stroke="white" strokeWidth="4" />
      <path d="M10 10 L26 26" stroke="white" strokeWidth="4" />
    </svg>
  );
}
