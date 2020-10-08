"""
The Grade-School Algorithm

IN  -> Two n-digit numbers x and y
OUT -> The product of x * y
"""

def integer_multiplication(x: float, y: float) -> float:
    numbersOfX: List[float] = [int(n) for n in
            str(x)]
    numbersOfX.reverse()
    output: float = 0
    for index, num in enumerate(numbersOfX):
        operation: float = int(f"{num * y}{'0' * index}") if index > 0 else num * y
        output += operation

    return output

"""
Number of operations overall <= constant * n ** 2
"""

"""
The Algorithm Designer's Mantra
-------------------------------

"Perhaps the most important principle for the good algorithm designer is to
refuse to be content."
~ Aho, Hopcroft, and Ullman
- The Design and Analysis of Computer Algorithms, 1974

Always ask, "Can we do better?"
"""
