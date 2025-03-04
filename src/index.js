import readline from 'readline';
import { promisify } from 'util';
import chalk from 'chalk';

import { findLargestPalindromFromLychrel } from './finders/lychrel-number-finder.js';
import { findDescendingLargestPalindromLinear } from './finders/descending-finder.js';
import { longestPalindromGenerator } from './finders/palindrom-generator.js';

const EXECUTION_MODE_MAP = {
    LINEAR: findDescendingLargestPalindromLinear,
    LYNCHREL: findLargestPalindromFromLychrel,
    PALINDROME_GEN: longestPalindromGenerator
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = promisify(rl.question).bind(rl);


const getValidNumber = async (prompt) => {
    while (true) {
        let input = await question(chalk.yellow(prompt));
        let parsed = parseInt(input);
        if (!isNaN(parsed) && parsed >= 0) {
            return parsed;
        } else {
            console.log(chalk.red('Invalid input. Please enter a non-negative number.'));
        }
    }
};

(async () => {
    console.clear();
    
    console.log(chalk.blue(`
This application tries 3 different strategies to resolve the palindrom number in a given range (exclusive).

${chalk.yellow('1.')} ${chalk.bold('Linear Finder (brute-force)')}: This strategy begins from the upper boundary and try one by one to find a palindrome.
${chalk.yellow('2.')} ${chalk.bold('Lychrel Process (best-effort)')}: This strategy tries to find at least 1 palindromic number lower than upper boundary
                    in order to reduce the search space. Then applies an ascending search from this palindromic number
                    up to the upper boundary to validate if there's a max number than itself.
${chalk.yellow('3.')} ${chalk.bold('Palindromic Generator (optimized)')}: This strategy tries to generate palidromic numbers using the number of digits and does not need max checking.                    
    `));
    
    let start = await getValidNumber(chalk.yellow('Indicate the lower boundary (non-negative): '));
    let end = await getValidNumber(chalk.yellow('Indicate the upper boundary (non-negative): '));

    start = parseInt(start);
    end = parseInt(end);

    try {
        const { palindrom: p1, loops: l1 } = EXECUTION_MODE_MAP.LINEAR(start, end);
        const { palindrom: p2, loops: l2 } = EXECUTION_MODE_MAP.LYNCHREL(start, end);
        const { palindrom: p3, loops: l3 } = EXECUTION_MODE_MAP.PALINDROME_GEN(start, end);

        const tableData = [
            { Mode: 'Linear', Palindrom: p1, Loops: l1 },
            { Mode: 'Lychrel (experimental)', Palindrom: p2, Loops: l2 },
            { Mode: 'Palindrome Gen', Palindrom: p3, Loops: l3 }
        ];

        console.log(chalk.cyan('\nPalindrom Results:'));
        console.table(tableData);        
        console.log('Press Ctrl+C to finish');
    } catch (e) {
        console.log(chalk.red('Error: '), e.message);
        throw e;
    }
})();
