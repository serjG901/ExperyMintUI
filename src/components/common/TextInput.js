import React, { useEffect, useState } from "react";

export default function TextInput(props) {
  const style = `
      w-full 
      shadow
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

  useEffect(() => setAddStyle(`opacity-100 mb-4 py-2 px-2`), []);

  return (
    <input
      className={`${style} ${addStyle}`}
      id={props.property}
      type="text"
      maxLength="128"
      {...props}
    />
  );
}
