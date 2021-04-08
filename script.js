date = moment().format("MMMM Do YYYY");
console.log(date);

$("#currentDay").text(date);

$(document).ready(function () {
  // fucntions run once the document is ready

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log(event);
    // whenever there is
    // stop refresh from not working
    console.log("hello");

    let textAreaValue = $(this).siblings(".description").val();
    console.log(textAreaValue);
    // This referes to the element that registered the event

    let time = $(this).parent().attr("id");

    console.log(time);

    localStorage.setItem(time, textAreaValue);
  });

  for (let i = 9; i < 18; i++) {
    var id = "#hour-" + i;

    //   var id = `#hour-${i}`
    var textArea = $(id + " .description");
    textArea.val(localStorage.getItem(id));
  }
  //   local storage for each hour section

  console.log(timeOfUser);

  colourCodingTimeSlots();
  // get this function to run perodically
  setInterval(colourCodingTimeSlots, 60000);
});

var timeOfUser = moment().hour();

function colourCodingTimeSlots() {
  $(".time-block").each(function () {
    let timeBlock = $(this).attr("id").split("hour-")[1];
    if (timeBlock < timeOfUser) {
      $(this).addClass("past");
    } else if (timeBlock == timeOfUser) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log(timeBlock);
    // this and each is keeping track of where we are at in the function
  });
}
