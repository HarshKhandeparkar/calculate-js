# Calculate JS
A JavaScript library to calculate fractions, trigonometric functions, and others to n-digits and return it as a string.

### Table of Contents
- [Installation](#installation)
- [Library](#library)

### Installation
Install it via npm/yarn.
`yarn add @harshkhandeparkar/calculate-js` or `npm i @harshkhandeparkar/calculate-js`

### Library
This library exports the following functions:
- [Calculate Fraction](#calculate-fraction)

#### Calculate Fraction
`calculateFraction(num, den, numDig) => string`
This function calculates fractions of the form `num/den` to `numDig` digits and returns the answer as a string.

Parameters:
1. `num`: Numerator of the fraction.
2. `den`: Denominator of the fraction.
3. `numDig`: Number of digits to be calculated.
