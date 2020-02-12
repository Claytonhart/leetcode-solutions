var uniquePaths = function(m, n) {
  let grid = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0));
  grid[0][1] = 1;

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[n][m];
};
