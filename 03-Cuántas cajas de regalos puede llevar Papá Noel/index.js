function distributeGifts(packOfGifts, reindeers) {
    const reducer = (acc, { length }) => acc + length
    return Math.floor((reindeers.reduce(reducer, 0) * 2) / packOfGifts.reduce(reducer, 0));
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


distributeGifts(packOfGifts, reindeers) // 2