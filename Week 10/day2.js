// Merge two arrays

function mergeArrays(a, b) {
let arrLength = Math.max(a.length, b.length)
let bothArr = []

for(let i = 0; i < arrLength; i++) {
  bothArr.push(a[i])
  bothArr.push(b[i])
}
  
  return bothArr.filter((v) => v !== undefined)
}