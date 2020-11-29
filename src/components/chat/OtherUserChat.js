import React, { useEffect, useState } from "react";
import {
  sendMessage,
  getMessages,
  deleteMessage
} from "../../lib/fetchMessages";
import { useUser } from "../core/UserProvider";
import Message from "./Message";
import SendButton from "../common/SendButton";
import TextareaAutosize from "react-textarea-autosize";
import { useTheme } from "../core/ThemeProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { useLanguage } from "../core/LanguageProvider";

export default function OtherUserChat({ isOpen, otherUserID }) {
  const user = useUser();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const language = useLanguage();

  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSync, setIsSync] = useState(true);
  const themeColor = useTheme();

  function handleDraftChange(event) {
    setDraft(event.currentTarget.value);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    if (draft === "") return;
    const currentDate = Date.now();
    const oldMessages = messages;
    const oldMessage = draft;
    setMessages([
      ...messages,
      {
        from: user.name,
        to: otherUserID,
        text: draft,
        date: currentDate,
        isSend: false,
        isRead: false
      }
    ]);
    setDraft("");
    setPushUp(language.otherMessageSend);
    sendMessage(otherUserID, draft, currentDate)
      .then((status) => {
        if (!status) {
          setPushUp(language.otherMessageSendCrash);
          setMessages(oldMessages);
          setDraft(oldMessage);
        } else {
          setPushUp(null);
          setIsSync(true);
        }
      })
      .catch((error) => {
        setPushUpError(error.message);
      });
  }

  useEffect(() => {
    setPushUp(language.otherMessagesRefresh);
    getMessages(otherUserID)
      .then((messages) => {
        setPushUp(null);
        setMessages(messages);
        setIsSync(false);
      })
      .catch((error) => {
        setPushUpError(error.message);
      });
  }, [otherUserID, isSync, setPushUp, setPushUpError, language]);

  function handleDeleteMessage(messageID) {
    const oldMessages = messages;
    setMessages(messages.filter((msg) => msg.id !== messageID));
    setPushUp(language.otherMessageDelete);
    deleteMessage(messageID)
      .then((status) => {
        if (!status) {
          setPushUp(language.otherMessageDeleteCrash);
          setMessages(oldMessages);
        } else {
          setPushUp(null);
        }
      })
      .catch((error) => {
        setPushUpError(error.message);
      });
  }

  return (
    <div>
      <span className={`${themeColor.colorTextExplane}`}>
        {`${language.otherChat} ${otherUserID}`}
      </span>

      <div className="flex flex-col">
        {messages.map((msg) => (
          <Message
            isSeen={isOpen}
            key={msg.date}
            msg={msg}
            onDeleteMessage={handleDeleteMessage}
          />
        ))}
      </div>

      <form className="flex justify-end" onSubmit={handleMessageSubmit}>
        <TextareaAutosize
          type="text"
          className="w-2/3             
            mb-4 py-2 px-2 
            text-gray-700
            rounded shadow
            appearance-none 
            focus:outline-none 
            focus:shadow-outline"
          placeholder={`${language.messageFor} ${otherUserID}`}
          onChange={handleDraftChange}
          value={draft}
        />
        <SendButton />
      </form>
    </div>
  );
}
