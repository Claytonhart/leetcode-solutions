var minWindow = function(s, t) {
  let frequencies = {};

  for (let char of t) {
    if (!frequencies[char]) frequencies[char] = 1;
    else frequencies[char]++;
  }

  let count = t.length;

  let shortest = Infinity;
  let indicies = [0, 0];
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (frequencies[char] !== undefined) {
      frequencies[char]--;
      if (frequencies[char] >= 0) {
        count--;
      }
    }

    while (count === 0) {
      if (right - left + 1 < shortest) {
        shortest = right - left + 1;
        indicies = [left, right + 1];
      }
      let toRemove = s[left];
      if (frequencies[toRemove] !== undefined) {
        frequencies[toRemove]++;
        if (frequencies[toRemove] === 1) {
          count++;
        }
      }
      left++;
    }
  }
  return s.slice(indicies[0], indicies[1]);
};
