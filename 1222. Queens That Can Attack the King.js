var queensAttacktheKing = function(queens, king) {
  let ways = [];
  let queensSet = new Set();

  for (let queen of queens) {
    let y = queen[0];
    let x = queen[1];
    queensSet.add(y + ',' + x);
  }

  let traverse = (y, x, yChange, xChange) => {
    if (y < 0 || y > 7 || x < 0 || x > 7) return;
    if (queensSet.has(y + ',' + x)) {
      ways.push([y, x]);
      return;
    }

    traverse(y + yChange, x + xChange, yChange, xChange);
  };

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        traverse(king[0] + i, king[1] + j, i, j);
      }
    }
  }

  return ways;
};
