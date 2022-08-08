var arr = [
	[]
];

for (let i=0; i<5; i++) {
	arr.push([]);
	let a = arr[i];
	for (let j=0; j<5; j++) {
		a.push(j);
	}
	// console.log('\n');
}

for (let i=0; i<5; i++) {
	for (let j=0; j<5; j++) {
		process.stdout.write("("+i+","+j+")" + ", ");
	}
	console.log('\n');
}