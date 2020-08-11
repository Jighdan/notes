/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers for start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

sum(range(1, 10)) -> 55

As a bonus assignment, modify your range function to take an optional third argument that indicates the "step" value used when building the array. If no step is given, the elements go up by incrementing of one, corresponding to the old behavior.

range(1, 10, 2) -> [1, 3, 5, 7, 9]
*/

const range = (start, end, step = start < end ? 1 : -1) => {
		let numsInRange = [];
		if (step > 0) {
			for (let item = start; item <= end; item += step) { numsInRange.push(item) };
		} else {
			for (let item = start; item >= end; item += step) { numsInRange.push(item)};
		};

		return numsInRange;
};

const sum = arrayOfNums => {
	return arrayOfNums.reduce((a, b) => a + b, 0);
};

/*
Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, does what the reverse method does: it modifies the array given as argument by reversing it's elements. Neither you may use the standard reverse method.
*/

const reverseArray = array => {
	const reversed = array.reverse();
	return reversed;
};

const reverseArrayInPlace = array => {
	for (let item = 0; item < Math.floor(array.length / 2); item++) {
		let old = array[item];
		array[item] = array[array.length - 1 - item];
		array[array.length - 1 - item] = old;
	};
	return array;
};

module.exports = {
	range,
	sum,
	reverseArray,
	reverseArrayInPlace
};
