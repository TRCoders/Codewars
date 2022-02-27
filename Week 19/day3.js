// Powers of 2

function powersOfTwo(n){
  let arr = Array.from(n)
  for (let i = 0; i <= n; i++){
    arr.push(2 ** i)
  }
  return arr
}