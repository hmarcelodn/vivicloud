# Palindromic Numbers

This application finds the largest palindromic number between two given numbers (exclusive). A palindromic number is a number that reads the same forwards and backwards (e.g., 16461). For more information, check out [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number).

## Claritications

This project is built with simplicity in mind, focusing solely in the problem, using NodeJS and Javscript. My straight intuition was brute-force, then lychrel because I though it could bring some benefit and a descending mechanism generating palindromic numbers. Every strategy returns the found number and the number of iterations involved to achieve this.

## Prerequisites

1. **Install Node.js**:
   - Download and install the LTS version of Node.js from [here](https://nodejs.org/en).
   - This instalation makes available `node` CLI and `npm` CLI.

2. **Install dependencies**:
   - Run the command `npm install` in the root folder of the project (where the `package.json` file is located).

3. After installation is complete, you should see a `node_modules` folder with all dependencias installed.

## Running the project

For executing the CLI program:
```
npm run start
```

For executing the Unit Tests:
```
npm run test
```

## Thought Process and Approach

1. **Descending Method (brute force)**:
   - The simplest solution would be to search for the largest palindromic number by iterating in descending order from the upper limit, checking each number until we find the first palindromic one, if possible.
   - **The time complexity**: `O(n)`.

2. **Lychrel Method**:
   - I tried to find a property or method that could reduce the search space, ideally by dividing it in half or even further. One possible approach is using the Lychrel process, as described on the Wikipedia page, which helps generate palindromic numbers from non-palindromic ones. However, I couldn't make this algorithm faster than the other two because the Lychrel process requires many iterations some times. One improvement I implemented was iterating over numbers divisible by 11, leveraging this mathematical property of even palindromes.
   - **Time complexity**: `O((n - m)/11 + p)` where `n` is the lowerBoundary, `m` the upper boundary and `p` the lychrel palidrom number.

3. **Descending Optimized Method**:
   - This method works by taking the upper-limit number and splitting it in half. The idea is to generate only palindromes by reducing the left half by 1 on each iteration and then mirroring it to form the right half. While this approach doesn't guarantee the largest palindrome, it helps reduce the search space, making the process more efficient. Similar to the Lychrel method, once a palindrome is generated, a secondary search is performed to ensure the maximum palindrome.
   - **Time complexity**: `O((n - m)/(d / 2) + p)` `O((n - m)/11 + p)` where `n` is the lowerBoundary, `m` the upper boundary and `p` the lychrel palidrom number and `d` the number of digits.
