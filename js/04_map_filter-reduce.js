// Js map method

let a = [1, 2, 3, 4, 5];

let result = a.map((value) => {
    return value + 2;
})
// console.log(result);

// Js filter method
let result2 = a.filter((value) => {
    return value > 3;
})
// console.log(result2);

// Js reducer method
let a2 = [1, 2, 3, 4];
let result3 = a2.reduce((value1, value2) => {
    return value1 * value2;
})
console.log(result3);
