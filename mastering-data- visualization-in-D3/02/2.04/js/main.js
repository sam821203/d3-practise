/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

const svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 400)

svg.append("rect")
  .attr("width", 80)
  .attr("height", 100)
  .attr("x", 20)
  .attr("y", 40)
  .attr("fill", "blue")

svg.append('circle')
  .attr("cx", 120)
  .attr("cy", 120)
  .attr("r", 25)
  .attr('fill', "purple")

svg.append('line')
  .attr("x1", 185)
  .attr("y1", 250)
  .attr("x2", 240)
  .attr("y2", 320)
  .attr("stroke", "orange")
  .attr("stroke-width", 5)