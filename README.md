# Palindromic Numbers

This application finds the largest palindromic number between two given numbers (exclusive). A palindromic number is a number that reads the same forwards and backwards (e.g., 16461). For more information, check out [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number).

## Prerequisites

1. **Install Node.js**:
   - Download and install the LTS version of Node.js from [here](https://nodejs.org/en).

2. **Install dependencies**:
   - Run the command `npm install` in the root folder of the project (where the `package.json` file is located).

3. After installation is complete, you should see a `node_modules` folder.

## Running the project

For executing the CLI:
```
npm run start
```

For executing the Tests:
```
npm run tests
```

## Thought Process and Approach

1. **Descending Method (brute force)**:
   - The simplest solution would be to search for the largest palindromic number by iterating in descending order from the upper limit, checking each number until we find the first palindromic one.

2. **Lychrel Method**:
   - I tried to find a property or method that could reduce the search space, ideally by dividing it in half or even further. One possible approach is using the Lychrel process, as described on the Wikipedia page, which helps generate palindromic numbers from non-palindromic ones. However, I couldn't make this algorithm faster than the other two because the Lychrel process requires many iterations. One improvement I implemented was iterating over numbers divisible by 11, leveraging this mathematical property of even palindromes.

3. **Descending Optimized Method**:
   - This method works by taking the upper-limit number and splitting it in half. The idea is to generate only palindromes by reducing the left half by 1 on each iteration and then mirroring it to form the right half. While this approach doesn't guarantee the largest palindrome, it helps reduce the search space, making the process more efficient. Similar to the Lychrel method, once a palindrome is generated, a secondary search is performed to ensure the maximum palindrome..
