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
    // "signatures" are sorted strings of letters which make up the words in the values' strings.
    const signaturesToAnagrams = {};
    const sortedAnagrams = [];

    words.forEach(word => {
        const signature = word.split('').sort().join('');
        if (!(signature in signaturesToAnagrams)) {
            const newAnagrams = [];
            signaturesToAnagrams[signature] = newAnagrams;
            sortedAnagrams.push(newAnagrams);
        }
        const anagrams = signaturesToAnagrams[signature];
        anagrams.push(word);
    });
    return sortedAnagrams.filter(anagrams => anagrams.length > 1);
}

module.exports = findAnagrams;