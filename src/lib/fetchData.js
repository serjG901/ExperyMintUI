export async function isNameFree(name) {
  const response = await fetch("/isnamefree/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ name: name })
  });
  if (response.ok) {
    const isNameFree = await response.json();
    return isNameFree.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function login(user) {
  const response = await fetch("/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    const login = await response.json();
    return login.isLogin;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function isLoggedIn() {
  const response = await fetch("/isloggedin/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (response.ok) {
    const isLoggedIn = await response.json();
    return isLoggedIn.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function toLoggedOut() {
  const response = await fetch("/tologgedout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (response.ok) {
    const toLoggedOut = await response.json();
    return toLoggedOut.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setUser(user) {
  const response = await fetch("/setuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    const setUser = await response.json();
    return setUser.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getUser() {
  const response = await fetch("/getuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function updateUser(updateUser) {
  const response = await fetch("/updateuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(updateUser)
  });
  if (response.ok) {
    const user = await response.json();
    return user.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setAvatarToServer(newAvatar) {
  const response = await fetch("/setavatarserve/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({avatar: newAvatar})
  });
  if (response.ok) {
    const isSaved = await response.json();
    return isSaved.status;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getAvatar() {
  const response = await fetch("/getavatar/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (response.ok) {
    const userAvatar = await response.json();
    return userAvatar.avatar;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getOtherUsers(filter) {
  const response = await fetch(
    "/getotherusers/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ filter })
    }
  );
  if (response.ok) {
    const otherUsers = await response.json();
    return otherUsers;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getOtherUser(otherUserID) {
  const response = await fetch(
    "/getotheruser/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ otherUserID })
    }
  );
  if (response.ok) {
    const otherUser = await response.json();
    return otherUser;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getOtherAvatar(otherUserID) {
  const response = await fetch("/getotheravatar/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({otherUserID})
  });
  if (response.ok) {
    const userAvatar = await response.json();
    return userAvatar.avatar;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}
