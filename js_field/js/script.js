
main();

function main() {
	createGameField();
}

//game field creating
function createGameField() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
    addBlockStyle();
}

/*
 this function defines class name by random function
 @return - string className
*/
function addBlockStyle() {
	var blocs = document.getElementsByClassName('block');
	for (var i = 0; i < 9; i++) {
		blocs[i].classList.add(defineClassName());
		console.log('blocs[i]', blocs[i]);
	}
}

/*
 this function defines class name by random function
 @return - string className
*/
function defineClassName() {
	var className = '';
	if (getRandomNumber(0, 1) == 1) {
		className = 'concentricStyle';

	} else {
		className = 'commonStyle';
	}
	return className;
}

function getRandomNumber(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

