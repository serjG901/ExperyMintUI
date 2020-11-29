import React from "react";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <LogoImage />
      <LogoText />
    </div>
  );
}
