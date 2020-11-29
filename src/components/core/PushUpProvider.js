import React, { useState, useContext } from "react";
import PushUp from "../common/PushUp";

const PushUpContext = React.createContext();

export const usePushUp = () => {
  return useContext(PushUpContext).pushUpMessage;
};

export const usePushUpSet = () => {
  return useContext(PushUpContext).setPushUpMessage;
};

export const PushUpProvider = ({ children }) => {
  const [pushUpMessage, setPushUpMessage] = useState(null);

  return (
    <PushUpContext.Provider
      value={{
        pushUpMessage: pushUpMessage ? (
          <PushUp message={pushUpMessage} />
        ) : null,
        setPushUpMessage
      }}
    >
      {children}
    </PushUpContext.Provider>
  );
};
