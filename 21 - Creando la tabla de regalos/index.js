function printTable(gifts) {
    const paddingLeftCells = 4;
    const separationPipes = 3;

    const getRow = (gift, quantity, maxLengthName, maxLengthQuantity, sepatator) => {
        return `| ${gift}`
            + sepatator.repeat(maxLengthName - gift.length)
            + ` | ${quantity}`
            + sepatator.repeat(maxLengthQuantity - quantity.length)
            + " |"
    }

    const { maxLengthName, maxLengthQuantity } = gifts.reduce((acc, { name, quantity }) => {
        const lengthName = name.length;
        const lengthQuantity = `${quantity}`.length;
        acc.maxLengthName = acc.maxLengthName < lengthName
            ? lengthName
            : acc.maxLengthName;

        acc.maxLengthQuantity = acc.maxLengthQuantity < lengthQuantity
            ? lengthQuantity
            : acc.maxLengthQuantity;
        return acc;
    }, { maxLengthName: 0, maxLengthQuantity: 0 });


    const topRow = "+".repeat(maxLengthName + maxLengthQuantity + paddingLeftCells + separationPipes);
    const header = getRow("Gift", "Quantity", maxLengthName, maxLengthQuantity, " ");
    const separator = getRow("-", "-", maxLengthName, maxLengthQuantity, "-");
    const rows = gifts.reduce((acc, { name, quantity }) => {
        return [...acc, getRow(name, `${quantity}`, maxLengthName, maxLengthQuantity, " ")];
    }, []);
    const bottomRow = "*".repeat(maxLengthName + maxLengthQuantity + paddingLeftCells + separationPipes)

    return [topRow, header, separator, ...rows, bottomRow].join("\n")
}




console.log("Expected", "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************", "Actual:", printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]))

console.log("Expected", "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************", "Actual:", printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]))