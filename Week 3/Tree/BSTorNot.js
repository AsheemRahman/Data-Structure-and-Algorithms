class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBST(node, min = null, max = null) {
    if (node === null) {
        return true;
    }
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
        return false;
    }
    return isBST(node.left, min, node.data) && isBST(node.right, node.data, max);
}

// Example
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(2);
root.left.right = new Node(8);

console.log("Is BST: " + isBST(root)); // Output: true