import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage, useLanguageSet } from "../core/LanguageProvider";

export default function LanguageSample({ languageName }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const setLanguage = useLanguageSet();

  const style = `
    flex-1
    transition-all 
    duration-1000
    h-6 
    w-6 
    cursor-pointer
    hover:shadow-md 
    ${themeColor.colorTextExplane}
    `;

  return (
    <div
      title={`${language.languageSetterSample[1]} ${language.languageName[languageName]} ${language.languageSetterSample[2]}`}
      className={`
        ${style} 
        ${
          language.name === languageName
            ? "shadow-md bg-white bg-opacity-25"
            : ""
        }`}
      onClick={() => setLanguage(languageName)}
    >
      {languageName}
    </div>
  );
}
