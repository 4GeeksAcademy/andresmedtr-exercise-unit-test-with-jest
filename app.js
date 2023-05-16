// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

// DOLLAR TO YEN FUNCTION
const fromDollarToYen = (a) => {
    return (a/oneEuroIs.USD)*oneEuroIs.JPY
};
console.log(fromDollarToYen(1));



// EURO 
// const fromEuroToDollar = (a) => {
//     return (a*oneEuroIs.USD)
     
// };
// console.log(fromEuroToDollar(1))



// YEN TO POUND FUNCTION
const fromYenToPound = (a) => {
    return (a/oneEuroIs.JPY)*oneEuroIs.GBP
};
console.log(fromYenToPound(1));

module.exports = {fromEuroToDollar, sum, fromDollarToYen, fromYenToPound } ;


