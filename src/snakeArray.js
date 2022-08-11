const generateArray = (arr, rowCell, colCell) => {
	for (let i=0; i<rowCell; i++) {
		arr.push([]);
		let a = arr[i];
		for (let j=0; j<colCell; j++) {
			a.push(0);
		}
	}
}

const newSnake = (arr, snakeQueue) => {
	for (let i=0; i<arr.length; i++) {
		for (let j=0; j<arr[0].length; j++) {
			arr[i][j] = 0;
		}
	}
	snakeQueue.splice(0, snakeQueue.length);
	arr[10][10] = 2;
	arr[10][11] = 1;
	arr[10][12] = 1;
	arr[10][13] = 1;
	arr[10][14] = 1;
	snakeQueue.push([10,10]);
	snakeQueue.push([10,11]);
	snakeQueue.push([10,12]);
	snakeQueue.push([10,13]);
	snakeQueue.push([10,14]);

	// adding fruits
	arr[18][8] = 3;

}

export {generateArray, newSnake};
