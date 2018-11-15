const libs = require('./libs')

it('absolute - should return a positive number if input is positive', () => {
    
});

it('absolute - should return a positive number if input is negative', () => {
    const input = -1;
    const result = libs.absolute(input);
    expect(result).toBe(1);
});

it('absolute - should return 0 if input is 0', () => {
    const input = 0;
    const result = libs.absolute(input);
    expect(result).toBe(input);
});