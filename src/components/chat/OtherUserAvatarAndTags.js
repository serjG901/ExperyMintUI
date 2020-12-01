import React, { useState, useEffect } from "react";
import { useTheme } from "../core/ThemeProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";
import { getOtherAvatar } from "../../lib/fetchData";

export default function OtherUserAvatarAndTags({ name, tags }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setPushUp(language.refreshOthers);
    getOtherAvatar(name)
      .then((avatar) => {
        setPushUp(null);
        if (avatar) setAvatar(avatar);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [
    name,
    language.refreshOthers,
    language.failedToFetch,
    setPushUp,
    setPushUpError
  ]);

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
