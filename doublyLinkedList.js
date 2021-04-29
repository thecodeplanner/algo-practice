// creating a doubly linked list 
// very similar to singly linked list, except direction can go in two diff ways 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null; // for doubly linked list, we add previous node to show opposite direction
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lengh = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) { // if list is empty, can also write if head or tail lis null
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode; // add the new node to the end of the list
            newNode.prev = this.tail; // conect back the new node to previous node to show other direction
            this.tail = newNode; // set the tail to be the new node at the end 
        }
        this.length++ // increment length of list
        return this
    }
    pop() {
        if (!head) return undefined; 
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null; // need to sever ties here as well so there are no lingering nodes
        }
        this.length--;
        return poppedNode;
    }
}