import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const showInstruction = () => {
	clearInterval(window.intervalId);

	document.getElementById('mouse-click').play();
	newSnake();
	drawSnake();

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;
	
}

export default showInstruction;
