import React, { useEffect, useState, useContext } from "react";
import { useUser } from "./UserProvider";
import { getClosestUsers } from "../../lib/getIndexFunctions";
import { useOtherUsers } from "../core/OtherUsersProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

const ChatListContext = React.createContext();

export const useChatList = () => {
  return useContext(ChatListContext);
};

export const ChatListProvider = ({ children }) => {
  const user = useUser();
  const otherUsers = useOtherUsers();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [chatList, setChatList] = useState(null);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0 && otherUsers) {
      setPushUp(language.refreshClosest);
      getClosestUsers(user, otherUsers)
        .then((closestUsers) => {
          setPushUp(null);
          setChatList(closestUsers);
        })
        .catch((error) => {
          setPushUpError(error.message);
        });
    }
  }, [user, otherUsers, setPushUp, setPushUpError, language]);

  return (
    <ChatListContext.Provider value={chatList}>
      {children}
    </ChatListContext.Provider>
  );
};
