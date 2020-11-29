import React, { useEffect } from "react";
import { useUser } from "../core/UserProvider";
import { useTheme } from "../core/ThemeProvider";
import { setIsRead } from "../../lib/fetchMessages";

export default function Message({ isSeen, msg, onDeleteMessage }) {
  const user = useUser();
  const themeColor = useTheme();

  const styleLeft = `
    self-start w-1/2 
    shadow-md
    px-2 m-2 rounded-md 
    text-right 
    ${themeColor.colorTextOtherUser} 
    ${themeColor.bgIncomingMessage}`;

  const styleRight = `
    relative
    shadow-md
    self-end w-1/2
    px-2 m-2 rounded-md 
    text-left 
    ${themeColor.colorTextMain}
    ${themeColor.bgOutgoingMessage}`;

  const styleDelete = `
    absolute
    top-0 right-0
    rounded-full 
    shadow-md
    w-6 h-6 
    cursor-pointer 
    text-center
    hover:bg-white
    hover:text-gray-700
    `;

  useEffect(() => {
    if (isSeen && user.name !== msg.from && !msg.isRead) {
      setIsRead(msg.id);
    }
  }, [isSeen, msg.id, user.name, msg.from, msg.isRead]);

  const Right = ({ rmsg }) => (
    <div className={styleRight}>
      {msg.id ? (
        <div onClick={() => onDeleteMessage(rmsg.id)} className={styleDelete}>
          x
        </div>
      ) : null}
      <p className="text-lg w-11/12 break-word">{rmsg.text}</p>
      <div className={`${themeColor.colorTextExplane} text-xs text-right`}>
        {new Date(rmsg.date).toLocaleString()}{" "}
        {rmsg.isSend ? <>&#10003;</> : null}
        {rmsg.isRead ? <>&#10003;</> : null}
      </div>
    </div>
  );

  const Left = ({ lmsg }) => (
    <div className={styleLeft}>
      <p className="text-lg break-word">{lmsg.text}</p>
      <div className={`${themeColor.colorTextExplane} text-xs text-left`}>
        {new Date(lmsg.date).toLocaleString()}{" "}
      </div>
    </div>
  );

  return user.name === msg.from ? <Right rmsg={msg} /> : <Left lmsg={msg} />;
}
