var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
      }
    }
  }

  return dp[dp.length - 1];
};
