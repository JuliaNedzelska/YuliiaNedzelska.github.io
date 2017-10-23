var MINERAL_WATER = 2;
var SWEET_WATER = 3;

var machina = {
	countCoins: 0,
	currentState: 'InitialState',
	addCoins: function() {
		console.log('Func getCoins \n countCoins - ', this.countCoins);
		console.log('	currentState - ', this.currentState);
		this.countCoins += +prompt('Add coins', 0);
	},
	changeState: function() {
		switch(this.countCoins) {
			case 1: this.currentState = 'NeedCoins';
				getCoins();
				break;
			case 2:
			case 3: this.currentState = 'MakeChoise';
				makeChoise();
		}
	},
	goNext: function() {
		console.log('Func goNext');
		console.log('	currentState - ', this.currentState);
		switch(this.currentState) {
			case 'NeedCoins': getCoins();
				break;
			case 'MakeChoise': makeChoise();
		}
	},
	giveMineralWater: function() {
		console.log('Func giveMineralWater \n countCoins - ', this.countCoins);
		alert('Take your mineral water!');
		this.countCoins = this.countCoins - MINERAL_WATER;
	},
	giveSweetWater: function() {
		console.log('Func giveSweetWater \n countCoins - ', this.countCoins);
		alert('Take your sweet water!');
		this.countCoins = this.countCoins - SWEET_WATER;
	}
};


/** Ask user for the coins */
function getCoins() {
	machina.addCoins();
	machina.changeState();
	machina.goNext();
}

/** Defines user choise based on 2 variants:
 *  1 - MineralWater choise
 *  2 - SweetWater choise
 */
function makeChoise() {
	console.log('Func makeChoise');
	var choise = 0;
	if(machina.countCoins == MINERAL_WATER) {
		choise = prompt('Press 1 to choose Mineral water or add more coins to make another choise.', 0);
		if(choise == 1) {
			machina.giveMineralWater();
		}
		else getCoins();
	}
	else if(machina.countCoins == SWEET_WATER ) {
		choise = prompt('Press 1 to choose Mineral water or Press 2 to choose Sweet water.', 0);
		if(choise == 1) {
			machina.giveMineralWater();
		}
		else machina.giveSweetWater();
	}
}

getCoins();