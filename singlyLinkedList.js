class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head){ //if there is no head, then make the new node both head and tail
            this.head = newNode;
            this.tail = this.head;
        } else { // otherwise, we add newNode to the tail 
            this.tail.next = newNode;
            this.tail = newNode; //then the tail becomes the newNode because it is the last node on the list
        }
        this.length++; // need to increment the length of the list
        return this; // return the list at the end 

    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) { //while there is still a node after, make the newTail equal to current and current becomes the next node
            newTail = current;
            current = current.next
        }
        this.tail = newTail; //then we make newTail the tail
        this.tail.next = null; //the node afterwards becomes null
        this.length--; //we decrement the length of the list because we are removing a node
        if (this.length === 0) { //once there are no more nodes, we set the head and tail to null 
            this.head = null;
            this.tail = null;
        }
        return current; //return the last node that was popped off 
    }
}

let list = new SinglyLinkedList() //created new instance and set it to list
list.push('Hello')
list.push('Goodbye')
