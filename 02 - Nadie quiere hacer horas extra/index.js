function countHours(year, holidays) {
    return holidays.reduce((acc, date) => {
      const daysNotAllowed = [0, 6];
      const extraHours = 2;
      
      const dayOfWeek = new Date(`${year}/${date}`).getDay();
      acc += (daysNotAllowed.includes(dayOfWeek) ? 0 : 1) * extraHours;
      return acc;
    }, 0)
}

function countHours2(year, holidays) {
    return holidays.reduce((acc, date) =>  acc + (new Date(`${year}/${date}`).getDay() % 6 !== 0 ? 1 : 0) * 2, 0)
}



const year = 2022
const holidays = ['01/06', '04/01', '12/25']

console.log("expected:", 4, "Actual:", countHours(2022, ['01/06', '04/01', '12/25']));
console.log("expected:", 4, "Actual:", countHours(2023, ['01/06', '04/01', '12/25']));
console.log("expected:", 10, "Actual:", countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']));
