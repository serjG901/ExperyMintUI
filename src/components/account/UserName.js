import React from "react";
import { useUser } from "../core/UserProvider";

export default function UserName() {
  const user = useUser();
  const style = `break-word text-5xl font-bold`;
  return <div className={style}>{user.name}</div>;
}
