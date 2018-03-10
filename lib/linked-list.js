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
    this.length = 0;
  }

  static fromArray(items) {
    let newList = new LinkedList();
    for (var i = items.length -1; i >= 0; i--) {
      newList.prepend(items[i]);
    }
    return newList;
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
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.length;
  }

  append(value) {
    if (this.root === null) {
      this.root = new ListNode(value, null);
      this.length++;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.next === null) {
          currentNode.next = new ListNode(value, null);
          this.length++;
          break;
        }
        currentNode = currentNode.next;
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
    this.length++;
  }

  remove(value) {
    if (this.root.value === value) {
      this.root = this.root.next;
      this.length--;
    } else {
      let previousNode = this.root;
      let currentNode = previousNode.next;
      let nextNode = currentNode.next;
      for (let i = 1; i < this.length; i++) {
        if (currentNode.value === value) {
          previousNode.next = nextNode;
        } else {
          previousNode = currentNode;
          currentNode = previousNode.next;
          nextNode = currentNode.next;
        }
      }
    }
  }

  find(value) {
    let currentNode = this.root;
    for (var i = 0; i < this.length; i++) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  hasCycle() {
  }

  reverse() {
    let newList = new LinkedList();
    let currentNode = this.root;
    for (var i = 0; i < this.length; i++) {
      newList.prepend(currentNode.value);
      currentNode = currentNode.next;
    }
    this.root = newList.root;
  }

  getMiddle(list) {
    let middleIndex = Math.ceil((this.length -1)/2);
    let currentNode = this.root;
    for (var i = 0; i < middleIndex; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getNthFromLast(n) {
    let currentNode = this.root;
    for (var i = 0; i < this.length - 1 - n; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
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
    let currentNode = this.root;
    for (var i = 0; i < n; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getFirst() {
    return this.getNth(0);
  }

  getSecond() {
    return this.getNth(1);
  }

  getThird() {
    return this.getNth(2);
  }

  forEach(callback) {
    let currentNode = this.root;
    for (let i = 0; i < this.length; i++) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  map(callback) {
    let currentNode = this.root;
    let newList = new LinkedList();
    for (let i = 0; i < this.length; i++) {
      let newNodeVal = callback(currentNode);
      newList.append(newNodeVal);
      currentNode = currentNode.next;
    }
    return newList;
  }

  filter(callback) {
    let currentNode = this.root;
    let newList = new LinkedList();
    for (let i = 0; i < this.length; i++) {
      if (callback(currentNode)) {
        newList.append(currentNode.value);
        currentNode = currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return newList;
  }

  reduce(callback, initial) {
    let accumulator = initial;
    let currentNode = this.root;
    for (let i = 0; i < this.length; i++) {
      accumulator += currentNode.value;
      currentNode = currentNode.next;
    }
    return accumulator;
  }
}

module.exports = {LinkedList, ListNode}
