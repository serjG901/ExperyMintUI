import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUser } from "../core/UserProvider";
import { AccountIcon, GameIcon, ChatIcon } from "./Icons";
import Copyright from "../common/Copyright";

export default function Hello() {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();

  const textBlockStyle = `
    ${themeColor.bgTextBlock} 
    ${themeColor.colorTextExplane}
    p-4
    `;

  return (
    <div className="flex flex-col py-4">
      <div className="break-word font-bold text-2xl">
        {`${language.hello[1]} ${user.name}${language.hello[2]}`}
      </div>
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
