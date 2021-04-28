// creating a doubly linked list 
// very similar to singly linked list, except direction can go in two diff ways 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lengh = 0;
    }
}