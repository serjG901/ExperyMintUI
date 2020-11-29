import React from "react";
import OtherUser from "./OtherUser";
import FormSendAndShowText from "../common/FormSendAndShowText";
import { useChatList } from "../core/ChatListProvider";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function ChatList() {
  const chatList = useChatList();
  const themeColor = useTheme();
  const language = useLanguage();

  return (
    <div>
      <p className={`${themeColor.colorTextExplane}`}>
        {language.closestPeople}
      </p>
      <FormSendAndShowText nameProperty="filter" />
      {chatList
        ? chatList.map((item) => {
            const otherUser = {
              name: item.name,
              indexOfClosest: item.indexOfClosest,
              mistruth: item.mistruth,
              manifest: item.manifest,
              avatar: item.avatar,
              tags: item.tags
            };

            return <OtherUser key={item.id} otherUser={otherUser} />;
          })
        : null}
    </div>
  );
}
