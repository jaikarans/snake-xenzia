import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const setMediumLevel = () => {
	clearInterval(window.intervalId);

	document.getElementById('mouse-click').play();
	document.getElementById('delay').innerHTML = 70;

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

	medium.style.backgroundColor = '#262626';
	medium.style.boxShadow = '10px 10px 15px black';

	hard.style.backgroundColor = '#333232';
	hard.style.boxShadow = 'none';

	howTo.style.backgroundColor = '#333232';
	howTo.style.boxShadow = 'none';

}

export default setMediumLevel;
