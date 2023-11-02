/*
Problem Statement: Given a set of strings, find the longest common prefix.
Examples:

Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
Output: "gee"

Input: {"apple", "ape", "april"}
Output: "ap"

The longest common prefix for an array of strings is the common prefix between 2 most dissimilar strings. For example, in the given array {"apple", "ape", "zebra"}, there is no common prefix because the 2 most dissimilar strings of the array "ape" and "zebra" do not share any starting characters. 
We have discussed five different approaches below posts. 
*/

const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];



const longestCommonPrefix = (arr) => {
	let result = arr[0];
	let length = result.length;

	for (let i = 1; i < arr.length; i++) {
		while (arr[i].indexOf(result) !== 0) {
			result = result.substring(0, length - 1);
			length--;

			if (result === '') {
				return '-1';
			}
		}
	}

	return result;
}

console.log(longestCommonPrefix(arr));