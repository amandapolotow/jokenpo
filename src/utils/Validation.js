class Validation {
    validatePlayerEntry(playerChoice, optionsArray) {
        const isValidAnswer = optionsArray
            .map(option => option.toLowerCase())
            .includes(playerChoice.toLowerCase());
        return isValidAnswer;       
    }
}

module.exports = Validation;