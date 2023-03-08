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

    describe('Substract', () => {
        test('This is the substraction of a and b', () => {
            expect(calculator.substract(1, 4)).toBe(-3);
        });

        test('This is the addition of a and b', () => {
            expect(calculator.substract(2, 2)).toBe(0);
        });
    })

    describe('Division', () => {
        test('This is the division of a and b', () => {
            expect(calculator.devide(10, 5)).toBe(2);
        });

        test('This is the division of a and b', () => {
            expect(calculator.devide(2, 2)).toBe(1);
        });
    })

    describe('Multiplication', () => {
        test('This is the addition of a and b', () => {
            expect(calculator.multiply(1, 4)).toBe(4);
        });

        test('This is the addition of a and b', () => {
            expect(calculator.multiply(2, 2)).toBe(4);
        });
    })
})