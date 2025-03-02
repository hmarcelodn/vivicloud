import { isPalindromic } from '../utils/palindromic-checker.js';
import { reverseNumber } from '../utils/reverse-number.js';
import { findAscendingLargestPalindromLinear } from './ascending-finder.js';
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

const findLargestPalindromFromLychrel = (lowerBoundary, upperBoundary) => {
    if (lowerBoundary >= upperBoundary) {
        return { palindrom: 0, loops: 0 };
    }

    const largestLychrelPalindrom = findByLychrelProcess(
        lowerBoundary, 
        upperBoundary
    );
    const largestPalindromFromLychrel = findAscendingLargestPalindromLinear(
        largestLychrelPalindrom.palindrom === 0 ? lowerBoundary : largestLychrelPalindrom.palindrom, 
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
    findLargestPalindromFromLychrel 
};
