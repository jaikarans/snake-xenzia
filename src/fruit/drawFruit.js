var blurUp = true;
var blurCount = 1;

const drawFruit = (i, j) => {
	let ctx = window.ctx;
	let h = window.cellHeight;
	let w = window.cellWidth;

	let temp = ctx.fillStyle;
	ctx.fillStyle = 'red';

	ctx.beginPath();
	ctx.arc(i*w+w/2, j*h+h/2, h/2, 0, 2 * Math.PI);
	ctx.fill();

	ctx.fillStyle = temp;

}

export default drawFruit;
