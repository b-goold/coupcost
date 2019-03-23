var flag_tooltip = d3.select('.container')
	.append('div')
	.style("position", "absolute")
	.style("z-index","10")
	.style("padding","10px 10px")
	.style("background","rgba(0,0,0,0.7)")
	.style("color","white")
	.style("visibility","hidden");

d3.json("js/data/coupdata.json", function(data) {
	
	// Iterate through each decade and write info to table
	// #TODO - Add borders to indicate outcome
	// #TODO - Add click functionality (last)
	
	var firstFlag = true;
	
	data.forEach(function (d) {
		for(var i = 0; i < d.coups.length; i++)
		{
			//Make full date and convert to timestamp for sorting
			var date = d.coups[i].year + "/" + d.coups[i].month + "/" + d.coups[i].day;
			console.log("Date: " + date);
			var timestamp = new Date(date).getTime();
			
			if(1959 < d.coups[i].year && d.coups[i].year < 1970) {
						d3.select('.tr-1960')
						.insert('img',':nth-child(' + (1 + getNearestDate('tr-1960',timestamp)) + ')')
						.attr("src", d.flag_url)
						.attr("class", "flag")
						.attr("alt", d.alpha_country + ", " + d.coups[i].year)
						.attr("data-timestamp", timestamp)					
			}
			else if(1969 < d.coups[i].year && d.coups[i].year < 1980) {
					d3.select('.tr-1970')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1970',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-timestamp", timestamp)					
			}
			else if(1979 < d.coups[i].year && d.coups[i].year < 1990) {
					d3.select('.tr-1980')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1980',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-timestamp", timestamp)
			}
			else if(1989 < d.coups[i].year && d.coups[i].year < 2000) {
					d3.select('.tr-1990')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1990',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-timestamp", timestamp)
			}
			else if(1999 < d.coups[i].year && d.coups[i].year < 2010) {
					d3.select('.tr-2000')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-2000',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-timestamp", timestamp)
			}
			else if(2009 < d.coups[i].year && d.coups[i].year < 2020) {
					d3.select('.tr-2010')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-2010',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-timestamp", timestamp)
			}
		}
	});
	
	//Find nearest date in decade
	function getNearestDate (tableRow,inputDate) {
		
		//For each child in the row, find the nearest date and determine if before or after target date
		var children = document.getElementsByClassName(tableRow)[0].children;
		if(children.length != 1) {
			var smallestMargin;
			var childIndex;
			for(var i = 1; i < children.length; i++) {
				childDate = children[i].dataset.timestamp
				//If smallestMargin hasn't been set yet, set it and the respective child index on the first iteration
				if(smallestMargin == undefined && childDate > inputDate) {
					smallestMargin = childDate - inputDate
					childIndex = i
				}
				else if(smallestMargin == undefined && childDate < inputDate) {
					smallestMargin = inputDate - childDate
					childIndex = i + 1	//+1 because the date is *later* than its nearest neighbour, hence it must be shifted right one
				}
				//Once smallestMargin has been set, check if the current dates have an even smaller margin and set the index accordingly
				else if(childDate - inputDate < smallestMargin && childDate > inputDate) {
					smallestMargin = childDate - inputDate
					childIndex = i
				}
				else if(inputDate - childDate < smallestMargin && childDate < inputDate) {
					smallestMargin = inputDate - childDate
					childIndex = i + 1	//+1 because the date is *later* than its nearest neighbour, hence it must be shifted right one
				}
			}
			//console.log("inserting before position " + (childIndex + 1));
			return (childIndex)
			}
		else
			return 1
	};
	
	// Apply hover functionality
	
	d3.selectAll('.flag')
	.on('mouseover', function(d) {
		d3.select(this)
		.transition()
		.duration(300)

		.style('height','80px')
		.style('width','80px')
		
		flag_tooltip.style("visibility","visible")
		.text(this.alt)
	})
	.on('mousemove', function() {
		flag_tooltip.style("top",(d3.event.pageY-20)+"px")
		.style("left",(d3.event.pageX+20)+"px");
	})
	.on('mouseout', function(d) {
		d3.select(this)
		.transition()
		.duration(300)
		.style('height','64px')
		.style('width','64px')
		
		flag_tooltip.style("visibility","hidden")
	})
	
});
