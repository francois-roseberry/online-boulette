class Bucket {
    words = [];

    addWord(word) {
        this.words.push(word);
    }

    count() {
        return this.words.length;
    }
}

module.exports = Bucket;