import { IParsedNumber } from '../types/number';
import { truncateExtraZeros } from './truncate';

export function format(number: IParsedNumber) {
  let num = '';

  if (number.isNegative) num = '-' + num;
  num += number.integralPart === '' ? 0 : number.integralPart;

  if (number.fractionalPart !== '') num += '.' + number.fractionalPart;

  return truncateExtraZeros(num);
}
