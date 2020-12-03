import React, { useState, useContext, useEffect, useRef } from "react";
import { getAvatar, setAvatarToServer } from "../../lib/fetchData";
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
  const avatarRef = useRef();

  useEffect(() => {
    let isSubscribe = true;
    setPushUp(language.refreshData);
    getAvatar()
      .then((avatarOnServer) => {
        setPushUp(null);
        if (avatarOnServer) {
          isSubscribe && setAvatar(avatarOnServer);
        }
      })
      .catch((error) => {
        setPushUp(null);
        isSubscribe && setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
    return () => {
      isSubscribe = false;
    };
  }, [language.refreshData, language.failedToFetch, setPushUp, setPushUpError]);

  useEffect(() => {
    avatarRef.current = avatar;
  });

  useEffect(() => {
    let isSubscribe = true;
    setPushUp(language.updateData);
    setAvatarToServer(avatar)
      .then((isSave) => {
        setPushUp(null);
        if (isSave === true) {
          isSubscribe && setPushUpError(language.updateSucces);
        } else {
          isSubscribe && setPushUpError(language.updateCrash);
          isSubscribe && setAvatar(avatarRef.current);
        }
      })
      .catch((error) => {
        setPushUp(null);
        isSubscribe && setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
    return () => {
      isSubscribe = false;
    };
  }, [
    avatar,
    language.updateData,
    language.updateSucces,
    language.updateCrash,
    language.failedToFetch,
    setPushUp,
    setPushUpError,
  ]);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
