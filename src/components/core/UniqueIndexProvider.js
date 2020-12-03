import React, { useState, useEffect, useContext } from "react";
import {
  getAllResultsReduce,
  getUniqumIndex,
} from "../../lib/getIndexFunctions";
import { useUser } from "./UserProvider";
import { useOtherUsers } from "./OtherUsersProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const UniqueIndexContext = React.createContext();

export const useUniqueIndex = () => {
  return useContext(UniqueIndexContext).uniqueIndex;
};

export function UniqueIndexProvider({ children }) {
  const user = useUser();
  const otherUsers = useOtherUsers();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [uniqueIndex, setUniqueIndex] = useState(0);

  useEffect(() => {
    let isSubscribed = true;
    if (user && otherUsers) {
      setPushUp(language.computingAll);
      getAllResultsReduce(otherUsers)
        .then((allResults) => {
          setPushUp(language.computingUnique);
          return getUniqumIndex(user.results, allResults);
        })
        .then((uniqueIndex) => {
          setPushUp(null);
          isSubscribed && setUniqueIndex(uniqueIndex);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribed = false;
      setPushUp(null);
    };
  }, [
    user,
    otherUsers,
    setPushUp,
    setPushUpError,
    language.computingAll,
    language.computingUnique,
    language.failedToFetch,
  ]);

  return (
    <UniqueIndexContext.Provider value={{ uniqueIndex }}>
      {children}
    </UniqueIndexContext.Provider>
  );
}
