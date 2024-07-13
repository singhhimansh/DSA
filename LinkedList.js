/*
Linked list

push()        add in last
pop()         remove the last
size()        size
shift()       remove start
unshift()     append at start
get(index)    return value at index
search(value) find index of value
set()         update value at a index
insert()      insert at a specific index
remove(index) remove this node
clear()       clear all data in linkedlist
traverse()    print linkedlist
reverse()     reverse a linkedlist
sort()        sort a linkedlist

*/

class ListNode {
  constructor(val = null) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    let node = new ListNode(value);
    this.head = value ? node : null;
    this.tail = value ? node : null;
    this._length = value ? 1 : 0;
  }

  push(value) {
    let node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let node = new ListNode(value);
      this.tail.next = node;
      this.tail = node;
    }
    this._length++;
    return this;
  }

  pop() {
    let popedValue;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      popedValue = this.head.value;
    } else {
      // const last= this.tail;
      let current = this.head;
      let secondlast;
      while (current.next) {
        secondlast = current;
        current = current.next;
      }
      secondlast.next = null;
      popedValue = current.value;
      this.tail = secondlast;
    }
    this._length--;
    return popedValue;
  }

  size() {
    console.log("size ", this._length);
    return this._length;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    console.log("\r");
  }

  shift() {
    let start = this.head;
    this.head = start.next;
    this._length--;
    return start.value;
  }

  unshift(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this._length++;
    return this;
  }

  get(index) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (idx === index) return current.value;
      current = current.next;
      idx++;
    }
    return undefined;
  }

  search(value) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (current.value === value) return idx;
      current = current.next;
      idx++;
    }
    return -1;
  }

  set(index, value) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (idx === index) {
        current.value = value;
        return true;
      }
      current = current.next;
      idx++;
    }
    return -1;
  }

  insert(index, value) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (idx === index - 1) {
        let node = new ListNode(value);
        let nextNode = current.next;
        node.next = nextNode;
        current.next = node;
        this._length++;
        return this;
      }
      current = current.next;
      idx++;
    }
    return -1;
  }

  remove(index) {
    let current = this.head;
    let idx = 0;
    while (current) {
      if (idx === index - 1) {
        let nodeToRemove = current.next;
        current.next = nodeToRemove.next;
        this._length--;
        return nodeToRemove.value;
      }
      current = current.next;
      idx++;
    }
    return -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  sortBubble() {
    let swapped;
    do {
      let current = this.head;
      swapped = false;
      while (current.next) {
        if (current.value > current.next.value) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
  }
}

// const ll1= new LinkedList(10);
const list = new LinkedList();

list.push(50);
list.push(30);
list.push(80);
list.push(10);
// console.log(list);
list.traverse();
// console.log('removed',list.pop());
// list.size()
// console.log('shifted ',list.shift());
// list.traverse();
// list.size();
// list.get(2);
// console.log('found at ',list.search(50));
// list.set(1,50);
// list.traverse();
// list.insert(1,100);
// list.traverse();
// list.size();
// list.insert(5,500);
// list.traverse();
// list.size();

// console.log('removed',list.remove(4));
// list.size();
list.sortBubble();
list.traverse();
