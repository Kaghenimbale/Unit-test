const reverseStr = require('./index1');

test('It is already reversed', () => {
    expect(reverseStr('chris')).toBe('sirhc');
});