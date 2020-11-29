import React from "react";
import { useUser } from "../core/UserProvider";
import AvatarSetDelete from "./AvatarSetDelete";

export default function Avatar() {
  const user = useUser();

  return (
    <div className="p-4">
      {user.avatar ? (
        <img src={user.avatar} alt="avatar" className="inline-block" />
      ) : null}
      <AvatarSetDelete avatar={user.avatar} />
    </div>
  );
}
