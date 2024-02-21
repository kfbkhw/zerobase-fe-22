class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    _insertNode(node, value) {
        if (node === null) {
            node = new Node(value);
        } else if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }

        return node;
    }
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _inOrderTraverseNode(node, callback) {
        if (node === null) {
            return;
        }

        this._inOrderTraverseNode(node.left, callback);
        callback(node);
        this._inOrderTraverseNode(node.right, callback);
    }
    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
        console.log('end');
    }

    _minNode(node) {
        if (node === null) {
            return null;
        }

        while (node && node.left !== null) {
            node = node.left;
        }

        return node.value;
    }
    min() {
        return this._minNode(this.root);
    }

    _maxNode(node) {
        if (node === null) {
            return null;
        }

        while (node && node.right !== null) {
            node = node.right;
        }

        return node.value;
    }
    max() {
        return this._maxNode(this.root);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        } else if (node.value > value) {
            return this._searchNode(node.left, value);
        } else if (node.value < value) {
            return this._searchNode(node.right, value);
        }
    }
    search(value) {
        return this._searchNode(this.root, value);
    }
}

let tree = new BinarySearchTree();

tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

function printNode(node) {
    process.stdout.write(`${node.value} -> `);
}

tree.inOrderTraverse(printNode);

console.log(tree.search('J') ? 'J found' : 'J not found');
console.log(tree.search('I') ? 'I found' : 'I not found');
