'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const peek = stack => {
  console.log(stack.top);
};


const display = stack => {
  // const copy = stack;
  // let stackStr = '';
  //
  // while (copy.top !== null) {
  //   stackStr += `${copy.top.data} ->`;
  // }
  //
  // return stackStr;

  console.log(JSON.stringify(stack, null, 1));
  return ;
};


const remove = (value, stack) => {
  if (stack.top === null) {
    return;
  }

  while (stack.top !== null) {
    const compareValue = stack.pop();
    if (compareValue === value) {
      return stack;
    }
  }
};

// input => 3((4 + 5) / 3)
// input => ))(([]}}{{ -> true

function matchingParens(exp) {
  const stack = new Stack();
  let counter = 0;

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(' || exp[i] === ')') {
      stack.push(exp[i]);
    }
  }
  while (stack.top !== null) {
    if (stack.pop() === '(') {
      counter++;
    }
    if (stack.pop() === ')') {
      counter--;
    }
  }
  if (counter === 0) {
    return true;
  }
  return false;
}
console.log(matchingParens('(4 + 5)'));

function is_palindrome(s) {
    s = s.toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, "");

    const stack = new Stack()
    let palindrone = '';

    for (let i = 0; i < s.length; i++) {
      stack.push(s[i]);
    }

    while (stack.top !== null) {
      palindrone += stack.pop();
    }

    if (palindrone === s) {
      return true;
    }
    return false;
}

const main = () => {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // starTrek.pop();
  // starTrek.pop();
  // console.log(display(starTrek));
  // peek(starTrek);
  // console.log(remove('McCoy', starTrek));
  // console.log(display(starTrek));
  console.log(is_palindrome('strrts'));



};

console.log(main());
