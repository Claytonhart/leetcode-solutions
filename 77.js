var combine = function(n, k) {
    let combinations = [];
    
    let helper = (comb, numCombinations, num) => {
        if (numCombinations === 0) {
            combinations.push(comb);
            return;
        }
        for (let i = num; i <= n; i++) {
            helper([...comb, i], numCombinations - 1, i + 1);
        }
        
    }
    
    helper([], k, 1);
    
    return combinations;
};