// Square Every Digit

function squareDigits(num){
    const squaredNums = num => {
      const strNum = String(num);
      let res = '';
      for (let i = 0; i < strNum.length; i++){
        const squareMe= Math.pow(+strNum[i], 2);
        res+= squareMe;
      }
      return res;
    }
    return Number(squaredNums(num))
  }
  
  