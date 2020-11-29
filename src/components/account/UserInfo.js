import React from "react";
import FormSendAndShowText from "../common/FormSendAndShowText";
import UserName from "./UserName";

export default function UserInfo() {
  return (
    <div className="w-1/2">
      <UserName />
      <FormSendAndShowText nameProperty="tags" />
    </div>
  );
}
