# Algorithms Analysis

## What is an Algorithm?
- Algorithms are the ideas behind computer programs.
An algorithmic problem is specified by describing the set of instances it must work on, and what desired properties the output must have.

### Example Problem: Sorting
> Input: A sequence of `n` numbers `a1`, `a2`... `an`.
> Output: The permutation (reordering) of the input sequence such as `a1 <= a2 ... <= an`.

## Correctness
For any algorithm, we must prove that it always return the desired output for all legal instances of the problems.

### Example Problem: Shortest Tour
An idea is to repeatedly connect the closest pair of points whose connection will not cause a cycle or a three-way branch, until all points are in one tour.
```
let `n` be the number of points in the set
d = Infinite
For i = 1 to n - 1 do
	For each pair of endpoints (x, y) of partial paths
		If dist(x, y) <= d then
			xm = x, ym = y, d = dist(x, y)
	Connect (xm, ym) by an edge
Connect the two endpoints by an edge
```

