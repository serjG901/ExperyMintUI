export async function getMessages(otherUserID) {
  let response = await fetch("/getmessages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ otherUserID })
  });
  if (response.ok) {
    let json = await response.json();
    return json.messages;
  } else {
    console.log("getMessages Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function deleteMessage(otherUserID, messageID) {
  let response = await fetch(
    "/deletemessage/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ otherUserID, messageID })
    }
  );
  if (response.ok) {
    let json = await response.json();
    return json.status;
  } else {
    console.log("deleteMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function sendMessage(otherUserID, message, currentDate) {
  let response = await fetch("/sendmessage/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ otherUserID, message, currentDate })
  });
  if (response.ok) {
    let json = await response.json();
    return json.status;
  } else {
    console.log("sendMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setIsRead(otherUserID, messageID) {
  let response = await fetch("/setisread/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ otherUserID, messageID })
  });
  if (response.ok) {
    let json = await response.json();
  } else {
    console.log("deleteMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}
