class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// if the head node is not passed, the head is initialised to null.
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

// create two Nodes and a pointer from node1 to node2
let node1 = new Node(2);
let node2 = new Node(5);
node1.next = node2;

// create a Linked list with the node1.
let list = new LinkedList(node1);

// access the nodes in the list
console.log(list.size());
