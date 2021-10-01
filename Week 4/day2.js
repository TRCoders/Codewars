// Filter the number

var FilterString = function(value) {
  let remabc = value.replace(/[a-z]/g, '')
  return Number(remabc)
}