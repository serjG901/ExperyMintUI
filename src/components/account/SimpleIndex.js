import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUser } from "../core/UserProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function SimpleIndex({ nameProperty }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();
  return (
    <div className="text-xl">
      <span className={`${themeColor.colorTextExplane}`}>
        {nameProperty === "score"
          ? language.simpleIndexScore
          : language.simpleIndexMistruth}
        :
      </span>{" "}
      <span className={`${themeColor.colorTextData} font-bold`}>
        {user[nameProperty] || 0}
      </span>
    </div>
  );
}
