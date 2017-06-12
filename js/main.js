//

function calculateButton() {

  // this gets the value for the "hours planned on working this week" field
  let hoursThisWeek = parseInt(document.getElementById('hoursThisWeek').value);

  // current hours on friday morning
  let fridayMorning = parseInt(document.getElementById('fridayMorning').value);

  // ramaining minutes in decimal form
  let remainingDecimals = (document.getElementById('remainingDecimals').value);

  //convert decimal minutes into time format minutes rounded to the nearest whole number
  let roundedDecimal = Math.round(remainingDecimals * 60);

  //result for current hours worked
  let currentWorked = fridayMorning + " hours " + roundedDecimal + " minutes";

  // var min =
  //   if (roundedDecimal === 1) {
  //     "minute";
  //   } else {
  //     "minutes";
  //   }

  let remainingHours = (hoursThisWeek - fridayMorning) - 1;

  let remainingMinutes = (60 - roundedDecimal);

  let hoursLeftToWork = remainingHours + " hours " + remainingMinutes + " minutes";

  //this is to display the current hours worked results
  document.getElementById('currentWorked').innerHTML = currentWorked;

  //this is to display the remaining hours left results
  document.getElementById('hoursLeftToWork').innerHTML = hoursLeftToWork;

}
