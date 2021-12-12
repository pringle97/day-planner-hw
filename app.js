//using jquery to add btn function
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

