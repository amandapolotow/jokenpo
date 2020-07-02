class Judge {
    constructor (options) {
        this.options = options;
    }

    match(playerChoice, computerChoice) {
        if (computerChoice === playerChoice) {
            return 'It\'s a tie!';
        } else {
            const playerChoiceTest = new this.options[playerChoice]();
            return playerChoiceTest[computerChoice] ? 'You win!' : 'You lose!';
        }
    }
}

module.exports = Judge;