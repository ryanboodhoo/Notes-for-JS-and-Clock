// Question 0
function getFirstIndex(names) {
    return names[0];
}
const cars = ["Saab", "Volvo", "BMW"];
console.log(getFirstIndex(cars));

// Question 1
function getLastIndex(names) {
    return names.length - 1;
}
const brands = ["Saab", "Volvo", "BMW"];
console.log(getLastIndex(brands));

// Question 2
function getSecondToLastIndex(names) {
    return names.length >= 2 ? names.length - 2 : -1; // Check for at least 2 elements
}
const cars2 = ["Saab", "Volvo", "BMW"];
console.log(getSecondToLastIndex(cars2));

// Question 3
function getFirstElement(names) {
    return names.length > 0 ? names[0] : undefined; // Return undefined if array is empty
}
const cars3 = ["Saab", "Volvo", "BMW"];
console.log(getFirstElement(cars3));

// Question 4
function getLastElement(names) {
    return names.length > 0 ? names[names.length - 1] : undefined; // Return undefined if array is empty
}
const cars4 = ["Saab", "Volvo", "BMW"];
console.log(getLastElement(cars4));

// Question 5
function getSecondToLastElement(names) {
    return names.length >= 2 ? names[names.length - 2] : undefined; // Check for at least 2 elements
}
const cars5 = ["Saab", "Volvo", "BMW"];
console.log(getSecondToLastElement(cars5));


// Question 6
function getSum(ints) {
    return ints.reduce((acc, num) => acc + num, 0);
}
const numbers = [100,100,100,100,100];
console.log(getSum(numbers));

// Question 7
function getAverage(ints) {
    return ints.length > 0 ? getSum(ints) / ints.length : 0; // Avoid division by zero
}
const numbers2 = [100,100,100,100,100];
console.log(getAverage(numbers2));

// Question 8
function extractAllOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
const numbers3 = [102,100,101,100,15];
console.log(extractAllOddNumbers(numbers3));

// Question 9
function extractAllEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const numbers4 = [102,100,101,100,15];
console.log(extractAllEvenNumbers(numbers4));

// Question 10
function contains(names, element) {
    return names.includes(element);
}
const names = ["ryan", "shawn", "dani", "paul"];
console.log(contains(names, 'paul'));

// Question 11
function getIndexByElement(names, element) {
    return names.indexOf(element);
}
//Element starts at 1 
                 //1     //2      //3     //4
const names1 = ["ryan", "shawn", "dani", "paul"];
console.log(getIndexByElement(names1, 'shawn'));

// Question 13 - Print odd numbers in range
function printOddNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) console.log(i);
    }
}
printOddNumbersInRange(1, 10);

// Question 14
function printGivenStringTimesNumberGiven(str, n) {
    return n > 0 ? str.repeat(n) : ""; // Ensure n is positive
}
console.log(printGivenStringTimesNumberGiven("ryan", 3)); 
console.log(printGivenStringTimesNumberGiven("goku", 1));  
console.log(printGivenStringTimesNumberGiven("buu", 4));

// Question 15
function wordsInAStringCounter(str) {
    return str.trim().split(/\s+/).length;
}
console.log(wordsInAStringCounter("ryan goku buu")); 

 // Question 16
 function vowelsCounter(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}
const sentence = "the quick brown fox jumped over the lazy brown bear";
console.log(vowelsCounter(sentence));

// Question 17 - Swap first and last elements of an array
function swap(stringArray) {
    if (stringArray.length < 2) return stringArray;
    [stringArray[0], stringArray[stringArray.length - 1]] = [stringArray[stringArray.length - 1], stringArray[0]];
    return stringArray;
}
console.log(swap(["apple", "banana", "cherry"])); 


// Question 18 - Replace characters based on a legend
function replaceCharacters(str) {
    const legend = { 'f': '7', 's': '$', '1': '!', 'a': '@' };
    return str.replace(/[fs1a]/g, char => legend[char]);
}
console.log(replaceCharacters("I am a fan of football!"));

// Question 19 - Replace words based on divisibility by 2 and 3
function replaceWuTangTwoThreeDivisible(stringInput) {
    return stringInput.split(" ").map((word, index) => {
        if ((index + 1) % 6 === 0) return "WuTang";
        if ((index + 1) % 2 === 0) return "Wu";
        if ((index + 1) % 3 === 0) return "Tang";
        return word;
    }).join(" ");
}
console.log(replaceWuTangTwoThreeDivisible("The quick brown fox jumps over the lazy dog")); 

// Question 20 - Fibonacci sequence up to a max number
function createStringOfFibonacciUpToMax(maxNumber) {
    if (maxNumber < 0) return ""; // Handle negative max number case
    const fibonacci = [0, 1];
    let nextFib = 1;
    while (nextFib <= maxNumber) {
        fibonacci.push(nextFib);
        nextFib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }
    return fibonacci.join(", ");
}
console.log(createStringOfFibonacciUpToMax(50));