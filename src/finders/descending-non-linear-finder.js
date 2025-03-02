import { findLargestPalindromLinear } from './descending-finder.js';
import { reverseNumber } from '../utils/reverse-number.js';

const findLargestPalindromDescendingGeneration = (lowerBoundary, upperBoundary) => {
    let loops = 0;
    let lastPalindrom = 0;

    const currentString = upperBoundary.toString();
    const digits = currentString.split('').length;
    const middleIndex = Math.floor(digits / 2);
    let leftHalf = digits % 2 === 0
        ? parseInt(currentString.slice(0, middleIndex))
        : parseInt(currentString.slice(0, middleIndex + 1));

    while (leftHalf < upperBoundary && leftHalf > lowerBoundary) {        
        const leftHalfReversed = reverseNumber(leftHalf);
        const rightHalf = leftHalfReversed.slice(digits % 2);            
        const newPalindrom = Number(leftHalf.toString() + rightHalf);

        if (newPalindrom > lowerBoundary && newPalindrom < upperBoundary) {
            lastPalindrom = newPalindrom;
            break;
        }

        leftHalf--;
        loops++;
    };

    const maxPalidrom = findLargestPalindromLinear(lastPalindrom, upperBoundary);
    return { 
        palindrom: 
            lowerBoundary > Math.max(lastPalindrom, maxPalidrom.palindrom) ? 
            0 : 
            Math.max(lastPalindrom, maxPalidrom.palindrom), 
        loops: maxPalidrom.loops + loops 
    };    
}

export { findLargestPalindromDescendingGeneration };
