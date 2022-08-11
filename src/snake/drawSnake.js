import drawSnakeFace from './drawSnakeFace.js';
import drawFruit from '../fruit/drawFruit.js';

let temp;
const drawSnake = (arr, canvas, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	ctx.fillStyle = 'black';
	ctx.font = '25px myFont';
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
			
			temp = ctx.fillStyle;
			ctx.fillStyle = "#eeeeee";
			// previousShadowBlur = ctx.shadowBlur;
			// ctx.shadowBlur = 0;
			ctx.fillText(score.innerHTML, rowCell*cellWidth-cellWidth-70, cellHeight+15);
			ctx.fillStyle = temp;
		}
	}
}

export default drawSnake;
