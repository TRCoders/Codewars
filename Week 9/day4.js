// Get the mean of an array

function getAverage(marks){
return Math.floor(marks.reduce((total, num) => total + num) / marks.length)
}