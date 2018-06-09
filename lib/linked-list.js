'use strict';
//just represents every single node in a list
//next points to the next node in the chain
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  };
};

//contains the head because the listNode doesn't care about that
class LinkedList {
  constructor() {
    this.root = null;
  };

  static fromArray(items) {//static is used for when you dont have a linked list at the start
    // Build the list up backwards.
    // Start by creating the last node that points to nothing.
    // Then make the second-to-last node and point it
    // to the last node.
    // Then make another node and point it to the second-to-last node.
    // Do this until the list is entirely built up.

    let previousNode = null;
    for (var i = items.length - 1; i >= 0; i--) {
      let node = new ListNode(items[i]);
      node.next = previousNode;
      previousNode = node;
    };
    // set the root to point to the last node added at the front of the chain.
    let list = new LinkedList();
    list.root = previousNode;
    return list;
  };

  // you get this method for free.
  toString() {
    let result = 'root';
    let current = this.root;
    while(current) {
      result += ' -> ' + current.value;
      current = current.next;
    };
    return result + ' -> null';
  };

  isEmpty() {
    return this.root === null;
    //does the same thing as above
    if( this.root === null) {
      return true;
    }//because we're using return statements, we dont need an else statement
    return false;
  };

  size() {
    let counter = 0;
    let current = this.root;
    while(current !== null) {
      current = current.next;
      counter++;
    };
    return counter;
  };

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
  };

  prepend(value) {
    let node = new ListNode(value);
    node.next = this.root;
    this.root = node;
    this.length++;
  };

  remove(value) {
    if (this.root.value === value) {
      this.root = this.root.next;
    } else {
      let previous = this.root;
      let current = previous.next;
      let nextNode = current.next;
      while (current !== value) {
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
    // rewrite the root node if the value is at the front.

    // start at the front
    // look for a node that points to the node we want to remove.

    // save the result
    // make the current node point to the node after the node we're removing
  }

  find(value) {
    let current = this.root;
    
    while (current) {
      if (current.value === value) {
        return current;
      } else {
        current = current.next;
      }
    }
    return currrent;
  };

  hasCycle() {
    if (!this.root) {
      return false;
    };
    let nodeOne = this.root;
    let nextNode = nodeOne.next;
    while (nodeOne !== null && nextNode !== null) {
      if (nodeOne === nextNode) {
        return true;
      } else {
        nodeOne = nodeOne.next;
        nextNode = nextNode.next.next;
      }
    }
    return false;
  };

  reverse() {
    let linkedList = new LinkedList();
    let current = this.root;
    while (current) {
      linkedList.prepend(current.value);
      current = current.next;
    }
    this.root = linkedList.root;
  };

  getMiddle() {
    let first = this.root;
    let second = this.root;
    
    while (second && second.next) {
      second = second.next.next;
      first = first.next;
    }
    return first;
  };

  getNthFromLast(n) {
    let current = this.root;
    let index = 0;
    let nextNode = this.root.next;
    let nextIndex = 1;

    while ((nextIndex - n - 1) !== index) {
      nextNode = nextNode.next;
      nextIndex++;
    }
    while (nextNode) {
      current = current.next;
      nextNode = nextNode.next;
    }
    return current;
    // make two pointers and start them at the front.

    // move the offset pointer N nodes forward

    // now move both nodes forward simultaneously.
    // When the offset node hits the end of the list
    // the nBehind node will be N nodes from the end of the list.
  };

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
    let index = 0;

    while (current) {
      if (index === n) {
        return current;
      } else {
        current = current.next;
        index++;
      }
    }
    return current;
  };

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
    let current = this.root;

    while (current) {
      cb(current);
      current = current.next;
    }
  };

  map(cb) {
    let current = this.root;
    let newList = new LinkedList();
    
    while (current) {
      let nodeValue = cb(current);
      newList.append(nodeValue);
      current = current.next;
    }
    return newList;
  };

  filter(cb) {
    let current = this.root;
    let newList = new LinkedList();

    while (current) {
      if (cb(current)) {
        newList.append(current.value);
        current = current.next;
      } else {
        current = current.next;
      }
    }
    return newList;
  };

  reduce(cb, initial) {
    let accumulator = initial;
    let current = this.root;

    while (current) {
      accumulator += current.value;
      current = current.next;
    }
    return accumulator;
  }
};

module.exports = {LinkedList, ListNode}
