// Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => Object.values(gunners).every((cannonBalls) => 
  cannonBalls === 'aye') ? 'Fire!' : 'Shiver me timbers!'