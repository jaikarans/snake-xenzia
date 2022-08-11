const gameOverSound = () => {
	document.getElementById('game-over').play();
}

const updateScore = () => {
	if (Number(document.getElementById('highScore').innerHTML) < Number(document.getElementById('score').innerHTML)) {
		document.getElementById('highScore').innerHTML = document.getElementById('score').innerHTML;
	
	}

}

export {gameOverSound, updateScore};
