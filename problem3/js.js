/*
Given a Roman numeral, the task is to find its corresponding decimal value.

Example : 

Input: IX
Output: 9
Explanation: IX is a Roman symbol which represents 9

Input: XL
Output: 40
Explanation: XL is a Roman symbol which represents 40


Input: MCMIV
Output: 1904
Explanation: M is a thousand, CM is nine hundred and IV is four
*/

const romanNumber = "XXL";


// function getting number from roman char 
const getRomanCharNumber = (char) => {
	switch (char) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		default:
			return -1;
	}
}

// converting string with roman numbers to arabic numbers
const convertRomanNumberToNum = (str) => {
	let convertedNum = 0;

	for (let index = 0; index < str.length; index++) {
		let firstLetter = getRomanNumber(str.charAt(i));

		if (i + 1 < str.length) {
			let secondLetter = getRomanNumber(str.charAt(i + 1));

			if (firstLetter >= secondLetter) {
				// Value of current symbol is greater or equal to next symbol
				convertedNum = convertedNum + firstLetter;
			}
			else {
				// Value of current symbol is less than the next symbol
				convertedNum = convertedNum + secondLetter - firstLetter;
				i++;
			}
		} else {
			convertedNum = convertedNum + firstLetter;
		}
	}
	return convertedNum;
}