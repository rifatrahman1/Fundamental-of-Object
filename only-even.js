
function onlyEvenNumbers(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            even.push(number);
        }
    }
    return even;
}

const array = [46, 75, 78, 234, 89, 342, 89, 348, 89, 86];
// const total = onlyEvenNumbers(array);
// console.log('This is even numbers', total);

function sumOfEven (numbers) {
    let sum = 0;
    for (const number of numbers) {
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum
}

const sum = sumOfEven (array);
console.log('This is even sum number', sum);


function sumOfOdd (numbers) {
    let sum1 = 0;
    for (const number of numbers) {
        if(number % 2 !== 0){
            console.log(number);
            sum1 = sum1 + number;
        }
    }
    return sum1
}

const sum1 = sumOfOdd (array);
console.log('This is odd sum number', sum1);