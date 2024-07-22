// Good code --> Readable + Scalable
// BIG O --> Scalable(Speed + Memory) code



// Speed --> BIG O Tiem Complexity

// O(n) --> linear time

// const nemo = ['nemo'];
// const large = new Array(5000).fill('nemo');

// function findNemo(array) {
// 	let t0 = performance.now();
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] === 'nemo') {
// 			console.log('Found Nemo!');
// 		}
// 	}
// 	let t1 = performance.now();

// 	console.log('Call to find nemo took ' + (t1 - t0) + ' milliseconds!');
// }
// findNemo(large); 

// O(n) --> Linear time (to find nemo) 
// O = operations
// n = number of input 
// ex: O(1) or O(5000) --> 1 or 5000 operations depanding on n
// if number of iptups n increase --> number of opertations O also increase linearly with n 
// Complexity --> Fair --> 3rd position


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// O(1) --> constant time

// const boxes = [0,1,2,3,4,5];

// function logFirstTwoBoxes() {
// 	console.log(boxes[0]); // O(1)
// 	console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2) --> simplified to overall O(1)

// O(1) --> Always takes constant time to find element
// It doesn't depand on input --> no matter how many inputs are
// Always one operation so it is very scaleable
// Complexity --> Excellent --> 1st position


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Exercise 1

// Calculate BIG O notation

// function funChallange(input) {
// 	let a = 10; // O(1)
// 	a = 50 + 3;	// O(1)

// 	for (let i = 0; i < input.length; i++) { // O(n)
// 		anotherFunction(); // O(n)
// 		let stranger = true; // O(n)
// 		a++; //O(n)
// 	}

// 	return a; // O(1)
// }
//Ans. BIG O notation: BIG O(3 + 4n) --> simplified to --> O(n)



// Exercise 2

// function anotherFunChallange(input) {
// 	let a = 5; // O(1)
// 	let b = 10; // O(1)
// 	let c = 50; // O(1)

// 	for (let i = 0; i < input; i++) { // O(n)
// 		let x = i + 1; // O(n)
// 		let y = i + 2; // O(n)
// 		let z = i + 3; // O(n)
// 	}

// 	for (let j = 0; j < input; j++) { // O(n)
// 		let p = j * 2; // O(n)
// 		let q = j * 2; // O(n)
// 	}

// 	let whoAmI = "I don't know"; // O(1)
// }

// Ans.BIG O notation: BIG O(4 + 7n) --> simplified to --> O(n)

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Rule 1 --> Worst Case

// Optimizing our findNemo() fucntion

// const nemo = ['nemo'];
// const everyone = ['name0', 'name1', 'name2', 'name3', 'nemo', 'name4', 'name5', 'name6', 'name7', 'name8', 'name9'];
// const large = new Array(5000).fill('nemo');

// function findNemo(array) {
// 	for (let i = 0; i < array.length; i++) {

// 		console.log('running');
		
// 		if (array[i] === 'nemo') {
// 			console.log('Found Nemo!');
// 			break; // optimization --> when nemo found loop will be stopped
// 		}
// 	}
// }

// findNemo(everyone);

// worst case --> loop will run full length of array if 'nemo' is in the last index --> O(n) 
// BIG O always thinks about worst cases first


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


// Rule 2 --> Remove Constants

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
// 	console.log(items[0]) // O(1)

// 	var middleIndex = Math.floor(items.length / 2);
// 	var index = 0;

// 	while (index < middleIndex) { // O(n/2)
// 		console.log(items[index]);

// 		index++;
// 	}

// 	for (let i = 0; i < 100; i++) { // O(100)
// 		console.log('hi');
// 	}
// }

// BIG O notation: BIG O(1 + n/2 + 100) --> ignoring var assignments and small calculations
// simplified --> BIG O(n/2 + 101) --> BIG O(n/2 + 1) --> BIG O(n + 1) --> BIG O(n)
// After dropping the constants --> Ans. O(n)



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Rule 3 --> Different terms for inputs (multiple inputs)

// function compressBoxesTwice(boxes, boxes2) {
// 	boxes.forEach(function (box) { // O(a)
// 		console.log(box);
// 	});

// 	boxes2.forEach(function (box) { // O(b)
// 		console.log(box);
// 	});
// }

// This function depands on two different items: boxes, boxes2
// BIG O notation: BIG O(a + b)


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// O(n^2)
// Interview question
// Log all pairs of array
// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(boxes) {
// 	for (var i = 0; i < boxes.length; i++) { // O(n)
// 		for (var j = 0; j < boxes.length; j++) { // O(n)
// 			console.log(boxes[i], boxes[j]);
// 		}
// 	}
// }

// logAllPairsOfArray(boxes);

// BIG O notation: BIG O(n * n) --> BIG O(n^2)
// We have to multiplay if nasted loop
// If two defferent inputs then the BIG O would be --> BIG O(a * b)
// Complexity: Horrible


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Rule 4 --> Drop non dominants

// function printAllNumbersThenAllPairSums(numbers) {
// 	console.log('these are the numbers');

// 	numbers.forEach(function(number) { // O(n)
// 		console.log(number);
// 	});

// 	console.log('and these are their sums:')

// 	numbers.forEach(function(firstNumber) { // O(n)
// 		numbers.forEach(function(secondNumber) { //O(n)
// 			console.log(firstNumber + secondNumber);
// 		});
// 	});
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5]);

// BIG O notation: BIG O(n + n^2) --> Drop non dominant --> O(n^2)
// another Ex: O(x^2 + 3x + 100 + x/2) --> Here 100 is constant and x^2 is most dominant --> O(x^2)
// Complexity: Horrible


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// O(n!) Factorial
// Means we are adding nested loop for every input
// Complexity: Horrible++






/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// Memory --> Space Complexity

// Heep --> store variables
// Stack --> keep track of function calls

// What causes space complixity?
// Varivales
// Data Structures
// Fuction calls
// Allowcations

// O(1)
// Ex: 1
// function booom(numbers) {
// 	for (var i = 0; i < numbers.length; i++) {
// 		console.log('boooooom!');
// 	}
// }

// booom([1,2,3,4,5]);

// BIG O notation: O(1)		// only assigning one variable i = 0

//Ex: 2
// function arrayNTimes(n) {
// 	let someArray = [];

// 	for (let i = 0; i < n; i++) {
// 		someArray[i] = 'hi';
// 	}

// 	console.log(someArray);
// }

// arrayNTimes(6);

// BIG O notation: BIG O(n)


// Ex: 3
// find 1st, find nth
// const array = ['one', 'two', 'three'];
// let first = array[0]; // O(1)
// let last = array[array.length-1]; // O(1)

// console.log(first, last);

// BIG O notation: BIG O(1)

// Ex 4: compare date
// const array = [
// 		{
// 			tweet: 'hi',
// 			date: '2012',
// 		},
// 		{
// 			tweet: 'hello',
// 			date: '2014',
// 		},
// 		{
// 			tweet: 'hey',
// 			date: '2016'
// 		}
// 	];
	
// BIG O notation: BIG O(n^2)

// Ex: 5

// const length = 'asdfasdgasdgasd'.length // O(1) --> for js  	// depands on language

