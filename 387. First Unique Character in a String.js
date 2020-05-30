var firstUniqChar = function (s) {
  let count = {};

  for (let char of s) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char]++;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (count[char] === 1) return i;
  }

  return -1;
};
