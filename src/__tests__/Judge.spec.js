const paper = require('../models/Paper');
const rock = require('../models/Rock');
const scissors = require('../models/Scissors');
const Judge = require('../services/Judge');

describe('Judge', () => {
    test('Rock (player\'s choice) should beat scissors (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'rock';
        const computersChoice = 'scissors';
        const output = 'You win!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Scissors (player\'s choice) should beat paper (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'scissors';
        const computersChoice = 'paper';
        const output = 'You win!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Paper (player\'s choice) should beat rock (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'paper';
        const computersChoice = 'rock';
        const output = 'You win!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Rock (player\'s choice) should lose to paper (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'rock';
        const computersChoice = 'paper';
        const output = 'You lose!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Paper (player\'s choice) should lose to scissors (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'paper';
        const computersChoice = 'scissors';
        const output = 'You lose!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Scissors (player\'s choice) should lose to rock (computer\'s choice)', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'scissors';
        const computersChoice = 'rock';
        const output = 'You lose!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });

    test('Equal choices should be a tie', () => {
        const judge = new Judge({ paper, rock, scissors });
        const playerChoice = 'rock';
        const computersChoice = 'rock';
        const output = 'It\'s a tie!';

        expect(judge.match(playerChoice, computersChoice)).toBe(output);
    });
});