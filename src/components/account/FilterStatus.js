import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUser } from "../core/UserProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function FilterStatus() {
  const themeColor = useTheme();
  const user = useUser();
  const language = useLanguage();

  return (
    <p className={`${themeColor.colorTextData} px-2 break-words`}>
      <span className={themeColor.colorTextExplane}>
        {language.filterStatus}
      </span>{" "}
      {user.filter || language.filterStatusDefault}
    </p>
  );
}
