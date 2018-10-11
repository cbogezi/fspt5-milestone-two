const { expect } = require("chai");
const LinkedList = require("../src/reverse_linked_list");

let linkedList = null;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList(1);
  });

  describe('The insertAfter method', () => {
    it('should insert a node after the refNode value', () => {
      linkedList.insertAfter(1, 2);
      expect(linkedList.head.next.value).to.equal(2);
    });
  });
  describe('The removeFromTail method', () => {
    it('should remove the tail from the linked list', () => {
      linkedList.insertAfter(1, 2);
      linkedList.insertAfter(2, 3);
      linkedList.removeFromTail();
      expect(linkedList.tail.value).to.equal(2);
      expect(linkedList.tail.next).to.equal(null);
    });
    it('should return the node that was removed', () => {
      linkedList.insertAfter(1, 2);
      linkedList.insertAfter(2, 3);
      expect(linkedList.removeFromTail().value).to.equal(3);
    });
  });
  describe("The reverseList methods", () => {
    it("should reverse the list", () => {
      linkedList.insertAfter(1, 2);
      linkedList.insertAfter(2, 3);
      linkedList.insertAfter(3, 4);
      linkedList.reverseList();
      expect(linkedList.head.value).to.equal(4);
      expect(linkedList.head.next.value).to.equal(3);
      expect(linkedList.head.next.next.value).to.equal(2);
      expect(linkedList.head.next.next.next.value).to.equal(1);
      expect(linkedList.head.next.next.next).to.equal(linkedList.tail);
    });
  });
});
