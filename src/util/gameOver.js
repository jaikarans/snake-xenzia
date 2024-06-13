import drawSnake from "../snake/drawSnake.js";
import { newSnake } from "../snakeArray.js";

const gameOverSound = () => {
	document.getElementById('game-over').play();
}

const updateScore = () => {
	if (Number(document.getElementById('highScore').innerHTML) < Number(document.getElementById('score').innerHTML)) {
		document.getElementById('highScore').innerHTML = document.getElementById('score').innerHTML;
		if (localStorage.getItem('highestScore')) {
			localStorage.setItem('highestScore', document.getElementById('score').innerText)
		}
	
	}

}

const gameOver = () => {
	if (window.intervalId != null) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}

	//disable the keyword actions
	window.keyboardEnabled = false;

	gameOverSound();
	updateScore();

	const overlayDiv = document.getElementById('overlay');
	overlayDiv.style.display = 'table';
	document.getElementById('menu').style.filter = 'blur(3px)';
	document.getElementById('submenu').style.filter = 'blur(3px)';
	document.getElementById('canvas').style.filter = 'blur(3px)';

}

const replay = () => {
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('menu').style.filter = 'blur(0px)';
	document.getElementById('submenu').style.filter = 'blur(0px)';
	document.getElementById('canvas').style.filter = 'blur(0px)';

	//enable the keyword actions
	window.keyboardEnabled = true;

	// resetting the score
	document.getElementById('score').innerHTML = 0;

	document.getElementById('mouse-click').play();
	newSnake();
	drawSnake();

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;
}

export {gameOverSound, updateScore, gameOver, replay};
