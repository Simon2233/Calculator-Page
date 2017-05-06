$(document).ready(function() {
	var counter = 0;
	$("#add").click(function() {
		if (counter < 10) {
			$("#input-container").append("<div class='left-input-container'><input type='number' class='grades'></div><div class='right-input-container'><input type='number' class='weight'></div>");
			counter++;
		}
	});
	$("#calculate").click(function() {
		var grades = [];
		var weight = [];
		$("div.left-input-container").each(function() {
			var inputValue;
			inputValue = ($(this).find("input.grades").val());
			console.log(inputValue);
		});
	});
});