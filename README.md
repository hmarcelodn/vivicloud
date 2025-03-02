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
   - I tried to find a property or method that could reduce the search space, dividing it in half or even further. One possible approach is using the *Lychrel process* from the Wikipedia page, which helps generate palindromic numbers from non-palindromic ones. I could not make this algotithm faster than the other 2 because Lychrel takes many interations. One improvement I did was to iterate numbers divisive by 11, which's a property =.

3. **Descending Optimized Method**:
   - By using the Lychrel process, we can quickly generate potential palindromic numbers and then check them linearly to find the largest one within the specified range.
