const longestPalindromGenerator = (lower, upper) => {
    const digits = upper.toString().length;

    if (lower >= upper) {
        return { palindrom: 0, loops: 0 };
    }

    if (upper < 10) {
        return { palindrom: upper, loops: 0 };
    }

    let loops = 0;
    for (let i = digits; i > 0; i--) {
        let number = '9'.repeat(i);
        let mediumNumberIndex = Math.ceil(i / 2);
        let leftNumber = parseInt(number.slice(0, mediumNumberIndex));    

        while (leftNumber >= Math.pow(10, mediumNumberIndex - 1)) {
            let leftStr = leftNumber.toString();
            let rightStr = leftStr.split('').reverse().join('');
            let palindrom = parseInt(leftStr + rightStr.slice(i % 2));

            if (palindrom > lower && palindrom < upper) {
                return {
                    palindrom,
                    loops
                }
            }

            leftNumber--;
            loops++;
        }
    }

    return {
        palindrom: 0,
        loops
    }
};

export { longestPalindromGenerator };
