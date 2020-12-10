import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import UserName from "./UserName";
import SetAndShowProperty from "./SetAndShowProperty";

export default function UserInfo() {
  const themeColor = useTheme();
  const language = useLanguage();
  return (
    <div className="w-1/2">
      <UserName />
      <SetAndShowProperty property="tags" />
      <p className={`${themeColor.colorTextExplane} break-words`}>{language.changeName}</p>
      <SetAndShowProperty property="name" />
    </div>
  );
}
