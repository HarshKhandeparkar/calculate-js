import { parse } from './parse';

/**
 * Returns true if they are equal.
 * @param num1
 * @param num2
 * @returns num1 == num2
 */
export function equal(num1: string, num2: string): boolean {
  const number1 = parse(num1);
  const number2 = parse(num2);

  return number1.fractionalPart === number2.fractionalPart &&
    number1.integralPart === number2.integralPart &&
    number1.isNegative === number2.isNegative;
}

/**
 * Returns true if num1 > num2
 * @param num1
 * @param num2
 * @returns num1 > num2
 */
export function gt(num1: string, num2: string): boolean {
  const number1 = parse(num1);
  const number2 = parse(num2);

  // Invert comparison if both numbers are negative
  // Use !invertCondition in place of true and !invertCondition in place of false
  let invertCondition = number1.isNegative && number2.isNegative;

  if (!number1.isNegative && number2.isNegative) return !invertCondition;
  if (number1.isNegative && !number2.isNegative) return invertCondition;

  // Try to find the first possible condition avoid unnecessary computation
  if (number1.integralPart.length > number2.integralPart.length) return !invertCondition;
  if (number1.integralPart.length < number2.integralPart.length) return invertCondition;

  for (let i = 0; i < number1.integralPart.length; i++) {
    if (parseInt(number1.integralPart[i]) > parseInt(number2.integralPart[i])) return !invertCondition;
  }

  for (let i = 0; i < number1.fractionalPart.length; i++) {
    if (number2.fractionalPart.length <= i) return !invertCondition; // If number 2 has less fractional digits and all digits before did not return false
    else if (parseInt(number1.fractionalPart[i]) < parseInt(number2.fractionalPart[i])) return invertCondition;
    else if (parseInt(number1.fractionalPart[i]) > parseInt(number2.fractionalPart[i])) return !invertCondition;
  }

  return invertCondition;
}

/**
 * Returns true if num1 >= num2
 * @param num1
 * @param num2
 * @returns num1 >= num2
 */
export function gte(num1: string, num2: string): boolean {
  return gt(num1, num2) || equal(num1, num2);
}

/**
 * Returns true if num1 < num2
 * @param num1
 * @param num2
 * @returns num1 < num2
 */
 export function lt(num1: string, num2: string): boolean {
  return !gt(num1, num2) && !equal(num1, num2);
}

/**
 * Returns true if num1 <= num2
 * @param num1
 * @param num2
 * @returns num1 <= num2
 */
 export function lte(num1: string, num2: string): boolean {
  return !gt(num1, num2);
}
