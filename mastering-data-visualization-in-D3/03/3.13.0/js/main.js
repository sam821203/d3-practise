/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const chartMargin = {
  left: 100,
  right: 10,
  top: 10,
  bottom: 150,
}

const chartWidth = 800 - chartMargin.left - chartMargin.right
const chartHeight = 500 - chartMargin.top - chartMargin.bottom

const svg = d3.select("#chart-area").append("svg")
  .attr("width", chartWidth + chartMargin.left + chartMargin.right)
  .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)

const g = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`)

// 建置群組外的 label
g.append("text")
  .attr("class", "x-axis")
  .attr("x", chartWidth / 2)
  .attr("y", chartHeight + 110)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Month")

g.append("text")
  .attr("class", "y-axis")
  .attr("x", - (chartHeight / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Revenue")

// 取得資料
d3.csv("data/revenues.csv").then(data => {
  data.forEach(d => {
    d.revenue = Number(d.revenue)
  })

  // 建置 bar 的寬度
  const x = d3.scaleBand()
    .domain(data.map(d => d.month))
    .range([0, chartWidth])
    .paddingInner(0.2)
    .paddingOuter(0.2)

  // 建置 bar 的長度
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.revenue)])
    .range(([chartHeight, 0]))


  // 建置 bar 底下線條
  const xAxisCall = d3.axisBottom(x)
  const yAxisCall = d3.axisLeft(y)
    .ticks(data.length * 2)
    .tickFormat(d => "$" + d)

  g.append("g")
    .attr("class", "x-axis-line")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxisCall)
    .selectAll("text")
    .attr("y", "10")
    .attr("text-anchor", "middle")

  g.append("g")
    .attr("class", "y-axis-line")
    .call(yAxisCall)

  const rects = g.selectAll("rect")
    .data(data)

  rects.enter().append("rect")
    .attr("y", d => y(d.revenue))
    .attr("x", (d) => x(d.month))
    .attr("width", x.bandwidth)
    .attr("height", d => chartHeight - y(d.revenue))
    .attr("fill", "#18A558")
})