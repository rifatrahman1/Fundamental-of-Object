// Task-2
// If the number is even divide it by two and return the result.

function evenNumbers(numbers) {
    const odd = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            const divided = number / 2;
            odd.push(divided)
            console.log(`Even number: ${number}, divided by 2: ${divided}`)
        }
    }
    return odd;
}

const arrayNumber = [42, 78, 67, 26, 37, 895, 46, 83];
const result = evenNumbers(arrayNumber);
console.log('This is divided odd number', result);

// if the number is odd multiply it by 2 and return the result. 

function oddNumbers(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            const multiply = number * 2;
            even.push(multiply)
            console.log(`Odd Number: ${number}, multiply by 2: ${multiply}`)
        }
    }
    return even
}

const array = [42, 78, 67, 26, 37, 895, 46, 83];
const total = oddNumbers(array);
console.log('This is multiply even number', total)

