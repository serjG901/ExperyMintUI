import React, { useEffect } from "react";
import { useUser } from "../core/UserProvider";
import { setIsRead } from "../../lib/fetchMessages";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";

export default function Message({
  isOpen,
  message,
  onDeleteMessage,
  otherUserID,
}) {
  const user = useUser();

  useEffect(() => {
    if (isOpen && user.name !== message.from && !message.isRead) {
      setIsRead(otherUserID, message.id);
    }
  }, [
    isOpen,
    message.id,
    user.name,
    otherUserID,
    message.from,
    message.isRead,
  ]);

  return user.name === message.from ? (
    <OutgoingMessage message={message} onDeleteMessage={onDeleteMessage} />
  ) : (
    <IncomingMessage message={message} onDeleteMessage={onDeleteMessage} />
  );
}
