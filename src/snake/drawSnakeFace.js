const drawSnakeFace = (i, j, ctx, rowCell, colCell, cellWidth, cellHeight) => {
	let temp = ctx.fillStyle;
	ctx.fillStyle = "#68bf45";
	let len = 17;
	ctx.fillRect(i*cellWidth+2,j*cellHeight+2,cellWidth-4,cellHeight-4);
	ctx.fillStyle = 'black';
	ctx.beginPath()
    ctx.moveTo(i*cellWidth, j*cellHeight);
    ctx.lineTo(i*cellWidth, j*cellHeight+len);
    ctx.lineTo(i*cellWidth+len, j*cellHeight);
    ctx.lineTo(i*cellWidth, j*cellHeight);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*cellWidth+cellWidth, j*cellHeight);
    ctx.lineTo(i*cellWidth+cellWidth-len, j*cellHeight);
    ctx.lineTo(i*cellWidth+cellWidth, j*cellHeight+len);
    ctx.lineTo(i*cellWidth+cellWidth, j*cellHeight);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*cellWidth, j*cellHeight+cellHeight);
    ctx.lineTo(i*cellWidth+len, j*cellHeight+cellHeight);
    ctx.lineTo(i*cellWidth, j*cellHeight+cellHeight-len);
    ctx.lineTo(i*cellWidth, j*cellHeight+cellHeight);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*cellWidth+cellWidth, j*cellHeight+cellHeight);
    ctx.lineTo(i*cellWidth+cellWidth-len, j*cellHeight+cellHeight);
    ctx.lineTo(i*cellWidth+cellWidth, j*cellHeight-len+cellHeight);
    ctx.lineTo(i*cellWidth+cellWidth, j*cellHeight+cellHeight);
    ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#68bf45";

}

export default drawSnakeFace;