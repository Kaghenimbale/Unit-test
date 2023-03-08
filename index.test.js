const stringLength = require('./index');

test('It is working', () => {
    expect(stringLength('christian')).toBe(9);
});

test('The string conatin more character', () => {
    expect(() => stringLength('Pleasedonotthrowsaucage')).toThrow(Error);
});

test('The string is too short', () => {
    expect(() => stringLength('')).toThrow(Error);
});