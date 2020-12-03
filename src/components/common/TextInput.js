import React, { useEffect, useState } from "react";

export default function TextInput(props) {
  const style = `
      w-full shadow
      transition-all 
      duration-1000
      text-center
      text-gray-700
      rounded 
      appearance-none 
      focus:outline-none 
      focus:shadow-outline
  `;
  const [addStyle, setAddStyle] = useState(`opacity-0`);

  function animation() {
    setAddStyle(`opacity-100 mb-4 py-2 px-2`);
  }

  useEffect(() => animation());

  return (
    <input
      className={`${style} ${addStyle}`}
      id={props.nameProperty}
      type="text"
      maxLength="128"
      {...props}
    />
  );
}
