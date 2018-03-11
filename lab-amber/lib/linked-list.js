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
    if (this.root === null) {
      return true;
    } else {
      return false;
    }
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
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.next === null) {
          currentNode.next = new ListNode(value, null);
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
  }

  remove(value) {
    if (this.root.value === value) {
      this.root = this.root.next;
    } else {
      let previousNode = this.root;
      let currentNode = previousNode.next;
      let nextNode = currentNode.next;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          previousNode.next = nextNode;
          break;
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
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  hasCycle() {
    if (!this.root) {
      return false;
    }
    let firstNode = this.root;
    let secondNode = firstNode.next;
    while (firstNode !== null && secondNode !== null) {
      if (firstNode === secondNode) {
        return true;
      } else {
        firstNode = firstNode.next;
        secondNode = secondNode.next.next;
      }
    }
    return false;
  }

  reverse() {
    let newList = new LinkedList();
    let currentNode = this.root;
    while (currentNode) {
      newList.prepend(currentNode.value);
      currentNode = currentNode.next;
    }
    this.root = newList.root;
  }

  getMiddle(list) {
    let firstNode = this.root;
    let secondNode = this.root;
    while (secondNode && secondNode.next) {
      secondNode = secondNode.next.next;
      firstNode = firstNode.next;
    }
    return firstNode;
  }

  getNthFromLast(n) {
    let currentNode = this.root;
    let currentIndex = 0;
    let nextNode = this.root.next;
    let nextIndex = 1;
    while ((nextIndex - n - 1) !== currentIndex) {
      nextNode = nextNode.next;
      nextIndex++;
    }
    while (nextNode) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
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
    let index = 0;
    while (currentNode) {
      if (index === n) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
        index++;
      }
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
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }

  map(callback) {
    let currentNode = this.root;
    let newList = new LinkedList();
    while (currentNode) {
      let newNodeVal = callback(currentNode);
      newList.append(newNodeVal);
      currentNode = currentNode.next;
    }
    return newList;
  }

  filter(callback) {
    let currentNode = this.root;
    let newList = new LinkedList();
    while (currentNode) {
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
    while (currentNode) {
      accumulator += currentNode.value;
      currentNode = currentNode.next;
    }
    return accumulator;
  }
}

module.exports = {LinkedList, ListNode}
