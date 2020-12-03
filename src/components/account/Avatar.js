import React from "react";
import { useAvatar } from "../core/AvatarProvider";
import AvatarSetDelete from "./AvatarSetDelete";

export default function Avatar() {
  const avatar = useAvatar();

  return (
    <div className="p-4">
      {avatar ? (
        <img src={avatar} alt="avatar" className="inline-block" />
      ) : null}
      <AvatarSetDelete />
    </div>
  );
}
