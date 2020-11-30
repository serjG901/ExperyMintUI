let loginData = new Map();
let publicData = new Map();

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
    password: newUser.password,
  });
  const publicUser = {
    name: newUser.name,
    avatar: "",
    results: {},
    score: 0,
    mistruth: 0,
    manifest: "",
    tags: "",
    filter: "",
  };
  publicData.set(newUser.name, publicUser);
  User.currentID = newUser.name;
  return true;
}

export async function getUser() {
  const user = publicData.get(User.currentID);
  return user;
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
            avatar: entry[1].avatar,
            tags: entry[1].tags,
            results: entry[1].results,
          },
        };
    }
  }
  return otherUsersInfo;
}

export async function isNameFree(name) {
  return !loginData.has(name);
}

export async function login({ name, password }) {
  const user = loginData.get(name);
  if (user.password !== password) return false;
  User.currentID = name;
  return true;
}
