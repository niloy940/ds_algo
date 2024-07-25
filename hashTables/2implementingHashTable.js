class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	} // O(1)

	set(key, value) {
		let address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
		}

		this.data[address].push([key, value]);
		return this.data;
	}	// O(1)

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				const element = currentBucket[i];
				if (element[0] === key) {
					return element[1];
				}
			}
		}

		return undefined;
	} // O(1) if no collisions else O(n)

	keys() {
		const keysArray = [];

		for (let i = 0; i < this.data.length; i++) {
			const element = this.data[i];
			if (element) {
				keysArray.push(element[0][0]);
			}
		}

		return keysArray;
	} // O(n) --> unordered in memory --> looping through entire memory spaces
}

const hashTable = new HashTable(50);
hashTable.set('graps', 20);
hashTable.set('apple', 50);
hashTable.set('orange', 70);
console.log(hashTable.get('apple'));
console.log(hashTable.keys());
console.log(hashTable);