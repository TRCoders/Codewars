// Keypad horror

function computerToPhone(numbers){
  let numpad = [0,7,8,9,4,5,6,1,2,3]
  let empty = ''
  for (let i = 0; i < numbers.length; i++){
    empty += numpad[numbers[i]]
  }
  return empty
}