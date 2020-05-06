function twoSum(nums, target) {
  let found = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (found[diff] !== undefined) {
      return [i, found[diff]];
    } else {
      found[nums[i]] = i;
    }
  }

  return [];
}
