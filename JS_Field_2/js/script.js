
main();

function main() {
	createGameField();
}

//game field creating
function createGameField() {
    console.log('Func createGameField');
    var gameField = [];
    var gameFieldLength = 7;
    for (var i = 0; i < gameFieldLength; i++) {
    	gameField[i] = [];
        for (var j = 0; j < gameFieldLength; j++) {
        	gameField[i][j] = 0;
        }
    }
    console.log('	gameField', gameField);
    setSnakeOnField(gameField);
    runGame();
}

/*
 this function runs the game
*/
function runGame() {
	console.log('Func runGame');

	var timer = 6;
	var startGame = setInterval(function() {
		timer--;
		console.log('	timer', timer);
		if (timer == 0) {
		clearInterval(startGame);
		stopGame();

		console.log('	=========');
		console.log('	GAME OVER');
		}
	}, 1000);
}

function setSnakeOnField(gameField) {
	console.log('Func setSnakeOnField');

	var snakeDirection = 'straight';
	var snakeHead = gameField[length/2][length/2];

	console.log('	snakeHead', snakeHead);
}

/*
 this function stops the game by adding class to gameField
*/
function stopGame() {
	console.log('Func stopGame');
	game.classList.add('gameOver');
	console.log('	game', game);
}
