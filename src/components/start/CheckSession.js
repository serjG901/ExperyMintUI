import React, { useEffect } from "react";
import { useCheckSession } from "../core/UserProvider";

export default function CheckSession() {
  const checkSession = useCheckSession();
  useEffect(() => {
    checkSession();
  }, []);
  return <></>;
}
