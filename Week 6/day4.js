// Integer Difference

const intDiff = (arr, n) => {
    let numDiff = 0;
    let numCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let d = i; d < arr.length; d++) {
        numDiff = Math.abs(arr[d] - arr[i]);
        if (numDiff === n && i !== d) {
          numCounter +=1;
        }
      }
    }
    return numCounter
  }