const capitalize = require('./index3');

describe('capitalize', () => {
    test('Is capitalize', () => {
        expect(capitalize('chris')).toBe('Chris');
    });
});