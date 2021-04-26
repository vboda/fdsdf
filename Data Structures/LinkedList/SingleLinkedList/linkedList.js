class Node{
    data;
    next;
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SingleLinkedList {
    head;
    constructor(){    
        // this.head = null; 
    }
    displayElements(list){
        let current = (!!list && list.head) || this.head;
        while(current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
    getLength(list) {
        let current = (!!list && list.head) || this.head;
        let count=0;
        while(current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
    insertElementAtHead(value) {
        const newNode = new Node(value);
        if(!!this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
        }
        return this.head;
    }
    insertNode(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        }else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this.head;
    }
    insertNodeAtGivenPosition(value, pos) {
        // if the given index is there or not ---> not there simiply add at the end
        // check whether list exists or not, if not --> add to head
        const newNode = new Node(value);
        let count = 1;
        if(!!this.head && pos !== 1){
            let previous = this.head;
            while(previous.next !==null && count < pos - 1){
                previous = previous.next;
                count++;
            }
            if(previous.next === null && count < pos -1) {
                previous.next = newNode;
            }else {
                let current = previous.next;
                newNode.next = current;
                previous.next = newNode;
            }
        }else {
            if(pos === 1) {
                newNode.next = this.head;
                this.head = newNode;
            }else {
                this.head = newNode;
            }
        }
        return this.head;
    }

    deleteTheFirstNode(){
        if(!!this.head){
            this.head = this.head.next;
            return this.head;
        }
        return null;
    }

    deleteTheLastNode(){
        if(!!this.head){
            let previous = this.head;
            let current = this.head.next;
            if(current === null){
                this.head = null;
            }else{
                while(current.next !== null) {
                    previous = current;
                    current = current.next;
                }
                previous.next = null;
            }
        }
        return this.head;
    }
    deleteANodeAtGivenPosition(pos) {
        if(!!this.head){
            let count = 1;
            let previous = this.head;
            let current = this.head.next;
            while(count < pos-1){
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        return this.head;
    }
}

function execution() {
    let sl = new SingleLinkedList();
    //  Adding elements to linkedList

   // creating Nodes
    const first = new Node(5);
    const second = new Node(4);
    const third = new Node(6);
    const fourth = new Node(3);
    // attaching the nodes
    sl.head = first;
    first.next = second;
    second.next = third;
    third.next = fourth;
    console.log(JSON.stringify(sl));
    
   
   /* 
        Print elements of the singleLinked List;
        
        sl.displayElements(sl);
   */

   /* 
        Length of a singleLinkedLeft
        console.log('Length of the SingleLinkedList is ', sl.getLength());
   */
  /* 
        Insert the node at the beginning of the list;
        let sl2 = new SingleLinkedList();
        console.log(sl2.insertElementAtHead(23));
        console.log(JSON.stringify(sl.insertElementAtHead(45)));
  */
 /* 
    Insert Node at the end 
    let sl2 = new SingleLinkedList();
    console.log(sl2.insertNode(2));
    console.log(sl2.insertNode(23));
    console.log(JSON.stringify(sl.insertNode(34)));
 */
/* 
        IInsert Node at the given position
        console.log(JSON.stringify(sl.insertNodeAtGivenPosition(23, 3)));
        console.log(JSON.stringify(sl.insertNodeAtGivenPosition(45, 25)));
        console.log(JSON.stringify(sl.insertNodeAtGivenPosition(11, 1)));
        const sl2  = new SingleLinkedList();
        console.log(JSON.stringify(sl2.insertNodeAtGivenPosition(24,4)));
*/

/* 
    Delete the first Node
    console.log(JSON.stringify(sl.displayElements()));
    console.log(JSON.stringify(sl.deleteTheFirstNode()));
*/
/* 
    Delete the last Node
    console.log(JSON.stringify(sl.deleteTheLastNode()));
    const sl2 = new SingleLinkedList();
    sl2.head = new Node(2);
    console.log(sl2);
    console.log(sl2.deleteTheLastNode());
 */
/* 
    Delete a node at given Index
*/
    console.log(sl.deleteANodeAtGivenPosition(3));

}

execution();