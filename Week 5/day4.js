// FIXME: number with 3 roots.

function perfectRoots(n){
    return Math.floor( n ** .125 ) ** 8 === n
  }