var detectCapitalUse = function(word) {
    if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
    
    for (let i = 0; i < word.length; i++) {
        if (i === 0 ) {
            if (word[i] !== word[i].toUpperCase()) return false;
        }
        else if (word[i] !== word[i].toLowerCase()) return false;
    }
    
    return true;
}