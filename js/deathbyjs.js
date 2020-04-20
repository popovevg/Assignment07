/*eslint-env browser*/

//STEP 1
// let userInput = window.prompt("Enter string:");
// function stringSort (argument) {
//     let characterArray = argument.split("");
//     return characterArray.sort().join('');
// }
// window.alert(stringSort(userInput));

//STEP 2
// let userString = window.prompt("Enter your string:");
// function eachWordUpperCase (argument) {
//     let words = argument.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase().concat(words[i].slice(1));
//     }
//     return words.join(" ");
// }
// window.alert(eachWordUpperCase(userString));

//STEP 3
// let userString = window.prompt("Enter your string:");
// function vowelsAmount (argument) {
//     let finalAmount = 0;
//     let vowels = "aeiouy";
//     let letters = userString.split('');
//     for (letter of letters) {
//         if (vowels.indexOf(letter.toLowerCase()) >= 0) {
//             finalAmount++;
//         }
//     }
//     return finalAmount;
// }
// window.alert("Your sentence has " + vowelsAmount(userString) + " vowel sounds.");


//STEP 4
// let charactersString = " qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
// function randomString () {
//     let userInput = window.prompt("Enter string length you want to generate:");
//     let randomCharactersArray = new Array();
//     for (let i = 0; i < userInput; i++) {
//         randomCharactersArray[i] = charactersString[Math.floor(Math.random()*charactersString.length)];
//     }
//     window.alert(randomCharactersArray.join(''));
// }
// randomString();

//STEP 5
// let userInput = ["Australia", "Germany", "United States of America","OAE"];
// function Longest_Country_Name(argument) {
//     argument.sort((a, b) => {
//         if (a.length < b.length) {
//             return 1;
//         }  
//         if (a.length > b.length) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     })
//     return argument[0];
// }
// window.alert(Longest_Country_Name(userInput));