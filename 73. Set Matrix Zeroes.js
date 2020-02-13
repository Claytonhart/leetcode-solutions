var setZeroes = function(matrix) {
  let col = false;
  let row = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) col = true;
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0 && matrix[0][j] === 0) row = true;
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  if (row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
};
