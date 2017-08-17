
window.addEventListener('keydown', getDirection);
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
function snakeMove(gameField) {
	var snakeHead = [[0][1]];
	var snakeBody = [[0][0], [0][1]];
	var snakeLength = 2;
	return snakeHead;
} 

function getDirection(event) {
	console.log('Func getDirection');
	var direction = [];

	switch (event.keyCode) {
		case 37: 
			console.log('	Left direction - keyCode', event.keyCode);
			direction = [[0][-1]];
			break;

		case 39: 
			console.log('	Right direction - keyCode:', event.keyCode);
			direction = [[0][1]];
			break;

		case 38: 
			console.log('	Top direction - keyCode', event.keyCode);
			direction = [[-1][0]];
			break;

		case 38: 
			console.log('	Bottom direction - keyCode', event.keyCode);
			direction = [1][0];
			break;
	}
	console.log('	direction', direction);
	return direction;
}

/*
 this function stops the game by adding class to gameField
*/
function stopGame() {
	console.log('Func stopGame');
	game.classList.add('gameOver');
	console.log('	game', game);
}
