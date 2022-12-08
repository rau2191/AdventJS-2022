function getGiftsToRefill(a1, a2, a3) {
    let comparerA1 = a1.filter((o) => [...a2, ...a3].indexOf(o) === -1);
    let comparerA2 = a2.filter((o) => [...a1, ...a3].indexOf(o) === -1);
    let comparerA3 = a3.filter((o) => [...a1, ...a2].indexOf(o) === -1);
    
    return [...new Set([...comparerA1, ...comparerA2, ...comparerA3])]
  }


const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3))