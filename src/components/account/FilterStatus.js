import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUser } from "../core/UserProvider";

export default function FilterStatus() {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();

  return (
    <p className={`${themeColor.colorTextData} px-2 break-words`}>
      <span className={themeColor.colorTextExplane}>
        {language.filterStatus}
      </span>{" "}
      {user.filter || language.filterStatusDefault}
    </p>
  );
}
