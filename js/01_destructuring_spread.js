// spread operator and destructuring
arr1 = [2, 4, 6];

function avg(a, b, c) {
    return a + b + c / 2;
}

// let a = avg(...arr);
// let a = [5, 8, 8, ...arr, 90]
// let a = [...arr]
let arr2 = [5, 9, 9]
let a = [...arr1, ...arr2]
// console.log(a);

// spread operator with obj
let obj1 = {
    name: "Junaid",
    class: 14,
    favLang: "Js"
}
let obj2 = { ...obj1, favLang: "python" };
// console.log(obj2);

//DeStructuring
obj1 = {
    name1: "Junaid",
    class1: 14,
    favLang: "Js"
}
let { name1, class1, favLang } = obj1;
console.log(name1, class1, favLang);