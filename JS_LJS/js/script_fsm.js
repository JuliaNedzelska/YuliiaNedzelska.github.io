var waterGlass = document.getElementById('glass');
var mineralWaterTitle = document.getElementById('title-mineral');
var sweetWaterTitle = document.getElementById('title-sweet');

var machina = {
	countCoins: 0,
	currentState: 'InitialState',
	mineralWaterTitleState: 'disable',
	sweetWaterTitleState: 'disable',
	addCoins: function(count) {
		console.log('Func GetCoins \n 	CountCoins - ', this.countCoins);
		console.log('	CurrentState - ', this.currentState);
		this.countCoins += count;
	},
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
		mineralWaterTitle.id = 'title-mineral';
		machina.mineralWaterTitleState = 'disable';
		sweetWaterTitle.id = 'title-sweet';
		machina.sweetWaterTitleState = 'disable';
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
	} else {
		mineralWaterTitle.id = 'title-mineral';
		machina.mineralWaterTitleState = 'disable';
		sweetWaterTitle.id = 'title-sweet';
		machina.sweetWaterTitleState = 'disable';
	}
	console.log('Func switchLightSweetTitle \n 	State ', machina.sweetWaterTitleState);
}

/**
 * switches the state for sweet water title
 * from disabled to active and back by changing id attribute
 */
function chooseSweetWater() {
	var sweetWaterPushButton = document.getElementsByClassName('push-button-sweet')[0];
	sweetWaterPushButton.addEventListener("click", function(event) {
		console.log('Func SweetWaterPushButton \n 	Event: ', event.target.id);
		if(machina.sweetWaterTitleState == 'active') {
			waterGlass.id = 'glassSweetlWater';
			switchLightSweetTitle();
			machina.countCoins -=3;
		}
	});
}

function chooseMineralWater() {
	var mineralWaterPushButton = document.getElementsByClassName('push-button-mineral')[0];
	mineralWaterPushButton.addEventListener("click", function(event) {
		console.log('Func MineralWaterPushButton \n 	Event: ', event.target.id);
		if(machina.mineralWaterTitleState == 'active') {
			waterGlass.id = 'glassMineralWater';
			switchLightMineralTitle();
			machina.countCoins -=2;
		}
	});
}

function onClickCoins() {
	var coins = document.getElementsByClassName('coins')[0];

	coins.addEventListener("click", function(event) {
	console.log('Func Start \n 	Element Target: ', event.target.id);
	switch(event.target.id) {
		case 'coin-1': machina.addCoins(1);
			break;
		case 'coin-2': machina.addCoins(2);
			break;
		case 'coin-3': machina.addCoins(3);
			break;
		}
		machina.changeState();
	});
}

function pushButton() {
	chooseSweetWater();
	chooseMineralWater();	
}

/** Entry point */
function start() {
	onClickCoins();
	pushButton();	
}

start();
