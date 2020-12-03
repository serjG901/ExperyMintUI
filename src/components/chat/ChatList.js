import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useChatList } from "../core/ChatListProvider";
import FormSendAndShowText from "../account/FormSendAndShowText";
import OtherUser from "./OtherUser";

export default function ChatList() {
  const themeColor = useTheme();
  const language = useLanguage();
  const chatList = useChatList();

  return (
    <div>
      <p className={`${themeColor.colorTextExplane}`}>
        {language.closestPeople}
      </p>
      <FormSendAndShowText nameProperty="filter" />
      {chatList
        ? chatList.map((item) => {
            return (
              <OtherUser
                key={item.id}
                otherUserID={item.id}
                name={item.name}
                indexOfClosest={item.indexOfClosest}
                mistruth={item.mistruth}
                manifest={item.manifest}
                avatar={item.avatar}
                tags={item.tags}
                lastUpdate={item.lastUpdate}
              />
            );
          })
        : null}
    </div>
  );
}
