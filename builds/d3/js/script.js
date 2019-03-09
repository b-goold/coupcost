var flags =	[ "https://www.countryflags.io/be/flat/64.png",
			"https://www.countryflags.io/au/flat/64.png"
]

<!-- Determine num table rows/columns -->

var years = [
  { year: '1960s', country: flags[0]},
  { year: '1970s', country: flags[1]}
];

d3.select('tbody')
  .selectAll('tr')
  .data(years)
  .enter().append('tr')
  .html(function(d) {
    return '<th scope="row">' + d.year + '</th>'
			+ '<img src=' + d.country + ' alt = "">'
  })

d3.select('tbody')
	.selectAll('img')
	.on('mouseover', function(d) {
		d3.select(this)
		.transition()
		.duration(300)
		.style('height','80px')
		.style('width','80px')
	})
	.on('mouseout', function(d) {
		d3.select(this)
		.transition()
		.duration(300)
		.style('height','64px')
		.style('width','64px')
	})