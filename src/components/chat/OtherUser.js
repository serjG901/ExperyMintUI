import React, { useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import OtherUserName from "./OtherUserName";
import OtherUserManifest from "./OtherUserManifest";
import OtherUserStatistic from "./OtherUserStatistic";
import OtherUserAvatarAndTags from "./OtherUserAvatarAndTags";
import OtherUserChat from "./OtherUserChat";

import { ChatProvider } from "../core/ChatProvider";

export default function OtherUser({
  otherUserID,
  name,
  indexOfClosest,
  mistruth,
  manifest,
  tags,
  lastUpdate,
}) {
  const themeColor = useTheme();
  const language = useLanguage();

  const [openOtherUserInfoAndChat, setOpenOtherUserInfoAndChat] = useState(
    false
  );

  function handleOpenBody() {
    setOpenOtherUserInfoAndChat(!openOtherUserInfoAndChat);
  }

  return (
    <div
      key={name}
      title={openOtherUserInfoAndChat ? "" : language.openUserInfo}
      className={
        openOtherUserInfoAndChat
          ? `${themeColor.bgOtherUserOpen} ${themeColor.colorTextOtherUser} shadow-md`
          : `${themeColor.bgOtherUserClose} ${themeColor.colorTextOtherUser} shadow-md`
      }
    >
      <div
        className={`cursor-pointer ${themeColor.hbgOtherUser}`}
        onClick={handleOpenBody}
      >
        <div className={`flex p-2 my-2`}>
          <OtherUserName>{name}</OtherUserName>
          <OtherUserManifest>{manifest}</OtherUserManifest>
        </div>
      </div>
      <div
        className={
          openOtherUserInfoAndChat
            ? "cursor-default divide-y divide-gray-600 divide-dashed"
            : "hidden"
        }
      >
        <p className={`${themeColor.colorTextExplane}`}>
          {`${language.otherLastUpdate}:`}{" "}
          <span className={themeColor.colorTextOtherUser}>{`${new Date(
            lastUpdate
          ).toLocaleString()}`}</span>
        </p>
        <OtherUserStatistic
          indexOfClosest={indexOfClosest}
          mistruth={mistruth}
        />
        <OtherUserAvatarAndTags otherUserID={otherUserID} tags={tags} />
        <ChatProvider otherUserID={otherUserID}>
          <OtherUserChat isOpen={openOtherUserInfoAndChat} otherUserID={name} />
        </ChatProvider>
      </div>
    </div>
  );
}
