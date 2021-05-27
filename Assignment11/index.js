
// https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

//Read the data
d3.json('https://api.covid19api.com/total/country/austria', (json) => {
    const data = json.map(item => {
        return {
            date: new Date(item.Date),
            active: item.Active
        }
    });

    // append the svg object to the body of the page
    var svg = d3.select("#line-diagram")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
        .domain(d3.extent(data, function (d) { return d.date }))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.active; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.active) })
        )
});


// https://www.d3-graph-gallery.com/graph/barplot_animation_start.html

d3.json('https://api.covid19api.com/summary', (json) => {

    const data = json.Countries.map((item) => {
        return {
            country: item.Country,
            active: item.TotalConfirmed - (item.TotalRecovered + item.TotalDeaths)
        }
    })
        .sort((a, b) => b.active - a.active)
        .slice(0, 10);

    // append the svg object to the body of the page
    var svg = d3.select("#bar-diagram")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(function (d) { return d.country }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return d.active })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d.country); })
        .attr("width", x.bandwidth())
        .attr("fill", "#69b3a2")
        // no bar at the beginning thus:
        .attr("height", function (d) { return height - y(0); }) // always equal to 0
        .attr("y", function (d) { return y(0); })

    // Animation
    svg.selectAll("rect")
        .transition()
        .duration(800)
        .attr("y", function (d) { return y(d.active); })
        .attr("height", function (d) { return height - y(d.active); })
        .delay(function (d, i) { console.log(i); return (i * 100) })

});
