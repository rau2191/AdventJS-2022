function sortToys(toys, positions) {
    const min = Math.min(...positions);
    return positions.reduce((acc, position, index) => {
        acc[position - min] = toys.at(index)
        return acc;
    }, [])
}

console.log("Expected:", ['puzzle', 'car', 'ball', 'doll'], "Actual:", sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]))