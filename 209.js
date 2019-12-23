var minSubArrayLen = function(s, nums) {
    let len = Infinity;
    
    let left = 0;
    let right = 0;
    let sum = 0;
    
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= s) {
            len = Math.min(len, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    
    return len !== Infinity ? len : 0;
};