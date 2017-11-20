var circleData = fillTheDataAttay(0, 600, 150);
console.log('WINDOW - circleData', circleData);

var margin = { top: 40, right: 20, bottom: 20, left: 40 },
  	radius = 4;

function fillTheDataAttay(minValue, maxValue, arrayLength) {
	var tempDataArray = [];
	for (var i = 0; i < arrayLength; i++) {
		tempDataArray[i] = {};
		tempDataArray[i].x = Math.round((Math.random() * maxValue) - minValue);
		tempDataArray[i].y = Math.round((Math.random() * maxValue) - minValue);
	}
	console.log('FUNC fillTheDataAttay - x', tempDataArray[arrayLength-1].x);
	console.log('FUNC fillTheDataAttay - y', tempDataArray[arrayLength-1].y);

	return tempDataArray;
}

var svg = d3.select("body").append("svg")
		.attr("width", window.innerWidth)
		.attr("height", window.innerHeight);

var circles = svg.selectAll("circle")
				.data(circleData)
				.enter()
				.append('circle')
				.attr('cx', function(d) { return d.x; })
				.attr('cy', function(d) { return d.y; })
				.attr('r', radius)
				.attr('fill', '#0091ce')
				// .attr("stroke-width", 1)
				// .attr("stroke", "white")
				.on('click', handleOnClick)
				.on('mouseover', handleMouseOver)
				.on('mouseout', handleMouseOut);

function handleOnClick(p, j) {
	var self = this;

	circles.each(function(d, i) {

  	console.log('FUNC handleOnClick - Main Circle', p);
  	console.log('FUNC handleOnClick - Neighbor Circle', d);
  	console.log('___________________________');

	var distanceBetweenPoints = Math.sqrt(Math.pow(d.x - p.x, 2) + Math.pow(d.y - p.y, 2));
	console.log('FUNC handleOnClick - distanceBetweenPoints', distanceBetweenPoints );

		if(distanceBetweenPoints <= 100) {
			d3.select(self)
				.transition()
				.attr("class", "clicked")
				.attr('fill', 'white')
				.attr('r', radius);

			d3.select(this)
				.transition()
				.attr("class", "clicked")
				.attr('fill', 'white');
		}
    });
}

function handleMouseOver(d, i) {
	var currentCircle = d3.select(this);
	if ( currentCircle.attr('class') == 'clicked' ) {
		currentCircle.transition()
					 .attr('r', radius*2);
		return;
	}
    currentCircle.transition()
			     .attr('fill', '#0091ce')
			     .attr('r', radius*2);
}

function handleMouseOut(d, i) {
	var currentCircle = d3.select(this);
	console.log('FUNC handleMouseOut - check ClassName', currentCircle.attr('class') );
	if ( currentCircle.attr('class') == 'clicked' || currentCircle.attr('r') == radius*2 ) {
		currentCircle.transition()
	      			 .attr('r', radius);
		return;
	} else {
		currentCircle.transition()
	    			 .attr('fill', '#0091ce')
	    			 .attr('r', radius);
	}
}
