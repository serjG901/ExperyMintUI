import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import ThemeColorSetter from "./ThemeColorSetter";
import LanguageSetter from "./LanguageSetter";
import Copyright from "../common/Copyright";
import { useLanguage } from "../core/LanguageProvider";

export default function Start({ onSetUserID }) {
  const language = useLanguage();
  const style = ` 
    AppFontFamily${language.name}
    h-screen
    flex flex-col 
    items-center 
    justify-center
    text-center
    `;

  return (
    <div className={style}>
      <Logo />
      <Login onSetUserID={onSetUserID} />
      <ThemeColorSetter />
      <LanguageSetter />
      <Copyright />
    </div>
  );
}
