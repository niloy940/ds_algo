// in js objects are hash tables
// we can use only string as key
// data insertion randomly in memory address

let user = {
	name: 'John',
	age: 28,
	magic: true,
	scream: function () {
		console.log('oohhhhhhh!');
	}
}

let age = user.age;		// O(1)
user.spell = 'useeeeer spell';		// O(1)
user.scream();		// O(1)

console.log(user);

// cons: collisions --> multiple data can be stored in same memory address --> O(n/k) --> O(n)

// using map we can allow any data type (ex: function or array etc) as key
// map maintain insertion order in memory address
const a = new Map();

// set only store the keys no values 
const b = new Set();
