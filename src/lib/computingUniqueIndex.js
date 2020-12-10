export async function computingUniqueIndex(resultsUser, people) {
  const gameResult = {};
  people.forEach((person) => {
    if (Object.keys(person.results).length !== 0)
      for (const [image, value] of Object.entries(person.results)) {
        if (resultsUser[image] !== undefined)
          gameResult[image] = {
            user: resultsUser[image],
            summ:
              gameResult[image] !== undefined
                ? gameResult[image].summ + value
                : value,
            count:
              gameResult[image] !== undefined ? gameResult[image].count + 1 : 1,
          };
      }
  });
  if (Object.keys(gameResult).length === 0) return null;

  const uniqueImage = {};
  for (const [image, value] of Object.entries(gameResult)) {
    uniqueImage[image] = Math.abs(
      100 * value.user - Math.round((100 * value.summ) / value.count)
    );
  }
  if (Object.keys(uniqueImage).length === 0) return null;

  const unique =
    Math.round(
      (100 * Object.values(uniqueImage).reduce((a, b) => a + b)) /
        Object.keys(uniqueImage).length
    ) / 100;

  return { result: unique, forImage: uniqueImage, full: gameResult };
}
