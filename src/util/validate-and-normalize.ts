import { truncateExtraZeros } from './truncate';

/**
 * Validates whether a given string is a number and normalizes it (removes zeros at the and and adds zeros before . if no digit is present)
 * @param number
 */
export function validateAndNormalizeNumberString(number: string) {
  if (
    !number.split('').every((char) => {
      return !isNaN(Number(char)) || char === '.' || char === '-';
    })
  ) throw 'Given string is not a number.';

  if (number.match(/\./g) && number.match(/\./g).length > 1) throw 'Given string is not a number.';
  if (number.match(/\-/g) && number.match(/\-/g).length > 1) throw 'Given string is not a number.';

  return truncateExtraZeros(number);
}
