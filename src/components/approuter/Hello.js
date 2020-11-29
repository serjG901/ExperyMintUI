import React from "react";
import AccountIcon from "./AccountIcon";
import GameIcon from "./GameIcon";
import ChatIcon from "./ChatIcon";
import Copyright from "../common/Copyright";
import { useTheme } from "../core/ThemeProvider";
import { useUser } from "../core/UserProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function Hello() {
  const user = useUser();
  const themeColor = useTheme();
  const language = useLanguage();

  const textBlockStyle = `
    ${themeColor.bgTextBlock} 
    ${themeColor.colorTextExplane}
    p-4
    `;

  return (
    <div className="flex flex-col">
      <div className="break-word font-bold text-2xl">{`${language.hello[1]} ${user.name}${language.hello[2]}`}</div>
      <div className="text-justify">
        <div className={textBlockStyle}>
          <p>{language.helloText[1]}</p>
          <p>{language.helloText[2]}</p>
        </div>
        <br />
        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <AccountIcon />
          </div>
          <p>{language.helloText[3]}</p>
          <p>{language.helloText[4]}</p> <p>{language.helloText[5]}</p>
          <p>{language.helloText[6]}</p>{" "}
        </div>
        <br />
        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <GameIcon />
          </div>
          <p>{language.helloText[7]}</p>
          <p>{language.helloText[8]}</p>{" "}
        </div>
        <br />
        <div className={textBlockStyle}>
          <div className="flex justify-center">
            <ChatIcon />
          </div>
          <p>{language.helloText[9]}</p>
          <p>{language.helloText[10]}</p>
          <p>{language.helloText[11]}</p>
          <p>{language.helloText[12]}</p>
        </div>
        <br />
        <div className={textBlockStyle}>
          <p className="text-center">{language.helloText[13]}</p>
        </div>
        <div className="flex justify-center">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
