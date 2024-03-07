// Linklist 
// LINKLIST is dynamically adjust his size when allocate new memory.
// linklist ko data structure me runtime par grow and shrink kr skte hai.
// No pre allocation of space

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//let first = new Node('subscribe');
//first.next = new Node('to');
//first.next.next = new Node('Tumsar');
//console.log(first.next.next);

class singlyLinkList{
   constructor(val){
    const newNode = new Node(val)
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
   }
}

let first = new singlyLinkList(10);
console.log(first); 

// Output
/* singlyLinkList {
  head: Node { val: 10, next: null },
  tail: Node { val: 10, next: null },
  length: 1
} */