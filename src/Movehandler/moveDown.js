import down_handler from './down.js';
import drawSnake from "../snake/drawSnake.js";

const moveDown = () => {
	if (window.intervalId != null) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = true;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;

	window.intervalId = window.setIntervalAsync(() => {
		down_handler();
		drawSnake();
	}, Number(document.getElementById('delay').innerHTML));

}

export default moveDown;
