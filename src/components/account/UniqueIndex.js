import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUniqueIndex } from "../core/UniqueIndexProvider";

export default function UniqueIndex() {
  const themeColor = useTheme();
  const language = useLanguage();
  const uniqueIndex = useUniqueIndex();
  return (
    <div className="text-xl">
      <span className={themeColor.colorTextExplane}>
        {language.uniqueIndex}:
      </span>{" "}
      <span className={`${themeColor.colorTextData} font-bold`}>
        {uniqueIndex.result}
      </span>
    </div>
  );
}
