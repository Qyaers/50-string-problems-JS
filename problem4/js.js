/*
Find the minimum distance between the given two words
Given a list of words followed by two words, the task is to find the minimum distance between the given two words in the list of words.

Examples:

Input: S = { "the", "quick", "brown", "fox", "quick"}, word1 = "the", word2 = "fox"
Output: 3
Explanation: Minimum distance between the words "the" and "fox" is 3

Input: S = {"geeks", "for", "geeks", "contribute",  "practice"}, word1 = "geeks", word2 = "practice"
Output: 2
Explanation: Minimum distance between the words "geeks" and "practice" is 2
*/


//First solution what comes
const arr = ["the", "quick", "brown", "fox", "quick"];
let twoWords = ["the", "fox"];

const shortestDistanceBetweenStrs = (arr, word1, word2) => arr.slice(arr.indexOf(word1), arr.indexOf(word2)).length;

console.log("First solution: " + shortestDistanceBetweenStrs(arr, ...twoWords));


//Second solution (little bit thinking about how make it esear)
const arr1 = ["the", "quick", "brown", "fox", "quick"];
let twoWords1 = ["the", "fox"];

const shortestDistanceBetweenStrs1 = (arr, word1, word2) => arr.indexOf(word2) - arr.indexOf(word1);

console.log("Second solution(refactored code): " + shortestDistanceBetweenStrs(arr1, ...twoWords1));

