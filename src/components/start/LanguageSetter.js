import React from "react";
import { languageText } from "../core/LanguageProvider";
import LanguageSample from "./LanguageSample";

export default function LanguageSetter() {
  const languageNames = Object.keys(languageText);
  return (
    <div className="flex justify-center h-6 w-32 m-4">
      {languageNames.map((languageName) => (
        <LanguageSample key={languageName} languageName={languageName} />
      ))}
    </div>
  );
}
