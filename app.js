// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.206, // us dollar
    "GBP": 0.8, // british pound
};

// DOLLAR TO YEN FUNCTION
const fromDollarToYen = (a) => {
    return (a/oneEuroIs.USD)*oneEuroIs.JPY
};
console.log(fromDollarToYen(1));

module.exports = {fromDollarToYen} ;


// EURO 
const fromEuroToDollar = (a) => {
    return (a*oneEuroIs.USD)
     
};
console.log(fromEuroToDollar(1))

module.exports = {fromEuroToDollar};


// YEN TO POUND FUNCTION
const fromYenToPound = (a) => {
    return (a/oneEuroIs.JPY)*oneEuroIs.GBP
};
console.log(fromYenToPound(1));

module.exports = { fromYenToPound} ;


