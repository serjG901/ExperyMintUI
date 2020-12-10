import React from "react";
import { useLanguage } from "../core/LanguageProvider";
import Logo from "./Logo";
import Login from "./Login";
import ThemeColorSetter from "./ThemeColorSetter";
import LanguageSetter from "./LanguageSetter";
import Copyright from "../common/Copyright";
import CheckSession from "./CheckSession";

export default function Start() {
  const language = useLanguage();
  const style = ` 
    AppFontFamily${language.name}
    h-screen
    flex 
    flex-col 
    items-center 
    justify-center
    text-center
    `;
  return (
    <div className={style}>
      <Logo />
      <Login />
      <ThemeColorSetter />
      <LanguageSetter />
      <Copyright />
      <CheckSession />
    </div>
  );
}
