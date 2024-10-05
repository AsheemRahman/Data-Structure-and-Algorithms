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

    // auto complete

    autoComplete(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectWord(node, word, list)
        return list
    }

    collectWord(node, word, list) {
        if (node.endOfWord) {
            list.push(word)
        }
        for (let char in node.children) {
            this.collectWord(node.children[char], word + char, list)
        }
    }
}

let trie = new Trie()
trie.Insert("apple")
trie.Insert("app")
trie.Insert("banana")
trie.Insert("band")
trie.Insert("bandit")

console.log(trie.autoComplete("ban"))
console.log(trie.autoComplete("bat"))
