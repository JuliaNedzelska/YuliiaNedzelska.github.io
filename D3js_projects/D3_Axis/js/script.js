var dataset = generateRandomDataset(30);
var w = 700;
var h = 200;
var barPadding = 1;

function generateRandomDataset(maxCountOfElements) {
  var data = [];
  for (var i = 0; i < maxCountOfElements; i++) {
    data.push(Math.floor(Math.random()*150));
  }
  return data;
}

var svg = d3.select("body").append("svg")
    .attr("height", h)
    .attr("width", w);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {return i * (w / dataset.length); })
   .attr("y", function(d) { return h - (d);})
   .attr("width", w/dataset.length - barPadding)
   .attr("height", function(d) { return d * 4; })
   .attr('fill', function(d) {
      return 'rgb(0,' + Math.round(d*1) + ',' + Math.round(d*3) + ')';
   })
;

svg.selectAll('text')
  .data(dataset)
    .enter()
    .append('text')
    .text(function(d){ return d; })
    .attr('x', function(d, i) { return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;})
    .attr("y", function(d) { return h - (d-15); })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle");