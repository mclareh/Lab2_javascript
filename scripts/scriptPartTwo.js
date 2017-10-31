var playing = true;


function startGame() {
  var play = prompt("do u wanna play?");
	if (play === "yes") {
		var name = prompt("what is ur name?");
    	startCombat(name);
	} else {
		console.log("ok");
	}
} startGame();

function startCombat(name) {
	var userHealth = 40;
	var enemyHealth = 10;
	var wins = 0;
	
    while (playing = true) {
		var attackOrQuit = prompt("do u wanna attack or quit?");
		if (attackOrQuit === "attack") {
          if (wins === 3) {
              console.log("u won the war");
              break;
            }
          if (userHealth <= 0) {
              console.log("u lost");
              break;
           }
      	 function getDamage(user, enemy) {
  			userHealth -= Math.floor(Math.random() * 5) + 1;
			enemyHealth -= Math.floor(Math.random() * 5) + 1;
			console.log(name + " has " + user + " health left.");
  			console.log("enemy has " + enemy + " health left.");
	  	  } getDamage(userHealth, enemyHealth);
    
          if (enemyHealth <= 0) {
			wins++;
			enemyHealth = 10;
			console.log("u won a battle");
           }
		} else if (attackOrQuit === "quit") {
            console.log("thx 4 playing");
            break;
	  	}
 	}
}