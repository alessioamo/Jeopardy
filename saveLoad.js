// function saveGame() {
//     console.log("C: " + teamScoreValues);
//     var gameData = {
//         teamScoreValues: teamScoreValues
//     }

//     localStorage.setItem("gameData", JSON.stringify(gameData));
// }

// function loadGame() {
//     var savedGame = JSON.parse(localStorage.getItem("gameData"));
//     if (localStorage.getItem("gameSave") != null) {
//         if (typeof savedGame.teamScoreValues != "undefined") teamScoreValues = savedGame.teamScoreValues;
//     }
//     console.log(teamScoreValues);
// }

// window.onload = function() {
//     loadGame();
// }

// setInterval(function() {
//     saveGame();
// }, 5000); // 5000 milliseconds = 5 seconds