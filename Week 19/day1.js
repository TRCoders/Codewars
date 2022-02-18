// last digits of a number

function lastDigit(n, d) {
  let nString = String(n)
  let nArr = nString.length
  
  if ( d > nArr) {
    d = nArr
  }
  
  return nString.slice(nArr - d).split('').map(Number)
}
