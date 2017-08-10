function main() {
	// getSubstringPosition('String', 'ing');
	testGetSubstringPosition();
}

function getSubstringPosition(string, substring) {
	return position;
}

function testGetSubstringPosition() {
	var testResult = 0;

	if (true) {

		testResult = getSubstringPosition('String', 'St');
		if (testResult == 0) {
			continue;
		}

		testResult = getSubstringPosition('  String', ' St');
		if (testResult == 2) {
			continue;
		}

		testResult = getSubstringPosition('lalala', 'la');
		if (testResult == 0) {
			continue;
		}

		testResult = getSubstringPosition('anotherString', 'not');
		if (testResult == null) {
			continue;
		}

		testResult = getSubstringPosition('    ', 'do');
		if (testResult == null) {
			continue;
		}

		testResult = getSubstringPosition('AB', 'CCCCC');
		if (testResult == null) {
			continue;
		}
		return console.log('Func testSplit: PASS\n _________________' );
	}

	else return console.log('Func testSplit: FAIL\n _________________' );
}