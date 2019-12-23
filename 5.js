var longestPalindrome = function(s) {
    if (s.length === 0) return "";
    
    let longest = [0, 1];
    
    for (let i = 1; i < s.length; i++) {
        let odd = checkIfPalindrome(s, i, i);
        let even = checkIfPalindrome(s, i - 1, i);
        let larger = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
        longest = longest[1] - longest[0] > larger[1] - larger[0] ? longest : larger;
    }
    
    
    return s.slice(longest[0], longest[1]);
};


function checkIfPalindrome(str, left, right){
    while (left >= 0 && right < str.length) {
        if (str[left] !== str[right]) break;
        left--;
        right++;
    }
    
    return [left + 1, right];
}