function selectSleigh(distance, sleighs) {
    const maxBattery = 20;
    const bestSleighs = sleighs.
        filter(({ consumption }) => consumption * distance <= maxBattery);

    return bestSleighs.length > 0
        ? bestSleighs[bestSleighs.length - 1].name
        : null;
}

console.log("expected:", "Dancer", "Actual:", selectSleigh(30, [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
]));