/*
Write a loop that makes seven calls to console.log to output the following triangle

#
##
###
####
#####
######
#######
*/

function loopingTriangle (loops) {
	const triangle = [];
	for (let line = "#"; line < loops; line += "#") {
		triangle.push(line);
	};
	return triangle;
};

/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

function fizzBuzz () {
	for (let num = 1; num < 101; num = num + 1) {
		let output = "";
		if (num % 3 == 0) { output += "Fizz" };
		if (num % 5 == 0) { output += "Buzz" };
		return output ? output : num;
	}
};

/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
*/

function chessboard (size) {
	let board = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if ((x + y) % 2 == 0) {
				board += " ";
			} else {
				board += "#"
			}
		}
		board += "\n"
	}
	return board;
};

module.exports = {
	loopingTriangle,
	fizzBuzz,
	chessboard
};
