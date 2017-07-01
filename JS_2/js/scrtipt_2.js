var numConst = 3;
var progTest = {
    header: "Тест",
    question: "Вопрос №",
    answer: " Вариант ответа №",
    getDiv: function(tagName, className) {
        var tag = document.createElement(tagName);
        tag.classList.add(className);
        document.body.appendChild(tag);
    },
    getHeader: function(hNum, selector) {
        var tag = document.createElement(hNum);
        tag.innerHTML = this.header;
        document.querySelector(selector).appendChild(tag);
    },
    getQuestion: function(paragraph, selector, number) {
    	var tag = document.createElement(paragraph);
    	tag.innerHTML = this.question + number + '<br/>';
    	document.querySelector(selector).appendChild(tag);
    },
    getAnswer: function(paragraph, selector, number) {
    	var tag = document.createElement(paragraph);
    	tag.innerHTML = this.answer + number + '<br/>';
    	document.querySelector(selector).appendChild(tag);
    },
    getCheckbox: function(input, selector) {
    	var tag = document.createElement(input);
    	tag.type = 'checkbox';
    	tag.classList = 'checkbox';
    	document.querySelector(selector).appendChild(tag);
    },
    getButton: function(input, selector) {
    	var tag = document.createElement(input);
    	tag.type = 'submit';
    	tag.value = 'Проверить';
    	tag.classList = 'pure-button';
    	document.querySelector(selector).appendChild(tag);
    }
}

function addHeader() {
	progTest.getDiv('div', 'container');
	progTest.getHeader('h1', '.container');
}

function addQuestion(number) {
	progTest.getQuestion('p', 'div', number);
	for (var i = 1; i <= numConst; i++) {
		addAnswer(i);
	}
}

function addAnswer(number) {
	progTest.getCheckbox('input', 'div');
	progTest.getAnswer('span', 'div', number);
}

function addButton() {
	progTest.getButton('input', 'div');
}

function main() {
	addHeader();
	for (var i = 1; i <= numConst; i++) {
		addQuestion(i);
	}
	addButton();
}

main();



