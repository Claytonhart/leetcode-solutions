var countSquares = function(matrix) {
  // we need to instantiate the matrix this way, because .fill fills every element with the same value;
  // ex) if we passed in a (new Array(matrix[0].length + 1)), we would have each row filled with a
  // reference to the same array, and modifying values would update each row's value at that column.
  let dp = new Array(matrix.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[0].length + 1).fill(0);
  }

  let count = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (matrix[i - 1][j - 1] === 0) continue;
      dp[i][j] =
        dp[i][j] +
        matrix[i - 1][j - 1] +
        Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      count += dp[i][j];
    }
  }
  return count;
};
