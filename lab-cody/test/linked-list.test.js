'use strict';

const {LinkedList, ListNode} = require('../lib/linked-list');

describe('creation tests', function() {
  test('this test always passes', () => {
    expect(1).toEqual(1);
  });

  test('should create a node', () => {
    let blue = new ListNode(4);
    expect(blue.value).toEqual(4);
    expect(blue.next).toEqual(null);

    let green = new ListNode(3, blue);
    expect(green.value).toEqual(3);
    expect(green.next).toEqual(blue);
    expect(green.next.value).toEqual(4);
  });

  test('creates a LinkedList and attaches nodes together', () => {
    let list = new LinkedList();
    let three = new ListNode(3);
    let four = new ListNode(4);

    list.root = three;
    list.root.next = four;

    expect(list.root.value).toEqual(3);
    expect(list.root.next.value).toEqual(4);
    expect(list.root.next.next).toEqual(null);
  });

  test('list.toString() represents the list', () => {
    let list = new LinkedList();
    let three = new ListNode(3);
    let four = new ListNode(4);

    list.root = three;
    list.root.next = four;

    expect(list.toString()).toEqual('root -> 3 -> 4 -> null');
  });

  test('list.fromArray builds a linked list from an Array', () => {
    let list = LinkedList.fromArray([1, 2, 3, 4]);
    expect(list.root.value).toEqual(1);
    expect(list.root.next.value).toEqual(2);
    expect(list.root.next.next.value).toEqual(3);
    expect(list.root.next.next.next.value).toEqual(4);
  });
});

describe('O(1) Methods', function() {
  test('should be true for empty list', () => {
    let list = new LinkedList();
    expect(list.isEmpty()).toEqual(true);
  });

  test('should be false for a list with something in it', () => {
    let list = new LinkedList();
    list.append(1);
    expect(list.isEmpty()).toEqual(false);
  });

  test('list.prepend(node) should node to empty list', () => {
    let list = new LinkedList();
    list.prepend(5);
    expect(list.root.value).toBe(5);
  });

  test('list.prepend(node) should node to non-empty list', () => {
    let list = new LinkedList();
    list.prepend(5);
    list.prepend(4);
    list.prepend(0);
    expect(list.root.value).toBe(0);
    expect(list.root.next.value).toBe(4);
    expect(list.root.next.next.value).toBe(5);
  });

});

describe('O(N) Methods', function() {
  test('size should be 0 for empty list', () => {
    let list = new LinkedList();
    expect(list.size()).toEqual(0);
  });

  test('size should be 1 for one-node list', () => {
    let list = new LinkedList();
    list.append(1);
    expect(list.size()).toEqual(1);
  });

  test('size should be correct for many node list.', () => {
    let list = LinkedList.fromArray([1, 2, 3, 4]);
    expect(list.size()).toEqual(4);
  });

  test('should append node to empty list', () => {
    let list = new LinkedList();
    list.append(0);
    expect(list.root.value).toBe(0);
  });

  test('should append node to non-empty list', () => {
    let list = new LinkedList();
    list.append(0);
    list.append(3);
    list.append(4);
    expect(list.root.value).toEqual(0);
    expect(list.root.next.value).toEqual(3);
    expect(list.root.next.next.value).toEqual(4);
  });

  test('returns the node at a specific index', () => {
    let list = LinkedList.fromArray([1, 2, 3, 4]);
    expect(list.getNth(0)).toEqual(list.root);
    expect(list.getNth(1)).toEqual(list.root.next);
    expect(list.getNth(2)).toEqual(list.root.next.next);
    expect(list.getNth(3)).toEqual(list.root.next.next.next);
  });

  test('return fist node containg value', () => {
    let list = LinkedList.fromArray([1, 2, 3, 2, 1]);
    let result = list.find(2);
    expect(list.root.next).toEqual(result);
  });

  test('should remove node from one-element list', () => {
    let list = new LinkedList();
    list.append(42);
    list.remove(42);
    expect(list.root).toBe(null);
  });

  test('should remove node from front of list', () => {
    let list = LinkedList.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    list.remove(0);
    expect(list.root.value).toBe(1);
  });

  test('should remove node from middle of list', () => {
    let list = LinkedList.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    list.remove(3);
    expect(list.root.next.next.value).toBe(2);
    expect(list.root.next.next.next.value).toBe(4);
  });

  test('should remove node from end of list', () => {
    let list = LinkedList.fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    list.remove(8);
    expect(list.root.next.next.next.next.next.next.next.value).toBe(7);
    expect(list.root.next.next.next.next.next.next.next.next).toBe(null);
  });
});

describe('Convenience methods', () => {
  test('list.getFirst() list.getSecond() and list.getThird() (easy difficulty)', () => {
    let list = LinkedList.fromArray([1, 2, 3, 4]);
    expect(list.getFirst()).toEqual(list.root);
    expect(list.getSecond()).toEqual(list.root.next);
    expect(list.getThird()).toEqual(list.root.next.next);
  });

});
