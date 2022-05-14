const binarySearch = (array, value) => {
    if (!array.length || !Array.isArray(array)) return -1;
    
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const item = array[mid];

        if (item === value) {
            return mid;
        } else if (item > value) {
            high = mid - 1;
        } else if (item < value) {
            low = mid + 1;
        }
    }

    return -1;
};

exports.binarySearch = binarySearch;
