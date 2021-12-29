// Shortest Word

function findShort(s){
  s = s.split(" ")
  let shorten = s[0].length
  for (let i in s){
    if (s[i].length < shorten) {
      shorten = s[i].length
    }
  }
  return shorten
}