var minSwap = function(A, B) {
  let n = A.length;
  let keep = new Array(n).fill(Infinity);
  let change = new Array(n).fill(Infinity);
  keep[0] = 0;
  change[0] = 1;

  for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
      keep[i] = keep[i - 1];
      change[i] = change[i - 1] + 1;
    }

    if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
      keep[i] = Math.min(keep[i], change[i - 1]);
      change[i] = Math.min(change[i], keep[i - 1] + 1);
    }
  }

  return Math.min(keep[n - 1], change[n - 1]);
};
