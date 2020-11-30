import React, { useEffect, useState, useContext } from "react";
import { useLogin } from "./LoginProvider";
import { getUser, updateUser } from "../../lib/fetchData";
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

  useEffect(() => {
    if (isLogin) {
      setPushUp(language.refreshData);
      getUser()
        .then((userData) => {
          setPushUp(null);
          setUser(userData);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    } else {
      setUser({});
    }
  }, [
    isLogin,
    setPushUp,
    setPushUpError,
    language.refreshData,
    language.failedToFetch,
  ]);

  useEffect(() => {
    if (isLogin && Object.keys(user).length !== 0) {
      getUser().then((userData) => {
        const equal = JSON.stringify(user) === JSON.stringify(userData);
        if (!equal) {
          setPushUp(language.updateData);
          updateUser(user)
            .then((userData) => {
              setPushUp(null);
              setUser(userData);
            })
            .catch((error) => {
              setPushUp(null);
              setPushUpError(language.failedToFetch);
              console.log(error.message);
            });
        }
      });
    }
  }, [
    isLogin,
    user,
    setPushUp,
    language.updateData,
    language.failedToFetch,
    setPushUpError,
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
