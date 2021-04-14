export function truncateExtraZeros(number: string) {
  const answer = number.replace(/^0*/, '').replace(/0*$/, '');

  if (answer.startsWith('.')) return '0' + answer;
  else return answer;
}
