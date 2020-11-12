/**
 * Calculate fractions to n digits and return the answer as a string
 * @param num Numerator of the fraction.
 * @param den Denominator of the fraction.
 * @param numDig Number of digits to be calculate.
 */
export function calculateFraction(
  num: number,
  den: number,
  numDig: number
): {
  answer: string,
  recurrence: {
    isRecurring: boolean,
    recurrencePosition: number
  }
}  {
  const isNegative = Math.sign(num * den) === -1;
  const absNum = Math.abs(num), absDen = Math.abs(den);

  let ans = '';
  let last = absNum; // The last numerator
  let recurring = false; // Whether the number has started recurring
  let recurrencePosition: number = -1;

  const lastNumerators: number[] = [ last ]; // A list of numerators that were generated in between, to check for recurrence

  /**
   * num/den (num < den)
   * = (1/10)((k*num + l)/den) = k/10 + l/den
   * Recursively do for l/den
   */
  for (let i = 0; i < numDig; i++) {
    ans += Math.floor(10 * last / absDen); // Remove the largest multiple of n2 and separate it.
    last = (10 * last) % absDen; // The left over numerator

    if (!recurring) {
      if (lastNumerators.indexOf(last) !== -1) {
        recurrencePosition = i + 1; // +1 since the next digit's numerator is checked
        recurring = true;
      }
      else lastNumerators.push(last);
    }
  }

  // Insert decimal point .
  const decimalIndex = absNum / absDen > 1 ? (Math.floor(absNum / absDen).toString().length) : 0;
  ans = ans.slice(0, decimalIndex) + '.' + ans.slice(decimalIndex);

  if (ans[0] == '.') {
    recurrencePosition++;
    ans = '0' + ans;
  }

  if (isNegative) ans = '-' + ans;

  return {
    answer: ans,
    recurrence: {
      isRecurring: recurring,
      recurrencePosition: recurring ? recurrencePosition : -1
    }
  }
}
