import React, { useState, useEffect, useContext } from "react";
import PushUp from "../common/PushUp";

const PushUpErrorContext = React.createContext();

export const usePushUpError = () => {
  return useContext(PushUpErrorContext).pushUpError;
};

export const usePushUpErrorSet = () => {
  return useContext(PushUpErrorContext).setPushUpError;
};

export const PushUpErrorProvider = ({ children }) => {
  const [pushUpError, setPushUpError] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => setPushUpError(null), 5000);
    return () => clearTimeout(timeoutId);
  }, [pushUpError]);

  return (
    <PushUpErrorContext.Provider
      value={{
        pushUpError: <PushUp message={pushUpError} />,
        setPushUpError
      }}
    >
      {children}
    </PushUpErrorContext.Provider>
  );
};
