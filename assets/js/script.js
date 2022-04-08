$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});

var time
setInterval(() => {
    time = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(time);
    renderTasks();
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
        if (hour > 10) {
            hourlyTaskArray[i].setAttribute("class", "custom-green");
        } else if (hour == 10) {
            hourlyTaskArray[i].setAttribute("class", "custom-red");
        } else {
            hourlyTaskArray[i].setAttribute("class", "custom-gray");
        }
    };
    render9AM();
    render10AM();
    render11AM();
    render12PM();
    render1PM();
    render2PM();
    render3PM();
    render4PM();
    render5PM();
}



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
        var newTask = hourlyTask9.value;
        alert("task successfully saved");
        localStorage.setItem("task9AM", newTask);
    }
});
btn10.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask10.value;
        alert("task successfully saved");
        localStorage.setItem("task10AM", newTask);
    }
});
btn11.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask11.value;
        alert("task successfully saved");
        localStorage.setItem("task11AM", newTask);
    }
});
btn12.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask12.value;
        alert("task successfully saved");
        localStorage.setItem("task12PM", newTask);
    }
});
btn1.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask1.value;
        alert("task successfully saved");
        localStorage.setItem("task1PM", newTask);
    }
});
btn2.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask2.value;
        alert("task successfully saved");
        localStorage.setItem("task2PM", newTask);
    }
});
btn3.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask3.value;
        alert("task successfully saved");
        localStorage.setItem("task3PM", newTask);
    }
});
btn4.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask4.value;
        alert("task successfully saved");
        localStorage.setItem("task4PM", newTask);
    }
});
btn5.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".btn")) {
        var newTask = hourlyTask5.value;
        alert("task successfully saved");
        localStorage.setItem("task5PM", newTask);
    }
});

function render9AM() {
    var savedTask = localStorage.getItem("task9AM");
    hourlyTask9.textContent = savedTask;
}
function render10AM() {
    var savedTask = localStorage.getItem("task10AM");
    hourlyTask10.textContent = savedTask;
}
function render11AM() {
    var savedTask = localStorage.getItem("task11AM");
    hourlyTask11.textContent = savedTask;
}
function render12PM() {
    var savedTask = localStorage.getItem("task12PM");
    hourlyTask12.textContent = savedTask;
}
function render1PM() {
    var savedTask = localStorage.getItem("task1PM");
    hourlyTask1.textContent = savedTask;
}
function render2PM() {
    var savedTask = localStorage.getItem("task2PM");
    hourlyTask2.textContent = savedTask;
}
function render3PM() {
    var savedTask = localStorage.getItem("task3PM");
    hourlyTask3.textContent = savedTask;
}
function render4PM() {
    var savedTask = localStorage.getItem("task4PM");
    hourlyTask4.textContent = savedTask;
}
function render5PM() {
    var savedTask = localStorage.getItem("task5PM");
    hourlyTask5.textContent = savedTask;
}
