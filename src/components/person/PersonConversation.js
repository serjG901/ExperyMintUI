import React, { useState, useEffect } from "react";
import { useLanguage } from "../core/LanguageProvider";
import { useUser } from "../core/UserProvider";
import {
  useConversation,
  useMessageSet,
  useMessageForDeleteSet,
} from "../core/ConversationProvider";
import Message from "./Message";
import SendButton from "../common/SendButton";
import TextareaAutosize from "react-textarea-autosize";

export default function PersonConversation({ personId, name, themeColor }) {
  const language = useLanguage();
  const user = useUser();
  const conversation = useConversation();
  const setMessage = useMessageSet();
  const setMessageForDelete = useMessageForDeleteSet();
  const [draft, setDraft] = useState("");
  const [localConversation, setLocalConversation] = useState([]);

  useEffect(() => {
    if (conversation) setLocalConversation(conversation);
  }, [conversation]);

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
      from: user._id,
      to: personId,
      text: draft,
      isSend: false,
      isRead: false,
    };
    setLocalConversation([...localConversation, localMessage]);
    setMessage(message);
    setDraft("");
  }

  function handleDeleteMessage(id) {
    setMessageForDelete(id);
  }

  return (
    <div>
      {localConversation.length !== 0 ? (
        <div className="flex flex-col">
          {localConversation.map((message) => (
            <Message
              themeColor={themeColor}
              key={`${personId}${message.date}`}
              message={message}
              onDeleteMessage={handleDeleteMessage}
            />
          ))}
        </div>
      ) : null}
      <form className="flex justify-end" onSubmit={handleMessageSubmit}>
        <TextareaAutosize
          type="text"
          className="
            w-2/3             
            mb-4 
            py-2 
            px-2 
            text-gray-700
            rounded 
            shadow
            appearance-none 
            focus:outline-none 
            focus:shadow-outline"
          placeholder={`${language.messageFor} ${name}`}
          onChange={handleDraftChange}
          value={draft}
        />
        <SendButton themeColor={themeColor}/>
      </form>
    </div>
  );
}
