// Even numbers in an array

function evenNumbers(array, number) {

return array.filter((even) => even % 2 === 0).slice(-number)
}

// Filter through array and add a function with param
// Use Modulus to check for even numbers
// Then add slice at the end of the function with number to get the start and end of array
// Return the results