'use strict';

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.tail = null;
    this.length = 0
  }

  static fromArray(items) {
    // Build the list up backwards.
    // Start by creating the last node that points to nothing.
    // Then make the second-to-last node and point it
    // to the last node.
    // Then make another node and point it to the second-to-last node.
    // Do this until the list is entirely built up.

    let newList = new LinkedList();

    let previousNode = null
    for (var i = items.length - 1; i >= 0; i--) {
      let newListNode = new ListNode(items[i], previousNode);
      newList.append(items[i]);
      previousNode = newListNode;
    }

    newList.root = previousNode;

    return newList;

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
    if(this.root === null) {
      return true;
    };
    return false;
  }

  size() {
    return this.length;
  };

  append(value) {
    let newNode = new ListNode(value);
    if(!this.root) {
      this.root = newNode;
      this.length++;
    } else{
      let current = this.root;
      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
      this.tail = current.next;
      this.length++;
    }
  }

  prepend(value) {
    let newNode = new ListNode(value);
    let head = this.root;
    newNode.next = head;
    this.root = newNode
  }

  remove(value) {
    
    let current = this.root;
    if (current.value === value) {
      this.root = current.next;
      this.length--;
      return this;
    }

    let prev = null; 
    while (current.next) {
      if (current.next.value === value) {
        prev = current;
      }

      current = current.next;
    }

    prev.next = prev.next.next;
    this.length--;
  }

  find(value) {

    let current = this.root;

    while (current) {

      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return false;

  }

  hasCycle() {
  }

  reverse() {
  }

  getMiddle(list) {
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

    for (let i = 1; i <= n; i++) {
      current = current.next;
    }

    return current;
  }
  

  getFirst() {
    return this.root;
  }

  getSecond() {
    return this.root.next;
  }

  getThird() {
    return this.root.next.next;
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



//incomplete
