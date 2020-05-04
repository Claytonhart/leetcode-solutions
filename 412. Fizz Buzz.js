var fizzBuzz = function (n) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    let word = '';
    if (i % 3 === 0) word += 'Fizz';
    if (i % 5 === 0) word += 'Buzz';
    nums.push(word.length > 0 ? word : i.toString());
  }

  return nums;
};
