function decorateTreeRecursive(base) {
    const dictionary = {
        "PP": "P",
        "RR": "R",
        "BB": "B",
        "BP": "R",
        "PB": "R",
        "RP": "B",
        "PR": "B",
        "BR": "P",
        "RB": "P"
    };

    const decorate = (row, tree) => {
        if (row.length === 1) return tree;

        const splitedRow = row.split(" ");
        const newRow = splitedRow
            .slice(0, splitedRow.length - 1)
            .reduce((acc, letter, index) =>
                [...acc, dictionary[letter + splitedRow.at(index + 1)]], [])
            .join(" ")


        return decorate(newRow, [newRow, ...tree])
    }

    const decoratedTree = decorate(base, [base]);
    return decoratedTree;
}

function decorateTree(base) {
    let tree = [base];
    const dictionary = {
        "PP": "P",
        "RR": "R",
        "BB": "B",
        "BP": "R",
        "PB": "R",
        "RP": "B",
        "PR": "B",
        "BR": "P",
        "RB": "P"
    };

    const getTreeRow = (splitedRow) =>
        splitedRow
            .slice(0, splitedRow.length - 1)
            .reduce((acc, letter, index) =>
                [...acc, dictionary[letter + splitedRow.at(index + 1)]]
            , [])
            .join(" ");

    while (tree.at(0).length !== 1) {
        const splitedRow = tree.at(0).split(" ");
        const newTreeRow = getTreeRow(splitedRow);
        tree.unshift(newTreeRow);
    }

    return tree;
}

console.log("expected:", [
    "R",
    "P B",
    "R B B",
    "B P R P"
], "Actual:", decorateTreeRecursive('B P R P'))


console.log("expected:", [
    "R",
    "P B",
    "R B B",
    "B P R P"
], "Actual:", decorateTree('B P R P'))