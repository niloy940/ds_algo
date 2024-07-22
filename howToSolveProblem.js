
// Exercise Interview Question --> usign cheetsheet

// Given 2 arrays, create a function that let's a user know (true/false) 
// whether these two arrays contains any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// --------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false 

// function containsCommonItems(array1, array2) {
// 	for (var i = 0; i < array1.length; i++) {
// 		for (var j = 0; j < array2.length; j++) {
// 			if (array1[i] === array2[j]) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// }

// console.log(containsCommonItems(array1, array2));

// Time Complexity: O(a * b)
// Space Complexity: O(1)

// optimizing to overcome O(n^2) problem

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItems2(arr1, arr2) {
	// loop through first array and create object where properties === items in the array
	// can we assume always two params?

	let map = {};

	for (var i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}
	
	// loop through second array and check and check if items in second array exists on created object.
	for (var j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return true
		}
	}
	return false;
}

// console.log(containsCommonItems2(array1, array2));

// Time Complexity: O(a + b)
// Space Complexity: O(a)

// readable way using language specific methods

function containsCommonItems3(arr1, arr2) {
	return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItems3(array1, array2));