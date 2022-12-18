function carryGifts(gifts, maxWeight) {
    return gifts
        .filter(({ length }) => length <= maxWeight)
        .reduce((acc, gift) => {
            const lastBag = acc.at(-1) || "";
            const lastBagWeight = lastBag.replace(" ", "").length;
            const isAllowedHeight = gift.length + lastBagWeight <= maxWeight;

            lastBag && isAllowedHeight
                ? acc[acc.length - 1] = lastBag.concat(` ${gift}`)
                : acc.push(gift)

            return acc;
        }, []);
}

console.log(
    "Expected:",
    [
        "game",
        "bike",
        "book toy"
    ],
    "Actual:",
    carryGifts(['game', 'bike', 'book', 'toy'], 7)
)

console.log(
    "Expected:",
    [
        "game",
        "bike",
        "book",
        "toy"
    ],
    "Actual:",
    carryGifts(['game', 'bike', 'book', 'toy'], 4)
)

console.log(
    "Expected:",
    [
        "toy",
        "gamme",
        "toy",
        "bike"
    ],
    "Actual:",
    carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
)

console.log(
    "Expected:",
    [],
    "Actual:",
    carryGifts(['toy', 'toy', 'toy', 'toy'], 2)
)

console.log(
    "Expected:",
    [
        "toy toy",
        "disk",
        "disk toy",
        "toy"
    ],
    "Actual:",
    carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)
)