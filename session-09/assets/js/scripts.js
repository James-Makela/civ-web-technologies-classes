// Challenge 2

let length = 15;
let width = 26;

area = Math.round(length * width);
console.log(`Area: ${area}`);

// Challenge 3

// Generate 5 random numbers
let numbers = Array(5);
for (let i = 0; i < 5; i++)
{
    numbers[i] = Math.round(Math.random() * 100) + 1;
}

// Calculate the sum of these 10 random numbers
let sum = numbers.reduce((a, b)=>a + b);

// Calculate the average of all these numbers
let average = sum / numbers.length;

// Calculate the square root of the average
let sqRoot = Math.sqrt(average);

// Find the largest number among the generated random numbers
let largest = Math.max(...numbers);

// Calculate the factorial of the largest number
let factorial = 1;
for (let index = 1; index <= largest; index++) 
{
    factorial = index * factorial
}

// Display results of all functions
console.log(`Numbers: ${numbers}`);
console.log(`Sum of Numbers: ${sum}`);
console.log(`Average of numbers: ${average}`);
console.log(`Square root of average: ${sqRoot}`);
console.log(`Largest: ${largest}`);
console.log(`Factorial: ${factorial}`)