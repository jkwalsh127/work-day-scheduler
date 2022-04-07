$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

});

function appendTasks() {

}

var time
setInterval(() => {
    time = moment().format("MMMM Do YYYY, HH:mm:ss");
    $("#currentDay").text(time);
}, 1000);

var currentHour = moment().format("k");
var currentHourParse = parseInt(currentHour);
console.log(currentHourParse);


var hourlyTask9 = document.querySelector("#formInput9")
var hourlyTask10 = document.querySelector("#formInput10")
var hourlyTask11 = document.querySelector("#formInput11")
var hourlyTask12 = document.querySelector("#formInput12")
var hourlyTask1 = document.querySelector("#formInput1")
var hourlyTask2 = document.querySelector("#formInput2")
var hourlyTask3 = document.querySelector("#formInput3")
var hourlyTask4 = document.querySelector("#formInput4")
var hourlyTask5 = document.querySelector("#formInput5")
var hourlyTaskArray = [hourlyTask9, hourlyTask10, hourlyTask11, hourlyTask12, hourlyTask1, hourlyTask2, hourlyTask3, hourlyTask4, hourlyTask5];

var hour9 = hourlyTask9.getAttribute("data-hour");
var hour10 = hourlyTask10.getAttribute("data-hour");
var hour11 = hourlyTask11.getAttribute("data-hour");
var hour12 = hourlyTask12.getAttribute("data-hour");
var hour1 = hourlyTask1.getAttribute("data-hour");
var hour2 = hourlyTask2.getAttribute("data-hour");
var hour3 = hourlyTask3.getAttribute("data-hour");
var hour4 = hourlyTask4.getAttribute("data-hour");
var hour5 = hourlyTask5.getAttribute("data-hour");
var hourArray = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];
console.log(hour9)

function renderTasks() {
    for (var i = 0; i < hourlyTaskArray.length; i++) {
        var hour = parseInt(hourArray[i]);
        console.log(hour);
        if (hour > currentHourParse) {
            hourlyTaskArray[i].setAttribute("class", "custom-green");
            console.log("display green")
        } else if (hour == currentHourParse) {
            console.log("display red")
            hourlyTaskArray[i].setAttribute("class", "custom-red");
        } else {
            console.log("display gray")
            hourlyTaskArray[i].setAttribute("class", "custom-gray");
        }
    };
}

renderTasks();