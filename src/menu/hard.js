import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const setHardLevel = () => {
	if (window.intervalId != null) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}

	document.getElementById('mouse-click').play();
	document.getElementById('delay').innerHTML = 35;

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
	easy.style.color = '#afafaf';

	medium.style.backgroundColor = '#333232';
	medium.style.boxShadow = 'none';
	medium.style.color = '#afafaf';

	hard.style.backgroundColor = '#262626';
	hard.style.boxShadow = '10px 10px 15px black';
	hard.style.color = '#ffffff';

	howTo.style.backgroundColor = '#333232';
	howTo.style.boxShadow = 'none';
	howTo.style.color = '#afafaf';

}

export default setHardLevel;
