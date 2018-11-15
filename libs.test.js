const libs = require('./libs')

test('absolute - should return a positive number if input is positive', () => {
    // Arrange
    const input = 1;
    // Action
    const result = libs.absolute(input);
    // Assert
    expect(result).toBe(input);
});

test('absolute - should return a positive number if input is negative', () => {

});

test('absolute - should return 0 if input is 0', () => {

});