// function return

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / num2;
    return result;
}

const number = doMath(455, 67);
const total = Math.round(number);

console.log(total)