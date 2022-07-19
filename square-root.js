// Math.sqrt(number)

const number = prompt('Enter the number');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

// output
// Enter the number: 9 
// The square root of 9 is 3

const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

// output
// The square root of 2.25 is 1.5
// The square root of -4 is NaN
// The square root of hello is NaN