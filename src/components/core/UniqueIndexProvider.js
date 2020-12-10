import React, { useState, useEffect, useContext } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useResults } from "./UserProvider";
import { usePeople } from "./PeopleProvider";
import { computingUniqueIndex } from "../../lib/computingUniqueIndex";

const UniqueIndexContext = React.createContext();

export const useUniqueIndex = () => {
  return useContext(UniqueIndexContext);
};

export function UniqueIndexProvider({ children }) {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const results = useResults();
  const people = usePeople();

  const [uniqueIndex, setUniqueIndex] = useState({
    result: 0,
    forImage: {},
    full: {},
  });

  useEffect(() => {
    if (people.length !== 0) {
      setPushUp(language.computingUnique);
      computingUniqueIndex(results, people)
        .then((unique) => {
          setPushUp(null);
          if (unique !== null) setUniqueIndex(unique);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    } else {
      setUniqueIndex({
        result: 100,
        forImage: {},
        full: {},
      });
    }
  }, [results, people, setPushUp, setPushUpError, language]);

  return (
    <UniqueIndexContext.Provider value={uniqueIndex}>
      {children}
    </UniqueIndexContext.Provider>
  );
}
