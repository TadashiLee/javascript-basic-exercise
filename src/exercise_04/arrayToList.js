export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  let list = new LinkedList();
  class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  class LinkedList {
    constructor(node) {
      this.head = node;
      this.length = 1;
    }
    function append(node) {
      let lastNode = this.findAsIndex(this.length - 1);
      lastNode.next = node;
      this.length++;
    }
    function findAsIndex(index) {
      if (index > this.length) {
        console.log('越界');
        return
      }
      if (index === 0) {
        return this.head;
      }
      var curNode = this.head;
      while (index && curNode) {
        index--;
        curNode = curNode.next;
      }
      return curNode;
    }

  }

}
