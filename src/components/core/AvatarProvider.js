import React, { useState, useContext, useEffect, useRef } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useUser } from "../core/UserProvider";
import { getAvatar, uploadAvatar } from "../../lib/fetchData";

const AvatarContext = React.createContext();

export const useAvatar = () => {
  return useContext(AvatarContext).avatar;
};

export const useAvatarSet = () => {
  return useContext(AvatarContext).setAvatar;
};

export const AvatarProvider = ({ children }) => {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const user = useUser();
  const [avatar, setAvatar] = useState(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    let isSubscribe = true;
    if (user && avatar === null && avatarRef.current === null) {
      setPushUp(language.refreshData);
      getAvatar(user._id)
        .then((avatarInDb) => {
          setPushUp(null);
          if (avatarInDb !== null) {
            avatarRef.current = avatarInDb;
            isSubscribe && setAvatar(avatarInDb);
          }
        })
        .catch((error) => {
          setPushUp(null);
          isSubscribe && setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    if (avatar !== avatarRef.current) {
      setPushUp(language.updateData);
      uploadAvatar(user._id, avatar)
        .then((updatedAvatar) => {
          setPushUp(null);
          avatarRef.current = updatedAvatar;
          isSubscribe && setAvatar(updatedAvatar);
          isSubscribe && setPushUpError(language.updateSucces);
        })
        .catch((error) => {
          setPushUp(null);
          isSubscribe && setAvatar(avatarRef.current);
          isSubscribe && setPushUpError(language.updateCrash);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribe = false;
    };
  }, [user._id, avatar, language, setPushUp, setPushUpError]);

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
