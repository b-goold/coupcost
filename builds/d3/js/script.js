var flags =	[ "https://www.countryflags.io/be/flat/64.png",
			"https://www.countryflags.io/au/flat/64.png"
]

<!-- Determine num table rows/columns -->

var years = [
  { year: '1960s', country: flags[0]},
  { year: '1970s', country: flags[1]}
];

var flagMargin = '16px 10px',
	flagHovMargin = '0px 10px';

d3.select('tbody')
  .selectAll('tr')
  .data(years)
  .enter().append('tr')
  .html(function(d) {
    return '<th scope="row" class="year" width="20%">' + d.year + '</th>'
			+ '<img class="flag" src=' + d.country + ' alt = "">'
				+ '<img class="flag" src=' + d.country + ' alt = "">'
  })

d3.select('tbody')
	.selectAll('img')
	.style('margin',flagMargin)
	.on('mouseover', function(d) {
		d3.select(this)
		.transition()
		.duration(300)
		
		.style('margin',flagHovMargin)
		.style('height','80px')
		.style('width','80px')
	})
	.on('mouseout', function(d) {
		d3.select(this)
		.transition()
		.duration(300)
		.style('height','64px')
		.style('width','64px')
		.style('margin',flagMargin)
	})