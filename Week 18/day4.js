// Hello World - Without Strings

const helloWorld = () => {
  let strings = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
  
  let convertStrings = String.fromCharCode(...strings)
  
 return convertStrings
};