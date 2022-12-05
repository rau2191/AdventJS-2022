function wrapping(gifts) {
    return gifts.map(gift => {
        const topBotton = "*".repeat(gift.length + 2)

        return `${topBotton}\n*${gift}*\n${topBotton}`;
    });
}

function wrapping2(gifts) {
    return gifts
        .map(gift => ["", `\n*${gift}*\n`, ""].join("*".repeat(gift.length + 2)))
}

function wrapping3(gifts) {
    return gifts
        .map(gift => gift.replace(/([a-zA-Z]{1,})/,"*".repeat(gift.length + 2)+"\n*$1*\n"+"*".repeat(gift.length + 2)))
  }

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
const wrapped2 = wrapping2(gifts)
const wrapped3 = wrapping2(gifts)
console.log(wrapped)
console.log(wrapped2)
console.log(wrapped3)