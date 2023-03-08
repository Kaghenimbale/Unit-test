const Calculator = require('./index2');

const calculator = new Calculator();

describe('My calculator', () => {
    describe('Add', () => {
        test('This is the addition of a and b', () => {
            expect(calculator.add(1, 4)).toBe(5);
        });

        test('This is the addition of a and b', () => {
            expect(calculator.add(2, 2)).toBe(4);
        });
    })
})