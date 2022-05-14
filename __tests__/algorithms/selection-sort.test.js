const { selectionSort } = require('../../src/algorithms');

describe('tests for algorithm of selection sort', () => {

    let data;
    let sortedData;

    beforeAll(() => {
        data = [10, 23, 2, 100, 30, 0, 32, 5];
        sortedData = [0, 2, 5, 10, 23, 30, 32, 100];
    });

    test('selectionSort', () => {
        expect(selectionSort(data, 10)).toEqual(sortedData);
    });
});
