import React, { useState, useContext, useEffect } from "react";
import { isLoggedIn, toLoggedOut } from "../../lib/fetchData";
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

  useEffect(() => {
    setPushUp(language.loginConnect);
    isLoggedIn()
      .then((isLoggedIn) => {
        setPushUp(null);
        setIsLogin(isLoggedIn);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [
    setIsLogin,
    language.loginConnect,
    language.failedToFetch,
    setPushUp,
    setPushUpError,
  ]);

  useEffect(() => {
    if (!isLogin) {
      setPushUp(language.toLoggedOut);
      toLoggedOut()
        .then((toLoggedOut) => {
          setPushUp(null);
          if (toLoggedOut) {
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

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
