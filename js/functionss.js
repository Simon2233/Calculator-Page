$(document).ready(function() {
	var counter = 0;
	$("#add").click(function() {
		if (counter < 9) {
			$("#row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'><\div>");
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