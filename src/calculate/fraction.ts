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
  let ans = '';
  let last = num; // The last numerator
  let recurring = false; // Whether the number has started recurring
  let recurrencePosition: number = -1;

    const lastNumerators: number[] = [ last ]; // A list of numerators that were generated in between, to check for recurrence

  /**
   * num/den (num < den)
   * = (1/10)((k*num + l)/den) = k/10 + l/den
   * Recursively do for l/den
   */

  for (let i = 0; i < numDig; i++) {
    ans += Math.floor(10*last/den); // Remove the largest multiple of n2 and separate it.

    last = (10*last)%den; // The left over numerator

    if (!recurring) {
      if (lastNumerators.indexOf(last) !== -1) {
        recurrencePosition = i;
        recurring = true;
      }
      else lastNumerators.push(last);
    }
  }

  // Insert decimal point .
  const decimalIndex = num/den > 1 ? (Math.floor(num/den).toString().length) : 0;
  ans = ans.slice(0, decimalIndex) + '.' + ans.slice(decimalIndex);

  if (ans[0] == '.') {
    ans = '0' + ans;
    recurrencePosition++;
  }

  return {
    answer: ans,
    recurrence: {
      isRecurring: recurring,
      recurrencePosition
    }
  }
}
