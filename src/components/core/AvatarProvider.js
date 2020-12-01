import React, { useState, useContext, useEffect } from "react";
import { getAvatar, setAvatarServe } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const AvatarContext = React.createContext();

export const useAvatar = () => {
  return useContext(AvatarContext).avatar;
};

export const useAvatarSet = () => {
  return useContext(AvatarContext).setAvatar;
};

export const AvatarProvider = ({ children }) => {
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setPushUp(language.refreshData);
    getAvatar()
      .then((avatarGet) => {
        setPushUp(null);
        setAvatar(avatarGet);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [language.refreshData, language.failedToFetch, setPushUp, setPushUpError]);

  useEffect(() => {
    if (avatar) {
      setPushUp(language.updateData);
      setAvatarServe(avatar)
        .then((avatarGet) => {
          setPushUp(null);
          if (avatar !== avatarGet) setAvatar(avatarGet);
        })
        .catch((error) => {
          setPushUp(null);
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
  }, [
    avatar,
    language.updateData,
    language.failedToFetch,
    setPushUp,
    setPushUpError
  ]);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
