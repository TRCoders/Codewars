function positiveSum(arr) {
  let positiveOnly = arr.filter(a => a >= 0)
  let sum = positiveOnly.reduce((prev,cur) => prev + cur, 0)
  return sum
}