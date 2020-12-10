export async function computingPersonList(resultsUser, people) {
  const peopleComparedUser = {};
  people.forEach((person) => {
    if (Object.keys(person.results).length !== 0)
      for (const [image, value] of Object.entries(person.results)) {
        if (resultsUser[image] !== undefined)
          peopleComparedUser[person._id] =
            peopleComparedUser[person._id] !== undefined
              ? {
                  ...peopleComparedUser[person._id],
                  [image]: Math.abs(resultsUser[image] - value),
                }
              : { [image]: Math.abs(resultsUser[image] - value) };
      }
  });

  if (Object.keys(peopleComparedUser).length === 0) return null;

  const personList = [];
  for (const [_id, comparedResult] of Object.entries(peopleComparedUser)) {
    personList.push({
      _id,
      closest:
        100 -
        Math.round(
          (10000 * Object.values(comparedResult).reduce((a, b) => a + b)) /
            Object.keys(comparedResult).length
        ) /
          100,
      comparedImage: Object.keys(comparedResult).length,
    });
  }
  if (personList.length === 0) return null;

  personList.sort(
    (a, b) => b.closest * b.comparedImage - a.closest * a.comparedImage
  );
  const cut = Object.keys(resultsUser).length;
  return personList.slice(0, cut);
}
