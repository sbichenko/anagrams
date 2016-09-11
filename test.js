const _ = require('lodash');
const findAnagrams = require('./index.js');

const input = [
    "вертикаль",
    "аб",
    "кильватер",
    "апельсин",
    "ааа",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка",
    "ба",
    "ббб"
];
const expectedOutput = [
    ["вертикаль", "кильватер"],
    ["аб", "ба"],
    ["апельсин", "спаниель"],
    ["австралопитек", "ватерполистка"],
    ["кластер", "сталкер", "стрелка"]
];
const actualOutput = findAnagrams(input);

console.log(actualOutput);
console.assert(_.isEqual(actualOutput, expectedOutput), 'Anagrams were found and sorted');
console.log('All tests done successfully.');
