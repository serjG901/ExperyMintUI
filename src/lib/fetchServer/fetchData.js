export async function isNameFree(name) {
  const response = await fetch("http://localhost:3000/isnamefree/", {
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
  const response = await fetch("http://localhost:3000/login/", {
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
  const response = await fetch("http://localhost:3000/isloggedin/", {
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

export async function setUser(user) {
  const response = await fetch("http://localhost:3000/setuser/", {
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
  const response = await fetch("http://localhost:3000/getuser/", {
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
  const response = await fetch("http://localhost:3000/updateuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(updateUser)
  });
  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function setAvatarServe(newAvatar) {
  const response = await fetch("http://localhost:3000/setavatarserve/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({avatar: newAvatar})
  });
  if (response.ok) {
    const userAvatar = await response.json();
    return userAvatar.avatar;
  } else {
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getAvatar() {
  const response = await fetch("http://localhost:3000/getavatar/", {
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
    "http://localhost:3000/getotherusers/",
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

export async function getOtherAvatar(otherUserID) {
  const response = await fetch("http://localhost:3000/getotheravatar/", {
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
