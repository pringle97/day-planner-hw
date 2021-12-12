//using jquery to add btn function, adding txt to local storage
$(".btn").on("click", function () {
  var id = $(this).attr("id").split("-")[0]
  var plan = $("#" + id + "-txt").val()
  console.log(id, plan)
  localStorage.setItem(id, plan)
})

//adding current date variable to see date on page
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").text(currentDate)
var currentHour = moment().hours()
console.log(currentDate, currentHour)

//calling txt from local storage and adding classes
for (let i = 8; i < 19; i++) {
  var chose = localStorage.getItem(i)
  $("#" + i + "-txt").val(chose)
  if (i < currentHour) {
    $("#" + i + "-txt").addClass("past")
  }
  else if (i === currentHour) {
    $("#" + i + "-txt").addClass("present")
  }
  else {
    $("#" + i + "-txt").addClass("future")
  }
}