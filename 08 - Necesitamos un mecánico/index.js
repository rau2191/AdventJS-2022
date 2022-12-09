function checkPart(part) {
    const reverseWord = (word) => [...word].reverse().join(""); 
    
    if(part === reverseWord(part)) return true

    return [...part].some((_, index) => {
        const newWord = part.substr(0, index) + part.substr(index + 1);
        return newWord === reverseWord(newWord)
    });
}


console.log("expected:", true, "Actual:", checkPart("uwu"));
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log("expected:", true, "Actual:", checkPart("miidim"));
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log("expected:", false, "Actual:", checkPart("midu"));
// "midu" no puede ser un palíndromo después de eliminar un carácter