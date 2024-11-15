// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function oddEven(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number % 2 === 0){
            console.log(`This is Even Number: ${number}`);
        }
        else{
            console.log(`This is Odd Number: ${number}`);
        }
        count ++;
    }
    return count
}

const similarNumber = [234, 5, 789, 234, 78, 89, 234, 89, 2345, 82, 425, 874];
const result = oddEven(similarNumber);
console.log(`The total number`,result);