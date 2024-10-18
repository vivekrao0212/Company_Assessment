// stringCalculator.js
const stringCalculator = {
    add: function (numbers) {
      if (numbers === "") return 0;
  
      // Support custom delimiters
      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
      }
  
      // Split by delimiters
      const nums = numbers.split(delimiter).map(Number);
  
      // Check for negatives and throw an error if any are found
      const negatives = nums.filter(n => n < 0);
      if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
      }
  
      // Sum the numbers, ignoring any that are greater than 1000
      return nums
        .filter(n => n <= 1000)
        .reduce((sum, num) => sum + num, 0);
    }
  };
  
  module.exports = stringCalculator;
  