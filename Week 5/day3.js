// FIXME: Vowel Count

function getCount(str) {
  let n = str.match(/[aeiou]/gi);
  return n === null ? 0 : n.length;
}