const people = [
  {
    id: 1,
    results: {
      "1.jpg": 1,
      "50.jpg": 0,
      "7.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 2,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 3,
    results: {
      "100.jpg": 1,
      "7.jpg": 1,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 4,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 5,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 6,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 0,
    },
  },
  {
    id: 7,
    results: {
      "100.jpg": 0,
      "7.jpg": 1,
      "3.jpg": 1,
      "4.jpg": 0,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 8,
    results: {
      "100.jpg": 1,
      "7.jpg": 1,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 9,
    results: {
      "100.jpg": 1,
      "7.jpg": 1,
      "3.jpg": 1,
      "4.jpg": 0,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
  {
    id: 10,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
    },
  },
];

const user = {
  id: 1,
  results: {
    "100.jpg": 1,
    "7.jpg": 0,
    "3.jpg": 1,
    "4.jpg": 1,
    "30.jpg": 1,
    "2.jpg": 1,
    "50.jpg": 1,
    "22.jpg": 1,
  },
};

function computingUniqueIndex(user, people) {
  const gameResult = {};
  people.forEach((person) => {
    if (Object.keys(person.results).length !== 0)
      for (const [image, value] of Object.entries(person.results)) {
        if (user.results[image] !== undefined)
          gameResult[image] = {
            user: user.results[image],
            summ:
              gameResult[image] !== undefined
                ? gameResult[image].summ + value
                : value,
            count:
              gameResult[image] !== undefined ? gameResult[image].count + 1 : 1,
          };
      }
  });

  if (Object.keys(gameResult).length === 0) return 0;

  const uniqueImage = {};
  for (const [image, value] of Object.entries(gameResult)) {
    uniqueImage[image] = Math.abs(
      100 * value.user - Math.round((100 * value.summ) / value.count)
    );
  }
  if (Object.keys(uniqueImage).length === 0) return 0;

  const unique =
    Math.round(
      (100 * Object.values(uniqueImage).reduce((a, b) => a + b)) /
        Object.keys(uniqueImage).length
    ) / 100;

  return { result: unique, forImage: uniqueImage, full: gameResult };
}
const result = computingUniqueIndex(user, people);

console.log(result);
