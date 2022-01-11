// Vowel remover

function shortcut (string) {
  let deletethis = string.replace(/[aeiou]/g, '')
  return deletethis;
}