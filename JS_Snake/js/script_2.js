
window.addEventListener('keydown', getDirection);
var direction = [0, 1];
var gameFieldSize = 5;

//gameField, snakeBody, makeFood ---> init
var gameField = getZeroArray(gameFieldSize);
var snakeBody = snakeInit(gameField);
makeFood(gameField, gameFieldSize);


// testCheckSnakeHeadPosition();
//start
var startGame = setInterval(function() {
	checkSnakeHeadPosition(gameField, snakeBody, direction);
}, 1000);

/*
 this function creates array by given size and fills it by zeroes
 @gameFieldSize - 
 @return - game field filled by zeroes
*/
function getZeroArray(gameFieldSize) {
    console.log('Func getZeroArray');

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
 @gameField
 @return - snakeBody, array 
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
 randomly creates food-cell and paste it in to the gameField
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

	var emptyCell = 0;
	var foodCell = 2;
	var prevSnakeHeadCoordinates = snakeBody[snakeBody.length-1];
	var snakeTailCoordinates = snakeBody[0];
	var currentSnakeHeadCoordinates = getSnakeHeadCoordinates(prevSnakeHeadCoordinates, direction);
	var currentSnakeHeadValue = gameField[currentSnakeHeadCoordinates[0]][currentSnakeHeadCoordinates[1]];
	// console.log('	snakeBody', snakeBody);
	// console.log('	snakeTail', snakeTail);
	// console.log('	prevSnakeHeadCoordinates', prevSnakeHeadCoordinates);
	console.log('	head position', currentSnakeHeadCoordinates);

	if (currentSnakeHeadValue == emptyCell) {
		snakeMove(gameField, snakeBody, snakeTailCoordinates, currentSnakeHeadCoordinates);
	}
	else if (currentSnakeHeadValue == foodCell) {
		snakeEat(gameField, currentSnakeHeadCoordinates);
		snakeMove(gameField, snakeBody, snakeTailCoordinates, currentSnakeHeadCoordinates);
	}
	else gameOver();
	return currentSnakeHeadCoordinates;
}

/*
 this function takes coordinates of previous snakeHead and current direction
 and creates new snakeHead coordinates
 @prevSnakeHeadCoordinates
 @direction
 @return currentSnakeHeadCoordinates coordinates
*/
function getSnakeHeadCoordinates(prevSnakeHeadCoordinates, direction) {
	var currentSnakeHeadCoordinates = [];
	for (var i = 0; i < 2; i++) {
		currentSnakeHeadCoordinates[i] = prevSnakeHeadCoordinates[i] + direction[i];
	}
	return currentSnakeHeadCoordinates;
}

/*
 moves the snake if current cell = 0 
 @gameField
 @snakeTail - one-dimensional array, first element of snakeBody array
 @snakeHead - one-dimensional array, last element of snakeBody array
 @return snakeHead coordinates
*/
function snakeMove(gameField, snakeBody, snakeTail, snakeHead) {
	gameField[snakeHead[0]][snakeHead[1]] = 1;
	gameField[snakeTail[0]][snakeTail[1]] = 0;
	snakeBody.push(snakeHead);
	snakeBody.shift();
	return snakeHead;
}

/*
 if current cell = 2/cell food - we increase snakeBody by 1 cell
  @snakeTail
  @snakeHead
  @return snakeHead coordinates
*/
function snakeEat(gameField, snakeHead) {
	gameField[snakeHead[0]][snakeHead[1]] = 1;
	snakeBody.push(snakeHead);
	makeFood(gameField, gameFieldSize);
	console.log('	snakeBody', snakeBody);
	return snakeHead;
}

/*
 this function defined direction by listening the event of 4 buttons
 left arrow, right arrow, up arrow, down arrow
 If the event does not occur then we use default value of direction specified at the beginning of the code
 @event
 @return direction
*/
function getDirection(event) {
	console.log('	event.keyCode', event.keyCode);
	console.log('	direction', direction);
	
	switch (event.keyCode) {
		case 37: 
			if (direction == [0, 1]) {
				break;
			} else direction = [0, -1];
			break;
		case 38: 
			if (direction != [1, 0]) {
				direction = [-1, 0];
			}
			break;
		case 39: 
			if (direction != [0, -1]) {
				direction = [0, 1];
			}
			break;
		case 40: 
			if (direction != [-1, 0]) {
				direction = [1, 0];
			}
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