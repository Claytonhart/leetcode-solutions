var findLHS = function(nums) {
  let values = {};
  let longest = 0;

  for (let num of nums) {
    if (!values[num]) values[num] = 0;
    values[num]++;
  }

  for (let num of nums) {
    if (values[num + 1]) {
      longest = Math.max(longest, values[num] + values[num + 1]);
    }
  }

  return longest;
};
