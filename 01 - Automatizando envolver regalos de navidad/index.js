function wrapping(gifts) {
    return gifts.map(gift => {
        const topBotton = "*".repeat(gift.length + 2)

        return `${topBotton}\n*${gift}*\n${topBotton}`;
    });
}

function wrapping2(gifts) {
    return gifts.map(gift =>  ` \n*${gift}*\n `.replaceAll(" ", "*".repeat(gift.length + 2)))
}

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
const wrapped2 = wrapping2(gifts)
console.log(wrapped)
console.log(wrapped2)