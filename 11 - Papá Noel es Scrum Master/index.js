function getCompleted(part, total) {
    const gcf = (a, b) => b ? gcf(b, a % b) : a;
    const getSeconds = (timeSpan) => {
        const [hours, minutes, seconds] = timeSpan.split(":")
        return (+hours * 3600) + (+minutes * 60) + +seconds
    }

    const partSeconds = getSeconds(part);
    const totalSeconds = getSeconds(total);

    const commonDivisor = gcf(partSeconds, totalSeconds);
    const numerator = partSeconds / commonDivisor;
    const denominator = totalSeconds / commonDivisor;

    return `${numerator}/${denominator}`;
}


console.log("expected:", "1/3", "Actual:", getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log("expected:", "1/2", "Actual:", getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log("expected:", "1/1", "Actual:", getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log("expected:", "1/6", "Actual:", getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log("expected:", "1/3", "Actual:", getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log("expected:", "2/3", "Actual:", getCompleted('02:20:20', '03:30:30')) // '1/3'
console.log("expected:", "3/5", "Actual:", getCompleted('03:30:30', '05:50:50')) // '3/5