function run(form) {
	var location = document.getElementById("loc-answer").innerHTML;
	var color = document.getElementById("color-answer").innerHTML;
	var sugar = form.sugar.value;
	var lemon = form.lemon.value;
	var price = form.price.value;
	console.log(location + " " + color + " " + sugar + " " + lemon + " " + price);
	var error = checkForms(location, color, sugar, lemon, price);
	if (error == true) {
		window.scrollTo(0, 0);
		return;
	}
	profit = calculateProfit(location, color, Number(sugar), Number(lemon), Number(price));
	alert(profit);

}

function checkForms(location, color, sugar, lemon, price) {
	var error = false;
	// Check Location
	if (location != "Business District" && location != "School" && location != "Stadium") {
		error = true;
		document.getElementById("loc-error").style.visibility = 'visible';
	} else {
		document.getElementById("loc-error").style.visibility = 'hidden';
	}
	// Check Color
	if (color != "Pink" && color != "Green") {
		error = true;
		document.getElementById("color-error").style.visibility = 'visible';
	} else {
		document.getElementById("color-error").style.visibility = 'hidden';
	}
	// Check Sugar
	if (!sugar || checkNum(sugar)) {
		error = true;
		document.getElementById("sugar-error").style.visibility = 'visible';
	} else {
		document.getElementById("sugar-error").style.visibility = 'hidden';
	}
	// Check Lemon
	if (!lemon || checkNum(lemon)) {
		error = true;
		document.getElementById("lemon-error").style.visibility = 'visible';
	} else {
		document.getElementById("lemon-error").style.visibility = 'hidden';
	}
	// Check Price
	if (!price || checkNum(price)) {
		error = true;
		document.getElementById("price-error").style.visibility = 'visible';
	} else {
		document.getElementById("price-error").style.visibility = 'hidden';
	}
	return error;
}

function checkNum(num) {
	num = Number(num);
	// Not a number, or out of bounds
	if (isNaN(num) || num < 0 || num > 10) {
		return true;
	}
	// Too many decimal places
	if (num * 100 % 10 != 0) {
		return true;
	}
	return false;

}

function calculateProfit(location, color, sugar, lemon, price) {
	var profit;
	switch (location)
		{
			case "Business District":
				switch (color)
				{
					case "Pink":
						profit = Math.max(0, (100 - ((Math.abs(sugar - 1.5)) * 5) - ((Math.abs(lemon - 7.5)) * 5) - ((Math.abs(price - 7.5)) * 5) - 20));
						break;
					case "Green":
						profit = Math.max(0, (100 - ((Math.abs(sugar - 1.5)) * 5) - ((Math.abs(lemon - 7.5)) * 5) - ((Math.abs(price - 7.5)) * 5)));
						break;
					default:
						alert("Argh... broken.");
						break;
				}
				break;
			case "School":
				switch (color)
				{
					case "Pink":
						profit = Math.max(0, (200 - ((Math.abs(sugar - 9.5)) * 6) - ((Math.abs(lemon - 1.5)) * 6) - ((Math.abs(price - 2.5)) * 6)));
						break;
					case "Green":
						profit = Math.max(0, (200 - ((Math.abs(sugar - 9.5)) * 6) - ((Math.abs(lemon - 1.5)) * 6) - ((Math.abs(price - 2.5)) * 6) - 60));
						break;
					default:
						alert("Argh... broken..");
						break;
				}
				break;
			case "Stadium":
				switch (color)
				{
					case "Pink":
						profit = Math.max(0, (60 - ((Math.abs(sugar - 5.5)) * 0.5) - ((Math.abs(lemon - 5.5)) * 0.5) - ((Math.abs(price - 7.5)) * 0.5) - 0.05));
						break;
					case "Green":
						profit = Math.max(0, (60 - ((Math.abs(sugar - 5.5)) * 0.5) - ((Math.abs(lemon - 5.5)) * 0.5) - ((Math.abs(price - 7.5)) * 0.5)));
						break;
					default:
						alert("Argh... broken...");
						break;
				}
				break;
			default:
				alert("Argh, I'm broken!");
				break;
		}
	return profit;
}