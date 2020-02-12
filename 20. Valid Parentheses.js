var isValid = function(s) {
  let stack = [];

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      let item = stack.pop();
      if (item === '(') {
        if (char !== ')') return false;
      } else if (item === '{') {
        if (char !== '}') return false;
      } else if (item === '[') {
        if (char !== ']') return false;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
