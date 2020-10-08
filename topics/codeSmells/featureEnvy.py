"""
Feature envy is a term used to describe a situation in which one object gets at
the fields of another object in order to perform some sort of computation or
make a decision, rather than asking the object to do the computation itself.
"""

# Bad Example
class BadRectangle:
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height


def get_area(width: float, height: float) -> float:
    return width * height

new_rectangle = BadRectangle(4, 6)
get_area(new_rectangle.width, new_rectangle.height)

# Here the issue is that everytime one needs to get the area of such rectangle,
# one relies in an outside function. This breaks encapsulation. So a way to
# avoid this, could be to move such method inside the class.

# Good Example
class Rectangle:
    def __init__(self, width: float, height: float):
        self.width = width
        self.height = height

    def get_area(self) -> float:
        return self.width * self.height


new_rectangle = Rectangle(4, 6)
new_rectangle.get_area()

"""
Characteristics of a Feature Envy Smell:
    - A classic example could be where you sight a method at the wrong place.
    - The class uses a significant number of methods and fields of other Class
      (being used more than the class where it is defined).
    - A properties/fields of a class are used by/in other classes features
      (more than in the class where it is defined).
    - A method being used exposing internal of other class.

------
Cons:
    - High maintenance.
    - Difficult to enhance/extend features.
    - Demote readability and hard to understand.

------
How to solve:
    - Move methods.
    - Move fields.
    - Extract method.
"""


