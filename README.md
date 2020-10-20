# Calculate JS
A JavaScript library to calculate fractions, trigonometric functions, and others to n-digits and return it as a string.

### Table of Contents
- [Installation And Usage](#installation-and-usage)
- [Library](#library)

### Installation And Usage
Install it via npm/yarn.
`yarn add @harshkhandeparkar/calculate-js` or `npm i @harshkhandeparkar/calculate-js`

All the library functions are exported as non-default exports and can be included with `require` or ES6 syntax.
TS typings are also included ☜(⌒▽⌒)☞

### Library
```js
const { calculateFraction } = require('@harshkhandeparkar/calculate-js');

calculateFraction(45, 46, 15).answer; // '0.978260869565217'
```

This library exports the following functions:
- [Calculate Fraction](#calculate-fraction)

#### Calculate Fraction
`calculateFraction(num, den, numDig) => object`
This function calculates fractions of the form `num/den` to `numDig` digits and returns the answer as a string.

Parameters:
1. `num`: Numerator of the fraction.
2. `den`: Denominator of the fraction.
3. `numDig`: Number of digits to be calculated.

Returns:
It returns an object with the following properties.
```ts
{
  answer: string, // The answer as a string
  recurrence: {
    isRecurring: boolean, // Whether recurrence started in the digits that were calculated
    recurrencePosition: number /** The index (without decimal .) at which the
  recurrence starts. This means that the digits beyond this will start looking similar to the existing digits. This doesn't necessarily mean that the digits before this define the whole sequence.
  Example: 1/3 = 0.333; Here the recurrencePosition is 2 since 3 is the first recurring digit
  (algorithm assumes that 33 is repeating instead of 3)
  }
}
```
