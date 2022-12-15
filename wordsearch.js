const transpose = require("../../matrix_transposition");
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const transLetters = transpose(letters);
  const verticalJoin = transLetters.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
module.exports = wordSearch;
