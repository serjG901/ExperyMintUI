export async function getMessages(otherUserID) {
  let response = await fetch("http://localhost:3000/getmessages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ otherUserID })
  });
  if (response.ok) {
    let json = await response.json();
    console.log(`getMessages - ${json.messages}`);
    return json.messages;
  } else {
    console.log("getMessages Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function deleteMessage(messageID) {
  let response = await fetch(
    "http://localhost:3000/deletemessage/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ messageID })
    }
  );
  if (response.ok) {
    let json = await response.json();
    console.log(`deleteMessage - ${json.status}`);
    return json.status;
  } else {
    console.log("deleteMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function sendMessage(otherUserID, message, currentDate) {
  let response = await fetch("http://localhost:3000/sendmessage/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ otherUserID, message, currentDate })
  });
  if (response.ok) {
    let json = await response.json();
    console.log(`sendMessage - ${json.status}`);
    return json.status;
  } else {
    console.log("sendMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setIsRead(messageID) {
  let response = await fetch("http://localhost:3000/setisread/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ messageID })
  });
  if (response.ok) {
    let json = await response.json();
    console.log(`setIsRead - ${json.status}`);
  } else {
    console.log("deleteMessage Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}
