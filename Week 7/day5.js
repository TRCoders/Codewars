// JavaScript Array Filter

function array(arr){
    arr = arr.split(',').slice(1, -1).join(' ') 
   return arr ? arr : null
  }

// Write a function which returns a new string
// Current function has string with is separated by a comma
// Return new string without the first and last char then add a space inbetween

// Make a variable called arr
// Split the array with the split method then slice and join it with a space
// Return variable with a ternary to get null