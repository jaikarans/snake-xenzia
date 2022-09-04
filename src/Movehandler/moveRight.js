import right_handler from './right.js';
import drawSnake from "../snake/drawSnake.js";

const moveRight = () => {
	if (window.intervalId != null) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = true;

	window.intervalId = window.setIntervalAsync(() => {
		right_handler();
		drawSnake();
	}, Number(document.getElementById('delay').innerHTML));

}

export default moveRight;
