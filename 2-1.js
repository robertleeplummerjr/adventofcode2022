(() => {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const loss = 0;
  const draw = 3;
  const win = 6;
  const shouldPlays = { X: 'loose', Y: 'draw', Z: 'win' };
  const opponentPlays = { A: rock, B: paper, C: scissors };
  const myPlays = { Y: paper, X: rock, Z: scissors };
  function isWin(play, opponentPlay) {
    if (
      (play === rock && opponentPlay === scissors)
      || (play === paper && opponentPlay === rock)
      || (play === scissors && opponentPlay === paper)
    ) return true;
    return false;
  }
  return document.querySelector('pre')
    .innerText
    .trim()
    .split(/\n/g)
    .map(v => v.split(' '))
    .map((v) => {
      const opponentPlay = opponentPlays[v[0]];
      const shouldPlay = shouldPlays[v[1]];
 
      let myPlay;
      if (shouldPlay === 'loose') {
        if (opponentPlay === rock) myPlay = scissors;
        else if (opponentPlay === paper) myPlay = rock;
        else if (opponentPlay === scissors) myPlay = paper;
      } else if (shouldPlay === 'win') {
        if (opponentPlay === rock) myPlay = paper;
        else if (opponentPlay === paper) myPlay = scissors;
        else if (opponentPlay === scissors) myPlay = rock;
      } else if (shouldPlay === 'draw') myPlay = opponentPlay;
      if (isWin(myPlay, opponentPlay)) return myPlay + win;
      if (isWin(opponentPlay, myPlay)) return myPlay + loss;
      if (opponentPlay === myPlay) return myPlay + draw;
    })
    .reduce((sum, next) => sum + next, 0)
})()
