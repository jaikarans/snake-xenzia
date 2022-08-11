import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const setEasyLevel = () => {
	clearInterval(window.intervalId);

	document.getElementById('mouse-click').play();
	document.getElementById('delay').innerHTML = 90;

	newSnake();
	drawSnake();

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;
	
}

export default setEasyLevel;
