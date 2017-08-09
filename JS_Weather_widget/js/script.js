main();

function main() {

    // the main block that shows us today weather and temperature
    createNewElement('wrapper', 'div', 'todayDay');

    createElementsList(createNewElement('wrapper', 'div', 'container'), 'div', 'weatherBlockBg', 18);
    combineBlockElementWithTemperature();
    moveElements();
    getBlockPosition('weatherBlockBg');
}

/* this function creates a new html element witn id and appended it to the parentElement
    @parentElement - 
    @element - new element by Tag
    @elementId - new id for new element
*/
function createNewElement(parentElement, element, elementId) {
    var newElement = document.createElement(element);
    newElement.id = elementId;

    var parentElement = document.getElementById(parentElement);
    parentElement.appendChild(newElement);
    return newElement;
}

/* this function creates set of new html elements and added theirs new class names and appended it to the parentElement
    @parentElement - 
    @elementTag - new element by Tag
    @countOfElements - number of elements that we want to create
*/
function createElementsList(parentElement, elementTag, className, countOfElements) {
    console.log('Func createElementsList: element -', elementTag);

    for (var i = 0; i < countOfElements; i++) {
        var newElementBlock = document.createElement(elementTag);
        newElementBlock.className = className;
        parentElement.appendChild(newElementBlock);
    }
}

function getTodayDay(element) {
    var className = element.classList[1];
    element.classList.remove(className);
    element.classList.add('todayDay');
    console.log('Funct getTodayDay: ', element);
}


/* 
    combines blocks with temperature data in one object
*/
function combineBlockElementWithTemperature() {
    console.log('Func combineNodeWithTexNode');

    var blocksList = document.getElementsByClassName('weatherBlockBg');
    for (var i = 0; i < blocksList.length; i++) {
        addBlockBgColor(blocksList[i].innerHTML = createWeatherTemperature(), i);

    }
}

function getBlockPosition(className) {
    var elem = document.getElementsByClassName(className)[0];
    var position = elem.getBoundingClientRect();
    console.log('Func getBlockPosition:');
    console.log('   position', position);
    return position;
}

function addBlockBgColor(temperature, elementNumber) {
    var blocksList = document.getElementsByClassName('weatherBlockBg');
    if (temperature < 0) {
            blocksList[elementNumber].classList.add('colorBlue');
        } else if (temperature == 0) {
            blocksList[elementNumber].classList.add('colorPink');
        } else blocksList[elementNumber].classList.add('colorYellow');
}

function createWeatherTemperature() {
    var text = randomInteger(-15, 25);
    console.log('Func createWeatherTextNode: temperature - ', text);

    return text;
}

function moveElements() {
    var elem = document.getElementById('container');
    var elemClass = document.getElementsByClassName('weatherBlockBg')[0];
    console.log('   block posotion', elem);
    var position = 0;
    var id = setInterval(frame, 1000);
    function frame() {
        console.log('   elemClass posotion', elemClass.getBoundingClientRect().left);
        console.log('   block posotion', elemClass);
        getTodayDay(elemClass);

        if (position <= -650) {
            clearInterval(id);
        } else {
            position -= 85;
            elem.style.left = position + "px";
        }
    }
}

function changeBgPhotos() {

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

