<<<<<<< HEAD
window.onload = function() {
    var cells = document.getElementsByClassName('block');
    var MAX_CELL_NUMBER = 9;
    var moveCounter = 0;

    createGameField();
    addCellClickHandler();
    // console.log(testWinDirections());

    function createGameField() {
        // create game field
        for (var i = 0; i < MAX_CELL_NUMBER; i++) {
            document.getElementById('game').innerHTML += '<div class="block"></div>';
        }
    }

    function addCellClickHandler() {
        // Start game onclick
        // create a function (create and handle the event)
        document.getElementById('game').onclick = onCellClicked;
    }

    function onCellClicked(event) {
        console.log(event);

        // Defines the step of X or Zeroes by modulo division.
        if (event.target.className == 'block') {

            if (moveCounter % 2 == 0 && !(event.target.innerHTML == '0')) {
                event.target.innerHTML = 'x';
            } else if (moveCounter % 2 == 1 && !(event.target.innerHTML == 'x')) {
                event.target.innerHTML = '0';
            }
            var cellValue = event.target.innerHTML;
            moveCounter++;
            showWinnerMessage(cellValue);
        }
    }

    // Shows congrats message if x or 0 wins 
    function showWinnerMessage(cellValue) {

        console.log('function showWinnerMessage - cellValue', cellValue);
        if (checkWinner(cellValue)) {
            alert(cellValue.toUpperCase() + '-ки выиграли!');
            clearCellss();
        }
    }

    function compareVerticalHorizontalDirections(cellValue, endIndexI, stepI, endIndexJ, stepJ) {
    	for (var i = 0; i < endIndexI; i+=stepI) {
    		var result = true;
    		for (var j = i; j < i+endIndexJ; j+=stepJ) {
    			if(!compareWinState(cellValue, j)) {
            		result = false;
            		break;
    			}
    		}
    	if (result) return result;
    	}
    return result;
	}

	// function testWinDirections (cellValue, firstIndex, secondIndex, thirdIndex) {
	// 	cellValue = 'x';

	// 	cells[0].innerHTML = 'x';  
	// 	cells[1].innerHTML = '0';  
	// 	cells[2].innerHTML = '0';  
	// 	cells[3].innerHTML = '0';  
	// 	cells[4].innerHTML = 'x';  
	// 	cells[5].innerHTML = '0';  
	// 	cells[6].innerHTML = '0';  
	// 	cells[7].innerHTML = '0';  
	// 	cells[8].innerHTML = 'x';
 //    }

    /**
     this function is checking if all сells have the value, equal to cellValue parametr.
     cells to be checked are defined by start index, end index and step go between them
 	 for example if start=0, end=7 and step=4 , we will check cells 0,4,6
 	 @param  start - start index
	 @param end - end index
	 @return true if all checked cell have value cellValue, or false otherwise
    */
    function compareDiagonalDirections(cellValue, startIndex, endIndex, step) {
    	for (var i = startIndex; i < endIndex; i+=step) {
    		var result = true;
    		if(!compareWinState(cellValue, i)) {
    			result = false;
    			break;
    		}
    	}
    	return result;
    }

    // tests all directions for a winner	
    function checkWinner(cellValue) {
    	console.log("function checkWinner");
        console.log('cellValue', cellValue);

        if (compareVerticalHorizontalDirections(cellValue, 7, 3, 3, 1)  				||
        	compareVerticalHorizontalDirections(cellValue, 3, 1, MAX_CELL_NUMBER, 3)	|| 
        	compareDiagonalDirections(cellValue, 0, MAX_CELL_NUMBER, 4)					|| 
        	compareDiagonalDirections(cellValue, 2, 7, 2))
        		return true;
    }

    /**
     is checking for equality of current cellvalue (it can be 'x' or '0') with value of cells.
     @param cellValue
     @param cellId
     @return true if cellValue is equal value of cells
    */
    function compareWinState(cellValue, cellId) {
        console.log("function CompareWinState");
        console.log("cellValue " + cellValue);
        console.log("cellId " + cellId);
        if (cellId < MAX_CELL_NUMBER && cellValue == cells[cellId].innerHTML) {
            return true;
        }
    }

    // Clearing gamefield after the end of the game
    function clearCellss() {
        console.log("function clearCellss");
        for (var i = 0; i < MAX_CELL_NUMBER; i++) {
            cells[i].innerHTML = '';
        }
    }
}
=======
window.onload = function() {
    var cells = document.getElementsByClassName('block');
    var MAX_CELL_NUMBER = 9;
    var moveCounter = 0;

    createGameField();
    addCellClickHandler();
    // console.log(testWinDirections());

    function createGameField() {
        // create game field
        for (var i = 0; i < MAX_CELL_NUMBER; i++) {
            document.getElementById('game').innerHTML += '<div class="block"></div>';
        }
    }

    function addCellClickHandler() {
        // Start game onclick
        // create a function (create and handle the event)
        document.getElementById('game').onclick = onCellClicked;
    }

    function onCellClicked(event) {
        console.log(event);

        // Defines the step of X or Zeroes by modulo division.
        if (event.target.className == 'block') {

            if (moveCounter % 2 == 0 && !(event.target.innerHTML == '0')) {
                event.target.innerHTML = 'x';
            } else if (moveCounter % 2 == 1 && !(event.target.innerHTML == 'x')) {
                event.target.innerHTML = '0';
            }
            var cellValue = event.target.innerHTML;
            moveCounter++;
            showWinnerMessage(cellValue);
        }
    }

    // Shows congrats message if x or 0 wins 
    function showWinnerMessage(cellValue) {

        console.log('function showWinnerMessage - cellValue', cellValue);
        if (checkWinner(cellValue)) {
            alert(cellValue.toUpperCase() + '-ки выиграли!');
            clearCellss();
        }
    }

    function compareVerticalHorizontalDirections(cellValue, endIndexI, stepI, endIndexJ, stepJ) {
    	for (var i = 0; i < endIndexI; i+=stepI) {
    		var result = true;
    		for (var j = i; j < i+endIndexJ; j+=stepJ) {
    			if(!compareWinState(cellValue, j)) {
            		result = false;
            		break;
    			}
    		}
    	if (result) return result;
    	}
    return result;
	}

	// function testWinDirections (cellValue, firstIndex, secondIndex, thirdIndex) {
	// 	cellValue = 'x';

	// 	cells[0].innerHTML = 'x';  
	// 	cells[1].innerHTML = '0';  
	// 	cells[2].innerHTML = '0';  
	// 	cells[3].innerHTML = '0';  
	// 	cells[4].innerHTML = 'x';  
	// 	cells[5].innerHTML = '0';  
	// 	cells[6].innerHTML = '0';  
	// 	cells[7].innerHTML = '0';  
	// 	cells[8].innerHTML = 'x';
 //    }

    /**
     this function is checking if all сells have the value, equal to cellValue parametr.
     cells to be checked are defined by start index, end index and step go between them
 	 for example if start=0, end=7 and step=4 , we will check cells 0,4,6
 	 @param  start - start index
	 @param end - end index
	 @return true if all checked cell have value cellValue, or false otherwise
    */
    function compareDiagonalDirections(cellValue, startIndex, endIndex, step) {
    	for (var i = startIndex; i < endIndex; i+=step) {
    		var result = true;
    		if(!compareWinState(cellValue, i)) {
    			result = false;
    			break;
    		}
    	}
    	return result;
    }

    // tests all directions for a winner	
    function checkWinner(cellValue) {
    	console.log("function checkWinner");
        console.log('cellValue', cellValue);

        if (compareVerticalHorizontalDirections(cellValue, 7, 3, 3, 1)  				||
        	compareVerticalHorizontalDirections(cellValue, 3, 1, MAX_CELL_NUMBER, 3)	|| 
        	compareDiagonalDirections(cellValue, 0, MAX_CELL_NUMBER, 4)					|| 
        	compareDiagonalDirections(cellValue, 2, 7, 2))
        		return true;
    }

    /**
     is checking for equality of current cellvalue (it can be 'x' or '0') with value of cells.
     @param cellValue
     @param cellId
     @return true if cellValue is equal value of cells
    */
    function compareWinState(cellValue, cellId) {
        console.log("function CompareWinState");
        console.log("cellValue " + cellValue);
        console.log("cellId " + cellId);
        if (cellId < MAX_CELL_NUMBER && cellValue == cells[cellId].innerHTML) {
            return true;
        }
    }

    // Clearing gamefield after the end of the game
    function clearCellss() {
        console.log("function clearCellss");
        for (var i = 0; i < MAX_CELL_NUMBER; i++) {
            cells[i].innerHTML = '';
        }
    }
}
>>>>>>> ec28fd88fb3e01fabff89b80330751ce5a6a0e88
