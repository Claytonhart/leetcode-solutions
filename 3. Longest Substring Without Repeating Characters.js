var lengthOfLongestSubstring = function(s) {
  let lastseen = {};
  let left = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (lastseen[letter] !== undefined && lastseen[letter] >= left) {
      left = lastseen[letter] + 1;
    }

    lastseen[letter] = i;
    longest = Math.max(longest, i - left + 1);
  }

  return longest;
};
