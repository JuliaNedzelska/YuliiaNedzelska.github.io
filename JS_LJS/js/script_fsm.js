// var waterGlass = document.getElementById('waterGlass');
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
		console.log('Func SweetWaterPushButton \n 	Event: ', event);
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
		console.log('Func MineralWaterPushButton \n 	Event: ', event);
		if(machina.mineralWaterTitleState == 'active') {
			waterGlass.id = 'glassMineralWater';
			switchLightMineralTitle();
			machina.countCoins -=2;
		}
	});
}

function uncloroCoin(coinValue) {
	var coin1 = document.getElementsByClassName('coin1')[0];
	var coin2 = document.getElementsByClassName('coin2')[0];
	var coin3 = document.getElementsByClassName('coin3')[0];
	console.log('coin1', coin1);
	switch(coinValue) {
		case 1:	coin3.style.backgroundImage = 'url(C:/Users/HP/test.github.io/JS_LJS/PNG/dis_k.png)';
			break;
		case 2: coin3.classList.toggle('dis');
			coin2.classList.toggle('dis');
			break; coin2.classList.toggle('dis');
		case 3: coin1.classList.toggle('dis');
			coin2.classList.toggle('dis');
			coin3.classList.toggle('dis');
			console.log('coin1', );
	}
}

function onClickCoins() {
	var coins = document.getElementsByClassName('coins')[0];

	coins.addEventListener("click", function(event) {
	console.log('Func Start \n 	Element Target: ', event.target.id);
	switch(event.target.className) {
		case 'coin1': machina.addCoins(1);
			uncloroCoin(machina.countCoins);
			break;
		case 'coin2': machina.addCoins(2);
			uncloroCoin(machina.countCoins);
			break;
		case 'coin3': machina.addCoins(3);
			uncloroCoin(machina.countCoins);
			break;
		}
		machina.changeState();
	});
}

/** Entry point */
function start() {
	onClickCoins();
	chooseSweetWater();
	chooseMineralWater();	
}

start();
