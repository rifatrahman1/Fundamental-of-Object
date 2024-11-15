// check even number or oddnumber with function

function evenOdd(number) {
    if (number % 2 === 0) {
        console.log('This is even number', number)
    }
    else {
        console.log('This is odd number', number)
    }
    return number;
}

const result = evenOdd(345);
console.log('result', result);


// turnary way

function addDiff (number){
    return number % 2 !== 0 ? 'This is Even Number' : 'This is Odd Number';
}

const results = addDiff (546);
console.log(results)