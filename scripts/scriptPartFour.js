var character = {
	wins: 0,
	health: 40,
	healsRemaining: 2,
	name: "good player",
	generateAttackDamage: function() {
		return Math.floor(Math.random() * 3) + 1;
	},
	heal: function() {
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

function startCombat(choice) {
	var gameText = null;
	
	if (character.wins >= 5) {
        gameText = "u won the war";
		statsInfo(gameText);
		return;
     }
	
	if (character.health <= 0) {
       	gameText = "u lost";
		statsInfo(gameText);
		return;
	}
	
	if (choice === "attack") {
		enemy.health -= character.generateAttackDamage();
		character.health -= enemy.generateAttackDamage();		
		var gameText = character.name + " health is " + character.health + " . " + enemy.name + " health is " + enemy.health;
		
          if (enemy.health <= 0) {
			character.wins++;
			enemy.health = 10;
			gameText = "u won a battle. ur battle wins r at " + character.wins;
           }
		} else if (choice === "heal") {
			if (character.healsRemaining !== 0) {
				character.heal();
				gameText = "u have used one of ur heals. ur health is currently " + character.health;
				character.health -= enemy.generateAttackDamage();
				gameText = "u have used one of ur heals. but u got hit after u healed....ur health is " + character.health;
			} else if (character.healsRemaining <= 0) {
				gameText = "u have no heals left";
			}
		} else if (choice === "quit") {
            gameText = "ok..........thx 4 playing";
			statsInfo(gameText);
			return;
	  	}
	updateInfo();
	statsInfo(gameText);
 }


function updateInfo() {
	var name = document.getElementsByClassName("name")[0];
	var rheals = document.getElementsByClassName("rheals")[0];
	var health = document.getElementsByClassName("health")[0];
	var wins = document.getElementsByClassName("wins")[0];
	var ename = document.getElementsByClassName("ename")[0];
	var ehealth = document.getElementsByClassName("ehealth")[0];
		
	name.innerText = "PLAYER NAME: " + character.name;
	rheals.innerText = "PLAYER HEALS: " + character.healsRemaining;
	health.innerText = "PLAYER HEALTH: " + character.health;
	wins.innerText = "PLAYER WINS: " + character.wins;
	ename.innerText = "ENEMY NAME: " + enemy.name;
	ehealth.innerHTML = "ENEMY HEALTH: " + enemy.health;
}

function statsInfo(gameText) {
	var stats = document.getElementsByClassName("stats")[0];
	stats.innerText = ": " + gameText;
}