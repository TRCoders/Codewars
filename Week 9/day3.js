// Find the first non-consecutive number

function firstNonConsecutive (arr) {
  let oddNum = arr.find((e, i) => {
    if (i < 1) {
      return false
    }
    if ((e - arr[i - 1]) !== 1) {
      return true
    }
  })
  if (oddNum !== undefined) {
    return oddNum
  }
  return null
}