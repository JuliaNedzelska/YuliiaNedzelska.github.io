var mineralWaterTitle = document.getElementById('title-mineral');
var sweetWaterTitle = document.getElementById('title-sweet');
 
// object contains countCoins, mineralWaterTitleState and sweetWaterTitleState variables
//
var machina = {
	countCoins: 0,
	currentState: 'InitialState',
	mineralWaterTitleState: 'disable',
	sweetWaterTitleState: 'disable',

	//adds coins to this countCoins variable
	addCoins: function(count) {
		console.log('Func GetCoins \n 	CountCoins - ', this.countCoins);
		console.log('	CurrentState - ', this.currentState);
		this.countCoins += count;
	},

	//changes current state based on countCoins value
	//if countCoins = 0 && countCoins = 1, state will be - NeedCoins
	//if countCoins = 2 state will be - MineralWaterState
	//if countCoins = 3 state will be - SweetWaterState
	//if countCoins > 3 state will be - End
	changeState: function() {
		console.log('Func ChangeState \n 	CurrentState - ', this.currentState);
		console.log('	CountCoins - ', this.countCoins);
		switch(this.countCoins) {
			case 1: this.currentState = 'NeedCoins';
				break;
			case 2: this.currentState = 'MineralWaterState';
					console.log('	mineralWaterTitle - ', mineralWaterTitle.id);
					this.mineralWaterTitleState == 'active';
					switchLightMineralTitle();
				break;
			case 3: this.currentState = 'SweetWaterState';
					console.log('	mineralWaterTitle - ', mineralWaterTitle.id);
					if(this.mineralWaterTitleState == 'disable') {
						switchLightMineralTitle();
						switchLightSweetTitle();
					}
					else switchLightSweetTitle();
				break;
			default: this.currentState = 'End';
			}
		}
};

/**
 * switches the state for mineral water title
 * from disabled to active and back by changing id attribute
 */
function switchLightMineralTitle() {
	if(machina.mineralWaterTitleState == 'disable') {
		machina.mineralWaterTitleState = 'active';
		mineralWaterTitle.id = 'title-mineral-active';
	} else {
		makeDisableTitles();
	}
	console.log('Func switchLightMineralTitle \n 	State ', machina.mineralWaterTitleState);
}

/**
 * switches the state for sweet water title
 * from disabled to active and back by changing id attribute
 */
function switchLightSweetTitle() {
	if(machina.sweetWaterTitleState == 'disable') {
		machina.sweetWaterTitleState = 'active';
		sweetWaterTitle.id = 'title-sweet-active';
	} else {makeDisableTitles();}
	console.log('Func switchLightSweetTitle \n 	State ', machina.sweetWaterTitleState);
}

/**
 * makes all titles disable
 */
function makeDisableTitles() {
	mineralWaterTitle.id = 'title-mineral';
	machina.mineralWaterTitleState = 'disable';
	sweetWaterTitle.id = 'title-sweet';
	machina.sweetWaterTitleState = 'disable';
}

/**
 * choses sweet water by pushing the button
 */
function chooseSweetWater() {
	var sweetWaterPushButton = document.getElementsByClassName('push-button-sweet')[0];
	sweetWaterPushButton.addEventListener("click", function(event) {
		console.log('Func SweetWaterPushButton \n 	Event: ', event);

		if(machina.sweetWaterTitleState == 'active') {
			waterGlass.id = 'glassSweetlWater';
			switchLightSweetTitle();
		}
	});
}

/**
 * choses mineral water by pushing the button
 */
function chooseMineralWater() {
	var mineralWaterPushButton = document.getElementsByClassName('push-button-mineral')[0];
	mineralWaterPushButton.addEventListener("click", function(event) {
		console.log('Func MineralWaterPushButton \n 	Event: ', event);

		if(machina.mineralWaterTitleState == 'active') {
			waterGlass.id = 'glassMineralWater';
			switchLightMineralTitle();
		}
	});
}

/**
 * makes coin disable by clicking on it
 */
function makeDisableCoin(coinValue) {
	var coin1 = document.getElementsByClassName('coin1')[0];
	var coin2 = document.getElementsByClassName('coin2')[0];
	var coin3 = document.getElementsByClassName('coin3')[0];
	console.log('coin1', coin1);
	switch(coinValue) {
		case 1:	coin3.id = ('dis');
			break;
		case 2: coin3.id = ('dis');
				coin2.id = ('dis');
			break;
		case 3: coin1.id = ('dis');
				coin2.id = ('dis');
				coin3.id = ('dis');
				console.log('coin1', );
	}
}

/**
 * changes text phrases by checking @countCoins value
 * @countCoins value can be 0, 1, 2 or 3
 * @text - html element
 * @return -html element by id
 */
function changeTextPhrases(countCoins, text) {
	console.log('Func textPhrases', text.value);
	if ( countCoins == 1) {text.value = 'ДОБАВЬТЕ ЕЩЕ МОНЕТ!';}
	else if(countCoins == 2) {text.value = 'САМОЕ ВРЕМЯ ОСВЕЖИТЬСЯ!';} 
	else if(countCoins == 3) {text.value = 'НА СЛАДЕНЬКОЕ ПОТЯНУЛО?';}
 	return text;
}

/**/
function chooseCoin(coinValue) {
	if(machina.countCoins < 3) {
		machina.addCoins(coinValue);
		makeDisableCoin(machina.countCoins);
		animateText(changeTextPhrases(machina.countCoins, textHelp));
		machina.changeState();
	} else return;
}
	
/**/
function onClickCoins() {
	animateText(changeTextPhrases(machina.countCoins, textHelp));
	var coins = document.getElementsByClassName('coins')[0];
	coins.addEventListener('click', function (event) {
	console.log('Func Start \n 	Element Target: ', event.target.className);
	switch(event.target.className) {
		case 'coin1': chooseCoin(1);
			break;
		case 'coin2': chooseCoin(2);
			break;
		case 'coin3': chooseCoin(3);
			break;
		}
	});
}



/** Entry point */
function start() {
	onClickCoins();
	chooseSweetWater();
	chooseMineralWater();	
}

start();
