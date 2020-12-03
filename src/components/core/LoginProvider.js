import React, { useState, useContext, useEffect, useRef } from "react";
import { isLoggedIn } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const LoginContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext).isLogin;
};

export const useLoginSet = () => {
  return useContext(LoginContext).setIsLogin;
};

export const LoginProvider = ({ children }) => {
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();
  const [isLogin, setIsLogin] = useState(false);
  const isLoginRef = useRef();

  useEffect(() => {
    setPushUp(language.loginConnect);
    isLoggedIn()
      .then((isLoggedIn) => {
        setPushUp(null);
        if (isLoggedIn === true) {
          setIsLogin(true);
        } else {
          setPushUpError(language.failedloginConnect);
        }
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [
    language.loginConnect,
    language.failedloginConnect,
    language.failedToFetch,
    setPushUp,
    setPushUpError,
  ]);

  useEffect(() => {
    isLoginRef.current = isLogin;
  });
/*
  useEffect(() => {
    if (isLogin === false && isLoginRef.current === true) {
      setPushUp(language.toLoggedOut);
      toLoggedOut()
        .then((isLoggedOut) => {
          setPushUp(null);
          if (isLoggedOut) {
            setPushUpError(language.toLoggedOutSucces);
          } else {
            setPushUpError(language.toLoggedOutCrash);
            setIsLogin(true);
          }
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
  }, [
    isLogin,
    language.toLoggedOut,
    language.toLoggedOutSucces,
    language.toLoggedOutCrash,
    language.failedToFetch,
    setPushUp,
    setPushUpError,
  ]);
*/
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
