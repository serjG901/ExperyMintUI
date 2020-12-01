import React from "react";
import AvatarSetDelete from "./AvatarSetDelete";
import { useAvatar } from "../core/AvatarProvider";

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
