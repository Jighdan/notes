// Sum of two numbers

#include <iostream>

int main() {
	// Initializing variables
	int num1, num2, sum;

	std::cout << "Type first number:\n\t";
	std::cin >> num1;
	std::cout << "Type second number:\n\t";
	std::cin >> num2;
	sum = num1 + num2;
	std::cout << "The sum is " << sum << std::endl;
	return 0;
};