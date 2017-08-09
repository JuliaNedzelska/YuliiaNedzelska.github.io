function main() {
	// searchSubstringPosition('String', 'ing');
	testSearchSubstringPosition();
}

function searchSubstringPosition(string, substring) {
	return position;
}

function testSearchSubstringPosition() {
	var testResult = 0;

	if (true) {

		testResult = searchSubstringPosition('String', 'St');
		if (testResult == 0) {
			console.log('Func testSplit: PASS\n _________________' );
		} else {
			return console.log('Func testSplit: FAIL\n _________________');
		}

		testResult = searchSubstringPosition('  String', ' St');
		if (testResult == 1) {
			console.log('Func testSplit: PASS\n	_________________' );
		} else {
			return console.log('Func testSplit: FAIL\n _________________');
		}

		testResult = searchSubstringPosition('Lalala', 'la');
		if (testResult == 1) {
			console.log('Func testSplit: PASS\n _________________' );
		} else {
			return console.log('Func testSplit: FAIL\n _________________');
		}

		testResult = searchSubstringPosition('anotherString', 'not');
		if (testResult == 1) {
			console.log('Func testSplit: PASS\n	_________________' );
		} else {
			return console.log('Func testSplit: FAIL\n _________________');
		}

		testResult = searchSubstringPosition('    ', 'do');
		if (testResult == 1) {
			console.log('Func testSplit: PASS\n	_________________' );
		} else {
			return console.log('Func testSplit: FAIL\n _________________');
		}
	}
}