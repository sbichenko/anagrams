//var findAnagrams = require('./index.js');
const _ = require('lodash');
const findAnagrams = require('./index.js');

const input = [
    "вертикаль",
    "кильватер",
    "апельсин",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка",
    "лес",
    "иван"
];
const expectedOutput = [
    ["вертикаль", "кильватер"],
    ["апельсин", "спаниель"],
    ["австралопитек", "ватерполистка"],
    ["кластер", "сталкер", "стрелка"],
    ["лес"],
    ["иван"]
];
const actualOutput = findAnagrams(input);

console.log(actualOutput);
console.assert(_.isEqual(actualOutput, expectedOutput), 'right');
console.log('All tests done successfully.');
