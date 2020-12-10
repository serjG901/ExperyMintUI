import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { usePeople } from "../core/PeopleProvider";
import PersonName from "./PersonName";
import PersonManifest from "./PersonManifest";
import PersonStatistic from "./PersonStatistic";
import PersonAvatarAndTags from "./PersonAvatarAndTags";
import { ConversationProvider } from "../core/ConversationProvider";
import PersonConversation from "./PersonConversation";

export default function Person({ personId, closest, comparedImage }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const people = usePeople();
  const [person, setPerson] = useState({});
  const [openThisPerson, setOpenThisPerson] = useState(false);

  function handleOpenBody() {
    setOpenThisPerson(!openThisPerson);
  }

  useEffect(() => {
    if (people && people.length !== 0) {
      const curentPerson = people.find((person) => person._id === personId);
      if (curentPerson) setPerson(curentPerson);
    }
  }, [personId, people]);

  return person && Object.keys(person).length !== 0 ? (
    <div
      title={openThisPerson ? "" : language.openUserInfo}
      className={
        openThisPerson
          ? `${themeColor.bgOtherUserOpen} ${themeColor.colorTextOtherUser} shadow-md`
          : `${themeColor.bgOtherUserClose} ${themeColor.colorTextOtherUser} shadow-md`
      }
    >
      <div
        className={`cursor-pointer ${themeColor.hbgOtherUser}`}
        onClick={handleOpenBody}
      >
        <div className={`flex p-2 my-2`}>
          <PersonName>{person.name}</PersonName>
          <PersonManifest>{person.manifest}</PersonManifest>
        </div>
      </div>
      <div
        className={
          openThisPerson
            ? "cursor-default divide-y divide-gray-600 divide-dashed"
            : "hidden"
        }
      >
        <p className={`${themeColor.colorTextExplane}`}>
          {`${language.otherLastUpdate}:`}{" "}
          <span className={themeColor.colorTextOtherUser}>{`${new Date(
            person.lastActionTime
          ).toLocaleString()}`}</span>
        </p>
        <PersonStatistic
          closest={closest}
          comparedImage={comparedImage}
          mistruth={person.mistruth}
        />
        <PersonAvatarAndTags personId={person._id} tags={person.tags} />
        <ConversationProvider personId={person._id} opened={openThisPerson}>
          <PersonConversation personId={person._id} name={person.name} />
        </ConversationProvider>
      </div>
    </div>
  ) : null;
}
