/*jshint esversion: 6 */
// datatypes
let a = 16;		// a is a number
let b = "Hi";	// b is a string
let c = true;	// c is a Boolean
let d;				// d is undefined

// variables
let e = 1; // can be updated but not used twice within the same scope
const f = 1; // use whenever the value will remain constant

// switch case
const month = 4;
switch(month){
				case 1:
								console.log("Jan");
								break;
				case 2:
								console.log("Feb");
								break;
				default:
								console.log("Mar");
}

// conditional for
for(let i=0; i<=10; i++){
				console.log(i);
}

// while
let i = 0;
while(i <= 10){
				console.log(i);
				i++;
}

// do while
let h = 1;
do {
				console.log(h);
				h++;
} while(h <= 10);

// objects
const person = {
	name: "Brian Holt",
	city: "Seattle",
	state: "WA",
	favoriteFood: "🌮",
	wantsTacosRightNow: true,
	numberOfTacosWanted: 100
};

// arrow functions
const sayMyName = (name) => {alert(`Hello ${name}!`);}
