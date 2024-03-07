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


//let first = new singlyLinkList(10);
//console.log(first); 

// Output
/* singlyLinkList {
  head: Node { val: 10, next: null },
  tail: Node { val: 10, next: null },
  length: 1
} */

// [10, 20, 30, 40] now here we push 50.

push(val) {
   const newNode = new Node(val);
   if(!this.head){
    this.head = newNode;
    this.tail = this.head;
   }
   
   else{
    this.tail.next = newNode;
   }

   this.length++;
   return this;
}
}

let arr = new singlyLinkList(25);
console.log(arr.push(100));
console.log(arr.push(150));

// Output
/* singlyLinkList {
    head: Node { val: 25, next: Node { val: 150, next: null } },
    tail: Node { val: 25, next: Node { val: 150, next: null } },
    length: 3
  } */