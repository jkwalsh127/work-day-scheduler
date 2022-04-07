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

function renderTasks() {
    for (var i = 0; i < hourlyTaskArray.length; i++) {
        var hour = parseInt(hourArray[i]);
        if (hour > currentHourParse) {
            hourlyTaskArray[i].setAttribute("class", "custom-green");
        } else if (hour == currentHourParse) {
            hourlyTaskArray[i].setAttribute("class", "custom-red");
        } else {
            hourlyTaskArray[i].setAttribute("class", "custom-gray");
            console.log("custom gray");
        }
    };
}

renderTasks();



var btn9 = document.querySelector("#btn9");
var btn10 = document.querySelector("#btn10");
var btn11 = document.querySelector("#btn11");
var btn12 = document.querySelector("#btn12");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");

btn9.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[i].value;
        localStorage.setItem("task9AM", JSON.stringify(newTask));
    }
});
btn10.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[1].value;
        localStorage.setItem("task10AM", JSON.stringify(newTask));
    }
});
btn11.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[2].value;
        localStorage.setItem("task11AM", JSON.stringify(newTask));
    }
});
btn12.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[3].value;
        localStorage.setItem("task12AM", JSON.stringify(newTask));
    }
});
btn1.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[4].value;
        localStorage.setItem("task1PM", JSON.stringify(newTask));
    }
});
btn2.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[5].value;
        localStorage.setItem("task2PM", JSON.stringify(newTask));
    }
});
btn3.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[6].value;
        localStorage.setItem("task3PM", JSON.stringify(newTask));
    }
});
btn4.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[7].value;
        localStorage.setItem("task4PM", JSON.stringify(newTask));
    }
});
btn5.addEventListener("click", function() {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[8].value;
        localStorage.setItem("task5PM", JSON.stringify(newTask));
    }
});