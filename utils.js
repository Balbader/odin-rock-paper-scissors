const computerPlay = () => {
	const array = ['Rock', 'Paper', 'Scissors'];
	const randomAnswer = Math.floor(Math.random() * array.length);
	return randomAnswer;
};

export {computerPlay};
