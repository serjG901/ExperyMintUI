import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Start from "../start/Start";
import Hello from "./Hello";
import Account from "../account/Account";
import Game from "../game/Game";
import Chat from "../chat/Chat";
import AccountIcon from "./AccountIcon";
import GameIcon from "./GameIcon";
import ChatIcon from "./ChatIcon";
import QuitIcon from "./QuitIcon";
import { useTheme } from "../core/ThemeProvider";
import { useLogin, useLoginSet } from "../core/LoginProvider";
import { usePushUpError } from "../core/PushUpErrorProvider";
import { usePushUp } from "../core/PushUpProvider";
import Background from "../common/Background";
import { useLanguage } from "../core/LanguageProvider";

export default function AppRouter() {
  const themeColor = useTheme();
  const isLogin = useLogin();
  const setLogin = useLoginSet();
  const pushUpError = usePushUpError();
  const pushUp = usePushUp();
  const language = useLanguage();

  const linkStyle = `
    flex-1 w-1/4
    py-2 px-4 
    block h-full
    transition-all duration-500
  `;
  const linkNotActive = `
    ${themeColor.bgLink}
    hover:bg-opacity-50
    ${linkStyle}
    `;
  const linkActive = `
    bg-opacity-0
    ${linkStyle}
    `;

  const [activePage, setActivePage] = useState(
    window.localStorage.getItem("activePage") || null
  );

  function handleActivePage(page) {
    setActivePage(page);
    if (page) {
      window.localStorage.setItem("activePage", page);
      return;
    }
    window.localStorage.removeItem("activePage");
  }

  function handleQuit() {
    setLogin(false);
    handleActivePage(null);
  }

  return (
    <div className={themeColor.colorTextMain}>
      {isLogin ? (
        <Router>
          <div className={`h-screen text-center AppFontFamily${language.name}`}>
            <nav className="flex">
              <Link
                title={language.linkAccount}
                to="/account"
                onClick={() => handleActivePage("account")}
                className={
                  activePage === "account" ? linkActive : linkNotActive
                }
              >
                <AccountIcon />
              </Link>
              <Link
                title={language.linkGame}
                to="/game"
                onClick={() => handleActivePage("game")}
                className={activePage === "game" ? linkActive : linkNotActive}
              >
                <GameIcon />
              </Link>
              <Link
                title={language.linkChat}
                to="/chat"
                onClick={() => handleActivePage("chat")}
                className={activePage === "chat" ? linkActive : linkNotActive}
              >
                <ChatIcon />
              </Link>
              <Link
                title={language.linkQuit}
                to="/"
                onClick={() => handleQuit()}
                className={linkNotActive}
              >
                <QuitIcon />
              </Link>
            </nav>
            <Switch>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/">
                {activePage ? <Redirect to={`/${activePage}`} /> : <Hello />}
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        <Start />
      )}
      {pushUpError}
      {pushUp}
      <Background />
    </div>
  );
}
