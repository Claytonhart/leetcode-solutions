var canPartition = function(nums) {
  if (nums == null || nums.length == 0) return true;

  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  if (sum % 2 !== 0) return false;

  sum = Math.floor(sum / 2);

  let dp = new Array(sum + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < dp.length; i++) {
    for (let j = sum; j >= nums[i - 1]; j--) {
      dp[j] = dp[j] || dp[j - nums[i - 1]];
    }
  }

  return dp[sum];
};
