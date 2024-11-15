// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number === 0)
            count ++;
    }
     return count
}

const binary = [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0];
const result = countZero(binary);
console.log(`The count of 0 binary number`, result);
