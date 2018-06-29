'use strict';

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.listSize = 0;

  }

  static fromArray(items) {
    let node = null;
    let previousNode = null;
    for(let i = items.length - 1; i >= 0; i--) {
      node = new ListNode(items[i], previousNode);
      previousNode = node;

    }
    //return list with proper root
    let list = new LinkedList();
    list.root = node;
    list.listSize =  items.length;
    return list;
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
    if(this.listSize === 0){
      console.log('its empty');
      return true;
    }else {
      console.log('its wrong');
      return false;
    }
  }

  size() {
    return this.listSize;
  }

  append(value) {
    let current = this.root;
    if (current === null){
      current = new ListNode(value);
      current.next = null;
      this.listSize +=  1;
      return;

    }
    while(current.next !== null){
      current = current.next;
    }
    current.next = new ListNode(value);
    this.listSize++;
  }

  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
  }

  remove(value) {
    // rewrite the root node if the value is at the front.
    let current = this.root
    if (current === value){
      current = current.next 
    }
    while(current.next !== null){
      if(current.next === value){
        current.next = current.next.next
      }

    }
    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
  }

  find(value) {
    let counter = 0;
    let current = this.root;
    while(current !== null){
      if (counter === value){
        return current.data
      }
      counter++;
      current = current.next;
    }
  }

  hasCycle() {

  }

  reverse() {
  }

  getMiddle(list) {
  }

  //   getNthFromLast(n) {
  //     // make two pointers and start them at the front.
  //     current = this.root;
  //     current2 = this.root;
  //     // move the offset pointer N nodes forward
  //     current2 = 
  //     // now move both nodes forward simultaneously.
  //     // When the offset node hits the end of the list
  //     // the nBehind node will be N nodes from the end of the list.
  //   }

  getLast() {
    let current = this.root;
    while(current.next !== null){
      current.next = current;
    }
    if(current.next === null){
      return current;
    }
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
    let result;
    let counter = 0;
    if (n === 0){
      return this.root;
    }
    while(current){
      if(counter === n){
        return current
      }
      current = current.next;
      counter++;
    }
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
