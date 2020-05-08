var kWeakestRows = function (mat, k) {
  let sums = [];
  for (let y = 0; y < mat.length; y++) {
    let sum = 0;
    for (let x = 0; x < mat[0].length; x++) {
      sum += mat[y][x];
    }
    sums.push([y, sum]);
  }
  sums.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  return sums.slice(0, k).map((sum) => sum[0]);
};
