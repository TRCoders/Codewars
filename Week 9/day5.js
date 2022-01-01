// Sort and Star

function twoSort(s) {
  return s.sort((a, b) => a < b ? -1 : 1)[0].split("").join("***")
}

function finalGrade (exam, projects) {
  if ((exam > 90 && exam <= 200) || (projects > 10 && projects >= 20)) {
    return 100
  } else if ((exam > 75 && exam <= 100) && (projects >= 5 && projects >= 20)){
    return 90
  } else if ((exam > 50 && exam <= 90) && (projects >= 2 && projects >= 10)){
    return 75
  } else {
    return 0
  }
    
}