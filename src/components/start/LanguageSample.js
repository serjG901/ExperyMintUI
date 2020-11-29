import React from "react";
import { useLanguage, useLanguageSet } from "../core/LanguageProvider";
import { useTheme } from "../core/ThemeProvider";

export default function LanguageSample({ languageSample, children }) {
  const themeColor = useTheme();
  const style = `
    flex-1
    transition-all 
    duration-1000
    h-6 w-6 cursor-pointer
    hover:shadow-md 
    ${themeColor.colorTextExplane}
    `;
  const setLanguage = useLanguageSet();
  const language = useLanguage();

  return (
    <div
      title={`${language.languageSetterSample[1]} ${language.languageName[languageSample]} ${language.languageSetterSample[2]}`}
      className={`${style} ${
        language.name === languageSample
          ? "shadow-md bg-white bg-opacity-25"
          : ""
      }`}
      onClick={() => setLanguage(languageSample)}
    >
      {languageSample}
    </div>
  );
}
