
// function fitsInOneBox(boxes) {
//     const sortedBoxes = boxes.sort((a, b) => a.l - b.l);
//     return sortedBoxes.reduce((acc, box, currentIndex) => {
//         if(currentIndex === sortedBoxes.length - 1) return acc;
//         return acc && (box.l < sortedBoxes[currentIndex + 1].l && box.w < sortedBoxes[currentIndex + 1].w &&  box.h < sortedBoxes[currentIndex + 1].h)
//     }, true)
// }

function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => a.l - b.l)
        .every((box, currentIndex, sortedBoxes) => {
            if (currentIndex === sortedBoxes.length - 1) return true;
            return box.l < sortedBoxes[currentIndex + 1].l && box.w < sortedBoxes[currentIndex + 1].w && box.h < sortedBoxes[currentIndex + 1].h
        });
}

let boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]

console.log('Expected:', true, 'Actual:', fitsInOneBox(boxes));

boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

console.log('Expected:', false, 'Actual:', fitsInOneBox(boxes));

boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

console.log('Expected:', true, 'Actual:', fitsInOneBox(boxes));

boxes = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]

console.log('Expected:', false, 'Actual:', fitsInOneBox(boxes));
