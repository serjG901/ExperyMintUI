import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUniqueIndex } from "../core/UniqueIndexProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function UniqueIndex() {
  const uniqueIndex = useUniqueIndex();
  const themeColor = useTheme();
  const language = useLanguage();

  return (
    <div className="text-xl">
      <span className={themeColor.colorTextExplane}>
        {language.uniqueIndex}:
      </span>{" "}
      <span className={`${themeColor.colorTextData} font-bold`}>
        {uniqueIndex || 0}
      </span>
    </div>
  );
}
