var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      // console.log(map[stack.pop()], s[i]);
      if (map[stack.pop()] !== s[i]) return false;
    }
    i++;
  }
  return stack.length === 0;
};