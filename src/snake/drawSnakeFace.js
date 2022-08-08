const drawSnakeFace = (i, j, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	ctx.strokeStyle = "#68bf45";
	ctx.beginPath();
	ctx.arc(i*cellWidth+15, j*cellHeight+15, 10, 0, 2 * Math.PI);
	ctx.fill();
	// ctx.arc(i*cellWidth+2,j*cellHeight+2,cellWidth-4,cellHeight-4);


}

export default drawSnakeFace;