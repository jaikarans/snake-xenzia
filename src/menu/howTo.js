import { newSnake } from "../snakeArray.js";
import drawSnake from "../snake/drawSnake.js";

const hideHowToInstruction = () => {
	document.getElementById('howToOverlay').style.display = 'none';
	document.getElementById('menu').style.filter = 'blur(0px)';
	document.getElementById('submenu').style.filter = 'blur(0px)';
	document.getElementById('canvas').style.filter = 'blur(0px)';

	//enable the keyword actions
	window.keyboardEnabled = true;

	document.getElementById('mouse-click').play();

	// setting easy level when exit the instruction
	let easy = document.getElementById('easy');
	easy.style.backgroundColor = '#262626';
	easy.style.boxShadow = '10px 10px 15px black';
	easy.style.color = '#ffffff';
	document.getElementById('delay').innerHTML = 80;

	// unselecting the how-to-play button
	let howTo = document.getElementById('how-to-play');
	howTo.style.backgroundColor = '#333232';
	howTo.style.boxShadow = 'none';
	howTo.style.color = '#afafaf';

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;
}

const showInstruction = () => {
	if (true) {
		(async () => {
			await window.clearIntervalAsync(window.intervalId);
			
		})();
	}
	
	document.getElementById('mouse-click').play();
	newSnake();
	drawSnake();

	//disable the keyword actions
	window.keyboardEnabled = false;

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

	hard.style.backgroundColor = '#333232';
	hard.style.boxShadow = 'none';
	hard.style.color = '#afafaf';

	howTo.style.backgroundColor = '#262626';
	howTo.style.boxShadow = '10px 10px 15px black';
	howTo.style.color = '#ffffff';

	const howToOverlay = document.getElementById('howToOverlay');
	howToOverlay.style.display = 'flex';
	document.getElementById('menu').style.filter = 'blur(3px)';
	document.getElementById('submenu').style.filter = 'blur(3px)';
	document.getElementById('canvas').style.filter = 'blur(3px)';

}

export {showInstruction, hideHowToInstruction};
