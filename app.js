// let cn = 43
// let i
// while (i != cn) {
//     i = prompt("please enter a correct answer")

// }
// console.log("you have ener a correct answer");

// addition fucntion
function addition(a, b) {
    return a + b;
}
console.log(addition(22, 3));
function sub(c, d) {
    return c * d
}
console.log(sub(2, 5));

function factoryal(n) {
    if (n === 1 || n === 0) {
        return 1
    }
    else {
        return n * factoryal(n - 1)
    }


}
console.log(factoryal(5));

