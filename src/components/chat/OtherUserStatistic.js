import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function OtherUserStatistic({ indexOfClosest, mistruth }) {
  const themeColor = useTheme();
  const language = useLanguage();

  return (
    <div className="flex">
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherCloseness}:{" "}
        </span>
        {indexOfClosest.index}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherCompared}:{" "}
        </span>
        {indexOfClosest.amount}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherMistruth}:{" "}
        </span>
        {mistruth || 0}
      </div>
    </div>
  );
}
