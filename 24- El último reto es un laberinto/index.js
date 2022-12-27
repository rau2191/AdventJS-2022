function canExit(maze) {
    const ENTRANCE = "S";
    const EXIT = "E";
    const WALL = "W";

    const entranceRow = maze.findIndex(row => row.includes(ENTRANCE));
    const entranceCol = maze[entranceRow].indexOf(ENTRANCE);

    const visitedCells = [];
    const nextMoves = [[entranceRow, entranceCol]];
    const possibleMovements = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ]
    const validations = [
        (row, col) => row < 0 || row >= maze.length || col < 0 || col >= maze[0].length,
        (row, col) => visitedCells.some(c => c[0] === row && c[1] === col),
        (row, col) => maze[row][col] === WALL
    ]

    const findExit = () => {
        if (nextMoves.length === 0) return false;
        const [currentY, currentX] = nextMoves.shift();
        if (maze[currentY][currentX] === EXIT) return true;

        possibleMovements.forEach(([movY, movX]) => {
            const row = movY + currentY;
            const col = movX + currentX;

            if (validations.every(validation => !validation(row, col))) {
                visitedCells.push([row, col]);
                nextMoves.push([row, col]);
            }
        });

        return findExit();
    }

    return findExit();
}


console.log("Expected:", true, "Actual:", canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
]));

console.log("Expected:", false, "Actual:", canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
]));
