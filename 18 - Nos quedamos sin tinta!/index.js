function dryNumber(dry, numbers) {
    return Array
        .from({ length: numbers }, (_, index) => index + 1)
        .filter(number => number.toString().includes(dry))
}


console.log("Expected:", [1, 10, 11, 12, 13, 14, 15], "Actual:", dryNumber(1, 15))
console.log("Expected:", [2, 12, 20], "Actual:", dryNumber(2, 20))

