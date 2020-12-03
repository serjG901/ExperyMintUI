import React, { useState } from "react";
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

export default function OtherUserChat({ isOpen, otherUserID }) {
  const themeColor = useTheme();
  const language = useLanguage();
  const chat = useChat();
  const setMessage = useMessageSet();
  const setMessageForDelete = useMessageForDeleteSet();
  const [draft, setDraft] = useState("");

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
        {chat.map((message) => (
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
