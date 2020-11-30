import React, { useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import OtherUserChat from "./OtherUserChat";
import OtherUserStatistic from "./OtherUserStatistic";
import OtherUserAvatarAndTags from "./OtherUserAvatarAndTags";
import OtherUserName from "./OtherUserName";
import OtherUserManifest from "./OtherUserManifest";
import { useLanguage } from "../core/LanguageProvider";

export default function OtherUser({
  name,
  indexOfClosest,
  mistruth,
  manifest,
  avatar,
  tags,
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
        <OtherUserStatistic
          indexOfClosest={indexOfClosest}
          mistruth={mistruth}
        />
        <OtherUserAvatarAndTags avatar={avatar} tags={tags} />
        <OtherUserChat
          isOpen={openOtherUserInfoAndChat}
          otherUserID={name}
        />
      </div>
    </div>
  );
}
