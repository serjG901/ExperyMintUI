import {User} from "./fetchData";
let messagesData = [];

export async function getMessages(otherUserID) {
  const filtredMessages = messagesData.filter(
    (msg) =>
      (msg.from === User.currentID && msg.to === otherUserID) ||
      (msg.from === otherUserID && msg.to === User.currentID)
  );
  return filtredMessages;
}

export async function deleteMessage(messageID) {
  messagesData = messagesData.filter((msg) => msg.id !== messageID);
  return true;
}

export async function sendMessage(otherUserID, message, currentDate) {
  messagesData = [
    ...messagesData,
    {
      id: [otherUserID, currentDate].join(""),
      from: User.currentID,
      to: otherUserID,
      text: message,
      date: currentDate,
      isSend: true,
      isRead: false,
    },
  ];
  return true;
}

export async function setIsRead(messageID) {
  messagesData = messagesData.map((msg) =>
    msg.id === messageID ? { ...msg, isRead: true } : msg
  );
  return true;
}
