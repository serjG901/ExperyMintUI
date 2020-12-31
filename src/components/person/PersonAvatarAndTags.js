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
    <div className="flex justify-center">
      {avatar !== null ? (
        <div className="w-1/2 p-4">
          <img src={avatar} alt="avatar" className="inline-block" />
        </div>
      ) : null}
      {tags !== "" ? (
        <div className="w-1/2 p-4 italic">
          <p className="font-bold break-words">{tags}</p>
        </div>
      ) : null}
    </div>
  );
}
