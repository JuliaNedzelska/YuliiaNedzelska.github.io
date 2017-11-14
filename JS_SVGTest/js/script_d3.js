var spaceCircles  = [30, 70, 40, 50, 130];

var svgContainer  = d3.select('body').append('svg')
	.attr('width', 500)
	.attr('heigth', 500)
	.style("border", "1px solid black");

//create amount of circles based on amount of array elements
var circles = svgContainer.selectAll("circle")
	.data(spaceCircles)
	.enter()
	.append("circle");

//adding attributes from aray
var circleAttributes = circles
	.attr("cx", function (d) { return d; })
	.attr("cy", function (d) { return d; })
	.attr("r", 10 );
