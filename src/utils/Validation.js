class Validation {
    validatePlayerEntry(playerChoice, optionsArray) {
        const correctedPlayerChoice = playerChoice.toLowerCase().trim();
        const isValidAnswer = optionsArray
            .map(option => option.toLowerCase())
            .includes(correctedPlayerChoice);
        return isValidAnswer;       
    }
}

module.exports = Validation;