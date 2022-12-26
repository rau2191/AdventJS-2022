function checkStepNumbers(systemNames, stepNumbers) {
    const equals = (arr1, arr2) =>
        arr1.every((h, index) => h === arr2[index]);

    const hashMap = systemNames
        .reduce((acc, systemName, index) => {
            let value = acc[systemName] || [];
            value.push(stepNumbers.at(index));
            acc[systemName] = value;
            return acc;
        }, {});

    return Object.values(hashMap)
        .every(steps => equals(steps, [...steps].sort()))
}

console.log("Expected:", true, "Actual:", checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20]))
console.log("Expected:", false, "Actual:", checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]))