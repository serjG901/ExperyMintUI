import React, { useEffect, useState, useContext } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useFilter } from "./UserProvider";
import { people } from "../../lib/fetchData";

const PeopleContext = React.createContext();

export const usePeople = () => {
  return useContext(PeopleContext);
};

export const PeopleProvider = ({ children }) => {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const filter = useFilter();
  const [actualPeople, setActualPeople] = useState([]);

  useEffect(() => {
      setPushUp(language.refreshOthers);
      people(filter)
        .then((filtredPeople) => {
          setPushUp(null);
          setActualPeople(filtredPeople);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
  }, [filter, setPushUp, setPushUpError, language]);

  return (
    <PeopleContext.Provider value={actualPeople}>
      {children}
    </PeopleContext.Provider>
  );
};
