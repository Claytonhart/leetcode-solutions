var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) return [];
    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    let permutations = [];
    
    let generatePerms = (perm, nextDigits) => {
        if (nextDigits.length === 0){
            permutations.push(perm);
        } else {
            let digit = nextDigits[0];
            let letters = map[digit];
            for (let i = 0; i < letters.length; i++) {
                let letter = letters[i];
                generatePerms(perm + letter, nextDigits.slice(1))
            }
        }
        
    }
    
    generatePerms("", digits);
    
    return permutations;
};