// function isValid(s: string): boolean {
function isValid(s) {
  if (s.indexOf("(") != -1) {
    if (s[s.indexOf("(") + 1] != ")") {
      return false;
    }
  }
  if (s.indexOf("([") != -1) {
    if (s[s.indexOf("[") + 1] != "]") {
      return false;
    }
  }
  if (s.indexOf("{") != -1) {
    if (s[s.indexOf("{") + 1] != "}") {
      return false;
    }
  }
  return true;
}

let one = { s: "()" };
let two = { s: "()[]{}" };
let three = { s: "(]" };

console.log(isValid(one.s));
console.log(isValid(two.s));
console.log(isValid(three.s));

// node 20-valid-parentheses.ts
