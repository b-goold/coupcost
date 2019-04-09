var flag_tooltip = d3.select('.container')
	.append('div')
	.style("position", "absolute")	
	.style("z-index","10")	
	.style("padding","10px 10px")	
	.style("background","rgba(0,0,0,0.7)")	
	.style("color","white")	
	.style("visibility","hidden");
	
/*  var flag_infobox = d3.select('.container')
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
  */
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
			//If coup is success or failure (ie; *not* just planned*)
			if (d.coups[i].outcome == "1" || d.coups[i].outcome == "2") {
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
						.attr("data-country", d.alpha_country)
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
						//.style("filter", "drop-shadow(0 0 8px "  + getBorder(d.coups[i].outcome) + ") ")
				}
				else if(1969 < d.coups[i].year && d.coups[i].year < 1980) {
						d3.select('.tr-1970')
						.insert('img',':nth-child(' + (1 + getNearestDate('tr-1970',timestamp)) + ')')
						.attr("src", d.flag_url)
						.attr("class", "flag")
						.attr("alt", d.alpha_country + ", " + d.coups[i].year)
						.attr("data-code", d.code)
						.attr("data-country", d.alpha_country)
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
						.attr("data-country", d.alpha_country)
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
						.attr("data-country", d.alpha_country)
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
						.attr("data-country", d.alpha_country)
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
						.attr("data-country", d.alpha_country)
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
		
/* 		//Plotted
		case "3":
			colour = "blue"
			break;
			
		//Alleged
		case "4":
			colour = "yellow"
			break; */
		}
		return colour
	}
	
	function drawGraph(countryCode, coupDate) {
		// set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 50, left: 100},
			width = 1200 - margin.left - margin.right,
			height = 480 - margin.top - margin.bottom;

		// parse the date / time
		var parseTime = d3.timeParse("%Y");
		var parseFullDate = d3.timeParse("%Y/%m/%d");

		// set the ranges
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);
		
		var selector = document.getElementById("selector");
		var selectedData = selector.options[selector.selectedIndex].dataset.file;
		
		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
			
		//var graphContainer = d3.select("#overlay").append("div")
		//	.attr("id","graphContainer")
		//	.attr("class","child")
		//	.style("background","white");
		
		//append SVG canvas
		var svg = d3.select("#overlay").append("svg")
			.attr("id","canvas")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.attr("class","child noProp")
			.style("background-color","white")
			//append group to contain graph
			.append("g")
			.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");
			
			//append box containing info + data selector
			var infoBarHeight = 100;
			d3.select("#infoBar")
				.style("height", infoBarHeight + "px" )
				.style("width", ( width + margin.left + margin.right ) + "px" )
				.style("margin","-" + (height + margin.top + margin.bottom + infoBarHeight) / 2 + "px auto 0")
				.style("paddingBottom", "20px")
				.style("display","block")
				.style("visibility","visible");
			
			//Draw the content of the graph
			drawContent(selectedData);
			
		// Get the data and update the graph
			d3.select("#selector")
				.on("change", function() {
				selectedData = this.options[this.selectedIndex].dataset.file;
				drawContent(selectedData);
		});
		
		function drawContent(selectedData) {
			d3.csv("js/data/" + selectedData, function(error, data) {
			  if (error) throw error;

		//Fliter criteria
			var newData = data.filter(filterCriteria);
			function filterCriteria(d) {
			if(d['Country Code'] == countryCode)
				return d;
			}
			
			//Extract the years and values from the filtered data
			//Getting years from filtered array keys
			var xVal = Object.keys(newData[0]);
			xVal.length = (xVal.length) - 4; //Removes the non-numerical keys, which just happen to be at the end of the array. Leaves us with just the years.
			
			//Getting values from filtered array
			var yVal = Object.values(newData[0]);
			yVal.length = (yVal.length) - 4;
			
			//Merge both x and y arrays into one object
			var dataset = xVal.map(function(v,i) {
				return { year: v, value: yVal[i] };
			});
						
			//Define line			
			var valueline = d3.line()
				.defined(function(d) {return d.value != 0; })	//ensures only non-zero results are displayed
				.x(function(d) { return x(d.year); })
				.y(function(d) { return y(d.value); });
			
			// format the data from String to date and number, as D3 takes all values from CSV as string
			dataset.forEach(function(d) {
				d.year = parseTime(d.year);
				d.value = +d.value;
				});

			// Scale the range of the data
			var ymin = d3.min(dataset, function(d) {return d.value; }),
				ymax = d3.max(dataset, function(d) {return d.value; });
			x.domain(d3.extent(dataset, function(d) {return d.year; }));
			y.domain([ymin - (Math.abs(ymin * 0.1)), ymax + (Math.abs(ymax * 0.1))]);
			
			//#TODO (maybe): Implement function to set appropriate range min and units within a certain window of time around the coup
			
			//Determine domain / range of dataset
/* 			var minDomain;
			var maxDomain;
			var coupYear = coupDate.getFullYear();
			
			if(coupYear > 1964)
				minDomain = new Date( (coupYear - 5) + "-01-01") ;
			else
				minDomain = new Date("1960-01-01")
			
			if(coupYear < 2008)
				maxDomain = new Date((coupYear + 10)  + "-12-31");
			else
				maxDomain = new Date("2018-12-31"); */
			
			//Set domain accordingly
			//x.domain([minDomain, maxDomain]);
			//Find appropriate min/max range for given domain (use d3.bisect?)
			//y.domain([d3.min(dataset, function(d) {return d.value;}), d3.max(dataset, function(d) {return d.value; })]);
			
			//Remove any exiting graph content before appending new
			d3.selectAll(".graphcontent").remove();
			
			// Add the valueline path.
			svg.append("path")
			  .data([dataset])
			  .attr("d", valueline)
			  .attr("class", "line graphcontent")
			  
			//Add a vertical line on the graph to signifiy the relevant coup date
			svg.append("line")
				.attr("class","graphcontent")
				.attr("x1", x(coupDate))
				.attr("y1", 0)
				.attr("x2", x(coupDate))
				.attr("y2", height)
				.style("stroke-width", 3)
				.style("stroke", "red")
				.style("fill", "none");

			// Add the X Axis
			svg.append("g")
				.attr("class","graphcontent")
				.attr("transform", "translate(0," + height + ")")
				.call(d3.axisBottom(x));
			
			//Add the X Axis label
			svg.append("text")
				.attr("transform", "translate(" + (width/2) + ","
						+ (height + margin.top + 20) + ")")
				.style("text-anchor", "middle")
				.style("color","black")
				.text("Year");

			// Add the Y Axis
			svg.append("g")
				.attr("class","graphcontent")
				.call(d3.axisLeft(y));
				
			// Add the Y Axis label
			svg.append("text")
				.attr("class","graphcontent")
		      .attr("transform", "rotate(-90)")
			  .attr("y", 0 - margin.left)
			  .attr("x",0 - (height / 2))
			  .attr("dy", "1em")
			  .style("fontSize","10px")
			  .style("text-anchor", "middle")
			  .text(selector.options[selector.selectedIndex].dataset.label);      
			});
		}
	}
	
	// Apply hover functionality
	d3.selectAll('.flag')
	.style("margin","10px")
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
		
		//Populate infoBar fields
		d3.selectAll(".country")
			.text(this.dataset.country);
			
		d3.selectAll(".date")
			.text(this.dataset.day + "-" + this.dataset.monthstring + "-" + this.dataset.year);
			
		d3.selectAll(".leader")
			.text(this.dataset.leader);
			
		d3.selectAll(".deaths")
			.text(this.dataset.deaths);
		
		if(this.dataset.outcome == "1")
			d3.selectAll(".outcome").text("Yes");
		else
			d3.selectAll(".outcome").text("No");
			

		if(this.dataset.arc == "1")
			d3.selectAll(".arc").text("Yes");
		else
			d3.selectAll(".arc").text("No");
		
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
		
		//Assign click behaviour to elements within overlay to prevent click bubbling up to parent
		var noProp = document.getElementsByClassName("noProp");
		for (var i = 0; i < noProp.length; i++) {
			noProp[i].addEventListener("click", noPropClick, false);
		}
		
		d3.select('.infoBox')
		.style("visibility","hidden");
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
	
	//Child click behaviour. Stops click bubbling to parent.
	function noPropClick(e) {
		e.stopPropagation();
	}
	
});