// Fake Binary

function fakeBin(x){
 return x.split('').map((x) => Number(x, 10) < 5 ? '0' : '1').join('')
}