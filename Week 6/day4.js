// Integer Difference

const intDiff = (arr, n) => {
    let numCounter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let d = i + 1; d < arr.length; d++) {
        if (Math.abs(arr[d] - arr[i]) === n) numCounter++
      }
    }
    return numCounter
  }