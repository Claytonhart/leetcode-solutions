var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a - b);
    let combinations = [];
    
    let checkSol = (sol, sum, pos) => {
        if (sum === target) {
            combinations.push(sol);
            return;
        }
        if (sum < target) {
            for (let i = pos; i < candidates.length; i++){
                let curNum = candidates[i];
                let num = candidates[i];
                checkSol([...sol, num], sum + num, i + 1);
                while (candidates[i + 1] === curNum) {
                    i++;
                }
            }
        }
    }
    
    checkSol([], 0, 0);
    
    
    return combinations;
};