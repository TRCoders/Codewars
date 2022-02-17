// Is it a palindrome?

function isPalindrome(x) {
  let array = x.length
  let regex = /[W_]/g
  let t = x.toLowerCase().replace(regex, '')
  
  for (let i = 0; i < array/2; i++) {
    if (t[i] !== t[array - 1 - i])
      return false
  }

  return true
}