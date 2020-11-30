import React from "react";
import ChatList from "./ChatList";
import FormSendAndShowText from "../account/FormSendAndShowText";
import UserName from "../account/UserName";
import { OtherUsersProvider } from "../core/OtherUsersProvider";
import { ChatListProvider } from "../core/ChatListProvider";

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
