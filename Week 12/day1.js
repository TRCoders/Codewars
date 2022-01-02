// Difference between biggest 2 numbers

function diffBig2(arr) {
  return arr.splice(arr.indexOf(Math.max(...arr)), 1) - Math.max(...arr)
}