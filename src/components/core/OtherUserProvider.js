import React, { useEffect, useState, useContext } from "react";
import { getOtherUser } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const OtherUsersContext = React.createContext();

export const useOtherUser = () => {
  return useContext(OtherUsersContext);
};

export const OtherUserProvider = ({ otherUserID, children }) => {
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [otherUser, setOtherUser] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (user.name) {
      setPushUp(language.refreshOthers);
      getOtherUser(otherUserID)
        .then((otherUserData) => {
          setPushUp(null);
          isSubscribed && setOtherUser(otherUserData);
        })
        .catch((error) => {
          setPushUp(null);
          isSubscribed && setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribed = false;
      setPushUp(null);
    };
  }, [
    setPushUp,
    setPushUpError,
    language.refreshOthers,
    language.failedToFetch,
  ]);

  return (
    <OtherUsersContext.Provider value={otherUser}>
      {children}
    </OtherUsersContext.Provider>
  );
};
