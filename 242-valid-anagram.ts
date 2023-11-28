// function isAnagram(s: string, t: string): boolean {
function isAnagram(s, t) {
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  return sortedS === sortedT ? true : false;
}

const one = { s: "anagram", t: "nagaram" };
const two = { s: "rat", t: "car" };

console.log(isAnagram(one.s, one.t));
console.log(isAnagram(two.s, two.t));
