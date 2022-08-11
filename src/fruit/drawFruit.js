var blurUp = true;
var blurCount = 1;

const drawFruit = (i, j, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	let previousStyle = ctx.fillStyle;
	// let temp = ctx.shadowColor;
	// let tmp = ctx.shadowBlur;
	// ctx.shadowColor = '#f57c71';
	ctx.fillStyle = 'red';

	ctx.beginPath();
	ctx.arc(i*cellWidth+cellWidth/2, j*cellHeight+cellHeight/2, cellHeight/2, 0, 2 * Math.PI);
	ctx.fill();
	// ctx.strokeRect(i*cellWidth,j*cellHeight,cellWidth,cellHeight);
	// ctx.fillRect(i*cellWidth+2,j*cellHeight+2,cellWidth-4,cellHeight-4);
	ctx.fillStyle = previousStyle;
	// ctx.shadowColor = temp;
	// ctx.shadowBlur = tmp;
}

export default drawFruit;
