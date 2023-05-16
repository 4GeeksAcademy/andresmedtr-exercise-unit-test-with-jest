// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });


test("One euro should be 1.206 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})



//  // /// // / / / / / / / / / / / 
test("One dollar should be 106.58 yens", () => {
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(1)

    //One yen should be 0.0078 dollars
    const expected = (1 / 1.2 )*127.9; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


//  /////////////////////////////////////////
test("One yen should be 0.0062548866301798 pounds", () => {
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (1/127.9)*0.8; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})