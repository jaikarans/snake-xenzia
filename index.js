import drawSnake from './src/snake/drawSnake.js';
import {generateArray, newSnake} from './src/snakeArray.js';
import setEasyLevel from './src/menu/easy.js';
import setMediumLevel from './src/menu/medium.js';
import setHardLevel from './src/menu/hard.js';
import showInstruction from './src/menu/howTo.js';
import pauseGame from './src/Movehandler/pause.js';
import moveUp from './src/Movehandler/moveUp.js';
import moveDown from './src/Movehandler/moveDown.js';
import moveLeft from './src/Movehandler/moveLeft.js';
import moveRight from './src/Movehandler/moveRight.js';


var myFont = new FontFace('myFont', 'url(asset/PressStart2P-Regular.ttf)');
myFont.load().then(function(font) {
	document.fonts.add(font);
  	console.log('Font loaded');
});

// document.getElementById('highestScore').style = 'font-family: myFont';
window.canvas = document.getElementById('canvas');
window.canvas.height = 900;
window.canvas.width = 900;
window.ctx = window.canvas.getContext('2d');
window.ctx.fillStyle = 'green';
window.canvas.style = "background-image: url('./asset/black.jpg')";

window.arrowUpPressedAlready = false;
window.arrowDownPressedAlready = false;
window.arrowLeftPressedAlready = false;
window.arrowRightPressedAlready = false;

window.rowCell = 30;
window.colCell = 30;
window.cellHeight = window.canvas.height/window.colCell;
window.cellWidth = window.canvas.width/window.colCell;

window.intervalId = null;

window.arr = [[]];
window.snakeQueue = new Array();
generateArray();
newSnake();

drawSnake();

document.getElementById('easy').addEventListener('click', setEasyLevel);
document.getElementById('medium').addEventListener('click', setMediumLevel);
document.getElementById('hard').addEventListener('click', setHardLevel);
document.getElementById('how-to-play').addEventListener('click', showInstruction);

window.addEventListener('keydown', (event) => {
	if (event.key == ' ') {
		pauseGame();

	} else if ((event.key == 'ArrowUp' || event.key=='w' || event.key=='W') && !window.arrowUpPressedAlready && !window.arrowDownPressedAlready) {
		moveUp();

	} else if ((event.key=='ArrowDown' || event.key=='s' || event.key=='S') && !window.arrowUpPressedAlready && !window.arrowDownPressedAlready) {
		moveDown();

	} else if ((event.key == 'ArrowLeft' || event.key=='a' || event.key=='A') && !window.arrowLeftPressedAlready && !window.arrowRightPressedAlready) {
		moveLeft();

	} else if ((event.key == 'ArrowRight' || event.key=='d' || event.key=='D') && !window.arrowLeftPressedAlready && !window.arrowRightPressedAlready) {
		moveRight();

	}

});

