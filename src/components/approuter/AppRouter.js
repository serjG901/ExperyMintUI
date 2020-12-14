import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpError } from "../core/PushUpErrorProvider";
import { usePushUp } from "../core/PushUpProvider";
import { useUser, useLogOut } from "../core/UserProvider";
import Start from "../start/Start";
import { AccountIcon, GameIcon, ClosestPeopleIcon, QuitIcon } from "./Icons";
import Account from "../account/Account";
import Game from "../game/Game";
import ClosestPeople from "../closestpeople/ClosestPeople";
import Hello from "./Hello";
import Background from "../common/Background";

export default function AppRouter() {
  const history = createBrowserHistory();
  const themeColor = useTheme();
  const language = useLanguage();
  const pushUpError = usePushUpError();
  const pushUp = usePushUp();
  const user = useUser();
  const logOut = useLogOut();

  const linkStyle = `
    flex-1 
    w-1/4
    py-2 
    px-4 
    block 
    h-full
    transition-all 
    duration-500
  `;
  const linkNotActive = `
    ${linkStyle}
    ${themeColor.bgLink}
    hover:bg-opacity-50
    `;
  const linkActive = `
    ${linkStyle}
    bg-opacity-0
    `;

  function handleQuit() {
    logOut();
  }

  return (
    <div className={themeColor.colorTextMain}>
      {user === null ? (
        <Start />
      ) : (
        <Router>
          <div className={`h-screen text-center AppFontFamily${language.name}`}>
            <nav className="flex">
              <Link
                title={language.linkAccount}
                to="/account"
                className={
                  history.location.pathname === "/account"
                    ? linkActive
                    : linkNotActive
                }
              >
                <AccountIcon />
              </Link>
              <Link
                title={language.linkGame}
                to="/game"
                className={
                  history.location.pathname === "/game"
                    ? linkActive
                    : linkNotActive
                }
              >
                <GameIcon />
              </Link>
              <Link
                title={language.linkChat}
                to="/closestpeople"
                className={
                  history.location.pathname === "/closestpeople"
                    ? linkActive
                    : linkNotActive
                }
              >
                <ClosestPeopleIcon />
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
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/closestpeople">
                <ClosestPeople />
              </Route>
              <Route path="/">
                <Hello />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
      {pushUpError}
      {pushUp}
      <Background />
    </div>
  );
}
