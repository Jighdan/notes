# Big O Notation

Is a notation to measure how fast an algorithm is, determinating the number of operation the algorithm will require.

## Common runtimes
- *Logarithmic time*: `O(log n)`.
- *Linear time*: `O(n)`.
- *Fast sorting*: `O(n * log n)`.
- *Slow sorting*: `O(n^2)`.
- *Factorial time*: `O(n!)`.

## Examples
1. You have a name, and you want to find the person's phone number in the phone book.
```
	We could use a binary search algorithm to find the phone number that matches the name.
	
	Best case runtime  -> O(n)
	Worst case runtime -> O(log n)
```

2. You have a phone number, and you want to find the person's name in the phone book.
```
	Since the phone book is sorted by the persons names in alphabetical order, we could think of it
	as a key-pair values, and since we are looking for a value and to it's corresponding sorted key,
	we would have to iterate all over the phone book in order to find the person's name that
	matches the phone number.

	Best case runtime  -> O(n)
	Worst case runtime -> O(n)
```

3. You want to read the numbers of every person in the phone book.
```
	Best case runtime  -> O(n)
	Worst case runtime -> O(n)
```

