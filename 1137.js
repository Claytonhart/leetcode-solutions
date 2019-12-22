// https://leetcode.com/problems/n-th-tribonacci-number/
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

/*
  The Tribonacci sequence Tn is defined as follows: 

  T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

  Given n, return the value of Tn.

  

  Example 1:

  Input: n = 4
  Output: 4
  Explanation:
  T_3 = 0 + 1 + 1 = 2
  T_4 = 1 + 1 + 2 = 4
  Example 2:

  Input: n = 25
  Output: 1389537
  

  Constraints:

  0 <= n <= 37
  The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/
