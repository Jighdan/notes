const functions = require("../4.dataStructures");

test("range", () => {
	expect(functions.range(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9]);
	expect(functions.range(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("sum", () => {
	expect(functions.sum([1, 2, 3])).toBe(6);
	expect(functions.sum(functions.range(1, 10))).toBe(55);
});

test("reverseArray", () => {
	expect(functions.reverseArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
});

test("reverseArrayInPlace", () => {
	expect(functions.reverseArrayInPlace([1, 2, 3])).toStrictEqual([3, 2, 1]);
});
