// bit manipulation
var singleNumber = function (nums) {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    unique ^= nums[i];
  }
  return unique;
};
