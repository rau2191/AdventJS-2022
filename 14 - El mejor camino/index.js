
function getOptimalPath(path) {
    const values = [];
    const calculatePath = (nodeValues, nodeLevel, pathValues) => {
        if (path.length === nodeLevel) {
            return values.push(pathValues.reduce((a, b) => a + b));
        }

        nodeValues.forEach((value, index) => {
            const nextNodeLevel = nodeLevel + 1;
            const nextPathValue = [...pathValues, value];
            const newNodeValues = (path.at(nextNodeLevel) || [])
                .slice(index, index + 2);

            calculatePath(newNodeValues, nextNodeLevel, nextPathValue);
        });
    };

    calculatePath(path.at(0), 0, []);

    return Math.min(...values)
}

console.log("expected:", 8, "Actual:", getOptimalPath([[0], [7, 4], [2, 4, 6]]))
console.log("expected:", 2, "Actual:", getOptimalPath([[0], [2, 3]]))
console.log("expected:", 5, "Actual:", getOptimalPath([[0], [3, 4], [9, 8, 1]]))
console.log("expected:", 8, "Actual:", getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]))