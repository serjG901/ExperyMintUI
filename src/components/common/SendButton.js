import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function SendButton({ children }) {
  const themeColor = useTheme();
  const language = useLanguage();

  const [style, setStyle] = useState(
    `
    shadow-none bg-transparent
    transition-all duration-1000
    mb-4 mx-4 py-2 px-4 
    rounded cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    ${themeColor.colorTextMain}
    `
  );

  function animation() {
    setStyle(
      `
      shadow-md bg-transparent
      transition-all duration-1000
      mb-4 mx-4 py-2 px-4 
      rounded cursor-pointer
      focus:outline-none 
      focus:shadow-outline
      ${themeColor.colorTextMain} 
      ${themeColor.bgButton} 
      ${themeColor.hbgButton}
      `
    );
  }

  useEffect(() => animation());

  return (
    <button className={style} type="submit">
      {children ? children : language.sendButtonDefault}
    </button>
  );
}
