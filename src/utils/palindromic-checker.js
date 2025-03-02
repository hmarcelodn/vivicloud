import { reverseNumber } from './reverse-number.js';
/**
 * This can be improved by using mathematics.
 * @param {*} candidateNumber 
 * @returns 
 */
const isPalindromic = (candidateNumber)  => {
    if (candidateNumber < 10) {
        return true;
    }
    
    const originalNumber = candidateNumber.toString();
    const reversedNumber = reverseNumber(candidateNumber);
    return originalNumber === reversedNumber;
};

export { isPalindromic };
