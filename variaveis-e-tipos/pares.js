function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const NAO_ZERO = (num) => num !== 0;
	const NUM_PAR = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (NUM_PAR(array[i]) && NAO_ZERO(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!NAO_ZERO(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);