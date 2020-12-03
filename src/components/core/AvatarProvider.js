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
    setPushUp(language.refreshData);
    getAvatar()
      .then((avatarOnServer) => {
        setPushUp(null);
        if (avatarOnServer) setAvatar(avatarOnServer);
      })
      .catch((error) => {
        setPushUp(null);
        setPushUpError(language.failedToFetch);
        console.log(error.message);
      });
  }, [language.refreshData, language.failedToFetch, setPushUp, setPushUpError]);

  useEffect(() => {
    avatarRef.current = avatar;
  });

  useEffect(() => {
    if (avatar !== avatarRef.current) {
      setPushUp(language.updateData);
      setAvatarToServer(avatar)
        .then((isSave) => {
          setPushUp(null);
          if (isSave === true) {
            setPushUpError(language.updateSucces);
          } else {
            setPushUpError(language.updateCrash);
            setAvatar(avatarRef.current);
          }
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
