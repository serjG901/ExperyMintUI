import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";

export default function LogoText() {
  const themeColor = useTheme();
  const style = `
    AppFontFamilyen
    transition-all 
    duration-1000
    text-5xl 
    font-bold
    ${themeColor.colorTextLogo} 
    `;
  const [addStyle, setAddStyle] = useState(`opacity-0`);

  useEffect(() => {
    setAddStyle(`opacity-100`);
  }, []);

  return <p className={`${style} ${addStyle}`}>ExperyMint</p>;
}
