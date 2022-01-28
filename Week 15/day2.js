// Flatten and sort an array

"use strict";

function flattenAndSort(array) {  
  let newArr = [].concat.apply([], array)
  return newArr.sort((a, b) => a - b)
}