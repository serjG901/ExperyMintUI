import React, { useState, useContext, useEffect, useRef } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import {
  getConversation,
  sendMessage,
  deleteMessage,
  setMessagesIsRead,
} from "../../lib/fetchMessages";

const ConversationContext = React.createContext();

export const useConversation = () => {
  return useContext(ConversationContext).conversation;
};

export const useConversationSet = () => {
  return useContext(ConversationContext).setConversation;
};

export const useMessageSet = () => {
  return useContext(ConversationContext).setMessage;
};

export const useMessageForDeleteSet = () => {
  return useContext(ConversationContext).setMessageForDelete;
};

export const ConversationProvider = ({ personId, opened, children }) => {
  const language = useLanguage();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");
  const [messageForDelete, setMessageForDelete] = useState(null);
  const conversationRef = useRef([]);

  useEffect(() => {
    let isSubscribe = true;
    if (personId && opened === true) {
      setPushUp(language.otherMessagesRefresh);
      getConversation(personId)
        .then((messages) => {
          setPushUp(null);
          conversationRef.current = messages;
          isSubscribe && setConversation(messages);
        })
        .catch((error) => {
          isSubscribe && setPushUpError(language.failedToFetch);
          console.log(error.message);
        });
    }
    return () => {
      isSubscribe = false;
    };
  }, [personId, opened, language, setPushUp, setPushUpError]);

  useEffect(() => {
    let isSubscribe = true;
    if (message !== "") {
      const currentDate = Date.now();
      setPushUp(language.otherMessageSend);
      sendMessage(personId, message, currentDate)
        .then((messages) => {
          if (messages === null) throw new Error("sendMessage");
          if (messages.length !== 0) {
            setPushUp(null);
            conversationRef.current = messages;
            isSubscribe && setConversation(messages);
            isSubscribe && setMessage("");
          } else {
            setConversation(conversationRef.current);
            isSubscribe && setPushUpError(language.otherMessageSendCrash);
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
  }, [message, personId, language, setPushUp, setPushUpError]);

  useEffect(() => {
    let isSubscribe = true;
    if (messageForDelete !== null) {
      setPushUp(language.otherMessageDelete);
      deleteMessage(personId, messageForDelete)
        .then((messages) => {
          if (messages !== 0) {
            setPushUp(null);
            conversationRef.current = messages;
            isSubscribe && setConversation(messages);
            isSubscribe && setMessageForDelete(null);
          } else {
            setConversation(conversationRef.current);
            isSubscribe && setPushUp(language.otherMessageDeleteCrash);
            isSubscribe && setMessageForDelete(null);
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
  }, [messageForDelete, personId, language, setPushUp, setPushUpError]);

  useEffect(() => {
    let isSubscribe = true;
    if (opened === true && conversation && conversation.length !== 0) {
      const notReadMessages = conversation.find((message) => {
        return message.from === personId && message.isRead === false;
      });
      if (notReadMessages) {
        setMessagesIsRead(personId)
          .then((messages) => {
            if (messages === null) throw new Error("messages not read");
            conversationRef.current = messages;
            isSubscribe && setConversation(messages);
          })
          .catch((error) => {
            isSubscribe && setPushUpError(language.failedToFetch);
            console.log(error.message);
          });
      }
    }
    return () => {
      isSubscribe = false;
    };
  }, [opened, conversation, personId, language, setPushUpError]);

  return (
    <ConversationContext.Provider
      value={{ conversation, setMessage, setMessageForDelete }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
