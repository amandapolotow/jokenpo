const readline = require('readline');
const Random = require('../utils/Random');
const Validation = require('../utils/Validation');

class Input {
    constructor (optionsArray) {
        this.optionsArray = optionsArray;
    }

    getPlayerChoice() {
        const validation = new Validation();
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve,reject) => {
            rl.question('Choose \'rock\', \'paper\' or \'scissors\': ', (playerChoice) => { 
                if (validation.validatePlayerEntry(playerChoice, this.optionsArray)) { 
                    rl.close();                                
                } else {
                    console.log("Invalid option!");

                    return process.exit();
                }

                resolve(playerChoice);
            });
        });
    }

    getComputerChoice() {
        return new Promise((resolve, reject) => {
            const computerChoice = this.optionsArray[Random.getRandomNumber(0,(this.optionsArray.length) - 1)];
            resolve(computerChoice);
        })
    }
}

module.exports = Input;