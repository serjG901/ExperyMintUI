import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function PushUp({ message }) {
  const themeColor = useTheme();
  const style = `
    absolute max-w-xs
    p-4 m-4
    bottom-0 left-0 
    shadow-md rounded
    opacity-70
    shadow-md
    ${themeColor.bgTextBlock} 
    ${themeColor.colorTextExplane}
    `;

  return <div className={message ? style : "hidden"}>{message}</div>;
}
