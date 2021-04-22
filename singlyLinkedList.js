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
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head; // set head to variable
        this.head = currentHead.next; // make head to be next node 
        this.length--; // decrement length by 1
        return currentHead //return the node/head that was removed
        
    }
    unshift(val) { //add node to the beginning of list and make new head
        let newHead = new Node(val);
        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        }else {
            newHead.next = this.head // need to have new node point to original head in order to connect list 
            this.head = newHead; // then assign head to the new head
            this.length++;
            return this;
        }
    }
    get(index) { //method to retrive index in list
        if (index < 0 || index >= this.length) return null //made edge case
        let counter = 0; // start counter and index at 0
        let current = this.head; //set variable where current will start at the head
        while (counter !== index) { // while the counter is not equal to the index, continue to move through the list and increment counter 
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) { //method used to set index in a list to a new val passed in
        let foundNode = this.get(index) // we can use the get method we just wrote above 
        if(foundNode) { //if true, then we set that value to the new value passed in
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) { //method used to insert a new value at the current index
        let newNode = new Node(val)
        if (index < 0 || index > this.length) return false 
        if (index === this.length) {
            if (this.push(newNode)) return true 
        }else {
            return false;
        }
        if (index === 0) {
            if (this.unshift(newNode)) return true
        }else {
            return false;
        }

    }
}

let list = new SinglyLinkedList() //created new instance and set it to list
list.push('Hello')
list.push('Goodbye')
