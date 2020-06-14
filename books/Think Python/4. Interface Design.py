import turtle
import math

"""
Write a function called square that takes a parameter named t, which is a turtle. It should use the turtle to draw a square.
"""

def square_generator(t):
	for mv in range(4):
		t.fd(100)
		t.lt(90)

"""
Add another parameter, named length, to square. Modify the body so length of the sides is length, and then modify the function call to provide a second argument. Run the program again. Test your program with a range of values for length.
"""

def square_generator(t, length):
	for mv in range(4):
		t.fd(length)
		t.lt(90)

"""
Make a copy of square and change the name to polygon. Add another parameter named n and modify the body so it draws an n-sided regular polygon.

Hint: The exterior angles of an n-sided regular polygon are 360/n degrees
"""

def polygon_generator(t, length, n):
	angle = 360 / n
	for mv in range(n):
		t.fd(length)
		t.lt(angle)

"""
Write a function called circle that takes a turtle, t, and radius, r, as parameters and that draws an approximate circle by calling polygon with an appropriate length and number of sides. Test your function with a range of values of r.
"""

def circle_generator(t, r):
	circumference = 2 * math.pi * r
	n = int(circumference / 3) + 1
	length = circumference / n
	polygon_generator(t, n, length)
