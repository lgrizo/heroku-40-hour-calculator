function calculateButton() {
	// this gets the value for the "hours planned on working this week" field
	var hoursThisWeek = parseInt(document.getElementById("hoursThisWeek").value);

	// current hours on friday morning
	var fridayMorning = parseInt(document.getElementById("fridayMorning").value);

	// ramaining minutes in decimal form
	var remainingDecimals = parseFloat(document.getElementById("remainingDecimals").value);
	remainingDecimals = Math.round(remainingDecimals * 60);

	// ramaining minutes in decimal form
	var clockedInFri = document.getElementById("enterClockIn").value;

	// ramaining minutes in decimal form
	var lunchBreak = parseInt(document.getElementById("enterLunch").value);

	hoursThisWeek = hoursThisWeek * 60;


	var currentWorked = fridayMorning * 60 + remainingDecimals;
	//
	var currentWorkedMinutes = currentWorked % 60;
	var currentWorkedOutput =
		fridayMorning + " hours " + currentWorkedMinutes + " minutes";
	//
	var remaining = hoursThisWeek - currentWorked;
	if (remaining <= 0) {
		return; //stop the function from executing if user has worked more than planned. You should show a message to the user if he has worked more than planned already
	}
	var remainingHours = Math.floor(remaining / 60);
	var remainingMinutes = remaining % 60;
	var remainingOutput =
		remainingHours + " hours " + remainingMinutes + " minutes";

	clockedInFri = moment(clockedInFri, "hh:mm A");

	var clockOutTime = moment(clockedInFri, "hh:mm A").add(
		remaining + lunchBreak,
		"minutes"
	);
	clockOutTime = clockOutTime.format("hh:mm A");
	//this is to display the current hours worked results
	document.getElementById("currentWorked").innerHTML = currentWorkedOutput;
	//this is to display the remaining hours left results
	document.getElementById("hoursLeftToWork").innerHTML = remainingOutput;
	//this is to display the current hours worked results
	document.getElementById("clockOutFri").innerHTML = clockOutTime;
	console.log(moment());
}
