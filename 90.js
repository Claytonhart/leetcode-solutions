var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a - b);
    let solutions = [];
    
    let genSubset = (curSet, index) => {
        solutions.push(curSet);
        
        for (let i = index; i < nums.length; i++){
            let num = nums[i];
            
            genSubset([...curSet, num], i + 1);
            
            while (nums[i + 1] === num) {
                i++;
            }
        }
    }   
    genSubset([], 0);
    
    return solutions;
};