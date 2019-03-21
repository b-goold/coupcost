d3.json("js/data/coupdata.json", function(data) {
	
	// Iterate through each decade and write info to table
	// #TODO - Sort by chronological date
	// #TODO - Add tooltips with a bit more info
	// #TODO - Add click functionality (last)
	
	data.forEach(function (d) {
		for(var i = 0; i < d.coups.length; i++)
			if(1959 < d.coups[i].year && d.coups[i].year < 1970) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-1960')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
			else if(1969 < d.coups[i].year && d.coups[i].year < 1980) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-1970')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
			else if(1979 < d.coups[i].year && d.coups[i].year < 1990) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-1980')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
			else if(1989 < d.coups[i].year && d.coups[i].year < 2000) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-1990')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
			else if(1999 < d.coups[i].year && d.coups[i].year < 2010) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-2000')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
			else if(2009 < d.coups[i].year && d.coups[i].year < 2020) {
					console.log(d.alpha_country + ", " + d.coups[i].year + ", " + d.coups[i].leader);
					d3.select('.tr-2010')
					.append('img')
					.attr("src", d.flag_url)
					.attr("class", "flag")
			}
	});
	
	// Apply hover functionality
	
	d3.selectAll('.flag')
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
	
});