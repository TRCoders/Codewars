// Rock Paper Scissors!

const rps = (p1, p2) => {
let turns = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
};

if (p1 === p2) 
  return 'Draw!'

return turns[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!' 
};
