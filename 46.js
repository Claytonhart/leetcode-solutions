var permute = function(nums) {
  let permutations = [];

  let generate = index => {
    if (index === nums.length) {
      permutations.push(nums.slice(0));
      return;
    }

    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      generate(index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  };

  generate(0);

  return permutations;
};
