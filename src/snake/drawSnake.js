import drawSnakeFace from './drawSnakeFace.js';
import drawFruit from '../fruit/drawFruit.js';

const drawSnake = (arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	ctx.fillStyle = 'black';
	// console.log('entered');
	// ctx.fillStyle = 'green';
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fillStyle = '#68bf45';
	for (let i=0; i<rowCell; i++) {
		for (let j=0; j<colCell; j++) {
			
			if (arr[i][j] == 1) {
				ctx.strokeRect(i*cellWidth,j*cellHeight,cellWidth,cellHeight);
				ctx.fillRect(i*cellWidth+2,j*cellHeight+2,cellWidth-4,cellHeight-4);
			}
			else if (arr[i][j] == 2) {
				drawSnakeFace(i, j, ctx, rowCell, colCell, cellWidth, cellHeight);
			}
			else if (arr[i][j] == 3) {
				drawFruit(i, j, ctx, rowCell, colCell, cellWidth, cellHeight);
			}
	
			
		}
	}
}

export default drawSnake;
