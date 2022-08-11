import up_handler from './up.js';
import drawSnake from "../snake/drawSnake.js";

const moveUp = () => {
	clearInterval(window.intervalId);

	window.arrowUpPressedAlready = true;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;

	window.intervalId = setInterval(() => {
		console.log('up');
		up_handler();
		drawSnake();
	}, Number(document.getElementById('delay').innerHTML));

}

export default moveUp;
