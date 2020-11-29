export async function getAllResultsReduce(otherUserInfo) {
  const usersID = Object.keys(otherUserInfo);
  const allResults = {};
  usersID.forEach((userID) => {
    const imagesIDAll = Object.keys(allResults);
    const imagesIDFromUser = Object.keys(otherUserInfo[userID].results);
    if (imagesIDAll.length) {
      imagesIDAll.forEach((imageIDAll) => {
        imagesIDFromUser.forEach((imageIDFromUser) => {
          if (imageIDAll !== imageIDFromUser) {
            allResults[imageIDFromUser] = allResults[imageIDFromUser] || [
              otherUserInfo[userID].results[imageIDFromUser]
            ];
          } else {
            allResults[imageIDAll] = [
              ...allResults[imageIDAll],
              otherUserInfo[userID].results[imageIDFromUser]
            ];
          }
        });
      });
    } else {
      const imagesIDAllFirst = Object.keys(otherUserInfo[userID].results);
      imagesIDAllFirst.forEach((imageIDAll) => {
        allResults[imageIDAll] = [otherUserInfo[userID].results[imageIDAll]];
      });
    }
  });
  const imagesID = Object.keys(allResults);
  const allResultsReduce = {};
  imagesID.forEach((imageID) => {
    const length = allResults[imageID].length;
    allResultsReduce[imageID] =
      allResults[imageID].reduce((a, b) => a + b) / length;
  });
  return allResultsReduce;
}

export async function getUniqumIndex(userResults, allResults) {
  const arrKeysUserResults = Object.keys(userResults);
  const arrUniqumIndex = arrKeysUserResults.map((key) => {
    if (allResults.hasOwnProperty(key))
      return Math.abs(userResults[key] - allResults[key]);
    return null;
  });
  const clearArrUniqumIndex = arrUniqumIndex.filter((item) => item !== null);
  const uniqumIndex =
    clearArrUniqumIndex.length !== 0
      ? Math.round(
          (clearArrUniqumIndex.reduce((a, b) => a + b) /
            clearArrUniqumIndex.length) *
            100
        )
      : 0;
  return uniqumIndex;
}

export function getIndexOfClosest(userResults, anyResults) {
  const arrKeysUserResults = Object.keys(userResults);
  const arrIndex = arrKeysUserResults.map((key) => {
    if (anyResults.hasOwnProperty(key)) {
      return 1 - Math.abs(userResults[key] - anyResults[key]);
    }
    return null;
  });
  const clearArrIndex = arrIndex.filter((item) => item !== null);
  const indexOfClosest =
    clearArrIndex.length !== 0
      ? Math.round(
          (clearArrIndex.reduce((a, b) => a + b) / clearArrIndex.length) * 100
        )
      : 0;
  return { index: indexOfClosest, amount: clearArrIndex.length };
}

export async function getClosestUsers(user, otherUsers) {
  const otherUsersID = Object.keys(otherUsers);
  const closestUsers = otherUsersID.map((otherUserID) => {
    return {
      id: otherUserID,
      name: otherUsers[otherUserID].name,
      manifest: otherUsers[otherUserID].manifest,
      mistruth: otherUsers[otherUserID].mistruth,
      avatar: otherUsers[otherUserID].avatar,
      tags: otherUsers[otherUserID].tags,
      indexOfClosest: getIndexOfClosest(
        user.results,
        otherUsers[otherUserID].results
      )
    };
  });
  closestUsers.sort((a, b) => {
    return (
      b.indexOfClosest.index * b.indexOfClosest.amount -
      a.indexOfClosest.index * a.indexOfClosest.amount
    );
  });
  return closestUsers;
}
