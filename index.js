import drawSnake from './src/snake/drawSnake.js';
import {generateArray, newSnake} from './src/snakeArray.js';
import up_handler from './src/Movehandler/up.js';
import down_handler from './src/Movehandler/down.js';
import right_handler from './src/Movehandler/right.js';
import left_handler from './src/Movehandler/left.js';

const score = document.getElementById('score');
// const highestScore = document.getElementById('highestScore');

// loading font to body
var myFont = new FontFace('myFont', 'url(asset/PressStart2P-Regular.ttf)');
myFont.load().then(function(font) {
	document.fonts.add(font);
  	console.log('Font loaded');
});

// document.getElementById('highestScore').style = 'font-family: myFont';
const canvas = document.getElementById('canvas');
canvas.height = 900;
canvas.width = 900;
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
canvas.style = "background-image: url('./asset/black.jpg')";

var arrowUpPressedAlready = false;
var arrowDownPressedAlready = false;
var arrowLeftPressedAlready = false;
var arrowRightPressedAlready = false;

var rowCell = 30;
var colCell = 30;
var cellHeight = canvas.height/colCell;
var cellWidth = canvas.width/colCell;


var arr = [[]];
var snakeQueue = new Array();
generateArray(arr, rowCell, colCell);

arr[10][10] = 2;
arr[10][11] = 1;
arr[10][12] = 1;
arr[10][13] = 1;
arr[10][14] = 1;
snakeQueue.push([10,10]);
snakeQueue.push([10,11]);
snakeQueue.push([10,12]);
snakeQueue.push([10,13]);
snakeQueue.push([10,14]);

// adding fruits
arr[18][8] = 3;


const printArray = (arr) => {
	for (let i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}

printArray(arr);

var intervalId;
var respond;
var delay = 70;
var mouseClick = document.getElementById('mouse-click');
drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);

document.getElementById('easy').addEventListener('click', () => {
	clearInterval(intervalId);
	mouseClick.play();
	document.getElementById('delay').innerHTML = 100;
	newSnake(arr, snakeQueue);
	drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
	arrowUpPressedAlready = false;
	arrowDownPressedAlready = false;
	arrowLeftPressedAlready = false;
	arrowRightPressedAlready = false;
	
});
document.getElementById('medium').addEventListener('click', () => {
	clearInterval(intervalId);
	mouseClick.play();
	document.getElementById('delay').innerHTML = 80;
	newSnake(arr, snakeQueue);
	drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
	arrowUpPressedAlready = false;
	arrowDownPressedAlready = false;
	arrowLeftPressedAlready = false;
	arrowRightPressedAlready = false;
	
});
document.getElementById('hard').addEventListener('click', () => {
	clearInterval(intervalId);
	mouseClick.play();
	document.getElementById('delay').innerHTML = 20;
	newSnake(arr, snakeQueue);
	drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
	arrowUpPressedAlready = false;
	arrowDownPressedAlready = false;
	arrowLeftPressedAlready = false;
	arrowRightPressedAlready = false;
	
});
document.getElementById('how-to-play').addEventListener('click', () => {
	clearInterval(intervalId);
	mouseClick.play();
	newSnake(arr, snakeQueue);
	drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
	arrowUpPressedAlready = false;
	arrowDownPressedAlready = false;
	arrowLeftPressedAlready = false;
	arrowRightPressedAlready = false;
	
});

window.addEventListener('keydown', (event) => {
	// console.log(event.key);	
	// to terminate the Interval function
	// clearInterval(IntervalId) method is used for that perpose
	if (event.key == ' ') {
		clearInterval(intervalId);
		arrowUpPressedAlready = false;
		arrowDownPressedAlready = false;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = false;
	}

	
	if ((event.key == 'ArrowUp' || event.key=='w' || event.key=='W') && !arrowUpPressedAlready && !arrowDownPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = true;
		arrowDownPressedAlready = false;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = false;

		intervalId = setInterval(() => {
			console.log('up');
			respond = up_handler(arr, snakeQueue);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
			// printArray(arr);
		}, Number(document.getElementById('delay').innerHTML));

	}
	else if ((event.key=='ArrowDown' || event.key=='s' || event.key=='S') && !arrowUpPressedAlready && !arrowDownPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = false;
		arrowDownPressedAlready = true;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = false;

		intervalId = setInterval(() => {
			console.log('down');
			respond = down_handler(arr, snakeQueue);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
			// printArray(arr);
		}, Number(document.getElementById('delay').innerHTML));

	}
	else if ((event.key == 'ArrowLeft' || event.key=='a' || event.key=='A') && !arrowLeftPressedAlready && !arrowRightPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = false;
		arrowDownPressedAlready = false;
		arrowLeftPressedAlready = true;
		arrowRightPressedAlready = false;

		intervalId = setInterval(() => {
			console.log('left');
			respond = left_handler(arr, snakeQueue);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
			// printArray(arr);
		}, Number(document.getElementById('delay').innerHTML));
		// console.log(intervalId);
	}
	if ((event.key == 'ArrowRight' || event.key=='d' || event.key=='D') && !arrowLeftPressedAlready && !arrowRightPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = false;
		arrowDownPressedAlready = false;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = true;

		intervalId = setInterval(() => {
			console.log('right');
			respond = right_handler(arr, snakeQueue);
			// printArray(arr);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
		}, Number(document.getElementById('delay').innerHTML));
	}
	// console.log(intervalId);

});

