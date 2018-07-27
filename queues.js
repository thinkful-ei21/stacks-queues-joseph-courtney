'use strict';

class _Node {
  constructor(value) {
    this.value=value,
    this.next=null,
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.first = null; // first is beginning
    this.last = null; // last is the end
  }

  enqueue(data) {
    const node = new _Node(data); // node: value, next, prev
    if (this.first === null) {
      this.first = node; // if empty, make node first node
    }
    if (this.last) { // if there is an end node
      node.next = this.last; // set node's next pointer to point to end node
      this.last.prev = node; // set end node's pointer to the new node
    }
    this.last = node; // when this.last === null, it'll set new node to this.last
  }

  dequeue() {
    if (this.first === null) {
      return; // if there is no first node, nothing to do
    }

    // make the first item on the queue to be the
    // the item that is next on the line
    const node = this.first;
    this.first = node.prev; // 
    if (node === this.last) {
      this.last = null; // if only 1 node, get rid of it and set last to null
    }
    return node.value;
  }
}
