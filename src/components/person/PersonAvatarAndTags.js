import React, { useState, useEffect } from "react";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import { getAvatar } from "../../lib/fetchData";

export default function PersonAvatarAndTags({ personId, tags }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar(personId)
      .then((personAvatar) => {
        if (personAvatar !== null) setAvatar(personAvatar);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [personId]);

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {avatar !== null ? (
          <img src={avatar} alt="avatar" className="inline-block" />
        ) : (
          <span className={`${themeColor.colorTextExplane}`}>
            {language.otherAvatarDefault}
          </span>
        )}
      </div>
      <div className="w-1/2 p-4 italic">
        {tags !== "" ? (
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
