import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function OtherUserManifest({ children }) {
  const themeColor = useTheme();
  const language = useLanguage();

  return (
    <div className="w-1/2">
      {children ? (
        <p className="font-bold break-words">{children}</p>
      ) : (
        <span className={`${themeColor.colorTextExplane}`}>
          {language.otherManifestDefault}
        </span>
      )}
    </div>
  );
}
