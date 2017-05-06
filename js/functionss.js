// function saveData() {
	
// 	return true;
// }

$(document).ready(function() {
	var counter = 0;
	var numberOfRows = 1;
	$("#add").click(function() {
		if (counter < 9) {
			$(".row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'></div>");
			counter++;
		}
	});
	$("#calculate").click(function() {
		var grades = [];
		var weight = [];
		var totalWeight = 0;
		var totalGrades = 0;
		var average;
		$(".row-container div").each(function() {
			var gradeValue;
			var weightValue;
			gradeValue = ($(this).find("input.left-input").val());
			weightValue = ($(this).find("input.right-input").val());
			if (gradeValue.length !== 0 && weightValue.length !== 0) {
				gradeValue = parseFloat(gradeValue);
				weightValue = parseFloat(weightValue) / 100;
				totalWeight += weightValue;
				grades.push(gradeValue);
				weight.push(weightValue);
			}
		});
		for (i = 0; i < grades.length; i++) {
			totalGrades += grades[i]*weight[i];
		}
		average = totalGrades / totalWeight;
		$("#result").text("Your Average is: " + average);
	});
});