import { expect } from 'vitest';
import { sum, sumArray } from './sum';

describe('sum 函式', () => {
  it('1 加 2 應該等於 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('1 加 -1 應該等於 0', () => {
    expect(sum(1, -1)).toBe(0);
  });
});

describe('sumArray 函式', () => {
  it('[1, 2, 3] 應該等於 6', () => {
    // Arrange
    const sut = sumArray;
    const input = [1, 2, 3];
    const expected = 6;

    // Act
    const actual = sut(input);

    // Assert
    expect(actual).toBe(expected);
  });
});
