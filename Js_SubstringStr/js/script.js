main();

function main() {
	var subsringPosition = getSubstringPosition('blalala', 'lala');
	testGetSubstringPosition();
}

function getSubstringPosition(string, substring) {
	var position = null;
	var subStrCounter = 0;
	console.log('Func getSubstringPosition');
	console.log('	string & substring', string, substring);

	if (string.length != 0 && substring.length < string.length) {
		for (var i = 0; i < string.length; i++) {
			for (var j = 0; j < substring.length; j++) {
				if (string[i] == substring[j] && position == null) {
					position = i;
				}
				else if (string[i+j] == substring[j]
						&& substring[j] != substring[substring.length-1]
						&& position != null) {

				}
				else if (string[i+j] == substring[j] 
						&& substring[j] == substring[substring.length-1]
						&& position != null) {
							console.log('position', position);
							return position;
				}
				else {
					if (position == null) {
						break;
					}
					else if (position != null) {
						position = null;
						break;
					}
				}
			}
			// console.log('string[i+1]', string[i+1]);
			// console.log('string[j]', string[j]);	
		}
	}
	console.log('position', position);
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

		testResult = getSubstringPosition('  String', 'St');
		if (testResult == 2) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('lalala', 'la');
		if (testResult == 0) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('anotherString', 'nor');
		if (testResult == null) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('If she can do both', 'she');
		if (testResult == 3) {
			testValue = 1;
		} else return testValue = -1;

		testResult = getSubstringPosition('DDDDDD', 'VVVVVVVVVVV');
		if (testResult == null) {
			testValue = 1;
		} else return testValue = -1;

	}
	console.log('TestValue', testValue);
	return testValue;
}