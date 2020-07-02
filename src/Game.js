const paper = require('./models/Paper');
const rock = require('./models/Rock');
const scissors = require('./models/Scissors');
const Judge = require('./services/Judge');
const Input = require('./services/Input');

class Game {
    async start() {
        const options = { paper, rock, scissors };
        const optionsArray = Object.keys(options);
        
        const judge = new Judge(options);
        const input = new Input(optionsArray);

        Promise.all([ input.getPlayerChoice(), input.getComputerChoice() ])
            .then(([ playerChoice, computerChoice ]) => {
                console.log(`Computer: ${computerChoice}`);
                console.log(`You: ${playerChoice}`);
                console.log(judge.match(playerChoice, computerChoice));
            });                          
    }  
}

module.exports = Game;