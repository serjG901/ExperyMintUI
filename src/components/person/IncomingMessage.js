import React from "react";

export default function IncomingMessage({
  themeColor,
  message,
  onDeleteMessage,
}) {
  const style = `
    relative
    self-start 
    w-1/2 
    shadow-md
    px-2 
    m-2 
    rounded-md 
    text-right 
    ${themeColor.colorTextOtherUser} 
    ${themeColor.bgIncomingMessage}
    `;

  const styleDelete = `
    absolute
    top-0 
    left-0
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
      <p className="text-lg break-word">{message.text}</p>
      <div className={`${themeColor.colorTextExplane} text-xs text-left`}>
        {message.date ? new Date(message.date).toLocaleString() : null}{" "}
        {message.isSend ? <>&#10003;</> : null}
        {message.isRead ? <>&#10003;</> : null}
      </div>
    </div>
  );
}
