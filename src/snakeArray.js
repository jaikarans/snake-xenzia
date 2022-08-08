const generateArray = (arr, rowCell, colCell) => {
	for (let i=0; i<rowCell; i++) {
		arr.push([]);
		let a = arr[i];
		for (let j=0; j<colCell; j++) {
			a.push(0);
		}
	}
}

export default generateArray;
