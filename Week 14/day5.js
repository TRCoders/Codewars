// Convert nuymber to reversed array of digits

function digitize(n) {
  let numToArr = n => Number(n)
  
  let result = Array.from(String(n), numToArr).reverse()
  return result
}