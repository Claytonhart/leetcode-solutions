var canJump = function(nums) {
  let jumps = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (jumps === 0) return false;
    jumps = Math.max(jumps - 1, nums[i]);
  }

  return true;
};
