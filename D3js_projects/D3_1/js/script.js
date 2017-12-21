
var margin = {top: 20, right: 20, bottom: 50, left: 70},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
  	radius = 4;

var circleData = fillTheDataAttay(width, height, 150);
console.log('WINDOW - circleData', circleData);

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

/*
 * Creates an array of objects with x and y coordinates
 * @minValue - minimum value of point coordinate
 * @maxValue - maximum value of point coordinate
 * @arrayLength - maximum count of array elements
 * @return - returns array of object with x and y coordinates 
 */
function fillTheDataAttay(xMaxValue, yMaxValue, arrayLength) {
	var tempDataArray = [];
	for (var i = 0; i < arrayLength; i++) {
		tempDataArray[i] = {};
		tempDataArray[i].x = Math.round((Math.random() * xMaxValue) - 0);
		tempDataArray[i].y = Math.round((Math.random() * yMaxValue) - 0);
	}
	console.log('FUNC fillTheDataAttay - last x coord x', tempDataArray[arrayLength-1].x);
	console.log('FUNC fillTheDataAttay - last y coord y', tempDataArray[arrayLength-1].y);

	return tempDataArray;
}

//Create SVG tag and append it to the body
var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	   .append('g')
	   	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//Create g tag and append it to the body
var circlesGroup = svg
				.append('g')
				.attr('class', 'circlesGroup')
				.attr('transform', 'translate(5, -5)');

//Create group of Circles and add them to the circlesGroup
var circles = circlesGroup.selectAll("circle")
				.data(circleData)
				.enter()
				.append('circle')
				.attr('cx', function(d) { return d.x; })
				.attr('cy', function(d) { return d.y; })
				.attr('r', radius)
				.attr('fill', '#0091ce')
				// .attr("stroke-width", 2)
				// .attr("stroke", "white")
				.on('click', handleOnClick)
				.on('mouseover', handleMouseOver)
				.on('mouseout', handleMouseOut);

//Add the x Axis
svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

//Add the y Axis
svg.append('g')
	  .call(d3.axisLeft(y));

svg.selectAll('.domain')
	.styles({
		fill: 'none',
		stroke: '#0091ce',
		'stroke-width': '1'
	});

svg.append('text')
	.styles({

	});

// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "2em")
  .style("text-anchor", "middle");

// var groups = d3.selectAll('g').attr('transform', 'translate(' + margin.left + ')');
// console.log('WINDOW group', group);

//handler for onclick event
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

//handler for moseover event
function handleMouseOver(d, i) {
	var currentCircle = d3.select(this);
	if ( currentCircle.attr('class') == 'clicked' ) {
		currentCircle.transition()
					 .attr('r', radius*2)
					 .attr("stdDeviation","4.5")
					 .attr("result","coloredBlur");
		return;
	}
    currentCircle.transition()
			     .attr('fill', '#0091ce')
			     .attr('r', radius*2);
}

//handler for moseout event
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
