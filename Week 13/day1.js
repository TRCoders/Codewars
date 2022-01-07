// Alternate case

function alternateCase(s) {
  let empty = '';
  for (let i = 0; i < s.length; i++){
    s[i] === s[i].toLowerCase() ? empty += s[i].toUpperCase() : empty += s[i].toLowerCase()
  }
  return empty
}