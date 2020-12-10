import React, { useEffect, useState, useContext, useRef } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import {
  addUser,
  login,
  updateUser,
  toLoggedOut,
  isLoggedIn,
} from "../../lib/fetchData";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext).user;
};

export const useFilter = () => {
  return useContext(UserContext).filter;
};

export const useResults = () => {
  return useContext(UserContext).results;
};

export const useUserSet = () => {
  return useContext(UserContext).setUser;
};

export const useSignUp = () => {
  return useContext(UserContext).signUp;
};

export const useSignIn = () => {
  return useContext(UserContext).signIn;
};

export const useLogOut = () => {
  return useContext(UserContext).logOut;
};

export const useCheckSession = () => {
  return useContext(UserContext).checkSession;
};

export const UserProvider = ({ children }) => {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();

  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState("");
  const userRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFilter(user.filter);
      setResults(user.results);
    }
  }, [user]);

  useEffect(() => {
    if (
      user !== null &&
      userRef.current !== null &&
      JSON.stringify(user) !== JSON.stringify(userRef.current)
    ) {
      setPushUp(language.updateData);
      updateUser(user)
        .then((updatedUser) => {
          setPushUp(null);
          if (updatedUser !== null) {
            userRef.current = user;
            setPushUpError(language.updateSucces);
          } else {
            setUser(userRef.current);
            setPushUpError(language.updateCrash);
          }
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          setUser(userRef.current);
          console.log(error.message);
        });
    }
  }, [user, setPushUp, setPushUpError, language]);

  async function checkSession() {
    setPushUp(language.loginConnect);
    try {
      const authUser = await isLoggedIn();
      setPushUp(null);
      if (authUser !== null) {
        userRef.current = authUser;
        setUser(authUser);
      } else {
        setPushUpError(language.failedLoginConnect);
      }
    } catch (error) {
      setPushUp(null);
      setPushUpError(language.failedToFetch);
      console.log(error.message);
    }
  }

  async function signUp({ id, password }) {
    setPushUp(language.loginConnect);
    try {
      const user = await addUser({ id, password });
      setPushUp(null);
      if (user !== null) {
        userRef.current = user;
        setUser(user);
      } else {
        setPushUpError(language.failedLoginConnect);
      }
    } catch (error) {
      setPushUp(null);
      setPushUpError(language.failedToFetch);
      console.log(error.message);
    }
  }

  async function signIn({ id, password }) {
    setPushUp(language.loginConnect);
    try {
      const user = await login({ id, password });
      setPushUp(null);
      if (user !== null) {
        userRef.current = user;
        setUser(user);
        return user;
      } else {
        return null;
      }
    } catch (error) {
      setPushUp(null);
      setPushUpError(language.failedToFetch);
      console.log(error.message);
    }
  }

  async function logOut() {
    setPushUp(language.toLoggedOut);
    try {
      const logOutUser = await toLoggedOut();
      setPushUp(null);
      if (logOutUser === null) {
        userRef.current = null;
        setUser(null);
        setPushUpError(language.toLoggedOutSucces);
      } else {
        setPushUpError(language.toLoggedOutCrash);
      }
    } catch (error) {
      setPushUp(null);
      setPushUpError(language.failedToFetch);
      setUser(userRef.current);
      console.log(error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        filter,
        results,
        setUser,
        signUp,
        signIn,
        logOut,
        checkSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
