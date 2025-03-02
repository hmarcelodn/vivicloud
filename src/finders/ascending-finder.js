import { isPalindromic } from '../utils/palindromic-checker.js';

const findAscendingLargestPalindromLinear = (lowerBoundary, upperBoundary) => {
    lowerBoundary = lowerBoundary + 1;
    upperBoundary = upperBoundary - 1;

    if (upperBoundary < 10) {
        return { palindrom: upperBoundary, loops: 0 };
    }

    let loops = 0;
    let lastPalindrom = 0;
    while (lowerBoundary <= upperBoundary) {
        if (isPalindromic(lowerBoundary)) {
            lastPalindrom = lowerBoundary;
        }
        lowerBoundary ++;
        loops += 1;
    };

    return { palindrom: lastPalindrom, loops };
};

export { findAscendingLargestPalindromLinear };
