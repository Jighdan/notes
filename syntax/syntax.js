// datatypes
let x = 16;		// x is a number
let x = "Hi";	// x is a string
let x = true;	// x is a Boolean
let x;			// x is undefined

// variables
let a = 1 // can be updated but not used twice within the same scope
const b = 1 // use whenever the value will remain constant

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
const sayMyName = (name) => {alert(`Hello ${name}!`)};