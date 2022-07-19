// Example 1: Using a Temporary Variable

let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

// swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// output
// Enter the first variable: 4
// Enter the second variable: 2
// The value of a after swapping: 2
// The value of b after swapping: 4


// Example 2: Using es6(ES2015) Destructuring assignment

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// Output
// Enter the first variable: 4
// Enter the second variable: 2
// The value of a after swapping: 2
// The value of b after swapping: 4

// Example 3: Using Arithmetic Operators

// addition and substraction operator
a = a + b;
b = a - b;
a = a - b;

onsole.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// Output
// Enter the first variable: 4
// Enter the second variable: 2
// The value of a after swapping: 2
// The value of b after swapping: 4


// Example 4: Using Bitwise XOR operator

// XOR operator
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// Output
// Enter the first variable: 4
// Enter the second variable: 2
// The value of a after swapping: 2
// The value of b after swapping: 4
