$(document).ready(function() {
	var counter = 0;
	$(".row-container").on('blur','.mark-row:last-child input.right-input',function() {
		setTimeout(function () {
			//alert(document.activeElement.id);
			if (document.activeElement.id == "add" && counter < 9) {
				$(".row-container").append("<div class='mark-row'><input class='left-input' type='number'><input class='right-input' type='number'><\div>");
				$(".mark-row:last-child input.left-input").focus();
				counter++;
			}
		}, 0);
	});
});