//
// change border color to teal when input is clicked

// const userInput = document.getElementById("userInput");
//   userInput.addEventListener("click", () => {
//     userInput.style.borderColor = "#15D1BC";
// });

// next

// var hoursWeek = document.getElementById('hoursWeek');


function calculateButton() {
  var fridayMorning = parseInt(document.getElementById('fridayMorning').value);
  var remainingDecimals = (document.getElementById('remainingDecimals').value);
  var roundedDecimal = Math.round(remainingDecimals * 60);

  let currentWorked = fridayMorning + " hours and " + roundedDecimal + " minutes";

  document.getElementById('currentWorked').innerHTML = currentWorked;


}
