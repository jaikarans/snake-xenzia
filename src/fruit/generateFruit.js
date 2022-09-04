const generateFruit = () => {
	let arr = window.arr;
	let i, j;
	while (true) {
		//  Math.floor(Math.random() * (Max - min + 1) + min);
		i = Math.floor(Math.random() * ((arr.length)));
		j = Math.floor(Math.random() * (arr[0].length));
		if (arr[i][j] == 0){
			arr[i][j] = 3;
			return;
		}
	}
}

export default generateFruit;
