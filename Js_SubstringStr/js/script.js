function main() {
	// getSubstringPosition('String', 'ing');
	testGetSubstringPosition();
}

function getSubstringPosition(string, substring) {
	return position;
}

function testGetSubstringPosition() {
	var testResult = 0;
	var testValue = 0;

	if (true) {

		testResult = getSubstringPosition('String', 'St');
		if (testResult == 0) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('  String', ' St');
		if (testResult == 2) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('lalala', 'la');
		if (testResult == 0) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('anotherString', 'not');
		if (testResult == null) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('    ', 'do');
		if (testResult == null) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('AB', 'CCCCC');
		if (testResult == null) {
			testValue = 1;
		} else return testValue = -1;
	}
	return testValue;
}