import { truncateExtraZeros } from '../util/truncate';
import { parse } from '../util/parse';
import { format } from '../util/format';

function addIntegralNumbers(num1: string, num2: string) {
  let answer = '';

  if (num1.length !== 0 || num2.length !== 0) {
    // Start adding from the last digit
    let iA = num1.length - 1,
      iB = num2.length - 1,
      carryOver = 0;

    while (iA >= 0 || iB >= 0 || carryOver !== 0) {
      if (iA >= 0 && iB >= 0) {
        const sumOfDigits = Number(num1[iA--]) + Number(num2[iB--]) + carryOver;
        carryOver = sumOfDigits > 10 ? (sumOfDigits - sumOfDigits % 10) / 10 : 0;
        const digit = sumOfDigits % 10;

        answer = digit.toString() + answer;
      }
      else {
        if (iA >= 0) answer = num1[iA--] + answer;
        else if (iB >= 0) answer = num2[iB--] + answer;
        else if (carryOver !== 0) answer = carryOver.toString() + answer;

        carryOver = 0;
      }
    }
  }
  else answer = '0';

  return answer;
}

/**
 * Adds two numbers(of any precision) in the form of a string to any precision.
 * @param number1
 * @param number2
 */
function addTwo(number1: string, number2: string): string {
  const num1 = parse(number1);
  const num2 = parse(number2);

  const fractionalParts: [string, string] = [
    num1.fractionalPart,
    num2.fractionalPart
  ]

  const integralParts: [string, string] = [
    num1.integralPart,
    num2.integralPart
  ]

  let answerIntegralPart = '';
  let answerFractionalPart = '';

  // Add integral parts
  answerIntegralPart = addIntegralNumbers(...integralParts);

  // Add fractional parts
  // Append zeros to the smaller number
  if (fractionalParts[0].length < fractionalParts[1].length) {
    fractionalParts[0] += (new Array(fractionalParts[1].length - fractionalParts[0].length)).fill(0).join('');
  }
  else {
    fractionalParts[1] += (new Array(fractionalParts[0].length - fractionalParts[1].length)).fill(0).join('');
  }

  answerFractionalPart = addIntegralNumbers(...fractionalParts);

  // Carryover into the integral section
  if (
    answerFractionalPart.length >
    Math.max(
      fractionalParts[0].length,
      fractionalParts[1].length
    )
  ) {
    const carryOver = answerFractionalPart[0];
    answerFractionalPart = answerFractionalPart.slice(1);

    answerIntegralPart = addIntegralNumbers(answerIntegralPart, carryOver);
  }

  return format({
    integralPart: answerIntegralPart,
    fractionalPart: answerFractionalPart,
    isNegative: false
  })
}

/**
 * Adds numbers(of any precision) in the form of a string to any precision.
 */
export function add(...numbers: string[]) {
  if (numbers.length < 2) return numbers[0];

  let answer = addTwo(numbers[0], numbers[1]);
  for (let i = 2; i < numbers.length; i++) answer = addTwo(answer, numbers[i]);

  return truncateExtraZeros(answer);
}
