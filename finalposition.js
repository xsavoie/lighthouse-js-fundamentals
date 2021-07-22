const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  let finalValue = [0, 0];
  for (let i = 0; i <= moves.length; i++)
    if (moves[i] === 'north'){
      finalValue[1] ++;
    }
    else if (moves[i] === 'south'){
      finalValue[1] --;
    }
    else if (moves[i] === 'west'){
      finalValue[0] --;
    }
    else if (moves[i] === 'east'){
      finalValue[0] ++
    }
  return finalValue;
}

finalPosition(moves);