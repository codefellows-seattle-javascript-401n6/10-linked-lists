'use strict';

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = null;
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
    if (this.root === null) {
      return true;
    }else{
      return false;
    }

  }

  size() {
    let size = 0;
    let currentNode = this.root;
    while(currentNode){
      currentNode = currentNode.next;
      size++;
    }
    return size;
  }

  append(value) {
    if(this.root === null){
      this.root = new ListNode(value, null);
    }else{
      let currentNode = this.root;
      while(currentNode){
        if (currentNode.next === null) {
          currentNode.next = new ListNode(value, null);
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  prepend(value) {
    let node =new ListNode(value);
    node.next = this.root;
    this.root = node;
    this.length++;
  }

  remove(value) {
    // rewrite the root node if the value is at the front.

    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
  }

  find(value) {
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
    // step forward N times.
  }

  getFirst() {
  }

  getSecond() {
  }

  getThird() {
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
