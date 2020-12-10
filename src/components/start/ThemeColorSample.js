import React, { useEffect, useState } from "react";
import { themeColorStyle, useThemeSet } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function ThemeColorSample({ color, children }) {
  const setThemeColor = useThemeSet();
  const language = useLanguage();

  const style = `
    delay-1000
    transition-all 
    duration-1000
    h-6 
    w-6 
    cursor-pointer
    ${themeColorStyle[color].sample}
  `;
  const [addStyle, setAddStyle] = useState(`absolute`);

  useEffect(() => {
    const timeoutId = setTimeout(() => setAddStyle(`flex-1`), 1000);
    return () => clearTimeout(timeoutId);
  },[]);

  return (
    <div
      title={`${language.colorSetterSample[1]} ${language.themeName[color]} ${language.colorSetterSample[2]}`}
      className={`${style} ${addStyle}`}
      onClick={() => setThemeColor(color)}
    >
      {children}
    </div>
  );
}
