var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0) return [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  let res = [];

  let dir = 0;
  while (left <= right && top <= bottom) {
    if (dir === 0) {
      let l = left;
      while (l <= right) {
        res.push(matrix[top][l]);
        l++;
      }
      top++;
      dir++;
    } else if (dir === 1) {
      let t = top;
      while (t <= bottom) {
        res.push(matrix[t][right]);
        t++;
      }
      right--;
      dir++;
    } else if (dir === 2) {
      let r = right;
      while (r >= left) {
        res.push(matrix[bottom][r]);
        r--;
      }
      bottom--;
      dir++;
    } else if (dir === 3) {
      let b = bottom;
      while (b >= top) {
        res.push(matrix[b][left]);
        b--;
      }
      left++;
      dir = 0;
    }
  }

  return res;
};
