var groupThePeople = function(groupSizes) {
    let res = [];
    let sizes = {};
    
    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];
        if (sizes[size] === undefined) {
            sizes[size] = [i];
        } else {
            sizes[size].push(i);
        }
        
        if (sizes[size].length === size){
            res.push(sizes[size]);
            sizes[size] = [];
        }
    }
    
    return res;
};