//
// change border color to teal when input is clicked

// const userInput = document.getElementById("userInput");
//   userInput.addEventListener("click", () => {
//     userInput.style.borderColor = "#15D1BC";
// });

// next

// var hoursWeek = document.getElementById('hoursWeek');


function calculateButton() {

  // current hours on friday morning
  let fridayMorning = parseInt(document.getElementById('fridayMorning').value);

  //minutes in decimal form
  let remainingDecimals = (document.getElementById('remainingDecimals').value);

  //convert decimal minutes into time format minutes
  let roundedDecimal = Math.round(remainingDecimals * 60);

  //result for current hours worked
  let currentWorked = fridayMorning + " hours and " + roundedDecimal + " minutes";


  //this is to display the current hours worked results in the correct field on page
  document.getElementById('currentWorked').innerHTML = currentWorked;




  let hoursThisWeek = parseInt(document.getElementById('hoursThisWeek').value);

  let remainingHours = (hoursThisWeek - fridayMorning) - 1;

  let remainingMinutes = (60 - roundedDecimal);

  let hoursLeftToWork = remainingHours + " hours and " + remainingMinutes + " minutes"

  document.getElementById('hoursLeftToWork').innerHTML = hoursLeftToWork;

}
