class Random {
    static getRandomNumber(min = 0, max = 0){
        return Math.floor(Math.random() * (max + 1)) + min;
    }
}

module.exports = Random;