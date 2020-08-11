/*
Write a function min that takes two arguments and returns their minimum.
*/

const minimum = (arg1, arg2) => Math.min(arg1, arg2);

/*
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean
*/

const isEven = (number) => {
	while (true) {
		if (number == 0 || number == 1) {
			return number;
		} else {
			return isEven(number - 2);
		};
	};
};

/*
Write a function countBs that takes a string as it's only argument and returns a number that indicates how many uppercase "B" characters there are in the string.

Next, write a function countChar that behaves like countBs, except it takes a second argument that indicates the character is to be counted (rather than counting only uppercase "B" characters.). Rewrite countBs to make use of this new function.
*/

const countBs = (text) => {
	return countChar(text, "B")
};

const countChar = (text, character) => {
	let count = 0;
	for (let index = 0; index < text.length; index++) {
		if (text.charAt(index) == character) {
			count++
		};
	};
	return count
}

module.exports = {
	minimum,
	isEven,
	countBs,
	countChar
}
