var longestPalindrome = function(s) {
  if (!s || s.length === 0) return '';

  let longest = [0, 0];

  for (let i = 1; i < s.length; i++) {
    let odd = isPalindrome(i, i, s);
    let even = isPalindrome(i - 1, i, s);
    let larger = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    longest =
      longest[1] - longest[0] < larger[1] - larger[0] ? larger : longest;
  }

  return s.slice(longest[0], longest[1] + 1);
};

function isPalindrome(left, right, s) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}
