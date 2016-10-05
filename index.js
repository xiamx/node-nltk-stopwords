var fs = require('fs');
var path = require('path');

function load(language) {
    f = fs.readFileSync(path.join(__dirname, 'data', 'stopwords', language), {
        encoding: "utf-8"
    });
    return new Set(f.split('\n'));
}

function remove(input, stopwords) {
    if (typeof stopwords === "string") {
        stopwords = load(stopwords)
    }

    if (!Array.isArray(input)) {
        // Lazy tokenization by whitespace
        input = input.split(' ');
        return input.filter(function (word) {
            return !stopwords.has(word)
        }).join(' ');
    } else {
        return input.filter(function (word) {
            return !stopwords.has(word)
        });
    }
}

module.exports = {
    load: load,
    remove: remove
}