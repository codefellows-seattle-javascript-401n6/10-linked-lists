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
    
    // rewrite the root node if the value is at the front.

    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
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
  }

  getMiddle(list) {
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
