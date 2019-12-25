var subsets = function(nums) {
    let solutions = [];
    
    let genSol = (curSet, posibilities) => {
        solutions.push(curSet);
        
        let len = posibilities.length;
        for (let i = 0; i < len; i++){
            let num = posibilities[i];
            let rest = posibilities.slice(i + 1);
            
            genSol([...curSet, num], rest);
        }
    }
    
    genSol([], nums);
    
    return solutions;
};