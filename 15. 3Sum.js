var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  let solutions = [];

  for (let left = 0; left < nums.length - 2; left++) {
    let mid = left + 1;
    let right = nums.length - 1;

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];

      if (sum === 0) {
        solutions.push([nums[left], nums[mid], nums[right]]);

        while (nums[mid] === nums[mid + 1]) {
          mid++;
        }
        mid++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (sum < 0) {
        mid++;
      } else if (sum > 0) {
        right--;
      }
    }
    while (nums[left] === nums[left + 1]) left++;
  }

  return solutions;
};
