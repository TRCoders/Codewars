// Is there a vowel in there?

function isVow(a){
  let vowels = {97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u'}
  return a.join().replace(/(97)|(101)|(105)|(111)|(117)/gi, (merge) => vowels[merge]).split(',').map((a) => (isNaN(a) ? a : Number(a)))
}


// Make a new variable array using the decimal of each vowels i.e 97: 'a', 101: 'e'
// check through array for DEC matching vowels
// Replaces the DEC in array with the vowels
// Splits them with comma then use Map to return new array and function on whether the array contains matching vowels or to skip over other DEC.