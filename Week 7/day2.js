// Filter out the geese

// Filter the array within birds
// Search through birds with array that has elements of geese
// Return array of birds excluding elements from geese.

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let gooseRemove = birds.filter(goose => !geese.includes(goose))
  return gooseRemove
};

