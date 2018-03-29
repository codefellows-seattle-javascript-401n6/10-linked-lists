'use strict';
//GROOOOOOOOOOT SAYS REMEMBER THIS.ROOT //
class ListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;  
  };
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  static fromArray(items) {
    let previouseNode = null;
    for(var i = items.length - 1; i >= 0; i--){
      let node = new ListNode(items[i]);
      node.next = previouseNode;
      previouseNode = node;
      // console.log('items',items[i]);
    }
  
    let list = new LinkedList();
    list.root = previouseNode;
    // console.log('list after loop', list);
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
// returns true if the list is empty
  // isEmpty() {
  //   if (this.root === null || this.root === undefined){
  //     return true;
  //   }
  // }

  isEmpty(){
    if(!this.root){
      return true;
    }
    return false;
  }

  size() {
    let count = 0;
    let current = this.root;
    while(current !== null){
      count++
      current = current.next;
    }
    return count;
  }
// why does it keep telling me it's null when current === 0?? 
//see test('list.append(value) should append node to empty list'
  append(value){
    let node = new ListNode(value);
   
  
    if(!this.root){
      this.root = node;
      return this;
    }
    let current = this.root;
      
    while(current.next){
      current = current.next;
    }
    current.next = node;
  
  }

  prepend(value) {
    let node = new ListNode(value);
    // let node = ListNode(value);
    node.next = this.root;
    this.root = node;
  }

  remove(value) {
    let current = this.root;
    while(current){
     if(current.next === null){
       current.next === current;
     }
   }
  }
  find(value){
   let current = this.root;
   let prev = null; 
   while(current){
      if(current.value === value) {
       prev.next = current.next;
     }
      prev = current;
      current = current.next;
    }
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
