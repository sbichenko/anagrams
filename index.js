/**
 * In a given list of strings, find all strings that are anagrams (i.e. consist of identical symbols
 * that occur identical number of times).
 *
 * @param {Array<string>} words  Strings in which to find anagrams
 * @returns {Array<Array<string>>}  An array of arrays of found anagrams. The parent array is
 * sorted by the first occurrence of anagram. Anagrams in arrays are sorted as in input array.
 * (for example, ["ab", "d", "cb", "ba", "bc"] → [["ab", "ba"], ["cb", "bc"]])
 */
function findAnagrams(words) {
    /**
     * @type {Object<string, Array<string>>}  keys are sorted strings of letters which make up the words
     * in the value's arrays
     */
    const cache = {};
    const singleWordCache = {};
    const sortedSignatures = [];

    words.forEach(function(word) {
        const signature = word.split('').sort().join('');
        if (!(signature in cache)) {
            const newArray = [];
            cache[signature] = newArray;
            sortedSignatures.push(signature);
            singleWordCache[signature] = true;
        }
        const anagramArray = cache[signature];
        cache[signature].push(word);
        if (anagramArray.length > 1) {
            delete singleWordCache[signature];
        }
    });
    const sortedAnagrams = [];
    sortedSignatures.forEach(function(signature) {
        if (signature in singleWordCache) {
            return;
        }
        sortedAnagrams.push(cache[signature]);
    });
    return sortedAnagrams;
}

module.exports = findAnagrams;