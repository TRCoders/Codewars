// Find the stray number

function stray(numbers) {
    let nums = numbers[0]
    
    if (nums !== numbers[1] && nums !== numbers[2])
      return nums;
    
    for (let i = 1; i < numbers.length; i++) {
      if(nums !== numbers[i])
        return numbers[i];
    }
    return 0;
  }