import queryString from "query-string";

export async function checkUserId(userId) {
  const response = await fetch(`/userid/${userId}`);
  if (response.ok) {
    const json = await response.json();
    return json.id;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function addUser(newUser) {
  const response = await fetch("/users/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newUser),
  });
  if (response.ok) {
    const json = await response.json();
    return json.user;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function login(loginInfo) {
  const response = await fetch("/session/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(loginInfo),
  });
  if (response.ok) {
    const json = await response.json();
    return json.user;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function isLoggedIn() {
  const response = await fetch("/session/");
  if (response.ok) {
    const json = await response.json();
    return json.authUser;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function toLoggedOut() {
  const response = await fetch("/session/", {
    method: "DELETE",
  });
  if (response.ok) {
    const json = await response.json();
    return json.logOutUser;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function updateUser(userUpdate) {
  const response = await fetch(`/users/${userUpdate._id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userUpdate),
  });
  if (response.ok) {
    const json = await response.json();
    return json.updatedUser;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getAvatar(id) {
  const response = await fetch(`/avatars/${id}`);
  if (response.ok) {
    const json = await response.json();
    return json.avatar;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function uploadAvatar(id, avatar) {
  const response = await fetch(`/avatars/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ avatar }),
  });
  if (response.ok) {
    const json = await response.json();
    return json.updatedAvatar;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}

export async function people(filter) {
  const url = queryString.stringifyUrl({ url: "/people", query: { filter } });
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    return json.people;
  } else {
    throw new Error("Ошибка HTTP: " + response.status);
  }
}
