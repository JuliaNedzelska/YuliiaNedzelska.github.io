
main();

function main() {
	createGameField();
}

//game field creating
function createGameField() {
    console.log('Func createGameField');

    for (var i = 0; i < 7; i++) {
        document.getElementById('game').innerHTML += '<div class="row"></div>';
        for (var j = 0; j < 7; j++) {
        	document.getElementsByClassName('row')[i].innerHTML += '<div class="cell"></div>';
        }
    }
    console.log('	game', game);
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
		console.log('	=========');
		console.log('	GAME OVER');
		}
	}, 1000);
}
