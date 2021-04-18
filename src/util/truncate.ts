export function truncateExtraZeros(num: string) {
  let number = num;
  const isNegative = number.startsWith('-');

  if (isNegative) number = number.slice(1);

  let answer = number.replace(/^0*/, '').replace(/0*$/, '');

  if (answer.startsWith('.') || answer === '') answer = '0' + answer;
  if (answer.endsWith('.')) answer = answer.slice(0, answer.length - 1);

  if (isNegative) answer = '-' + answer;

  return answer;
}
