import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function SendButton(props) {
  const themeColor = useTheme();
  const language = useLanguage();

  const style = `
  transition-all 
  duration-1000
  mb-4 
  mx-4 
  py-2 
  px-4 
  rounded 
  cursor-pointer
  focus:outline-none 
  focus:shadow-outline
  ${
    props.themeColor ? props.themeColor.colorTextMain : themeColor.colorTextMain
  }
  `;

  const [addStyle, setAddStyle] = useState(`shadow-none bg-transparent`);

  useEffect(
    () =>
      setAddStyle(
        `shadow-md ${
          props.themeColor ? props.themeColor.bgButton : themeColor.bgButton
        } ${
          props.themeColor ? props.themeColor.hbgButton : themeColor.hbgButton
        }`
      ),
    [themeColor]
  );

  return (
    <button type="submit" {...props} className={`${style} ${addStyle}`}>
      {props.children ? props.children : language.sendButtonDefault}
    </button>
  );
}
