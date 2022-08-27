const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function (moves) {
  let finish = [];
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      num2 = ++num2;
    }
    if (moves[i] === "south") {
      num2 = --num2;
    }
    if (moves[i] === "east") {
      num1 = ++num1;
    }
    if (moves[i] === "west") {
      num1 = --num1;
    }
  }
  finish[0] = num1;
  finish[1] = num2;
  return finish;
}
console.log(finalPosition(moves));