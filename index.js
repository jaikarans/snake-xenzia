import drawSnake from './src/snake/drawSnake.js';
import generateArray from './src/snakeArray.js';
import up_handler from './src/Movehandler/up.js';
import down_handler from './src/Movehandler/down.js';

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
arr[11][10] = 1;
arr[12][10] = 1;
arr[13][10] = 1;
arr[14][10] = 1;
snakeQueue.push([10,10]);
snakeQueue.push([11,10]);
snakeQueue.push([12,10]);
snakeQueue.push([13,10]);
snakeQueue.push([14,10]);

// adding fruits
arr[10][20] = 3;
arr[23][10] = 3;
arr[24][10] = 3;
arr[0][10] = 3;
arr[1][10] = 3;
arr[7][10] = 3;

printArray(arr);


drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
window.addEventListener('keydown', (event) => {
	console.log(event.key);
	// to terminate the Interval function
	// clearInterval(IntervalId) method is used for that perpose
	let intervalId;
	let respond;

	if (event.key == 'ArrowUp' && !arrowUpPressedAlready && !arrowDownPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = true;
		arrowDownPressedAlready = false;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = false;

		intervalId = setInterval(() => {
			respond = up_handler(arr, snakeQueue);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
			// printArray(arr);
		}, 300);

	}

	else if (event.key == 'ArrowDown' && !arrowUpPressedAlready && !arrowDownPressedAlready) {
		clearInterval(intervalId);
		arrowUpPressedAlready = false;
		arrowDownPressedAlready = true;
		arrowLeftPressedAlready = false;
		arrowRightPressedAlready = false;

		intervalId = setInterval(() => {
			respond = down_handler(arr, snakeQueue);
			drawSnake(arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight);
			if (respond == 'exit') {
				clearInterval(intervalId);
			}
		}, 300);

	}

});

