const generateFruit = (arr) => {
	let i = Math.floor(Math.random() * arr.length);
	let j = Math.floor(Math.random() * arr[0].length);
	if (arr[i][j] == 0){
		arr[i][j] = 3;
		return;
	}
	else return generateFruit(arr);
}

export default generateFruit;
