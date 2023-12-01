                                                  //Task2

/* function add(a: number, b: number): number {
     return a + b;
}
function checkEvenOrOdd(number: number): string {
return number % 2 === 0 ? "Even" : "Odd";
}
function calculateArea(width: number, height: number): number {
    return width * height;
}
function reverseString(inputStr: string): string {
    return inputStr.split('').reverse().join('');
}
function convertCelsiusToFahrenheit(celsius: number): number {
 return (celsius * 9/5) + 32;
}
                                                                
//Sum Numbers
const resultSum: number = add(3, 5);
console.log(resultSum);
                                                                
// Check Even or Odd
const resultEvenOdd: string = checkEvenOrOdd(7);
console.log(resultEvenOdd);
                                                                
//Calculate Area
const resultArea: number = calculateArea(4, 6);
console.log(resultArea);
                                                                
//String Reversal
const resultReverse: string = reverseString("hello");
console.log(resultReverse);
                                                                
//Convert Celsius To Fahrenheit
const resultTemperature: number = convertCelsiusToFahrenheit(25);
console.log(resultTemperature); */

                                                //Task3
                                                
// Initialize an array with some initial elements.
let myArray: number[] = [1, 2, 3, 4, 5];

// push: Add new elements to the end of the array.
myArray.push(6, 7);

// pop: Remove the last element from the array.
const poppedElement = myArray.pop();

// shift: Remove the first element from the array.
const shiftedElement = myArray.shift();

// unshift: Add new elements to the beginning of the array.
myArray.unshift(0, -1);

// Display the modified array and the elements that were popped and shifted.
console.log("Modified Array:", myArray);
console.log("Popped Element:", poppedElement);
console.log("Shifted Element:", shiftedElement);

// Create a copy of the original array for demonstration purposes.
const originalArray: number[] = [1, 2, 3, 4, 5];

// splice: Create a subarray by removing elements from the original array.
const splicedArray = originalArray.splice(1, 2); // Removes 2 elements starting from index 1.

// slice: Create a subarray without modifying the original array.
const slicedArray = originalArray.slice(1, 4); // Creates a subarray from index 1 to index 3.

// Display the original array and the subarrays created using splice and slice.
console.log("Original Array:", originalArray);
console.log("Subarray created using splice:", splicedArray);
console.log("Subarray created using slice:", slicedArray);
