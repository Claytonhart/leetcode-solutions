var calculateMinimumHP = function(dungeon) {
  let rows = dungeon.length;
  let columns = dungeon[0].length;

  let grid = new Array(rows + 1);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(columns + 1).fill(Infinity);
  }

  grid[rows - 1][columns] = 1;
  grid[rows][columns - 1] = 1;

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = columns - 1; j >= 0; j--) {
      grid[i][j] = Math.max(
        1,
        Math.min(grid[i + 1][j], grid[i][j + 1]) - dungeon[i][j]
      );
    }
  }

  return grid[0][0];
};
