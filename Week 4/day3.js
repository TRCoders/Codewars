// Sum of Cubes

function sumCubes(n){
let sum = 0;
  for (let m = 1; m <= n; m++){
    sum += Math.pow(m, 3)
  }
  return sum
}