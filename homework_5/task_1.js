function dice(){
  let numberOnCube = Math.floor(Math.random()*(6 - 1+1)) + 1;
  console.log(numberOnCube)
  return numberOnCube
}
game(3)
function game (numberOfThrows){
let player1 = 0
let player2 = 0
for (let i=0; i < numberOfThrows; i++){
player1 = player1 + dice()
player2 = player2 + dice()
console.log("First player has " + player1)
console.log("Second player has " + player2)
}
console.log("First player has finally " + player1)
console.log("Second player has finally " + player2)

if (player1 > player2) {
  console.log("1-st player won!")
}
else if (player1 < player2) {
  console.log("Second player won!")
}
else {
  console.log("Pobedila druzhba!")
}
}

