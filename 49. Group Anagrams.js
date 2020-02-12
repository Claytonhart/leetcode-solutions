var groupAnagrams = function(strs) {
  let hash = {};

  for (let str of strs) {
    let sorted = str
      .split('')
      .sort()
      .join('');
    if (!(sorted in hash)) {
      hash[sorted] = [];
    }
    hash[sorted].push(str);
  }

  return Object.values(hash);
};
