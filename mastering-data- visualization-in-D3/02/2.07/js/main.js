/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

d3.json("data/ages.json").then(data => {
	data.forEach(el => {
		el.age = Number(el.age);
	})

	const svg = d3.select("#chart-area").append("svg")
		.attr("width", 800)
		.attr("height", 800)

	const circles = svg.selectAll("circle")
		.data(data)

	circles.enter().append("circle")
		.attr("cx", (d, i) => (i + 1) * 50)
		.attr("cy", 250)
		.attr("r", d => d.age * 2)
		.attr("fill", d => {
			if (d.name === "Tony") {
				return "blue";
			} else {
				return "red";
			}
		})
}).catch(error => {
	console.log(error);
})

