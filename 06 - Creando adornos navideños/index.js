function createCube(size) {
    const cubeFactory = (cube, val) => {
        if (val == size) return cube;

        cube[val] = " ".repeat(size - val - 1) + "/\\".repeat(val + 1) + "_\\".repeat(size)
        cube[size + val] = " ".repeat(val) + "\\/".repeat(size - val) + "_/".repeat(size)
        return cubeFactory(cube, ++val)
    }
    return cubeFactory([], 0).join("\n")
}

function createCube2(size) {
    return Array.from(Array(size).keys())
        .reduce((cube, val) => {
            cube[val] = " ".repeat(size - val - 1) + "/\\".repeat(val + 1) + "_\\".repeat(size)
            cube[size + val] = " ".repeat(val) + "\\/".repeat(size - val) + "_/".repeat(size)

            return cube;
        }, Array(size * 2))
        .join("\n");
}

console.log(createCube(3))
console.log(createCube2(3))