import React from "react";
import LanguageSample from "./LanguageSample";
import { languageText } from "../core/LanguageProvider";

const languageSamples = Object.keys(languageText);

export default function LanguageSetter() {
  return (
    <div className="flex justify-center h-6 w-32 m-4">
      {languageSamples.map((languageSample) => (
        <LanguageSample key={languageSample} languageSample={languageSample} />
      ))}
    </div>
  );
}
