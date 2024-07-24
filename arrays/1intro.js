const strings = ['a', 'b', 'c', 'd'];

// 4 * 4 = 16 bytes of storage

let index2 = strings[2]; // O(1)

// push --> insert element at the end
strings.push('e');	// O(1)

// pop --> remov the last element
strings.pop();
strings.pop(); // O(1)

// unshift --> insert element at the beginning
strings.unshift('x'); // O(n) --> loop through every element and reassign index

// splice --> remove and insert element after given index
strings.splice('2', 0, 'alien'); // O(n)  
// starts from index 2, remove 0 element, insert element after index 2 

console.log(strings);


// Array
// lookup O(1)
// push O(1) 	// can be O(n) for dynamic array cause loop through array and reassign memory location with new element
// insert O(n)	
// delete O(n)	