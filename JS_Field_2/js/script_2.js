
window.addEventListener('keydown', getDirection);
var direction = [0, 1];
var gameFieldSize = 5;

//gameField, snakeBody, makeFood ---> init
var gameField = fillGameField(gameFieldSize);
var snakeBody = snakeInit(gameField);
makeFood(gameField, gameFieldSize);

//start
var startGame = setInterval(function() {
	checkSnakeHeadPosition(gameField, snakeBody, direction);
}, 1000);

//game field creating
function fillGameField(gameFieldSize) {
    console.log('Func fillGameField');

    var gameField = [];
    for (var i = 0; i < gameFieldSize; i++) {
    	gameField[i] = [];
        for (var j = 0; j < gameFieldSize; j++) {
        	gameField[i][j] = 0;
        }
    }
    console.log('gameField', gameField)
    return gameField;
}

/*
 snake initialization before the game starts
*/
function snakeInit(gameField) {
	console.log('Func snakeInit');

	var snakeBody = [[0, 0], [0, 1], [0, 2]];
	var xPos = 0;
	var yPos = 0;
	for (var i = 0; i < snakeBody.length; i++) {
			xPos = snakeBody[i][0];
			yPos = snakeBody[i][1];
			gameField[xPos][yPos] = 1;
	}
	return snakeBody;
}

/*
 creates food-cell
 @gameField
 @gameFieldSize
*/
function makeFood(gameField, gameFieldSize) {
	console.log('Func getDirection');

	var x = Math.round(Math.random() * (gameFieldSize-1));
	var y = Math.round(Math.random() * (gameFieldSize-1));

	if (gameField[x][y] == 0) {
		gameField[x][y] = 2;
	}
	else makeFood(gameField, gameFieldSize);
}

/*
 this function compare current cell for = 0 or != 0
 if current cell = 0 or snake continues to move,
 if cell = 2 it means that snake found food cell
 if cell != 0 and != 2 - than game over
 @gamefFeld - two-dimensional array, field
 @snakeBody - two-dimensional array
 @direction
*/
function checkSnakeHeadPosition(gameField, snakeBody, direction) {
	console.log('Func checkSnakeHeadPosition');

	var prevSnakeHead = snakeBody[snakeBody.length-1];
	var snakeTail = snakeBody[0];

	var newSnakeHead = [];
	for (var i = 0; i < 2; i++) {
		newSnakeHead[i] = prevSnakeHead[i] + direction[i];
	}
	// console.log('	snakeBody', snakeBody);
	// console.log('	snakeTail', snakeTail);
	// console.log('	prevSnakeHead', prevSnakeHead);
	console.log('	head position', newSnakeHead);

	if (gameField[newSnakeHead[0]][newSnakeHead[1]] == 0) {
		snakeBody.push(snakeMove(gameField, snakeTail, newSnakeHead));
		snakeBody.shift();
		console.log('	snakeBody', snakeBody);
	}
	else if (gameField[newSnakeHead[0]][newSnakeHead[1]] == 2) {
		snakeBody.push(snakeEat(gameField, newSnakeHead));
		snakeMove(gameField, snakeTail, newSnakeHead);
	}
	else gameOver();
}

/*
 moves the snake if current cell = 0 
 @gameField
 @snakeTail - one-dimensional array, first element of snakeBody array
 @snakeHead - one-dimensional array, last element of snakeBody array
*/
function snakeMove(gameField, snakeTail, snakeHead) {
	gameField[snakeHead[0]][snakeHead[1]] = 1;
	gameField[snakeTail[0]][snakeTail[1]] = 0;
	return snakeHead;
}

/*
 if current cell = 2/cell food - we increase snakeBody by 1 cell
  @snakeTail
  @snakeHead
*/
function snakeEat(gameField, snakeHead) {
	gameField[snakeHead[0]][snakeHead[1]] = 1;
	makeFood(gameField, gameFieldSize);
	return snakeHead;
}

/*
 this function defined direction by listening the event of 4 buttons
 left arrow, right arrow, up arrow, down arrow
 If the event does not occur then we use default value of direction specified at the beginning of the code
*/
function getDirection(event) {
	console.log('	event.keyCode', event.keyCode);
	
	switch (event.keyCode) {
		case 38: direction = [-1, 0];
			break;
		case 39: direction = [0, 1];
			break;
		case 40: direction = [1, 0];
			break;
		case 37: direction = [0, -1];
			break;
	}
	console.log('	direction', direction);
	return direction;
}

/*
 this fuction finishes the game by clearing interval 'startGame'
*/
function gameOver() {
	console.log('Func gameOver');
	clearInterval(startGame);
}