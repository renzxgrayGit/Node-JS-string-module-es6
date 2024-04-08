module.exports = function () {
    return {
        concat: function(word1, word2) { 
            return Concat(word1, word2);
        },
        repeat: function(word, times) {
            return Repeat(word, times);
        },
        toString: function(input) {
            return ToString(input);
        },
        charAt: function(word, index) {
            return CharAt(word, index);
        }
    };
};

/* Custom concat function */
function Concat(word1, word2) {
    let result = '';
    for (let i = 0; i < word1.length; i++) {
        result += word1[i];
    }
    for (let i = 0; i < word2.length; i++) {
        result += word2[i];
    }
    return result;
}

/* Custom repeat function */
function Repeat(word, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += word;
    }
    return result;
}

/* Custom toString function */
function ToString(input) {
    if (typeof input === 'string') {
        return input;
    } else {
        return input.toString();
    }
}

/* Custom charAt function */
function CharAt(word, index) {
    if (index < 0 || index >= word.length) {
        return '';
    }
    return word[index];
}
