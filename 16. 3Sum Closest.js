var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return null;
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = sum - target;
      if (Math.abs(diff) < Math.abs(closest)) {
        closest = diff;
      }

      if (sum === target) return target;
      if (sum > target) {
        right--;
      } else {
        left++;
      }
      while (nums[i] === nums[i + 1]) i++;
    }
  }

  return target + closest;
};
