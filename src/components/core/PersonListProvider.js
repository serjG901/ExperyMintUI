import React, { useEffect, useState, useContext } from "react";
import { useLanguage } from "./LanguageProvider";
import { usePushUpSet } from "./PushUpProvider";
import { usePushUpErrorSet } from "./PushUpErrorProvider";
import { useResults } from "./UserProvider";
import { usePeople } from "./PeopleProvider";
import { computingPersonList } from "../../lib/computingPersonList";

const PersonListContext = React.createContext();

export const usePersonList = () => {
  return useContext(PersonListContext);
};

export const PersonListProvider = ({ children }) => {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const results = useResults();
  const people = usePeople();

  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    if (people.length !== 0) {
      setPushUp(language.refreshClosest);
      computingPersonList(results, people)
        .then((list) => {
          setPushUp(null);
          if (list !== null) setPersonList(list);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    } else {
      setPersonList([]);
    }
  }, [results, people, setPushUp, setPushUpError, language]);

  return (
    <PersonListContext.Provider value={personList}>
      {children}
    </PersonListContext.Provider>
  );
};
