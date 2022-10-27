let getStatistics = function (players) {
//считаем сумму всех голов
    let allGoals = 0; 
    for (let i = 0; i < players.length; i++) {
        allGoals += players[i].goals;
        console.log(players);
    }
// добавляем новые свойства
    for (let i = 0; i < players.length; i++) {
        players[i].coefficient = players[i].goals * 2 + players[i].passes;
        players[i].percent = Math.round((players[i].goals * 100) / allGoals);
    }
    return players;
};