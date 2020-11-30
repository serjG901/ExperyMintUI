export async function setUser(user) {
  let response = await fetch("https://287yb.sse.codesandbox.io/setuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    let json = await response.json();
    console.log(`setUser status - ${json.status}`);
    return json.status;
  } else {
    console.log("setUser Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getUser() {
  let response = await fetch("https://287yb.sse.codesandbox.io/getuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  if (response.ok) {
    let json = await response.json();
    console.log("getUser");
    console.log(json);
    return json;
  } else {
    console.log("getUser Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function updateUser(updateUser) {
  let response = await fetch("https://287yb.sse.codesandbox.io/updateuser/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(updateUser)
  });
  if (response.ok) {
    let json = await response.json();
    console.log(json);
    return json;
  } else {
    console.log("getUser Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function getOtherUsers(filter) {
  let response = await fetch(
    "https://287yb.sse.codesandbox.io/getotherusers/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ filter })
    }
  );
  if (response.ok) {
    let json = await response.json();
    console.log(json);
    return json;
  } else {
    console.log("getOtherUsers Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function isNameFree(name) {
  console.log(name);
  let response = await fetch("https://287yb.sse.codesandbox.io/isnamefree/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ name: name })
  });
  console.log(response);
  if (response.ok) {
    let json = await response.json();
    console.log(`name status - ${json.status}`);
    return json.status;
  } else {
    console.log("isNameFree Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}

export async function login(user) {
  let response = await fetch("https://287yb.sse.codesandbox.io/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(user)
  });
  if (response.ok) {
    let json = await response.json();
    console.log(`login status - ${json.isLogin}`);
    return json.isLogin;
  } else {
    console.log("login Ошибка HTTP: " + response.status);
    return new Error("Ошибка HTTP: " + response.status);
  }
}
