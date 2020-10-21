/**
 * Calculate fractions to n digits and return the answer as a string
 * @param num Numerator of the fraction.
 * @param den Denominator of the fraction.
 * @param numDig Number of digits to be calculate.
 */
export declare function calculateFraction(num: number, den: number, numDig: number): {
    answer: string;
    recurrence: {
        isRecurring: boolean;
        recurrencePosition: number;
    };
};
