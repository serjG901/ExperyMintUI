import React, { useState, useContext } from "react";

const LoginContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext).isLogin;
};

export const useLoginSet = () => {
  return useContext(LoginContext).setIsLogin;
};

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
