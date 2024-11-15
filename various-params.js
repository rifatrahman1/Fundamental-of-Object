function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else {
        console.log('odd size');
        return false
    }

}

// evenSizedString('dhaka')
// evenSizedString('faka')

// function doubleOrTriple (number, doDouble) {
//     if (doDouble === true){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number * 3;
//         return result;
//     }
// }

// console.log(doubleOrTriple(23, true));
// console.log(doubleOrTriple(23, false));


function doubleOrTriple (number, doDouble) {
    return doDouble === true ? number * 2 : number * 3;
}
console.log(doubleOrTriple(34, false))

console.log(doubleOrTriple(34, true))

