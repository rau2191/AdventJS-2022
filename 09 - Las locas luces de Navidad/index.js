function countTime(leds) {
  return [...leds, ...leds, ...leds]
    .join("")
    .split(1)
    .sort(({ length: a }, { length: b }) => b - a)[0].length * 7
}

console.log("expected:", 7, "Actual:", countTime([0, 1, 1, 0, 1]));
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log("expected:", 21, "Actual:", countTime([0, 0, 0, 1]));
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log("expected:", 28, "Actual:", countTime([0, 0, 1, 0, 0]));
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]