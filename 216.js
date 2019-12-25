var combinationSum3 = function(k, n) {
    let solutions = [];
    
    let genCombination = (curSol, curSum, numPosibilities, start) => {
        if (curSum > n) return;
        if (curSum === n && numPosibilities === 0) {
            solutions.push(curSol);
            return;
        }
        if (numPosibilities === 0) {
            return;
        }
        
        for (let i = start; i < 10; i++){
            genCombination([...curSol, i], curSum + i, numPosibilities - 1, i + 1);
        }
    }
    
    genCombination([], 0, k, 1);
    
    return solutions;
};