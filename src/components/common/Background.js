import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function Background() {
  const themeColor = useTheme();
  return (
    <div
      className={`
        top-0 back fixed
        h-screen w-screen
        ${themeColor.bgApp}
        `}
    ></div>
  );
}
