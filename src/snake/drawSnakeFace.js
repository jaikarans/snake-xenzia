const drawSnakeFace = (i, j) => {
    let h = window.cellHeight;
    let w = window.cellWidth;
    let ctx = window.ctx;

    let temp = ctx.fillStyle;
	ctx.fillStyle = '#68bf45';

	let len = h/2;

	ctx.fillRect(i*w+2,j*h+2,w-4,h-4);
	ctx.fillStyle = 'black';
	ctx.beginPath()
    ctx.moveTo(i*w, j*h);
    ctx.lineTo(i*w, j*h+len);
    ctx.lineTo(i*w+len, j*h);
    ctx.lineTo(i*w, j*h);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*w+w, j*h);
    ctx.lineTo(i*w+w-len, j*h);
    ctx.lineTo(i*w+w, j*h+len);
    ctx.lineTo(i*w+w, j*h);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*w, j*h+h);
    ctx.lineTo(i*w+len, j*h+h);
    ctx.lineTo(i*w, j*h+h-len);
    ctx.lineTo(i*w, j*h+h);
    ctx.closePath();
	ctx.fill();

	ctx.beginPath()
    ctx.moveTo(i*w+w, j*h+h);
    ctx.lineTo(i*w+w-len, j*h+h);
    ctx.lineTo(i*w+w, j*h-len+h);
    ctx.lineTo(i*w+w, j*h+h);
    ctx.closePath();
	ctx.fill();

	ctx.fillStyle = temp;
}

export default drawSnakeFace;