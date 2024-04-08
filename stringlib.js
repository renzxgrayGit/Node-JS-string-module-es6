class StringLib {
    concat(word1, word2) {
        return word1 + word2;
    }

    repeat(word, times) {
        return word.repeat(times);
    }

    toString(input) {
        return String(input);
    }

    charAt(word, index) {
        return word.charAt(index);
    }
}

module.exports = StringLib;
