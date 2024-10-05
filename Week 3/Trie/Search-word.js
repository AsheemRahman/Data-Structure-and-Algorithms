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

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }
}


let trie = new Trie()
trie.Insert("apple")
trie.Insert("app")
trie.Insert("banana")
trie.Insert("band")
trie.Insert("bandit")

console.log(trie.search("apple"))
console.log(trie.search("ale"))
console.log(trie.search("band"))
