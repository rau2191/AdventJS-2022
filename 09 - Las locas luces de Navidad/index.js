function countTime(leds) {
    if(!leds.includes(0)) return 0;
  
    const turnOn = (copyLeds, index, seconds = 0) => { 
      if(copyLeds.at(index) === 0 && copyLeds.at(index -1) === 1){
        leds[index] = 1;
      }
  
      if(leds.includes(0) && index !== leds.length){
        return turnOn(copyLeds, ++index,  seconds)
      }
      else if(leds.includes(0) && index === leds.length){
        return turnOn([...leds], 0, seconds += 7)
      }
     
      return !leds.includes(0) ? seconds+= 7 : seconds;
    }
    
    return turnOn([...leds], 0);;
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