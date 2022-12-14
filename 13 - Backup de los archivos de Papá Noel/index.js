/* Solution 1*/
function getFilesToBackup(lastBackup, changes) {
    return [...new Set(changes
        .filter(([_, timestamp]) => timestamp > lastBackup)
        .map(([id]) => id)
        .sort((a, b) => a - b))]
}

/* Solution 2*/
function getFilesToBackup2(lastBackup, changes) {
    return Object.values(changes
        .filter(([_, timestamp]) => timestamp > lastBackup)
        .reduce((acc, [id]) => {
            acc[id] = id;
            return acc;
        }, {}));
}


console.log("expected:", [1, 3], "Actual:", getFilesToBackup(1546300800, [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
]))

console.log("expected:", [1, 3], "Actual:", getFilesToBackup2(1546300800, [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
]))