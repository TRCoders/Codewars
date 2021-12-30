// Swap items in a dictionary

function switchDict(dic) {
  let arrDict = {}
  for(let [x, y] of Object.entries(dic)) {
    arrDict[y] == undefined ? arrDict[y] = [x] : arrDict[y].push(x)
  }
  return arrDict
}