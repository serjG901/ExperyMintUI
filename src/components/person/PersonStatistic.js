import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function PersonStatistic({ closest, comparedImage, mistruth }) {
  const themeColor = useTheme();
  const language = useLanguage();

  return (
    <div className="flex">
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherCloseness}:{" "}
        </span>
        {closest}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherCompared}:{" "}
        </span>
        {comparedImage}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherMistruth}:{" "}
        </span>
        {mistruth}
      </div>
    </div>
  );
}
