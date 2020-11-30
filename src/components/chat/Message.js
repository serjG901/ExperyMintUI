import React, { useEffect } from "react";
import { useUser } from "../core/UserProvider";
import { setIsRead } from "../../lib/fetchMessages";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";

export default function Message({ isSeen, message, onDeleteMessage }) {
  const user = useUser();

  useEffect(() => {
    if (isSeen && user.name !== message.from && !message.isRead) {
      setIsRead(message.id);
    }
  }, [isSeen, message.id, user.name, message.from, message.isRead]);

  return user.name === message.from ? (
    <OutgoingMessage message={message} onDeleteMessage={onDeleteMessage} />
  ) : (
    <IncomingMessage message={message} onDeleteMessage={onDeleteMessage} />
  );
}
