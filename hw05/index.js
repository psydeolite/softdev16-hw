/*data = [42, 15, 17, 21, 60];
d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) {
	return d*10 + "px";
    })
    .text(function(d) {
	return d;
	});*/

console.log('hi');
var delegates = [30,23,50,30,50,28,40,76,42,38,43,58,155,16,49,40,46,46,23,19,32,59,40,19,26,69,72,66,99,52,58,40,42,95,28,16,38,17,19,57,36,34,28,44,172,27,51,24,29];

var states = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Colorado", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "Wyoming", "Guam", "District of Columbia", "Florida", "Illinois", "Missouri", "North Carolina", "N.Marianas", "Ohio", "American Samoa", "Arizona", "Utah", "North Dakota", "Wisconsin", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska", "West Virginia", "Oregon", "Washington", "California", "Montana", "New Jersey", "New Mexico", "South Dakota"];

var pledged = [23,20,50,28,50,28,39,72,42,38,40,58,155,16,46,0,40,46,41,21,23,19,32,42,37,0,11,0,19,99,60,30,71,9,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var makegraph=function() {
    console.log('something!!');
    var graph=d3.select(".chart").selectAll("div").data(delegates)
	.enter().append("div")
	.style("width", function(d, i) {
	    console.log("stylin");
	    if (pledged[i]==0) 
		return d*5 + "px";
	    else
		return pledged[i]*5 + "px";
	})
	.style("background-color", function(d, i) {
	    console.log("stylin again");
	    if (pledged[i]==0)
		return "#737373";
	})
	.text(function(d, i) {
	    console.log('ay');
	    return states[i]+': '+pledged[i]+'/'+delegates[i];
	})
	.attr("class","bar");
	//});
};

//


window.addEventListener('load', makegraph());
