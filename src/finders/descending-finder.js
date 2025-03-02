import { isPalindromic } from '../utils/palindromic-checker.js';

const findDescendingLargestPalindromLinear = (lowerBoundary, upperBoundary) => {
    lowerBoundary = lowerBoundary + 1;
    upperBoundary = upperBoundary - 1;

    if (upperBoundary < 10 || lowerBoundary === upperBoundary) {
        return { palindrom: upperBoundary, loops: 0 };
    }

    let loops = 0;
    while (lowerBoundary <= upperBoundary) {
        if (isPalindromic(upperBoundary)) {
            return { palindrom: upperBoundary, loops };
        }
        upperBoundary -= 1;
        loops += 1;
    };

    return { palindrom: 0, loops };
};

export { findDescendingLargestPalindromLinear };
