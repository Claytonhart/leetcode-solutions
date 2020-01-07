function maxProduct(nums) {
  let largest = nums[0];
  let prevL = nums[0];
  let prevS = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempL = Math.max(nums[i], prevL * nums[i], prevS * nums[i]);
    let tempS = Math.min(nums[i], prevS * nums[i], prevL * nums[i]);

    prevL = tempL;
    prevS = tempS;

    largest = Math.max(largest, prevL);
  }

  return largest;
}
