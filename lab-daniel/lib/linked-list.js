'use strict';

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.root = null;
  }

  static fromArray(items) {
    // Build the list up backwards.
    // Start by creating the last node that points to nothing.
    // Then make the second-to-last node and point it
    // to the last node.
    // Then make another node and point it to the second-to-last node.
    // Do this until the list is entirely built up.
    let previousNode = null
    for (var i = items.length - 1; i >= 0; i--) {
      let value = items[i];
      let node = new ListNode(value);
      node.next = previousNode;
      previousNode = node;
    }
    let list = new LinkedList();
    list.root = previousNode;
    return list;
    // set the root to point to the last node added at the front of the chain.
  }

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while(current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }

  isEmpty() {
    if(this.root === null || this.root === undefined) {
      return true;
    }
    else {
      return false;
    }
  }

  size() {
    let count = 0;
    let current = this.root;
    while(current){
      current = current.next;
      count++;
    }
    return count;
  }
  

  //puts value at last index
  append(value) {
    if(this.root === null){
      this.root = new ListNode(value, null);
    }
    else{
      let current = this.root;
      while(current){
        if (current.next === null) {
            current.next = new ListNode(value, null);
          return;
        }
        current = current.next;
      }
    }
  }


  //puts value at 0 index
  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
    this.length++; //may not need this.
  }

  remove(value) {
    let current = this.root;
    let previousNode = null; 

    if (current.value === value) {
      this.root = current.next;
      this.length--;
      return this;
    }
    while (current.next) {
      if (current.next.value === value) {
        previousNode = current;
      }
      current = current.next;
    }
    previousNode.next = previousNode.next.next;
    this.length--;
  }

  find(value) {
    let current = this.root;

      while(current) {
        if(current.value === value) {
          return current;
        }
        current = current.next;
      }
    return current;
  }

  hasCycle(value) {
    let node;
    value = node;
    while(node.next!==null && node.next!==this.head){
      node=node.next;
    }
    if(node.next === null){ //if next node null then no cycle
      return false;
    }
    if(node.next===this.head){ //if next node head then there is cycle
      return true;
    }
}


  reverse() {
    let current = this.head;
    let previous = null;
    while(current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
}

  getMiddle(list) {
    let total = 1;
    if(this.root == null) {
      length = 0;
    } 
    else {
      let node = this.root;
      while (node.next !== null) {
        node = node.next;
        total++;
      }
    }
    let middle = length/2;
    if(middle % 1 !== 0){
      middle = (length + 1)/2;
    }
    let node = this.root;
    for (let i = 0; i < middle - 1; i++) {
      node = node.next;
    }
    return node.value;
  }

  getNthFromLast(n) {
    // make two pointers and start them at the front.
    // move the offset pointer N nodes forward

    // now move both nodes forward simultaneously.
    // When the offset node hits the end of the list
    // the nBehind node will be N nodes from the end of the list.
  }

  getLast() {
    return this.getNthFromLast(0);
  }
  getSecondFromLast() {
    return this.getNthFromLast(1);
  }
  getThirdFromLast() {
    return this.getNthFromLast(2);
  }

  getNth(n) {
    let current = this.root;

    if (n === 0) {
      return this.root;
    }
    for(let i = 1; i <= n; i++) {
      current = current.next;
    }
    return current;
  }

  getFirst() {
    let first = this.root;
    return first;
  }

  getSecond() {
    let two = this.root.next;
    return two
  }

  getThird() {
    let third = this.root.next.next;
    return third;
  }

  forEach(cb) {
  }

  map(cb) {
  }

  filter(cb) {
  }

  reduce(cb, initial) {
  }
}

module.exports = {LinkedList, ListNode}
