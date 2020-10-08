class Karatsuba_Multiplication:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def _split_number(self, number: float) -> List[float, float]:
        middle_index: int = int(len(str(num)) / 2)
        return [int(str(num)[:middle_index]), int(str(num)[middle_index:])]

    def _pad_with_zero(self, number: float, number_of_zeroes: float) -> float:
        return int(f"{number}{'0' * number_of_zeroes}")

    def __mult__(self):
        a, b = self._split_number(self.x)
        c, d = self._split_number(self.y)
        step_1 = a * c
        step_2 = b * d
        step_3 = (a + b) * (c + d)
        step_4 = step_3 - step_2 - step_1
        f1 = self._pad_with_zero(step_1, len(str(self.x)))
        f2 = self._pad_with_zero(step_4, len(str(a + b)))
        return f1 + step_2 + f2

