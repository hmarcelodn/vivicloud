import { describe, test } from 'node:test'
import assert from 'node:assert';

import { longestPalindromGenerator } from '../finders/palindrom-generator.js';

describe('Test Non Linear Palindrom', {  skip: false }, () => {
    test('Should find 9 as palindrom for 1-10', () => {
        // Arrange
        const rangeStart = 1;
        const rangeEnd = 10;
        const expectedPalindrom = 9;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });

    test('Should find 99 as palindrom for 1-100', () => {
        // Arrange
        const rangeStart = 1;
        const rangeEnd = 100;
        const expectedPalindrom = 99;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });

    test('Should find 99 as palindrom for 1-1000', () => {
        // Arrange
        const rangeStart = 1;
        const rangeEnd = 1000;
        const expectedPalindrom = 999;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });

    test('Should find 101 as palindrom for 100-102', () => {
        // Arrange
        const rangeStart = 100;
        const rangeEnd = 102;
        const expectedPalindrom = 101;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });    
    
    test('Should find 0 as the range does not have palindroms in that range', () => {
        // Arrange
        const rangeStart = 123;
        const rangeEnd = 128;
        const expectedPalindrom = 0;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });

    test('Should find 0 as the range is invalid', () => {
        // Arrange
        const rangeStart = 1;
        const rangeEnd = 1;
        const expectedPalindrom = 0;

        // Act
        const { palindrom } = longestPalindromGenerator(rangeStart, rangeEnd);

        // Assert
        assert.strictEqual(palindrom, expectedPalindrom);
    });
});
