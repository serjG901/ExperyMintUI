import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import StatisticOfUser from "./StatisticOfUser";

export default function Account() {
  return (
    <div className="flex flex-col py-4">
      <Avatar />
      <div className="flex justify-center">
        <UserInfo />
        <StatisticOfUser />
      </div>
    </div>
  );
}