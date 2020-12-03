import React, { useEffect, useState, useContext } from "react";
import { useUser } from "./UserProvider";
import { getOtherUsers } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const OtherUsersContext = React.createContext();

export const useOtherUsers = () => {
  return useContext(OtherUsersContext);
};

export const OtherUsersProvider = ({ children }) => {
  const user = useUser();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [otherUsers, setOtherUsers] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    if (user.name) {
      setPushUp(language.refreshOthers);
      getOtherUsers(user.filter)
        .then((otherUsersData) => {
          setPushUp(null);
          isSubscribed && setOtherUsers(otherUsersData);
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
    user,
    setPushUp,
    setPushUpError,
    language.refreshOthers,
    language.failedToFetch,
  ]);

  return (
    <OtherUsersContext.Provider value={otherUsers}>
      {children}
    </OtherUsersContext.Provider>
  );
};
