import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";

export default function LogoText() {
  const themeColor = useTheme();
  const [style, setStyle] = useState(
    `AppFontFamilyen
    opacity-0
    transition-all 
    duration-1000
    text-5xl 
    font-bold
    ${themeColor.colorTextLogo} 
    `
  );

  function animation() {
    setStyle(
      `AppFontFamilyen
      opacity-100
      transition-all 
      duration-1000
      text-5xl 
      font-bold
      ${themeColor.colorTextLogo} 
      `
    );
  }

  useEffect(() => {
    animation();
  });

  return <p className={style}>ExperyMint</p>;
}
