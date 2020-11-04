// Anagrams

// Write a function anagram, that takes 2 strings and returns true if they are anagrams of each other or false if they are not.
// Consider the inputs have only alphabetic characters and spaces, no numbers or special characters. You do need to take of spaces
// The function must be case insensitive. Meaning that funeral and Real Fun are also anagrams
// Note: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

// Examples:
// anagram('listen', 'silent')
// // returns true
     
// anagram('Andess', 'San des')
// // returns true

// anagram('Hello', '')
// // returns false

function checkIfAnagram1(stringOne, stringTwo){
    let strWithoutSpaces1 = stringOne.replace(/ /g,'').toLowerCase();
    let strWithoutSpaces2 = stringTwo.replace(/ /g,'').toLowerCase();

    let str1Spl = strWithoutSpaces1.split("");
    let str2Spl = strWithoutSpaces2.split("");    

    let arr1Sorted = str1Spl.sort();
    let arr2Sorted = str2Spl.sort();    

    let answer = "anagram";
    for(let i = 0 ; i < arr1Sorted.length ; i++){

        if(arr1Sorted[i] !== arr2Sorted[i]) {
            answer = "not anagram";
        }
    }    
    return answer;
}
console.log(checkIfAnagram1('Listen', 'sil ent'));


// Function using methods and forEach
function checkIfAnagram2(stringOne, stringTwo){
    let arr1Sorted = stringOne.replace(/ /g,'').toLowerCase().split("").sort();
    let arr2Sorted = stringTwo.replace(/ /g,'').toLowerCase().split("").sort();

    let answer = "anagram";
    
    arr1Sorted.forEach((char, index) => {
        char !== arr2Sorted[index] ? answer = "not anagram" : answer = "anagram";
    })
    return answer;
}
console.log(checkIfAnagram2('Listen', 'sil ent'));

// Factorials
// In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n:
// That means that 5! is:
// 5 * 4 * 3 * 2 * 1 = 120
// Create a function that takes a positive number and returns that number's factorial
// Remember that factorial of 0 is 1 -> 0! = 1
// Try to use only functions (no JS methods a part from if/else, only functions)

// const factorial = num => {
//     if(num === 0) return 1;
//     else return num * factorial(num - 1);
// };
// console.log(factorial(0));

// const factorial2 = num => {
//     let result = 1;
//     for (let i = 1; i <= num; i++){
//          result = result * i
//     }
//     return result;
// }
// console.log(factorial2(5));