import React from "react";
import UserName from "./UserName";
import FormSendAndShowText from "./FormSendAndShowText";

export default function UserInfo() {
  return (
    <div className="w-1/2">
      <UserName />
      <FormSendAndShowText nameProperty="tags" />
    </div>
  );
}
