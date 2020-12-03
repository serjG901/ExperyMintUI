import React, { useEffect, useState, useContext, useRef } from "react";
import { useLogin } from "./LoginProvider";
import { getUser, updateUser, toLoggedOut } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext).user;
};

export const useUserSet = () => {
  return useContext(UserContext).setUser;
};

export const UserProvider = ({ children }) => {
  const isLogin = useLogin();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [user, setUser] = useState({});
  const userRef = useRef();

  useEffect(() => {
    if (isLogin === true) {
      setPushUp(language.refreshData);
      console.log("getuser");
      getUser()
        .then((userData) => {
          setPushUp(null);
          userRef.current = userData;
          setUser(userData);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    } else {
      if (Object.keys(user).length !== 0) {
        setPushUp(language.toLoggedOut);
        toLoggedOut()
          .then((isLoggedOut) => {
            setPushUp(null);
            if (isLoggedOut === true) {
              setPushUpError(language.toLoggedOutSucces);
            }
          })
          .catch((error) => {
            setPushUp(null);
            setPushUpError(language.failedToFetch);
            console.log(error.message);
          });
      }
    }
  }, [isLogin, setPushUp, setPushUpError, language]);

  useEffect(() => {
    if (Object.keys(user).length !== 0 && user !== userRef.current) {
      setPushUp(language.updateData);
      updateUser({ ...user, lastUpdate: Date.now() })
        .then((userOnServer) => {
          setPushUp(null);
          if (userOnServer === true) {
            setPushUpError(language.updateSucces);
          } else {
            setPushUpError(language.updateCrash);
            setUser(userRef.current);
          }
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
  }, [
    user,
    language.updateData,
    language.updateSucces,
    language.updateCrash,
    language.failedToFetch,
    setPushUp,
    setPushUpError,
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
