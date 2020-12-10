const people = [
  {
    _id: 1,
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
    _id: 2,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
      "22.jpg": 1,
    },
  },
  {
    _id: 3,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
      "22.jpg": 1,
    },
  },
  {
    _id: 4,
    results: {
      "100.jpg": 1,
      "7.jpg": 0,
      "3.jpg": 1,
      "4.jpg": 1,
      "30.jpg": 1,
      "2.jpg": 1,
      "22.jpg": 1,
    },
  },
  {
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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
    _id: 8,
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
    _id: 9,
    results: {
      "100.jpg": 1,
      "7.jpg": 1,
      "3.jpg": 1,
      "4.jpg": 0,
      "30.jpg": 1,
      "2.jpg": 1,
      "66.jpg": 1,
    },
  },
  {
    _id: 10,
    results: {
      "1.jpg": false,
      "17.jpg": true,
      "19.jpg": true,
      "21.jpg": false,
      "25.jpg": true,
      "27.jpg": false,
      "31.jpg": true,
      "43.jpg": false,
      "44.jpg": false,
      "46.jpg": false,
      "52.jpg": false,
      "54.jpg": false,
      "61.jpg": false,
      "66.jpg": true,
      "76.jpg": true,
      "79.jpg": true,
      "89.jpg": false,
      "91.jpg": false,
      "95.jpg": false,
      "96.jpg": false,
      "99.jpg": false,
      "100.jpg": false,
      "107.png": true,
      "108.png": true,
      "109.png": false,
      "118.png": true,
      "124.png": false,
    },
  },
];

const user = {
  _id: 1,
  score: 5,
  results: {
    "3.jpg": true,
    "5.jpg": true,
    "9.jpg": true,
    "14.jpg": true,
    "16.jpg": false,
    "24.jpg": true,
    "28.jpg": true,
    "31.jpg": false,
    "46.jpg": true,
    "53.jpg": false,
    "54.jpg": false,
    "55.jpg": false,
    "58.jpg": true,
    "63.jpg": false,
    "68.jpg": false,
    "74.jpg": false,
    "75.jpg": true,
    "83.jpg": true,
    "86.jpg": true,
    "95.jpg": true,
    "96.jpg": false,
    "99.jpg": true,
    "100.jpg": true,
    "105.png": true,
    "108.png": false,
    "112.png": true,
    "119.png": true,
    "120.png": false,
    "121.png": false,
    "124.png": true,
  },
};

function computingClosestPersonList(user, people) {
  const peopleResult = {};
  people.forEach((person) => {
    if (Object.keys(person.results).length !== 0)
      for (const [image, value] of Object.entries(person.results)) {
        if (user.results[image] !== undefined)
          peopleResult[person._id] =
            peopleResult[person._id] !== undefined
              ? {
                  ...peopleResult[person._id],
                  [image]: Math.abs(user.results[image] - value),
                }
              : { [image]: Math.abs(user.results[image] - value) };
      }
  });

  if (Object.keys(peopleResult).length === 0) return null;

  const personList = [];
  for (const [_id, comparedResult] of Object.entries(peopleResult)) {
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

  return personList;
}
const result = computingClosestPersonList(user, people);
const resultPerson_Id10 = result.find((person) => {
  person._id == 10;
});
console.log(JSON.stringify(result, null, 2));
console.assert(resultPerson_Id10.closest === 22.22);