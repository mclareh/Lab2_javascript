var userHealth = 40;
var enemyHealth = 10;
var wins = 0;
var playing = true;

var play = prompt("do u wanna play?");

if (play === "yes") {
	var name = prompt("what is ur name?");}

while (play === "yes") {
  
    if (wins === 3) {
      console.log("u won the war");
      break;
    }
	
    userHealth -= Math.floor(Math.random() * 2) + 1;
	enemyHealth -= Math.floor(Math.random() * 2) + 1;
  	console.log(name + " has " + userHealth + " health left.");
	console.log("enemy has " + enemyHealth + " health left.");
    
    if (enemyHealth <= 0) {
      wins++;
      enemyHealth = 10;
      console.log("u won a battle");
    }
	
}