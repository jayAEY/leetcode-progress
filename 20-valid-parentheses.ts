// function isValid(s: string): boolean {
function isValid(s) {
  let stack = [];
  let valid = ["()", "[]", "{}"];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    let compare = (
      stack[stack.length - 2] + stack[stack.length - 1]
    ).toString();
    valid.includes(compare) && stack.splice(stack.length - 2, 2);
  }
  return stack.length > 0 ? false : true;
}

let one = { s: "()" };
let two = { s: "()[]{}" };
let three = { s: "(]" };

// console.log(isValid(one.s));
// console.log(isValid(two.s));
// console.log(isValid(three.s));

// node 20-valid-parentheses.ts
