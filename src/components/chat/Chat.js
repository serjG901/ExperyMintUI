import React from "react";
import ChatList from "./ChatList";
import FormSendAndShowText from "../common/FormSendAndShowText";
import UserName from "../account/UserName";
import { OtherUsersProvider } from "../core/OtherUsersProvider";
import { ChatListProvider } from "../core/ChatListProvider";

export default function Chat() {
  return (
    <div>
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
