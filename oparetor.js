
function sumOfNumber (numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
   return sum
}

const array = [234,56,78,234,7,56,89,378,78];
const total = sumOfNumber(array)
console.log('This is Total number', total)