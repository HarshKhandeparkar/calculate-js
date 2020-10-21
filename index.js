const num = 1;
const den = 1345113;
const numDigits = 2000;

document.getElementById('num-digits').innerText = numDigits;
document.getElementById('number').innerText = `${num}/${den}`;

const ans = calculateFraction(num, den, numDigits).answer;

document.getElementById('digits').innerText = ans;
