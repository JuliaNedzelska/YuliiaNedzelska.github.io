const opts = {
	dotsAmount: 5,
	xFieldSize: 1000,
	yFieldSize: 1000,
	defaultRadius: 2,
}

Circle = function() {
    this.cx = Math.random() * opts.xFieldSize; 
    this.cy = Math.random() * opts.yFieldSize;
    this.r = opts.defaultRadius;
    this.className = 'dot';
    // this.draw = function() {

    // }
}

function createArray() {
	dots = [];
	for (var i = 0; i < opts.dotsAmount; i++) {
			dots.push( new Circle() );
		}
	console.log('Func createDotsArray', dots);
	return dots;
}
 function placeDotsOnSvgArea() {
    var svgArea = d3.select('body').append('svg')
        .attr("width",  250)
        .attr("height", 250);
    console.log('Func createDotsArray, svgArea', svgArea);
    svgArea.append('g')
    	.append('circle')
        .attr("x", 50)
        .attr("y", 50)
        .attr("r", 5)
        .attr("width",  20)
        .attr("height", 20);
 }

function hoverDot(event) {
	let dotOnHover = event.target;
	if(dotOnHover.className = 'dot') {
		dotOnHover.classList += 'hover';
	}
	onsole.log('Func hoverDot', dotOnHover);
}

function pressDot(event) {
	let dotPressed = event.target;
	if(dotOnHover.className = 'dot') {
		dotOnHover.classList += 'pressed';
	}
	console.log('Func pressDot', dotPressed);
}

// dotsArray.addEventListener('click', pressDot);
// dotsArray.addEventListener('hover', hoverDot);

var dotsArray = createArray();
placeDotsOnSvgArea();

