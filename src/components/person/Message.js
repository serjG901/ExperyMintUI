import React from "react";
import { useUser } from "../core/UserProvider";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";

export default function Message({ themeColor, message, onDeleteMessage }) {
  const user = useUser();
  return user._id === message.from ? (
    <OutgoingMessage
      themeColor={themeColor}
      message={message}
      onDeleteMessage={onDeleteMessage}
    />
  ) : (
    <IncomingMessage
      themeColor={themeColor}
      message={message}
      onDeleteMessage={onDeleteMessage}
    />
  );
}
