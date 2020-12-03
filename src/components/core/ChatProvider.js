import React, { useState, useContext, useEffect } from "react";
import { getMessages, sendMessage, deleteMessage } from "../../lib/fetchMessages";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";
import { useUser } from "../core/UserProvider";

const ChatContext = React.createContext();

export const useChat = () => {
  return useContext(ChatContext).chat;
};

export const useChatSet = () => {
  return useContext(ChatContext).setChat;
};

export const useMessageSet = () => {
  return useContext(ChatContext).setMessage;
};

export const useMessageForDeleteSet = () => {
    return useContext(ChatContext).setMessageForDelete;
  };

export const ChatProvider = ({ otherUserID, children }) => {
  const user = useUser();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [messageForDelete, setMessageForDelete] = useState(null);
  const [isSynchronized, setIsSynchronized] = useState(false);

  useEffect(() => {
    let isSubscribe = true;
    if (isSynchronized === false) {
      setPushUp(language.otherMessagesRefresh);
      getMessages(otherUserID)
        .then((messages) => {
          setPushUp(null);
          isSubscribe && setChat(messages);
          isSubscribe && setIsSynchronized(true);
        })
        .catch((error) => {
          isSubscribe && setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribe = false;
    };
  }, [otherUserID, isSynchronized, language, setPushUp, setPushUpError]);

  useEffect(() => {
    let isSubscribe = true;
    if (message !== "") {
      const currentDate = Date.now();
      setPushUp(language.otherMessageSend);
      sendMessage(otherUserID, message, currentDate)
        .then((status) => {
          if (status === false) {
            isSubscribe && setPushUp(language.otherMessageSendCrash);
            isSubscribe && setMessage("");
          }
          if (status === true) {
            setPushUp(null);
            isSubscribe && setIsSynchronized(false);
            isSubscribe && setMessage("");
          }
        })
        .catch((error) => {
          isSubscribe && setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribe = false;
    };
  }, [message, user.name, otherUserID, language, setPushUp, setPushUpError]);

  useEffect(() => {
    let isSubscribe = true;
    if (messageForDelete !== null) {
      setPushUp(language.otherMessageDelete);
      deleteMessage(otherUserID, messageForDelete)
        .then((status) => {
          if (status === false) {
            isSubscribe && setPushUp(language.otherMessageDeleteCrash);
            isSubscribe && setMessageForDelete(null);
          }
          if (status === true) {
            setPushUp(null);
            isSubscribe && setMessageForDelete(null);
            isSubscribe && setIsSynchronized(false);
          }
        })
        .catch((error) => {
          setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribe = false;
    };
  }, [messageForDelete, otherUserID, language, setPushUp, setPushUpError]);

  return (
    <ChatContext.Provider
      value={{ chat, setMessage, setMessageForDelete }}
    >
      {children}
    </ChatContext.Provider>
  );
};
