var summaryRanges = function (nums) {
  let ranges = [];
  let start = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      ranges.push(start + (start === nums[i] ? '' : `->${nums[i]}`));
      start = nums[i + 1];
    }
  }
  return ranges;
};
