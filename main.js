// other team cant buzz if first team gets - points

// ------------------------------------------------------------------------------------------------
// These are the values to change for point values, category names, questions and solutions
const values = [200, 400, 600, 800, 1000];
//const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"];
const categories = ["Rhyme Time", "Decades of Music", "O' Canada", "Back to High School", "Hollywood", "Animals"];
//const categories = ["Famous Movie Quotes", "Year in Review", "Animals", "Disney and Pixar", "Rhyme Time", "Superheroes"];
const NUMBEROFPLAYERS = 2;
var enableClueTransition = true;
var isSoundEnabled = true;
var isVideoEnabled = true;
var skipIntro = true;
var timerToAnswer = true;
var enableQuestionTimeout = true;
var enableControls = true;
var enableBoardLoadAnimation = true;
var enableDailyDouble = true;
var enableFinalJeopardy = true; // Will need paper and pencil for each team
//for images <img src="images/Green Plus.png">
//384 is max characters for good size
// const questions = [
//     [200, 'Category 1 - 200 Point Clue', 'Category 2 - 200 Point Clue', 'Category 3 - 200 Point Clue', 'Category 4 - 200 Point Clue', 'Category 5 - 200 Point Clue', 'Category 6 - 200 Point Clue'],
//     [400, 'Category 1 - 400 Point Clue', 'Category 2 - 400 Point Clue', 'Category 3 - 400 Point Clue', 'Category 4 - 400 Point Clue', 'Category 5 - 400 Point Clue', 'Category 6 - 400 Point Clue'],
//     [600, 'Category 1 - 600 Point Clue', 'Category 2 - 600 Point Clue', 'Category 3 - 600 Point Clue', 'Category 4 - 600 Point Clue', 'Category 5 - 600 Point Clue', 'Category 6 - 600 Point Clue'],
//     [800, 'Category 1 - 800 Point Clue', 'Category 2 - 800 Point Clue', 'Category 3 - 800 Point Clue', 'Category 4 - 800 Point Clue', 'Category 5 - 800 Point Clue', 'Category 6 - 800 Point Clue'],
//     [1000, 'Category 1 - 1000 Point Clue', 'Category 2 - 1000 Point Clue', 'Category 3 - 1000 Point Clue', 'Category 4 - 1000 Point Clue', 'Category 5 - 1000 Point Clue', 'Category 6 - 1000 Point Clue']
// ];
const questions = [
    [200, 'A thick baseball stick',
        'Shape of You - Ed Sheeran',
            'Jacques Cartier first arrived to Canada in this year',
                'This part of a cell is known for generating power ',
                    'The highest grossing movie of all time ',
                        'The Dromedary camel has this many humps'],
    [400, 'The invoice for one\'s prescription medication',
        'I Want to Hold Your Hand - The Beatles',
            'Canada\'s largest province by area',
                'Give the conjugation of the French verb Être with the pronoun Nous',
                    'This titular character has appeared in 27 action packed movies, however he was portrayed by 7 different actors',
                        'This flightless bird has some stylish hair and a tasty name'],
    [600, 'Almost every 365 days',
        'I Gotta Feeling - The Black Eyed Peas',
            'The last province to join Canada',
                'Manitoba is sandwiched between these two provinces',
                    'Tom Hanks\' best friend in Castaway ',
                        'The first mammal that was cloned'],
    [800, 'A yearly instruction book',
        'The Show Must Go On - Queen',
            'This hockey player scored the winning goal for Canada in the finals at the 2010 Olympics',
                'This is the largest human organ',
                    'This skyscraper was the primary location of Die Hard',
                        'The scientific name for an animal with a pouch'],
    [1000, 'A ginormous mushroom',
        'Let\'s Get It On - Marvin Gaye',
            'The smallest great lake',
                '(18 ÷ 3) + (4 × 2) – (2 + 7) ',
                    'He is the highest grossing actor of all time, one famous appearance has him wearing a short afro and another, an eyepatch',
                        'Name one of the two mammals that lays eggs']
];
// const questions = [
//     [200, '\'To Infinity and Beyond!\'',
//         'This American singer broke a film record with her release this year',
//             'A group of these animals is called a pride',
//                 'Sleeping Beauty\'s name',
//                     'One who chooses the alcohol',
//                         'This mineral is Superman’s greatest weakness'],
//     [400, '\'Say ‘Hello’ to my little friend!\'',
//         'This singer headlined at the Super Bowl this year',
//             'You\'ll find it hard to catch a cheetah, as for this animal, he\'s the slowest one',
//                 'She is the first Disney Princess',
//                     'A jovial star',
//                         'This butler serves Batman'],
//     [600, '\'Hasta la vista, baby.\'',
//         'This movie was the highest grossing movie of 2023',
//             'These birds are the largest of the bunch, but can’t get their bodies off the ground',
//                 'This is the first Pixar movie',
//                     'A school group that studies eyewear',
//                         'You won’t like him when he’s angry'],
//     [800, '\'Why so serious?\'',
//         'This actor might portray a superhero with no powers, however he might have powers himself after he escaped death near the start of the year',
//             'Male penguins give female penguins this in an attempt to win her over',
//                 'The six main characters in the Mickey Mouse universe',
//                     'What one may find on one’s sole after walking through the dog park',
//                         'This colorful villain is known for butting heads with Spiderman'],
//     [1000, '\'It\'s classified. I could tell you, but then I\'d have to kill you.\'',
//         'This genius billionaire bought Twitter last year and renamed it to X this year',
//             'Sea otters can be seen doing this to avoid drifting apart while they sleep. Humans also do this as a sign of affection',
//                 'For Nemo’s initiation, he needed to swim through this',
//                     'A stage play about a wooly South American pack animal',
//                         'This Marvel actor holds the record for the longest running appearance as the same character at 24 years']
// ];
//const FINALJEOPARDYCLUE = "Final Jeopardy Clue";
const FINALJEOPARDYCLUE = "Night is young and the music's high<br>With a bit of rock music<br>Everything is fine<br>You're in the mood for a dance";
//const FINALJEOPARDYCLUE = "Phoebe states that she hates this store chain and its mass-produced products, because she believes there is no symbolical history behind them";
// Solutions aren't displayed but you can put them here if you want them
const solutions = [];
// ------------------------------------------------------------------------------------------------

//---------------------------------AUDIO FILE IDS---------------------------------
const INTROAUDIO = "introAudio";
const FILLBOARDAUDIO = "fillBoardAudio";
const DAILYDOUBLEAUDIO = "dailyDoubleAudio";
const THINKMUSICAUDIO = "thinkMusicAudio";
const OUTROAUDIO = "outroAudio";
const TIMESUP = "timesUp";
//---------------------------------AUDIO FILE IDS---------------------------------

//---------------------------------VIDEO FILE IDS---------------------------------
const INTROVIDEO = "introVideo";
//---------------------------------VIDEO FILE IDS---------------------------------

//-----------------------------------KEY BINDS-----------------------------------
var DISPLAYCATEGORIESKEY = "-";
var FILLBOARDKEY = "=";
var TEAM1KEY = "1";
var TEAM2KEY = "a";
var TEAM3KEY = "2";
var teamKeys = [{teamNumber: 1, keyToPress: TEAM1KEY, canPress: false}, {teamNumber: 2, keyToPress: TEAM2KEY, canPress: false}, {teamNumber: 3, keyToPress: TEAM3KEY, canPress: false}];
//-----------------------------------KEY BINDS-----------------------------------

//----------------------------------TIME VALUES----------------------------------
var TIMETOANSWER = 5000; // Time to answer after pressing buzzer
var TIMETOANSWERDAILYDOUBLE = 5000;
var TIMETOQUESTIONTIMEOUT = 50000; // Time to answer after clicking on a question
const TIMETODISPLAYCATEGORIES = 2000;
const TIMETOFILLBOARD = 500;
const TIMETOSTARTFINALJEOPARDY = 2000;
const TIMETODISPLAYFINALRESULTS = 1000;
const TIMETOBUZZ = 10000;
//----------------------------------TIME VALUES----------------------------------

//----------------------------------OTHER VALUES----------------------------------
const DEAFULTMAXDAILYDOUBLEVALUE = 1000;
const DEFAULTTILEVALUE = 100;
//----------------------------------OTHER VALUES----------------------------------

var images = [
    "images/background.png",
    "images/background2.png",
    "images/background3.png"
    //"background4.png"
];

if (!timerToAnswer) {
    TIMETOANSWER = 10000000;
    TIMETOANSWERDAILYDOUBLE = 10000000;
    TIMETOQUESTIONTIMEOUT = 10000000;
}

var completedQuestions = [];

var numberOfEntriesInQuestionsArray = questions.reduce((acc, subArray) => acc + (subArray.length - 1), 0);
var numberOfEntriesInCompletedQuestionsArray;

function checkIfStartFinalJeopardy(element) {
    if (!completedQuestions.includes(element)) {
        completedQuestions.push(element);
    }
    if (completedQuestions.length == numberOfEntriesInQuestionsArray) {
        if (enableFinalJeopardy) {
            console.log("Final Jeopardy Time!");
            setTimeout(() => {
                beginFinalJeopardy();
            }, TIMETOSTARTFINALJEOPARDY);
        }
        else {
            gameComplete();
        }
    }
}

var finalJeopardyBet = [];

function beginFinalJeopardy() {
    console.log("Starting Final Jeopardy!");
    enableQuestionTimeout = false;
    // Display category
    let flipped = false;
    const finalJeopardyBox = document.getElementById('finalJeopardyBox');

    if (!flipped) {
        setTimeout(() => {
            finalJeopardyBox.classList.remove('hidden');
            finalJeopardyBox.classList.add('flippedFinalJeopardy');
            finalJeopardyBox.style.transition = 'transform 2s, width 1.7s, height 1.7s'; // Separate transitions for transform and width/height
            flipped = true;
        }, 700);
    }

    setTimeout(() => {
        // Take Bets
        for (i = 0; i < NUMBEROFPLAYERS; i++) {
            let teamTotalScore = parseInt(document.getElementById("scoreTeam"+(i+1)).innerHTML);
            if (teamTotalScore <= 0) {
                alert("Unfortunately, team " + (i+1) + " does not have enough points to participate in final jeopardy.");
            }
            else {
                let inputtedNumber = prompt("Please Enter Your Betting Amount For Team " + (i+1), "0");
                let parsedInputtedNumber = parseInt(inputtedNumber);
                let isValueValid = false;
                while (!isValueValid) {
                    if (isNaN(parsedInputtedNumber) || parsedInputtedNumber < 0 || parsedInputtedNumber > teamTotalScore) {
                        inputtedNumber = prompt("Invalid Value, Please Try Again.", "0");
                        parsedInputtedNumber = parseInt(inputtedNumber);
                    }
                    else {
                        isValueValid = true;
                        console.log("Inputted Number: " + parsedInputtedNumber);
                        finalJeopardyBet[i] = parsedInputtedNumber;
                    }
                }
            }
        }
    }, 3000);
}

function revealFinalJeopardy(element) {
    // Display Question + start timer
    element.style.display = "none";
    document.getElementById("finalClue").innerHTML = FINALJEOPARDYCLUE;

    playAudioFile(THINKMUSICAUDIO);

    // Go through people and manually check yes or no if they got it
    setTimeout(() => {
        processPlayers(0);
    }, 35000);
}

// This is done so we can update the DOM elements (with the 100ms delay) before the next player is processed with confirm instead of using a for loop
function processPlayers(playerIndex) {
    if (playerIndex >= NUMBEROFPLAYERS) {
        // All players have been processed
        gameComplete();
        return;
    }

    let teamNumber = playerIndex + 1;
    currentActiveTileValue = finalJeopardyBet[playerIndex];
    let response = confirm("Did Team " + teamNumber + " get the correct response? (Ok = yes | Cancel = no");

    // Process the response and update the score
    if (response === true) {
        increaseScore(teamNumber);
    } else {
        decreaseScore(teamNumber);
    }

    // Display the bet value
    alert("Bet: " + currentActiveTileValue);

    // Process the next player after a slight delay
    setTimeout(() => {
        processPlayers(playerIndex + 1);
    }, 100);
}

var isTie = false;
var tiedTeamsNumber = [];

function gameComplete() {
    let largestValue = teamScoreValues[0];
    let winningTeam = "1";
    for (i = 1; i < NUMBEROFPLAYERS; i++) {
        if (teamScoreValues[i] > largestValue) {
            largestValue = teamScoreValues[i];
            winningTeam = (i+1);
            isTie = false;
        }
        else if (teamScoreValues[i] == largestValue) {
            isTie = true;
        }
    }
    if (isTie) {
        for (i = 0; i < NUMBEROFPLAYERS; i++) {
            if (teamScoreValues[i] == largestValue) {
                tiedTeamsNumber.push((i+1));
                console.log("NUM: " + tiedTeamsNumber[i]);
            }
        }
        let resultString = "There is a tie between " + tiedTeamsNumber.length + " teams! The teams that have tied are: ";
        for (i = 0; i < tiedTeamsNumber.length; i++) {
            console.log("num appended: " + tiedTeamsNumber[i]);
            resultString += (tiedTeamsNumber[i] + ", ");
        }
        resultString += ("with " + largestValue + " points.");
        setTimeout(() => {
            console.log(resultString);
            alert(resultString);
            playAudioFile(OUTROAUDIO);
        }, TIMETODISPLAYFINALRESULTS);
    }
    else {
        setTimeout(() => {
            console.log("The winner is Team " + winningTeam + " with a total of " + largestValue + " points!");
            alert("The winner is Team " + winningTeam + " with a total of " + largestValue + " points!");
            playAudioFile(OUTROAUDIO);
        }, TIMETODISPLAYFINALRESULTS);
    }
}

var currentIndex = 0;
var body = document.body;

var gameStarted = false;

window.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', startGame);
});

document.addEventListener('click', disableMouseClicks);

function disableMouseClicks() {
    console.log("cat: " + boardCategoriesLoaded + " and value: " + boardValuesLoaded);
    document.body.style.pointerEvents = "none";
}

function enableMouseClicks() {
    if (boardCategoriesLoaded && boardValuesLoaded) {
        document.body.style.pointerEvents = "auto";
        document.removeEventListener('click', disableMouseClicks); // Remove the event listener
    }
}

function startGame() {
    if (gameStarted) {return;}
    gameStarted = true;
    if (!skipIntro) {
        document.getElementById("mainMenu").style.display = "none";
        playAudioFile(INTROAUDIO);
        document.getElementById('introVideo').style.display = 'block';
        playVideoFile(INTROVIDEO);
        var backgroundInterval = setInterval(function() {
            if (currentIndex == images.length-1) {
                currentIndex = 0;
            }
            else {
                currentIndex++;
            }
            body.style.backgroundImage = "url('" + images[currentIndex] + "')";
            console.log("we");
        }, 5000); // Change interval in milliseconds
        setTimeout(function() { //to be executed after 30 seconds
            clearInterval(backgroundInterval);
            body.style.backgroundImage = "url()";
            loadBoard();
        }, 30000); // 30 seconds in milliseconds
    }
    else {
        document.getElementById("mainMenu").style.display = "none";
        body.style.backgroundImage = "url()";
        loadBoard();
    }
}

function checkForClueTransition() {
    var element = document.querySelector('.tile.active');
    element.style.transition = enableClueTransition ? 'all 0.3s ease' : 'none';
}

var teamScoreValues = [];
var boardCategoriesLoaded = false;
var boardValuesLoaded = false;

function loadBoard() {
    const questionContainer = document.getElementById('questionContainer');
    const NUMBEROFCATEGORIES = categories.length;

    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('row', 'categories');

    categories.forEach((category, index) => {
        const tile = document.createElement('div');
        tile.classList.add('tile', 'category');
        if (enableBoardLoadAnimation) {
            document.addEventListener("keydown", function(event) {
                if (event.key === DISPLAYCATEGORIESKEY) {
                    setTimeout(() => {
                        tile.innerHTML = `${category}`;
                        // ENABLE MOUSE CLICK1
                        if (index == categories.length-1) {
                            boardCategoriesLoaded = true;
                            enableMouseClicks();
                        }
                    }, index * TIMETODISPLAYCATEGORIES);
                }
            });
        }
        else {
            tile.innerHTML = `${category}`;
            // ENABLE MOUSE CLICK1
            boardCategoriesLoaded = true;
            enableMouseClicks();
        }

        categoryContainer.appendChild(tile);
    });
    document.getElementById('categoryContainer').appendChild(categoryContainer);

    values.forEach(value => {
        const row = document.createElement('div');
        row.classList.add('row', 'clues');

        for (let i = 0; i < NUMBEROFCATEGORIES; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.onclick = function() {
                var childDiv = this.querySelector('.question-value');
                var innerHTML = parseInt(childDiv.innerHTML.replace('$', ''));
                toggleActive(this, innerHTML);
            };

            const questionValue = document.createElement('div');
            questionValue.classList.add('question-value');
            // setTimeout(() => {
            //     playAudioFile(FILLBOARDAUDIO);
            //     setTimeout(() => {
            //         questionValue.textContent = `$${value}`;
            //     }, i * 500);
            // }, 48000);
            
            if (enableBoardLoadAnimation) {
                document.addEventListener("keydown", function(event) {
                    // Check if the key pressed is the desired key
                    if (event.key === FILLBOARDKEY) {
                        playAudioFile(FILLBOARDAUDIO);
                        setTimeout(() => {
                            questionValue.textContent = `$${value}`;
                            // ENABLE MOUSE CLICK2
                            if (i == NUMBEROFCATEGORIES-1) {
                                boardValuesLoaded = true;
                                enableMouseClicks();
                            }
                        }, i * TIMETOFILLBOARD);
                    }
                });
            }
            else {
                questionValue.textContent = `$${value}`;
                // ENABLE MOUSE CLICK2
                boardValuesLoaded = true;
                enableMouseClicks();
            }
            
            const questionAnswer = document.createElement('div');
            questionAnswer.classList.add('question-answer');
            questionAnswer.innerHTML = '<p class="questionAnswerInnerHTML">' + questions[values.indexOf(value)][i+1] + '</p>';

            tile.appendChild(questionValue);
            tile.appendChild(questionAnswer);
            row.appendChild(tile);
        }

        questionContainer.appendChild(row);
    });

    const scoreboardContainer = document.createElement('div');
    scoreboardContainer.classList.add('row', 'scores');

    for (let i = 0; i < NUMBEROFPLAYERS; i++) {
        var teamNumber = (i + 1);
        teamScoreValues.push(0);
        console.log("Team score: " + teamScoreValues[i]);
        const tile = document.createElement('div');
        tile.classList.add('tile', 'scoreboard');
        tile.innerHTML =    //'<div class="pointButtonContainer">' +
                                //'<p class="scoreDisplay">Team <span id="teamNumber">' + teamNumber + '</span><br>Score: <span id=scoreTeam'+teamNumber+'>' + teamScoreValues[i] + '</span></p>' +
                                //'<div class="pointButtonContainerButtons">' +
                                    //'<p class="button minus" onclick="decreaseScore('+teamNumber+')" id="buttonMinus'+teamNumber+'"></button>' +
                                    //'<p class="button plus" onclick="increaseScore('+teamNumber+')" id="buttonPlus'+teamNumber+'"></button>' +
                                //'</div>' +
                            //'</div>';
                            '<p id="scoreDisplayTeamName'+teamNumber+'" class="scoreDisplay"><span onclick="pickTeamColor('+teamNumber+')">Team <span id="teamNumber">' + teamNumber + '</span></span>' +
                            '<br>Score: <span id=scoreTeam'+teamNumber+'>' + teamScoreValues[i] + '</span>' + 
                            '<br><span class="button minus" onclick="decreaseScore('+teamNumber+')" id="buttonMinus'+teamNumber+'"></span>' +
                            '<span class="button plus" onclick="increaseScore('+teamNumber+')" id="buttonPlus'+teamNumber+'"></span>' +
                            '</p>'

        scoreboardContainer.appendChild(tile);
    }
    document.getElementById('scoreboardContainer').appendChild(scoreboardContainer);
}

var currentActiveTileValue = DEFAULTTILEVALUE;
var isCurrentlyAnswering = false;

function toggleActive(element, tileValue) {
    if(element.className == 'tile active') {
        element.className = 'tile inactive';
        interruptQuestionTimeoutTimer();
        currentActiveTileValue = DEFAULTTILEVALUE;
        canPressBuzzer = false;
        if (isCurrentlyAnswering) {
            interruptAnswerTimer();
        }
        enableAllTeamBuzzers();
        checkIfStartFinalJeopardy(element.querySelector('.question-answer').textContent);
    }
    else {
        if (enableQuestionTimeout) {
            startQuestionTimeoutTimer();
        }
        if (enableDailyDouble && element.className == 'tile') {
            //.slice to remove $ sign, change to int, divide by 200 to get single number, -1 to get index
            var rowIndex = ((parseInt(element.querySelector('.question-value').textContent.slice(1)) / 200) - 1);
            var rowArray = questions[rowIndex];
            var columnIndex = rowArray.indexOf(element.querySelector('.question-answer').textContent);
            console.log("COLUMN: " + columnIndex);
            console.log("Row Index: " + rowIndex + ". Column Index: " + columnIndex + ". Together: " + rowIndex+","+columnIndex + ". Daily Double: " + dailyDoubleIndex);
            if (rowIndex+","+columnIndex == dailyDoubleIndex) {
                interruptQuestionTimeoutTimer();
                playDailyDouble(element, tileValue);
            }
            else {
                element.className = 'tile active';
                checkForClueTransition();
                currentActiveTileValue = tileValue;
                canPressBuzzer = true;
            }
        }
        else {
            element.className = 'tile active';
            checkForClueTransition();
            currentActiveTileValue = tileValue;
            canPressBuzzer = true;
        }
    }
}

var canPressBuzzer = false;

function startAnswerTimer(team) {
    isCurrentlyAnswering = true;
    answerTimer = setTimeout(function() { //to be executed after 5 seconds
        playAudioFile(TIMESUP);
        startQuestionTimeoutTimer();
        canPressBuzzer = true;
        document.getElementById(team).parentElement.style.background = "linear-gradient(to top left, #3d3d3d, #ffffff)";
        isCurrentlyAnswering = false;
    }, TIMETOANSWER);
}

function startDailyDoubleAnswerTimer(team) {
    isCurrentlyAnswering = true;
    answerTimer = setTimeout(function() { //to be executed after 5 seconds
        playAudioFile(TIMESUP);
        document.getElementById(team).parentElement.style.background = "linear-gradient(to top left, #3d3d3d, #ffffff)";
        isCurrentlyAnswering = false;
    }, TIMETOANSWERDAILYDOUBLE);
}

function interruptAnswerTimer() {
    someoneBuzzed = false;
    clearTimeout(answerTimer);
    isCurrentlyAnswering = false;
    if (isDailyDouble) {
        canPressBuzzer = false;
        isDailyDouble = false;    
    }
    else {
        canPressBuzzer = true;
    }
    for (i = 0; i < NUMBEROFPLAYERS; i++) {
        document.getElementById("scoreDisplayTeamName"+(i+1)).parentElement.style.background = "linear-gradient(to top left, #3d3d3d, #ffffff)";
    }
}

var questionTimerTicking = false;
var tempCounter = 0;

function startQuestionTimeoutTimer() {
    if (enableQuestionTimeout) {
        console.log("starting timer");
        tempCounter++;
        questionTimerTicking = true;
        questionTimer = setTimeout(function() { //to be executed after 5 seconds
            playAudioFile(TIMESUP);
            for (i = 0; i < NUMBEROFPLAYERS; i++) {
                disableTeamBuzzer(teamKeys[i]);
            }
        }, TIMETOQUESTIONTIMEOUT);
    }
}

function interruptQuestionTimeoutTimer() {
    if (enableQuestionTimeout) {
        console.log("Interrupting: " + tempCounter);
        questionTimerTicking = false;
        clearTimeout(questionTimer);
    }
}

function increaseScore(teamNumber) {
    // Prevent teams from buzzing if the other got it right
    for (i = 0; i < NUMBEROFPLAYERS; i++) {
        disableTeamBuzzer(teamKeys[i]);
    }
    if (someoneBuzzed) {
        interruptAnswerTimer();
    }
    teamScoreValues[teamNumber-1] += currentActiveTileValue;
    document.getElementById('scoreTeam'+teamNumber).innerHTML = teamScoreValues[teamNumber-1];
    console.log("team 1 score: " + teamScoreValues[0]);
    console.log("team 2 score: " + teamScoreValues[1]);
}

function decreaseScore(teamNumber) {
    if (someoneBuzzed) {
        interruptAnswerTimer();
    }
    startQuestionTimeoutTimer();
    teamScoreValues[teamNumber-1] -= currentActiveTileValue;
    document.getElementById('scoreTeam'+teamNumber).innerHTML = teamScoreValues[teamNumber-1];
    console.log("team 1 score: " + teamScoreValues[0]);
    console.log("team 2 score: " + teamScoreValues[1]);
}

function pickTeamColor(teamNumber) {
    const element = document.getElementById("scoreDisplayTeamName"+teamNumber);

    // Create an input element of type "color"
    const colorInput = document.createElement('input');
    colorInput.type = 'color';

    // Listen for the "change" event on the color input
    colorInput.addEventListener('input', function() {
        const selectedColor = colorInput.value;
        element.style.color = selectedColor;
    });

    // Append the color input to the document body
    document.body.appendChild(colorInput);

    // Click the color input programmatically to open the color picker
    colorInput.click();
}

function playAudioFile(file) {
    if (isSoundEnabled) {
        var audio = document.getElementById(file);
        audio.play();
    }
}

function playVideoFile(file) {
    if (isVideoEnabled) {
        document.getElementById(file).play();
    }
}

var someoneBuzzed = false;
for (i = 0; i < NUMBEROFPLAYERS; i++) {
    teamKeys[i].canPress = true;
}

window.addEventListener('keydown', function(e) {
    console.log("Can buzz: " + canPressBuzzer);
    if (enableControls && ((e.key == TEAM1KEY && teamKeys[0].canPress) || (e.key == TEAM2KEY && teamKeys[1].canPress) || (e.key == TEAM3KEY && teamKeys[2].canPress)) && canPressBuzzer) {
        if (enableQuestionTimeout) {
            interruptQuestionTimeoutTimer();
        }
        someoneBuzzed = true;
        canPressBuzzer = false;
        console.log(e);
        for (i = 0; i < NUMBEROFPLAYERS; i++) {
            if (e.key == teamKeys[i].keyToPress)  {
                console.log(teamKeys[i].teamNumber);
                (document.getElementById("scoreDisplayTeamName"+teamKeys[i].teamNumber)).parentElement.style.background = "linear-gradient(to top left, #939600, #fbff00";
                startAnswerTimer("scoreDisplayTeamName"+teamKeys[i].teamNumber);
                disableTeamBuzzer(teamKeys[i]);
                break;
            }
        }
    }
});

function disableTeamBuzzer(team) {
    team.canPress = false;
}

function enableAllTeamBuzzers() {
    for (i = 0; i < NUMBEROFPLAYERS; i++) {
        console.log(teamKeys[i]);
        teamKeys[i].canPress = true;
    }
}

var dailyDoubleIndex;

function randomlySelectDailyDouble() {
    var randomIndex = getRandomClueIndex();
    dailyDoubleIndex = randomIndex;
    console.log("Daily double is: " + dailyDoubleIndex);
}

if (enableDailyDouble) {
    randomlySelectDailyDouble();
}
if (!enableDailyDouble) {
    document.getElementById("dailyDoubleBox").remove();
}

function getRandomClueIndex() {
    // Get a random index for the category (0 to 4, inclusive)
    const randomCategoryIndex = Math.floor(Math.random() * questions.length);
  
    // Get a random index for the clue within the selected category (1 to 6, inclusive)
    const randomClueIndex = Math.floor(Math.random() * (questions[randomCategoryIndex].length - 1)) + 1;
  
    // Return the randomly selected clue index
    return [randomCategoryIndex, randomClueIndex];
}

finalJeopardyBox.addEventListener('click', () => {
    let flipped = false;

    const finalJeopardyBox = document.getElementById('finalJeopardyBox');

    if (!flipped) {
        setInterval(() => {
            finalJeopardyBox.classList.add('flippedFinalJeopardy');
            finalJeopardyBox.style.transition = 'transform 2s, width 1.7s, height 1.7s'; // Separate transitions for transform and width/height
            flipped = true;
        }, 700);
    }
});

var isDailyDouble = false;

function playDailyDouble(element) {
    isDailyDouble = true;
    console.log("DAILY DOUBLE");
    playAudioFile(DAILYDOUBLEAUDIO);

    console.log(element);
    let flipped = false;

    const dailyDoubleBox = document.getElementById('dailyDoubleBox');
    var dailyDoubleBet;

    if (!flipped) {
        setTimeout(() => {
            dailyDoubleBox.classList.remove('hidden');
            dailyDoubleBox.classList.add('flipped');
            dailyDoubleBox.style.transition = 'transform 2s, width 1.7s, height 1.7s'; // Separate transitions for transform and width/height
            flipped = true;

            setTimeout(() => {
                let teamNumberPrompt = prompt("Please Enter Your Team Number.");
                let parsedTeamNumberPrompt = parseInt(teamNumberPrompt);
                let isTeamNumberValid = false;
                
                while (!isTeamNumberValid) {
                    if (isNaN(parsedTeamNumberPrompt) || parsedTeamNumberPrompt <= 0 || parsedTeamNumberPrompt > NUMBEROFPLAYERS) {
                        teamNumberPrompt = prompt("Invalid Team Number, Please Try Again.");
                        parsedTeamNumberPrompt = parseInt(teamNumberPrompt);
                    }
                    else {
                        isTeamNumberValid = true;
                        console.log("Team Number: " + parsedTeamNumberPrompt);
                    }
                }
                let inputtedNumber = prompt("Please Enter Your Betting Amount", "0");
                let parsedInputtedNumber = parseInt(inputtedNumber);
                let isValueValid = false;
                let teamTotalScore = parseInt(document.getElementById("scoreTeam"+teamNumberPrompt).innerHTML);
                while (!isValueValid) {
                    if (isNaN(parsedInputtedNumber) || parsedInputtedNumber < 0 || (parsedInputtedNumber > teamTotalScore && parsedInputtedNumber > DEAFULTMAXDAILYDOUBLEVALUE)) {
                        inputtedNumber = prompt("Invalid Value, Please Try Again.", "0");
                        parsedInputtedNumber = parseInt(inputtedNumber);
                    }
                    else {
                        isValueValid = true;
                        console.log("Inputted Number: " + parsedInputtedNumber);
                        dailyDoubleBet = parsedInputtedNumber;
                    }
                }
                // Remove daily double, give new point value, return to original tile showing
                dailyDoubleBox.style.display = "none";
                currentActiveTileValue = dailyDoubleBet;
                element.className = 'tile active';
                
                // No one actually buzzed here or is allowed to buzz, we just use this boolean to be able to use the interrupt answer timer function if we press the + or - before the time runs out
                someoneBuzzed = true;
                startDailyDoubleAnswerTimer("scoreDisplayTeamName"+parsedTeamNumberPrompt);

                // Remove the entire dailyDoubleBox so Final Jeopardy can take its html place
                document.getElementById("dailyDoubleBox").remove();
            }, 2000);
        }, 700);
    }
}

const escapeMenu = document.getElementById('escapeMenu');

document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        escapeMenu.classList.toggle('active');
    }
});

function closeMenu() {
    escapeMenu.classList.remove('active');
}

// Stuff to change keybinds from menu, not working so disabled temporarily
// let keybindsMenuVisible = false; // Keeps track of whether the buzzer elements are visible or not
// const keybindsMenu = document.getElementById("keybindsMenu");

// function displayKeybinds() {
//     console.log("DISPLAYING");
//     keybindsMenuVisible = !keybindsMenuVisible;
//     escapeMenu.classList.toggle('active');
//     keybindsMenu.classList.toggle('active');

//     // Create the form element
//     const form = document.createElement("form");
//     form.setAttribute("id", "displayKeybindsForm");

//     for (i = 0; i < NUMBEROFPLAYERS; i++) {
//         let teamNumber = (i+1);

//         // Create the label element
//         const label = document.createElement("label");
//         label.setAttribute("for", "team"+teamNumber+"Buzzer");
//         label.textContent = "Team "+teamNumber+" Buzzer: ";

//         // Create the input element
//         const input = document.createElement("input");
//         input.setAttribute("type", "text");
//         input.setAttribute("id", "team"+teamNumber+"Buzzer");
//         input.value = teamKeys[i].keyToPress;

//         // Create a line break
//         const lineBreak = document.createElement("br");

//         // Append the elements to the container div
//         form.appendChild(label);
//         form.appendChild(input);
//         form.appendChild(lineBreak);
//     }

//     // Create the label element
//     const label = document.createElement("label");
//     label.setAttribute("for", "displayCategoriesKey");
//     label.textContent = "Display Categories: ";

//     // Create the input element
//     const input = document.createElement("input");
//     input.setAttribute("type", "text");
//     input.setAttribute("id", "displayCategoriesKey");
//     input.value = DISPLAYCATEGORIESKEY;

//     // Create a line break
//     const lineBreak = document.createElement("br");

//     // Create the label element
//     const label2 = document.createElement("label");
//     label2.setAttribute("for", "fillBoardKey");
//     label2.textContent = "Fill Board: ";

//     // Create the input element
//     const input2 = document.createElement("input");
//     input2.setAttribute("type", "text");
//     input2.setAttribute("id", "fillBoardKey");
//     input2.value = FILLBOARDKEY;

//     form.appendChild(label);
//     form.appendChild(input);
//     form.appendChild(lineBreak);
//     form.appendChild(label2);
//     form.appendChild(input2);
//     form.appendChild(lineBreak);

//     // Append the form element to the container div
//     keybindsMenu.appendChild(form);

//     const submitButton = document.createElement("button");
//     submitButton.className = "";
//     submitButton.innerText = "Update";
//     submitButton.onclick = updateKeybinds;
    
//     keybindsMenu.appendChild(submitButton);

//     const button = document.createElement("button");
//     button.className = "closeMenuButton";
//     button.innerText = "Close";
//     button.onclick = toggleDisplayKeybinds;
//     keybindsMenu.appendChild(button);
// }

// function toggleDisplayKeybinds() {
//     if (keybindsMenuVisible) {
//         // If elements are visible, hide them and reset the container's content
//         keybindsMenu.innerHTML = "";
//         keybindsMenu.classList.toggle('active');
//         escapeMenu.classList.toggle('active');
//     } else {
//         // If elements are hidden, create and show them
//         displayKeybinds();
//     }

//     // Toggle the visibility flag
//     keybindsMenuVisible = !keybindsMenuVisible;
// }

// function updateKeybinds() {
//     TEAM1KEY = document.getElementById("team1Buzzer").value;
//     TEAM2KEY = document.getElementById("team2Buzzer").value;
//     //TEAM3KEY = document.getElementById("team3Buzzer").value;
//     //TEAM4KEY = document.getElementById("team4Buzzer").value;
//     //TEAM5KEY = document.getElementById("team5Buzzer").value;
//     //TEAM6KEY = document.getElementById("team6Buzzer").value;
//     DISPLAYCATEGORIESKEY = document.getElementById("displayCategoriesKey");
//     FILLBOARDKEY = document.getElementById("fillBoardKey");
// }

let timerMenuVisible = false; // Keeps track of whether the buzzer elements are visible or not
const timerMenu = document.getElementById("timerMenu");

function displayTimeValues() {
    timerMenuVisible = !timerMenuVisible;
    escapeMenu.classList.toggle('active');
    timerMenu.classList.toggle('active');

    const form = document.createElement("form");
    form.setAttribute("id", "displayTimeValuesForm");

    const label = document.createElement("label");
    label.setAttribute("for", "timeToAnswer");
    label.textContent = "Time to answer after buzzing: ";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "timeToAnswer");
    input.value = TIMETOANSWER;

    const label2 = document.createElement("label");
    label2.setAttribute("for", "timeToAnswerDailyDouble");
    label2.textContent = "Time to answer DD after buzzing: ";

    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "timeToAnswerDailyDouble");
    input2.value = TIMETOANSWERDAILYDOUBLE;

    const label3 = document.createElement("label");
    label3.setAttribute("for", "timeToQuestionTimeout");
    label3.textContent = "Time to buzz before timeout: ";

    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "timeToQuestionTimeout");
    input3.value = TIMETOQUESTIONTIMEOUT;

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(document.createElement("br"));
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(document.createElement("br"));

    timerMenu.appendChild(form);

    const submitButton = document.createElement("button");
    submitButton.className = "";
    submitButton.innerText = "Update";
    submitButton.onclick = updateTimerValues;
    timerMenu.appendChild(submitButton);

    const button = document.createElement("button");
    button.className = "closeMenuButton";
    button.innerText = "Close";
    button.onclick = toggleDisplayTimeValues;
    timerMenu.appendChild(button);
}

function toggleDisplayTimeValues() {
    if (timerMenuVisible) {
        // If elements are visible, hide them and reset the container's content
        timerMenu.innerHTML = "";
        timerMenu.classList.toggle('active');
        escapeMenu.classList.toggle('active');
    } else {
        // If elements are hidden, create and show them
        displayTimeValues();
    }

    // Toggle the visibility flag
    timerMenuVisible = !timerMenuVisible;
}

function updateTimerValues() {
    console.log("ccc " + document.getElementById("timeToQuestionTimeout").value);
    TIMETOANSWER = parseInt(document.getElementById("timeToAnswer").value);
    TIMETOANSWERDAILYDOUBLE = parseInt(document.getElementById("timeToAnswerDailyDouble").value);
    TIMETOQUESTIONTIMEOUT = parseInt(document.getElementById("timeToQuestionTimeout").value);
}

// var colorArray = ["white", "red", "orange", "yellow", "green", "blue", "cyan", "indigo", "violet", "pink", "brown", "grey"];
// var colorArrayCounter = 1;
// function changeTeamColor(teamNumber) {
//     document.getElementById("scoreDisplayTeamName"+teamNumber).style.color = colorArray[colorArrayCounter];
//     console.log(colorArrayCounter);
//     if (colorArrayCounter == colorArray.length-1) {
//         colorArrayCounter = 0;
//     }
//     else {
//         colorArrayCounter++;
//     }
// }

//https://codepen.io/jmschneider/pen/rxmaYz

// const questions = [
//     [200, 'C1-2', 'C2-2', 'C3-2', 'C4-2', 'C5-2', 'C6-2'],
//     [400, 'C1-4', 'C2-4', 'C3-4', 'C4-4', 'C5-4', 'C6-4'],
//     [600, 'C1-6', 'C2-6', 'C3-6', 'C4-6', 'C5-6', 'C6-6'],
//     [800, 'C1-8', 'C2-8', 'C3-8', 'C4-8', 'C5-8', 'C6-8'],
//     [1000, 'C1-10', 'C2-10', 'C3-10', 'C4-10', 'C5-10', 'C6-10']
// ];