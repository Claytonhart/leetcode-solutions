var maxIncreaseKeepingSkyline = function(grid) {
  let columns = [];
  let rows = [];

  for (let i = 0; i < grid.length; i++) {
    let maxCol = 0;
    let maxRow = 0;
    for (let j = 0; j < grid.length; j++) {
      maxCol = Math.max(maxCol, grid[j][i]);
      maxRow = Math.max(maxRow, grid[i][j]);
    }
    columns.push(maxCol);
    rows.push(maxRow);
  }

  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let prev = grid[i][j];
      grid[i][j] = Math.min(columns[j], rows[i]);
      sum += grid[i][j] - prev;
    }
  }

  return sum;
};
