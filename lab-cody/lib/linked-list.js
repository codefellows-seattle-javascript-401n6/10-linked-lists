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
    this.length = 0;
  }

  static fromArray(items) {

    let previousNode = null;
    let list = new LinkedList();
    for (var i = items.length - 1; i >= 0; i--) {
      let newNode = new ListNode(items[i], previousNode);
      list.append(newNode);
      previousNode = newNode;
    }

    list.root = previousNode;
    return list;
  }
  toString() {
    let result = 'root';
    let current = this.root;
    while (current) {
      result += ' -> ' + current.value;
      current = current.next;
    }
    return result + ' -> null';
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  append(value) {
    let newNode = new ListNode(value);

    if (!this.root) {
      this.root = newNode;
      this.length++;
    } else {
      let current = this.root;
      while (current.next) {
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
    this.root = newNode;
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

module.exports = {LinkedList, ListNode};
