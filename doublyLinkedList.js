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
        if (!this.head) return undefined; 
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
    shift() { // remove node from beginning of list
        if (this.length === 0) return undefined; // start with edge case
        let removedHead = this.head; //set old head to variable so we can return at the end 
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = removedHead.next; // set new head to be .next of original 
            this.head.prev = null // make sure .prev is set to null to sever ties
            removedHead.next = null; // same with .next to end the list
        }
        this.length--;
        return removedHead;
    }  

}