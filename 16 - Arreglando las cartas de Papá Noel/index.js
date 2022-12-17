function fixLetter(letter) {
    letter = letter.trim();
    letter = letter.at(0).toUpperCase() + letter.substr(1)
    letter = ["!", "?", "."].includes(letter.at(-1)) ? letter : `${letter}.`;

    const fixes = [
        (phrase) => phrase.replace(/([.,?!\s])(?=\1)/g, ''),
        (phrase) => phrase.replace(/\s+([.,?!])/g, '$1'),
        (phrase) => phrase.replaceAll(/santa claus/gi, 'Santa Claus'),
        (phrase) => phrase.replaceAll(
            /[.?!]\s+[a-z]/g,
            (match) => match.toUpperCase()
        ),
        (phrase) => phrase.replaceAll(
            /[,]+\w[a-z]/g,
            (match) => match.replace(",", ", ")
        ),
    ]

    return fixes.reduce((acc, func) => func(acc), letter)
}


const letterOne = ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
const expectedletter1 = 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.';
console.log("expected:", expectedletter1, "Actual:", fixLetter(letterOne))


// Eliminar espacios al inicio y al final *
// Eliminar múltiples espacios en blanco y dejar sólo uno
// Dejar un espacio después de cada coma
// Quitar espacios antes de coma o punto
// Las preguntas sólo deben terminar con un signo de interrogación
// La primera letra de cada oración debe estar en mayúscula
// Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
// Poner un punto al final de la frase si no tiene puntuación
