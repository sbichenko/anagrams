/**
 * In a given list of strings, find all strings that are anagrams (i.e. consist of identical symbols
 * that occur identical number of times).
 *
 * @param {Array<string>} words  Strings in which to find anagrams
 * @returns {Array<Array<string>>}  An array of arrays of found anagrams. The parent array is
 * sorted by the first occurrence of anagram. Anagrams in arrays are sorted as in input array.
 * (for example, ["ab", "cb", "ba", "bc"] → [["ab", "ba"], ["cb", "bc"]])
 */
function findAnagrams(words) {
    /**
     * @type {Object<string, Array<string>>}  keys are sorted strings of letters which make up the words
     * in the value's arrays
     */
    const cache = {};
    const sortedAnagrams = [];

    words.forEach(function(word) {
        const signature = word.split('').sort().join('');
        if (!(signature in cache)) {
            const newArray = [];
            cache[signature] = newArray;
            sortedAnagrams.push(newArray);
        }
        cache[signature].push(word);
    });
    return sortedAnagrams;
}

module.exports = findAnagrams;