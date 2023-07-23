/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(data => {
  data.forEach((building) => {
    building.height = Number(building.height)
  })

  const svg = d3.select("#chart-area").append("svg")
    .attr("width", 1000)
    .attr("height", 1000)

  const rectangle = svg.selectAll("rect")
    .data(data)

  rectangle.enter().append("rect")
    .attr("x", (_, i) => (i + 1) * 30)
    .attr("y", 20)
    .attr("width", 20)
    .attr("height", d => d.height * 0.5)
    .attr("fill", "tomato")
})

