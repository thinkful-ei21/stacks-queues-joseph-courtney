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
    if (node) {
      return null;
    }
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

function isEven(exp) {
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

function balancedBrackets(exp) {
  const stack = new Stack();

  const parensMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(' || exp[i] === '{' || exp[i] === '[') { // input -> ( [ ) ]
      stack.push(exp[i]); // stack -> [ (
    } else if (exp[i] === ')' || exp[i] === '}' || exp[i] === ']') {
      let compare = stack.pop(); // compare = '['
      if (exp[i] !== parensMap[compare]) { // if ')' !== ']'
        console.log(`Expected '${parensMap[compare]}' but got '${exp[i]}' at position ${[i]}.`);
        return false;
      }
    }
  }
  if (stack.top !== null) { //if there is something in the stack
    return false;
  }
  return true;
}

console.log(balancedBrackets('{())}}'));

function is_palindrome(s) {
  s = s.toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  const stack = new Stack();
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

const testStack = new Stack();
testStack.push(3); 
testStack.push(5); 
testStack.push(1); 
testStack.push(8); 
testStack.push(6); 
testStack.push(13);
testStack.push(42); 
testStack.push(2); 
testStack.push(9);

const sortStack = s => {
  const sortedStack = new Stack();
  while (s.top !== null) {
    let container = s.pop(); // save popped data from original stack (continuously executes until original stack is empty)
    while (sortedStack.top !== null && sortedStack.top.data > container) { // if sorted stack's not empty and top value is greater than the popped data
      s.push(sortedStack.pop()); // put the sorted stack's top value back into the top of original stack
    }
    sortedStack.push(container); // put the popped data into sorted stack (continuously executes until original stack is empty)
  }
  while (sortedStack.top !== null) {
    s.push(sortedStack.pop());
  }
  display(s);
};

// sortStack(testStack);

// 6 // * //    // * // 6 //    // * // 8 //    // * // 1 //    // * // 8 //    // * // 5 //    // * // 3 //    8
// 8 // * //    // 8 // * //    // * // 6 //    // 6 // * //    // * // 6 //    // * // 1 //    // * // 1 //    6
// 1 // * //    // 1 // * //    // 1 // * //    // 8 // * //    // * // 1 //    // 6 // * //    // 5 // * //    5
// 5 // * //    // 5 // * //    // 5 // * //    // 5 // * //    // 5 // * //    // 8 // * //    // 6 // * //    3
// 3 // * //    // 3 // * //    // 3 // * //    // 3 // * //    // 3 // * //    // 3 // * //    // 8 // * //    1

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
  // console.log(is_palindrome('strrts'));



};

console.log(main());
