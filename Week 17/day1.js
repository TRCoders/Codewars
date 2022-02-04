// Ones' Complement

function onesComplement(n) {
  return n.split('').map(e => e.includes(0) ? "1" : "0").join('')
};