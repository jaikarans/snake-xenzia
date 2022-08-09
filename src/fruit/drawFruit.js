const drawFruit = (i, j, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	let previousStyle = ctx.fillStyle;
	ctx.fillStyle = 'red';
	// ctx.beginPath();
	// ctx.arc(i*cellWidth+15, j*cellHeight+15, 25, 0, 2 * Math.PI);
	// ctx.fill();
	ctx.strokeRect(i*cellWidth,j*cellHeight,cellWidth,cellHeight);
	ctx.fillRect(i*cellWidth+2,j*cellHeight+2,cellWidth-4,cellHeight-4);
	ctx.fillStyle = previousStyle;
}

export default drawFruit;
