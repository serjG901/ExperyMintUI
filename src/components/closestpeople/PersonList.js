import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { usePersonList } from "../core/PersonListProvider";
import SetAndShowProperty from "../account/SetAndShowProperty";
import Person from "../person/Person";

export default function PersonList() {
  const themeColor = useTheme();
  const language = useLanguage();
  const personList = usePersonList();

  return (
    <div>
      <p className={`${themeColor.colorTextExplane}`}>
        {language.closestPeople}
      </p>
      <SetAndShowProperty property="filter" />
      {personList.length !== 0
        ? personList.map((person) => {
            return (
              <Person
                key={person._id}
                personId={person._id}
                closest={person.closest}
                comparedImage={person.comparedImage}
              />
            );
          })
        : null}
    </div>
  );
}
