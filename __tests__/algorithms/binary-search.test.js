const { binarySearch } = require('../../src/algorithms');

describe('tests for algorithm of binary search', () => {

    let data;

    beforeAll(() => {
        data = [1, 4, 10, 11, 21, 28, 40, 55, 78, 100, 123, 156, 189, 202];
    });

    test('find element index', () => {
        expect(binarySearch(data, 10)).toBe(2);
        expect(binarySearch(data, 55)).toBe(7);
    });

    test('not included value', () => {
        expect(binarySearch(data, 66)).toBe(-1);
    });

    test('empty array', () => {
        expect(binarySearch([], 10)).toBe(-1);
    });
});
