const functions = require("../3functions");

test("minimum passes", () => {
	expect(functions.minimum(2, 4)).toBe(2);
});

test("isEven passes", () => {
	expect(functions.isEven(2)).toBe(0);
	expect(functions.isEven(1)).toBe(1);
});

test("countBs passes", () => {
	const testString1 = "Barbacoa de Burro";
	const testString2 = "Bonito, Barato y Bueno";
	expect(functions.countBs(testString1)).toBe(2);
	expect(functions.countBs(testString2)).toBe(3)
});

test("countChar passes", () => {
	const testString1 = "Klk mio, todo bien?";
	const testString2 = "Por la 27 derecho";
	expect(functions.countChar(testString1, "o")).toBe(3);
	expect(functions.countChar(testString2, "e")).toBe(2);
});
