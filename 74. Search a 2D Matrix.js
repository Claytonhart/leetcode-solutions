var searchMatrix = function(matrix, target) {
  if (matrix.length == 0) return false;

  // binary search to find row, then column.
  let top = 0;
  let bottom = matrix.length - 1;

  while (top < bottom) {
    let mid = Math.floor((top + bottom) / 2);
    if (matrix[mid][matrix[0].length - 1] < target) {
      top = mid + 1;
    } else {
      bottom = mid;
    }
  }

  // search row for element
  let row = matrix[top];
  let left = 0;
  let right = row.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > row[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return row[left] === target;
};
