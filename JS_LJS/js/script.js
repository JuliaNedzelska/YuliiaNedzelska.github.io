var MINERAL_WATER = 2;
var SWEET_WATER = 3;

var machina = {
	countCoins: 0,
	getCoins: function() {
		console.log('Func getCoins \n countCoins - ', this.countCoins);
		this.countCoins += +prompt('Add coins', 0);
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
	},
	giveRest: function() {
		console.log('Func giveRest \n countCoins - ', this.countCoins);
		if(this.countCoins != 0) {
			alert('Take your rest, ' + this.countCoins + ' coins!');
		}
	}
};

/** Entry point */
function main() {
	addCoins();
	giveWater(makeChoise());
	machina.giveRest();
}

/** Ask user for the coins */
function addCoins() {
	console.log('Func addCoins');
	while (machina.countCoins < MINERAL_WATER) {
		machina.getCoins();
	}
}

/** Defines user choise based on 2 variants:
 *  @return {number} 1 - MineralWater choise or 2 - SweetWater choise
 */
function makeChoise() {
	var choise = 0;
	if(machina.countCoins == MINERAL_WATER) {
		choise = prompt('Press 1 to choose Mineral water or add more coins to make another choise.', 0);
	}
	else if(machina.countCoins >= SWEET_WATER ) {
		choise = prompt('Press 1 to choose Mineral water or Press 2 to choose Sweet water.', 0);
	}
	return choise;
}

/** Gives Mineral or Sweet water based on makeChoise function result
 *  @choiseResult {function} - 1 - MineralWater choise or 2 - SweetWater choise
 */
function giveWater(choiseResult) {
		switch(+choiseResult) {
		case 1: machina.giveMineralWater();
				break;
		case 2: machina.giveSweetWater();
	}
}

main();
