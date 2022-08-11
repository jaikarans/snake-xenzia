import right_handler from './right.js';
import drawSnake from "../snake/drawSnake.js";

const moveRight = () => {
	clearInterval(window.intervalId);

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = true;

	window.intervalId = setInterval(() => {
		console.log('right');
		right_handler();
		drawSnake();
	}, Number(document.getElementById('delay').innerHTML));

}

export default moveRight;
