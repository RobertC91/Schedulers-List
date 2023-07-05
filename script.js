// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// --------------------------------------------------------------------------------------------

// Displays time and sets the time interval.
let newTime = $("#currentDay");
function getCurrentDateTime() {
  today = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  newTime.text(today);
  return;
}
setInterval(function () {
  getCurrentDateTime();
}, 1000);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
//
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, textInput);
  });
});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
//
let currentTime = dayjs().hour();
console.log(currentTime);
function timeWizard() {
  $(".time-block").each(function () {
    let blockTime = parseInt($(this).attr("id"));
    if (blockTime < currentTime) {
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
timeWizard();
setInterval(timeWizard, 1000);
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
//

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
