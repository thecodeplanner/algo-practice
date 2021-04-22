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

    })
}

let list = new SinglyLinkedList() //created new instance and set it to list
list.push('Hello')
list.push('Goodbye')
