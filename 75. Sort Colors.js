var sortColors = function(nums) {
  let zeroes = 0;
  let twos = nums.length - 1;
  let ones = 0;

  while (ones <= twos) {
    if (nums[ones] === 0) {
      [nums[ones], nums[zeroes]] = [nums[zeroes], nums[ones]];
      zeroes++;
    } else if (nums[ones] === 2) {
      [nums[ones], nums[twos]] = [nums[twos], nums[ones]];
      twos--;
      ones--;
    }
    ones++;
  }
};
