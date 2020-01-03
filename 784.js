var letterCasePermutation = function(S) {
  let letters = S.split('');
  let permutations = [];

  function findStrings(index) {
    if (index === S.length) {
      permutations.push(letters.join(''));
      return;
    }

    const char = letters[index];
    const charCode = char.charCodeAt(0);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      letters[index] = letters[index].toUpperCase();
      findStrings(index + 1);
      letters[index] = letters[index].toLowerCase();
      findStrings(index + 1);
    } else {
      findStrings(index + 1);
    }
  }

  findStrings(0);

  return permutations;
};
