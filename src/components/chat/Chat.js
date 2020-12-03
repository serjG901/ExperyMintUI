import React from "react";
import UserName from "../account/UserName";
import FormSendAndShowText from "../account/FormSendAndShowText";
import { OtherUsersProvider } from "../core/OtherUsersProvider";
import { ChatListProvider } from "../core/ChatListProvider";
import ChatList from "./ChatList";

export default function Chat() {
  return (
    <div className="py-4">
      <UserName />
      <FormSendAndShowText nameProperty="manifest" />
      <OtherUsersProvider>
        <ChatListProvider>
          <ChatList />
        </ChatListProvider>
      </OtherUsersProvider>
    </div>
  );
}
