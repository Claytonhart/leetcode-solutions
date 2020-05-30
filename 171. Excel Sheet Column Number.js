var titleToNumber = function (s) {
  let column = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let toAdd = s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    toAdd *= Math.pow(26, s.length - 1 - i);
    column += toAdd;
  }

  return column;
};
