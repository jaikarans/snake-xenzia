const generateFruit = () => {
	console.log('generateFruit()');
	let arr = window.arr;
	let i, j;
	while (true) {
		i = Math.floor(Math.random() * arr.length);
		j = Math.floor(Math.random() * arr[0].length);
		if (arr[i][j] == 0){
			arr[i][j] = 3;
			console.log('food generated arr[', i, ', ',j,']');
			return;
		}
	}
}

export default generateFruit;
