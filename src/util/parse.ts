import { IParsedNumber } from '../types/number';
import { validateAndNormalizeNumberString } from './validate-and-normalize';

export function parse(number: string): IParsedNumber {
  const num = validateAndNormalizeNumberString(number);

  const fractionalPart = num.includes('.') ? num.split('.')[1] : '';
  const integralPart = num.includes('.') ? num.split('.')[0] : num;

  const isNegative = num.startsWith('-') && (fractionalPart !== '' || integralPart !== '');

  return {
    isNegative,
    integralPart,
    fractionalPart
  }
}
