const Validation = require('../utils/Validation');

describe('Validation', () => {
    test('it should accept \'rock\'', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = 'rock';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(true);
    });

    test('it should accept \'paper\'', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = 'paper';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(true);
    });

    test('it should accept \'scissors\'', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = 'scissors';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(true);
    });

    test('it should accept upper case', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = 'RoCk';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(true)
    });
    
    test('it should accept blank space', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = ' paper ';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(true)
    });

    test('it should not accept anything out of the options input', () => {
        const validation = new Validation();
        const optionsInput = [ 'rock', 'paper', 'scissors' ];
        const playerInput = 'cat';

        expect(validation.validatePlayerEntry(playerInput, optionsInput)).toBe(false)
    });
});