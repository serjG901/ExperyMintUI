import React from "react";
import { useUser } from "../core/UserProvider";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";

export default function Message({ message, onDeleteMessage }) {
  const user = useUser();
  return user._id === message.from ? (
    <OutgoingMessage message={message} onDeleteMessage={onDeleteMessage} />
  ) : (
    <IncomingMessage message={message} onDeleteMessage={onDeleteMessage} />
  );
}
