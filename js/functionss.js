$(document).ready(function() {
	var counter = 0;
	$("#add").click(function() {
		if (counter < 10) {
			$("#input-container").append("<div id='left-input-container'><input type='number'></div><div id='right-input-container'><input type='number'></div>");
			counter++;
		}
	});
});