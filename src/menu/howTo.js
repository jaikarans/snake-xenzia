import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const showInstruction = () => {
	if (true) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}
	
	document.getElementById('mouse-click').play();
	newSnake();
	drawSnake();

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;
	
	// button highlighting
	let easy = document.getElementById('easy');
	let medium = document.getElementById('medium');
	let hard = document.getElementById('hard');
	let howTo = document.getElementById('how-to-play');

	easy.style.backgroundColor = '#333232';
	easy.style.boxShadow = 'none';

	medium.style.backgroundColor = '#333232';
	medium.style.boxShadow = 'none';

	hard.style.backgroundColor = '#333232';
	hard.style.boxShadow = 'none';

	howTo.style.backgroundColor = '#262626';
	howTo.style.boxShadow = '10px 10px 15px black';

}

export default showInstruction;
