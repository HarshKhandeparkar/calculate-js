import test from 'tape';
import { calculateFraction } from '../../src/calculate/fraction';

test('Calculate Fraction', t =>{
  t.deepEqual(
    calculateFraction(1, 3, 10),
    {
      answer: '0.3333333333',
      recurrence: {
        isRecurring: true,
        recurrencePosition: 2
      }
    },
    'Recurring Fraction Works'
  )

  t.deepEqual(
    calculateFraction(1, 53, 10),
    {
      answer: '0.0188679245',
      recurrence: {
        isRecurring: false,
        recurrencePosition: -1
      }
    },
    'Non Recurring Fraction Works'
  )

  t.end();
})
