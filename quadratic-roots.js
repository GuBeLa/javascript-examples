// ax2 + bx + c = 0, where
// a, b and c are real numbers and
// a ≠ 0

// (root1,root2) = (-b ± √b2-4ac)/2

// Example: Roots of a Quadratic Equation

let root1, root2;

let a = prompt('Enter the first number: ');
let b = prompt('Enter the second number: ');
let c = prompt('Enter the third number: ');

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real 
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`
        The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i
    `);
}

// Output 1
// Enter the first number: 1
// Enter the second number: 6
// Enter the third number: 5
// The roots of quadratic equation are -1 and -5

// Output 2
// Enter the first number: 1
// Enter the second number: -6
// Enter the third number: 9
// The roots of quadratic equation are 3 and 3

// Output 3
// Enter the first number: 1
// Enter the second number: -3
// Enter the third number: 10
// The roots of quadratic equation are 1.50 + 2.78i and 1.50 - 2.78i