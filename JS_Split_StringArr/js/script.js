main();

function main() {
	// var string = "   ";
	// var splitedArray = split(string, " ");
	testSplit();
}

/*
	this function gets string line and splits it in Two-dimensional array by given character
	@string
	@symb 
*/
function split(string, symb) {
	var listOfSplittedStrings = [];
	var word = '';
	var countOfSplitParts = searchCountOfSplitParts(string, symb);
	var startIndex = 0;

	console.log('Func split');
	console.log('	string.length', string.length);
	console.log('	string =', string);

	if (string.length != 0) {
		for (var i = 0; i <= countOfSplitParts; i++) {
			for (var j = startIndex; j < string.length; j++) {
				if (string[j] != symb) {
					if (string[j] != symb && string[j+1] != symb && string[j+1] != undefined) {
						word += string[j];
						startIndex++;
					}
					else if (string[j+1] == symb || string[j+1] == string[string.length]) {
						word += string[j];
						listOfSplittedStrings[i] = word;
						word = '';
						startIndex++;
						break;
					}
				}
				else {
					if (listOfSplittedStrings == []) {
						startIndex++;
						break;
					}
					startIndex++;
				}
			}
		}
	}
	console.log('	result listOfSplittedStrings', listOfSplittedStrings);
	console.log(' 	-----------------');
	return listOfSplittedStrings;
}
/*
	this function is looking for a count of parts that we need to split the given string
*/
function searchCountOfSplitParts(string, symb) {
	var countOfSplitParts = 1;
	console.log('Func searchCountOfSplitParts');

	for (var i = 0; i < string.length; i++) {
		if (string[i] != symb && string[i+1] == symb && string[i+1] != string.length) {
			for (var j = i+1; j < string.length; j++) {
				if (string[j] == symb && string[j+1] != symb && string[j+1] != undefined || string[j+1] < string.length-1 ) {
					countOfSplitParts++;
					break;
				}
			}
		}	
	}
	console.log('	countOfSplitParts', countOfSplitParts);	
	console.log(' 	-----------------');
	return countOfSplitParts;
}

/*
	test varians
*/
function testSplit() {
	var testResult = 0;
	
	testResult = split('a b', ' ');
		if (testResult.length == 2 && testResult[0] == 'a' && testResult[1] == 'b') {
			console.log('Func testSplit: PASS' );
			console.log(' 	_________________');
		} else {
			console.log('Func testSplit: FAIL:');
			console.log(' 	_________________');
		}

	testResult = split('SpaceAtTheEnd    ', ' ');
		if (testResult.length == 1 && testResult[0] == 'SpaceAtTheEnd') {
			console.log('Func testSplit: PASS' );
			console.log(' 	_________________');
		} else {
			console.log('Func testSplit: FAIL:');
			console.log(' 	_________________');
		}

	testResult = split(' Word ', ' ');
		if (testResult.length == 1 && testResult[0] == 'Word') {
			console.log('Func testSplit: PASS' );
			console.log(' 	_________________');
		} else {
			console.log('Func testSplit: FAIL:');
			console.log(' 	_________________');
		}

	testResult = split('   ', ' ');
		if (testResult.length == 0) {
			console.log('Func testSplit: PASS' );
			console.log(' 	_________________');
		} else {
			console.log('Func testSplit: FAIL:');
			console.log(' 	_________________');
		}

	testResult = split('A few days before she turned 61', ' ');
		if (testResult.length == 7
			&& testResult[0] == 'A'
			&& testResult[1] == 'few'
			&& testResult[2] == 'days'
			&& testResult[3] == 'before'
			&& testResult[4] == 'she'
			&& testResult[5] == 'turned'
			&& testResult[6] == '61') {
			console.log('Func testSplit: PASS' );
			console.log(' 	_________________');
		} else {
			console.log('Func testSplit: FAIL:');
			console.log(' 	_________________');
		}
}


