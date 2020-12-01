let loginData = new Map();
let publicData = new Map();
let avatarData = new Map();

export let User = {
  set currentID(value) {
    this.id = value;
  },
  get currentID() {
    return this.id;
  }
};

export async function setUser(newUser) {
  if (loginData.has(newUser.name)) return false;
  loginData.set(newUser.name, {
    name: newUser.name,
    password: newUser.password
  });
  const publicUser = {
    name: newUser.name,
    results: {},
    score: 0,
    mistruth: 0,
    manifest: "",
    tags: "",
    filter: "",
    lastUpdate: newUser.lastUpdate
  };
  publicData.set(newUser.name, publicUser);
  avatarData.set(newUser.name, { avatar: null });
  User.currentID = newUser.name;
  return true;
}

export async function getUser() {
  const user = publicData.get(User.currentID);
  return user;
}

export async function setAvatarServe(avatar) {
  avatarData.set(User.currentID, { avatar });
  const userAvatar = avatarData.get(User.currentID);
  return userAvatar.avatar;
}

export async function getAvatar() {
  const userAvatar = avatarData.get(User.currentID);
  return userAvatar.avatar;
}

export async function getOtherAvatar(otherUserID) {
  const otherAvatar = avatarData.get(otherUserID);
  return otherAvatar.avatar;
}

export async function updateUser(newUserData) {
  publicData.set(User.currentID, newUserData);
  const user = publicData.get(User.currentID);
  return user;
}

export async function getOtherUsers(filter) {
  let otherUsersInfo = {};
  const filterTags = filter ? filter.toLowerCase() : "";
  for (let entry of publicData) {
    if (entry[0] !== User.currentID) {
      if (entry[1]["tags"].toLowerCase().indexOf(filterTags) !== -1)
        otherUsersInfo = {
          ...otherUsersInfo,
          [entry[0]]: {
            name: entry[1].name,
            manifest: entry[1].manifest,
            mistruth: entry[1].mistruth,
            tags: entry[1].tags,
            lastUpdate: entry[1].lastUpdate,
            results: entry[1].results
          }
        };
    }
  }
  return otherUsersInfo;
}

export async function isNameFree(name) {
  return !loginData.has(name);
}

export async function login({ name, password, lastVisit }) {
  const user = loginData.get(name);
  if (user.password !== password) return false;
  const userOld = publicData.get(name);
  publicData.set(name, { ...userOld, lastVisit });
  User.currentID = name;
  return true;
}

export async function isLoggedIn() {
  const isLoggedIn = User.currentID ? true : false;
  console.log(isLoggedIn);
  return isLoggedIn;
}
