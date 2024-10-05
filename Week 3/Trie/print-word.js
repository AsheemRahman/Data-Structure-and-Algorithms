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

    // print word as array

    printWords(node = this.root, currWord = "", res = []) {
        if (node.endOfWord) {
            res.push(currWord)
        }
        for (let char in node.children) {
            this.printWords(node.children[char], currWord + char, res)
        }
        return res
    }
}


let trie = new Trie()
trie.Insert("apple")
trie.Insert("app")
trie.Insert("banana")
trie.Insert("band")
trie.Insert("bandit")

console.log(trie.printWords())
