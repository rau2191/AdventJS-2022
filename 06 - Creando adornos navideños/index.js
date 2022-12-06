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
    const createCubeNode = (val, isTop) => {
        return isTop
            ? " ".repeat(size - val - 1) + "/\\".repeat(val + 1) + "_\\".repeat(size)
            : " ".repeat(val - size) + "\\/".repeat(size - (val - size)) + "_/".repeat(size)
    }

    return Array.from(Array(size * 2).keys())
        .map((_, index) => createCubeNode(index, ((size * 2) / (index + 1)) > (size / 2)))
        .join("\n")
}

function createCube3(size) {
    return Array.from(Array(size).keys())
        .reduce((cube, val) => {
            cube[val] = " ".repeat(size - val - 1) + "/\\".repeat(val + 1) + "_\\".repeat(size)
            cube[size + val] = " ".repeat(val) + "\\/".repeat(size - val) + "_/".repeat(size)

            return cube;
        }, Array(size * 2))
        .join("\n");
}

function createCube4(size) {
    let top = '';
    let bottom = '';
    for (let i = 1; i <= size; i++) {
        top += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n';
        bottom += ' '.repeat(i - 1) + '\\/'.repeat(size - i + 1) + '_/'.repeat(size) + (i !== size ? "\n" : "");
    }
    return top + bottom;
}

console.log(createCube(3))
console.log(createCube2(3))
console.log(createCube3(3))
console.log(createCube4(3))