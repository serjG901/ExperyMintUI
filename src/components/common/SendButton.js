import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function SendButton({ ...props }) {
  const themeColor = useTheme();
  const language = useLanguage();

  const style = `
  transition-all duration-1000
  mb-4 mx-4 py-2 px-4 
  rounded cursor-pointer
  focus:outline-none 
  focus:shadow-outline
  ${themeColor.colorTextMain}
  `;

  const [addStyle, setAddStyle] = useState(`shadow-none bg-transparent`);

  function animation() {
    setAddStyle(`shadow-md ${themeColor.bgButton} ${themeColor.hbgButton}`);
  }

  useEffect(() => animation());

  return (
    <button className={`${style} ${addStyle}`} type="submit">
      {props.children ? props.children : language.sendButtonDefault}
    </button>
  );
}
