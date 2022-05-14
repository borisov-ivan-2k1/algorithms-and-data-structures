const findSmallestIndex = (array) => {
    let smallestItem = array[0];
    let smallestIndex = 0;

    for (let currentIndex = 1; currentIndex < array.length; currentIndex++) {
        const currentItem = array[currentIndex];
        if (currentItem < smallestItem) {
            smallestItem = currentItem;
            smallestIndex = currentIndex;
        }
    }

    return smallestIndex;
}

const selectionSort = (array) => {
   const sortedArray = [];
   const sortingArray = [...array];

   for (let index = 0; index < array.length; index++) {
       const searchedIndex = findSmallestIndex(sortingArray);
       const [searchedItem] = sortingArray.splice(searchedIndex, 1)
       sortedArray.push(searchedItem);
   }

   return sortedArray;
};

exports.selectionSort = selectionSort;
