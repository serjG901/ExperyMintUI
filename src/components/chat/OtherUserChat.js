import React, { useState, useEffect } from "react";
import Message from "./Message";
import SendButton from "../common/SendButton";
import TextareaAutosize from "react-textarea-autosize";
import { useTheme } from "../core/ThemeProvider";
import { useLanguage } from "../core/LanguageProvider";
import {
  useChat,
  useMessageSet,
  useMessageForDeleteSet,
} from "../core/ChatProvider";
import { useUser } from "../core/UserProvider";

export default function OtherUserChat({ isOpen, otherUserID }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const user = useUser();
  const chat = useChat();
  const setMessage = useMessageSet();
  const setMessageForDelete = useMessageForDeleteSet();
  const [draft, setDraft] = useState("");
  const [localChat, setLocalChat] = useState([]);

  useEffect(()=>{
    setLocalChat(chat);
  }, [chat]);

  function handleDraftChange(event) {
    setDraft(event.currentTarget.value);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    const message = draft.trim();
    if (message === "") {
      setDraft("");
      return;
    }
    const localMessage = {
      from: user.name,
      to: otherUserID,
      text: draft,
      isSend: false,
      isRead: false
    };
    setLocalChat([...localChat, localMessage]);
    setMessage(message);
    setDraft("");
  }

  function handleDeleteMessage(messageID) {
    setMessageForDelete(messageID);
  }

  return (
    <div>
      <span className={`${themeColor.colorTextExplane}`}>
        {`${language.otherChat} ${otherUserID}`}
      </span>
      <div className="flex flex-col">
        {localChat.map((message) => (
          <Message
            isOpen={isOpen}
            key={message.date}
            message={message}
            onDeleteMessage={handleDeleteMessage}
            otherUserID={otherUserID}
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
