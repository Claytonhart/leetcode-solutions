/*
  recursion with memoization
  Time => O(n)
  Space => O(n)
*/
function tribonacci(n, found = {}) {
  if (found[n]) return found[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  found[n] =
    tribonacci(n - 3, found) +
    tribonacci(n - 2, found) +
    tribonacci(n - 1, found);
  return found[n];
}

/*
  dp with constant space
  Time => O(n)
  Space => O(1)
*/
function tribonacci(n) {
  let f1 = 1;
  let f2 = 1;
  let f3 = 0;

  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  for (let i = 3; i <= n; i++) {
    let sum = f1 + f2 + f3;
    f3 = f2;
    f2 = f1;
    f1 = sum;
  }

  return f1;
}
