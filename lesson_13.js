let gameRuleset = {
    diceNumber: 2,
    maxAttempts: 3
};

let firstCat = {
    name: 'Кекс',
    points: 0
};

let secondCat = {
    name: 'Рудольф',
    points: 0
};

let cats = [firstCat, secondCat];

let runGame = function (ruleset, players) {
    for (let currentAttempt = 1; currentAttempt <= ruleset.maxAttempts; currentAttempt++) {
        for (let i = 0; i < players.length; i++) {
            let throwResult = keks.throwDice(ruleset.diceNumber, ruleset.diceNumber * 6);
            players[i].points += throwResult;
            console.log(players[i].name + ' выбросил ' + players[i].points);
        }

    }
    return players;
};

let getWinners = function (players) {
    let winners = [];
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i];
        console.log(currentPlayer);
    };
    return winners;
}

cats = runGame(gameRuleset, cats);
console.log(cats);

let tops = getWinners(cats);
console.log(tops);