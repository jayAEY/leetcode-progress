var lengthOfLastWord = function (s) {
  let splitStr = s.split(" ").filter((word) => word !== "");
  let lastWord = splitStr.length - 1;
  return splitStr[lastWord].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
