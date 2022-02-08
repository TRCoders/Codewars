// Abbreviate a Two Word Name

function abbrevName(name){
  return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}