var combinationSum = function(candidates, target) {
    let solutions = [];
    
    let checkSol = (curSol, curSum, pos) => {
        if (curSum === target) {
            solutions.push(curSol);
            return;
        }
        if (curSum < target) {
            for (let i = pos; i < candidates.length; i++){
                let num = candidates[i];
                checkSol([...curSol, num], curSum + num, i);
            }
        }
    }
    
    checkSol([], 0, 0);
    
    return solutions;
};