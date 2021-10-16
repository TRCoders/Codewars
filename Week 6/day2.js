// Last Survivor

function lastSurvivor(letters, coords) {
    const arr = letters.split('')
    while(coords.length > 0) {
      let tmpPosition = coords.shift()
      arr.splice(coords.shift(), 1)
    }
    
    return arr[0]
  }