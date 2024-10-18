
const stringCalculator = require('./stringCalculator');

// Test 1: Empty string should return 0
test('returns 0 for an empty string', () => {
  expect(stringCalculator.add("")).toBe(0);
});

// Test 2: Single number returns that number
test('returns the number itself for a single number string', () => {
  expect(stringCalculator.add("5")).toBe(5);
  expect(stringCalculator.add("10")).toBe(10);
});

// Test 3: Two numbers, comma-delimited, returns the sum
test('returns the sum of two numbers separated by a comma', () => {
  expect(stringCalculator.add("1,2")).toBe(3);
});

// Test 4: Multiple numbers, comma-delimited, returns the sum
test('returns the sum of multiple numbers separated by commas', () => {
  expect(stringCalculator.add("1,2,3,4")).toBe(10);
});

// Test 5: Handles newlines as delimiters
test('returns the sum of numbers separated by commas or newlines', () => {
  expect(stringCalculator.add("1\n2,3")).toBe(6);
});

// Test 6: Supports custom delimiters specified as "//[delimiter]\n[numbers...]"
test('supports custom delimiters', () => {
  expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

// Test 7: Throws an error on negative numbers with a message containing the number(s)
test('throws an error when negative numbers are provided', () => {
  expect(() => stringCalculator.add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
});

// Test 8: Ignores numbers greater than 1000
test('ignores numbers greater than 1000', () => {
  expect(stringCalculator.add("2,1001")).toBe(2);
});
