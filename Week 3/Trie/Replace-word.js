class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    Insert(word) {
        let curr = this.root
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true
    }

    // replace the word in trie

    replace(oldWord, newWord) {
        if (this.search(oldWord)) {
            this.delete(oldWord)
            this.Insert(newWord)
        }
    }
}

const trie = new Trie()
trie.Insert("catepiller")
trie.Insert("cat")
trie.Insert("car")
trie.Insert("dog")

trie.replace("dog", "dove")