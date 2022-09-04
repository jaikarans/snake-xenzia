import drawSnakeFace from './drawSnakeFace.js';
import drawFruit from '../fruit/drawFruit.js';

const drawSnake = () => {
	let h = window.cellHeight;
	let w = window.cellWidth;
	let arr = window.arr;
	let canvas = window.canvas;
	let ctx = window.ctx;

	let temp = ctx.fillStyle;

	let fontPercentage = Math.floor((window.innerHeight * 2.5) / 100);
	ctx.font = fontPercentage+'px myFont';

	ctx.fillStyle = 'black';
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fillStyle = '#68bf45';
	
	for (let i=0; i<window.arr.length; i++) {
		for (let j=0; j<window.arr[0].length; j++) {
			if (arr[i][j] == 3) {
				// drawFruit(i, j);
				const tempAnother = ctx.fillStyle;
				ctx.fillStyle = 'red';
				ctx.strokeRect(i*w,j*h,w,h);
				ctx.fillRect(i*w+2,j*h+2,w-4,h-4);
				ctx.fillStyle = tempAnother;
			}
			if (arr[i][j] == 1) {
				ctx.strokeRect(i*w,j*h,w,h);
				ctx.fillRect(i*w+2,j*h+2,w-4,h-4);
			}
			else if (arr[i][j] == 2) {
				drawSnakeFace(i, j);
			}

			// const tempAnother = ctx.fillStyle;
			// 	ctx.fillStyle = 'green';
			// 	ctx.strokeRect(i*w,j*h,w,h);
			// 	ctx.fillRect(i*w+2,j*h+2,w-4,h-4);
			// 	let str = i + ',' + j;
			// 	ctx.fillStyle = 'red';
			// 	ctx.fillText(str, i*w, j*h);
			// 	ctx.fillStyle = tempAnother;
			
			
			temp = ctx.fillStyle;
			ctx.fillStyle = "#eeeeee";
			ctx.fillText(score.innerHTML, window.rowCell*w-w-70, h+15);
			ctx.fillStyle = temp;
		}
	}
	// window.requestAnimationFrame(drawSnake);
}

export default drawSnake;
