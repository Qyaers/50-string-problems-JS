/*
Given a string, the task is to reverse the order of the words in the given string.
Examples:

Input: s = “geeks quiz practice code”
Output: s = “code practice quiz geeks”

*/
const str = "geeks quiz practice code";
//Solve 1 using array.reverse

const reverseStr = (str) => str.split('').reverse().join('');

console.log(`Solve 1 by reverse array:
geeks quiz practice code = ${reverseStr(str)}`);

//Solve 2 using cycle for

const reverseStrFor = (str) => {
	let arr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		arr += str[i];
	}
	return arr;
}

console.log(`Solve 2 by cycle for resault for string:  
${str} = ${reverseStrFor(str)}`);

//Solve 3 using array.reduceRight

const reverseStrReduceRight = (str) => str.split('').reduceRight((prevVal, curVal) => prevVal + curVal);

console.log(`Solve 3 reduceRight array method: 
${str} =  ${reverseStrReduceRight(str)}`);