export async function getConversation(personId) {
  let response = await fetch(`/conversations/${personId}`);
  if (response.ok) {
    const json = await response.json();
    return json.conversation;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function sendMessage(personId, message, currentDate) {
  let response = await fetch(`/conversations/${personId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ message, currentDate }),
  });
  if (response.ok) {
    const json = await response.json();
    return json.conversation;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function deleteMessage(personId, messageId) {
  let response = await fetch(
    `/conversations/${personId}/messages/${messageId}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json.conversation;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setMessagesIsRead(personId) {
  let response = await fetch(`/conversations/${personId}/messages/`, {
    method: "PUT",
  });
  if (response.ok) {
    const json = await response.json();
    return json.messages;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}
