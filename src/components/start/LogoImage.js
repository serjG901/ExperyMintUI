import React, { useEffect, useState } from "react";

export default function LogoImage() {
  const [style, setStyle] = useState(
    `
    opacity-0
    transition-all 
    duration-1000
    delay-1000
    w-1/4 
    sm:self-start 
    self-center
    `
  );

  function animation() {
    setStyle(
      `
      opacity-100
      transition-all 
      duration-1000
      delay-1000
      w-1/4 
      sm:self-start 
      self-center
      `
    );
  }

  useEffect(() => {
    animation();
  });

  return <img className={style} src="logo.png" alt="logo" />;
}
