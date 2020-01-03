var generateParenthesis = function(n) {
  let solutions = [];

  let genSolution = (curSol, diff, len) => {
    if (diff < 0) return;
    if (len === n * 2 && diff === 0) solutions.push(curSol.join(''));
    if (len === n * 2) return;

    genSolution([...curSol, '('], diff + 1, len + 1);
    genSolution([...curSol, ')'], diff - 1, len + 1);
  };

  genSolution([], 0, 0);

  return solutions;
};
