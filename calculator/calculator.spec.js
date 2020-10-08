const { add, multiply } = require('./calculator.js');

// test away!
//Should add two numbers, how do I test that? // look at your package.json and see you don't have any testing.  Install as a development dependency npm i jest -D
//npm i jest -D

// test('should add two numbers', function() {
//     //setup- Arrange
//     const expected =4;
//     //execute code under test- Act 
//     const actual = add(2,2);
//     //'assert results- Assert
//     expect(actual).toBe(expected);
// })
//these tests are testing the same thing expect second one is uisng it
describe('add()', function() {
it('should add two numbers using it', function() {
    // //setup- Arrange
    // const expected =4;  ***DONT NEED THIS ANYMORE SINCE YOU DID expect(add(2,2)).toBe(4);
    // //execute code under test- Act 
    // const actual = add(2,2);
    //'assert results- Assert
    expect(add(2,2)).toBe(4);
    expect(add(0,0)).toBe(0);
    expect(add(1,1)).toBe(2);
    expect(add(-1,1)).toBe(0);
    expect(add(-1,0)).toBe(-1);
    expect(add(3,3000)).toBe(3003);
});
})

// it.todo('passing only one value') *** you can use this to remind of doing a particular function

it("should throw an error if called with one value", function() {
    
})

//USE .SKIP TO NOT TEST SOMETHING YOU ARE NOT READY TO TEST
describe.skip('multiply()', function() {
it('should multiply two numbers using it', function() {
    //setup- Arrange
    const expected =4;
    //execute code under test- Act 
    const actual = multiply(2,2);
    //'assert results- Assert
    expect(actual).toBe(expected);
})
})