import React, { useEffect, useState } from "react";

export default function LogoImage() {
  const style = `
    transition-all 
    duration-1000 
    delay-1000
    w-1/4 
    sm:self-start 
    self-center
    `;
  const [addStyle, setAddStyle] = useState(`opacity-0`);

  useEffect(() => {
    setAddStyle(`opacity-100`);
  }, []);

  return <img className={`${style} ${addStyle}`} src="logo.png" alt="logo" />;
}
