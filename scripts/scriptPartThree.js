function startGame() {
  var play = prompt("do u wanna play?");
	if (play === "yes") {
		var character = {
			wins: 0,
			health: 40,
			healsRemaining: 2,
			name: prompt("whats ur name?"),
			generateAttackDamage: function() {
				return Math.floor(Math.random() * 3) + 1;
			},
			heal: function() {
				if (this.healsRemaining === 0) {
					return console.log("no heals left");
				}
				this.healsRemaining --;
				this.health += Math.floor(Math.random() * 10) + 1;
			}
		};
		var enemy = {
			name: "evil enemy",
			health: 10,
			generateAttackDamage: function() {
				return Math.floor(Math.random() * 3) + 1;
			}	
		};
		startCombat(character, enemy);
	} else {
		console.log("ok");
	}
} startGame();

function startCombat(character, enemy) {
	var playing = true;	
	while (playing) {
		var attackOrQuit = prompt("do u wanna attack, heal or quit?");
		if (attackOrQuit === "attack") {
          if (character.wins === 5) {
              console.log("u won the war");
              break;
            }
          if (character.health <= 0) {
              console.log("u lost");
              break;
           }
			enemy.health -= character.generateAttackDamage();
			character.health -= enemy.generateAttackDamage();			console.log(character.name + " health is " + character.health);		console.log(enemy.name + " health is " + enemy.health);
  
          if (enemy.health <= 0) {
			character.wins++;
			enemy.health = 10;
			console.log("u won a battle. ur battle wins r at " + character.wins);
           }
		} else if (attackOrQuit === "heal") {
			if (character.healsRemaining > 0) {
				character.heal();
				console.log("u have used one of ur heals. ur health is currently " + character.health);
				character.health -= enemy.generateAttackDamage();
				console.log("u got hit after u healed. ur health is " + character.health);
			} else if (character.healsRemaining <= 0) {
				console.log("u have no heals left");
			}
		} else if (attackOrQuit === "quit") {
            return console.log("thx 4 playing");
	  	}
 	}
}



