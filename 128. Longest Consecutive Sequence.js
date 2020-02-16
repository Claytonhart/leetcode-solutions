var longestConsecutive = function(nums) {
  let numSet = new Set();
  for (let num of nums) {
    numSet.add(num);
  }

  let longestSequence = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let streak = 1;
      num++;

      while (numSet.has(num)) {
        streak++;
        num++;
      }

      longestSequence = Math.max(longestSequence, streak);
    }
  }

  return longestSequence;
};
