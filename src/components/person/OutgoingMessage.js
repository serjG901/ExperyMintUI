import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function OutgoingMessage({ message, onDeleteMessage }) {
  const themeColor = useTheme();

  const style = `
    relative
    shadow-md
    self-end
    w-1/2
    px-2 
    m-2 
    rounded-md 
    text-left 
    ${themeColor.colorTextMain}
    ${themeColor.bgOutgoingMessage}
    `;

  const styleDelete = `
    absolute
    top-0 
    right-0
    rounded-full 
    w-6 
    h-6 
    cursor-pointer 
    text-center
    hover:shadow-md
    hover:bg-white
    hover:bg-opacity-25
    `;

  return (
    <div className={style}>
      {message.id ? (
        <div
          onClick={() => onDeleteMessage(message.id)}
          className={styleDelete}
        >
          x
        </div>
      ) : null}
      <p className="text-lg w-11/12 break-word">{message.text}</p>
      <div className={`${themeColor.colorTextExplane} text-xs text-right`}>
        {message.date ? new Date(message.date).toLocaleString() : null}{" "}
        {message.isSend ? <>&#10003;</> : null}
        {message.isRead ? <>&#10003;</> : null}
      </div>
    </div>
  );
}
