// Student's Final Grade

function finalGrade (exam, projects) {
  if ((exam > 90 && exam <= 200) || (projects > 10 && projects <= 20)) {
    return 100
  } else if ((exam > 75 && exam <= 100) && (projects >= 5 && projects <= 20)){
    return 90
  } else if ((exam > 50 && exam <= 90) && (projects >= 2 && projects <= 10)){
    return 75
  } else {
    return 0
  }
    
}