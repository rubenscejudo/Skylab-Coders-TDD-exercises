function paperScissorsRock(player1, player2) {
	if(player1 === undefined || player2 === undefined){
		return "error"
	}
	if(player1 === player2) {
		return "It's a tie"
	}
	if(player1 === "PAPER") {
		if (player2 === "STONE"){
			return "PAPER WINS STONE"
		}
		else {
			return "SCISSORS WINS PAPER"
		}
	}
	if(player1 === "SCISSORS") {
		if(player2 === "PAPER"){
			return "SCISSORS WINS PAPER"
		}
		else {
			return "STONE WINS SCISSORS"
		}
	}
	if(player1 === "ROCK") {
		if (player2 === "SCISSORS"){
			return "ROCK WINS SCISSORS"
		}
		else {
			return "PAPER WINS ROCK"
		}
	}

}