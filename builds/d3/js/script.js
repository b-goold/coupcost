var flag_tooltip = d3.select('.container')
	.append('div')
	.style("position", "absolute")	
	.style("z-index","10")	
	.style("padding","10px 10px")	
	.style("background","rgba(0,0,0,0.7)")	
	.style("color","white")	
	.style("visibility","hidden");
	
var flag_infobox = d3.select('.container')
.append('div')
.attr("class","infoBox")
.style("position", "absolute")
.style("z-index","20")
.style("padding","10px 10px")
.style("background","rgba(0,0,0,1)")
.style("color","white")
.text("info here")
.style("visibility","hidden")
.append('button')
.attr("class","dataButton")
.text("Explore Data");

//Var used to store selected country code and coup date
var selectedCode;
var coupDate;
	
d3.json("js/data/coupdata.json", function(data) {
	
	// Iterate through each decade and write info to table
	// #TODO - Add borders to indicate outcome
	// #TODO - Add click functionality (last)
	
	var firstFlag = true;
	
	//Populating table
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
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
					//This gives a nice glow border but is very laggy on hover becuase whenever the border moves it must be recalculated (this includes all neighbouring borders that are pushed
					//Will think of a way to optimise this
					//.style("filter", "drop-shadow(0 0 3px "  + getBorder(d.coups[i].outcome) + ")")
			}
			else if(1969 < d.coups[i].year && d.coups[i].year < 1980) {
					d3.select('.tr-1970')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1970',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
			}
			else if(1979 < d.coups[i].year && d.coups[i].year < 1990) {
					d3.select('.tr-1980')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1980',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
			}
			else if(1989 < d.coups[i].year && d.coups[i].year < 2000) {
					d3.select('.tr-1990')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-1990',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
			}
			else if(1999 < d.coups[i].year && d.coups[i].year < 2010) {
					d3.select('.tr-2000')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-2000',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
			}
			else if(2009 < d.coups[i].year && d.coups[i].year < 2020) {
					d3.select('.tr-2010')
					.insert('img',':nth-child(' + (1 + getNearestDate('tr-2010',timestamp)) + ')')
					.attr("src", d.flag_url)
					.attr("class", "flag")
					.attr("alt", d.alpha_country + ", " + d.coups[i].year)
					.attr("data-code", d.code)
					.attr("data-timestamp", timestamp)
					.attr("data-month", d.coups[i].month)
					.attr("data-monthString", new Date(date).toLocaleString('en-US', {month : 'short'}))
					.attr("data-day", d.coups[i].day)
					.attr("data-year", d.coups[i].year)
					.attr("data-outcome", d.coups[i].outcome)
					.attr("data-leader", d.coups[i].leader)
					.attr("data-deaths", d.coups[i].deaths)
					.attr("data-arc", d.coups[i].arc)
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
	
	//Determine what colour flag border based on outcome
	function getBorder (outcome) {
		var colour;
		
		switch(outcome) {
		
		//Succesful
		case "1":
			colour = "green"
			break;
		
		//Failed
		case "2":
			colour = "red"
			break;
		
		//Plotted
		case "3":
			colour = "blue"
			break;
			
		//Alleged
		case "4":
			colour = "yellow"
			break;
		}
		return colour
	}
	
	function drawGraph(countryCode, coupDate) {
		// set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 30, left: 50},
			width = 960 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;

		// parse the date / time
		var parseTime = d3.timeParse("%d-%b-%y");

		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

		// define the line
		var valueline = d3.line()
			.x(function(d) { return x(d.date); })
			.y(function(d) { return y(d.close); });

		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
			
		//var graphContainer = d3.select("#overlay").append("div")
		//	.attr("id","graphContainer")
		//	.attr("class","child")
		//	.style("background","white");
				
		var svg = d3.select("#overlay").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.attr("class","child")
			.style("background-color","white")
				
		//d3.select('rect')
		  .append("g")
		//.attr("z-index",99)
			.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");
			
		// Get the data
			d3.csv("js/data/GDP (current US$).csv", function(error, data) {
			  if (error) throw error;

		//Fliter criteria
			var newData = data.filter(filterCriteria);
			function filterCriteria(d) {
			if(d['Country Code'] == countryCode)
				return d;
			}
			//Do something with the filtered data
			//...
			console.log(newData);
			
			//Determine domain / range of dataset
			var minDomain;
			var maxDomain;
			var coupYear = coupDate.getFullYear();
			
			if(coupYear > 1964)
				minDomain = coupYear - 5;
			else
				minDomain = 1960
			
			if(coupYear < 2008)
				maxDomain = coupYear + 10;
			else
				maxDomain = 2018;
			
			// format the data
			//data.forEach(function(d) {
			//	d.date = parseTime(d.date);
			//	d.close = +d.close;
			//	});

			// Scale the range of the data
			x.domain(d3.extent(minDomain, maxDomain));
			
			//TODO: Implement function to set appropriate range min and units
			y.domain([0, d3.max(newData)]);

			//TODO: Read up on SVG pathing and figure out how to handle input data
			// Add the valueline path.
			svg.append("path")
			  .data([data])
			  .attr("class", "line")
			  .attr("d", valueline);

			// Add the X Axis
			svg.append("g")
				.attr("transform", "translate(0," + height + ")")
				.call(d3.axisBottom(x));

			// Add the Y Axis
			svg.append("g")
				.call(d3.axisLeft(y));

			});
	}
	
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
	.on('click', function(d) {
		selectedCode = this.dataset.code;
		selectedDate = new Date(this.dataset.year + "/" + this.dataset.month + "/" + this.dataset.day);

		d3.select('.infoBox')
		.style("top",(d3.event.pageY-20)+"px")
		.style("left",(d3.event.pageX+20)+"px")
		.style("visibility","visible");
	})
	
	//call graph on data button click
	d3.select('.dataButton')
	.on('click', function(d) {
		d3.select('#overlay')
		.style("display","block");
		drawGraph(selectedCode, selectedDate);
	})
	
	d3.select('#overlay')
	.on('click', function(d) {
		d3.select(this)
		.style("display","none");
		
	//Remove overaly child elements to prevent doubling up
	var children = document.getElementsByClassName("child");
	for(i=0;i<children.length;i++)
		{
			children[i].remove();
		}
	
		selectedCode = null;
		selectedDate = null;
	})
	
});