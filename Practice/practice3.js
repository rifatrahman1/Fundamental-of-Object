// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg (numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    const length = numbers.length;
    const average = sum / length;
    return average;
}

const array = [45,67,8,234,78,345,689];
const result = makeAvg(array);
console.log(`Average number result`, result.toFixed(2));