var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let curInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let tempInterval = intervals[i];
    if (tempInterval[0] <= curInterval[1]) {
      curInterval[1] = Math.max(curInterval[1], tempInterval[1]);
    } else {
      res.push(curInterval);
      curInterval = tempInterval;
    }
  }

  res.push(curInterval);

  return res;
};

function merge(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(
        intervals[i][1],
        res[res.length - 1][1]
      );
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}
