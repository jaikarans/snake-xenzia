import drawSnake from './src/snake/drawSnake.js';
import generateArray from './src/snakeArray.js';
import up_handler from './src/Movehandler/up.js';
import down_handler from './src/Movehandler/down.js';
import right_handler from './src/Movehandler/right.js';
import left_handler from './src/Movehandler/left.js';

const snakeBite = document.createElement("audio");
snakeBite.src = '../../snake-bite.mp3';
snakeBite.setAttribute("preload", "auto");
snakeBite.setAttribute("controls", "none");
snakeBite.style.display = "none";
snakeBite.id = 'snakeBite';
document.body.appendChild(snakeBite);

const canvas = document.getElementById('canvas');
canvas.height = 1000;
canvas.width = 1000;
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
generateArray(arr, rowCell, colCell);
const printArray = (arr) => {
	for (let i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}

var snakeQueue = new Array();
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
arr[10][20] = 3;

printArray(arr);

var intervalId;
var respond;
var delay = 150;
drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
window.addEventListener('keydown', (event) => {
	console.log(event.key);
	// to terminate the Interval function
	// clearInterval(IntervalId) method is used for that perpose
	

	if (event.key == 'ArrowUp' && !arrowUpPressedAlready && !arrowDownPressedAlready) {
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
		}, delay);

	}
	else if (event.key == 'ArrowDown' && !arrowUpPressedAlready && !arrowDownPressedAlready) {
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
		}, delay);

	}
	else if (event.key == 'ArrowLeft' && !arrowLeftPressedAlready && !arrowRightPressedAlready) {
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
		}, delay);
		console.log(intervalId);
	}
	if (event.key == 'ArrowRight' && !arrowLeftPressedAlready && !arrowRightPressedAlready) {
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
		}, delay);
	}
	console.log(intervalId);

});

