// create a function that reverses a string
// 'Hi my name is Niloy' should be 
// 'yoliN si eman ym iH'

const string = 'Hi my name is Niloy';

function reverse(string) {
	// check input
	if (!string || string.length < 2 || typeof (string) !== 'string') {
		return 'Please input a valid string';
	}

	const stringsArray = string.split('');
	const reversedStringsArray = [];

	for (let i = stringsArray.length - 1; i >= 0; i--) {
		const element = stringsArray[i];
		reversedStringsArray.push(element);
	}

	return reversedStringsArray.join('');
}

console.log(reverse(string));


// readable way using js bulit in functions
function reverse2(string) {
	return (string.split('').reverse().join(''));
}
console.log(reverse2(string));

// using js new es6 syntax

const reverse3 = string => [...string].reverse().join('');

console.log(reverse3(string));