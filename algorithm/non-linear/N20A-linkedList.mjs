class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    printNode() {
        for (let node = this.head; node !== null; node = node.next) {
            process.stdout.write(node.data + ' -> ');
        }
        console.log('null');
    }

    append(value) {
        const newNode = new Node(value);
        let node = this.head;

        if (node === null) {
            this.head = newNode;
        } else {
            while (node.next !== null) {
                node = node.next;
            }
            node.next = newNode;
        }

        this.length++;
    }

    insert(value, position = 0) {
        if (position < 0 || position > this.length) return false;

        const newNode = new Node(value);
        let node = this.head,
            i = 0,
            prev;

        if (position === 0) {
            newNode.next = node;
            this.head = newNode;
        } else {
            while (i++ < position) {
                prev = node;
                node = prev.next;
            }
            newNode.next = node;
            prev.next = newNode;
        }

        this.length++;
        return true;
    }

    remove(value) {
        let node = this.head,
            prev;

        while (node !== null && node.data !== value) {
            prev = node;
            node = prev.next;
        }

        if (node === null) {
            return;
        } else if (node === this.head) {
            this.head = node.next;
        } else {
            prev.next = node.next;
        }

        this.length--;
        return node.data;
    }

    removeAt(position = 0) {
        if (position < 0 || position >= this.length) return;

        let node = this.head,
            i = 0,
            prev;

        if (position === 0) {
            this.head = node.next;
        } else {
            while (i++ < position) {
                prev = node;
                node = prev.next;
            }
            prev.next = node.next;
        }

        this.length--;
        return node.data;
    }

    indexOf(value) {
        let node = this.head,
            i = 0;

        while (node !== null) {
            if (node.data === value) return i;
            node = node.next;
            i++;
        }

        return -1;
    }

    remove2(value) {
        return this.removeAt(this.indexOf(value));
    }
}
