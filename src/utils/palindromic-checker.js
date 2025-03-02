const isPalindromic = (candidateNumber)  => {
    if (candidateNumber < 10) {
        return true;
    }
    
    const originalNumber = candidateNumber.toString();
    const reversedNumber = candidateNumber.toString().split('').reverse().join('');
    return originalNumber === reversedNumber;
};

export { isPalindromic };
