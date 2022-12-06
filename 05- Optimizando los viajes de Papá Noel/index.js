//First solution. Improved function below

// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//     /*
//          * Calculate all combinations
//          * Filter all combinations less than or equal to maxCities
//          * Obtain all combinations sum
//          * Filter sums less than or equal to maxGifts
//          * Sort sums array descending
//          * Get first value or 0
//      */

//     const getAllCombinations = () => {
//         let combinations = [];
//         for (let i = 1; i < (1 << giftsCities.length); i++) {
//             let innerCombinations = [];

//             giftsCities.forEach((_, j) => {
//                 if ((i & (1 << j))) {
//                     innerCombinations.push(giftsCities[j]);
//                 }
//             });
//             combinations.push(innerCombinations)
//         }

//         return combinations;
//     }

//     const result = getAllCombinations()
//         .filter(({ length }) => length <= maxCities)
//         .map(arr => arr.reduce((acc, element) => acc + element))
//         .filter(x => x <= maxGifts)
//         .sort((a, b) => b - a);


//     return result.length ? result[0] : 0;
// }


function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return giftsCities.reduce((bestValue, _, currentIndex) => {
        const result = giftsCities.slice(currentIndex).reduce((params, item) => {
            if (params.currentCities < maxCities && (params.currentSum + item) <= maxGifts) {
                params.currentCities += 1;
                params.currentSum += item;
            }
            return params;
        }, { currentCities: 0, currentSum: 0 });
        return bestValue < result.currentSum ? result.currentSum : bestValue | 0;
    }, 0);
}


console.log('Expected:', 20, 'Actual:', getMaxGifts([12, 3, 11, 5, 7], 20, 3));
console.log('Expected:', 0, 'Actual:', getMaxGifts([50], 15, 1));
console.log('Expected:', 50, 'Actual:', getMaxGifts([50], 100, 1));
console.log('Expected:', 70, 'Actual:', getMaxGifts([50, 70], 100, 1));
console.log('Expected:', 100, 'Actual:', getMaxGifts([50, 70, 30], 100, 2));
console.log('Expected:', 100, 'Actual:', getMaxGifts([50, 70, 30], 100, 3));
console.log('Expected:', 100, 'Actual:', getMaxGifts([50, 70, 30], 100, 4));