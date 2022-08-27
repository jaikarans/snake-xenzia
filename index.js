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
import { replay } from './src/util/gameOver.js';

// setting flag to keyborad action
window.keyboardEnabled = true;

// using setIntervalAsync instead of setInterval
// because it dynamic setIntervalAsync doesn't skip fun calls
window.setIntervalAsync = SetIntervalAsync.dynamic.setIntervalAsync;
window.clearIntervalAsync = SetIntervalAsync.clearIntervalAsync;
// window.intervalId = Object.create(SetIntervalAsync.setIntervalAsync);


var myFont = new FontFace('myFont', 'url(asset/PressStart2P-Regular.ttf)');
myFont.load().then(function(font) {
	document.fonts.add(font);
});

// document.getElementById('highestScore').style = 'font-family: myFont';
window.canvas = document.getElementById('canvas');
window.canvas.height = window.innerHeight - Math.floor(4*window.innerHeight/100);
window.canvas.width = window.innerHeight - Math.floor(4*window.innerHeight/100);
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


window.arr = [[]];
window.snakeQueue = new Array();
generateArray();
newSnake();

window.currentDirection = 'up';

drawSnake();

document.getElementById('easy').addEventListener('click', setEasyLevel);
document.getElementById('medium').addEventListener('click', setMediumLevel);
document.getElementById('hard').addEventListener('click', setHardLevel);
document.getElementById('how-to-play').addEventListener('click', showInstruction);

window.addEventListener('keydown', (event) => {
	if (window.keyboardEnabled) {
		if (event.key == ' ') {
			pauseGame();
	
		} else if ((event.key == 'ArrowUp' || event.key=='w' || event.key=='W') &&
		 !window.arrowUpPressedAlready && !window.arrowDownPressedAlready && window.currentDirection != 'down') {
			window.currentDirection = 'up';
			moveUp();
	
		} else if ((event.key=='ArrowDown' || event.key=='s' || event.key=='S') &&
		 !window.arrowUpPressedAlready && !window.arrowDownPressedAlready && window.currentDirection != 'up') {
			window.currentDirection = 'down';
			moveDown();
	
		} else if ((event.key == 'ArrowLeft' || event.key=='a' || event.key=='A') &&
		 !window.arrowLeftPressedAlready && !window.arrowRightPressedAlready && window.currentDirection != 'right') {
			window.currentDirection = 'left';
			moveLeft();
	
		} else if ((event.key == 'ArrowRight' || event.key=='d' || event.key=='D') &&
		 !window.arrowLeftPressedAlready && !window.arrowRightPressedAlready && window.currentDirection != 'left') {
			window.currentDirection = 'right';
			moveRight();
	
		}
	}

});

document.getElementById('overlay').addEventListener('click', () => {
	replay();
});
