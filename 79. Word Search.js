var exist = function(board, word) {
  function searchBoard(y, x, index) {
    if (
      y < 0 ||
      y >= board.length ||
      x < 0 ||
      x >= board[0].length ||
      board[y][x] !== word[index]
    )
      return false;
    if (index === word.length - 1) return true;

    let value = board[y][x];
    board[y][x] = null;

    let found =
      searchBoard(y - 1, x, index + 1) ||
      searchBoard(y + 1, x, index + 1) ||
      searchBoard(y, x - 1, index + 1) ||
      searchBoard(y, x + 1, index + 1);

    board[y][x] = value;

    return found;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && searchBoard(i, j, 0)) return true;
    }
  }

  return false;
};
