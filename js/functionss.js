function saveData(data, dataType) {
	sessionStorage.setItem(dataType, data);
}

function restoreHTML(numberOfRows, grades, weight) {
	var arrayGrades = JSON.parse(grades);
	var arrayWeight = JSON.parse(weight);
	$(".row-container div:first-child input.left-input").val(arrayGrades[0]);
	$(".row-container div:first-child input.right-input").val(arrayWeight[0]);
	for (i = 1; i < numberOfRows; i++) {
		$(".row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'></div>");
		$(".row-container div:last-child input.left-input").val(arrayGrades[i]);
		$(".row-container div:last-child input.right-input").val(arrayWeight[i]);
	}
}

$(document).ready(function() {
	var numberOfRows = 1;
	var storedGrades = sessionStorage.getItem("grades");
	var storedWeight = sessionStorage.getItem("weight");
	var storedRows = sessionStorage.getItem("rows");
	if (storedRows !== null && storedWeight !== null && storedGrades !== null) {
		numberOfRows = sessionStorage.getItem("rows");
		restoreHTML(numberOfRows, storedGrades, storedWeight);
	}

	window.setInterval(function(){
		var grades = [];
		var weight = [];
		var gradeValue, weightValue;
		$(".row-container div").each(function() {
			gradeValue = ($(this).find("input.left-input").val());
			weightValue = ($(this).find("input.right-input").val());
			if (gradeValue.length !== 0) {
				gradeValue = parseFloat(gradeValue);
			}
			if (weightValue.length !== 0) {
				weightValue = parseFloat(weightValue);
			}
			grades.push(gradeValue);
			weight.push(weightValue);
		});
		saveData(JSON.stringify(weight), "weight");
		saveData(JSON.stringify(grades), "grades");
		saveData(numberOfRows, "rows");
	}, 1000);

	$("#add").click(function() {
		if (numberOfRows < 9) {
			$(".row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'></div>");
			numberOfRows++;
		}
	});
	
	$(".row-container").on('blur','.mark-row:last-child input.right-input',function() {
		setTimeout(function () {
			if (document.activeElement.id == "add" && numberOfRows < 9) {
				$(".row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'></div>");
				$(".mark-row:last-child input.left-input").focus();
				numberOfRows++;
			}
		}, 0);
	});
	
	$("#calculate").click(function() {
		var grades = [];
		var weight = [];
		var totalWeight = 0;
		var totalGrades = 0;
		var average;
		$(".row-container div").each(function() {
			var gradeValue, weightValue;
			gradeValue = ($(this).find("input.left-input").val());
			weightValue = ($(this).find("input.right-input").val());
			if (gradeValue.length !== 0) {
				gradeValue = parseFloat(gradeValue);
			}
			if (weightValue.length !== 0) {
				weightValue = parseFloat(weightValue);
			}
			if (gradeValue.length !== 0 && weightValue.length !== 0) {
				totalWeight += weightValue;
			}
			grades.push(gradeValue);
			weight.push(weightValue);
		});
		for (i = 0; i < grades.length; i++) {
			if (grades[i].length !== 0 && weight[i].length !== 0) {
				totalGrades += grades[i]*(weight[i] / 100);
			}
		}
		average = totalGrades / (totalWeight / 100);
		$("#result").text("Your Average is: " + average);
		saveData(JSON.stringify(weight), "weight");
		saveData(JSON.stringify(grades), "grades");
		saveData(numberOfRows, "rows");
	});
});