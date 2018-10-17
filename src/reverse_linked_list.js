/*------------------
Finish the "reverseLinkedList" method.
This method should reverse the linkedList
so that the head and tail switch, and all
pointers move into the opposite direction.

Hint: The code has already been started
for you. DRAW THIS OUT and look at the test for
the example. Use the insertAfter and removeFromTail
methods in your solution.
------------------*/


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  insertAfter(refNodeValue, val) {
    let currentNode = this.head;

    while (currentNode.value !== refNodeValue) {
      if (!currentNode.next) {
        return "No node found.";
      }
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    } else {
      let previousNext = currentNode.next;
      currentNode.next = new Node(val);
      currentNode.next.next = previousNext;
    }
  }

  removeFromTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    let removedNode = this.tail;
    this.tail = currentNode;
    this.tail.next = null;
    return removedNode;
  }

  reverseList() {
    // create a variable to store the reference to this.head
    // remove the tail, and reassign that node to this.head
    // connect this.head to the previous head that you stored

    // create a variable (refNode) to keep track of the the location of where you will insert the next node (start by assigning it to this.head)

    // while the previous head value does not equal the tail value
      // remove the tail node
      // insert it after the refNode
      // reassign the refNode to the node you just added

  }

}

module.exports = LinkedList;
