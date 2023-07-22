/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

const data = [25, 20, 10, 12, 15]

const svg = d3.select("#chart-area").append("svg")
	.attr("width", 800)
	.attr("height", 800)

const circles = svg.selectAll("circle")
	.data(data)

circles.enter().append("circle")
	.attr("cx", (d, i) => (i + 1) * 50)
	.attr("cy", 250)
	.attr("r", (d, i) => (i + 1) * 5)
	.attr("fill", "red")