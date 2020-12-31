import React, { useEffect, useState } from "react";
import { useTheme, themeColorStyle } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { usePeople } from "../core/PeopleProvider";
import PersonName from "./PersonName";
import PersonManifest from "./PersonManifest";
import PersonStatistic from "./PersonStatistic";
import PersonAvatarAndTags from "./PersonAvatarAndTags";
import { ConversationProvider } from "../core/ConversationProvider";
import PersonConversation from "./PersonConversation";

export default function Person({ personId, closest, comparedImage }) {
  const language = useLanguage();
  const people = usePeople();
  const [themeColor, setThemeColor] = useState(useTheme());
  const [person, setPerson] = useState({});
  const [openThisPerson, setOpenThisPerson] = useState(false);

  function handleOpenBody() {
    setOpenThisPerson(!openThisPerson);
  }

  useEffect(() => {
    if (people && people.length !== 0) {
      const curentPerson = people.find((person) => person._id === personId);
      if (curentPerson) {
        setPerson(curentPerson);
        curentPerson.theme && themeColorStyle[curentPerson.theme] && setThemeColor(themeColorStyle[curentPerson.theme]);
      }
    }
  }, [personId, people]);

  return person && Object.keys(person).length !== 0 ? (
    <div
      title={openThisPerson ? "" : language.openUserInfo}
      className={
        openThisPerson
          ? `${themeColor.bgOtherUserOpen} ${themeColor.colorTextOtherUser} shadow-md my-2`
          : `${themeColor.bgOtherUserClose} ${themeColor.colorTextOtherUser} shadow-md my-2`
      }
    >
      <div
        className={`cursor-pointer ${themeColor.hbgOtherUser}`}
        onClick={handleOpenBody}
      >
        <div className="flex justify-center p-2">
          <PersonName>{person.name}</PersonName>
          {person.manifest !== "" ? (
            <PersonManifest>{person.manifest}</PersonManifest>
          ) : null}
        </div>
      </div>
      <div className={openThisPerson ? "cursor-default" : "hidden"}>
        <PersonStatistic
          themeColor={themeColor}
          closest={closest}
          comparedImage={comparedImage}
          mistruth={person.mistruth}
          lastActionTime={person.lastActionTime}
        />
        <PersonAvatarAndTags personId={person._id} tags={person.tags} />
        <ConversationProvider personId={person._id} opened={openThisPerson}>
          <PersonConversation
            themeColor={themeColor}
            personId={person._id}
            name={person.name}
          />
        </ConversationProvider>
      </div>
    </div>
  ) : null;
}
