import { isPalindromic } from '../utils/palindromic-checker.js';
import { reverseNumber } from '../utils/reverse-number.js';

/**
 * 
 */
const findByLychrelProcess = (lowerBoundary, upperBoundary) => {
    let loops = 0;

    lowerBoundary++;
    upperBoundary--;

    if (isPalindromic(upperBoundary) && lowerBoundary < upperBoundary) {
        return { 
            palindrom: upperBoundary, 
            loops 
        };
    }

    let upperBoundaryChanging = upperBoundary;
    let lastPalindrom = 0;
    
    while (lowerBoundary < upperBoundaryChanging) {
        const reverseCandidate = parseInt(reverseNumber(upperBoundaryChanging));
        const lychrelSum = upperBoundaryChanging + reverseCandidate;
    
        if (isPalindromic(lychrelSum) && lychrelSum <= upperBoundary) {
            lastPalindrom = lychrelSum;
        }

        /**
         * This is an optimization since even palindromes are module 11 in math
         */
        const module11 = Math.floor(upperBoundaryChanging / 11) * 11;        
        if (module11 >= upperBoundaryChanging) {
            upperBoundaryChanging -= 11;
        } else {
            upperBoundaryChanging--;
        }

        loops++;
    }

    return { palindrom: lastPalindrom, loops };
};

const findLargestPalindromAscendingGeneration = (lowerBoundary, upperBoundary) => {
    let loops = 0;
    let lastPalindrom = 0;

    const currentString = lowerBoundary.toString();
    const digits = currentString.split('').length;
    const middleIndex = Math.floor(digits / 2);
    let rightHalf = digits % 2 === 0
        ? parseInt(currentString.slice(0, middleIndex))
        : parseInt(currentString.slice(0, middleIndex + 1));

    while (rightHalf < upperBoundary) {
        const rightHalfReversed = rightHalf.toString().split('').reverse().join('');
        const newPalindrom = Number(rightHalf.toString() + rightHalfReversed.slice(digits % 2));

        if (newPalindrom < upperBoundary) {
            lastPalindrom = newPalindrom;
        } else {
            break;
        }

        rightHalf++;
        loops++;
    };

    return { palindrom: lastPalindrom, loops };    
}

const findLargestPalindromFromLychrel = (lowerBoundary, upperBoundary) => {
    if (lowerBoundary >= upperBoundary) {
        return { palindrom: 0, loops: 0 };
    }

    const largestLychrelPalindrom = findByLychrelProcess(
        lowerBoundary, 
        upperBoundary
    );
    const largestPalindromFromLychrel = findLargestPalindromAscendingGeneration(
        largestLychrelPalindrom.palindrom, 
        upperBoundary
    );
    const loops = largestLychrelPalindrom.loops + largestPalindromFromLychrel.loops;
    const maxPalindrom = Math.max(
        largestLychrelPalindrom.palindrom, 
        largestPalindromFromLychrel.palindrom
    );

    return { 
        palindrom: maxPalindrom < lowerBoundary 
        ? 0 
        : maxPalindrom, loops 
    };
};

export { 
    findLargestPalindromFromLychrel, 
    findLargestPalindromAscendingGeneration 
};
