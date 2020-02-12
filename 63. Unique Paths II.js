var uniquePathsWithObstacles = function(obstacleGrid) {
  let grid = new Array(obstacleGrid.length + 1)
    .fill(0)
    .map(_ => new Array(obstacleGrid[0].length + 1).fill(0));
  grid[0][1] = 1;

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (obstacleGrid[i - 1][j - 1] === 1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
