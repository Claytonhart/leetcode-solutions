var canCompleteCircuit = function(gas, cost) {
  let helper = (curIndex, startIndex, fuel) => {
    let diff = gas[curIndex] - cost[curIndex];
    fuel += diff;

    if (startIndex === 0 && curIndex === gas.length - 1 && fuel >= 0)
      return true;
    if (curIndex === startIndex - 1 && fuel >= 0) return true;
    if (fuel < 0) return false;

    if (curIndex === gas.length - 1) {
      return helper(0, startIndex, fuel);
    } else {
      return helper(curIndex + 1, startIndex, fuel);
    }
  };

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      if (helper(i, i, 0)) return i;
    }
  }

  return -1;
};
