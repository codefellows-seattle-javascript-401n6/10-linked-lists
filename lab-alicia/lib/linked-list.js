'use strict';

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = null;
    if (next) {
      this.next = next;
    }
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.tail = null;
  }

  static fromArray(items) {
    let newList = new LinkedList();
    for (var i = items.length - 1; i >= 0; i--) {
      newList.prepend(items[i]);
    }
    return newList;
  }

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while (current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }

  // returns true if the list is empty
  isEmpty() {
    // return this.root === null; // will evalueuate to true or false
    if (this.root === null) {
      return true;
    }
    return false;
  }

  size() {
    let size = 0;
    let currentNode = this.root;
    while (currentNode) {
      currentNode = currentNode.next;
      size++;
    }
    return size;  
  }

  append(value) {
    if (this.root === null) {
      this.root = new ListNode(value, null);
    } else {
      let current = this.root;
      while (current) {
        if (current.next === null) {
          current.next = new ListNode(value, null);
          break;
        }
        current = current.next;
      }
    }
  }
    
  prepend(value) {
    if (this.root !== null) {
      let previousNode = this.root;
      this.root = new ListNode(value, previousNode);
    } else {
      this.root = new ListNode(value, null);
    }
  }
    
  remove(value) {
    if (this.root.value === value) {
      this.root = this.root.next;
    } else {
      let previous = this.root;
      let current = previous.next;
      let nextNode = current.next;
      while (current !== null) {
        if (current.value === value) {
          previous.next = nextNode;
          break;
        } else {
          previous = current;
          current = previous.next;
          nextNode = current.next;
        }
      }
    }
  }

  find(value) {
    let current =this.root;
    while(current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    // return false;
    return -1;
  }
  
  hasCycle() {

  }
  
  reverse() {
    let newList = new LinkedList();
    let current = this.root;
    while (current) {
      newList.prepend(current.value);
      current = current.next;
    }
    this.root = newList.root;
  }
  
  getMiddle(list) {
    let first = this.root;
    let second = this.root;
    while (second && second.next) {
      second = second.next.next;
      first = first.next;
    }
    return first;
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
    // step forward N times.
    let current = this.root;
    let i = 0;
    while (current) {
      if (i === n) {
        return current;
      } else {
        current = current.next;
        i++;
      }
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
  
module.exports = {LinkedList, ListNode};