import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function OtherUserAvatarAndTags({ avatar, tags }) {
  const themeColor = useTheme();
  const language = useLanguage();
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {avatar ? (
          <img src={avatar} alt="avatar" className="inline-block" />
        ) : (
          <span className={`${themeColor.colorTextExplane}`}>
            {language.otherAvatarDefault}
          </span>
        )}
      </div>
      <div className="w-1/2 p-4">
        {tags ? (
          <p className="font-bold break-words">{tags}</p>
        ) : (
          <span className={`${themeColor.colorTextExplane}`}>
            {language.otherTagsDefault}
          </span>
        )}
      </div>
    </div>
  );
}
